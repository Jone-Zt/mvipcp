<!--#include file="../../Conn.asp"--><!DOCTYPE html>
<!DOCTYPE html>
<html><head><meta http-equiv="Content-Type" content="text/html; charset=GBK">
<title><%=Setting(0)%>-排列三</title>
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
<script src="../JS/libs.js"></script><style>.gmu-media-detect{-webkit-transition: width 0.001ms; width: 0; position: absolute; top: -10000px;}
@media screen and (width: 1920px) { #gmu-media-detect0 { width: 1px; } } </style>
<script src="../JS/Pls/p3first.js"></script>
<script src="../JS/20141212.js"></script>
<script src="../JS/PassTime.js?v=0.0.1"></script>
</head><body>
<div class="wrap">
  <div class="head"><h2 id="navtit">排列三-<cite id="game">直选</cite><span class="head-arr"><em></em></span></h2><a href="../../index.asp" class="btn-qgkj" id="sourceUrl"><span><em></em></span>游戏大厅</a><a href="javascript:;" class="btn-menu">≡</a><a href="javascript:;" class="btn-chart"><i></i></a></div>
  <div class="top-date time" id="myp3" issue="2015210" issale="0" endtime="1438774200" mul="0">
    <div class="history" id="p3history" style="height: 22px;" align="center"></div>
    <a href="javascript:;" class="top-arr"></a> 
    </div>
  <div class="w320">
    <div class="area1" id="mycountdown">
      <div class="xq-tit">
        <h2>第 <cite class="red" id="showid"></cite> 期</h2>
        <em class="red" id="showtime"></em></div>
    </div>
    <div class="line-3" id="myline"></div>
    <div class="slow-txt" id="detxt">每位至少选1个号码，奖金<strong class="red">1040</strong><%=setting(56)%></div>
    <!--走势图投注区 begin-->
    <div class="pick none">
        <div class="pick-box pick-red">
            <div class="column">
                <div class="in-entry">
                    <div class="bcy" id="chart_tab">
                      <div class="xq-nav xq-nav-chart">
                          <a href="javascript:;" class="sel" m="0">第一位奖号</a>
                          <a href="javascript:;" m="1">第二位奖号</a>
                          <a href="javascript:;" m="2">第三位奖号</a>
                       </div>
                    </div>
                	<div class="chart-tab" style="-webkit-transform:translate3d(0,0,0);height:572px;">
                        <div class="chart-tab-box" style="-webkit-transform:translate3d(0px,0,0);-webkit-backface-visibility:hidden;">
                            <div class="tab-cont chart-num-list" style="-webkit-transform:translate3d(0,0,0);"><table width="100%"><thead id="hd_first"><tr><th>期号</th><th>奖号</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th></tr></thead><tbody id="bd_first"><tr><td colspan="12">正在努力加载中...</td></tr></tbody></table>
                            </div>
                            <div class="tab-cont chart-num-list02" style="-webkit-transform:translate3d(0,0,0);"><table width="100%"><thead id="hd_second"><tr><td colspan="12">正在努力加载中...</td></tr></thead><tbody id="bd_second"></tbody></table>
                            </div>
                            <div class="tab-cont chart-num-list02" style="-webkit-transform:translate3d(0,0,0);">
                              <table width="100%"><thead id="hd_third"><tr><td colspan="12">正在努力加载中...</td></tr></thead><tbody id="bd_third"></tbody></table>
                            </div>
                        </div>
               	 </div>
            	</div>
            </div>
        </div>
      	<div class="myhelp" id="myhelp" style="margin-top:-6px;">
         <table width="100%">
           <thead><tr><th colspan="3"><div class="helphanle"><span class="arr arr-on"><em></em></span><strong>参数说明</strong></div></th></tr></thead>
           <tbody class="none" id="help-box"><tr><td colspan="3" class="param">遗漏数据：自上期开出到本期间隔的期数。<br>大小号：大号5～9，小号0～4。<br>奇偶号：奇数1、3、5、7、9，偶数0、2、4、6、8。<br>跨度：开奖号码中最大号码减去最小号码后的差值。示例：奖号785，跨度值为3(8-5=3)。<br>重号类型：3个开奖号码均不相同即为组六形态，有且仅有2个开奖号码相同为组三形态，3个开奖号码全部相同为豹子形态。</td></tr></tbody>
          </table>
      </div>
        <div class="ssqshow-tit none" style="margin:4px 0 8px 0;" id="chartscd"><span class="more red"><cite class="countdowm" id="showtime1"></cite></span><h2><b class="red" id="chartplay">直选</b>第<cite class="actqh red" id="showid1"></cite>期</h2></div>
    </div>
    <!--走势图投注区 end-->
    <!--普通(直选)投注 begin-->
    <div class="pick">
      <div class="pick-box pick-red">
        <dl>
          <dt>百位：</dt>
          <dd>
            <ul>
              <li><span>0</span></li>
              <li><span>1</span></li>
              <li><span>2</span></li>
              <li><span>3</span></li>
              <li><span>4</span></li>
              <li><span>5</span></li>
              <li><span>6</span></li>
              <li><span>7</span></li>
              <li><span>8</span></li>
              <li><span>9</span></li>
            </ul>
          </dd>
        </dl>
        <div class="line-3"></div>
        <dl>
          <dt>十位：</dt>
          <dd>
            <ul>
              <li><span>0</span></li>
              <li><span>1</span></li>
              <li><span>2</span></li>
              <li><span>3</span></li>
              <li><span>4</span></li>
              <li><span>5</span></li>
              <li><span>6</span></li>
              <li><span>7</span></li>
              <li><span>8</span></li>
              <li><span>9</span></li>
            </ul>
          </dd>
        </dl>
        <div class="line-3"></div>
        <dl>
          <dt>个位：</dt>
          <dd>
            <ul>
              <li><span>0</span></li>
              <li><span>1</span></li>
              <li><span>2</span></li>
              <li><span>3</span></li>
              <li><span>4</span></li>
              <li><span>5</span></li>
              <li><span>6</span></li>
              <li><span>7</span></li>
              <li><span>8</span></li>
              <li><span>9</span></li>
            </ul>
          </dd>
        </dl>
      </div>
    </div>
    <!--普通(直选)投注 end--> 
    <!--普通(组三)投注 begin-->
    <div class="pick none">
      <div class="pick-box pick-red">
        <dl>
          <dt>选号：</dt>
          <dd>
            <ul>
              <li><span>0</span></li>
              <li><span>1</span></li>
              <li><span>2</span></li>
              <li><span>3</span></li>
              <li><span>4</span></li>
              <li><span>5</span></li>
              <li><span>6</span></li>
              <li><span>7</span></li>
              <li><span>8</span></li>
              <li><span>9</span></li>
            </ul>
          </dd>
        </dl>
      </div>
    </div>
    <!--普通(组三)投注 end--> 
    <!--普通(组六))投注 end-->
    <div class="pick none">
      <div class="pick-box pick-red">
        <dl>
          <dt>选号：</dt>
          <dd>
            <ul>
              <li><span>0</span></li>
              <li><span>1</span></li>
              <li><span>2</span></li>
              <li><span>3</span></li>
              <li><span>4</span></li>
              <li><span>5</span></li>
              <li><span>6</span></li>
              <li><span>7</span></li>
              <li><span>8</span></li>
              <li><span>9</span></li>
            </ul>
          </dd>
        </dl>
      </div>
    </div>
    <!--普通(组六)投注 end--> 
    <!--胆拖投注 begin-->
    <div class="pick none">
      <div class="pick-box pick-red">
        <dl>
          <dt>胆码：</dt>
          <dd>
            <ul>
              <li><span>0</span></li>
              <li><span>1</span></li>
              <li><span>2</span></li>
              <li><span>3</span></li>
              <li><span>4</span></li>
              <li><span>5</span></li>
              <li><span>6</span></li>
              <li><span>7</span></li>
              <li><span>8</span></li>
              <li><span>9</span></li>
            </ul>
          </dd>
        </dl>
        <div class="line-3"></div>
        <dl>
          <dt>拖码：</dt>
          <dd>
            <ul>
              <li><span>0</span></li>
              <li><span>1</span></li>
              <li><span>2</span></li>
              <li><span>3</span></li>
              <li><span>4</span></li>
              <li><span>5</span></li>
              <li><span>6</span></li>
              <li><span>7</span></li>
              <li><span>8</span></li>
              <li><span>9</span></li>
            </ul>
          </dd>
        </dl>
      </div>
    </div>
    <!--胆拖投注 end--> 
  </div>
  <div class="pick-b">
    <div class="bet-top" id="pdeal">
      <p>您选择了<strong class="red" id="count">0</strong>注号码,<strong class="red" id="price">0</strong><%=setting(56)%></p>
    </div>
    <div class="betting">
      <button class="btn-addnmu" type="button" id="addcart"><span></span>添加到号码篮<em id="group">0</em></button>
      <button class="btn-betting" type="button" id="bets">直接投注</button>
    </div>
  </div>
  <div class="pop-box2 none">
    <div class="pop-box2-arr"></div>
    <div class="filt-popc">
      <h3>普通投注</h3>
      <ul>
        <li><a href="javascript:;" class="btn-pop btn-pop-on plays" method="1" game="Z1" play="normal" txt="每位至少选1个号码，奖金&lt;strong class=&#39;red&#39;&gt;1040&lt;/strong&gt;<%=setting(56)%>">直选</a></li>
        <li><a href="javascript:;" class="btn-pop plays" method="2" game="F6" play="normal" txt="至少选择3个号码，奖金&lt;strong class=&#39;red&#39;&gt;173&lt;/strong&gt;<%=setting(56)%>">组六</a></li>
        <li><a href="javascript:;" class="btn-pop plays" method="3" game="F3" play="normal" txt="至少选择2个号码，奖金&lt;strong class=&#39;red&#39;&gt;346&lt;/strong&gt;<%=setting(56)%>">组三</a></li>
        <li><a href="/Trade/?type=31" class="btn-pop">参与合玩</a></li>
      </ul>
      <div class="line-4"></div>
      <h3>走势图投注</h3>
      <ul>
        <li><a href="javascript:;" class="btn-pop plays" method="1" game="Z1" play="charts" txt="每位至少选1个号码，奖金&lt;strong class=&#39;red&#39;&gt;1040&lt;/strong&gt;<%=setting(56)%>">直选</a></li>
        <li><a href="javascript:;" class="btn-pop plays" method="2" game="F6" play="charts" txt="至少选择3个号码，奖金&lt;strong class=&#39;red&#39;&gt;173&lt;/strong&gt;<%=setting(56)%>">组六</a></li>
        <li><a href="javascript:;" class="btn-pop plays" method="3" game="F3" play="charts" txt="至少选择2个号码，奖金&lt;strong class=&#39;red&#39;&gt;346&lt;/strong&gt;<%=setting(56)%>">组三</a></li>
      </ul>
      <div class="line-4"></div>
      <h3>胆拖投注</h3>
      <ul>
        <li><a href="javascript:;" class="btn-pop plays" method="4" game="F6" play="dt" txt="选1-2个胆码，1-9个拖码，相加至少3个，奖金&lt;strong class=&#39;red&#39;&gt;173&lt;/strong&gt;<%=setting(56)%>">组六</a></li>
        <li><a href="javascript:;" class="btn-pop plays" method="4" game="F3" play="dt" txt="选1个胆码，1-9个拖码，相加至少2个，奖金&lt;strong class=&#39;red&#39;&gt;346&lt;/strong&gt;<%=setting(56)%>">组三</a></li>
      </ul>
    </div>
  </div>
  <div class="pop-box3 none" id="tools">
    <div class="pop-box2-bar"></div>
    <div class="filt-popc">
      <ul>
        <li><a href="./cart.asp" id="referer" class="btn-pop">已选号码</a></li>
        <li><a href="/KaiJiang/caizhongkj.asp?caizhong=3" class="btn-pop">历史开奖</a></li>
        <li><a href="/User/BuyRecord.asp" class="btn-pop">投注记录</a></li>
        <li><a href="/News/newsxq.asp?xq=169" class="btn-pop">玩法介绍</a></li>
      </ul>
    </div>
  </div>
  <div class="h75"></div>
</div>
<script src="../JS/b862fb33.js"></script>
<script>monitor.setProject('kurei_cp_m').getTrack().getClickAndKeydown();</script>
<script type="text/javascript">var _gaq=_gaq||[];_gaq.push(['_setAccount','UA-31766466-1']);_gaq.push(['_setDomainName', 'none']);_gaq.push(['_trackPageview']);(function(){var ga=document.createElement('script');ga.type='text/javascript';ga.async=true;ga.src='../JS/GA.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(ga,s);})();</script>
</body>
</html>