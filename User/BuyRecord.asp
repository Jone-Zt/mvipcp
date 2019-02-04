<!--#include file="../Conn.asp"-->
<!--#include file="../Include/KR.CommonCls.asp"--><!doctype html>
<head>
<title>投注记录-<%=Setting(0)%></title>
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
<div class="head"><h2 id="navtit">投注记录</h2><a href="javascript:history.go(-1);" class="btn-qgkj" id="sourceUrl"><span><em></em></span>返回</a></div>
<div class="wap_h" id="list_data">
	<div class="ex_record_box">
        <div id="div_tz" class="brts_box">
            <div class="filter_s" id="showpro">
            <div align="center">
            <p class="time_txt"><%lottidSelect%>&nbsp;&nbsp;<input type="text" value="<%=Format_Time(now(),2)%>" class="basic_txt gray" id="beginday" name="beginday" onFocus="WdatePicker({dateFmt:'yyyy-MM-dd',onpicked:function(){do_search();}})"></p></div>
                <table width="100%" cellspacing="0" cellpadding="0" border="0">
					<colgroup>
                        <col width="13%">
                        <col width="29%">
                        <col width="29%">
                        <col width="29%">
                    </colgroup>
                    <thead>
                    	<tr class="brts_tit t_c">
                            <td>序号</td>
                            <td>游戏</td>
                            <td><%=setting(56)%></td>
                            <td>中奖</td>
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
</div>
    <script language="javascript" type="text/javascript">
		var sel ={
			lotid:"",
			beginday:"",
			tnumber:10,
		}
		$(function(){
			page.pagesize = 10;
			$("select[name='lotid']").change(function(){
				sel.tnumber=10;do_search();
			})
			$("#beginday").click(function(){
				sel.tnumber=10;
			})
			do_search();
		})
		function do_search(){
			sel.beginday = $("#beginday").val();
			sel.lotid = $("select[name=lotid] > option:selected").val();
			$("#list_data > div.brts_box").show();
			$.ajax({
				type: "POST",
				url: "ajax_sel.html",
				data: {
					action:"tzlist",
					lotid:sel.lotid,
					beginday:sel.beginday,
					Lotteryid:sel.Lotteryid,
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
								tr += "<li class='even'>";
							}
							if($(this).attr("lotname")=="竞彩足球")
							{
								tr += "<a href='/Trade/Jczq/View.asp";
							}else if($(this).attr("lotname")=="竞彩篮球"){
							    tr +="<a href='/Trade/Jclq/view.htm"
							}
							else
							{
								tr += "<a href='/Trade/Include/Project_Info.asp";
							}
								tr += "?id="+$(this).attr("cid")+"'><div class='bh t_c'>"+$(this).attr("i")+"</div><div class='lottname t_c'>"+$(this).attr("lotname")+"</div><div class='money color_red t_c'>"+$(this).attr("usermoney")+"<%=setting(56)%></div><div class='zj t_c'>"
								if($(this).attr("prostate")=="已中奖")
								{
								tr += "<span class='color_red'>"+$(this).attr("jj")+"<%=setting(56)%></span>"
								}
								else
								{
								tr += $(this).attr("prostate")
								}
								tr += "</div></a></li>"
							})
							
							$("#showpro > ul").html(tr)
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