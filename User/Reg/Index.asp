<!--#include file="../../Conn.asp"-->
<%
if Setting(60)<>1 then
response.write "<script language=javascript>alert('本平台暂不开放自动注册功能');history.back(-1)</script>"
response.end
end if

if kr(request("u"))=""  then
U=conn.execute("select top 1 id from KR_User where daili=1 order by id ")(0)
else
set rs=Server.CreateObject("Adodb.Recordset")
sql="select * from KR_User where dldiy='"&kr(request("u"))&"'"
rs.open sql,conn,1,1
If  rs.eof Then
else
DailiName=rs("username")
userid=rs("id")
End If
end if
%><!doctype html>
<head>
<title>会员注册</title>
<meta charset="GB2312">
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1, user-scalable=0;" name="viewport" />
<meta http-equiv="Content-Type" content="text/html; charset=GB2312" />
<meta name="format-detection" content="telephone=no" />
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<link href="../../Css/Basic.css" rel="stylesheet">
<link href="../../Css/User.css" rel="stylesheet">
<SCRIPT type="text/JavaScript">
<!--
nereidFadeObjects = new Object();
nereidFadeTimers = new Object();
function nereidFade(object, destOp, rate, delta){
if (!document.all)
return
if (object != "[object]"){ 
setTimeout("nereidFade("+object+","+destOp+","+rate+","+delta+")",0);
return;
}
clearTimeout(nereidFadeTimers[object.sourceIndex]);
diff = destOp-object.filters.alpha.opacity;
direction = 1;
if (object.filters.alpha.opacity > destOp){
direction = -1;
}
delta=Math.min(direction*diff,delta);
object.filters.alpha.opacity+=direction*delta;
if (object.filters.alpha.opacity != destOp){
nereidFadeObjects[object.sourceIndex]=object;
nereidFadeTimers[object.sourceIndex]=setTimeout("nereidFade(nereidFadeObjects["+object.sourceIndex+"],"+destOp+","+rate+","+delta+")",rate);
}
}  
function CheckForm(ObjForm) {
  if(ObjForm.username.value == '') {
    alert('请输入用户名！');
    ObjForm.username.focus();
    return false;
  }
  
  if (ObjForm.username.value.length<4)
  {
    alert('用户名不能少于四位！');
    ObjForm.username.focus();
    return false;
  }
  
 if(ObjForm.tjrId.value == '') {
    alert('请输入推荐人,推荐人不能为空！');
    ObjForm.tjrId.focus();
    return false;
  }


  if(ObjForm.password.value == '') {
    alert('请输入用户密码！');
    ObjForm.password.focus();
    return false;
  }
  if (ObjForm.password.value.length<6)
  {
    alert('用户密码不能少于六位！');
    ObjForm.password.focus();
    return false;
  }
  
     if(ObjForm.answer.value == '') {
    alert('请输入密保答案！');
    ObjForm.answer.focus();
    return false;
  }
  if(ObjForm.password2.value == '') {
    alert('请确认用户密码！');
    ObjForm.password2.focus();
    return false;
  }
    if(ObjForm.password.value != ObjForm.password2.value)
    {
      alert("密码确认不相符！");
      ObjForm.password2.focus();
      return  false;
    }
	
	 
  if (ObjForm.verifycode.value == '') {
    alert ('请输入验证码！');
    ObjForm.verifycode.focus();
    return false;
  }
}
//-->
</SCRIPT>
</head>
<body>
   <div class="head"><h2 onClick="javascript:upcss();" id="navtit"><em id="jiangaa">会员注册</em></h2><a href="../../index.asp" class="btn-qgkj" id="sourceUrl"><span><em></em></span>返回</a>
<a  class="btn-menu" href="/User/Reg/">注册</a></div>
<form onSubmit="return(CheckForm(this))" name="LoginForm" method="post" action="Reginsert.html">
<div class="uc_wap" id="wrapper">
	<div class="login"> 
		<div class="login_list">
			<ul>
				<li>
					<div class="f_box">
						<em>用户名</em>
						<input type="text" class="txt color_black" placeholder="请输入4-20个字符" name="username" id="username" value="" tabindex="1">
					</div>
				</li>
				<li>
					<div class="f_box">
						<em>密&nbsp;码</em>
						<input type="password" class="txt color_black" placeholder="请输入6-20个字符" name="password" id="password" value="" tabindex="2">
					</div>
				</li>
				
				<li>
					<div class="f_box">
						<em>密&nbsp;保</em>
						<input  class="txt color_black" placeholder="请输入密保答案用于重置密码" name="answer" id="answer" value="" tabindex="2">
					</div>
				</li>
				
				
				<li><%if DailiName="" then%>
					<div class="f_box">
						<em>推荐人</em>
						<input type="text" class="txt color_black" placeholder="请输入推荐人用户名" name="tjrId" id="tjrId" value="" tabindex="3">
					</div>
				</li><%else%><input type="hidden" name="tjrId" value="<%=DailiName%>"><%end if%>
			</ul>
		</div>
		<input class="login_btn" id="reg_btn" type="submit" name="imagesb" value="提交注册">
		<p class="t_c"><span class="color_999">提交注册即视为您已同意</span>[用户条款]</p>
	</div>
</div>
</form>
</body>
</html>