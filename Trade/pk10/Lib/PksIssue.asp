<!--#include file="RiLi.class.asp"-->
<%
 function  PksIssue(){
      this.issue = 595161;
	  this.time  = "2017/01/01";
	  this.sale  = 300000 ;
	  this.start = "09:02:00" ;
	  this.one   = 179 ; 
	  this.ChunJie = FormatDate("Y")+"-01-01"; //ũ�����³�һ
   }
   PksIssue.prototype = {
       nowSale:function(){
	     var NowYear  =  FormatDate("Y");
		 var YearCha  =  NowYear - 2017 ; //����
		 var NowDate  =  FormatDate("Y/m/d H:i:s"); //��ǰʱ��
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
	      //�ж��Ƿ���ũ������
	      var GLCJ    =  CalConv(this.ChunJie);
		  var GLCJs  =   GLCJ["M"].toString()+ GLCJ["d"].toString() ;
		  var nowDay  = Number(FormatDate("md"));
		  var bool = false ;
		  if( nowDay > Number(GLCJs)){
		     bool  = true ;
		  }
		  return bool ;
	   },
	   /*��������ʱ����������*/
	   DateDiff:function(date1,date2){
	       var b1       = date1.split("/");
	       var D1       =  new Date( b1[1] + "-" + b1[2] + "-" + b1[0] );
		   var b2       =  date2.split("/");
		   var D2       =  new Date( b2[1] + "-" + b2[2] + "-" + b2[0] );
		   var DayCha   =  D2.getTime() - D1.getTime();
		   DayCha       =  Math.floor(DayCha / (24 * 3600 * 1000));
		   return DayCha ;
	   },
	   /*���㵱�����۵��ڼ���*/
	   Issue:function(){
	      var h = FormatDate("H");
		  if ( h >= 0 && h < 9 ) return 179 ; 
	      var d = new Date();
		  var b = FormatDate("m-d-Y")+" "+ this.start ; //��ʼʱ��
		  var start = new Date(b); 
		  var cha = Math.ceil((d.getTime() - start.getTime()) / this.sale );
		  return cha;  
	   },
	   /*��ȡ�������۽���ʱ��*/
	   PassTime:function(){
	      var issue = this.Issue();
		  var a     = FormatDate("Y/m/d")+" "+this.start ;
		  var n     = new Date();
		  var ab    = new Date(a);
		  var ba    = ab.getTime() + issue * this.sale ;
		  var cha   = Math.ceil((ba - n.getTime()) / 1000);
		  return cha ;
	   },
	   /*��ȡ�����һ�ڵ�����*/
	   TodayFirstIssue:function(){
	      var NowYear  =  FormatDate("Y");
		 var YearCha  =  NowYear - 2017 ; //����
		 var dd = new Date().getTime() - 86400000;
		 var NowDate  =  FormatDate("Y/m/d"); //��ǰʱ��
		 var ChaDay   =  this.DateDiff(this.time,NowDate); 
		 if(this.IsSpr()){
		    ChaDay -= 7 ;
		 }
		 ChaDay =  ChaDay - ((NowYear - 2017) * 7);
		 var issue =this.issue + ChaDay * this.one ;
		 return issue-20 ;
	   },
	   /*��ȡָ���������۽�����ʱ��*/
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