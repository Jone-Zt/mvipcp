var Miss  =  {
    ltId     :  13,/*获取遗漏彩种的ID*/
	type     :  'ssc',/*获取遗漏彩种TYPE*/
	Wid      :  0 ,
	LoadData :  function(){	
	   var me  =  this ;	
	   mui.post(Url.Miss_url,{ltid:this.ltId},function(data){  
	     me.SwtichPlay();
		 me.LoadMiss(data);
		 Lately.lt_type =  me.type ;
		 Lately.Top10(data);
	   },'json');
	},
	SyxwRenXuan:function(data){/*11选5任选[[胆拖]]遗漏*/
		var code = ['01','02','03','04','05','06','07','08','09','10','11'] ;
		var miss = [0,0,0,0,0,0,0,0,0,0,0] ;
		for( n=0 ; n < 11 ; n++ ){
		   for( i=0 ; i < data.length ; i++ ){
			   var cc   =  data[i].open_code ;
			   if (cc.indexOf(code[i])>=0){
			      break;
			   }else{
			      miss[i]++ ;
			   }
		   }
		}
		return miss;
	},
	SyxwQianYES:function(data){/*11选5前一二三直选遗漏*/
	    var   num    =  data.length;
		var dh       =   {'01':'01','02':'02','03':'03','04':'04','05':'05','06':'06','07':'07','08':'08','09':'09','10':'a','11':'b'} ;
		var miss     =   {'0':[0,0,0,0,0,0,0,0,0,0,0],'1':[0,0,0,0,0,0,0,0,0,0,0],'2':[0,0,0,0,0,0,0,0,0,0,0]};
		var qianyi   =   "";
		var qianer   =   "";
		var qiansan  =   "";
		for( i=0 ; i < data.length  ; i++){
		   var code  =   data[i].open_code;
		   code      =   code.split(',');
		   qianyi   +=   dh[code[0]].toString();
		   qianer   +=   dh[code[1]].toString();
		   qiansan  +=   dh[code[2]].toString(); 
		}
		for(index  in dh){
		  var index_i  = Number(index) - 1 ;
		  var cc       = dh[index];
		  miss['0'][index_i]  =   qianyi.indexOf(cc) < 0 ? num : qianyi.indexOf(cc);
		  miss['1'][index_i]  =   qianer.indexOf(cc) < 0 ? num : qianer.indexOf(cc);
		  miss['2'][index_i]  =  qiansan.indexOf(cc)< 0 ? num : qiansan.indexOf(cc);  
	    }
		return miss;
	},
	SscZhixuan:function(data){/*直选遗漏*/
       var miss  ={
			 0:[0,0,0,0,0,0,0,0,0,0],
			 1:[0,0,0,0,0,0,0,0,0,0],
			 2:[0,0,0,0,0,0,0,0,0,0],
			 3:[0,0,0,0,0,0,0,0,0,0],
			 4:[0,0,0,0,0,0,0,0,0,0]
	   };
	   var  dh = [0,1,2,3,4,5,6,7,8,9] ; 
	   var weishu = {0:'',1:'',2:'',3:'',4:''};
	   for( i=0 ; i < data.length ; i++ ){
	         var code =  data[i].open_code ;
			 var code =  code.split(",")   ;
			 for ( j=0 ;  j< code.length ;  j++ ){
			     weishu[j]    +=  code[j].toString();
			 }
	   }
	   for(index in weishu){
	      for(i=0 ; i < 10 ; i++){
			 var ind  =  weishu[index].indexOf(i) 
		     miss[index][i]= ind < 0 ?  data.length : ind ;
		  }
	   } 
	   return miss; 
	},
	SscZuXuan:function(data){/*组选胆拖遗漏*/
	   var miss = [0,0,0,0,0,0,0,0,0,0]  ;
	   for( i=0 ; i < 10 ; i++){
		   for( j=0; j < data.length ; j++){
			   var code  =  data[i].open_code.replace(/\,/g,'');
			   if(code.indexOf(i)>=0){
			       break;
			   }else{
			       miss[i] +=1 ;
			   }
		   }
	   }
	   return miss;
    },
	SscHeZhi:function(data){/*二星和值遗漏*/
	   var miss = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	   for (i=0 ; i < 19 ; i++){
	      for( j=0 ; j < data.length ; j++ ){
		     var hz =  data[j].open_code.split(",");
			 var h  =  Number(hz[3])+ Number(hz[4]);
			 if( h == i ){
			    break;
			 }else{
			    miss[i] += 1 ;
			 }
		  }
	   }
	   return miss; 
	},
	FcSdZX:function(data){/*福彩3D【排列三】直选遗漏*/
	   var miss  =  {
		     0 :[0,0,0,0,0,0,0,0,0,0],
			 1 :[0,0,0,0,0,0,0,0,0,0],
			 2 :[0,0,0,0,0,0,0,0,0,0]
	   };
	   var weizhi ={0:'',1:'',2:''};
	   for(i=0 ; i< data.length; i++){
	      var code  = data[i].open_code.split(",");
		  for (index  in weizhi ){
		      weizhi[index] += code[index].toString();
		  }
	   }
	   for(index in  weizhi){
	      for(i=0; i < 10 ; i++ ){
			 var num = weizhi[index].indexOf(i);   
		     miss[index][i] = num < 0  ?  data.length : num  ;
		  }
	   }
	   return miss; 	   
	},
	FcSdZXuan:function(data){ /*福彩3D【排列三】 组三 组六 遗漏*/
      var miss =  [0,0,0,0,0,0,0,0,0,0] ;
	  var len  = data.length;
	  for( i=0 ; i < 10 ; i++){
	     for( j=0; j < data.length ; j++ ){
	        var code  =  data[i].open_code.replace(/\,/g,'');
			miss[i] = code.indexOf(i) < 0  ?  len : code.indexOf(i) ;     
		 }
	  }
	  return miss;
	},
	PlwZX:function(data){/*排列五直选遗漏*/
		var miss =  {
		    0:[0,0,0,0,0,0,0,0,0,0],
			1:[0,0,0,0,0,0,0,0,0,0],
			2:[0,0,0,0,0,0,0,0,0,0],
			3:[0,0,0,0,0,0,0,0,0,0],
		    4:[0,0,0,0,0,0,0,0,0,0]	
		};
		var wz = {
		    0:'',
			1:'',
			2:'',
			3:'',
			4:''
		};
		var len =  data.length ;
		for( i=0 ; i < data.length ; i++){
		    var code = data[i].open_code.split(',');
			for( n=0 ; n < code.length; n++){
			   wz[n] += code[n].toString() ;
			}     
		}
		for( m in wz){
	       for( i=0 ; i < 10 ;i++){
		      var index  = wz[m].indexOf(i);
			  index      =  index < 0 ? len : index ;
			  miss[m][i] =  index ; 
		   }
		}
		return miss;
	},
	Qlc:function(data){/*七乐彩组选遗漏*/
	   var miss = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] ;
	   for( n=1 ; n < 31 ; n++){  
         for( i=0 ; i < data.length ; i++ ){
		    var code   =  data[i].open_code.replace(/\,/g,'');  
			var index  =  n - 1 ;
			if(code.indexOf(n) >=0 ){
			    break;
			}else{
			    miss[n] += 1 ;
			} 
		 }		    
	   }
	   return miss ;
	},
	Qxc:function(data){/*七星彩直选遗漏*/
	   var miss = {
	       0:[0,0,0,0,0,0,0,0,0,0],
		   1:[0,0,0,0,0,0,0,0,0,0],
		   2:[0,0,0,0,0,0,0,0,0,0],
		   3:[0,0,0,0,0,0,0,0,0,0],
		   4:[0,0,0,0,0,0,0,0,0,0],
		   5:[0,0,0,0,0,0,0,0,0,0],
		   6:[0,0,0,0,0,0,0,0,0,0]
	   };
	   var wz = {
		      0:'',
			  1:'',
			  2:'',
			  3:'',
			  4:'',
			  5:'',
			  6:''
		};
		var len = data.length ;
		for( i=0 ; i < data.length ;  i++){
		   var code = data[i].open_code.split(',');
		   for ( j=0 ; j < code.length ; j++){
		     wz[j]+= code[j].toString();
		   }
		}
		for( index in wz ){ 
			for(i=0 ; i < 10 ; i++ ){
			  var num =  wz[index].indexOf(i);
			  num     =  num  <  0  ?  len  :  num ;
			  miss[index][i]  =  num ;
			}
		}
		return miss;
	}, 
	Pk10:function(data){/*pk10遗漏*/
	  var miss = {
	        1:[0,0,0,0,0,0,0,0,0,0], 
			2:[0,0,0,0,0,0,0,0,0,0],
		    3:[0,0,0,0,0,0,0,0,0,0],
			4:[0,0,0,0,0,0,0,0,0,0],
			5:[0,0,0,0,0,0,0,0,0,0],
			6:[0,0,0,0,0,0,0,0,0,0],
			7:[0,0,0,0,0,0,0,0,0,0],
			8:[0,0,0,0,0,0,0,0,0,0],
			9:[0,0,0,0,0,0,0,0,0,0],
			10:[0,0,0,0,0,0,0,0,0,0]       	 
	  }
	 var wz = {
		    1:'',
			2:'',
			3:'',
			4:'',
			5:'',
			6:'',
			7:'',
			8:'',
			9:'',
			10:''
		 }
	  var dh = {'1':'1','2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9',10:'a'};
	  var len = data.length; 	 
	  for( i=0 ; i < data.length ; i++ ){
	    var code = data[i].open_code.split(',');
		for(n=1; n < 11 ; n++){
		  var ind = parseInt(code[n-1]);
		   wz[n] += dh[ind].toString();
		}
	  }	
	  for(index in miss){
	     for(i=1 ;i < 11 ; i++){
		    var m = wz[index].indexOf(dh[i]) ;
			 m     = m < 0  ? len : m ;
			 miss[index][index-1] = m ;
		 }
	  }
	  return miss;
    },
	LoadMiss:function(data){
		var ds   =  this ;
		var way  =  ds.Wid ;
		switch(ds.type){
		   case 'ssc' :
			if(way == 237 || way == 239 || way == 244 || way == 250){/*直选*/
			   var mlist =  $("#wqbsg").find('ul');
			   miss    = ds.SscZhixuan(data);
			   for(m in miss){
			      var em =  $(mlist[m]).find('em');
				  $.each(em,function(a,b){
				    $(b).html(miss[m][a]);
				  });
			   } 
			}
			if( way == 241 || way == 240 || way == 242 || way == 243 || way == 246 || way == 249 ){
			   var miss  =  ds.SscZuXuan(data);
			   var zuxan =  $("ul[seat='zuxuan']").find('em');
			   var dan   =  $("ul[seat='dan']").find('em');
			   var tuo   =  $('ul[seat="dan"]').find('em');
			   for(i=0; i< zuxuan.length; i++){
			      $(zuxuan[i]).html(miss[i]);
				  $(dan[i]).html(miss[i]);
				  $(tuo[i]).html(miss[i]);
			   }  
			}
			if( way == 245 || way == 248 ){
			   var hz   =  $("ul='hezhi'").find('em');
			   var miss =  ds.SscHeZhi(data);
			   for( i=0; i < miss.length; i++){
			      $(hz[i]).html(miss[i]);
			   }
			}
		   break;
		 case 'syxw' :
		   way = way.substr(0,2);
		   if (way == 22 || way == 23 ) {
			   var renxuan =  $('ul[seat="zuxuan"]').find('em');
			   var dan     =  $('ul[seat="dan"]').find('em');
			   var tuo     =  $('ul[seat="tuo"]').find('em');
			   var miss    =  ds.SyxwRenXuan(data);
			   for(i=0 ; i < miss.length; i++){
			     $(renxuan[i]).html(miss[i]);
				 $(dan[i]).html(miss[i]);
				 $(tuo[i]).html(miss[i]);
			   }
		   }
		   if(way == 43 || way == 48 || way == 53 ){
		      var wan   =  $('ul[seat="wan"]').find('em');
			  var qian  =  $('ul[seat="qian"]').find('em');
			  var bai   =  $('ul[seat="bai"]').find('em');
			  var obj   =  {0:wan,1:qian,2:bai} ;
			  var miss  =  ds.SyxwQianYES(data);
			  for ( index  in  obj ){
			     var items = obj[index];
				 for( i=0 ; i < items.length; i++ ){
				    $(items[i]).html(miss[index][i]); 
				 }
			  }
		   }  
		   break; 
		  case 'ks':
		    /*快三系列*/
		   break;
		  case 'sd' :
		  case 'pls': 
		    if ( way == 513 ){
			   var list =  $("#zhixuan").find('ul');
			   var miss =  ds.FcSdZX(data);
			   for( index in miss){
			     var em = $(list[index]).find('em');
				 for(i=0 ; i < em.length ; i++){
				    $(em[i]).html(miss[index][i]);
				 }
			   }
			}
			if( way==514 || way == 515 ){
			   var list =  $("ul[seat='zuxuan']").find('em');
			   var Miss =  ds.FcSdZXuan(data);
			   for(i=0; i < list.length; i++){
			      $(list[i]).html(Miss[i]);
			   }
			}  
		   break;
		  case 'plw' :
		    var  list =  $("#zhixuan").find('ul');
			var  miss =  ds.PlwZX(data);
			for(index in miss){
			  var em =  $(list[index]).find('em');
			  for(i=0 ; i< em.length; i++){
			     $(em[i]).html(miss[index][i]);
			  }
			}
		   break;
		  case 'qlc' :
		    var list =  $(".ballRed2").find('em');
			var miss =  ds.Qlc(data);
			for( i=0 ;i < miss.length; i++ ){
			   $(list[i]).html(miss[i]);
			} 
		   break; 
		  case 'qxc' : 
		   var list = $('#zhixuan').find("ul");
		   var miss = ds.Qxc(data);
		   for(index in miss){
		      var em = $(list[index]).find('em');
			  for( i=0 ; i < miss[index].length ; i++ ){
			     $(em[i]).html(miss[index][i]);
			  }
		   }  
		   break;  
		  case 'pk10' :
		  var miss = ds.Pk10(data);
		  var list = $(".ballRed2");
		  for(index in miss ){
		     var em = $(list[index-1]).find("em");
			 for(b=0; b <10 ; b++){
			    $(em[b]).html(miss[index][b]);
			 }
		  } 
		   break;  
		}
    },
	SwtichPlay:function(){
	  var  ds  = this ; 	
	  var play =  window.localStorage.getItem('init_cp');
	  play     =  JSON.parse(play);
	  var cp   =  play.t  ;  /*彩种拼音缩写*/
	  ds.ltId  =  play.id ;
	  ds.type  =  cp      ; 
	  switch (cp) {
	     case 'ssc'  :
		   ds.Wid  =  Ssc.Wid   ;
		   break;
		 case 'syxw' :
		   ds.Wid  =  Syxw.Wid  ;   
		    break;
		 case 'ks'   :
		    ds.Wid =  Ks.Wid    ;
			break;
		 case 'sd' :
		 case 'pls':
		    ds.Wid  =  FcSd.Wid ;
			break;
		 case  'qxc'  :
		    ds.Wid  =  Qxc.Wid ;
			break;
		 case 'qlc'  :
		    ds.Wid  =  Qlc.Wid ;
			break;
		 case 'dlt'  :
		    ds.Wid  =  Dlt.Wid ;
			break;
	     case 'ssq' :
		    ds.Wid  =  Ssq.Wid;
			break ;
		 case 'pk10' :
           ds.Wid   = Pk10.Wid;
		   break;		    			 		 			
	  } 
	  ds = null ; 
	}
}


