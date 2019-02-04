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
</body>
</html>
<%
IF Trim(Request.Form("Verifycode"))<>Trim(Session("Verifycode")) then
response.write "<script>alert('对不起，您的验证码不正确');history.go(-1);</script>"
response.End()
end if
if request("username") <> "" then
	SQL = "Select Proxy_Quota,state,userpass,daili,lock,uermoney,username From KR_User where username='"&request("username")&"'"
	Set Rs = Server.CreateObject("ADODB.Recordset")
	Rs.Open SQL,conn,1,2
	if Rs.eof then
		response.write "<script>alert('对不起，您的用户名不正确');history.go(-1);</script>"
	else
		if Rs("lock")<>"" and Rs("lock")<>"0"then
			response.write "<script>alert('对不起，您的帐户已被冻结');history.go(-1);</script>"
		elseif md5(trim(request("password")),16) = Rs("userpass") then
			AddIP = Request.ServerVariables("REMOTE_ADDR")
			sql = "update KR_User set logins=logins+1,logtime=getdate(),logip= '"&AddIP&"',Point= Point+'"&Setting(71)&"'  where username='"&request("username")&"'"
			conn.execute(sql)
			set rr=server.createobject("adodb.recordset")
			sql="select top 1 * from KR_Login"
			rr.open sql,conn,1,3
			rr.addnew
			rr("username")=request("username")
			rr("logtime")=now()
			rr("logip")=AddIP
			rr("browser")=Request.ServerVariables("HTTP_USER_AGENT")
			rr.update
			rr.close
			set rr = nothing
			session("uermoney") = rs("uermoney")
			session("un") = rs("username")
session("daili")=rs("daili")
			response.cookies("username")=rs("username")
			response.cookies("username").Expires=Date+365
			response.cookies("daili")=rs("daili")
			response.cookies("daili").Expires=Date+365
			
			if Setting(71)<>0 then
			OrderID="DL"&getDateStr()
			set lsm=server.createobject("ADODB.recordset")
			sql="select * from KR_User where username='"&session("un")&"'"   'this.location.href='"&request.ServerVariables("HTTP_REFERER")&"';
			lsm.open sql,conn,1,1
			jf=lsm("Point")
			lsm.close
			set lsm=nothing
			sql = "insert into KR_Point (OrderID,UserName,Income,Point,Explain) values('"&OrderID&"','"&session("un")&"','"&Setting(71)&"','"&jf&"','登录赠送积分')"
			conn.execute(sql)
			end if
		else
			response.write "<script>alert('对不起，您的密码不正确');history.go(-1);</script>"
		end if
	end if
	set Rs = nothing
end if
if session("un") <> "" then
	if request.Form("jiangurl")<>"" then 
		response.redirect request.Form("jiangurl")
	else
		response.redirect "/index.html"
	end if
	
end if
%> 