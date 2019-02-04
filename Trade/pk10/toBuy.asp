<%@LANGUAGE="JAVASCRIPT" CODEPAGE="936"%>
<!--#include file="Lib/JSCONN.asp"-->
<!--#include file="Lib/json.asp"-->
<!--#include file="Lib/NumCount.asp"-->
<!--#include file="Lib/PksIssue.asp"-->
<%
   Application.Lock();
   Response.Charset = "gb2312";
   var data = Request.Form("submit");
   var playname = Request.Form("play");
   data     = JSON.parse(data);
   if(Session("un") == undefined){ //未登录
     var code = {"code":10001,"msg":"请先登录后在游戏"};
	 echo(JSON.stringify(code));
   }
   var  now     =  pks.nowSale(); //pk10 当前销售期数
   var code     = data['code'];
   var beishu   =data["zhuihao"] == 1 ? data['beishu'] :[data['beishu']];
   var expect   = data["zhuihao"] == 1? data['expect'] :[data['expect']] ;
   var Total    = data['Total'];
   var buyCount = data['buyCount'];
   var bdCount  = data['BdCount'] ;
   for( index in expect ){
      if( expect[index] <  now ){
	      var code = {"code":10003 ,"msg":"当期销售已结束"};
		  echo(JSON.stringify(code));
	  }
   }
   var info  = BuyInfo(code,beishu,expect,Total,buyCount,bdCount);
   var sql  = "select UerMoney,daili from kr_user where username='"+Session("un")+"'";
   var user = Db.getData(sql)[0];
   if(user['UerMoney'] < info['mainpay']){ //账户余额不足
      var code = {"code":10002,"msg":"账户余额不足，请先补充账户金额"} ;
	  echo(JSON.stringify(code));
   }
   /*写入投注表*/
   var orderId = FormatDate("YmdHis")+"PKS";
   var goubuy  = buyCount + bdCount ;
   var cpstate = (goubuy == Total) ? "已生效" : "未生效";
   var jindun  = (buyCount / Total) * 100 ; 
   var buydata = {
         "expect"      : info['expect'],
         "protype"     : "北京赛车" + decodeURI(playname),
		 "lotterytype" : "北京赛车",
		 "lotteryid"   : orderId ,
		 "mainpaymoney": info["buy_pay"],
		 "allmoney"    : info["Amout"],
		 "anumber"     : Total ,
		 "onemoney"    : info["one"],
		 "username"    : Session("un"),
		 "hnumber"     : buyCount     ,
		 "schedule"    : jindun       ,
		 "prostate"    : cpstate      ,
		 "codes"       : info["code"] ,
		 "isbaodi"     : bdCount > 0 ? 1 : 0 ,
		 "baodinum"    : bdCount ,
		 "iszhuihao"   : data["zhuihao"],
		 "beishu"      : info['beishu'],
		 "mystate"     : cpstate == "已生效" ? 1 : 0 ,
		 "ishm"        : Total > 1 ? 1 : 0 ,
		 "istop"       : data["isstop"],
		 "zhnum"       : expect.length ,
		 "tcSelect"    : data["ticheng"],
		 "isjz"        :  pks.EndTime()//结束时间 
   };
   var ids =  Db.toDB("Kr_Buy",buydata);
   orderId = orderId + ids ;
   Db.doExecute("update Kr_Buy set lotteryid='"+orderId+"',zhnum="+ids+" where id = "+ids );
   /*如果追号（data["zhuihao"]=1 ） 写入追号表  开始*/
   /**/
     var  zhuihaotable = {
	       "LotteryID" : orderId ,
		   "Expect"    : "",
		   "Money"     : info["oneone"],
		   "Status"    : "等待生效", 
		   "UserName"  : Session("un"),
		   "GGType"    : 'no'         ,
		   "Way"       : 'pk10'         
	 }
	 for( i=0 ; i < expect.length ; i++ ){
	   zhuihaotable["Expect"] = expect[i];
	   zhuihaotable["Money"]  = info["oneone"] * beishu[i]; 
	   if(data['type'] == 1 && i < 1 ){
	      zhuihaotable["Status"] = "生效成功";
	   }
	   Db.toDB("KR_ZhuiHao",zhuihaotable); 
	 }
   /*写入 结束*/
   /*写入紫荆明细 开始*/
     /*RebateId   0: "资金明细数据集"  ,1: "参与合买数据集 发起合买数据"*/
	 var after = user['UerMoney'] - info["buy_pay"];
	 var ZjMx = {
	     "LotteryID"   : orderId,
		 "RebateID"    : 1      ,
		 "UserName"    : Session("un") ,
		 "LotteryName" : "北京赛车"    ,
		 "LotteryType" : "北京赛车" + decodeURI(playname),
		 "Expect"      : info["expect"],
		 "Hnumber"     : buyCount      ,
		 "Anumber"     : Total         ,
		 "Allmoney"    : info["Amout"] ,
		 "Mainpaymoney": info["buy_pay"],
		 "Issuccess"   : "进行中"       ,
		 "back_money"  : info["buy_pay"],
		 "b_befor"    : user['UerMoney'], 
		 "b_after"     : after           ,
		 "follows"     : ""              ,
		 "daili"       : user["daili"]
	 }
	 ZjMx["follows"]  = "发起代购：北京赛车"+orderId;
	 if( data["type"] == 0 ){
	   ZjMx["follows"]  = "发起合买：北京赛车"+orderId;
	 } 
	 Db.toDB("KR_Bank_Back",ZjMx); 
   /*写入紫荆明细 结束*/
   /*有保底数据写入冻结记录 开始*/
   if( data["type"] == 0 && bdCount > 0 ){
      var dJdata = {
	     "LotteryID"   : orderId,
		 "RebateID"    : 0      ,
		 "UserName"    : Session("un") ,
		 "LotteryName" : "北京赛车"    ,
		 "LotteryType" : "北京赛车"+ decodeURI(playname)    ,
		 "Expect"      : info["expect"],
		 "Hnumber"     : bdCount       ,
		 "Anumber"     : Total         ,
		 "Allmoney"    : info["Amout"] ,
		 "Mainpaymoney": info["bd_pay"],
		 "Issuccess"   : "保底冻结"    ,
		 "back_money"  : info["bd_pay"],
		 "b_befor"    : after ,
		 "b_after"     : after - info["bd_pay"],
		 "follows"     : "保底冻结：北京赛车"+orderId,
		 "daili"       : user["daili"] 
	  }
	  Db.toDB("KR_Bank_Back",dJdata);
   }
   var sqll = "update KR_User set Money = Money - "+info["mainpay"]+",UerMoney = UerMoney - "+info["mainpay"]+ ",IceMoney = IceMoney + " +info["bd_pay"]+ " where UserName = '"+Session("un")+"'"; //更改账户余额
   Db.doExecute(sqll);
   var code = {"code":10000,"msg":"投注成功"};
   Db.closeDb();
   echo(JSON.stringify(code));
   
   /*有保底数据写入冻结记录 结束*/
   Application.UnLock();
%>