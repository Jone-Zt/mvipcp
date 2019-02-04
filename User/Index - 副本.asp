<!--#include file="../Conn.asp"--><!doctype html>
<head>
<title>会员中心-<%=Setting(0)%></title>
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

</head>
<body>
<%checksssion()%>
  <div class="head"><h2 id="navtit">会员中心</h2><a href="../../index.asp" class="btn-qgkj" id="sourceUrl"><span><em></em></span>游戏大厅</a><a href="./logout.asp" class="btn-menu">退出</a></div>
<div class="wap">
    <div class="user_info_box">
            <div class="ov_hidden fl mgr30">
                 <i class="people_ico"></i><span id="uname"><%=session("un")%></span>
            </div>
            <%
			usermoney=0
			bonusc=0
			set rsmb = conn.execute("Select uermoney,bonusc From KR_User where username='"&session("un")&"'")
			if not rsmb.eof then
			usermoney=rsmb(0)
			bonusc=rsmb(1)
			end if
			rsmb.close:set rsmb=nothing
			%>
            <!--<div id="toaqzx" class="seg_c fl">安全等级 <span id="level">...</span></div>-->
            <div class="ov_hidden info_bt_btn clear">
            账户：<span id="balance1" class="color_red font_20"><%=usermoney%><em class="font_s"><%=setting(56)%></em></span><!--　奖金：<span id="balance2" class="color_red font_20"><%=bonusc%><em class="font_s"><%=setting(56)%></em></span>-->
                <div class="fr"><a href="Pay.html" class="uc_aut_btn red_btn"><span>充值</span></a><a href="Drawal.html" class="uc_aut_btn blue_btn"><span>兑换</span></a><!--<a href="Drawal.html?btm=1" class="uc_aut_btn blue_btn"><span>奖金转换</span></a>--></div>
            </div>
    </div>

	<div class="new_user_box">
    	<dl>
        	<dt class="all_icon_user icon_1"></dt>
            <a href="BuyRecord.html"><dd>投注记录</dd></a>
        </dl>
        <dl>
        	<dt class="all_icon_user icon_2"></dt>
            <a href="ZhongJiang.html"><dd>中奖记录</dd></a>
        </dl>
        <dl>
        	<dt class="all_icon_user icon_3"></dt>
            <a href="Details.html"><dd>资金明细</dd></a>
        </dl>
        <dl>
        	<dt class="all_icon_user icon_4"></dt>
            <a href="Point.html"><dd>我的积分</dd></a>
        </dl>       
    </div>
    
    <div class="new_user_box mt10">
    	<dl>
        	<dt class="all_icon_user icon_5"></dt>
            <a href="Securityinfo.html"><dd>安全中心</dd></a>
        </dl>
        <dl>
        	<dt class="all_icon_user icon_6"></dt>
            <a href="Securityinfo.html?action=Infoo"><dd>修改用户资料</dd></a>
        </dl>
        <dl>
        	<dt class="all_icon_user icon_6"></dt>
            <a href="Securityinfo.html?action=Password"><dd>修改登录密码</dd></a>
        </dl>
        <dl>
        	<dt class="all_icon_user icon_6"></dt>
            <a href="Securityinfo.html?action=XGQKPassword"><dd>修改兑换密码</dd></a>
        </dl>
    </div>
<!--#include file="../dh.asp"-->
</div>
</body>
</html>