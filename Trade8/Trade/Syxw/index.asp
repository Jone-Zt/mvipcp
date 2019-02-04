<!--#include file="../../Conn.asp"--><!DOCTYPE html>
<!DOCTYPE>
<html><head><meta http-equiv="Content-Type" content="text/html; charset=GBK">
<title><%=Setting(0)%>-11选5</title>
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
<script type="text/javascript" async="" src="../JS/GA.js"></script>
<script src="../JS/Libs.js"></script><style>.gmu-media-detect{-webkit-transition: width 0.001ms; width: 0; position: absolute; top: -10000px;}
@media screen and (width: 1920px) { #gmu-media-detect0 { width: 1px; } }
</style>
<script src="../JS/Syxw/xj11first.js"></script>
<script src="../JS/20141212.js"></script>
<script src="../JS/PassTime.js?v=0.0.1"></script>
</head><body onload="lianjie();">
<div class="wrap">
  <div class="head"><h2 id="navtit"><cite id="jiangb"></cite><cite id="game">任三</cite><span class="head-arr"><em></em></span></h2><a href="../../index.asp" class="btn-qgkj" id="sourceUrl"><span><em></em></span>游戏大厅</a><a href="javascript:;" class="btn-menu">≡</a><a href="javascript:;" class="btn-chart"><i style="margin-top:5px;"></i></a></div>
  <div class="top-date">
    <div id="setting" class="history" pt="r3" endtime="1438740000" prevtime="480" issale="0" align="center">
      <p align="center"><cite id="kkid"></cite> | <cite class="red" id="showtime"></cite></p>
      <div id="kjlist"></div>
    </div>
    <a href="javascript:;" class="top-arr"></a>
   </div>
  <div class="w320">
    <div class="pick pick-11"> 
      <div class="y11-txt" id="detxt"><cite id="xj11">选3个号码，猜中开奖号码任意3个数字</cite>,奖金<cite id="plus" class="red"></cite><%=setting(56)%></div>
      <!--走势图投注区[[-->
      <div class="pick-box pick-red none" id="charts">
      	<div class="column">
		 <div class="in-entry">
			<div class="bcy" id="chart_tab">
              <div class="xq-nav xq-nav-chart">
                  <a href="javascript:;" class="sel" m="0">号码分布</a>
                  <a href="javascript:;" m="1">大小/奇偶</a>
                  <a href="javascript:;" m="2">跨度/重号</a>
               </div>
            </div>
			<div class="chart-tab" style="-webkit-transform:translate3d(0,0,0); height:572px;">
				<div class="chart-tab-box" style="-webkit-transform:translate3d(0px,0,0);-webkit-backface-visibility:hidden;">
					<div class="tab-cont chart-num-list" style="-webkit-transform:translate3d(0,0,0);"><table width="100%"><thead><tr><th>期号</th><th>01</th><th>02</th><th>03</th><th>04</th><th>05</th><th>06</th><th>07</th><th>08</th><th>09</th><th>10</th><th>11</th></tr></thead><tbody id="hmfb"></tbody></table>
					</div>
					<div class="tab-cont chart-num-list02" style="-webkit-transform:translate3d(0,0,0);"><table width="100%" id="second"><thead id="tabq"><tr><td colspan="13">正在努力加载中...</td></tr></thead><tbody id="dxqo"></tbody></table>
					</div>
					<div class="tab-cont chart-num-list02" style="-webkit-transform:translate3d(0,0,0);"><table width="100%" id="third"><thead id="tabb"><tr><td colspan="14">正在努力加载中...</td></tr></thead><tbody id="kdch"></tbody></table>
					</div>
				</div>
			</div>
		</div>
	    </div>
      </div>
      <div class="myhelp none" id="myparam" style="margin-top:-6px;">
          <table width="100%">
            <thead><tr><th colspan="3"><div class="helphanle" sort="param"><span class="arr arr-on"><em></em></span><strong>参数说明</strong></div></th></tr></thead>
            <tbody class="none" id="box_param"><tr><td colspan="3" class="param" id="des"></td></tr></tbody>
          </table>
      </div>
      <div class="ssqshow-tit none" style="margin:4px 0 8px 0;" id="chartscd"><span class="more red"><cite class="friends" id="showtime1"></cite> <cite class="countdown"></cite></span><h2 id="charts_play"></h2></div>
      <!--走势图投注区[[-->
      <!--选号投注区[[-->
      <div class="pick-box pick-red" id="normal">
        <dl class="">
          <dt><strong>选号</strong>
            <p>遗漏  :</p>
          </dt>
          <dd>
            <ul m="0">
              <li><span>01</span><em class="red"></em></li>
              <li><span>02</span><em class=""></em></li>
              <li><span>03</span><em class=""></em></li>
              <li><span>04</span><em class=""></em></li>
              <li><span>05</span><em class=""></em></li>
              <li><span>06</span><em class=""></em></li>
              <li><span>07</span><em class=""></em></li>
              <li><span>08</span><em class=""></em></li>
              <li><span>09</span><em class=""></em></li>
              <li><span>10</span><em class=""></em></li>
              <li><span>11</span><em class=""></em></li>
            </ul>
            <a href="javascript:;" class="toall">全选</a></dd>
        </dl>
        <dl class="none">
          <dt><strong>第一位</strong>
            <p>遗漏  :</p>
          </dt>
          <dd>
            <ul m="1">
              <li><span>01</span><em>-</em></li>
              <li><span>02</span><em>-</em></li>
              <li><span>03</span><em>-</em></li>
              <li><span>04</span><em>-</em></li>
              <li><span>05</span><em>-</em></li>
              <li><span>06</span><em>-</em></li>
              <li><span>07</span><em>-</em></li>
              <li><span>08</span><em>-</em></li>
              <li><span>09</span><em>-</em></li>
              <li><span>10</span><em>-</em></li>
              <li><span>11</span><em>-</em></li>
            </ul>
          </dd>
        </dl>
        <div class="line-3 none"></div>
        <dl class="none">
          <dt><strong>第二位</strong>
            <p>遗漏  :</p>
          </dt>
          <dd>
            <ul m="2">
              <li><span>01</span><em>-</em></li>
              <li><span>02</span><em>-</em></li>
              <li><span>03</span><em>-</em></li>
              <li><span>04</span><em>-</em></li>
              <li><span>05</span><em>-</em></li>
              <li><span>06</span><em>-</em></li>
              <li><span>07</span><em>-</em></li>
              <li><span>08</span><em>-</em></li>
              <li><span>09</span><em>-</em></li>
              <li><span>10</span><em>-</em></li>
              <li><span>11</span><em>-</em></li>
            </ul>
          </dd>
        </dl>
        <div class="line-3 none"></div>
        <dl class="none">
          <dt><strong>第三位</strong>
            <p>遗漏  :</p>
          </dt>
          <dd>
            <ul m="3">
              <li><span>01</span><em>3</em></li>
              <li><span>02</span><em>-</em></li>
              <li><span>03</span><em>-</em></li>
              <li><span>04</span><em>-</em></li>
              <li><span>05</span><em>-</em></li>
              <li><span>06</span><em>-</em></li>
              <li><span>07</span><em>-</em></li>
              <li><span>08</span><em>-</em></li>
              <li><span>09</span><em>-</em></li>
              <li><span>10</span><em>-</em></li>
              <li><span>11</span><em>-</em></li>
            </ul>
          </dd>
        </dl>
      </div>
      <!--选号投注区[[-->
      <!--胆拖投注区[[-->
      <div class="pick-box pick-red none" id="biledt">
        <dl>
          <dt><strong>胆码</strong>
            <p>遗漏  :</p>
          </dt>
          <dd>
            <ul type="d">
              <li><span>01</span><em>-</em></li>
              <li><span>02</span><em>-</em></li>
              <li><span>03</span><em>-</em></li>
              <li><span>04</span><em>-</em></li>
              <li><span>05</span><em>-</em></li>
              <li><span>06</span><em>-</em></li>
              <li><span>07</span><em>-</em></li>
              <li><span>08</span><em>-</em></li>
              <li><span>09</span><em>-</em></li>
              <li><span>10</span><em>-</em></li>
              <li><span>11</span><em>-</em></li>
            </ul>
          </dd>
        </dl>
        <div class="lines"></div>
        <dl>
          <dt><strong>拖码</strong>
            <p>遗漏  :</p>
          </dt>
          <dd>
            <ul type="t">
              <li><span>01</span><em>-</em></li>
              <li><span>02</span><em>-</em></li>
              <li><span>03</span><em>-</em></li>
              <li><span>04</span><em>-</em></li>
              <li><span>05</span><em>-</em></li>
              <li><span>06</span><em>-</em></li>
              <li><span>07</span><em>-</em></li>
              <li><span>08</span><em>-</em></li>
              <li><span>09</span><em>-</em></li>
              <li><span>10</span><em>-</em></li>
              <li><span>11</span><em>-</em></li>
            </ul>
            <a href="javascript:;" class="toall">全选</a></dd>
        </dl>
      </div>
      <!--胆拖投注区[[-->
      <!--遗漏投注区[[-->
      <div class="pick-box pick-red none" id="loss">
        <div class="infolist4">
          <table width="100%">
            <thead>
              <tr>
                <th><b id="lossname">任三</b></th>
                <th colspan="3"><b>遗漏统计</b></th>
              </tr>
              <tr>
                <td>号码（点击添加投注）</td>
                <td>当前</td>
                <td>最大</td>
                <td>欲出几率</td>
              </tr>
            </thead>
            <tbody id="myloss"><tr><td colspan="4">正在努力加载中...</td></tr></tbody>
          </table>
        </div>
        <div class="ht10"></div>
        <a href="javascript:;" class="btn-load" id="lossmore">获取更多</a>
      </div>
      <!--遗漏投注区[[-->
    </div>
    <!--中奖小助手[[-->
    <!--<div class="myhelp" id="myhelp">
      <table width="100%">
        <thead><tr><th colspan="3"><div class="helphanle" sort="help"><span class="arr arr-on"><em></em></span><strong>我的快乐11选5</strong>（近9期投注中奖情况）</div></th></tr></thead>
        <tbody class="none" id="box_help"><tr><td colspan="3" class="font14">正在努力加载中...</td></tr></tbody>  
      </table>
      <div class="myhelpr none"><strong><a href="#" class="blue">查看投注记录</a></strong></div>
    </div>
    <!--中奖小助手[[-->
  </div>
   <div class="pick-b" style="height:auto;">
    <div class="bet-helper-counter none">
      <a href="javascript:void(0)"><i class="ico-counter"></i>胆拖奖金计算器</a>
    </div>
    <div class="bet-helper">
      <dl>
        <dt>投注助手</dt>
        <dd><div class="jump-dt">“2胆全拖”投注，盈利率爆增至<em class="red">216%</em></div></dd>
      </dl>
    </div>
    <div class="bet-top">
      <p>共<strong class="red" id="count">0</strong>注,<strong class="red" id="price">0</strong><%=setting(56)%> <cite id="calcu"></cite></p>
    </div>
    <div class="betting">
      <button class="btn-addnmu" type="button" id="addcart"><span></span>添加到号码篮<em id="group">0</em></button>
      <button class="btn-betting" type="button" id="bets">直接投注</button>
    </div>
  </div>
  <div class="pop-box2 spill">
    <div class="pop-box2-arr"></div>
    <div class="filt-popc" id="tabs">
      <ul class="filt-popc-nav">
        <li class="sel"><span>普通投注</span></li>
        <li class="sel" style="display:none"><span>胆拖投注</span></li>
        <li class="sel" style="display:none"><span>遗漏投注</span></li>
        <li class="sel"><span>走势投注</span></li>
      </ul>
      <div class="filt-popc-cont" style="transform: translate3d(0px, 0px, 0px);">
      	 <div class="filt-popc-entry" style="transform: translate3d(0px, 0px, 0px); backface-visibility: hidden; width: 1144px;">
         	<ul style="transform: translate3d(0px, 0px, 0px); width: 286px;" action="normal" id="container">
            	<li><a href="./index.asp" class="btn-pop" play="r2">任二</a></li>
                <li><a href="./index.asp" class="btn-pop btn-pop-on" play="r3">任三</a></li>
                <li><a href="./index.asp" class="btn-pop" play="r4">任四</a></li>
                <li><a href="./index.asp" class="btn-pop" play="r5">任五</a></li>
                <li><a href="./index.asp" class="btn-pop" play="r6">任六</a></li>
                <li><a href="./index.asp" class="btn-pop" play="r7">任七</a></li>
                <li><a href="./index.asp" class="btn-pop" play="r8">任八</a></li>
                <li><a href="./index.asp" class="btn-pop" play="r1">前一</a></li>
                <li><a href="./index.asp" class="btn-pop" play="zhi2">前二直</a></li>
                <!--<li><a href="./index.asp" class="btn-pop" play="zhu2">前二组</a></li>
                <li><a href="./index.asp" class="btn-pop" play="zhi3">前三直</a></li>
                <li><a href="./index.asp" class="btn-pop" play="zhu3">前三组</a></li>-->
            </ul>
            <ul style="transform: translate3d(0px, 0px, 0px); width: 286px;" action="biledt">
            	<li><a href="./index.asp" class="btn-pop" play="r2">任二</a></li>
                <li><a href="./index.asp" class="btn-pop" play="r3">任三</a></li>
                <li><a href="./index.asp" class="btn-pop" play="r4">任四</a></li>
                <li><a href="./index.asp" class="btn-pop" play="r5">任五</a></li>
                <li><a href="./index.asp" class="btn-pop" play="r6">任六</a></li>
                <li><a href="./index.asp" class="btn-pop" play="r7">任七</a></li>
                <li><a href="./index.asp" class="btn-pop" play="r8">任八</a></li>
                <!--<li><a href="./index.asp" class="btn-pop" play="zhu2">前二组</a></li>
                <li><a href="./index.asp" class="btn-pop" play="zhu3">前三组</a></li>-->
            </ul>
            <ul style="transform: translate3d(0px, 0px, 0px); width: 286px;" action="loss">
            	<li><a href="./index.asp" class="btn-pop" play="r2">任二</a></li>
                <li><a href="./index.asp" class="btn-pop" play="r3">任三</a></li>
                <li><a href="./index.asp" class="btn-pop" play="r4">任四</a></li>
                <li><a href="./index.asp" class="btn-pop" play="r5">任五</a></li>
                <li><a href="./index.asp" class="btn-pop" play="r6">任六</a></li>
                <li><a href="./index.asp" class="btn-pop" play="r7">任七</a></li>
                <li><a href="./index.asp" class="btn-pop" play="r8">任八</a></li>
                <li><a href="./index.asp" class="btn-pop" play="r1">前一</a></li>
                <li><a href="./index.asp" class="btn-pop" play="zhi2">前二直选</a></li>
                <!--<li><a href="./index.asp" class="btn-pop" play="zhu2">前二组选</a></li>
                <li><a href="./index.asp" class="btn-pop" play="zhi3">前三直选</a></li>
                <li><a href="./index.asp" class="btn-pop" play="zhu3">前三组选</a></li>-->
            </ul>
            <ul style="transform: translate3d(0px, 0px, 0px); width: 286px;" action="charts">
            	<li><a href="./index.asp" class="btn-pop" play="r2">任二</a></li>
                <li><a href="./index.asp" class="btn-pop" play="r3">任三</a></li>
                <li><a href="./index.asp" class="btn-pop" play="r4">任四</a></li>
                <li><a href="./index.asp" class="btn-pop" play="r5">任五</a></li>
                <li><a href="./index.asp" class="btn-pop" play="r6">任六</a></li>
                <li><a href="./index.asp" class="btn-pop" play="r7">任七</a></li>
                <li><a href="./index.asp" class="btn-pop" play="r8">任八</a></li>
                <li><a href="./index.asp" class="btn-pop" play="r1">前一</a></li>
                <li><a href="./index.asp" class="btn-pop" play="zhi2">前二直选</a></li>
                <!--<li><a href="./index.asp" class="btn-pop" play="zhu2">前二组选</a></li>
                <li><a href="./index.asp" class="btn-pop" play="zhi3">前三直选</a></li>
                <li><a href="./index.asp" class="btn-pop" play="zhu3">前三组选</a></li>-->
            </ul>
         </div>
      </div>
    </div>
  </div>
  <div class="pop-box3 spill" id="tools"><div class="pop-box2-bar"></div><div class="filt-popc">
  	<ul>
  		<li><a href="./goumai.asp" id="selected" class="btn-pop">已选号码</a></li>
  		<li><a id="kjlianjie" class="btn-pop">历史开奖</a></li>
  		<li><a href="/User/BuyRecord.asp" class="btn-pop">投注记录</a></li>
  		<li><a id="tjies" class="btn-pop">玩法介绍</a></li>
        <li><a id="tcanyu" class="btn-pop">参与合玩</a></li>
  		</ul>
  		</div>
  		</div>
  <div class="blank"></div>
</div>
<script src="../JS/b862fb33.js"></script>
<script>monitor.setProject('kurei_cp_m').getTrack().getClickAndKeydown();</script>
<script type="text/javascript">var _gaq=_gaq||[];_gaq.push(['_setAccount','UA-31766466-1']);_gaq.push(['_setDomainName', 'none']);_gaq.push(['_trackPageview']);(function(){var ga=document.createElement('script');ga.type='text/javascript';ga.async=true;ga.src='../JS/GA.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(ga,s);})();</script>

</body></html>