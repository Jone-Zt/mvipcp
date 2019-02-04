var Newopen = {
	getData : function(){
	   mui.post(Url.GETNEWOPEN,function(data){
	      var  jc   = base64decode(data.data);
		 // console.log(jc);
		  var  list = JSON.parse(jc);
		  Newopen.ListShow(list.open);
		   var zjjine = Newopen.showMoney(list.zj);
		   $(".all-tongji").find("p").html(zjjine);
	   },'json');
	},
	ListShow:function(data){
	   var dsstr  =   '' ;
	   for(index in data){
		   var ds =  data[index]; 
		   if(index != 'jc'){
		      for( i=0 ; i < ds.length ; i++){
			   var codearr = Newopen.openshow(ds[i].id,ds[i]);
			   dsstr += '<div class="all-kj">' ;
			   dsstr += '<p>'+ds[i]['name']+'<i>'+ds[i]['issue']+'期</i>'; 
			   dsstr += '<span>'+ds[i]['time']+'</span></p>';
			   dsstr += codearr.join('');
			   var  id = base64encode(ds[i]['id']);
			   var  issue = base64encode(ds[i]['issue']);
			   dsstr += '<p></p><span class="more" data="'+id+'" issue="'+issue+'"></span></div>' ;
		      }
		   }else{
			 if( ds == null ) continue ;
		     var numcount  = ds.length ;
			 var opennum  = 0 ;
			 var ttime    ='' ; 
			 $.each(ds,function(a,b){
				 ttime    = b['time'] ;
			    if( b['Plan'] !=null ){
				   opennum += 1 ;
				}
			 })
			 var dsstrs ='<div class="zqText">共'+numcount+'场比赛，已开奖'+opennum+'场</div>' ; 
			 dsstr += '<div class="all-kj"><p>竞彩足球<span>'+ttime+'</span></p>';
			 dsstr += '<p><div class="zqBG">' ; 
			 dsstr += dsstrs ;
			 var  id = base64encode('12');
			 dsstr += '</div><p></p><span class="more" data="'+id+'"></span></div>';
		   }
		   $("#kjlist").html(dsstr);
	   }
	   
	},
	openshow:function(ltId,code){
	   var redblue = [] ; 	
	   var type = code.class ;
	   var ssq = code['open'].split(",") ;
	   if (type == 'jc'){
	       
	   }else if(type == 'fc' && ltId == 1){//双色球
		  var blue  =  ssq.splice(6,1);
		  var s     =  '<ul class="kjlist-red">';
		  $.each(ssq,function(a,b){
			  s += '<li>'+b+'</li>' ;
		  })
		  s  += '</ul>';
		  redblue.push(s);
		  redblue.push('<ul class="kjlist-blue"><li>'+blue+'</li></ul>'); 
	   }else if(type == 'fc' && ltId == 2){//福彩3d
	      var blue = ssq.splice(3,3);
		  var s    = '<ul class="kjlist-red">'
		  $.each(ssq,function(a,b){ s += '<li>'+b+'</li>'});
		  redblue.push(s+'</ul>');
		  redblue.push('<span class="fc3d-sjh">试机号 <i>'+blue.join(' ')+'</i></span>');
	  }else if(type == 'fc' && ltId == 3 ){ //七乐彩
	      blue = ssq.splice(7,1);
		  var s = '<ul class="kjlist-red">' ;
		  $.each(ssq,function(a,b){
		     s += '<li>'+ b +'</li>' ;
		  })
		  redblue.push(s+'</ul>');
		  redblue.push('<ul class="kjlist-blue"><li>'+blue+'</li></ul>');   
	  }else if(type == 'tc' && ltId == 5 ){ //大乐透
	       blue = ssq.splice(5,2);
		  var s = '<ul class="kjlist-red">' ;
		  $.each(ssq,function(a,b){
		     s += '<li>'+ b +'</li>' ;
		  })
		  redblue.push(s+'</ul>');
		  var ss = '<ul class="kjlist-blue">' ;
		  $.each(blue,function(a,b){
		      ss +=  '<li>'+b+'</li>' ;
		  })
		  redblue.push(ss+'</ul>') ; 
	  }else if( type == 'ks' ){
	      var pic = {1:"../Public/images/tz1.svg",2:"../Public/images/tz2.svg",3:"../Public/images/tz3.svg",4:"../Public/images/tz4.svg",5:"../Public/images/tz5.svg",6:"../Public/images/tz6.svg"} ;
		  var s  =  '<ul class="kjlist-touzi">' ;
		  $.each(ssq,function(a,b){
		      s += '<li><img src="'+pic[b]+'"></li>' ;
		  })
		  redblue.push(s+"</ul>") ;
		  redblue.push('<span class="fc3d-sjh">和值 <i>'+eval(ssq.join('+'))+'</i></span>');
	  }else{
	     var s = '<ul class="kjlist-red">' ;
		 $.each(ssq,function(a,b){
		    s +=  '<li>'+b+'</li>';
		 }) 
		 redblue.push(s+'</ul>');
	  }
	  return redblue ;
	},
	showMoney:function(nums){
       var num  = parseInt(nums);
	   num      =  num.toString();
	   var len  =  num.length;
	   var cishu  = Math.ceil(len / 4);
	   var numlist = [];
	   for( i=4 ; i < len ; i+=4 ){
	     var start =  len - i ;
		 numlist.push(num.substr(start,4));
	   }
	   var a =  4 * numlist.length ;
	   var b =  len - a ;
	   var c =  num.substr(0,b);
	   if(c!="") numlist.push(c) ;
	   var d = numlist.length;
	   var f = '' ;
	   switch(d){
	      case 1 :
		    f = numlist[0]+'元';
		   break;
		  case 2 :
		    f = numlist[1]+'万'+numlist[0]+'元' ;
			break ;
		  case 3 :
		    f = numlist[2]+'亿'+ numlist[1]+'万'+numlist[0]+'元';
		    break;
		  case 4 :
		    f=	numlist[3]+'兆'+numlist[2]+'亿'+ numlist[1]+'万'+numlist[0]+'元';	
			break; 	   
	   }
	   return f ;   
	}
}
$(function(){
  Newopen.getData();
  $(document).on('tap','div.all-kj',function(){
     var dd = $(this).find('span.more').attr('data');
	 var issue = $(this).find('span.more').attr('issue');
	 var a = base64decode(dd);
	 //if( a < 10 ) { //低频彩
	//	 window.location.href =  '/M/code/kj_detail.html#'+dd+'#'+issue; 
	//	 return ;
	// }
	 if( a == 12 || a == 67 ){ //足彩
	  
	   window.location.href =  '/M/code/jc_detail.html#'+dd ;
	    return;
	 }
	 window.location.href = '/M/code/kj_list.html#'+dd ;
  })
})

