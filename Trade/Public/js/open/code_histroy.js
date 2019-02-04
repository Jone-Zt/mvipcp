var HistroyCode  =  {
    page: 1 ,
	count:1 ,
	Init:function(){
		var me   =  this ;
		var cs   =  me.getParmer();
		var url  =  Url.Histroy_OPEN;
		mui.post(url,{page:me.page,idt:cs},function(json){
			var data =  base64decode(json.data);
			data     =  JSON.parse(data); 
			console.log(data)
			me.page  =  data.page + 1 ;
			me.count =  data.count ; 
			me.BindData(data,cs);
		},'json'); 
	},
	getParmer:function(){
		var href = window.location.href ;
		href     =  href.split("#");
		return  base64decode(href[1]);
	},
	BindData:function(data,id){
		var ks = data.ks.join(",");
		var  binddata = {};
		binddata.type  = ks.indexOf(id) > -1 ? 'sos' : 'other'  ;
		if( id <  11 ) { binddata.type = 'dipin'   ; } 
		binddata.code  = [] ; 
		for(i=0 ; i < data.list.length ; i++ ){
	       var objs = {} ;
		   objs.name = data.name;
		   objs.issue = data.issue;
		   objs.code = data['list'][i]['open_code'].split(",");
		   objs.time = HistroyCode.Format(data['list'][i]['open_time']);
		   objs.hezhi= eval(objs.code.join("+"));
		   objs.issue=data['list'][i]['issue']; 
		   objs.id   = id ;
		   binddata.code.push(objs);
		} 
		$("#topnav-index").find("title").html(data.name+"历史开奖"); 
		document.title   =  data.name+"历史开奖"; 
		var html = template("GaoPinCai",binddata);  
		$("#kjlist").append(html);   
    },
	Format:function(time){
       var d = new Date(time*1000);
	   var t = {
	         Y : d.getFullYear(),
			 m : (d.getMonth()+1) > 9 ?  (d.getMonth()+1)  : '0'+(d.getMonth()+1) ,
			 d : d.getDate() < 10     ?   '0'+ d.getDate() :  d.getDate(),
			 H : d.getHours() < 10    ?   '0' + d.getHours() :  d.getHours() ,
			 i : d.getMinutes() < 10  ?   '0' + d.getMinutes() : d.getMinutes(),
			 s : d.getSeconds() <10   ?   '0' + d.getSeconds() : d.getSeconds()     
	   }
	   t.alls = t.Y+"-"+t.m+'-'+t.d+" "+t.H+":"+t.i+":"+t.s ;
	   return t.alls;
	}
	  
}

template.helper('DiPin',function(id,code){
	var hse    = [] ;
	var lse    = [] ;
	var str    = '' ;
	var len    =  code.length;
 	if( id == 1 || id == 5 || id == 3 ){
       if(id == "1") {
	      len  = 6 ;
	   }
	   if( id == "5" ){
	      len = 5 ;
	   }
	   if( id == "3" ){
	       len = 7 ;
	   }
	   hse   = code.splice(0,len);
	   lse   = code ;
   }else{
        hse   = code ; 
   }
   for( i=0 ; i < hse.length; i++ ){
      str += '<i class="ii">'+hse[i]+'</i>' ;
   }
   for( t=0; t < lse.length; t++ ){
	   str+= '<em class="ems">'+lse[t]+'</em>' ;
   }
   return str ;	
})