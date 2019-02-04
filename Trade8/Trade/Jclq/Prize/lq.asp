<%@LANGUAGE="JAVASCRIPT" CODEPAGE="936"%>
<!--#include file="Lib/JSCONN.asp"-->
<!--#include file="Lib/json.asp"-->
<!--#include file="Lib/c.asp"-->
<!--#include file="Lib/Jclq.asp"-->
<%
  id = JczqPrize.GET("id");
  var sql  = "select orderid,[plan] from KR_BasketBall_Code where Id ="+id ;
  var data = Db.getData(sql);
  var sql  = "select id,mianId as BuyId, betcontent as BuyMemo,last,betsp as SP from kr_basketball_detail where orderId='"+data[0]['orderid']+"' and State=0";
  var planlist = Db.getData(sql);
  if ( planlist.length < 1 ) Db.Echo("竞猜篮球第"+data[0]['orderid']+"期已派奖");
  for(var i = 0 ; i < planlist.length  ; i++ ){
     if(!IsAllout(planlist[i]['BuyId'],planlist[i]['id'])) continue;
     result = JczqPrize.PrizeOneOrder(planlist[i]['BuyMemo'],data[0]['plan'],planlist[i]['SP']);
	 Db.doExecute("update KR_basketball_detail set State=1 where id="+planlist[i]['id']);
	 var usql= "update KR_basketball_detail set winsp='"+result+"' where id="+planlist[i]['id'];
     Db.doExecute(usql);
     var winmoney =  0 ;
	 var tc       =  0 ;
	 var prizemoney = 0 ;
	 if( planlist[i]['last'] == 1 ){
	     var onecase = Db.getData("select a.UserName,Num,a.play,b.winsp as reuslet,a.Mul as beishu,a.bd,a.Tc from kr_basketball_buy a left join kr_basketball_detail b on b.mianid = a.Id where a.id ="+planlist[i]["BuyId"]);
		// Db.Echo("select a.UserName,Num,a.play,b.winsp as reuslet,a.Mul as beishu,a.bd,a.Tc from kr_basketball_buy a left join kr_basketball_detail b on b.mianid = a.Id where a.id ="+planlist[i]["BuyId"]);
		 var TotalMoney =  onecase[0]['Num']* onecase[0]['beishu'] * 2 ; //方案金额
		 winmoney = JczqPrize.CasePrize(onecase); //计算方案中奖金额
		 var playname = onecase[0]['play'].indexOf('1_1')>=0 ? '竞彩篮球单关':'竞彩篮球混投';
		 var danbeijin= winmoney / onecase[0]['beishu'] ;     //单倍奖金额
         /////////////////////////////发起人派奖 开始////////////////////////////////////////
		 if( winmoney > 0 ){
			  var upsql = "update kr_User set UerMoney=UerMoney+"+winmoney+",Money = Money+"+winmoney+" where username='"+onecase[0]['UserName']+"'";
			  Db.doExecute(upsql);
			  var use = Db.getData("select UerMoney from kr_User where username='"+onecase[0]['UserName']+"'") ;
			  var b_befor   = use[0]['UerMoney'] - winmoney ;
			  var a_fter    = use[0]['UerMoney']           ;
			  IntoBankBack(planlist[i]['BuyId'],onecase[0]['UserName'],playname,TotalMoney,TotalMoney,TotalMoney,TotalMoney,winmoney,b_befor,a_fter,winmoney,winmoney,'系统派奖','已中奖');
			  YongjinTiCheng(planlist[i]['BuyId'],danbeijin,onecase[0]['Tc'],onecase[0]['UserName'],playname,(onecase[0]['Num']*2));
         } 		 
        /////////////////////////////发起人派奖 结束////////////////////////////////////////
		 var statesql = "";
		 var backsql  = "";
		 var issuccess = winmoney > 0 ? '已中奖' : '未中奖';
		 var isWin = winmoney > 0 ? winmoney     :  0 ;
		 statesql = 'update kr_basketball_buy set isWin = '+isWin+',State=1 where id='+planlist[i]['BuyId'] ;
		 backsql  = "update KR_Bank_Back set issuccess='"+issuccess+"',back_state='已处理' where LotteryID='"+planlist[i]['BuyId']+"'";
		 Db.doExecute(statesql);
		 Db.doExecute(backsql);	
         Cost_Rebate(planlist[i]['BuyId'],playname);//消费返点		 
	 }
   }
   function IntoBankBack(orderid,UserName,PlayName,Hnumber,Anumber,AllMoney,Mainpaymoney,WinMoney,Befor,After,WinCost,getWin,Follows,issuccess){
        var Bank = {     
			 'LotteryID' : orderid,
			 'UserName'  : UserName,
			 'LotteryName':'竞彩篮球',
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
      		 'back_state':'已处理',
             'follows'   :Follows 
           }
        Db.toDB('KR_Bank_Back',Bank);		   
  }
   /**
   功能说明： 跟单人派奖 发起人佣金提成
   BuyID      kr_football_buy 表 id 
   winPrize   方案中奖单倍金额
   tc         方案提成比例
   faqiren    发起人用户名
   danzhuqian 方案单倍金额
  */
  function YongjinTiCheng(BuyID,winPrize,tc,faqiren,playname,danzhuqian){
    var tcqian = 0 ;
    var gd = Db.getData('select username,mul,buyid from kr_gd where lt= 2 and buyid='+BuyID);
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
       IntoBankBack(gd[ii]['buyid'],gd[ii]['username'],playname,TotalMoney,TotalMoney,TotalMoney,TotalMoney,getQian,b_befor,a_fter,jiangjin,getQian,'系统派奖','已中奖');
	}
	/**发起人提成*/
	var upsql = "update kr_User set UerMoney=UerMoney+"+tcqian+",Money = Money+"+tcqian+" where username='"+faqiren+"'";
    Db.doExecute(upsql);
	var use = Db.getData("select UerMoney from kr_User where username='"+faqiren+"'") ;
    var b_befor   = use[0]['UerMoney'] - tcqian ;
    var a_fter    = use[0]['UerMoney']           ;
    IntoBankBack(BuyID,faqiren,'提成',0,0,0,0,tcqian,b_befor,a_fter,0,0,'佣金提成','已提成');
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
  function Cost_Rebate(buyId,playname){
     var mainfaq = Db.getData("select UserName,(Mul*Num*2) as Cost,Mul,Num from kr_basketball_buy where id="+buyId);
	 var cy      = Db.getData("select a.username,a.mul,b.UerMoney,b.Rebate,b.regfrom from kr_gd as a left join kr_user b on a.UserName = b.UserName  where a.buyid="+buyId+" and lt=2");
	 var dbje    = mainfaq[0]["Num"]*2 ;
	 var fdq     = Db.getData("select regfrom,UerMoney,rebate from kr_user where username='"+mainfaq[0]['UserName']+"'");
	 var omg     = {'U':mainfaq[0]['UserName'],'Cost':mainfaq[0]['Cost'],'rebate':fdq[0]['rebate'],'UerMoney':fdq[0]['UerMoney'],'regfrom':fdq[0]['regfrom']}; 
	 OneListRebate(omg,buyId,playname);
	 for( var key in cy ){
	    var obj = {'U':cy[key]['UserName'],'Cost':dbje*cy[key]['mul'],'rebate':cy[key]['Rebate'],'UerMoney':cy[key]['UerMoney'],'regfrom':cy[key]['regfrom']};
		OneListRebate(obj,buyId,playname)
	 }
  }
  function OneListRebate(obj,orderid,playname){
     var canshu = obj['regfrom'].replace(/\&{2}/g,"','").replace(/\&{1}/g,"'");
     var fandr  = Db.getData("select UserName,UerMoney,Rebate from kr_user where username in("+canshu+")");
     var fandianlist = obj['regfrom'].replace(/\&{2}/g,"|").replace(/\&{1}/g,"").split("|");
	 var needdoList  = [];
	 for( var i = fandianlist.length -1; i>=0 ;i-- ){
	     var o = {};
		 for(var ts = 0 ; ts < fandr.length; ts++){
		    if (fandianlist[i] == fandr[ts]['UserName']){
			   o = fandr[ts];
			   break;
			}
		 }
	     needdoList.push({'U':o['UserName'],'fd':o['Rebate'],'Uer':o['UerMoney']});
	 }
	 needdoList.push({'U':obj['U'],'fd':obj['rebate'],'Uer':obj['UerMoney']});
	 /*返点开始*/
	 var costFanDian  = obj['Cost'] * 0.1 ;
	 for( var j=0 ; j < needdoList.length ; j++ ){
      if( j < needdoList.length -1 ){	  
		   var bj  = needdoList[j]['fd'];
		   var xj  = needdoList[j+1]['fd'];
	  }else{
	      var  bj  = needdoList[j]['fd'];
		   var xj  = 0; 
	  }	   
      var fdq = (bj - xj) / 100 * costFanDian ;
      sql     = "update kr_user set UerMoney = UerMoney + "+fdq +", Money = Money+"+fdq +" where UserName='"+needdoList[j]["U"]+"'";
      Db.doExecute(sql);
      var tcmx = {'LotteryID':orderid,'UserName':needdoList[j]["U"],'LotteryName':'竞猜篮球','LotteryType':playname,'Issuccess':'已提成','back_money2':fdq,'addtime':Db.FormatDate('Y-m-d H:i:s'),'back_state':'已处理','follows':'消费返点','b_befor':needdoList[j]["Uer"],'b_after':needdoList[j]["Uer"]+fdq,'Anumber':0,Hnumber:0};
     // Db.Echo(JSON.stringify(tcmx));
	  Db.toDB('KR_Bank_Back',tcmx);
	 }
	 /*返点结束*/
  }  
%>