<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<!DOCTYPE HTML><HTML><HEAD>
<TITLE>-奖金计算器</TITLE>
<META charset="GBK">
<META name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<META name="apple-mobile-web-app-capable" content="yes">
<META name="apple-mobile-web-app-status-bar-style" content="black">
<META name="format-detection" content="telephone=no">
<META content="on" http-equiv="cleartype">
<LINK rel="apple-touch-icon-precomposed" href="../../img_png/t01b0f56b331d358632.png">
<LINK rel="apple-touch-icon" href="../../img_png/t01b0f56b331d358632.png">
<LINK rel="stylesheet" href="../../Css/public.css">
<LINK rel="stylesheet" href="../../Css/mobile.css">

<SCRIPT src="../JS/Libs.js"></SCRIPT>

<SCRIPT src="../JS/Dlt/calculator.js"></SCRIPT>

<SCRIPT src="../JS/20141212.js"></SCRIPT>

<META name="GENERATOR" content="MSHTML 9.00.8112.16672"></HEAD>
<BODY>
<DIV class="wrap">
<DIV class="head">
<H2 id="navtit">奖金计算器</H2><A id="sourceUrl" class="btn-qgkj" href="../../index.asp"><SPAN><EM></EM></SPAN>游戏大厅</A></DIV>
<DIV class="w320">
<DIV class="area1">
<DIV class="ht10"></DIV>
<DIV class="xq-nav"><A href="./index.asp">双色球</A><A class="on" 
href="../daletou/">大乐透</A></DIV></DIV>
<DIV class="pick-box2 jsq">
<DIV class="pick-tit2"><STRONG class="red">大乐透</STRONG>&nbsp;&nbsp;<SELECT id="issue" 
class="sel-8" name="issue"></SELECT>        &nbsp;&nbsp;<CITE>开奖号码</CITE></DIV>
<DIV id="opencode" class="kj-ball">加载中...</DIV>
<DL>
  <DT>我的投注：</DT>
  <DD>
  <DIV class="jsq-list">投注前区号码个数&nbsp; <SPAN class="btn-num"><CITE id="beforeball">5</CITE><EM></EM></SPAN>
  <DIV class="menu-pop none">
  <DIV class="menu-pop-arr"></DIV>
  <DIV class="menu-popc" type="before"><A class="on" href="javascript:;">5</A><A 
  href="javascript:;">6</A><A href="javascript:;">7</A><A 
  href="javascript:;">8</A><A href="javascript:;">9</A><A 
  href="javascript:;">10</A><A href="javascript:;">11</A><A 
  href="javascript:;">12</A><A href="javascript:;">13</A><A 
  href="javascript:;">14</A><A href="javascript:;">15</A> <A 
  href="javascript:;">16</A><A href="javascript:;">17</A><A 
  href="javascript:;">18</A><A href="javascript:;">19</A><A 
  href="javascript:;">20</A><A href="javascript:;">21</A><A 
  href="javascript:;">22</A><A href="javascript:;">23</A><A 
  href="javascript:;">24</A><A href="javascript:;">25</A><A 
  href="javascript:;">26</A><A href="javascript:;">27</A><A 
  href="javascript:;">28</A><A href="javascript:;">29</A><A 
  href="javascript:;">30</A><A href="javascript:;">31</A><A 
  href="javascript:;">32</A><A href="javascript:;">33</A><A 
  href="javascript:;">33</A><A href="javascript:;">34</A><A 
  href="javascript:;">35</A></DIV></DIV></DIV>
  <DIV class="jsq-list">投注后区号码个数&nbsp; <SPAN class="btn-num"><CITE 
  id="backball">2</CITE><EM></EM></SPAN>
  <DIV class="menu-pop none">
  <DIV class="menu-pop-arr"></DIV>
  <DIV class="menu-popc" type="back"><A class="on" href="javascript:;">2</A><A 
  href="javascript:;">3</A><A href="javascript:;">4</A><A 
  href="javascript:;">5</A> <A href="javascript:;">6</A><A 
  href="javascript:;">7</A><A href="javascript:;">8</A> <A 
  href="javascript:;">9</A><A href="javascript:;">10</A><A 
  href="javascript:;">11</A><A href="javascript:;">12</A></DIV></DIV></DIV>
  <DIV class="jsq-list"><LABEL><INPUT class="radio" name="intype" value="0" 
  CHECKED="" type="radio">普通投注</LABEL><LABEL><INPUT class="radio" name="intype" 
  value="1" type="radio">追加投注</LABEL></DIV>
  <DIV class="jsq-list">
  <P>投注<%=setting(56)%>：<CITE id="tcount" class="red">1</CITE> 注,<CITE id="tmoney" 
  class="red">2</CITE><%=setting(56)%></P></DIV></DD></DL>
