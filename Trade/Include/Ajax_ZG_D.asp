<!--#include file="../../Conn.asp"-->
<%GetUrl()%><xml><%if session("un") = "" then%><err type="-1" /><%else%><%
sql="select * from KR_User where username='"&session("un")&"'"
set rs=conn.execute(sql)
UerMoney=rs("UerMoney")
Point=rs("Point")
protype1=unescape(request("protype"))
lotterytype=protype1
protype =protype1&unescape(request("wfname"))
ltype=request("caizhongdm")
if ltype="Ssc" then
ltype="CqSsc"
elseif ltype="Syxw" then
ltype="JxSyxw"
else
ltype1=ltype
end if
ltype1=UCase(ltype)
prostate = "已生效"
lottery_id=""
allmoney=round(request("allmoney"),2)
single_m=request("single_m")
schedule=100
codes=request("codes")
beishu=request("beishulistsuc")
beishu = split(beishu,",")
expectlistsuc=request("expectlistsuc")
expectlistsuc = split(expectlistsuc,",")
ZjCut=request("ZjCut")
BuyJF=allmoney*100
sql = "select * from KR_Lottery_Issue where Lottery_Name='"&protype1&"'"
set rs = conn.execute(sql)
dgendtime=rs("EndTime")
dgqishu=rs("Lottery_Num")
escstr=request("escstr")
isjz=request("zuijia")
	zhushusum=0
	tbeishu1=split(request("beishulistsuc"),",")
	if ubound(tbeishu1)>1 then
		beishuyz=tbeishu1(0)
	end if
	zhushu=split(escstr,";")
	for j=0 to ubound(zhushu)
		zhushu1=split(zhushu(j),"|")
			if ltype="PLS" or ltype="SD" then
			zhushusum=zhushusum+cint(zhushu1(1))
			else
			zhushusum=zhushusum+zhushu1(0)
			end if
	next
	
	mzje=2
	if isjz=1 then mzje=3
	if ubound(tbeishu1)>1 then
	tje=zhushusum*mzje*cint(beishuyz)
	tmf=cint(request("allmoney"))/zhushusum/cint(beishuyz)
	else 
	tje=zhushusum*mzje*cint(request("beishulistsuc"))
	tmf=request("allmoney")/zhushusum/request("beishulistsuc")
	end if

if ubound(expectlistsuc) > 0 then
	tje = tje * (ubound(expectlistsuc)+1)
	tmf = tmf / (ubound(expectlistsuc)+1)
end if

if dgqishu<>expectlistsuc(0) or dgendtime<now() then
%><err type="-2"/><%else%><%
if round(request("allmoney"),2) > UerMoney then
%><err type="0" /><%
elseif (isjz=0 and tmf<>2) or (isjz=1 and tmf<>3) or tje<>cint(request("allmoney")) OR int(request("allmoney"))<1 then

%><err type="5"/>
<% else

for i=0 to ubound(expectlistsuc)
BuyMoney=allmoney
z=z+1
if z=1 then 
	if ubound(expectlistsuc)>0 then
stzhuihao=1
else
stzhuihao=0
end if
end if

randomNum = replace(Format_Time(now(),7)&timer(),".","")&ltype

sql = "insert into KR_Buy(lotteryid,expect,protype,lotterytype,mainpaymoney,allmoney,onemoney,UserName,schedule,prostate,codes,beishu,istop,iszhuihao,stzhuihao,wczhuihao,zhnum,isjz,mystate) values('"&randomNum&"','"&expectlistsuc(i)&"','"&protype&"','"&lotterytype&"','"&BuyMoney&"','"&BuyMoney&"','"&BuyMoney&"','"&session("un")&"','"&schedule&"','"&prostate&"','"&codes&"','"&beishu(i)&"','"&ZjCut&"','"&iszhuihao&"','"&stzhuihao&"','"&i&"','"&zhnum&"','"&isjz&"',1)"
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

lotter=expectlistsuc(i)&ltype1&isId

if z=1 then
	zhnum=isId
end if

sql = "update KR_Buy set lotteryid='"&lotter&"' , zhnum='"&zhnum&"' , lottery_id='"&lottery_id&"' where id='"&isId&"'"
conn.execute(sql)

sql = "Update KR_User set UerMoney=UerMoney-"&BuyMoney&",Money=Money-"&BuyMoney&" where username = '"&session("un")&"'"
conn.execute(sql)

sql="select * from KR_User where username='"&session("un")&"'"
set lsm=conn.execute(sql)
ye=lsm("UerMoney")
b_after=ye
follows="发起投注:"&LotteryType&lotter
sql = "insert into KR_Bank_Back (LotteryID,UserName,LotteryName,LotteryType,Expect,Allmoney,Mainpaymoney,back_money,b_after,b_befor,follows) values('"&lotter&"','"&session("un")&"','"&lotterytype&"','"&protype&"','"&expectlistsuc(i)&"','"&BuyMoney&"','"&BuyMoney&"','"&BuyMoney&"','"&b_after&"','"&b_after+BuyMoney&"','"&follows&"')"
conn.execute(sql)
next
'bz=0 '发起投注
'conn.execute("exec KR_Order '"&session("un")&"','"&protype&"',-1,"&BuyMoney&","&(0.00+ye)&",'"&lotter&"','"&lotterytype&lotter&"',"&bz)
end if
end if
end if
%></xml>