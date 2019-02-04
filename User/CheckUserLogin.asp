<!--#include file="../Conn.asp"-->
<!--#include file="../Include/md5.asp"--><xml><%
action=request("action")
select case action
case "login" call login()
case "getinfo" call getinfo()
case "logout" call logout()
case else
call login()
end select

Sub login()
%><err type='1'/><%
IF Trim(Request.Form("Verifycode"))<>Trim(Session("Verifycode")) then 
%><state type='4'/><%
end if

username = unescape(request("username"))

if username <> "" then

	Set Rs = Server.CreateObject("ADODB.Recordset")

	SQL = "Select state,userpass,daili,lock,uermoney,username From KR_User where username='"&username&"'"

	Rs.Open SQL,conn,1,2

if Rs.eof then

	%><state type='1'/><%

else

if Rs("lock")<>"" and Rs("lock")<>"0" then

	%><state type='6'/><%

elseif md5(trim(request("password")),16) = Rs("userpass") then

	AddIP = Request.ServerVariables("REMOTE_ADDR")

	sql = "update KR_User set logins=logins+1,logtime=getdate(),logip= '"&AddIP&"',Point= Point+'"&Setting(71)&"' where username='"&username&"'"

	conn.execute(sql)

	set rr = server.createobject("adodb.recordset")

	sql = "select top 1 * from KR_Login"

	rr.open sql,conn,1,3

	rr.addnew

	rr("username") = username

	rr("logtime")=now()

	rr("logip")=AddIP

	rr("browser")=Request.ServerVariables("HTTP_USER_AGENT")

	rr.update

	rr.close

	set rr=nothing

session("un") = rs("username")
session("daili")=rs("daili")
response.cookies("username") = rs("username")
response.cookies("username").Expires=Date+365
response.cookies("daili")=rs("daili")
response.cookies("daili").Expires=Date+365

if Setting(71)<>0 then
OrderID="DL"&getDateStr()
set lsm=server.createobject("ADODB.recordset")
sql="select * from KR_User where username='"&session("un")&"'"
lsm.open sql,conn,1,1
jf=lsm("Point")
lsm.close
set lsm=nothing
sql = "insert into KR_Point (OrderID,UserName,Income,Point,Explain) values('"&OrderID&"','"&session("un")&"','"&Setting(71)&"','"&jf&"','µÇÂ¼ÔùËÍ»ý·Ö')"
conn.execute(sql)
end if
else
%><state type='2'/><%
end if
end if
rs.close
set rs=nothing
end if
if session("un") <> "" then
set ra=server.createobject("ADODB.recordset")
sql="select * from KR_User where username='"&session("un")&"'"
ra.open sql,conn,1,1
UerMoney=ra("UerMoney")
Point=ra("Point")
ra.close
set ra=nothing
%><state type='0'/><user username='<%=escape(session("un"))%>' Uermoney='<%=formatnumber(UerMoney,2,-1)%>' tmppay='0.0' packs='<%=formatnumber(Point,2,-1)%>' hongbao='0'/><%
end if
end sub

sub getinfo()
if session("un") <> "" then
sql="select * from KR_User where username='"&session("un")&"'"
set rs=conn.execute(sql)
%><err type='1'/><state type='0'/><user username='<%=escape(session("un"))%>' money='<%=formatnumber(rs("UerMoney"),2,-1)%>' tmppay='0.0' packs='<%=formatnumber(rs("Point"),2,-1)%>' hongbao='0'/><%else%><err type='1'/><%
set rs=nothing
end if
end sub

sub logout()
sql="update KR_User set lastlogout=getdate(),state=0 where username='"&session("un")&"'"
conn.execute(sql)
session("un") = ""
session("dl") = ""
response.cookies("username")=""
response.cookies("dl")=""
session.Abandon
%><err type='1'/><%end sub%>
</xml>