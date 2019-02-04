<!--#include file="../Conn.asp"--><!doctype html>
<html><head><title>跟单大厅-<%=Setting(0)%></title>
<meta content="游戏，体育游戏，福利游戏，足彩，竞彩，游戏开奖，游戏合玩，走势图，游戏分析，过关统计" name="keywords">
<meta content="<%=Setting(0)%>是手机上最好的投注平台，10年游戏金牌服务经验，为游戏朋友提供安全的手机游戏投注、游戏合玩服务、游戏资讯" name="description">
<meta charset="GB2312">
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1, user-scalable=0;" name="viewport" />
<meta http-equiv="Content-Type" content="text/html; charset=GB2312" />
<meta name="format-detection" content="telephone=no" />
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<link href="/Css/Basic.css" rel="stylesheet">
<link href="/Css/Hm.css" rel="stylesheet">
<link href="../Css/User.css" rel="stylesheet">

<script language="javascript" type="text/javascript" src="/JS/jquery.js"></script>
<script language="javascript" type="text/javascript" src="/JS/Jquery-ui-1.8.2.custom.min.js"></script>
<script>var ttusername="<%=session("un")%>",ttun="";if(ttusername!="") ttun=ttusername;
	var coinType = '<%=Setting(56)%>';
	var coinUnit = '<%=Setting(58)%>';
