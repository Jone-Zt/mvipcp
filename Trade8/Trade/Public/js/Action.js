$(function(){
	Index.Load(List['cp']);
	Index.LoadAd();
	Index.ShowWinList();
	Index.UserInfo();
	  var cp_init =  {id:1,t:'ssq'};
	  Index.SetCP();
	 $(document).on('click',".cp-box-item",function(){
 	   	var ltid    =  $(this).attr('ltId');
	 	 var type    =  $(this).attr('type');
	 	 var url     =  $(this).attr('url');
	 	 var parent  =  $(this).attr('parent'); 
	 	 var index   =  $(this).attr('index'); 
	 	 var cp_init =  {id:ltid,t:type};
	 	 if( parent == 1 ){
	 		var len = $(document).find(".cp-sub1").size();
	 		if(present == index){
	 		   $(document).find(".cp-sub1").remove();
	 		   return;
	 		}  
	 		/*$(".cp-sub1").remove(); 
	 	    Index.Child(List['cp'][index],this);
	 	 	present = index;*/
	 		return;
	 	 }
	  	 var h       =  window.localStorage.getItem('DongSheng');
	  	 h           =  JSON.parse(h);
	  	 if(h[ltid] > 0 ){               
	  	   window.localStorage.setItem('init_cp',JSON.stringify(cp_init));
		   // setTimeout(function(){
//              window.location.href  = url;
//			},1500);
	  	    window.location.href  = url;
	  	 }else{
	  	   mui.alert('抱歉该彩种尚未开启','系统提示');	 
	       }
	 })
   $('.mypage').on('click',function(){
      Index.GoHome();
   })
  
   // var cz_tk    =  $('.infoBtn').find('div');
   // cz_tk[0].onclick = function(){
   //    mui.post(Url.USER_CENTER,{action:'tikuan'},function(data){
		 //  if(data.code < 5 ){
		 //     mui.alert(data.msg,'系统提示',function(){
			//      var url ={1:'/M/User/tixian.html',2:'/M/User/tixian.html',3:'/M/User/tixian.html',4:'/M/User/tixian.html'}
			// 	 window.location.href = url[data.code];
			//  });
		 //  }else{
		 //      window.location.href =  '/M/User/tixian.html';
		 //  }
	  // },'json');
   // }
   
   // cz_tk[1].onclick = function(){
   //     window.location.href =  '/M/User/racharge.html';
   // }
  
})

