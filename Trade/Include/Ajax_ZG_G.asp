<!--#include file="../../Conn.asp"-->
<!--#include file="zs.javascript.asp"-->
<%GetUrl()%><xml><%if session("un") = "" then%><err type="-1" /><%else%><%
sql="select * from KR_User where username='"&session("un")&"'"
set rs=conn.execute(sql)
UerMoney=rs("UerMoney")
Point=rs("Point")
lotterytype=unescape(request("protype"))
ltype=request("caizhongdm")
if ltype="Ssc" then
ltype="CqSsc"
elseif ltype="Syxw" then
ltype="JxSyxw"
else
ltype1=ltype
end if
ltype1=UCase(ltype)
protype =lotterytype&unescape(request("wfname"))
prostate = "已生效"
lottery_id="0"
iszhuihao=request("iszhuihao")
allmoney=round(request("allmoney"),2)
if allmoney<0 then allmoney=allmoney*-1
single_m=request("single_m")
schedule=100
codes =request("codes")
ZjCut=request("ZjCut")
beishu=request("beishulistsuc")
beishulist=split(beishu,",")
expectlistsuc=request("expectlistsuc")
expectlistsuc=Replace(expectlistsuc,""&Year(date())&"",""&Right(Year(date()),2)&"")
expectlist=split(expectlistsuc,",")
'zhushu=request("single_zs")
'zhushusum=0
zhushusum=getzs_run(replace(codes,"[116]","[116]-,-,-,"),ltype)
response.Write("zhushusum:")
response.Write(zhushusum)
tbeishu1=split(beishu,",")
if ubound(tbeishu1)>1 then
	beishu=tbeishu1(0)
end if
escstr=unescape(request("escstr"))

if InStr(unescape(request("protype")),"快3")=0 then 
	zhushu=split(escstr,";")
	for j=0 to ubound(zhushu)
		zhushu1=split(zhushu(j),"|")
'		zhushusum=zhushusum+cint(zhushu1(1))
	next
	if ubound(tbeishu1)>1 then
		tje=zhushusum*2*cint(beishu)*(cint(ubound(tbeishu1)+1))
		tmf=request("allmoney")/zhushusum/cint(beishu)/(ubound(beishulist)+1)
	else 
		tje=zhushusum*2*cint(beishu)
		tmf=request("allmoney")/zhushusum/cint(beishu)
	end if
	else
	zhushu=split(escstr,"$")
'	zhushusum=ubound(zhushu)
	if ubound(tbeishu1)>1 then
		tje=zhushusum*2*cint(beishu)*(cint(ubound(tbeishu1)+1))
		tmf=request("allmoney")/zhushusum/cint(beishu)/(ubound(beishulist)+1)
	else 
		tje=zhushusum*2*cint(beishu)
		tmf=request("allmoney")/zhushusum/cint(beishu)
	end if	
end if
sql = "select * from KR_Lottery_Issue where Lottery_Name='"&lotterytype&"' ORDER BY endtime1 "
set rr = conn.execute(sql)
do while not rr.eof
endtime1=cdate(FormatDateTime(rr("endtime1"),3))
begintime=cdate(FormatDateTime(rr("begintime"),3))
qh1=rr("lottery_num")
if time()<endtime1 and time()>begintime then
qhh=right(year(now()),2)&Right(("00" & Month(now())),2)&Right(("00" & Day(now())),2)&"-"&qh1
end if
rr.movenext
loop
set rr = nothing
if expectlist(0)<>qhh then
%><err type="3" /><%else%><%
if Setting(21)<>0 and allmoney>round(Setting(21),2) then
%><err type="4" /><%else
BuyJF=allmoney*100
if ubound(split(expectlistsuc,","))<>0 then
iszhuihao = 1
else
iszhuihao = 0
end if
if round(request("allmoney"),2) > UerMoney then
%><err type="0" /><%
elseif tmf-2<>0 or tje-request("allmoney")<>0 OR int(request("allmoney"))<1 then
response.Write("tmf:"&tmf&"<br>")
response.Write("tje:"&tje&"<br>")
response.Write("allmoney:"&request("allmoney")&"<br>")
%><err type="5"/>
<% else

