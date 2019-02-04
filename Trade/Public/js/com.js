// switchtab2
function initmask(){
	var win_width = $(document).width();
	var win_height = $(document).height();
	$(".mask_layer").height($(document).height());
	$(".mask_layer").find(".mask").css({"top":win_height/2-$(".mask").height()/2+"px","left":win_width/2-$(".mask").width()/2+"px"});
}


/*function switchtab(obj,id,pt,pt2){
	var c = $(obj);
	$("#"+pt2).show();
	$("#"+pt).find('.tab_t').removeClass('current');
	c.addClass('current');
	$("#"+pt).find('.tab_card').hide();
	$("#"+id).show();
}*/
function switchtab(obj,id,pt,pt2){
	var c = $(obj);
	$("#"+pt2).show();
	$("#"+pt).find('.tab_t').removeClass('current');
	c.addClass('current');
	$("#"+pt).find('.tab_card').hide();
	$("#"+pt).find('.tab_card').removeClass('tab_anime');
	$("#"+id).show();
	$("#"+id).addClass('tab_anime');
}

function switchtabt(obj,pt,id){
	var c = $(obj);
	$("#"+pt).find('.tab_t').removeClass('current');
	c.addClass('current');
	$("#"+id).hide();

	}

function switchtabfsl(obj,obj2,id,pt){
	$("#"+pt).find('.tab_t').removeClass('current');
	$("#"+obj).addClass('current');
	$("#"+pt).find('.tab_t2').removeClass('current2');
	$("#"+obj2).addClass('current2');
	$("#"+pt).find('.ul2').slideUp(300);
	$("#"+id).slideToggle(500);
}

function switchtab_a(obj,id,pt,pt2){
	var c = $(obj);
	$("#"+pt).find('.tab_t').removeClass('current');
	c.addClass('current');
	$("#"+pt2).find('.tab_card').hide();
	$("#"+id).show();
}
function switchtab2(obj,id,pt){
	var c = $(obj);
	$("#"+pt).find('.tab_t2').removeClass('current');
	c.addClass('current');
	$("#"+pt).find('.tab_card2').hide();
	$("#"+id).show();
}

function tog(obj,a,b,c){
	var timeset= c;
	timeset = typeof timeset === 'number' ? timeset : 300;
	$("#"+obj).stop().slideToggle(timeset);
	$("#"+a).toggle();
	$("#"+b).toggle();
	}
	
function stog(obj,a,b,c){
	var timeset= c;
	timeset = typeof timeset === 'number' ? timeset : 300;
	$("#"+obj).slideToggle(timeset);
	$("#"+a).slideToggle(300);
	$("#"+b).slideToggle(300);
	}
	

function showhidetab(obj,id,pt){
	var c = $(obj);
	$("#"+pt).find('.tab_t').removeClass('current');
	c.addClass('current');
	$("#"+id).show();
}

function showid(obj,a,b,c){
	var timeset= c;
	timeset = typeof timeset === 'number' ? timeset : 300;
	$("#"+obj).slideDown(timeset);
	$("#"+a).slideDown(100);
	$("#"+b).slideDown(100);
}

function hideid(obj,a,b,c){
	var timeset= c;
	timeset = typeof timeset === 'number' ? timeset : 300;
	$("#"+obj).slideUp(timeset);+
	$("#"+a).slideUp(100);
	$("#"+b).slideUp(100);
}



(function ($) {
    $.extend({
        'navshadow': function (con) {
            con = typeof con === 'number' ? con : 250;
            var $lis = $('#navMul>li'), $h = $('#navshadow');
            $lis.hover(function () {
                $h.stop().animate({
                    'left': $(this).offsetParent().context.offsetLeft ,
					'width': $(this).offsetParent().context.offsetWidth ,
					'opacity': 1
                }, con);
            }, function () {
                $h.stop().animate({
					'opacity': 0,
                }, 300);
            });
        }
    });
    
   
}(jQuery));
//------------------------

var num='1';
var count1='1';
function shownav(id,dnum,stime){
	num= dnum;
	var sstime = stime;
	if (sstime > 1)
	{$("#"+id).stop().slideDown(sstime);}
	else{
	$("#"+id).show(sstime);
	}
}
function hidenav(id,dnum){
	num= dnum;
	if( num==='1'){
	$("#"+id).hide();
	}
}
function hidenavh(id){
	$("#"+id).hide();
	if(count1==='1'){$('#navc_g').hide();}
}



