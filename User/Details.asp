<!--#include file="../Conn.asp"-->
<!--#include file="../Include/KR.CommonCls.asp"--><!doctype html>
<head>
<title>资金明细-<%=Setting(0)%></title>
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
<%checksssion()%>
<div class="head"><h2 id="navtit">资金明细</h2><a href="javascript:history.go(-1);" class="btn-qgkj" id="sourceUrl"><span><em></em></span>返回</a></div>
</div>
<div class="wap_h" id="list_data">
	<div class="ex_record_box">
        <div id="div_tz" class="brts_box">
            <div class="filter_s" id="showpro">
            <div align="center">
            <p class="time_txt">
                <select style="font-size:16px;height:33px;vertical-align:-1px;" name="busisort">
                	<option selected="" value="0">交易类型</option>
                	<option value="1">投注游戏</option>
                	<option value="2">方案保底</option>
                	<option value="3">方案撤单</option>
                	<option value="4">在线充值</option>
                	<option value="5">奖金兑换</option>
                	<option value="6">系统充值</option>
                	<option value="7">系统扣除</option>
                	<option value="8">注册赠送</option>
                	<option value="9">方案退保</option>
                	<option value="10">中奖派奖</option>
                	<option value="11">代理返点</option>
                	<option value="12">保底冻结</option>
   </select>&nbsp;&nbsp;<input type="text" value="<%=Format_Time(now(),2)%>" class="basic_txt" id="beginday" name="beginday" onFocus="WdatePicker({dateFmt:'yyyy-MM-dd',onpicked:function(){do_search();}})"></p>
                </div><table width="100%" cellspacing="0" cellpadding="0" border="0">
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
            <div class="my_page">
            <div align="center" style="margin:10px 0 20px 0;display:block" id="jiangbb"><a id="jiang5" href="javascript:do_search();"><div id="jiang4" class="jiang4"><font color="#FBF8F8" id="jiang3">点击加载更多...</font></div></a></div>
            </div>
        </div>
    </div>
<div class="bank_info ">
<p>查询说明</p>
<p>1.您可以查询您的账户最近3个月内的账户明细。</p>
<p>2.如果您在线充值，银行账户钱扣了，<%=Setting(0)%>账户还没有加上<%=Setting(56)%>，请及时与我们联系，我们将第一时间为您处理！</p>
<p>3.如需要查询全部明细，请联系网站客服：<%=Setting(42)%>。</p>
</div>
    <script language="javascript" type="text/javascript">
		var sel ={
			busisort:"",
			beginday:"",
			tnumber:10,
		}
		$(function(){
			d = <%=d%>
			page.pagesize = <%=Setting(19)%>
			$("select[name='busisort']").change(function(){
				sel.tnumber=10;do_search();
			})
			$("#beginday").click(function(){
				sel.tnumber=10;
			})
			do_search();
		})
		function do_search(){
			sel.beginday = $("#beginday").val();
			sel.busisort = $("select[name=busisort] > option:selected").val();
			$("#list_data > div.brts_box").show();
			$.ajax({
				type: "POST",
				url: "ajax_sel.html",
				data: {
					action:"mxlist",
					busisort:sel.busisort,   //交易类型
					beginday:sel.beginday,
					d:d,
					page:page.pageindex,
					pagesize:page.pagesize,
					tnumber:sel.tnumber,
				},
				dataType:"xml",
				success: function(data){
					var err = $(data).find("err"),err1 = $(data).find("row");
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
						if(err1.length<1) document.getElementById("jiang3").style.display="none"; else{
						document.getElementById("jiang3").style.display="block";document.getElementById("jiang5").href="javascript:do_search();";
						if(err1.length<sel.tnumber)
						{
							$("#jiang3").html("已加载完毕")	;
							document.getElementById("jiang4").style.background="#B3B3B3";sel.tnumber=10;
							$("#jiang5").removeAttr("href");
						}else 
						{
							$("#jiang3").html("点击加载更多...");document.getElementById("jiang4").style.background="#FB080C";
							sel.tnumber=sel.tnumber+10;
						}}
						
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
								tr += "<div class='zc t_c'>"+$(this).attr("zc")+"</div><div class='sr t_c'>"+$(this).attr("sr")+"</div><div class='dt t_c'>"+$(this).attr("dt")+"</div><div class='bz t_c'>"+$(this).attr("bz")+"</div>"
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
		
    </script>
<!--#include file="../dh.asp"-->
</body>
</html>