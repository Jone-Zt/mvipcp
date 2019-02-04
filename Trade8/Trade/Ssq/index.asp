<!--#include file="../../Conn.asp"--><!DOCTYPE html>
<!DOCTYPE html>
<html><head><meta http-equiv="Content-Type" content="text/html; charset=GBK">
<title><%=Setting(0)%>-双色球</title>
<meta charset="GBK">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="format-detection" content="telephone=no">
<meta http-equiv="cleartype" content="on"> 
<link rel="apple-touch-icon-precomposed" href="../../Images/Public/t01b0f56b331d358632.png">
<link rel="apple-touch-icon" href="../../Images/Public/t01b0f56b331d358632.png">
<link rel="stylesheet" href="../../Css/Public.css">
<link rel="stylesheet" href="../../Css/mobile01.css">
<script type="text/javascript" async="" src="../JS/GA.js"></script>
<script src="../JS/Libs.js"></script><style>.gmu-media-detect{-webkit-transition: width 0.001ms; width: 0; position: absolute; top: -10000px;}
@media screen and (width: 1920px) { #gmu-media-detect0 { width: 1px; } } </style>
<script src="../JS/Ssq/ssqfirst.js"></script>
<script src="../JS/20141212.js"></script>
<script src="../JS/PassTime.js?v=0.0.1"></script>
</head><body>
<div class="wrap">
  <div class="head">
    <h2 id="navtit" cmd="me"><b id="lottery">双色球</b>-<cite id="game">自选</cite><span class="head-arr"><em></em></span></h2>
    <a href="../../index.asp" class="btn-qgkj" id="reffer"><span><em></em></span><cite id="refferto">游戏大厅</cite></a>
    <span class="btn-menu" cmd="me">≡</span>
    <span class="btn-chart"><i></i></span>
  </div>
  <div class="top-date" id="myssq">
    <div class="history" align="center">
      <p class="tit">第<i class="actqh" id="showid"></i>期 | <em class="countdown red" id="showtime"></em></p>
      <div id="history" class="history-show"></div>
    </div>
    <span class="top-arr" id="arrow"></span>
  </div>
  <div class="w320">
    <!--走势图投注区[[-->
    <div class="pick none">
      <div class="ssqshow-tit none" id="chartscd"><span class="more red"><cite class="countdown" id="showtime1"></cite></span><h2>第<cite class="actqh red" id="showid1"></cite>期</h2></div>
      <div class="pick-box pick-red">
      	<div class="column">
		  <div class="in-entry">
			<div class="bcy" id="chart_tab">
              <div class="xq-nav xq-nav-chart">
                  <a href="javascript:;" class="sel" m="0">红球奖号</a>
                  <a href="javascript:;" m="1">蓝球奖号</a>
                  <a href="javascript:;" m="2">红球形态</a>
               </div>
            </div>
            <div class="chart-help">温馨提示：走势区可以左右滑动</div>
			<div class="chart-tab" style="-webkit-transform:translate3d(0,0,0); height:572px;">
				<div class="chart-tab-box" style="-webkit-transform:translate3d(0px,0,0);-webkit-backface-visibility:hidden;">
					<div class="tab-cont chart-num-list" id="fixed1" style="-webkit-transform:translate3d(0,0,0);">
                    	<!--红球号码[[-->
                        <div class="table-tab" style="height:572px;">
                        	<ul class="chart-list" id="chart_red_tab"><li>期号</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li></ul>
                            <div class="scroll-container" id="scroll_red" style="height:100%;">
                            	<div class="scroll-box" id="fixed_red">
                                	<table class="table">
                                      <thead><tr><th class="bw"><span>01</span></th><th><span>02</span></th><th><span>03</span></th><th><span>04</span></th><th><span>05</span></th><th><span>06</span></th><th><span>07</span></th><th><span>08</span></th><th><span>09</span></th><th><span>10</span></th><th class="br2"><span>11</span></th><th><span>12</span></th><th><span>13</span></th><th><span>14</span></th><th><span>15</span></th><th><span>16</span></th><th><span>17</span></th><th><span>18</span></th><th><span>19</span></th><th><span>20</span></th><th><span>21</span></th><th class="br2"><span>22</span></th><th><span>23</span></th><th><span>24</span></th><th><span>25</span></th><th><span>26</span></th><th><span>27</span></th><th><span>28</span></th><th><span>29</span></th><th><span>30</span></th><th><span>31</span></th><th><span>32</span></th><th class="br2"><span>33</span></th><th><span>1区</span></th><th><span>2区</span></th><th><span>3区</span></th></tr></thead>
                                       <tbody id="chart_red">
                                       	  <tr><td colspan="16">正在努力加载中，请稍后...</td><td colspan="12"></td><td colspan="14"></td></tr>
                                       </tbody>
                                   	</table>
                                </div>
                            </div>
                        </div>
                        <!--红球号码[[-->
					</div>
					<div class="tab-cont chart-num-list02" style="-webkit-transform:translate3d(0,0,0);">
						<!--蓝球号码[[-->
                        <div class="table-tab" style="height:572px;">
                        	<ul class="chart-list" id="chart_blue_tab"><li>期号</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li></ul>
                            <div class="scroll-container" id="scroll_blue" style="height:100%;">
                            	<div class="scroll-box" id="fixed_blue">
                                	<table class="table">
                                      <thead><tr><th class="bw"><span>01</span></th><th><span>02</span></th><th><span>03</span></th><th><span>04</span></th><th><span>05</span></th><th><span>06</span></th><th><span>07</span></th><th class="br2"><span>08</span></th><th><span>09</span></th><th><span>10</span></th><th><span>11</span></th><th><span>12</span></th><th><span>13</span></th><th><span>14</span></th><th><span>15</span></th><th class="br2"><span>16</span></th><th><span>大</span></th><th><span>小</span></th><th><span>奇</span></th><th><span>偶</span></th></tr></thead>
                                       <tbody id="chart_blue">
                                       	  <tr><td colspan="11">正在努力加载中，请稍后...</td><td colspan="9"></td></tr>
                                       </tbody>
                                   	</table>
                                </div>
                            </div>
                        </div>
                        <!--蓝球号码[[-->
                    </div>
					<div class="tab-cont chart-num-list02" style="-webkit-transform:translate3d(0,0,0);">
                    	<!--红球号码形态[[-->
                        <div class="table-tab" style="height:603px;">
                        	<ul class="chart-list" id="chart_dxjo_tab"><li>期号</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li><li>-</li></ul>
                            <div class="scroll-container" id="scroll_dxjo" style="height:100%;">
                            	<div class="scroll-box" id="fixed_dxjo">
                                  <table class="table">
                                      <thead><tr><th colspan="7" class="br2"><span>红球大小比</span></th><th colspan="7"><span>红球奇偶比</span></th></tr><tr><th><span>0:6</span></th><th><span>1:5</span></th><th><span>2:4</span></th><th><span>3:3</span></th><th><span>4:2</span></th><th><span>5:1</span></th><th class="br2"><span>6:0</span></th><th><span>0:6</span></th><th><span>1:5</span></th><th><span>2:4</span></th><th><span>3:3</span></th><th><span>4:2</span></th><th><span>5:1</span></th><th><span>6:0</span></th></tr></thead>
                       				 <tbody id="chart_red_dxjom"><tr><td colspan="14">正在努力加载中，请稍后...</td></tr></tbody>
                       			  </table>
                                </div>
                            </div>
                        </div>
                        <!--红球号码形态[[-->
                    </div>
				</div>
			</div>
		  </div>
	    </div>
      </div>
      
      <div class="myhelp none" id="myhelp" style="margin-top:-6px;">
          <table width="100%">
            <thead><tr><th colspan="3"><div class="helphanle"><span class="arr arr-on"><em></em></span><strong>参数说明</strong></div></th></tr></thead>
            <tbody class="none" id="help-box">
                <tr><td colspan="3" class="param">
                遗漏数据：自上期开出到本期间隔的期数。<br>
                红球三分区：一区01～11，二区12～22，三区23～33。<br>
                蓝球大号：09 10 11 12 13 14 15 16。<br>
                蓝球小号：01 02 03 04 05 06 07 08<br>
                蓝球奇号：01 03 05 07 09 11 13 15 。<br>
                蓝球偶号：02 04 06 08 10 12 14 16 。<br>
                红球大号：17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33。<br>
                红球小号：01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16。<br>
                红球奇号：01 03 05 07 09 11 13 15 17 19 21 23 25 27 29 31 33。<br>
                红球偶号：02 04 06 08 10 12 14 16 18 20 22 24 26 28 30 32。
                </td>
            </tr></tbody>
          </table>
      </div>
    </div>
    <!--走势图投注区[[-->
    <!--普通投注区[[-->
    <div class="pick"> 
      <div class="pick-tit">玩法：至少选<em class="red">6个红球</em>+<em class="blue">1个蓝球</em> <em class="rocktip">摇一摇机选</em></div>
      <div class="pick-box pick-red">
        <ul id="r">
          <li><span>01</span></li>
          <li><span>02</span></li>
          <li><span>03</span></li>
          <li><span>04</span></li>
          <li><span>05</span></li>
          <li><span>06</span></li>
          <li><span>07</span></li>
          <li><span>08</span></li>
          <li><span>09</span></li>
          <li><span>10</span></li>
          <li><span>11</span></li>
          <li><span>12</span></li>
          <li><span>13</span></li>
          <li><span>14</span></li>
          <li><span>15</span></li>
          <li><span>16</span></li>
          <li><span>17</span></li>
          <li><span>18</span></li>
          <li><span>19</span></li>
          <li><span>20</span></li>
          <li><span>21</span></li>
          <li><span>22</span></li>
          <li><span>23</span></li>
          <li><span>24</span></li>
          <li><span>25</span></li>
          <li><span>26</span></li>
          <li><span>27</span></li>
          <li><span>28</span></li>
          <li><span>29</span></li>
          <li><span>30</span></li>
          <li><span>31</span></li>
          <li><span>32</span></li>
          <li><span>33</span></li>
        </ul>
      </div>
      <div class="line-3"></div>
      <div class="pick-box pick-blue">
        <ul id="b">
          <li><span>01</span></li>
          <li><span>02</span></li>
          <li><span>03</span></li>
          <li><span>04</span></li>
          <li><span>05</span></li>
          <li><span>06</span></li>
          <li><span>07</span></li>
          <li><span>08</span></li>
          <li><span>09</span></li>
          <li><span>10</span></li>
          <li><span>11</span></li>
          <li><span>12</span></li>
          <li><span>13</span></li>
          <li><span>14</span></li>
          <li><span>15</span></li>
          <li><span>16</span></li>
        </ul>
      </div>
    </div>
    <!--普通投注区[[-->
    <!--胆拖投注区[[-->
    <div class="pick none"> 
      <div class="pick-tit"><strong class="red">红球胆码：</strong>至少选<strong class="red">1</strong>个，最多可选<strong class="red">5</strong>个</div>
      <div class="pick-box pick-red">
        <ul id="rd">
          <li><span>01</span></li>
          <li><span>02</span></li>
          <li><span>03</span></li>
          <li><span>04</span></li>
          <li><span>05</span></li>
          <li><span>06</span></li>
          <li><span>07</span></li>
          <li><span>08</span></li>
          <li><span>09</span></li>
          <li><span>10</span></li>
          <li><span>11</span></li>
          <li><span>12</span></li>
          <li><span>13</span></li>
          <li><span>14</span></li>
          <li><span>15</span></li>
          <li><span>16</span></li>
          <li><span>17</span></li>
          <li><span>18</span></li>
          <li><span>19</span></li>
          <li><span>20</span></li>
          <li><span>21</span></li>
          <li><span>22</span></li>
          <li><span>23</span></li>
          <li><span>24</span></li>
          <li><span>25</span></li>
          <li><span>26</span></li>
          <li><span>27</span></li>
          <li><span>28</span></li>
          <li><span>29</span></li>
          <li><span>30</span></li>
          <li><span>31</span></li>
          <li><span>32</span></li>
          <li><span>33</span></li>
        </ul>
      </div>
      <div class="line-3"></div>
      <div class="pick-tit">
        <strong class="red">红球拖码：</strong>胆码加拖码至少<strong class="red">6</strong>个
      </div>
      <div class="pick-box pick-red">
        <ul id="rt">
          <li><span>01</span></li>
          <li><span>02</span></li>
          <li><span>03</span></li>
          <li><span>04</span></li>
          <li><span>05</span></li>
          <li><span>06</span></li>
          <li><span>07</span></li>
          <li><span>08</span></li>
          <li><span>09</span></li>
          <li><span>10</span></li>
          <li><span>11</span></li>
          <li><span>12</span></li>
          <li><span>13</span></li>
          <li><span>14</span></li>
          <li><span>15</span></li>
          <li><span>16</span></li>
          <li><span>17</span></li>
          <li><span>18</span></li>
          <li><span>19</span></li>
          <li><span>20</span></li>
          <li><span>21</span></li>
          <li><span>22</span></li>
          <li><span>23</span></li>
          <li><span>24</span></li>
          <li><span>25</span></li>
          <li><span>26</span></li>
          <li><span>27</span></li>
          <li><span>28</span></li>
          <li><span>29</span></li>
          <li><span>30</span></li>
          <li><span>31</span></li>
          <li><span>32</span></li>
          <li><span>33</span></li>
        </ul>
      </div>
      <div class="line-3"></div>
      <div class="pick-tit">
        <strong class="blue">蓝球：</strong>至少选<strong class="blue">1</strong>个蓝球 
      </div>
      <div class="pick-box pick-blue pick-dtblue">
        <ul id="bd">
          <li><span>01</span></li>
          <li><span>02</span></li>
          <li><span>03</span></li>
          <li><span>04</span></li>
          <li><span>05</span></li>
          <li><span>06</span></li>
          <li><span>07</span></li>
          <li><span>08</span></li>
          <li><span>09</span></li>
          <li><span>10</span></li>
          <li><span>11</span></li>
          <li><span>12</span></li>
          <li><span>13</span></li>
          <li><span>14</span></li>
          <li><span>15</span></li>
          <li><span>16</span></li>
        </ul>
      </div>
    </div>
    <!--胆拖投注区[[-->
  </div>
  <!--投注菜单[[-->
  <div class="pop-box2 none" cmd="me">
    <div class="pop-box2-arr"></div>
    <div class="filt-popc">
      <ul>
        <li><span class="btn-pop plays btn-pop-on" action="1" txt="自选">自选号码</span></li>
        <li style="display:none"><span class="btn-pop plays" action="2" txt="胆拖">胆拖投注</span></li>
        <li><span class="btn-pop plays" action="0" txt="走势">走势投注</span></li>
        <li id="dim1"><a href="/Trade/?type=20" class="btn-pop">参与合玩</a></li>
      </ul>
    </div>
  </div>
  <!--投注菜单[[-->
  <!--投注工具[[-->
  <div class="pop-box3 none" id="tools" cmd="me">
    <div class="pop-box2-bar"></div>
    <div class="filt-popc">
      <ul>
        <li><a href="./cart.asp" class="btn-pop">已选号码</a></li>
        <li><a href="/KaiJiang/caizhongkj.asp?caizhong=0" class="btn-pop">历史开奖</a></li>
        <li><a href="/User/BuyRecord.asp" class="btn-pop">投注记录</a></li>
        <li><a href="/News/newsxq.asp?xq=173" class="btn-pop">玩法介绍</a></li>
      </ul>
    </div>
  </div>
  <!--投注工具[[-->
  <div class="tab-cont chart-num-list02 lh30 fixcharts none" id="fixed4" style="float:left;overflow:hidden;">
    <div class="table-tab" id="fixed5" style="height:32px;">
        <ul class="chart-list"><li id="fixed2">期号</li></ul>
        <div class="scroll-container" style="height:100%;overflow:hidden;"><div class="scroll-box" id="fixed3"><table class="table"><thead id="fix_hd"></thead></table></div></div>
    </div>
  </div>
  <!--投注确认[[-->
  <div class="pick-b">
    <div class="bet-top" id="deal">
      <p>共<em class="red">0</em>注,<em class="red">0</em><%=setting(56)%></p>
    </div>
    <div class="pick-c">
      <ul class="pick-betting">
        <li id="rndom"><i class="ico-pick"></i>机选</li>
        <li id="clear" class="none"><i class="ico-del"></i>清空</li>
        <li id="addcart"><span class="ico-add2"></span>添加号码<em id="group">4</em></li>
        <li><button class="btn-bet" type="button" id="bets">投注</button></li>
      </ul>
    </div>  
  </div>
  <!--投注确认[[-->
  <div class="h75"></div>
</div>
<script src="../JS/b862fb33.js"></script>
<script>monitor.setProject('kurei_cp_m').getTrack().getClickAndKeydown();</script>
<script type="text/javascript">var _gaq=_gaq||[];_gaq.push(['_setAccount','UA-31766466-1']);_gaq.push(['_setDomainName', 'none']);_gaq.push(['_trackPageview']);(function(){var ga=document.createElement('script');ga.type='text/javascript';ga.async=true;ga.src='../JS/GA.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(ga,s);})();</script>

</body></html>