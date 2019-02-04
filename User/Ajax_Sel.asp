<% Response.CodePage=936%>
<% Response.Charset="gb2312" %>
<!--#include file="../Conn.asp"-->
<!--#include file="../Trade/Include/KR.CommonCls.asp"--><xml><%if session("un") = "" then%><err type="-1" /><%else%><err type='1'/><%
action=request("action")
select case action
case "tzlist"  call tzlist()
case "Accountlist"  call Accountlist()
case "zjlist"  call zjlist()
case "zjmxlist"  call zjmxlist()
case "mxlist"  call mxlist()
case "gclist"  call gclist()
case "jflist"  call jflist()
case "Pays"  call Pays()
case "Drawals"  call Drawals()
case "Log"  call Log()
case else
call tzlist()
end select

Sub Accountlist()
if KR(request("zj"))<>"" then
follows="and win_cost_get>'0'"
else
follows=""
end if
set rs=server.createobject("adodb.recordset")  
Sql = "select * from KR_Bank_Back where UserName='"&session("un")&"' "&follows&" and (follows like '%发起%' or follows like '%参与%') order by id desc"
rs.open sql,conn,1,3 	
total=rs.recordcount 
rs.PageSize = 12
if rs.EOF then     
else
if Not IsEmpty(Page) then
Page = CInt(Page)
if Page > rs.PageCount then
rs.AbsolutePage = rs.PageCount
elseif Page <= 0 then
Page = 1
else
rs.AbsolutePage = Page 
end if
End if
Page = rs.AbsolutePage 
%><page pagesize='<%=Setting(19)%>' pageindex='<%=Page%>' countpage='<%=rs.pagecount%>' countrs='<%=rs.recordcount%>'/><%
For x = 1 to rs.PageSize
if rs.EOF then     
Exit For 
end if
i=i+1
usermoney=Formatnumber(rs("back_money"),2,-1,-1,0)
allmoney=Formatnumber(rs("allmoney"),2,-1,-1,0)
wincost=Formatnumber(rs("win_cost_get"),2,-1,-1,0)
follows=left(rs("follows"),4)
Lotterytype=rs("LotteryName")
if Lotterytype="重庆时时彩" then
Lotteryid="Ssc"
elseif Lotterytype="江西时时彩" then
Lotteryid="JxSsc"
elseif Lotterytype="天津时时彩" then
Lotteryid="TjSsc"
elseif Lotterytype="新疆时时彩" then
Lotteryid="XjSsc"
elseif Lotterytype="黑龙江时时彩" then
Lotteryid="HljSsc"
elseif Lotterytype="江西11选5" then
Lotteryid="Syxw"
elseif Lotterytype="重庆11选5" then
Lotteryid="CqSyxw"
elseif Lotterytype="广东11选5" then
Lotteryid="GdSyxw"
elseif Lotterytype="安徽11选5" then
Lotteryid="AhSyxw"
elseif Lotterytype="江苏11选5" then
Lotteryid="JsSyxw"
elseif lotterytype="上海11选5" then
Lotteryid="ShSyxw"
elseif lotterytype="辽宁11选5" then
Lotteryid="LlSyxw"
elseif Lotterytype="浙江11选5" then
Lotteryid="ZjSyxw"
elseif Lotterytype="福建11选5" then
Lotteryid="FjSyxw"
elseif Lotterytype="黑龙江11选5" then
Lotteryid="HljSyxw"
elseif Lotterytype="河北11选5" then
Lotteryid="HebSyxw"
elseif Lotterytype="11运夺金" then
Lotteryid="Syydj"
elseif Lotterytype="时时乐" then
Lotteryid="Ssl"
elseif Lotterytype="广东快乐十分" then
Lotteryid="GdKlsf"
elseif Lotterytype="湖南快乐十分" then
Lotteryid="HnKlsf"
elseif Lotterytype="江苏快3" then
Lotteryid="JsKs"
elseif Lotterytype="安徽快3" then
Lotteryid="AhKs"
elseif Lotterytype="吉林快3" then
Lotteryid="JlKs"
elseif Lotterytype="福建快3" then
Lotteryid="FjKs"
elseif Lotterytype="内蒙快3" then
Lotteryid="NmKs"
elseif Lotterytype="广西快3" then
Lotteryid="GxKs"
elseif Lotterytype="胜负彩" then
Lotteryid="Sfc"
elseif Lotterytype="4场进球" then
Lotteryid="Jq4"
elseif Lotterytype="任选九场" then
Lotteryid="Rxjc"
elseif Lotterytype="6场半全场" then
Lotteryid="Zc6"
elseif Lotterytype="双色球" then
Lotteryid="Ssq"
elseif Lotterytype="福彩3D" then
Lotteryid="Sd"
elseif Lotterytype="七乐彩" then
Lotteryid="Qlc"
elseif Lotterytype="15选5" then
Lotteryid="Swxw"
elseif Lotterytype="大乐透" then
Lotteryid="Dlt"
elseif Lotterytype="排列三" then
Lotteryid="Pls"
elseif Lotterytype="排列五" then
Lotteryid="Plw"
elseif Lotterytype="七星彩" then
Lotteryid="Qxc"
elseif Lotterytype="22选5" then
Lotteryid="Eexw"
elseif Lotterytype="竟彩足球" then
Lotteryid="Jczq"
elseif Lotterytype="竟彩篮球" then
Lotteryid="Jclq"
elseif Lotterytype="北京单场" then
Lotteryid="Bjdc"
elseif lotterytype="辽宁快乐12" then
Lotteryid="LlKlse"
elseif lotterytype="浙江快乐12" then
Lotteryid="ZjKlse"
elseif lotterytype="四川快乐12" then
Lotteryid="ScKlse"
end if
%><row lotname='<%=Lotterytype%>' pid='<%=rs("lotteryid")%>' Lotteryid='<%=Lotteryid%>' cid='<%=right(rs("lotteryid"),6)%>' schemeuser='<%=rs("UserName")%>' allmoney='<%=allmoney%>' usermoney='<%=usermoney%>' jj='<%=wincost%>' xx='<%=follows%>' dt='<%=Format_Time(rs("AddTime"),1)%>' /><%
rs.movenext
next
end if
rs.close
set rs=nothing
End Sub

