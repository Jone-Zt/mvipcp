
 //*** ���Ƹ���

 var GdObj = {
	Null:'<tr><td colspan="7"><div class="noData"><i class="ico_book"></i><strong>û���κμ�¼</strong></div></td></tr>',VipList:"VipList,VipForm,VipProgramme,VipUrl",
	Flip:function(Type,Obj,Name,IsTypeOne){
		var XiangQ = "<span class='red'>"+Obj.Page+"</span>/"+Obj.PageCount+" ��¼��"+Obj.SizeCount+"��",IsType = Type=="Detailed"||Type=="Capital"?"IsPage1":"IsPage",
			AsType = Obj.Page==1&&Obj.PageCount==1?"style=\"display:none\"":"";
		$("#"+IsType).html('<div class="page" style="margin:10px;"><span '+AsType+'><a class="h_l" href="javascript:void(0);" onclick="javascript:'+(Obj.Page>1?'GdObj.GetData(\''+Type+'\',\'1\',\''+Name+'\',\''+IsTypeOne+'\')':'void(0)')+';">��ҳ</a><a class="pre" href="javascript:void(0);" onclick="javascript:'+(Obj.Page>1?'GdObj.GetData(\''+Type+'\',\''+(Number(Obj.Page)-1)+'\',\''+Name+'\',\''+IsTypeOne+'\')':'void(0)')+';">��һҳ</a><a class="next" href="javascript:void(0);" onclick="javascript:'+(Number(Obj.PageCount)>Number(Obj.Page)?'GdObj.GetData(\''+Type+'\',\''+(Number(Obj.Page)+1)+'\',\''+Name+'\',\''+IsTypeOne+'\')':'void(0)')+';">��һҳ</a><a class="h_l" href="javascript:void(0);" onclick="javascript:'+(Number(Obj.PageCount)>Number(Obj.Page)?'GdObj.GetData(\''+Type+'\',\''+Obj.PageCount+'\',\''+Name+'\',\''+IsTypeOne+'\')':'void(0)')+';">ĩҳ</a></span>ҳ��:'+XiangQ+'</div>');
	},
	Record:function(Data){
			var am = Data,ar = Math.floor(am / 10000000),val_="";
			ar > 0 && (val_ += "<img src='../../Images/y4.gif' />",val_ += "<img src='../../Images/s" + ar + ".png' />",am = am - 10000000 * ar);
			ar = Math.floor(am / 1000000)
			ar > 0 && (val_ += "<img src='../../Images/y3.gif' />",val_ += "<img src='../../Images/s" + ar + ".png' />",am = am - 1000000 * ar);
		    ar = Math.floor(am / 100000)
			ar > 0 && (val_ += "<img src='../../Images/y2.gif' />",val_ += "<img src='../../Images/s" + ar + ".png' />",am = am - 100000 * ar);
			ar = Math.floor(am / 10000)
			ar > 0 && (val_ += "<img src='../../Images/y1.gif' />",val_ += "<img src='../../Images/s" + ar + ".png' />",am = am - 10000 * ar);
			return val_;
	},
	FangAnConnect:function(Type){
		$(".my_tab a[class='cur']").removeClass(),$(".my_tab a[Type='VipProgramme']").addClass("cur"),
		$("#VipList,#VipForm,#VipProgramme,#VipUrl").css({display:"none"}),$("#VipProgramme").css({display:"block"}),$("#IsTime").css({display:"block"}),
		$("#VipProgrammeOne,#IsPage").html(""),$("#LottID").val("���в���"),$("#username").val(Type),$("#frm_search").submit();
	},
	AddDom:function(Type,Obj,Name,IsType){
			var IsData = "";Obj = eval("("+Obj+")"),IsUrl="";
			$.each(Obj.data,function(i){
				if(Type == "VipProgramme" || Type == "Detailed"){
					if(Obj.data[i].FlowType != "��������" && Obj.data[i].Record != "��������"){
					var IsLotteryId = (Type == "VipProgramme"?Obj.data[i].UserName:Obj.data[i].SchemeNum),lottName = IsLotteryId.match(/[a-zA-Z]/g).join("").toLowerCase().replace(/(\w)/,function(v){return v.toUpperCase()});
					lottName.indexOf("ssc") >-1 && !!(lottName = lottName.replace("ssc","Ssc")) || lottName.indexOf("syxw")>-1 && !!(lottName = lottName.replace("syxw","Syxw")) || lottName.indexOf("ks")>-1 && (lottName = lottName.replace("ks","Ks"));
						lottName == "CqSsc" && !!(lottName = "Ssc") || lottName == "JxSyxw" && (lottName = "Syxw");
						IsUrl = '/Trade/'+lottName+'/Project-Info-'+IsLotteryId.match(/\d+$/)+'.html';
					}else IsUrl = '/Trade/Jczq/view.html?id='+(Type == "VipProgramme"?Obj.data[i].UserName:Obj.data[i].SchemeNum);
				};

				IsData += "<tr class='"+(i%2==0&Obj.data.length>1?"th_even":"th_on")+"' onmouseover='this.className=\"listmouseover\"' onmouseout='this.className=\""+(i%2==0&Obj.data.length>1?"th_even":"th_on")+"\"'>"+(Type=="DingZ"?"<td style='display:none'>"+Obj.data[i].FlowType+"</td><td style='display:none'>"+Obj.data[i].FlowBfb+"</td><td style='display:none'>"+Obj.data[i].FlowMaxMoney+"</td><td style='display:none'>"+Obj.data[i].Id+"</td>":"")+"<td>"+(Type=="VipList"?"<a href='javascript:void(0)' "+(Number(Obj.data[i].FlowType.match(/��<span class=\w+?>(\d+)?<\/span>��/)[1])>0?"onclick='javascript:GdObj.GetData(\"VipList\",\"ture\",\"\",\""+Obj.data[i].FlowType.replace(/��<span.+?<\/span>��/,"")+",,,"+"\")'":"")+")"+">"+Obj.data[i].FlowType+"</a>":(Type=="Detailed"||GdObj.VipList.indexOf(Type)>-1&Type!="VipForm"||Type=="Capital"||(Type=="VipForm"&i==Obj.data.length-1&Obj.data.length>1)?Obj.data[i].FlowType:(Obj.List.Page>1?(Obj.List.Page-1)*Obj.List.Size+i+1:i+1)))+"</td><td>"+(Type=="VipProgramme"?"<a class=blue target='_black' href='"+IsUrl+"'>"+Obj.data[i].UserName+"</a>":Obj.data[i].UserName)+"</td><td>"+(Type=="DingZ"?GdObj.Record(Obj.data[i].Record):Obj.data[i].Record)+"</td><td>"+Obj.data[i].LotteryType+"</td><td>"+Obj.data[i].UseNum+"</td><td>"+(Type == "Detailed"?"<a class=blue target='_black' href='"+IsUrl+"'>"+Obj.data[i].SchemeNum+"</a>":(Type=="VipList"?(Obj.data[i].FlowBfb=="1"?(Obj.data[i].FlowMaxMoney=="1"?"<a href='javascript:void(0);' onclick='javascript:GdObj.GetData(\"locking\",\""+escape(Obj.data[i].FlowType.replace(/��<span.+?<\/span>��/,""))+"\",\""+Obj.data[i].UserName+"\")' class='btn_cy'>������</a>":"<a href='javascript:void(0);' onclick='javascript:GdObj.GetData(\"locking\",\""+escape(Obj.data[i].FlowType.replace(/��<span.+?<\/span>��/,""))+"\",\""+Obj.data[i].UserName+"\")' class='btn_xx'>����</a>"):"")+(Obj.data[i].SchemeNum=="1"&&Obj.data[i].isShow=="1"?"<a href='javascript:void(0);' onclick='javascript:($(\".tips_title h2\").html(\"Ϊ "+Obj.data[i].FlowType.replace(/��<span.+?<\/span>��/,"")+" ��ֵ\"),$(\"#mesWindowTow\").css({display:\"none\"}),$(\"#mesWindow\").css({display:\"block\"})),GdObj.TiShi(\"\");' class='btn_xx'>��ֵ</a>":"")+"<a href='javascript:void(0);' onclick='javascript:$(\"#mesWindow\").css({display:\"none\"}),$(\".tips_title h2\").html(\"�û� "+Obj.data[i].FlowType.replace(/��<span.+?<\/span>��/,"")+" �˻���ϸ\"),$(\"#IsUserName\").val(\""+Obj.data[i].FlowType.replace(/��<span.+?<\/span>��/,"")+"\"),$(\"#search\").trigger(\"click\"),$(\"#mesWindowTow\").css({display:\"block\"});' class='btn_xx'>�ʱ�</a><a href='javascript:void(0);' onclick='javascript:GdObj.FangAnConnect(\""+Obj.data[i].FlowType.replace(/��<span.+?<\/span>��/,"")+"\");' class='btn_xx'>����</a>":Obj.data[i].SchemeNum))+"</td>"+(Type=="Detailed"||Type=="Capital"?"<td>"+Obj.data[i].FlowMoney+"</td>":(Type=="DingZ"?"<td>"+Obj.data[i].FlowMoney+"</td><td><a class='btn_cy' href='javascript:void(0)' onclick='javascript:GdObj.Setdata(this);'><b>�޸�</b></a>"+" "+"<a href='javascript:void(0);' onclick='javascript:GdObj.SeverDate(this)' class='btn_xx'>ɾ��</a>&nbsp;<a style='color:#1e50a2' href='javascript:void(0);' onclick='javascript:GdObj.Detailed(this,\"MyDetailed\");'>����</a></td></tr>":GdObj.VipList.indexOf(Type)>-1?(Type=="VipList"?"":"<td>"+Obj.data[i].FlowBfb+"</td><td>"+Obj.data[i].FlowMaxMoney+"</td>"):"<td><a style='color:#1e50a2' href='javascript:void(0);' onclick='javascript:GdObj.Detailed(this,\"FollowMe\");'>����</a></td></tr>"));	

			});$("#"+(GdObj.VipList.indexOf(Type)>-1?Type+"One":Type)).html(IsData),GdObj.Flip(Type,Obj.List,Name,IsType);
	},
	IsAddData:function(Type,Obj,Name,IsTypeOne){
		var IsType = Type=="Detailed"||Type=="Capital"?"IsPage1":"IsPage";
		if(Obj == "NO" || Obj ==""){
			GdObj.VipList.indexOf(Type) >-1 ? $("#"+Type+"One").html(GdObj.Null):($("#"+Type).html(GdObj.Null),$(".tableData,.tableData td,#main").css({border:"none"}));
				$("#"+IsType).html("");
			}
		else GdObj.AddDom(Type,Obj,Name,IsTypeOne);
	},
	GetData:function(Type,Page,Name,IsType){
		if(Type!="VipList"&&Type!="locking"&&Type!="Capital"&&Type!="Drawing"){
		$("#"+Type+(GdObj.VipList.indexOf(Type)>-1?"One":"")).html("<tr ><td colspan='8' style='font-weight:bold;font-size:13px;padding:40px 0px 50px 9px'>���ݼ�����...</td></tr>"),$("#IsPage").html("");}
		$.ajaxSetup({ cache: false });
		$.get("Include/All_Ajax.html?Type="+Type+(Page?"&Page="+Page:"")+(Name?"&Name="+escape(Name):"")+(IsType?"&IsType="+IsType:""),function(data){
				if(Type == "Drawing"){
					switch(data){
						case "No":
							alert("�һ�����������Ͷһ���");
							break;
						case "MoneyNo":
							alert("����"+coinType+"���㣡");
							break;
						case "ErrorPass":
							alert("������Ķһ��������");
							break;
						case "IsNo":
							alert("������Ķһ��������");
							break;
						case "Yes":
							alert("����һ��ɹ���")
							history.go(0)
							break;
						default:
							alert("������������²�����")
							break;
					}
					return;
				}
				(Type == "locking"?GdObj.GetData("VipList","ture","",Name+",,,"):(Type == "Recharge" && !(data=="Yes"?!(alert("��ֵ�ɹ���"),$("#mesWindow").css({display:"none"})):(data == "No" ? alert("���������¼���Ա��û�г�ֵȨ�ޣ�") : alert("����"+coinType+"���㣡"))) || GdObj.IsAddData(Type,data,Name,IsType)));
		});
	},
	SelectType:function(){
		var Type = $(this).attr("Type");$(".my_tab a[class='cur']").removeClass(),$(this).addClass("cur");$("#mesWindow,#mesWindowTow").css({display:"none"});
		Type == "DingZ"?($("#list,#listx").css({display:"none"}),$("#main").css({display:"block"})):($("#main,#listx").css({display:"none"}),$("#list").css({display:"block"}));
		GdObj.GetData(Type);
	},
	Setdata:function(Obj){
		if(Obj){
			Obj = $(Obj).parent().parent().find("td"),$("#userNameID").val(Obj.eq(5).html()),$("#LottID").val(Obj.eq(7).html()),
			$(".tips_title h2").html("<span class=red>"+Obj.eq(5).html()+"</span> �����޸�"),$("#TypeName").val("�޸�"),$("#IsId").val(Obj.eq(3).html());
			if(Obj.eq(0).html() == "1")
				$("input[type='radio'][name='Istype'][value='1']").trigger("click"),$("#money3").val((Obj.eq(1).html().indexOf(".")>-1?"0."+Obj.eq(1).html().split(".")[1]:Obj.eq(1).html())),
				$("#maxMoney").val(Obj.eq(2).html());
			else
				$("input[type='radio'][name='Istype'][value='0']").trigger("click"),$("#money2").val(Obj.eq(10).html().split(".")[0].replace(",",""));
			var SchemeNum = Obj.eq(9).html().match(/[0-9]+/);
			if(SchemeNum !="" && SchemeNum > 0)
				$("input[type='radio'][name='buySelect'][value='1']").trigger("click"),$("#buyCount").val(SchemeNum);
			else
				$("input[type='radio'][name='buySelect'][value='0']").trigger("click"),$("#buyCount").val("");
		}
		else
			$("#userNameID,#LottID,#money3,#maxMoney,#money2,#buyCount,#IsId").val(""),$("input[type='radio'][name='Istype'][value='0'],input[type='radio'][name='buySelect'][value='0']").trigger("click"),
			$(".tips_title h2").html("��������"),$("#TypeName").val("����");
		GdObj.TiShi(""),$("#mesWindowTow").css({display:"none"}),$("#mesWindow").css({display:"block"});
	},
	GetDomAdd:function(){
		 var IsType = $("input[name='Istype']:checked").val();
		 //($("#money3").val() == "0" || $("#money3").val() <0 || $("#maxMoney").val() == "0" || $("#maxMoney").val()<2) && (IsType = 0) || (IsType = 1);
		 return escape($("#userNameID").val())+","+escape($("#LottID").val())+","+","+IsType+","+$("#money2").val()+","+$("#money3").val()+","+$("#maxMoney").val()+","+$("#buyCount").val()+","+$("#IsId").val();
	},
	TiShi:function(Obj){
		$(".TiShi").html(Obj)
	},
	CloSe:function(Obj){
		$("#"+Obj).css({display:'none'})
	},
	Verification:function(){
		if($("#userNameID").val() == "") { GdObj.TiShi("����������û� ��");return true; }
		if($("input[type='radio'][name='Istype']:eq(0)").is(":checked")){
			if($("#money2").val() == "" || $("#money2").val() < 2) { GdObj.TiShi("���������"+coinType+",����С��2 ��");return true; }
		}else{
			if($("#money3").val() == "" || $("#money3").val() < 1) { GdObj.TiShi("���������"+coinType+"�ٷֱ� ��");return true; }
			else if($("#maxMoney").val() == "" || $("#maxMoney").val() < 2) { GdObj.TiShi("������������"+coinType+",����С��2 ��");return true; }
		}
		if($("input[type='radio'][name='buySelect']:eq(1)").is(":checked")){
			if($("#buyCount").val() == "" || $("#buyCount").val() < 1) { GdObj.TiShi("���������Ͷע���� ��");return true; }
		}return false;
	},
	Detailed:function(Obj,Type){
		Obj = $(Obj).parent().parent().find("td");var ObjOne = Obj.eq(Type=="FollowMe"?2:7).html();Obj = Obj.eq(Type=="FollowMe"?1:5).html();
		GdObj.GetData("Detailed",1,Obj+","+ObjOne,Type);
		Type=="FollowMe"?($("#isUser").html("�����û�"),$(".tips_title h2").html("<span class=red>"+Obj+"</span> "+"�����ҵ�"+" <span class=red>"+ObjOne+"</span> ������ʷ��¼��")):($("#isUser").html("������"),$(".tips_title h2").html("�Ҹ��� <span class=red>"+Obj+"</span> �� <span class=red>"+ObjOne+"</span> ������ʷ��¼��"));
		$("#mesWindow").css({display:"none"}),$("#mesWindowTow").css({display:"block"});
	},
	SeverDate:function(Obj){
			var IsId;if(typeof(Obj) == "object"){
				if(!confirm("��ȷ��Ҫɾ���������Ƹ�����")) return;
				IsId = $(Obj).parent().parent().find("td").eq(3).html(),Obj = "ɾ��";
			}if(Obj != "ɾ��") if(GdObj.Verification()) return;
			if(Obj == "����") Obj = "����";
			$.ajaxSetup({ cache: false });
			$.get("Include/All_Ajax.html?Type=SeverData&ProType="+escape(Obj)+(Obj=="ɾ��"?"&FormData="+IsId:"&FormData="+GdObj.GetDomAdd()),function(data){
				data=="NoIs"?alert("�����ܶ����Լ��ĵ�!"):data=="IsNo"?alert("���Ѿ�����������ˣ������ظ�����!"):data=="No"?alert("û������û���δִ�и���������"):data == "Yes"?($("#mesWindow").css({display:"none"}),GdObj.GetData("DingZ"),alert("�����ɹ�")):alert("����δ�ɹ�,����������");
			});
	}
 };

	//*** ��Ա�����������ѱ����ƹ�����

	var Vip = {
	SelectWhere:function(Obj){
		var Type = $(".my_tab a[class='cur']").attr("Type");
		GdObj.GetData(Type,"1","",escape(Obj.username.value)+","+Obj.sdate.value.replace(/-/g,"/")+","+Obj.edate.value.replace(/-/g,"/")+","+escape(Obj.IsLt.value));
	},
	Copy_DlUrl:function(){
		!!window.clipboardData && window.clipboardData.setData("Text",$("#DlUrl").html()) && !alert("���Ƴɹ���") || alert("����������֧�֣����ֶ�ѡȡ���ƣ�")
	},
	Recharge:function(){
		var IsValue = Number($("#IsMoney").val());
		IsValue!="" && IsValue>0 && !GdObj.GetData("Recharge",IsValue,escape($(".tips_title h2").html().replace(/[Ϊ��ֵ ]/g,""))) || GdObj.TiShi("���������"+coinType+",����С��1 ��")
	},
	Capital:function(){
		GdObj.GetData("Capital","1","",escape($("#IsUserName").val())+","+$("#beginday").val().replace(/-/g,"/")+","+$("#endday").val().replace(/-/g,"/")+","+escape($("#busisort").val()));
	},
	SelectType:function(){
		var Type = $(this).attr("Type");$(".my_tab a[class='cur']").removeClass(),$(this).addClass("cur"),
		$("#VipList,#VipForm,#VipProgramme,#VipUrl,#mesWindow,#mesWindowTow").css({display:"none"}),$("#"+Type).css({display:"block"}),$("#username").val("");
		Type == "VipProgramme"||Type == "VipForm"?($("#IsTime").css({display:"block"}),$("#LottID").val("���в���")):$("#IsTime").css({display:"none"});
		Type == "VipForm" && !!($("#LottID").css({display:"none"}),$(".btn_Lblue_s").val("ͳ��")) || ($("#LottID").css({display:"block"}),$(".btn_Lblue_s").val("����"));
		Type == "VipUrl"?$("#IsPage,#frm_search").css({display:"none"}):($("#IsPage,#frm_search").css({display:"block"}),GdObj.GetData(Type));
	},

	//*** �û��һ�

	Drawing:function(GetMoney,GetPassWord,MinGetMoney){
		if(GetMoney == ""){ alert("������һ�"+coinType+"��");return; }
		if(GetPassWord == ""){ alert("������һ����룡");return; }
		if(Number(GetMoney)<Number(MinGetMoney)){ alert("ÿ�����ٶһ�"+MinGetMoney+coinType+"��");return; }
		GdObj.GetData("Drawing",GetMoney,GetPassWord)
	}
  };
