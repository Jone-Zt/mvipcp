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
   if(Session("un") == undefined){ //δ��¼
     var code = {"code":10001,"msg":"���ȵ�¼������Ϸ"};
	 echo(JSON.stringify(code));
   }
   var  now     =  pks.nowSale(); //pk10 ��ǰ��������
   var code     = data['code'];
   var beishu   =data["zhuihao"] == 1 ? data['beishu'] :[data['beishu']];
   var expect   = data["zhuihao"] == 1? data['expect'] :[data['expect']] ;
   var Total    = data['Total'];
   var buyCount = data['buyCount'];
   var bdCount  = data['BdCount'] ;
   for( index in expect ){
      if( expect[index] <  now ){
	      var code = {"code":10003 ,"msg":"���������ѽ���"};
		  echo(JSON.stringify(code));
	  }
   }
   var info  = BuyInfo(code,beishu,expect,Total,buyCount,bdCount);
   var sql  = "select UerMoney,daili from kr_user where username='"+Session("un")+"'";
   var user = Db.getData(sql)[0];
   if(user['UerMoney'] < info['mainpay']){ //�˻�����
      var code = {"code":10002,"msg":"�˻����㣬���Ȳ����˻����"} ;
	  echo(JSON.stringify(code));
   }
   /*д��Ͷע��*/
   var orderId = FormatDate("YmdHis")+"PKS";
   var goubuy  = buyCount + bdCount ;
   var cpstate = (goubuy == Total) ? "����Ч" : "δ��Ч";
   var jindun  = (buyCount / Total) * 100 ; 
   var buydata = {
         "expect"      : info['expect'],
         "protype"     : "��������" + decodeURI(playname),
		 "lotterytype" : "��������",
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
		 "mystate"     : cpstate == "����Ч" ? 1 : 0 ,
		 "ishm"        : Total > 1 ? 1 : 0 ,
		 "istop"       : data["isstop"],
		 "zhnum"       : expect.length ,
		 "tcSelect"    : data["ticheng"],
		 "isjz"        :  pks.EndTime()//����ʱ�� 
   };
   var ids =  Db.toDB("Kr_Buy",buydata);
   orderId = orderId + ids ;
   Db.doExecute("update Kr_Buy set lotteryid='"+orderId+"',zhnum="+ids+" where id = "+ids );
   /*���׷�ţ�data["zhuihao"]=1 �� д��׷�ű�  ��ʼ*/
   /**/
     var  zhuihaotable = {
	       "LotteryID" : orderId ,
		   "Expect"    : "",
		   "Money"     : info["oneone"],
		   "Status"    : "�ȴ���Ч", 
		   "UserName"  : Session("un"),
		   "GGType"    : 'no'         ,
		   "Way"       : 'pk10'         
	 }
	 for( i=0 ; i < expect.length ; i++ ){
	   zhuihaotable["Expect"] = expect[i];
	   zhuihaotable["Money"]  = info["oneone"] * beishu[i]; 
	   if(data['type'] == 1 && i < 1 ){
	      zhuihaotable["Status"] = "��Ч�ɹ�";
	   }
	   Db.toDB("KR_ZhuiHao",zhuihaotable); 
	 }
   /*д�� ����*/
   /*д���Ͼ���ϸ ��ʼ*/
     /*RebateId   0: "�ʽ���ϸ���ݼ�"  ,1: "����������ݼ� �����������"*/
	 var after = user['UerMoney'] - info["buy_pay"];
	 var ZjMx = {
	     "LotteryID"   : orderId,
		 "RebateID"    : 1      ,
		 "UserName"    : Session("un") ,
		 "LotteryName" : "��������"    ,
		 "LotteryType" : "��������" + decodeURI(playname),
		 "Expect"      : info["expect"],
		 "Hnumber"     : buyCount      ,
		 "Anumber"     : Total         ,
		 "Allmoney"    : info["Amout"] ,
		 "Mainpaymoney": info["buy_pay"],
		 "Issuccess"   : "������"       ,
		 "back_money"  : info["buy_pay"],
		 "b_befor"    : user['UerMoney'], 
		 "b_after"     : after           ,
		 "follows"     : ""              ,
		 "daili"       : user["daili"]
	 }
	 ZjMx["follows"]  = "�����������������"+orderId;
	 if( data["type"] == 0 ){
	   ZjMx["follows"]  = "������򣺱�������"+orderId;
	 } 
	 Db.toDB("KR_Bank_Back",ZjMx); 
   /*д���Ͼ���ϸ ����*/
   /*�б�������д�붳���¼ ��ʼ*/
   if( data["type"] == 0 && bdCount > 0 ){
      var dJdata = {
	     "LotteryID"   : orderId,
		 "RebateID"    : 0      ,
		 "UserName"    : Session("un") ,
		 "LotteryName" : "��������"    ,
		 "LotteryType" : "��������"+ decodeURI(playname)    ,
		 "Expect"      : info["expect"],
		 "Hnumber"     : bdCount       ,
		 "Anumber"     : Total         ,
		 "Allmoney"    : info["Amout"] ,
		 "Mainpaymoney": info["bd_pay"],
		 "Issuccess"   : "���׶���"    ,
		 "back_money"  : info["bd_pay"],
		 "b_befor"    : after ,
		 "b_after"     : after - info["bd_pay"],
		 "follows"     : "���׶��᣺��������"+orderId,
		 "daili"       : user["daili"] 
	  }
	  Db.toDB("KR_Bank_Back",dJdata);
   }
   var sqll = "update KR_User set Money = Money - "+info["mainpay"]+",UerMoney = UerMoney - "+info["mainpay"]+ ",IceMoney = IceMoney + " +info["bd_pay"]+ " where UserName = '"+Session("un")+"'"; //�����˻����
   Db.doExecute(sqll);
   var code = {"code":10000,"msg":"Ͷע�ɹ�"};
   Db.closeDb();
   echo(JSON.stringify(code));
   
   /*�б�������д�붳���¼ ����*/
   Application.UnLock();
%>