<DIV class="line-4"></DIV>
<DL>
  <DT>我命中了：</DT>
  <DD>
  <DIV class="jsq-list">命中前区号码个数&nbsp; <SPAN class="btn-num"><CITE id="hitbeforeball">0</CITE><EM></EM></SPAN>
  <DIV class="menu-pop none">
  <DIV class="menu-pop-arr"></DIV>
  <DIV class="menu-popc" type="hitbefore"><A class="on" 
  href="javascript:;">0</A><A href="javascript:;">1</A><A 
  href="javascript:;">2</A><A href="javascript:;">3</A><A 
  href="javascript:;">4</A><A href="javascript:;">5</A></DIV></DIV></DIV>
  <DIV class="jsq-list">命中后区号码个数&nbsp; <SPAN class="btn-num"><CITE id="hitbackball">0</CITE><EM></EM></SPAN>
  <DIV class="menu-pop none">
  <DIV class="menu-pop-arr"></DIV>
  <DIV class="menu-popc" type="hitback"><A class="on" 
  href="javascript:;">0</A><A href="javascript:;">1</A><A 
  href="javascript:;">2</A></DIV></DIV></DIV></DD></DL>
<DIV class="line-4"></DIV><SPAN class="btn btn-hm">计算我的奖金</SPAN> </DIV>
<DIV class="jsq-txt"><SPAN 
class="dot1"></SPAN>奖金计算结果将根据实际开奖奖金进行录入数据后计算得出，如有偏差，请以官方开奖时公布奖金为准！</DIV></DIV>
<DIV class="pop_mask"></DIV>
<DIV style="display: none;" class="pop-box">
<DIV class="pop-boxt">
<H2>我的奖金</H2><A class="cls" href="javascript:;">X</A> </DIV>
<DIV class="pop-boxc">
<DIV class="pop-tab">
<P id="mymoney">您中奖总<%=setting(56)%>是: <CITE class="red">0</CITE> <%=setting(56)%>，奖金分布如下：</P>
<TABLE width="100%">
  <TBODY>
  <TR>
    <TH width="25%">奖级</TH>
    <TH width="40%">中奖说明</TH>
    <TH class="tr">奖金</TH></TR>
  <TR>
    <TD>一等奖</TD>
    <TD><CITE class="ncount">0</CITE> 注</TD>
    <TD class="tr"><CITE class="nmoney">0</CITE> <%=setting(56)%></TD></TR>
  <TR>
    <TD>二等奖</TD>
    <TD><CITE class="ncount">0</CITE> 注</TD>
    <TD class="tr"><CITE class="nmoney">0</CITE> <%=setting(56)%></TD></TR>
  <TR>
    <TD>三等奖</TD>
    <TD><CITE class="ncount">0</CITE> 注</TD>
    <TD class="tr"><CITE class="nmoney">300</CITE> <%=setting(56)%></TD></TR>
  <TR>
    <TD>四等奖</TD>
    <TD><CITE class="ncount">0</CITE> 注</TD>
    <TD class="tr"><CITE class="nmoney">3000</CITE> <%=setting(56)%></TD></TR>
  <TR>
    <TD>五等奖</TD>
    <TD><CITE class="ncount">0</CITE> 注</TD>
    <TD class="tr"><CITE class="nmoney">600</CITE> <%=setting(56)%></TD></TR>
  <TR>
    <TD>六等奖</TD>
    <TD><CITE class="ncount">0</CITE> 注</TD>
    <TD class="tr"><CITE class="nmoney">100</CITE> <%=setting(56)%></TD></TR>
  <TR id="seven">
    <TD>七等奖</TD>
    <TD><CITE class="ncount">0</CITE> 注</TD>
    <TD class="tr"><CITE class="nmoney">10</CITE> <%=setting(56)%></TD></TR>
  <TR id="eight">
    <TD>八等奖</TD>
    <TD><CITE class="ncount">0</CITE> 注</TD>
    <TD class="tr"><CITE class="nmoney">5</CITE> 
<%=setting(56)%></TD></TR></TBODY></TABLE></DIV></DIV>
<DIV class="pop-boxb calculator"><SPAN class="btn btn-18">确 定</SPAN></DIV></DIV>
<DIV class="foot-tit">
<P id="model-u"></P>
<DIV class="gotop"><EM class="large"></EM><CITE class="lartxt">回到顶部</CITE></DIV>
</DIV>
</DIV>

<SCRIPT src="../JS/b862fb33.js"></SCRIPT>
</BODY></HTML>
