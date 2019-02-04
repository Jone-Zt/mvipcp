var LTInit={
	ltId:0, /*默认为重庆时时彩*/
	DBId:0,/*对比ID*/
	lt_name:'',
	lt_count:'',
	lt_type :'',
    initPlay:function(){
	   var ds=this;
	   var name="config_"+ds.ltId;

	   if(window.localStorage.getItem(name)==null){
	      mui.get(Url.init,{id:ds.ltId,type:ds.lt_type},function(data){
			  window.localStorage.setItem(name,JSON.stringify(data));
		      LTInit.setPlay(data);
			  LTInit.LtType(data);
		  },'json');
	   }else{
	      var dd=JSON.parse(window.localStorage.getItem(name));
		  ds.setPlay(dd);
		  ds.LtType(dd);
	   }
	   Url.start=ds.ltId;
	   ds=null;
	},
	LtType:function(dd){
	   var cls = dd["cp"]["class"];	
	   switch(cls){
			 case  'pk10' :
			   Pk10.lt_id   =  this.ltId;
			   break;            
		  }  
	},
	setPlay:function(data){
	   var nav="";
	   var TypeClass = data['cp']['class'];
	   for(index in data['play']){
	      if(LTWANFA[TypeClass][index]!=undefined){
			var infos=LTINFO[TypeClass][index];
			infos=infos.replace("{$"+index+"}",data['play'][index]['lt_win']); 
		    nav+='<span wid="'+index+'" pid="'+data['play'][index]['id']+'" select="'+data['play'][index]['select']+'" info="'+infos+'">'+LTWANFA[TypeClass][index]+'</span>';
			switch(TypeClass){
			    case  'pk10' :
			     if(data['play'][index]['select'] == 1){
					 Pk10.Wid=data['play'][index]['public_id'];
					 Pk10.Pid=data['play'][index]['id'];
					 Pk10.Info=data['play'][index]['lt_hezhi'];
					 Pk10.Name=LTWANFA[TypeClass][index];
				 } 
				 break; 	 	  	 	 
			}
		  }
	   } 
	   this.lt_name=data['cp']['name'];
	   $("#nav2").find("div").html(nav);
	   if(TypeClass=="ssc"){
	      $("#NameWay").html(Ssc.Name);
	      Ssc.LoadPlay();
	   }
	   if(TypeClass=="syxw"){
	     $("#NameWay").html(Syxw.Name);
		 Syxw.LoadPlay();
	   }
	   if(TypeClass == 'sd' || TypeClass == 'pls' ){
	     $("#NameWay").html(FcSd.Name);
		 FcSd.LoadPlay(); 
	   }
	   if(TypeClass == 'plw' ){
	     $("#NameWay").html(Plw.Name);
		 Plw.LoadPlay(); 
	   }
	   if(TypeClass == 'pk10'){
	      $("#NameWay").html(Pk10.Name);
		  Pk10.LoadPlay();
	   }
	   	   
	}
	
}

$(function(){
	mui.init({
	 swipeBack:true //启用右滑关闭功能
	});
  //LTInit.initPlay();
})