<% 
/**
 ���� �����ݿ������  by dongsheng  
 ʱ�� ��2017-6-15
*/
function  DbAction(str){
    var dbstr  = str.split("|");
	var connstr = "Provider = Sqloledb; User ID = '" +dbstr[1] + "'; Password = '" + dbstr[4]+ "'; Initial Catalog = '"+ dbstr[2]+"'; Data Source = '" +dbstr[0]+ "';";
	var conn  = new  ActiveXObject("ADODB.Connection"); 
    conn.Open(connstr);
	this.Conn = conn ;
 }
 DbAction.prototype = {
    /*��ѯ�������ݼ�*/
    getData:function(sql){
	  try{
	   var me = this ;
	   var rs = new ActiveXObject("ADODB.Recordset");
	   rs.Open( sql,this.Conn,1,1) ;
	   var data =[];
	   while(!rs.Eof){
	      var obj = {};
		  for(var i =0 ; i < rs.Fields.Count ; i++ ){
		     obj[rs(i).Name] = rs(i).Value ;
		  }
		  data.push(obj);
		  rs.MoveNext;
	   }
	   rs = null ;
	   return data;
	  }catch(e){
	    this.Echo(sql);
	  } 
	},
	/*
	 @��������  
	 @table ����
	 @obj ����������Լ�ֵ�Դ��� ��{"name":"abc","age":"12"}
	*/
	toDB:function(table,obj){
	  // try{
	   var rs = new ActiveXObject("ADODB.RecordSet");
	   var me = this ;
	   var sql = "select * from "+ table ;
	   rs.Open(sql,me.Conn,2,2);
	   rs.AddNew();
	   for( var index in obj ){
	      rs(index) = obj[index];
	   }
	   rs.Update();
	   rs.MoveLast();
	   var id = rs("id")
	   rs = null ;
	   return id;
	  // }catch(e){
	  //   Response.write(e.message);
	   //  this.Echo(JSON.stringify(obj));
		// return 0 ;
	  // }
	},
	/*
	  @ִ�е��� @update,@delete ���
	*/
	doExecute:function(sql){
	  try{
	   this.Conn.Execute(sql); 
	   }catch(e){
	      this.Echo(sql);
	   }
	},
	/*
	 @�ر��������� �ͷ���Դ
	*/
	closeDb:function(){
	   this.Conn.Close();
	   this.Conn = null ;
	},
	Echo:function(str){
       Response.Write(str);
	   Response.end();
   },
   FormatDate:function(str){
   var d = new Date();
   var temm = {
       "Y" : d.getFullYear(),
	   "m" : (d.getMonth()+1) > 9 ? d.getMonth()+1 : "0"+(d.getMonth()+1),
	   "d" : d.getDate() > 9 ? d.getDate():"0"+d.getDate(),
	   "H" : d.getHours()> 9 ? d.getHours() : "0"+d.getHours(),
	   "i" : d.getMinutes() > 9 ?��d.getMinutes(): "0"+d.getMinutes(),
	   "s" : d.getSeconds() > 9 ?  d.getSeconds() : "0"+d.getSeconds() 
   }
   for( var indexs in temm ){
     str = str.replace(indexs,temm[indexs]);
   }
   return str ;
   }
 }
 //var stri = Application("DbConfig");
 var stri = "127.0.0.1|sa|vipcp|vipcp|Abc789456123";
 var Db = new DbAction(stri)
%>    