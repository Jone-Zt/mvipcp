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
	  "Tc"        : data["tc"] == null ? (data["tc"] * 100) : 0 ,
	  "SP"        : data["sp"].join("$"),
	  "homeTeam"  : Db.Encode(data["team"]),
	  "bd"        : data["bd"],
	  "total"     : data["ishm"] == 1 ?  (total - data["rg"]) : 0 
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
	"Hnumber"     : data["rg"]        ,
	"Anumber"     : total        ,
	"Allmoney"    : total        ,
	"Mainpaymoney": data["rg"]        ,
	"Issuccess"   : "进行中"     ,
	"back_money"  : data["rg"]       ,
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