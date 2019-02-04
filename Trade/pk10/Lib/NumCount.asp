<%
 //计算pk10投注金额  
 /*
   @code     投注号码
   @beishu   投注倍数
   @expect   投注期数
   @Total    分成分数
   @buyCount 认购份数
   @bdCount  保底分数 
 */
 function BuyInfo(code,beishu,expect,Total,buyCount,bdCont){
    var num   = 0 ;
	var money = 0 ;
	var dbcode = "";
	var dbexpect = "";
	for( key in code ){
	   var playid = "2053,2054,3051,3052,3053";
	   if( playid.indexOf(code[key]["way"]) >=0 ){
	      num += DingDaxiao(code[key]["code"]);
	   }else{
         num += Main(code[key]["code"]); 
	   }
	   var geduan = key > 0 ? "|" : "" ;
	   dbcode += geduan+"["+code[key]["way"]+"]"+code[key]["code"].replace(/A/g,"大").replace(/B/g,"小").replace(/C/g,"单").replace(/D/g,"双") ;
	}
	var bs = [];
	var ex = [];
	if(typeof(beishu)=="string"){
       bs.push(Number(beishu));
	   ex.push(expect);
	}else{
      bs = beishu ;
	  ex = expect ;
	}
	for( t=0 ; t< bs.length ;t++ ){
       money += num * 2 * Number(bs[t]);
	}
	var temp = {
	   "one"    : money / Total ,  //单份金额
	   "Amout"  : money,           //订单总金额
	   "mainpay": (Number(buyCount)+Number(bdCont))* (money / Total), //应支付金额
	   "buy_pay": buyCount *(money / Total),  //购买金额
	   "bd_pay" : bdCont * (money / Total), //保底金额
	   "code"   : dbcode ,                  //写入数据库号码格式
	   "expect" :ex.join(","),              //写入数据库期号格式
	   "beishu" : bs.join(","),              //写入数据库倍数格式
	   "oneone" : num * 2 
	}
	return temp ;
 }
 function echo (str){
   Response.Write(str);
   Response.End();
 }
 
 function TiHuan(code){
    var cc = code.split(",");
	var can = {"01":"A","02":"B","10":"Z","03":"C","04":"D","05":"E","06":"F","07":"G","08":"H","09":"I"}
	var newcode = [] ;
	for( i=0 ;i< cc.length; i++ ){
       if(cc[i].length >2 || cc[i].length < 2 ) echo("code style is error");
	   newcode.push(can[cc[i]]);
	}
	return newcode;
 }
 function ZuHe(a,b){
    var db = [];
    for( t=0 ;t < a.length; t++ ){
        for(g=0 ; g < b.length; g++ ){
		  if( b[g].indexOf(a[t])< 0 ){
		     var str = a[t]+b[g];
			 db.push(str);
		  }
		}
	}
	return db;
 }
 function Main(code){
    var list = code.split("$");
	if(list.length == 1 ){
       var num = TiHuan(list[0]);
	   return num.length;
	}
	var num = [];
    var a = TiHuan(list[0]);
	var b = TiHuan(list[1]);
	num  = ZuHe(a,b);
	if(list.length > 2 ){
	 for(sindex = 2 ; sindex < list.length ; sindex++ ){
        var codenew = TiHuan(list[sindex]);
		num = ZuHe(codenew,num);
	 }
	}
	return num.length ;
 }
 
 function  Random(){
    var  aa = parseInt(Math.random() * 1000000);
	return aa;
 }
 function DingDaxiao(code){
    var cc = code.split("$");
	var cnum = 0 ;
	for( var ts = 0 ; ts < cc.length ; ts++ ){
	   if (cc[ts] !=''){
	     var abd = cc[ts].split(",")
	     cnum += abd.length ;
	   }
	}
	return cnum ; 
 }
%>