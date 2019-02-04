<!--#include file="../../Conn.asp"--><!doctype html>
<head>
<title>会员登陆</title>
<meta charset="GB2312">
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1, user-scalable=0;" name="viewport" />
<meta http-equiv="Content-Type" content="text/html; charset=GB2312" />
<meta name="format-detection" content="telephone=no" />
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<link href="../../Css/Basic.css" rel="stylesheet">
<link href="../../Css/User.css" rel="stylesheet">
<script type="text/javascript">
<!--
function CheckForm(ObjForm) {
  if(ObjForm.UserName.value == '') {
    alert('请输入用户名！');
    ObjForm.UserName.focus();
    return false;
  }
  if(ObjForm.password.value == '') {
    alert('请输入密码！');
    ObjForm.password.focus();
    return false;
  }
  if (ObjForm.password.value.length<6)
  {
    alert('密码不能少于六位！');
    ObjForm.password.focus();
    return false;
  }
  if (ObjForm.Verifycode.value == '') {
    alert ('请输入验证码！');
    ObjForm.Verifycode.focus();
    return false;
  }
}
function ttback(){ history.back();}
//-->
</script>
</head>
<body>
	 <div class="head"><h2 onClick="javascript:upcss();" id="navtit"><em id="jiangaa">用户登录</em></h2><a href="../../index.asp" class="btn-qgkj" id="sourceUrl"><span><em></em></span>返回</a>
<a  class="btn-menu" href="/User/Reg/">注册</a></div>
<div class="uc_wap" id="wrapper">
	<div class="login"> 
	<FORM name="LoginForm" action="CheckUserLogin.html" method="post" onSubmit="return(CheckForm(this))">
		<div class="login_list" >
			<ul>
				<li>
					<div class="f_box">
						<em>用户名</em>
						<input type="text" class="txt color_black"  name="UserName" id="UserName" value="">
					</div>
				</li>
				<li>
					<div class="f_box" >
						<em>密&nbsp;&nbsp;&nbsp;码</em>
						<input type="password" class="txt color_black" name="password" id="password" value="">
					</div>
				</li>
				<li>
					<div class="f_box">
						<em>验证码</em>
						<input type="text" style="width:60%;height:30px;" class="txt color_black" maxlength=4 name="Verifycode" id="Verifycode" onFocus="this.value='';" value="">
						<div class="ver_code"><span id="showVerify"><img style='height:26px;cursor:pointer' title='点击刷新' align='absmiddle' src='../../plus/verifycode.asp?n=<%=Timer%>' onClick='this.src="../../plus/verifycode.asp?n="+ Math.random();'></span></div>
					</div>
				</li>
			</ul>
		</div>
        <input type="hidden" id="jiangurl" name="jiangurl" value="<%=request("aurl")%>">
		<input class="login_btn" id="user_login" type="submit" name="imagesb" value="登　 录">
		<p class="t_c"><span class="color_999">忘记密码请回答密保找回</span><a  href="/User/Securityinfo1.asp?action=Password">[找回密码]</a></p>
	</form>
	</div>
</div>
</body>
</html>