<!--#include file="Conn.asp"-->
<!DOCTYPE HTML>
<html>
<head>
    <title><%=Setting(0)%></title>
    <meta charset="GBK" />
    <meta name="keywords" content="<%=Setting(0)%>��Ϸ������" />
    <meta name="description" content="<%=Setting(0)%>��Ϸ������" />
    <meta name="author" content="<%=Setting(0)%>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="copyright" content="Copyright @ kure.cn ��Ȩ����" />
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
	  SumMoney=mid(Money1,1,Money2-8)+"��"
	  lz_money(a1) 
   elseif Money2>=5 and Money2<9 then 
   	 a1=right(Money1,4)
	 a2=mid(Money1,1,Money2-4) 
	 if int(a2)=0 then
	 a2="0"
	 SumMoney=SumMoney+a2
	 else 
	 SumMoney=SumMoney+a2&"��"
	 end if
     lz_money(a1)
   elseif Money2=4 then
     a1=right(Money1,3)
	 a2=mid(Money1,1,Money2-3)
	 if int(a2)=0 then
	 a2="0"
	 SumMoney=SumMoney+a2
	 else 
	 SumMoney=SumMoney+a2&"ǧ"
	 end if 
     lz_money(a1)     
   elseif Money2=3 then
   	 a1=right(Money1,2)
	 a2=mid(Money1,1,Money2-2) 
	 if int(a2)=0 then
	 a2="0"
	 SumMoney=SumMoney+a2
	 else 
	 SumMoney=SumMoney+a2&"��"
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
    <h2 id="navtit"><font size="4" >�Բ�</font></h2>
   
  </div>-->
        <!--�ֲ�ͼ[[-->
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



    <!--��Ϸ��Ѷ[[-->
    <!--ͷ��������Ѷ[[-->
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
    <!--ͷ��������Ѷ[[-->
    <div class="w320">
        <!--��Ϸ�б�]]-->

        <%if LotterySetting(44)="1" then%>
        <div class="sell-list2">
            <a href="/Trade/jczq/">
                <!--            <a href="#" onclick="suspend()">-->
                <dl>
                    <dt class="icon_jczq"></dt>
                    <dd>
                        <h5>��������</h5>
                        <cite data="�򵥺��棬2��1�����н�">��������</cite>
                    </dd>
                </dl>
            </a>
        </div>
        <div class="sell-list2">
            <a href="/Trade/jclq/">
                <dl>
                    <dt class="icon_jclq"></dt>
                    <dd>
                        <h5>��������</h5>
                        <cite data="�򵥺��棬2��1�����н�">��������</cite>
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
                        <h5>��������</h5>
                         <cite data="�����һ��">��������</cite>
                    <!--    <cite data="�����һ��">����</cite>-->
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
                        <h5>˫ɫ��</h5>
                           <cite data="ÿ�ܶ����տ���">��������</cite>
                   <!--     <cite data="ÿ�ܶ����տ���">����</cite>-->
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
                        <h5>����͸</h5>
                          <cite data="ÿ��һ��������">��������</cite>
                      <!--  <cite data="ÿ��һ��������">����</cite>-->
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
                        <h5>����3D</h5>
                         <cite data="ÿ��ֻ��3���� ������">��������</cite>
                      <!--  <cite data="ÿ��ֻ��3���� ������">����</cite>-->
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
                        <h5>������</h5>
                          <cite data="��3��������ӮǮ">��������</cite>
                      <!--  <cite data="��3��������ӮǮ">����</cite>-->
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
                        <h5>������</h5>
                           <cite data="�淨��">��������</cite>
                   <!--     <cite data="�淨��">����</cite>-->
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
                        <h5>����ʱʱ��</h5>
                           <cite data="�浽�賿2��Ҳ����">��������</cite>
                     <!--   <cite data="�浽�賿2��Ҳ����">����</cite>-->
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
                        <h5>����ʱʱ��</h5>
                        <cite data="�浽�賿2��Ҳ����"><span>����</span></cite>
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
                        <h5>������ֲ�</h5>
                         <cite data="�����һ�ڣ�ÿ��288��">��������</cite>
                       <!-- <cite data="�����һ�ڣ�ÿ��288��">����</cite>-->
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
                        <h5>ӡ����ֲ�</h5>
                         <cite data="�����һ�ڣ�ÿ��288��">��������</cite>
                       <!-- <cite data="�����һ�ڣ�ÿ��288��">����</cite>-->
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
                        <h5>��Ѷ�ֲַ�</h5>
                        <cite data="ÿ����һ�ڣ�ÿ��1440��">��������</cite>
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
                        <h5>����ʱʱ��</h5>
                          <cite data="ÿ��84�ڣ���߽���11.6��<%=setting(56)%>">��������</cite>
               <!--         <cite data="ÿ��84�ڣ���߽���11.6��<%=setting(56)%>">����</cite>-->
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
                        <h5>���ʱʱ��</h5>
                    <!--    <cite data="�浽�賿2��Ҳ����">����</cite>-->
                          <cite data="�浽�賿2��Ҳ����">��������</cite>
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
                        <h5>������ʱʱ��</h5>
                       <!-- <cite data="�浽�賿2��Ҳ����">����</cite>-->
                         <cite data="�浽�賿2��Ҳ����">��������</cite>
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
                        <h5>����11ѡ5</h5>
                         <cite data="10����һ�ڣ�ÿ��81��">��������</cite>
                    <!--    <cite data="10����һ�ڣ�ÿ��81��">����</cite>-->
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
                        <h5>�㽭11ѡ5</h5>
                          <cite data="10���ӿ�����ÿ��80���н�����">��������</cite>
                    <!--    <cite data="10���ӿ�����ÿ��80���н�����">����</cite>-->
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
                        <h5>������11ѡ5</h5>
                      <!--  <cite data="10���ӿ�����ÿ��84���н�����">����</cite>-->
                             <cite data="10���ӿ�����ÿ��84���н�����">��������</cite>
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
                        <h5>�ӱ�11ѡ5</h5>
                        <cite data="10���ӿ�����ÿ��84���н�����">��������</cite>
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
                        <h3>����11ѡ5</h3>
                           <cite data="10���ӿ�����ÿ��84���н�����">��������</cite>
                      <!--  <cite data="10���ӿ�����ÿ��84���н�����">����</cite>-->
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
                        <h3>���11ѡ5</h3>
                         <cite data="10���ӿ�����ÿ��84���н�����">��������</cite>
                     <!--   <cite data="10���ӿ�����ÿ��84���н�����">����</cite>-->
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
                        <h3>����11ѡ5</h3>
                          <cite data="10����һ�ڣ�ÿ��78��">��������</cite>
                   <!--     <cite data="10����һ�ڣ�ÿ��78��">����</cite>-->
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
                        <h5>�㶫11ѡ5</h5>
                 <!--       <cite data="10���ӿ�����ÿ��84���н�����">����</cite>-->
                          <cite data="10���ӿ�����ÿ��84���н�����">��������</cite>
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
                        <h5>�㶫11ѡ5</h5>
                        <cite data="10���ӿ�����ÿ��84���н�����"><span>����</span></cite>
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
                        <h3>����11ѡ5</h3>
                 <!--       <cite data="��1���ž��н���ÿ��82��">����</cite>-->
                          <cite data="��1���ž��н���ÿ��82��">��������</cite>
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
                        <h3>�Ϻ�11ѡ5</h3>
             <!--           <cite data="10����һ�ڣ�ÿ��80��">����</cite>-->
                         <cite data="10����һ�ڣ�ÿ��80��">��������</cite>
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
                        <h3>����11ѡ5</h3>
                          <cite data="��1���ž��н���ÿ��83��">��������</cite>
                   <!--     <cite data="��1���ž��н���ÿ��83��">����</cite>-->
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
                        <h3>����11ѡ5</h3>
                  <!--      <cite data="10����һ�ڣ�ÿ��78��">����</cite>-->
                           <cite data="10����һ�ڣ�ÿ��78��">��������</cite>
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
                        <h3>�½�11ѡ5</h3>
              <!--          <cite data="10����һ�ڣ�ÿ��97��">����</cite>-->
                         <cite data="10����һ�ڣ�ÿ��97��">��������</cite>
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
                        <h3>11�˶��</h3>
                        <cite data="��1���ž��н���ÿ��78��">��������</cite>
                 <!--        <cite data="��1���ž��н���ÿ��78��">����</cite>-->
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
                        <h3>���տ�3</h3>
                        <cite data="3000��ӽ����������н�">��������</cite>
                       <!--   <cite data="3000��ӽ����������н�">����</cite>-->
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
                        <h3>���ɿ�3</h3>
                     <!--   <cite data="ֻ��3���ţ������н�">����</cite>-->

                          <cite data="ֻ��3���ţ������н�">��������</cite>
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
                        <h3>������3</h3>
                          <cite data="ֻ��3���ţ������н�">��������</cite>
         <!--               <cite data="ֻ��3���ţ������н�">����</cite>-->
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
                        <h3>������3</h3>
                      <!--  <cite data="ֻ��3���ţ������н�">����</cite>-->
                         <cite data="ֻ��3���ţ������н�">��������</cite>
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
                        <h3>�ӱ���3</h3>
                         <cite data="ֻ��3���ţ������н�">��������</cite>
                    <!--    <cite data="ֻ��3���ţ������н�">����</cite>-->
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
                        <h3>�Ϻ���3</h3>
                        <cite data="ֻ��3���ţ������н�">��������</cite>
                <!--         <cite data="ֻ��3���ţ������н�">����</cite>-->
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
                        <h3>���ֿ�3</h3>
                        <cite data="ֻ��3���ţ������н�">��������</cite>
                 <!--          <cite data="ֻ��3���ţ������н�">����</cite>-->
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
                        <h3>���տ�3</h3>
                         <cite data="ֻ��3���ţ������н�">��������</cite>
         <!--               <cite data="ֻ��3���ţ������н�">����</cite>-->
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
                        <h3>������3</h3>
                        <cite data="ѡ3���ž����ý���">��������</cite>
                           <!--  <cite data="ѡ3���ž����ý���">����</cite>-->
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
        alert("��ͣ����,�����ڴ���");
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
