<!--#include file="../../Conn.asp"--><!doctype html><head>
<title>注册成功-<%=Setting(0)%></title>
<meta content="游戏，体育游戏，福利游戏，足彩，竞彩，游戏开奖，游戏合玩，走势图，游戏分析，过关统计" name="keywords">
<meta content="<%=Setting(0)%>是手机上最好的投注平台，10年游戏金牌服务经验，为游戏朋友提供安全的手机游戏投注、游戏合玩服务、游戏资讯" name="description">
<meta charset="GB2312">
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1, user-scalable=0;" name="viewport" />
<meta http-equiv="Content-Type" content="text/html; charset=GB2312" />
<meta name="format-detection" content="telephone=no" />
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<link href="/Css/Basic.css" rel="stylesheet">
<link href="/Css/User.css" rel="stylesheet">

   
<div class="head"><h2 onClick="javascript:upcss();" id="navtit"><em id="jiangaa">用户登录</em></h2><a href="../../index.asp" class="btn-qgkj" id="sourceUrl"><span><em></em></span>返回</a>
<a  class="btn-menu" href="/User/Reg/">注册</a></div>

<div class="uc_wap" id="wrapper">
	<div class="login reg_box"> 
		<div class="login_list">
			<ul>
				<li class="t_c user_txt"><i class="right_ico"></i>恭喜 <a href="#" id="userNmae"><%=session("un")%></a> 注册成功！</li>
				<!--
				<li class="color_red t_c ">
					活动：新用户专享,充20送10彩豆！
				</li>
				-->
				<li class="t_c reg_step">
					<a href="../Pay.html">充值试手气</a>
				</li>
				<li class="t_c reg_step">
					<a href="../">去用户中心</a>
				</li>
			</ul>
		</div>
	</div>
</div>
</body>
</html>