//ˢ��"+coinType+"
function RefreshMoney()
{
	default_login();
}

//Ĭ�ϵ�¼�����¼�
function default_login(){
	var uname = $("#top_username").text()
	var ye = $("#money").text().replace(/��/g,"").replace(/,/g,"")
	var jf = $("#packs").text().replace(/��/g,"").replace(/,/g,"")
	var path = $("#btn_chongz").attr("href");
	var str = "<span>"+uname+"�������˻�"+coinType+"Ϊ<strong class='red eng'>"+ye+"</strong>"+coinType+" ����<b class='red eng'>"+jf+"</b>�֡�<b class='i-jb'></b><a target='_blank' href='"+path+"'>�˻���ֵ</a>��"
	$("#userMoneyInfo").html(str)
	$("#userMoneyInfo2").html(str)
	$("#buySYSpan").parent().show();
	$("#buyJFSpan").parent().show();
	ShowMoney();
}
//Ĭ���˳������¼�
function default_logout(){
	var str = "����δ��¼������<a title='' href='javascript:void 0' onclick='alertdiv.login(default_login)'>��¼</a>"
	$("#userMoneyInfo").html(str)
	$("#userMoneyInfo2").html(str)
	$("#buySYSpan").parent().hide();
	$("#buyJFSpan").parent().hide();
}


//��֤Ͷע����
function CHeck_ZiGou(){
	var cname =  $("#cname").val();
	if($("#cestate").val()==0)
	{
		alertdiv.alert("���ã�"+cname+"����ͣͶע��");
		return ;
	}
	if(surplussecond<=0)
	{
		alertdiv.alert("���ã�"+cname+$("#issue").val()+"���ѽ�ֹ��");
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
		alertdiv.alert("����û��ѡ�����");
		return ;
	}
	if((codes.length-codes.replace(/\$/g,"").length)>5000)
	{
		alertdiv.alert("Ͷע���ݲ��ܳ���5000��");
		return;
	}
	if(zhushu <= 0 )
	{
		alertdiv.alert("��ѡ��ĺ��벻��ȷ");
		return ;
	}
	if(zhushu ==  undefined  )
	{
		alertdiv.alert("��ѡ��ĺ��벻��ȷ");
		return ;
	}
	if ($("input[name=agreement_dg]").attr("checked") == false)
	{
		alertdiv.alert("ͬ�⡶�û�����ͶעЭ�顷����Ͷע");
		return ;
	}
	
	var playname = CodeTextArr[tztype]
	var expectlistsuc = $("#expectlistsuc").val();
	var beishulistsuc = $("#beishulistsuc").val();
	if(expectlistsuc=="" || beishulistsuc=="")
	{
		alertdiv.alert("��ѡ����ҪͶע���ں�");
		return ;
	}	
	var expectnum = expectlistsuc.split(",").length;
	var allmoney = $("#sum_m").text();
	var msg = "<p style='text-align:left;text-indent:2em;'>��ȷ������Ͷע��Ϣ</p>";
	msg = msg + "<p style='text-align:left;text-indent:2em;'>�淨��<font color='red' style='font-weight:bold'>"+playname+"</font></p>";
	msg = msg + "<p style='text-align:left;text-indent:2em;'>��������<font color='red' style='font-weight:bold'>"+expectnum+"</font>��</p>";
	msg = msg + "<p style='text-align:left;text-indent:2em;'>"+coinType+"��<font color='red' style='font-weight:bold'>"+allmoney+"</font>"+coinType+"</p>";
	msg = msg + "<p style='text-align:left;text-indent:2em;'>ȷ���ύ��</p>"
	alertdiv.confirm(msg,ZiGou);
	
}
//Ͷע
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
			if($(err).attr("type")=="-1") //δ��¼
			{
				alertdiv.login(ZiGou);
			}
			else if($(err).attr("type")=="0")
			{
			alertdiv.alert("�Բ�������"+coinType+"���㣡");
			return ;
			}
			else if($(err).attr("type")=="-2")
			{
			alertdiv.alert("�Բ���ǰ���Ѿ���ֹͶע��");
			return ;
			}
			else if($(err).attr("type")=="4")
			{
			alertdiv.alert("Ͷע"+coinType+"�Ѿ���������޶");
			return ;
			}
			else if($(err).attr("type")=="2")
			{
			alertdiv.alert("�Բ������Ļ��ֲ��㣡");
			return ;
			}
			else if($(err).attr("type")=="1")
			{
				$("#_ajax_common_Info4").text("Ͷע�ɹ�");
				$("#_show_project").attr("href","/Trade/Project_Info.html?id="+$(err).attr("msg"))
				alertdiv.showBox("_ajax_common_div4", "��ܰ��ʾ", null, 250, null,null) 
				ColseCountdownWin('_ajax_common_div4','sytime','sytime_second')
					//���
				ClearSelectedBall()
				zhushu = 0;//ע����0
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
			alertdiv.alert($(err).attr("��ǰ������æ��Ͷעʧ�ܡ�"));
		},
		complete: function(HttpReques,err){
			IsSubmit = false;
		}
	});
	
}



