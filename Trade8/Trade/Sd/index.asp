<!--#include file="../../Conn.asp"-->
<%set tt=conn.execute("select win_name,lottery_name,win_money from KR_Lottery_Win where Lottery_Name like '����3D%'")
do while not tt.eof
if tt("win_name")="һ�Ƚ�" and tt("lottery_name")="����3Dֱѡ"  then
jiangjinsd1=tt("win_money")
elseif tt("win_name")="һ�Ƚ�" and tt("lottery_name")="����3D����" then
jiangjinsd2=tt("win_money")
elseif tt("win_name")="һ�Ƚ�" and tt("lottery_name")="����3D������ʽ" then
jiangjinsd3=tt("win_money")
end if
tt.movenext
loop
tt.close
set tt=nothing
%>
<script type="text/javascript">
var jiangjinsd1=<%=jiangjinsd1%>;
var jiangjinsd2=<%=jiangjinsd2%>;
var jiangjinsd3=<%=jiangjinsd3%>;
</script>
<!DOCTYPE html>
<!DOCTYPE html>
<html><head><meta http-equiv="Content-Type" content="text/html; charset=GBK">
<title><%=Setting(0)%>-����3D</title>
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
@media screen and (width: 1920px) { #gmu-media-detect0 { width: 1px; } } </style>
<script src="../JS/Sd/sdxfirst.js"></script>
<script src="../JS/20141212.js"></script>
<script src="../JS/PassTime.js?v=0.0.1"></script>
</head><body>
<div class="wrap">
  <div class="head">
    <h2 id="nav">����3D-<cite id="game">ֱѡ</cite><span class="head-arr"><em></em></span></h2>
    <a href="../../index.asp" class="btn-qgkj" id="sourceUrl"><span><em></em></span>��Ϸ����</a>
    <a href="javascript:;" class="btn-menu">��</a><a href="javascript:;" class="btn-chart"><i></i></a>
  </div>
  <!--�����ڴ�[[-->
  <div class="top-date time" id="sd" issue="2015233" issale="0" endtime="1440763140" mul="0">
    <div class="history" id="sdh" style="height: 22px;" align="center"></div>
    <a href="javascript:;" class="top-arr"></a>
  </div>
  <!--�����ڴ�[[-->
  <div class="w320">
    <div class="area1" id="countdown">
      <div class="xq-tit">
        <h2>�� <cite class="act red" id="showid"></cite> ��</h2>
        <em class="countdowm red" id="showtime"></em></div>
    </div>
    <div class="line-3" id="line"></div>
    <div class="slow-txt" id="detxt">ÿλ����ѡ1����,����<strong class="red">1040</strong><%=setting(56)%></div>
    <!--����ͼͶע��[[-->
    <div class="pick none">
        <div class="pick-box pick-red">
            <div class="column">
                <div class="in-entry">
                    <div class="bcy" id="chart_tab">
                      <div class="xq-nav xq-nav-chart">
                          <a href="javascript:;" class="sel" m="0">��һλ����</a>
                          <a href="javascript:;" m="1">�ڶ�λ����</a>
                          <a href="javascript:;" m="2">����λ����</a>
                       </div>
                    </div>
                	<div class="chart-tab" style="-webkit-transform:translate3d(0,0,0);height:572px;">
                        <div class="chart-tab-box" style="-webkit-transform:translate3d(0px,0,0);-webkit-backface-visibility:hidden;">
                            <div class="tab-cont chart-num-list" style="-webkit-transform:translate3d(0,0,0);"><table width="100%"><thead id="hd_first"><tr><th>�ں�</th><th>����</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th></tr></thead><tbody id="bd_first"><tr><td colspan="12">����Ŭ�������У����Ժ�...</td></tr></tbody></table>
                            </div>
                            <div class="tab-cont chart-num-list02" style="-webkit-transform:translate3d(0,0,0);"><table width="100%"><thead id="hd_second"><tr><td colspan="12">����Ŭ�������У����Ժ�...</td></tr></thead><tbody id="bd_second"></tbody></table>
                            </div>
                            <div class="tab-cont chart-num-list02" style="-webkit-transform:translate3d(0,0,0);">
                              <table width="100%"><thead id="hd_third"><tr><td colspan="12">����Ŭ�������У����Ժ�...</td></tr></thead><tbody id="bd_third"></tbody></table>
                            </div>
                        </div>
               	 	 </div>
            	</div>
            </div>
        </div>
      	<div class="myhelp none" id="help" style="margin-top:-6px;">
         <table width="100%">
           <thead>
           	  <tr>
              	<th colspan="3">
                	<div class="helphanle"><span class="arr arr-on"><em></em></span><strong>����˵��</strong></div>
                </th>
              </tr>
           </thead>
           <tbody class="none" id="help-box">
           		<tr><td colspan="3" class="param">
                ��©���ݣ������ڿ��������ڼ����������<br>��С�ţ����5��9��С��0��4��<br>��ż�ţ�����1��3��5��7��9��ż��0��2��4��6��8��<br>	��ȣ������������������ȥ��С�����Ĳ�ֵ��ʾ��������785�����ֵΪ3(8-5=3)��<br>�غ����ͣ�3���������������ͬ��Ϊ������̬�����ҽ���2������������ͬΪ������̬��3����������ȫ����ͬΪ������̬��
                </td>
            </tr></tbody>
          </table>
        </div>
        <div class="ssqshow-tit none" style="margin:4px 0 8px 0;" id="chartscd">
        	<span class="more red"><cite class="countdowm" id="showtime1"></cite></span>
            <h2><b class="red" id="chartplay">ֱѡ</b>��<cite class="act" id="showid1"></cite>��</h2>
        </div>
    </div>
    <!--����ͼͶע��[[-->
    <!--��ͨͶע��[[-->
    <div class="pick">
      <div class="pick-box pick-red">
        <dl>
          <dt>��λ��</dt>
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
        <dl class="mt10">
          <dt>ʮλ��</dt>
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
        <dl class="mt10">
          <dt>��λ��</dt>
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
    <div class="pick none">
      <div class="pick-box pick-red">
        <dl>
          <dt>ѡ�ţ�</dt>
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
    <div class="pick none">
      <div class="pick-box pick-red">
        <dl>
          <dt>ѡ�ţ�</dt>
          <dd>
            <ul>
              <li class="hs"><span><strong>0</strong><cite>����1040</cite></span></li>
              <li class="hs"><span><strong>1</strong><cite>����345</cite></span></li>
              <li class="hs"><span><strong>2</strong><cite>����172</cite></span></li>
              <li class="hs"><span><strong>3</strong><cite>����104</cite></span></li>
              <li class="hs"><span><strong>4</strong><cite>����69</cite></span></li>
              <li class="hs"><span><strong>5</strong><cite>����49</cite></span></li>
              <li class="hs"><span><strong>6</strong><cite>����37</cite></span></li>
              <li class="hs"><span><strong>7</strong><cite>����29</cite></span></li>
              <li class="hs"><span><strong>8</strong><cite>����23</cite></span></li>
              <li class="hs"><span><strong>9</strong><cite>����19</cite></span></li>
              <li class="hs"><span><strong>10</strong><cite>����16</cite></span></li>
              <li class="hs"><span><strong>11</strong><cite>����15</cite></span></li>
              <li class="hs"><span><strong>12</strong><cite>����15</cite></span></li>
              <li class="hs"><span><strong>13</strong><cite>����14</cite></span></li>
              <li class="hs"><span><strong>14</strong><cite>����14</cite></span></li>
              <li class="hs"><span><strong>15</strong><cite>����15</cite></span></li>
              <li class="hs"><span><strong>16</strong><cite>����15</cite></span></li>
              <li class="hs"><span><strong>17</strong><cite>����16</cite></span></li>
              <li class="hs"><span><strong>18</strong><cite>����19</cite></span></li>
              <li class="hs"><span><strong>19</strong><cite>����23</cite></span></li>
              <li class="hs"><span><strong>20</strong><cite>����29</cite></span></li>
              <li class="hs"><span><strong>21</strong><cite>����37</cite></span></li>
              <li class="hs"><span><strong>22</strong><cite>����49</cite></span></li>
              <li class="hs"><span><strong>23</strong><cite>����69</cite></span></li>
              <li class="hs"><span><strong>24</strong><cite>����104</cite></span></li>
              <li class="hs"><span><strong>25</strong><cite>����172</cite></span></li>
              <li class="hs"><span><strong>26</strong><cite>����345</cite></span></li>
              <li class="hs"><span><strong>27</strong><cite>����1040</cite></span></li>
            </ul>
          </dd>
        </dl>
      </div>
    </div>
    <div class="pick none">
      <div class="pick-box pick-red">
        <dl>
          <dt>�´�С��</dt>
          <dd>
            <ul class="num-list-jou">
              <li><span rel="0" pt="DX">С</span><p>����Ϊ0-8</p></li>
              <li><span rel="1" pt="DX">��</span><p>����Ϊ19-27</p></li>
            </ul>
          </dd>
        </dl>
        <div class="line-3"></div>
        <dl class="mt10">
          <dt>����ż��</dt>
          <dd>
            <ul class="num-list-jou">
              <li><span rel="1" pt="JO">��</span><p>����ȫ��Ϊ����</p></li>
              <li><span rel="0" pt="JO">ż</span><p>����ȫ��Ϊż��</p></li>
            </ul>
          </dd>
        </dl>
      </div>
    </div>
    <div class="pick none">
      <div class="pick-box pick-red">
        <dl>
          <dt>��������</dt>
          <dd>
            <ul class="tl3t">
              <li><span class="th">����������</span></li>
            </ul>
          </dd>
        </dl>
      </div>
    </div>
    <div class="pick none">
      <div class="pick-box pick-red">
        <dl>
          <dt>����ͬ��</dt>
          <dd>
            <ul class="tl3t">
              <li><span class="th">��ͬ�ź���</span></li>
            </ul>
          </dd>
        </dl>
      </div>
    </div>
    <!--��ͨͶע��[[-->
    <!--����Ͷע��[[-->
    <div class="pick none">
      <div class="pick-box pick-red">
        <dl>
          <dt>���룺</dt>
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
        <dl class="mt10">
          <dt>���룺</dt>
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
    <!--����Ͷע��[[-->
  </div>
  <!--ֱ��Ͷע[[-->
  <div class="pick-b">
    <div class="bet-top">
      <p>��ѡ����<strong class="red" id="count">0</strong>ע����,<strong class="red" id="price">0</strong><%=setting(56)%></p>
    </div>
    <div class="betting">
      <button class="btn-addnmu" type="button" id="addcart"><span></span>��ӵ�������<em id="group">0</em></button>
      <button class="btn-betting" type="button" id="bets">ֱ��Ͷע</button>
    </div>
  </div>
  <!--ֱ��Ͷע[[-->
  <!--�淨Ͷע��[[-->
  <div class="pop-box2 none">
    <div class="pop-box2-arr"></div>
    <div class="filt-popc">
      <h3>��ͨͶע</h3>
      <ul>
        <li><span class="btn-pop plays btn-pop-on" pt="1|Z1|normal">ֱѡ</span></li>
        <li><span class="btn-pop plays" pt="2|F6|normal">����</span></li>
        <li><span class="btn-pop plays" pt="2|F3|normal">����</span></li>
        <li><span class="btn-pop plays" pt="3|HS|normal">����</span></li>
        <!--<li><span class="btn-pop plays" pt="1|TX|normal" style="display:none;">ͨѡ</span></li>
        <li><span class="btn-pop plays" pt="1|B3|normal">��ѡ��</span></li>
        <li><span class="btn-pop plays" pt="1|B6|normal">��ѡ��</span></li>
        <li><span class="btn-pop plays" pt="1|1D|normal">1D</span></li>
        <li><span class="btn-pop plays" pt="2|C1|normal">��1D</span></li>
        <li><span class="btn-pop plays" pt="1|2D|normal">2D</span></li>
        <li><span class="btn-pop plays" pt="2|C2|normal">��2D</span></li>
        <li><span class="btn-pop plays" pt="4|DXJO|normal">��С/��ż</span></li>
        <li><span class="btn-pop plays" pt="5|TL|normal">������</span></li>
        <li><span class="btn-pop plays" pt="6|3T|normal">����ͬ</span></li>-->
        <li><a href="/Trade/?type=21" class="btn-pop">�������</a></li>
      </ul>
      <div class="line-4"></div>
      <h3>����ͼͶע</h3>
      <ul>
        <li><span class="btn-pop plays" pt="1|Z1|charts">ֱѡ</span></li>
        <li><span class="btn-pop plays" pt="2|F6|charts">����</span></li>
        <li><span class="btn-pop plays" pt="2|F3|charts">����</span></li>
      </ul>
      <div class="line-4"></div>
      <h3>����Ͷע</h3>
      <ul>
        <li><span class="btn-pop plays" pt="7|F6|dt">����</span></li>
        <li><span class="btn-pop plays" pt="7|F3|dt">����</span></li>
      </ul>
    </div>
  </div>
  <!--�淨Ͷע��[[-->
  <!--���߲�[[-->
  <div class="pop-box3 none" id="tools">
    <div class="pop-box2-bar"></div>
    <div class="filt-popc">
      <ul>
        <li><a href="./cart.asp" id="referer" class="btn-pop">��ѡ����</a></li>
        <li><a href="/KaiJiang/caizhongkj.asp?caizhong=2" class="btn-pop">��ʷ����</a></li>
        <li><a href="/User/BuyRecord.asp" class="btn-pop">Ͷע��¼</a></li>
        <li><a href="/News/newsxq.asp?xq=15" class="btn-pop">�淨����</a></li>
      </ul>
    </div>
  </div>
  <!--���߲�[[-->
  <div class="h75"></div>
</div>
<script src="../JS/b862fb33.js"></script>
<script>monitor.setProject('kurei_cp_m').getTrack().getClickAndKeydown();</script>
<script type="text/javascript">var _gaq=_gaq||[];_gaq.push(['_setAccount','UA-31766466-1']);_gaq.push(['_setDomainName', 'none']);_gaq.push(['_trackPageview']);(function(){var ga=document.createElement('script');ga.type='text/javascript';ga.async=true;ga.src='../JS/GA.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(ga,s);})();</script>

</body></html>