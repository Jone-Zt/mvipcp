<!--#include file="../Conn.asp"-->
<!--#include file="../Include/KR.CommonCls.asp"-->
<!--#include file="../Include/md5.asp"--><!doctype html>
<head>
<title>找回密码-<%=Setting(0)%></title>
<meta content="游戏，体育游戏，福利游戏，足彩，竞彩，游戏开奖，游戏合玩，走势图，游戏分析，过关统计" name="keywords">
<meta content="<%=Setting(0)%>是手机上最好的投注平台，10年游戏金牌服务经验，为游戏朋友提供安全的手机游戏投注、游戏合玩服务、游戏资讯" name="description">
<meta charset="GB2312">
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1, user-scalable=0;" name="viewport" />
<meta http-equiv="Content-Type" content="text/html; charset=GB2312" />
<meta name="format-detection" content="telephone=no" />
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<link href="../Css/Basic.css" rel="stylesheet">
<link href="../Css/User.css" rel="stylesheet">
<script type="text/javascript" src="/JS/Jquery-1.7.2.Min.js"></script>
</head>
<body>
<%

action=request("action")
select case action
case "Infoo"  call Infoo()
case "Main"  call Main()
case "Bank"  call Bank()
case "Info"  call Info()
case "Password"  call Password()
case "Password1"  call Password1()
case "Phone"  call Phone()
case "QKPassword"  call QKPassword()
case "XGQKPassword"  call XGQKPassword()
case else
call Main()
end select
Sub Main()
sql="select * from KR_User"
set rr=conn.execute(sql)
If Not IsNull(rr("truename")) Then
	unname = rr("truename")
Else 
	unname = ""
End If
If Not IsNull(rr("identityid")) Then
	unid = rr("identityid")
Else 
	unid = ""
End If
If Not IsNull(rr("tel")) Then
	untel = rr("tel")
Else
	untel = ""
End If
islock=rr("islock")
bank_num=rr("bank_num")
bank_bank=rr("bank_bank")
bank_area=rr("bank_area")
bank_name=rr("bank_name")
set rr=nothing
%>

<%
end Sub
Sub Password
if KR(request.Form("password"))<>"" then
sql = "select * from KR_User where username='"&session("un")&"'"
set rs = conn.execute(sql)
if md5(trim(KR(request.Form("password"))),16)= rs("userpass") then
if rs("userpass1")<>"" and rs("truename")<>"" and rs("identityid")<>"" and rs("email")<>"" and rs("tel")<>"" and rs("bank_area")<>"" and rs("bank_name")<>"" and rs("bank_bank")<>"" and rs("bank_num")<>"" then
islockset=",islock='1'"
else
islockset=""
end if
sql = "update KR_User set userpass='"&md5(trim(KR(request.Form("ps1"))),16)&"'"&islockset&" where username='"&session("un")&"'"
conn.execute(sql)
Response.Write "<script>alert('登录密码修改成功！');location.href='Securityinfo1.html';</script>"
else
Response.Write "<script>alert('输入旧登录密码错误！');location.href='Securityinfo1.asp?action=Password';</script>"
end if
end if
%>
<SCRIPT language=javascript>
function check(form){

if(form.username.value=="")
	{
		alert("请输入用户名!");
		form.username.focus();
		return false;
	}
	if(form.password.value=="")
	{
		alert("请输入旧登录密码!");
		form.password.focus();
		return false;
	}
	if(form.ps1.value=="")
	{
		alert("请输入新登录密码!");
		form.ps1.focus();
		return false;
	}
	if(form.ps2.value=="")
	{
		alert("请确认新登录密码!");
		form.ps2.focus();
		return false;
	}
	if(form.ps2.value!=form.ps1.value)
	{
		alert("两次输入的登录密码不一致!");
		form.ps2.select();
		return false;
	}
	/*if(form.ps1.value.length<6||form.ps1.value.length>50)
	{
		alert("登录密码长度不符合要求!");
		form.ps1.select();
		return false;
	}*/

	return true;
}
</SCRIPT>
<div class="head"><h2 id="navtit">找回密码</h2><a href="javascript:history.go(-1);" class="btn-qgkj" id="sourceUrl"><span><em></em></span>返回</a></div>
<div abbr="修改密码" class="uc_wap">
<div class="login"> 
<form name="form1" onSubmit="return check(this);" action="Securityinfo1.asp?action=Password" method="post">
	<div class="login_list">
		<ul>
		<li>
				<div class="f_box bd_box">
					<em>用户名e</em>
					<input id="password" name="password" type="password" class="txt color_black">
				</div>
			</li>
			<li>
				<div class="f_box bd_box">
					<em>密保答案</em>
					<input id="password" name="password" type="password" class="txt color_black">
				</div>
			</li>
			<li>
				<div class="f_box bd_box">
					<em>新密码</em>
					<input id="ps1" name="ps1" type="password" class="txt color_black">
				</div>
			</li>
			<li>
				<div class="f_box bd_box">
					<em>重复密码</em>
					<input id="ps2" name="ps2" type="password" class="txt color_black">
				</div>
			</li>
		</ul>
	</div>
	<input class="login_btn" type="submit" value="修改密码">
