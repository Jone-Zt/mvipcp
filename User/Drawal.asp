<!--#include file="../Conn.asp"-->
<!--#include file="../Include/md5.asp"-->
<!--#include file="../JScript.asp"-->
<!--#include file="GetNoMoney.asp"-->
<!doctype html>
<head>
<title>��Ҫ����-<%=Setting(0)%></title>
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
<script type="text/javascript" src="Js/bonusex.js"></script>
</head>
<body>
<%checksssion()
btm=KRA(request("btm"))%>
<div class="head"><h2 id="navtit"><%if btm<>"1" then response.Write("��Ҫ����") else response.Write("����ת��")%></h2><a href="javascript:history.go(-1);" class="btn-qgkj" id="sourceUrl"><span><em></em></span>����</a></div>
<div class="uc_wap" id="wrapper">
	<div class="login"> 
<%
if btm<>"1" then

nomoney = GetNoMoney(conn,session("un"),1)
'Response.Write("��ǰ���᣺"&nomoney)

sql="select uermoney,nomoney from KR_User where username='"&session("un")&"'"
set user =conn.execute(sql)
uermoney_ = user("uermoney")
nomoney_ = user("nomoney")

canMoney = uermoney_-nomoney_
if canMoney<0 then canMoney=0

adddate=cdate(date())
if instr(Setting(36),":")=0 then Setting(36)=Setting(36)&":00:00"
if instr(Setting(37),":")=0 then Setting(37)=Setting(37)&":00:00"

backtimem=cdate(FormatDateTime(addDate&" "&Setting(36),3))
backtimen=cdate(FormatDateTime(addDate&" "&Setting(37),3))

if backtimem<backtimen then
	if time()<backtimen and time()>backtimem then KR_Bank_Back=1
else
	if time()>backtimem or time()<backtimen then KR_Bank_Back=1
end if

if  KR_Bank_Back=1 then

set rs_n=server.createobject("adodb.recordset")
sqltext1="select count(id)  from KR_Bank_Back  where follows='���ֵȼ��ɹ�' and  username='"&session("un")&"' and (addtime between '"&addDate&"' and '"&addDate&" 23:59:59') "
rs_n.open sqltext1,conn,1,1
if not rs_n.eof then
bank_n=int(rs_n(0))
bank_m=Setting(33)-bank_n
end if
if bank_m<0 then bank_m=0
rs_n.close
set rs_n=nothing

sql = "select uermoney,truename,tel,regfrom,email,lock,islock,identityid,userpass1 from KR_User where username='"&session("un")&"'"
set rs = conn.execute(sql)
um = rs("uermoney")
identityid = rs("identityid")
truename = rs("truename")
tel = rs("tel")
email = rs("email")
islock = rs("islock")
locked = rs("lock")
userpass1= rs("userpass1")
rs.close
set rs = nothing

if Setting(24)=0 then canMoney=um
bonusct=int(canMoney/10)*10

bm = trim(KR(request.Form("getmoney")))
pass =  trim(KR(request.Form("pass")))
if bm<>"" and pass<>"" then
if bm mod 10<>0 then
Response.Write "<script>alert('ʹ��"&Setting(56)&"ֻ��Ϊ10�ı�����');location.href='Drawal.html';</script>"
Response.End
end if

if md5(trim(pass),16)<> userpass1 then
Response.Write "<script>alert('�����������');location.href='Drawal.html';</script>"
Response.End
end if

if bank_m=0 then
Response.Write "<script>alert('ÿ���������"&Setting(33)&"�Σ�');//location.href='Drawal.html';</script>"
Response.End
end if


if locked<>0 then
Response.Write "<script>alert('�����˺��Ѿ������ᣡ');location.href='Drawal.html';</script>"
Response.End
else
bm=abs(bm)
if cdbl(um)=0 or (cdbl(um)-cdbl(bm)<0)then
%><script>alert('����"&Setting(56)&"���㣡');location.href='Drawal.html';</script><%
Response.End
else 
if cdbl(bm)<backmoney then
%><script>alert('ÿ����������<%=Setting(31)%><%=setting(56)%>');location.href='Drawal.html';</script><%
Response.End
end if
if bm>bonusct then
%>
<script>alert('�����������<%=bonusct%><%=setting(56)%>');</script>
<%
else
ba = cstr(cdbl(um)-cdbl(bm))
sql = "update KR_User set uermoney=uermoney-"&cdbl(bm)&",IceMoney=IceMoney+"&cdbl(bm)&" where username = '"&session("un")&"'"
conn.execute(sql)

