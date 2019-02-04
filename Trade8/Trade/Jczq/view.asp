<!--#include file="view.m.asp"-->
<%
    Function ToWeek(s)
        If s=7 Then s = 0
        WeekArr = Array("周一","周二","周三","周四","周五","周六","周日")
        ToWeek = WeekArr(s)
    End Function
%>
<!doctype html>
<html lang="en">
<head>
	<meta charset="GBK">
	<meta name="keywords" content="<%=lotterytype%>开奖_<%=lotterytype%>号码预测推荐_<%=lotterytype%>走势图_<%=Setting(0)%>触屏版"/>
	<meta name="description" content="<%=Setting(0)%>是手机上最好的投注平台，10年游戏金牌服务经验，为游戏朋友提供安全的手机游戏投注、游戏合玩服务、游戏资讯"/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<title><%=lotterytype%>方案详情-<%=Setting(0)%></title>
	<link href="/Css/basic.css" rel="stylesheet">
	<link href="/trade/css/jczq/style.css" rel="stylesheet">
	<script language="javascript" type="text/javascript" src="/JS/Jquery-1.7.2.Min.js"></script>
</head>
<body>
	<div class="head">
		<h2 onClick="javascript:upcss();" id="navtit"><em id="jiangaa"><h1>方案详情</h1></em></h2>
		<a href="javascript:history.go(-1)" class="btn-qgkj" id="sourceUrl"><span><em></em></span>返回</a>
	</div>
	<div class="main">
		<div class="lot_open">方案详情>竞彩足球-<%=all.type%></div>
		<div class="lot_nav" style="background:url(../../Images/faxq/faxqul.png) no-repeat left 10px center; height:100px;">
            <div class="lot_user mleft"><%=all.planUser%>***</div>
            <br>
            <div class="lot_user mleft"><span class="fontcss1">自投金额</span><br><span class="fontcss2"><%response.Write(all.buymoney&setting(56))%></span></div><div class="lot_user"><span class="fontcss1">起跟金额</span><br><span class="fontcss2"><%=all.gdbs*all.onemoney&setting(56)%></span></div>
        </div>
		<div class="lot_context">
			<div class="lot_open">点击展开方案信息<span></span></div>
			<div class="lot_view">
				<div class="lot_all_user">
					<span class="fontcss1">金　　额：</span><span class="fontcss2"><%response.Write(all.buymoney&setting(56))%></span>
				</div>
				<%if all.hm=2 then%>
				<div class="lot_all_user">
					<span class="fontcss1">跟单信息：</span>共<span class="fontcss2"><%response.Write(all.gdzj&setting(56))%></span><div id="gdlbs" style="float:right; background:#66ccff; color:#FFFFFF; width:100px; height:40px; text-align:center; line-height:40px;">跟单列表 ></div>
				</div>
				<%end if%>
				<div class="lot_all_user">
					<span class="fontcss1">提　　成：</span><span class="fontcss2"><%response.Write(all.tc&"%")%></span>
				</div>
				<div class="lot_all_user">
					<span class="fontcss1">状　　态：</span><span class="fontcss2"><%If all.overtime<now() Then response.Write(all.state) else response.Write("进行中")%></span>
				</div>
			</div>
		</div>
        
		<div class="lot_context2" id="gdlb" style="display:none;position:fixed; top:0px;left:0px; width:100%; height:100%; background:#FFFFFF;z-index:9999;">
        
	<div class="head">
		<h2 onClick="javascript:upcss();" id="navtit"><em id="jiangaa"><h1>跟单列表</h1></em></h2>
		<a class="btn-qgkj" id="gdlbc"><span><em></em></span><</a>
	</div>
			<div class="lot_view">
				<div class="lot_all_user">
					<div class="lot_all_user_title"><span>用户名</span><span>倍数</span><span>金额（<%=setting(56)%>）</span><span>时间</span></div>
					<div class="lot_all_user_out">
						<%=all.haveStr%>
					</div>
				</div>
			</div>
		</div>        
        
		<div class="lot_context">
			<div class="lot_open">点击展开投注内容<span></span></div>
			<div class="lot_view">
				<%if all.dsshow = 1 then 
			 	 Response.write(all.leStr)
				else
				 Response.write("该场比赛尚未截止")
				end if%>
			<div>　发起时间：<%=all.addtime%></div>
			</div>
		</div>
        
        <%if all.overtime<now() Then%>
            <div class="lot_context">
                <div class="lot_open">点击展开彩果详情<span></span></div>
                <div class="lot_view">
                    <div class="lot_text lot_over_title"><span>胜平负</span><span>让球</span><span>总进球</span><span>比分</span><span>半全场</span></div>
                    <%=all.sgStr%>
                </div>
            </div>
            <div class="btm-bar"><div class="btm-c"><a href="/Trade/jczq/" class="btn btn100">投注竞彩足球</a></div></div>
        <%elseif all.hm=2 then%>
            <div class="lot_open lot_gd_input" style=" font-size:14px; font-weight:bold;color:#E81929;">购买　<input type="tel" placeholder="1" value="1"> 倍　<font id="am"><%=all.gdje%></font><%=setting(56)%>　<button data-id="<%=all.id%>" class="btn_hm_buy">　跟　　单　</button></div>
        <%end If%>
	</div>
	<script>
		$("#gdlbc").click(function(){
			$("#gdlb").hide();
			$(".lot_context").eq(0).click();
		});
		$("#gdlbs").click(function(){
			$("#gdlb").show();
		});
		$(".lot_context").click(function(){
			var $this = $(this);
			var h = $this.find('.lot_view').innerHeight();
			if($this.hasClass('lot_view_show')){
				$this.removeClass('lot_view_show').css("height","-="+h+"px").find(">.lot_open span").css("transform","rotate(0)");
			}else{
				$this.addClass('lot_view_show').css("height","+="+h+"px").find(">.lot_open span").css("transform","rotate(450deg)");
			}
		});
		$(".btn_hm_buy").click(function(){
			var _this = this;
				AJAX_HM({
	                id:$(_this).data("id"),
	                money:$(".lot_gd_input input").val(),
	                action:"buy"
	            })
		});
		$(".lot_gd_input input").keyup(function(){
			var am=<%=all.gdje%>*$(".lot_gd_input input").val();
			$("#am").html(am);
		});

    var AJAX_HM = function(postdata){//竞彩主球合玩
        $.ajax({
            type: 'POST',
            url: "/Trade/Jczq/HM_BUY.html",
            data: postdata,
            success: function(data){
                var d = eval("("+data+")");
                if(d.err == 1){
                    alertdiv.login();
                }else{
                    if(d.err == 2){
                        alert("参数错误！");
                    }else if(d.err == 3){
                        alert("投注错误(参数非法)！");
                    }else if(d.err == 4){
                        alert("您所投注的订单不存在！");
                    }else if(d.err == 5){
                        alert("投注错误(您的【彩豆】不足或【投注份额】超出最大投注数)！");
                    }else if(d.err == 6){
                        alert("投注失败，投注已截止！");
                    }else if(d.err == 0){
						alert("投注成功，祝您中大奖...");
                    }else{
                        alert("内部错误！");
                    }
                    //$(".KR_window_close").click();
                    window.location.reload();
                }
            }
        });
    }


var t;
$(document).ready(function() {
	$(".lot_context").eq(0).click();
	drawProcess();
	i = 0;
	t = setInterval("addNum()",35);
});
function addNum() {
	if(i<=<%=all.jd%>-1){
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
        context.arc(w, h, w-20, 0, Math.PI * 2, true);  
        context.closePath();  
        context.fillStyle = 'rgba(255,255,255,1)';  
        context.fill();  
        context.beginPath();  
        context.arc(w, h, w-21, 0, Math.PI * 2, true);  
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
