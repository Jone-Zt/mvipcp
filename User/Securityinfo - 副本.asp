<!--#include file="../Conn.asp"-->
<!--#include file="../Include/KR.CommonCls.asp"-->
<!--#include file="../Include/md5.asp"--><!doctype html>
<head>
<title>��ȫ����-<%=Setting(0)%></title>
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
<div class="head"><h2 id="navtit">��ȫ����</h2><a href="javascript:history.go(-1);" class="btn-qgkj" id="sourceUrl"><span><em></em></span>����</a></div>
<div class="uc_wap">
<div class="login"> 
	<div class="mod_box">
		<ul class="bind_list"><%if unname="" or unid="" then%><a href="Securityinfo.asp?action=Info">
			<li style="border-top:0px;" abbr="name"> 
				<div class="all_icon un_user_icon"></div>
				<div class="sec_c fl"><b>δ����ʵ����</b><br><span class="color_999">�콱��ʱ�˶���ݵ�ƾ֤</span></div>
				<div class="sec_r color_blue">��<i class="arr_blue"></i></div>
			</li></a><%else%>
			<li style="border-top:0px;" abbr="name"> 
				<div class="all_icon user_icon"></div>
				<div class="sec_c fl"><b><%=left(unname,1)%>*&nbsp;&nbsp;<%=left(unid,3)%>***************</b><br><span class="color_999">�󶨺󽱽���ܶһ��ȼ�</span></div>
				<div class="sec_r">�Ѱ�<i class="arr_blue"></i></div>
			</li><%end if%><%if untel="" then%><a href="Securityinfo.asp?action=Phone">
			<li abbr="phone"> 
				<div class="all_icon un_ph_icon"></div>
				<div class="sec_c fl"><b>δ���ֻ�</b><br><span class="color_999">�һ����룬����<%=setting(56)%>�䶯����</span></div>
				<div class="sec_r color_blue">��<i class="arr_blue"></i></div>
			</li></a><%else%>
			<li abbr="phone"> 
				<div class="all_icon ph_icon"></div>
				<div class="sec_c fl"><b><%=left(untel,3)%>*****<%=right(untel,3)%></b><br><span class="color_999">�һ����룬����<%=setting(56)%>�䶯����</span></div>
				<div class="sec_r">�Ѱ�<i class="arr_blue"></i></div>
			</li><%end if%>
		</ul>
	</div>
	<div class="mod_box alt_box">
		<ul class="bind_list"><a href="Securityinfo.asp?action=Password">
			<li abbr="pwd">
				<div class="all_icon suo_icon"></div>
				<b>�޸ĵ�¼����</b>
				<div class="sec_r color_blue">�޸�<i class="arr_blue"></i></div>
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
Response.Write "<script>alert('�����֤���Ѵ��ڣ������ظ��󶨣�');history.go(-1);</script>"
response.end
End If
rss.close:set rss=nothing
end if

if truename <> "" or identityid <> ""  then
sql = "update KR_User set truename='"&truename&"',identityid='"&identityid&"' where username='"&session("un")&"'"
conn.execute(sql)
Response.Write "<script>alert('��ʵ�����󶨳ɹ���');location.href='Securityinfo.html'</script>"
set rs=nothing
end if
%><SCRIPT language=javascript>
function check(form){
	if(form.truename.value=="")
	{
		alert("����д��ʵ������");
		form.truename.focus();
		return false;
	}
	if(form.identityid.value=="")
	{
		alert("�������������֤���룡");
		form.identityid.focus();
		return false;
	}
	else if(form.identityid.value.length < 15 || form.identityid.value.length > 18 )
	{
		alert("���֤����Ӧ��Ϊ����15λС��18λ������");
		form.identityid.focus();
		return false;
	}
	return true;
}
</SCRIPT>
<div class="head"><h2 id="navtit">����ʵ����</h2><a href="javascript:history.go(-1);" class="btn-qgkj" id="sourceUrl"><span><em></em></span>����</a></div>
<div abbr="����ʵ����" class="uc_wap">
<div class="login"> 
<form name="form1" onSubmit="return check(this);" action="Securityinfo.asp?action=Info" method="post">
	<div class="login_list">
		<ul>
			<li>
				<div class="f_box bd_box">
					<em>��ʵ����</em>
					<input id="truename" name="truename" type="text" class="txt color_black" placeholder="������������ʵ����">
				</div>
			</li>
			<li>
				<div class="f_box bd_box">
					<em>���֤��</em>
					<input id="identityid" name="identityid" type="text" class="txt color_black" placeholder="�������������֤����">
				</div>
			</li>
		</ul>
	</div>
	<input class="login_btn" type="submit" value="������">
