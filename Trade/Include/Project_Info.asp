<!--#include file="../../Conn.asp"-->
<!--#include file="../../Include/KR.CommonCls.asp"-->
<%
function y_z(id)
	Set regEx = New RegExp
	regEx.IgnoreCase = True
	regEx.Global = True
	regexStr = "[0-9]+([a-zA-Z]+)[0-9]+"
	regEx.Pattern = regexStr
	y_z = LCase(regEx.replace(id,"$1"))
	set regEx=nothing
	y_z = replace(y_z,"cqssc","ssc") 
end function 
id=request("id")
Lottery_Type1=request("Lottery_Type1")
if id<>"" then
id1=id
else
response.Write("<script>alert('�÷��������ڣ�');history.go(-1)</script>")
end if
%>
<!--#include file="KR.CommonCls.asp"-->
<%
if lotterytype="˫ɫ��" or lotterytype="����3D" or lotterytype="���ֲ�" or lotterytype="15ѡ5" or lotterytype="����͸" or lotterytype="������" or lotterytype="������" or lotterytype="���ǲ�" then
	sql = "select * from KR_Lottery_Issue where Lottery_Name='"&lotterytype&"'"
	set rs = conn.execute(sql)
	qh=rs("Lottery_Num")
	EndTime=rs("EndTime")
	set rs = nothing
elseif lotterytype="��������" then 
	 set dt = conn.execute("select isjz from kr_buy where id= "&KRA(request("id")))
	 EndTime = dt("isjz")
	 set dt = nothing
else
	sql = "select * from KR_Lottery_Issue where Lottery_Name='"&lotterytype&"' and Lottery_Num="&qihao&" ORDER BY endtime1 "
	set rr = conn.execute(sql)
	jssj=FormatDateTime(rr("endtime1"),3)
	EndTime=CDate(fqtime&" "&jssj)
	set rr = nothing
end if

allsss=0
set rsc=server.createobject("ADODB.recordset")
sqlc="select Record,bonusex from KR_User where UserName='"&username&"'"
rsc.open sqlc,conn,1,1
if not rsc.eof then
allsss=rsc(0)
bonusex=rsc(1)
end if
rsc.close
set rsc=nothing
%><!doctype html>
<html>
<head>
<title><%=lotterytype%>��������-<%=Setting(0)%></title>
<meta charset="GB2312">
<meta http-equiv="Content-Type" content="text/html; charset=GB2312" />
<meta name="format-detection" content="telephone=no" />
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="keywords" content="<%=lotterytype%>����_<%=lotterytype%>����Ԥ���Ƽ�_<%=lotterytype%>����ͼ_<%=Setting(0)%>������"/>
<meta name="description" content="<%=Setting(0)%>���ֻ�����õ�Ͷעƽ̨��10����Ϸ���Ʒ����飬Ϊ��Ϸ�����ṩ��ȫ���ֻ���ϷͶע����Ϸ���������Ϸ��Ѷ"/>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
<link href="/Css/basic.css" rel="stylesheet">
<link href="/Css/Hm.css" rel="stylesheet">
<script language="javascript" type="text/javascript" src="/JS/Jquery-1.7.2.Min.js"></script>
<script language="javascript" type="text/javascript" src="/JS/Jquery-ui-1.8.2.custom.min.js"></script>
<script language="javascript" type="text/javascript" src="/JS/Alertdiv.js"></script>
<script language="javascript" type="text/javascript" src="/JS/loginstatus.js"></script>
<script language="javascript" type="text/javascript" src="/JS/tool2.js"></script>
<script language="javascript" type="text/javascript" src="/JS/Utility.js"></script>
<script language="javascript" type="text/javascript" src="/JS/raphael-min.js"></script>
<script type="text/javascript" src="/User/Js/bonusex.js"></script>
<script language="javascript" type="text/javascript">
	var ubsession="<%=bonusex%>";
