<!--#include file="../Conn.asp"-->
<!--#include file="../Include/md5.asp"--> <%

'***************************************
'                库文件函数说明 ！
				
'Function LoadingDrawing()   --> 会员兑换
'Function GenDan()           --> 会员跟单

'***************************************

Function LoadingDrawing()

	If Format_Time(now(),9)<Format_Time(Setting(36),9) Or Format_Time(now(),9)>Format_Time(Setting(37),9) Then
		TiShi = "<li><b class='red'>对不起,请在我们指定的时间兑换，兑换时间："&Setting(36)&"至"&Setting(37)&":点:</b></li>"
		Exit Function
	End If
	
	'DayNum = Int(conn.Execute("select count(1) from KR_Bank_Back where username='"&session("un")&"' and (charindex('等级',follows)>0 Or charindex('兑换等级',follows)>0) And convert(char,addtime,112)=convert(char,getdate(),112)")(0))


adddate=cdate(date())
set rs_n=server.createobject("adodb.recordset")
sqltext1="select count(id)  from KR_Bank_Back  where LotteryName='奖金兑换' and  username='"&session("un")&"' and (addtime between '"&addDate&"' and '"&addDate&" 23:59:59') "

rs_n.open sqltext1,conn,1,1
if not rs_n.eof then
bank_n=int(rs_n(0))
bank_m=Setting(33)-bank_n
end if
if bank_m<0 then bank_m=0
rs_n.close
set rs_n=nothing


	If Int(Setting(33))>0 Then												'今天兑换次数
		If bank_m>=Int(Setting(33)) Then
			TiShi = "<li><b class='red'>对不起,您今天的兑换次数已用完，请明天再来兑换！</b></li>"
			Exit Function
		End If
	End If
	
	Set Rs = conn.Execute("select * from KR_User where username='"&session("un")&"'")
	UerMoney = Rs("UerMoney")
	
	If FromIsNull(Rs("bank_bank")) Or FromIsNull(Rs("bank_area")) Or FromIsNull(Rs("bank_name")) Or FromIsNull(Rs("bank_num")) Then 
		TiShi = TiShi&"<li><b class='red'>请您绑定你的银行卡！</b></li>"
	End If 
	
	If Rs("userpass") = Rs("userpass1") Or FromIsNull(Rs("userpass1")) Or FromIsNull(Rs("userpass1")) Then 
		TiShi = TiShi&"<li><b class='red'>请您设置您的兑换密码，登录密码和兑换密码不能一致！</b></li>"
	End If  
	
	If TiShi = "" Then
		If Rs("lock") <> "0" Then TiShi = "<li><b class='red'>对不起,您的账户已被冻结，不能兑换！</b></li>"  
 	End If
	
	If TiShi<>"" Then 
		Rs.Close
		Set Rs = Nothing
		Exit Function			
	End If
	Rs.Close

	InMoney = 0
	BeginTime = now()
	
	Sql = "select top(5) back_money2,addtime from KR_Bank_Back where UserName='"&session("un")&"' And charindex('充值',follows)>0 And charindex('赠送',follows)=0 order by addtime desc" 
	Set Rs = conn.Execute(Sql)

	Do While Not Rs.Eof
		InMoney = InMoney+Clng(Rs("back_money2")) '最近五次的总充值
		BeginTime = Rs("addtime")
		Rs.MoveNext
	Loop
	Rs.Close

	Sql = "select sum(back_money) from KR_Bank_Back where username='"&session("un")&"' and left(follows,2) in ('发起','参与') and convert(char,addtime,112) BETWEEN "&Format_Time(BeginTime,6)&" AND convert(char,getdate(),112)" 
	Set Rs = conn.Execute(Sql)
	If Not Rs.Eof And Not isNull(Rs(0)) And Not isNull(Rs) Then
		OutMoney = Clng(Rs(0))
	Else 
		OutMoney = 0
	End If
	Rs.Close
	
	Sql = "select sum(back_money2) from KR_Bank_Back where username='"&session("un")&"' and charindex('撤单',follows)>0 and charindex('停止追号',follows)>0 and convert(char,addtime,112) BETWEEN "&Format_Time(BeginTime,6)&" AND convert(char,getdate(),112)" 
	Set Rs = conn.Execute(Sql)
	If Not Rs.Eof And Not isNull(Rs) And Not isNull(Rs(0)) Then
		OutMoneya = Clng(Rs(0))
	Else
		OutMoneya = 0
	End If
	Rs.Close
	
	OutMoney = OutMoney-OutMoneya               	'最近倒数第五次充值的时间到现在的总消费
	XiaoFeiBfb = Clng(OutMoney/InMoney*100)			'五次充值的消费百分比
											
	If XiaoFeiBfb<Clng(Setting(24)) Then
		TiShi = "<li><b class='red'>至最近充值到今天，你的消费额度未达到最近充值的（"&Setting(24)&"%），不能兑换。</b></li>"
	End If 

	Set Rs = Nothing