</script>
<script src="/JS/tthm.js"></script>
 <div class="head"><h2 onClick="javascript:upcss();" id="navtit"><em id="jiangaa"></em><span id="jiange" class="head-arr"><em></em></span></h2><a href="../../index.asp" class="btn-qgkj" id="sourceUrl"><span><em></em></span>游戏大厅</a></div>
  <div class="pop-box2 none" id="jiangf">
    <div class="pop-box2-arr"></div>
    <div class="filt-popc">
      <ul>
	    <li><a href="javascript:cx(100);" class="btn-pop btn-pop-on plays" id="tstyle100" >全部跟单</a></li>
	  	<%if LotterySetting(20)="1" then%>
        <li><a href="javascript:cx(20);" class="btn-pop plays" id="tstyle20" >双色球</a></li><%end if%><%if LotterySetting(21)="1" then%>
        <li><a href="javascript:cx(21);" class="btn-pop plays" id="tstyle21" >福彩3D</a></li><%end if%><%if LotterySetting(22)="1" then%>
        <li><a href="javascript:cx(22);" class="btn-pop plays" id="tstyle22" >七乐彩</a></li><%end if%><%if LotterySetting(23)="1" then%>
        <li><a href="javascript:cx(23);" class="btn-pop plays" id="tstyle23" >15选5</a></li><%end if%><%if LotterySetting(30)="1" then%>
        <li><a href="javascript:cx(30);" class="btn-pop plays" id="tstyle30" >大乐透</a></li><%end if%><%if LotterySetting(31)="1" then%>
        <li><a href="javascript:cx(31);" class="btn-pop plays" id="tstyle31" >排列三</a></li><%end if%><%if LotterySetting(32)="1" then%>
        <li><a href="javascript:cx(32);" class="btn-pop plays" id="tstyle32" >排列五</a></li><%end if%><%if LotterySetting(33)="1" then%>
        <li><a href="javascript:cx(33);" class="btn-pop plays" id="tstyle33" >七星彩</a></li><%end if%><%if LotterySetting(34)="1" then%>
        <li><a href="javascript:cx(34);" class="btn-pop plays" id="tstyle34" >22选5</a></li><%end if%><%if LotterySetting(40)="1" then%>
        <li><a href="javascript:cx(40);" class="btn-pop plays" id="tstyle40" >胜负彩</a></li><%end if%><%if LotterySetting(41)="1" then%>
        <li><a href="javascript:cx(41);" class="btn-pop plays" id="tstyle41" >任选九场</a></li><%end if%><%if LotterySetting(42)="1" then%>
        <li><a href="javascript:cx(42);" class="btn-pop plays" id="tstyle42" >4场进球</a></li><%end if%><%if LotterySetting(43)="1" then%>
        <li><a href="javascript:cx(43);" class="btn-pop plays" id="tstyle43" >6场半全场</a></li><%end if%><%if LotterySetting(44)="1" then%>
        <li><a href="javascript:cx(44);" class="btn-pop plays" id="tstyle44" >竞彩足球</a></li><%end if%><%if LotterySetting(45)="1" then%>
        <li><a href="javascript:cx(45);" class="btn-pop plays" id="tstyle45" >竞彩篮球</a></li><%end if%><%if LotterySetting(46)="1" then%>
        <li><a href="javascript:cx(46);" class="btn-pop plays" id="tstyle46" >北京单场</a></li><%end if%><%if LotterySetting(0)="1" then%>
        <li><a href="javascript:cx(0);" class="btn-pop plays" id="tstyle0" >重庆时时彩</a></li><%end if%><%if LotterySetting(71)="1" then%>
        <li><a href="javascript:cx(71);" class="btn-pop plays" id="tstyle71" >河内五分彩</a></li><%end if%><%if LotterySetting(1)="1" then%>
        <li><a href="javascript:cx(1);" class="btn-pop plays" id="tstyle1" >江西时时彩</a></li><%end if%><%if LotterySetting(2)="1" then%>
        <li><a href="javascript:cx(2);" class="btn-pop plays" id="tstyle2" >天津时时彩</a></li><%end if%><%if LotterySetting(3)="1" then%>
        <li><a href="javascript:cx(3);" class="btn-pop plays" id="tstyle3" >新疆时时彩</a></li><%end if%><%if LotterySetting(4)="1" then%>
        <li><a href="javascript:cx(4);" class="btn-pop plays" id="tstyle4" >黑龙江时时彩</a></li><%end if%><%if LotterySetting(5)="1" then%>
        <li><a href="javascript:cx(5);" class="btn-pop plays" id="tstyle5" >江西11选5</a></li><%end if%><%if LotterySetting(6)="1" then%>
        <li><a href="javascript:cx(6);" class="btn-pop plays" id="tstyle6" >重庆11选5</a></li><%end if%><%if LotterySetting(7)="1" then%>
        <li><a href="javascript:cx(7);" class="btn-pop plays" id="tstyle7" >广东11选5</a></li><%end if%><%if LotterySetting(13)="1" then%>
        <li><a href="javascript:cx(13);" class="btn-pop plays" id="tstyle13" >安徽11选5</a></li><%end if%><%if LotterySetting(14)="1" then%>
        <li><a href="javascript:cx(14);" class="btn-pop plays" id="tstyle14" >江苏11选5</a></li><%end if%><%if LotterySetting(15)="1" then%>
        <li><a href="javascript:cx(15);" class="btn-pop plays" id="tstyle15" >辽宁11选5</a></li><%end if%><%if LotterySetting(59)="1" then%>
        <li><a href="javascript:cx(59);" class="btn-pop plays" id="tstyle59" >浙江11选5</a></li><%end if%><%if LotterySetting(16)="1" then%>
        <li><a href="javascript:cx(16);" class="btn-pop plays" id="tstyle16" >上海11选5</a></li><%end if%><%if LotterySetting(64)="1" then%>
        <li><a href="javascript:cx(64);" class="btn-pop plays" id="tstyle64" >福建11选5</a></li><%end if%><%if LotterySetting(65)="1" then%>
        <li><a href="javascript:cx(65);" class="btn-pop plays" id="tstyle65" >黑龙江11选5</a></li><%end if%><%if LotterySetting(66)="1" then%>
        <li><a href="javascript:cx(66);" class="btn-pop plays" id="tstyle66" >河北11选5</a></li><%end if%><%if LotterySetting(68)="1" then%>
        <li><a href="javascript:cx(68);" class="btn-pop plays" id="tstyle68" >新疆11选5</a></li><%end if%><%if LotterySetting(69)="1" then%>
        <li><a href="javascript:cx(69);" class="btn-pop plays" id="tstyle69" >天津11选5</a></li><%end if%><%if LotterySetting(70)="1" then%>
        <li><a href="javascript:cx(70);" class="btn-pop plays" id="tstyle70" >吉林11选5</a></li><%end if%><%if LotterySetting(8)="1" then%>
        <li><a href="javascript:cx(8);" class="btn-pop plays" id="tstyle8" >11运夺金</a></li><%end if%><%if LotterySetting(9)="1" then%>
        <li><a href="javascript:cx(9);" class="btn-pop plays" id="tstyle9" >时时乐</a></li><%end if%><%if LotterySetting(10)="1" then%>
        <li><a href="javascript:cx(10);" class="btn-pop plays" id="tstyle10" >江苏快3</a></li><%end if%><%if LotterySetting(18)="1" then%>
        <li><a href="javascript:cx(18);" class="btn-pop plays" id="tstyle18" >安徽快3</a></li><%end if%><%if LotterySetting(17)="1" then%>
        <li><a href="javascript:cx(17);" class="btn-pop plays" id="tstyle17" >吉林快3</a></li><%end if%><%if LotterySetting(19)="1" then%>
        <li><a href="javascript:cx(19);" class="btn-pop plays" id="tstyle19" >福建快3</a></li><%end if%><%if LotterySetting(50)="1" then%>
        <li><a href="javascript:cx(50);" class="btn-pop plays" id="tstyle50" >内蒙快3</a></li><%end if%><%if LotterySetting(51)="1" then%>
        <li><a href="javascript:cx(51);" class="btn-pop plays" id="tstyle51" >广西快3</a></li><%end if%><%if LotterySetting(52)="1" then%>
        <li><a href="javascript:cx(52);" class="btn-pop plays" id="tstyle52" >湖北快3</a></li><%end if%><%if LotterySetting(53)="1" then%>
        <li><a href="javascript:cx(53);" class="btn-pop plays" id="tstyle53" >河北快3</a></li><%end if%><%if LotterySetting(67)="1" then%>
        <li><a href="javascript:cx(67);" class="btn-pop plays" id="tstyle67" >上海快3</a></li><%end if%><%if LotterySetting(11)="1" then%>
        <li><a href="javascript:cx(11);" class="btn-pop plays" id="tstyle11" >广东快乐十分</a></li><%end if%><%if LotterySetting(55)="1" then%>
        <li><a href="javascript:cx(55);" class="btn-pop plays" id="tstyle55" >湖南快乐十分</a></li><%end if%><%if LotterySetting(56)="1" then%>
        <li><a href="javascript:cx(56);" class="btn-pop plays" id="tstyle56" >辽宁快乐12</a></li><%end if%><%if LotterySetting(57)="1" then%>
        <li><a href="javascript:cx(57);" class="btn-pop plays" id="tstyle57" >浙江快乐12</a></li><%end if%><%if LotterySetting(58)="1" then%>
        <li><a href="javascript:cx(58);" class="btn-pop plays" id="tstyle58" >四川快乐12</a></li><%end if%>
      </ul>
    </div>
  </div>