Sub tzlist()
if lotid<>"" then
lotterytype1="and lotteryname='"&Lottery_Name&"'"
else
lotterytype1=""
end if
beginday=KR(request("beginday"))
if beginday<>"" then
addtime1="and addtime >='"&beginday& "'"
else
addtime1=""
end if
Page=KR(request("Page"))
pagesize=KR(request("pagesize"))
set rs=server.createobject("adodb.recordset")
Sql = "select top("&request("tnumber")&") * from KR_Bank_Back where UserName='"&session("un")&"' and (follows like '%发起%' or follows like '%参与%') "&lotterytype1&" "&addtime1&" order by id desc"
rs.open sql,conn,1,3 	
total=rs.recordcount 
rs.PageSize = request("tnumber")
if rs.EOF then     
else
if Not IsEmpty(Page) then
Page = CInt(Page)
if Page > rs.PageCount then
rs.AbsolutePage = rs.PageCount
elseif Page <= 0 then
Page = 1
else
rs.AbsolutePage = Page 
end if
End if
Page = rs.AbsolutePage 
%><page pagesize='<%=Setting(19)%>' pageindex='<%=Page%>' countpage='<%=rs.pagecount%>' countrs='<%=rs.recordcount%>'/><%
For x = 1 to rs.PageSize
if rs.EOF then     
Exit For 
end if
i=i+1
usermoney=Formatnumber(rs("back_money"),2,-1,-1,0)
allmoney=Formatnumber(rs("allmoney"),2,-1,-1,0)
wincost=Formatnumber(rs("win_cost_get"),2,-1,-1,0)
follows=left(rs("follows"),4)
Lotterytype=rs("LotteryName")
qihao=split(rs("expect"),",")
qihao1=ubound(qihao)
if qihao1>0 then
expect=qihao(0)&"-"&qihao(qihao1)
else
expect=rs("expect")
end if
if Lotterytype="重庆时时彩" then
Lotteryid="Ssc"
elseif Lotterytype="江西时时彩" then
Lotteryid="JxSsc"
elseif Lotterytype="天津时时彩" then
Lotteryid="TjSsc"
elseif Lotterytype="新疆时时彩" then
Lotteryid="XjSsc"
elseif Lotterytype="黑龙江时时彩" then
Lotteryid="HljSsc"
elseif Lotterytype="江西11选5" then
Lotteryid="Syxw"
elseif Lotterytype="重庆11选5" then
Lotteryid="CqSyxw"
elseif Lotterytype="广东11选5" then
Lotteryid="GdSyxw"
elseif Lotterytype="安徽11选5" then
Lotteryid="AhSyxw"
elseif Lotterytype="江苏11选5" then
Lotteryid="JsSyxw"
elseif lotterytype="上海11选5" then
Lotteryid="ShSyxw"
elseif lotterytype="辽宁11选5" then
Lotteryid="LlSyxw"
elseif Lotterytype="浙江11选5" then
Lotteryid="ZjSyxw"
elseif Lotterytype="福建11选5" then
Lotteryid="FjSyxw"
elseif Lotterytype="黑龙江11选5" then
Lotteryid="HljSyxw"
elseif Lotterytype="河北11选5" then
Lotteryid="HebSyxw"
elseif Lotterytype="11运夺金" then
Lotteryid="Syydj"
elseif Lotterytype="时时乐" then
Lotteryid="Ssl"
elseif Lotterytype="广东快乐十分" then
Lotteryid="GdKlsf"
elseif Lotterytype="湖南快乐十分" then
Lotteryid="HnKlsf"
elseif Lotterytype="江苏快3" then
Lotteryid="JsKs"
elseif Lotterytype="安徽快3" then
Lotteryid="AhKs"
elseif Lotterytype="吉林快3" then
Lotteryid="JlKs"
elseif Lotterytype="福建快3" then
Lotteryid="FjKs"
elseif Lotterytype="内蒙快3" then
Lotteryid="NmKs"
elseif Lotterytype="广西快3" then
Lotteryid="GxKs"
elseif Lotterytype="胜负彩" then
Lotteryid="Sfc"
elseif Lotterytype="4场进球" then
Lotteryid="Jq4"
elseif Lotterytype="任选九场" then
Lotteryid="Rxjc"
elseif Lotterytype="6场半全场" then
Lotteryid="Zc6"
elseif Lotterytype="双色球" then
Lotteryid="Ssq"
elseif Lotterytype="福彩3D" then
Lotteryid="Sd"
elseif Lotterytype="七乐彩" then
Lotteryid="Qlc"
elseif Lotterytype="15选5" then
Lotteryid="Swxw"
elseif Lotterytype="大乐透" then
Lotteryid="Dlt"
elseif Lotterytype="排列三" then
Lotteryid="Pls"
elseif Lotterytype="排列五" then
Lotteryid="Plw"
elseif Lotterytype="七星彩" then
Lotteryid="Qxc"
elseif Lotterytype="22选5" then
Lotteryid="Eexw"
elseif Lotterytype="竟彩足球" then
Lotteryid="Jczq"
elseif Lotterytype="竟彩篮球" then
Lotteryid="Jclq"
elseif Lotterytype="北京单场" then
Lotteryid="Bjdc"
elseif lotterytype="辽宁快乐12" then
Lotteryid="LlKlse"
elseif lotterytype="浙江快乐12" then
Lotteryid="ZjKlse"
elseif lotterytype="四川快乐12" then
Lotteryid="ScKlse"
end if
zt=left(rs("follows"),4)
%><row lotname='<%=Lotterytype%>' pid='<%=rs("lotteryid")%>' codes='<%=codes%>' Lotteryid='<%=Lotteryid%>' cid='<%=right(rs("lotteryid"),6)%>' expect='<%=expect%>' allmoney='<%=allmoney%>' usermoney='<%=usermoney%>' jj='<%=wincost%>' xx='<%=zt%>' i='<%=i%>' dt='<%=Format_Time(rs("AddTime"),1)%>' prostate='<%=rs("Issuccess")%>' /><%
rs.movenext
next
end if
rs.close
set rs=nothing
End Sub

