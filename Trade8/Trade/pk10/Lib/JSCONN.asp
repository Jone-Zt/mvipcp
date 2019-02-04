<% 
/**
 功能 ：数据库操作类  by dongsheng  
 时间 ：2017-6-15
*/
function  DbAction(str){
    var dbstr  = str.split("|");
	var connstr = "Provider = Sqloledb; User ID = '" +dbstr[1] + "'; Password = '" + dbstr[4]+ "'; Initial Catalog = '"+ dbstr[2]+"'; Data Source = '" +dbstr[0]+ "';";
	var conn  = new  ActiveXObject("ADODB.Connection"); 
    conn.Open(connstr);
	this.Conn = conn ;
 }
 DbAction.prototype = {
    /*查询返回数据集*/
    getData:function(sql){
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
	},
	/*
	 @插入数据  
	 @table 表名
	 @obj 插入的数据以键值对存在 如{"name":"abc","age":"12"}
	*/
	toDB:function(table,obj){
	   //Response.write(JSON.stringify(obj)&"dongsheng<br/>");
	   var rs = new ActiveXObject("ADODB.Recordset");
	   var me = this ;
	   sql = "select * from "+ table ;
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
	},
	/*
	  @执行单条 @update,@delete 语句
	*/
	doExecute:function(sql){
	  try{
	   this.Conn.Execute(sql); 
	   }catch(e){
	      this.Echo(sql);
	   }
	},
	/*
	 @关闭数据连接 释放资源
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
	   "i" : d.getMinutes() > 9 ?　d.getMinutes(): "0"+d.getMinutes(),
	   "s" : d.getSeconds() > 9 ?  d.getSeconds() : "0"+d.getSeconds() 
   }
   for( var indexs in temm ){
     str = str.replace(indexs,temm[indexs]);
   }
   return str ;
   },
   PageData:function(Page,pagesizes,sql){
      var rs = new ActiveXObject("ADODB.Recordset"); 
	  rs.Open(sql,this.Conn,1,1)
	  rs.PageSize = pagesizes ;
	  var AllPage = rs.PageCount;
	  if(  Page > rs.PageCount ){
	     Page  = rs.PageCount;
	  }
	  rs.AbsolutePage  = Page ;
	  var data = [];
	  for( var j = 0 ; j < pagesizes ; j++ ){
	      if ( rs.Eof ) break;
	      var obj = {};
		  for(var i =0 ; i < rs.Fields.Count ; i++ ){
		     obj[rs(i).Name] = rs(i).Value ;
		  }
		  data.push(obj);
		  rs.MoveNext;
		  
	  }
	  var pagedata = {"page":Number(Page),"allpage":AllPage,"data":data};
	  return pagedata;  
   }
 }
 var stri = Application("DbConfig");
 var Db = new DbAction(stri)
 //var configsql = "select * from Kr_Config where id=1";
 //var configset = Db.getData(configsql);
 //var Setting   = configset[0]["Setting"].split("^%^");
%>    