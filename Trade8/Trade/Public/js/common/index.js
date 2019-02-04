var tou={stop:1,hm:0,zhuihao:0,beishu:1,ticheng:0,isshow:0,buyCount:0,BdCount:0,code:[],qishu:1,title:'',content:''};
$(function(){
   Balance.ini();
   // $(".btn-hegou").on("click",function(){
   //    $("#HM").show();
   // })
   
   $("#keyboard td").on("click",function(){
      var txt=$(this).attr("value");
	  var objs="#"+clickwho;
	  var a=$(objs).html();
	  if(txt!="sure" && txt!="del"){
		 // if(a!=txt){
		   a = parseInt(a) === 0 ? "" : a; 
	       $(objs).html(a + txt);
		 // }
	  }
	  if(txt=='del'){
	    var len=a.length;
		var text=a.substr(0,len-1);
		text=text=="" ? 0 : text;
		$(objs).text(text); 
	 }
	 if(txt=="sure"){
	    $(objs).removeClass("ds-select");
	 }
	 a=parseInt($(objs).html());
	 if(a>999 && clickwho=="touBei"){
        mui.toast("投注倍数不能超过999倍");
		$(objs).html("999");
		tou.beishu=$(objs).text();
	 }
	 if(clickwho=="zhuiQi"){
	   if(a>100){
	     mui.toast("追号期数不能大于100期");
	     $(objs).html(100);
	   }
	   a=parseInt($(objs).html());
	   if(a>1){ 
	     tou.zhuihao=1;
	   } /*设置追号标示*/
	 }
	 if(clickwho=="BuyCount"){
	    var zgs=$("#totalMoney").text() ;
		 $("#RGQ").text(a);
		if(Number(a)>zgs){
	       mui.toast("认购份数不能大于"+zgs);
		   $(objs).html(zgs);
		   $("#RGQ").text(zgs);
		}
		//2017-05-05 自动保底分数
		var BaoCount = zgs-a > 0 ? (zgs-a) : 0;
	   	$("#BaoCount").text(BaoCount)
		$("#BDQ").text(BaoCount);
		//2017-05-05

	 }
	 if(clickwho=="BaoCount"){
	    var zgs=$("#totalMoney").text();
		var buyc=$("#BuyCount").text();
		var bd=Number(zgs)-Number(buyc);
		$("#BDQ").text(a);
		if(a>bd){
		   mui.toast("保底分数不能大于"+bd);
		   $("#BaoCount").html(bd);
		   $("#BDQ").text(bd);
		}
		
	 }
	 Balance.showMonye();
	 var a_RGQ = isNaN(Number($("#RGQ").text())) ? 0 : parseInt($("#RGQ").text());
	 var bdNum = isNaN(Number($("#BDQ").text())) ? 0 : parseInt($("#BDQ").text());
	 var zj = a_RGQ+bdNum;
	 // $("#ZJQ").text(zj);
   })
   
   $("#zhtitle td").on("click",function(){
      var txt=$(this).attr("value");
	  var objs="#"+clickwho;
	  tou.zhuihao=1;
	  $(objs).html(txt);
	  Balance.showMonye();
   })
      
   $(".green").click(function(){
	   switch(Balance.Type){
	       case 'ssc'   :
		       Ssc.Wid=Balance.Wid;
			   Ssc.Pid=Balance.Pid;
			   Ssc.Name=Balance.Name;
			   Ssc.lt_id=Balance.ltId;
			   var code=Ssc.handCode();      
			 break;
		   case  'syxw' :
		        Syxw.Wid=Balance.Wid;
				Syxw.Pid=Balance.Pid;
				Syxw.Name=Balance.Name;
				Syxw.lt_id=Balance.ltId;
			    var code=Syxw.handCode();
			 break;
		    case  'ks'  :
			  break;
			case  'ssq' :
			  Ssq.Wid   =  Balance.Wid;
			  Ssq.Pid   =  Balance.Pid;
			  Ssq.Name  =  Balance.Name;
			  Ssq.lt_id =  Balance.ltId;
			  var code  =  Ssq.handcode(); 
			  break;
			case 'dlt' :
			  Dlt.Wid   =  Balance.Wid;
			  Dlt.Pid   =  Balance.Pid;
			  Dlt.Name  =  Balance.Name;
			  Dlt.lt_id =  Balance.ltId;
			  var code  =  Dlt.handCode();
			  break;   
			case 'sd'  :
			case 'pls' :
			  FcSd.Wid   =  Balance.Wid;
			  FcSd.Pid   =  Balance.Pid;
			  FcSd.Name  =  Balance.Name;
			  FcSd.lt_id =  Balance.ltId;
			  var code   =  FcSd.handCode();
			  break;
			 case 'plw' :
			  Plw.Wid   =  Balance.Wid;
			  Plw.Pid   =  Balance.Pid;
			  Plw.Name  =  Balance.Name;
			  Plw.lt_id =  Balance.ltId;
			  var code  = Plw.handCode();
			  break;
			case  'qlc' :
			  Qlc.Wid   =  Balance.Wid;
			  Qlc.Pid   =  Balance.Pid;
			  Qlc.Name  =  Balance.Name;
			  Qlc.lt_id =  Balance.ltId;
			  var code  = Qlc.handCode();
			  break;
			case  'qxc' :
			  Qxc.Wid   =  Balance.Wid;
			  Qxc.Pid   =  Balance.Pid;
			  Qxc.Name  =  Balance.Name;
			  Qxc.lt_id =  Balance.ltId;
			  var code  = Qxc.handCode();
			  break;
			case 'pk10' : 
			  Pk10.Wid   =  Balance.Wid;
			  Pk10.Pid   =  Balance.Pid;
			  Pk10.Name  =  Balance.Name;
			  Pk10.lt_id =  Balance.ltId;
			  var code   =   Pk10.handCode();
			  break;                      	  	 
	   }
	   var c=window.localStorage.getItem("code");
	   if(cc == "[]"){
	      window.localStorage.setItem('code','['+JSON.stringify(c)+']');
	   }else{
	     var cc=JSON.parse(c);
	     cc.push(code);
	     window.localStorage.setItem("code",JSON.stringify(cc));
	   }
	   Balance.TouCode();
   })
   
   $(".switch-on-md").on("click",function(){
       var id=$(this).attr("id");
	   tou.stop=id=="zj-stop" ?  0 : 1;
   })
   
   $(".btn-hegou").on("click",function(){
       var hmStatue = $('#hegou').css('display');
       var qian= hmStatue == 'none' ? $("#ZJQ").text() : $("#totalMoney").text();
	   if(qian<10){
	     mui.alert("合买金额不能少于10元","系统提示");
		 return;
	   }
	   tou.hm=1;
	   $('#hegou').toggle();
	   $("#HM").toggle();
       if(hmStatue == 'block') {
       		$("#ZJQ").text(qian);
       		return;
       }
	   // tog('hegou');
	   
	   Balance.hmSet();
   })
   $("#inline-range").on("change",function(){
	  if(tou.hm==1){
	    tou.ticheng=$(this).val();
	  } 
   })
   
   $(".x-select").on("click","button[type='button']",function(){
       $(".x-select").find("button.current").removeClass("current");
	   if(tou.hm==1){
	      tou.isshow=$(this).attr("value");
	   }
	   $(this).addClass("current");
   })
   
   $(".btn-buy").on("click",function(){
      var data=window.localStorage.getItem("code");
	  tou.code=JSON.parse(data);
	  tou.type=Balance.Type;
	  if(tou.hm==1){
	     tou.BdCount=$("#BaoCount").text();
		 tou.buyCount=$("#BuyCount").text();
		 var da=$(".input-div");
		 tou.title=$("#xc-bt").val();
		 tou.content=$("#xc-nr").val();
	  }
	  tou.beishu=$("#touBei").text();
	  tou.qishu=$("#zhuiQi").text();
	  tou.expect=$("#ShouQiShu").html();
	  if(tou.beishu<1){
	     mui.alert("错误，投注倍数不能小于1倍","系统提示");
		 return;
	  }
	  if(tou.zhuihao==1 && tou.qishu<2){
	     mui.alert("错误，追号期数不能小于2期","系统提示");
		 return;
	  }
	  if(tou.code.length<1){
	     mui.alert("错误，投注号码为空","系统提示");
		 return;
	  }
	  mui.post(Url.ssc_tobuy,tou,function(data){
	     if(data.code==10001){
		    mui.alert("抱歉请先登录，在游戏","系统提示",function(){
			    window.location.href="/M/User/login.html?url=/M/Common/";
			});
		 }
		 if(data.code==10002){
		     mui.alert("账户余额不足，请先充值后再游戏","系统提示",function(){
			    window.location.href="/M/User/racharge.html";
			});
		 }
		 if(data.code==10003){
		   mui.alert("该期销售已截止，请重新提交","系统提示");
		 }
		 if(data.code==10000){
		   mui.alert(data.name+"第"+data.expect+"期投注成功",function(){
		       Balance.Success();
			   window.history.back(); 
		   });
		}
	  },'json');
   })
   
   $(".red").on("click",function(){
       Balance.Success();
	})
})



var Random={
    RandNumber:function(start,end,num,type){
      var list=[];
	  var data=[];
	  var str="syxw,ssq,dlt,pks,qlc";
	  for(start;start<=end;start++){
	     list.push(start);
	  }
	  var rand=list.length;
	  for(i=0;i<num;i++){
		 var index=Math.floor(Math.random()*rand);
		 data.push(list[index]);
		 list.splice(index,1);
		 rand=list.length;
	  }
	  if(str.indexOf(type)>=0){
	     for(i=0;i<data.length;i++){
		    data[i]=data[i]<10 ? "0"+data[i]: data[i];
		 }
	  }
	  return data;
   }
}

var clickwho="";
function meclick(obj){
   $(document).find(".ds-select").removeClass("ds-select");		
   clickwho=$(obj).attr("id");
   $(obj).addClass("ds-select");
   $(obj).html("");
}