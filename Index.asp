<!--#include file="Conn.asp"-->
<!DOCTYPE HTML>
<html>
<head>
    <title><%=Setting(0)%></title>
    <meta charset="GBK" />
    <meta name="keywords" content="<%=Setting(0)%>游戏触屏版" />
    <meta name="description" content="<%=Setting(0)%>游戏触屏版" />
    <meta name="author" content="<%=Setting(0)%>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="copyright" content="Copyright @ kure.cn 版权所有" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="format-detection" content="telephone=no" />
    <meta http-equiv="cleartype" content="on">
    <link rel="apple-touch-icon-precomposed" href="t01b0f56b331d358632.png" />
    <link rel="apple-touch-icon" href="t01b0f56b331d358632.png" />
    <link rel="stylesheet" href="Css/Public.css" />
    <link rel="stylesheet" href="Css/Mobile.css" />
    <link href="Css/index.css" rel="stylesheet">
    <%
SumMoney=""
function lz_money(m)
	if instr(1,m,".") then
	  Money=split(m,".")
	  Money1=Money(0)
	else
	  Money1=m	
	end if
    Money2=int(Len(Money1))
   if Money2>=9 then 
      a1=right(Money1,8)
	  SumMoney=mid(Money1,1,Money2-8)+"亿"
	  lz_money(a1) 
   elseif Money2>=5 and Money2<9 then 
   	 a1=right(Money1,4)
	 a2=mid(Money1,1,Money2-4) 
	 if int(a2)=0 then
	 a2="0"
	 SumMoney=SumMoney+a2
	 else 
	 SumMoney=SumMoney+a2&"万"
	 end if
     lz_money(a1)
   elseif Money2=4 then
     a1=right(Money1,3)
	 a2=mid(Money1,1,Money2-3)
	 if int(a2)=0 then
	 a2="0"
	 SumMoney=SumMoney+a2
	 else 
	 SumMoney=SumMoney+a2&"千"
	 end if 
     lz_money(a1)     
   elseif Money2=3 then
   	 a1=right(Money1,2)
	 a2=mid(Money1,1,Money2-2) 
	 if int(a2)=0 then
	 a2="0"
	 SumMoney=SumMoney+a2
	 else 
	 SumMoney=SumMoney+a2&"百"
	 end if
     lz_money(a1)
   elseif Money2=2 then
     a1=right(Money1,1)
	  a2=mid(Money1,1,Money2-1) 
	 SumMoney=SumMoney+a2
     lz_money(a1)
   elseif Money2=1 then
      SumMoney=SumMoney+Money1
   end if 	
	lz_money=SumMoney
end function
set rs=server.createobject("ADODB.recordset")
sql="select sum(wincost) from KR_Buy"
rs.open sql,conn,1,1
zhongjiangsum=rs(0)
rs.close
set rs=nothing
    %>
