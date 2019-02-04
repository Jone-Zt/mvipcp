template.helper('CutExpect',function(issue,num){
  	 //console.log(issue);
    return issue.substr(num);
})

template.helper('SumValue',function(code){
    var c = code.split(",");
	return eval(c.join('+'));
})

template.helper('IsHits',function(code,num){
   var clist = code.split(num);
   var b = (clist.length - 1);
   var bb = b > 1 ? '<i class="diynum">'+b+'</i>':'';
   var cls = code.indexOf(num)>=0 ? 'hitOnecode' : '' ;
   /**连号  开始**/
   var e = code.split(",");
   var f = e[1] - e[0] ;
   var g = e[2] - e[1] ;
   if( f==1 && (num== e[0] || num == e[1])){
     cls = "hitOnecodeClr";
   }
   if( g==1 && (num== e[1] || num == e[2])){
     cls = "hitOnecodeClr";
   }
   if(f==1 && g == 1 && cls !=""){
      cls = "hitOnecodeColor";
   }  
   /**连号  结束**/
   return '<span class="'+cls+'">'+num+bb+'</span>' ;
})

template.helper('ShowXT',function(code,text){
  var c = code.split(",");
  var txt  = "";
  if( c[0] == c[1] && c[1] == c[2] ){
     txt = "三同号" ;
  }
  if(c[0] != c[1] && c[1] != c[2] ){
     txt ="三不同号";
  }
  if((c[0] == c[1]&& c[0]!=c[2]) || (c[1]==c[2] && c[0] != c[2])){
     txt = "二同号" ;
  }
  if(c[0]==( c[1]- 1) && (c[2]== c[0]+2)){
     txt = "三连号";
  }
  var cls = txt == text ? 'thisxt' : '' ;
   return "<span class='"+cls+"'>"+text+"</span>";
})

template.helper('showSumText',function(code,num){
    var c = code.split(",");
	c     = eval(c.join("+"));
	var cls = c == num ? 'hitOnecode' : '' ;
    return '<span class="'+cls+'">'+num+'</span>' ;
});

var  TrendList = {
    url:'',
	ltid:0 ,
	type: '',
	getCode:function(){
	  var url = window.location.href ;
	  url = url.split("/");
	  TrendList.type = url[4];
	  var id = url[5].split("=")[1];
	  TrendList.ltid = id ;
	  $.post('/m.php/NewTrend/index',{id:TrendList.ltid},function(data){
	    TrendList.showTrend(data);
	  },'json');
	},
	showTrend:function(data){
	   var d ={ds:data};	
       switch(TrendList.type){
	       case 'ks' :
		    var html = template('BaseTrend',d);
			$("#trend").html(html);
		    break;
	   } 
	}
	
	 
} 
function selct_on(obj){
  var li = $(document).find("li.current").removeClass('current');
  $(obj).addClass('current');
  var id = $(obj).attr('traget');
  var table = $(document).find(".trend-show");
  $.each(table,function(a,b){
     if(id == a){
	   $(b).show();
	 }else{
	   $(b).hide();
	 }
  })
}
$(function(){
  $(".btn-chart").on('click',function(){
       $("#trend").html()!='' ?  $("#trend").html("") : TrendList.getCode();
  })
})