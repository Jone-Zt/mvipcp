var isupdate =  false; //�Ƿ������ϴ�
$(function(){
	$("#joinTab > li").click(function(){
		var index = $(this).index();
		$("#joinTab > li").removeClass("an_cur")
		$("#joinTab > li").eq(index).addClass("an_cur");
		$("#show_list_div > table").hide();
		$("#show_list_div > table").eq(index).show();
	})
	
	/*����������¼�*/
	$("#buynum").keyup(setfenshu);
	$("#buynum").val("");
	
	/*�μӺ���*/
	
	/*��������*/
	$("#WithdrawUser").click(Withdraw_User)
	/*��������*/
	$("#zhuihaostop").click(zhuihao_stop)
	
	/*���ؼ���Ͷע*/
	$("#aContinue").click(function(){
		window.location.href=$("#aContinue_link").attr("href")
	})
	
	/*�鿴����*/
	$("#aViewPro").click(default_login)
	
	/*�ر�Ͷע�ɹ���ʾ*/
	$("#_ajax_common_btn5").click(function(){
		alertdiv.close('_ajax_common_div5');
		default_login();
	})
	
	upfile_Even();/*�ϴ��ļ� �¼�*/
	//up_stop_Even();/*ȡ���ϴ� �¼�*/
})

function default_login(){window.location.reload();}
function default_logout(){window.location.reload();}
//�����������
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
//�μӺ���
function check_project(){
	var buynum =$("#buynum").val();
	var senumber = Number($("#senumber").val());
	var onemoney = $("#onemoney").val();
	var pid  = $("#onemoney").val();
	if (buynum=="")
	{
		alertdiv.alert("Ͷע��������Ϊ�գ�");
		$("#buynum").focus();
		return;
	}
	else if (Number(buynum) <= 0)
	{
		alertdiv.alert("Ͷע��������С��1��");
		$("#buynum").focus();
		return;
	}
	else if (Number(buynum) > Number(senumber))
	{
		alertdiv.alert("��Ͷע�������ܴ���ʣ�������");
		$("#buynum").focus();
		return;
	}
	var msg = "<p style='text-align:left;text-indent:2em;'>���ã�����ȷ��</p>";
	msg = msg + "<p style='text-align:left;text-indent:2em;'>Ͷע������<font color='red' style='font-weight:bold'>"+buynum+"</font>��</p>";
	msg = msg + "<p style='text-align:left;text-indent:2em;'>Ͷע"+coinType+"��<font color='red' style='font-weight:bold'>��"+Number(buynum)*formatCurrency2(onemoney)+""+coinType+"</font></p>";
	alertdiv.confirm(msg,add_project);
}

//�μӺ���
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
			if($(err).attr("type")=="-1") //δ��¼
			{
				alertdiv.login(add_project)
			}
			else if($(err).attr("type")=="0")
			{
			alertdiv.alert("�Բ�������"+coinType+"���㣡");
			return ;
			}
			else if($(err).attr("type")=="2")
			{
			alertdiv.alert("�Բ���ǰ���Ѿ���ֹͶע��");
			return ;
			}
			else if($(err).attr("type")=="-3")
			{
			alertdiv.confirm2("ϵͳ��æ������!",default_login)
			return ;
			}
			else if($(err).attr("type")=="3")
			{
			alertdiv.confirm2("�Բ��𣬸÷����ѳ���!",default_login)
			return ;
			}
			else if($(err).attr("type")=="4")
			{
			alertdiv.confirm2("�Բ��𣬸÷�����ֹͣ׷��!",default_login)
			}
			else if($(err).attr("type")=="6")
			{
			alertdiv.confirm2("�Բ��𣬸÷�������Ա!",default_login)
			}
			else if($(err).attr("type")=="5")
			{
			alertdiv.confirm2("����"+coinType+"�Ѿ���������޶",default_login)
			}
			else if($(err).attr("type")=="-2")
			{
			alertdiv.alert("�Բ�����Ͷע�ķݴ��ڵ�ǰ������");
			return ;
			}
			else if($(err).attr("type")=="1")
			{
				alertdiv.showBox("_ajax_common_div5", "��ܰ��ʾ", null, 250, null,null) 
				ColseCountdownWin('_ajax_common_div5','sytime2','sytime2_second',null,default_login)
				//alertdiv.confirm2("���ã�Ͷע�ɹ���ף���н�!",default_login)
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
			alertdiv.alert("����ʧ��,�������ύ��");
		},
		complete: function (jqXHR, textStatus) {
		}
	});
	
}

