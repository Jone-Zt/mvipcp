<err type='1'/>
<%
set rs=server.CreateObject("adodb.recordset")
sql = "select * from KR_Lottery_Issue where Lottery_Name='"&lt_id&"' ORDER BY endtime1 "
rs.open sql,conn,1,2
jg=""
jg1=""
jg2=""
jg3=""
do while not rs.eof
i=i+1
if i=1 then
begintime1=cdate(FormatDateTime(rs("begintime"),3))
endtime1=cdate(FormatDateTime(rs("endtime1"),3))
ln=rs("lottery_num")
end if
endtime=cdate(FormatDateTime(rs("endtime1"),3))
begintime=cdate(FormatDateTime(rs("begintime"),3))
qh=rs("lottery_num")
issale=rs("issale")
if time()<endtime and time()>begintime then
dgqishu=year(now())&Right(("00" & Month(now())),2)&Right(("00" & Day(now())),2)&"-"&qh
dgendtime=cdate(date()&" "&endtime)
end if
if time()<endtime and time()>begintime1 then
timea=year(now())&Right(("00" & Month(now())),2)&Right(("00" & Day(now())),2)
timeb=year(now())&"-"&Right(("00" & Month(now())),2)&"-"&Right(("00" & Day(now())),2)&" "&endtime
jg="<today expect="""&timea&"-"&qh&""" qih="""&qh&""" endtime="""&timeb&""" order="""&qh&""" />"
jg1=jg1&jg
end if
rs.movenext
loop
if dgendtime=""then
dgqishu=year(now())&Right(("00" & Month(now())),2)&Right(("00" & Day(now())),2)&"-"&ln
dgendtime=cdate(date()&" "&endtime1)
end if
if jg1<>"" then
jg1=left(jg1,len(jg1)-1)
nowdgtime=Year(dgendtime)&","&Right(("00" & Month(dgendtime)),2)&","&Right(("00" & Day(dgendtime)),2)&","&Right(("00" & Hour(dgendtime)),2)&","&Right(("00" &  Minute(dgendtime)),2)&","&Right(("00" & Second(dgendtime)),2)
nowtime=Year(now())&","&Right(("00" & Month(now())),2)&","&Right(("00" & Day(now())),2)&","&Right(("00" & Hour(now())),2)&","&Right(("00" &  Minute(now())),2)&","&Right(("00" & Second(now())),2)
end if

action=request("action")
select case action
case "activeexpect"  call activeexpect()
case "time1"  call time1()
case "expect"  call expect()
case else
call activeexpect()
end select
Sub activeexpect()
%>
<issue acc="<%=lt_id%>" expect="<%=dgqishu%>" qihao="<%=right(dgqishu,5)%>" endtime="<%=ToUnixTime(dgendtime,0)%>" order="<%=right(dgqishu,3)%>" /> 
<status issale="<%=issale%>" fasecond="<%=qh%>" servertime="<%=ToUnixTime(now(),0)%>" /> 
<%
End Sub
Sub time1()
%>
<status issale="<%=issale%>" fasecond="<%=qh%>" servertime="<%=ToUnixTime(now(),0)%>" /> 
<%
End Sub
Sub expect()
set rs=server.CreateObject("adodb.recordset")
sql = "select * from KR_Lottery_Issue where Lottery_Name='浙江11选5' ORDER BY endtime1 "
rs.open sql,conn,1,2
jg2=""
jg3=""
do while not rs.eof
i=i+1
if i=1 then
begintime1=cdate(FormatDateTime(rs("begintime"),3))
endtime1=cdate(FormatDateTime(rs("endtime1"),3))
ln=rs("lottery_num")
end if
endtime=cdate(FormatDateTime(rs("endtime1"),3))
begintime=cdate(FormatDateTime(rs("begintime"),3))
qh=rs("lottery_num")
issale=rs("issale")
dgqishu=year(now())&Right(("00" & Month(now())),2)&Right(("00" & Day(now())),2)&"-"&qh
dgendtime=cdate(date()&" "&endtime)
timea=year(DateAdd("y",1,now()))&Right(("00" & Month(DateAdd("d",1,now()))),2)&Right(("00" & Day(DateAdd("d",1,now()))),2)
timeb=year(DateAdd("y",1,now()))&"-"&Right(("00" & Month(DateAdd("d",1,now()))),2)&"-"&Right(("00" & Day(DateAdd("d",1,now()))),2)&" "&endtime 
jg2="<tomorrow expect="""&timea&"-"&qh&""" endtime="""&timeb&""" order="""&qh&""" />"
jg3=jg3&jg2
rs.movenext
loop
set rs=nothing

if dgendtime=""then
dgqishu=year(now())&Right(("00" & Month(now())),2)&Right(("00" & Day(now())),2)&"-"&ln
dgendtime=cdate(date()&" "&endtime1)
end if
if jg3<>"" then
jg3=left(jg3,len(jg3)-1)
nowdgtime=Year(dgendtime)&","&Right(("00" & Month(dgendtime)),2)&","&Right(("00" & Day(dgendtime)),2)&","&Right(("00" & Hour(dgendtime)),2)&","&Right(("00" &  Minute(dgendtime)),2)&","&Right(("00" & Second(dgendtime)),2)
nowtime=Year(now())&","&Right(("00" & Month(now())),2)&","&Right(("00" & Day(now())),2)&","&Right(("00" & Hour(now())),2)&","&Right(("00" &  Minute(now())),2)&","&Right(("00" & Second(now())),2)
end if
%>
<%=jg1&">"%>
<%=jg3&">"%>
<%
End Sub
%></xml>