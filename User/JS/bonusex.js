$(function(){
	if($("#exi").length>0){
		var bonusex=$("#getmoney").val();
		Bonus_ex(bonusex);
		$('#getmoney').bind('input propertychange', function() {
			var bonusex=$("#getmoney").val();
			var exb=Number($("#exb").html().replace(/\,/g, "").split(".")[0]);
			if(bonusex>exb){
				alert("您最多可用"+st56+exb+st58);
				$("#getmoney").val(exb);
				bonusex=exb;
			}
			Bonus_ex(bonusex);
		});
		/*$("#getmoney").mouseout(function(){
			checkex();
		});*/
		
		$("#getmoney").on("mouseout blur",function(){
			checkex();
		});
	}else if($("#blevel").length>0){
		Bonus_ex(ubsession);
	}
});
function Bonus_ex(bonus){
	var bonusex=bonus,Bonus_img="",ibonus=0,ibt=0,ili=0;
	var bonusexc=Math.floor(bonusex/10).toString();
	if(bonusexc>0){
		ibonus=bonusexc.length;
		for(var ib=ibonus;ib>0;ib--){
			if(ib<6){
				if(ili==0 && $("#levelimg").length>0){
					$("#levelimg").html("<img src='/Images/user/default"+ib+".png' />");
				}
				ili++;
				var ib2t=bonusexc.substr(ibt,1);
				if(ib2t>0){
					Bonus_img+="<img src='/Images/user/"+ib+".svg' width='20' />"
					Bonus_img+="<img src='/Images/s"+ib2t+".png' />"
				}
			}
			ibt++;
		}
	}else{
		Bonus_img="-";
	}
	if($("#exi").length>0){
		$("#exi").html(Bonus_img);
	}else if($("#blevel").length>0){
		$("#blevel").html(Bonus_img);
	}
}
function checkex(){
	var bonusex=$("#getmoney").val();
	var exb=$("#exb").html().replace(/\,/g, "").split(".")[0];
	if(bonusex.length<st31.length){
		alert("每次最少使用"+st56+st31+st58);
		$("#getmoney").val(exb);
		Bonus_ex(exb);
	}else if(bonusex%10!=0){
		alert("请输入10的倍数");
		$("#getmoney").val(exb);
		Bonus_ex(exb);
	}
}