</form>
</div>
</div><%
end Sub
Sub Phone()
tel=KR(request.Form("tel"))
if tel <> "" then
sql = "update KR_User set tel='"&tel&"' where username='"&session("un")&"'"
conn.execute(sql)
Response.Write "<script>alert('�ֻ�����󶨳ɹ���');location.href='Securityinfo.html'</script>"
set rs=nothing
end if
%><SCRIPT language=javascript>
function check(form){
	if(form.tel.value=="")
	{
		alert("����д�ֻ����룡");
		form.tel.focus();
		return false;
	}
	else if(form.tel.value.length < 11 || form.tel.value.length > 11 )
	{
		alert("������Ӧ��Ϊ11λ������");
		form.tel.focus();
		return false;
	}
	return true;
}
</SCRIPT>
<div class="head"><h2 id="navtit">���ֻ�����</h2><a href="javascript:history.go(-1);" class="btn-qgkj" id="sourceUrl"><span><em></em></span>����</a></div>
<div abbr="���ֻ�����" class="uc_wap">
<div class="login"> 
<form name="form" onSubmit="return check(this);" action="" method="post">
	<div class="login_list">
		<ul>
			<li>
				<div class="f_box bd_box">
					<em>�ֻ�����</em>
					<input id="tel" name="tel" type="text" class="txt color_black" placeholder="�����������ֻ�����">
				</div>
			</li>
		</ul>
	</div>
	<input class="login_btn" type="submit" value="������">
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
Response.Write "<script>alert('��¼�����޸ĳɹ���');location.href='Securityinfo.html';</script>"
else
Response.Write "<script>alert('����ɵ�¼�������');location.href='Securityinfo.asp?action=Password';</script>"
end if
end if
%>
<SCRIPT language=javascript>
function check(form){
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
<div class="head"><h2 id="navtit">�޸�����</h2><a href="javascript:history.go(-1);" class="btn-qgkj" id="sourceUrl"><span><em></em></span>����</a></div>
<div abbr="�޸�����" class="uc_wap">
<div class="login"> 
<form name="form1" onSubmit="return check(this);" action="Securityinfo.asp?action=Password" method="post">
	<div class="login_list">
		<ul>
			<li>
				<div class="f_box bd_box">
					<em>������</em>
					<input id="password" name="password" type="password" class="txt color_black">
				</div>
			</li>
			<li>
				<div class="f_box bd_box">
					<em>�µ�¼</em>
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
Sub QKPassword
if KR(request.Form("ps1"))<>"" then
sql = "update KR_User set userpass1='"&md5(trim(KR(request.Form("ps1"))),16)&"' where username='"&session("un")&"'"
conn.execute(sql)
Response.Write "<script>alert('�һ������޸ĳɹ���');location.href='Drawal.html';</script>"
end if
%>
<SCRIPT language=javascript>
function check(form){
	if(form.password.value=="")
	{
		alert("������ɶһ�����!");
		form.password.focus();
		return false;
	}
	if(form.ps1.value=="")
	{
		alert("�������¶һ�����!");
		form.ps1.focus();
		return false;
	}
	if(form.ps2.value=="")
	{
		alert("��ȷ���¶һ�����!");
		form.ps2.focus();
		return false;
	}
	if(form.ps2.value!=form.ps1.value)
	{
		alert("��������Ķһ����벻һ��!");
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
<div class="head"><h2 id="navtit">�޸Ķһ�����</h2><a href="javascript:history.go(-1);" class="btn-qgkj" id="sourceUrl"><span><em></em></span>����</a></div>
<div abbr="�޸Ķһ�����" class="uc_wap">
<div class="login"> 
<form name="form1" onSubmit="return check(this);" action="Securityinfo.asp?action=QKPassword" method="post">
	<div class="login_list">
		<ul>
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
	<input class="login_btn" type="submit" value="�޸Ķһ�����">
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
Response.Write "<script>alert('�һ������޸ĳɹ���');location.href='Securityinfo.html';</script>"
else
Response.Write "<script>alert('����ɶһ��������');location.href='Securityinfo.asp?action=XGQKPassword';</script>"
end if
end if
%>
<SCRIPT language=javascript>
function check(form){
	if($("#password").value){
		if(form.password.value=="")
		{
			alert("������ɶһ�����!");
			form.password.focus();
			return false;
		}
	}
	if(form.ps1.value=="")
	{
		alert("�������¶һ�����!");
		form.ps1.focus();
		return false;
	}
	if(form.ps2.value=="")
	{
		alert("��ȷ���¶һ�����!");
		form.ps2.focus();
		return false;
	}
	if(form.ps2.value!=form.ps1.value)
	{
		alert("��������Ķһ����벻һ��!");
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
<div class="head"><h2 id="navtit">�޸Ķһ�����</h2><a href="javascript:history.go(-1);" class="btn-qgkj" id="sourceUrl"><span><em></em></span>����</a></div>
<div abbr="�޸Ķһ�����" class="uc_wap">
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
					<em>������</em>
					<input id="password" name="password" type="password" class="txt color_black">
				</div>
			</li>
			<%
				End If
			%>
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
	<input class="login_btn" type="submit" value="�޸Ķһ�����">
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
Response.Write "<script>alert('��¼�����޸ĳɹ���');location.href='Securityinfo.html';</script>"
else
Response.Write "<script>alert('����ɵ�¼�������');location.href='Securityinfo.asp?action=Password';</script>"
end if
end if
%>
<SCRIPT language=javascript>
function check(form){
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
<div class="head"><h2 id="navtit">�޸�����</h2><a href="javascript:history.go(-1);" class="btn-qgkj" id="sourceUrl"><span><em></em></span>����</a></div>
<div abbr="�޸�����" class="uc_wap">
<div class="login"> 
<form name="form1" onSubmit="return check(this);" action="Securityinfo.asp?action=Password" method="post">
	<div class="login_list">
		<ul>
			<li>
				<div class="f_box bd_box">
					<em>������</em>
					<input id="password" name="password" type="password" class="txt color_black">
				</div>
			</li>
			<li>
				<div class="f_box bd_box">
					<em>�µ�¼</em>
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
Response.Write "<script>alert('�����֤���Ѵ��ڣ������ظ��󶨣�');history.go(-1);</script>"
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
Response.Write "<script>alert('�����޸ĳɹ���');location.href='index.html'</script>"

end if
sql="select * from KR_User where username='"&session("un")&"'"
set rs=conn.execute(sql)
%>
<SCRIPT language=javascript>
function check(form){
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
<div class="head"><h2 id="navtit">�޸�����</h2><a href="javascript:history.go(-1);" class="btn-qgkj" id="sourceUrl"><span><em></em></span>����</a></div>
<div abbr="�޸�����" class="uc_wap">
<div class="login"> 
<form name="form1" onSubmit="return check(this);" action="Securityinfo-action-Infoo" method="post">
	<div class="login_list">
		<ul>
			<li>
				<div class="f_box bd_box">
					<em>�û���</em>
					<%=session("un")%>
				</div>
			</li>
			<li>
				<div class="f_box bd_box">
					<em>��ʵ����</em>
					<%if rs("islock")="1" or (rs("truename")<>"" and not isnull(rs("truename"))) then%>*<%=right(rs("truename"),1)%><%else%><input type="text" name="truename" id="truename" value="<%=rs("truename")%>" class="txt color_black"/><%end if%>
				</div>
			</li>
			<li>
				<div class="f_box bd_box">
					<em>���֤��</em>
					<%if rs("islock")="1" or (rs("identityid")<>"" and not isnull(rs("identityid"))) then%><%=left(rs("identityid"),10)%>********<%else%><input type="text" name="identityid" id="identityid" value="<%=rs("identityid")%>" class="txt color_black"/><%end if%>
				</div>
			</li>
			<li>
				<div class="f_box bd_box">
					<em>��������</em>
					<input type="text" id="birthday" name="birthday" value="<%=rs("birthday")%>" class="txt color_black"/>
				</div>
			</li>
			<li>
				<div class="f_box bd_box">
					<em>�����Ա�</em>
					<input type="radio" name="sex" <%if rs("sex")=1 then%>checked="checked"<%end if%> value="1" /> �� <input type="radio" name="sex" <%if rs("sex")=0 then%>checked="checked"<%end if%> value="0" /> Ů
				</div>
			</li>
            <li>
				<div class="f_box bd_box">
					<em>�绰����</em>
					<input type="text" name="tel" id="tel" value="<%=rs("tel")%>" class="txt color_black" onKeyUp="this.value=this.value.replace(/\D/gi,'')"/>
				</div>
			</li>
            <li>
				<div class="f_box bd_box">
					<em>Q Q ����</em>
					<input type="text" name="qq" id="qq" value="<%=rs("qq")%>" class="txt color_black" onKeyUp="this.value=this.value.replace(/\D/gi,'')"/>
				</div>
			</li>
            <li>
				<div class="f_box bd_box">
					<em>��������</em>
					<input type="text" name="email" id="email" value="<%=rs("email")%>" class="txt color_black"/>
				</div>
			</li>
			<li>
				<div class="f_box bd_box">
					<em>��ϵ��ַ</em>
					<input type="text" name="address" id="address" value="<%=rs("address")%>" class="txt color_black" style="width:300px;"/>
				</div>
			</li>
		</ul>
	</div>
	<input class="login_btn" type="submit" value="�޸�����" <%if rs("islock")=0 then%>name="modify"<%else%> disabled="disabled"<%end if%>>
</form>
</div>
</div>
<%end Sub%>

</body>
</html>