var BuyAction = {
    page:1,
	count:1,
	where:'',
	InitData:function(){
	   var data = {tiaojian:this.where,page:this.page};
	   mui.post(Url.HeMaiURL,data,function(data){
	     if(data.code == 0 ){
		    $(".ds-kr-list").html('<li style="height:3rem; line-height:3rem;text-align:center">没有再多的数据可显示了</li>');
			return ;
		 }
		 var list   = data.list;
		 list       = base64decode(list);
		 list       = JSON.parse(list);
		 this.page  = list.page  ; 
		 this.count = list.count ;
		 var html   = template('kr-list-model',list) ;
		 $('.ds-kr-list').html(html);
		 var CAN = document.getElementsByClassName("kr-cp-icon");
		 for(i=0;i< CAN.length; i++){
	       DrawPass(i);
		 }
	   },'json');
	}
}

$(function(){
 
}) 

template.helper('IsEnd',function(time,is_qb){
   var n = new Date();
   var now = Math.ceil(n.getTime() / 1000);
   var notice = {0:'进行中',1:'未中奖',3:'已中奖'} 
   var  str = notice[is_qb];
   if (time < now && is_qb == 0){
	    str = '已截止';
   }
   return str ;
});

template.helper('LotBaoDi',function(){

})

template.helper('NameShow',function(str){
	var b = str.substring(0,2)+'***';
	return b ; 
})


template.helper("DrawRound",function(jd,obj){ 
	  setTimeout(function(){
	     var dd = "cr-y"+obj;
		 var can = document.createElement("canvas");
		  can.width = 70 ;
		  can.height = 70 ;
		  var canvas = can.getContext("2d");
		  var circle = {
				x : 30,
				y : 30,
				r : 25 
		  };
		  canvas.beginPath();
		  canvas.lineWidth = 5 ;
		  canvas.strokeStyle = "#CCC";
		  canvas.arc(circle.x,circle.y,circle.r,0, 2*Math.PI ,false); 
		  canvas.stroke(); 
		  canvas.beginPath();
		  canvas.strokeStyle = "red" ; 
		  canvas.lineWidth = 5 ;
		  var hd = 2*Math.PI * jd / 100 ;
		  canvas.arc(circle.x,circle.y,circle.r,0, hd ,false);
		  canvas.stroke(); 
		  canvas.font="10px Arial";
		  canvas.fillStyle = "red";
		  canvas.fillText(jd+"%",10,35);
		  document.getElementById(dd).appendChild(can);	 
	  },500);
	 
})
