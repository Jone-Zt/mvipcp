<!--#include file="../../Conn.asp"--><xml><%GetUrl()%><%if session("un") = "" then%><err type="-1" /><%else%><%

action = request("action")

select case action
case "add"  call add()
case "withdrawuser" call withdrawuser()
case "zhuihaostop" call zhuihaostop()
case else
	call add()
end select


sub add()

	lotteryid = request("pid")    '方案编号 

	if application(lotteryid)="" then application(lotteryid)=0

	if datediff("s",application(lotteryid),now())<5 then
		%><err type="-3" /><%
	else
		application(lotteryid)=now()
		adds()
		application(lotteryid)=""
	end if

end sub

Sub adds()

mynum = request("buynum")

lotteryid = request("pid")

onemoney = conn.execute("select onemoney from KR_Buy where lotteryid='"&lotteryid&"'")(0)

yue = mynum*onemoney

UserMoney = conn.execute("select UerMoney from KR_User where username='"&session("un")&"'")(0)


if yue > UserMoney then %>

<err type="0" /><%

else 

	set sh = conn.execute("select * from KR_Buy where lotteryid='"&lotteryid&"'")

	jindu = sh("anumber")-sh("hnumber")-mynum
	Expect = sh("Expect")
	expectlist = split(Expect,",")
	beishulist = split(sh("beishu"),",")
	isreturn = sh("isreturn")
	stzhuihao = sh("stzhuihao")
	schedule = sh("schedule")
	fqtime = Format_Time(sh("addtime"),2)
	lotterytype = sh("lotterytype")

	lotterytypeName = "重庆时时彩,河内五分彩,江西时时彩,天津时时彩,新疆时时彩,黑龙江时时彩,江西11选5,重庆11选5,广东11选5,江苏11选5,安徽11选5,上海11选5,辽宁11选5,浙江11选5,黑龙江11选5,福建11选5,11运夺金,吉林11选5,广西快3,天津11选5,湖北快3,江苏快3,安徽快3,吉林快3,河北11选5,新疆11选5,内蒙快3,广东快乐十分,湖南快乐十分,上海快3,河北快3,四川快乐12,时时乐,福建快3,辽宁快乐12,浙江快乐12,北京赛车"


	if Instr(lotterytypeName,lotterytype) > 0 then




		if lotterytype = "重庆时时彩" Or lotterytype = "河内五分彩" then
			qh = mid(Expect,8,3)
		else
			qh = mid(Expect,8,2)
		end if

		sql = "select * from KR_Lottery_Issue where Lottery_Name='"&lotterytype&"' and Lottery_Num='"&qh&"' ORDER BY endtime1 "
		set rr = conn.execute(sql)

		jssj=FormatDateTime(rr("endtime1"),3)

		endtime=CDate(fqtime&" "&jssj)

		'endtime = Format_Time(now(),2)&" "&Format_Time(rr("endtime1"),4)

		set rr = nothing
	else
		sql = "select * from KR_Lottery_Issue where Lottery_Name='"&lotterytype&"'"
		set rs = conn.execute(sql)
		endtime=rs("EndTime")
		set rs=nothing
	end if

dgendtime = time()

if endtime<dgendtime then %>
	<err type="2" /><% else
if isreturn = 1 then %>
	<err type = "3" /><% else
if stzhuihao=1 then %>
	<err type = "4" /><% else
if schedule>=100 then %>
	<err type = "6" /><% else
if jindu<0 then %>
	<err type="-2" /><% else %>
	<err type="1" /><%

if Setting(21)<>0 and yue>round(Setting(21),2) then
%><err type="5" /><% else

jd = round(100*mynum/sh("anumber"),2)

uermoney = round(mynum*sh("onemoney"),2)


