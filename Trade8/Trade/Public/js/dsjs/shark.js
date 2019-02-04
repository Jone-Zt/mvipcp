
var SHAKE_THRESHOLD =1000;  
var last_update = 0;  
var x = y = z = last_x = last_y = last_z = 0;  
function init() {  
	try{if (window.DeviceMotionEvent) {  
		window.addEventListener('devicemotion', deviceMotionHandler, false);  
	}}catch(e){}
}  
function deviceMotionHandler(eventData) {  
	var acceleration = eventData.accelerationIncludingGravity;  
	var curTime = new Date().getTime();  
	if ((curTime - last_update) > 100) {  
		var diffTime = curTime - last_update;  
		last_update = curTime;  
		x = acceleration.x;  
		y = acceleration.y;  
		z = acceleration.z;  
		var dist = Math.sqrt((x-last_x)*(x-last_x)+(y-last_y)*(y-last_y)+(z-last_y)*(z-last_y))
        var speed = dist/diffTime*10000;
		if (speed > SHAKE_THRESHOLD) {  
			YaoYao();  
		} 
		//alert(speed);
		last_x = x;  
        last_y = y;  
        last_z = z;  
	}  
}  

var Random={
    RandNumber:function(start,end,num,type){
      var list=[];
	  var data=[];
	  var str="syxw,ssq,dlt,pks,qlc";
	  for(start;start<=end;start++){
	     list.push(start);
	  }
	  var rand=list.length;
	  for(i=0;i<num;i++){
		 var index=Math.floor(Math.random()*rand);
		 data.push(list[index]);
		 list.splice(index,1);
		 rand=list.length;
	  }
	  if(str.indexOf(type)>=0){
	     for(i=0;i<data.length;i++){
		    data[i]=data[i]<10 ? "0"+data[i]: data[i];
		 }
	  }
	  return data;
   }
}