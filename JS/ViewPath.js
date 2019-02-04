var isupdate =  false; //是否正在上传
$(function(){
	$("#joinTab > li").click(function(){
		var index = $(this).index();
		$("#joinTab > li").removeClass("an_cur")
		$("#joinTab > li").eq(index).addClass("an_cur");
		$("#show_list_div > table").hide();
		$("#show_list_div > table").eq(index).show();
	})
	
	/*份数输入框事件*/
	$("#buynum").keyup(setfenshu);
	$("#buynum").val("");
	
	/*参加合玩*/
	
	/*撤销合玩*/
	$("#WithdrawUser").click(Withdraw_User)
	/*撤销合玩*/
	$("#zhuihaostop").click(zhuihao_stop)
	
	/*返回继续投注*/
	$("#aContinue").click(function(){
		window.location.href=$("#aContinue_link").attr("href")
	})
	
	/*查看方案*/
	$("#aViewPro").click(default_login)
	
	/*关闭投注成功提示*/
	$("#_ajax_common_btn5").click(function(){
		alertdiv.close('_ajax_common_div5');
		default_login();
	})
	
	upfile_Even();/*上传文件 事件*/
	//up_stop_Even();/*取消上传 事件*/
})

function default_login(){window.location.reload();}
function default_logout(){window.location.reload();}
//设置输入份数
function setfenshu(){
	$("#buynum").val($("#buynum").val().replace(/[^\d]/g,''));
	var num = Number($("#buynum").val());
	var senumber = Number($("#senumber").val());
	var onemoney = $("#onemoney").val();
	if(num > senumber)
	{
		num = senumber;
		$("#buynum").val(num);
	}
	$("#permoney").html(num*formatCurrency2(onemoney))
}
//参加合玩
function check_project(){
	var buynum =$("#buynum").val();
	var senumber = Number($("#senumber").val());
	var onemoney = $("#onemoney").val();
	var pid  = $("#onemoney").val();
	if (buynum=="")
	{
		alertdiv.alert("投注份数不能为空！");
		$("#buynum").focus();
		return;
	}
	else if (Number(buynum) <= 0)
	{
		alertdiv.alert("投注份数不能小于1！");
		$("#buynum").focus();
		return;
	}
	else if (Number(buynum) > Number(senumber))
	{
		alertdiv.alert("您投注份数不能大于剩余份数！");
		$("#buynum").focus();
		return;
	}
	var msg = "<p style='text-align:left;text-indent:2em;'>您好，请您确认</p>";
	msg = msg + "<p style='text-align:left;text-indent:2em;'>投注份数：<font color='red' style='font-weight:bold'>"+buynum+"</font>份</p>";
	msg = msg + "<p style='text-align:left;text-indent:2em;'>投注"+coinType+"：<font color='red' style='font-weight:bold'>￥"+Number(buynum)*formatCurrency2(onemoney)+""+coinType+"</font></p>";
	alertdiv.confirm(msg,add_project);
}

//参加合玩
function add_project(){
	var buynum =$("#buynum").val();
	var pid  = $("#pid").val();
	var onemoney = $("#onemoney").val();
	$.ajax({
		type: "POST",
		url: "/Trade/Include/KR.HeMai.Buy.html",
		data: {
			action:"add",
			pid:pid,
			buynum:buynum,
			onemoney:onemoney
		},
		dataType:"xml",
		success: function(data){
			
			var err = $(data).find("err");
			if($(err).attr("type")=="-1") //未登录
			{
				alertdiv.login(add_project)
			}
			else if($(err).attr("type")=="0")
			{
			alertdiv.alert("对不起您的"+coinType+"不足！");
			return ;
			}
			else if($(err).attr("type")=="2")
			{
			alertdiv.alert("对不起当前期已经截止投注！");
			return ;
			}
			else if($(err).attr("type")=="-3")
			{
			alertdiv.confirm2("系统繁忙请重试!",default_login)
			return ;
			}
			else if($(err).attr("type")=="3")
			{
			alertdiv.confirm2("对不起，该方案已撤单!",default_login)
			return ;
			}
			else if($(err).attr("type")=="4")
			{
			alertdiv.confirm2("对不起，该方案已停止追号!",default_login)
			}
			else if($(err).attr("type")=="6")
			{
			alertdiv.confirm2("对不起，该方案已满员!",default_login)
			}
			else if($(err).attr("type")=="5")
			{
			alertdiv.confirm2("参与"+coinType+"已经超过最大限额！",default_login)
			}
			else if($(err).attr("type")=="-2")
			{
			alertdiv.alert("对不起您投注的份大于当前份数！");
			return ;
			}
			else if($(err).attr("type")=="1")
			{
				alertdiv.showBox("_ajax_common_div5", "温馨提示", null, 250, null,null) 
				ColseCountdownWin('_ajax_common_div5','sytime2','sytime2_second',null,default_login)
				//alertdiv.confirm2("您好，投注成功；祝您中奖!",default_login)
			}
			else
			{
				if($(err).attr("msg").length>0)
				{
					alertdiv.alert($(err).attr("msg"));
				}
				if($(err).attr("url").length>0)
				{
					location.href = $(err).attr("url");
				}
			}
		},
		error: function (jqXHR, textStatus, errorThrown) {
			alertdiv.alert("交易失败,请重新提交！");
		},
		complete: function (jqXHR, textStatus) {
		}
	});
	
}

