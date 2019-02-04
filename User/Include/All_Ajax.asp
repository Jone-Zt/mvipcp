<!--#include file="../../Conn.asp"-->
<!--#include file="../../Include/md5.asp"--><% 'GetUrl()
Response.charset = "gb2312"

if session("un")="" then
	response.write "NO"
	response.end()
end if

Select Case request("Type")
	Case "DingZ","VipProgramme","VipForm","VipList","Capital"
		DingZ()       '我的跟单、会员方案详情、会员消费报表、会员列表、会员帐变
	Case "GengD"
		GengD()       '跟单我的用户查询
	Case "SeverData"
		SeverData()   '跟单操作增、删、改
	Case "Detailed"
		Detailed()    '我的跟单和跟单我的历史记录
	Case "Recharge"
		Recharge()    '代理充值
	Case "locking"
		locking()     '会员锁定
	Case "Drawing"
		Drawing()     '兑换
	Case Else
		Response.End()
End Select

Function RsOperation(SqlRs,Page,Abc)
	Abcd = Abc
	If Page = "" or Page<1 Then Page = 1
	YeSu = Int((SqlRs.recordcount/Abc+0.99999))
	If Int(Page)>Int(YeSu) Then Page = YeSu
	IsDq = (Abc*Page)-Abc
	If Int(IsDq)>Int((SqlRs.recordcount-IsDq)) Then IsDq = SqlRs.recordcount-(SqlRs.recordcount-IsDq)
	If Int(SqlRs.recordcount-IsDq)<Int(Abc) Then Abc = SqlRs.recordcount-IsDq
	RsOperation = Array(YeSu,IsDq,Abc,Abcd)
End Function

Function PageList(Page,YeSu,Abcd,IsSize)
	PageList = "List:{Page:'"&Page&"',PageCount:'"&YeSu&"',Size:'"&Abcd&"',SizeCount:'"&IsSize&"'}"
End Function

Function WhereSelect()
	IsType = KR(request("IsType"))
	WhereLottery = ""
	WhereName = ""
	WhereTime = "AND addtime BETWEEN '"&Format_Time(now()-7,2)&" 00:00:00' AND '"&Format_Time(now(),2)&" 23:59:59'"
	If  IsType <> "" And IsType <> "undefined" Then
		IsType = split(IsType,",")
		If IsType(0) <> "" Then WhereName = " username='"&KR(unescape(IsType(0)))&"' AND"
		If IsType(1) <> "" And IsType(2) <> "" Then WhereTime = " AND addtime BETWEEN '"&IsType(1)&" 00:00:00' AND '"&IsType(2)&" 23:59:59'"
		If request("Type") = "Capital" Then
			If IsType(3) <> "" And IsType(3) <> "所有类型" Then
				If unescape(IsType(3)) = "投注游戏" Then
					WhereLottery = " AND left(follows,2) IN ('发起','参与')"
				Else
					WhereLottery = " AND left(follows,4)='"&unescape(IsType(3))&"'"
				End If
			End If
		Else
			If IsType(3) <> "" And IsType(3) <> "所有游戏" Then WhereLottery = " AND LotteryName='"&unescape(IsType(3))&"'"
		End If
	End If
	WhereSelect = Array(WhereName,WhereTime,WhereLottery)
End Function

Function YkType(IsValue)
	If IsValue = "未中奖" Then
		 IsValueOne = 2
	ElseIf IsValue = "已中奖" Or Not IsNumeric(IsValue) Then
		IsValueOne = 0
	Else
		IsValueOne = IsValue
	End If
	If Int(IsValueOne)<1 Then
		YkType = "<span class=red>"&IsValue&"</span>"
	Else
		YkType = "<span class=green>"&IsValue&"</span>"
	End If
End Function



Function locking()
	UserName = KR(unescape(request("Page")))
	conn.Execute("UPDATE KR_User Set islock=case islock when 0 then 1 else 0 end WHERE username='"&UserName&"'")
End Function

