<!--#include file="../../Conn.asp"--><!DOCTYPE html>
<html><head><meta http-equiv="Content-Type" content="text/html; charset=GBK">
<title><%=Setting(0)%>-ʱʱ��</title>
<meta charset="GBK">
<meta name="keywords" content="<%=Setting(0)%>��Ϸ������">
<meta name="description" content="<%=Setting(0)%>��Ϸ������">
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
  <div class="head"><h2 id="navtit"><cite id="game">��������</cite><span class="head-arr"><em></em></span></h2><a href="/" class="btn-qgkj" id="sourceUrl"><span><em></em></span>��Ϸ����</a><a href="javascript:;" class="btn-menu">��</a><a href="javascript:;" class="btn-chart"><i></i></a></div>
  	<div class="top-date" align="center">
    <div id="setting" class="history" pt="F6" endtime="" prevtime="" issale=""><p><cite id="kkid"></cite> | <cite class="red" id="showtime"></cite></p></div>
    <a href="javascript:;" class="top-arr"></a>
  </div>
  <div class="w320">
    <div class="y11-txt" id="detxt">����ѡ��3�����룬����190<%=setting(56)%></div>
    <div class="pick pick-11 pick-ssc">
      <!--����ͼͶע�� begin-->
      <div class="pick-box pick-red none" id="charts">
      	<div class="column">
		 <div class="in-entry">
			<div class="bcy" id="chart_tab"><div class="xq-nav xq-nav-chart"><a href="javascript:;" class="sel" m="0">��λ</a><a href="javascript:;" m="1">ǧλ</a><a href="javascript:;" m="2">��λ</a><a href="javascript:;" m="3" id="hd_chart3" style="display:none;">ʮλ</a><a href="javascript:;" m="4" id="hd_chart4" style="display:none;">��λ</a></div>
            </div>
			<div class="chart-tab" style="-webkit-transform:translate3d(0,0,0);height:562px;">
				<div class="chart-tab-box" style="-webkit-transform:translate3d(0px,0,0);-webkit-backface-visibility:hidden;">
					<div class="tab-cont chart-num-list" style="-webkit-transform:translate3d(0,0,0);">
                    	<table width="100%">
                        	<thead id="hd1"><tr><th>�ں�</th><th>����</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th></tr></thead>
                            <tbody id="bd1"><tr><td colspan="12">����Ŭ��������...</td></tr></tbody>
                        </table>
					</div>
					<div class="tab-cont chart-num-list02" style="-webkit-transform:translate3d(0,0,0);">
                    	<table width="100%">
                        	<thead id="hd2"><tr><th>�ں�</th><th>����</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th></tr></thead>
                            <tbody id="bd2"><tr><td colspan="12">����Ŭ��������...</td></tr></tbody>
                        </table>
					</div>
					<div class="tab-cont chart-num-list02" style="-webkit-transform:translate3d(0,0,0);">
                    	<table width="100%">
                        	<thead id="hd3"><tr><th>�ں�</th><th>����</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th></tr></thead>
                            <tbody id="bd3"><tr><td colspan="12">����Ŭ��������...</td></tr></tbody>
                        </table>
					</div>
                    <div class="tab-cont chart-num-list02 none" style="-webkit-transform:translate3d(0,0,0);" id="bd_chart4">
                    	<table width="100%">
                        	<thead id="hd4"><tr><th>�ں�</th><th>����</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th></tr></thead>
                            <tbody id="bd4"><tr><td colspan="12">����Ŭ��������...</td></tr></tbody>
                        </table>
					</div>
                    <div class="tab-cont chart-num-list02 none" style="-webkit-transform:translate3d(0,0,0);" id="bd_chart5">
                    	<table width="100%">
                        	<thead id="hd5"><tr><th>�ں�</th><th>����</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th></tr></thead>
                            <tbody id="bd5"><tr><td colspan="12">����Ŭ��������...</td></tr></tbody>
                        </table>
					</div>
				</div>
			</div>
		</div>
	    </div>
      </div>
      <div class="myhelp none" id="myparam" style="margin-top:-6px;"><table width="100%"><thead><tr><th colspan="3"><div class="helphanle" sort="param"><span class="arr arr-on"><em></em></span><strong>����˵��</strong></div></th></tr></thead><tbody class="none" id="box_param"><tr><td colspan="3" class="param" id="des"></td></tr></tbody></table>
      </div>
      <div class="ssqshow-tit none" style="margin:4px 0 8px 0;" id="chartscd"><span class="more red"><cite class="friends" id="showtime1"></cite> <cite class="countdown"></cite></span><h2 id="chartsH2"></h2></div>
      <!--����ͼͶע�� end-->
      <!--ѡ��Ͷע�� begin-->
      <div class="pick-box pick-red none" id="star_d">
        <dl>
          <dt><span>��λ<em></em></span>
            <p>��©��</p>
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
          <dt><span>ǧλ<em></em></span>
            <p>��©��</p>
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
          <dt><span>��λ<em></em></span>
            <p>��©��</p>
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
          <dt><span>ʮλ<em></em></span>
            <p>��©��</p>
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
          <dt><span>��λ<em></em></span>
            <p>��©��</p>
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
          <dt><strong>ѡ��</strong>
            <p>��©��</p>
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
          <dt><span>ʮλ<em></em></span>
            <p>��©��</p>
          </dt>
          <dd>
            <ul>
              <li n="��"><span><b>��</b></span><em r="��">-</em></li>
              <li n="С"><span><b>С</b></span><em r="С">-</em></li>
              <li n="��"><span><b>��</b></span><em r="��">-</em></li>
              <li n="˫"><span><b>˫</b></span><em r="˫">-</em></li>
            </ul>
          </dd>
        </dl>
        <div class="line-3"></div>
        <dl>
          <dt><span>��λ<em></em></span>
            <p>��©��</p>
          </dt>
          <dd>
            <ul>
              <li n="��"><span><b>��</b></span><em r="��">-</em></li>
              <li n="С"><span><b>С</b></span><em r="С">-</em></li>
              <li n="��"><span><b>��</b></span><em r="��">-</em></li>
              <li n="˫"><span><b>˫</b></span><em r="˫">-</em></li>
            </ul>
          </dd>
        </dl>
      </div>
      <div class="pick-box pick-red none" id="star_fdt">
        <dl>
          <dt><strong>����</strong></dt>
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
          <dt><strong>����</strong></dt>
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
          <dt><strong>ѡ��</strong>
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
          <dt><strong>ѡ��</strong>
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
          <dt><strong>ѡ��</strong>
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
      <!--�����淨 ��ʼ-->
        <div class="pick-box pick-red none" id="star_lgway">
        <dl>
          <dt><strong>����</strong></dt>
          <dd>
            <ul type="lh">
              <li><span>��</span></li>
              <li><span>��</span></li>
              <li><span>��</span></li>
            </ul>
          </dd>
        </dl>
        <div class="lines"></div>
        <dl>
          <dt><strong>��ֵ</strong></dt>
          <dd>
            <ul type="dxds">
              <li><span>��</span></li>
              <li><span>С</span></li>
              <li><span>��</span></li>
              <li><span>˫</span></li>
            </ul>
          </dd>
        </dl>
      </div>
      <!--�����淨 ����-->
      
      <!--ѡ��Ͷע�� end-->
      <!--��©Ͷע�� begin-->
      <div class="pick-box pick-red none" id="loss">
        <div class="infolist4"><table width="100%"><thead><tr><th><b id="lossname">����</b><select class="sel-8 loss none" id="lossr"></select></th><th colspan="3"><b>��©ͳ��</b></th></tr><tr><td>���루������Ͷע��</td><td>��ǰ</td><td>����</td><td>���</td></tr></thead><tbody id="myloss"><tr><td colspan="4">����Ŭ��������...</td></tr></tbody></table></div>
        <div class="ht10"></div>
        <a href="javascript:;" class="btn-load" id="lossmore">��ȡ����</a>
      </div>
      <!--��©Ͷע�� end-->  
      <div class="ht10"></div>
    </div>
  </div>
  <div class="pick-b">
    <div class="bet-top">
      <p>��<strong class="red" id="count">0</strong>ע,<strong class="red" id="price">0</strong><%=setting(56)%> <cite id="calcu"></cite></p>
    </div>
    <div class="betting">
      <button class="btn-addnmu" type="button" id="addcart"><span></span>��ӵ�������<em id="group">0</em></button>
      <button class="btn-betting" type="button" id="bets">ֱ��Ͷע</button>
    </div>
  </div>
  <div class="pop-box2 spill">
    <div class="pop-box2-arr"></div>
    <div class="filt-popc" id="tabs">
      <ul class="filt-popc-nav">
        <li class="sel" style="width:88px;"><span>��ͨͶע</span></li>
        <!--<li style="width:88px;" class=""><span>��©Ͷע</span></li>-->
        <li style="width:88px;" class=""><span>����Ͷע</span></li>
      </ul>
      <div class="filt-popc-cont" style="-webkit-transform: translate3d(0px, 0px, 0px);height:510px !important;">
      	 <div class="filt-popc-entry" style="-webkit-transform: translate(0px, 0px); -webkit-backface-visibility: hidden; width: 858px;">
         	<ul style="-webkit-transform: translate(0px, 0px); width: 286px;" action="normal" id="container">
            	<!--<li><a href="#" class="btn-pop" play="5D">����ֱѡ</a></li>
                <li><a href="" class="btn-pop" play="5T">����ͨѡ</a></li>
                <li id="removejd"><a href="" class="btn-pop" play="4D">����</a></li>-->
                
                <li><a href="" class="btn-pop" play="3D">���Ǻ���ֱѡ</a></li>
                <li><a href="" class="btn-pop" play="3H">����ֱѡ��ֵ</a></li>
                <li><a href="" class="btn-pop" play="DH">����ֱѡ����</a></li>
                <li><a href="" class="btn-pop" play="HD">������ѡ����</a></li>
                <li><a href="" class="btn-pop" play="F3">��������</a></li>
                <li><a href="" class="btn-pop" play="SD">������������</a></li>
                <li><a href="" class="btn-pop btn-pop-on" play="F6" id="kk1">��������</a></li>
                <li><a href="" class="btn-pop" play="LD">������������</a></li>
                <li><a href="" class="btn-pop" play="2D">����ֱѡ</a></li>
                <li><a href="" class="btn-pop" play="F2">������ѡ</a></li>
                <li><a href="" class="btn-pop" play="1D">һ��</a></li>
                <li><a href="" class="btn-pop" play="DD">��С��˫</a></li>
                <li class="childbox"><a href="" class="btn-pop" play="LHWQ">��ǧλ���� </a></li>
                <li class="childbox"><a href="" class="btn-pop" play="LHWB">���λ���� </a></li>
                <li class="childbox"><a href="" class="btn-pop" play="LHWS">��ʮλ���� </a></li>
                <li class="childbox"><a href="" class="btn-pop" play="LHWG">���λ���� </a></li>
                <li class="childbox"><a href="" class="btn-pop" play="LHQB">ǧ��λ���� </a></li>
                <li class="childbox"><a href="" class="btn-pop" play="LHQS">ǧʮλ���� </a></li>
                <li class="childbox"><a href="" class="btn-pop" play="LHQG">ǧ��λ���� </a></li>
                <li class="childbox"><a href="" class="btn-pop" play="LHBS">��ʮλ���� </a></li>
                <li class="childbox"><a href="" class="btn-pop" play="LHBG">�ٸ�λ���� </a></li>
                <li class="childbox"><a href="" class="btn-pop" play="LHSG">ʮ��λ���� </a></li>
                <li><a href="" class="btn-pop" play="Q3">����ǰ��ֱѡ</a></li>
                <li><a href="" class="btn-pop" play="QH">ǰ��ֱѡ��ֵ</a></li>
                <li><a href="" class="btn-pop" play="DQ">ǰ��ֱѡ����</a></li>
                <li><a href="" class="btn-pop" play="FQ">ǰ������</a></li>
                <li><a href="" class="btn-pop" play="3Q">ǰ��������ֵ</a></li>                
                <li><a href="" class="btn-pop" play="SQ">ǰ����������</a></li>
                <li><a href="" class="btn-pop" play="Q6">ǰ������</a></li>
                <li><a href="" class="btn-pop" play="6Q">ǰ��������ֵ</a></li>
                <li><a href="" class="btn-pop" play="LQ">ǰ����������</a></li>
                <li><a href="" class="btn-pop" play="QD">ǰ����ѡ����</a></li>
                
                <li><a href="" class="btn-pop" play="Z3">��������ֱѡ</a></li>
                <li><a href="" class="btn-pop" play="ZH">����ֱѡ��ֵ</a></li>
                <li><a href="" class="btn-pop" play="DZ">����ֱѡ����</a></li>
                <li><a href="" class="btn-pop" play="FZ">��������</a></li>
                <li><a href="" class="btn-pop" play="3Z">����������ֵ</a></li>
                <li><a href="" class="btn-pop" play="SZ">������������</a></li>
                <li><a href="" class="btn-pop" play="Z6">��������</a></li>
                <li><a href="" class="btn-pop" play="6Z">����������ֵ</a></li>
                <li><a href="" class="btn-pop" play="LZ">������������</a></li>
                <li><a href="" class="btn-pop" play="ZD">������ѡ����</a></li>
                
                <li><a href="" class="btn-pop" play="DW">��λ</a></li>
                <!--li><a href="" class="btn-pop" play="R1">��ѡһ</a></li>
                <li><a href="" class="btn-pop" play="R2">��ѡ��</a></li>
                <li><a href="/Trade/?type=0" class="btn-pop">�������</a></li>-->
            </ul>
            <ul style="-webkit-transform: translate(0px, 0px); width: 286px;" action="loss">
            	<!--<li><a href="" class="btn-pop" play="5D">����ֱѡ</a></li>
                <li><a href="" class="btn-pop" play="5T">����ͨѡ</a></li>
                <li><a href="" class="btn-pop" play="4D">����</a></li>-->
                <li><a href="" class="btn-pop" play="3D">����ֱѡ</a></li>
                <li><a href="" class="btn-pop" play="F3">��������</a></li>
                <li><a href="" class="btn-pop" play="F6">��������</a></li>
                <li><a href="" class="btn-pop" play="2D">����ֱѡ</a></li>
                <li><a href="" class="btn-pop" play="F2">������ѡ</a></li>
                <li><a href="" class="btn-pop" play="1D">һ��</a></li>
                <li><a href="" class="btn-pop" play="DD">��С��˫</a></li>
            </ul>
            <ul style="-webkit-transform: translate(0px, 0px); width: 286px;" action="charts">
            	<!--<li><a href="" class="btn-pop" play="5D">����ֱѡ</a></li>
                <li><a href="" class="btn-pop" play="5T">����ͨѡ</a></li>
                <li><a href="" class="btn-pop" play="4D">����</a></li>-->
                <li><a href="" class="btn-pop" play="3D">����ֱѡ</a></li>
                <li><a href="" class="btn-pop" play="F3">��������</a></li>
                <li><a href="" class="btn-pop" play="F6">��������</a></li>
                <li><a href="" class="btn-pop" play="2D">����ֱѡ</a></li>
                <li><a href="" class="btn-pop" play="F2">������ѡ</a></li>
                <li><a href="" class="btn-pop" play="1D">һ��</a></li>
                <li><a href="" class="btn-pop" play="DD">��С��˫</a></li>
            </ul>
         </div>
      </div>
    </div>
  </div>
  <div class="pop-box3 spill" id="tools"><div class="pop-box2-bar"></div><div class="filt-popc"><ul><li><a href="./Cart.asp" id="selected" class="btn-pop">��ѡ����</a></li><li><a id="kjlianjie" class="btn-pop">��ʷ����</a></li><li><a href="/User/BuyRecord.asp" class="btn-pop">Ͷע��¼</a></li><li><a id="tjies" class="btn-pop">�淨����</a></li><li><a id="tcanyu" class="btn-pop">�������</a></li></ul></div></div>
  <div class="blank"></div>
</div>
</body>
</html>