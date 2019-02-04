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
bank_area=rr("bank_area")
bank_name=rr("bank_name")
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
				<div class="sec_c fl"><b><%=left(unname,1)%>*&nbsp;&nbsp;<%=left(unid,3)%>***************</b><br><span class="color_999">绑定后奖金才能提现等级</span></div>
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
			</li><%end if%><%if bank_area<>"" and bank_name<>"" and bank_bank<>"" and bank_num<>"" then%>
            
			<li abbr="card"> 
				<div class="all_icon cd_icon"></div>
				<div class="sec_c fl"><b><%=bank_bank%>&nbsp;&nbsp;<%=left(bank_num,3)%>***********<%=right(bank_num,3)%></b><br><span class="color_999">绑定唯一用卡，更安全</span></div>
				<div class="sec_r">已绑定<i class="arr_blue"></i></div>
			</li>
			
			<%else%>
            
            <a href="Securityinfo.asp?action=Bank">
			<li abbr="card"> 
				<div class="all_icon un_cd_icon"></div>
				<div class="sec_c fl"><b>未绑定银行卡</b><br><span class="color_999">绑定唯一用卡，更安全</span></div>
				<div class="sec_r color_blue">绑定<i class="arr_blue"></i></div>
			</li></a>
			
			<%end if%>
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
	
		<div class="mod_box alt_box">
		<ul class="bind_list"><a href="Securityinfo.asp?action=Bank">
			<li abbr="pwd">
				<div class="all_icon suo_icon"></div>
				<b>修改银行卡号</b>
				<div class="sec_r color_blue">修改<i class="arr_blue"></i></div>
			</li></a>
		</ul>
	</div>
</div>
</div><%
end Sub

Sub Bank
sql="select * from KR_User where username='"&session("un")&"'"
set rs=conn.execute(sql)
islock=rs("islock")
if rs("truename")<>"" and rs("identityid")<>"" then
if rs("tel")<>"" then
if KR(request.Form("bank_bank")) <> "" and KR(request.Form("bank_num")) <> "" then
bank_area=KR(request("bank_area"))
bank_name=KR(request("bank_name"))
bank_bank=KR(request("bank_bank"))
bank_num=KR(request("bank_num"))
if rs("islock")="0" then
if rs("userpass1")<>"" and rs("truename")<>"" and rs("identityid")<>"" and rs("email")<>"" and rs("tel")<>"" and bank_area<>"" and bank_name<>"" and bank_bank<>"" and bank_num<>"" then
islockset=",islock='1'"
else
islockset=""
end if
sql = "update KR_User set bank_bank='"&bank_bank&"',bank_area='"&bank_area&"',bank_name='"&bank_name&"',bank_num='"&bank_num&"',uermoney=uermoney+"&Setting(69)&",money=money+"&Setting(69)&islockset&" where username='"&session("un")&"'"
conn.execute(sql)
LotteryID="BDZS"&getDateStr()
sql="select * from KR_User where username='"&session("un")&"'"
set lsm=conn.execute(sql)
ye=lsm("UerMoney")
if Setting(69)<>0 then
sql = "insert into KR_Bank_Back (LotteryID,UserName,LotteryName,LotteryType,back_money2,b_after,b_befor,back_state,follows) values('"&LotteryID&"','"&session("un")&"','绑定赠送','绑定银行卡赠送资金','"&Setting(69)&"','"&Setting(69)&"','"&ye-Setting(69)&"','已处理','绑定银行卡赠送资金:"&LotteryID&"')"
conn.execute(sql)
end if
end if
response.write "<script>alert('绑定成功！');location.href='Securityinfo.html';</script>"
end if
%>
<SCRIPT language=javascript>
function check(form){
	if(form.bank_bank.value=="")
	{
		alert("请选择银行名称！");
		form.bank_bank.focus();
		return false;
	}
	if(form.bank_area.value=="")
	{
		alert("请填写开户支行！");
		form.bank_area.focus();
		return false;
	}
	if(form.bank_name.value=="")
	{
		alert("请填写开户人姓名！");
		form.bank_name.focus();
		return false;
	}
	if(form.bank_num.value=="")
	{
		alert("请填写银行卡号！");
		form.bank_num.focus();
		return false;
	}

	return true;
}
</SCRIPT>
<div class="head"><h2 id="navtit">绑定银行卡</h2><a href="javascript:history.go(-1);" class="btn-qgkj" id="sourceUrl"><span><em></em></span>返回</a></div>
<div abbr="绑定银行卡" class="uc_wap">
<div class="login"> 
<form name="form1" onSubmit="return check(this);" action="Securityinfo.asp?action=Bank" method="post">
	<div class="login_list">
		<ul>
			<li>
				<div class="f_box bd_box">
					<em>开户银行</em>
					<select name="bank_bank" id="bank_bank" style="font-size:16px;">
