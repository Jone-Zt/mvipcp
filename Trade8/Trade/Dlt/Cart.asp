<!--#include file="../../Conn.asp"--><!DOCTYPE html>
<!DOCTYPE html>
<html><head><meta http-equiv="Content-Type" content="text/html; charset=GBK">
<title><%=Setting(0)%>-Ͷע����͸</title>
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
var LottName="����͸";
</script>
</head><body>
<div class="head"><h2 id="navtit">Ͷע����͸</h2><a href="./index.asp" class="btn-qgkj" id="sourceUrl"><span><em></em></span>����ѡ��</a></div>
<div class="w320">
  <div class="area1">
    <div class="xq-tit" issue="2015090" issale="0" endtime="1438774200">
      <h2>��<cite id="showid" class="red"></cite>��ѡ������</h2>
      <em class="red" id="showtime"></em> 
    </div>
    <div class="buy-box">
      <ul id="mycart"></ul>
      <p id="tools"><a href="javascript:;" class="btn2 red" act="rnd1">��ѡ1ע</a><a href="javascript:;" class="btn2 red" act="rnd5">��ѡ5ע</a><a href="javascript:;" class="btn2" act="delall">ȫ��ɾ��</a></p>
    </div>
  </div>
  <div class="line-3"></div>
  <div class="area1">
    <div class="xq-nav"><a href="javascript:;" class="on" buy="0">Ͷע</a><a href="javascript:;" buy="1">����</a><a href="javascript:;" buy="2">׷��</a></div>
    <div class="infolist" id="k1">
      <table width="100%">
        <tbody><tr>
          <th>Ͷע����</th>
          <td><input type="tel" id="ownMul" class="ipt-6" max="500" maxlength="5" value="1">��</td>
        </tr>
        <tr>
          <th>Ͷעע��</th>
          <td><strong class="red" id="ownCount">1</strong> ע</td>
        </tr>
        <tr>
          <th>Ͷע<%=setting(56)%></th>
          <td><div class="apm"><strong class="red" id="ownMoney">2</strong> <%=setting(56)%></div><div class="apb"><em class="appends" id="ZG"></em><span><label for="ZG">׷��Ͷע</label></span></div></td>
        </tr>
      </tbody></table>
    </div>
    <div class="infolist none" id="k2">
      <table width="100%">
        <tbody><tr>
          <th>Ͷע����</th>
          <td><input type="tel" class="ipt-6" max="500" maxlength="5" id="coopMul" value="1">��</td>
        </tr>
        <tr>
          <th>����<%=setting(56)%></th>
          <td><div class="apm"><strong class="red" id="coopCount">1</strong> ע��<strong class="red" id="coopMoney">2</strong> <%=setting(56)%></div><div class="apb"><em class="appends" id="ZG"></em><span><label for="HM">׷��Ͷע</label></span></div></td>
        </tr>
        <tr>
          <th>ӯ�����</th>
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
          <th>��ҪͶע</th>
          <td><input type="tel" class="ipt-6" id="meRG" autocomplete="off" value="0" maxlength="7"><%=setting(56)%> <cite class="font12">����Ͷע5%</cite></td>
        </tr>
        <tr>
          <th>��Ҫ����</th>
          <td><input type="tel" class="ipt-6" id="meBD" autocomplete="off" value="0" maxlength="7"><%=setting(56)%> <em id="baodibl"></em><cite class="font12">���ɱ���<strong id="maxBD" class="red">1</strong><%=setting(56)%></cite></td>
        </tr>
        <tr>
          <th>�Ƿ񹫿�</th>
          <td><select class="sel-zj" name="ispublic" id="ispublic" autocomplete="off">
              <option value="0" selected="selected">����</option>
              <option value="1">Ͷע��ֹ�󹫿�</option>
              <option value="2">�������˿ɿ�</option>
              <option value="3">��ȫ����</option>
            </select>
          </td>
        </tr>
        <tr>
            <th>��������</th>
            <td><input type="text" id="title" autocomplete="off" maxlength="30" class="ipt-c" value="����͸��{issue}��"></td>
          </tr>
          <tr>
            <th>��������</th>
            <td><textarea id="content" autocomplete="off" class="ipt-mt">����һ������ֻ���д�</textarea></td>
        </tr>
        <tr>
          <th>����֧��</th>
          <td class="mycoop"><strong class="red" id="tsum">1</strong><%=setting(56)%>(Ͷע<strong class="red" id="trengou">1</strong><%=setting(56)%>+����<strong class="red" id="tbaodi">0</strong><%=setting(56)%>)</td>
        </tr>
      </tbody></table>
    </div>
    <div class="infolist none" id="k3">
      <table width="100%">
        <tbody><tr>
          <th>Ͷע����</th>
          <td><input class="ipt-6" id="apMul" type="tel" max="500" maxlength="5" value="1">��</td>
        </tr>
        <tr>
          <th>׷������</th>
          <td><input name="qi" type="tel" maxlength="5" id="apNum" max="50" value="10" class="ipt-6">��</td>
        </tr>
        <tr>
          <th>Ͷע<%=setting(56)%></th>
          <td><div class="apm"><strong class="red" id="apMoney">20</strong> <%=setting(56)%></div><div class="apb"><em class="appends" id="ZG"></em><span><label for="ZH">׷��Ͷע</label></span></div></td>
        </tr>
        <tr>
          <td colspan="2"><input type="checkbox" class="check-1" id="stopbuy" checked="checked">�н�<%=setting(56)%>&gt;<input type="text" class="ipt-6" id="stopbuyMoney" value="5000">ʱ��ֹͣ׷�� </td>
        </tr>
      </tbody></table>
    </div>
    <button class="btn btn100" id="pay_buy">����Ͷע</button>
    <div class="pact"><input type="checkbox" checked="checked" class="check-1" name="agree" id="agree">�����Ķ���ͬ��<a href="../Include/weituo.asp" class="blue">���û�ͶעЭ�顷</a></div>  </div>
