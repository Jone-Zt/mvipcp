<!--#include file="../../Conn.asp"--><!DOCTYPE html>
<html><head><meta http-equiv="Content-Type" content="text/html; charset=GBK">
<title><%=Setting(0)%>-时时彩</title>
<meta charset="GBK">
<meta name="keywords" content="<%=Setting(0)%>游戏触屏版">
<meta name="description" content="<%=Setting(0)%>游戏触屏版">
<meta name="author" content="kurei.cn">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="format-detection" content="telephone=no">
<meta http-equiv="cleartype" content="on"> 
<link rel="stylesheet" href="../../Css/public.css">
<link rel="stylesheet" href="../../Css/mobile.css">
<script type="text/javascript" src="../JS/Libs.js"></script>
<script type="text/javascript" src="../JS/JS.js"></script>
<script type="text/javascript" src="../JS/JxSsc/JxSsc_First.js?v=<%=time()%>"></script>
<script type="text/javascript" src="../JS/PassTime.js?v=0.0.1"></script>
</head>
<body onLoad="javascript:ttonclick();">
<div class="wrap">
  <div class="head"><h2 id="navtit"><cite id="game">三星组六</cite><span class="head-arr"><em></em></span></h2><a href="/" class="btn-qgkj" id="sourceUrl"><span><em></em></span>游戏大厅</a><a href="javascript:;" class="btn-menu">≡</a><a href="javascript:;" class="btn-chart"><i></i></a></div>
  	<div class="top-date" align="center">
    <div id="setting" class="history" pt="F6" endtime="" prevtime="" issale=""><p><cite id="kkid"></cite> | <cite class="red" id="showtime"></cite></p></div>
    <a href="javascript:;" class="top-arr"></a>
  </div>
  <div class="w320">
    <div class="y11-txt" id="detxt">至少选择3个号码，奖金190<%=setting(56)%></div>
    <div class="pick pick-11 pick-ssc">
      <!--走势图投注区 begin-->
      <div class="pick-box pick-red none" id="charts">
      	<div class="column">
		 <div class="in-entry">
			<div class="bcy" id="chart_tab"><div class="xq-nav xq-nav-chart"><a href="javascript:;" class="sel" m="0">万位</a><a href="javascript:;" m="1">千位</a><a href="javascript:;" m="2">百位</a><a href="javascript:;" m="3" id="hd_chart3" style="display:none;">十位</a><a href="javascript:;" m="4" id="hd_chart4" style="display:none;">个位</a></div>
            </div>
			<div class="chart-tab" style="-webkit-transform:translate3d(0,0,0);height:562px;">
				<div class="chart-tab-box" style="-webkit-transform:translate3d(0px,0,0);-webkit-backface-visibility:hidden;">
					<div class="tab-cont chart-num-list" style="-webkit-transform:translate3d(0,0,0);">
                    	<table width="100%">
                        	<thead id="hd1"><tr><th>期号</th><th>奖号</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th></tr></thead>
                            <tbody id="bd1"><tr><td colspan="12">正在努力加载中...</td></tr></tbody>
                        </table>
					</div>
					<div class="tab-cont chart-num-list02" style="-webkit-transform:translate3d(0,0,0);">
                    	<table width="100%">
                        	<thead id="hd2"><tr><th>期号</th><th>奖号</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th></tr></thead>
                            <tbody id="bd2"><tr><td colspan="12">正在努力加载中...</td></tr></tbody>
                        </table>
					</div>
					<div class="tab-cont chart-num-list02" style="-webkit-transform:translate3d(0,0,0);">
                    	<table width="100%">
                        	<thead id="hd3"><tr><th>期号</th><th>奖号</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th></tr></thead>
                            <tbody id="bd3"><tr><td colspan="12">正在努力加载中...</td></tr></tbody>
                        </table>
					</div>
                    <div class="tab-cont chart-num-list02 none" style="-webkit-transform:translate3d(0,0,0);" id="bd_chart4">
                    	<table width="100%">
                        	<thead id="hd4"><tr><th>期号</th><th>奖号</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th></tr></thead>
                            <tbody id="bd4"><tr><td colspan="12">正在努力加载中...</td></tr></tbody>
                        </table>
					</div>
                    <div class="tab-cont chart-num-list02 none" style="-webkit-transform:translate3d(0,0,0);" id="bd_chart5">
                    	<table width="100%">
                        	<thead id="hd5"><tr><th>期号</th><th>奖号</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th></tr></thead>
                            <tbody id="bd5"><tr><td colspan="12">正在努力加载中...</td></tr></tbody>
                        </table>
					</div>
				</div>
			</div>
		</div>
	    </div>
      </div>
      <div class="myhelp none" id="myparam" style="margin-top:-6px;"><table width="100%"><thead><tr><th colspan="3"><div class="helphanle" sort="param"><span class="arr arr-on"><em></em></span><strong>参数说明</strong></div></th></tr></thead><tbody class="none" id="box_param"><tr><td colspan="3" class="param" id="des"></td></tr></tbody></table>
      </div>
      <div class="ssqshow-tit none" style="margin:4px 0 8px 0;" id="chartscd"><span class="more red"><cite class="friends" id="showtime1"></cite> <cite class="countdown"></cite></span><h2 id="chartsH2"></h2></div>
      <!--走势图投注区 end-->
      <!--选号投注区 begin-->
      <div class="pick-box pick-red none" id="star_d">
        <dl>
          <dt><span>万位<em></em></span>
            <p>遗漏：</p>
          </dt>
          <dd>
            <ul>
              <li><span>0</span><em>-</em></li>
              <li><span>1</span><em>-</em></li>
              <li><span>2</span><em>-</em></li>
              <li><span>3</span><em>-</em></li>
              <li><span>4</span><em>-</em></li>
              <li><span>5</span><em>-</em></li>
              <li><span>6</span><em>-</em></li>
              <li><span>7</span><em>-</em></li>
              <li><span>8</span><em>-</em></li>
              <li><span>9</span><em>-</em></li>
            </ul>
          </dd>
        </dl>
        <div class="line-3"></div>
        <dl>
          <dt><span>千位<em></em></span>
            <p>遗漏：</p>
          </dt>
          <dd>
            <ul>
              <li><span>0</span><em>-</em></li>
              <li><span>1</span><em>-</em></li>
              <li><span>2</span><em>-</em></li>
              <li><span>3</span><em>-</em></li>
              <li><span>4</span><em>-</em></li>
              <li><span>5</span><em>-</em></li>
              <li><span>6</span><em>-</em></li>
              <li><span>7</span><em>-</em></li>
              <li><span>8</span><em>-</em></li>
              <li><span>9</span><em>-</em></li>
            </ul>
          </dd>
        </dl>
        <div class="line-3"></div>
        <dl>
          <dt><span>百位<em></em></span>
            <p>遗漏：</p>
          </dt>
          <dd>
            <ul>
              <li><span>0</span><em>-</em></li>
              <li><span>1</span><em>-</em></li>
              <li><span>2</span><em>-</em></li>
              <li><span>3</span><em>-</em></li>
              <li><span>4</span><em>-</em></li>
              <li><span>5</span><em>-</em></li>
              <li><span>6</span><em>-</em></li>
              <li><span>7</span><em>-</em></li>
              <li><span>8</span><em>-</em></li>
              <li><span>9</span><em>-</em></li>
            </ul>
          </dd>
        </dl>
        <div class="line-3"></div>
        <dl>
          <dt><span>十位<em></em></span>
            <p>遗漏：</p>
          </dt>
          <dd>
            <ul>
              <li><span>0</span><em>-</em></li>
              <li><span>1</span><em>-</em></li>
              <li><span>2</span><em>-</em></li>
              <li><span>3</span><em>-</em></li>
              <li><span>4</span><em>-</em></li>
              <li><span>5</span><em>-</em></li>
              <li><span>6</span><em>-</em></li>
              <li><span>7</span><em>-</em></li>
              <li><span>8</span><em>-</em></li>
              <li><span>9</span><em>-</em></li>
            </ul>
          </dd>
        </dl>
        <div class="line-3"></div>
        <dl>
          <dt><span>个位<em></em></span>
            <p>遗漏：</p>
          </dt>
          <dd>
            <ul>
              <li><span>0</span><em>-</em></li>
              <li><span>1</span><em>-</em></li>
              <li><span>2</span><em>-</em></li>
              <li><span>3</span><em>-</em></li>
              <li><span>4</span><em>-</em></li>
              <li><span>5</span><em>-</em></li>
              <li><span>6</span><em>-</em></li>
              <li><span>7</span><em>-</em></li>
              <li><span>8</span><em>-</em></li>
              <li><span>9</span><em>-</em></li>
            </ul>
          </dd>
        </dl>
      </div>
      <div class="pick-box pick-red" id="star_f">
        <dl>
          <dt><strong>选号</strong>
            <p>遗漏：</p>
          </dt>
          <dd>
            <ul>
              <li><span>0</span><em class="">-</em></li>
              <li><span>1</span><em class="">-</em></li>
              <li><span>2</span><em class="">-</em></li>
              <li><span>3</span><em class="">-</em></li>
              <li><span>4</span><em class="">-</em></li>
              <li><span>5</span><em class="">-</em></li>
              <li><span>6</span><em class="">-</em></li>
              <li><span>7</span><em class="">-</em></li>
              <li><span>8</span><em class="">-</em></li>
              <li><span>9</span><em class="red">-</em></li>
            </ul>
          </dd>
        </dl>
      </div>
      <div class="pick-box pick-red none" id="star_dd">
        <dl>
          <dt><span>十位<em></em></span>
            <p>遗漏：</p>
          </dt>
          <dd>
            <ul>
              <li n="大"><span><b>大</b></span><em r="大">-</em></li>
              <li n="小"><span><b>小</b></span><em r="小">-</em></li>
              <li n="单"><span><b>单</b></span><em r="单">-</em></li>
              <li n="双"><span><b>双</b></span><em r="双">-</em></li>
            </ul>
          </dd>
        </dl>
        <div class="line-3"></div>
        <dl>
          <dt><span>个位<em></em></span>
            <p>遗漏：</p>
          </dt>
          <dd>
            <ul>
              <li n="大"><span><b>大</b></span><em r="大">-</em></li>
              <li n="小"><span><b>小</b></span><em r="小">-</em></li>
              <li n="单"><span><b>单</b></span><em r="单">-</em></li>
              <li n="双"><span><b>双</b></span><em r="双">-</em></li>
            </ul>
          </dd>
        </dl>
      </div>
      <div class="pick-box pick-red none" id="star_fdt">
        <dl>
          <dt><strong>胆码</strong></dt>
          <dd>
            <ul type="d">
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
        <div class="lines"></div>
        <dl>
          <dt><strong>拖码</strong></dt>
          <dd>
            <ul type="t">
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
      <div class="pick-box pick-red none" id="star_fh">
        <dl>
          <dt><strong>选号</strong>
          </dt>
          <dd>
            <ul>
              <%
			  for ixh=0 to 27
			  response.Write("<li><span>"&ixh&"</span></li>")
			  next
			  %>
            </ul>
          </dd>
        </dl>
      </div>
      <div class="pick-box pick-red none" id="star_3h">
        <dl>
          <dt><strong>选号</strong>
          </dt>
          <dd>
            <ul>
              <%
			  for ixh=1 to 26
			  response.Write("<li><span>"&ixh&"</span></li>")
			  next
			  %>
            </ul>
          </dd>
        </dl>
      </div>
      <div class="pick-box pick-red none" id="star_6h">
        <dl>
          <dt><strong>选号</strong>
          </dt>
          <dd>
            <ul>
              <%
			  for ixh=3 to 24
			  response.Write("<li><span>"&ixh&"</span></li>")
			  next
			  %>
            </ul>
          </dd>
        </dl>
      </div>
      <!--龙虎玩法 开始-->
        <div class="pick-box pick-red none" id="star_lgway">
        <dl>
          <dt><strong>龙虎</strong></dt>
          <dd>
            <ul type="lh">
              <li><span>龙</span></li>
              <li><span>虎</span></li>
              <li><span>合</span></li>
            </ul>
          </dd>
        </dl>
        <div class="lines"></div>
        <dl>
          <dt><strong>和值</strong></dt>
          <dd>
            <ul type="dxds">
              <li><span>大</span></li>
              <li><span>小</span></li>
              <li><span>单</span></li>
              <li><span>双</span></li>
            </ul>
          </dd>
        </dl>
      </div>
      <!--龙虎玩法 结束-->
      
      <!--选号投注区 end-->
      <!--遗漏投注区 begin-->
      <div class="pick-box pick-red none" id="loss">
        <div class="infolist4"><table width="100%"><thead><tr><th><b id="lossname">任三</b><select class="sel-8 loss none" id="lossr"></select></th><th colspan="3"><b>遗漏统计</b></th></tr><tr><td>号码（点击添加投注）</td><td>当前</td><td>上期</td><td>最大</td></tr></thead><tbody id="myloss"><tr><td colspan="4">正在努力加载中...</td></tr></tbody></table></div>
        <div class="ht10"></div>
        <a href="javascript:;" class="btn-load" id="lossmore">获取更多</a>
      </div>
      <!--遗漏投注区 end-->  
      <div class="ht10"></div>
    </div>
  </div>
  <div class="pick-b">
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
        <li class="sel" style="width:88px;"><span>普通投注</span></li>
        <!--<li style="width:88px;" class=""><span>遗漏投注</span></li>-->
        <li style="width:88px;" class=""><span>走势投注</span></li>
      </ul>
      <div class="filt-popc-cont" style="-webkit-transform: translate3d(0px, 0px, 0px);height:510px !important;">
      	 <div class="filt-popc-entry" style="-webkit-transform: translate(0px, 0px); -webkit-backface-visibility: hidden; width: 858px;">
         	<ul style="-webkit-transform: translate(0px, 0px); width: 286px;" action="normal" id="container">
            	<!--<li><a href="#" class="btn-pop" play="5D">五星直选</a></li>
                <li><a href="" class="btn-pop" play="5T">五星通选</a></li>
                <li id="removejd"><a href="" class="btn-pop" play="4D">四星</a></li>-->
                
                <li><a href="" class="btn-pop" play="3D">三星后三直选</a></li>
                <li><a href="" class="btn-pop" play="3H">后三直选和值</a></li>
                <li><a href="" class="btn-pop" play="DH">后三直选胆拖</a></li>
                <li><a href="" class="btn-pop" play="HD">后三组选包胆</a></li>
                <li><a href="" class="btn-pop" play="F3">后三组三</a></li>
                <li><a href="" class="btn-pop" play="SD">后三组三胆拖</a></li>
                <li><a href="" class="btn-pop btn-pop-on" play="F6" id="kk1">后三组六</a></li>
                <li><a href="" class="btn-pop" play="LD">后三组六胆拖</a></li>
                <li><a href="" class="btn-pop" play="2D">二星直选</a></li>
                <li><a href="" class="btn-pop" play="F2">二星组选</a></li>
                <li><a href="" class="btn-pop" play="1D">一星</a></li>
                <li><a href="" class="btn-pop" play="DD">大小单双</a></li>
                <li class="childbox"><a href="" class="btn-pop" play="LHWQ">万千位龙虎 </a></li>
                <li class="childbox"><a href="" class="btn-pop" play="LHWB">万百位龙虎 </a></li>
                <li class="childbox"><a href="" class="btn-pop" play="LHWS">万十位龙虎 </a></li>
                <li class="childbox"><a href="" class="btn-pop" play="LHWG">万个位龙虎 </a></li>
                <li class="childbox"><a href="" class="btn-pop" play="LHQB">千百位龙虎 </a></li>
                <li class="childbox"><a href="" class="btn-pop" play="LHQS">千十位龙虎 </a></li>
                <li class="childbox"><a href="" class="btn-pop" play="LHQG">千个位龙虎 </a></li>
                <li class="childbox"><a href="" class="btn-pop" play="LHBS">百十位龙虎 </a></li>
                <li class="childbox"><a href="" class="btn-pop" play="LHBG">百个位龙虎 </a></li>
                <li class="childbox"><a href="" class="btn-pop" play="LHSG">十个位龙虎 </a></li>
                <li><a href="" class="btn-pop" play="Q3">三星前三直选</a></li>
                <li><a href="" class="btn-pop" play="QH">前三直选和值</a></li>
                <li><a href="" class="btn-pop" play="DQ">前三直选胆拖</a></li>
                <li><a href="" class="btn-pop" play="FQ">前三组三</a></li>
                <li><a href="" class="btn-pop" play="3Q">前三组三和值</a></li>                
                <li><a href="" class="btn-pop" play="SQ">前三组三胆拖</a></li>
                <li><a href="" class="btn-pop" play="Q6">前三组六</a></li>
                <li><a href="" class="btn-pop" play="6Q">前三组六和值</a></li>
                <li><a href="" class="btn-pop" play="LQ">前三组六胆拖</a></li>
                <li><a href="" class="btn-pop" play="QD">前三组选包胆</a></li>
                
                <li><a href="" class="btn-pop" play="Z3">三星中三直选</a></li>
                <li><a href="" class="btn-pop" play="ZH">中三直选和值</a></li>
                <li><a href="" class="btn-pop" play="DZ">中三直选胆拖</a></li>
                <li><a href="" class="btn-pop" play="FZ">中三组三</a></li>
                <li><a href="" class="btn-pop" play="3Z">中三组三和值</a></li>
                <li><a href="" class="btn-pop" play="SZ">中三组三胆拖</a></li>
                <li><a href="" class="btn-pop" play="Z6">中三组六</a></li>
                <li><a href="" class="btn-pop" play="6Z">中三组六和值</a></li>
                <li><a href="" class="btn-pop" play="LZ">中三组六胆拖</a></li>
                <li><a href="" class="btn-pop" play="ZD">中三组选包胆</a></li>
                
                <li><a href="" class="btn-pop" play="DW">定位</a></li>
                <!--li><a href="" class="btn-pop" play="R1">任选一</a></li>
                <li><a href="" class="btn-pop" play="R2">任选二</a></li>
                <li><a href="/Trade/?type=0" class="btn-pop">参与合玩</a></li>-->
            </ul>
            <ul style="-webkit-transform: translate(0px, 0px); width: 286px;" action="loss">
            	<!--<li><a href="" class="btn-pop" play="5D">五星直选</a></li>
                <li><a href="" class="btn-pop" play="5T">五星通选</a></li>
                <li><a href="" class="btn-pop" play="4D">四星</a></li>-->
                <li><a href="" class="btn-pop" play="3D">三星直选</a></li>
                <li><a href="" class="btn-pop" play="F3">三星组三</a></li>
                <li><a href="" class="btn-pop" play="F6">三星组六</a></li>
                <li><a href="" class="btn-pop" play="2D">二星直选</a></li>
                <li><a href="" class="btn-pop" play="F2">二星组选</a></li>
                <li><a href="" class="btn-pop" play="1D">一星</a></li>
                <li><a href="" class="btn-pop" play="DD">大小单双</a></li>
            </ul>
            <ul style="-webkit-transform: translate(0px, 0px); width: 286px;" action="charts">
            	<!--<li><a href="" class="btn-pop" play="5D">五星直选</a></li>
                <li><a href="" class="btn-pop" play="5T">五星通选</a></li>
                <li><a href="" class="btn-pop" play="4D">四星</a></li>-->
                <li><a href="" class="btn-pop" play="3D">三星直选</a></li>
                <li><a href="" class="btn-pop" play="F3">三星组三</a></li>
                <li><a href="" class="btn-pop" play="F6">三星组六</a></li>
                <li><a href="" class="btn-pop" play="2D">二星直选</a></li>
                <li><a href="" class="btn-pop" play="F2">二星组选</a></li>
                <li><a href="" class="btn-pop" play="1D">一星</a></li>
                <li><a href="" class="btn-pop" play="DD">大小单双</a></li>
            </ul>
         </div>
      </div>
    </div>
  </div>
  <div class="pop-box3 spill" id="tools"><div class="pop-box2-bar"></div><div class="filt-popc"><ul><li><a href="./Cart.asp" id="selected" class="btn-pop">已选号码</a></li><li><a id="kjlianjie" class="btn-pop">历史开奖</a></li><li><a href="/User/BuyRecord.asp" class="btn-pop">投注记录</a></li><li><a id="tjies" class="btn-pop">玩法介绍</a></li><li><a id="tcanyu" class="btn-pop">参与合玩</a></li></ul></div></div>
  <div class="blank"></div>
</div>
</body>
</html>