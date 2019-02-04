<!--#include file="../../../conn.asp"-->
<!--#include file="../../../JScript.asp"-->
<script language="Jscript" runat="server">
	var all={};
	var gdset=0;
	function main(conn){
		var query = new Adodb(conn);
		all.tp = M.GET("tp");
    	var row = query.open("SElECT * FROM KR_Football_List WHERE OverTime>GETDATE()");
    	var list = [];
    	var show = "";
		while(!row.Eof){
			show += '"'+row("OrderId")+'":'+row("Memo").value+',';
			row.MoveNext;
		}
		all.context = show.substring(0,show.length-1);
		row.Close;
		var query2 = new Adodb(conn);
		var rsgdset = query2.open("SElECT birthday FROM KR_User WHERE username='"+Session("un")+"'");
		if(!rsgdset.Eof){
			gdset=rsgdset("birthday");
		}
   	}
</script>
<% Response.charset = "gb2312" %>
<% Call main(conn)
 %>{"gameId": "2013070515YX00602010","gameEn": "<%=all.tp%>","matchList": {<%=all.context%>},"isDispJczqSingleFix": "1","gdset":<%=gdset%>}