function Withdraw_User(){
	alertdiv.confirm("���ã�ȷ��Ҫ������",function(){
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
					alertdiv.confirm2("�Բ��𣬸÷����ѹ����޷�����!",default_login)
				}
				else if($(err).attr("type")=="2")
				{
					alertdiv.confirm2("�Բ��𣬸÷����ѳ���!",default_login)
				}
				else if($(err).attr("type")=="3")
				{
					alertdiv.confirm2("�Բ��𣬸÷�����ֹͣ׷��!",default_login)
				}
				else if($(err).attr("type")=="4")
				{
					alertdiv.confirm2("�Բ��𣬸÷����ѳ���50%�޷�����!",default_login)
				}
				else if($(err).attr("type")=="1")
				{
					alertdiv.confirm2("���ã������ɹ�!",default_login)
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
				alertdiv.alert("����ʧ��,�������ύ��");
			},
			complete: function (jqXHR, textStatus) {
			}
		});
		
	});
}

function zhuihao_stop(){
	alertdiv.confirm("���ã�ȷ��Ҫֹͣ׷�ţ�",function(){
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
					alertdiv.confirm2("�Բ��𣬸÷����ѹ����޷�ֹͣ׷��!",default_login)
				}
				else if($(err).attr("type")=="2")
				{
					alertdiv.confirm2("�Բ��𣬸÷����ѳ���!",default_login)
				}
				else if($(err).attr("type")=="3")
				{
					alertdiv.confirm2("�Բ��𣬸÷�����ֹͣ׷��!",default_login)
				}
				else if($(err).attr("type")=="1")
				{
					alertdiv.confirm2("���ã�ֹͣ׷�ųɹ�!",default_login)
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
				alertdiv.alert("����ʧ��,�������ύ��");
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
		msg = "<p style='text-align:left;text-indent:2em;'>���ã�ȷ��Ҫ������</p>";
		msg += "<p style='text-align:left;text-indent:2em;'>�����Գ���ǰ��</p>";
	}
	else
	{
		msg = "<p style='text-align:left;text-indent:2em;'>���ã�ȷ��Ҫֹͣ׷�ţ�</p>";
		msg += "<p style='text-align:left;text-indent:2em;'>�����Գ���ǰ��</p>";
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
			if($(err).attr("type")=="-1") //δ��¼
			{
				alertdiv.login(function(){WithdrawIssue(Issue);})
			}
			else if($(err).attr("type")=="-2")
			{
				alertdiv.confirm2($(err).attr("msg"),default_login)
			}
			else if($(err).attr("type")=="1")
			{
					
				alertdiv.confirm2("���ã������ɹ�!",default_login)
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
			alertdiv.alert("����ʧ��,�������ύ��");
		},
		complete: function (jqXHR, textStatus) {
		}
	});
}

/*�ϴ��ļ�  �¼�*/
function upfile_Even(){
	/*�ϴ��ļ� �¼�*/
	$("#upfile").change(function(){
		if(!IsValiDateFile($(this).val(),"txt"))
		{
			alertdiv.confirm2("���ã��ϴ��ļ�ֻ֧��txt��ʽ��������ѡ���ļ���");
			return;
		}
		else if(isupdate)
		{
			alertdiv.confirm2("���ã����ļ������ϴ��У�");
			return;
		}
		else
		{
			updatefile();
		}
	})
}