Function Recharge()
	Money = request("Page")
	UserName = KR(unescape(request("Name")))

	Set IsMoney = conn.Execute("SELECT UerMoney,regfrom FROM KR_User WHERE username in ('"&session("un")&"','"&UserName&"')")

	If IsMoney("UerMoney")<1 Or Int(IsMoney("UerMoney"))<Int(Money) Then
		Response.write("IsNo")
		Exit Function
	End If

	UerMoney1 = IsMoney("UerMoney")
	IsMoney.MoveNext

	If IsMoney("regfrom") <> "&"&session("un")&"&" Then
		Response.write("IsNo")
		Exit Function
	End If
	UerMoney2 = IsMoney("UerMoney")

	If Instr(IsMoney("regfrom"),session("un")) = 0 Then
		Response.write("No")
		Exit Function
	End If

	conn.Execute("update Kr_User Set UerMoney=UerMoney-"&Money&",Money=Money-"&Money&" WHERE username='"&session("un")&"'")
	conn.Execute("update Kr_User Set UerMoney=UerMoney+"&Money&",Money=Money+"&Money&" WHERE username='"&UserName&"'")

	IsValue1 = "('PAY"&Format_Time(now(),7)&"','"&session("un")&"','代理充值','兑换','False','进行中','"&Money&"','0','"&UerMoney1&"','"&UerMoney1-Money&"','已处理','代理充值:PAY"&Format_Time(now(),7)&"','0')"

	IsValue2 = ",('PAY"&Format_Time(now(),7)&"','"&UserName&"','代理充值','充值','False','进行中','0','"&Money&"','"&UerMoney2&"','"&UerMoney2+Money&"','已处理','代理充值:PAY"&Format_Time(now(),7)&"','0')"

	conn.Execute("INSERT INTO KR_Bank_Back (LotteryId,UserName,LotteryName,LotteryType,Nexus,Issuccess,back_money,back_money2,b_befor,b_after,back_state,follows,daili) VALUES "&IsValue1&IsValue2)

	Response.write("Yes")
	Set IsMoney = Nothing
End Function

