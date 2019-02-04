<!--#include file="../Conn.asp"-->
<!DOCTYPE html>
<html><head><meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>-历史开奖</title>
<meta charset="GBK">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="format-detection" content="telephone=no">
<meta http-equiv="cleartype" content="on"> 
<link rel="apple-touch-icon-precomposed" href="../Images/Public/t01b0f56b331d358632.png">
<link rel="apple-touch-icon" href="../Images/Public/t01b0f56b331d358632.png">
<link rel="stylesheet" href="../Css/public.css">
<link rel="stylesheet" href="../Css/mobile01.css">

	<link href="/Css/basic.css" rel="stylesheet">
	<link href="/trade/css/jczq/style.css" rel="stylesheet">
<script src="../JS/Jquery-1.7.2.Min.js"></script><style>.gmu-media-detect{-webkit-transition: width 0.001ms; width: 0; position: absolute; top: -10000px;}
@media screen and (width: 1920px) { #gmu-media-detect0 { width: 1px; } } 
body{ background:#FFFFFF;}
</style>
</head><body>

<div class="head"><h2>竞彩足球--历史开奖</h2><a href="javascript:history.go(-1)" class="btn-qgkj" id="sourceUrl"><span><em></em></span>返回</a></div>
<div class="main">
	<div class="lot_kj_title" style="height:42px; line-height:22px;"><span class="span1" style="color:#CC0000;">赛事</span><span style="color:#CC0000;">对阵</span><span style="color:#CC0000;">赛果</span></div>
<%
set rs = Server.CreateObject("ADODB.RecordSet")
sql = "select top 300 * from KR_Football_Code order by left(OrderId,8) desc,right(OrderId,3)"
rs.open sql,conn,1
do while not rs.eof
irs=irs+1
sj=left(rs("orderid"),8)
sjf=left(rs("orderid"),4)&"-"&mid(rs("orderid"),5,2)&"-"&mid(rs("orderid"),7,2)
sjtowd=wd(sjf)
if sj<>sjt then
	if irs>1 then
	%>
        </div>
    </div>
	<%end if%>
    <div class="lot_context">
        <div class="lot_open"><%=sjf%>（星期<%=sjtowd%>）<span></span></div>
        <div class="lot_view lot_kj_title">
<%
else
'response.Write("<br>")
end if
response.Write("<hr style=""height:1px;border:none;border-top:1px solid #efefef;"" />")
%>
        	<span class="span1">
				<%=rs("cup")%>
            	<br>
                周<%=sjtowd&right(rs("orderid"),3)%>
                <br>
                <%=FormatDateTime(rs("DateTime"),4)%>
                <br>&nbsp;
            </span>
            <span>
            	<%
				'-1~4.72 |-1~2.19     |-1:-1~7.00     |1:2~12.00  |3~3.25
				'~       |1~1.75      |1:1~1.24       |4:0~7.50   |4~4.00
				'胜平负   | 让球胜平负 ｜半全场胜平负 ｜比分      | 总进球
				'胜平负 让球胜平负 比分 总进球 半全场胜平负
				plan=rs("plan")
				plana=split(plan,"|")
				planl=ubound(plana)
				sg1=""
				sg2=""
				for i=0 to planl
					if i>0 then sg1=sg1&"<br>":sg2=sg2&"<br>"
					planat=split(plana(i),"~")
					planat0=planat(0)
					planat1=planat(1)
					if trim(planat0)="" then planat0="-"
					if trim(planat1)="" then planat1="-"
					if i=3 then
						if planat0="1" then planat0="胜其它"
						if planat0="0" then planat0="平其它"
						if planat0="-1" then planat0="负其它"
						bf="<font color=red>"&planat0&"</font>"
						sg1=sg1&planat0
					elseif i=4 then
						sg1=sg1&planat0&"球"
					else
						sg1=sg1&rep(planat0)
					end if
					sg2=sg2&planat1
				next
				
				dza=split(rs("team"),",")
				response.Write(dza(0)&"（主）<br>"&bf&"<br>"&dza(1)&"(客)<br>&nbsp;")
				%>
            </span>
            <span class="span2">
            	<%=sg1%>
            </span>
            <span class="span2">
            	<%=sg2%>
            </span>
<%
sjt=sj
rs.movenext
loop
rs.close
set rs=nothing

function wd(str)
	wdt=weekday(str)
	if wdt=1 then wd="天"
	if wdt=2 then wd="一"
	if wdt=3 then wd="二"
	if wdt=4 then wd="三"
	if wdt=5 then wd="四"
	if wdt=6 then wd="五"
	if wdt=7 then wd="六"
end function
function rep(str)
	rep=""
	rep=replace(str,"-1","负")
	rep=replace(rep,"1","胜")
	rep=replace(rep,"0","平")
end function
%>
        </div>
     </div>
</div>
<div style="height:80px;"></div>

<div class="btm-bar"><div class="btm-c"><a href="/Trade/jczq/" class="btn btn100">投注竞彩足球</a></div></div>
<script type="text/javascript">
var t;
$(document).ready(function() {
	$(".lot_context").eq(0).click();
});
		$(".lot_context").click(function(){
			var $this = $(this);
			var h = $this.find('.lot_view').innerHeight();
//console.log(h);
			if($this.hasClass('lot_view_show')){
				$this.removeClass('lot_view_show').css("height","-="+h+"px").find(">.lot_open span").css("transform","rotate(0)");
			}else{
				$this.addClass('lot_view_show').css("height","+="+h+"px").find(">.lot_open span").css("transform","rotate(450deg)");
			}
		});
</script>
</body></html>