</head>
<body>
<div align="center" style="margin:8px 0 0 0 ;overflow:hidden">
	<div class="a" style="width:43%">
	<label class="label">
         <select class="ttselect" onChange="javascript:cx1('jia');">
          <option value="">此游戏所有跟单</option>
         <option value="1">今天全部跟单</option>
         <option value="3">最近3天的跟单</option>
         <option value="70">最近7天的跟单</option> 
        </select>
    	</label></div><div class="a" style="width:22%">
    <label class="label">
         <select class="ttselect" onChange="javascript:cx1('jia');">
             <option value="">状态</option>
             <option value="0">未满员</option>
             <option value="1">满员</option>
             <option value="2">撤单</option> 
        </select>
    </label></div>
    <div class="a" style="width:25%"><label class="label">
         <select class="ttselect" onChange="javascript:cx1('jia');">
                <option value="">进度</option>
                <option value="0">10及以下</option>
                <option value="1">10%-20%</option>
                <option value="2">20%-30%</option>
                <option value="3">30%-40%</option>
                <option value="4">40%-50%</option>
                <option value="5">50%-60%</option>
                <option value="6">60%-70%</option>
                <option value="7">70%-80%</option>
                <option value="8">80%-90%</option>
                <option value="9">90%以上</option>
        </select>
    </label></div>
</div>
<div style="margin:10px 0 0 0">
<div id="list_data">
<div class="Mask"></div>
<div class="hm_cont"></div>
<div align="center" style="margin:10px 0 20px 0;display:block" id="jiangbb"><a id="jiang5" href="javascript:cx(100);"><div id="jiang4" class="jiang4"><font color="#FBF8F8" id="jiang3">点击加载更多...</font></div></a></div>
</div>
</div>
<div class="header" style="height:100%;background:#FFFCFC;display:none;" id="ttlogin">
	 <div class="head"><h2 onClick="javascript:upcss();" id="navtit"><em id="jiangaa">用户登录</em></h2><a href="../../index.asp" class="btn-qgkj" id="sourceUrl"><span><em></em></span>返回</a>
<a  class="btn-menu" href="/User/Reg/">注册</a></div>
<div class="uc_wap" id="wrapper">
	<div class="login"> 
		<div class="login_list" >
			<ul>
				<li>
					<div class="f_box">
						<em><font color="#000000">用户名</font></em>
						<input type="text" class="txt color_black"  name="UserName" id="UserName" value="">
					</div>
				</li>
				<li>
					<div class="f_box" >
						<em><font color="#000000">密&nbsp;&nbsp;&nbsp;码</font></em>
						<input type="password" class="txt color_black" name="password" id="password" value="">
					</div>
				</li>
				<li>
					<div class="f_box">
						<em><font color="#000000">验证码</font></em>
						<input type="text" style="width:60%;height:30px;" class="txt color_black" maxlength=4 name="Verifycode" id="Verifycode" onFocus="this.value='';" value="">
						<div class="ver_code" style="padding:4px 0 0 0" ><span id="showVerify"><img style='height:30px;cursor:pointer' title='点击刷新' align='absmiddle' src='../../plus/verifycode.asp?n=<%=Timer%>' onClick='this.src="../../plus/verifycode.asp?n="+ Math.random();'></span></div>
					</div>
				</li>
			</ul>
		</div>
		<input class="login_btn" id="user_login" type="button" onClick="return(CheckForm(this))" name="imagesb" value="登　 录">
	<!---<p class="ts_bottom"><a href="../Reg/">免费注册</a> <span class="color_red">新用户充40送60火热进行中！</span><br><a href="getpws.html">忘记密码？</a>--></p>
	</div>
</div>
</div>



<div class="tishi" align="center">
	<div class="tishi1"><div style="background:url(../Images/quxiao.png);width:50px;height:50px;" id="tishi4"></div><span id="tishi2"></sapn></div>
</div>


<!--#include file="../dh.asp"-->
</body>
</html>