Function DingZ()

	SelectType = request("Type")
	Page = request("Page")

	Select Case SelectType
	Case "DingZ"
		Sql = "Select a.*,b.Record from KR_Follow a inner join KR_User b on (a.username='"&session("un")&"' and b.username=a.flowuser) order by a.id desc"
	Case "VipProgramme"
		  is_Array = WhereSelect()
			If is_Array(0) <> "" Then
				selectName = KR(split(request("IsType"),",")(0))
				selectName = " regfrom like '%&"&session("un")&"&%' and username='"&selectName&"'"
			Else
				selectName =  " regfrom like '%&"&session("un")&"&%'"
			End If
			set rs = conn.execute("SELECT username FROM KR_User WHERE"&selectName)
			UserNamet = "(0=1"
			do while not rs.eof
				usernamet = usernamet&" or username='"&rs("username")&"'"
			rs.movenext
			loop
			rs.close
			set rs = nothing
			usernamet = usernamet&")"
			Sql = "SELECT LotteryName,LotteryID,allmoney,back_money,username,win_cost_get,Issuccess,AddTime FROM KR_Bank_Back WHERE "&usernamet&" AND (left(follows,2)='发起' OR left(follows,2)='参与')"&is_Array(1)&is_Array(2)&"order by AddTime desc"
	Case "VipForm"
		is_ArrayForm = WhereSelect()

		Sql = "select username from KR_User where "&is_ArrayForm(0)&" CHARINDEX('&"&session("un")&"&',regfrom)=1"

		CunKuanSum = 0
		QuKuanSum = 0
		XiaoFeiSum = 0
		FanDianSum = 0
		GetWinSum = 0
		ProfitSum = 0

	Case "VipList"
		WhereName = WhereSelect()(0)
		IsTypeX = ""
		if request("IsType") <> "" then
			IsTypeX = split(request("IsType"),",")(0)
		end if
		if IsTypeX = "" or IsTypeX = "undefined" then
			IsWhere = " CHARINDEX('&"&session("un")&"&',regfrom)=1"
			isshow = 1
		else
			IsWhere = " CHARINDEX('&"&session("un")&"&',regfrom)>0"
			isshow = 0
		end if
		If WhereName <> "" And  Page = "ture" Then
			WhereName = " regfrom like '%&"&KR(split(request("IsType"),",")(0))&"&%'"
			Page = 1
			IsWhere = ""
		ElseIf WhereName <> "" And Page = "1" Then
			WhereName = " AND username='"&KR(split(request("IsType"),",")(0))&"'"
		elseIf WhereName <> "" And Page > 1 Then
			WhereName = " regfrom like '%&"&KR(split(request("IsType"),",")(0))&"&%'"
			IsWhere = ""
		End If
		Sql = "select * from KR_User where"&IsWhere&WhereName&" order by addtime desc"
	Case "Capital"
		is_Array = WhereSelect()

		If is_Array(0) <> "" Then
			selectName = KR(split(request("IsType"),",")(0))
		Else
			selectName = session("un")
		End If

		set rs = conn.execute("SELECT username FROM KR_User WHERE regfrom like '%&"&selectName&"&%'")
		UserNamet = " (username='"&selectName&"'"
		do while not rs.eof
			usernamet = usernamet&" or username='"&rs("username")&"'"
		rs.movenext
		loop
		rs.close
		set rs = nothing
		usernamet = usernamet&")"

		Sql = "SELECT * FROM KR_Bank_Back WHERE "&usernamet&is_Array(1)&is_Array(2)&" order by id desc"
		IncomeSum = 0
		ExpenditureSum = 0
	Case Else
		Exit Function
	End Select

	Set SqlRs = Server.CreateObject("ADODB.RecordSet")

	SqlRs.Open Sql,conn,1,1
	If SqlRs.Eof Then
		response.write("NO")
		Exit Function
	End If
	If SelectType="Capital" Or SelectType="VipForm" Then
		Abc = 11
	Else
		Abc = 12
	End If
	is_Array = RsOperation(SqlRs,Page,Abc)
	SqlRs.move(is_Array(1))
	IsData = "{data:["

	For i = 1 To is_Array(2)

	Select Case SelectType
		Case "DingZ"
			If SqlRs("flowmoney") < 1 Then
				FlowMoney = SqlRs("flowbfb")&"%"
			Else
				FlowMoney = formatnumber(SqlRs("flowmoney"),2,-1)&"&nbsp;"&Setting(58)&""
			End If
			SumNumber = conn.Execute("select count(1) from KR_Follow where flowuser='"&SqlRs("flowuser")&"' and caizhong='"&SqlRs("caizhong")&"'")(0)
			IsData = IsData&"{Id:'"&SqlRs("id")&"',UserName:'"&SqlRs("flowuser")&"',Record:'"&SqlRs("Record")&"',LotteryType:'"&SqlRs("caizhong")&"',UseNum:'"&SumNumber&"人',FlowMoney:'"&FlowMoney&"',SchemeNum:'"&SqlRs("schemenum")&"份',FlowType:'"&SqlRs("flowtype")&"',FlowBfb:'"&SqlRs("flowbfb")&"',FlowMaxMoney:'"&SqlRs("flowmaxmoney")&"'},"
		Case "VipProgramme"
			IsData = IsData&"{UserName:'"&SqlRs("LotteryID")&"',Record:'"&SqlRs("username")&"',LotteryType:'"&formatnumber(SqlRs("allmoney"),2,-1)&"&nbsp;"&Setting(58)&"',UseNum:'"&formatnumber(SqlRs("back_money"),2,-1)&"&nbsp;"&Setting(58)&"',SchemeNum:'"&formatnumber(SqlRs("win_cost_get"),2,-1)&"&nbsp;"&Setting(58)&"',FlowType:'"&SqlRs("LotteryName")&"',FlowBfb:'"&SqlRs("AddTime")&"',FlowMaxMoney:'"&YkType(SqlRs("Issuccess"))&"'},"
		Case "VipList"
			SumNumber = conn.Execute("select count(1) from KR_User where regfrom like '%&"&SqlRs("username")&"&%'")(0)
			IsMidIstr = MID(SqlRs("regfrom"),2,len(SqlRs("regfrom")))
			IsData = IsData&"{isShow:'"&isshow&"',UserName:'"&MID(IsMidIstr,1,Instr(IsMidIstr,"&")-1)&"',Record:'"&YkType(formatnumber(SqlRs("UerMoney"),2,-1))&"/"&YkType(formatnumber(SqlRs("bonusc"),2,-1))&"',LotteryType:'"&SqlRs("logtime")&"',UseNum:'"&SqlRs("addtime")&"',SchemeNum:'"&Setting(66)&"',FlowType:'"&SqlRs("username")&"（"&YkType(SumNumber)&"）',FlowBfb:'"&Setting(65)&"',FlowMaxMoney:'"&SqlRs("islock")&"'},"
		Case "Capital"
			IsData = IsData&"{UserName:'"&SqlRs("addtime")&"',Record:'"&YkType(SqlRs("back_money2"))&" &nbsp;"&Setting(58)&"',LotteryType:'"&YkType(SqlRs("back_money"))&" &nbsp;"&Setting(58)&"',UseNum:'"&YkType(formatnumber(SqlRs("b_after"),2,-1))&" &nbsp;"&Setting(58)&"',SchemeNum:'"&SqlRs("LotteryID")&"',FlowType:'"&SqlRs("username")&"',FlowMoney:'"&left(SqlRs("follows"),4)&"',FlowMaxMoney:'2'},"

			IncomeSum = IncomeSum+Cdbl(SqlRs("back_money2"))
			If left(SqlRs("follows"),4) <> "系统派奖" Then
				ExpenditureSum = ExpenditureSum+SqlRs("back_money")
				If instr(SqlRs("follows"),"撤单")>0 OR instr(SqlRs("follows"),"停止追号")>0 Then
					ExpenditureSum = ExpenditureSum - SqlRs("back_money2")
				end if
			End If

		Case Else


			set rs = conn.execute("SELECT username FROM KR_User WHERE regfrom like '%&"&SqlRs("username")&"&%'")
			UserNamet = " (username='"&SqlRs("username")&"'"
			do while not rs.eof
				usernamet = usernamet&" or username='"&rs("username")&"'"
			rs.movenext
			loop
			rs.close
			set rs = nothing
			usernamet = usernamet&") "

			Set tongJi = conn.Execute("select lotteryType,back_money,back_money2,win_cost_get,follows,b_befor,b_after from KR_Bank_Back WHERE "&usernamet&is_ArrayForm(1)&" order by id asc")

			CunKuan = 0
			QuKuan = 0
			XiaoFei = 0
			FanHuan = 0
			FanDian = 0
			GetWin = 0
			Profit = 0

			ZengSong = 0
			KouKuan = 0

		    Do while Not tongJi.Eof

				If instr(tongJi("follows"),"在线充值")>0 OR instr(tongJi("follows"),"系统充值")>0 Then
					CunKuan  = CunKuan + Cdbl(tongJi("back_money2"))

				ElseIf instr(tongJi("follows"),"充值赠送")>0 Then
					ZengSong  = ZengSong + Cdbl(tongJi("back_money2"))

				ElseIf instr(tongJi("follows"),"系统扣除")>0 Then
					KouKuan  = KouKuan + Cdbl(tongJi("back_money"))

				ElseIf instr(tongJi("follows"),"兑换等级成功")>0 Then
					QuKuan  = QuKuan + Cdbl(tongJi("back_money"))
				ElseIf Instr("发起,参与",left(tongJi("follows"),2))>0 Then
					XiaoFei  = XiaoFei + Cdbl(tongJi("back_money"))
				ElseIf instr(tongJi("follows"),"撤单")>0 OR instr(tongJi("follows"),"停止追号")>0 Then
					FanHuan  = FanHuan + Cdbl(tongJi("back_money2"))
				ElseIf left(tongJi("follows"),4) = "系统返点" Then
					FanDian  = FanDian + Cdbl(tongJi("back_money2"))
				ElseIf left(tongJi("follows"),4) = "系统派奖" Then
					GetWin  = GetWin + Cdbl(tongJi("win_cost_get"))
				End If

				tongJi.MoveNext
			Loop

			tongJi.Close
			Set tongJi = Nothing

			Profit = formatnumber(GetWin+ZengSong-XiaoFei+FanHuan-KouKuan,2,-1)

			IsData = IsData&"{UserName:'"&SqlRs("username")&"',Record:'"&formatnumber(CunKuan,2,-1)&"&nbsp;"&Setting(58)&"',LotteryType:'"&formatnumber(QuKuan,2,-1)&"&nbsp;"&Setting(58)&"',UseNum:'"&XiaoFei-FanHuan&"&nbsp;"&Setting(58)&"',SchemeNum:'"&Cdbl(FanDian)&"&nbsp;"&Setting(58)&"',FlowBfb:'"&formatnumber(GetWin,2,-1)&"&nbsp;"&Setting(58)&"',FlowMaxMoney:'"&YkType(Profit)&"&nbsp;"&Setting(58)&"'},"

			CunKuanSum = CunKuanSum+CunKuan
			QuKuanSum = QuKuanSum+QuKuan
			XiaoFeiSum = XiaoFeiSum+(XiaoFei-FanHuan)
			FanDianSum = FanDianSum+FanDian
			GetWinSum = GetWinSum+GetWin
			ProfitSum = ProfitSum+Profit

	End Select

	SqlRs.MoveNext
	Next

	If SelectType = "VipForm" Then
		If is_ArrayForm(0) = "" Then
			IsData = IsData&"{FlowType:'<b>当前页总计</b>',UserName:'',Record:'"&formatnumber(CunKuanSum,2,-1)&"&nbsp;"&Setting(58)&"',LotteryType:'"&formatnumber(QuKuanSum,2,-1)&"&nbsp;"&Setting(58)&"',UseNum:'"&XiaoFeiSum&"&nbsp;"&Setting(58)&"',SchemeNum:'"&Cdbl(FanDianSum)&"&nbsp;"&Setting(58)&"',FlowBfb:'"&formatnumber(GetWinSum,2,-1)&"&nbsp;"&Setting(58)&"',FlowMaxMoney:'"&YkType(ProfitSum)&"&nbsp;"&Setting(58)&"'},"
		End If
	End If
	If SelectType = "Capital" Then
				IsData = IsData&"{UserName:'收入："&YkType(IncomeSum)&" &nbsp;"&Setting(58)&"',Record:'支出："&YkType(ExpenditureSum)&" &nbsp;"&Setting(58)&"',LotteryType:'',UseNum:'',SchemeNum:'',FlowType:'<b>当前页总计</b>',FlowMoney:'',FlowMaxMoney:''},"
	End If
	IsData = left(IsData,len(IsData)-1)&"],"&PageList(Page,is_Array(0),is_Array(3),SqlRs.recordcount)&"}"
	response.write(IsData)

	SqlRs.close
	Set SqlRs = Nothing