//��֤��������
function Check_Hemai(){
	var cname =  $("#cname").val();
	if($("#cestate").val()==0)
	{
		alertdiv.alert("���ã�"+cname+"����ͣͶע��");
		return ;
	}
	if(surplussecond<=0)
	{
		alertdiv.alert("���ã�"+cname+$("#issue").val()+"���ѽ�ֹ��");
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
		alertdiv.alert("����û��ѡ�����");
		return ;
	}
	if((codes.length-codes.replace(/\$/g,"").length)>399)
	{
		alertdiv.alert("Ͷע���ݲ��ܳ���400��");
		return;
	}
	if(zhushu <= 0 )
	{
		alertdiv.alert("��ѡ��ĺ��벻��ȷ");
		return ;
	}
	if ($("input[name=agreement_hm]").attr("checked") == false)
	{
		alertdiv.alert("ͬ�⡶�û�����ͶעЭ�顷����Ͷע");
		return ;
	}
	var playname = CodeTextArr[tztype]
	var expectlistsuc = $("#expectlistsuc").val();
	var beishulistsuc = $("#beishulistsuc").val();
	
	if(expectlistsuc=="" || beishulistsuc=="")
	{
		alertdiv.alert("��ѡ����ҪͶע���ں�");
		return ;
	}
	var expectnum = expectlistsuc.split(",").length;
	var allmoney = Number($("#sum_m").text());
	var isbd = $("#isbaodi").attr("checked") ;
	if (fenshu<1){
		alertdiv.alert("��Ҫ�ֳɵķ���������ڵ���1��");
		$("#fsInput").focus();
		return;
	}
	else if (allmoney/fenshu<1){
		alertdiv.alert("ÿ��"+coinType+"������ڵ���1��");
		$("#fsInput").focus();
		return;
	}
	else if ( buyCount < fenshu *0.02 ){
		alertdiv.alert("��ҪͶע�ķ�������Ӧ��Ϊ���ַ�����2% ("+Math.ceil(fenshu*0.02)+"��)��");
		$("#buyCount").focus();
		return;
	}
	else if (buyCount > fenshu){
		alertdiv.alert("��ҪͶע�ķ������ܴ������ֵķ�����");
		$("#baodiCount").focus();
		return;
	}
	else if (isbd && baodiCount < 1){
		alertdiv.alert("��Ҫ���׵ķ�������Ϊ�գ�");
		$("#baodiCount").focus();
		return;
	}
	else if (isbd && baodiCount>fenshu){
	  	alertdiv.alert("��Ҫ���׵ķ������ܴ������ֵķ�����");
		$("#baodiCount").focus();
		return;
	}
	else if (isbd && baodiCount  < fenshu * 0.02){
		alertdiv.alert("����"+coinType+"����Ϊ��"+coinType+"��2% ("+Math.ceil(fenshu*0.02)+"��)��");
		$("#baodiCount").focus();
		return;
	}
	else if (isbd&&buyCount+baodiCount>fenshu){
		alertdiv.alert("��ҪͶע�ķ����ͱ��׵ķ���֮�Ͳ��ܴ������ֵķ�����");
		$("#baodiCount").focus();
		return;
	}
	else if($("#moreCheckbox").attr("checked") && $("#dx2").attr("checked") && !(/^[\w\-\u4e00-\u9fa5]+(?:,[\w\-\u4e00-\u9fa5]+)*$/.test($.trim($("textarea[name=buyuser]").val())))){
      	alertdiv.alert("�޶����ѵĸ�ʽ���ԣ�");
		$("#buyuser").focus();
		return;
	}
	
	var msg = "<p style='text-align:left;text-indent:2em;'>��ȷ������Ͷע��Ϣ</p>";
	msg = msg + "<p style='text-align:left;text-indent:2em;'>�淨��<font color='red' style='font-weight:bold'>"+playname+"</font></p>";
	msg = msg + "<p style='text-align:left;text-indent:2em;'>��������<font color='red' style='font-weight:bold'>"+expectnum+"</font>��</p>";
	msg = msg + "<p style='text-align:left;text-indent:2em;'>"+coinType+"��<font color='red' style='font-weight:bold'>"+allmoney+"</font>"+coinType+"</p>";
	msg = msg + "<p style='text-align:left;text-indent:2em;'>�ֳɣ�<font color='red' style='font-weight:bold'>"+fenshu+"</font>��</p>";
	msg = msg + "<p style='text-align:left;text-indent:2em;'>��ɣ�<font color='red' style='font-weight:bold'>"+$("#tcSelect > option:selected").val()+"</font>%</p>";
	msg = msg + "<p style='text-align:left;text-indent:2em;'>Ͷע��<font color='red' style='font-weight:bold'>"+buyCount+"</font>��</p>";
	if(isbd)
	{
		msg = msg + "<p style='text-align:left;text-indent:2em;'>���ף�<font color='red' style='font-weight:bold'>"+baodiCount+"</font>��</p>";
	}
	msg = msg + "<p style='text-align:left;text-indent:2em;'>ȷ���ύ��</p>"
	alertdiv.confirm(msg,HeMai);
	
	
}
//����
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
			if($(err).attr("type")=="-1") //δ��¼
			{
				alertdiv.login(HeMai)
			}
			else if($(err).attr("type")=="0")
			{
			alertdiv.alert("�Բ�������"+coinType+"���㣡");
			return ;
			}
			else if($(err).attr("type")=="-2")
			{
			alertdiv.alert("�Բ���ǰ���Ѿ���ֹͶע��");
			return ;
			}
			else if($(err).attr("type")=="4")
			{
			alertdiv.alert("Ͷע"+coinType+"�Ѿ���������޶");
			return ;
			}
			else if($(err).attr("type")=="2")
			{
			alertdiv.alert("�Բ������Ļ��ֲ��㣡");
			return ;
			}
			else if($(err).attr("type")=="1")
			{
				$("#_ajax_common_Info4").text("�������ɹ�");
				alertdiv.showBox("_ajax_common_div4", "��ܰ��ʾ", null, 250, null,null) 
				ColseCountdownWin('_ajax_common_div4','sytime','sytime_second')
				
				ClearSelectedBall()
				//���
				zhushu = 0;//ע����0
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
			alertdiv.alert($(err).attr("��ǰ������æ���������ʧ�ܡ�"));
		},
		complete: function(HttpReques,err){
			IsSubmit = false;
		}
	});
}