</div>
<div class="foot-tit">
           <%
	ttgeturl =request.ServerVariables("Path_Info") 
  if session("un") <> "" then
        response.write "<p><a href='../../User/' class='blue'>"&session("un")&"</a><span oclick='javascript:aausername='';' align='right'><a href='../../User/logout.asp' class='red'>[�˳�]</a></span></p>"
	else 
        response.write "<p><a style='font-size:20px;margin:12px 0 0 0;background:#FD3639' href='../../User/Login/?aurl="&ttgeturl&"' class='btn-h'>��¼</a></p>"
     end if 
    %>
  <div class="gotop"><em class="large"></em><cite class="lartxt">�ص�����</cite></div>
</div>
<div class="header" style="height:100%;background:#FFFCFC;display:none;" id="ttlogin">
	 <div class="head"><h2 id="navtit"><em id="jiangaa">�û���¼</em></h2><a href="../../index.asp" class="btn-qgkj" id="sourceUrl"><span><em></em></span>����</a>
<a  class="btn-menu" href="/User/Reg/">ע��</a></div>
<div class="uc_wap" id="wrapper">
	<div class="login"> 
	<FORM name="LoginForm" action="" method="post" onSubmit="return(CheckForm(this))">
		<div class="login_list" >
			<ul>
				<li>
					<div class="f_box">
						<em class="blue">�û���</em>
						<input type="text" class="txt color_black"  name="UserName" id="UserName" value="">
					</div>
				</li>
				<li>
					<div class="f_box" >
						<em class="blue">��&nbsp;&nbsp;&nbsp;��</em>
						<input type="password" class="txt color_black" name="password" id="password" value="">
					</div>
				</li>
				<li>
					<div class="f_box">
						<em class="blue">��֤��</em>
						<input type="text" style="width:60%;height:30px;" class="txt color_black" maxlength=4 name="Verifycode" id="Verifycode" onFocus="this.value='';" value="">
						<div class="ver_code"><span id="showVerify"><img style='height:26px;cursor:pointer' title='���ˢ��' align='absmiddle' src='../../plus/verifycode.asp?n=<%=Timer%>' onClick='this.src="../../plus/verifycode.asp?n="+ Math.random();'></span></div>
					</div>
				</li>
			</ul>
		</div>
        <input type="hidden" id="jiangurl" name="jiangurl" value="<%=ttgeturl%>">
		<input class="login_btn" id="user_login" type="submit" name="imagesb" value="�ǡ� ¼">
	</form>
	<!---<p class="ts_bottom"><a href="../Reg/">���ע��</a> <span class="color_red">���û���40��60�ʶ����Ƚ����У�</span><br><a href="getpws.html">�������룿</a>--></p>
	</div>
</div>
</div>
<script src="../JS/b862fb33.js"></script>
<script>monitor.setProject('kurei_cp_m').getTrack().getClickAndKeydown();</script>
<script type="text/javascript">var _gaq=_gaq||[];_gaq.push(['_setAccount','UA-31766466-1']);_gaq.push(['_setDomainName', 'none']);_gaq.push(['_trackPageview']);(function(){var ga=document.createElement('script');ga.type='text/javascript';ga.async=true;ga.src='../JS/GA.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(ga,s);})();</script>

</body></html>