var Util = $.util,
path = $.path.user;
$(function(){
	//�ж��û��Ƿ��¼
	Util.ajax(path, {method: "isLogin"}, function (d) {
		var status = d.status;
		if (status == 0) { //�ѵ�¼
			buyrecord.init();
		} else {
			window.location.href = "Login.html";
		}
	});
	
	window.scrollTo(0,1);
	$.getScroll(buyrecord.refershData);
});

var buyrecord = {
	level: [], //��ȫ�ȼ�
	jt: "",
	zt: "",
	isData: false, //�Ƿ�������
	pageno: 1,
	uname: "", //��ǰ�û���
	init: function(){
		var nowdate = new Date;
		buyrecord.jt = nowdate.getFullYear() + "-" + (nowdate.getMonth() + 1) + "-" + nowdate.getDate();
		buyrecord.zt = nowdate.setDate(nowdate.getDate() -1);
		buyrecord.zt = nowdate.getFullYear() + "-" + (nowdate.getMonth() + 1) + "-" + nowdate.getDate();
			buyrecord.pageno = 1;
			$("#loading").hide();
			$("#load").show();				 
			buyrecord.isData = true;
			buyrecord.buyRecords();
		//����
		$.callBack("#back", function(){
			location.href = "Index.html";        
		});
	},
	//����ˢ��
	refershData: function () {
		buyrecord.pageno++;
		if (buyrecord.isData) { //�����ݾͼ���
			buyrecord.buyRecords();
		}
	},
	//����Ͷע��¼
	buyRecords: function(){
		var param = {
			method : "buyRecord",
			params: {
				pagesize: 20,
				pageno: buyrecord.pageno
			}
		};
		Util.ajax(path, param, function(d){
			var status = d.status,
			error = d.error;
			if(status == 0){
				var result = d.result,
				records = result.records;
				if(records.length > 0){		
					var nowtime = new Date().getFullYear() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getDate(),
					today = [],
					yesterday = [],
					eariler = [];					
					for(var i = 0, l = records.length; i < l; i++){
						var r = records[i],
						adddate = r.addTime,
						buytime = adddate.substring(5,16),
						lottype = r.lottype,
						ishm = r.ishm,
						paymoney = r.paymoney,
						prizemoney = r.prizemoney,
						fqr = buyrecord.uname == r.username ? "�Լ�" : r.username,
						fqr = fqr > 10 ? fqr.substring(0,10) + '...' : fqr,
						state = r.state,
						statestr = state == -1 || state == -2 ? "�ѳ���" : state == 0 || state == 1 || state == 2 ? "����Ч" : state == 3 ? "������" : state == 4 || state == 5 ? prizemoney == 0 ? "δ�н�" : prizemoney.toFixed(2) + coinType : "",
						addtime = adddate.split(" ")[0].replace(/-/g,"/"),
						diffday = (new Date(nowtime) - new Date(addtime)) / (1000 * 60 * 60 * 24),
						 //���޴���Ϸ
						can = lottype == 42 ||lottype == 1 || lottype == 3|| lottype == 4 || lottype == 5 || lottype == 8 || lottype == 15 || lottype == 6 || lottype == 12 || lottype == 17 || lottype == 23 || lottype == 27 || lottype == 32 || lottype == 40 ? "can" : "",
						h = [];
						h[h.length] = '<li lottype='+lottype+' pid='+r.old_id+' class="' + can + (state >= 0 && state <= 3 ? ' sel' : '')+'">';
						h[h.length] = '<p><b class="fr'+(prizemoney != 0 ? " color_red" : "")+'">'+statestr+'</b><b>'+$.util.lotter2(lottype)[0]+(ishm == 1 ? '<em class="he_icon"></em>' : '') + '</b></p>';
						h[h.length] = '<p class="color_999 font_s">'+buytime+(ishm == 1 ? '����'+fqr+'�ĺ���' : 'Ͷע') +'<span class="color_red">'+ paymoney + '</span>'+coinType+'</p>';
						h[h.length] = can ? '<span class="arr_gray"></span>' : ''; //���޴���Ϸ
						h[h.length] = '</li>';
						diffday == 0 ? today[today.length] = h.join("") : diffday == 1 ? yesterday[yesterday.length] = h.join("") : eariler[eariler.length] = h.join(""); 
					}
					$("#div_tz").show();
					buyrecord.addTitle("div_tz", today, yesterday, eariler);
					if(records.length < 20){
						buyrecord.isData = false;
						$("#loading").show().html('<p><b class="font_s2">û�и�����</b>');						
					}
				}else{
					if($("#div_tz li").length == 0){
						$("#load").hide();
						$("#div_tz").show().html('<p class="t_c time_txt " style="height:300px;padding-top:60px;font-size:16px; color:gray">���޼�¼<br><a href="../" style="text-decoration:underline">��ȥͶע��Ϸ�ɣ�</a></p><ul class="brts_list">');
					}else{
						buyrecord.isData = false;
						$("#loading").show().html('<p><b class="font_s2">û�и�����</b>');
					}
				}
			}
		});
		//�鿴��������
		$("#div_tz li").on($.ev, function(){
			if($(this).hasClass("can")){
				var pid = $(this).attr("pid"),
				lottype = $(this).attr("lottype");
				$.store().set('geturl', window.location.href);
				location.href = Util.location(lottype, pid);
			}
		});			
	},
	
	//��ӽ��졢���졢����
	addTitle: function(id,today, yesterday, eariler){
		$("#load").hide();
		var $div = $("#" + id);
		if(today.length > 0){
			$div.find("p.time_txt:eq(0)").show().html('���� ' + buyrecord.jt);
			$div.find("ul:eq(0)").show().append(today.join(""));
		}
		if(yesterday.length > 0){
			$div.find("p.time_txt:eq(1)").show().html('���� ' + buyrecord.zt);
			$div.find("ul:eq(1)").show().append(yesterday.join(""));
		}
		if(eariler.length > 0){
			$div.find("p.time_txt:eq(2)").show();
			$div.find("ul:eq(2)").show().append(eariler.join(""));
		}
		if(document.documentElement.clientHeight < document.documentElement.offsetHeight){
			$("#loading").show().html('<i class="loding"></i><p><b class="font_s2">������...</b></p>');		
		}
	}
}