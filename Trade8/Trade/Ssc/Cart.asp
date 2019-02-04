<!--#include file="../../Conn.asp"--><!DOCTYPE html>
<html><head><meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title><%=Setting(0)%>-时时彩</title>
<meta charset="GBK">
<meta name="keywords" content="<%=Setting(0)%>游戏触屏版">
<meta name="description" content="<%=Setting(0)%>游戏触屏版">
<meta name="author" content="kurei.cn">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta name="copyright" content="Copyright @ kurei.cn 版权所有">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="format-detection" content="telephone=no">
<meta http-equiv="cleartype" content="on"> 
<link rel="stylesheet" href="../../Css/public.css">
<link rel="stylesheet" href="../../Css/mobile.css">
<link href="../../Css/Basic.css" rel="stylesheet">
<link href="../../Css/User.css" rel="stylesheet">
<script>var ttusername="<%=session("un")%>",ttun="";if(ttusername!="") ttun=ttusername;</script>
<script type="text/javascript" src="../JS/Libs.js"></script>
<script type="text/javascript" async src="../JS/GA.js"></script>
<script type="text/javascript" src="../JS/JxSsc/Cart.js?v=1524"></script>
<script type="text/javascript" src="../JS/PassTime.js?v=0.0.1"></script>
</head>
<body onLoad="javascript:jisuan();">
<div class="wrap">
  <div class="head"><h2 id="navtit">投注<em id="jiangd"></em></h2><a href="javascript:tback();" class="btn-qgkj"><span><em></em></span>继续选号</a></div>
  <div class="w320">
    <div class="area1">
      <div class="xq-tit" pt="F6" endtime="" prevtime="" issale="">
        <h2>第<cite id="showid" class="red"></cite>期选号内容</h2>
        <em class="red" id="showtime"></em>
      </div>
      <div class="buy-box">
        <ul id="mycart"></ul>
        <p id="tools"><a href="javascript:jisuan();" class="btn2 red" act="rnd1" method="1">机选1注</a><a href="javascript:jisuan();" class="btn2 red" act="rnd5" method="5">机选5注</a><a href="javascript:jisuan();" class="btn2" act="delall" method="0">全部删除</a></p>
      </div>
    </div>
    <div class="line-3"></div>
    <div class="area1">
      <div class="xq-nav"><a href="javascript:;" class="on" buy="0">投注</a><a href="javascript:;" buy="2" class="">合玩</a><a href="javascript:;" buy="1" class="">追号</a></div>
      <div class="infolist" id="k1">
        <table width="100%">
          <tbody><tr>
            <th>投注倍数:</th>
            <td><input name="bei" id="ownMul" type="tel" max="99999" maxlength="5" class="ipt-6" value="1">&nbsp;&nbsp;倍</td>
          </tr>
          <tr>
            <th>投注注数:</th>
            <td><strong class="red" id="ownCount">0</strong>注</td>
          </tr>
          <tr>
            <th>投注<%=setting(56)%>:</th>
            <td><strong class="red" id="ownMoney">0</strong><%=setting(56)%></td>
          </tr>
        </tbody></table>
      </div>
      <div class="infolist none" id="k2">
        <table width="100%">
          <tbody>
            <tr>
              <th>投注倍数</th>
              <td><input name="bei" type="tel" class="ipt-6" id="apMul" max="99999" maxlength="5" value="1">&nbsp;&nbsp;倍</td>
            </tr>
            <tr>
              <th>追号期数</th>
              <td><input name="qi" type="tel" maxlength="5" id="apNum" max="120" value="10" class="ipt-6">&nbsp;&nbsp;期 </td>
            </tr>
            <tr>
              <th>投注<%=setting(56)%></th>
              <td><strong class="red" id="apMoney">2</strong><%=setting(56)%></td>
            </tr>
            <tr>
              <td colspan="2"><input type="checkbox" class="check-1" id="stopbuy" checked="checked">方案中奖后自动停止追号 </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="infolist none" id="k3">
      <table width="100%">
        <tbody><tr>
          <th>投注倍数</th>
          <td><input onKeyUp="javascript:jisuan();" type="tel" class="ipt-6" max="500" maxlength="5" id="coopMul" value="1">倍</td>
        </tr>
        <tr>
          <th>方案<%=setting(56)%></th>
          <td><strong class="red" id="coopCount">
          </strong>注，<strong class="red" id="coopMoney">2</strong><%=setting(56)%></td>
        </tr><tr>
          <th>盈利提成</th>
          <td><select class="sel-7" id="royalty" name="royalty " autocomplete="off">
              <option value="0" selected="selected">0%</option>
              <option value="1">1%</option>
              <option value="2">2%</option>
              <option value="3">3%</option>
              <option value="4">4%</option>
              <option value="5">5%</option>
              <option value="6">6%</option>
              <option value="7">7%</option>
              <option value="8">8%</option>
              <option value="9">9%</option>
              <option value="10">10%</option>
            </select></td>
        </tr>

	    <tr>
          <th>我要分为</th>
          <td><input type="tel" onKeyUp="javascript:meFW();" onBlur="javascript:meFWabcd();" class="ipt-6" id="meFW" autocomplete="off" value="0" maxlength="7">份 <cite style="font-size:12px;">每份 <span class="red" id="meFWab">1</span> <%=setting(56)%></cite></td>
        </tr>


        <tr>
          <th>我要投注</th>
          <td><input type="tel" onBlur="javascript:meFWabc();" class="ipt-6" id="meRG" autocomplete="off" value="1" maxlength="7">份 <cite style="font-size:12px;">发起人至少投注5%</cite></td>
        </tr>
        <tr>
          <th>我要保底</th>
          <td><input type="tel" onBlur="javascript:meFWabc();" class="ipt-6" id="meBD" autocomplete="off" value="0" maxlength="7">份 <em id="baodibl"></em> <cite style="font-size:12px;">最多可保底<strong id="maxBD" class="red">1</strong>份</cite></td>
        </tr>
        <tr>
          <th>是否公开</th>
          <td><select class="sel-zj" name="ispublic" id="ispublic" autocomplete="off">
              <option value="0" selected="selected">公开</option>
              <option value="1">投注截止后公开</option>
                         <option value="2">仅跟单人可看</option>
              <option value="3">完全保密</option>
            </select></td>
        </tr>
        <tr>
            <th>方案标题</th>
            <td><input type="text" id="title" autocomplete="off" maxlength="30" class="ipt-c" value=""></td>
          </tr>
          <tr>
            <th>合玩宣言</th>
            <td><textarea id="content" autocomplete="off" class="ipt-mt">这个家伙很懒，只想中大奖</textarea></td>
        </tr>
        <tr>
          <th>您需支付</th>
          <td class="mycoop"><strong class="red" id="tsum">0</strong><%=setting(56)%>(投注<strong class="red" id="trengou">0</strong>份+保底<strong class="red" id="tbaodi">0</strong>份)</td>
        </tr>
      </tbody></table>
    </div> 
      <button class="btn btn100 btnof" id="pay_buy">立即投注</button>
  <div class="foot-tit">   
  	<%
	ttgeturl = Request.ServerVariables("PATH_INFO") &"?type="&request.QueryString("type") 
  if session("un") <> "" then
        response.write "<p><a href='../../User/' class='blue'>"&session("un")&"</a><span oclick='javascript:aausername='';' align='right'><a href='../../User/logout.asp' class='red'>[退出]</a></span></p>"
	else 
        response.write "<p><a style='font-size:20px;margin:12px 0 0 0;background:#FD3639' href='../../User/Login/?aurl="&ttgeturl&"' class='btn-h'>登录</a></p>"
     end if 
    %>
  <div class="gotop"><em class="large"></em><cite class="lartxt">回到顶部</cite></div>
