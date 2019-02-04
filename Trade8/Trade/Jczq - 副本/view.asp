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
		<a class="btn-menu" href="/User/Reg/">注册</a>
	</div>
	<div class="main">
		<div class="lot_open">方案详情>竞彩足球-<%=all.type%></div>
		<div class="lot_nav"><div class="lot_user">发起人：<%=all.planUser%>***</div><div class="lot_user"><%=all.state%></div></div>
		<div class="lot_nav" style="text-align: center;">
			<div class="lot_pol">
				<canvas class='process' style='width:80px;height:80px;transform:scale(0.7);'><%=all.jd%>%</canvas>
			</div>
			<div class="lot_overtime">
				<div class="lot_word">方案截止时间</div>
				<div class="lot_date"><%=all.overtime%></div>
			</div>
			<div class="lot_state"><div><%=all.buymoney%><%=setting(56)%></div><div class="lot_bd">保底 <span><%=all.bd%></span> 份</div></div>
			<div class="lot_HM_Buy"><span class="lot_tc">提成：<%=all.tc%>%</span><span class="lot_HM_input"><%If all.lostnum=0 Then %><span class="lot_sotp">方案已满员</span><% ElseIf all.overtime<now() Then%><span class="lot_sotp">方案已截止</span><% Else %><input type="text" placeholder="剩余<%=all.lostnum%>份"><button data-id="<%=all.id%>" class="btn_hm_buy">投注</button><% End If %></span></div>
		</div>
		<div class="lot_context">
			<div class="lot_open">点击展开方案详情<span></span></div>
			<div class="lot_view">
				<%=all.leStr%>
			</div>
		</div>
		<div class="lot_context">
			<div class="lot_open">点击展开彩果详情<span></span></div>
			<div class="lot_view">
				<div class="lot_text lot_over_title"><span>胜平负</span><span>让球</span><span>总进球</span><span>比分</span><span>半全场</span></div>
				<%=all.sgStr%>
			</div>
		</div>
		<div class="lot_context">
			<div class="lot_open">点击展开参与人(<%=all.havecount%>人)<span></span></div>
			<div class="lot_view">
				<div class="lot_all_user">
					<div class="lot_all_user_title"><span>用户名</span><span>投注份数</span><span>投注时间</span></div>
					<div class="lot_all_user_out">
						<%=all.haveStr%>
					</div>
				</div>
			</div>
		</div>
		<div class="lot_open">发起时间：<%=all.addtime%></div>
	</div>
	<script>
		$(".lot_context").click(function(){
			var $this = $(this);
			var h = $this.find('.lot_view').innerHeight();
			console.log(h);
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
	                money:$(".lot_HM_input input").val(),
	                action:"buy"
	            })
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
<!--#include file="../../dh.asp"-->