if lotterytype="重庆时时彩" then
ltype="CQSSC"
elseif lotterytype="江西时时彩" then
ltype="JXSSC"
elseif lotterytype="天津时时彩" then
ltype="TJSSC"
elseif lotterytype="新疆时时彩" then
ltype="XJSSC"
elseif lotterytype="黑龙江时时彩" then
ltype="HLJSSC"
elseif lotterytype="江西11选5" then
ltype="JXSYXW"
elseif lotterytype="重庆11选5" then
ltype="CQSYXW"
elseif lotterytype="广东11选5" then
ltype="GDSYXW"
elseif lotterytype="江苏11选5" then
ltype="JSSYXW"
elseif lotterytype="安徽11选5" then
ltype="AHSYXW"
elseif lotterytype="上海11选5" then
ltype="SHSYXW"
elseif lotterytype="辽宁11选5" then
ltype="LLSYXW"
elseif lotterytype="浙江11选5" then
ltype="ZJSYXW"
elseif lotterytype="福建11选5" then
ltype="FJSYXW"
elseif lotterytype="黑龙江11选5" then
ltype="HLJSYXW"
elseif lotterytype="河北11选5" then
ltype="HEBSYXW"
elseif lotterytype="新疆11选5" then
ltype="XJSYXW"
elseif lotterytype="天津11选5" then
ltype="TJSYXW"
elseif lotterytype="吉林11选5" then
ltype="JLSYXW"
elseif lotterytype="11运夺金" then
ltype="SYYDJ"
elseif lotterytype="江苏快3" then
ltype="JSKS"
elseif lotterytype="安徽快3" then
ltype="AHKS"
elseif lotterytype="吉林快3" then
ltype="JLKS"
elseif lotterytype="福建快3" then
ltype="FJKS"
elseif lotterytype="内蒙快3" then
ltype="NMKS"
elseif lotterytype="广西快3" then
ltype="GXKS"
elseif lotterytype="湖北快3" then
ltype="HUBKS"
elseif lotterytype="河北快3" then
ltype="HEBKS"
elseif lotterytype="上海快3" then
ltype="SHKS"
elseif lotterytype="广东快乐十分" then
ltype="GDKLSF"
elseif lotterytype="湖南快乐十分" then
ltype="HNKLSF"
elseif lotterytype="时时乐" then
ltype="SSL"
elseif lotterytype="辽宁快乐12" then
ltype="LlKlse"
elseif lotterytype="浙江快乐12" then
ltype="ZjKlse"
elseif lotterytype="四川快乐12" then
ltype="ScKlse"
end if


if sh("iszhuihao")=1 then

for j=0 to ubound(beishulist)
	k = k+Cint(beishulist(j))
	next
for i=0 to ubound(expectlist)
bqmoney=sh("allmoney")*beishulist(i)/k
zhnum=sh("zhnum")+sh("allperson")
ZhuiHaoID=replace(expectlist(i),"-","")&ltype&zhnum
ZhuiHaoBuyMoney=uermoney/sh("allmoney")*bqmoney
sql = "insert into KR_ZhuiHao_HM (LotteryID,ZhuiHaoID,UserName,Expect,BuyMoney) values('"&lotteryid&"','"&ZhuiHaoID&"','"&session("un")&"','"&expectlist(i)&"','"&ZhuiHaoBuyMoney&"')"
conn.execute(sql)
next
end if

if jindu=0 then
sql = "update KR_Buy set hnumber=hnumber+"&mynum&",schedule=100,allperson=allperson+1,prostate='已生效' where lotteryid='"&lotteryid&"'"
conn.execute(sql)
sql = "update KR_User set uermoney=uermoney-"&uermoney&",money=money-"&uermoney&" where username = '"&session("un")&"'"
conn.execute(sql)
sql="select * from KR_User where username='"&session("un")&"'"
set lsm=conn.execute(sql)
ye=lsm("uermoney")
lsm.close()
set lsm=nothing
lotterytype=sh("lotterytype")
follows="参与合玩:"&lotterytype&lotteryid
sql = "insert into KR_Bank_Back (RebateID,LotteryID,UserName,LotteryName,LotteryType,Expect,nexus,hnumber,anumber,Allmoney,Mainpaymoney,back_money,b_after,b_befor,follows) values(1,'"&lotteryid&"','"&session("un")&"','"&sh("lotterytype")&"','"&sh("protype")&"','"&sh("expect")&"','1','"&mynum&"','"&sh("anumber")&"','"&sh("allmoney")&"','"&uermoney&"','"&uermoney&"','"&ye&"','"&ye+uermoney&"','"&follows&"')"
conn.execute(sql)
if sh("iszhuihao")=1 then
sql = "update KR_ZhuiHao set Status='生效成功' where LotteryID='"&lotteryid&"' and Expect='"&expectlist(0)&"'"
conn.execute(sql)
end if
else
sql = "update KR_Buy set hnumber=hnumber+"&mynum&",schedule=schedule+"&jd&",allperson=allperson+1 where lotteryid='"&lotteryid&"'"
conn.execute(sql)
sql = "update KR_User set uermoney=uermoney-"&uermoney&",money=money-"&uermoney&" where username = '"&session("un")&"'"
conn.execute(sql)
sql="select * from KR_User where username='"&session("un")&"'"
set lsm=conn.execute(sql)
ye=lsm("uermoney")
lsm.close()
set lsm=nothing
lotterytype=sh("lotterytype")
follows="参与合玩:"&lotterytype&lotteryid
sql = "insert into KR_Bank_Back (RebateID,LotteryID,UserName,LotteryName,LotteryType,Expect,nexus,hnumber,anumber,Allmoney,Mainpaymoney,back_money,b_after,b_befor,follows) values(1,'"&lotteryid&"','"&session("un")&"','"&sh("lotterytype")&"','"&sh("protype")&"','"&sh("expect")&"','1','"&mynum&"','"&sh("anumber")&"','"&sh("allmoney")&"','"&uermoney&"','"&uermoney&"','"&ye&"','"&ye+uermoney&"','"&follows&"')"
conn.execute(sql)
end if

