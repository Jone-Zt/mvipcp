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
bank_area=rr("bank_area")
bank_name=rr("bank_name")
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
				<div class="sec_c fl"><b><%=left(unname,1)%>*&nbsp;&nbsp;<%=left(unid,3)%>***************</b><br><span class="color_999">�󶨺󽱽�������ֵȼ�</span></div>
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
			</li><%end if%><%if bank_area<>"" and bank_name<>"" and bank_bank<>"" and bank_num<>"" then%>
            
			<li abbr="card"> 
				<div class="all_icon cd_icon"></div>
				<div class="sec_c fl"><b><%=bank_bank%>&nbsp;&nbsp;<%=left(bank_num,3)%>***********<%=right(bank_num,3)%></b><br><span class="color_999">��Ψһ�ÿ�������ȫ</span></div>
				<div class="sec_r">�Ѱ�<i class="arr_blue"></i></div>
			</li>
			
			<%else%>
            
            <a href="Securityinfo.asp?action=Bank">
			<li abbr="card"> 
				<div class="all_icon un_cd_icon"></div>
				<div class="sec_c fl"><b>δ�����п�</b><br><span class="color_999">��Ψһ�ÿ�������ȫ</span></div>
				<div class="sec_r color_blue">��<i class="arr_blue"></i></div>
			</li></a>
			
			<%end if%>
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
	
		<div class="mod_box alt_box">
		<ul class="bind_list"><a href="Securityinfo.asp?action=Bank">
			<li abbr="pwd">
				<div class="all_icon suo_icon"></div>
				<b>�޸����п���</b>
				<div class="sec_r color_blue">�޸�<i class="arr_blue"></i></div>
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
sql = "insert into KR_Bank_Back (LotteryID,UserName,LotteryName,LotteryType,back_money2,b_after,b_befor,back_state,follows) values('"&LotteryID&"','"&session("un")&"','������','�����п������ʽ�','"&Setting(69)&"','"&Setting(69)&"','"&ye-Setting(69)&"','�Ѵ���','�����п������ʽ�:"&LotteryID&"')"
conn.execute(sql)
end if
end if
response.write "<script>alert('�󶨳ɹ���');location.href='Securityinfo.html';</script>"
end if
%>
<SCRIPT language=javascript>
function check(form){
	if(form.bank_bank.value=="")
	{
		alert("��ѡ���������ƣ�");
		form.bank_bank.focus();
		return false;
	}
	if(form.bank_area.value=="")
	{
		alert("����д����֧�У�");
		form.bank_area.focus();
		return false;
	}
	if(form.bank_name.value=="")
	{
		alert("����д������������");
		form.bank_name.focus();
		return false;
	}
	if(form.bank_num.value=="")
	{
		alert("����д���п��ţ�");
		form.bank_num.focus();
		return false;
	}

	return true;
}
</SCRIPT>
<div class="head"><h2 id="navtit">�����п�</h2><a href="javascript:history.go(-1);" class="btn-qgkj" id="sourceUrl"><span><em></em></span>����</a></div>
<div abbr="�����п�" class="uc_wap">
<div class="login"> 
<form name="form1" onSubmit="return check(this);" action="Securityinfo.asp?action=Bank" method="post">
	<div class="login_list">
		<ul>
			<li>
				<div class="f_box bd_box">
					<em>��������</em>
					<select name="bank_bank" id="bank_bank" style="font-size:16px;">
<option value="" selected>��ѡ�����У�</option>
<option value="��������">��������</option>
<option value="��������">��������</option>
<option value="�й�����">�й�����</option>
<option value="ũҵ����">ũҵ����</option>
<option value="��ͨ����">��ͨ����</option>
<option value="��������">��������</option>
<option value="��������">��������</option>
<option value="��ҵ����">��ҵ����</option>
<option value="�������">�������</option>
<option value="��������">��������</option>
<option value="��������">��������</option>
<option value="��������">��������</option>
<option value="ũ������">ũ������</option>
<option value="�������">�������</option>
<option value="ƽ������">ƽ������</option>
<option value="��������">��������</option>
<option value="��������">��������</option>
<option value="��ҵ����">��ҵ����</option>
<option value="�㷢����">�㷢����</option>
<option value="�����">�����</option>
<option value="�ַ�����">�ַ�����</option>
<option value="��������" >��������</option> 
</select>
				</div>
			</li>
			<li>
				<div class="f_box bd_box">
					<em>��������</em>
					<input id="bank_area" name="bank_area" type="text" class="txt color_black">
				</div>
			</li>
			<li>
				<div class="f_box bd_box">
					<em>��������</em>
					<input id="bank_name" name="bank_name" type="text" class="txt color_black">
				</div>
			</li>
			<li>
				<div class="f_box bd_box">
					<em>���п���</em>
					<input id="bank_num" name="bank_num" type="text" class="txt color_black">
				</div>
			</li>
		</ul>
	</div>
	<input class="login_btn" type="submit" value="������">