Sub zjlist()
if lotid<>"" then
lotterytype1="and lotteryname='"&Lottery_Name&"'"
else
lotterytype1=""
end if
beginday=KR(request("beginday"))
if beginday<>"" then
addtime1="and addtime >='"&beginday& "'"
else
addtime1=""
end if
Page=KR(request("Page"))
pagesize=KR(request("pagesize"))
set rs=server.createobject("adodb.recordset")
Sql = "select * from KR_Bank_Back where UserName='"&session("un")&"' and win_cost_get>'0' and follows like '%系统派奖%' "&lotterytype1&" "&addtime1&" order by id desc"
rs.open sql,conn,1,3 	
total=rs.recordcount 
rs.PageSize = Setting(19)
if rs.EOF then     
else
if Not IsEmpty(Page) then
Page = CInt(Page)
if Page > rs.PageCount then
rs.AbsolutePage = rs.PageCount
elseif Page <= 0 then
Page = 1
else
rs.AbsolutePage = Page 
end if
End if
Page = rs.AbsolutePage 
%><page pagesize='<%=Setting(19)%>' pageindex='<%=Page%>' countpage='<%=rs.pagecount%>' countrs='<%=rs.recordcount%>'/><%
For x = 1 to rs.PageSize
if rs.EOF then     
Exit For 
end if
i=i+1
usermoney=Formatnumber(rs("back_money"),2,-1,-1,0)
allmoney=Formatnumber(rs("allmoney"),2,-1,-1,0)
wincost=Formatnumber(rs("win_cost_get"),2,-1,-1,0)
follows=left(rs("follows"),4)
Lotterytype=rs("LotteryName")
qihao=split(rs("expect"),",")
qihao1=ubound(qihao)
if qihao1>0 then
expect=qihao(0)&"-"&qihao(qihao1)
else
expect=rs("expect")
end if
if Lotterytype="重庆时时彩" then
Lotteryid="Ssc"
elseif Lotterytype="江西时时彩" then
Lotteryid="JxSsc"
elseif Lotterytype="天津时时彩" then
Lotteryid="TjSsc"
elseif Lotterytype="新疆时时彩" then
Lotteryid="XjSsc"
elseif Lotterytype="黑龙江时时彩" then
Lotteryid="HljSsc"
elseif Lotterytype="江西11选5" then
Lotteryid="Syxw"
elseif Lotterytype="重庆11选5" then
Lotteryid="CqSyxw"
elseif Lotterytype="广东11选5" then
Lotteryid="GdSyxw"
elseif Lotterytype="安徽11选5" then
Lotteryid="AhSyxw"
elseif Lotterytype="江苏11选5" then
Lotteryid="JsSyxw"
elseif lotterytype="上海11选5" then
Lotteryid="ShSyxw"
elseif lotterytype="辽宁11选5" then
Lotteryid="LlSyxw"
elseif Lotterytype="浙江11选5" then
Lotteryid="ZjSyxw"
elseif Lotterytype="福建11选5" then
Lotteryid="FjSyxw"
elseif Lotterytype="黑龙江11选5" then
Lotteryid="HljSyxw"
elseif Lotterytype="河北11选5" then
Lotteryid="HebSyxw"
elseif Lotterytype="11运夺金" then
Lotteryid="Syydj"
elseif Lotterytype="时时乐" then
Lotteryid="Ssl"
elseif Lotterytype="广东快乐十分" then
Lotteryid="GdKlsf"
elseif Lotterytype="湖南快乐十分" then
Lotteryid="HnKlsf"
elseif Lotterytype="江苏快3" then
Lotteryid="JsKs"
elseif Lotterytype="安徽快3" then
Lotteryid="AhKs"
elseif Lotterytype="吉林快3" then
Lotteryid="JlKs"
elseif Lotterytype="福建快3" then
Lotteryid="FjKs"
elseif Lotterytype="内蒙快3" then
Lotteryid="NmKs"
elseif Lotterytype="广西快3" then
Lotteryid="GxKs"
elseif Lotterytype="胜负彩" then
Lotteryid="Sfc"
elseif Lotterytype="4场进球" then
Lotteryid="Jq4"
elseif Lotterytype="任选九场" then
Lotteryid="Rxjc"
elseif Lotterytype="6场半全场" then
Lotteryid="Zc6"
elseif Lotterytype="双色球" then
Lotteryid="Ssq"
elseif Lotterytype="福彩3D" then
Lotteryid="Sd"
elseif Lotterytype="七乐彩" then
Lotteryid="Qlc"
elseif Lotterytype="15选5" then
Lotteryid="Swxw"
elseif Lotterytype="大乐透" then
Lotteryid="Dlt"
elseif Lotterytype="排列三" then
Lotteryid="Pls"
elseif Lotterytype="排列五" then
Lotteryid="Plw"
elseif Lotterytype="七星彩" then
Lotteryid="Qxc"
elseif Lotterytype="22选5" then
Lotteryid="Eexw"
elseif Lotterytype="竟彩足球" then
Lotteryid="Jczq"
elseif Lotterytype="竟彩篮球" then
Lotteryid="Jclq"
elseif Lotterytype="北京单场" then
Lotteryid="Bjdc"
elseif lotterytype="辽宁快乐12" then
Lotteryid="LlKlse"
elseif lotterytype="浙江快乐12" then
Lotteryid="ZjKlse"
elseif lotterytype="四川快乐12" then
Lotteryid="ScKlse"
end if
zt=left(rs("follows"),4)
%><row lotname='<%=Lotterytype%>' pid='<%=rs("lotteryid")%>' codes='<%=codes%>' Lotteryid='<%=Lotteryid%>' cid='<%=right(rs("lotteryid"),6)%>' expect='<%=expect%>' allmoney='<%=allmoney%>' usermoney='<%=usermoney%>' jj='<%=wincost%>' xx='<%=zt%>' i='<%=i%>' dt='<%=Format_Time(rs("AddTime"),1)%>' /><%
rs.movenext
next
end if
rs.close
set rs=nothing
End Sub