'bz=2 '参加合玩
'conn.execute("exec KR_Order '"&session("un")&"','"&sh("protype")&"',-1,"&uermoney&","&(0.00+ye)&",'"&lotteryid&"','"&sh("lotterytype")&""&lotteryid&"',"&bz)
sh.close()
set sh=nothing
end if
end if
end if
end if
end if
end if
end if
End Sub

Sub withdrawuser()
id = request("cid")

sql = "select * from KR_Buy where id="&id
set rs = conn.execute(sql)
lotteryid = rs("lotteryid")
lotterytype = rs("lotterytype")
Expect = rs("Expect")
isreturn = rs("isreturn")
stzhuihao = rs("stzhuihao")
schedule = rs("schedule")
fqtime = Format_Time(rs("addtime"),2)
set rs=nothing
if lotterytype="重庆时时彩" or lotterytype="江西时时彩" or lotterytype="天津时时彩" or lotterytype="新疆时时彩" or lotterytype="黑龙江时时彩" or lotterytype="江西11选5" or lotterytype="重庆11选5" or lotterytype="广东11选5" or lotterytype="江苏11选5" or lotterytype="安徽11选5" or lotterytype="上海11选5" or lotterytype="辽宁11选5" or lotterytype="浙江11选5" or lotterytype="福建11选5" or lotterytype="黑龙江11选5" or lotterytype="河北11选5" or lotterytype="新疆11选5" or lotterytype="天津11选5" or lotterytype="吉林11选5" or lotterytype="11运夺金" or lotterytype="江苏快3" or lotterytype="安徽快3" or lotterytype="吉林快3" or lotterytype="福建快3" or lotterytype="内蒙快3" or lotterytype="广西快3" or lotterytype="湖北快3" or lotterytype="河北快3" or lotterytype="上海快3" or lotterytype="广东快乐十分" or lotterytype="湖南快乐十分" or lotterytype="时时乐" or lotterytype="辽宁快乐12" or lotterytype="浙江快乐12" or lotterytype="四川快乐12" then
if lotterytype="重庆时时彩" then
qh=mid(Expect,8,3)
else
qh=mid(Expect,8,2)
end if
sql = "select * from KR_Lottery_Issue where Lottery_Name='"&lotterytype&"' and Lottery_Num='"&qh&"' ORDER BY endtime1 "
set rr = conn.execute(sql)
jssj=FormatDateTime(rr("endtime1"),3)
endtime=CDate(fqtime&" "&jssj)
set rr = nothing
elseif lotterytype<>"北京赛车" then
sql = "select * from KR_Lottery_Issue where Lottery_Name='"&lotterytype&"'"
set rs = conn.execute(sql)
endtime=rs("EndTime")
end if
if lotterytype="北京赛车" then
jssj=FormatDateTime(pk10jz,3)
endtime=CDate(fqtime&" "&jssj)
end if
dgendtime=Now()
if endtime<dgendtime then
%><err type="0" /><%else%><%
if isreturn=1 then
%><err type="2" /><%else%><%
if stzhuihao=1 then
%><err type="3" /><%else%><%
if schedule=1 then
%><err type="4" /><%else%><err type="1" /><%
sql="select * from [KR_Buy] where id="&id
set rr=conn.execute(sql)
if not rr.eof then
do while not rr.eof 
sql = "update KR_Buy set isreturn=1,prostate='会员撤单',wininfo='会员撤单' where id="&id
conn.execute(sql)
'------------------------------
sql="select * from [KR_ZhuiHao] where lotteryid='"&rr("lotteryid")&"'"
set rsf=conn.execute(sql)  
do while not rsf.eof
sql = "update KR_ZhuiHao set Status='会员撤单',Remark='会员撤单' where lotteryid='"&rr("lotteryid")&"' and Status='等待生效'"
conn.execute(sql)
rsf.movenext
loop
set rsf=nothing
'------------------------------
sql= " select * from KR_bank_back where lotteryid='"&lotteryid&"' and lotteryname='"&lotterytype&"' and Issuccess<>'保底冻结'"
set tt=conn.execute(sql)  
'------------------------------
do while not tt.eof
djzj=0.00+tt("mainpaymoney")
sql = "update KR_User set money=money+"&djzj&",uermoney=uermoney+"&djzj&" where username='"&tt("username")&"'"
conn.execute(sql)
sql = "update KR_Bank_Back set isreturn=1,issuccess='会员撤单',back_state='已处理' where id="&tt("id")
conn.execute(sql)
sql="select * from KR_User where username='"&tt("username")&"'"
set lsm=conn.execute(sql)
ye=lsm("uermoney")
sql = "insert into KR_Bank_Back (LotteryID,UserName,LotteryName,LotteryType,Expect,nexus,issuccess,isreturn,hnumber,anumber,Allmoney,Mainpaymoney,back_money2,b_after,b_befor,back_state,follows) values('"&tt("lotteryid")&"','"&tt("username")&"','"&tt("LotteryName")&"','"&tt("LotteryType")&"','"&tt("expect")&"','"&tt("nexus")&"','会员撤单','1','"&tt("hnumber")&"','"&tt("anumber")&"','"&tt("allmoney")&"','"&tt("Mainpaymoney")&"','"&djzj&"','"&ye&"','"&ye+djzj&"','已处理','会员撤单:"&tt("LotteryType")&tt("lotteryid")&"')"
conn.execute(sql)
tt.movenext
loop
'------------------------------
sql="select * from [KR_bank_back] where lotteryid='"&lotteryid&"' and isreturn=0 and Issuccess='保底冻结'"
set yy=conn.execute(sql)  
do while not yy.eof
bdzj=0.00+rr("baodinum")*rr("onemoney")
sql = "update KR_User set uermoney=uermoney+"&bdzj&",icemoney=icemoney-"&bdzj&" where username='"&yy("username")&"'"
conn.execute(sql)
sql = "update KR_bank_back set isreturn=1,issuccess='会员撤单',back_state='已处理' where id="&yy("id")
conn.execute(sql)
sql="select * from KR_User where username='"&yy("username")&"'"
set lsm=conn.execute(sql)
ye=lsm("uermoney")
sql = "insert into KR_Bank_Back (LotteryID,UserName,LotteryName,LotteryType,Expect,nexus,issuccess,isreturn,hnumber,anumber,Allmoney,Mainpaymoney,back_money2,b_after,b_befor,back_state,follows) values('"&yy("lotteryid")&"','"&yy("username")&"','"&yy("LotteryName")&"','"&yy("LotteryType")&"','"&yy("expect")&"','"&yy("nexus")&"','会员撤单','1','"&yy("hnumber")&"','"&yy("anumber")&"','"&yy("allmoney")&"','"&yy("Mainpaymoney")&"','"&bdzj&"','"&ye&"','"&ye+bdzj&"','已处理','会员撤单:"&yy("LotteryType")&yy("lotteryid")&"')"
conn.execute(sql)
yy.movenext
loop
'---------------------------------------
rr.movenext
loop
end if
rr.close()
set yy=nothing
set tt=nothing
set rr=nothing
end if
end if
end if
end if
End Sub

