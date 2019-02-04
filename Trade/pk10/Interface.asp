<%@LANGUAGE="JAVASCRIPT" CODEPAGE="936"%>
<!--#include file="Lib/JSCONN.asp"-->
<!--#include file="Lib/json.asp"-->
<!--#include file="Lib/PksIssue.asp"-->
<%
 /*入口   开始*/
 var action =Request("action");
 if(action == "nowIssuePass"){
     var str =  Expect();
	 echo(str);
 }
 if( action =="today"){
	var ad  = pks.TodayFirstIssue();
	var ymd = FormatDate("Y/m/d")+" 23:59:59";
	var dd  = getChuo(ymd);
	var bbs = {}
	bbs['issue'] = ad ;
	bbs['time']  = dd ;
	ad  = JSON.stringify(bbs);
	echo(ad); 	  
 }
 if( action == "zhuihaolist" ){
    var data = getZhuiList();
	echo(data);
 }
 if( action == "newopencode" ){
    getTop10();
 }
 if( action == "newListopen" ){
     var expect = Request("expect");
	 var issue  = String(expect).match(/\d+/); 
	 var sql    = "select num_info1,num_info2,num_info3,num_info4,num_info5,num_info6,num_info7,num_info8,num_info9,num_info10 from KR_Lottery_Code where Lottery_Name='Pk10' and Lottery_num='"+issue[0]+"'";
	 var data   = Db.getData(sql);
	 var dd     = {};
	 dd["code"] = 1 ;
	 dd["data"] = data;
	 if( data == "" ){
	    dd["code"] = 0;
	 }
	 Db.closeDb();
	 Db.Echo(JSON.stringify(dd));
 }
 if( action == "ZjList" ){
    var sql = "select top 10 UserName,Sum(win_cost_get) as win_cost_get from KR_Bank_Back where (follows like '%系统派奖%') and LotteryName='北京赛车' and win_cost_get>0 GROUP BY username ORDER BY win_cost_get DESC" ;
	var data = Db.getData(sql);
	Db.closeDb();
	var list = [] ;
	for( var t = 0 ; t < data.length ; t++ ){
		var dd   = {};
		dd["key"]   = t+1 ;
		dd["name"]  = data[t]["UserName"].substring(0,2)+"***";
		dd["money"] = formatCurrency2(data[t]["win_cost_get"]);
		list.push(dd);
	}
	Db.Echo(JSON.stringify(list));
 }
 if( action == "TodayOpen" ){
     var todayFirst = pks.TodayFirstIssue();
	 var end        = todayFirst + 179 ;
	 var sql = "select lottery_num,num_info1,num_info2,num_info3,num_info4,num_info5,num_info6,num_info7,num_info8,num_info9,num_info10 from kr_lottery_code where lottery_num between "+ todayFirst + " and " + end + " and Lottery_Name='pk10'" ;
	 sql = "select lottery_num,num_info1,num_info2,num_info3,num_info4,num_info5,num_info6,num_info7,num_info8,num_info9,num_info10 from kr_lottery_code where  Lottery_Name='pk10'" ;
	 var code = Db.getData(sql);
	 Db.closeDb();
	 var Abc      = {};
	 for( var i = 0 ; i < code.length  ; i++ ){
	    var codelist = [] ;
		for( var index in code[i] ){
		   if( index != "lottery_num" && code[i][index]!="" && index.indexOf('num_info')> -1){
		      codelist.push(code[i][index]);
		   }
		}
		Abc[code[i]['lottery_num']] = codelist.join(",");
	 }
	 var BcA = {"First":todayFirst,"Code":Abc};
	 Db.Echo(JSON.stringify(BcA));  
 }
 if( action == 'Miss' ){ 
    sql = "select top 50 num_info1,num_info2,num_info3,num_info4,num_info5,num_info6,num_info7,num_info8,num_info9,num_info10 from kr_lottery_code  where lottery_name='pk10' order by id desc"
	var code = Db.getData(sql);
	Db.closeDb();
	var data = {'code':'1000','msg':code}
	Db.Echo(JSON.stringify(data));
 }
 /*入口   结束*/
 function Expect(){
   var obj = {};
   obj["expect"] = pks.nowSale();
   obj["pass"]   = pks.PassTime();
   var aa = JSON.stringify(obj);
   return aa;
 }
 function getZhuiList(){
	 var start  = FormatDate("Y/m/d")+" 09:07:00";
	 var baba   = new Date(start);
	 baba       =  baba.getTime();
	 var step   = 300000;
	 var list   = [];
	 var ab     = pks.TodayFirstIssue();
	 for( i = 0; i < 179 ;  i++ ){
	    var d = {} ;
		d["issue"] = ab+i ;
		d["time"]  = FormatDate2(baba,"Y-m-d H:i:s");
		list.push(d);
		baba = baba + step ;
	 } 
	 return JSON.stringify(list);
 }
 function  getChuo(str){
	var d = str == null ? new Date() : new Date(str);
	return d.getTime();  
 }
 function getTop10(){
    var sql  = "select top 10 lottery_num,num_info1,num_info2,num_info3,num_info4,num_info5,num_info6,num_info7,num_info8,num_info9,num_info10 from KR_Lottery_Code where Lottery_Name='Pk10' order by lottery_num  desc";
	var data = Db.getData(sql);
	Db.closeDb();
	Db.Echo(JSON.stringify(data)); 
 }
 
 function getNewOpen(){
 }
 
 
 
 function formatCurrency2(num) {
	num = String(num).replace(/\$|\,/g,'');
	if(isNaN(num))
	{
		num = "0";
	}
	var sign = (num == (num = Math.abs(num)));
	num = Math.floor(num*100+0.50000000001);
	var cents = num%100;
	num = String(Math.floor(num/100));
	if(cents<10)
	{
		cents = "0" + cents;
	}
	return (((sign)?'':'-') + num + '.' + cents);
}
%>