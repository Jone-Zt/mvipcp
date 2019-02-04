<!--#include file="../../Conn.asp"--><!DOCTYPE html>
<!DOCTYPE html>
<html><head><meta http-equiv="Content-Type" content="text/html; charset=GBK">
<title><%=Setting(0)%>-快3</title>
<meta charset="GBK">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="format-detection" content="telephone=no">
<meta http-equiv="cleartype" content="on"> 
<link rel="apple-touch-icon-precomposed" href="../../Images/Public/t01b0f56b331d358632.png">
<link rel="apple-touch-icon" href="../../Images/Public/t01b0f56b331d358632.png">
<link rel="stylesheet" href="../../Css/public.css">
<link rel="stylesheet" href="../Css/JsKs/k3list.css">
<script type="text/javascript" src="../JS/GA.js"></script>
<script src="../JS/Libs.js"></script><style>.gmu-media-detect{-webkit-transition: width 0.001ms; width: 0; position: absolute; top: -10000px;}
@media screen and (width: 1920px) { #gmu-media-detect0 { width: 1px; } }
</style>
<script src="../JS/JsKs/k3nmxfirst.js"></script>
<script src="../JS/20141212.js"></script>
<script src="../JS/PassTime.js" type="text/javascript"></script>
</head><body onLoad="javascript:kscaizhong();">
<div id="wrap">
	<header id="header">
      <h2 class="k3nav" cmd="me"><cite id="kscz"></cite><cite id="game">和值/三同号</cite><span class="head-arr"><em></em></span></h2>
      <a href="../../" class="btn-qgkj"><span><em></em></span>游戏大厅</a>
      <span class="btn-menu" cmd="me">≡</span>
      <!--<a href="#" class="btn-chart"><i class="chart-k3"></i></a>-->
    </header>
	<section id="section">
      <!--当前在售期次[[-->
      <div class="mod-kj-msg" id="curInfo">
        <div class="mod-kj-top" id="setting" endtime="1439976760" prevtime="40" issale="0">
          <div class="kj-num-cont">
            <p><em id="fq1"></em>期开奖:<em id="fq3"></em></p>
			<span class="bet-btn-active" id="myluck"><span id="tt1"></span> <span id="tt2"></span> <span id="tt3"></span></span>
          </div>
          <div class="kj-num-time">
            <p>第&nbsp;<span id="showid"></span>&nbsp;期</p>
            <strong class="time" id="showtime"></strong>
          </div>
        </div>
        <div class="k3-kj-result" id="result">
          <table width="100%">
            <thead><tr><th>期次</th><th>开奖号码</th><th>和值</th><th>类型</th></tr></thead>
            <tbody id="kjlist"></tbody> 
          </table>
        </div>
        <span class="show"><span class="show-bg"><em><i></i></em></span></span>
      </div>
      <!--当前在售期次[[-->
      <!--选号投注区域[[-->
      <div id="k3_manual" style="padding-bottom:63px;">
      	<div class="k3content" id="k3abacus" style="transform: translate3d(0px, 0px, 0px); height: 368px;">
            <div class="k3-bet-cont" style="transform: translate3d(0px, 0px, 0px); backface-visibility: hidden; width: 7680px;">
              <!--和值、三同号[[-->
              <div class="k3-bet" style="transform: translate3d(0px, 0px, 0px); width: 1920px;">
                <div class="unit">
                	<!--不加奖奖金 -->
                                        	<div class="bet-tit"><h2>和值<span>奖金:￥9 -￥240</span></h2></div>
	                    <table class="k3bet-table" width="100%" id="table1">
	                      <tbody>
	                        <tr>
	                          <td width="25%"><span class="num" data="3" pt="HSZ">3</span><p class="mny">中240<%=setting(56)%></p></td>
	                          <td width="25%"><span class="num" data="4" pt="HSZ">4</span><p class="mny">中80<%=setting(56)%></p></td>
	                          <td width="25%"><span class="num" data="5" pt="HSZ">5</span><p class="mny">中40<%=setting(56)%></p></td>
	                          <td width="25%"><span class="num" data="6" pt="HSZ">6</span><p class="mny">中25<%=setting(56)%></p></td>
	                        </tr>
	                        <tr>
	                          <td width="25%"><span class="num" data="7" pt="HSZ">7</span><p class="mny">中16<%=setting(56)%></p></td>
	                          <td width="25%"><span class="num" data="8" pt="HSZ">8</span><p class="mny">中12<%=setting(56)%></p></td>
	                          <td width="25%"><span class="num" data="9" pt="HSZ">9</span><p class="mny">中10<%=setting(56)%></p></td>
	                          <td width="25%"><span class="num" data="10" pt="HSZ">10</span><p class="mny">中9<%=setting(56)%></p></td>
	                        </tr>
	                        <tr>
	                          <td width="25%"><span class="num" data="11" pt="HSZ">11</span><p class="mny">中9<%=setting(56)%></p></td>
	                          <td width="25%"><span class="num" data="12" pt="HSZ">12</span><p class="mny">中10<%=setting(56)%></p></td>
	                          <td width="25%"><span class="num" data="13" pt="HSZ">13</span><p class="mny">中12<%=setting(56)%></p></td>
	                          <td width="25%"><span class="num" data="14" pt="HSZ">14</span><p class="mny">中16<%=setting(56)%></p></td>
	                        </tr>
	                        <tr>
	                          <td width="25%"><span class="num" data="15" pt="HSZ">15</span><p class="mny">中25<%=setting(56)%></p></td>
	                          <td width="25%"><span class="num" data="16" pt="HSZ">16</span><p class="mny">中40<%=setting(56)%></p></td>
	                          <td width="25%"><span class="num" data="17" pt="HSZ">17</span><p class="mny">中80<%=setting(56)%></p></td>
	                          <td width="25%"><span class="num" data="18" pt="HSZ">18</span><p class="mny">中240<%=setting(56)%></p></td>
	                        </tr>
                            <tr>
	                          <td width="25%"><span class="num" data="20" pt="HSZ">大</span><p class="mny">中25<%=setting(56)%></p></td>
	                          <td width="25%"><span class="num" data="21" pt="HSZ">小</span><p class="mny">中40<%=setting(56)%></p></td>
	                          <td width="25%"><span class="num" data="22" pt="HSZ">单</span><p class="mny">中80<%=setting(56)%></p></td>
	                          <td width="25%"><span class="num" data="23" pt="HSZ">双</span><p class="mny">中240<%=setting(56)%></p></td>
	                        </tr>
	                      </tbody> 
	                    </table>
                                    	                   
                </div>
                <div class="unit">
                  <div class="k3dx">
                      <div class="bet-tit"><h2>三同号单选 <span>奖金:￥240</span></h2></div>
                  	  <table class="k3bet-table" width="100%" id="table2">
                      <tbody>
                        <tr>
                          <td><span class="num" data="111" pt="3TD">111</span></td>
                          <td><span class="num" data="222" pt="3TD">222</span></td>
                          <td><span class="num" data="333" pt="3TD">333</span></td>
                        </tr>
                        <tr>
                          <td><span class="num" data="444" pt="3TD">444</span></td>
                          <td><span class="num" data="555" pt="3TD">555</span></td>
                          <td><span class="num" data="666" pt="3TD">666</span></td>
                        </tr>
                      </tbody> 
                    </table>
                  </div>
                  <div class="k3tt">
                      <div class="bet-tit"><h2>三同号通选</h2></div>
                      <table class="k3bet-table" width="100%">
                        <tbody>
                          <tr>
                            <td id="table3"><span class="num" data="***" pt="3TT">111、222<br>333、444<br>555、666</span>
                            	                            		<p class="mny">任一开出即中40<%=setting(56)%></p>
                  	                             	
                            </td>
                          </tr>
                         </tbody> 
                      </table>
                  </div>
                </div>
              </div>
              <!--和值、三同号[[-->
              <!--三不同号、三连号通选[[-->
              <div class="k3-bet" style="transform: translate3d(0px, 0px, 0px); width: 1920px;">
                <div class="unit">
                	                		  <div class="bet-tit"><h2>三不同号 <span>奖金:￥40</span></h2></div>
                  	                   
                  <table class="k3bet-table" width="100%" id="butongtable">
                    <tbody>
                      <tr>
                        <td><span class="num" data="123" pt="3BT">123</span></td>
                        <td><span class="num" data="124" pt="3BT">124</span></td>
                        <td><span class="num" data="125" pt="3BT">125</span></td>
                        <td><span class="num" data="126" pt="3BT">126</span></td>
                        <td><span class="num" data="134" pt="3BT">134</span></td>
                      </tr>
                       <tr>
                        <td><span class="num" data="135" pt="3BT">135</span></td>
                        <td><span class="num" data="136" pt="3BT">136</span></td>
                        <td><span class="num" data="145" pt="3BT">145</span></td>
                        <td><span class="num" data="146" pt="3BT">146</span></td>
                        <td><span class="num" data="156" pt="3BT">156</span></td>
                      </tr>
                       <tr>
                        <td><span class="num" data="234" pt="3BT">234</span></td>
                        <td><span class="num" data="235" pt="3BT">235</span></td>
                        <td><span class="num" data="236" pt="3BT">236</span></td>
                        <td><span class="num" data="245" pt="3BT">245</span></td>
                        <td><span class="num" data="246" pt="3BT">246</span></td>
                      </tr>
                       <tr>
                        <td><span class="num" data="256" pt="3BT">256</span></td>
                        <td><span class="num" data="345" pt="3BT">345</span></td>
                        <td><span class="num" data="346" pt="3BT">346</span></td>
                        <td><span class="num" data="356" pt="3BT">356</span></td>
                        <td><span class="num" data="456" pt="3BT">456</span></td>
                      </tr>
                     </tbody> 
                  </table>
                </div>
                <div class="unit">
                  <div class="bet-tit">
                                      		 <h2>三连号通选 <span>奖金:￥10</span></h2>
                  	                   </div>
                  <table class="k3bet-table" width="100%">
                    <tbody>
                      <tr>
                        <td id="butongtx">
                          <span class="num" data="***" pt="3LT">123、234、345、456</span>
                                                    	 <p class="mny">任一开出即中10<%=setting(56)%></p>
                  	                          
                        </td>
                      </tr>
                     </tbody> 
                  </table>
                </div>
              </div>
              <!--三不同号、三连号通选[[-->
              <!--二同号单选[[-->
              <div class="k3-bet" style="transform: translate3d(0px, 0px, 0px); width: 1920px;">
                <div class="unit">
                  <div class="bet-tit">
                  	                  		<h2>二同号单选 <span>奖金:￥80</span></h2>
                  	                     
                  </div>
                  <table class="k3bet-table" width="100%" id="erbutong">
                    <tbody>
                      <tr>
                        <td><span class="num" data="112" pt="2TD">112</span></td>
                        <td><span class="num" data="113" pt="2TD">113</span></td>
                        <td><span class="num" data="114" pt="2TD">114</span></td>
                        <td><span class="num" data="115" pt="2TD">115</span></td>
                        <td><span class="num" data="116" pt="2TD">116</span></td>
                      </tr>
                       <tr>
                        <td><span class="num" data="122" pt="2TD">122</span></td>
                        <td><span class="num" data="223" pt="2TD">223</span></td>
                        <td><span class="num" data="224" pt="2TD">224</span></td>
                        <td><span class="num" data="225" pt="2TD">225</span></td>
                        <td><span class="num" data="226" pt="2TD">226</span></td>
                      </tr>
                       <tr>
                        <td><span class="num" data="133" pt="2TD">133</span></td>
                        <td><span class="num" data="233" pt="2TD">233</span></td>
                        <td><span class="num" data="334" pt="2TD">334</span></td>
                        <td><span class="num" data="335" pt="2TD">335</span></td>
                        <td><span class="num" data="336" pt="2TD">336</span></td>
                      </tr>
                       <tr>
                        <td><span class="num" data="144" pt="2TD">144</span></td>
                        <td><span class="num" data="244" pt="2TD">244</span></td>
                        <td><span class="num" data="344" pt="2TD">344</span></td>
                        <td><span class="num" data="445" pt="2TD">445</span></td>
                        <td><span class="num" data="446" pt="2TD">446</span></td>
                      </tr>
                       <tr>
                        <td><span class="num" data="155" pt="2TD">155</span></td>
                        <td><span class="num" data="255" pt="2TD">255</span></td>
                        <td><span class="num" data="355" pt="2TD">355</span></td>
                        <td><span class="num" data="455" pt="2TD">455</span></td>
                        <td><span class="num" data="556" pt="2TD">556</span></td>
                      </tr>
                       <tr>
                        <td><span class="num" data="166" pt="2TD">166</span></td>
                        <td><span class="num" data="266" pt="2TD">266</span></td>
                        <td><span class="num" data="366" pt="2TD">366</span></td>
                        <td><span class="num" data="466" pt="2TD">466</span></td>
                        <td><span class="num" data="566" pt="2TD">566</span></td>
                      </tr>
                     </tbody> 
                  </table>
                </div>
              </div>
              <!--二同号单选[[-->
              <!--二不同号单选、二同号复选[[-->
              <div class="k3-bet" style="transform: translate3d(0px, 0px, 0px); width: 1920px;">
                <div class="unit">
                  <div class="bet-tit">
                                      		<h2>二不同号 <span>奖金:￥8</span></h2>
                  	                   </div>
                  <table class="k3bet-table" width="100%" id="ertong">
                    <tbody>
                      <tr>
                        <td><span class="num" data="12" pt="2BT">12</span></td>
                        <td><span class="num" data="13" pt="2BT">13</span></td>
                        <td><span class="num" data="14" pt="2BT">14</span></td>
                        <td><span class="num" data="15" pt="2BT">15</span></td>
                        <td><span class="num" data="16" pt="2BT">16</span></td>
                      </tr>
                       <tr>
                        <td><span class="num" data="23" pt="2BT">23</span></td>
                        <td><span class="num" data="24" pt="2BT">24</span></td>
                        <td><span class="num" data="25" pt="2BT">25</span></td>
                        <td><span class="num" data="26" pt="2BT">26</span></td>
                        <td><span class="num" data="34" pt="2BT">34</span></td>
                      </tr>
                       <tr>
                        <td><span class="num" data="35" pt="2BT">35</span></td>
                        <td><span class="num" data="36" pt="2BT">36</span></td>
                        <td><span class="num" data="45" pt="2BT">45</span></td>
                        <td><span class="num" data="46" pt="2BT">46</span></td>
                        <td><span class="num" data="56" pt="2BT">56</span></td>
                      </tr>
                     </tbody> 
                  </table>
                </div>
              	<div class="unit" style="display:none">
                  <div class="bet-tit">
                  <h2>二同号复选 <span>奖金:￥15</span></h2>
                  </div>
                  <table class="k3bet-table" width="100%" id="tonghaofx">
                    <tbody>
                      <tr>
                        <td><span class="num" data="11*" pt="2TF">11*</span></td>
                        <td><span class="num" data="22*" pt="2TF">22*</span></td>
                        <td><span class="num" data="33*" pt="2TF">33*</span></td>
                        <td><span class="num" data="44*" pt="2TF">44*</span></td>
                        <td><span class="num" data="55*" pt="2TF">55*</span></td>
                        <td><span class="num" data="66*" pt="2TF">66*</span></td>
                      </tr>
                     </tbody> 
                  </table>
                </div>
              </div>
              <!--二不同号单选、二同号复选[[-->
            </div>
         </div>
         <div class="k3content-bar" id="mybar">
         	<ul id="k3bar">
            	<li class="on" rel="HSZ" k="和值/三同号"></li>
                <li rel="3BT" k="三不同号" class=""></li>
                <li rel="2TD" k="二同号" class=""></li>
                <li rel="2BT" k="二不同号" class=""></li>
             </ul>
         </div>
         <div id="fixed" style="height:70px;"></div>
      </div>
      <!--选号投注区域[[-->
	</section>
    <!--立即投注[[-->
    <div class="k3bar fixfixed" id="assist">
        <p class="sel_info"><em class="yellow" id="count">0</em>注,共<em class="yellow" id="price">0</em><%=setting(56)%></p>
        <div class="pick-c" align="center" style=" padding-top:10px">
            <li><span class="btn-bet" id="pay">立即投注</span></li>
            <li><input type="hidden" class="ipt-6" max="9999" maxlength="4" id="apMul" value="1"></li>
            <li><input type="hidden" class="ipt-6" max="120" maxlength="3" id="apNum" value="1"></li>
        </div>
	  </div>
    <!--立即投注[[-->
</div>
<!--玩法弹层[[-->
<div class="pop-box4 pop-box-k3 none" id="myk3" cmd="me">
  <div class="pop-box4-arr"></div>
  <div class="filt-popc">
    <ul class="select_list select_list-1">
      <li rel="HSZ" k="和值/三同号" eq="0">
        <span class="btn-pop btn-pop-on">
          <b>和值/三同号</b><br>
                    	  <span>奖金9-240<%=setting(56)%></span><br>
                  	           <span>
            <span class="k3-num-s k3-num-s-1"></span>
            <span class="k3-num-s k3-num-s-1"></span>
            <span class="k3-num-s k3-num-s-1"></span>
          </span>
        </span>
      </li>
      <li rel="3BT" k="三不同号" eq="1">
        <span class="btn-pop">
          <b>三不同号</b><br>
                    	<span>奖金10-40<%=setting(56)%></span><br>
                  	           <span>
            <span class="k3-num-s k3-num-s-2"></span>
            <span class="k3-num-s k3-num-s-3"></span>
            <span class="k3-num-s k3-num-s-5"></span>
          </span>
        </span>
      </li>
      <li rel="2TD" k="二同号" eq="2">
        <span class="btn-pop">
          <b>二同号</b><br>
                     	<span>奖金80<%=setting(56)%></span><br>
                  	           <span>
            <span class="k3-num-s k3-num-s-1"></span>
            <span class="k3-num-s k3-num-s-1"></span>
            <span class="k3-num-s k3-num-s-3"></span>
          </span>
        </span>
      </li>
      <li rel="2BT" k="二不同号" eq="3">
       <span class="btn-pop">
          <b>二不同号</b><br>
                    	<span>奖金8<%=setting(56)%></span><br>
                  	           <span>
            <span class="k3-num-s k3-num-s-3"></span>
            <span class="k3-num-s k3-num-s-5"></span>
          </span>
       </span> 
     </li>
    </ul>
  </div>
</div>
<!--工具弹层[[-->
<div class="pop-box5 none" id="tools" cmd="me">
  <div class="pop-box5-bar"></div>
  <div class="filt-popc">
    <ul class="poker-tool-list">
       <li><a id="goumailj">已选号码</a></li>
       <li><a id="kjlianjie">历史开奖</a></li>
       <li><a href="/User/BuyRecord.asp">投注记录</a></li>
       <li><a id="tjies">玩法介绍</a></li>
       <li><a id="tcanyu">参与合玩</a></li>
    </ul>
  </div>
</div>
<script src="../JS/b862fb33.js"></script>
<script type="text/javascript">var _gaq=_gaq||[];_gaq.push(['_setAccount','UA-31766466-1']);_gaq.push(['_setDomainName', 'none']);_gaq.push(['_trackPageview']);(function(){var ga=document.createElement('script');ga.type='text/javascript';ga.async=true;ga.src='../JS/GA.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(ga,s);})();</script>

</body></html>