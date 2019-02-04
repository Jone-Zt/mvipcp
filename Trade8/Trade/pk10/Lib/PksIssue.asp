<!--#include file="RiLi.class.asp"-->
<%
 function  PksIssue(){
      this.issue = 595161;
	  this.time  = "2017/01/01";
	  this.sale  = 300000 ;
	  this.start = "09:02:00" ;
	  this.one   = 179 ; 
	  this.ChunJie = FormatDate("Y")+"-01-01"; //农历正月初一
   }
   PksIssue.prototype = {
       nowSale:function(){
	     var NowYear  =  FormatDate("Y");
		 var YearCha  =  NowYear - 2017 ; //相差几年
		 var NowDate  =  FormatDate("Y/m/d H:i:s"); //当前时间
		 var ChaDay   =  this.DateDiff(this.time,NowDate); 
		 if(this.IsSpr()){
		    ChaDay -= 7 ;
		 }
		 ChaDay =  ChaDay - ((NowYear - 2017) * 7);
		 var issue =this.issue + ChaDay * this.one ;
		 issue += this.Issue();
		 return issue-20; 
	   },
	   IsSpr:function(){ 
	      //判断是否是农历春节
	      var GLCJ    =  CalConv(this.ChunJie);
		  var GLCJs  =   GLCJ["M"].toString()+ GLCJ["d"].toString() ;
		  var nowDay  = Number(FormatDate("md"));
		  var bool = false ;
		  if( nowDay > Number(GLCJs)){
		     bool  = true ;
		  }
		  return bool ;
	   },
	   /*计算两个时间相差多少天*/
	   DateDiff:function(date1,date2){
	       var b1       = date1.split("/");
	       var D1       =  new Date( b1[1] + "-" + b1[2] + "-" + b1[0] );
		   var b2       =  date2.split("/");
		   var D2       =  new Date( b2[1] + "-" + b2[2] + "-" + b2[0] );
		   var DayCha   =  D2.getTime() - D1.getTime();
		   DayCha       =  Math.floor(DayCha / (24 * 3600 * 1000));
		   return DayCha ;
	   },
	   /*计算当天销售到第几期*/
	   Issue:function(){
	      var h = FormatDate("H");
		  if ( h >= 0 && h < 9 ) return 179 ; 
	      var d = new Date();
		  var b = FormatDate("m-d-Y")+" "+ this.start ; //开始时间
		  var start = new Date(b); 
		  var cha = Math.ceil((d.getTime() - start.getTime()) / this.sale );
		  return cha;  
	   },
	   /*获取当期销售结束时间*/
	   PassTime:function(){
	      var issue = this.Issue();
		  var a     = FormatDate("Y/m/d")+" "+this.start ;
		  var n     = new Date();
		  var ab    = new Date(a);
		  var ba    = ab.getTime() + issue * this.sale ;
		  var cha   = Math.ceil((ba - n.getTime()) / 1000);
		  return cha ;
	   },
	   /*获取当天第一期的期数*/
	   TodayFirstIssue:function(){
	      var NowYear  =  FormatDate("Y");
		 var YearCha  =  NowYear - 2017 ; //相差几年
		 var dd = new Date().getTime() - 86400000;
		 var NowDate  =  FormatDate("Y/m/d"); //当前时间
		 var ChaDay   =  this.DateDiff(this.time,NowDate); 
		 if(this.IsSpr()){
		    ChaDay -= 7 ;
		 }
		 ChaDay =  ChaDay - ((NowYear - 2017) * 7);
		 var issue =this.issue + ChaDay * this.one ;
		 return issue-20 ;
	   },
	   /*获取指定期数销售结束的时间*/
	   EndTime:function(){
	      var issue = this.Issue();
		  var a     = FormatDate("Y/m/d")+" "+this.start ;
		  var ab    = new Date(a);
		  var ba    = ab.getTime() + issue * this.sale ;
		  var ymd   = FormatDate("Y-m-d");
		  var aa    = new Date(ba);
		  var h     =  aa.getHours() < 10 ? "0" + aa.getHours() : aa.getHours();
		  var m     =  aa.getMinutes() < 10 ? "0"+ aa.getMinutes() : aa.getMinutes();
		  var s     =  aa.getSeconds() < 10  ? "0" + aa.getSeconds() : aa.getSeconds();
		  return ymd+" "+h+":"+m+":"+s ;
	   }
   }
   var pks = new PksIssue();
%>