Sub mxlist()
busisort=KR(request("busisort"))
if busisort=1 then
busisort1="and (follows like '%发起%' or follows like '%参与%')"
elseif busisort=2 then
busisort1="and follows like '%方案保底%'"
elseif busisort=3 then
busisort1="and follows like '%撤单%'"
elseif busisort=4 then
busisort1="and follows like '%在线充值%'"
elseif busisort=5 then
busisort1="and follows like '%兑换等级%'"
elseif busisort=6 then
busisort1="and follows like '%系统充值%'"
elseif busisort=7 then
busisort1="and follows like '%系统扣除%'"
elseif busisort=8 then
busisort1="and follows like '%注册资金%'"
elseif busisort=9 then
busisort1="and follows like '%保底返回%'"
elseif busisort=10 then
busisort1="and follows like '%系统派奖%'"
elseif busisort=11 then
busisort1="and follows like '%返点%'"
elseif busisort=12 then
busisort1="and follows like '%保底冻结%'"
elseif busisort=0 then
busisort1=""
end if
d=KR(request("d"))
if d="1" then
d1=""
elseif d="2" then
d1="and (follows like '%发起%' or follows like '%参与%')"
elseif d="3" then
d1="and follows like '%系统派奖%'"
elseif d="4" then
d1="and LotteryType='充值' and LotteryName<>'积分兑换'"
elseif d="5" then
d1="and LotteryType='兑换'"
elseif d="6" then
d1="and Issuccess='已返点'"
end if
beginday=KR(request("beginday"))
if beginday<>"" then
addtime1="and addtime >='"&beginday& "'"
else
addtime1=""
end if
Page=KR(request("Page"))
pagesize=KR(request("pagesize"))
set rs=server.createobject("adodb.recordset")
Sql = "select top("&request("tnumber")&") * from KR_Bank_Back where UserName='"&session("un")&"' "&busisort1&" "&d1&" "&addtime1&" order by id desc"
rs.open sql,conn,1,3 	
total=rs.recordcount 
rs.PageSize =request("tnumber")
if rs.EOF then     
else
if Not IsEmpty(Page) then
Page = CInt(Page)
if Page > rs.PageCount then
rs.AbsolutePage = rs.PageCount
elseif Page <= 0 then
Page = 1
else
rs.AbsolutePage = Page 
end if
End if
Page = rs.AbsolutePage 
%><page pagesize='<%=Setting(19)%>' pageindex='<%=Page%>' countpage='<%=rs.pagecount%>' countrs='<%=rs.recordcount%>'/><%
For x = 1 to rs.PageSize
if rs.EOF then     
Exit For 
end if
i=i+1
if rs("LotteryName")="奖金兑换" then
followst=left(rs("follows"),6)
else
followst=left(rs("follows"),4)
end if
%><row bz='<%=followst%>' d='<%=d%>' dd='<%=rs("lotteryid")%>' cid='<%=right(rs("lotteryid"),6)%>' ye='<%=Formatnumber(rs("b_after"),2,-1)%>' zc='<%=Formatnumber(rs("back_money2"),2,-1)%>' sr='<%=Formatnumber(rs("back_money"),2,-1)%>' i='<%=i%>' dt='<%=Format_Time(rs("AddTime"),3)%>'/><%
rs.movenext
next
end if
rs.close
set rs=nothing
End Sub

