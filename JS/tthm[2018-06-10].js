function cansu(name){
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
function getScrollTop()
{
	var scrollPos; if (window.pageYOffset) {
	scrollPos = window.pageYOffset; } else if (document.compatMode && document.compatMode != 'BackCompat') { scrollPos = document.documentElement.scrollTop; } else if (document.body) { scrollPos = document.body.scrollTop; } return scrollPos;
}
function ttnone(){document.getElementById("ttlogin").style.display="none";}
function CheckForm(ObjForm) {
	name1=document.getElementsByName("UserName")[0].value;
	password1=document.getElementsByName("password")[0].value;
	yanz1=document.getElementsByName("Verifycode")[0].value;
  if(name1 == '') {
    alert('\u8bf7\u8f93\u5165\u7528\u6237\u540d\uff01');
    return false;
  }
  else if(password1 == '') {
    alert('\u8bf7\u8f93\u5165\u5bc6\u7801\uff01');
    return false;
  }
  else if (password1.length<6)
  {
    alert('\u5bc6\u7801\u4e0d\u80fd\u5c11\u4e8e\u516d\u4f4d\uff01');
    return false;
  }
  else if (yanz1.value == '') {
    alert ('\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801\uff01');
    return false;
  }
	$.ajax
	({
		url:"/User/CheckUserLogin.asp",
		type:"POST",
		dataType:"xml",
		async:false,
		data:{
				username:name1,
				password:password1,                                                                 
				Verifycode:yanz1,         
			 },
		success:function(data)
			{	
				var err = $(data).find("state");
				if($(err).attr("type")=="1")
				{
					alert("\u8f93\u5165\u7684\u7528\u6237\u540d\u4e0d\u5b58\u5728");	
				}
				else if($(err).attr("type")=="2")
				{
					alert("\u8f93\u5165\u7684\u5bc6\u7801\u4e0d\u6b63\u786e");	
				}
				else if($(err).attr("type")=="4")
				{
					alert("\u60a8\u8f93\u5165\u7684\u9a8c\u8bc1\u7801\u4e0d\u6b63\u786e");	
				}
				else if($(err).attr("type")=="6")
				{
					alert("\u7528\u6237\u540d\u5df2\u9501\u5b9a\uff0c\u767b\u5f55\u5931\u8d25");	
				}
				else if($(err).attr("type")=="0")
				{
					document.getElementById("ttlogin").style.display="none";ttun=1;
					//alert("\u767b\u5f55\u6210\u529f");
					tjcanyu("jia");cx1("jia");
				}
			}
	});
}
var c="";

			function tishi3(i)
			{
				document.getElementById("tishi2").innerHTML=i;var x1=document.getElementsByClassName("tishi")[0];
				x1.style.marginTop=getScrollTop()+"px";x1.style.display="block";
					c = setTimeout(function(){
						x1.style.display="none";
					},2000)	
			}
function tjcanyu(x1,x3,x5)
{
	document.getElementById("tishi4").style.backgroundImage="url(../Images/quxiao.png)" 
	document.getElementsByClassName("tishi")[0].style.border="solid 1px #FC0206";
	if(c!="")
	{
		clearTimeout(c);
	}
	if(x1=="jia")
	{
		x1=ttx1;x3=ttx3;x5=ttx5;		
	}
	$.ajax({
	url:"/Trade/Include/KR.HeMai.Buy.asp",
	type:"POST",
	dataType:"xml",
	async:false,
	data:{
		buynum:x1,
		pid:x5,
		onemoney:x3,
		 },
	success: function(data)
	{
			var ii="";
			var err = $(data).find("err");
			if($(err).attr("type")=="-1") //未登录
			{
				document.getElementById("ttlogin").style.display="block";
			}
			else if($(err).attr("type")=="0")
			{
				ii="对不起您的彩豆不足！";
				tishi3(ii);
			}
			else if($(err).attr("type")=="2")
			{
				ii="对不起当前期已经截止投注！";
				tishi3(ii);
			}
			else if($(err).attr("type")=="-3")
			{
				ii="系统繁忙请重试!";
				tishi3(ii);
			}
			else if($(err).attr("type")=="3")
			{
				ii="对不起，该方案已撤单!";
				tishi3(ii);
			}
			else if($(err).attr("type")=="4")
			{
				ii="对不起，该方案已停止追号!";
				tishi3(ii);
			}
			else if($(err).attr("type")=="6")
			{
				ii="对不起，该方案已满员!";
				tishi3(ii);
			}
			else if($(err).attr("type")=="5")
			{
				ii="参与彩豆已经超过最大限额！";
				tishi3(ii);
			}
			else if($(err).attr("type")=="-2")
			{
				ii="对不起您投注的份大于当前份数！";
				tishi3(ii);
			}
			else if($(err).attr("type")=="1")
			{
				document.getElementById("ttlogin").style.display="none";ii="投注成功，祝您中大奖...";
				document.getElementById("tishi4").style.backgroundImage="url(../Images/ok.gif)";
				document.getElementsByClassName("tishi")[0].style.border="solid 1px #0EEC19";
				tishi3(ii);
				cxnumber = 1;
				cx1("jia");
			}			
	},
	error: function (jqXHR, textStatus, errorThrown){ii="交易失败,请重新提交！";tishi3(ii);}
	});	
}

cxnumber = 1;

       function cx1(caizhong)
	   {
		   $("#jiang3").html("加载中...")	;
		   if(caizhong=="jia"){ caizhong=document.getElementsByClassName("btn-pop btn-pop-on plays")[0].id.replace(/[^0-9]/ig,"")}
		   if(caizhong == "100") caizhong = "";
			$.ajax({
				type: "POST",
				url: "/Trade/Include/Ajax_Trade.html",
				data: {
					action:"hmlist",
					timeadd:document.getElementsByTagName("select")[0].value,  
					ztSelect:document.getElementsByTagName("select")[1].value,    
					jdSelect:document.getElementsByTagName("select")[2].value,  
					lotid:caizhong,   
					pageno:cxnumber,     
					//myqihao:sel.myqihao,
				},
				success: function(data)
				{
					if(data == "[]" || data == "()" || data == ""){
						$("#jiang3").html("已加载完毕")	;
						document.getElementsByClassName("hm_cont")[0].innerHTML="<div align='center'>此游戏暂时没有人发起合玩！</div>";
						document.getElementById("jiang4").style.background="#B3B3B3";cxnumber=1;
						$("#jiang5").removeAttr("href");
						return;
					}

					var data = eval("("+data+")")[0];

					if(data.length>0){
						var val="",zt="";
						for(var i=0;i<data.length;i++)
						{
							var _this = data[i];
	val += "<dl class='hm_contlist'><a id='jiangff' href='./"+ (_this.lotteryname == "竞彩足球" ? "Jczq/view.asp" : "Include/Project_Info.asp") +"?id="+_this.id+"'><dt><h3>"+_this.lotteryname+"</h3><canvas class='process' style='width:60px;height:60px'>"+parseFloat(100*(1-_this.ssy/_this.money)).toFixed(2)+"%</canvas></dt><dd><div class='hm_list_info'><h4>"+_this.username+"</a><div class='auto_wap auto_waplist' style='float:right;width:100px;margin:0 40% 0 0px'>";


if(_this.state > 0){
	val += "<div style='color:#FB0509' align='right'><span style='color:#9D9D9D;font-size:10px'>状态:</span><em style='color:#FB080C;font-size:13px'>已中奖</em></div>"
}else if(_this.state == "0"){
	val += "<div style='color:#FB0509' align='right'><span style='color:#9D9D9D;font-size:10px'>状态:</span><em style='color:#FB080C;font-size:13px'>未中奖</em></div>"
}else if(_this.state == '-1' || _this.ssy <1){
	val += "<div style='color:#FB0509' align='right'><span style='color:#9D9D9D;font-size:10px'>状态:</span><em style='color:#FB080C;font-size:13px'>进行中</em></div>"
}else{

		val += "<font class='f_c change'><div class='auto_list_ipt'><span class='lower' onClick='javascript:jian(this);'>-</span></font><font class='f_d change'><span class='add' onClick='javascript:jia(this);'>+</span></font><input type='tel' id='qishu' style='width:95px;height:30px;border-top:0px;border-bottom:0px;text-align:center' class='auto_ipt' value='1'><input type='hidden' value='"+_this.lotteryid+"'><input type='hidden' value='1'><span data-id='"+_this.id+"' onClick='javascript:canyu(this);' class='fa_icon'><font color='#F8F4F4'>参与</font></span></div>";
}	
val += "</div></h4></div><ul class='hm_list_box hm_list_tp'><li class='color_red'>"+_this.money+"彩豆</li><li>";

val += _this.bdbfb=="0" ? "<li style='margin-right:0px' class='color_ff9900 font_jiang'>未保底</li>" : "<li style='margin-right:0px' class='color_ff9900 font_jiang'><em>保</em>"+_this.bdbfb+"%</li>";
val += "<li>"+_this.ssy+"</li></ul><a href='./Include/Project_Info.asp?id="+_this.id+"'><ul class='hm_list_box color_999 font_10'><li>总彩豆</li><li>保底</li><li>剩余份数</li></ul></a></dd></dl>";

						}
					if(data.length<1){
							document.getElementsByClassName("hm_cont")[0].innerHTML="<div align='center'>此游戏暂时没有人发起合玩！</div>";
							document.getElementById("jiangbb").style.display="none";cxnumber=1;
					}else{
							document.getElementsByClassName("hm_cont")[0].innerHTML = val;
							document.getElementById("jiangbb").style.display="block";
					}}
					if(data.length<cxnumber){
						$("#jiang3").html("已加载完毕")	;
						document.getElementById("jiang4").style.background="#B3B3B3";cxnumber=10;
						$("#jiang5").removeAttr("href");
					}else{
						var aacaizhong=document.getElementsByClassName("btn-pop btn-pop-on plays")[0].id.replace(/[^0-9]/ig,"");
						$("#jiang3").html("点击加载更多...");document.getElementById("jiang5").href="javascript:cx("+aacaizhong+");";
						document.getElementById("jiang4").style.background="#FB080C";
						cxnumber=cxnumber+1;
					}
					drawProcess();
				}
											
			})   
	   }
       function upcss() 
	   {
		   var x1=document.getElementById("jiange");
		   if(x1.className=="head-arr") {x1.className="head-arr head-arron";document.getElementById("jiangf").className="pop-box2";}
		   else if(x1.className=="head-arr head-arron") {x1.className="head-arr";document.getElementById("jiangf").className="pop-box2 none";}
        }
		function jia(obj)
		{
			var ei = obj.parentNode.parentNode.childNodes[2];
			ei.value = parseInt(ei.value)+1;
		}
		function jian(obj)
		{
			var ei = obj.parentNode.parentNode.childNodes[2];
			if(ei.value != 0)
				ei.value = parseInt(ei.value)-1;
		}
		function cx(caizhong)
		{
			document.getElementsByClassName("btn-pop btn-pop-on plays")[0].className="btn-pop plays";
			document.getElementById("tstyle"+caizhong).className="btn-pop btn-pop-on plays";
			document.getElementById("jiangaa").innerHTML=document.getElementById("tstyle"+caizhong).innerHTML+"合玩";
		    document.getElementById("jiangf").className="pop-box2 none";
			var x1=document.getElementById("jiange");if(x1.className=="head-arr head-arron") {x1.className="head-arr";}
			cx1(caizhong);
		}
		function canyu(tthis)
		{
			var x1= parseInt(tthis.parentNode.childNodes[2].value),x3=parseInt(tthis.parentNode.childNodes[4].value),
			x5=tthis.parentNode.childNodes[3].value,x4=parseInt(tthis.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[2].childNodes[3].innerHTML);
			if(isNaN(x1)||x1<1){alert("参与份数不能为空且不能小于1");return;}if(x1>x4){alert("参与份数大于所剩份数");return;}
			if(ttun!=""){
				$(tthis).parents(".hm_contlist").find("h3").text()=="竞彩足球" ? AJAX_HM({
	                id:$(tthis).data("id"),
	                money:x1,
	                action:"buy"
	            }) : tjcanyu(x1,x3,x5);

			}else{
				ttx1=x1;ttx3=x3;ttx5=x5;
				document.getElementById("ttlogin").style.display="block"; 
			}
		}

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
						document.getElementById("ttlogin").style.display="none";
						ii="投注成功，祝您中大奖...";
						document.getElementById("tishi4").style.backgroundImage="url(../Images/ok.gif)";
						document.getElementsByClassName("tishi")[0].style.border="solid 1px #0EEC19";
						tishi3(ii);
						cx1("jia");
                    }else{
                        alert("内部错误！");
                    }
                    //$(".KR_window_close").click();
                    //window.location.reload();
                }
            }
        });
    }
if(cansu("type")==null) $(function(){cx(100);}); else  $(function(){cx(cansu("type"));});
/*var t;
$(document).ready(function() {
	drawProcess();
i = 0;
t = setInterval("addNum()",20);
});
function addNum() {
	if(i<100){
		i++;
		$('canvas.process').text(i+"%");
	}else{
		clearInterval(t);
	}
}*/
function drawProcess() {  
    $('canvas.process').each(function() {
        var text = $(this).text();
        var process = text.substring(0, text.length-1);   
        var canvas = this;
		var w = 60;
		var h = 60;
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
        context.font = "bold 18pt Arial";  
        context.fillStyle = '#FF0206';  
        context.textAlign = 'center';  
        context.textBaseline = 'middle';  
        context.moveTo(w, h);  
        context.fillText(text, w, h);  
    });
}

$(function(){
	$("#jiangf").click(function(){
		document.getElementsByClassName("hm_cont")[0].innerHTML = "";
	});
})