<!--#include file="../Conn.asp"-->
<!--#include file="../Include/KR.CommonCls.asp"--><!doctype html>
<head>
<title>��ֵ����-<%=Setting(0)%></title>
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
<link href="../Content/bootstrap.min.css" rel="stylesheet" />
<script language="javascript">
    function PayFrm()
    {
        if (PayMent.PayMoney.value=="")
        {
            alert("���ѣ�����д��ֵ<%=setting(56)%>��");
            PayMent.PayMoney.focus();
            return false;
        }
        if (PayMent.Province.value=="")
        {
            alert("���ѣ�����д����ʡ�ݣ�");
            PayMent.Province.focus();
            return false;
        }
        if (PayMent.City.value=="")
        {
            alert("���ѣ�����д���ڳ��У�");
            PayMent.City.focus();
            return false;
        }
        if (PayMent.PayWay.value=="")
        {
            alert("���ѣ�����д��ֵ��ʽ��");
            PayMent.PayWay.focus();
            return false;
        }
        if (PayMent.PayName.value=="")
        {
            alert("���ѣ�����д��ֵ��������");
            PayMent.PayName.focus();
            return false;
        }
    return true;
    }
</script>
</head>
<body>
<%checksssion()%><%
Pay=request("Pay")
select case Pay
case "Main"  call Main()
case "Convert"  call Convert()
case "ConvertSave"  call ConvertSave()
case "Convert1"  call Convert1()
case "Convert2"  call Convert2()
case else
call Main()
end select
Sub Main()
set ra=server.CreateObject("adodb.recordset")
sql = "select * from KR_PayBank where IsDisabled='1' order by id"
ra.open sql,conn,1
%>
<div class="head"><h2 id="navtit">��ֵ����</h2><a href="javascript:history.go(-1);" class="btn-qgkj" id="sourceUrl"><span><em></em></span>����</a></div>
<div class="uc_wap">
<div class="login"> 
	<div class="login_list">
		<ul><%
i=0
do while not ra.eof
i=i+1


isOk = false
if ra("BankName")="֧����" and Setting(47)= 1 then
isOk = true
list=1
list1="ǰ����ֵ"
elseif ra("BankName")="΢��" and Setting(48)= 1 then
isOk = true
list=2
list1="ǰ����ֵ"
elseif Setting(30)= 1 then
isOk = true
list=""
list1="�ύ��ֵ����"
end if
if isOk then
					  
%>
			<li>
				<div class="f_box bd_box">
					<em><%=ra("BankName")%></em>
					  <a class="txt color_red" href="Pay.asp?Pay=Convert<%=list%>&BankName=<%=ra("BankName")%>&BankUserName=<%=ra("BankUserName")%>&BankID=<%=ra("BankID")%>&Note=<%=ra("Note")%>"><%=list1%></a>
				</div>
			</li><% end if
ra.movenext
loop
%>
		</ul>
	</div>
</div>
</div>
<%
end Sub
Sub Convert
%>
<div class="head"><h2 id="navtit"><%=request("BankName")%>��ֵ</h2><a href="javascript:history.go(-1);" class="btn-qgkj" id="sourceUrl"><span><em></em></span>����</a></div>
<div class="uc_wap">
<div class="login"> 
<form onSubmit="return PayFrm();" name="PayMent" action="BankPay_Save.asp" method="get">
		<div class="login_list">
			<ul>
				<li>
					<div class="f_box bd_box">
						<em>�տ�����</em>
						<input type="text" class="txt color_black" placeholder="�������������" name="BankName" id="BankName" value="<%=request("BankName")%>" disabled="disabled" tabindex="2">
					</div>
				</li>
				<li>
					<div class="f_box bd_box">
						<em>�տ���</em>
						<input type="text" class="txt color_black" placeholder="�������տ���" name="BankUserName" id="BankUserName" value="<%=request("BankUserName")%>" disabled="disabled" tabindex="2">
					</div>
				</li>
				<li>
					<div class="f_box bd_box">
						<em>�տ��</em>
						<input type="text" class="txt color_black" name="BankCode" id="BankCode" value="<%=request("BankID")%>" disabled="disabled" tabindex="2">
					</div>
				</li>
				<li>
					<div class="f_box bd_box">
						<em>��������</em>
						<input type="text" class="txt color_black" name="BankAdd" id="BankAdd" value="<%=request("Note")%>" disabled="disabled" tabindex="2">
					</div>
				</li>
				<li>
					<div class="f_box bd_box">
						<em>��ֵ<%=setting(56)%></em>
						<input type="text" class="txt color_black" placeholder="�������ֵ<%=setting(56)%>"  name="PayMoney" value="" id="PayMoney" tabindex="1">
					</div>
				</li>
				<li>
					<div class="f_box bd_box">
						<em>��ֵ��ʽ</em>
						<select style="font-size:16px;" name="PayWay">