End Function

Function GengD()
	Set SqlRs = Server.CreateObject("ADODB.RecordSet")
	SqlRs.Open "Select * from KR_Follow where flowuser='"&session("un")&"' order by id desc",conn,1,1
	If SqlRs.Eof Then
		response.write("NO")
		Exit Function
	End If

	Page = request("Page")
	Abc = 12
	is_Array = RsOperation(SqlRs,Page,Abc)
	SqlRs.move(is_Array(1))
	IsData = "{data:["

	For i = 1 To is_Array(2)
		If SqlRs("flowmoney") < 1 Then
			FlowMoney = SqlRs("flowbfb")&"%"
		Else
			FlowMoney = SqlRs("flowmoney")&"&nbsp;"&Setting(58)&""
		End If
		Set SumNumber = conn.Execute("select count(1) from KR_Follow where flowuser='"&SqlRs("flowuser")&"' and caizhong='"&SqlRs("caizhong")&"'")
		Set SumMoney = conn.Execute("select sum(flowmoney) from KR_Follow where username='"&SqlRs("username")&"' and flowuser='"&SqlRs("flowuser")&"' and caizhong='"&SqlRs("caizhong")&"'")
		IsData = IsData&"{UserName:'"&SqlRs("username")&"',Record:'"&SqlRs("caizhong")&"',LotteryType:'"&SumNumber(0)&"人',UseNum:'"&formatnumber(SumMoney(0),2,-1)&"&nbsp;"&Setting(58)&"',SchemeNum:'"&FlowMoney&"'},"
	SqlRs.MoveNext
	Next

	IsData = left(IsData,len(IsData)-1)&"],"&PageList(Page,is_Array(0),is_Array(3),SqlRs.recordcount)&"}"
	response.write(IsData)

	SqlRs.close
	Set SqlRs = Nothing
