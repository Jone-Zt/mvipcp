<!--#include file="../Conn.asp"-->
<!--#include file="../Include/md5.asp"-->
<!--#include file="../JScript.asp"-->
<!--#include file="GetNoMoney.asp"-->
<!doctype html>
<head>
<title>我要提现-<%=Setting(0)%></title>
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
<script type="text/javascript" src="Js/bonusex.js"></script>
</head>
<body>
<%checksssion()
btm=KRA(request("btm"))%>
<div class="head"><h2 id="navtit"><%if btm<>"1" then response.Write("我要提现") else response.Write("奖金转换")%></h2><a href="javascript:history.go(-1);" class="btn-qgkj" id="sourceUrl"><span><em></em></span>返回</a></div>
<div class="uc_wap" id="wrapper">
	<div class="login"> 
<%
if btm<>"1" then

nomoney = GetNoMoney(conn,session("un"),1)
'Response.Write("当前冻结："&nomoney)

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
sqltext1="select count(id)  from KR_Bank_Back  where follows='提现等级成功' and  username='"&session("un")&"' and (addtime between '"&addDate&"' and '"&addDate&" 23:59:59') "
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
Response.Write "<script>alert('使用"&Setting(56)&"只能为10的倍数！');location.href='Drawal.html';</script>"
Response.End
end if

if md5(trim(pass),16)<> userpass1 then
Response.Write "<script>alert('提现密码错误！');location.href='Drawal.html';</script>"
Response.End
end if

if bank_m=0 then
Response.Write "<script>alert('每天最多提现"&Setting(33)&"次！');//location.href='Drawal.html';</script>"
Response.End
end if


if locked<>0 then
Response.Write "<script>alert('您的账号已经被冻结！');location.href='Drawal.html';</script>"
Response.End
else
bm=abs(bm)
if cdbl(um)=0 or (cdbl(um)-cdbl(bm)<0)then
%><script>alert('您的"&Setting(56)&"不足！');location.href='Drawal.html';</script><%
Response.End
else 
if cdbl(bm)<backmoney then
%><script>alert('每次最少提现<%=Setting(31)%><%=setting(56)%>');location.href='Drawal.html';</script><%
Response.End
end if
if bm>bonusct then
%>
<script>alert('本次最多提现<%=bonusct%><%=setting(56)%>');</script>
<%
else
ba = cstr(cdbl(um)-cdbl(bm))
sql = "update KR_User set uermoney=uermoney-"&cdbl(bm)&",IceMoney=IceMoney+"&cdbl(bm)&" where username = '"&session("un")&"'"
conn.execute(sql)

oidqk="DH"&getDateStr()
follows="申请提现等级:"&oidqk
sql = "insert into KR_Bank_Back(username,LotteryName,LotteryType,back_money,b_befor,b_after,lotteryid,follows,daili) values('"&session("un")&"','奖金兑换','兑换','"&bm&"','"&um&"','"&um-bm&"','"&oidqk&"','"&follows&"','"&session("daili")&"')"
conn.execute(sql)
Response.Write "<script>alert('提现成功，请等待工作人员处理！');location.href='Details.html?d=5';</script>"
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
alert("提现密码不能为空！");
document.getElementById('pass').focus();
return false;
}
if(isNaN(cash)){
alert("<%=setting(56)%>必须为数字！");1
return false;
}
if(cash < cashMin){
alert('每次最少提现'+cashMin);
return false;
}
if(cash == 0){
alert('请输入提现<%=setting(56)%>');
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
								<em>提现次数</em>
								<span>今天已提现：<b style="color: #FF0000"><%=Setting(33)-bank_m%></b> 次，还可提现：<b style="color: #FF0000"><%=bank_m%></b> 次</span>
							</div>
						</li>
						<li>
							<div class="f_box">
								<em>可用<%=setting(56)%></em>
								<b style="color: #FF0000" id="exb"><%=bonusct%></b> <%=Setting(58)%>
							</div>
						</li>
<%if bonusct>0 and bonusct-Setting(31)>=0 then
ifdh=1
%>
						
						<li>
							<div class="f_box">
								<em>使用<%=setting(56)%></em>
								<input type="text" class="txt color_black" placeholder="请输入提现<%=setting(56)%>" value="<%=bonusct%>" name="getmoney" id="getmoney" onKeyUp="this.value=this.value.replace(/[^\d]/g,'');" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))" tabindex="1">
							</div>
						</li>
						
						<li>
							<div class="f_box">
								<em>提现密码</em>
								<input type="password" class="txt color_black" placeholder="请输入提现密码" name="pass" id="pass" value="" tabindex="2">
							</div>
						</li>