<option value="">��ѡ��...</option>
<option value="��̨ת��">��̨ת��</option>
<option value="ATMת��">ATMת��</option>
<option value="����ת��">����ת��</option>
<option value="�绰ת��">�绰ת��</option>
<option value="����ת��">����ת��</option>
<option value="�ֻ�ת��">�ֻ�ת��</option>
<option value="֧����">֧����</option>
<option value="�Ƹ�ͨ">�Ƹ�ͨ</option> 
<option value="������ʽ" >������ʽ</option> 
</select>
					</div>
				</li>
				<li>
					<div class="f_box bd_box">
						<em>��ֵ�˻�</em>
						<input type="text" class="txt color_black" placeholder="�����ֵ���Ż�����" name="PayName" id="PayName" value="" tabindex="2">
					</div>
				</li>
			</ul>
		</div>
		<input class="login_btn" type="submit" name="imagesb" value=" �� �� ">
</FORM>
</div>
</div>
<%
end Sub
Sub Convert1

set ra=server.CreateObject("adodb.recordset")
sql = "select * from KR_PayBank where BankName='֧����' order by id"
ra.open sql,conn,1
If isNull(ra("BankID")) Then  
	raa = ""
Else
	raa = ra("BankID")
End If 
If isNull(ra("BankUserName")) Then  
	raa1 = ""
Else
	raa1 = ra("BankUserName")
End If 

sql="select * from KR_User where username='"&session("un")&"'"

set rr = conn.execute(sql)
UserID = rr("ID")
UserName = rr("UserName")
daili = rr("daili")
%>

<div class="head"><h2 id="navtit">֧������ֵ</h2><a href="javascript:history.go(-1);" class="btn-qgkj" id="sourceUrl"><span><em></em></span>����</a></div>
<div class="uc_wap">
<div class="login"> 
		<div class="login_list" align="center" style="-webkit-user-select:text !important" >
        <input style="-webkit-user-select:text !important" type='text' id="Ali_Money"  placeholder="�������ֵ���!" oninput="this.value=this.value.replace(/[^0-9.]+/,'');" /><hr />
        <button id="btn_alipay" onclick="SubPay('alipay','<%=rr("UserName") %>')" class="btn btn-lg btn-primary">�������֧��</button>
        <p align="left" style="border-top:#eee solid 1px;font-size:14px;padding:10px;"><img src="../Images/my_ico.png" /><font style="color:#FC070B; border-radius:2px; padding-left:5px;">��ܰ��ʾ:</font>�ڳ�ֵ����������������,�뼰ʱ��ϵ�ͷ�΢��:sty881121����QQ:1661137878��</p>
		</div>
</div>
</div>
<script type="text/javascript">
    function SubPay(type, userName) {
        if (type == null || type == "") alert("֧�����ʹ���!");
        if (type == "alipay") {
            var money = document.getElementById("Ali_Money");
            if (money.value == "" || parseFloat(money.value) <= 0) {
                alert("֧��������!");
                return false;
            } else {
                location.href = "http://pay.ibukings.com/Handler.ashx?accountid=" + userName + "&amount=" + parseFloat(money.value) + "&qudaoid=1111";
            }
        }
    }
	function IsAction(obj){
		if(obj.amount.value == ""){
			alert("�������ֵ<%=setting(56)%>");
			return false;
		}
		return true;
	};