End Function

Function GenDan()
	IsName = unescape(request("LottName"))
	Set Rs = conn.Execute("select top(1)* from KR_Buy where ishm='1' And username='"&session("un")&"' And lotterytype='"&IsName&"' order by addtime desc")
	If Rs.Eof Then Exit Function
	
	anumber = Cint(Rs("anumber"))
	hnumber = Cint(Rs("hnumber")) 
	OneMoney = Cint(Rs("onemoney")) 
	hnumberSum = hnumber
	IsBreak = "false"
	
	If anumber-hnumber<1 Then Exit Function                                                          '如果剩余份数小于1，则退出跟单
	
	Set Rs1 = server.createobject("adodb.recordset")
	Rs1.open "select a.*,b.uermoney from KR_Follow a inner join KR_User b on (b.username=a.username) WHERE a.flowuser='"&session("un")&"' And a.caizhong='"&IsName&"'",conn,1,1 
	
	If Rs1.Eof Then Exit Function                                                                    '如果没有跟单的用户，则退出跟单
	
	Do While Not Rs1.Eof
		lost =  Rs1("lost")
		if Rs1("newdatetime")<date() Then lost = Rs1("schemenum")

		If Rs1("flowtype") = "1" Then
			Buy = anumber*OneMoney*(Cint(Rs1("flowbfb"))/100)
			Maxmoney = Cint(Rs1("flowmaxmoney"))
			If Buy>Maxmoney Then Buy = Maxmoney                                                       '按方案比例跟单的用户如果大于设置跟单的最大彩豆，则投注的彩豆就为最大彩豆
		Else
			Buy = Rs1("flowmoney")
		End If
		

		If Buy<OneMoney Then Buy = OneMoney
		
		If int(Rs1("uermoney"))>Int(Buy) And (lost>0 Or Int(Rs1("schemenum"))=0) And Buy>=OneMoney Then  
		    											'判断账户彩豆够不够这次跟单的彩豆,判断是否超过每期跟单限制方案个数,判断跟单的彩豆至少够投注一份，不符合3条件则跳过这个用户的跟单	
			IsFen = Int(Buy/OneMoney) 
			hnumberSum = hnumberSum+IsFen
			BuyMoney = IsFen*OneMoney
			
			If hnumberSum >= anumber Then                                                              '判断跟单的份数是否大于还剩的份数，大于则把剩下的份数都投注了，且退出跟单循环
				IsFen = anumber-(hnumberSum-IsFen)
				BuyMoney = IsFen*OneMoney                                                              '算出投注全部剩余份数所需的钱
				hnumberSum = anumber
				IsBreak = "ture"
			End If  
			
			conn.Execute("update KR_User set uermoney=uermoney-"&BuyMoney&",money=money-"&BuyMoney&" where username = '"&Rs1("username")&"'")
			conn.Execute("update KR_Buy set hnumber=hnumber+"&IsFen&",schedule='"&Formatnumber(hnumberSum/anumber*100,2,-1,-1,0)&"',allperson=allperson+1 where lotteryid='"&Rs("lotteryid")&"'")
			If Rs1("schemenum")>0 Then conn.Execute("UPDATE KR_Follow SET lost="&(lost-1)&",newdatetime=GETDATE() WHERE id ="&Rs1("Id"))
			conn.Execute("insert into KR_Bank_Back (RebateID,LotteryID,UserName,LotteryName,LotteryType,Expect,nexus,hnumber,anumber,Allmoney,Mainpaymoney,back_money,b_befor,b_after,follows,state,typename) values ('1','"&Rs("lotteryid")&"','"&Rs1("username")&"','"&Rs("lotterytype")&"','"&Rs("protype")&"','"&Rs("Expect")&"','True','"&IsFen&"','"&anumber&"','"&anumber*OneMoney&"','"&BuyMoney&"','"&BuyMoney&"','"&Rs1("uermoney")&"','"&Rs1("uermoney")-BuyMoney&"','参与合玩:"&Rs("lotterytype")&Rs("lotteryid")&"','7','"&session("un")&"')")
			If IsBreak = "ture" Then Exit Do 
			
		End If
	Rs1.MoveNext
	Loop
	Rs.Close
	Set Rs = Nothing
	Rs1.Close
	Set Rs1 = Nothing	
End Function
%>