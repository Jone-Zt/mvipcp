<% Response.CodePage=936%>
<% Response.Charset="gb2312" %>
<!--#include file="../Conn.asp"--><?xml version='1.0' encoding='gb2312' ?><xml><err type='1'/><%
action=request("action")
select case action
case "wzgg"  call wzgg()
case "zjbb"  call zjbb()
case else
call wzgg()
end select

Sub zjbb()
Page=KR(request("Page"))
pagesize=KR(request("pagesize"))
set rs=server.createobject("adodb.recordset")
Sql = "select * from KR_Announce where Announce_Class='中奖播报' order by addtime desc"
rs.open sql,conn,1,3 	
total=rs.recordcount 
rs.PageSize = Setting(19)
if rs.EOF then     
response.write ""
else
if Not IsEmpty(Page) then
Page = CInt(Page)
if Page > rs.PageCount then
rs.AbsolutePage = rs.PageCount
elseif Page <= 0 then
Page = 1
else
rs.AbsolutePage = Page 
end if
End if
Page = rs.AbsolutePage 
%><page pagesize='<%=Setting(19)%>' pageindex='<%=Page%>' countpage='<%=rs.pagecount%>' countrs='<%=rs.recordcount%>'/><%
For x = 1 to rs.PageSize
if rs.EOF then     
Exit For 
end if
i=i+1
%><row title='<%=rs("title")%>' Content='<%=rs("Content")%>' dt='<%=Format_Time(rs("AddTime"),1)%>'/> i='<%=i%>'/><%
rs.movenext
next
end if
rs.close
set rs=nothing
End Sub

Sub wzgg()
Page=KR(request("Page"))
pagesize=KR(request("pagesize"))
set rs=server.createobject("adodb.recordset")
'Sql = "select * from KR_Announce where Announce_Class='网站公告' order by addtime desc"
Sql = "select * from KR_Announce order by AddTime desc"
rs.open sql,conn,1,3 	
total=rs.recordcount 
rs.PageSize = Setting(19)
if rs.EOF then     
response.write ""
else
if Not IsEmpty(Page) then
Page = CInt(Page)
if Page > rs.PageCount then
rs.AbsolutePage = rs.PageCount
elseif Page <= 0 then
Page = 1
else
rs.AbsolutePage = Page 
end if
End if
Page = rs.AbsolutePage 
%><page pagesize='<%=rs.PageSize%>' pageindex='<%=Page%>' countpage='<%=rs.pagecount%>' countrs='<%=rs.recordcount%>'/><%
For x = 1 to rs.PageSize
if rs.EOF then     
Exit For 
end if
i=i+1
%><row title='<%=rs("title")%>' Content='<%=rs("Content")%>' dt='<%=Format_Time(rs("AddTime"),1)%>'/> i='<%=i%>'/><%
rs.movenext
next
end if
rs.close
set rs=nothing
End Sub
%></xml>