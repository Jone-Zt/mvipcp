<!--#include file="UserLibraryFile.asp"-->
<!doctype html>
<head>
<title>我要兑换-<%=Setting(0)%></title>
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
<script type="text/javascript" src="/User/Js/Library.js"></script> 

</head>

<% Dim TiShi,DayNum,UerMoney
LoadingDrawing() %>

<body>

<div class="head"><h2 id="navtit">我要兑换</h2><a href="javascript:history.go(-1);" class="btn-qgkj" id="sourceUrl"><span><em></em></span>返回</a></div>

<div class="uc_wap" id="wrapper">
	<div class="login"> 

		<script language="javascript" type="text/javascript">
			function check(form){
				var cashMin = <%=Setting(31)%>,cash = Number(document.getElementById('getmoney').value),pas = document.getElementById('pass').value;

				if (pas == "") {
					alert("兑换密码不能为空！");
					return false;
				}
				if(isNaN(cash)){
					alert("<%=setting(56)%>必须为数字！");1
					return false;
				}
				if(cash < cashMin){
					alert('每次最少兑换'+cashMin);
					return false;
				}
				if(cash == 0){
					alert('请输入兑换<%=setting(56)%>');
					return false;
				}
				return true;
			}
		</script>

		<div class="login_list">
			<% If TiShi = "" Then %>
				<form method="post" onSubmit="javascript:Vip.Drawing(this.getmoney.value,this.pass.value,<%=Setting(31)%>);return false;">
							<ul>
								<li>
									<div class="f_box">
										<em>可用<%=setting(56)%></em>
										<span><%=formatnumber(bonusct,2,-1)%></span> <%=Setting(58)%>
									</div>
								</li>
								<li>
									<div class="f_box">
										<em>使用<%=setting(56)%></em>
										<input type="text" class="txt color_black" placeholder="请输入兑换<%=setting(56)%>" value="<%=Setting(31)%>" name="getmoney" id="getmoney" onKeyUp="this.value=this.value.replace(/[^\d]/g,'');" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))" tabindex="1">
									</div>
								</li>
								
								<li>
									<div class="f_box">
										<em>兑换密码</em>
										<input type="password" class="txt color_black" placeholder="请输入兑换密码" name="pass" id="pass" value="" tabindex="2">
									</div>
								</li>
							</ul>
						</div>
						<input class="login_btn" type="submit" name="imagesb" value=" 兑 换 ">
				</FORM>
			<% Else %>
				<div style="color:red;line-height:100px;" align="center">
	                <span><%=TiShi%></span>
	            </div>
			<% End If%>
	</div>
</div>
</body>
</html>