/*�첽�ϴ��ļ�*/
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
		url:url,//�����ļ��ϴ��ķ������������ַ
        secureuri:false,//һ������Ϊfalse
        fileElementId:'upfile',//�ļ��ϴ��ռ��id����  <input type="file" id="file" name="file" />
        dataType: 'text',//����ֵ���� һ������Ϊjson
        success: function (data, status)  //�������ɹ���Ӧ������
        {
			var strArr  = data.split("|")
			var err = strArr[0]
			if(err=="1")
			{
				var statue = $(data).find("statue");
				var str = "";
				if(strArr[1]=="1")
				{
					alertdiv.confirm2("���ã��ϴ��ɹ�!",default_login)
					str += "<i class='u-ico u-suc'></i>"
					str += "<em class='red m-r'>�ϴ��ɹ�</em>"
					str += "��"+strArr[2]+" "+strArr[3]+"ע | "
					str += "<a target='_blank' title='' href='"+strArr[4]+"'>�鿴����</a> "
					str += "<span class='gray'>�ϴ�ʱ�䣺"+strArr[5]+"</span>"
					$("#up_info").html(str);
						
				}
				else if(strArr[1]=="0")
				{
					alertdiv.alert("�ϴ��ļ�ʧ�ܣ�");
					str += "<i class='u-ico u-fail'></i>�ļ����ʧ��, ������"
					str += "<strong class='red' style=''>"+strArr[2]+"������</strong>(<a  href='javascript:;' onclick=\"alertdiv.alert('"+(strArr[3].replace(/;/g,"<br>"))+"')\">�鿴����</a>), �������ϴ�����"
					str += "��ϵ�ͷ�"
					$("#up_info").html(str);
						
				}
				else if(strArr[1]=="-1")
				{
					alertdiv.alert("�ϴ��ļ���ʵ��ע���������");
					str += "<i class='u-ico u-fail'></i>ע�������, �趨ע��Ϊ"+strArr[2]
					str += "�ϴ�ע��Ϊ<strong class='red' style=''>"+strArr[3]+", �������ϴ�����"
					str += "��ϵ�ͷ�"
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
        error: function (data, status, e)//��������Ӧʧ�ܴ�����
        {
        	alertdiv.alert("�ϴ��ļ���������ϵ�ͷ���лл��");
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
	if(showtxt.innerHTML == "�鿴�����¼")
	{
		content.style.display = "";
		showtxt.innerHTML = "���غ����¼";
	}
	else
	{
		content.style.display = "none";
		showtxt.innerHTML = "�鿴�����¼";
	}
}
function list1()
{	
	if(showtxt1 != null){
	if(showtxt1.innerHTML == "�鿴��ϸ�������")
	{
		content1.style.display = "";
		showtxt1.innerHTML = "������ϸ�������";
	}
	else
	{
		content1.style.display = "none";
		showtxt1.innerHTML = "�鿴��ϸ�������";
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

/*Բ�ΰٷֱ�*/
var  paper =  null;
function init(b,n,t,c){
	//��ʼ��Raphael���� 
	this.paper = Raphael(b, 80, 80); 
	
	//�ѵ�ͼ�Ȼ���ȥ 
	this.paper.image("/Images/progressBg.jpg", 0, 0, 80, 80); 
	
	//���ȱ�����0��1���ڱ��������ǻ�65% 
	//��Ҫע�⣬������㷨��֧�ֻ�100%��Ҫ��99.99%���� 
	var percent = n	, 
		drawPercent = percent >= 1 ? 0.9999 : percent; 
	
	//��ʼ��������λ�ã�����ͼ 
	//r1����Բ�뾶��r2����Բ�뾶 
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
	
	//��path������ͼ�Σ�������Բ��������ֱ����ɣ������ߵ��㷨���� 
	this.paper.path(path) 
		//��佥��ɫ����#3f0b3f��#ff66ff 
		.attr({"stroke-width":0, "stroke":"", "fill":"90-" + c}); 
	
	//��ʾ�������� 
	$(t).text(Math.round(percent*100) + "%"); 
}
if(document.getElementById("test")!=null){
var x1 = document.getElementById("test").innerText;  
init('bg',x1,'#txt','#f00');} 