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

	lotteryid = request("pid")    '������� 

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

	lotterytypeName = "����ʱʱ��,������ֲ�,����ʱʱ��,���ʱʱ��,�½�ʱʱ��,������ʱʱ��,����11ѡ5,����11ѡ5,�㶫11ѡ5,����11ѡ5,����11ѡ5,�Ϻ�11ѡ5,����11ѡ5,�㽭11ѡ5,������11ѡ5,����11ѡ5,11�˶��,����11ѡ5,������3,���11ѡ5,������3,���տ�3,���տ�3,���ֿ�3,�ӱ�11ѡ5,�½�11ѡ5,���ɿ�3,�㶫����ʮ��,���Ͽ���ʮ��,�Ϻ���3,�ӱ���3,�Ĵ�����12,ʱʱ��,������3,��������12,�㽭����12,��������"


	if Instr(lotterytypeName,lotterytype) > 0 then




		if lotterytype = "����ʱʱ��" Or lotterytype = "������ֲ�" then
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


if lotterytype="����ʱʱ��" then
ltype="CQSSC"
elseif lotterytype="����ʱʱ��" then
ltype="JXSSC"
elseif lotterytype="���ʱʱ��" then
ltype="TJSSC"
elseif lotterytype="�½�ʱʱ��" then
ltype="XJSSC"
elseif lotterytype="������ʱʱ��" then
ltype="HLJSSC"
elseif lotterytype="����11ѡ5" then
ltype="JXSYXW"
elseif lotterytype="����11ѡ5" then
ltype="CQSYXW"
elseif lotterytype="�㶫11ѡ5" then
ltype="GDSYXW"
elseif lotterytype="����11ѡ5" then
ltype="JSSYXW"
elseif lotterytype="����11ѡ5" then
ltype="AHSYXW"
elseif lotterytype="�Ϻ�11ѡ5" then
ltype="SHSYXW"
elseif lotterytype="����11ѡ5" then
ltype="LLSYXW"
elseif lotterytype="�㽭11ѡ5" then
ltype="ZJSYXW"
elseif lotterytype="����11ѡ5" then
ltype="FJSYXW"
elseif lotterytype="������11ѡ5" then
ltype="HLJSYXW"
elseif lotterytype="�ӱ�11ѡ5" then
ltype="HEBSYXW"
elseif lotterytype="�½�11ѡ5" then
ltype="XJSYXW"
elseif lotterytype="���11ѡ5" then
ltype="TJSYXW"
elseif lotterytype="����11ѡ5" then
ltype="JLSYXW"
elseif lotterytype="11�˶��" then
ltype="SYYDJ"
elseif lotterytype="���տ�3" then
ltype="JSKS"
elseif lotterytype="���տ�3" then
ltype="AHKS"
elseif lotterytype="���ֿ�3" then
ltype="JLKS"
elseif lotterytype="������3" then
ltype="FJKS"
elseif lotterytype="���ɿ�3" then
ltype="NMKS"
elseif lotterytype="������3" then
ltype="GXKS"
elseif lotterytype="������3" then
ltype="HUBKS"
elseif lotterytype="�ӱ���3" then
ltype="HEBKS"
elseif lotterytype="�Ϻ���3" then
ltype="SHKS"
elseif lotterytype="�㶫����ʮ��" then
ltype="GDKLSF"
elseif lotterytype="���Ͽ���ʮ��" then
ltype="HNKLSF"
elseif lotterytype="ʱʱ��" then
ltype="SSL"
elseif lotterytype="��������12" then
ltype="LlKlse"
elseif lotterytype="�㽭����12" then
ltype="ZjKlse"
elseif lotterytype="�Ĵ�����12" then
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
sql = "update KR_Buy set hnumber=hnumber+"&mynum&",schedule=100,allperson=allperson+1,prostate='����Ч' where lotteryid='"&lotteryid&"'"
conn.execute(sql)
sql = "update KR_User set uermoney=uermoney-"&uermoney&",money=money-"&uermoney&" where username = '"&session("un")&"'"
conn.execute(sql)
sql="select * from KR_User where username='"&session("un")&"'"
set lsm=conn.execute(sql)
ye=lsm("uermoney")
lsm.close()
set lsm=nothing
lotterytype=sh("lotterytype")
follows="�������:"&lotterytype&lotteryid
sql = "insert into KR_Bank_Back (RebateID,LotteryID,UserName,LotteryName,LotteryType,Expect,nexus,hnumber,anumber,Allmoney,Mainpaymoney,back_money,b_after,b_befor,follows) values(1,'"&lotteryid&"','"&session("un")&"','"&sh("lotterytype")&"','"&sh("protype")&"','"&sh("expect")&"','1','"&mynum&"','"&sh("anumber")&"','"&sh("allmoney")&"','"&uermoney&"','"&uermoney&"','"&ye&"','"&ye+uermoney&"','"&follows&"')"
conn.execute(sql)
if sh("iszhuihao")=1 then
sql = "update KR_ZhuiHao set Status='��Ч�ɹ�' where LotteryID='"&lotteryid&"' and Expect='"&expectlist(0)&"'"
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
follows="�������:"&lotterytype&lotteryid
sql = "insert into KR_Bank_Back (RebateID,LotteryID,UserName,LotteryName,LotteryType,Expect,nexus,hnumber,anumber,Allmoney,Mainpaymoney,back_money,b_after,b_befor,follows) values(1,'"&lotteryid&"','"&session("un")&"','"&sh("lotterytype")&"','"&sh("protype")&"','"&sh("expect")&"','1','"&mynum&"','"&sh("anumber")&"','"&sh("allmoney")&"','"&uermoney&"','"&uermoney&"','"&ye&"','"&ye+uermoney&"','"&follows&"')"
conn.execute(sql)
end if