Sub gclist()
beginday=KR(request("beginday"))
if beginday<>"" then
addtime1="and addtime >='"&beginday& "'"
else
addtime1=""
end if
Page=KR(request("Page"))
pagesize=KR(request("pagesize"))
set rs=server.createobject("adodb.recordset")
Sql = "select * from KR_Bank_Back where UserName='"&session("un")&"' and (follows like '%发起%' or follows like '%参与%') "&addtime1&" order by id desc"
rs.open sql,conn,1,3 	
total=rs.recordcount 
rs.PageSize = Setting(19)
if rs.EOF then     
else
if Not IsEmpty(Page) then
Page = CInt(Page)
if Page > rs.PageCount then
rs.AbsolutePage = rs.PageCount
elseif Page <= 0 then
Page = 1
else
rs.AbsolutePage = Page 
end if
End if
Page = rs.AbsolutePage 
%><page pagesize='<%=Setting(19)%>' pageindex='<%=Page%>' countpage='<%=rs.pagecount%>' countrs='<%=rs.recordcount%>'/><%
For x = 1 to rs.PageSize
if rs.EOF then     
Exit For 
end if
i=i+1
%><row bz='<%=left(rs("follows"),4)%>' d='<%=pagesize%>' dd='<%=rs("lotteryid")%>' cid='<%=right(rs("lotteryid"),6)%>' ye='<%=Formatnumber(rs("b_after"),2,-1)%>' zc='<%=Formatnumber(rs("back_money2"),2,-1)%>' sr='<%=Formatnumber(rs("back_money"),2,-1)%>' dt='<%=Format_Time(rs("AddTime"),1)%>'/><%
rs.movenext
next
end if
rs.close
set rs=nothing
End Sub

