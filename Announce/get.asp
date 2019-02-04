<!--#include file="../Conn.asp" --><?xml version="1.0" encoding="gb2312" ?><xml><%
     cxnumber=request("cxnumber")
	set rs=server.createobject("ADODB.recordset")
    sql="select top("&cxnumber&") * from KR_Announce order by id desc"
    rs.open sql,conn,1,1
    do while not rs.eof
%><row id=<%=rs("id")%> title=<%=escape(rs("title"))%> adddate=<%=rs("addTime")%> /><%
                rs.movenext
                loop
                rs.close
                set rs=nothing
       %></xml>