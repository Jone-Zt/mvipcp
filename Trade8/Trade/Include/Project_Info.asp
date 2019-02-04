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
response.Write("<script>alert('该方案不存在！');history.go(-1)</script>")
end if
%>
<!--#include file="KR.CommonCls.asp"-->
<%
if lotterytype="双色球" or lotterytype="福彩3D" or lotterytype="七乐彩" or lotterytype="15选5" or lotterytype="大乐透" or lotterytype="排列三" or lotterytype="排列五" or lotterytype="七星彩" then
	sql = "select * from KR_Lottery_Issue where Lottery_Name='"&lotterytype&"'"
	set rs = conn.execute(sql)
	qh=rs("Lottery_Num")
	EndTime=rs("EndTime")
	set rs = nothing
elseif lotterytype="北京赛车" then 
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
<title><%=lotterytype%>方案详情-<%=Setting(0)%></title>
<meta charset="GB2312">
<meta http-equiv="Content-Type" content="text/html; charset=GB2312" />
<meta name="format-detection" content="telephone=no" />
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="keywords" content="<%=lotterytype%>开奖_<%=lotterytype%>号码预测推荐_<%=lotterytype%>走势图_<%=Setting(0)%>触屏版"/>
<meta name="description" content="<%=Setting(0)%>是手机上最好的投注平台，10年游戏金牌服务经验，为游戏朋友提供安全的手机游戏投注、游戏合玩服务、游戏资讯"/>
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
	 <div class="head"><h2 onClick="javascript:upcss();" id="navtit"><em id="jiangaa"><h1>方案详情</h1></em></h2><a href="javascript:history.go(-1)" class="btn-qgkj" id="sourceUrl"><span><em></em></span>返回</a>
