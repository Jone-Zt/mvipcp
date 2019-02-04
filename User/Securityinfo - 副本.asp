<!--#include file="../Conn.asp"-->
<!--#include file="../Include/KR.CommonCls.asp"-->
<!--#include file="../Include/md5.asp"--><!doctype html>
<head>
<title>安全中心-<%=Setting(0)%></title>
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
checksssion()
action=request("action")
select case action
case "Infoo"  call Infoo()
case "Main"  call Main()
case "Bank"  call Bank()
case "Info"  call Info()
case "Password"  call Password()
case "Phone"  call Phone()
case "QKPassword"  call QKPassword()
case "XGQKPassword"  call XGQKPassword()
case else
call Main()
end select
Sub Main()
sql="select * from KR_User where username='"&session("un")&"'"
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
set rr=nothing
%>
<div class="head"><h2 id="navtit">安全中心</h2><a href="javascript:history.go(-1);" class="btn-qgkj" id="sourceUrl"><span><em></em></span>返回</a></div>
<div class="uc_wap">
<div class="login"> 
	<div class="mod_box">
		<ul class="bind_list"><%if unname="" or unid="" then%><a href="Securityinfo.asp?action=Info">
			<li style="border-top:0px;" abbr="name"> 
				<div class="all_icon un_user_icon"></div>
				<div class="sec_c fl"><b>未绑定真实姓名</b><br><span class="color_999">领奖与时核对身份的凭证</span></div>
				<div class="sec_r color_blue">绑定<i class="arr_blue"></i></div>
			</li></a><%else%>
			<li style="border-top:0px;" abbr="name"> 
				<div class="all_icon user_icon"></div>
				<div class="sec_c fl"><b><%=left(unname,1)%>*&nbsp;&nbsp;<%=left(unid,3)%>***************</b><br><span class="color_999">绑定后奖金才能兑换等级</span></div>
				<div class="sec_r">已绑定<i class="arr_blue"></i></div>
			</li><%end if%><%if untel="" then%><a href="Securityinfo.asp?action=Phone">
			<li abbr="phone"> 
				<div class="all_icon un_ph_icon"></div>
				<div class="sec_c fl"><b>未绑定手机</b><br><span class="color_999">找回密码，接收<%=setting(56)%>变动提醒</span></div>
				<div class="sec_r color_blue">绑定<i class="arr_blue"></i></div>
			</li></a><%else%>
			<li abbr="phone"> 
				<div class="all_icon ph_icon"></div>
				<div class="sec_c fl"><b><%=left(untel,3)%>*****<%=right(untel,3)%></b><br><span class="color_999">找回密码，接收<%=setting(56)%>变动提醒</span></div>
				<div class="sec_r">已绑定<i class="arr_blue"></i></div>
			</li><%end if%>
		</ul>
	</div>
	<div class="mod_box alt_box">
		<ul class="bind_list"><a href="Securityinfo.asp?action=Password">
			<li abbr="pwd">
				<div class="all_icon suo_icon"></div>
				<b>修改登录密码</b>
				<div class="sec_r color_blue">修改<i class="arr_blue"></i></div>
			</li></a>
		</ul>
	</div>
</div>
</div><%
end Sub
Sub Info()
truename=KR(request.Form("truename"))
identityid=KR(request.Form("identityid"))
if identityid<> "" then
set rss=Server.CreateObject("Adodb.Recordset")
sql="select username from KR_User where identityid='"&identityid&"'"
rss.open sql,conn,1,1
If not rss.eof Then
Response.Write "<script>alert('此身份证号已存在，请勿重复绑定！');history.go(-1);</script>"
response.end
End If
rss.close:set rss=nothing
end if