Sub zjmxlist()
beginday=KR(request("beginday"))
if beginday<>"" then
addtime1="and addtime >='"&beginday& "'"
else
addtime1=""
end if
Page=KR(request("Page"))
pagesize=KR(request("pagesize"))
set rs=server.createobject("adodb.recordset")
Sql = "select * from KR_Bank_Back where UserName='"&session("un")&"' and follows like '%系统派奖%' "&addtime1&" order by id desc"
rs.open sql,conn,1,3 	
total=rs.recordcount 
rs.PageSize = Setting(19)
if rs.EOF then     
else
if Not IsEmpty(Page) then
Page = CInt(Page)
if Page > rs.PageCount then
rs.AbsolutePage = rs.PageCount
elseif Page <= 0 then
Page = 1
else
rs.AbsolutePage = Page 
end if
End if
Page = rs.AbsolutePage 
%><page pagesize='<%=Setting(19)%>' pageindex='<%=Page%>' countpage='<%=rs.pagecount%>' countrs='<%=rs.recordcount%>'/><%
For x = 1 to rs.PageSize
if rs.EOF then     
Exit For 
end if
i=i+1
%><row bz='<%=left(rs("follows"),4)%>' d='<%=pagesize%>' dd='<%=rs("lotteryid")%>' cid='<%=right(rs("lotteryid"),6)%>' ye='<%=Formatnumber(rs("b_after"),2,-1)%>' zc='<%=Formatnumber(rs("back_money2"),2,-1)%>' sr='<%=Formatnumber(rs("back_money"),2,-1)%>' dt='<%=Format_Time(rs("AddTime"),1)%>'/><%
rs.movenext
next
end if
rs.close
set rs=nothing
End Sub