oidqk="DH"&getDateStr()
follows="�������ֵȼ�:"&oidqk
sql = "insert into KR_Bank_Back(username,LotteryName,LotteryType,back_money,b_befor,b_after,lotteryid,follows,daili) values('"&session("un")&"','����һ�','�һ�','"&bm&"','"&um&"','"&um-bm&"','"&oidqk&"','"&follows&"','"&session("daili")&"')"
conn.execute(sql)
Response.Write "<script>alert('���ֳɹ�����ȴ�������Ա����');location.href='Details.html?d=5';</script>"
end if

end if
end if
end if
%>
<script language="javascript" type="text/javascript">
var st56="<%=Setting(56)%>";
var st58="<%=Setting(58)%>";
var st31="<%=Setting(31)%>";
function check(form){
var cashMin = <%=Setting(31)%>;
var cash = Number(document.getElementById('getmoney').value);
var pas = document.getElementById('pass').value;

if (pas == "") {
alert("�������벻��Ϊ�գ�");
document.getElementById('pass').focus();
return false;
}
if(isNaN(cash)){
alert("<%=setting(56)%>����Ϊ���֣�");1
return false;
}
if(cash < cashMin){
alert('ÿ����������'+cashMin);
return false;
}
if(cash == 0){
alert('����������<%=setting(56)%>');
return false;
}
return true;
}
</script>
<%



if truename<>"" and identityid<>"" then
if tel<>"" then
	if userpass1<>"" then
		
		'if islock="1" then
		if true then
		%>
		<form name="frm" method="post" action="" onSubmit="return check(this);">
				<div class="login_list">
					<ul>
						<li>
							<div class="f_box">
								<em>���ִ���</em>
								<span>���������֣�<b style="color: #FF0000"><%=Setting(33)-bank_m%></b> �Σ��������֣�<b style="color: #FF0000"><%=bank_m%></b> ��</span>
							</div>
						</li>
						<li>
							<div class="f_box">
								<em>����<%=setting(56)%></em>
								<b style="color: #FF0000" id="exb"><%=bonusct%></b> <%=Setting(58)%>
							</div>
						</li>
<%if bonusct>0 and bonusct-Setting(31)>=0 then
ifdh=1
%>
						
						<li>
							<div class="f_box">
								<em>ʹ��<%=setting(56)%></em>
								<input type="text" class="txt color_black" placeholder="����������<%=setting(56)%>" value="<%=bonusct%>" name="getmoney" id="getmoney" onKeyUp="this.value=this.value.replace(/[^\d]/g,'');" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))" tabindex="1">
							</div>
						</li>
						
						<li>
							<div class="f_box">
								<em>��������</em>
								<input type="password" class="txt color_black" placeholder="��������������" name="pass" id="pass" value="" tabindex="2">
							</div>
						</li>
<%
elseif bonusct<Setting(31) then
response.write("<li><div class='f_box'>δ�ﵽ�������ֶ��"&Setting(31)&Setting(56)&"���������֡�</div></li>")
else
response.write("<li><div class='f_box'>Ͷע���δ�ﵽ�ϴγ�ֵ��"&Setting(24)&"%���������ֵȼ���</div></li>")
end if%>
					</ul>
				</div>
				<%if ifdh=1 then%><input class="login_btn" type="submit" name="imagesb" value=" �� �� "><%end if%>
		</form>
		<%
		else
		Response.Write "<script>alert('�������˻����Ϻ����ύ���֣�');location.href='Securityinfo.html'</script>"
		response.End()
		end if
	else
	Response.Write "<script>alert('�����������������룡');location.href='Securityinfo-action-QKPassword'</script>"
	response.End()
	end if
else
Response.Write "<script>alert('��������ֻ����룡');location.href='Securityinfo-action-Phone'</script>"
response.End()
end if
else
Response.Write "<script>alert('����������֤��');location.href='Securityinfo-action-Info'</script>"
response.End()
end if
else
%>
		<div class="login_list">
			<ul>
				<li>
					<div class="f_box"><b style="color: #FF0000">�Բ���,��������ָ����ʱ�����֣�����ʱ�䣺<%=Setting(36)%>~<%=Setting(37)%></b></div>
				</li>
			</ul>
		</div>
