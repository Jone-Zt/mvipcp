<!--#include file="../conn.asp"--><xml><%
Function ToUnixTime(strTime, intTimeZone)
    If IsEmpty(strTime) or Not IsDate(strTime) Then strTime = Now
    If IsEmpty(intTimeZone) or Not isNumeric(intTimeZone) Then intTimeZone = 0
    ToUnixTime = DateAdd("h",-intTimeZone,strTime)
    ToUnixTime = DateDiff("s","1970-01-01 08:00:00", ToUnixTime)
End Function

  lt_id=unescape(request("lt_id"))
  ttis=request("ttis")
  if lt_id="" then lt_id=0
  if ttis=1 then
%>
 <!--#include file="./Ajax_Info.asp"-->
<%
  response.End()
 end if
  set rs=server.CreateObject("adodb.recordset")
  sql="select * from kr_lottery_issue where lottery_name = '"&lt_id&"'"
  rs.open sql,conn,1,1
  endtime=cdate(FormatDateTime(rs("endtime"),3))
  select case lt_id
  	case "´óÀÖÍ¸"
		wek="2,4,7"
	case "Ë«É«Çò"
		wek="1,3,5"
	case "ÆßÐÇ²Ê"
		wek="1,3,6"
	case "ÆßÀÖ²Ê"
		wek="2,4,6"
	case else
		wek="1,2,3,4,5,6,7"
	end select
cwek = 7
if wek <> "" then
  spt = split(wek,",")
  sub eachwek(a,b)
  		wen = weekday(now())
	  For Each p In spt
		if wen <= p+b then
			cwek = p-wen+b
			exit for
		end if
	  Next
	end sub
  	call eachwek(a,0)
  if cwek=7 then
  	call eachwek(a,7)
  end if
end if
enddate=FormatDateTime((now()+cwek),2)&" "&endtime
%><err type="1"/><issue expect="<%=rs("lottery_num")%>"  endtime="<%=ToUnixTime(enddate,0)%>"  /><status issale="<%=rs("issale")%>"  servertime="<%=ToUnixTime(now(),0)%>" /></xml>