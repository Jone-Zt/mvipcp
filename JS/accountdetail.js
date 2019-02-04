var Util = $.util,
path = $.path.user;
$(function(){
	//判断用户是否登录
	Util.ajax(path, {method: "isLogin"}, function (d) {
		var status = d.status;
		if (status == 0) { //已登录
			accountdetail.init();
		} else {
			window.location.href = "login.html";
		}
	});
	
	window.scrollTo(0,1);
	$.getScroll(accountdetail.refershData);
});

var accountdetail = {
	level: [], //安全等级
	jt: "",
	zt: "",
	isData: true, //是否有数据
	pageno: 1,
	uname: "", //当前用户名
	init: function(){
		var nowdate = new Date;
		accountdetail.jt = nowdate.getFullYear() + "-" + (nowdate.getMonth() + 1) + "-" + nowdate.getDate();
		accountdetail.zt = nowdate.setDate(nowdate.getDate() -1);
		accountdetail.zt = nowdate.getFullYear() + "-" + (nowdate.getMonth() + 1) + "-" + nowdate.getDate();
			accountdetail.pageno = 1;
			$("#loading").hide();
			$("#load").show();				 
			accountdetail.isData = true;
			accountdetail.fundingDetails();
		//返回
		$.callBack("#back", function(){
			location.href = "index.html";        
		});
	},
	//下拉刷新
	refershData: function () {
		accountdetail.pageno++;
		if (accountdetail.isData) { //有数据就加载
			accountdetail.fundingDetails();
		}
	},
	//加载资金明细
	fundingDetails: function(){
		var param = {
			method: "accountdetail",
			params: {
				pagesize: 20,
				pageno: accountdetail.pageno
			}
		};
		Util.ajax(path, param, function(d){
			var status = d.status,
			error = d.error;
			if(status == 0){
				var result = d.result,
				records = result.records;
				if(records.length > 0){
					var records = result.records,
					nowtime = new Date().getFullYear() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getDate(),
					today = [],
					yesterday = [],
					eariler = [];
					for(var i = 0, l = records.length; i < l; i++){
						var r = records[i],
						adddate = r.addtime,
						type = r.type,
						money = r.money, //账户"+coinType+"
						paymoney = r.paymoney,
						buytime = adddate.split(" ")[1], //投注时间
						addtime = adddate.split(" ")[0].replace(/-/g,"/"),
						diffday = (new Date(nowtime) - new Date(addtime)) / (1000 * 60 * 60 * 24),
						inout = r.inout,
						h = [];
						h[h.length] = '<li>';
						h[h.length] = '<p><b class=\"fr '+(inout == 1 ? ' color_green\">-' : 'color_red\">+') + paymoney.toFixed(2) +''+coinType+'</b><b>'+type+'</b></p>';
						h[h.length] = '<p class="color_999 font_s"><span class="fr">'+coinType+''+money.toFixed(2)+''+coinType+'</span>'+adddate.substring(5,16)+'</p>';
						h[h.length] = '<!--<span class="arr_gray"></span>-->';
						h[h.length] = '</li>';
						diffday == 0 ? today.push(h.join("")) : diffday == 1 ? yesterday.push(h.join("")) : eariler.push(h.join("")); 
					}
					$("#div_zj").show();
					accountdetail.addTitle("div_zj",today, yesterday, eariler)
					$("#div_zj ul").addClass("brts_list_other");
					if(records.length < 20){
						accountdetail.isData = false;
						$("#loading").show().html('<p><b class="font_s2">没有更多了</b>');						
					}					
				}else{
					if($("#div_zj li").length == 0){
						$("#load").hide();
						$("#div_zj").show().html('<p class="t_c time_txt " style="height:300px;padding-top:60px;font-size:16px; color:gray">暂无记录<br><a href="../" style="text-decoration:underline">快去投注游戏吧！</a></p><ul class="brts_list">');
					}else{
						accountdetail.isData = false;
						$("#loading").show().html('<p><b class="font_s2">没有更多了</b>');
					}
				}
			}
		});	
	},
	
	//添加今天、明天、更早
	addTitle: function(id,today, yesterday, eariler){
		$("#load").hide();
		var $div = $("#" + id);
		if(today.length > 0){
			$div.find("p.time_txt:eq(0)").show().html('今天 ' + accountdetail.jt);
			$div.find("ul:eq(0)").show().append(today.join(""));
		}
		if(yesterday.length > 0){
			$div.find("p.time_txt:eq(1)").show().html('昨天 ' + accountdetail.zt);
			$div.find("ul:eq(1)").show().append(yesterday.join(""));
		}
		if(eariler.length > 0){
			$div.find("p.time_txt:eq(2)").show();
			$div.find("ul:eq(2)").show().append(eariler.join(""));
		}
		if(document.documentElement.clientHeight < document.documentElement.offsetHeight){
			$("#loading").show().html('<i class="loding"></i><p><b class="font_s2">加载中...</b></p>');		
		}
	}
}