if truename <> "" or identityid <> ""  then
sql = "update KR_User set truename='"&truename&"',identityid='"&identityid&"' where username='"&session("un")&"'"
conn.execute(sql)
Response.Write "<script>alert('真实姓名绑定成功！');location.href='Securityinfo.html'</script>"
set rs=nothing
end if
%><SCRIPT language=javascript>
function check(form){
	if(form.truename.value=="")
	{
		alert("请填写真实姓名！");
		form.truename.focus();
		return false;
	}
	if(form.identityid.value=="")
	{
		alert("请输入您的身份证号码！");
		form.identityid.focus();
		return false;
	}
	else if(form.identityid.value.length < 15 || form.identityid.value.length > 18 )
	{
		alert("身份证号码应该为大于15位小于18位的数字");
		form.identityid.focus();
		return false;
	}
	return true;
}
</SCRIPT>
<div class="head"><h2 id="navtit">绑定真实姓名</h2><a href="javascript:history.go(-1);" class="btn-qgkj" id="sourceUrl"><span><em></em></span>返回</a></div>
<div abbr="绑定真实姓名" class="uc_wap">
<div class="login"> 
<form name="form1" onSubmit="return check(this);" action="Securityinfo.asp?action=Info" method="post">
	<div class="login_list">
		<ul>
			<li>
				<div class="f_box bd_box">
					<em>真实姓名</em>
					<input id="truename" name="truename" type="text" class="txt color_black" placeholder="请输入您的真实姓名">
				</div>
			</li>
			<li>
				<div class="f_box bd_box">
					<em>身份证号</em>
					<input id="identityid" name="identityid" type="text" class="txt color_black" placeholder="请输入您的身份证号码">
				</div>
			</li>
		</ul>
	</div>
	<input class="login_btn" type="submit" value="立即绑定">
</form>
</div>
</div><%
end Sub
Sub Phone()
tel=KR(request.Form("tel"))
if tel <> "" then
sql = "update KR_User set tel='"&tel&"' where username='"&session("un")&"'"
conn.execute(sql)
Response.Write "<script>alert('手机号码绑定成功！');location.href='Securityinfo.html'</script>"
set rs=nothing
end if
%><SCRIPT language=javascript>
function check(form){
	if(form.tel.value=="")
	{
		alert("请填写手机号码！");
		form.tel.focus();
		return false;
	}
	else if(form.tel.value.length < 11 || form.tel.value.length > 11 )
	{
		alert("机号码应该为11位的数字");
		form.tel.focus();
		return false;
	}
	return true;
}
</SCRIPT>
<div class="head"><h2 id="navtit">绑定手机号码</h2><a href="javascript:history.go(-1);" class="btn-qgkj" id="sourceUrl"><span><em></em></span>返回</a></div>
<div abbr="绑定手机号码" class="uc_wap">
<div class="login"> 
<form name="form" onSubmit="return check(this);" action="" method="post">
	<div class="login_list">
		<ul>
			<li>
				<div class="f_box bd_box">
					<em>手机号码</em>
					<input id="tel" name="tel" type="text" class="txt color_black" placeholder="请输入您的手机号码">
				</div>
			</li>
		</ul>
	</div>
	<input class="login_btn" type="submit" value="立即绑定">