<option value="" selected>请选择银行？</option>
<option value="工商银行">工商银行</option>
<option value="建设银行">建设银行</option>
<option value="中国银行">中国银行</option>
<option value="农业银行">农业银行</option>
<option value="交通银行">交通银行</option>
<option value="招商银行">招商银行</option>
<option value="中信银行">中信银行</option>
<option value="兴业银行">兴业银行</option>
<option value="光大银行">光大银行</option>
<option value="华夏银行">华夏银行</option>
<option value="民生银行">民生银行</option>
<option value="邮政银行">邮政银行</option>
<option value="农商银行">农商银行</option>
<option value="恒丰银行">恒丰银行</option>
<option value="平安银行">平安银行</option>
<option value="渤海银行">渤海银行</option>
<option value="亚洲银行">亚洲银行</option>
<option value="兴业银行">兴业银行</option>
<option value="广发银行">广发银行</option>
<option value="深发银行">深发银行</option>
<option value="浦发银行">浦发银行</option>
<option value="其它银行" >其它银行</option> 
</select>
				</div>
			</li>
			<li>
				<div class="f_box bd_box">
					<em>开户行名</em>
					<input id="bank_area" name="bank_area" type="text" class="txt color_black">
				</div>
			</li>
			<li>
				<div class="f_box bd_box">
					<em>开户人名</em>
					<input id="bank_name" name="bank_name" type="text" class="txt color_black">
				</div>
			</li>
			<li>
				<div class="f_box bd_box">
					<em>银行卡号</em>
					<input id="bank_num" name="bank_num" type="text" class="txt color_black">
				</div>
			</li>
		</ul>
	</div>
	<input class="login_btn" type="submit" value="立即绑定">
</form>
</div>
</div>
<%
else
Response.Write "<script>alert('你还没有绑定手机号码！');location.href='Securityinfo.asp?action=Phone'</script>"
end if
else
Response.Write "<script>alert('你还没有绑定真实姓名！');location.href='Securityinfo.asp?action=Info'</script>"
end if
end Sub
Sub Info()
truename=KR(request.Form("truename"))
identityid=KR(request.Form("identityid"))
sql = "select * from KR_User where username='"&session("un")&"'"
set rs = conn.execute(sql)

if identityid<> "" then
	if identityid=rs("identityid") then
	rs.close:set rs=nothing
	Response.Write "<script>alert('此身份证号已存在，请勿重复绑定！');history.go(-1);</script>"
	response.end
	end if
end if