End Function

Function Detailed()
	Page = request("Page")
	IsName = split(unescape(request("Name")),",")
	IsType = request("IsType")
	Set Rs = Server.CreateObject("ADODB.RecordSet")
	If IsType = "MyDetailed" Then
		Sql = "select Expect,LotteryName,back_money,addtime,LotteryId,Issuccess from KR_Bank_Back where state='7' And typename='"&KR(IsName(0))&"' And UserName='"&session("un")&"' And LotteryName='"&KR(IsName(1))&"' order by id desc"
	ElseIf IsType = "FollowMe" Then
		Sql = "select Expect,LotteryName,back_money,addtime,LotteryId,Issuccess from KR_Bank_Back where state='7' And typename='"&session("un")&"' And UserName='"&IsName(0)&"' And LotteryName='"&KR(IsName(1))&"' order by id desc"
	Else
		Exit Function
	End If
	Rs.Open Sql,conn,1,1
	If Rs.Eof Then
		response.write("NO")
		Exit Function
	End If
	Abc = 10
	is_Array = RsOperation(Rs,Page,Abc)
	Rs.move(is_Array(1))
	IsData = "{data:["
	For i = 1 To is_Array(2)
		IsData = IsData&"{FlowType:'"&IsName(0)&"',UserName:'"&Rs("Expect")&"',Record:'"&Rs("LotteryName")&"',LotteryType:'"&formatnumber(Rs("back_money"),2,-1)&"&nbsp;"&Setting(58)&"',UseNum:'"&Rs("addtime")&"',SchemeNum:'"&Rs("LotteryId")&"',FlowMoney:'"&YkType(Rs("Issuccess"))&"'},"
		Rs.MoveNext
	Next
	IsData = left(IsData,len(IsData)-1)&"],"&PageList(Page,is_Array(0),is_Array(3),Rs.recordcount)&"}"
	response.write(IsData)
	Rs.close
	Set Rs = Nothing
