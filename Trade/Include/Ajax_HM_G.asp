<!--#include file="../../Conn.asp"-->
<!--#include file="zs.javascript.asp"-->
<%GetUrl()%><xml><%if session("un") = "" then%><err type="-1" /><%else%><%
sql="select * from KR_User where username='"&session("un")&"'"
set rs=conn.execute(sql)
UerMoney=rs("UerMoney")
Point=rs("Point")


if request("baodiCount")="0" or request("baodiCount")="" then '保底份数
	buymoney=request("allmoney")/request("allmoney")*request("buyCount")'投注/所有份数*投注份数
else
	buymoney=(request("allmoney")/request("allmoney")*request("baodiCount"))+(request("allmoney")/request("allmoney")*request("buyCount"))
end if


lotterytype=unescape(request("protype"))
LottType=request("caizhongdm")

if LottType="Ssc" then
LottType="CqSsc"
elseif LottType="Syxw" then
LottType="JxSyxw"
else
LottType=LottType
end if
ltype=UCase(LottType)
protype =lotterytype&unescape(request("wfname"))'玩法
prostate = "未生效"
lottery_id="0"
ishm=1
allmoney=request("allmoney")
anumber=request("anumber")
If int(anumber) > int(allmoney) Then tp5 = 1
onemoney = request("onemoney")

hnumber = request("buyCount")
If int(hnumber) > int(allmoney) Then tp5 = 1
if anumber<0 then anumber=anumber*-1
if onemoney<0 then onemoney=onemoney*-1
if hnumber<0 then hnumber=hnumber*-1
mainpaymoney = round((hnumber*onemoney),2)
schedule = round(100*hnumber/anumber,2)
cpztjd = schedule
baodiCount = request("baodiCount")
if baodiCount<>"0" and baodiCount<>"" then
	if baodiCount > 0 Then 
		hnumberbd=hnumber+int(baodiCount)
		cpztjd=round(100*hnumberbd/anumber,2)
		buymoney = hnumberbd*allmoney/anumber
	else
		tp5 = 1
	end if
end if
if buymoney>allmoney Then tp5 = 1
if cpztjd>=90 then
prostate = "已生效"
Status = "生效成功"
end if
codes=unescape(request("codes"))
ZjCut=request("ZjCut")
iszhuihao=request("iszhuihao")
beishu=request("beishulistsuc")
beishulist=split(beishu,",")
expectlistsuc=request("expectlistsuc")
expectlistsuc=Replace(expectlistsuc,""&Year(date())&"",""&Right(Year(date()),2)&"")
expectlist=split(expectlistsuc,",")

if Setting(21)<>0 then
beishusum=eval(join(beishulist,"+"))
for i=1 to ubound(expectlist)
expect=expectlist(i)
beishu=beishulist(i)
money=buymoney*beishu/beishusum
username=session("un")
if eval(money&"+"&gettzmoney(lotterytype,expect,username)&">"&Setting(21)) then
msg21="第"&expect&"期总"&setting(56)&"超过"&Setting(21)
exit for
end if
next
end if

function gettzmoney(lotterytype_,expect_,usernames_)
gettzmoney=0
gettzmoney_=0
set rs_=server.createobject("adodb.recordset")
sql_="select * from KR_Buy where lotterytype='"&lotterytype_&"' and expect like '%"&expect_&"%'"
rs_.open sql_,conn,1,3
if not (rs_.bof and rs_.eof) then
do while not rs_.eof
iszhuihao_=rs_("iszhuihao")
ishm_=rs_("ishm")
expectlist_=rs_("expect")
beishulist_=rs_("beishu")
lotteryid_=rs_("lotteryid")
allmoney_=rs_("allmoney")

if iszhuihao_=1 then
sql="select * from KR_ZhuiHao where lotteryid = '"&LotteryID_&"' and expect = '"&expect_&"'"
irs_=conn.execute(sql)
moneys_=irs_("money")
else
moneys_=rs_("allmoney")
end if

if ishm_=1 then
hmsql_="select sum(back_money)-sum(back_money2) as allmoney from (select * from KR_Bank_Back where username = '"&usernames_&"' and lotteryid = '"&lotteryid_&"') tb where  (follows like '%发起%' or follows like '%参与%' or follows like '%保底冻结%' or follows like '%保底返回%')"
allmoney_=conn.execute(hmsql_)("allmoney")
else
allmoney_=rs_("allmoney")
end if
money_=moneys_*(allmoney_/rs_("allmoney"))
'response.write"<br>money"&money_
gettzmoney_=gettzmoney_+money_
rs_.movenext
loop
end if
gettzmoney=gettzmoney_
end function
'zhushusum=0
zhushusum=getzs_run(replace(codes,"[116]","[116]-,-,-,"),ltype)
'response.Write("zhushusum:"&zhushusum&"<br>")
'response.End()
escstr=unescape(request("escstr"))
if InStr(unescape(request("protype")),"快3")=0 then 
zhushu=split(escstr,";")
for j=0 to ubound(zhushu)
	zhushu1=split(zhushu(j),"|")
	if unescape(request("protype"))="15选5" then
'	zhushusum=zhushusum+cint(zhushu1(0))
	else 
'	zhushusum=zhushusum+cint(zhushu1(1))
	end if
next
tje=zhushusum*2*cint(beishu)
tmf=request("allmoney")/zhushusum/cint(beishu)
else
	zhushu=split(escstr,"$")
