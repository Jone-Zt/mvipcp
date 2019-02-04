<!--#include file="../Conn.asp"-->
<!--#include file="Include/KR.CommonCls.asp"--><xml><%
action=request("action")
select case action
case "mylist"  call mylist()
case "hmlist"  call hmlist()
case else
call hmlist()
end select
Sub mylist()
if session("un") = "" then
%><err type='-1'/><%else%><err type='1'/><%end if%><%
beginday=request("beginday")
if beginday<>"" then
addtime1="and addtime >='"&beginday& "'"
else
addtime1=""
end if
endday=request("endday")
if endday<>"" then
addtime2="and addtime <='"&endday& " 23:59:59'"
else
addtime2=""
end if

u=request("u")
if u="" or u="0" then
u1=""
elseif u="1" then
u1="and (Prostate='已生效' or Prostate='未生效')"
elseif u="2" then
u1="and Prostate='未中奖'"
elseif u="3" then
u1="and Prostate='已中奖'"
elseif u="4" then
u1="and Prostate like '%撤单%'"
end if

Page=request("Page")
pagesize=request("pagesize")
if expect<>"" then
qh1=expect
else
qh1=qh
end if

set rs=server.createobject("adodb.recordset")  
Sql = "select * from KR_Buy where UserName='"&session("un")&"' and LotteryType='"&Lottery_Name&"' "&u1&" "&addtime1&" "&addtime2&" order by id desc"
rs.open sql,conn,1,3 	
total=rs.recordcount 
rs.PageSize = Setting(20)
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
%><page pagesize='<%=Setting(20)%>' pageindex='<%=Page%>' countpage='<%=rs.pagecount%>' countrs='<%=rs.recordcount%>'/><%
For x = 1 to rs.PageSize
if rs.EOF then     
Exit For 
end if
i=i+1
allmoney=Formatnumber(rs("allmoney"),2,-1)
onemoney=Formatnumber((rs("allmoney")/rs("anumber")),2,-1)
sy=rs("anumber")-rs("hnumber")
if rs("win_cost_get")>0 or rs("win_cost_get")<>"" then
jj=Formatnumber(rs("win_cost_get"),2,-1)
else
jj="0.00"
end if
if left(rs("follows"),4)="发起投注" then
fs=1
elseif left(rs("follows"),4)="发起合玩" then
fs=2
elseif left(rs("follows"),4)="参与合玩" then
fs=3
elseif left(rs("follows"),4)="系统派奖" then
fs=4
elseif left(rs("follows"),4)="系统撤单" then
fs=5
end if
if rs("Issuccess")="进行中" then
zt="1"
elseif rs("Issuccess")="未中奖" then
zt="2"
elseif rs("Issuccess")="已中奖" then
zt="3"
elseif rs("Issuccess")="已撤单" then
zt="4"
end if
%><row num='<%=x%>' Lottery_ID='<%=Lottery_ID%>' pid='<%=rs("lotteryid")%>' cid='<%=right(rs("lotteryid"),6)%>' user='<%=left(rs("UserName"),2)&"***"%>' allmoney='<%=allmoney%>' fs='<%=fs%>' zfs='<%=rs("anumber")%>' rg='<%=rs("hnumber")%>' onemoney='<%=onemoney%>' jj='<%=jj%>' dt='<%=rs("addtime")%>' zt='<%=zt%>'/><%
rs.movenext
next
end if
rs.close
set rs=nothing
End Sub

