<!--#include file="../../Conn.asp"-->
<%GetUrl()%><xml><%if session("un") = "" then%><err type="-1" /><%else%><%
sql="select * from KR_User where username='"&session("un")&"'"
set rs=conn.execute(sql)
UerMoney=rs("UerMoney")
Point=rs("Point")
if request("baodiCount")="0" or request("baodiCount")="" then
buymoney=request("allmoney")/request("allmoney")*request("buyCount")
else
buymoney=(request("allmoney")/request("allmoney")*request("baodiCount"))+(request("allmoney")/request("allmoney")*request("buyCount"))
end if
protype1=unescape(request("protype"))
lotterytype=protype1
ltype=request("caizhongdm")
protype = protype1&unescape(request("wfname"))
prostate = "未生效"
lottery_id="0"
ishm=1
iszhuihao=request("iszhuihao")
allmoney=request("allmoney")
anumber=allmoney
onemoney =1
hnumber=request("buyCount")
mainpaymoney =hnumber
schedule=round(100*hnumber/anumber,2)
codes=unescape(request("codes"))
beishu=request("beishulistsuc")
expectlistsuc=request("expectlistsuc")
isbaodi=request("isbaodi")
baodinum=request("baodiCount")
baodimoney=baodinum
ZjCut=request("ZjCut")
object=unescape(request("buyuser"))
tcSelect=request("tc_money")
isshow=request("isopen")
isthew=request("zgdx")
caseInfo=unescape(request("caseInfo"))


zhushusum=0
escstr=unescape(request("escstr"))
	zhushu=split(escstr,";")
	for j=0 to ubound(zhushu)
		zhushu1=split(zhushu(j),"|")
		if ltype="PLS" or ltype="SD" then
		zhushusum=zhushusum+cint(zhushu1(1))
		else
		zhushusum=zhushusum+cint(zhushu1(0))
		end if
	next
	if unescape(request("protype"))="大乐透" and cint(request("zuijia"))=1  then
	tje=zhushusum*2*cint(beishu)+cint(request("single_zs"))
	tmf=tje/cint(request("single_zs"))/cint(beishu)
	tmf=tmf-1
	else
	tje=zhushusum*2*cint(beishu)
	tmf=tje/cint(request("single_zs"))/cint(beishu)
	end if
if hnumber-anumber=0 then
mystate=1
else
mystate=0
end if
isjz=request("zuijia")
BuyJF=buymoney*100
sql = "select * from KR_Lottery_Issue where Lottery_Name='"&lotterytype&"'"
set rs = conn.execute(sql)
dgendtime=rs("EndTime")
dgqishu=rs("Lottery_Num")
if dgqishu<>expectlistsuc or dgendtime<now() then
%><err type="-2" /><%else
if UerMoney < buymoney then
%><err type="0" /><%
elseif tmf<>2 or tje<>cint(request("allmoney")) OR int(buymoney)<1 then
%><err type="5"/><% else

randomNum = replace(Format_Time(now(),7)&timer(),".","")&ltype

sql = "insert into KR_Buy(lotteryid,expect,protype,lotterytype,mainpaymoney,allmoney,anumber,onemoney,UserName,hnumber,schedule,prostate,codes,beishu,isbaodi,baodinum,object,zhnum,isshow,isthew,caseInfo,tcSelect,mystate,isjz,ishm) values('"&randomNum&"','"&expectlistsuc&"','"&protype&"','"&lotterytype&"','"&mainpaymoney&"','"&allmoney&"','"&anumber&"','"&onemoney&"','"&session("un")&"','"&hnumber&"','"&schedule&"','"&prostate&"','"&codes&"','"&beishu&"','"&isbaodi&"','"&baodinum&"','"&object&"','"&zhnum&"','"&isshow&"','"&isthew&"','"&caseInfo&"','"&tcSelect&"','"&mystate&"','"&isjz&"','"&ishm&"')"
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

lotter=expectlistsuc&ltype&isID
zhnum=isID

sql = "update KR_Buy set lotteryid='"&lotter&"',zhnum='"&zhnum&"',lottery_id='"&lottery_id&"' where id='"&isID&"'"
conn.execute(sql)

sql = "Update KR_User set UerMoney=UerMoney-"&mainpaymoney&",Money=Money-"&mainpaymoney&" where username = '"&session("un")&"'"
conn.execute(sql)
sql="select * from KR_User where username='"&session("un")&"'"
set lsm=conn.execute(sql)
ye=lsm("UerMoney")
sql = "insert into KR_Bank_Back (LotteryID,UserName,LotteryName,LotteryType,Expect,hnumber,anumber,Allmoney,Mainpaymoney,back_money,b_after,b_befor,follows) values('"&lotter&"','"&session("un")&"','"&lotterytype&"','"&protype&"','"&expectlistsuc&"','"&hnumber&"','"&anumber&"','"&allmoney&"','"&mainpaymoney&"','"&Mainpaymoney&"','"&ye&"','"&ye+Mainpaymoney&"','发起合玩:"&LotteryType&lotter&"')"
conn.execute(sql)
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
%></xml>
