//刷新"+coinType+"
function RefreshMoney()
{
	default_login();
}

//默认登录触发事件
function default_login(){
	var uname = $("#top_username").text()
	var ye = $("#money").text().replace(/￥/g,"").replace(/,/g,"")
	var jf = $("#packs").text().replace(/￥/g,"").replace(/,/g,"")
	var path = $("#btn_chongz").attr("href");
	var str = "<span>"+uname+"，您的账户"+coinType+"为<strong class='red eng'>"+ye+"</strong>"+coinType+" 积分<b class='red eng'>"+jf+"</b>分【<b class='i-jb'></b><a target='_blank' href='"+path+"'>账户充值</a>】"
	$("#userMoneyInfo").html(str)
	$("#userMoneyInfo2").html(str)
	$("#buySYSpan").parent().show();
	$("#buyJFSpan").parent().show();
	ShowMoney();
}
//默认退出触发事件
function default_logout(){
	var str = "您尚未登录，请先<a title='' href='javascript:void 0' onclick='alertdiv.login(default_login)'>登录</a>"
	$("#userMoneyInfo").html(str)
	$("#userMoneyInfo2").html(str)
	$("#buySYSpan").parent().hide();
	$("#buyJFSpan").parent().hide();
}


//验证投注数据
function CHeck_ZiGou(){
	var cname =  $("#cname").val();
	if($("#cestate").val()==0)
	{
		alertdiv.alert("您好，"+cname+"已暂停投注！");
		return ;
	}
	if(surplussecond<=0)
	{
		alertdiv.alert("您好，"+cname+$("#issue").val()+"期已截止！");
		return ;
	}
	if(IsSubmit)
	{
		alertdiv.alert(SubmitErrInfo);
		return ;
	}
	var codes = GetCodeList()
	if(codes=="")
	{
		alertdiv.alert("您还没有选择号码");
		return ;
	}
	if((codes.length-codes.replace(/\$/g,"").length)>5000)
	{
		alertdiv.alert("投注内容不能超过5000行");
		return;
	}
	if(zhushu <= 0 )
	{
		alertdiv.alert("您选择的号码不正确");
		return ;
	}
	if(zhushu ==  undefined  )
	{
		alertdiv.alert("您选择的号码不正确");
		return ;
	}
	if ($("input[name=agreement_dg]").attr("checked") == false)
	{
		alertdiv.alert("同意《用户合玩投注协议》才能投注");
		return ;
	}
	
	var playname = CodeTextArr[tztype]
	var expectlistsuc = $("#expectlistsuc").val();
	var beishulistsuc = $("#beishulistsuc").val();
	if(expectlistsuc=="" || beishulistsuc=="")
	{
		alertdiv.alert("请选择您要投注的期号");
		return ;
	}	
	var expectnum = expectlistsuc.split(",").length;
	var allmoney = $("#sum_m").text();
	var msg = "<p style='text-align:left;text-indent:2em;'>请确认您的投注信息</p>";
	msg = msg + "<p style='text-align:left;text-indent:2em;'>玩法：<font color='red' style='font-weight:bold'>"+playname+"</font></p>";
	msg = msg + "<p style='text-align:left;text-indent:2em;'>期数：共<font color='red' style='font-weight:bold'>"+expectnum+"</font>期</p>";
	msg = msg + "<p style='text-align:left;text-indent:2em;'>"+coinType+"：<font color='red' style='font-weight:bold'>"+allmoney+"</font>"+coinType+"</p>";
	msg = msg + "<p style='text-align:left;text-indent:2em;'>确认提交？</p>"
	alertdiv.confirm(msg,ZiGou);
	
}
//投注
function ZiGou(){
	var protype = CodeTextArr[tztype]
	var codes = GetCodeList();
	var issue = $("#issue").val();
	var expectlistsuc = $("#expectlistsuc").val();
	var beishulistsuc = $("#beishulistsuc").val();
	var expectnum = expectlistsuc.split(",").length;
	var allmoney = $("#sum_m").text();
	var single_m = $("#single_m").text();
	var ZjCut=0;
	var BuyJF=0;
	if ($("#zh_stop").attr("checked"))
	{
		ZjCut=1;
	}
	if ($("#Buy_JF").attr("checked"))
	{
		BuyJF=1;
	}
	var zuijia = 0;
	if ($("#zuijia").length > 0 && $("#zuijia").attr("checked"))
	{
		zuijia=1;
	}
	IsSubmit = true;
	$.ajax({
		type: "POST",
		url: UrlJson.ZGUrl,
		data: {
			expect:issue,
			protype:escape(protype),
			allmoney:allmoney,
			single_m:single_m,
			codes:codes,
			iszhuihao:expectnum,
			expectlistsuc:expectlistsuc,
			beishulistsuc:beishulistsuc,
			zuijia:zuijia,
			ZjCut:ZjCut,
			BuyJF:BuyJF
		},
		dataType:"xml",
		success: function(data){
			var err = $(data).find("err");
			if($(err).attr("type")=="-1") //未登录
			{
				alertdiv.login(ZiGou);
			}
			else if($(err).attr("type")=="0")
			{
			alertdiv.alert("对不起您的"+coinType+"不足！");
			return ;
			}
			else if($(err).attr("type")=="-2")
			{
			alertdiv.alert("对不起当前期已经截止投注！");
			return ;
			}
			else if($(err).attr("type")=="4")
			{
			alertdiv.alert("投注"+coinType+"已经超过最大限额！");
			return ;
			}
			else if($(err).attr("type")=="2")
			{
			alertdiv.alert("对不起您的积分不足！");
			return ;
			}
			else if($(err).attr("type")=="1")
			{
				$("#_ajax_common_Info4").text("投注成功");
				$("#_show_project").attr("href","/Trade/Project_Info.html?id="+$(err).attr("msg"))
				alertdiv.showBox("_ajax_common_div4", "温馨提示", null, 250, null,null) 
				ColseCountdownWin('_ajax_common_div4','sytime','sytime_second')
					//清空
				ClearSelectedBall()
				zhushu = 0;//注数清0
				$("#expectlistsuc").val("");
				$("#beishulistsuc").val("");
				$("#zhxdt_bs").val(1);
				$("ul#code_list").empty();
				$("#zh_check").attr("checked",false)
				$("#zh_check").change()
				JoinExpectBeishu();
				ShowMoney();
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
		error: function(event,request, settings,err){
			alertdiv.alert($(err).attr("当前服务器忙，投注失败。"));
		},
		complete: function(HttpReques,err){
			IsSubmit = false;
		}
	});
	
}



//验证合玩数据
function Check_Hemai(){
	var cname =  $("#cname").val();
	if($("#cestate").val()==0)
	{
		alertdiv.alert("您好，"+cname+"已暂停投注！");
		return ;
	}
	if(surplussecond<=0)
	{
		alertdiv.alert("您好，"+cname+$("#issue").val()+"期已截止！");
		return ;
	}
	if(IsSubmit)
	{
		alertdiv.alert(SubmitErrInfo);
		return ;
	}
	var codes = GetCodeList()
	if(codes=="")
	{
		alertdiv.alert("您还没有选择号码");
		return ;
	}
	if((codes.length-codes.replace(/\$/g,"").length)>399)
	{
		alertdiv.alert("投注内容不能超过400行");
		return;
	}
	if(zhushu <= 0 )
	{
		alertdiv.alert("您选择的号码不正确");
		return ;
	}
	if ($("input[name=agreement_hm]").attr("checked") == false)
	{
		alertdiv.alert("同意《用户合玩投注协议》才能投注");
		return ;
	}
	var playname = CodeTextArr[tztype]
	var expectlistsuc = $("#expectlistsuc").val();
	var beishulistsuc = $("#beishulistsuc").val();
	
	if(expectlistsuc=="" || beishulistsuc=="")
	{
		alertdiv.alert("请选择您要投注的期号");
		return ;
	}
	var expectnum = expectlistsuc.split(",").length;
	var allmoney = Number($("#sum_m").text());
	var isbd = $("#isbaodi").attr("checked") ;
	if (fenshu<1){
		alertdiv.alert("您要分成的份数必须大于等于1！");
		$("#fsInput").focus();
		return;
	}
	else if (allmoney/fenshu<1){
		alertdiv.alert("每份"+coinType+"必须大于等于1！");
		$("#fsInput").focus();
		return;
	}
	else if ( buyCount < fenshu *0.02 ){
		alertdiv.alert("您要投注的份数至少应该为所分份数的2% ("+Math.ceil(fenshu*0.02)+"份)！");
		$("#buyCount").focus();
		return;
	}
	else if (buyCount > fenshu){
		alertdiv.alert("您要投注的份数不能大于所分的份数！");
		$("#baodiCount").focus();
		return;
	}
	else if (isbd && baodiCount < 1){
		alertdiv.alert("您要保底的份数不能为空！");
		$("#baodiCount").focus();
		return;
	}
	else if (isbd && baodiCount>fenshu){
	  	alertdiv.alert("您要保底的份数不能大于所分的份数！");
		$("#baodiCount").focus();
		return;
	}
	else if (isbd && baodiCount  < fenshu * 0.02){
		alertdiv.alert("保底"+coinType+"至少为总"+coinType+"的2% ("+Math.ceil(fenshu*0.02)+"份)！");
		$("#baodiCount").focus();
		return;
	}
	else if (isbd&&buyCount+baodiCount>fenshu){
		alertdiv.alert("您要投注的份数和保底的份数之和不能大于所分的份数！");
		$("#baodiCount").focus();
		return;
	}
	else if($("#moreCheckbox").attr("checked") && $("#dx2").attr("checked") && !(/^[\w\-\u4e00-\u9fa5]+(?:,[\w\-\u4e00-\u9fa5]+)*$/.test($.trim($("textarea[name=buyuser]").val())))){
      	alertdiv.alert("限定网友的格式不对！");
		$("#buyuser").focus();
		return;
	}
	
	var msg = "<p style='text-align:left;text-indent:2em;'>请确认您的投注信息</p>";
	msg = msg + "<p style='text-align:left;text-indent:2em;'>玩法：<font color='red' style='font-weight:bold'>"+playname+"</font></p>";
	msg = msg + "<p style='text-align:left;text-indent:2em;'>期数：共<font color='red' style='font-weight:bold'>"+expectnum+"</font>期</p>";
	msg = msg + "<p style='text-align:left;text-indent:2em;'>"+coinType+"：<font color='red' style='font-weight:bold'>"+allmoney+"</font>"+coinType+"</p>";
	msg = msg + "<p style='text-align:left;text-indent:2em;'>分成：<font color='red' style='font-weight:bold'>"+fenshu+"</font>份</p>";
	msg = msg + "<p style='text-align:left;text-indent:2em;'>抽成：<font color='red' style='font-weight:bold'>"+$("#tcSelect > option:selected").val()+"</font>%</p>";
	msg = msg + "<p style='text-align:left;text-indent:2em;'>投注：<font color='red' style='font-weight:bold'>"+buyCount+"</font>份</p>";
	if(isbd)
	{
		msg = msg + "<p style='text-align:left;text-indent:2em;'>保底：<font color='red' style='font-weight:bold'>"+baodiCount+"</font>份</p>";
	}
	msg = msg + "<p style='text-align:left;text-indent:2em;'>确认提交？</p>"
	alertdiv.confirm(msg,HeMai);
	
	
}
//合玩
function HeMai(){
	var protype = CodeTextArr[tztype]
	var codes = GetCodeList()
	var issue = $("#issue").val();
	var expectlistsuc = $("#expectlistsuc").val();
	var beishulistsuc = $("#beishulistsuc").val();
	var expectnum = expectlistsuc.split(",").length;
	var allmoney = $("#sum_m").text();
	var single_m = $("#single_m").text();
	var ZjCut=0;
	var BuyJIF=0;
	if ($("#zh_stop").attr("checked"))
	{
		ZjCut=1;
	}
	if ($("#Buy_JIF").attr("checked"))
	{
		BuyJIF=1;
	}
	var zuijia = 0;
	if ($("#zuijia").length > 0 && $("#zuijia").attr("checked"))
	{
		zuijia=1;
	}
	var tc = $("#tcSelect > option:selected").val();
	var isopen = $("input[name=gk]:checked").val();
	var isbaodi =0;
	if($("#isbaodi").attr("checked"))
	{
		isbaodi = 1
	}
	var isbd = $("#isbaodi").attr("checked") ;
	var caseInfo = $("#caseInfo").val();
	var zgdx = $("input[name=zgdx]:checked").val();
	var buyuser = $("textarea[name=buyuser]").val();
	IsSubmit = true;
	$.ajax({
		type: "POST",
		url: UrlJson.HMUrl,
		data: {
			protype:escape(protype),
			expect:issue,
			allmoney:allmoney,
			single_m:single_m,
			codes:escape(codes),
			expectlistsuc:expectlistsuc,
			beishulistsuc:beishulistsuc,
			iszhuihao:expectnum,
			zuijia:zuijia,
			ZjCut:ZjCut,
			BuyJIF:BuyJIF,
			fenshu:fenshu,
			tc:tc,
			isopen:isopen,
			buyCount:buyCount,
			isbaodi:isbaodi,
			baodiCount:baodiCount,
			caseInfo:escape(caseInfo),
			zgdx:zgdx,
			buyuser:escape(buyuser)
		},
		dataType:"xml",
		success: function(data){
			var err = $(data).find("err");
			if($(err).attr("type")=="-1") //未登录
			{
				alertdiv.login(HeMai)
			}
			else if($(err).attr("type")=="0")
			{
			alertdiv.alert("对不起您的"+coinType+"不足！");
			return ;
			}
			else if($(err).attr("type")=="-2")
			{
			alertdiv.alert("对不起当前期已经截止投注！");
			return ;
			}
			else if($(err).attr("type")=="4")
			{
			alertdiv.alert("投注"+coinType+"已经超过最大限额！");
			return ;
			}
			else if($(err).attr("type")=="2")
			{
			alertdiv.alert("对不起您的积分不足！");
			return ;
			}
			else if($(err).attr("type")=="1")
			{
				$("#_ajax_common_Info4").text("发起合玩成功");
				alertdiv.showBox("_ajax_common_div4", "温馨提示", null, 250, null,null) 
				ColseCountdownWin('_ajax_common_div4','sytime','sytime_second')
				
				ClearSelectedBall()
				//清空
				zhushu = 0;//注数清0
				$("#expectlistsuc").val("");
				$("#beishulistsuc").val("");
				$("#zhxdt_bs").val(1);
				$("ul#code_list").empty();
				$("#zh_check").attr("checked",false)
				$("#zh_check").change();
				$("#rd3").attr("checked",true);
				$("#rd3").change();
				
				perMoney=0; 
				fenshu = 0; 
				buyCount = 0; 
				baodiCount = 0; 
				$("#fsInput,#bdInput").val(0);
				$("#rgInput").val(1);
				$("input[name=gk]").eq(0).click();
				$("#isbaodi").removeAttr("checked");
				$("#bdInput").attr("disabled","disabled");
				$("#caseInfo").val("");
				$("#buyuser").val("");
				$("#moreCheckbox").click();
				$("#hmreset").click();
				JoinExpectBeishu();
				ShowMoney();
				
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
		error: function(event,request, settings,err){
			alertdiv.alert($(err).attr("当前服务器忙，发起合玩失败。"));
		},
		complete: function(HttpReques,err){
			IsSubmit = false;
		}
	});
}