Sub Pays()
beginday=KR(request("beginday"))
if beginday<>"" then
addtime1="and addtime >='"&beginday& "'"
else
addtime1=""
end if
Page=KR(request("Page"))
pagesize=KR(request("pagesize"))
set rs=server.createobject("adodb.recordset")
Sql = "select * from KR_Bank_Back where UserName='"&session("un")&"' and lotterytype='充值' and lotteryname<>'积分兑换' "&addtime1&" order by id desc"
rs.open sql,conn,1,3 	
total=rs.recordcount 
rs.PageSize = Setting(19)
if rs.EOF then     
else
if Not IsEmpty(Page) then
Page = CInt(Page)
if Page > rs.PageCount then
rs.AbsolutePage = rs.PageCount
elseif Page <= 0 then
Page = 1
else
rs.AbsolutePage = Page 
end if
End if
Page = rs.AbsolutePage 
%><page pagesize='<%=Setting(19)%>' pageindex='<%=Page%>' countpage='<%=rs.pagecount%>' countrs='<%=rs.recordcount%>'/><%
For x = 1 to rs.PageSize
if rs.EOF then     
Exit For 
end if
i=i+1
%><row bz='<%=left(rs("follows"),4)%>' d='<%=pagesize%>' dd='<%=rs("lotteryid")%>' cid='<%=right(rs("lotteryid"),6)%>' ye='<%=Formatnumber(rs("b_after"),2,-1)%>' zc='<%=Formatnumber(rs("back_money2"),2,-1)%>' sr='<%=Formatnumber(rs("back_money"),2,-1)%>' dt='<%=Format_Time(rs("AddTime"),1)%>'/><%
rs.movenext
next
end if
rs.close
set rs=nothing
End Sub

Sub Drawals()
beginday=KR(request("beginday"))
if beginday<>"" then
addtime1="and addtime >='"&beginday& "'"
else
addtime1=""
end if
Page=KR(request("Page"))
pagesize=KR(request("pagesize"))
set rs=server.createobject("adodb.recordset")
Sql = "select * from KR_Bank_Back where UserName='"&session("un")&"' and lotterytype='兑换' "&addtime1&" order by id desc"
rs.open sql,conn,1,3 	
total=rs.recordcount 
rs.PageSize = Setting(19)
if rs.EOF then     
else
if Not IsEmpty(Page) then
Page = CInt(Page)
if Page > rs.PageCount then
rs.AbsolutePage = rs.PageCount
elseif Page <= 0 then
Page = 1
else
rs.AbsolutePage = Page 
end if
End if
Page = rs.AbsolutePage 
%><page pagesize='<%=Setting(19)%>' pageindex='<%=Page%>' countpage='<%=rs.pagecount%>' countrs='<%=rs.recordcount%>'/><%
For x = 1 to rs.PageSize
if rs.EOF then     
Exit For 
end if
i=i+1
%><row bz='<%=left(rs("follows"),4)%>' d='<%=pagesize%>' dd='<%=rs("lotteryid")%>' cid='<%=right(rs("lotteryid"),6)%>' ye='<%=Formatnumber(rs("b_after"),2,-1)%>' zc='<%=Formatnumber(rs("back_money2"),2,-1)%>' sr='<%=Formatnumber(rs("back_money"),2,-1)%>' dt='<%=Format_Time(rs("AddTime"),1)%>'/><%
rs.movenext
next
end if
rs.close
set rs=nothing
End Sub

