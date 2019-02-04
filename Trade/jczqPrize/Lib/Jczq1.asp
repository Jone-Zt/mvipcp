<%
  var JczqPrize = {
      //购买格式  胜~让胜~半全场~比分~总进球      
      //0~3.20|-1~1.56|0:0~4.50|0:0~9.00|0~9.00	 
      PrizeOneOrder:function(myCode,openCode,SP){
	     var result = []; 
	     var my   = myCode.split("~");
		 var mySP = SP.split("~");
		 var open = openCode.split("|");
		 for( var index in my ){
		    var resultsp = open[index].split("~");
			var sp       = resultsp[1];//赔率
			var cg       = resultsp[0];//开奖结果
			cg           = cg.replace(/\-1/g,"a");
			if(my[index]!=""){
			 var mytouzhu = my[index].replace(/\-1/g,"a");
             if( mytouzhu.indexOf(cg)>=0 ){
			    var okok = mySP[index].split(',');
				//var newindex  = mytouzhu.indexOf(cg);
				var  mytou = mytouzhu.split(",");
				var  newindex  =JczqPrize.IndexOf(cg,mytou);
				result.push(okok[newindex]);
			 }			 
			}
		 }
		var a = result.join("~") == "" ? "0" : result.join("~");
		return a ;
	  },
	  GET:function(can){
	     var  a = Request.QueryString(can);
		 a    = a == undefined ? 0 : a ;
		 return a ;
	  },
	  twoGroup:function(a,b){		
	    var money = [] ;
		for( var o=0 ; o < a.length ; o++ ){
		  for( var r=0 ; r < b.length ; r++ ){
		    var abd = a[o]* b[r];
			money.push(abd);
		  }
		}
        return money ;		
	  },
	  oneGroupMoney:function( arr ){
	     var mm =  0 ;
		 var length = arr.length ;
		 mm = JczqPrize.twoGroup(arr[0],arr[1]);
		 for( var t=2 ; t < length ; t++ ){
		    mm = JczqPrize.twoGroup( mm , arr[t]);
		 }
		 
		 return eval(mm.join('+'));
	  },
	  ReForm:function( arr , valueArr ){
	    var num =[];
		for( var kk in arr ){
		   var keyindex = arr[kk];
		   var bb = valueArr[keyindex].split("~");
		   num.push(bb);
		}
		//var a = eval(num.join('*'));
		var money = JczqPrize.oneGroupMoney(num);
		//return a * 2 ;
		return money * 2 ;
	  },
	  CasePrize:function(onecase){
	    var way = JczqPrize.getBetWay(onecase[0]["play"]); //投注玩法 2x1 3x1 4x1
		var bs  = onecase[0]['beishu'];
		if ( way.length == 1 && way[0] == 1 ){ //单关
		  var ads = onecase[0]["reuslet"].split("~");
		  var ss  = 0 ;
		  for(var ab in ads){
		     ss =ss+Number(ads[ab]);
		  }
		  return ss * bs * 2 ;
		}
		var KeyArr   = [];
		var valueArr = [];
		for( var t=0 ; t < onecase.length ; t++ ){
		  KeyArr.push(t);
		  valueArr.push(onecase[t]["reuslet"]);
		}
		var allzh = JczqPrize.getAllGroup(KeyArr,way); //可能所有组合
		var qian = 0 ;
		for( var ps = 0 ; ps < allzh.length ; ps++ ){
		   qian += JczqPrize.ReForm(allzh[ps],valueArr);
		}
		return qian * bs ;
	  },
	  getBetWay:function(play){
	     var way = [] ;
		 var p = play.split(",");
		 for( var index in p ){
		    way.push(p[index].substr(0,1));
		 }
		 return way ;
	  },
	  getAllGroup:function( KeyArr,way){
	    var allgroup = [];
        for( var k in way ){
	       var zh =  group(KeyArr,way[k]);
		   allgroup = allgroup.concat(zh);
	    }
        return allgroup;		
	  },
	  IndexOf:function(key,arr){
	    var index = null ;
		for( var pp in arr ){
		   if (key == arr[pp]){
		      index = pp ;
			  break;
		   }
		}
		return index;
	  }
  }
%>