function shownav2(id,id2,count2){
	count1=count2;
	$("#"+id).show();
	$("#"+id2).show();
}
function hidenav2(id,id2){
	$("#"+id).hide();
	$("#"+id2).hide();
	
	}
	
	
function changepic(obj){
	$(obj).removeClass("navli_my");
	$(obj).addClass("navli_my_over");
	}
function changepic2(obj){
	$(obj).removeClass("navli_my_over");
	$(obj).addClass("navli_my");
	}
	
function addblushadow(obj){
	$(obj).addClass("blushadow");
	}
function removeblushadow(obj){
	$(obj).removeClass("blushadow");
	}
	
//----------------------------------
$(function(){ 
$('.input_onf').bind({ 
click:function(){ 
if (this.value == this.defaultValue){ 
this.value=""; } }, 
blur:function(){ 
if (this.value == ""){ 
this.value = this.defaultValue; } } 
});
CheckonLine(); 

})


/*记住登录状态*/
function RemmeberState(open_id){
   var  d = new Date();
   var  passtime = d.getTime() + 10 *24 * 3600 * 1000 ;
   var  state = {'open':open_id,'pass':passtime} ;
   state  = JSON.stringify(state);
   window.localStorage.setItem('_kr_LoginState',state); 
}

function CheckonLine(){
   try{
	   var  data = window.localStorage.getItem('_kr_LoginState');
	   data  =  JSON.parse(data);
	   var  d = new Date();
	   d    =  d.getTime();
	   if(d > data.pass ){
		  window.localStorage.removeItem('_kr_LoginState');
		  return ;
	   }
	   var url = Url.LoginState ;
	   var ss  = {biaoshi:data.open};
	   mui.post(url,ss,function(data){},'json');
   }
   catch(e){
	   
   }
   setTimeout(function(){ CheckonLine() },3000);
}
//2017-02-23 添加 cherry
$(function(){
	//editor  by  dongsheng
	mui.get('/M/Common/foot.html',function(data){
		var a = window.location.href ;
		if( a.indexOf('Buy/Detail.html') < 0 ){
		   $("body").append(data);
		}
	})
	$(".className").text(Url.WEBNAME);
   	$("#quit").click(function() {
   		mui.post(Url.USER_CENTER,{action:'quit'},function(){

  			window.localStorage.removeItem('_kr_LoginState');
			window.location.href = '/M/User/main.html';
	  	},'json');
   	}); 
    $(".qiandao").click(function() {
   		mui.post(Url.USER_CENTER,{action:'setSign'},function(data){
   			alert(data.msg)
			window.location.href = '/M/index.html';
	  },'json');
   });
})
function Verify(){ 
	var time = new Date().getTime();
    document.getElementById('verifyImg').src= '/m.php/Login/verify/'+time;
    $('.yzm').attr('src', '/m.php/Login/verify/'+time);
}
function goMain(){
	mui.post(Url.USER_CENTER,{action:'userinfo'},function(data){
		if(data.code != undefined){
		     window.location.href  =   '/M/User/login.html?url=/M/User/main.html';
		  return ;
		}else{
		     window.location.href  =   '/M/User/main.html';
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
		console.log(data);
		if (data.usertype==3) {
			$(".agents").attr('href', '/M/User/agents.html');
			$(".agents").show();
		}
	},'json');
	
}


/*add by dongsheng 兼容sessionstroge*/
function LoadCookieJS(){
	var script=document.createElement("script");
	script.setAttribute("src","../Public/js/cookie.js");
	script.setAttribute("type", "text/javascript");
	if(script!='undefined'){
	   document.getElementsByTagName("head").item(0).appendChild(script);
    }
}
function SetMyData(key,data){
  if(window.localStorage){
     window.localStorage.setItem(key,data);
  }else{
	$.cookie(key,data);
	alert("不支持");
  }	
}
function getMyData(key){
  var data =  "" ;
  if(window.localStorage){
	data = window.localStorage.getItem(key);   
  }else{
	 data = $.cookie(key);
	 alert("不支持");  
  }
  return data;
}
function removeMyData(key){
   if(window.localStorage){
	   window.localStorage.removeItem(key);
   }else{
	 $.cookie(key,null); 
	 alert("不支持"); 
   }	
}
