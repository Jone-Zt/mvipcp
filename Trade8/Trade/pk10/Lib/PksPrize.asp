<%
 var PksPrize = {
	/*
	 @opencode  开奖号码
	 @touzhucode 投注号码 格式  [1001]02,05,03  
	 @return     命中号码个数 命中号码  未命中位上的号码
	*/
	HitNum:function(opencode,touzhucode){
	   var way  = touzhucode.match(/\[\d+\]/)[0].replace(/\]/,"").replace(/\[/,"");
	   var code = touzhucode.replace(/\[\d+\]/g,"");
	   code     = code.split("$");
	   var hitcode = [];//存储命中号码
	   var nothit  = [];//存储未命中号码
	   var num  = 0 ;  //命中号码个数
	   var data = {"num":num,"nothit":[],"hit":[],"way": way };
	   for( var key in code ){
	       if(code[key].indexOf(opencode[key]) > -1 ){
		     num += 1 ;
			 hitcode.push(opencode[key]);//存储命中号码
		   }else{
		     nothit.push(code[key]);
		   }
	   }
	   data["hit"] = hitcode; 
	   data["nothit"] = nothit;
	   data["num"]    = num ;
 	   return  data ;
	},
	/*
	 @result  数组 key(hit)  投注号码命中的号码    key(nothit) 没有中奖的位数的号码   key(num) 命中号码个数
	 @return  返回一条投注记录的中奖金额
	*/
	win:function(result){
	   var PrizeWin = {"qian":0,"points":0};
	   var key = result["num"];
	   var way = result["way"];
	   var money ="undefined" ;
	   try{
	    money = Bouns[way][key].split("#")
	   }catch(e){}
	   if( money === "undefined" ){
	       return PrizeWin ; //未中奖
	   }
	   /*以下是计算中奖注数*/
	   var nothit = result["nothit"].length ; /*没有中奖号码数组长度*/
	   var hit    = result["hit"].length    ; /*命中号码个数*/
	   if( hit == 1 && way === "1011" ){
	      PrizeWin["qian"]   = money[0] ;
		  PrizeWin["points"] = PrizeWin["qian"] * money[1] ;
	      return PrizeWin ;
	   }
	   if(hit < 1 || nothit < 1 ){
	      return PrizeWin ;
	   }
	   var winNum = 0 ;
	   var nothitcode = this.removesame(result["hit"],result["nothit"]);
	   if( nothit == 1 ){
	      winNum = nothitcode[0].split(",").length ;
		  PrizeWin["qian"]   = money[0]*winNum ;
		  PrizeWin["points"] = PrizeWin["qian"] * money[1] ; 
		  return PrizeWin ;
	   }
	   var psp   = this.ZuHe(nothitcode[0],nothitcode[1]);
	   for(var p = 2 ; p < nothit ; p++ ){
	      psp    = this.ZuHe(nothitcode[p],psp);
	   }
	   PrizeWin["qian"]   =  money[0] * psp.length ;
	   PrizeWin["points"] =  PrizeWin["qian"] * money[1] ;
	   return PrizeWin;
	},
	/*
	 //@  替换字符串需要替换的字符
	 //@a 要查找的数
	 //@b 查找的对象
	*/
	removesame:function(a,b){
	  var bb = b.join("#");
	   for( var key in a ){
	     while(bb.indexOf(a[key]) > -1 ){
	       bb = bb.replace(a[key],"_"); 
		 } 
	   }
	   return bb.replace(/\_\,|\_/g).split("#");  
	},
	ZuHe:function(d,e){
	   var dd = typeof(d) === "string" ? d.split(",") : d ;
	   var ee = typeof(e) === "string" ? e.split(",") : e ;
	   var aa = [];
	   for( var i = 0 ; i < dd.length ; i++ ){
	      for(var j = 0 ; j < ee.length ; j++ ){
		     if(ee[j].indexOf(dd[i]) < 0 ){
			     var tc = dd[i]+"*"+ ee[j] ;
				 aa.push(tc);
			 }
		  }
	   }
	   return aa ;
    },
	DaxiaoDshuang:function(code,open){
	   var way = code.match(/\[\d+\]/)[0];
	   var newcode = code.replace(/\[\d+\]/,"");
	   var num     = PksPrize.HitNumber(newcode,open); 
	   var qian        ={"qian":0,"points":0};
       if( num > 0  ){
	      var keys = way.match(/\d+/)[0];
	      var jj = Bouns[keys][1].split("#");
		  qian["qian"] = jj[0] * num ;
		  qian["points"] = jj[1];
	   }
       return qian ;	   
	},
	HitNumber:function(code,opens){
	   var num = 0 ;
	   var cs  = code.split("$");
	   var len = cs.length ;
	   for( var ds = 0 ; ds < len ; ds++ ){
	      if  (!cs[ds]) continue ;
		  var cds = cs[ds].split(",");
		  cdslen  = cds.length ;
		  for(var dg = 0 ; dg < cdslen ; dg++ ){
		    if( opens[ds].indexOf(cds[dg]) >=0 ){
			   num += 1 ;
			} 
		  }
	   }
	   return num ;
	},
	openXT:function(way,open){
	    var ocode = way == "[3051]" ? [open[0],open[1],open[2],open[3],open[4]]: (way =="[3052]") ? [open[5],open[6],open[7],open[8],open[9]]: [(open[0]+open[1])] ;
		var len   = ocode.length ;
		var newopen = [];
		for( var tb = 0 ; tb < len ; tb++ ){
		    if( len > 1 ){
			   var bs = ocode[tb] < 6 ? "小" : "大";
			   bs     = ocode[tb] % 2 == 0 ? bs+",双" : bs+",单";  
			}else{
			   var bs = ocode[tb] > 2 && ocode[tb] < 12 ? "小" : ocode[tb] > 11 && ocode[tb] < 20 ? "大" : "东" ;
			   bs     = ocode[tb] % 2 == 0 ? bs+",双" : bs+",单"; 
			}
			newopen.push(bs);
		}
		return newopen;
	},
	/*
	 @code   投注号码 
	 @beishu 投注倍数
	 @Total  总份数
	 @opens  开奖号码
	 @return  中奖金额 和 单份金额
	*/
	Main:function(code,beishu,Total,opens){
	 Response.write(opens);
	   var cc = code.split("|") ;
	   var mm = 0 ;
	   var jifen = 0 ;
	   for( var r  = 0 ; r < cc.length ; r++ ){
	       var way = cc[r].match(/\[\d+\]/)[0];
	      if ("[2053],[2054],[3051],[3052],[3053]".indexOf(way)>=0){
		     if ("[3051],[3052],[3053]".indexOf(way)>=0){
			     opens = PksPrize.openXT(way,opens);
			 }
			 Response.write(opens);
			 var qian = PksPrize.DaxiaoDshuang(cc[r],opens);
		  }else{
		    var dds  =  PksPrize.HitNum(opens,cc[r]);
		    var qian =  PksPrize.win(dds);
		  }
		   mm      +=  qian["qian"];  
		   jifen   +=  qian["points"];
	   }
	   mm = mm * beishu ;
	   jifen   =  jifen * beishu ;
	   var temp = {
	       "win"    : mm ,
		   "points" :jifen,
		   "text"   : mm > 0 ? "已中奖" : "未中奖"
	   }
	   //Db.Echo(JSON.stringify(temp));
	   return temp ;
	}
 }
%>