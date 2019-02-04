<!--#include file="../Conn.asp"-->
<!--#include file="../Include/KR.CommonCls.asp"--><!doctype html>
<head>
<title>积分明细-<%=Setting(0)%></title>
<meta content="游戏，体育游戏，福利游戏，足彩，竞彩，游戏开奖，游戏合玩，走势图，游戏分析，过关统计" name="keywords">
<meta content="<%=Setting(0)%>是手机上最好的投注平台，10年游戏金牌服务经验，为游戏朋友提供安全的手机游戏投注、游戏合玩服务、游戏资讯" name="description">
<meta charset="GB2312">
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1, user-scalable=0;" name="viewport" />
<meta http-equiv="Content-Type" content="text/html; charset=GB2312" />
<meta name="format-detection" content="telephone=no" />
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<link href="/Css/Basic.css" rel="stylesheet">
<link href="/Css/User.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="/JS/My97DatePicker/skin/WdatePicker.css" />
<script type="text/javascript" src="/JS/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="/JS/Utility.js"></script>
<script type="text/javascript" src="/JS/My97DatePicker/WdatePicker.js"></script>
</head>
<body>
<%checksssion()%><%
u = request("u")
select case u
case "Main"  call Main()
case "Convert"  call Convert()
case "ConvertSave"  call ConvertSave()
case else
call Main()
end select
Sub Main()
%>

<div class="header header_2">
	<div class="top">
		<a href="index.html" class="back">返回</a>
		<h1>积分明细</h1>
		<a href="Point.html?u=Convert" class="zc_btn">兑换</a>
	</div>
</div>

<div class="wap_h" id="list_data" style="margin-top:55px;">
	<div class="ex_record_box">
        <div id="div_tz" class="brts_box">
            <div class="filter_s" id="showpro">
            <p class="time_txt">
                <select style="font-size:16px;height:33px;vertical-align:-1px;" name="Pointse">
                	<option selected value="">全部</option>
                	<option value="1">登录赠送积分</option>
                	<option value="2">投注赠送积分</option>
                	<option value="3">中奖赠送积分</option>
                	<option value="4">充值赠送积分</option>
                	<option value="5">系统增加积分</option>
                    <option value="6">系统扣除积分</option>
                	<option value="7">撤单扣除积分</option>
                	<option value="8">积分兑换</option>
                	<option value="9">其它积分</option>

                </select>&nbsp;&nbsp;<input type="text" value="<%=Format_Time(now(),2)%>" class="basic_txt gray" id="beginday" name="beginday" onFocus="WdatePicker({dateFmt:'yyyy-MM-dd'})"><a id="search" class="uc_aut_btn blue_btn" href="javascript:;">查询</a></p>
                <table width="100%" cellspacing="0" cellpadding="0" border="0">

					<colgroup>
                        <col width="25%">
                        <col width="25%">
                        <col width="25%">
                        <col width="25%">
                    </colgroup>
                    <thead>
                    	<tr class="brts_tit t_c">
                            <td>收入</td>
                            <td>支出</td>
                            <td>日期</td>
                            <td>说明</td>
                          </tr>
                    </thead>
                </table> 
            <ul class="brts_list">
            </ul>
            </div>
            <div class="my_page" style="height:40px;overflow:hidden">
                <div class="page" id="page_wrapper">
                </div>
            </div>
        </div>
    </div>

    <script language="javascript" type="text/javascript">
		var sel ={
			Pointse:"",
			beginday:""
		}
		$(function(){
			sel.beginday = $("#beginday").val();
			sel.Pointse = $("select[name=Pointse] > option:selected").val();
			page.pagesize = 10
			$("#search").click(function(){
				sel.beginday = $("#beginday").val();
				sel.Pointse = $("select[name=Pointse] > option:selected").val();
				setpageindex();
			})
			setpageindex();
		})
		function setpageindex(pageOne){
			$("#list_data > div.brts_box").show();
			$.ajax({
				type: "POST",
				url: "ajax_sel.html",
				data: {
					action:"jflist",
					Pointse:sel.Pointse,
					beginday:sel.beginday,
					page:pageOne || page.pageindex,
					pagesize:page.pagesize
				},
				dataType:"xml",
				success: function(data){
					var err = $(data).find("err");
					if($(err).attr("type")=="-1") //未登录
					{
						$("#showpro> ul").empty();
						var tr = ""
						tr += "<li>您还没有登录，请先<a onclick='parent.alertdiv.login()' title='' href='javascript:void 0'>登录</a>！</li>"
						$("#showpro> > ul").html(tr)
						
						page.pageindex =0
						page.countpage = 0
						page.countrs = 0
						createpage();
					}
					else if($(err).attr("type")=="1")
					{
						
						if($(data).find("row").length>0)
						{
							
							$("#showpro> ul").empty();
							var tr = ""
							$(data).find("row").each(function(index){
							if($(this).attr("i")%2==0)
							{
								tr += "<li class='sel'>"
							}
							else
							{
								tr += "<li class='even'>"
							}
								tr += "<div class='zc t_c'>"+$(this).attr("zc")+"分</div><div class='sr t_c'>"+$(this).attr("sr")+"分</div><div class='dt t_c'>"+$(this).attr("dt")+"</div><div class='bz t_c'>"+$(this).attr("bz")+"</div>"
							})
							
							$("#showpro > ul").html(tr)
							var count = $(data).find("count");
							$("#zsr").text(count.attr("zsr"));
							$("#zzc").text(count.attr("zzc"));
							$("#zyl").text(count.attr("zyl"));
							
							var pageinfo = $(data).find("page");
							page.pagesize = Number(pageinfo.attr("pagesize"))
							page.pageindex = Number(pageinfo.attr("pageindex"))
							page.countpage = Number(pageinfo.attr("countpage"))
							page.countrs = Number(pageinfo.attr("countrs"))
							createpage()
						}
						else
						{
							$("#showpro > ul").empty();
							var tr = ""
							tr += "<li>抱歉！没有找到符合条件的结果！</li>"
							$("#showpro > ul").html(tr)
							$("#zsr").text("￥0.00");
							$("#zzc").text("￥0.00");
							$("#zyl").text("￥0.00");
							page.pageindex =0
							page.countpage = 0
							page.countrs = 0
							createpage()
						}
					}
					else
					{
						
						if($(err).attr("msg").length>0)
						{
							parent.alertdiv.alert($(err).attr("msg"));
						}
						if($(err).attr("url").length>0)
						{
							parent.location.href = $(err).attr("url");
						}
					}
				},
				error: function (jqXHR, textStatus, errorThrown) {
				},
				complete: function (jqXHR, textStatus) {
					$("#list_data > div.brts_box").hide();
				}
			});
		}
		
    </script><%