End Function

Function SeverData()

    If request("FormData") = "" Or request("ProType") = "" Then Exit Function
	FormData = KR(request("FormData"))
	If InStr(FormData,",")<>0 Then IsData = split(FormData,",")

	IsType = unescape(request("ProType"))
	If IsType = "创建" Or IsType = "修改" Then
		If session("un") = IsData(0) Then
			Response.write("NoIs")
			Exit Function
		End If
		If IsData(8)<>"" Then SetSelect = "And id<>'"&IsData(8)&"'" Else SetSelect = ""
		Set RsOne = conn.Execute("select username from KR_User where username='"&KR(IsData(0))&"'")
		Set RsTwo = conn.Execute("select count(1) from KR_Follow where flowuser='"&KR(IsData(0))&"' And username='"&session("un")&"' And caizhong='"&KR(IsData(1))&"'"&SetSelect)
		IsClose = "false"
		If RsOne.Eof Then
			IsClose = "No"
		ElseIf RsTwo(0)>0 Then
			IsClose = "IsNo"
		End If
		Set RsOne = Nothing
		Set RsTwo = Nothing
		If IsClose<>"false" Then
			response.write(IsClose)
			Exit Function
		End If
	End If

	Select Case IsType
		Case "创建"
			Sql = "insert into KR_Follow (username,flowuser,caizhong,usenum,flowtype,flowmoney,flowbfb,flowmaxmoney,schemenum,lost)values('"&session("un")&"','"&KR(IsData(0))&"','"&KR(IsData(1))&"','"&KR(IsData(2))&"','"&KR(IsData(3))&"','"&KR(IsData(4))&"','"&KR(IsData(5))&"','"&KR(IsData(6))&"','"&KR(IsData(7))&"','"&KR(IsData(7))&"')"
		Case "修改"
			Sql = "update KR_Follow set flowuser='"&KR(IsData(0))&"',caizhong='"&KR(IsData(1))&"',usenum='"&KR(IsData(2))&"',flowtype='"&KR(IsData(3))&"',flowmoney='"&KR(IsData(4))&"',flowbfb='"&KR(IsData(5))&"',flowmaxmoney='"&KR(IsData(6))&"',schemenum='"&KR(IsData(7))&"' where id='"&KR(IsData(8))&"'"
		Case "删除"
			Sql = "delete from KR_Follow where id='"&FormData&"'"
	End Select

	conn.Execute(Sql)
	response.write("Yes")

End Function
%>
