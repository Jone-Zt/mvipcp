<!--#include file="../../Conn.asp"--><% GetUrl()
Response.charset = "gb2312"
Dim JiangDaShuai
	hmlist()
Function hmlist()
	
	jeNum2 = request("jeSelect2")
	jeNum1 = request("jeSelect1")
	jeSelect = array("","")
	If IsNum(jeNum1) And IsNum(jeNum2) Then
		jeSelect(0) = "and a.allmoney>"&jeNum1&" and allmoney<="&jeNum2
		jeSelect(1) = "and num*mul>"&jeNum1/2&" and num*mul<="&jeNum2/2
	End If
	
	ztSelect = array("","")
	Select Case request("ztSelect")
		Case "0"
			ztSelect(0) = "and a.schedule<100"
			ztSelect(1) = "and total>0"
		Case "1"
			ztSelect(0) = "and a.prostate in ('已生效','未生效')"
			ztSelect(1) = "And State<>9999"
		Case "2"
			ztSelect(0) = "and a.prostate='已中奖'"
			ztSelect(1) =  "and isWin>0"
		Case "3"
			ztSelect(0) = "and a.prostate='未中奖'"
			ztSelect(1) =  "and isWin=0"
		Case Else
			ztSelect(0) = ""
			ztSelect(1) =  ""
	End Select
	
	
	jdNum = request("jdSelect")
	jdSelect = array("","")
	If IsNum(jdNum) Then
		jdNum = Left(jdNum,1)*10
		jdSelect(0) = "and a.schedule>"&jdNum&" and schedule<="&jdNum+10
		jdSelect(1) = "and 100*(1-total/num)>"&jdNum&" and 100*(1-total/num)<="&jdNum+10
	End If
	
	
	bdSelect = array("","")
	Select Case request("bdSelect")
		Case "0"
			bdSelect(0) = "and a.isbaodi='1'"
			bdSelect(1) = "and bd>0"
		Case "1"
			bdSelect(0) = "and a.isbaodi='0'"
			bdSelect(1) = "and bd=0"
	End Select
	
	AddT = request("myqihao")
	AddTime = array("and DATEDIFF(D,a.addtime,GETDATE())<3","and DATEDIFF(D,datetime,GETDATE())<3")
	If IsNum(AddT) Then
		AddTime(0) = "and DATEDIFF(D,a.addtime,GETDATE())<"&AddT
		AddTime(1) = "and DATEDIFF(D,datetime,GETDATE())<"&AddT
	End If
	
	LottName = request("lotid")

	If LottName<>"" Then
		LottName = "and a.lotterytype='"&KR(unescape(LidToCn(LottName)))&"'"
	Else
		LottName = ""
	End If
	
	IsUserName = request("findstr")
	If IsUserName<>"" And 0 Then
		IsUserName = "and a.username like '%"&KR(unescape(IsUserName))&"%'"
	Else
		IsUserName = ""
	End If
	
	Page = request("Pageno")

	conn.Execute("CREATE TABLE #temp_hemai(id int null,lotteryName NVARCHAR(50) null,UserName NVARCHAR(50) null,allMoney MONEY NULL,zg INT NULL,sy int null,onemoney MONEY NULL,OverTime datetime null,AddTime datetime null,winMoney MONEY NULL,bd INT NULL,state int NULL,lotteryid nvarchar(50) null,jd int null)")
	
	conn.Execute("insert into #temp_hemai(id,lotteryName,UserName,allMoney,zg,sy,OverTime,winMoney,bd,state,lotteryid,onemoney,addtime,jd) select top(200)a.id,lotterytype,UserName,allMoney,anumber,anumber-hnumber,convert(varchar,a.addtime,23)+' '+convert(varchar,b.endtime,8) as overtime,wincost,baodinum,isOver,lotteryid,onemoney,a.addtime,CASE WHEN a.schedule<100 THEN 1 ELSE 0 END from KR_Buy a,KR_Lottery_Issue b WHERE ishm='1' and isreturn='0' "&IsUserName&" "&LottName&" "&AddTime(0)&" "&ztSelect(0)&" "&jeSelect(0)&" "&jdSelect(0)&" "&bdSelect(0)&" AND replace(replace(right(left(a.expect,10),3),',',''),'-','')=right(b.Lottery_Num,3) AND b.Lottery_Name=a.lotterytype order by addtime desc")
	
	if LotterySetting(44)="1" then
	If LottName = "and a.lotterytype='竞彩足球'" Or LottName="" Then conn.Execute("INSERT INTO #temp_hemai(id,lotteryName,UserName,allMoney,zg,sy,OverTime,winMoney,bd,state,lotteryid,onemoney,addtime) SELECT id,'竞彩足球',UserName,Num*Mul*2,Num*Mul*2,Total,OverTime,IsWin,bd,state,id,1,datetime FROM KR_Football_Buy WHERE hm=1 "&IsUserName&" "&AddTime(1)&" "&ztSelect(1)&" "&jeSelect(1)&" "&jdSelect(1)&" "&bdSelect(1)&" ")
	end if
	Set rs = server.createobject("ADODB.recordset")
	Sql = "select a.*,b.Record from #temp_hemai a,KR_User b WHERE b.UserName = a.UserName ORDER BY case when a.state>0 then 1 else 0 end,CASE WHEN OverTime<GETDATE() THEN 0 ELSE a.jd END DESC,a.AddTime desc"
		
	rs.open Sql,conn,1,2

	If rs.recordcount<1 Or rs.Eof Then
		JiangDaShuai = "[]"
		If request("action") = "hmlist" Then response.write(JiangDaShuai)
		Exit Function
	End If
	
	If Page = "" or Page<1 Then Page = 1
	Abc = Setting(20) 
	YeSu = Int((rs.recordcount/Abc+0.99999))
	If Int(Page)>Int(YeSu) Then Page = YeSu
	IsDq = (Abc*Page)-Abc

	If Int(IsDq)>Int((rs.recordcount-IsDq)) Then IsDq = rs.recordcount-(rs.recordcount-IsDq) 
	If Int(rs.recordcount-IsDq)<Int(Abc) Then Abc = rs.recordcount-IsDq 
	rs.move(IsDq)
    
	IsPage = "{"&"pagesize"&":"&""""&Setting(20)&""""&","&"pageindex"&":"&""""&Page&""""&","&"countpage"&":"&""""&YeSu&""""&","&"countrs"&":"&""""&rs.recordcount&""""&"}"
		