</script>




<%
ra.close
Set rr = nothing
Set ra = Nothing
end Sub
Sub Convert2

sql="select * from KR_User where username='"&session("un")&"'"

set jj = conn.execute(sql)
UserID = jj("ID")
UserName = jj("UserName")
daili = jj("daili")
%>
<div class="head"><h2 id="navtit">΢�ų�ֵ</h2><a href="javascript:history.go(-1);" class="btn-qgkj" id="sourceUrl"><span><em></em></span>����</a></div>
<div class="uc_wap">
<div class="login"> 
		<div class="login_list" align="center">
        <input style="-webkit-user-select:text !important" type='text' id="Wx_Money"  placeholder="�������ֵ���!" oninput="this.value=this.value.replace(/[^0-9.]+/,'');" /><hr />
        <button id="btn_Wx" onclick="WXPay('<%= jj("UserName")%>')" class="btn btn-lg btn-primary">�������֧��</button>
              <p align="left" style="border-top:#eee solid 1px;font-size:14px;padding:10px;"><img src="../Images/my_ico.png" /><font style="color:#FC070B; border-radius:2px; padding-left:5px;">��ܰ��ʾ:</font>�ڳ�ֵ����������������,�뼰ʱ��ϵ�ͷ�΢��:sty881121����QQ:1661137878��</p>
		</div>
</div>
</div>
    <script type="text/javascript">
        function WXPay(userName) {
            if (userName == "") {
                alert("��ֵ�ʻ�����ȷ!");
                return false;
            }
                var money = document.getElementById("Wx_Money");
            if (money.value == "" || parseFloat(money.value) <= 0) {
                alert("֧��������!");
                return false;
            } else {
                location.href = "http://pay.ibukings.com/Handler.ashx?accountid=" + userName + "&amount=" + parseFloat(money.value) + "&qudaoid=2222";
            }
        }
    </script>
<%
end Sub
Sub ConvertSave
sql="select * from KR_User where username='"&session("un")&"'"
set rs=conn.execute(sql)
dqjf=rs("Point")
set rs=nothing
set jj=nothing
jfdh=KR(request.Form("Point"))
if clng(jfdh)>dqjf then
response.write"<script>alert('�һ��Ļ��ִ��ڿɶһ�����"&dqjf&"�֣�');document.location.href='?u=Convert'</script>"
else
dhmoney=jfdh/Setting(75)
sql = "update KR_User set uermoney=uermoney+'"&dhmoney&"',money=money+'"&dhmoney&"',Point=Point-'"&jfdh&"' where username='"&session("un")&"'"			
conn.execute(sql)
sql="select * from KR_User where username='"&session("un")&"'"
set lsm=conn.execute(sql)
jf=lsm("Point")
ye=lsm("UerMoney")
lotteryid="DH"&getDateStr()
OrderID="DH"&getDateStr()
sql = "insert into KR_Point (OrderID,UserName,Expense,Point,Explain) values('"&OrderID&"','"&session("un")&"','"&jfdh&"','"&jf&"','���ֶһ�')"
conn.execute(sql)
sql = "insert into KR_Bank_Back(username,LotteryName,LotteryType,back_money2,b_after,lotteryid,follows) values('"&session("un")&"','���ֶһ�','��ֵ','"&dhmoney&"','"&ye&"','"&lotteryid&"','���ֶһ�:"&lotteryid&"')"
conn.execute(sql)
response.write"<script>alert('��ϲ�����ֶһ��ɹ���');document.location.href='?u=Convert'</script>"
end if
end Sub
%>
<!--#include file="../dh.asp"-->
</body>
</html>