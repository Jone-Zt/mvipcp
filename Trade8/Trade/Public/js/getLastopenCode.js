var  getLastOpen = {
     ltid:0  ,
	 pass:30 ,
	 url: '',
	 isget: false,
	 getNowExpect : function(){
	     var nowEx = $("#showid").html();
		 nowEx  =  nowEx.split("-");
		 nowEx  =  (Number(nowEx[1]) - 1) < 1 ?  1  : (Number(nowEx[1]) - 1) ;
		 // console.log(nowEx);
		 nowEx  =  ('0' + nowEx).substr(-2,2);  
		 var  exepct = new Date().Format(null,'ymd')+'-'+nowEx ;
		 var b  = $("#fq1").html();
		 return (expect != b) ; 
	 } ,
	 TimePassToGet:function(){ 
		getLastOpen.pass -= 1 ;
		// console.log(getLastOpen.pass);
		if(getLastOpen.pass == 0){
	       getLastOpen.isget = getLastOpen.getNowExpect() ;
		   if(!getLastOpen.isget){
		       clearTimeout(restart);
		   }else{
		      getLastOpen.pass = 30 ;
			  if(getLastOpen.isget){
		       $.post(getLastOpen.url,{ltid:getLastOpen.ltid},function(data){
		         getLastOpen.showText(data); 
			   },'json');
		     }
		   }
		}
		var restart = setTimeout(function(){
		    getLastOpen.TimePassToGet();
		},1000);
	 },
	 showText:function(data,expect){
		 var str = '<p><em id="fq1">'+expect+'</em>期开奖:<em id="fq3">'+data.code.join(" ")+'</em></p>';
		 str    += '<span class="bet-btn-active" id="myluck">';
		 for(index in data.code){
		    str += '<span class="k3-num-m k3-num-m-'+data.code[index]+'">';	
		 }  
		 str += "</span>";
		 $(".kj-num-cont").html(str);
	 }
}

Date.prototype.Format =  function(strs,formatstr){  
      var D = (strs == null )?  new Date() : new Date(strs * 1000);
	  var temp = {
		      'Y': D.getFullYear(),
			  'y': D.getYear(),
			  'm': ('00'+(D.getMonth()+1 )).substr(-2,2) ,
			  'd': ('00'+D.getDate()).substr(-2,2)   ,
			  'H': ('00'+D.getHours()).substr(-2,2)  ,
			  'i': ('00'+D.getMinutes()).substr(-2,2) ,
			  's': ('00'+D.getSeconds()).substr(-2,2)
	      }
	  var  text =  formatstr ; 	  
	  for( index in temp ){
	      if(formatstr.indexOf(index)>=0){
		     text =  text.replace(index,temp[index]);
		  } 
	  }
	  return text ;
  }
  