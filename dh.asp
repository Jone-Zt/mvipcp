<link rel="stylesheet" href="/font/iconfont.css" />
<style type="text/css">
.dhgdb {position:fixed; bottom:0px;left:0px; width:100%; background:#ffffff;z-index:9999;border-top:1px solid #66ccff;}
.dhgdb li{ width:25%; height:70px; float:left; text-align:center;}
.dhgdb p{ font-size:14px !important;}
.icon-zixun1,.icon-mn_hezuo,.icon-mnzhuye,.icon-kaijiang,.icon-mn_wo_fill{ font-size:28px;/*color:#EEB4A2;*/color:#999999;}
.icon-3,.icon-qianbao{ font-size:26px;color:#EEB4A2;}
.icon-mingxi,.icon-bokuanmingxi,.icon-anquan,.icon-xiugai,.icon-lock{font-size:17px;color:#888888;}
.icon-bokuanmingxi{ font-size:16px; padding-left:2px;}
.icon-touxiang1{font-size:50px;color:#ffffff;}
.qqonline{ width:80px; height:99px; position:fixed;right:20px; bottom:40px; background:url(/Images/qq.png); z-index:880}
.dhgdb li a {  text-decoration:none;  outline:none;color:darkgray}
    .dhgdb li a:hover {

box-shadow: 0 12px 16px 0 darkgray, 0 17px 50px 0 gray;

    }
</style>
<div style="height:1px;clear:both;"></div>
<div style="height:71px;"></div>
<div class="dhgdb"><ul>
<!--  <li><a href="/News/index.asp" ><span class="iconfont icon-zixun1"></span><p>资讯</p></a></li>-->
   <li><a href="/" ><span class="iconfont icon-mnzhuye"></span><p style="margin:-6px">主页</p></a></li>
  <li><a href="/Trade/Jczq/gd/" ><span class="iconfont icon-mn_hezuo"></span><p style="margin:-6px">跟单</p></a></li>
  <li><a href="/KaiJiang/"><span class="iconfont icon-kaijiang"></span><p style="margin:-6px">开奖</p></a></li>
  <li><a href="/User/"><span class="iconfont icon-mn_wo_fill"></span><p style="margin:-6px">我的</p></a></li>
 </ul></div>
 <!--开奖列表模板[[
 <div class="qqonline"  title="qq客服在线" onclick="chatQQ()"></div>
 -->
<script>
    function chatQQ(){
        window.location.href="mqqwpa://im/chat?chat_type=wpa&uin=<%=setting(44)%>&version=1&src_type=web&web_src=oicqzone.com";
    }
</script>
<script type="text/javascript" src="/JS/Jquery-1.7.2.Min.js"></script>
<script>
	<%
		PageUrlt=lcase(PageUrl)
		if PageUrlt="/index.asp" then
			response.Write("$('.icon-mnzhuye').parent().children().css('color', 'red');")
	 elseif instr(PageUrlt,"gd")>0 then
			response.Write("$('.icon-mn_hezuo').parent().children().css('color', 'red');")
		elseif instr(PageUrlt,"news")>0 then
			response.Write("$('.icon-zixun1').parent().children().css('color', 'red');")
			elseif instr(PageUrlt,"Jczq")>0 then
			response.Write("$('.icon-mn_hezu').parent().children().css('color', 'red');")
		elseif instr(PageUrlt,"trade")>0 then
			if instr(PageUrlt,"include")=0 and instr(PageUrlt,"jczq")=0 then response.Write("$('.icon-mn_hezuo').parent().children().css('color', 'red');")
		elseif instr(PageUrlt,"kaijiang")>0 then
			response.Write("$('.icon-kaijiang').parent().children().css('color', 'red');")
		elseif instr(PageUrlt,"user")>0 then
			response.Write("$('.icon-mn_wo_fill').parent().children().css('color', 'red');")
		end if
	%>
</script>