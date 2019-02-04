var SMS = {
    pass   : 0,
	Time   :'',
	getSMS : function(obj){
	   var phone = obj.phone ;
	   mui.post(Url.VERIFY_CODE,{cellphone:phone},function(data){
	      if( data.code == 1 ){
			 SMS.pass  =  data.num;  
			 if(data.num < 5 ){
			    SMS.pass = data.num * 60 ;
			 } 
			 SMS.TimePass(obj.btn);
		  }else{
		     mui.alert(data.msg,'系统提示');
		  }
	   },'json');
	},
	TimePass:function(obj){
	    if(SMS.pass>1){
		   SMS.pass-=1 ;
		   $(obj).html(SMS.pass+"秒后获取");
		}else{
		   $(obj).html('获取验证码');
		   $(obj).removeAttr("disabled");
		   window.clearTimeout(SMS.Time);   
		}
		SMS.Time = setTimeout(function(){
		  SMS.TimePass(obj);
		},1000);
    },
	TiKuanSMS : function(obj){
	   mui.post(Url.QuKaun_Url,function(data){
	      if( data.code == 1 ){
		     var bb = data.num ;
			 SMS.pass  = bb < 4  ? bb * 60 :  bb ;
			 SMS.TimePass(obj);
		  }else{
		    mui.alert(data.msg,'系统提示');
		  }
	   },'json');
	},
	Editor:function(obj){
	   mui.post(Url.EditorUrl,function(data){
	     if(data.code == 1){
			 
	        var bb = data.num ;
			SMS.pass  = bb < 4  ? bb * 60 :  bb ;
			SMS.TimePass(obj) ;
		 }else{
		    mui.alert(data.msg,'系统提示');
		 }
	   },'json');
	}   
}