'	zhushusum=ubound(zhushu)
	tje=zhushusum*2*cint(beishu)
	tmf=request("allmoney")/zhushusum/cint(beishu)
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
%><err type="3" aa=<%=expectlist(0)%> bb=<%=qhh%> /><%else%><%
if Setting(21)<>0 and msg21<>"" then
%><err type="4" /><%else
BuyJF=mainpaymoney*100
isbaodi=request("isbaodi")
baodinum=request("baodiCount")
baodimoney=baodinum*onemoney
object=unescape(request("buyuser"))
tcSelect=request("tc")
isshow=request("isopen")
isthew=request("zgdx")
caseInfo=unescape(request("caseInfo"))
if hnumber-anumber=0 then
mystate=1
else
mystate=0
end if
if ubound(split(expectlistsuc,","))<>0 then
iszhuihao = 1
else
iszhuihao = 0
end if
BuyJF=buymoney*100
IsBuyMoney = (onemoney*(hnumber*1+request("baodiCount"))) 
if UerMoney < IsBuyMoney then
%><err type="0" /><%
elseif tmf-2<>0 or tje-request("allmoney")<>0 OR int(IsBuyMoney)<1 or tp5 = 1 then
%><err type="5" /><% else


randomNum = replace(Format_Time(now(),7)&timer(),".","")&ltype

sql = "insert into KR_Buy(lotteryid,expect,protype,lotterytype,mainpaymoney,allmoney,anumber,onemoney,UserName,hnumber,schedule,prostate,codes,beishu,istop,iszhuihao,stzhuihao,isbaodi,baodinum,object,zhnum,isshow,isthew,caseInfo,tcSelect,mystate,ishm) values('"&randomNum&"','"&expectlistsuc&"','"&protype&"','"&lotterytype&"','"&mainpaymoney&"','"&allmoney&"','"&anumber&"','"&onemoney&"','"&session("un")&"','"&hnumber&"','"&schedule&"','"&prostate&"','"&codes&"','"&beishu&"','"&ZjCut&"','"&iszhuihao&"','"&stzhuihao&"','"&isbaodi&"','"&baodinum&"','"&object&"','"&zhnum&"','"&isshow&"','"&isthew&"','"&caseInfo&"','"&tcSelect&"','"&mystate&"','"&ishm&"')"
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

lotter= left(replace(expectlistsuc,"-",""),8)&ltype&isId
zhnum=isId

upAction = "lotteryid='"&lotter&"',zhnum='"&zhnum&"'"

if schedule=100 then
	upAction = upAction&",prostate='已生效'"
end if

sql = "update KR_Buy set "&upAction&" where id='"&zhnum&"'"
conn.execute(sql)

sql = "Update KR_User set UerMoney=UerMoney-"&mainpaymoney&",Money=Money-"&mainpaymoney&" where username = '"&session("un")&"'"
conn.execute(sql)
sql="select * from KR_User where username='"&session("un")&"'"
set lsm=conn.execute(sql)
ye=lsm("UerMoney")

sql = "insert into KR_Bank_Back (LotteryID,RebateID,UserName,LotteryName,LotteryType,Expect,hnumber,anumber,Allmoney,Mainpaymoney,back_money,b_after,b_befor,follows) values('"&lotter&"','1','"&session("un")&"','"&lotterytype&"','"&protype&"','"&expectlistsuc&"','"&hnumber&"','"&anumber&"','"&allmoney&"','"&mainpaymoney&"','"&Mainpaymoney&"','"&ye&"','"&ye+Mainpaymoney&"','发起合玩:"&LotteryType&lotter&"')"

Response.write(sql)

conn.execute(sql)
if iszhuihao=1 then
for j=0 to ubound(beishulist)
k=k+Cint(beishulist(j))
next
for i=0 to ubound(expectlist)
bqmoney=allmoney*beishulist(i)/k
ZhuiHaoID=replace(expectlist(i),"-","")&ltype&zhnum
ZhuiHaoBuyMoney=mainpaymoney/allmoney*bqmoney
sql = "insert into KR_ZhuiHao (LotteryID,Expect,Money,Status) values('"&lotter&"','"&expectlist(i)&"','"&bqmoney&"','等待生效')"
conn.execute(sql)
sql = "insert into KR_ZhuiHao_HM (LotteryID,ZhuiHaoID,UserName,Expect,BuyMoney) values('"&lotter&"','"&ZhuiHaoID&"','"&session("un")&"','"&expectlist(i)&"','"&ZhuiHaoBuyMoney&"')"
conn.execute(sql)
next 
if schedule=100 then
sql = "update KR_ZhuiHao set Status='生效成功' where LotteryID='"&lotter&"' and Expect='"&expectlist(0)&"'"
conn.execute(sql)
end if
end if
if isbaodi=1 then
sql = "Update KR_User set UerMoney=UerMoney-"&baodimoney&",IceMoney=IceMoney+"&baodimoney&" where username = '"&session("un")&"'"
conn.execute(sql)
sql="select * from KR_User where username='"&session("un")&"'"
set rst=conn.execute(sql)
yee=rst("UerMoney")
sql = "insert into KR_Bank_Back (LotteryID,UserName,LotteryName,LotteryType,Expect,Issuccess,hnumber,anumber,Allmoney,Mainpaymoney,back_money,b_after,b_befor,follows) values('"&lotter&"','"&session("un")&"','"&lotterytype&"','"&protype&"','"&expectlistsuc&"','保底冻结','"&baodinum&"','"&anumber&"','"&allmoney&"','"&baodimoney&"','"&baodimoney&"','"&yee&"','"&yee+baodimoney&"','保底冻结:"&LotteryType&lotter&"')"
conn.execute(sql)
end if
'bz=ishm '发起合玩
'conn.execute("exec KR_Order '"&session("un")&"','"&protype&"',-1,"&mainpaymoney&","&(0.00+ye)&",'"&lotter&"','"&lotterytype&lotter&"',"&bz)
end if
end if


end if
end if
%></xml>