</form>
</div>
</div>

<%end Sub

Sub Password
username=KR(request("username"))
answer=KR(request("answer"))





if KR(request.Form("username"))<>"" then

set rs=Server.CreateObject("Adodb.Recordset")
sql="select username from KR_User where username='"&username&"'"
rs.open sql,conn,1,1
If rs.eof Then
Response.Write "<script>alert('户名不存在，请换个用户名！');history.go(-1);</script>"
response.end
End If
rs.close




sql = "select * from KR_User where username='"&username&"'"


set rs = conn.execute(sql)
if answer = rs("answer") then

if rs("userpass1")<>"" and rs("truename")<>"" and rs("identityid")<>"" and rs("email")<>"" and rs("tel")<>"" and rs("bank_area")<>"" and rs("bank_name")<>"" and rs("bank_bank")<>"" and rs("bank_num")<>"" then
islockset=",islock='1'"
else
islockset=""
end if
sql = "update KR_User set userpass='"&md5(trim(KR(request.Form("ps1"))),16)&"'"&islockset&" where username='"&username&"'"
conn.execute(sql)
Response.Write "<script>alert('登录密码修改成功！');location.href='/User/Login/';</script>"
else
Response.Write "<script>alert('输入信息错误请重新输入！');location.href='Securityinfo1.asp?action=Password';</script>"
end if
Response.Write "<script>alert('户名已存在，请换个用户名功！');location.href='/User/Login/';</script>"
end if
%>
<SCRIPT language=javascript>
function check(form){
if(form.username.value=="")
	{
		alert("请输入用户名!");
		form.username.focus();
		return false;
	}
if(form.answer.value=="")
	{
		alert("请输入密保答案!");
		form.answer.focus();
		return false;
	}	
	
	
	if(form.ps1.value=="")
	{
		alert("请输入新登录密码!");
		form.ps1.focus();
		return false;
	}
	if(form.ps2.value=="")
	{
		alert("请确认新登录密码!");
		form.ps2.focus();
		return false;
	}
	if(form.ps2.value!=form.ps1.value)
	{
		alert("两次输入的登录密码不一致!");
		form.ps2.select();
		return false;
	}
	/*if(form.ps1.value.length<6||form.ps1.value.length>50)
	{
		alert("登录密码长度不符合要求!");
		form.ps1.select();
		return false;
	}*/

	return true;
}
</SCRIPT>
<div class="head"><h2 id="navtit">重置密码</h2><a href="javascript:history.go(-1);" class="btn-qgkj" id="sourceUrl"><span><em></em></span>返回</a></div>
<div abbr="修改密码" class="uc_wap">
<div class="login"> 
<form name="form1" onSubmit="return check(this);" action="Securityinfo1.asp?action=Password" method="post">
	<div class="login_list">
		<ul>
		<li>
				<div class="f_box bd_box">
					<em>用户名</em>
					<input id="username" name="username" class="txt color_black">
				</div>
			</li>
			<li>
				<div class="f_box bd_box">
					<em>密保答案</em>
					<input id="answer" name="answer"  class="txt color_black">
				</div>
			</li>
			<li>
				<div class="f_box bd_box">
					<em>新密码</em>
					<input id="ps1" name="ps1" type="password" class="txt color_black">
				</div>
			</li>
			<li>
				<div class="f_box bd_box">
					<em>重复密码</em>
					<input id="ps2" name="ps2" type="password" class="txt color_black">
				</div>
			</li>
		</ul>
	</div>
	<input class="login_btn" type="submit" value="修改密码">
</form>
</div>
</div>




<%end Sub%>
<!--#include file="../dh.asp"-->
</body>
</html>