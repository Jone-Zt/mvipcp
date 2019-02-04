<%
 var PksPrize = {
	/*
	 @opencode  ��������
	 @touzhucode Ͷע���� ��ʽ  [1001]02,05,03  
	 @return     ���к������ ���к���  δ����λ�ϵĺ���
	*/
	HitNum:function(opencode,touzhucode){
	   var way  = touzhucode.match(/\[\d+\]/)[0].replace(/\]/,"").replace(/\[/,"");
	   var code = touzhucode.replace(/\[\d+\]/g,"");
	   code     = code.split("$");
	   var hitcode = [];//�洢���к���
	   var nothit  = [];//�洢δ���к���
	   var num  = 0 ;  //���к������
	   var data = {"num":num,"nothit":[],"hit":[],"way": way };
	   for( var key in code ){
	       if(code[key].indexOf(opencode[key]) > -1 ){
		     num += 1 ;
			 hitcode.push(opencode[key]);//�洢���к���
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
	 @result  ���� key(hit)  Ͷע�������еĺ���    key(nothit) û���н���λ���ĺ���   key(num) ���к������
	 @return  ����һ��Ͷע��¼���н����
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
	       return PrizeWin ; //δ�н�
	   }
	   /*�����Ǽ����н�ע��*/
	   var nothit = result["nothit"].length ; /*û���н��������鳤��*/
	   var hit    = result["hit"].length    ; /*���к������*/
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
	 //@  �滻�ַ�����Ҫ�滻���ַ�
	 //@a Ҫ���ҵ���
	 //@b ���ҵĶ���
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
			   var bs = ocode[tb] < 6 ? "С" : "��";
			   bs     = ocode[tb] % 2 == 0 ? bs+",˫" : bs+",��";  
			}else{
			   var bs = ocode[tb] > 2 && ocode[tb] < 12 ? "С" : ocode[tb] > 11 && ocode[tb] < 20 ? "��" : "��" ;
			   bs     = ocode[tb] % 2 == 0 ? bs+",˫" : bs+",��"; 
			}
			newopen.push(bs);
		}
		return newopen;
	},
	/*
	 @code   Ͷע���� 
	 @beishu Ͷע����
	 @Total  �ܷ���
	 @opens  ��������
	 @return  �н���� �� ���ݽ��
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
		   "text"   : mm > 0 ? "���н�" : "δ�н�"
	   }
	   //Db.Echo(JSON.stringify(temp));
	   return temp ;
	}
 }
%>