<%@LANGUAGE="JAVASCRIPT" CODEPAGE="936"%>
<!--#include file="json.asp"-->
<!--#include file="JSCONN.asp"-->
<%
 Application.Lock();
  var pt = Db.P("pt");
  var data = Db.Decode(pt);
  if(data["action"] == "buy"){
	 if (Session("un")==""){
	   Db.Echo(Db.Encode({"code":0,"msg":"请先登录后在游戏"}));
	 } 
     var U = Db.getData("select UerMoney from kr_user where  username='"+Session("un")+"'")
	 if ( U[0]["UerMoney"] < data["money"]){
	    var msg = {"code":0,"msg":"账户余额不足，请先充值后在游戏"};
		Db.Echo(Db.Encode(msg)); 
	 }
	 var hm = Db.getData("select * from kr_basketball_buy where id="+data["id"]);
	 if ( hm[0]["total"] < data["money"] ){
	    var msg = {"code":0,"msg":"方案剩余分数不足"}; 
		Db.Echo(Db.Encode(msg)); 
	 }
	 var now = Db.FormatDate("YmdHis");
	 var end = hm[0]["deadtime"].replace(/\-|\s|\:/g,"");
	 if( now > end ){
	     var msg = {"code":0,"msg":"方案投注已截止"}; 
		 Db.Echo(Db.Encode(msg)); 
	 }
	 Db.doExecute("update kr_user set UerMoney = UerMoney - "+data["money"]+",Money=Money-"+data["money"]+" where username='"+Session("un")+"'")//更新账户
	 var total  = hm[0]["Num"]*hm[0]["Mul"]*2 ;
	 IntoBankBack(hm[0]["id"],Session("un"),"JCLQ",data["money"],total,total,data['money'],0,U[0]["UerMoney"],U[0]["UerMoney"]-data['money'],0,0,"参与合玩","进行中");
	 Db.doExecute("update kr_basketball_buy set total= total-"+data["money"]+" where id="+data["id"]);
	  var msg = {"code":1,"msg":"参与成功，祝君中大奖"}; 
	 Db.Echo(Db.Encode(msg));
  }
  function IntoBankBack(orderid,UserName,PlayName,Hnumber,Anumber,AllMoney,Mainpaymoney,WinMoney,Befor,After,WinCost,getWin,Follows,issuccess){
        var Bank = {     
			 'LotteryID' : orderid,
			 'UserName'  : UserName,
			 'LotteryName':'JCLQ',
			 'LotteryType':PlayName,
			 'Hnumber'    :Hnumber,
             'Anumber'	  :Anumber,
             'Allmoney'	  :AllMoney,
             'Mainpaymoney':Mainpaymoney,
             'Issuccess' : issuccess,//'已中奖',
             'back_money2':WinMoney,
             'b_befor'    :Befor,
             'b_after'    :After,
             'win_cost'   :WinCost,
             'win_cost_get':getWin,
             'addtime': Db.FormatDate('Y-m-d H:i:s'),
      		 'back_state':'未处理',
             'follows'   :Follows 
           }
        Db.toDB('KR_Bank_Back',Bank);		   
  }
  
%>