</head>
<body>
    <div class="wrap">
        <!--  <div class="head">
    <h2 id="navtit"><font size="4" >迷彩</font></h2>
   
  </div>-->
        <!--轮播图[[-->
        <div class="indicator"></div>
    </div>
    <div class="wap">
        <div class="main">
            <div class="banner">
                <div id="wrapper">
                    <div id="scroller">
                        <ul id="thelist">
                            <%
set rs1=server.createobject("ADODB.recordset")
sqlok="select top 4 * from KR_News where Isqh=1 order by AddDate desc"
rs1.open sqlok,conn,1,1
do while not rs1.eof
                            %>
                            <li><a href="/News/newsxq.asp?xq=<%=rs1("id")%>">
                                <img src="<%response.Write("http://"&replace(Request.ServerVariables("HTTP_HOST"),"m.","www.")&"/"&rs1("Pic"))%>" width="100%" height="180rem"></a></li>
                            <%
rs1.movenext
loop
rs1.close
set rs1=nothing
                            %>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <!--游戏资讯[[-->
    <!--头部导航资讯[[-->
    <%
set rs = Server.CreateObject("ADODB.RecordSet")
sql = "select top 1 * from KR_Announce order by AddTime desc"
rs.open sql,conn,1
if not rs.eof then
response.Write("<div class=""top-new""><ul id=""headads"">")
response.Write("<li><span class=""iconfont icon-tongzhi2""></span><marquee style='width:85%;margin-left:10px;' scrollamount='4'>"&rs("Content")&"</marquee></li>")
response.Write("</ul></div>")
end if
rs.close
set rs=nothing
    %>
    <!--头部导航资讯[[-->
    <div class="w320">
        <!--游戏列表]]-->

        <%if LotterySetting(44)="1" then%>
        <div class="sell-list2">
            <a href="/Trade/jczq/">
                <!--            <a href="#" onclick="suspend()">-->
                <dl>
                    <dt class="icon_jczq"></dt>
                    <dd>
                        <h5>竞彩足球</h5>
                        <cite data="简单好玩，2串1最易中奖">火爆销售中</cite>
                    </dd>
                </dl>
            </a>
        </div>
        <div class="sell-list2">
            <a href="/Trade/jclq/">
                <dl>
                    <dt class="icon_jclq"></dt>
                    <dd>
                        <h5>竞彩篮球</h5>
                        <cite data="简单好玩，2串1最易中奖">火爆销售中</cite>
                    </dd>
                </dl>
            </a>
        </div>
        <%end if%><%if LotterySetting(74)="1" then%>
        <div class="sell-list2">
            <!-- <a href="/Trade/Pk10/" onclick="suspend()">-->
          <!--  <a href="#" onclick="suspend()">-->
                <dl>
                    <dt class="icon_pk10"></dt>
                    <dd>
                        <h5>北京赛车</h5>
                         <cite data="五分钟一期">火爆销售中</cite>
                    <!--    <cite data="五分钟一期">暂售</cite>-->
                    </dd>
                </dl>
            </a>
        </div>
        <%end if%><%if LotterySetting(20)="1" then%>
        <div class="sell-list2">
              <a href="/Trade/Ssq/">
          <!--  <a href="#" onclick="suspend()">-->
                <dl>
                    <dt class="icon_ssq"></dt>
                    <dd>
                        <h5>双色球</h5>
                           <cite data="每周二四日开奖">火爆销售中</cite>
                   <!--     <cite data="每周二四日开奖">暂售</cite>-->
                    </dd>
                </dl>
            </a>
        </div>
        <%end if%><%if LotterySetting(30)="1" then%>
        <div class="sell-list2">
              <a href="/Trade/Dlt/">
           <!-- <a href="#" onclick="suspend()">-->
                <dl>
                    <dt class="icon_slt"></dt>
                    <dd>
                        <h5>大乐透</h5>
                          <cite data="每周一三六开奖">火爆销售中</cite>
                      <!--  <cite data="每周一三六开奖">暂售</cite>-->
                    </dd>
                </dl>
            </a>
        </div>
        <%end if%><%if LotterySetting(21)="1" then%>
        <div class="sell-list2">
              <a href="/Trade/Sd/">
          <!--  <a href="#" onclick="suspend()">-->
                <dl>
                    <dt class="icon_sd"></dt>
                    <dd>
                        <h5>福彩3D</h5>
                         <cite data="每天只猜3个数 超级简单">火爆销售中</cite>
                      <!--  <cite data="每天只猜3个数 超级简单">暂售</cite>-->
                    </dd>
                </dl>
            </a>
        </div>
        <%end if%><%if LotterySetting(31)="1" then%>
        <div class="sell-list2">
               <a href="/Trade/Pls/">
         <!--   <a href="#" onclick="suspend()">-->
                <dl>
                    <dt class="icon_p3"></dt>
                    <dd>
                        <h5>排列三</h5>
                          <cite data="猜3个数就能赢钱">火爆销售中</cite>
                      <!--  <cite data="猜3个数就能赢钱">暂售</cite>-->
                    </dd>
                </dl>
            </a>
        </div>
        <%end if%><%if LotterySetting(32)="1" then%>
        <div class="sell-list2">
            <a href="/Trade/Plw/">
          <!--  <a href="#" onclick="suspend()">-->
                <dl>
                    <dt class="icon_p5"></dt>
                    <dd>
                        <h5>排列五</h5>
                           <cite data="玩法简单">火爆销售中</cite>
                   <!--     <cite data="玩法简单">暂售</cite>-->
                    </dd>
                </dl>
            </a>
        </div>
        <%end if%><%if LotterySetting(0)="1" then%>
        <div class="sell-list2">
            <a href="/Trade/Ssc/?type=Ssc">
           <!-- <a href="#" onclick="suspend()">-->
                <dl>
                    <dt class="icon_ssc"></dt>
                    <dd>
                        <h5>重庆时时彩</h5>
                           <cite data="玩到凌晨2点也不怕">火爆销售中</cite>
                     <!--   <cite data="玩到凌晨2点也不怕">暂售</cite>-->
                    </dd>
                </dl>
            </a>
        </div>
        <%else%>
        <div class="sell-list2">
            <a href="#">
                <dl>
                    <dt class="icon_ssc"></dt>
                    <dd>
                        <h5>重庆时时彩</h5>
                        <cite data="玩到凌晨2点也不怕"><span>暂售</span></cite>
                    </dd>
                </dl>
            </a>
        </div>


        <%end if%><%if LotterySetting(71)="1" then%>
        <div class="sell-list2">
              <a href="/Trade/Ssc/?type=Hnwfc">
  <!--          <a href="#" onclick="suspend()">-->
                <dl>
                    <dt class="icon_ssc"></dt>
                    <dd>
                        <h5>河内五分彩</h5>
                         <cite data="五分钟一期，每天288期">火爆销售中</cite>
                       <!-- <cite data="五分钟一期，每天288期">暂售</cite>-->
                    </dd>
                </dl>
            </a>
        </div>
        <%end if%><%if LotterySetting(72)="1" then%>
        <div class="sell-list2">
             <a href="/Trade/Ssc/?type=Ynwfc">
          <!--  <a href="#" onclick="suspend()">-->
                <dl>
                    <dt class="icon_ssc"></dt>
                    <dd>
                        <h5>印尼五分彩</h5>
                         <cite data="五分钟一期，每天288期">火爆销售中</cite>
                       <!-- <cite data="五分钟一期，每天288期">暂售</cite>-->
                    </dd>
                </dl>
            </a>
        </div>
        <%end if%><%if LotterySetting(73)="1" then%>
        <div class="sell-list2" onclick="suspend()">
             <a href="/Trade/Ssc/?type=Txffc">
          <!--  <a href="#" onclick="suspend()">-->
                <dl>
                    <dt class="icon_ssc"></dt>
                    <dd>
                        <h5>腾讯分分彩</h5>
                        <cite data="每分钟一期，每天1440期">火爆销售中</cite>
                    </dd>
                </dl>
            </a>
        </div>
        <%end if%><%if LotterySetting(1)="1" then%>
        <div class="sell-list2">
             <a href="/Trade/Ssc/?type=JxSsc">
          <!--  <a href="#" onclick="suspend()">-->
                <dl>
                    <dt class="icon_ssc"></dt>
                    <dd>
                        <h5>江西时时彩</h5>
                          <cite data="每天84期，最高奖金11.6万<%=setting(56)%>">火爆销售中</cite>
               <!--         <cite data="每天84期，最高奖金11.6万<%=setting(56)%>">暂售</cite>-->
                    </dd>
                </dl>
            </a>
        </div>
        <%end if%><%if LotterySetting(2)="1" then%>
        <div class="sell-list2">
             <a href="/Trade/Ssc/?type=TjSsc">
          <!--  <a href="#" onclick="suspend()">-->
                <dl>
                    <dt class="icon_ssc"></dt>
                    <dd>
                        <h5>天津时时彩</h5>
                    <!--    <cite data="玩到凌晨2点也不怕">暂售</cite>-->
                          <cite data="玩到凌晨2点也不怕">火爆销售中</cite>
                    </dd>
                </dl>
            </a>
        </div>
        <%end if%><%if LotterySetting(4)="1" then%>
        <div class="sell-list2">
              <a href="/Trade/Ssc/?type=HljSsc">
        <!--    <a href="#" onclick="suspend()">-->
                <dl>
                    <dt class="icon_ssc"></dt>
                    <dd>
                        <h5>黑龙江时时彩</h5>
                       <!-- <cite data="玩到凌晨2点也不怕">暂售</cite>-->
                         <cite data="玩到凌晨2点也不怕">火爆销售中</cite>
                    </dd>
                </dl>
            </a>
        </div>
        <%end if%><%if LotterySetting(13)="1" then%>
        <div class="sell-list2">
            <a href="/Trade/Syxw/?type=AhSyxw">
         <!--   <a href="#" onclick="suspend()">-->
                <dl>
                    <dt class="icon_sh11"></dt>
                    <dd>
                        <h5>安徽11选5</h5>
                         <cite data="10分钟一期，每天81期">火爆销售中</cite>
                    <!--    <cite data="10分钟一期，每天81期">暂售</cite>-->
                    </dd>
                </dl>
            </a>
        </div>
        <%end if%><%if LotterySetting(59)="1" then%>
        <div class="sell-list2">
              <a href="/Trade/Syxw/?type=ZjSyxw">
         <!--   <a href="#" onclick="suspend()">-->
                <dl>
                    <dt class="icon_sh11"></dt>
                    <dd>
                        <h5>浙江11选5</h5>
                          <cite data="10分钟开奖，每天80次中奖机会">火爆销售中</cite>
                    <!--    <cite data="10分钟开奖，每天80次中奖机会">暂售</cite>-->
                    </dd>
                </dl>
            </a>
        </div>
        <%end if%><%if LotterySetting(65)="1" then%>
        <div class="sell-list2">
             <a href="/Trade/Syxw/?type=HljSyxw">
     <!--       <a href="#" onclick="suspend()">-->
                <dl>
                    <dt class="icon_sh11"></dt>
                    <dd>
                        <h5>黑龙江11选5</h5>
                      <!--  <cite data="10分钟开奖，每天84次中奖机会">暂售</cite>-->
                             <cite data="10分钟开奖，每天84次中奖机会">火爆销售中</cite>
                    </dd>
                </dl>
            </a>
        </div>
        <%end if%><%if LotterySetting(66)="1" then%>
        <div class="sell-list2">
               <a href="/Trade/Syxw/?type=HebSyxw">
          <!--  <a href="#" onclick="suspend()">-->
                <dl>
                    <dt class="icon_sh11"></dt>
                    <dd>
                        <h5>河北11选5</h5>
                        <cite data="10分钟开奖，每天84次中奖机会">火爆销售中</cite>
                    </dd>
                </dl>
            </a>
        </div>
        <%end if%><%if LotterySetting(69)="1" then%>
        <div class="sell-list2">
              <a href="/Trade/Syxw/?type=JlSyxw">
           <!-- <a href="#" onclick="suspend()">-->
                <dl>
                    <dt class="icon_sh11"></dt>
                    <dd>
                        <h3>吉林11选5</h3>
                           <cite data="10分钟开奖，每天84次中奖机会">火爆销售中</cite>
                      <!--  <cite data="10分钟开奖，每天84次中奖机会">暂售</cite>-->
                    </dd>
                </dl>
            </a>
        </div>
        <%end if%><%if LotterySetting(70)="1" then%>
        <div class="sell-list2">
              <a href="/Trade/Syxw/?type=TjSyxw">
       <!--     <a href="#" onclick="suspend()">-->
                <dl>
                    <dt class="icon_sh11"></dt>
                    <dd>
                        <h3>天津11选5</h3>
                         <cite data="10分钟开奖，每天84次中奖机会">火爆销售中</cite>
                     <!--   <cite data="10分钟开奖，每天84次中奖机会">暂售</cite>-->
                    </dd>
                </dl>
            </a>
        </div>
        <%end if%><%if LotterySetting(5)="1" then%>
        <div class="sell-list2">
             <a href="/Trade/Syxw/?type=Syxw">
      <!--      <a href="#" onclick="suspend()">-->
                <dl>
                    <dt class="icon_dlc"></dt>
                    <dd>
                        <h3>江西11选5</h3>
                          <cite data="10分钟一期，每天78期">火爆销售中</cite>
                   <!--     <cite data="10分钟一期，每天78期">暂售</cite>-->
                    </dd>
                </dl>
            </a>
        </div>
        <%end if%><%if LotterySetting(7)="1" then%>
        <div class="sell-list2">
              <a href="/Trade/Syxw/?type=GdSyxw">
         <!--   <a href="#" onclick="suspend()">-->
                <dl>
                    <dt class="icon_gd11"></dt>
                    <dd>
                        <h5>广东11选5</h5>
                 <!--       <cite data="10分钟开奖，每天84次中奖机会">暂售</cite>-->
                          <cite data="10分钟开奖，每天84次中奖机会">火爆销售中</cite>
                    </dd>
                </dl>
            </a>
        </div>
        <%else%>
        <div class="sell-list2">
            <a href="#" onclick="suspend()">
                <dl>
                    <dt class="icon_gd11"></dt>
                    <dd>
                        <h5>广东11选5</h5>
                        <cite data="10分钟开奖，每天84次中奖机会"><span>暂售</span></cite>
                    </dd>
                </dl>
            </a>
        </div>

        <%end if%><%if LotterySetting(14)="1" then%>
        <div class="sell-list2">
              <a href="/Trade/Syxw/?type=JsSyxw">
        <!--    <a href="#" onclick="suspend()">-->
                <dl>
                    <dt class="icon_hlj"></dt>
                    <dd>
                        <h3>江苏11选5</h3>
                 <!--       <cite data="对1个号就中奖，每天82期">暂售</cite>-->
                          <cite data="对1个号就中奖，每天82期">火爆销售中</cite>
                    </dd>
                </dl>
            </a>
        </div>
        <%end if%><%if LotterySetting(16)="1" then%>
        <div class="sell-list2">
             <a href="/Trade/Syxw/?type=ShSyxw">
          <!--  <a href="#" onclick="suspend()">-->
                <dl>
                    <dt class="icon_sh11"></dt>
                    <dd>
                        <h3>上海11选5</h3>
             <!--           <cite data="10分钟一期，每天80期">暂售</cite>-->
                         <cite data="10分钟一期，每天80期">火爆销售中</cite>
                    </dd>
                </dl>
            </a>
        </div>
        <%end if%><%if LotterySetting(15)="1" then%>
        <div class="sell-list2">
             <a href="/Trade/Syxw/?type=LlSyxw">
            <a href="#" onclick="suspend()">
                <dl>
                    <dt class="icon_ln11"></dt>
                    <dd>
                        <h3>辽宁11选5</h3>
                          <cite data="对1个号就中奖，每天83期">火爆销售中</cite>
                   <!--     <cite data="对1个号就中奖，每天83期">暂售</cite>-->
                    </dd>
                </dl>
            </a>
        </div>
        <%end if%><%if LotterySetting(68)="1" then%>
        <div class="sell-list2">
              <a href="/Trade/Syxw/?type=FjSyxw">
     <!--       <a href="#" onclick="suspend()">-->
                <dl>
                    <dt class="icon_syy"></dt>
                    <dd>
                        <h3>福建11选5</h3>
                  <!--      <cite data="10分钟一期，每天78期">暂售</cite>-->
                           <cite data="10分钟一期，每天78期">火爆销售中</cite>
                    </dd>
                </dl>
            </a>
        </div>
        <%end if%><%if LotterySetting(68)="1" then%>
        <div class="sell-list2">
               <a href="/Trade/Syxw/?type=XjSyxw">
        <!--    <a href="#" onclick="suspend()">-->
                <dl>
                    <dt class="icon_xj11"></dt>
                    <dd>
                        <h3>新疆11选5</h3>
              <!--          <cite data="10分钟一期，每天97期">暂售</cite>-->
                         <cite data="10分钟一期，每天97期">火爆销售中</cite>
                    </dd>
                </dl>
            </a>
        </div>
        <%end if%><%if LotterySetting(8)="1" then%>
        <div class="sell-list2">
              <a href="/Trade/Syxw/?type=Syydj">
     <!--       <a href="#" onclick="suspend()">-->
                <dl>
                    <dt class="icon_syy"></dt>
                    <dd>
                        <h3>11运夺金</h3>
                        <cite data="对1个号就中奖，每天78期">火爆销售中</cite>
                 <!--        <cite data="对1个号就中奖，每天78期">暂售</cite>-->
                    </dd>
                </dl>
            </a>
        </div>
        <%end if%><%if LotterySetting(10)="1" then%>
        <div class="sell-list2">
              <a href="/Trade/Ks/?type=JsKs">
   <!--         <a href="#" onclick="suspend()">-->
                <dl>
                    <dt class="icon_k3js"></dt>
                    <dd>
                        <h3>江苏快3</h3>
                        <cite data="3000万加奖，好玩易中奖">火爆销售中</cite>
                       <!--   <cite data="3000万加奖，好玩易中奖">暂售</cite>-->
                    </dd>
                </dl>
            </a>
        </div>
        <%end if%><%if LotterySetting(50)="1" then%>
        <div class="sell-list2">
                <a href="/Trade/Ks/?type=NmKs">
            <a href="#" onclick="suspend()">
                <dl>
                    <dt class="icon_k3jl"></dt>
                    <dd>
                        <h3>内蒙快3</h3>
                     <!--   <cite data="只猜3个号，简单易中奖">暂售</cite>-->

                          <cite data="只猜3个号，简单易中奖">火爆销售中</cite>
                    </dd>
                </dl>
            </a>
        </div>
        <%end if%>
        <%if LotterySetting(51)="1" then%>
        <div class="sell-list2">
               <a href="/Trade/Ks/?type=GxKs">
       <!--     <a href="#" onclick="suspend()">-->
                <dl>
                    <dt class="icon_k3jl"></dt>
                    <dd>
                        <h3>广西快3</h3>
                          <cite data="只猜3个号，简单易中奖">火爆销售中</cite>
         <!--               <cite data="只猜3个号，简单易中奖">暂售</cite>-->
                    </dd>
                </dl>
            </a>
        </div>
        <%end if%>
        <%if LotterySetting(52)="1" then%>
        <div class="sell-list2">
             <a href="/Trade/Ks/?type=HubKs">
           <!-- <a href="#" onclick="suspend()">-->
                <dl>
                    <dt class="icon_k3jl"></dt>
                    <dd>
                        <h3>湖北快3</h3>
                      <!--  <cite data="只猜3个号，简单易中奖">暂售</cite>-->
                         <cite data="只猜3个号，简单易中奖">火爆销售中</cite>
                    </dd>
                </dl>
            </a>
        </div>
        <%end if%>
        <%if LotterySetting(53)="1" then%>
        <div class="sell-list2">
             <a href="/Trade/Ks/?type=HebKs">
          <!--  <a href="#" onclick="suspend()">-->
                <dl>
                    <dt class="icon_k3jl"></dt>
                    <dd>
                        <h3>河北快3</h3>
                         <cite data="只猜3个号，简单易中奖">火爆销售中</cite>
                    <!--    <cite data="只猜3个号，简单易中奖">暂售</cite>-->
                    </dd>
                </dl>
            </a>
        </div>
        <%end if%>
        <%if LotterySetting(67)="1" then%>
        <div class="sell-list2">
               <a href="/Trade/Ks/?type=ShKs">
          <!--  <a href="#" onclick="suspend()">-->
                <dl>
                    <dt class="icon_k3jl"></dt>
                    <dd>
                        <h3>上海快3</h3>
                        <cite data="只猜3个号，简单易中奖">火爆销售中</cite>
                <!--         <cite data="只猜3个号，简单易中奖">暂售</cite>-->
                    </dd>
                </dl>
            </a>
        </div>
        <%end if%><%if LotterySetting(17)="1" then%>
        <div class="sell-list2">
                   <a href="/Trade/Ks/?type=JlKs">
     <!--       <a href="#" onclick="suspend()">-->
                <dl>
                    <dt class="icon_k3jl"></dt>
                    <dd>
                        <h3>吉林快3</h3>
                        <cite data="只猜3个号，简单易中奖">火爆销售中</cite>
                 <!--          <cite data="只猜3个号，简单易中奖">暂售</cite>-->
                    </dd>
                </dl>
            </a>
        </div>
        <%end if%><%if LotterySetting(18)="1" then%>
        <div class="sell-list2">
             <a href="/Trade/Ks/?type=AhKs">
     <!--       <a href="#" onclick="suspend()">-->
                <dl>
                    <dt class="icon_k3nm"></dt>
                    <dd>
                        <h3>安徽快3</h3>
                         <cite data="只猜3个号，简单易中奖">火爆销售中</cite>
         <!--               <cite data="只猜3个号，简单易中奖">暂售</cite>-->
                    </dd>
                </dl>
            </a>
        </div>
        <%end if%><%if LotterySetting(19)="1" then%>
        <div class="sell-list2">
                   <a href="/Trade/Ks/?type=FjKs">
      <!--      <a href="#" onclick="suspend()">-->
                <dl>
                    <dt class="icon_k3jl"></dt>
                    <dd>
                        <h3>福建快3</h3>
                        <cite data="选3个号就能拿奖金">火爆销售中</cite>
                           <!--  <cite data="选3个号就能拿奖金">暂售</cite>-->
                    </dd>
                </dl>
            </a>
        </div>
        <%end if%>
    </div>
    <%
response.Write("<div class=""top-new"" style=""clear:both;""></div>")
    %>





    <style type="text/css">
        .cssxw1 {
            width: 95%;
            height: 60px;
            margin: 10px auto;
            /*padding-right:3px;*/
            padding: 10px 0;
            border-bottom: 1px solid #EBEBEB;
            position: relative;
        }

        .cssxw2 {
            position: absolute;
            top: 2px;
            left: 4px;
        }

            .cssxw2 img {
                height: 60px;
                width: 130px;
                /*border:1px solid #ccc;*/
                padding: 2px;
            }

        .cssxw3 {
            margin-left: 150px;
        }

        .cssxw1 h3 {
            font-size: 16px;
            font-weight: bold;
            color: #9E9E9E;
            line-height: 1.5em;
        }

        .cssxw1 p {
            font-size: 14px;
            font-weight: bold;
            color: #999999;
            /*text-indent:2em;*/
            line-height: 3em;
            text-align: left;
        }
    </style>
    <%
set rsxw=server.createobject("ADODB.recordset")
sql="select top 5 * from KR_News where isnice=1 and pic<>'' order by id desc"
rsxw.open sql,conn,1,1
do while not rsxw.eof
    %>
    <div class="cssxw1">
        <div class="cssxw2">
            <img src="<%response.Write("http://"&replace(Request.ServerVariables("HTTP_HOST"),"m.","www.")&"/"&rsxw("pic"))%>">
        </div>
        <div class="cssxw3">
            <h5><a href="/News/newsxq.asp?xq=<%=rsxw("id")%>"><%=left(rsxw("title"),11)%></a></h5>
            <p><%=rsxw("adddate")%></p>
        </div>
    </div>
    <%
rsxw.movenext
loop
rsxw.close
set rsxw=nothing
    %>
</body>
</html>



<script type="text/javascript" src="JS/zepto.js"></script>
<script>
	var ZJ = Zepto || Jquery;
	function getImageWidth(fun){
		var winWidth = ZJ(".wap").width();
		var width_img =  ZJ("#thelist li").length;
		ZJ("#thelist li").width(winWidth);
		ZJ("#wrapper").width(winWidth);
		ZJ("#scroller").width((width_img * winWidth));
		var winheight = ZJ("#thelist li:eq(0)").height();
		ZJ("#wrapper").height(winheight);
		if(fun instanceof Function)fun(-winWidth*len,-winheight);
	}
	getImageWidth();
</script>
<script type="text/javascript">
    function suspend() {
        alert("暂停销售,敬请期待。");
        return false;
    }
</script>
<script type="text/javascript" src="JS/ender.js"></script>
<script>
	var myScroll,Global = {},time=1000,len=1,imglen=ZJ("#thelist li").length;
	//var wc = "onorientationchange" in window ? "orientationchange" : "resize";
	var wc = "onorientationchange";
	window.addEventListener(wc , function(){
		myScroll.destroy();
		getMyScroll();
	},false); 
	
	function img_num(p){
		len = p==imglen-1 ? 0 : p+1;
	}
	function auto(){
		getImageWidth(function(x,y){
			clearTimeout(Global.out);
			Global.out = setTimeout(function(){
				myScroll.scrollToPage(len, 0,time,x,y);
				myScroll.options.onScrollEnd.call(myScroll);
			},2000)
		});
	}
	function getMyScroll(){
		myScroll = ender('#wrapper').iScroll({
			snap: true,
			momentum: false,
			hScrollbar: false,
			onScrollStart: function () {
				clearTimeout(Global.timeout);
				Global.timeout = setTimeout(auto,time);
			}, 
			onScrollEnd: function () {
				img_num(this.currPageX);
				ZJ("#indicator li").removeClass();
				ZJ("#indicator li:eq("+this.currPageX+")").addClass('active');
			}
		})
		if(imglen>1){
			Global.timeout = setTimeout(auto,time);
		} 
	}
	$(document).ready(function () {
		getMyScroll();
	})
</script>
<!--#include file="dh.asp"-->