<%
elseif bonusct<Setting(31) then
response.write("<li><div class='f_box'>未达到最少提现额度"&Setting(31)&Setting(56)&"，不能提现。</div></li>")
else
response.write("<li><div class='f_box'>投注额度未达到上次充值的"&Setting(24)&"%，不能提现等级。</div></li>")
end if%>
					</ul>
				</div>
				<%if ifdh=1 then%><input class="login_btn" type="submit" name="imagesb" value=" 兑 换 "><%end if%>
		</form>
		<%
		else
		Response.Write "<script>alert('请锁定账户资料后再提交提现！');location.href='Securityinfo.html'</script>"
		response.End()
		end if
	else
	Response.Write "<script>alert('请设置您的提现密码！');location.href='Securityinfo-action-QKPassword'</script>"
	response.End()
	end if
else
Response.Write "<script>alert('请绑定您的手机号码！');location.href='Securityinfo-action-Phone'</script>"
response.End()
end if
else
Response.Write "<script>alert('请绑定您的身份证！');location.href='Securityinfo-action-Info'</script>"
response.End()
end if
else
%>
		<div class="login_list">
			<ul>
				<li>
					<div class="f_box"><b style="color: #FF0000">对不起,请在我们指定的时间提现，提现时间：<%=Setting(36)%>~<%=Setting(37)%></b></div>
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
		Response.Write "<script>alert('提现密码错误！');location.href='Drawal.html?btm=1';</script>"
		Response.End
		end if
		if getb-um>0 then
		Response.Write "<script>alert('提现数量错误！');location.href='Drawal.html?btm=1';</script>"
		Response.End
		end if
		sql="update kr_user set UerMoney=UerMoney+"&getb&",Money=Money+"&getb&",bonusc=bonusc-"&getb&",bonuscall=bonuscall-"&getb&" where username='"&session("un")&"'"
		conn.execute(sql)
		ordere="ZH"&getDateStr()
		follows="奖金转换:"&ordere
		sql = "insert into KR_Bank_Back(username,LotteryName,LotteryType,back_money,b_befor,b_after,lotteryid,follows,daili,back_state) values('"&session("un")&"','奖金转换','提现','"&getb&"','"&um&"','"&um-getb&"','"&ordere&"','奖金转出:"&ordere&"','"&session("daili")&"','已处理')"
		conn.execute(sql)
		sql = "insert into KR_Bank_Back(username,LotteryName,LotteryType,back_money2,b_befor,b_after,lotteryid,follows,daili,back_state) values('"&session("un")&"','转换充值','充值','"&getb&"','"&umy&"','"&umy+getb&"','"&ordere&"','奖金转入:"&ordere&"','"&session("daili")&"','已处理')"
		conn.execute(sql)
		Response.Write "<script>alert('转换成功！');location.href='Details.html?d=7';</script>"
	end if
	
	if userpass1="" then
		response.write("未设置提现密码，请先设置。")
	elseif um<=0 then
		response.write("没有奖金"&Setting(56)&"，不能转换。")
	else
		%>
        <form name="fbtm" method="post" action="?btm=1" onSubmit="return checke(this);">
            <div class="login_list">
                <div style="margin:10px;">温馨提示：奖金<%=Setting(56)%>转换为账户<%=Setting(56)%>后可用于投注，转换比例为1:1。
                <br>
                可使用奖金<%=Setting(56)%>：<b style="color: #FF0000" id="exb"><%=um%></b> <%=Setting(58)%>
                </div>
                <ul>
                    <li>
                        <div class="f_box">
                            <em>使用<%=Setting(56)%></em>
                            <span><input type="text" class="basic_txt gray" value="<%=um%>" name="getb" id="getb" onKeyUp="this.value=this.value.replace(/[^\d]/g,'');" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))" maxlength="7"> <%=Setting(58)%></span>
                        </div>
                    </li>
                    <li>
                        <div class="f_box">
                            <em>提现密码</em>
                            <span><input type="password" autocomplete="new-password" name="passe" id="passe" class="basic_txt gray"></span>
                        </div>
                    </li>
                </ul>
            </div>
            <input class="login_btn" type="submit" name="imagesb" value=" 转 换 ">
       </form>
        <script language="javascript" type="text/javascript">
		function checke(form){
			var cashMin = <%=Setting(31)%>;
			var cash = Number(document.getElementById('getb').value);
			var pas = document.getElementById('passe').value;
			if(cash == 0 || cash ==""){
				alert('请输入要提现的<%=Setting(56)%>数量');
				document.getElementById('getb').focus();
				return false;
			}
			if(isNaN(cash)){
				alert("<%=Setting(56)%>必须为数字！");1
				return false;
			}
			if(cash><%=um%>){
				alert("您最多只能转换<%=um%><%=Setting(58)%><%=Setting(56)%>");
				return false;
			}
			if (pas == "") {
				alert("提现密码不能为空！");
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