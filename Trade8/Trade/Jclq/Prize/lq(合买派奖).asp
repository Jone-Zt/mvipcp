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
		 /////////////
		if( winmoney > 0 ){
		  tc = onecase[0]['Tc'] * winmoney/100 ;
		  prizemoney = ( 1 - onecase[0]["Tc"] /100 ) * winmoney ;
		  var AllMoney   = onecase[0]['Num'] *onecase[0]['beishu'] * 2 ;
		  if ( tc > 0 ){
		    var usql = "select UerMoney from kr_user where username = '"+onecase[0]["UserName"]+"'";
			//Db.Echo(usql);
			var uu = Db.getData(usql);
			var befor =  uu[0]["UerMoney"] ;
			var after =  befor + tc ;
			Db.doExecute("update kr_User set UerMoney=UerMoney+"+tc+",Money=Money+"+tc+" where username='"+onecase[0]["UserName"]+"'");
			IntoBankBack(planlist[i]['BuyId'],onecase[0]['UserName'],playname,onecase[0]['Hnumber'],onecase[0]['Anumber'],AllMoney,AllMoney,tc,befor,after,winmoney,prizemoney,'合买提成','已中奖');
		  }
		  var cansql = "select username,Hnumber,Anumber,Allmoney,LotteryID,Mainpaymoney from kr_bank_back where lotteryID ='"+planlist[i]['BuyId']+"' and state=20";
		  var hm     = Db.getData(cansql);
		  for( var index in hm ){
		     var bili = hm[index]['Hnumber'] / hm[index]['Anumber'] ; //合买占比
             //Db.Echo(bili);
			 var xiaofeiqian = bili * TotalMoney ; //实际消费金额
			 var winqian = bili * prizemoney ;
			 var upsql = "update kr_User set UerMoney=UerMoney+"+winqian+",Money = Money+"+winqian+" where username='"+hm[index]['username']+"'";
             Db.doExecute(upsql);
             var use = Db.getData("select UerMoney from kr_User where username='"+hm[index]['username']+"'") ;
             var b_befor   = use[0]['UerMoney'] - winqian ;
             var a_fter    = use[0]['UerMoney']           ;
             IntoBankBack(hm[index]['LotteryID'],hm[index]['username'],playname,hm[index]['Hnumber'],hm[index]['Anumber'],hm[index]['Allmoney'],hm[index]['Mainpaymoney'],winqian,b_befor,a_fter,prizemoney,prizemoney,'系统派奖','已中奖');  			 
		     //返点 
			// XiaoFeiFanDian(xiaofeiqian,hm[index]['username'],hm[index]['LotteryID'],playname,hm[index]['Hnumber'],hm[index]['Anumber'],hm[index]['Allmoney'],hm[index]['Mainpaymoney']);
		  }
		}
		 ////////////
		 var statesql = "";
		 var backsql  = "";
		 var issuccess = winmoney > 0 ? '已中奖' : '未中奖';
		 var isWin = winmoney > 0 ? winmoney     :  0 ;
		 statesql = 'update kr_basketball_buy set isWin = '+isWin+',State=1 where id='+planlist[i]['BuyId'] ;
		 backsql  = "update KR_Bank_Back set issuccess='"+issuccess+"',back_state='已处理' where LotteryID='"+planlist[i]['BuyId']+"'";
		 Db.doExecute(statesql);
		 Db.doExecute(backsql);		
	 }
   }
   function IntoBankBack(orderid,UserName,PlayName,Hnumber,Anumber,AllMoney,Mainpaymoney,WinMoney,Befor,After,WinCost,getWin,Follows,issuccess){
        var Bank = {     
			 'LotteryID' : orderid,
			 'UserName'  : UserName,
			 'LotteryName':'竞彩足球',
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
   * 消费返点
   *cost 消费金额
   *用户名   
  */
  function XiaoFeiFanDian(cost,username,orderid,playname,Hnumber,Anumber,Allmoney,mainpaymoney){
   try{    
	var us = Db.getData("select regfrom from kr_user where username='"+username+"'");
	 //Response.write("<br/>select regfrom from kr_user where username='"+username+"'<br/>");
	 var lian = "&" + username +"&"+us[0]['regfrom'];
	 var regarr = lian.replace(/\&\&/g,'|').replace(/\&/g,'').split("|");
     lian     = lian.replace(/\&\&/g,"','").replace(/\&/g,"'");
	 var sqls = "select username,UerMoney,Rebate from kr_User where username in("+lian+")";
	 var RegList = Db.getData(sqls);
	 var newArr  = getNewReg(regarr,RegList);
	 var len     = newArr.length ;
	 var allfandian = [] ;
	 var allFandianQian = cost * 0.1 ;
     for(var t= 0 ; t < len ;t++ ){
	    var fandian = 0 ;
		if ( t > 0 && t < len -1 ){
		  fandian = newArr[t+1]['Rebate'] - newArr[t]['Rebate'];
		  allfandian.push(fandian);
		}else if( t == 0 ){
		   fandian = newArr[t]['Rebate'] ;
		   allfandian.push(fandian);
		}else if(t == len -1 ){
		   fandian = 10 - eval(allfandian.join('+'));
		}
		if( fandian > 0 ){
		 var qian  = allFandianQian * (fandian / 10);
		 var befor = newArr[t]['UerMoney'] ;
		 var after = befor + qian ;
		 var ups   = "update kr_user set UerMoney=UerMoney+"+qian+",Money=Money+"+qian+" where username='"+regarr[t]+"'";
		 Db.doExecute(ups);
		 IntoBankBack(orderid,regarr[t],playname,Hnumber,Anumber,Allmoney,mainpaymoney,qian,befor,after,0,0,'消费返点','已中奖');
		}
	 }
   }catch(e){ }	 
  }
  function BdChuli(order_no){
	var sql = "select * from kr_football_buy where hm=1 and state =0 and id in(select buyId from kr_football_plan where orderid='"+order_no+"' and state=0)";
	var hmlist = Db.getData(sql);
	for( var ts=0; ts < hmlist.length ; ts++ ){
	   var total    = hmlist[ts]["Num"] * hmlist[ts]["Mul"]* 2 ; //方案总分数
	   var buyTotal = Db.getData("select sum (back_money) as Total from Kr_Bank_Back where LotteryID='"+hmlist[ts]["Id"]+"'"); //此总份数包括保底
	   var jindu    = buyTotal[0]["Total"] / total * 100 ;
	   if( jindu >=100 ){
		  var need = buyTotal[0]["Total"] - total;//需要扣除的保底份数
		  Db.doExecute("update kr_bank_back set Hnumber = Hnumber - "+need + ",mainpaymoney=mainpaymoney - "+need+",back_money=back_money-"+need+",state=20 where LotteryID='"+hmlist[ts]["Id"]+"' and follows='保底冻结'");
		  Db.doExecute("update kr_football_buy set bd = bd - "+need+" where id ="+hmlist[ts]["Id"]);
		  if( need > 0 ){	 
				Db.doExecute("update kr_user set UerMoney=UerMoney+"+need+",Money=Money+"+need+" where username='"+hmlist[ts]['UserName']+"'"); //退还多余保底钱
				var KU = Db.getData("select UerMoney from kr_User where username='"+hmlist[ts]["UserName"]+"'")[0];
				var tuibaodi = {
				 'LotteryID':hmlist[ts]["Id"].toString(),
				 'UserName' : hmlist[ts]["UserName"] ,
				 'LotteryName':'竞猜足球',
				 'LotteryType':'竞猜足球混投',
				 'Hnumber'    : need ,
				 'Anumber'    : total,
				 'Allmoney'   : total,
				 'Mainpaymoney':need,
				 'Issuccess'       :'进行中',
				 'back_money2'  :need ,	
				 'b_befor'     : KU["UerMoney"]-need ,
				 'b_after'     : KU["UerMoney"],
				 'back_state'  : '已处理' ,
				 'state'       : 0 ,
				 'addtime'   : Db.FormatDate("Y-m-d H:i:s"),
				 'backtime'  : Db.FormatDate("Y-m-d H:i:s"),
				 'follows'     : '退还多余保底'    				 
			  };
			  //Db.Echo(JSON.stringify(tuibaodi));
			  Db.toDB('KR_Bank_Back',tuibaodi);
			  
		  }
	   }
	   if (jindu >=90 && jindu < 100 ){
		  var need  = total - buyTotal[0]["Total"] ;
		  Db.doExecute("update kr_user set UerMoney = UerMoney- "+ need +",Money = Money - "+ need +" where username ='admin'");
		  var ds  = Db.getData("select UerMoney from kr_user where username='admin'")[0];
		  var canyu = {
			 "LotteryID":hmlist[ts]["Id"].toString(),
			 "UserName" : "admin" ,
			 "LotteryName":"竞猜足球",
			 "LotteryType":"竞猜足球混投",
			 "Hnumber"    : need ,
			 "Anumber"    : total,
			 "Allmoney"   : total,
			 "Mainpaymoney":need,
			 "Issuccess"       :"进行中",
			 "back_money"  :need ,	
			 "b_befor"     : ds["UerMoney"]+ need ,
			 "b_after"     : ds["UerMoney"],
			 "back_state"  : "未处理" ,
			 "state"       : 20 ,
			 "backtime"   : Db.FormatDate("Y-m-d H:i:s"),
			 "follows"     : "系统保底"    				 
		  };
		  Db.toDB("KR_Bank_Back",canyu);
		  Db.doExecute("update kr_bank_back set Hnumber = "+hmlist[ts]['bd']+", state=20 where LotteryID='"+hmlist[ts]["Id"]+"' and follows='保底冻结'");
	   }
	   if(jindu < 90 ){ //系统撤单
		  var canyulist = Db.getData("select UserName,Hnumber from Kr_Bank_Back where LotteryID='"+hmlist[ts]["Id"]+"'");
		  var lencount = canyulist.length;
		  for( var y = 0 ; y < lencount ; y++ ){
			 Db.doExecute("update Kr_User set UerMoney = UerMoney + "+ canyulist[y]["Hnumber"]+",Money=Money+"+canyulist[y]["Hnumber"]+" where username='"+canyulist[y]["UserName"]+"'");
			 var ubs = Db.getData("select UerMoney from Kr_User where username='"+canyulist[y]["UserName"]+"'")[0];
			 var befor = ubs["UerMoney"] - canyulist[y]["Hnumber"];
			 var after = ubs["UerMoney"] ;
			 IntoBankBack(hmlist[ts]["Id"],canyulist[y]["UserName"],"竞彩足球",canyulist[y]["Hnumber"],total,total,canyulist[y]["Hnumber"],0,befor,after,0,0,"系统撤单","系统撤单");
			 Db.doExecute("update kr_bank_back set Issuccess='系统撤单',back_state='已处理',state=0,isreturn=1  where LotteryID='"+hmlist[ts]["Id"]+"'");
	      }
          Db.doExecute("update kr_football_plan set state = 1 where BuyId='"+hmlist[ts]["Id"]+"'");
          Db.doExecute("update kr_football_buy set bd = 0  where id ="+hmlist[ts]["Id"]);		  
	   }
	   Db.doExecute("update kr_football_buy set state=2 where id="+hmlist[ts]["Id"]);
	   Db.doExecute("update kr_user set IceMoney = IceMoney -".hmlist[ts]['bd']+" where username='"+hmlist[ts]['UserName']+"'");
	}
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