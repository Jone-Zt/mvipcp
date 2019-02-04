<%@LANGUAGE="JAVASCRIPT" CODEPAGE="936"%>
<!--#include file="../../pk10/Lib/JSCONN.asp"-->
<!--#include file="../../pk10/Lib/json.asp"-->
<%
Response.CharSet = "GBK";
 var act = Request.Form("act");
var now  = Db.FormatDate("Y/m/d H:i:s");
 if( act  == "getdata" ){
	 var pp = Request("p");
	 pp  =  pp == "" ? 1 : pp  ;
     var data = Db.PageData(pp,15,"select * from kr_football_buy where hm=2 and OverTime>'"+now+"' order by id desc");
	 for( var d = 0 ; d < data["data"].length ; d++ ){
	    var sql = "select Record from KR_User where username='"+data["data"][d]["UserName"]+"'";
		var u   = Db.getData(sql);
		if(u.length==0) continue;
        data["data"][d]['zj'] = u[0]['Record'] ;
	 }
	 data     = JSON.stringify(data);
	 Db.Echo(data);
 }
 if( act == "getDetail" ){
    var id = Number(Request("id"));
	var sql = "select * from kr_football_buy where id="+id;;
	var data = Db.getData(sql)[0];
	var bet  = data["BuyMemo"];
	bet      = bet.split("|");
	var betlist = [] ;
	betlist.push("");
	for( var j = 0 ; j < bet.length ; j++ ){	
	  if(bet[j] !="" ){
		  var aa = bet[j].substr(0,12);
		  //Db.Echo("select Memo from KR_Football_List where Orderid='"+aa+"'");
		  var pp = Db.getData("select Memo from KR_Football_List where Orderid='"+aa+"'")[0];
		  betlist.push(pp["hostName"]+"vs"+pp["guestName"]);
	  }
	}
	data["NameDiy"] = betlist.join("|");
	Db.Echo(JSON.stringify(data));
 }
%>