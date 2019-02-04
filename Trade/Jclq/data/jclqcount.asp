<!--#include file="../Prize/Lib/c.asp"-->
<%
 var JclqCount = {
	 /*
	 获取所有过关方式
	 */
     getPassType:function(pass){
		var p  = pass.replace(/x1/g,'');
		return p.split(','); 
	 },
	 //获取所有过关方式的组合
	 getAllGroup:function(passArr,orderlist){
	    var result = [];
		for( var t=0;t < passArr.length ; t++ ){
			var nu = Number(passArr[t]);
		    var a = group(orderlist,nu);
			result = result.concat(a);
		}
		return result ;
	 },
	 /**
	  获取每场比赛的投注总数
	 */
	 getBetExpectNum : function(bets){
		 var obj = {};
		 for( var index in  bets ){
		    var ab = bets[index].split("|");
			obj[ab[0]] = ab[1].split(",").length ;
		 }
		 return obj ;
	 },
	 betcount:function(allgroup,betslist){
	    var num = 0 ;
		for(var ts = 0 ; ts < allgroup.length ; ts++ ){
		    var snum = 1 ;
			for(var pt = 0 ; pt < allgroup[ts].length ; pt++ ){
			   var index = allgroup[ts][pt];
			   snum = snum * betslist[index];
			}
			num += snum ;
		}
		return num ;  
	 },
	 maincount:function(pass,order,bets){ 
	   order = order+'';
	   var plist = this.getPassType(pass);
	   var allgroupList = JclqCount.getAllGroup(plist,order.split("|"));
	   var betlist      = JclqCount.getBetExpectNum(bets); 
	   var numcount     = JclqCount.betcount(allgroupList,betlist);
	   return numcount; 
	 },
	 SortBet:function(order,bets,splist){
	    order = ''+order+'' ;
		order = order.split("|").sort();
		var temp  = {};
		var temp2 = {};
		for( var index in bets){
		   var a = bets[index].split("|");
		   temp[a[0]] = a[1];
		   var b = splist[index].split("|");
		   temp2[b[0]] = b[1];
		}
		
		var bet = [];
		var sp  = [];
		for( var ds=0 ; ds < order.length ; ds++ ){
		   var key  = order[ds]; 	
		   var oo   = order[ds]+"|"+temp[key];
		   bet.push(oo);
		   sp.push(order[ds]+"|"+temp2[key]);
		}
		return {"a":bet,"b":sp};
	 }
 }
%>