<%@LANGUAGE="JAVASCRIPT" CODEPAGE="936"%>
<!--#include file="Lib/JSCONN.asp"-->
<!--#include file="Lib/json.asp"-->
<!--#include file="Lib/c.asp"-->
<!--#include file="Lib/Jczq.asp"-->
<%
  id = JczqPrize.GET("id");
  var sql  = "select orderid,[plan] from KR_Football_Code where Id ="+id ;
  var data = Db.getData(sql);
  var sql  = "select id,BuyId,BuyMemo,last,SP from KR_Football_Plan where orderId='"+data[0]['orderid']+"' and State=0";
  var planlist = Db.getData(sql);
  
  if( planlist.length < 1 ){
    Db.doExecute("update KR_Football_Code set State=1 where id="+id);	
    Db.Echo("���������"+data[0]['orderid']+"�����ɽ�");
  }  	
  for(var i = 0 ; i < planlist.length  ; i++ ){
    if(!IsAllout(planlist[i]['BuyId'],planlist[i]['id'])) continue;
     result = JczqPrize.PrizeOneOrder(planlist[i]['BuyMemo'],data[0]['plan'],planlist[i]['SP']);
	 Db.doExecute("update KR_Football_Plan set State=1 where id="+planlist[i]['id']);
	 var usql= "update kr_football_plan set play='"+result+"' where id="+planlist[i]['id'];
     Db.doExecute(usql);
     var winmoney =  0 ;
	 var tc       =  0 ;
	 var prizemoney = 0 ;
     if( planlist[i]['last'] == 1 ){
	    var onecase = Db.getData("select a.UserName,Num,a.play,b.play as reuslet,a.Mul as beishu,a.bd,a.Tc from KR_Football_Buy a left join kr_football_plan b on b.BuyId = a.Id where a.Id ="+planlist[i]['BuyId']); 
		var TotalMoney =  onecase[0]['Num']* onecase[0]['beishu'] * 2 ; //�������
		winmoney = JczqPrize.CasePrize(onecase); //���㷽���н����
		var playname = onecase[0]['play'].indexOf('1_1')>=0 ? '�������򵥹�':'���������Ͷ';
		var danbeijin= winmoney / onecase[0]['beishu'] ;     //���������
        /////////////////////////////�������ɽ� ��ʼ////////////////////////////////////////
		if( winmoney > 0 ){
		  var upsql = "update kr_User set UerMoney=UerMoney+"+winmoney+",Money = Money+"+winmoney+" where username='"+onecase[0]['UserName']+"'";
          Db.doExecute(upsql);
		  try{
          var use = Db.getData("select UerMoney from kr_User where username='"+onecase[0]['UserName']+"'") ;
          var b_befor   = use[0]['UerMoney'] - winmoney ;
          var a_fter    = use[0]['UerMoney']           ;
          IntoBankBack(planlist[i]['BuyId'],onecase[0]['UserName'],playname,TotalMoney,TotalMoney,TotalMoney,TotalMoney,winmoney,b_befor,a_fter,winmoney,winmoney,'ϵͳ�ɽ�','���н�');
		  YongjinTiCheng(planlist[i]['BuyId'],danbeijin,onecase[0]['Tc'],onecase[0]['UserName'],playname,(onecase[0]['Num']*2));
		  }catch(e){
		     Response.write("select UerMoney from kr_User where username='"+onecase[0]['UserName']+"'<br>");
		  }
        } 		 
        /////////////////////////////�������ɽ� ����////////////////////////////////////////
        var statesql = "";
		var backsql  = "";
		var issuccess = winmoney > 0 ? '���н�' : 'δ�н�';
		var isWin = winmoney > 0 ? winmoney     :  0 ;
		statesql = 'update KR_Football_Buy set isWin = '+isWin+',State=1 where id='+planlist[i]['BuyId'] ;
		backsql  = "update KR_Bank_Back set issuccess='"+issuccess+"',back_state='�Ѵ���' where LotteryID='"+planlist[i]['BuyId']+"'";
		Db.doExecute(statesql);
		Db.doExecute(backsql);		
	 } 
  }
  Db.doExecute("update KR_Football_Code set State=1 where id="+id);	
  Response.write("���");
  function IntoBankBack(orderid,UserName,PlayName,Hnumber,Anumber,AllMoney,Mainpaymoney,WinMoney,Befor,After,WinCost,getWin,Follows,issuccess){
        var Bank = {     
			 'LotteryID' : orderid,
			 'UserName'  : UserName,
			 'LotteryName':'��������',
			 'LotteryType':PlayName,
			 'Hnumber'    :Hnumber,
             'Anumber'	  :Anumber,
             'Allmoney'	  :AllMoney,
             'Mainpaymoney':Mainpaymoney,
             'Issuccess' : issuccess,//'���н�',
             'back_money2':WinMoney,
             'b_befor'    :Befor,
             'b_after'    :After,
             'win_cost'   :WinCost,
             'win_cost_get':getWin,
             'addtime': Db.FormatDate('Y-m-d H:i:s'),
      		 'back_state':'�Ѵ���',
             'follows'   :Follows 
           }
        Db.toDB('KR_Bank_Back',Bank);		   
  }
  
  /**
   ����˵���� �������ɽ� ������Ӷ�����
   BuyID      kr_football_buy �� id 
   winPrize   �����н��������
   tc         ������ɱ���
   faqiren    �������û���
   danzhuqian �����������
  */
  function YongjinTiCheng(BuyID,winPrize,tc,faqiren,playname,danzhuqian){
    var tcqian = 0 ;
    var gd = Db.getData('select username,mul,buyid from kr_gd where buyid='+BuyID);
	for( var ii = 0 ; ii < gd.length ; ii++ ){
	   var jiangjin  =  winPrize * gd[ii]['mul'];
	   var TotalMoney=  danzhuqian * gd[ii]['mul'];
	   tcqian        += tc * jiangjin / 100 ;
	   getQian       =  jiangjin - tcqian ;
	   var upsql = "update kr_User set UerMoney=UerMoney+"+getQian+",Money = Money+"+getQian+" where username='"+gd[ii]['username']+"'";
       Db.doExecute(upsql);
	   var use = Db.getData("select UerMoney from kr_User where username='"+gd[ii]['username']+"'") ;
       var b_befor   = use[0]['UerMoney'] - getQian ;
       var a_fter    = use[0]['UerMoney']           ;
       IntoBankBack(gd[ii]['buyid'],gd[ii]['username'],playname,TotalMoney,TotalMoney,TotalMoney,TotalMoney,getQian,b_befor,a_fter,jiangjin,getQian,'ϵͳ�ɽ�','���н�');
	}
	/**���������*/
	var upsql = "update kr_User set UerMoney=UerMoney+"+tcqian+",Money = Money+"+tcqian+" where username='"+faqiren+"'";
    Db.doExecute(upsql);
	var use = Db.getData("select UerMoney from kr_User where username='"+faqiren+"'") ;
    var b_befor   = use[0]['UerMoney'] - tcqian ;
    var a_fter    = use[0]['UerMoney']           ;
    IntoBankBack(BuyID,faqiren,'���',0,0,0,0,tcqian,b_befor,a_fter,0,0,'Ӷ�����','�����');
  }
  function IsAllout(buyId,current_id){
     var d = Db.getData("select id,state from Kr_football_plan where buyid ="+buyId);
	 var bool  = true ; 
	 for( var iii =0 ; iii< d.length ; iii++ ){
	    if( d[iii]['id'] < current_id && d[iii]['state'] == 0 ){
		  bool  = false ;
		  break;
		} 
	 }
     return bool	 
  }
%>