</form>
</div>
</div>
<%
else
Response.Write "<script>alert('�㻹û�а��ֻ����룡');location.href='Securityinfo.asp?action=Phone'</script>"
end if
else
Response.Write "<script>alert('�㻹û�а���ʵ������');location.href='Securityinfo.asp?action=Info'</script>"
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
	Response.Write "<script>alert('�����֤���Ѵ��ڣ������ظ��󶨣�');history.go(-1);</script>"
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
Response.Write "<script>alert('��ʵ�����󶨳ɹ���');location.href='Securityinfo.html'</script>"
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
sql = "select * from KR_User where username='"&session("un")&"'"
set rs = conn.execute(sql)
if rs("userpass1")<>"" and rs("truename")<>"" and rs("identityid")<>"" and rs("email")<>"" and rs("tel")<>"" and rs("bank_area")<>"" and rs("bank_name")<>"" and rs("bank_bank")<>"" and rs("bank_num")<>"" then
islockset=",islock='1'"
else
islockset=""
end if
sql = "update KR_User set tel='"&tel&"'"&islockset&" where username='"&session("un")&"'"
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
sql = "select * from KR_User where username='"&session("un")&"'"
set rs = conn.execute(sql)
if rs("truename")<>"" and rs("identityid")<>"" and rs("email")<>"" and rs("tel")<>"" and rs("bank_area")<>"" and rs("bank_name")<>"" and rs("bank_bank")<>"" and rs("bank_num")<>"" then
islockset=",islock='1'"
else
islockset=""
end if
sql = "update KR_User set userpass1='"&md5(trim(KR(request.Form("ps1"))),16)&"'"&islockset&" where username='"&session("un")&"'"
conn.execute(sql)
Response.Write "<script>alert('�����������óɹ���');location.href='Drawal.html';</script>"
end if
%>
<SCRIPT language=javascript>
function check(form){
	if(form.password.value=="")
	{
		alert("���������������!");
		form.password.focus();
		return false;
	}
	if(form.ps1.value=="")
	{
		alert("����������������!");
		form.ps1.focus();
		return false;
	}
	if(form.ps2.value=="")
	{
		alert("��ȷ������������!");
		form.ps2.focus();
		return false;
	}
	if(form.ps2.value!=form.ps1.value)
	{
		alert("����������������벻һ��!");
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
<div class="head"><h2 id="navtit">������������</h2><a href="javascript:history.go(-1);" class="btn-qgkj" id="sourceUrl"><span><em></em></span>����</a></div>
<div abbr="�޸���������" class="uc_wap">
<div class="login"> 
<form name="form1" onSubmit="return check(this);" action="Securityinfo.asp?action=QKPassword" method="post">
	<div class="login_list">
		<ul>
			<li>
				<div class="f_box bd_box">
					<em>��������</em>
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
	<input class="login_btn" type="submit" value="������������">
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
Response.Write "<script>alert('���������޸ĳɹ���');location.href='Securityinfo.html';</script>"
else
Response.Write "<script>alert('����������������');location.href='Securityinfo.asp?action=XGQKPassword';</script>"
end if
end if
%>
<SCRIPT language=javascript>
function check(form){
	if($("#password").value){
		if(form.password.value=="")
		{
			alert("���������������!");
			form.password.focus();
			return false;
		}
	}
	if(form.ps1.value=="")
	{
		alert("����������������!");
		form.ps1.focus();
		return false;
	}
	if(form.ps2.value=="")
	{
		alert("��ȷ������������!");
		form.ps2.focus();
		return false;
	}
	if(form.ps2.value!=form.ps1.value)
	{
		alert("����������������벻һ��!");
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
<div class="head"><h2 id="navtit">�޸���������</h2><a href="javascript:history.go(-1);" class="btn-qgkj" id="sourceUrl"><span><em></em></span>����</a></div>
<div abbr="�޸���������" class="uc_wap">
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
	<input class="login_btn" type="submit" value="�޸���������">
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
	Response.Write "<script>alert('�����֤���Ѵ��ڣ������ظ��󶨣�');history.go(-1);</script>"
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
Response.Write "<script>alert('�����޸ĳɹ���');location.href='index.html'</script>"

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
					<em>�û��ǳ�</em>
					<input type="text" name="address" id="address" value="<%=rs("address")%>" class="txt color_black" style="width:300px;"/>
				</div>
			</li>
			
				<li>
				<div class="f_box bd_box">
					<em>�û�ͷ��</em><span id="pic"><%if rs("pic")<>"" then response.Write("<img src='/"&rs("pic")&"' height='30'>")%></span>
					<input type="text" name="pic" id="picpic" value="" class="txt color_black" style="width:0px;"/><iframe src="../Include/KR.Upload.asp?lei=2&pid=pic" frameborder="0" width="70%" height="25" scrolling="No"></iframe>
				</div>
			</li>
			<li>
				<div class="f_box bd_box">
					<em>��ʵ����</em>
					<%if rs("islock")="1" or (rs("truename")<>"" and not isnull(rs("truename"))) then%>*<%=right(rs("truename"),1)%><input type="hidden" name="truename" value="<%=rs("truename")%>"><%else%><input type="text" name="truename" id="truename" value="<%=rs("truename")%>" class="txt color_black"/><%end if%>
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
			
		</ul>
	</div>
	<input class="login_btn" type="submit" value="�޸�����" name="modify">
</form>
</div>
</div>
<%end Sub%>
<!--#include file="../dh.asp"-->
</body>
</html>