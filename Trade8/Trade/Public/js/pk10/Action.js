$(function(){
   Pk10.LoadCode();
   window.localStorage.removeItem('code');	
   $(document).on("click","#nav2 span",function(){Pk10.PlaySitch(this);Pk10.ClerArray(); Miss.LoadData();});
   $(".ballRed2 li").click(function(){
      cls  =  $(this).find("i").attr('class');
	  
	  if( cls == undefined || cls=="" ){
	      Pk10.InToBox(this);
	  }else{
	      Pk10.OutToBox(this);
	  }
	  Pk10.CheckRight(this);
	  Pk10.NumberMoney();
	  $(".btn-grey2").val('添加号码');
	  $("#btn-title").html('添加号码');
   })
   
   $(".btn-grey2").click(function(){
	  var txt = $(".tztishi").html();
	  txt     =  txt.match(/\d+/g); 
	  var text = $(this).val();
	  if(text == '添加号码'){
	    if(txt[0] < 1 ){ 
	       mui.alert('错误，选号不正确','系统提示');
		   return ;
		}
		var num = Pk10.toBasket();
		$(".notice-num").html(num);
		$(this).val('查看号码');
		$('#btn-title').html('查看号码');
		Pk10.ClerArray(); 
	  }else{
	     window.location.href =  '../Common/' ;
	  }   
   })
   
   $(".btn-grey").click(function(){
       Pk10.autoCode();
   })
   
   $(".btn-red").click(function(){
       var txt  =  $(".tztishi").html();
	   txt      =  txt.match(/\d+/g);
	   var len  =  $(".ballRed2").find("i.current").size();
	   var code =  window.localStorage.getItem('code');
	   var num  =  code == null ? true : false    ; 
	   if(num && len < 1 ){
	      mui.alert('请选择一注号码投注','系统提示');
		  return ;
	   } 
	   if( len > 0 && txt[0] < 1 ){
	      mui.alert('至少每位选择一个号码','系统提示');
		  return ;
	   }
	   if( txt[0] > 0 && !num ){
		   var cc =  Pk10.FormatCode();
	       code   =  JSON.parse(code);
		   code.push(code);
		   window.localStorage.setItem('code',JSON.stringify(code));
	   }
	   if( txt[0] > 0  && num ){
	      var cc =  Pk10.FormatCode();
		  window.localStorage.setItem('code','['+JSON.stringify(cc)+']');
	   }
	   window.location.href   =    '../Common/'
   })
})

function YaoYao(){
   window.localStorage.clear();	
   Pk10.autoCode();
}