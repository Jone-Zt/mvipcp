<!--#include file="../../Conn.asp"--><!DOCTYPE html>
<!DOCTYPE html>
<html><head><meta http-equiv="Content-Type" content="text/html; charset=GBK">
<title><%=Setting(0)%>-投注大乐透</title>
<meta charset="GBK">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="format-detection" content="telephone=no">
<meta http-equiv="cleartype" content="on"> 
<link rel="apple-touch-icon-precomposed" href="../../Images/Public/t01b0f56b331d358632.png">
<link rel="apple-touch-icon" href="../../Images/Public/t01b0f56b331d358632.png">
<link rel="stylesheet" href="../../Css/public.css">
<link rel="stylesheet" href="../../Css/mobile.css">
<link href="../../Css/Basic.css" rel="stylesheet">
<link href="../../Css/User.css" rel="stylesheet">
<script type="text/javascript" async="" src="../JS/GA.js"></script>
<script src="../JS/Libs.js"></script><style>.gmu-media-detect{-webkit-transition: width 0.001ms; width: 0; position: absolute; top: -10000px;}
@media screen and (width: 1920px) { #gmu-media-detect0 { width: 1px; } } </style>
<script>var ttusername="<%=session("un")%>",ttun="";if(ttusername!="") ttun=ttusername;</script>
<script src="../JS/Dlt/Cart.js"></script>
<script src="../JS/20141212.js"></script>
<script src="../JS/passtime.js"></script>
<script>
var LottName="大乐透";
</script>
</head><body>
<div class="head"><h2 id="navtit">投注大乐透</h2><a href="./index.asp" class="btn-qgkj" id="sourceUrl"><span><em></em></span>继续选号</a></div>
<div class="w320">
  <div class="area1">
    <div class="xq-tit" issue="2015090" issale="0" endtime="1438774200">
      <h2>第<cite id="showid" class="red"></cite>期选号内容</h2>
      <em class="red" id="showtime"></em> 
    </div>
    <div class="buy-box">
      <ul id="mycart"></ul>
      <p id="tools"><a href="javascript:;" class="btn2 red" act="rnd1">机选1注</a><a href="javascript:;" class="btn2 red" act="rnd5">机选5注</a><a href="javascript:;" class="btn2" act="delall">全部删除</a></p>
    </div>
  </div>
  <div class="line-3"></div>
  <div class="area1">
    <div class="xq-nav"><a href="javascript:;" class="on" buy="0">投注</a><a href="javascript:;" buy="1">合玩</a><a href="javascript:;" buy="2">追号</a></div>
    <div class="infolist" id="k1">
      <table width="100%">
        <tbody><tr>
          <th>投注倍数</th>
          <td><input type="tel" id="ownMul" class="ipt-6" max="500" maxlength="5" value="1">倍</td>
        </tr>
        <tr>
          <th>投注注数</th>
          <td><strong class="red" id="ownCount">1</strong> 注</td>
        </tr>
        <tr>
          <th>投注<%=setting(56)%></th>
          <td><div class="apm"><strong class="red" id="ownMoney">2</strong> <%=setting(56)%></div><div class="apb"><em class="appends" id="ZG"></em><span><label for="ZG">追加投注</label></span></div></td>
        </tr>
      </tbody></table>
    </div>
    <div class="infolist none" id="k2">
      <table width="100%">
        <tbody><tr>
          <th>投注倍数</th>
          <td><input type="tel" class="ipt-6" max="500" maxlength="5" id="coopMul" value="1">倍</td>
        </tr>
        <tr>
          <th>方案<%=setting(56)%></th>
          <td><div class="apm"><strong class="red" id="coopCount">1</strong> 注，<strong class="red" id="coopMoney">2</strong> <%=setting(56)%></div><div class="apb"><em class="appends" id="ZG"></em><span><label for="HM">追加投注</label></span></div></td>
        </tr>
        <tr>
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
          <th>我要投注</th>
          <td><input type="tel" class="ipt-6" id="meRG" autocomplete="off" value="0" maxlength="7"><%=setting(56)%> <cite class="font12">至少投注5%</cite></td>
        </tr>
        <tr>
          <th>我要保底</th>
          <td><input type="tel" class="ipt-6" id="meBD" autocomplete="off" value="0" maxlength="7"><%=setting(56)%> <em id="baodibl"></em><cite class="font12">最多可保底<strong id="maxBD" class="red">1</strong><%=setting(56)%></cite></td>
        </tr>
        <tr>
          <th>是否公开</th>
          <td><select class="sel-zj" name="ispublic" id="ispublic" autocomplete="off">
              <option value="0" selected="selected">公开</option>
              <option value="1">投注截止后公开</option>
              <option value="2">仅跟单人可看</option>
              <option value="3">完全保密</option>
            </select>
          </td>
        </tr>
        <tr>
            <th>方案标题</th>
            <td><input type="text" id="title" autocomplete="off" maxlength="30" class="ipt-c" value="大乐透第{issue}期"></td>
          </tr>
          <tr>
            <th>合玩宣言</th>
            <td><textarea id="content" autocomplete="off" class="ipt-mt">这个家伙很懒，只想中大奖</textarea></td>
        </tr>
        <tr>
          <th>您需支付</th>
          <td class="mycoop"><strong class="red" id="tsum">1</strong><%=setting(56)%>(投注<strong class="red" id="trengou">1</strong><%=setting(56)%>+保底<strong class="red" id="tbaodi">0</strong><%=setting(56)%>)</td>
        </tr>
      </tbody></table>
    </div>
    <div class="infolist none" id="k3">
      <table width="100%">
        <tbody><tr>
          <th>投注倍数</th>
          <td><input class="ipt-6" id="apMul" type="tel" max="500" maxlength="5" value="1">倍</td>
        </tr>
        <tr>
          <th>追号期数</th>
          <td><input name="qi" type="tel" maxlength="5" id="apNum" max="50" value="10" class="ipt-6">期</td>
        </tr>
        <tr>
          <th>投注<%=setting(56)%></th>
          <td><div class="apm"><strong class="red" id="apMoney">20</strong> <%=setting(56)%></div><div class="apb"><em class="appends" id="ZG"></em><span><label for="ZH">追加投注</label></span></div></td>
        </tr>
        <tr>
          <td colspan="2"><input type="checkbox" class="check-1" id="stopbuy" checked="checked">中奖<%=setting(56)%>&gt;<input type="text" class="ipt-6" id="stopbuyMoney" value="5000">时，停止追号 </td>
        </tr>
      </tbody></table>
    </div>
    <button class="btn btn100" id="pay_buy">立即投注</button>
    <div class="pact"><input type="checkbox" checked="checked" class="check-1" name="agree" id="agree">我已阅读并同意<a href="../Include/weituo.asp" class="blue">《用户投注协议》</a></div>  </div>
</div>
<div class="foot-tit">
           <%
	ttgeturl =request.ServerVariables("Path_Info") 
  if session("un") <> "" then
        response.write "<p><a href='../../User/' class='blue'>"&session("un")&"</a><span oclick='javascript:aausername='';' align='right'><a href='../../User/logout.asp' class='red'>[退出]</a></span></p>"
	else 
        response.write "<p><a style='font-size:20px;margin:12px 0 0 0;background:#FD3639' href='../../User/Login/?aurl="&ttgeturl&"' class='btn-h'>登录</a></p>"
     end if 
    %>
  <div class="gotop"><em class="large"></em><cite class="lartxt">回到顶部</cite></div>
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
        <input type="hidden" id="jiangurl" name="jiangurl" value="<%=ttgeturl%>">
		<input class="login_btn" id="user_login" type="submit" name="imagesb" value="登　 录">
	</form>
	<!---<p class="ts_bottom"><a href="../Reg/">免费注册</a> <span class="color_red">新用户充40送60彩豆火热进行中！</span><br><a href="getpws.html">忘记密码？</a>--></p>
	</div>
</div>
</div>
<script src="../JS/b862fb33.js"></script>
<script>monitor.setProject('kurei_cp_m').getTrack().getClickAndKeydown();</script>
<script type="text/javascript">var _gaq=_gaq||[];_gaq.push(['_setAccount','UA-31766466-1']);_gaq.push(['_setDomainName', 'none']);_gaq.push(['_trackPageview']);(function(){var ga=document.createElement('script');ga.type='text/javascript';ga.async=true;ga.src='../JS/GA.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(ga,s);})();</script>

</body></html>