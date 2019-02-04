<!--#include file="../Conn.asp"-->
<%
sql="update KR_User set lastlogout=getdate(),state=0 where username='"&session("un")&"'"
conn.execute(sql)
session.Abandon
response.cookies("username")=""
Response.cookies("username").Expires=-1
if request.ServerVariables("HTTP_REFERER") then 
	Response.Write("<SCRIPT language=JavaScript>alert('\u5df2\u9000\u51fa\u767b\u5f55\uff01');this.location.href='"&request.ServerVariables("HTTP_REFERER")&"';</SCRIPT>")
else 
	Response.Write("<SCRIPT language=JavaScript>ocation.href='../../index.asp';</SCRIPT>")
end if
%>