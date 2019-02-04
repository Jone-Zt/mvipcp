function _loginstatus() {
    this.loginURL = "/User/CheckUserLogin.html";
	this.Interval=null;
}
var loginstatus = new _loginstatus();
/**
* ��ȡ��¼��Ϣ
*/
_loginstatus.prototype.getInfo = function () {
	$.ajax({
		type: "POST",
		async:false,
		url:loginstatus.loginURL,
		data: {
			action:'getinfo'
		},
		dataType:"xml",
		success: function(data){
			var err = $(data).find("err");
			if($(err).attr("type")=="1")
			{
				var state = Number($(data).find("state").attr("type"));
				if(state==0)
				{
					var user = $(data).find("user"); 
					$("#top_username").text(unescape($(user).attr("username")));
					$("#money").text($(user).attr("money"));
					$("#tmppay").text($(user).attr("tmppay"));
					$("#packs").text($(user).attr("packs"));
					$("#hongbao").text($(user).attr("hongbao"));
					$("#top_user_info").show();
					$("#nologin_info").hide();
					RefreshMoney();
					loginstatus.Interval = window.setTimeout("loginstatus.getInfo()",10000);
					
				}
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
		},
		complete: function (jqXHR, textStatus) {
		}
	});
}

/**
* ��¼�¼�
*/
_loginstatus.prototype.login = function () {
   if($("#username_common").val()==""){
		$("#login_tip").html("�������û�����") ;
		$("#login_tip").show();
		$("#username_common").focus() ;
		return false;
	}
	if($("#password_common").val()==""){
		$("#login_tip").html("���������룡") ;
		$("#login_tip").show();
		$("#password_common").focus() ;
		return false;
	}
	if($("#vcode_common").val()==""){
		$("#login_tip").html("��������֤�룡") ;
		$("#login_tip").show();
		$("#vcode_common").focus() ;
		return false ;
	}
	var rt = false;
	$.ajax({
		type: "POST",
		async:false,
		url:loginstatus.loginURL,
		data: {
			username:escape($("#username_common").val()),
			password:$("#password_common").val(),
			verifycode:$("#vcode_common").val(),
			action:'login'
		},
		dataType:"xml",
		success: function(data){
			var err = $(data).find("err");
			if($(err).attr("type")=="1")
			{
				var state = Number($(data).find("state").attr("type")); 
				if(state>0)
				{
					if(state==1)
					{
						$("#login_tip").html("������û��������ڣ�") ;
					}
					else if(state==2)
					{
						$("#login_tip").html("��������벻��ȷ��") ;
					}
					else if(state==4)
					{
						$("#login_tip").html("���������֤�벻��ȷ��") ;
					}
					else if(state==6)
					{
						$("#login_tip").html("�û�������������¼ʧ�ܣ�") ;
					}
					$("#login_tip").show()
					loginstatus.refreshImage()
				}
				else
				{
					rt = true;
					loginstatus.getInfo();
				}
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
			alertdiv.alert("�������,��¼ʧ��,�����µ�¼��");
		},
		complete: function (jqXHR, textStatus) {
		}
	});
	return rt;
}

/**
* �ǳ��¼�
*/
_loginstatus.prototype.logout = function (fun) {
	$("#top_user_info").hide();
	$("#nologin_info").show();
	$("#top_username").text("");
	$("#money").text("");
	$("#tmppay").text("");
	$("#packs").text("");
	window.clearTimeout(loginstatus.Interval);
	$.ajax({
		type: "POST",
		async:false,
		url:this.loginURL,
		data: {
			action:'logout'
		},
		dataType:"xml",
		success: function(data){
			var err = $(data).find("err");
			if($(err).attr("type")=="1")
			{
				if(fun)
				{
					fun();
				}
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
		},
		complete: function (jqXHR, textStatus) {
		}
	});
	
}

/**
* ˢ����֤��
*/
_loginstatus.prototype.refreshImage = function () {
	$("#imgValidatecode_common").attr("src","/plus/VerifyCode.html?t=" + (+new Date));
}
/**
* ��ʾ��֤��
*/
_loginstatus.prototype.showImage = function () {
	$("#validcodespan").html('<img src="/plus/VerifyCode.html?v='+(+new Date)+'" style="width: 80px; height: 26px; cursor: pointer;" onclick="loginstatus.refreshImage()" alt="���ˢ��" title="���ˢ��" align="absMiddle" id="imgValidatecode_common"/>');
	$("#verifycode").unbind()
	$("#verifycode").removeAttr("onfocus"); 
}





$(document).ready(function () {
	loginstatus.getInfo();
});

function RefreshMoney(){}
 