function LoadFile(){
   var script  = document.createElement("script");
   script.type = "text/javascript" ;
   script.src  = "../Public/js/dsjs/dshaha.js" ;
   $("head").append(script);   
}
$(function(){
  LoadFile();	
  init();
  /*彩种初始化 开始*/
  var cp_init       =  window.localStorage.getItem('init_cp');
  cp_init           =  JSON.parse(cp_init);  
  LTInit.ltId       =  cp_init['id'];
  LTInit.lt_type    =  cp_init['t'];
  Miss.ltId         =  cp_init['id'];
  Miss.type         =  cp_init['t'];
/*彩种初始化 结束*/	
   LTInit.initPlay();
/*加载遗漏数据*/   	
  Miss.LoadData();
  $("#Trend") ? $("#Trend").hide() : '';
  window.localStorage.removeItem('code');
  $('.nav-menu').on('touchend','span',function(){
      var action = $(this).attr('action');
	  switch(action){
	     case 'History' :
		  var cp  =  window.localStorage.getItem("init_cp");
		  cp      =  JSON.parse(cp); 
		  var id  =  base64encode(cp.id);
		  window.location.href = '../code/kj_list.html#'+id ;
		  break;
		 case 'Buy'  :
		   var href = "../User/touzhu.html";
		   window.location.href = href ;
		  break;
		 case 'Info' :
		   var cp  =  window.localStorage.getItem("init_cp");
		   cp      =  JSON.parse(cp); 
		   var href ="../News/play.html?"+cp.id;
		   window.location.href = href ;
		  break ;
		case 'Trend':
		  var cp  =  window.localStorage.getItem("init_cp");
		  cp      =  JSON.parse(cp); 
		  $("#Trend").toggle();
		  if($("#Trend").html()== ""){
			$.post(Url.TodayOPEN,{id:cp.id},function(data){
			  var d = {ds:data};
			  var html = template('TrendShow',d);
			  $("#Trend").html(html); 
			},'json');  
		  }else{
		    $("#Trend").html('');
		  }
		 break;       
	  }
   }) 
   $(".xialaD").on("click",function(){
       var cp  =  window.localStorage.getItem("init_cp");
		  cp      =  JSON.parse(cp); 
		  if($("#Trend").html()== ""){
			$.post(Url.TodayOPEN,{id:cp.id},function(data){
			  var d = {ds:data};
			  var html = template('TrendShow',d);
			  $("#Trend").html(html); 
			},'json');  
		  }else{
		    $("#Trend").html('');
		  }
   })
   $("span[action='Trend']").on("touchend",function(){
        var cp  =  window.localStorage.getItem("init_cp");
		     cp      =  JSON.parse(cp); 
		  if($("#Trend").html()== ""){
			$.post(Url.TodayOPEN,{id:cp.id},function(data){
			  var d = {ds:data};
			  var html = template('TrendShow',d);
			  $("#Trend").html(html); 
			},'json');  
		  }else{
		    $("#Trend").html('');
		  }
   })
})


