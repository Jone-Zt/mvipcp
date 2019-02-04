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
  <div class="head"><h2 id="navtit">会员中心</h2><a href="../../index.asp" class="btn-qgkj" id="sourceUrl"><span><em></em></span>返回</a><a href="./logout.asp" class="btn-menu">退出</a></div>
<div class="wap">
    <div class="user_info_box">
	
	   <%
			
			set address = conn.execute("Select address From KR_User where username='"&session("un")&"'")
			if not rsmb.eof then
			address=address(0)
			end if
			rsmb.close:set rsmb=nothing
			%>
			
			   <%
			
			set pic = conn.execute("Select pic From KR_User where username='"&session("un")&"'")
			if not rsmb.eof then
			pic=pic(0)
			end if
			rsmb.close:set rsmb=nothing
			%>
	
            <div class="ov_hidden fl mgr30" style="width:100%;padding-top:10px;">
                  <img src="/<%=pic%>" height="40" width="40"  style="border-radius:50%"> <span id="uname" class="usertopc">　账户：<%=session("un")%></span> <span id="uname" class="usertopc">　昵称：<%=address%> <a href="Securityinfo.html?action=Infoo">(点击修改)</a></span>
            </div>
            <%
			usermoney=0
			bonusc=0
			set rsmb = conn.execute("Select uermoney,record From KR_User where username='"&session("un")&"'")
			if not rsmb.eof then
			usermoney=rsmb(0)
			bonusc=rsmb(1)
			end if
			rsmb.close:set rsmb=nothing
			%>
            <!--<div id="toaqzx" class="seg_c fl">安全等级 <span id="level">...</span></div>-->
            <div class="ov_hidden info_bt_btn clear usertopc">
<hr style="height:1px;border:none;border-top:1px solid #6699ff;" />
            <ul class="userm" style="padding:8px 0;"><li style="border-right:1px solid #6699ff;">可用余额<br><span id="balance1" class="font_20"><%=usermoney%></span> <%=setting(56)%></li><li>奖金<br><span id="balance2" class="font_20"><%=bonusc%><%'当日中奖
			'drzj=conn.execute("select sum(back_money2) from KR_Bank_Back where username='"&session("un")&"'and follows like '系统派奖%' and datediff(d,addtime,getdate())=0")(0)
			'if drzj<>"" then response.write drzj else response.write("0")%></span> <%=setting(56)%></li></ul>
            </div>
    </div>

<ul class="userm lhcss" style="background-color:#fff;height:40px;padding:5px 0 5px"><li><span class="iconfont icon-3"></span> <a href="Pay.html" style="font-size:18px;" display:inline-block; vertical-align: middle;">充值</a></li><li><span class="iconfont icon-qianbao"></span> <a href="Drawal.html" style="font-size:18px; style="vertical-align: middle;"">提现</a></li></ul>

	<div class="new_user_box mt10">
    	<dl>
        	<dt class="iconfont icon-mingxi"></dt>
            <a href="BuyRecord.html"><dd>投注记录</dd></a>
        </dl>
        <dl>
        	<dt class="iconfont icon-mingxi"></dt>
            <a href="ZhongJiang.html"><dd>中奖记录</dd></a>
        </dl>
        <dl>
        	<dt class="iconfont icon-bokuanmingxi"></dt>
            <a href="Details.html"><dd>资金明细</dd></a>
        </dl>    
    </div>
    
    <div class="new_user_box mt10">
    	<dl>
        	<dt class="iconfont icon-anquan"></dt>
            <a href="Securityinfo.html"><dd>安全中心</dd></a>
        </dl>
        <dl>
        	<dt class="iconfont icon-xiugai"></dt>
            <a href="Securityinfo.html?action=Infoo"><dd>修改用户资料</dd></a>
        </dl>
        <dl>
        	<dt class="iconfont icon-lock"></dt>
            <a href="Securityinfo.html?action=Password"><dd>修改登录密码</dd></a>
        </dl>
        <dl>
        	<dt class="iconfont icon-lock"></dt>
            <a href="Securityinfo.html?action=XGQKPassword"><dd>修改兑换密码</dd></a>
        </dl>
    </div>
<%if session("daili")=1 then%>
    <div class="new_user_box mt10">
        <dl>
            <dt class="all_icon_user icon_1"></dt>
            <a href="Agent.html"><dd>会员列表</dd></a>
        </dl>

        <dl>
            <dt class="all_icon_user icon_2"></dt>
            <a href="Agent.html?Type=VipForm"><dd>消费报表</dd></a>
        </dl>

        <dl>
            <dt class="all_icon_user icon_3"></dt>
            <a href="Agent.html?Type=VipProgramme"><dd>方案列表</dd></a>
        </dl>

        <dl>
            <dt class="all_icon_user icon_2"></dt>
            <a href="Agent.html?Type=VipUrl"><dd>推广链接</dd></a>
        </dl>

        <dl>
            <dt class="all_icon_user icon_2"></dt>
            <a href="Agent_Add.html"><dd>添加会员</dd></a>
        </dl>
    </div>
<%end if%>
<div class="new_user_box mt10"></div>
</div>
</body>
</html>
<!--#include file="../dh.asp"-->