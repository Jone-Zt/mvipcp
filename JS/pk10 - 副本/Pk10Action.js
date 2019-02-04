	
$(function(){
    var pk = new Pk10();
	pk.getTop10();
	getData();
	echo({'expect':'#ShouQiShu','time':'#ShouPasstime'});	
    pk.ShowPlay();
    pk.showText();
   $("#NameWay").on("click",function(){
       $("#nav2").show();
   })
   $("#nav2new").on("click","span",function(){
       pk.Wid  = $(this).attr("wid");
	   pk.name = $(this).html();
	   pk.ShowPlay(pk.Wid);
	   $("#nav2").hide();
	   pk.ClearArray();
   })
   $(".ballRed2").on("click","i",function(){										  
	   if($(this).hasClass("current")){
	      pk.OutBox(this);
	   }else{
		  pk.IntoBox(this); 
		  pk.CheckRight(this);
	   }
	   pk.MoneyNumber();
	   pk.showText();
   })
   
   $(".btn-grey2 ").on("click",function(){
        var num = $(".tztishi").html().match(/\d+/g);
		var shownum = parseInt($(".notice-num").text());
		if( num[0] < 1 && shownum < 1 ){
	      mui.alert("选号不正确","提示");
		  return ;
		}
		var text = $(this).find("#btn-title").html();
		if(text =="查看号码"){
			pk.lookSelectCode();
			
		}else if(text == "加入购物篮"){
		    pk.toBasket();
		}
   })
   $(document).on("click","i._i_",function(){
	   pk.DeleteCode(this);
   })
   $(document).on("click",".mui-btn-block",function(){
       var text = $(this).html();
	   if( text === "合买设置"){
		  var o = $("._hm_set_").attr("_alt");
		  if( o === "off" ){
		      $("._hm_set_").attr("_alt","on");
			  $("._hm_set_").show();
			  pk.IsHm  = 0 ;
		  }else{
			  $("._hm_set_").attr("_alt","off");
			  $("._hm_set_").hide();
		       pk.IsHm = 1 ;
		  } 
	   }else if( text == "提交方案" ){
		   pk.toSubmit();
	   }else if( text ==="关闭" ){
	      $(".Add_div").hide();
	   }
   })
   $("input[type='range']").on("change",function(){
       $("#tic").html($(this).val());
   })
   $("input[name='beishu']").change(function(){
       if( $(this).val()< 1 ){
	      $(this).val(1);
	   }
	   
   })
   $("input[name='expect']").change(function(){
       if( $(this).val()< 1 ){
	      $(this).val(1);
	   }
   })
   $('button[class="btn-red"]').on('click',function(){
      var txt = $("div.tztishi").html().match(/\d+/g);
	  if ( txt[0]== 0 || txt[1]== 0 ){
	     mui.alert("选号不正确","系统提示");
		 return ;
	  }
	  /*获取投注号码*/
	 var han = {"1":"one","2":"two","3":"three","4":"four","5":"five","6":"six","7":"seven","8":"eight","9":"nine","10":"ten"};
	 var num = pk.Wid.substr(2,1);
	 var type= pk.Wid.substr(0,1);
	 var numtype = pk.Wid.substr(-1,1);
	 num  =  num ==0 ? 10 : num ;
	 var s = 1 ;
	 if ((type ==2 && numtype == 3)||(type == 3 && numtype == 1)){
		 num = 5 ;
	 }else if((type == 2 && numtype == 4 ) || (type == 3 && numtype == 2 )){
		num  = 10 ;
		s    = 5  ; 
	 }else if( type == 3 && numtype == 3 ){
		num = 1 ;
	 }
	var codes = [];
	for( ; s <= num ; s++ ){
		var index = han[s];
		codes.push(pk.code[index].join(","));
	}
	var cc = {'code':codes.join("$"),'way':pk.Wid}; 
	cc['code'] = cc['code'].replace(/大/g,"A").replace(/小/g,"B").replace(/单/g,"C").replace(/双/g,"D");
	  /*结束*/
	  var tosend  = {};
	  tosend['beishu']  =1 ;
	  tosend['zhuihao'] = 0;
	  tosend['type']    = 1;
	  tosend['code']    = [cc] ;
	  tosend['ticheng'] = 0 ;
	  tosend['BdCount'] = 0 ;
	  tosend['buyCount'] = 1;
	  tosend['Total']    = 1 ;
	  tosend['isstop']   = 0 ;
	  tosend['zhuihao']  = 0 ;
	  tosend['expect']   = pk.Expect;
	  var data     = JSON.stringify(tosend);
	  var postData = {"submit":data};
	  pk.ajax(postData);
   })
  $(".nav-menu").on("click","span",function(){
        var action = $(this).attr("action");
		switch (action){
		   case 'History' :
		    window.location.href="/KaiJiang/caizhongkj.asp?caizhong=38";
		    break;
		   case 'Buy'     :
		    window.location.href= "/User/BuyRecord.html";
		    break;
		   case 'Info'    :
		     break;	
		}
   })
  $(".btn-grey").on("click",function(){
	  pk.ClearArray();
      pk.DiyBuild();
   })
   $("li._title").on("click","span",function(){
      var text = $(this).html();
	  var type = pk.Wid.substr(0,1);
	  var cc   = window.localStorage.getItem("code");
	  cc       =  JSON.parse(cc);
	  switch(text){
	      case "随机1注" :
		    var code = pk.RandCode();
			var tou  = {};
			tou['name'] = pk.name ;
			tou['code'] = code.join('$');
			tou['num'] = (type == 2 || type ==3) ? code.length : 1 ;
			tou['m']   = tou['num'] * 2
			cc.push(tou);
			window.localStorage.setItem("code",JSON.stringify(cc));
			pk.lookSelectCode();
		   break;
		  case "机选5注" :
		   for( var ps = 0; ps < 5 ; ps++ ){
				var code = this.RandCode();
				var tou  = {};
				tou['name'] = pk.name ;
				tou['code'] = code.join('$');
				tou['num'] = (type == 2 || type ==3) ? code.length : 1 ;
				tou['m']   = tou['num'] * 2
				cc.push(tou);
		   }
		   window.localStorage.setItem("code",JSON.stringify(cc));
		   pk.lookSelectCode(); 
		   break;
		  case "清空选号":
		   var list = $(document).find("li.mui-table-view-cell");
		   $.each(list,function(index,value){
		       pk.DeleteCode(value);
			   
		   });
		   $(".Add_div").hide();
		   $(".notice-num").html(0);
		   break;  
	  }
   })
  function  getData(){
   mui.post('/Trade/Pk10/Interface.asp',{action:'nowIssuePass'},function(data){
       pk.Expect = data.expect;
	   pk.passtime = data.pass; 
   },'json')
}
function TimePass(){
   if(pk.JiShi==1){
	  pk.JiShi=20;
	  getData();
   }
   if(pk.passtime==1){
	  mui.toast("北京赛车第"+pk.Expect+"期截止销售",'系统提示');
	  getData();
	  getTopsetTime(); 
   }
   var DD       =   new Date(pk.passtime * 1000);
   var day      =   parseInt(pk.passtime/(24*3600));
   var huo      =   parseInt(pk.passtime % (3600 *24) / 3600);
   var minute   =   DD.getMinutes();
   var secound  =   DD.getSeconds();
   minute       =   minute < 10 ? "0"+minute : minute;
   secound      =   secound < 10 ? "0"+secound : secound; 
   pk.JiShi-=1;
   pk.passtime-=1;
   var time={d:day,h:huo,m:minute,s:secound}
   if(pk.passtime < 0 ){
      time={m:-1,s:-1};
	  setTimeout(function(){
	    getData();
	  },1000);
   }
   return time;
}

function echo(obj){
   var str=TimePass();
  try{
   if(typeof(obj.time)!=undefined){  
     var tstr=str.d+"天"+str.h+"时"+str.m+"分"+str.s+"秒";
	 if(str.d==0 && str.h==0){
	    tstr = str.m+"分"+str.s+"秒";
	 }
	 if(Number(str.m < 0)){
	    var tstr="预售中";
		str=TimePass();
	 } 
	 $(obj.time).html(tstr);
   }
   if(typeof(obj.expet)!=undefined){
     $(obj.expect).html(pk.Expect); 
   }
   }catch(e){}
   setTimeout(function(){echo(obj);},1000);
 }
 function getTopsetTime(){
    pk.getTop10(); 
	setTimeout(function(){
      getTopsetTime(); 
	},20000);
 }
 $(".xialaD").on("click","span",function(){
    var attr = $("#lskj").attr("style");
	if(attr == 'display:none;'){
	   $("#lskj").attr('style','display:block;');
	}else{
	   $("#lskj").attr('style','display:none;');
	}
 })
 $("#lskj").on("click","table",function(){
    var attr = $("#lskj").attr("style");
	if(attr == 'display:none;'){
	   $("#lskj").attr('style','display:block;');
	}else{
	   $("#lskj").attr('style','display:none;');
	}
 })
})