<%end if
else'----btm=1
	sql = "select UerMoney,bonusc,truename,tel,regfrom,email,lock,islock,identityid,userpass1 from KR_User where username='"&session("un")&"'"
	set rs = conn.execute(sql)
	umy=rs("UerMoney")
	um = rs("bonusc")
	identityid = rs("identityid")
	truename = rs("truename")
	tel = rs("tel")
	email = rs("email")
	islock = rs("islock")
	locked = rs("lock")
	userpass1= rs("userpass1")
	rs.close
	set rs = nothing
	
	getb=request("getb")
	passe=request("passe")
	if getb<>"" and passe<>"" then
		if md5(trim(passe),16)<> userpass1 then
		Response.Write "<script>alert('�����������');location.href='Drawal.html?btm=1';</script>"
		Response.End
		end if
		if getb-um>0 then
		Response.Write "<script>alert('������������');location.href='Drawal.html?btm=1';</script>"
		Response.End
		end if
		sql="update kr_user set UerMoney=UerMoney+"&getb&",Money=Money+"&getb&",bonusc=bonusc-"&getb&",bonuscall=bonuscall-"&getb&" where username='"&session("un")&"'"
		conn.execute(sql)
		ordere="ZH"&getDateStr()
		follows="����ת��:"&ordere
		sql = "insert into KR_Bank_Back(username,LotteryName,LotteryType,back_money,b_befor,b_after,lotteryid,follows,daili,back_state) values('"&session("un")&"','����ת��','����','"&getb&"','"&um&"','"&um-getb&"','"&ordere&"','����ת��:"&ordere&"','"&session("daili")&"','�Ѵ���')"
		conn.execute(sql)
		sql = "insert into KR_Bank_Back(username,LotteryName,LotteryType,back_money2,b_befor,b_after,lotteryid,follows,daili,back_state) values('"&session("un")&"','ת����ֵ','��ֵ','"&getb&"','"&umy&"','"&umy+getb&"','"&ordere&"','����ת��:"&ordere&"','"&session("daili")&"','�Ѵ���')"
		conn.execute(sql)
		Response.Write "<script>alert('ת���ɹ���');location.href='Details.html?d=7';</script>"
	end if
	
	if userpass1="" then
		response.write("δ�����������룬�������á�")
	elseif um<=0 then
		response.write("û�н���"&Setting(56)&"������ת����")
	else
		%>
        <form name="fbtm" method="post" action="?btm=1" onSubmit="return checke(this);">
            <div class="login_list">
                <div style="margin:10px;">��ܰ��ʾ������<%=Setting(56)%>ת��Ϊ�˻�<%=Setting(56)%>�������Ͷע��ת������Ϊ1:1��
                <br>
                ��ʹ�ý���<%=Setting(56)%>��<b style="color: #FF0000" id="exb"><%=um%></b> <%=Setting(58)%>
                </div>
                <ul>
                    <li>
                        <div class="f_box">
                            <em>ʹ��<%=Setting(56)%></em>
                            <span><input type="text" class="basic_txt gray" value="<%=um%>" name="getb" id="getb" onKeyUp="this.value=this.value.replace(/[^\d]/g,'');" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))" maxlength="7"> <%=Setting(58)%></span>
                        </div>
                    </li>
                    <li>
                        <div class="f_box">
                            <em>��������</em>
                            <span><input type="password" autocomplete="new-password" name="passe" id="passe" class="basic_txt gray"></span>
                        </div>
                    </li>
                </ul>
            </div>
            <input class="login_btn" type="submit" name="imagesb" value=" ת �� ">
       </form>
        <script language="javascript" type="text/javascript">
		function checke(form){
			var cashMin = <%=Setting(31)%>;
			var cash = Number(document.getElementById('getb').value);
			var pas = document.getElementById('passe').value;
			if(cash == 0 || cash ==""){
				alert('������Ҫ���ֵ�<%=Setting(56)%>����');
				document.getElementById('getb').focus();
				return false;
			}
			if(isNaN(cash)){
				alert("<%=Setting(56)%>����Ϊ���֣�");1
				return false;
			}
			if(cash><%=um%>){
				alert("�����ֻ��ת��<%=um%><%=Setting(58)%><%=Setting(56)%>");
				return false;
			}
			if (pas == "") {
				alert("�������벻��Ϊ�գ�");
				document.getElementById('passe').focus();
				return false;
			}
			return true;
		}
		</script>
	<%end if
end if'----btm=1
%>
</div>
</div>

<% closedb() %>
<!--#include file="../dh.asp"-->
</body>
</html>