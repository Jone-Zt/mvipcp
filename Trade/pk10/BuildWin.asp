<%@LANGUAGE="JAVASCRIPT" CODEPAGE="936"%>
<!--#include file="Lib/JSCONN.asp"-->
<!--#include file="Lib/json.asp"-->
<%
  var sql  = "select spec_code,Point_Bs,win_money,win_num from KR_Lottery_Win where Lottery_Name='��������' order by id DESC" ;
  var type = Db.getData("select spec_code from KR_Lottery_Win where Lottery_Name='��������' group by spec_code");
  var data = Db.getData(sql) ;
  var a = {};
  for( index in type ){ 
    var ss = {};
    for( ab in data ){
		if(data[ab]["spec_code"] == type[index]["spec_code"]){
		   var b = data[ab]["win_money"]+"#"+data[ab]["Point_Bs"];
		   ss[data[ab]["win_num"]] = b ;
		}
	}
	a[type[index]["spec_code"]] = ss ;
  }
   Db.closeDb();
  var aab="var Bouns = "+ JSON.stringify(a)+";";
  var fso = new ActiveXObject("Scripting.FileSystemObject"); 
  var file = Server.MapPath("/Trade/Pk10/Lib/Bouns.asp");
  var f=fso.createtextfile(file,2,false); 
  f.writeLine("\<\%");
  f.writeLine(aab); 
  f.writeLine("\%\>");
  f.Close();
  f =null;
  fso = null;
  Db.Echo('ok');
  
  /**
    ˵��  ���ɸ�ʽ {"1001":{"10":"888888#0","0":"2#0"}}
    {"�淨���":{"���������":"����#����"}}
  */
 %>
 
 