<!--#include file="../../Conn.asp"-->
<%
if Setting(60)<>1 then
response.write "<script language=javascript>alert('��ƽ̨�ݲ������Զ�ע�Ṧ��');history.back(-1)</script>"
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
<title>��Աע��</title>
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
    alert('�������û�����');
    ObjForm.username.focus();
    return false;
  }
  
  if (ObjForm.username.value.length<4)
  {
    alert('�û�������������λ��');
    ObjForm.username.focus();
    return false;
  }
  
 if(ObjForm.tjrId.value == '') {
    alert('�������Ƽ���,�Ƽ��˲���Ϊ�գ�');
    ObjForm.tjrId.focus();
    return false;
  }


  if(ObjForm.password.value == '') {
    alert('�������û����룡');
    ObjForm.password.focus();
    return false;
  }
  if (ObjForm.password.value.length<6)
  {
    alert('�û����벻��������λ��');
    ObjForm.password.focus();
    return false;
  }
  
     if(ObjForm.answer.value == '') {
    alert('�������ܱ��𰸣�');
    ObjForm.answer.focus();
    return false;
  }
  if(ObjForm.password2.value == '') {
    alert('��ȷ���û����룡');
    ObjForm.password2.focus();
    return false;
  }
    if(ObjForm.password.value != ObjForm.password2.value)
    {
      alert("����ȷ�ϲ������");
      ObjForm.password2.focus();
      return  false;
    }
	
	 
  if (ObjForm.verifycode.value == '') {
    alert ('��������֤�룡');
    ObjForm.verifycode.focus();
    return false;
  }
}
//-->
</SCRIPT>
</head>
<body>
   <div class="head"><h2 onClick="javascript:upcss();" id="navtit"><em id="jiangaa">��Աע��</em></h2><a href="../../index.asp" class="btn-qgkj" id="sourceUrl"><span><em></em></span>����</a>
<a  class="btn-menu" href="/User/Reg/">ע��</a></div>
<form onSubmit="return(CheckForm(this))" name="LoginForm" method="post" action="Reginsert.html">
<div class="uc_wap" id="wrapper">
	<div class="login"> 
		<div class="login_list">
			<ul>
				<li>
					<div class="f_box">
						<em>�û���</em>
						<input type="text" class="txt color_black" placeholder="������4-20���ַ�" name="username" id="username" value="" tabindex="1">
					</div>
				</li>
				<li>
					<div class="f_box">
						<em>��&nbsp;��</em>
						<input type="password" class="txt color_black" placeholder="������6-20���ַ�" name="password" id="password" value="" tabindex="2">
					</div>
				</li>
				
				<li>
					<div class="f_box">
						<em>��&nbsp;��</em>
						<input  class="txt color_black" placeholder="�������ܱ���������������" name="answer" id="answer" value="" tabindex="2">
					</div>
				</li>
				
				
				<li><%if DailiName="" then%>
					<div class="f_box">
						<em>�Ƽ���</em>
						<input type="text" class="txt color_black" placeholder="�������Ƽ����û���" name="tjrId" id="tjrId" value="" tabindex="3">
					</div>
				</li><%else%><input type="hidden" name="tjrId" value="<%=DailiName%>"><%end if%>
			</ul>
		</div>
		<input class="login_btn" id="reg_btn" type="submit" name="imagesb" value="�ύע��">
		<p class="t_c"><span class="color_999">�ύע�ἴ��Ϊ����ͬ��</span>[�û�����]</p>
	</div>
</div>
</form>
</body>
</html>