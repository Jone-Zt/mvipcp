var Pk10  =  {
    Wid   : 0 ,
	Pid   : 0 ,
	lt_id : 0 ,
	Name  : '北京赛车',
	info  : '',
	code:{0:[],1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[],9:[]},
	LoadPlay : function(){
	   var me =this;
	   $("table").hide();
	   $("#NameWay").html(LTInit.lt_name+"-"+me.Name);
	   window.document.title=LTInit.lt_name+"投注";
	   $(".cp_paly_info").html(me.Info);
	   var num  =  me.Wid.substr(1,1);
	   var way  =  me.Wid.substr(-1,1);
	   num      =  way == 9  ?  10 : num ;
	   var list = $("#wqbsg").find('table');
	   for( i=0 ; i < num ; i++){
	      $(list[i]).show();
	   }
	},
	PlaySitch:function(obj){
      var me=this;
	  me.Wid=$(obj).attr("wid");
	  me.Pid=$(obj).attr("pid");
	  me.Info=$(obj).attr("info");
	  me.Name=$(obj).text();
	  me.LoadPlay();
	  me=null;
   },
   ClerArray:function(){
      var me =this ;
	 for(index in me['code']){
	    var len  =  me['code'][index].length;
		me['code'][index].splice(0,len);
	 }
	 $('.ballRed2').find('i').removeClass('current');
	 $('.tztishi').html('您已选择0注，总计：0元');
   },
   InToBox:function(obj){
    var me=this;
	var cole=$(obj).parent("ul").attr("seat");
	var txt=$(obj).find("i").text();
	me['code'][cole].push(txt);
	$(obj).find("i").addClass('current');
	me=null;
  },
  OutToBox:function(obj){
	  var me=this;
	  var cole=$(obj).parent("ul").attr("seat");
	  var txt=$(obj).find("i").text();
	  for(i=0;i<me['code'][cole].length;i++){
	     if(me['code'][cole][i]==txt){
		    me['code'][cole].splice(i,1);
			break;
		 }
	  }
	  $(obj).find("i").removeClass('current');
	  me=null;
  },
  CheckRight:function(obj){
	var  ds   = this;  
	var  code =  ds.code ;    
    var index = $(obj).parent().attr('seat'); 
	var text  = $(obj).find('i').text();
	var num   = ds.Wid.substr(1,1);
	if (num < 5 ) return ;
	for( a in  code){
	   if(index != a){
		 var mubiao = "ul[seat='"+a+"']";   
	     for( i=0 ; i < 10 ; i++ ){
	       if(code[a][i]== text){
			  var  li = $(mubiao).find("li");
			  $.each(li,function(a,b){
			     if($(b).find('i').text()== text){
				     ds.OutToBox(b); 
				 }
			  })
		   }
	     }
	   }
	} 
  },
  NumberMoney:function(){
	   var temp={count:0,money:0};
	   var me=this;
	   var num = me['Wid'].substr(1,1);
	   var way = me['Wid'].substr(-1,1); 
	   num     =  way == 9  ?  10 : num;
	   var cc=[];
	   for(z=0;z<num;z++){
		 if(me.code[z].length<0){
			 return temp;
		 }   
		 cc.push(me.code[z]);
	   }
	   temp.count=me.main(cc);
	   temp.money=2*temp.count;
	   $(".tztishi").html('您已选择'+temp.count+'注，总计：'+temp.money+'元');
    },
  /*计算注数 开始*/
  two:function(a,b){
	     var aa = Pk10.zhuan(a);
		 var bb = Pk10.zhuan(b);
		 var temp=[];
	     for(var i=0;i< aa.length;i++){
		   for(var j=0;j< bb.length;j++){
			 var aaa = aa[i];
			 var bbb  = bb[j];
			 if(bbb.indexOf(aaa) < 0 ){
			  var te=[];
			  te.push(aa[i]);
			  te.push(bb[j]);
			  temp.push(te.join(""));
			 }
		   }
	     }
	    return temp;
	},
	zhuan:function(str){
	  var can = {"01":"a","02":"b","03":"c","04":"d","05":"e","06":"f","07":"g","08":"h","09":"i","10":"j"};
	  var bbs = str;
	  if( str.join("").replace(/\d+/,'')== "" ){
	     bbs = [] ;
		 for(var o = 0 ; o < str.length ; o++ ){
		    bbs.push(can[str[o]]);
		 }
	  }
	  return bbs;	
    },
	main:function(count){
      var index = count.length ;
	   var sz=[]; 
	   if( index == 1 ){
	     return count[0].length ;
	   }
	   sz=Pk10.two(count[0],count[1]);
	   console.log(sz);
	   if(index < 3){
	     return sz.length ;
	   }
	   for(var t=2 ; t < count.length ; t++ ){
	     sz = Pk10.two(count[t],sz);
	   }
	   return sz.length;
	},
	
  /*计算注数 结束*/
  LoadCode:function(){
     var code = window.localStorage.getItem('code');
	 var num  = 0;
	 var title =  '添加号码' ;
	 if( code!= null ){
	   code  = JSON.parse(code);
	   $.each(code,function(a,b){
	     num += Number(b.zhu) ;
	   })
	   title = '查看号码' ; 
	 }
	 $(".btn-grey2").val(title);
	 $('#btn-title').html(title);
	 $('.notice-num').html(num);
  },
  FormatCode:function(){
     var me  =  this ;
	 var num =  me['Wid'].substr(1,1);
	 var way =  me['Wid'].substr(-1,1);
	 num     =  way == 9  ?  10 : num ;
	 var cc  =  [] ;
	 var code  =  {} ;
	 var txt   =  $(".tztishi").html();
	 txt       =  txt.match(/\d+/g) ;
	 for( i=0 ; i < num ; i++ ){
	    cc.push(me['code'][i].sort().join(",")); 
	 }
	 code.code   =  cc.join("|");
	 code.zhu    =  txt[0]  ;
	 code.qian   =  txt[1]  ;
	 code.way    =  me.Wid  ;
	 code.play   =  me.Pid  ;
	 var  name   =  $("#NameWay").html();
	 name        =  name.split('-');
	 code.name   =  name[1]  ;
	 code.ltId   =  me.lt_id ;
	 return  code ; 
  },
  toBasket:function(){
     var  code = window.localStorage.getItem('code');
	 var  cc   =  this.FormatCode();
	 var num   =  0  ;
	 if ( code == null ){
	     window.localStorage.setItem('code','['+JSON.stringify(cc)+']');
		  num  =  cc.zhu ;
	 } else {
	   code  =  JSON.parse(code);
	   code.push(cc);
	   window.localStorage.setItem('code',JSON.stringify(code));
	   $.each(code,function(a,b){
	      num  +=  Number(b.zhu);
	   })
	 }
	 return num ; 
  },
  autoCode:function(){
     var  me   =   this  ;
	 me.ClerArray(); 
	 var  num  =   me['Wid'].substr(1,1);
	 var  way  =   me['Wid'].substr(-1,1);
	 num       =   way == 9 ? 10 : num ;
	 var  list =   $(".ballRed2"); 
	 var  code =   Random.RandNumber(1,10,num,'pks');
	 for(i=0; i < num ; i++ ){
	     me['code'][i].push(code[i]);
		 var lists = $(list[i]).find("i");
		 $.each(lists,function(a,b){
		    var tt = $(b).text();
			if ( tt == code[i] ){
			    $(b).addClass('current');
			}
		 })
	 }
	 me.NumberMoney();
	 $(".btn-grey2").val('添加号码');
	 $("#btn-title").html('添加号码'); 
  },
  handCode:function(){
     var  me     =   this  ;
	 var  num    =   me['Wid'].substr(1,1);
	 var  way    =   me['Wid'].substr(-1,1);
	 num         =   way == 9  ?  10  : num ;
	 var  cc     =   Random.RandNumber(1,10,num,'pks');
	 var  code   =   {} ;
	 code.ltId   =   me.lt_id ;
	 code.way    =   me.Wid   ;
	 code.play   =   me.Pid   ;
	 code.zhu    =   1        ;
	 code.qian   =   2        ;
	 code.code   =   cc.join("|");
	 code.name   =   me.Name     ;
	 return  code ;  
  }
  
}