<a  class="btn-menu" href="/User/Reg/">注册</a></div>
<div class="wap_h faxq_wap"<%if instr(zt,"中奖")>0 then%> style="background:url(/images/<%if zt="已中奖" then response.write("1") else response.write("2")%>.png) right bottom no-repeat;"<%end if%>>
	<div class="fqhm_btm_pdt">
		<h3 class="faxq_title"><%=lotterytype%></h3> 
        <p class="faxq_s_num">第<span><%=expectinfo%></span>期 <span>复式投注</span></p>   
    </div>
	<div class="fqhm_btm_pdt">
    	<dl class="fqhm_person">
        	<dt>发起人</dt>
            <dd>
				<em class="color_333" id="fa_username"><%=left(username,2)&"***"%></em>
				<span id="fa_level"><span>　等级：<font id="blevel">--</font>　战绩：<%
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
		x1.innerHTML="已满员";
		x1.style.background="#C7C7C7";
		x1.style.border="#C7C7C7";	
	}
	else if(endtime<timea)
	{
		x1.innerHTML="已截止";
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
<font style="margin-left:-1px" class='color_ff9900 font_b'><em>保</em><%=Formatnumber(baodijd,2,-1)%>%</font>
<%else%>
<font style="margin-left:-7px" class='color_ff9900 font_b'>未保底</font>
<%end if%>
<canvas class='process' style='width:80px;height:80px'><%=schedule%>%</canvas>
				</div>
            </li>
            <li class="li_60">
            	<h3 class=" color_red font_25"><%if schedule>=100 and zt<>"未生效" then%>完成<%elseif schedule>=100 then%>已满员<%elseif EndTime<now() then%>已截止<%else%>进行中<%end if%></h3>
                <span class="un_piao">[<%=zt%>]</span>
                <p class="time_bg"><span>截止：<%if EndTime>now() then%><%=Format_Time(EndTime,1)%><%else%>投注截止时间已过<%end if%></span></p>
            </li>
        </ul>
    </div><%end if%>
	<div class="fqhm_btm_pdt">
<ul class="fqhm_nums faxq_timelist">
  <li class=li_40>
  <p class=" color_333 font_22"><%=allmoney%></p>
  <p class=color_999>方案总额</p></li>
  <li class=other_child>
  <p class=" color_333 font_22"><%if tcSelect=0 then%>无提成<%else%><%=tcSelect%>%  <%=tcmoney%><%=setting(56)%><%end if%></p>
  <p class=color_999>提成</p></li>
  <li class=other_child>
  <p class=" color_333 font_22"><%=mainpaymoney%><%=setting(56)%></p>
  <p class=color_999>发起人投注</p></li></ul></div>
	<%if cdate(EndTime)<now() then
	lotterytype1 = y_z(Lotteryid)
	if lotterytype="北京赛车" then 
	  lotterytype1="pk10"
	end if
	sql = "select * from KR_Bank_Back where LotteryName='"&lotterytype&"' and lotteryid='"&lotteryid&"' and (follows like '%合玩%' or follows like '%投注%' or follows like '%网站保底%')"
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
            tage=tage&"<tr align='center' style='color: #000000;font-size: 12px;line-height: 32px;'><td align='left' style='padding-left:7px;'>"&p&"期</td>"
            if code="" then
				tage=tage&"<td>无数据</td>"
				tage=tage&"<td align='right' style='padding-right:7px;'>-</td>"
            else
				tage=tage&"<td>"&code&"</td>"
				
				tage=tage&"<td align='right' style='padding-right:7px;'>"
				if rsaa("Remark")="未中奖" then
				tage=tage&"未中奖"
				elseif rsaa("Remark")<>"0" and rsaa("Remark")<>"进行中" then
				tage=tage&rsaa("Bonus")
				else
				tage=tage&"-"
				end if
				tage=tage&"</td>"
				
            end if
            'if zt="已中奖" or zt="未中奖" then
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
		if zt="已中奖" then%>
		<div id="opcodeInfo" class="fqhm_btm_pdt">
		<dl class="fqhm_person">
			<dt>中奖号码</dt><dd><%=code1%></dd>
		</div>
		<div id="opcodeInfo" class="fqhm_btm_pdt">
		<dl class="fqhm_person">
			<dt>中奖总额</dt><dd><%=int(rsbb("win_cost"))%><%=setting(56)%></dd>
		</div>
		<%else%>
		<div id="opcodeInfo" class="fqhm_btm_pdt">
		<dl class="fqhm_person">
			<dt>开奖结果</dt>
			<dd id="hmlist1"><%if instr(1,expectinfo,",")>0 then%><em>总开奖期数(<%=ubound(expectinfo1)+1%>)期</em><em style="float:right;" class="color_blue" id="showtxt1">隐藏详细开奖结果</em><%else%><em><%=code1%></em><%end if%></dd>
		</dl>
		</div>
		<%end if 
		set rsaa=nothing
		set rsbb=nothing
		end if%>
        <div id="content1" style="display:none;">
        <table style="width:100%;"><tr align="center" style="color: #999;font-size: 12px;line-height: 32px;">
          <td align="left" style="padding-left:7px;">开奖期号</td>
          <td>开奖号码</td>
          <td align="right" style="padding-right:7px;">中奖<%=setting(56)%></td>
        </tr><%=tage%></table>
        </div>
	<div class="fqhm_btm_pdt">
		<dl class="fqhm_person">
			<dt>方案明细</dt>
			<dd><%if iszhuihao=1 then%><%if istop=1 then%>追号停止<%else%>追号不停止<%end if%><%else%><%=allmoney/2/beishu%>注，<%=beishu%>倍<%end if%></dd>
		</dl>
	</div>	
	<div class="fqhm_btm_pdt">
		<dl class="fqhm_person">
			<dt>方案内容</dt>
			<dd><%if isshow=0 then%>
<%=Codes%><%elseif isshow=1 then%><%if EndTime < now() or expectinfo<>qh then%>
<%=Codes%><%else%>
方案保密，截止后公开<%end if%><%elseif isshow=2 then%><%
sql="select count(*) as num from kr_bank_back where lotteryid='"&lotteryid&"' and username='"&session("un")&"'"
tr=conn.execute(sql)
if tr("num")>0 then%>
<%=Codes%><%else%>
方案保密，仅跟单人可见<%end if%><%elseif isshow=3 then
if session("un")=UserName then
response.Write(Codes)
else
response.Write("方案完全保密")
end if
end if%></dd>
		</dl>
    </div>
	<div class="fqhm_btm_pdt">
		<dl class="fqhm_person">
        	<dt>合玩参与</dt>
            <dd id="hmlist">总参与人数(<%=allperson%>)人<em style="float:right;" class="color_blue" id="showtxt">隐藏合玩记录</em></dd>
        </dl>
         <!--合玩参与-->
		<div class="faxq_hideinfo" id="content" style="display:none;">
<ul class="hmcy_list hmcy_title ">
  <li>用户名</li>
  <li>投注份数</li>
  <li>投注<%=setting(56)%></li>
  <%if zt="已中奖" then%>
  <li>中奖<%=setting(56)%></li>
  <%else%>
  <li>参与时间</li>
  <%end if%>	
</ul><%
sql = "select * from KR_Bank_Back where LotteryName='"&lotterytype&"' and lotteryid='"&lotteryid&"' and (follows like '%合玩%' or follows like '%投注%' or follows like '%网站保底%')"
set rs1 = conn.execute(sql)
fens = 0
do while not rs1.eof
fens = 0+fens+rs1("hnumber")
anumber=rs1("anumber")
hnumber=rs1("hnumber")
%>
<ul class=hmcy_list>
  <li><%=left(rs1("username"),2)&"***"%></li>
  <li><%=rs1("hnumber")%>份</li>
  <li><%=formatnumber(rs1("hnumber")*onemoney,2,-1)%><%=setting(56)%></li>
  <%if zt="已中奖" then%>
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
				<dt>方案宣传</dt>
				<dd>
					<p>百万大奖得主期待和您一起圆梦<br /></p>
				</dd>
		</dl>
	</div>
    <div class="fqhm_btm_pdt">
		<dl class=" faxq_infolist2">
			<dt>方案编号</dt>
			<dd>
				<p class="font_12"><%=Lotteryid%></p>
			</dd>
		</dl>
    </div>
    <div class="fqhm_btm_pdt">
		<dl class=" faxq_infolist2">
			<dt>发起时间</dt>
			<dd>
				<p class="font_12"><%=AddTime%></p>
			</dd>
		</dl>
	</div>
<%if ishm=1 and session("un")=UserName then%>
    <div class="fqhm_btm_pdt">
		<dl class=" faxq_infolist2">
			<dt>我要撤单</dt>
			<dd>
                <p><em class="bg_gray"><%if cdate(EndTime) < now() then%>已截止投注<%else%><% if isreturn<>1 then %><% if cint(schedule) < 50 then %>
				<a id="WithdrawUser" href="javascript:void 0">对该方案撤单</a><%else%>
				方案进度超过50%无法撤单<%end if%><%else%>
				已撤单<%end if%><%end if%></em></p>
			</dd>
		</dl>
	</div><%end if%>
</div>
<%if ishm=1 then%>
<form name="project_form" action="" method="POST">
<div class="faxq_foot">
	<div class="fqhm_btm_pdt">
			<input type="tel" id="buynum" name="buynum" class="auto_ipt" tabindex="1" value="1"><span> 份，<em class="color_red" id="permoney"></em><%=setting(56)%>  您还可以投注<span class="color_red"><%=manyuan%></span>份</span>
	</div>
	<div class="num_box_sure fqhm_btm_pd4 fhm_btn1">
		<span class="fhm_btn hm_btn" id="addproject" href="javascript:void 0">参与合玩</span>
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
