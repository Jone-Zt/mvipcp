<!--#include file="../../../Conn.asp"-->
<xml>
<err type="<%
type1=0
set rs=conn.execute("SElECT birthday FROM KR_User WHERE username='"+Session("un")+"'")
if not rs.eof then
type1=rs(0)
end if
rs.close
set rs=nothing
response.write(type1)
%>" />
</xml>