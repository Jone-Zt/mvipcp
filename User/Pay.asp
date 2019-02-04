<!--#include file="../Conn.asp"-->
<!--#include file="../Include/KR.CommonCls.asp"--><!doctype html>
<head>
<title>充值订单-<%=Setting(0)%></title>
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
<link href="../Content/bootstrap.min.css" rel="stylesheet" />
<script language="javascript">
    function PayFrm()
    {
        if (PayMent.PayMoney.value=="")
        {
            alert("提醒：请填写充值<%=setting(56)%>！");
            PayMent.PayMoney.focus();
            return false;
        }
        if (PayMent.Province.value=="")
        {
            alert("提醒：请填写所在省份！");
            PayMent.Province.focus();
            return false;
        }
        if (PayMent.City.value=="")
        {
            alert("提醒：请填写所在城市！");
            PayMent.City.focus();
            return false;
        }
        if (PayMent.PayWay.value=="")
        {
            alert("提醒：请填写充值方式！");
            PayMent.PayWay.focus();
            return false;
        }
        if (PayMent.PayName.value=="")
        {
            alert("提醒：请填写充值人姓名！");
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
<div class="head"><h2 id="navtit">充值订单</h2><a href="javascript:history.go(-1);" class="btn-qgkj" id="sourceUrl"><span><em></em></span>返回</a></div>
<div class="uc_wap">
<div class="login"> 
	<div class="login_list">
		<ul><%
i=0
do while not ra.eof
i=i+1


isOk = false
if ra("BankName")="支付宝" and Setting(47)= 1 then
isOk = true
list=1
list1="前往充值"
elseif ra("BankName")="微信" and Setting(48)= 1 then
isOk = true
list=2
list1="前往充值"
elseif Setting(30)= 1 then
isOk = true
list=""
list1="提交充值订单"
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
<div class="head"><h2 id="navtit"><%=request("BankName")%>充值</h2><a href="javascript:history.go(-1);" class="btn-qgkj" id="sourceUrl"><span><em></em></span>返回</a></div>
<div class="uc_wap">
<div class="login"> 
<form onSubmit="return PayFrm();" name="PayMent" action="BankPay_Save.asp" method="get">
		<div class="login_list">
			<ul>
				<li>
					<div class="f_box bd_box">
						<em>收款银行</em>
						<input type="text" class="txt color_black" placeholder="请输入银行类别" name="BankName" id="BankName" value="<%=request("BankName")%>" disabled="disabled" tabindex="2">
					</div>
				</li>
				<li>
					<div class="f_box bd_box">
						<em>收款人</em>
						<input type="text" class="txt color_black" placeholder="请输入收款人" name="BankUserName" id="BankUserName" value="<%=request("BankUserName")%>" disabled="disabled" tabindex="2">
					</div>
				</li>
				<li>
					<div class="f_box bd_box">
						<em>收款卡号</em>
						<input type="text" class="txt color_black" name="BankCode" id="BankCode" value="<%=request("BankID")%>" disabled="disabled" tabindex="2">
					</div>
				</li>
				<li>
					<div class="f_box bd_box">
						<em>开户银行</em>
						<input type="text" class="txt color_black" name="BankAdd" id="BankAdd" value="<%=request("Note")%>" disabled="disabled" tabindex="2">
					</div>
				</li>
				<li>
					<div class="f_box bd_box">
						<em>充值<%=setting(56)%></em>
						<input type="text" class="txt color_black" placeholder="请输入充值<%=setting(56)%>"  name="PayMoney" value="" id="PayMoney" tabindex="1">
					</div>
				</li>
				<li>
					<div class="f_box bd_box">
						<em>充值方式</em>
						<select style="font-size:16px;" name="PayWay">
<option value="">请选择...</option>
<option value="柜台转账">柜台转账</option>
<option value="ATM转账">ATM转账</option>
<option value="网银转帐">网银转帐</option>
<option value="电话转账">电话转账</option>
<option value="跨行转账">跨行转账</option>
<option value="手机转账">手机转账</option>
<option value="支付宝">支付宝</option>
<option value="财付通">财付通</option> 
<option value="其他方式" >其他方式</option> 
</select>
					</div>
				</li>
				<li>
					<div class="f_box bd_box">
						<em>充值账户</em>
						<input type="text" class="txt color_black" placeholder="输入充值卡号或姓名" name="PayName" id="PayName" value="" tabindex="2">
					</div>
				</li>
			</ul>
		</div>
		<input class="login_btn" type="submit" name="imagesb" value=" 提 交 ">
</FORM>
</div>
</div>
<%
end Sub
Sub Convert1

set ra=server.CreateObject("adodb.recordset")
sql = "select * from KR_PayBank where BankName='支付宝' order by id"
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

<div class="head"><h2 id="navtit">支付宝充值</h2><a href="javascript:history.go(-1);" class="btn-qgkj" id="sourceUrl"><span><em></em></span>返回</a></div>
<div class="uc_wap">
<div class="login"> 
		<div class="login_list" align="center" style="-webkit-user-select:text !important" >
        <input style="-webkit-user-select:text !important" type='text' id="Ali_Money"  placeholder="请输入冲值金额!" oninput="this.value=this.value.replace(/[^0-9.]+/,'');" /><hr />
        <button id="btn_alipay" onclick="SubPay('alipay','<%=rr("UserName") %>')" class="btn btn-lg btn-primary">点击在线支付</button>
        <p align="left" style="border-top:#eee solid 1px;font-size:14px;padding:10px;"><img src="../Images/my_ico.png" /><font style="color:#FC070B; border-radius:2px; padding-left:5px;">温馨提示:</font>在冲值过程中如遇到问题,请及时联系客服微信:sty881121或者QQ:1661137878。</p>
		</div>
</div>
</div>
<script type="text/javascript">
    function SubPay(type, userName) {
        if (type == null || type == "") alert("支付类型错误!");
        if (type == "alipay") {
            var money = document.getElementById("Ali_Money");
            if (money.value == "" || parseFloat(money.value) <= 0) {
                alert("支付金额错误!");
                return false;
            } else {
                location.href = "http://pay.ibukings.com/Handler.ashx?accountid=" + userName + "&amount=" + parseFloat(money.value) + "&qudaoid=1111";
            }
        }
    }
	function IsAction(obj){
		if(obj.amount.value == ""){
			alert("请输入充值<%=setting(56)%>");
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
<div class="head"><h2 id="navtit">微信充值</h2><a href="javascript:history.go(-1);" class="btn-qgkj" id="sourceUrl"><span><em></em></span>返回</a></div>
<div class="uc_wap">
<div class="login"> 
		<div class="login_list" align="center">
        <input style="-webkit-user-select:text !important" type='text' id="Wx_Money"  placeholder="请输入冲值金额!" oninput="this.value=this.value.replace(/[^0-9.]+/,'');" /><hr />
        <button id="btn_Wx" onclick="WXPay('<%= jj("UserName")%>')" class="btn btn-lg btn-primary">点击在线支付</button>
              <p align="left" style="border-top:#eee solid 1px;font-size:14px;padding:10px;"><img src="../Images/my_ico.png" /><font style="color:#FC070B; border-radius:2px; padding-left:5px;">温馨提示:</font>在冲值过程中如遇到问题,请及时联系客服微信:sty881121或者QQ:1661137878。</p>
		</div>
</div>
</div>
    <script type="text/javascript">
        function WXPay(userName) {
            if (userName == "") {
                alert("冲值帐户不正确!");
                return false;
            }
                var money = document.getElementById("Wx_Money");
            if (money.value == "" || parseFloat(money.value) <= 0) {
                alert("支付金额错误!");
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
response.write"<script>alert('兑换的积分大于可兑换积分"&dqjf&"分！');document.location.href='?u=Convert'</script>"
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
sql = "insert into KR_Point (OrderID,UserName,Expense,Point,Explain) values('"&OrderID&"','"&session("un")&"','"&jfdh&"','"&jf&"','积分兑换')"
conn.execute(sql)
sql = "insert into KR_Bank_Back(username,LotteryName,LotteryType,back_money2,b_after,lotteryid,follows) values('"&session("un")&"','积分兑换','充值','"&dhmoney&"','"&ye&"','"&lotteryid&"','积分兑换:"&lotteryid&"')"
conn.execute(sql)
response.write"<script>alert('恭喜您积分兑换成功！');document.location.href='?u=Convert'</script>"
end if
end Sub
%>
<!--#include file="../dh.asp"-->
</body>
</html>