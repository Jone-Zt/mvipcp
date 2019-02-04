var Pk10 = (function(ds){
     function Pk10(){
	    this.Wid  = "1011" ;    
		this.name = "猜冠军";
		this.Expect= "000001";
		this.passtime = 300  ;
		this.JiShi     = 20   ;
		this.code = {'one':[],'two':[],'three':[],'four':[],'five':[],'six':[],'seven':[],'eight':[],'nine':[],'ten':[]};
		this.IsHm = 1 ;
	 }
	 var _pro_ = Pk10.prototype;
	 _pro_.ShowPlay = function (){
		ds(".Pk10").hide();
		ds(".ballRed2").find("i").removeClass("current");
	    var num  = this.Wid.substr(2,1);
		var type = this.Wid.substr(0,1);
		var numtype = this.Wid.substr(-1,1); 
		num = num == 0 ? 10 : num ;
		num = Number(num)+1 ;
		var start = 1 ;
		if( (type == 2 && numtype == 3) || (type == 3 && numtype == 1)){ num = 6 };
		if( (type == 2 && numtype == 4) || (type  == 3 && numtype == 2) ) {
			 num = 11; 
			 start = 5;
		}
		if(type == 3 && numtype == 3  ) {
			num = 2  ;
			type = 4 ;
		}
		var mubiao = {1:"table[biaozhi='tabele_{$}']",2:"table[biaozhi='tabele_{$}']",3:"table[biaozhi='dxtabele_{$}']",4:"table[biaozhi='dxtabele_gy']"};
		for(; start < num ; start++ ){
		   var obj = mubiao[type].replace('{$}',start);
		   if(obj.indexOf('dxtabele') >-1){
		     ds(obj).find("em").hide();
		   }
		   ds(obj).show();
		}
		ds("#NameWay").html("北京赛车-"+this.name);
	 }
	 _pro_.IntoBox = function(obj){
		var index = ds(obj).parent().parent().attr("seat");
		this.code[index].push(ds(obj).text());
		ds(obj).addClass("current");
	 }
	 _pro_.OutBox   = function(obj){
	    ds(obj).removeClass("current");
		var index = ds(obj).parent().parent().attr("seat");
		var text  = ds(obj).text();
		for(var j = 0; j < this.code[index].length ; j++ ){
		    if (text == this.code[index][j]){
			   this.code[index].splice(j,1);
			}
		}
	 }
	 _pro_.CheckRight = function(obj){
	    var text  = ds(obj).text();
		var self  = ds(obj).parent().parent().attr("seat"); 
		var num   = this.Wid.substr(2,1);
		var type  = this.Wid.substr(0,1);
		
		if ((num < 5 && type ==1 ) || type > 1  ) return ;
		for( var index in this.code ){
		  if ( index === self ) continue ; 
		  for(var t= 0 ; t < this.code[index].length ; t++ ){
		      if( this.code[index][t] == text ){
			     this.OutBox(obj);
				 break ;
			  }
		   }
		}
	 }
	 _pro_.ClearArray = function(){
		 for(index in this.code ){
			var len  =  this.code[index].length;
			this.code[index].splice(0,len);
		 }
		 ds('.ballRed2').find('i').removeClass('current');
		 ds('.tztishi').html('您已选择0注，总计：0元');
 
	 }
	 _pro_.MoneyNumber = function (){
	     var num = this.Count();
		 var temp = {"num":num ,"qian":num*2 }
		 ds('.tztishi').html('您已选择'+temp['num']+'注，总计：'+temp['qian']+'元');
	 }
	 /**计算注数 开始*/
	 _pro_.zuhe = function(a,b){
	   var ab = [];
	   for( var i = 0 ; i < a.length ; i++ ){
	      for( var j = 0 ; j < b.length ; j++ ){
		      if( b[j].indexOf(a[i])< 0 ){
			     var ba = [] ;
				 ba.push(a[i]);
				 ba.push(b[j]);
				 ab.push(ba.join(","));
			  }    
		  }
	   }
	   return ab;
	}
	_pro_.tihuan = function(obj){
		var th = {"01":"a","02":"b","03":"c","04":"d","05":"e","06":"f","07":"g","08":"h","09":"i","10":"j"};
		var temp = [];
		for( var i = 0 ; i < obj.length; i++ ){
	        temp.push( th[obj[i]]);
		}
		return temp ;
	}
	_pro_.Count = function(){
	   var index = {1:'one',2:'two',3:'three',4:'four',5:'five',6:'six',7:'seven',8:'eight',9:'nine',10:'ten'};
	   var way   =  this.Wid.substr(2,1);
	   way       =   way == 0 ?  10  : way ;
	   var type =    this.Wid.substr(0,1);
	   if( type == 1 ){
	       if(way == 1 ) return this.code[index[way]].length;
		   var a  =  this.tihuan(this.code['one']);
		   var b  =  this.tihuan(this.code['two']);
		   var abab = this.zuhe(a,b);
		   if(way == 2 ) {
			  return abab.length;
		   }
		   for(var jj = 3 ; jj <= way ; jj++ ){
			  var cc = this.code[index[jj]];
              cc     = this.tihuan(cc);			  
			  abab = this.zuhe(cc,abab);
		   } 
		   return abab.length;
	   }else{
		  var numcount = 0 ;
	      for( var index in this.code ){
		      numcount += this.code[index].length ;
		  }
		  return numcount ; 
	   }
	    
	}
	 /**计算注数 结束*/
	_pro_.showText = function(){
	    var  code    = window.localStorage.getItem("code");
		var  zhunum  =  0 ;
		if( null !== code ){
		   code   = JSON.parse(code);
		   for( var l = 0 ; l < code.length ; l++ ){
		       zhunum += parseInt(code[l]['num']);
		   }
		}
		ds(".notice-num").html(zhunum);
		var textnum = ds(".tztishi").html();
		var num = textnum.match(/\d+/g);
		var  text = "查看号码";
		if( num[0] > 0 ){
		   text = "加入购物篮";
		}
		ds("#btn-title").html(text);
	}
	_pro_.toBasket = function(){
	     var codeBox = window.localStorage.getItem("code");
		 if( null === codeBox ){
		     codeBox = [];
		 }else{
		    codeBox = JSON.parse(codeBox);
		 }
		 var han = {"1":"one","2":"two","3":"three","4":"four","5":"five","6":"six","7":"seven","8":"eight","9":"nine","10":"ten"};
		 var num = this.Wid.substr(2,1);
		 var type= this.Wid.substr(0,1);
		 var numtype = this.Wid.substr(-1,1);
		 num  =  num ==0 ? 10 : num ;
		 var s = 1 ;
		 if ((type ==2 && numtype == 3)||(type == 3 && numtype == 1)){
		     num = 5 ;
		 }else if((type == 2 && numtype == 4 ) || (type == 3 && numtype == 2 )){
	        num  = 10 ;
			s    = 5  ; 
		 }else if( type == 3 && numtype == 3 ){
		    num = 1 ;
		 }
		 var zhuqian =  ds(".tztishi").html().match(/\d+/g);
		 var temp = {'name':this.name,'code':'','num':zhuqian[0],"m":zhuqian[1],'pid':this.Wid};
		 var codes = [];
		 for( ; s <= num ; s++ ){
		    var index = han[s];
			codes.push(this.code[index].sort().join(","));
		 }
		 temp.code = codes.join("$");
		 codeBox.push(temp);
		 window.localStorage.setItem("code",JSON.stringify(codeBox));
		 this.ClearArray();
		 this.showText();
	}
	_pro_.lookSelectCode= function(){
	    var code = window.localStorage.getItem("code");
		var numText =  0 ;
		if( code == null ) {
		  ds(".mui-table-view").html("<li class='mui-table-view-cell'>暂无投注内容</li>");
		  return ;
		}
		code = JSON.parse(code);
		if(code.length < 1 ){
		     ds(".mui-table-view").html("<li class='mui-table-view-cell'>暂无投注内容</li>");
		     return ;
		}
		var str = "";
		ds.each(code,function(index,obj){
	        str += '<li class="mui-table-view-cell" key="'+index+'">&nbsp;&nbsp;['+obj.name+']&nbsp;&nbsp;'+obj.code+'<i class="_i_">x</i><em class="_zhu_">共'+obj.num+'注,'+obj.m+danwei+'</em></li>';
			numText += parseInt(obj.num);
		})
		ds(".mui-table-view").html(str);
		ds("span[name='total']").html(numText*2);
		ds("input[name='BuyCount']").val( numText*2/2 );
		ds("input[name='BdCount']").val( numText*2/2 );
		ds("#one-m").html("份，每份1"+danwei);
		ds(".Add_div").show();
	}
	_pro_.DeleteCode = function(obj){
	   var target = ds(obj).parent();
	   var index  = ds(target).attr("key");
	   ds(target).remove();
	   var code = window.localStorage.getItem("code");
	   code     = JSON.parse(code);
	   code.splice(index,1);
	   window.localStorage.setItem("code",JSON.stringify(code));
	   this.lookSelectCode();
	}
	_pro_.buildIndex = function (Min,Max){
      var Range = Max - Min;
      var Rand = Math.random();
      var num = Min + Math.round(Rand * Range);
      return num;
    }
    _pro_.RandCode = function(){
	    var type = this.Wid.substr(0,1);  // 1   2   3
		var num  = this.Wid.substr(2,1);
		 num     =  num == 0 ? 10 : num ;
		var way   = this.Wid.substr(-1,1);  
		var code  = [] ;
	    var source =  (type == 1 || type == 2)  ?  ['01','02','03','04','05','06','07','08','09','10']:['大','小','单','双'];
		for(var p=0 ; p < num ;p++ ){
		    var len   =  source.length -1;
			var index =  this.buildIndex(0,len);
			code.push(source[index]);
			if( type == 1 ){
			  source.splice(index,1);
			}
		}
		return code ;
	}
	_pro_.SuccessCleaer = function(){
	    window.localStorage.removeItem('code');
		ds("span.notice-num").html(0);
		ds("div.Add_div").hide();
		ds(".Pk10").find("i").removeClass("current");
	}
	_pro_.ajax     = function(postData){
	   var _this = this ;
	   $.ajax({
	       type      :  "POST",
		   dataType  :  "JSON",
		   data      :  postData,
		   url       :  "/Trade/Pk10/toBuy.asp?"+Math.random(),
		   success: function(data){
		      if( data.code == "10001" ){//未登录
			    window.location.href='/User/Login/';
			  }
			  if( data.code == "10002" ){ //账户余额不足
			    mui.alert(data.msg,'系统提示');
			  }
			  if( data.code == 10003 ){ //当期销售结束
			      mui.alert(data.msg,'系统提示');   
			  }
			  if( data.code == 10000 ){ //投注成功
			     mui.alert(data.msg,'系统提示');
				 _this.SuccessCleaer();
			  }
		   },
		   error:function(){
		      console.log("error");
		   }
	   })
	}
	_pro_.DiyBuild = function(){
      var me = this ;
	  var code = this.RandCode();
	  var showLine = ds('.Pk10').find("style='display: table'");
	  var type = this.Wid.substr(0,1);
	  var num  = this.Wid.substr(2,1);
	  num       = num ==0 ?  10 : num  ;
	  num   = Number( num ) + 1 ;
	  var numtype = this.Wid.substr(-1,1);
	  var start = 1 ;
		if( (type == 2 && numtype == 3) || (type == 3 && numtype == 1)){ num = 6 };
		if( (type == 2 && numtype == 4) || (type  == 3 && numtype == 2) ) {
			 num = 11; 
			 start = 5;
		}
		if(type == 3 && numtype == 3  ) {
			num = 2  ;
			type = 4 ;
		}
		var mubiao = {1:"table[biaozhi='tabele_{$}']",2:"table[biaozhi='tabele_{$}']",3:"table[biaozhi='dxtabele_{$}']",4:"table[biaozhi='dxtabele_gy']"};
		var Index  = {1:'one',2:'two',3:'three',4:'four',5:'five',6:'six',7:'seven',8:'eight',9:'nine',10:'ten'}; 
		var dsstart = 0 ;
		for(; start < num ; start++ ){
		   var obj = mubiao[type].replace('{$}',start);
		   var lineList = ds(obj).find("i");
		   ds.each(lineList,function(key,items){
		      var Text = ( type == 3 || type == 4 ) ? ds(items).html() : Number(ds(items).html());
			  if( Text == code[dsstart]){
			     ds(items).addClass('current');
				 me['code'][Index[start]].push(code[dsstart]);
			  }
		   })
		   dsstart += 1 ;
		}
	    this.MoneyNumber();
	    this.showText();
	}
	_pro_.toSubmit = function(){
	   var beishu  = ds('input[name="beishu"]').val();
	   var tosend  = {};
	   tosend['beishu']  = beishu ;
	   tosend['zhuihao'] = 0;
	   tosend['type']    = this.IsHm;
	   tosend['code']    = [] ;
	   tosend['ticheng'] = 0 ;
	   tosend['BdCount'] = 0 ;
	   tosend['buyCount'] = 1;
	   tosend['Total']    = 1 ;
	   tosend['isstop']   = 0 ;
	   tosend['zhuihao']  = 0 ;
	   tosend['expect']   = this.Expect; 
	   var code = window.localStorage.getItem('code');
	   code     = JSON.parse(code);
	   for( var r=0 ; r < code.length ; r++ ){
	       var cc = code[r]['code'].replace(/大/g,"A").replace(/小/g,"B").replace(/单/g,"C").replace(/双/g,"D");
		   var was = {'code':cc,'way':code[r]['pid']};
		    tosend['code'].push(was);
	   }
	   var excount = ds('input[name="expect"]').val();
	   if( excount > 1 ){
	      var trs = [];
		  var a   =  this.Expect ;
		  for( var ts = 0; ts < excount ; ts++ ){
		    a += 1 ;
			trs.push(a);
		  }
		  tosend['zhuihao'] = 1 ;
		  tosend['expect'] = trs ;
	   }
	   if( !this.IsHm ){
	       tosend['BuyCount'] = ds('input[name="BuyCount"]').val();
		   tosend['BdCount']  = ds('input[name="BdCount"]').val();
		   tosend['Total']    = ds('span[name="total"]').text();
		   tosend['ticheng']  = ds('input[name="ticheng"]').val();
	   }
	   var playname = code.length < 2 ? this.name : '混投';
	   var data     = JSON.stringify(tosend);
	   var postData = {"submit":data,"play":encodeURI(playname)};
	   this.ajax(postData);
	}
	_pro_.getTop10 = function(){
	   ds.post('/Trade/Pk10/Interface.asp',{action:'newopencode'},function(data){
		   var str = '';
		   for( var p = 0 ; p < data.length ; p++ ){
		      str += '<tr>';
			  str += '<td>第'+data[p]['lottery_num']+'期</td>';
			  str += '<td><i>'+data[p]['num_info1']+','+data[p]['num_info2']+','+data[p]['num_info3']+','+data[p]['num_info4']+','+data[p]['num_info5'];
			  str += ','+data[p]['num_info6']+','+data[p]['num_info7']+','+data[p]['num_info8']+','+data[p]['num_info9']+','+data[p]['num_info10']+'</i></td>'
			  str += '</tr>';
		   }
		   ds("#lskj").find("table > tbody").html(str);
		   ds("#dqian").html("&nbsp;&nbsp;&nbsp;&nbsp;第"+data[0]['lottery_num']+"期 "+data[0]['num_info1']+','+data[0]['num_info2']+','+data[0]['num_info3']+','+data[0]['num_info4']+','+data[0]['num_info5']+ ','+data[0]['num_info6']+','+data[0]['num_info7']+','+data[0]['num_info8']+','+data[0]['num_info9']+','+data[0]['num_info10']);
	   },'json')
	}
	return Pk10;
})($)