</form>
</div>
</div><%
end Sub
Sub Password
if KR(request.Form("password"))<>"" then
sql = "select userpass from KR_User where username='"&session("un")&"'"
set rs = conn.execute(sql)
if md5(trim(KR(request.Form("password"))),16)= rs("userpass") then
sql = "update KR_User set userpass='"&md5(trim(KR(request.Form("ps1"))),16)&"' where username='"&session("un")&"'"
conn.execute(sql)
Response.Write "<script>alert('登录密码修改成功！');location.href='Securityinfo.html';</script>"
else
Response.Write "<script>alert('输入旧登录密码错误！');location.href='Securityinfo.asp?action=Password';</script>"
end if
end if
%>
<SCRIPT language=javascript>
function check(form){
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
<div class="head"><h2 id="navtit">修改密码</h2><a href="javascript:history.go(-1);" class="btn-qgkj" id="sourceUrl"><span><em></em></span>返回</a></div>
<div abbr="修改密码" class="uc_wap">
<div class="login"> 
<form name="form1" onSubmit="return check(this);" action="Securityinfo.asp?action=Password" method="post">
	<div class="login_list">
		<ul>
			<li>
				<div class="f_box bd_box">
					<em>旧密码</em>
					<input id="password" name="password" type="password" class="txt color_black">
				</div>
			</li>
			<li>
				<div class="f_box bd_box">
					<em>新登录</em>
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
Sub QKPassword
if KR(request.Form("ps1"))<>"" then
sql = "update KR_User set userpass1='"&md5(trim(KR(request.Form("ps1"))),16)&"' where username='"&session("un")&"'"
conn.execute(sql)
Response.Write "<script>alert('兑换密码修改成功！');location.href='Drawal.html';</script>"
end if
%>
<SCRIPT language=javascript>
function check(form){
	if(form.password.value=="")
	{
		alert("请输入旧兑换密码!");
		form.password.focus();
		return false;
	}
	if(form.ps1.value=="")
	{
		alert("请输入新兑换密码!");
		form.ps1.focus();
		return false;
	}
	if(form.ps2.value=="")
	{
		alert("请确认新兑换密码!");
		form.ps2.focus();
		return false;
	}
	if(form.ps2.value!=form.ps1.value)
	{
		alert("两次输入的兑换密码不一致!");
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
<div class="head"><h2 id="navtit">修改兑换密码</h2><a href="javascript:history.go(-1);" class="btn-qgkj" id="sourceUrl"><span><em></em></span>返回</a></div>
<div abbr="修改兑换密码" class="uc_wap">
<div class="login"> 
<form name="form1" onSubmit="return check(this);" action="Securityinfo.asp?action=QKPassword" method="post">
	<div class="login_list">
		<ul>
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
	<input class="login_btn" type="submit" value="修改兑换密码">
</form>
</div>
</div>
<%end Sub

Sub XGQKPassword

if KR(request.Form("ps1"))<>"" then
sql = "select userpass1 from KR_User where username='"&session("un")&"'"
set rs = conn.execute(sql)
if md5(trim(KR(request.Form("password"))),16)= rs("userpass1") OR isNull(rs("userpass1")) OR rs("userpass1") = "" then
sql = "update KR_User set userpass1='"&md5(trim(KR(request.Form("ps1"))),16)&"' where username='"&session("un")&"'"
conn.execute(sql)
Response.Write "<script>alert('兑换密码修改成功！');location.href='Securityinfo.html';</script>"
else
Response.Write "<script>alert('输入旧兑换密码错误！');location.href='Securityinfo.asp?action=XGQKPassword';</script>"
end if
end if
%>
<SCRIPT language=javascript>
function check(form){
	if($("#password").value){
		if(form.password.value=="")
		{
			alert("请输入旧兑换密码!");
			form.password.focus();
			return false;
		}
	}
	if(form.ps1.value=="")
	{
		alert("请输入新兑换密码!");
		form.ps1.focus();
		return false;
	}
	if(form.ps2.value=="")
	{
		alert("请确认新兑换密码!");
		form.ps2.focus();
		return false;
	}
	if(form.ps2.value!=form.ps1.value)
	{
		alert("两次输入的兑换密码不一致!");
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
<div class="head"><h2 id="navtit">修改兑换密码</h2><a href="javascript:history.go(-1);" class="btn-qgkj" id="sourceUrl"><span><em></em></span>返回</a></div>
<div abbr="修改兑换密码" class="uc_wap">
<div class="login"> 
<form name="form1" onSubmit="return check(this);" action="Securityinfo.asp?action=XGQKPassword" method="post">
	<div class="login_list">
		<ul>
			<%
				jpass = conn.execute("select userpass1 from KR_User where username='"&session("un")&"'")(0)
			 	If Not isNull(jpass) AND jpass <> "" Then
			%>
			<li>
				<div class="f_box bd_box">
					<em>旧密码</em>
					<input id="password" name="password" type="password" class="txt color_black">
				</div>
			</li>
			<%
				End If
			%>
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
	<input class="login_btn" type="submit" value="修改兑换密码">
</form>
</div>
</div>
<%end Sub

Sub Password
if KR(request.Form("password"))<>"" then
sql = "select userpass from KR_User where username='"&session("un")&"'"
set rs = conn.execute(sql)
if md5(trim(KR(request.Form("password"))),16)= rs("userpass") then
sql = "update KR_User set userpass='"&md5(trim(KR(request.Form("ps1"))),16)&"' where username='"&session("un")&"'"
conn.execute(sql)
Response.Write "<script>alert('登录密码修改成功！');location.href='Securityinfo.html';</script>"
else
Response.Write "<script>alert('输入旧登录密码错误！');location.href='Securityinfo.asp?action=Password';</script>"
end if
end if
%>
<SCRIPT language=javascript>
function check(form){
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
<div class="head"><h2 id="navtit">修改密码</h2><a href="javascript:history.go(-1);" class="btn-qgkj" id="sourceUrl"><span><em></em></span>返回</a></div>
<div abbr="修改密码" class="uc_wap">
<div class="login"> 
<form name="form1" onSubmit="return check(this);" action="Securityinfo.asp?action=Password" method="post">
	<div class="login_list">
		<ul>
			<li>
				<div class="f_box bd_box">
					<em>旧密码</em>
					<input id="password" name="password" type="password" class="txt color_black">
				</div>
			</li>
			<li>
				<div class="f_box bd_box">
					<em>新登录</em>
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

Sub Infoo
if KR(request.Form("modify"))<>"" then

truename=KR(request.Form("truename"))
identityid=KR(request.Form("identityid"))
birthday=KR(request.Form("birthday"))
sex=KR(request.Form("sex"))
tel=KR(request.Form("tel"))
qq=KR(request.Form("qq"))
email=KR(request.Form("email"))
address=KR(request.Form("address"))

if identityid<> "" then
set rss=Server.CreateObject("Adodb.Recordset")
sql="select username from KR_User where identityid='"&identityid&"'"
rss.open sql,conn,1,1
If not rss.eof Then
Response.Write "<script>alert('此身份证号已存在，请勿重复绑定！');history.go(-1);</script>"
response.end
End If
rss.close:set rss=nothing
identityidset=",identityid='"&identityid&"'"
end if

if truename<> "" then
truenameset=",truename='"&truename&"'"
end if

sql = "update KR_User set birthday='"&birthday&"',sex='"&sex&"',tel='"&tel&"',email='"&email&"',qq='"&qq&"',address='"&address&"'"&truenameset&identityidset&" where username='"&session("un")&"'"
conn.execute(sql)
Response.Write "<script>alert('资料修改成功！');location.href='index.html'</script>"

end if
sql="select * from KR_User where username='"&session("un")&"'"
set rs=conn.execute(sql)
%>
<SCRIPT language=javascript>
function check(form){
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
<div class="head"><h2 id="navtit">修改资料</h2><a href="javascript:history.go(-1);" class="btn-qgkj" id="sourceUrl"><span><em></em></span>返回</a></div>
<div abbr="修改资料" class="uc_wap">
<div class="login"> 
<form name="form1" onSubmit="return check(this);" action="Securityinfo-action-Infoo" method="post">
	<div class="login_list">
		<ul>
			<li>
				<div class="f_box bd_box">
					<em>用户名</em>
					<%=session("un")%>
				</div>
			</li>
			<li>
				<div class="f_box bd_box">
					<em>真实姓名</em>
					<%if rs("islock")="1" or (rs("truename")<>"" and not isnull(rs("truename"))) then%>*<%=right(rs("truename"),1)%><%else%><input type="text" name="truename" id="truename" value="<%=rs("truename")%>" class="txt color_black"/><%end if%>
				</div>
			</li>
			<li>
				<div class="f_box bd_box">
					<em>身份证号</em>
					<%if rs("islock")="1" or (rs("identityid")<>"" and not isnull(rs("identityid"))) then%><%=left(rs("identityid"),10)%>********<%else%><input type="text" name="identityid" id="identityid" value="<%=rs("identityid")%>" class="txt color_black"/><%end if%>
				</div>
			</li>
			<li>
				<div class="f_box bd_box">
					<em>出生日期</em>
					<input type="text" id="birthday" name="birthday" value="<%=rs("birthday")%>" class="txt color_black"/>
				</div>
			</li>
			<li>
				<div class="f_box bd_box">
					<em>您的性别</em>
					<input type="radio" name="sex" <%if rs("sex")=1 then%>checked="checked"<%end if%> value="1" /> 男 <input type="radio" name="sex" <%if rs("sex")=0 then%>checked="checked"<%end if%> value="0" /> 女
				</div>
			</li>
            <li>
				<div class="f_box bd_box">
					<em>电话号码</em>
					<input type="text" name="tel" id="tel" value="<%=rs("tel")%>" class="txt color_black" onKeyUp="this.value=this.value.replace(/\D/gi,'')"/>
				</div>
			</li>
            <li>
				<div class="f_box bd_box">
					<em>Q Q 号码</em>
					<input type="text" name="qq" id="qq" value="<%=rs("qq")%>" class="txt color_black" onKeyUp="this.value=this.value.replace(/\D/gi,'')"/>
				</div>
			</li>
            <li>
				<div class="f_box bd_box">
					<em>电子邮箱</em>
					<input type="text" name="email" id="email" value="<%=rs("email")%>" class="txt color_black"/>
				</div>
			</li>
			<li>
				<div class="f_box bd_box">
					<em>联系地址</em>
					<input type="text" name="address" id="address" value="<%=rs("address")%>" class="txt color_black" style="width:300px;"/>
				</div>
			</li>
		</ul>
	</div>
	<input class="login_btn" type="submit" value="修改资料" <%if rs("islock")=0 then%>name="modify"<%else%> disabled="disabled"<%end if%>>
</form>
</div>
</div>
<%end Sub%>

</body>
</html>