Sub jflist()
beginday=KR(request("beginday"))
if beginday<>"" then
addtime1="and addtime >='"&beginday& "'"
else
addtime1=""
end if
Page=KR(request("Page"))
pagesize=KR(request("pagesize"))
Pointse=KR(request("Pointse"))
if Pointse="" then
Pointse1=""
elseif Pointse=1 then
Pointse1="and Explain='登录赠送积分'"
elseif Pointse=2 then
Pointse1="and Explain='投注赠送积分'"
elseif Pointse=3 then
Pointse1="and Explain='中奖赠送积分'"
elseif Pointse=4 then
Pointse1="and Explain='充值赠送积分'"
elseif Pointse=5 then
Pointse1="and Explain='系统增加积分'"
elseif Pointse=6 then
Pointse1="and Explain='系统扣除积分'"
elseif Pointse=7 then
Pointse1="and Explain='撤单扣除积分'"
elseif Pointse=8 then
Pointse1="and Explain='积分兑换'"
elseif Pointse=9 then
Pointse1="and Explain='注册赠送积分'"
end if
set rs=server.createobject("adodb.recordset")
Sql = "select top("&request("tnumber")&") * from KR_Point where UserName='"&session("un")&"' "&Pointse1&" "&addtime1&" order by id desc"
rs.open sql,conn,1,3 	
total=rs.recordcount 
rs.PageSize = request("tnumber")
if rs.EOF then     
else
if Not IsEmpty(Page) then
Page = CInt(Page)
if Page > rs.PageCount then
rs.AbsolutePage = rs.PageCount
elseif Page <= 0 then
Page = 1
else
rs.AbsolutePage = Page 
end if
End if
Page = rs.AbsolutePage 
%><page pagesize='<%=Setting(19)%>' pageindex='<%=Page%>' countpage='<%=rs.pagecount%>' countrs='<%=rs.recordcount%>'/><%
For x = 1 to rs.PageSize
if rs.EOF then     
Exit For 
end if
i=i+1
%><row dd='<%=rs("OrderID")%>' zc='<%=rs("Income")%>' sr='<%=rs("Expense")%>' Point='<%=rs("Point")%>' dt='<%=Format_Time(rs("AddTime"),3)%>' bz='<%=left(rs("Explain"),4)%>' i='<%=i%>'/><%
rs.movenext
next
end if
rs.close
set rs=nothing
End Sub

Sub Log()
beginday=KR(request("beginday"))
if beginday<>"" then
addtime1="and LogTime >='"&beginday& "'"
else
addtime1=""
end if
Page=KR(request("Page"))
pagesize=KR(request("pagesize"))
set rs=server.createobject("adodb.recordset")
Sql = "select * from KR_Login where UserName='"&session("un")&"' "&addtime1&" order by id desc"
rs.open sql,conn,1,3 	
total=rs.recordcount 
rs.PageSize = Setting(19)
if rs.EOF then     
else
if Not IsEmpty(Page) then
Page = CInt(Page)
if Page > rs.PageCount then
rs.AbsolutePage = rs.PageCount
elseif Page <= 0 then
Page = 1
else
rs.AbsolutePage = Page 
end if
End if
Page = rs.AbsolutePage 
%><page pagesize='<%=Setting(19)%>' pageindex='<%=Page%>' countpage='<%=rs.pagecount%>' countrs='<%=rs.recordcount%>'/><%
For x = 1 to rs.PageSize
if rs.EOF then     
Exit For 
end if
i=i+1
%><row logip='<%=rs("logip")%>' region='<%=rs("logip")%>' logtime='<%=rs("logtime")%>' browser='<%=rs("browser")%>'/><%
rs.movenext
next
end if
rs.close
set rs=nothing
End Sub
end if
%></xml>