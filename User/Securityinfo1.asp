<!--#include file="../Conn.asp"-->
<!--#include file="../Include/KR.CommonCls.asp"-->
<!--#include file="../Include/md5.asp"--><!doctype html>
<head>
<title>�һ�����-<%=Setting(0)%></title>
<meta content="��Ϸ��������Ϸ��������Ϸ����ʣ����ʣ���Ϸ��������Ϸ���棬����ͼ����Ϸ����������ͳ��" name="keywords">
<meta content="<%=Setting(0)%>���ֻ�����õ�Ͷעƽ̨��10����Ϸ���Ʒ����飬Ϊ��Ϸ�����ṩ��ȫ���ֻ���ϷͶע����Ϸ���������Ϸ��Ѷ" name="description">
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
Response.Write "<script>alert('��¼�����޸ĳɹ���');location.href='Securityinfo1.html';</script>"
else
Response.Write "<script>alert('����ɵ�¼�������');location.href='Securityinfo1.asp?action=Password';</script>"
end if
end if
%>
<SCRIPT language=javascript>
function check(form){

if(form.username.value=="")
	{
		alert("�������û���!");
		form.username.focus();
		return false;
	}
	if(form.password.value=="")
	{
		alert("������ɵ�¼����!");
		form.password.focus();
		return false;
	}
	if(form.ps1.value=="")
	{
		alert("�������µ�¼����!");
		form.ps1.focus();
		return false;
	}
	if(form.ps2.value=="")
	{
		alert("��ȷ���µ�¼����!");
		form.ps2.focus();
		return false;
	}
	if(form.ps2.value!=form.ps1.value)
	{
		alert("��������ĵ�¼���벻һ��!");
		form.ps2.select();
		return false;
	}
	/*if(form.ps1.value.length<6||form.ps1.value.length>50)
	{
		alert("��¼���볤�Ȳ�����Ҫ��!");
		form.ps1.select();
		return false;
	}*/

	return true;
}
</SCRIPT>
<div class="head"><h2 id="navtit">�һ�����</h2><a href="javascript:history.go(-1);" class="btn-qgkj" id="sourceUrl"><span><em></em></span>����</a></div>
<div abbr="�޸�����" class="uc_wap">
<div class="login"> 
<form name="form1" onSubmit="return check(this);" action="Securityinfo1.asp?action=Password" method="post">
	<div class="login_list">
		<ul>
		<li>
				<div class="f_box bd_box">
					<em>�û���e</em>
					<input id="password" name="password" type="password" class="txt color_black">
				</div>
			</li>
			<li>
				<div class="f_box bd_box">
					<em>�ܱ���</em>
					<input id="password" name="password" type="password" class="txt color_black">
				</div>
			</li>
			<li>
				<div class="f_box bd_box">
					<em>������</em>
					<input id="ps1" name="ps1" type="password" class="txt color_black">
				</div>
			</li>
			<li>
				<div class="f_box bd_box">
					<em>�ظ�����</em>
					<input id="ps2" name="ps2" type="password" class="txt color_black">
				</div>
			</li>
		</ul>
	</div>
	<input class="login_btn" type="submit" value="�޸�����">
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
Response.Write "<script>alert('���������ڣ��뻻���û�����');history.go(-1);</script>"
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
Response.Write "<script>alert('��¼�����޸ĳɹ���');location.href='/User/Login/';</script>"
else
Response.Write "<script>alert('������Ϣ�������������룡');location.href='Securityinfo1.asp?action=Password';</script>"
end if
Response.Write "<script>alert('�����Ѵ��ڣ��뻻���û�������');location.href='/User/Login/';</script>"
end if
%>
<SCRIPT language=javascript>
function check(form){
if(form.username.value=="")
	{
		alert("�������û���!");
		form.username.focus();
		return false;
	}
if(form.answer.value=="")
	{
		alert("�������ܱ���!");
		form.answer.focus();
		return false;
	}	
	
	
	if(form.ps1.value=="")
	{
		alert("�������µ�¼����!");
		form.ps1.focus();
		return false;
	}
	if(form.ps2.value=="")
	{
		alert("��ȷ���µ�¼����!");
		form.ps2.focus();
		return false;
	}
	if(form.ps2.value!=form.ps1.value)
	{
		alert("��������ĵ�¼���벻һ��!");
		form.ps2.select();
		return false;
	}
	/*if(form.ps1.value.length<6||form.ps1.value.length>50)
	{
		alert("��¼���볤�Ȳ�����Ҫ��!");
		form.ps1.select();
		return false;
	}*/

	return true;
}
</SCRIPT>
<div class="head"><h2 id="navtit">��������</h2><a href="javascript:history.go(-1);" class="btn-qgkj" id="sourceUrl"><span><em></em></span>����</a></div>
<div abbr="�޸�����" class="uc_wap">
<div class="login"> 
<form name="form1" onSubmit="return check(this);" action="Securityinfo1.asp?action=Password" method="post">
	<div class="login_list">
		<ul>
		<li>
				<div class="f_box bd_box">
					<em>�û���</em>
					<input id="username" name="username" class="txt color_black">
				</div>
			</li>
			<li>
				<div class="f_box bd_box">
					<em>�ܱ���</em>
					<input id="answer" name="answer"  class="txt color_black">
				</div>
			</li>
			<li>
				<div class="f_box bd_box">
					<em>������</em>
					<input id="ps1" name="ps1" type="password" class="txt color_black">
				</div>
			</li>
			<li>
				<div class="f_box bd_box">
					<em>�ظ�����</em>
					<input id="ps2" name="ps2" type="password" class="txt color_black">
				</div>
			</li>
		</ul>
	</div>
	<input class="login_btn" type="submit" value="�޸�����">
</form>
</div>
</div>




<%end Sub%>
<!--#include file="../dh.asp"-->
</body>
</html>