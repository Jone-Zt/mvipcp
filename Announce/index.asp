<!DOCTYPE html>
<!--#include file="../Conn.asp" -->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=GBK">
<title>网站公告</title>
<meta charset="GBK">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="format-detection" content="telephone=no">
<meta http-equiv="cleartype" content="on"> 
<link rel="apple-touch-icon-precomposed" href="../Images/Public/t01b0f56b331d358632.png">
<link rel="apple-touch-icon" href="../Images/Public/t01b0f56b331d358632.png">
<link rel="stylesheet" href="../Css/public.css">
<script language="javascript" type="text/javascript" src="/JS/Jquery-1.7.2.Min.js"></script>
<script language="javascript" type="text/javascript" src="/JS/Jquery-ui-1.8.2.custom.min.js"></script>
<style>.gmu-media-detect{-webkit-transition: width 0.001ms; width: 0; position: absolute; top: -10000px;}
@media screen and (width: 1920px) { #gmu-media-detect0 { width: 1px; } }
</style>
<script src="../JS/News/api.js"></script>
<script src="../JS/News/infocollect.js"></script>
<script src="../Trade/JS/20141212.js"></script>
</head><body style="background-color: #f7f3ec;">
<script>
cxnumber=10;
function cx()
{
	$.ajax({
		url:"get.asp",
		type:"POST",
		//dataType:"xml",
		async:false,
		data:{
			cxnumber:cxnumber,
		},
		success: function(data){
			var err = $(data).find("row"),j="";
			for(var i=0;i<err.length;i++)
			{
				j=j+"<div class='article main-index' articleid='257' id='articleId257'><a href='/Announce/Announcexq.asp?xq="+$(err[i]).attr("id")+"'><h3>"+unescape($(err[i]).attr("title")).substring(0,7)+"<em class='times'>"+$(err[i]).attr("adddate").substring(5,10)+"</em></h3></a></div>";		
			}
			document.getElementById("contentScroll").innerHTML=j+"<div align='center' style='margin:0px 0 20px 0;display:block' id='jiangbb'><a id='jiang5' href='javascript:cx();'><div id='jiang4' class='jiang4'><font color='#FBF8F8' id='jiang3'>点击加载更多...</font></div></a></div> ";
			if(err.length<cxnumber)
			{
				$("#jiang3").html("已加载完毕")	;
				document.getElementById("jiang4").style.background="#B3B3B3";cxnumber=10;
				$("#jiang5").removeAttr("href");
			}else 
			{
				$("#jiang3").html("点击加载更多...");document.getElementById("jiang4").style.background="#FB080C";
				cxnumber=cxnumber+10;
			}
		}
	})
}
$(function(){ cx();})
</script>
<div class="wrap">
  <div class="head">
    <h2 id="navtit">网站公告</h2>
    <a href="../index.asp" class="btn-qgkj" id="goback"><span><em></em></span>返回</a>
  </div>
  <div id="wrapper" style="top: 40px;">
  	<div class="content" id="contentScroll">
		<div id="pullDown" style="opacity: 1;">
				<!--<span class="pullDownIcon "></span><span class="pullDownLabel">下拉刷新...</span>-->
		</div>
		<div id="contentlist">
    
        </div>
		<div id="pullUp" style="opacity: 1;">
			<!--<span class="pullUpIcon"></span><span class="pullUpLabel">上拉加载更多...</span>-->
		</div>
	</div>
  </div> 
</div>
<script src="../Trade/JS/b862fb33.js"></script>
<!--#include file="../dh.asp"-->
</body></html>