function Withdraw_User(){
	alertdiv.confirm("您好，确定要撤单？",function(){
		var WithdrawUserID = $("#WithdrawUserID").val();
		var cid  = $("#cid").val();
		$.ajax({
			type: "POST",
			url: "/Trade/Include/KR.HeMai.Buy.html",
			data: {
				action:"withdrawuser",
				cid:cid,
				id:WithdrawUserID
			},
			dataType:"xml",
			success: function(data){
				var err = $(data).find("err");
				if($(err).attr("type")=="-1")
				{
					alertdiv.confirm2($(err).attr("msg"),default_login)
				}
				else if($(err).attr("type")=="0")
				{
					alertdiv.confirm2("对不起，该方案已过期无法撤单!",default_login)
				}
				else if($(err).attr("type")=="2")
				{
					alertdiv.confirm2("对不起，该方案已撤单!",default_login)
				}
				else if($(err).attr("type")=="3")
				{
					alertdiv.confirm2("对不起，该方案已停止追号!",default_login)
				}
				else if($(err).attr("type")=="4")
				{
					alertdiv.confirm2("对不起，该方案已超过50%无法撤单!",default_login)
				}
				else if($(err).attr("type")=="1")
				{
					alertdiv.confirm2("您好，撤单成功!",default_login)
				}
				else
				{
					if($(err).attr("msg").length>0)
					{
						alertdiv.alert($(err).attr("msg"));
					}
					if($(err).attr("url").length>0)
					{
						location.href = $(err).attr("url");
					}
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				alertdiv.alert("交易失败,请重新提交！");
			},
			complete: function (jqXHR, textStatus) {
			}
		});
		
	});
}

function zhuihao_stop(){
	alertdiv.confirm("您好，确定要停止追号？",function(){
		var WithdrawUserID = $("#WithdrawUserID").val();
		var cid  = $("#cid").val();
		var zhmoney  = $("#zhmoney").val();
		$.ajax({
			type: "POST",
			url: "/Trade/Include/KR.HeMai.Buy.html",
			data: {
				action:"zhuihaostop",
				cid:cid,
				zhmoney:zhmoney,
				id:WithdrawUserID
			},
			dataType:"xml",
			success: function(data){
				var err = $(data).find("err");
				if($(err).attr("type")=="-2")
				{
					alertdiv.confirm2($(err).attr("msg"),default_login)
				}
				else if($(err).attr("type")=="0")
				{
					alertdiv.confirm2("对不起，该方案已过期无法停止追号!",default_login)
				}
				else if($(err).attr("type")=="2")
				{
					alertdiv.confirm2("对不起，该方案已撤单!",default_login)
				}
				else if($(err).attr("type")=="3")
				{
					alertdiv.confirm2("对不起，该方案已停止追号!",default_login)
				}
				else if($(err).attr("type")=="1")
				{
					alertdiv.confirm2("您好，停止追号成功!",default_login)
				}
				else
				{
					if($(err).attr("msg").length>0)
					{
						alertdiv.alert($(err).attr("msg"));
					}
					if($(err).attr("url").length>0)
					{
						location.href = $(err).attr("url");
					}
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				alertdiv.alert("交易失败,请重新提交！");
			},
			complete: function (jqXHR, textStatus) {
			}
		});
		
	});
}

function Check_WithdrawIssue(Issue)
{
	if(typeof(Issue)=="undefined")
	{
		Issue = ""
	}
	var msg = ""
	if(Issue!="")
	{
		msg = "<p style='text-align:left;text-indent:2em;'>您好，确定要撤单？</p>";
		msg += "<p style='text-align:left;text-indent:2em;'>不可以撤当前期</p>";
	}
	else
	{
		msg = "<p style='text-align:left;text-indent:2em;'>您好，确定要停止追号？</p>";
		msg += "<p style='text-align:left;text-indent:2em;'>不可以撤当前期</p>";
	}
	alertdiv.confirm(msg,function(){WithdrawIssue(Issue);});
}

function WithdrawIssue(Issue)
{
	var pid  = $("#pid").val();
	$.ajax({
		type: "POST",
		url: "WithdrawUserID",
		data: {
			action:"withdrawissue",
			pid:pid,
			Issue:Issue
		},
		dataType:"xml",
		success: function(data){
			var err = $(data).find("err");
			if($(err).attr("type")=="-1") //未登录
			{
				alertdiv.login(function(){WithdrawIssue(Issue);})
			}
			else if($(err).attr("type")=="-2")
			{
				alertdiv.confirm2($(err).attr("msg"),default_login)
			}
			else if($(err).attr("type")=="1")
			{
					
				alertdiv.confirm2("您好，撤单成功!",default_login)
			}
			else
			{
				if($(err).attr("msg").length>0)
				{
					alertdiv.alert($(err).attr("msg"));
				}
				if($(err).attr("url").length>0)
				{
					location.href = $(err).attr("url");
				}
			}
		},
		error: function (jqXHR, textStatus, errorThrown) {
			alertdiv.alert("交易失败,请重新提交！");
		},
		complete: function (jqXHR, textStatus) {
		}
	});
}

/*上传文件  事件*/
function upfile_Even(){
	/*上传文件 事件*/
	$("#upfile").change(function(){
		if(!IsValiDateFile($(this).val(),"txt"))
		{
			alertdiv.confirm2("您好，上传文件只支持txt格式，请重新选择文件！");
			return;
		}
		else if(isupdate)
		{
			alertdiv.confirm2("您好，有文件正在上传中！");
			return;
		}
		else
		{
			updatefile();
		}
	})
}


/*异步上传文件*/
function updatefile()
{
	var textname = GetFileName($("#upfile").val());
	$("#upfile_title").text(textname)
	$("#upfile_view").show();
	$("#up_step_wrap").show();
	$("#up_info").hide();
	isupdate = true;
	cancelupdate = false;
	var url = "/Trade/Include/KR.HeMai.Buy.html?action=update&pid="+$("#pid").val();
	$.ajaxFileUpload({
		url:url,//用于文件上传的服务器端请求地址
        secureuri:false,//一般设置为false
        fileElementId:'upfile',//文件上传空间的id属性  <input type="file" id="file" name="file" />
        dataType: 'text',//返回值类型 一般设置为json
        success: function (data, status)  //服务器成功响应处理函数
        {
			var strArr  = data.split("|")
			var err = strArr[0]
			if(err=="1")
			{
				var statue = $(data).find("statue");
				var str = "";
				if(strArr[1]=="1")
				{
					alertdiv.confirm2("您好，上传成功!",default_login)
					str += "<i class='u-ico u-suc'></i>"
					str += "<em class='red m-r'>上传成功</em>"
					str += "共"+strArr[2]+" "+strArr[3]+"注 | "
					str += "<a target='_blank' title='' href='"+strArr[4]+"'>查看详情</a> "
					str += "<span class='gray'>上传时间："+strArr[5]+"</span>"
					$("#up_info").html(str);
						
				}
				else if(strArr[1]=="0")
				{
					alertdiv.alert("上传文件失败！");
					str += "<i class='u-ico u-fail'></i>文件检测失败, 共发现"
					str += "<strong class='red' style=''>"+strArr[2]+"处错误</strong>(<a  href='javascript:;' onclick=\"alertdiv.alert('"+(strArr[3].replace(/;/g,"<br>"))+"')\">查看详情</a>), 请重新上传或者"
					str += "联系客服"
					$("#up_info").html(str);
						
				}
				else if(strArr[1]=="-1")
				{
					alertdiv.alert("上传文件与实际注数不相符！");
					str += "<i class='u-ico u-fail'></i>注数不相符, 设定注数为"+strArr[2]
					str += "上传注数为<strong class='red' style=''>"+strArr[3]+", 请重新上传或者"
					str += "联系客服"
					$("#up_info").html(str);
						
				}
				$("#up_step_wrap").hide();
				$("#up_info").show();
			}
			else
			{
				if(strArr[1].length>0)
				{
					alertdiv.alert(strArr[1]);
				}
				if(strArr[2].length>0)
				{
					location.href = strArr[2];
				}
				$("#upfile_view").hide();
			}
        },
        error: function (data, status, e)//服务器响应失败处理函数
        {
        	alertdiv.alert("上传文件错误，请联系客服，谢谢！");
        },
		complete: function(HttpReques,err){
			isupdate = false;
		}
	})
	$("#upfile").unbind("change")
	upfile_Even();
	return false;
}

var hmlist = document.getElementById("hmlist");
if(document.getElementById("hmlist1")!=null){
var hmlist1 = document.getElementById("hmlist1");}
var showtxt = document.getElementById("showtxt");
var showtxt1 = document.getElementById("showtxt1");
var content = document.getElementById("content");
var content1 = document.getElementById("content1");
function list()
{
	if(showtxt.innerHTML == "查看合玩记录")
	{
		content.style.display = "";
		showtxt.innerHTML = "隐藏合玩记录";
	}
	else
	{
		content.style.display = "none";
		showtxt.innerHTML = "查看合玩记录";
	}
}
function list1()
{	
	if(showtxt1 != null){
	if(showtxt1.innerHTML == "查看详细开奖结果")
	{
		content1.style.display = "";
		showtxt1.innerHTML = "隐藏详细开奖结果";
	}
	else
	{
		content1.style.display = "none";
		showtxt1.innerHTML = "查看详细开奖结果";
	}}
}
hmlist.onclick = function()
{
	list();
}
if(hmlist1!=null){
hmlist1.onclick = function()
{
	list1();
}}
list();
list1();

/*圆形百分比*/
var  paper =  null;
function init(b,n,t,c){
	//初始化Raphael画布 
	this.paper = Raphael(b, 80, 80); 
	
	//把底图先画上去 
	this.paper.image("/Images/progressBg.jpg", 0, 0, 80, 80); 
	
	//进度比例，0到1，在本例中我们画65% 
	//需要注意，下面的算法不支持画100%，要按99.99%来画 
	var percent = n	, 
		drawPercent = percent >= 1 ? 0.9999 : percent; 
	
	//开始计算各点的位置，见后图 
	//r1是内圆半径，r2是外圆半径 
	var r1 = 32, r2 = 40, PI = Math.PI, 
		p1 = { 
			x:40,  
			y:80 
		}, 
		p4 = { 
			x:p1.x, 
			y:p1.y - r2 + r1 
		}, 
		p2 = {  
			x:p1.x + r2 * Math.sin(2 * PI * (1 - drawPercent)), 
			y:p1.y - r2 + r2 * Math.cos(2 * PI * (1 - drawPercent)) 
		}, 
		p3 = { 
			x:p4.x + r1 * Math.sin(2 * PI * (1 - drawPercent)), 
			y:p4.y - r1 + r1 * Math.cos(2 * PI * (1 - drawPercent)) 
		}, 
		path = [ 
			'M', p1.x, ' ', p1.y, 
			'A', r2, ' ', r2, ' 0 ', percent > 0.5 ? 1 : 0, ' 1 ', p2.x, ' ', p2.y, 
			'L', p3.x, ' ', p3.y, 
			'A', r1, ' ', r1, ' 0 ', percent > 0.5 ? 1 : 0, ' 0 ', p4.x, ' ', p4.y, 
			'Z' 
		].join(''); 
	
	//用path方法画图形，由两段圆弧和两条直线组成，画弧线的算法见后 
	this.paper.path(path) 
		//填充渐变色，从#3f0b3f到#ff66ff 
		.attr({"stroke-width":0, "stroke":"", "fill":"90-" + c}); 
	
	//显示进度文字 
	$(t).text(Math.round(percent*100) + "%"); 
}
if(document.getElementById("test")!=null){
var x1 = document.getElementById("test").innerText;  
init('bg',x1,'#txt','#f00');} 