end Sub
Sub Convert
sql="select * from KR_User where username='"&session("un")&"'"
set rs=conn.execute(sql)
Point=rs("Point")
set rs = nothing
%>
<SCRIPT language=javascript>
function check(form){
	if(form.Point.value=="")
	{
		alert("请输入你要兑换的积分！");
		form.Point.focus();
		return false;
	}
	if (form.Point.value><%=Point%>)
	{
		alert('兑换的积分大于可兑换积分<%=Point%>分');
		return false
	}
	return true;
}
</SCRIPT>
<div class="header">
	<div class="top">
		<a href="index.html" class="back">返回</a>
		<h1>积分兑换</h1>
	</div>
</div>
<div class="uc_wap">
<div class="login"> 
<form name=form1 onSubmit="return check(this);" action='Point.html?u=ConvertSave' method='post'>
	<div class="login_list">
		<ul>
			<li>
				<div class="f_box bd_box">
					<em>可用积分</em>
					<span class="txt color_black"><%=Point%>分</span>
				</div>
			</li>
			<li>
				<div class="f_box bd_box">
					<em>可换<%=setting(56)%></em>
					<span class="txt color_black"><%=Point/Setting(75)%><%=setting(56)%></span>
				</div>
			</li>
			<li>
				<div class="f_box bd_box">
					<em>兑换积分</em>
					<input id="Point" name="Point" type="text" class="txt color_black" placeholder="请输入您要兑换的积分" onKeyUp="this.value=this.value.replace(/^\D*(\d*(?:\.\d{0,2})?).*$/g, '$1');" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/^\D*(\d*(?:\.\d{0,2})?).*$/g, '$1'));">
				</div>
			</li>
		</ul>
	</div>
 	<input type="submit" value="立即兑换" class="login_btn" />
</form>
</div>
</div>
<%
end Sub
Sub ConvertSave
sql="select * from KR_User where username='"&session("un")&"'"
set rs=conn.execute(sql)
dqjf=rs("Point")
set rs=nothing
jfdh=KR(request.Form("Point"))
if clng(jfdh)>dqjf then
response.write"<script>alert('兑换的积分大于可兑换积分"&dqjf&"分！');document.location.href='?u=Convert'</script>"
else
dhmoney=jfdh/Setting(75)
sql = "update KR_User set uermoney=uermoney+'"&dhmoney&"',money=money+'"&dhmoney&"',Point=Point-'"&jfdh&"' where username='"&session("un")&"'"			
conn.execute(sql)
sql="select * from KR_User where username='"&session("un")&"'"
set lsm=conn.execute(sql)
jf=lsm("Point")
ye=lsm("UerMoney")
lotteryid="DH"&getDateStr()
OrderID="DH"&getDateStr()
sql = "insert into KR_Point (OrderID,UserName,Expense,Point,Explain) values('"&OrderID&"','"&session("un")&"','"&jfdh&"','"&jf&"','积分兑换')"
conn.execute(sql)
sql = "insert into KR_Bank_Back(username,LotteryName,LotteryType,back_money2,b_after,lotteryid,follows) values('"&session("un")&"','积分兑换','充值','"&dhmoney&"','"&ye&"','"&lotteryid&"','积分兑换:"&lotteryid&"')"
conn.execute(sql)
response.write"<script>alert('恭喜您积分兑换成功！');document.location.href='?u=Convert'</script>"
end if
end Sub
%>
<!--#include file="../dh.asp"-->
</body>
</html>