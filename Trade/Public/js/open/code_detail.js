var CodeDetail = {
    Init:function(){
	  var id = CodeDetail.GetParam();
	  var d  = CodeDetail.FormatTime(null);
	  var file =Url.DIPIN_CODE+"?lt_id="+id[1]+"&issue="+id[0]+"&callback=?";
	  $.getJSON(file,function(data){
		  CodeDetail.bindData(data,id[1],data.open);
	  })
	},
	GetParam:function(){
	   var href = window.location.href ;
	   href     = href.split('#');
	   var id   = [base64decode(href[2]),base64decode(href[1])] ;
	   return id ; 
	},
	FormatTime:function(time){
	  var D = time == null ?  new Date() : new Date(time*1000);  
	  var temp = {};
	  temp.year    =  D.getFullYear();
	  temp.month   =  D.getMonth() + 1;
	  temp.month   =  temp.month < 10  ?  '0'+ temp.month   :  temp.month ; 
	  temp.day     =  D.getDate()    ;
	  temp.day     =  temp.day < 10    ?  '0'+ temp.day     :  temp.day   ;
	  temp.hour    =  D.getHours();
	  temp.hour    =  D.hour < 10      ?  '0' + tmep.hour   :  temp.hour  ;
	  temp.minutes =  D.getMinutes();
	  temp.minutes =  temp.minutes < 10?  '0'+ temp.minutes : temp.minutes;
	  temp.miao    =  D.getSeconds(); 
	  temp.miao    =  temp.miao < 10   ?  '0'+ temp.miao    : temp.miao   ; 
	  temp.quan    =  temp.year+"-"+temp.month+"-"+temp.day;
	  temp.haha    =  temp.month+"-"+temp.day+" "+temp.hour+":"+temp.minutes+":"+temp.miao;   
	  return temp ;  
	},
	bindData:function(data,id,opens){	
	   var BindData = {} ;
	   console.log(data);
	   var numbers  =  data.json.number ;
	   console.log(numbers);
	   var qian     =  data.json.money  ; 
	   BindData.issue    = opens.issue ;
	   BindData.opentime = opens.open_time ;
	   var code =  opens.open_code.split(",");
	   if(id==1 || id == 3 || id == 5 ){
	      if (id == 1 ) BindData.openblue  = code.splice(6,1);
		  if(id == 3  ) BindData.openblue  = code.splice(7,1);
		  if(id == 5  ) BindData.openblue  = code.splice(5,2);
		  BindData.openred = code;
		  BindData.iblue  = true ; 
	   }else{
	      BindData.openred =  code ;
		  BindData.iblue  =  false ;
		  BindData.openblue = null ;  
	   }
	   if(id == 2 ){
	      BindData.iblue='3d' ;
		  BindData.openblue =  code.splice(3,3);
		  BindData.openred  =  code ; 
	   }
	   BindData.sale     =  data.json.count ;
	   BindData.jiangchi =  data.json.jiangci;
	   BindData.zjdata   =  [] ;
	   var num  = 1 ;
	   var jx =['一等奖'] ;
	   if(id==5 || id== 1 || id == 8){
		    num = 6 ;
			jx = ['一等奖','二等奖','三等奖','四等奖','五等奖','六等奖'] ;
	   }
	   if (id == 3 ){ 
	      num = 7 ;
		  jx = ['一等奖','二等奖','三等奖','四等奖','五等奖','六等奖','七等奖'] ;
		  
	   };
	   if(id==2 || id== 6){
		    num = 3;
			jx  = ['直选','组三','组六'] ;
	   }
	   for(i=0;i <num ; i++){
		   var dd = {};
		   dd.jx    = jx[i];
		   dd.num   = numbers[i];
		   dd.jj    = qian[i]  ; 
		   BindData.zjdata.push(dd);
	   }
	  var html = template('dsqq',BindData);
	  $("#kj-more").html(html); 
	  $("#topnav").find("title").html(opens.name);
	  document.title = opens.name;
	}
}

$(function(){
  CodeDetail.Init();
  $(".gogobuy").on("click",'button',function(){
     var id = CodeDetail.GetParam();
		 id = id[1];
	 var url  = {"1":"/M/Ssq/index.html","5":"/M/Dlt/index.html","2":"/M/sd/index.html","6":"/M/sd/index.html","7":"/M/plw/index.html","8":"/M/Qxc/index.html","3":"/Qlc/index.html"}; 
	 var type = {"1":"ssq","2":"sd","3":"qlc","5":"dlt","6":"pls","7":"plw","8":"qxc"};
	 var obj = new Object();
	 obj['id'] = id ;
	 obj['t']  = type[id];
	 var obj = JSON.stringify(obj);
	 window.localStorage.setItem("init_cp",obj);
	 window.location.href = url[id];
  })
})