</script>
<style type="text/css">
  .redball{  border-radius:20px; background:#FF0000; color:#FFF; text-align:center; font-size:14px; width:25px; height:25px; display:inline-block; font-style:normal; line-height:25px;}
</style>
</head>
<body>
	 <div class="head"><h2 onClick="javascript:upcss();" id="navtit"><em id="jiangaa"><h1>��������</h1></em></h2><a href="javascript:history.go(-1)" class="btn-qgkj" id="sourceUrl"><span><em></em></span>����</a>
<a  class="btn-menu" href="/User/Reg/">ע��</a></div>
<div class="wap_h faxq_wap"<%if instr(zt,"�н�")>0 then%> style="background:url(/images/<%if zt="���н�" then response.write("1") else response.write("2")%>.png) right bottom no-repeat;"<%end if%>>
	<div class="fqhm_btm_pdt">
		<h3 class="faxq_title"><%=lotterytype%></h3> 
        <p class="faxq_s_num">��<span><%=expectinfo%></span>�� <span>��ʽͶע</span></p>   
    </div>
	<div class="fqhm_btm_pdt">
    	<dl class="fqhm_person">
        	<dt>������</dt>
            <dd>
				<em class="color_333" id="fa_username"><%=left(username,2)&"***"%></em>
				<span id="fa_level"><span>���ȼ���<font id="blevel">--</font>��ս����<%
am = allsss
ar = int(am/10000000)
if ar>0 then
response.write "<img src='/Images/y4.gif' />"
response.write "<img src='/Images/s"&ar&".png' />"
am = am-10000000 * ar
end if

ar = int(am/1000000)
if ar>0 then
response.write "<img src='/Images/y3.gif' />"
response.write "<img src='/Images/s"&ar&".png' />"
am = am-1000000 * ar
end if

ar = int(am/100000)
if ar>0 then
response.write "<img src='/Images/y2.gif' />"
response.write "<img src='/Images/s"&ar&".png' />"
am = am-100000 * ar
end if

ar = int(am/10000)
if ar>0 then
response.write "<img src='/Images/y1.gif' />"
response.write "<img src='/Images/s"&ar&".png' />"
am = am-10000 * ar
end if

if allsss>1000 and allsss<10000 then
response.write "<img src='/Images/y1.gif' />"
end if	
%>
<script>

window.onload=function(){
	var endtime=new Date("<%=EndTime%>");
	var timea=new Date("<%=now()%>");
	var jd="<%=schedule%>";
	if(document.getElementById("addproject")!=null){
	var x1=document.getElementById("addproject");
	if(jd>=100)
	{
		x1.innerHTML="����Ա";
		x1.style.background="#C7C7C7";
		x1.style.border="#C7C7C7";	
	}
	else if(endtime<timea)
	{
		x1.innerHTML="�ѽ�ֹ";
		x1.style.background="#C7C7C7";
		x1.style.border="#C7C7C7";
	}
	else{ $("#addproject").click(check_project) }}
}
</script>
</span></span>
			</dd>
        </dl>  
    </div><%if ishm=1 then%>
	<div class="fqhm_btm_pdt" id="progressInfo">
		<ul class="fqhm_nums faxq_timebox">
    		<li class="li_40">
				<div class="pie_box"><%if bd<>"0" then%>
<font style="margin-left:-1px" class='color_ff9900 font_b'><em>��</em><%=Formatnumber(baodijd,2,-1)%>%</font>
<%else%>
<font style="margin-left:-7px" class='color_ff9900 font_b'>δ����</font>
<%end if%>
<canvas class='process' style='width:80px;height:80px'><%=schedule%>%</canvas>
				</div>
            </li>
            <li class="li_60">
            	<h3 class=" color_red font_25"><%if schedule>=100 and zt<>"δ��Ч" then%>���<%elseif schedule>=100 then%>����Ա<%elseif EndTime<now() then%>�ѽ�ֹ<%else%>������<%end if%></h3>
                <span class="un_piao">[<%=zt%>]</span>
                <p class="time_bg"><span>��ֹ��<%if EndTime>now() then%><%=Format_Time(EndTime,1)%><%else%>Ͷע��ֹʱ���ѹ�<%end if%></span></p>
            </li>
        </ul>
    </div><%end if%>
	<div class="fqhm_btm_pdt">
<ul class="fqhm_nums faxq_timelist">
  <li class=li_40>
  <p class=" color_333 font_22"><%=allmoney%></p>
  <p class=color_999>�����ܶ�</p></li>
  <li class=other_child>
  <p class=" color_333 font_22"><%if tcSelect=0 then%>�����<%else%><%=tcSelect%>%  <%=tcmoney%><%=setting(56)%><%end if%></p>
  <p class=color_999>���</p></li>
  <li class=other_child>
  <p class=" color_333 font_22"><%=mainpaymoney%><%=setting(56)%></p>
  <p class=color_999>������Ͷע</p></li></ul></div>
	<%if cdate(EndTime)<now() then
	lotterytype1 = y_z(Lotteryid)
	if lotterytype="��������" then 
	  lotterytype1="pk10"
	end if
	sql = "select * from KR_Bank_Back where LotteryName='"&lotterytype&"' and lotteryid='"&lotteryid&"' and (follows like '%����%' or follows like '%Ͷע%' or follows like '%��վ����%')"
    set rsbb = conn.execute(sql)
	'response.write(expectinfo)
      if instr(1,expectinfo,",")>0 then
            expectinfo1=split(expectinfo,",")
            for each p in expectinfo1
                  'sql = "select * from KR_Lottery_Code where Lottery_num='"&p&"' and lottery_Name='"&lotterytype1&"'"
				  sql="select b.Remark,Bonus,a.* from KR_Lottery_Code a,KR_ZhuiHao b where a.Lottery_num='"&p&"' and a.lottery_Name='"&lotterytype1&"' and b.Expect='"&p&"' and b.LotteryID='"&Lotteryid&"'"
				  'response.Write("----"&sql&"<br>")
                  set rsaa = conn.execute(sql)
                  code=""
				  if not rsaa.eof then
					  for i=1 to 14
						if isnull(rsaa("num_info"&+i)) then
							exit for
						end if
						code=code&" "&rsaa("num_info"&+i)
					  next
				  end if
            tage=tage&"<tr align='center' style='color: #000000;font-size: 12px;line-height: 32px;'><td align='left' style='padding-left:7px;'>"&p&"��</td>"
            if code="" then
				tage=tage&"<td>������</td>"
				tage=tage&"<td align='right' style='padding-right:7px;'>-</td>"
            else
				tage=tage&"<td>"&code&"</td>"
				
				tage=tage&"<td align='right' style='padding-right:7px;'>"
				if rsaa("Remark")="δ�н�" then
				tage=tage&"δ�н�"
				elseif rsaa("Remark")<>"0" and rsaa("Remark")<>"������" then
				tage=tage&rsaa("Bonus")
				else
				tage=tage&"-"
				end if
				tage=tage&"</td>"
				
            end if
            'if zt="���н�" or zt="δ�н�" then
	    tage=tage&"</tr>"
            next
      else
            sql = "select * from KR_Lottery_Code where Lottery_num='"&expectinfo&"' and lottery_Name='"&lotterytype1&"'"
            set rsaa = conn.execute(sql)
             for i=1 to 14
                if isnull(rsaa("num_info"&+i)) then
                    exit for
                end if
                code=code&" "& "<i class='redball'>"&rsaa("num_info"&+i)&"</i>"
             next
            code1=code
    end if
    end if
	 
	%>
		<%if cdate(EndTime) < now() then
		if zt="���н�" then%>
		<div id="opcodeInfo" class="fqhm_btm_pdt">
		<dl class="fqhm_person">
			<dt>�н�����</dt><dd><%=code1%></dd>
		</div>
		<div id="opcodeInfo" class="fqhm_btm_pdt">
		<dl class="fqhm_person">
			<dt>�н��ܶ�</dt><dd><%=int(rsbb("win_cost"))%><%=setting(56)%></dd>
		</div>
		<%else%>
		<div id="opcodeInfo" class="fqhm_btm_pdt">
		<dl class="fqhm_person">
			<dt>�������</dt>
			<dd id="hmlist1"><%if instr(1,expectinfo,",")>0 then%><em>�ܿ�������(<%=ubound(expectinfo1)+1%>)��</em><em style="float:right;" class="color_blue" id="showtxt1">������ϸ�������</em><%else%><em><%=code1%></em><%end if%></dd>
		</dl>
		</div>
		<%end if 
		set rsaa=nothing
		set rsbb=nothing
		end if%>
        <div id="content1" style="display:none;">
        <table style="width:100%;"><tr align="center" style="color: #999;font-size: 12px;line-height: 32px;">
          <td align="left" style="padding-left:7px;">�����ں�</td>
          <td>��������</td>
          <td align="right" style="padding-right:7px;">�н�<%=setting(56)%></td>
        </tr><%=tage%></table>
        </div>
	<div class="fqhm_btm_pdt">
		<dl class="fqhm_person">
			<dt>������ϸ</dt>
			<dd><%if iszhuihao=1 then%><%if istop=1 then%>׷��ֹͣ<%else%>׷�Ų�ֹͣ<%end if%><%else%><%=allmoney/2/beishu%>ע��<%=beishu%>��<%end if%></dd>
		</dl>
	</div>	
	<div class="fqhm_btm_pdt">
		<dl class="fqhm_person">
			<dt>��������</dt>
			<dd><%if isshow=0 then%>
<%=Codes%><%elseif isshow=1 then%><%if EndTime < now() or expectinfo<>qh then%>
<%=Codes%><%else%>
�������ܣ���ֹ�󹫿�<%end if%><%elseif isshow=2 then%><%
sql="select count(*) as num from kr_bank_back where lotteryid='"&lotteryid&"' and username='"&session("un")&"'"
tr=conn.execute(sql)
if tr("num")>0 then%>
<%=Codes%><%else%>
�������ܣ��������˿ɼ�<%end if%><%elseif isshow=3 then
if session("un")=UserName then
response.Write(Codes)
else
response.Write("������ȫ����")
end if
end if%></dd>
		</dl>
    </div>
	<div class="fqhm_btm_pdt">
		<dl class="fqhm_person">
        	<dt>�������</dt>
            <dd id="hmlist">�ܲ�������(<%=allperson%>)��<em style="float:right;" class="color_blue" id="showtxt">���غ����¼</em></dd>
        </dl>
         <!--�������-->
		<div class="faxq_hideinfo" id="content" style="display:none;">
<ul class="hmcy_list hmcy_title ">
  <li>�û���</li>
  <li>Ͷע����</li>
  <li>Ͷע<%=setting(56)%></li>
  <%if zt="���н�" then%>
  <li>�н�<%=setting(56)%></li>
  <%else%>
  <li>����ʱ��</li>
  <%end if%>	
</ul><%
sql = "select * from KR_Bank_Back where LotteryName='"&lotterytype&"' and lotteryid='"&lotteryid&"' and (follows like '%����%' or follows like '%Ͷע%' or follows like '%��վ����%')"
set rs1 = conn.execute(sql)
fens = 0
do while not rs1.eof
fens = 0+fens+rs1("hnumber")
anumber=rs1("anumber")
hnumber=rs1("hnumber")
%>
<ul class=hmcy_list>
  <li><%=left(rs1("username"),2)&"***"%></li>
  <li><%=rs1("hnumber")%>��</li>
  <li><%=formatnumber(rs1("hnumber")*onemoney,2,-1)%><%=setting(56)%></li>
  <%if zt="���н�" then%>
  <li><%=rs1("win_cost_get")%><%=setting(56)%></li>
  <%else%>
  <li><%=Format_Time(rs1("addtime"),3)%></li>
  <%end if%>
</ul><%
rs1.movenext
loop
set rs1 = nothing
%>
        </div>
    </div>
    <div class="fqhm_btm_pdt" id="fa_content">
		<dl class=" faxq_infolist2">
				<dt>��������</dt>
				<dd>
					<p>����󽱵����ڴ�����һ��Բ��<br /></p>
				</dd>
		</dl>
	</div>
    <div class="fqhm_btm_pdt">
		<dl class=" faxq_infolist2">
			<dt>�������</dt>
			<dd>
				<p class="font_12"><%=Lotteryid%></p>
			</dd>
		</dl>
    </div>
    <div class="fqhm_btm_pdt">
		<dl class=" faxq_infolist2">
			<dt>����ʱ��</dt>
			<dd>
				<p class="font_12"><%=AddTime%></p>
			</dd>
		</dl>
	</div>
<%if ishm=1 and session("un")=UserName then%>
    <div class="fqhm_btm_pdt">
		<dl class=" faxq_infolist2">
			<dt>��Ҫ����</dt>
			<dd>
                <p><em class="bg_gray"><%if cdate(EndTime) < now() then%>�ѽ�ֹͶע<%else%><% if isreturn<>1 then %><% if cint(schedule) < 50 then %>
				<a id="WithdrawUser" href="javascript:void 0">�Ը÷�������</a><%else%>
				�������ȳ���50%�޷�����<%end if%><%else%>
				�ѳ���<%end if%><%end if%></em></p>
			</dd>
		</dl>
	</div><%end if%>
</div>
<%if ishm=1 then%>
<form name="project_form" action="" method="POST">
<div class="faxq_foot">
	<div class="fqhm_btm_pdt">
			<input type="tel" id="buynum" name="buynum" class="auto_ipt" tabindex="1" value="1"><span> �ݣ�<em class="color_red" id="permoney"></em><%=setting(56)%>  ��������Ͷע<span class="color_red"><%=manyuan%></span>��</span>
	</div>
	<div class="num_box_sure fqhm_btm_pd4 fhm_btn1">
		<span class="fhm_btn hm_btn" id="addproject" href="javascript:void 0">�������</span>
</div>
</div>
</form>
<form id="form1">
<input name="expect" id="expect" value="<%=qh%>" type="hidden">
<input name="pid" id="pid" value="<%=lotteryid%>" type="hidden">
<input name="cid" id="cid" value="<%=id%>" type="hidden">
<input name="anumber" id="anumber" value="<%=anumber%>" type="hidden">
<input name="senumber" id="senumber" value="<%=manyuan%>" type="hidden">
<input name="onemoney" id="onemoney" value="<%=onemoney%>" type="hidden">
</form>
<%end if%>
<%OpenWin()%>
<script language="javascript" type="text/javascript" src="/JS/ViewPath.js" ></script>
<script>
var t;
$(document).ready(function() {
	drawProcess();
i = 0;
t = setInterval("addNum()",35);
});
function addNum() {
	if(i<=<%=schedule-1%>){
		i++;
		$('canvas.process').text(i+"%");drawProcess();
	}else{
		clearInterval(t);
	}
}
function drawProcess() {  
    $('canvas.process').each(function() {
        var text = $(this).text();
        var process = text.substring(0, text.length-1);   
        var canvas = this;
		var w = 80;
		var h = 80;
		canvas.width = w*2;
		canvas.height = w*2;
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, w*2, h*2);  
        context.beginPath();  
        context.moveTo(w, h);  
        context.arc(w, h, w, 0, Math.PI * 2, false);  
        context.closePath();  
        context.fillStyle = '#ddd';  
        context.fill();  
        context.beginPath();  

        context.moveTo(w, h);    
        context.arc(w, h, w, Math.PI*1.5, 10000*(Math.PI * 1.5 + Math.PI * 2 * process / 100)/9999, false);  
        context.closePath();  
        context.fillStyle = '#FF0206';  
        context.fill();   
        context.beginPath();  
        context.moveTo(w, h);  
        context.arc(w, h, w-10, 0, Math.PI * 2, true);  
        context.closePath();  
        context.fillStyle = 'rgba(255,255,255,1)';  
        context.fill();  
        context.beginPath();  
        context.arc(w, h, w-12, 0, Math.PI * 2, true);  
        context.closePath();  
        context.strokeStyle = '#ddd';  
        context.stroke();  
        context.font = "bold 25pt Arial";  
        context.fillStyle = '#FF0206';  
        context.textAlign = 'center';  
        context.textBaseline = 'middle';  
        context.moveTo(w, h);  
        context.fillText(text, w, h);  
    });
}
</script>
</body>
</html>