Sub hmlist()
%><err type='1'/><%
if lotid=0 or lotid=1 or lotid=2 or lotid=3 or lotid=4 or lotid=5 or lotid=6 or lotid=7 or lotid=8 or lotid=9 or lotid=10 or lotid=11 or lotid=13 or lotid=14 or lotid=15 or lotid=16 or lotid=17 or lotid=18 or lotid=19 or lotid=50 or lotid=51 or lotid=52 or lotid=53 or lotid=55 or lotid=56 or lotid=57 or lotid=58 or lotid=59 or lotid=64 or lotid=65 or lotid=66 or lotid=67 or lotid=68 or lotid=69 or lotid=70 then
set rs=server.CreateObject("adodb.recordset")
sql = "select * from KR_Lottery_Issue where Lottery_Name='"&Lottery_Name&"' ORDER BY endtime1 "
rs.open sql,conn,1,2
do while not rs.eof
endtime=cdate(FormatDateTime(rs("endtime1"),3))
begintime=cdate(FormatDateTime(rs("begintime"),3))
qh=rs("lottery_num")
issale=rs("issale")
if time()<endtime and time()>begintime then
dgqishu=Right(("00" & year(now())),2)&Right(("00" & Month(now())),2)&Right(("00" & Day(now())),2)&"-"&qh
dgendtime=cdate(date()&" "&endtime)
end if
rs.movenext
loop
qh=dgqishu
qh22=Replace(qh,"-","")
findstr=unescape(request("findstr"))
if findstr<>"" then
findstr1="and lotteryid like '%"&findstr&"%'"
else
findstr1=""
end if
expect=request("expect")
if expect<>"" then
qh1=expect
else
qh1=qh
end if
qihao=right(Format_Time(date(),6),6)
if expect<>"" then
expect1="and expect like '%"&expect&"%'"
else
expect1="and lotteryid like '%"&qihao&"%'"
end if
else
sql = "select * from KR_Lottery_Issue where Lottery_Name='"&Lottery_Name&"'"
set rs = conn.execute(sql)
qh=rs("Lottery_Num")
qh22=qh
findstr=unescape(request("findstr"))
if findstr<>"" then
findstr1="and lotteryid like '%"&findstr&"%'"
else
findstr1=""
end if
expect=request("expect")
if expect<>"" then
qh1=expect
else
qh1=qh
end if
if expect<>"" then
expect1="and expect='"&expect&"'"
else
expect1="and expect='"&qh&"'"
end if
end if
tcSelect=request("tcSelect")
if tcSelect<>"" then
tcSelect1="and tcSelect='"&tcSelect&"'"
else
tcSelect1=""
end if
ztSelect=request("ztSelect")
if ztSelect="0" then
ztSelect1="and schedule<100"
elseif ztSelect="1" then
ztSelect1="and schedule=100"
elseif ztSelect="2" then
ztSelect1="and isreturn=1"
else
ztSelect1=""
end if
jeSelect=request("jeSelect")
if jeSelect="0" then
jeSelect1="and allmoney<=10"
elseif jeSelect="1" then
jeSelect1="and allmoney>10 and allmoney<=100"
elseif jeSelect="2" then
jeSelect1="and allmoney>=100 and allmoney<=500"
elseif jeSelect="3" then
jeSelect1="and allmoney>=500 and allmoney<=1000"
elseif jeSelect="4" then
jeSelect1="and allmoney>=1000 and allmoney<=3000"
elseif jeSelect="5" then
jeSelect1="and allmoney>=3000"
else
jeSelect1=""
end if
mfSelect=request("mfSelect")
if mfSelect="0" then
mfSelect1="and onemoney<=1"
elseif mfSelect="1" then
mfSelect1="and onemoney>1 and onemoney<=10"
elseif mfSelect="2" then
mfSelect1="and onemoney>=10 and onemoney<=20"
elseif mfSelect="3" then
mfSelect1="and onemoney>=20 and onemoney<=50"
elseif mfSelect="4" then
mfSelect1="and onemoney>=50 and onemoney<=100"
elseif mfSelect="5" then
mfSelect1="and onemoney>=100"
else
mfSelect1=""
end if
jdSelect=request("jdSelect")
if jdSelect="0" then
jdSelect1="and schedule<=10"
elseif jdSelect="1" then
jdSelect1="and schedule>10 and schedule<=20"
elseif jdSelect="2" then
jdSelect1="and schedule>=20 and schedule<=30"
elseif jdSelect="3" then
jdSelect1="and schedule>=30 and schedule<=40"
elseif jdSelect="4" then
jdSelect1="and schedule>=40 and schedule<=50"
elseif jdSelect="5" then
jdSelect1="and schedule>=50 and schedule<=60"
elseif jdSelect="6" then
jdSelect1="and schedule>=60 and schedule<=70"
elseif jdSelect="7" then
jdSelect1="and schedule>=70 and schedule<=80"
elseif jdSelect="8" then
jdSelect1="and schedule>=80 and schedule<=90"
elseif jdSelect="9" then
jdSelect1="and schedule>=90"
else
jdSelect1=""
end if
bdSelect=request("bdSelect")
if bdSelect="0" then
bdSelect1="and isbaodi=0"
elseif bdSelect="1" then
bdSelect1="and isbaodi=1"
else
bdSelect1=""
end if
Pageno=request("Pageno")
pagesize=request("pagesize")
set rs=server.createobject("adodb.recordset")  
if lotid=0 or lotid=1 or lotid=2 or lotid=3 or lotid=4 or lotid=5 or lotid=6 or lotid=7 or lotid=8 or lotid=9 or lotid=10 or lotid=11 or lotid=13 or lotid=14 or lotid=15 or lotid=16 or lotid=17 or lotid=18 or lotid=19 or lotid=50 or lotid=51 or lotid=52 or lotid=53 or lotid=55 or lotid=56 or lotid=57 or lotid=58 or lotid=59 or lotid=64 or lotid=65 or lotid=66 or lotid=67 or lotid=68 or lotid=69 or lotid=70 then
Sql = "select * from KR_Buy where ishm='1' and lotterytype='"&Lottery_Name&"' "&findstr1&" "&expect1&" "&tcSelect1&" "&ztSelect1&" "&jeSelect1&" "&mfSelect1&" "&jdSelect1&" order by id desc"
else
Sql = "select * from KR_Buy where ishm='1' and lotterytype='"&Lottery_Name&"' "&findstr1&" "&expect1&" "&tcSelect1&" "&ztSelect1&" "&jeSelect1&" "&mfSelect1&" "&jdSelect1&" order by schedule desc"
end if
rs.open sql,conn,1,3 	
total=rs.recordcount 
rs.PageSize = Setting(20)
if rs.EOF then     
response.write ""
else
if Not IsEmpty(Pageno) then
Page = CInt(Pageno)
if Page > rs.PageCount then
rs.AbsolutePage = rs.PageCount
elseif Page <= 0 then
Page = 1
else
rs.AbsolutePage = Page 
end if
End if
Page = rs.AbsolutePage 
%><page pagesize='<%=Setting(20)%>' pageindex='<%=Pageno%>' countpage='<%=rs.pagecount%>' countrs='<%=rs.recordcount%>'/><%
For x = 1 to rs.PageSize
if rs.EOF then     
Exit For 
end if
i=i+1
allmoney=rs("allmoney")
onemoney=rs("onemoney")
sy=rs("anumber")-rs("hnumber")
bd=rs("isbaodi")
lotterytype=rs("lotterytype")
fqtime=Format_Time(rs("addtime"),2)
qh21=rs("expect")
qh21=split(qh21,",")
qh2=qh21(0)
qh2=Replace(qh2,"-","")
if rs("iszhuihao")=1  then
set zh=server.createobject("ADODB.recordset")
sql = "select top(1)* from KR_ZhuiHao where LotteryID='"&rs("LotteryID")&"' order by ID desc"
zh.open sql,conn,1,1
remark = zh("Remark")
zh.close
set zh=nothing
end if 
if bd=1 then
bd=100*rs("baodinum")/rs("anumber")
else
bd=0
end if
if rs("prostate")="流产撤单" then
state=1
elseif rs("prostate")="会员撤单" then
state=2
elseif rs("prostate")="未中奖"  then
if rs("iszhuihao")=1  then
if remark="0" then
state=11
else
state=3
end if
else
state=3
end if
elseif rs("prostate")="中奖撤单" or rs("prostate")="已中奖" then
state=10
elseif rs("schedule")=100 or rs("prostate")="已生效" then
state=4
elseif qh2<qh22 then
state=5
else
state=6
end if
set rr=server.createobject("ADODB.recordset")
sqlS = "select * from KR_User where username='"&rs("UserName")&"'"
rr.open sqlS,conn,1,1
userid=rr("id")
rr.close
set rr=nothing
set rsc=server.createobject("ADODB.recordset")
sqlc="select  wincost  from KR_Buy where wincost>0 and username='"&rs("UserName")&"' and lotterytype='"&Lottery_Name&"'"
rsc.open sqlc,conn,1,1
do while not rsc.eof
allsss=allsss+rsc("wincost")
rsc.movenext
loop
rsc.close
set rsc=nothing
%><row num='<%=x%>' Lottery_Name='<%=Lottery_Name%>' Lottery_Type='<%=Lottery_Type%>' Lottery_ID='<%=Lottery_ID%>' pid='<%=rs("LotteryID")%>' cid='<%=rs("id")%>' user='<%=escape(left(rs("username"),2)&"***")%>' userid='<%=userid%>' images='' allmoney='<%=allmoney%>' tc='<%=rs("tcSelect")%>' mfje='<%=onemoney%>' jd='<%=rs("schedule")%>' bd='<%=bd%>' sy='<%=sy%>' state='<%=state%>' amoney='<%=allsss%>'/><%
allsss=0
rs.movenext
next
end if
rs.close
set rs=nothing
End Sub
%></xml>