</div>
</div>
<div class="header" style="height:100%;background:#FFFCFC;display:none;" id="ttlogin">
	 <div class="head"><h2 id="navtit"><em id="jiangaa">用户登录</em></h2><a href="../../index.asp" class="btn-qgkj" id="sourceUrl"><span><em></em></span>返回</a>
<a  class="btn-menu" href="/User/Reg/">注册</a></div>
<div class="uc_wap" id="wrapper">
	<div class="login"> 
	<FORM name="LoginForm" action="" method="post" onSubmit="return(CheckForm(this))">
		<div class="login_list" >
			<ul>
				<li>
					<div class="f_box">
						<em class="blue">用户名</em>
						<input type="text" class="txt color_black"  name="UserName" id="UserName" value="">
					</div>
				</li>
				<li>
					<div class="f_box" >
						<em class="blue">密&nbsp;&nbsp;&nbsp;码</em>
						<input type="password" class="txt color_black" name="password" id="password" value="">
					</div>
				</li>
				<li>
					<div class="f_box">
						<em class="blue">验证码</em>
						<input type="text" style="width:60%;height:30px;" class="txt color_black" maxlength=4 name="Verifycode" id="Verifycode" onFocus="this.value='';" value="">
						<div class="ver_code"><span id="showVerify"><img style='height:26px;cursor:pointer' title='点击刷新' align='absmiddle' src='../../plus/verifycode.asp?n=<%=Timer%>' onClick='this.src="../../plus/verifycode.asp?n="+ Math.random();'></span></div>
					</div>
				</li>
			</ul>
		</div>
		<input class="login_btn" id="user_login" type="submit" name="imagesb" value="登　 录">
	</form>
	<!---<p class="ts_bottom"><a href="../Reg/">免费注册</a> <span class="color_red">新用户充40送60彩豆火热进行中！</span><br><a href="getpws.html">忘记密码？</a>--></p>
	</div>
</div>
</div>
</div>
</body>
</html>