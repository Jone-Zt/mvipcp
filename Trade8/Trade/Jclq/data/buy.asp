<%@LANGUAGE="JAVASCRIPT" CODEPAGE="936"%>
<!--#include file="json.asp"-->
<!--#include file="JSCONN.asp"-->
<%
  Application.Lock();
  Response.Charset="GB2312";
  if(Session("un") == "" || Session("un") == undefined ){
     var msg = {"code":0,"msg":"请先登录后再游戏"};
	 Db.Echo(Db.Encode(msg));
  }
  var User = Db.getData("select UerMoney from Kr_User where username='"+Session("un")+"'");
  /*参与合买 开始*/
  var act = Db.P("act");
  if(act != '' && act == 'gd'){
      var id = Db.P("id") ;
	  var bs = Db.P("bs") ;
	  var db = Db.P("db") ;
	  var m = Db.getData("select * from Kr_basketball_buy where id="+id);
	  var total = m[0]["Num"]*2*bs*m[0]["gdbs"] ;
	  if( User[0]["UerMoney"] < total ){
	     var msg = {'code':0,"msg":"账户余额不足"};
		 Db.Echo(Db.Encode(msg));
	  }
	  var ingd ={
		     "buyid": id,
			 "username":Session("un"),
			 "mul"     :bs*m[0]["gdbs"],
			 "lt"      :2
		  };
	   Db.toDB("kr_gd",ingd);
	   var zijin = {
			"LotteryID"   : id,
			"UserName"    : Session("un"),
			"LotteryName" : "竞彩篮球"   ,
			"LotteryType" : "竞彩篮球"   ,
			"Hnumber"     : total,
			"Anumber"     : total         ,
			"Allmoney"    : total        ,
			"Mainpaymoney": total        ,
			"Issuccess"   : "进行中"     ,
			"back_money"  : total       ,
			"b_befor"     : User[0]["UerMoney"],
			"b_after"     : User[0]["UerMoney"]-total,
			"addtime"     : Db.FormatDate("Y-m-d H:i:s"),
			"back_state"  : "未处理"    ,
			"follows"     : "发起投注"     
	   }
	   Db.toDB("KR_Bank_Back",zijin);	  
	   var msg = {'code':1,"msg":"参与成功"};
	   Db.Echo(Db.Encode(msg));
  }  
/*参与合买 结束*/ 
  var data = Db.P("pt");
  data     = Db.Decode(data);
  total    = data["mul"] * data["num"] * 2 ;
  var maintable = {
      "UserName"  : Session("un"),
	  "Mul"       : data["mul"],
	  "Num"       : data["num"],
	  "betcontent": data["betcontent"].join("$"),
	  "deadtime"  : data["deadtime"],
	  "hm"        : data["ishm"],
	  "play"      : data["type"],
	  "Tc"        : data["tc"] ? (data["tc"] * 100) : 0 ,
	  "SP"        : data["sp"].join("$"),
	  "homeTeam"  : Db.Encode(data["team"]),
	  "bd"        : data["bd"],
	  "total"     : (total - data["rg"]),
	  "copysheet" : data["copysheet"],
	  "show"      : data["show"],
	  "gdbs"      : data["gdbs"]
 }; 
 if ( User[0]["UerMoney"] < total ){
     var msg = {"code":0,"msg":"账户余额不足请先充值后再游戏"};
	 Db.Echo(Db.Encode(msg));
 }
 var order =Db.P("order");
 order =  ("'"+order+"'").replace(/\|/g,"','");
 var time = Db.getData("select endbuytime from Kr_BaseketBall_list where orderid in("+order+") order by endbuytime Asc");

 var now  = new Date().getTime();
 var end  = new Date(time[0]['endbuytime']).getTime();
 if (now > end ){
     var msg = {"code":0,"msg":"投注已经截止"};
	 Db.Echo(Db.Encode(msg));
 }
 Db.toDB("kr_basketball_buy",maintable);
 
 var index = Db.getData("SELECT   @@IDENTITY as id");
 for( var i = 0 ; i < data["betcontent"].length ; i++ ){
	var dd  = data["sp"][i].split("|");
	var code= data["betcontent"][i].split("|"); 
    var obj = {
		  "UserName"   : Session("un"),
		  "mianId"     : index[0]["id"],
		  "orderid"    : dd[0],
		  "betcontent" : code[1], 
		  "betsp"      : dd[1],
		  "last"       : i == (data["betcontent"].length - 1 ) ? 1 : 0,
		  "isDan"      : data["dan"][i] 
		};
    Db.toDB("kr_basketball_detail",obj);
 }
 Db.doExecute("update kr_user set UerMoney=UerMoney  - "+total+",Money = Money - "+total+",IceMoney=IceMoney + "+data["bd"]+" where username='"+Session("un")+"'");
 //资金明细写入
 var zijin = {
    "LotteryID"   : index[0]["id"],
	"UserName"    : Session("un"),
	"LotteryName" : "竞彩篮球"   ,
	"LotteryType" : "竞彩篮球"   ,
	"Hnumber"     : total        ,
	"Anumber"     : total        ,
	"Allmoney"    : total        ,
	"Mainpaymoney": total        ,
	"Issuccess"   : "进行中"     ,
	"back_money"  : total       ,
	"b_befor"     : User[0]["UerMoney"],
	"b_after"     : User[0]["UerMoney"]-data["rg"],
	"addtime"     : Db.FormatDate("Y-m-d H:i:s"),
	"back_state"  : "未处理"    ,
	"follows"     : "发起投注"     
 }
 Db.toDB("KR_Bank_Back",zijin);
 if(  data["bd"] > 0 ){
    var bdmx = {
		"LotteryID"   : index[0]["id"],
		"UserName"    : Session("un"),
		"LotteryName" : "竞彩篮球"   ,
		"LotteryType" : "竞彩篮球"   ,
		"Hnumber"     : data["bd"]        ,
		"Anumber"     : total        ,
		"Allmoney"    : total        ,
		"Mainpaymoney": data["bd"]        ,
		"Issuccess"   : "保底冻结"     ,
		"back_money"  : data["bd"]       ,
		"b_befor"     : zijin["b_after"],
		"b_after"     : zijin["b_after"] - data["bd"],
		"addtime"     : Db.FormatDate("Y-m-d H:i:s"),
		"back_state"  : "未处理"    ,
		"follows"     : "保底冻结"     
	 }
	 Db.toDB("KR_Bank_Back",bdmx);
 }
 Application.UnLock();
 var msg = {"code":1,"msg":"投注成功"};
 Db.Echo(Db.Encode(msg));
%>