if truename <> "" or identityid <> ""  then
if rs("userpass1")<>"" and rs("truename")<>"" and rs("identityid")<>"" and rs("email")<>"" and rs("tel")<>"" and rs("bank_area")<>"" and rs("bank_name")<>"" and rs("bank_bank")<>"" and rs("bank_num")<>"" then
islockset=",islock='1'"
else
islockset=""
end if
rs.close:set rs=nothing
sql = "update KR_User set truename='"&truename&"',identityid='"&identityid&"'"&islockset&" where username='"&session("un")&"'"
conn.execute(sql)
Response.Write "<script>alert('真实姓名绑定成功！');location.href='Securityinfo.html'</script>"
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
sql = "select * from KR_User where username='"&session("un")&"'"
set rs = conn.execute(sql)
if rs("userpass1")<>"" and rs("truename")<>"" and rs("identityid")<>"" and rs("email")<>"" and rs("tel")<>"" and rs("bank_area")<>"" and rs("bank_name")<>"" and rs("bank_bank")<>"" and rs("bank_num")<>"" then
islockset=",islock='1'"
else
islockset=""
end if
sql = "update KR_User set tel='"&tel&"'"&islockset&" where username='"&session("un")&"'"
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
sql = "select * from KR_User where username='"&session("un")&"'"
set rs = conn.execute(sql)
if rs("truename")<>"" and rs("identityid")<>"" and rs("email")<>"" and rs("tel")<>"" and rs("bank_area")<>"" and rs("bank_name")<>"" and rs("bank_bank")<>"" and rs("bank_num")<>"" then
islockset=",islock='1'"
else
islockset=""
end if
sql = "update KR_User set userpass1='"&md5(trim(KR(request.Form("ps1"))),16)&"'"&islockset&" where username='"&session("un")&"'"
conn.execute(sql)
Response.Write "<script>alert('提现密码设置成功！');location.href='Drawal.html';</script>"
end if
%>
<SCRIPT language=javascript>
function check(form){
	if(form.password.value=="")
	{
		alert("请输入旧提现密码!");
		form.password.focus();
		return false;
	}
	if(form.ps1.value=="")
	{
		alert("请输入新提现密码!");
		form.ps1.focus();
		return false;
	}
	if(form.ps2.value=="")
	{
		alert("请确认新提现密码!");
		form.ps2.focus();
		return false;
	}
	if(form.ps2.value!=form.ps1.value)
	{
		alert("两次输入的提现密码不一致!");
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
<div class="head"><h2 id="navtit">设置提现密码</h2><a href="javascript:history.go(-1);" class="btn-qgkj" id="sourceUrl"><span><em></em></span>返回</a></div>
<div abbr="修改提现密码" class="uc_wap">
<div class="login"> 
<form name="form1" onSubmit="return check(this);" action="Securityinfo.asp?action=QKPassword" method="post">
	<div class="login_list">
		<ul>
			<li>
				<div class="f_box bd_box">
					<em>提现密码</em>
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
	<input class="login_btn" type="submit" value="设置提现密码">
</form>
</div>
</div>
<%end Sub

Sub XGQKPassword

if KR(request.Form("ps1"))<>"" then
sql = "select * from KR_User where username='"&session("un")&"'"
set rs = conn.execute(sql)
if md5(trim(KR(request.Form("password"))),16)= rs("userpass1") OR isNull(rs("userpass1")) OR rs("userpass1") = "" then
if rs("userpass1")<>"" and rs("truename")<>"" and rs("identityid")<>"" and rs("email")<>"" and rs("tel")<>"" and rs("bank_area")<>"" and rs("bank_name")<>"" and rs("bank_bank")<>"" and rs("bank_num")<>"" then
islockset=",islock='1'"
else
islockset=""
end if
sql = "update KR_User set userpass1='"&md5(trim(KR(request.Form("ps1"))),16)&"'"&islockset&" where username='"&session("un")&"'"
conn.execute(sql)
Response.Write "<script>alert('提现密码修改成功！');location.href='Securityinfo.html';</script>"
else
Response.Write "<script>alert('输入旧提现密码错误！');location.href='Securityinfo.asp?action=XGQKPassword';</script>"
end if
end if
%>
<SCRIPT language=javascript>
function check(form){
	if($("#password").value){
		if(form.password.value=="")
		{
			alert("请输入旧提现密码!");
			form.password.focus();
			return false;
		}
	}
	if(form.ps1.value=="")
	{
		alert("请输入新提现密码!");
		form.ps1.focus();
		return false;
	}
	if(form.ps2.value=="")
	{
		alert("请确认新提现密码!");
		form.ps2.focus();
		return false;
	}
	if(form.ps2.value!=form.ps1.value)
	{
		alert("两次输入的提现密码不一致!");
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
<div class="head"><h2 id="navtit">修改提现密码</h2><a href="javascript:history.go(-1);" class="btn-qgkj" id="sourceUrl"><span><em></em></span>返回</a></div>
<div abbr="修改提现密码" class="uc_wap">
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
	<input class="login_btn" type="submit" value="修改提现密码">
</form>
</div>
</div>
<%end Sub

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
sql="select * from KR_User where username='"&session("un")&"'"
set rs=conn.execute(sql)

if KR(request.Form("modify"))<>"" then

truename=KR(request.Form("truename"))
identityid=KR(request.Form("identityid"))
birthday=KR(request.Form("birthday"))
sex=KR(request.Form("sex"))
tel=KR(request.Form("tel"))
qq=KR(request.Form("qq"))
email=KR(request.Form("email"))
address=KR(request.Form("address"))
pic=replace(KR(replace(request.Form("pic"),"/","zxg")),"zxg","/")
if pic<>"" then picset=",pic='"&pic&"'"

if identityid<> "" then
	if identityid=rs("identityid") then
	rs.close:set rs=nothing
	Response.Write "<script>alert('此身份证号已存在，请勿重复绑定！');history.go(-1);</script>"
	response.end
	end if
	identityidset=",identityid='"&identityid&"'"
end if

if truename<> "" then
truenameset=",truename='"&truename&"'"
end if

if rs("userpass1")<>"" and (rs("truename")<>"" or truename<>"") and (rs("identityid")<>"" or identityid<>"") and (rs("email")<>"" or email<>"") and (rs("tel")<>"" or tel<>"") and rs("bank_area")<>"" and rs("bank_name")<>"" and rs("bank_bank")<>"" and rs("bank_num")<>"" then
islockset=",islock='1'"
else
islockset=""
end if
rs.close:set rs=nothing
sql = "update KR_User set birthday='"&birthday&"',sex='"&sex&"',tel='"&tel&"',email='"&email&"',qq='"&qq&"',address='"&address&"'"&picset&truenameset&identityidset&islockset&" where username='"&session("un")&"'"
conn.execute(sql)
Response.Write "<script>alert('资料修改成功！');location.href='index.html'</script>"

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
					<em>用户昵称</em>
					<input type="text" name="address" id="address" value="<%=rs("address")%>" class="txt color_black" style="width:300px;"/>
				</div>
			</li>
			
				<li>
				<div class="f_box bd_box">
					<em>用户头像</em><span id="pic"><%if rs("pic")<>"" then response.Write("<img src='/"&rs("pic")&"' height='30'>")%></span>
					<input type="text" name="pic" id="picpic" value="" class="txt color_black" style="width:0px;"/><iframe src="../Include/KR.Upload.asp?lei=2&pid=pic" frameborder="0" width="70%" height="25" scrolling="No"></iframe>
				</div>
			</li>
			<li>
				<div class="f_box bd_box">
					<em>真实姓名</em>
					<%if rs("islock")="1" or (rs("truename")<>"" and not isnull(rs("truename"))) then%>*<%=right(rs("truename"),1)%><input type="hidden" name="truename" value="<%=rs("truename")%>"><%else%><input type="text" name="truename" id="truename" value="<%=rs("truename")%>" class="txt color_black"/><%end if%>
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
			
		</ul>
	</div>
	<input class="login_btn" type="submit" value="修改资料" name="modify">
</form>
</div>
</div>
<%end Sub%>
<!--#include file="../dh.asp"-->
</body>
</html>