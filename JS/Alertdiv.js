function _alertdiv() {
    this.success = 1;
    this.error = 0;
}
var alertdiv = new _alertdiv();

$(document).ready(function () {
	
	//��¼
	$('#_login_common').dialog( {
		autoOpen :false,
		modal :true,
		width :260,
		resizable :false,
		title :'�û���¼'
	});
	
	//��ͨ��ʾ
    $('#_box_common').dialog({
        modal: true,
        autoOpen: false,
        width: 260,
        resizable: false,
        buttons: {
            '�ر�': function () {
                $(this).dialog('close');
            }
        }
    });
    //ȷ����ʾ
    $('#_config_common').dialog({
        modal: true,
        autoOpen: false,
        width: 260,
        resizable: false,
        title: 'ȷ����ʾ'
    });
	
	
});
/**
* ���õ�¼�Ի�����
* ��¼֮ǰ����Ի���������
*/
_alertdiv.prototype.login = function (fun) {
    //�������
    $("#login_tip").html("");
    $("#username_common").val("");
    $("#password_common").val("");
    $("#verifycode").val("");
    $("#_login_common").dialog("open");
    $("#login_tip").hide();
	$("#commonLoginButton").unbind()
	$("#commonLoginButton").click(function(){
		alertdiv.commonLogin(fun)
	})
}

/**
* ��¼�ύ
* @return
*/
_alertdiv.prototype.commonLogin = function (fun) {
    if (loginstatus.login()) {
        $('#_login_common').dialog('close');
        if (fun) {
         	fun();
        }
    }
}

//ȷ������ʾ
_alertdiv.prototype.confirm = function (msg, trueFunc, falseFunc, title) {
    if (typeof (title) == "undefined") {
        title = "ȷ����ʾ";
    }
    $('#_config_common font.t_weight').html(msg);
    $('#_config_common').dialog({
        title: title,
        position:"center",
        buttons: {
			 'ȡ��': function () {
                if (falseFunc) {
                    falseFunc();
                }
                $(this).dialog('close');
            },
			 'ȷ��': function () {
                if (trueFunc) {
                    trueFunc();
                }
                $(this).dialog('close');
            }
			
       }
    }).dialog('open');
}

//ȷ������ʾ ֻ��ȷ����û��ȡ����
_alertdiv.prototype.confirm2 = function (msg, trueFunc, title) {
    if (typeof (title) == "undefined") {
        title = "ȷ����ʾ";
    }
    $('#_config_common font.t_weight').html(msg);
    $('#_config_common').dialog({
        title: title,
        position: "center",
        buttons: {
            'ȷ��': function () {
                if (trueFunc) {
                    trueFunc();
                }
                $(this).dialog('close');
            }
        }
    }).dialog('open');
}
_alertdiv.prototype.loading = function () {
    $('#_box_loading').ajaxSend(function () {
        $(this).dialog('open');
    }).ajaxComplete(function () {
        $(this).dialog('close');
    });
}

/**
* ��ʾ����
*
* @param str
* ��ʾ��Ϣ
* @return
*/
_alertdiv.prototype.alert = function (msg) {
    alertdiv.box(alertdiv.success, msg);
}

/**
* Ͷע�ɹ�
*
* @return
*/
_alertdiv.prototype.buySeccess = function () {
    var title = "��ܰ��ʾ";
    $('#_ajax_common_div4').dialog({
        title: "��ܰ��ʾ",
        resizable: false,
        modal: true,
        height: 'auto',
        width: '260px'
    });
}

/**
* Ͷע�ɹ�
*
* @return
*/
_alertdiv.prototype.showBox = function (divId, title, height, width, modal,resizable) {
    if (!title || title == null)
        title = "��ʾ";
    if (!height || height == null)
        height = 'auto';
    if (!width || width == null)
        width = 'auto';
    if (!modal || modal == null)
        modal = true;
    if (!resizable || resizable == null)
        resizable = false;
    var p = {
        title: title,
        height: height,
        width: width,
        modal: modal,
        resizable: resizable
    };
    $("#" + divId).dialog(p).dialog('open');
}

/**
* ������Ϣ
*
* @param type
* ����
* @param msg
* ��ʾ����
* @return
*/

_alertdiv.prototype.box = function (type, msg) {
    var title;
    if (type == alertdiv.success) {
        title = "��ܰ��ʾ";
    } else {
        title = "������ʾ";
    }
    $('#_box_common font.t_weight').html(msg);
    var p = {
        title: title,
        position: 'center'
    };
    $('#_box_common').dialog(p).dialog('open');
}

/**
* �رղ�
* divId ��ID����
* @return
*/
_alertdiv.prototype.close = function (divId) {
    $('#' + divId).dialog('close');
}

/**
* �رղ�
* @index ������(��ѡ����) ��ѡֵΪ1,2,3
* @return
*/
_alertdiv.prototype.closeAjaxLayer = function (index) {
    if (!index) {
        index = 1;
    }
    $('#_ajax_common_div' + index).dialog('close');
}
 

//��ʾѡ����Ϸ(28)�����˵�
function showMenuDownPanel(val, span) {
    var div = $cailele_index_fid("downpanelDIV");
    var _bgdiv = $cailele_index_fid("downpanelbgDIV");
    if (!span)
        span = $cailele_index_fid("menuDownBtn");

    if (val == 1) {
        div.style.display = "inline-block";
        span.className = "menuhover";
        try{_bgdiv.style.display = "inline-block";}catch(e){}
        try{showHideSelect(0);}catch(e){}
    }
    else {
        div.style.display = "none";
        span.className = "menu";
        try{_bgdiv.style.display = "none";}catch(e){}
        try{showHideSelect(1);}catch(e){}
    }
    return;
}
/*--����"ѡ����Ϸ"��������������ʾ---*/
function menuShower(){
	document.getElementById("menuBox").style.display = "block";
	document.getElementById("selectMenuTxt").className = "txt hover";
}
 
function menuHider(){
	document.getElementById("menuBox").style.display = "none";
	document.getElementById("selectMenuTxt").className = "txt";
}

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?381450dfdb0c66d3b6db264900f302c0";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

//�����ղ� 
function AddFavorite(sURL, sTitle) { 
sURL = encodeURI(sURL);
 try{
window.external.addFavorite(sURL, sTitle);
}catch(e) {
try{
window.sidebar.addPanel(sTitle, sURL, "");
}catch (e) {   
alert("�����ղ�ʧ�ܣ���ʹ��Ctrl+D�������,���ֶ�����������������."); 
}
} 
} 
//��Ϊ��ҳ 
function SetHome(url){ 
if (document.all) { 
document.body.style.behavior='url(#default#homepage)'; 
   document.body.setHomePage(url); 
}else{ 
alert("����,�����������֧���Զ�����ҳ��Ϊ��ҳ����,�����ֶ�������������ø�ҳ��Ϊ��ҳ!"); 
} 
} 