Sub zhuihaostop()
id = request("cid")
sql = "select * from KR_Buy where id="&id
set rs = conn.execute(sql)
lotteryid = rs("lotteryid")
lotterytype = rs("lotterytype")
Expect = rs("Expect")
isreturn = rs("isreturn")
stzhuihao = rs("stzhuihao")
allmoney = rs("allmoney")
fqtime = Format_Time(rs("addtime"),2)
'---------------------------------------
set rsb=server.createobject("adodb.recordset")
sql = "select top 1000 LotteryID,Sum(Money) as Money from KR_ZhuiHao where Status='生效成功' and LotteryID='"&Lotteryid&"' GROUP BY LotteryID ORDER BY Money DESC"
rsb.open sql,conn,1,1
ljcp=formatnumber(rsb("Money"),2,-1)
set rsb=nothing
zhmoney=allmoney-ljcp
'---------------------------------------
if lotterytype="重庆时时彩" or lotterytype="江西时时彩" or lotterytype="天津时时彩" or lotterytype="新疆时时彩" or lotterytype="黑龙江时时彩" or lotterytype="江西11选5" or lotterytype="重庆11选5" or lotterytype="广东11选5" or lotterytype="江苏11选5" or lotterytype="安徽11选5" or lotterytype="上海11选5" or lotterytype="辽宁11选5" or lotterytype="浙江11选5" or lotterytype="福建11选5" or lotterytype="黑龙江11选5" or lotterytype="河北11选5" or lotterytype="新疆11选5" or lotterytype="天津11选5" or lotterytype="吉林11选5" or lotterytype="11运夺金" or lotterytype="江苏快3" or lotterytype="安徽快3" or lotterytype="吉林快3" or lotterytype="福建快3" or lotterytype="内蒙快3" or lotterytype="广西快3" or lotterytype="湖北快3" or lotterytype="河北快3" or lotterytype="上海快3" or lotterytype="广东快乐十分" or lotterytype="湖南快乐十分" or lotterytype="时时乐" or lotterytype="辽宁快乐12" or lotterytype="浙江快乐12" or lotterytype="四川快乐12" then
if lotterytype="重庆时时彩" then
qh=mid(right(expect,10),8,3)
else
qh=mid(right(expect,9),8,2)
end if
sql = "select * from KR_Lottery_Issue where Lottery_Name='"&lotterytype&"' and Lottery_Num='"&qh&"' ORDER BY endtime1 "
set rr = conn.execute(sql)
jssj=FormatDateTime(rr("endtime1"),3)
endtime=CDate(fqtime&" "&jssj)
set rr = nothing
else
sql = "select * from KR_Lottery_Issue where Lottery_Name='"&lotterytype&"'"
set rs = conn.execute(sql)
endtime=rs("EndTime")
dgendtime=Now()
end if
if endtime<dgendtime then
%><err type="0" /><%else%><%
if isreturn=1 then
%><err type="2" /><%else%><%
if stzhuihao=1 then
%><err type="3" /><%else%><err type="1" /><%
sql="select * from [KR_Buy] where id="&id
set rr=conn.execute(sql)
if not rr.eof then
do while not rr.eof 
'------------------------------
sql = "update KR_Buy set stzhuihao=1 where id="&id
conn.execute(sql)
'------------------------------
sql="select * from [KR_ZhuiHao] where lotteryid='"&rr("lotteryid")&"'"
set rsf=conn.execute(sql)  
do while not rsf.eof
sql = "update KR_ZhuiHao set Status='停止追号',Remark='停止追号' where lotteryid='"&rr("lotteryid")&"' and Status='等待生效'"
conn.execute(sql)
rsf.movenext
loop
set rsf=nothing
'------------------------------
sql = "select * from KR_Bank_Back where lotteryid='"&lotteryid&"' and (follows like '%发起%' or follows like '%参与%')"
set tt = conn.execute(sql)
do while not tt.eof
anumber=tt("anumber")
hnumber=tt("hnumber")
szbl=tt("hnumber")/tt("anumber")
yrgje=zhmoney*szbl
sql = "update KR_User set money=money+"&yrgje&",uermoney=uermoney+"&yrgje&" where username='"&tt("username")&"'"
conn.execute(sql)
sql="select * from KR_User where username='"&tt("username")&"'"
set lsm=conn.execute(sql)
ye=lsm("uermoney")
if yrgje>0 then
sql = "insert into KR_Bank_Back (LotteryID,UserName,LotteryName,LotteryType,Expect,nexus,issuccess,isreturn,hnumber,anumber,Allmoney,Mainpaymoney,back_money2,b_after,b_befor,back_state,follows) values('"&tt("lotteryid")&"','"&tt("username")&"','"&tt("LotteryName")&"','"&tt("LotteryType")&"','"&tt("expect")&"','"&tt("nexus")&"','停止追号','1','"&tt("hnumber")&"','"&tt("anumber")&"','"&tt("allmoney")&"','"&tt("Mainpaymoney")&"','"&yrgje&"','"&ye&"','"&ye+yrgje&"','已处理','停止追号:"&tt("LotteryType")&tt("lotteryid")&"')"
conn.execute(sql)
end if


'bz=-8 '撤单
'conn.execute("exec KR_Order '"&rs("username")&"','"&rs("protype")&"',"&rs("mainpaymoney")&","&rs("mainpaymoney")&","&(0.00+ye)&",'"&rs("lotteryid")&"','"&rs("lotterytype")&rs("expect")&"',"&bz)

tt.movenext
loop
'------------------------------
rr.movenext
loop
end if
set tt=nothing
set rr=nothing
end if
end if
end if
End Sub
end if
%></xml>