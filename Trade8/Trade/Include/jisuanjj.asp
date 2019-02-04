<!DOCTYPE html>
<html manifest="/cachecal.manifest"><head><meta http-equiv="Content-Type" content="text/html; charset=GBK">
<title>-奖金计算器</title>
<meta charset="GBK">
<meta name="keywords" content="<%=Setting(0)%>游戏触屏版" />
<meta name="description" content="<%=Setting(0)%>游戏触屏版" />
<meta name="author" content="<%=Setting(2)%>"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta name="copyright" content="Copyright @ kure.cn 版权所有" />
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="format-detection" content="telephone=no">
<meta http-equiv="cleartype" content="on"> 
<link rel="apple-touch-icon-precomposed" href="../../Images/t01b0f56b331d358632.png">
<link rel="apple-touch-icon" href="../../Images/t01b0f56b331d358632.png">
<link rel="stylesheet" href="../../Css/public.css">
<link rel="stylesheet" href="../../Css/mobile.css">
<script type="text/javascript" async="" src="../JS/GA.js"></script>
<script src="../JS/Libs.js"></script><style>.gmu-media-detect{-webkit-transition: width 0.001ms; width: 0; position: absolute; top: -10000px;}
@media screen and (width: 1920px) { #gmu-media-detect0 { width: 1px; } }
</style>
<script src="../JS/jisuan/calculator.js"></script>
<script src="../JS/20141212.js"></script>
</head><body>
<div class="wrap">
  <div class="head"><h2 id="navtit">奖金计算器</h2><a href="../../index.asp" class="btn-qgkj" id="sourceUrl"><span><em></em></span>游戏大厅</a></div>
  <div class="w320">
    <div class="area1">
      <div class="ht10"></div>
      <div class="xq-nav"><a href="#" class="on">双色球</a><a href="#">大乐透</a></div>
    </div>
    <div class="pick-box2 jsq">
      <div class="pick-tit2"><strong class="red">双色球</strong>&nbsp;&nbsp;<select class="sel-8" name="issue" id="issue"><option value="2015103">2015103期</option><option value="2015102">2015102期</option><option value="2015101">2015101期</option><option value="2015100">2015100期</option><option value="2015099">2015099期</option><option value="2015098">2015098期</option><option value="2015097">2015097期</option><option value="2015096">2015096期</option><option value="2015095">2015095期</option><option value="2015094">2015094期</option></select>&nbsp;&nbsp;<cite>开奖号码</cite></div>
      <div class="kj-ball" id="opencode"><span class="redball">06</span><span class="redball">08</span><span class="redball">13</span><span class="redball">26</span><span class="redball">30</span><span class="redball">32</span><span class="blueball">14</span></div>
      <dl>
        <dt>我的投注：</dt>
        <dd>
          <div class="jsq-list">投注红球的号码个数&nbsp; <span class="btn-num"><cite id="redball">6</cite><em></em></span>
            <div class="menu-pop none">
              <div class="menu-pop-arr"></div>
              <div class="menu-popc" type="red"><a href="javascript:;" class="on">6</a><a href="javascript:;">7</a><a href="javascript:;">8</a><a href="javascript:;">9</a><a href="javascript:;">10</a><a href="javascript:;">11</a><a href="javascript:;">12</a><a href="javascript:;">13</a><a href="javascript:;">14</a><a href="javascript:;">15</a> <a href="javascript:;">16</a><a href="javascript:;">17</a><a href="javascript:;">18</a><a href="javascript:;">19</a><a href="javascript:;">20</a></div>
            </div>
          </div>
          <div class="jsq-list">投注蓝球的号码个数&nbsp; <span class="btn-num"><cite id="blueball">1</cite><em></em></span>
            <div class="menu-pop none">
              <div class="menu-pop-arr"></div>
              <div class="menu-popc" type="blue"><a href="javascript:;" class="on">1</a><a href="javascript:;">2</a><a href="javascript:;">3</a><a href="javascript:;">4</a><a href="javascript:;">5</a> <a href="javascript:;">6</a><a href="javascript:;">7</a><a href="javascript:;">8</a> <a href="javascript:;">9</a><a href="javascript:;">10</a><a href="javascript:;">11</a><a href="javascript:;">12</a><a href="javascript:;">13</a><a href="javascript:;">14</a> <a href="javascript:;">15</a><a href="javascript:;">16</a></div>
            </div>
          </div>
          <div class="jsq-list"><p>投注<%=setting(56)%>：<cite id="tcount" class="red">1</cite> 注,<cite id="tmoney" class="red">2</cite><%=setting(56)%></p></div>
        </dd>
      </dl>
      <div class="line-4"></div>
      <dl>
        <dt>我命中了：</dt>
        <dd>
          <div class="jsq-list">红球命中的号码个数&nbsp; <span class="btn-num"><cite id="hitredball">0</cite><em></em></span>
            <div class="menu-pop none">
              <div class="menu-pop-arr"></div>
              <div class="menu-popc" type="hitred"><a href="javascript:;" class="on">0</a><a href="javascript:;">1</a><a href="javascript:;">2</a><a href="javascript:;">3</a><a href="javascript:;">4</a><a href="javascript:;">5</a><a href="javascript:;">6</a></div>
            </div>
          </div>
          <div class="jsq-list">蓝球命中的号码个数&nbsp; <span class="btn-num"><cite id="hitblueball">0</cite><em></em></span>
            <div class="menu-pop none">
              <div class="menu-pop-arr"></div>
              <div class="menu-popc" type="hitblue"><a href="javascript:;" class="on">0</a><a href="javascript:;">1</a></div>
            </div>
          </div>
        </dd>
      </dl>
      <div class="line-4"></div>
       <span class="btn btn-hm">计算我的奖金</span>
    </div>
    <div class="jsq-txt"><span class="dot1"></span>奖金计算结果将根据实际开奖奖金进行录入数据后计算得出，如有偏差，请以官方开奖时公布奖金为准！</div>
  </div>
  <!--layer-->
  <div class="pop_mask"></div>
  <div class="pop-box" style="display:none;">
      <div class="pop-boxt">
          <h2>我的奖金</h2>
          <a href="javascript:;" class="cls">X</a>
      </div>
      <div class="pop-boxc">
          <div class="pop-tab">
          	  <p id="mymoney">您中奖总<%=setting(56)%>是: <cite class="red">0</cite> <%=setting(56)%>，奖金分布如下：</p>
              <table width="100%">
              	  <tbody><tr>
                      <th width="25%">奖级</th>
                      <th width="40%">中奖说明</th>
                      <th class="tr">奖金</th>
                  </tr>
                  <tr>
                      <td>一等奖</td>
                      <td><cite class="ncount">0</cite> 注</td>
                      <td class="tr"><cite class="nmoney">0</cite> <%=setting(56)%></td>
                  </tr>
                  <tr>
                      <td>二等奖</td>
                      <td><cite class="ncount">0</cite> 注</td>
                      <td class="tr"><cite class="nmoney">0</cite> <%=setting(56)%></td>
                  </tr>
                  <tr>
                      <td>三等奖</td>
                      <td><cite class="ncount">0</cite> 注</td>
                      <td class="tr"><cite class="nmoney">300</cite> <%=setting(56)%></td>
                  </tr>
                  <tr>
                      <td>四等奖</td>
                      <td><cite class="ncount">0</cite> 注</td>
                      <td class="tr"><cite class="nmoney">200</cite> <%=setting(56)%></td>
                  </tr>
                  <tr>
                      <td>五等奖</td>
                      <td><cite class="ncount">0</cite> 注</td>
                      <td class="tr"><cite class="nmoney">10</cite> <%=setting(56)%></td>
                  </tr>
                  <tr>
                      <td>六等奖</td>
                      <td><cite class="ncount">0</cite> 注</td>
                      <td class="tr"><cite class="nmoney">5</cite> <%=setting(56)%></td>
                  </tr>
              </tbody></table>
          </div>
      </div>
      <div class="pop-boxb calculator"><span class="btn btn-18">确 定</span></div>
  </div>
</div>
<div id="sheader" style="position: fixed; top: 0px; left: 0px; width: 100%; transform: translate(0px, -135px); opacity: 1;"><a href="#"><div class="head-btn"></div></a></div>
	<script src="../JS/b862fb33.js"></script>
<script>monitor.setProject('kurei_cp_m').getTrack().getClickAndKeydown();</script>
<script type="text/javascript">var _gaq=_gaq||[];_gaq.push(['_setAccount','UA-31766466-1']);_gaq.push(['_setDomainName', 'none']);_gaq.push(['_trackPageview']);(function(){var ga=document.createElement('script');ga.type='text/javascript';ga.async=true;ga.src='../JS/GA.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(ga,s);})();</script>

</body></html>