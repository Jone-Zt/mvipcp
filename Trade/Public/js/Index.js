var  Index = {
     Load : function(List){
		var str = "<div class='line3-cp' style='margin-top:10px;'>" ;
		var num  =  0  ;
		for( i=0 ; i< List.length ; i++){
		   if( num == 3){
		      str += "</div><div class='line3-cp'>";
			   num = 0 ;   
		   } 
		   if(List[i]['parent']!=1) {
		   	str+='<a href="javascript:lotteryState('+List[i]['ltId']+',\''+List[i]['url']+'\',\''+List[i]['type']+'\')">';
		   }else{
		   	str+='<a class="moreClick" data-index="'+i+'" href="javascript:void(0);">';
		   }
		   str+="<div class='cp-box-item' ltid='"+List[i]['ltId']+"' type='"+List[i]['type']+"' url='"+List[i]['url']+"' parent='"+List[i]['parent']+"' index='"+i+"'><span class='cp-img'><img src='"+List[i]['logo']+"' alt=''/></span><div>"+List[i]['name']+"</div><i>"+List[i]['info']+"</i></div>";
		   if(List[i]['parent']!=1) str+='</a>';

		   num ++  ;
		}
		$("#cp-box-list").html(str); 
	},
    SetCP:function(){
       var cp_set = window.localStorage.getItem('DongSheng');
	   
	   if( cp_set == null ){
		   mui.post(Url.cp_init,function(data){
		       window.localStorage.setItem('DongSheng', JSON.stringify(data));
		   },'json');
	   }
	},
	Child:function(ll,obj){
		var list =ll['child'];
	    var str =  '';
		for( j=0 ; j < list.length; j++){
			if (j%3==0) str += j==0 ? '<div class="cp-sub1">' : '</div><div class="cp-sub1">';
		   str+='<a href="javascript:lotteryState('+list[j]['ltId']+',\''+list[j]['url']+'\',\''+list[j]['type']+'\')"><div class="cp-box-item" ltid="'+list[j]['ltId']+'"  type="'+list[j]['type']+'" url="'+list[j]['url']+'" parent="'+list[j]['parent']+'" index="'+j+'"><!--i class="arr1"></i--><span class="cp-img"><img src="'+list[j]['logo']+'" alt=""></span><div>'+list[j]['name']+'</div></div></a>';
		}
		str += "</div>";
		$(obj).parent().after(str); 
	},
	LoadAd:function(){
	   mui.post(Url.index_ad,function(data){
		 var last_index   =  data.length -1   ;
	     var str          =  "" ;
		 var point        = ""  ; 
		 var last = '<div class="mui-slider-item mui-slider-item-duplicate"><a href="'+data[last_index].pageurl+'"><img src="'+data[last_index]['pic']+'"></a></div>';
		 for( i=0 ; i < data.length; i++){
		   str += '<div class="mui-slider-item"><a href="'+data[i].pageurl+'"><img src="'+data[i].pic+'"></a></div>' ;
		   if(i == 0 ){
			  point  += '<div class="mui-indicator mui-active"></div>'; 
		   }else{
			  point  += '<div class="mui-indicator"></div>'; 
		   }
		 }
		 var  first ='<div class="mui-slider-item mui-slider-item-duplicate"><a href="'+data[0].pageurl+'"><img src="'+data[0].pic+'"></a></div>' ;
		 $(".mui-slider-loop").html(last+str+first);
		 $(".mui-slider-indicator").html(point);
	   },'json');
	},
	GoHome:function(){
	   window.location.href  = '/M/User/main.html';
	}, 
   	setweb:function(){
       mui.post(Url.WEBSET,function(data){
		  $(".chatName").html(data.wx_chat);
		   var d = {data:data}
	      var html = template('webcopyright',d);
		  $("#copyright").html(html);
	   },'json');
	},
	ShowWinList:function(){
	   mui.post(Url.WINLISTSHOW,function(data){
	    var  str = "" ;
		for( index in data['data'] ){
	       str += data['data'][index]+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
		}
		var  notice = [] ;
		for(var j=0; j < data['notice'].length ; j++ ){
	       notice.push(data['notice'][j]['title']); 
		}
		$("#NoticeListShow").html(notice.join(" ")); 
		$("#WinListShow").html(str);
	   },'json');
	},
	getLoginState:function(){
		$.post('/m.php/User/PUBLI','',function(data){
			$("#loginState").html('<span class="toLogin">登陆</span>');
			$("#Reg_Sign").html('<span class="Reg">注册</span>');
			$(".toLogin").click(function(){
				window.location.href = '/M/User/login.html';
			});
			$(".Reg").click(function(){
				window.location.href = '/M/User/reg.html';
			});
		},'json');
	},
	UserInfo:function(){
	    mui.post(Url.USER_CENTER,{action:'userinfo'},function(data){
		   if(data.code != undefined){
			  return ;
		   }
		   $("#uname").html(data['uname']);
		   var bding    =  $("#uname").parent().find('i');
		   var  shenfen = ['cellphone','email','person_id'];
		   $.each(bding,function(a,b){
		      if(data[shenfen[a]]!=1){
			     $(b).addClass('ds-gray-add');
			  }   
		   })
		   $("#userPoints").html('可用积分：'+data['points']+"分");
		   var list = $(".userinfoTable").find('i');
		   var aa = ['money','red','kequ'];
		   $.each(list,function(a,b){
		       $(b).html(data[aa[a]]);
		   })
		   $("#Head-Image").attr('src',data['head']);
		   $(".userInfo").show(); 
		},'json');
	}
}
//2017-04-01 添加cherry
  function lotteryState(ltid,url,type){
	 /*var type    =  type;
	 var cp_init =  {id:ltid,t:type};
  	mui.post('/m.php/Index/getState',{ltid:ltid},function(data){
  		if (data==1) {
		   window.localStorage.setItem('init_cp',JSON.stringify(cp_init));
  			location.href=url;
  		}else{
  			mui.alert('抱歉该彩种尚未开启','系统提示');
  		}
	   },'json');*/
   }
	$(document).on('click', '.moreClick', function() {
		var index = $(this).data('index');
	   	var len = $(document).find(".cp-sub1").size();
	   	pressNum = present == index ? (pressNum+1) : 1;
		if(present == index &&  pressNum%2==0){
		   $(document).find(".cp-sub1").remove();
		   return;
		}  
		$(".cp-sub1").remove(); 
	    Index.Child(List['cp'][index],this);
	 	present = index;
		return;
	})
//結束