'bz=2 '�μӺ���
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
if lotterytype="����ʱʱ��" or lotterytype="����ʱʱ��" or lotterytype="���ʱʱ��" or lotterytype="�½�ʱʱ��" or lotterytype="������ʱʱ��" or lotterytype="����11ѡ5" or lotterytype="����11ѡ5" or lotterytype="�㶫11ѡ5" or lotterytype="����11ѡ5" or lotterytype="����11ѡ5" or lotterytype="�Ϻ�11ѡ5" or lotterytype="����11ѡ5" or lotterytype="�㽭11ѡ5" or lotterytype="����11ѡ5" or lotterytype="������11ѡ5" or lotterytype="�ӱ�11ѡ5" or lotterytype="�½�11ѡ5" or lotterytype="���11ѡ5" or lotterytype="����11ѡ5" or lotterytype="11�˶��" or lotterytype="���տ�3" or lotterytype="���տ�3" or lotterytype="���ֿ�3" or lotterytype="������3" or lotterytype="���ɿ�3" or lotterytype="������3" or lotterytype="������3" or lotterytype="�ӱ���3" or lotterytype="�Ϻ���3" or lotterytype="�㶫����ʮ��" or lotterytype="���Ͽ���ʮ��" or lotterytype="ʱʱ��" or lotterytype="��������12" or lotterytype="�㽭����12" or lotterytype="�Ĵ�����12" then
if lotterytype="����ʱʱ��" then
qh=mid(Expect,8,3)
else
qh=mid(Expect,8,2)
end if
sql = "select * from KR_Lottery_Issue where Lottery_Name='"&lotterytype&"' and Lottery_Num='"&qh&"' ORDER BY endtime1 "
set rr = conn.execute(sql)
jssj=FormatDateTime(rr("endtime1"),3)
endtime=CDate(fqtime&" "&jssj)
set rr = nothing
elseif lotterytype<>"��������" then
sql = "select * from KR_Lottery_Issue where Lottery_Name='"&lotterytype&"'"
set rs = conn.execute(sql)
endtime=rs("EndTime")
end if
if lotterytype="��������" then
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
sql = "update KR_Buy set isreturn=1,prostate='��Ա����',wininfo='��Ա����' where id="&id
conn.execute(sql)
'------------------------------
sql="select * from [KR_ZhuiHao] where lotteryid='"&rr("lotteryid")&"'"
set rsf=conn.execute(sql)  
do while not rsf.eof
sql = "update KR_ZhuiHao set Status='��Ա����',Remark='��Ա����' where lotteryid='"&rr("lotteryid")&"' and Status='�ȴ���Ч'"
conn.execute(sql)
rsf.movenext
loop
set rsf=nothing
'------------------------------
sql= " select * from KR_bank_back where lotteryid='"&lotteryid&"' and lotteryname='"&lotterytype&"' and Issuccess<>'���׶���'"
set tt=conn.execute(sql)  
'------------------------------
do while not tt.eof
djzj=0.00+tt("mainpaymoney")
sql = "update KR_User set money=money+"&djzj&",uermoney=uermoney+"&djzj&" where username='"&tt("username")&"'"
conn.execute(sql)
sql = "update KR_Bank_Back set isreturn=1,issuccess='��Ա����',back_state='�Ѵ���' where id="&tt("id")
conn.execute(sql)
sql="select * from KR_User where username='"&tt("username")&"'"
set lsm=conn.execute(sql)
ye=lsm("uermoney")
sql = "insert into KR_Bank_Back (LotteryID,UserName,LotteryName,LotteryType,Expect,nexus,issuccess,isreturn,hnumber,anumber,Allmoney,Mainpaymoney,back_money2,b_after,b_befor,back_state,follows) values('"&tt("lotteryid")&"','"&tt("username")&"','"&tt("LotteryName")&"','"&tt("LotteryType")&"','"&tt("expect")&"','"&tt("nexus")&"','��Ա����','1','"&tt("hnumber")&"','"&tt("anumber")&"','"&tt("allmoney")&"','"&tt("Mainpaymoney")&"','"&djzj&"','"&ye&"','"&ye+djzj&"','�Ѵ���','��Ա����:"&tt("LotteryType")&tt("lotteryid")&"')"
conn.execute(sql)
tt.movenext
loop
'------------------------------
sql="select * from [KR_bank_back] where lotteryid='"&lotteryid&"' and isreturn=0 and Issuccess='���׶���'"
set yy=conn.execute(sql)  
do while not yy.eof
bdzj=0.00+rr("baodinum")*rr("onemoney")
sql = "update KR_User set uermoney=uermoney+"&bdzj&",icemoney=icemoney-"&bdzj&" where username='"&yy("username")&"'"
conn.execute(sql)
sql = "update KR_bank_back set isreturn=1,issuccess='��Ա����',back_state='�Ѵ���' where id="&yy("id")
conn.execute(sql)
sql="select * from KR_User where username='"&yy("username")&"'"
set lsm=conn.execute(sql)
ye=lsm("uermoney")
sql = "insert into KR_Bank_Back (LotteryID,UserName,LotteryName,LotteryType,Expect,nexus,issuccess,isreturn,hnumber,anumber,Allmoney,Mainpaymoney,back_money2,b_after,b_befor,back_state,follows) values('"&yy("lotteryid")&"','"&yy("username")&"','"&yy("LotteryName")&"','"&yy("LotteryType")&"','"&yy("expect")&"','"&yy("nexus")&"','��Ա����','1','"&yy("hnumber")&"','"&yy("anumber")&"','"&yy("allmoney")&"','"&yy("Mainpaymoney")&"','"&bdzj&"','"&ye&"','"&ye+bdzj&"','�Ѵ���','��Ա����:"&yy("LotteryType")&yy("lotteryid")&"')"
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
sql = "select top 1000 LotteryID,Sum(Money) as Money from KR_ZhuiHao where Status='��Ч�ɹ�' and LotteryID='"&Lotteryid&"' GROUP BY LotteryID ORDER BY Money DESC"
rsb.open sql,conn,1,1
ljcp=formatnumber(rsb("Money"),2,-1)
set rsb=nothing
zhmoney=allmoney-ljcp
'---------------------------------------
if lotterytype="����ʱʱ��" or lotterytype="����ʱʱ��" or lotterytype="���ʱʱ��" or lotterytype="�½�ʱʱ��" or lotterytype="������ʱʱ��" or lotterytype="����11ѡ5" or lotterytype="����11ѡ5" or lotterytype="�㶫11ѡ5" or lotterytype="����11ѡ5" or lotterytype="����11ѡ5" or lotterytype="�Ϻ�11ѡ5" or lotterytype="����11ѡ5" or lotterytype="�㽭11ѡ5" or lotterytype="����11ѡ5" or lotterytype="������11ѡ5" or lotterytype="�ӱ�11ѡ5" or lotterytype="�½�11ѡ5" or lotterytype="���11ѡ5" or lotterytype="����11ѡ5" or lotterytype="11�˶��" or lotterytype="���տ�3" or lotterytype="���տ�3" or lotterytype="���ֿ�3" or lotterytype="������3" or lotterytype="���ɿ�3" or lotterytype="������3" or lotterytype="������3" or lotterytype="�ӱ���3" or lotterytype="�Ϻ���3" or lotterytype="�㶫����ʮ��" or lotterytype="���Ͽ���ʮ��" or lotterytype="ʱʱ��" or lotterytype="��������12" or lotterytype="�㽭����12" or lotterytype="�Ĵ�����12" then
if lotterytype="����ʱʱ��" then
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
sql = "update KR_ZhuiHao set Status='ֹͣ׷��',Remark='ֹͣ׷��' where lotteryid='"&rr("lotteryid")&"' and Status='�ȴ���Ч'"
conn.execute(sql)
rsf.movenext
loop
set rsf=nothing
'------------------------------
sql = "select * from KR_Bank_Back where lotteryid='"&lotteryid&"' and (follows like '%����%' or follows like '%����%')"
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
sql = "insert into KR_Bank_Back (LotteryID,UserName,LotteryName,LotteryType,Expect,nexus,issuccess,isreturn,hnumber,anumber,Allmoney,Mainpaymoney,back_money2,b_after,b_befor,back_state,follows) values('"&tt("lotteryid")&"','"&tt("username")&"','"&tt("LotteryName")&"','"&tt("LotteryType")&"','"&tt("expect")&"','"&tt("nexus")&"','ֹͣ׷��','1','"&tt("hnumber")&"','"&tt("anumber")&"','"&tt("allmoney")&"','"&tt("Mainpaymoney")&"','"&yrgje&"','"&ye&"','"&ye+yrgje&"','�Ѵ���','ֹͣ׷��:"&tt("LotteryType")&tt("lotteryid")&"')"
conn.execute(sql)
end if


'bz=-8 '����
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