randomNum = replace(Format_Time(now(),7)&timer(),".","")&ltype

sql = "insert into KR_Buy(lotteryid,expect,protype,lotterytype,mainpaymoney,allmoney,onemoney,UserName,schedule,prostate,codes,beishu,istop,iszhuihao,stzhuihao,zhnum,mystate) values('"&randomNum&"','"&expectlistsuc&"','"&protype&"','"&lotterytype&"','"&allmoney&"','"&allmoney&"','"&allmoney&"','"&session("un")&"','"&schedule&"','"&prostate&"','"&codes&"','"&request("beishulistsuc")&"','"&ZjCut&"','"&iszhuihao&"','"&stzhuihao&"','"&zhnum&"',1)"

conn.execute(sql)

For ii=0 To 10
	isId = conn.execute("SELECT id FROM KR_Buy where lotteryid='"&randomNum&"'")(0) 
	if Not isNull(isId) OR isID <> "" Then Exit For
Next

if isNull(isId) OR isID = "" then
	err.clear
	conn.execute("DELETE KR_Buy WHERE lotteryid='"&randomNum&"'")
	response.write "<err type=""5""/></xml>"
	response.end
else
	response.write "<err type=""1""/>"
end if

lotter= left(replace(replace(expectlistsuc,"-",""),",",""),9)&ltype1&isId
'response.write(lotter)
zhnum=isId
sql = "update KR_Buy set lotteryid='"&lotter&"' , zhnum='"&zhnum&"' , lottery_id='"&lottery_id&"' where id='"&isId&"'"
conn.execute(sql)


sql = "Update KR_User set UerMoney=UerMoney-"&allmoney&",Money=Money-"&allmoney&" where username = '"&session("un")&"'"
conn.execute(sql)
sql="select * from KR_User where username='"&session("un")&"'"
set lsm=conn.execute(sql)
ye=lsm("UerMoney")
sql = "insert into KR_Bank_Back (RebateID,LotteryID,UserName,LotteryName,LotteryType,Expect,Allmoney,Mainpaymoney,back_money,b_after,b_befor,follows) values(1,'"&lotter&"','"&session("un")&"','"&lotterytype&"','"&protype&"','"&expectlistsuc&"','"&allmoney&"','"&allmoney&"','"&allmoney&"','"&ye&"','"&ye+allmoney&"','发起投注:"&LotteryType&lotter&"')"
conn.execute(sql)
if iszhuihao=1 then
for j=0 to ubound(beishulist)
k=k+Cint(beishulist(j))
next
for i=0 to ubound(expectlist)
bqmoney=allmoney*beishulist(i)/k
ZhuiHaoID=replace(expectlist(i),"-","")&ltype1&zhnum
sql = "insert into KR_ZhuiHao (LotteryID,Expect,Money,Status) values('"&lotter&"','"&expectlist(i)&"','"&bqmoney&"','等待生效')"
conn.execute(sql)
sql = "insert into KR_ZhuiHao_HM (LotteryID,ZhuiHaoID,UserName,Expect,BuyMoney) values('"&lotter&"','"&ZhuiHaoID&"','"&session("un")&"','"&expectlist(i)&"','"&bqmoney&"')"
conn.execute(sql)
next 
sql = "update KR_ZhuiHao set Status='生效成功' where LotteryID='"&lotter&"' and Expect='"&expectlist(0)&"'"
conn.execute(sql)
end if
'bz=0 '发起投注
'conn.execute("exec KR_Order '"&session("un")&"','"&protype&"',-1,"&allmoney&","&(0.00+ye)&",'"&lotter&"','"&lotterytype&lotter&"',"&bz)
end if
end if
end if
end if
%></xml>