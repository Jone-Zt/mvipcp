<!--#include file="view.m.asp"-->
<%
    Function ToWeek(s)
        If s=7 Then s = 0
        WeekArr = Array("��һ","�ܶ�","����","����","����","����","����")
        ToWeek = WeekArr(s)
    End Function
%>
<!doctype html>
<html lang="en">
<head>
	<meta charset="GBK">
	<meta name="keywords" content="<%=lotterytype%>����_<%=lotterytype%>����Ԥ���Ƽ�_<%=lotterytype%>����ͼ_<%=Setting(0)%>������"/>
	<meta name="description" content="<%=Setting(0)%>���ֻ�����õ�Ͷעƽ̨��10����Ϸ���Ʒ����飬Ϊ��Ϸ�����ṩ��ȫ���ֻ���ϷͶע����Ϸ���������Ϸ��Ѷ"/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<title><%=lotterytype%>��������-<%=Setting(0)%></title>
	<link href="/Css/basic.css" rel="stylesheet">
	<link href="/trade/css/jczq/style.css" rel="stylesheet">
	<script language="javascript" type="text/javascript" src="/JS/Jquery-1.7.2.Min.js"></script>
</head>
<body>
	<div class="head">
		<h2 onClick="javascript:upcss();" id="navtit"><em id="jiangaa"><h1>��������</h1></em></h2>
		<a href="javascript:history.go(-1)" class="btn-qgkj" id="sourceUrl"><span><em></em></span>����</a>
	</div>
	<div class="main">
		<div class="lot_open">��������>��������-<%=all.type%></div>
		<div class="lot_nav" style="background:url(../../Images/faxq/faxqul.png) no-repeat left 10px center; height:100px;">
            <div class="lot_user mleft"><%=all.planUser%>***</div>
            <br>
            <div class="lot_user mleft"><span class="fontcss1">��Ͷ���</span><br><span class="fontcss2"><%response.Write(all.buymoney&setting(56))%></span></div><div class="lot_user"><span class="fontcss1">������</span><br><span class="fontcss2"><%=all.gdbs*all.onemoney&setting(56)%></span></div>
        </div>
		<div class="lot_context">
			<div class="lot_open">���չ��������Ϣ<span></span></div>
			<div class="lot_view">
				<div class="lot_all_user">
					<span class="fontcss1">�𡡡��</span><span class="fontcss2"><%response.Write(all.buymoney&setting(56))%></span>
				</div>
				<%if all.hm=2 then%>
				<div class="lot_all_user">
					<span class="fontcss1">������Ϣ��</span>��<span class="fontcss2"><%response.Write(all.gdzj&setting(56))%></span><div id="gdlbs" style="float:right; background:#66ccff; color:#FFFFFF; width:100px; height:40px; text-align:center; line-height:40px;">�����б� ></div>
				</div>
				<%end if%>
				<div class="lot_all_user">
					<span class="fontcss1">�ᡡ���ɣ�</span><span class="fontcss2"><%response.Write(all.tc&"%")%></span>
				</div>
				<div class="lot_all_user">
					<span class="fontcss1">״����̬��</span><span class="fontcss2"><%If all.overtime<now() Then response.Write(all.state) else response.Write("������")%></span>
				</div>
			</div>
		</div>
        
		<div class="lot_context2" id="gdlb" style="display:none;position:fixed; top:0px;left:0px; width:100%; height:100%; background:#FFFFFF;z-index:9999;">
        
	<div class="head">
		<h2 onClick="javascript:upcss();" id="navtit"><em id="jiangaa"><h1>�����б�</h1></em></h2>
		<a class="btn-qgkj" id="gdlbc"><span><em></em></span><</a>
	</div>
			<div class="lot_view">
				<div class="lot_all_user">
					<div class="lot_all_user_title"><span>�û���</span><span>����</span><span>��<%=setting(56)%>��</span><span>ʱ��</span></div>
					<div class="lot_all_user_out">
						<%=all.haveStr%>
					</div>
				</div>
			</div>
		</div>        
        
		<div class="lot_context">
			<div class="lot_open">���չ��Ͷע����<span></span></div>
			<div class="lot_view">
				<%if all.dsshow = 1 then 
			 	 Response.write(all.leStr)
				else
				 Response.write("�ó�������δ��ֹ")
				end if%>
			<div>������ʱ�䣺<%=all.addtime%></div>
			</div>
		</div>
        
        <%if all.overtime<now() Then%>
            <div class="lot_context">
                <div class="lot_open">���չ���ʹ�����<span></span></div>
                <div class="lot_view">
                    <div class="lot_text lot_over_title"><span>ʤƽ��</span><span>����</span><span>�ܽ���</span><span>�ȷ�</span><span>��ȫ��</span></div>
                    <%=all.sgStr%>
                </div>
            </div>
            <div class="btm-bar"><div class="btm-c"><a href="/Trade/jczq/" class="btn btn100">Ͷע��������</a></div></div>
        <%elseif all.hm=2 then%>
            <div class="lot_open lot_gd_input" style=" font-size:14px; font-weight:bold;color:#E81929;">����<input type="tel" placeholder="1" value="1"> ����<font id="am"><%=all.gdje%></font><%=setting(56)%>��<button data-id="<%=all.id%>" class="btn_hm_buy">������������</button></div>
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

    var AJAX_HM = function(postdata){//�����������
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
                        alert("��������");
                    }else if(d.err == 3){
                        alert("Ͷע����(�����Ƿ�)��");
                    }else if(d.err == 4){
                        alert("����Ͷע�Ķ��������ڣ�");
                    }else if(d.err == 5){
                        alert("Ͷע����(���ġ��ʶ��������Ͷע�ݶ�������Ͷע��)��");
                    }else if(d.err == 6){
                        alert("Ͷעʧ�ܣ�Ͷע�ѽ�ֹ��");
                    }else if(d.err == 0){
						alert("Ͷע�ɹ���ף���д�...");
                    }else{
                        alert("�ڲ�����");
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
