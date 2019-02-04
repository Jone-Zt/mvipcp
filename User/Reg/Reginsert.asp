<!--#include file="../../Conn.asp"-->
<!--#include file="../../Include/md5.asp"--><!doctype html>
<head>
<meta charset="GB2312">
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1, user-scalable=0;" name="viewport" />
<meta http-equiv="Content-Type" content="text/html; charset=GB2312" />
<meta name="format-detection" content="telephone=no" />
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
</head>
<body>
<%
dim username,tjrId
username=KR(request("username"))
answer=KR(request("answer"))
if username<>"" then
tjrId=KR(request("tjrId"))
if tjrId<>"" then
set rs=Server.CreateObject("Adodb.Recordset")
sql="select * from KR_User where username='"&tjrId&"'"
rs.open sql,conn,1,1
If  rs.eof Then
Response.Write "<script>alert('对不起，该代理用户不存在，请核实！');history.go(-1);</script>"
response.end
else
tjrname=tjrId
End If
rs.close
end if

set rs=Server.CreateObject("Adodb.Recordset")
sql="select username from KR_User where username='"&username&"'"
rs.open sql,conn,1,1
If not rs.eof Then
Response.Write "<script>alert('户名已存在，请换个用户名！');history.go(-1);</script>"
response.end
End If
rs.close

set rs=Server.CreateObject("Adodb.Recordset")
sql="select regfrom  from KR_User where username='"&tjrname&"'"
rs.open sql,conn,1,1
If not rs.eof Then
tjrIds="&"&tjrname&"&"&Rs("regfrom")
tjrIdss=tjrname
else
tjrIds="&admin&"
tjrIdss="admin"
End If
rs.close

set rs=server.createobject("adodb.recordset")
sqltext="select * from KR_User"
rs.open sqltext,conn,3,2
rs.addnew
Rs("username") = username
Rs("answer") = answer
Rs("userpass") = md5(KR(request("password")),16)
Rs("Point") = Setting(70)
Rs("regfrom") =tjrIds
Rs("daili") = 2
Rs("islock") = 0
Rs("Rebate") = 0
Rs("addtime") =now()
rs.update
rs.close
session("un") = username
response.cookies("username")=username
response.cookies("username").Expires=Date+365

AddIP = Request.ServerVariables("REMOTE_ADDR")
sql = "update KR_User set logins=logins+1,logtime=getdate(),logip= '"&AddIP&"' where username='"&username&"'"
conn.execute(sql)

OrderID="ZC"&getDateStr() 
if Setting(70)<>0 then
sql = "insert into KR_Point (OrderID,UserName,Income,Point,Explain) values('"&OrderID&"','"&session("un")&"','"&Setting(70)&"','"&jf&"','注册赠送积分')"
conn.execute(sql)
end if
response.redirect "RegOk.html"
else
response.write "<script language=javascript>alert('请输入用户名');document.location.href='index.html'</script>"
end if
%>
</body>
</html>