For xyz = 1 to Abc

	jd = Int(100-100*rs("sy")/rs("zg"))
	bd = Round(rs("bd")/rs("zg")*100,2)
	state = rs("state")
	If state = 0 Then
		If rs("OverTime")<Now() Then
			state = -1
		Else
			state = -2
		End If
	Else
		state = Rs("winMoney")
	End If
	
	tr = tr&"{id:'"&rs("id")&"',lotteryname:'"&rs("lotteryName")&"',lotteryid:'"&rs("lotteryid")&"',username:'"&Left(rs("username"),2)&"***',money:'"&rs("allMoney")&"',all:'"&rs("zg")&"',ssy:'"&rs("sy")&"',jdbfb:'"&jd&"',bdbfb:'"&bd&"',onemoney:'"&rs("onemoney")&"',state:'"&state&"',record:'"&rs("record")&"'},"
	
	rs.movenext		
Next	
	tr = "["&left(tr,len(tr)-1)&"]"
	JiangDaShuai = "["&tr&","&IsPage&"]"
	rs.close	
	Set rs = nothing
	If request("action") = "hmlist" Then response.write(JiangDaShuai)
End Function

Function IsNum(num)
	IsNum = False
	If Not(num="" Or IsNull(num)) Then 
		If IsNumeric(num) Then IsNum = True
	End If
End Function
%>