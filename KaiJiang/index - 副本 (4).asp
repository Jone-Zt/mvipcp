<!DOCTYPE html>
<!--#include file="../Conn.asp"--><!DOCTYPE HTML>
<html><head><meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>ȫ����Ϸ����</title>
<meta charset="GBK">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="format-detection" content="telephone=no">
<meta http-equiv="cleartype" content="on"> 
<link rel="apple-touch-icon-precomposed" href="../Images/Public/t01b0f56b331d358632.png">
<link rel="apple-touch-icon" href="../Images/Public/t01b0f56b331d358632.png">
<link rel="stylesheet" href="../Css/public.css">
<link rel="stylesheet" href="../Css/mobile.css">
<script type="text/javascript" async="" src="../Trade/JS/GA.js"></script>
<script src="../JS/Jquery-1.7.2.Min.js"></script><style>
.jczqkj{
	width:100%;
	height:60px;
	line-height:60px;
	text-align:center;
	color:#FFFFFF;
	background:url(../../../Images/faxq/jczqkj.jpg) no-repeat;
	background-size:contain;
}
.gmu-media-detect{-webkit-transition: width 0.001ms; width: 0; position: absolute; top: -10000px;}
@media screen and (width: 1920px) { #gmu-media-detect0 { width: 1px; } } </style>
<script src="../JS/newkaijiang.js?v=1116"></script>
<script src="../Trade/JS/20141212.js"></script>
</head><body>
<div class="wrap">
  <div class="head"><h1 class="logo"><a href="#">��������</a></h1><div class="head-r">
   <% ttgeturl =request.ServerVariables("Path_Info") 
  if session("un")<>"" then%><a href="/User/" class="btn-11">�ҵ���Ϸ</a><%else%><a href="/User/Login/?aurl=<%=ttgeturl%>" >��¼</a><%if Setting(60)=1 then%> | <a href="/User/Reg/">ע��</a><%end if%><%end if%>
  </div></div>
  <div class="w320">
<%
function wd(str)
	wdt=weekday(str)
	if wdt=1 then wd="��"
	if wdt=2 then wd="һ"
	if wdt=3 then wd="��"
	if wdt=4 then wd="��"
	if wdt=5 then wd="��"
	if wdt=6 then wd="��"
	if wdt=7 then wd="��"
end function
set rsjczq=conn.execute("select top 1 * from KR_Football_Code order by OrderId desc")
if not rsjczq.eof then
	sj=left(rsjczq("orderid"),8)
	sjf=left(rsjczq("orderid"),4)&"-"&mid(rsjczq("orderid"),5,2)&"-"&mid(rsjczq("orderid"),7,2)
	sjtowd=wd(sjf)
	dza=split(rsjczq("team"),",")
	plan=rsjczq("plan")
	plana=split(plan,"|")
	planat=split(plana(3),"~")
	bf=planat(0)
	kjjczq=dza(0)&"&nbsp;&nbsp;&nbsp;&nbsp;"&bf&"&nbsp;&nbsp;&nbsp;&nbsp;"&dza(1)
end if
rsjczq.close
set rsjczq=nothing
%>
  	<div class="kj"><ul id="jczq"><a href="./jczq.asp"><li><h2>��������<span><%=sjf%>����<%=sjtowd%>��</span></h2><dl><dd><div class="jczqkj">
    <%=kjjczq%>
    </div><p>�򵥺��棬����Ӯ�󽱣�</p></dd></dl></li></a></ul></div>
    <div class="kj">
      	<ul id="mylottery"></ul>
    </div>
  </div>
  <!--
  <div class="foot-tit contact_tel">
			<ul class="list_news">
				<li><div class="phone"><a href="tel:<%=Setting(42)%>" ><i></i><b>����</b></div><span>7��24����</span><span class="red"><%=Setting(42)%></span></a></li>
			</ul>
</div>-->
</div>
<!--�����б�ģ��[[-->
<script type="text/template" id="tpl_kj_lottery">
<li>
  <h2><span></span></h2>
  <a href="">
  <dl>
	<dt><span class="btn-arr"><em></em></span></dt>
	<dd>
	</dd>
  </dl>
  </a>
</li>
</script>
	<script src="../Trade/JS/b862fb33.js"></script>
<script>monitor.setProject('kurei_cp_m').getTrack().getClickAndKeydown();</script>
<script type="text/javascript">var _gaq=_gaq||[];_gaq.push(['_setAccount','UA-31766466-1']);_gaq.push(['_setDomainName', 'none']);_gaq.push(['_trackPageview']);(function(){var ga=document.createElement('script');ga.type='text/javascript';ga.async=true;ga.src='../Trade/JS/GA.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(ga,s);})();</script>
<!--#include file="../dh.asp"-->
</body></html>