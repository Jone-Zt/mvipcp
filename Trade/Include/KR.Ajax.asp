<!--#include file="../../Conn.asp"--><%
LottType=request("LottType") 
if LottType="Rxjc" then
LottType="Sfc"
else
LottType=LottType
end if
Response.ContentType="text/xml"
Dim MyArray()
ai=0
if request("pt")="" or request("cxnumber")<>"" or LottType="KjTrade" then 
tnumber=5
	if request("cxnumber")<>"" then
		tnumber=request("cxnumber")
	end if
%><?xml version="1.0" encoding="gb2312" ?><xml><err type="1" /><% 
else
tnumber=100
end if
i=0
if LottType="KjTrade" then 
kjcaizhong=Array("Ssc","GdSyxw")
for each p in kjcaizhong

	sql="select top 1 * from KR_Lottery_Code where Lottery_Name='"&p&"' order by lottery_num desc,addtime DESC"
	set rs=conn.execute(sql)

	lottery_num=rs("lottery_num")
	Codes1=rs("num_info1")
	Codes2=rs("num_info2")
	Codes3=rs("num_info3")
	Codes4=rs("num_info4")
	Codes5=rs("num_info5")
	Codes6=rs("num_info6")
	Codes7=rs("num_info7")
	Codes8=rs("num_info8")
	Codes9=rs("num_info9")
	Codes10=rs("num_info10")
	Codes11=rs("num_info11")
	Codes12=rs("num_info12")
	Codes13=rs("num_info13")
	Codes14=rs("num_info14")
if instr(p,"Ks") or p="Ssl" then
%><row name="<%=p%>" issue="<%=lottery_num%>" shortissue="<%=lottery_num%>" tm="<%=Format_Time(rs("kjtime"),9)%>" Codes1="<%=Codes1%>" Codes2="<%=Codes2%>" Codes3="<%=Codes3%>" /><%
Elseif p="Pls" or p="Sd" then
%><row name="<%=p%>" issue="<%=lottery_num%>" shortissue="<%=lottery_num%>" tm="<%=Format_Time(rs("kjtime"),9)%>" Codes1="<%=Codes1%>" Codes2="<%=Codes2%>" Codes3="<%=Codes3%>" Codes4="<%=Codes4%>" Codes5="<%=Codes5%>" Codes6="<%=Codes6%>" /><%
elseif instr(p,"Syxw") or instr(p,"Ssc") or p="Syydj" or instr(p,"Klse") or p="Plw" or p="Swxw" or p="Eexw" or p="Hnwfc" or p="Ynwfc" or p="Txffc" then
%><row issue="<%=lottery_num%>" shortissue="<%=lottery_num%>" tm="<%=Format_Time(rs("kjtime"),9)%>" Codes1="<%=Codes1%>" Codes2="<%=Codes2%>" Codes3="<%=Codes3%>" Codes4="<%=Codes4%>" Codes5="<%=Codes5%>" /><%
Elseif p="Ssq" or p="Dlt" or p="Qxc" then
%><row issue="<%=lottery_num%>" shortissue="<%=lottery_num%>" tm="<%=Format_Time(rs("kjtime"),9)%>" Codes1="<%=Codes1%>" Codes2="<%=Codes2%>" Codes3="<%=Codes3%>" Codes4="<%=Codes4%>" Codes5="<%=Codes5%>" Codes6="<%=Codes6%>" Codes7="<%=Codes7%>" /><%
Elseif instr(p,"Klsf") or p="Qlc" or p="Jq4" then
%><row issue="<%=lottery_num%>" shortissue="<%=lottery_num%>" tm="<%=Format_Time(rs("kjtime"),9)%>" Codes1="<%=Codes1%>" Codes2="<%=Codes2%>" Codes3="<%=Codes3%>" Codes4="<%=Codes4%>" Codes5="<%=Codes5%>" Codes6="<%=Codes6%>" Codes7="<%=Codes7%>" Codes8="<%=Codes8%>" /><%
Elseif p="Zc6" then
%><row issue="<%=lottery_num%>" shortissue="<%=lottery_num%>" tm="<%=Format_Time(rs("kjtime"),9)%>" Codes1="<%=Codes1%>" Codes2="<%=Codes2%>" Codes3="<%=Codes3%>" Codes4="<%=Codes4%>" Codes5="<%=Codes5%>" Codes6="<%=Codes6%>" Codes7="<%=Codes7%>" Codes8="<%=Codes8%>" Codes9="<%=Codes9%>" Codes10="<%=Codes10%>" Codes11="<%=Codes11%>" Codes12="<%=Codes12%>" /><%
Elseif p="Sfc" or p="Rxjc" then
%><row issue="<%=lottery_num%>" shortissue="<%=lottery_num%>" tm="<%=Format_Time(rs("kjtime"),9)%>" Codes1="<%=Codes1%>" Codes2="<%=Codes2%>" Codes3="<%=Codes3%>" Codes4="<%=Codes4%>" Codes5="<%=Codes5%>" Codes6="<%=Codes6%>" Codes7="<%=Codes7%>" Codes8="<%=Codes8%>" Codes9="<%=Codes9%>" Codes10="<%=Codes10%>" Codes11="<%=Codes11%>" Codes12="<%=Codes12%>" Codes13="<%=Codes13%>" Codes14="<%=Codes14%>" /><%
Elseif p ="Pk10" then %>
<row issue="<%=lottery_num%>" shortissue="<%=lottery_num%>" tm="<%=Format_Time(rs("kjtime"),9)%>" Codes1="<%=Codes1%>" Codes2="<%=Codes2%>" Codes3="<%=Codes3%>" Codes4="<%=Codes4%>" Codes5="<%=Codes5%>" Codes6="<%=Codes6%>" Codes7="<%=Codes7%>" Codes8="<%=Codes8%>" Codes9="<%=Codes9%>" Codes10="<%=Codes10%>" />
<%end if
i=i+1
next
set rs = nothing%>
</xml><%
response.End()
end if
set rs=server.createobject("adodb.recordset")
sql="select top "&tnumber&" * from KR_Lottery_Code where Lottery_Name='"&LottType&"' order by lottery_num desc,addtime DESC"
rs.open sql,conn,1,2
While Not rs.EOF
lottery_num=rs("lottery_num")
Codes1=rs("num_info1")
Codes2=rs("num_info2")
Codes3=rs("num_info3")
Codes4=rs("num_info4")
Codes5=rs("num_info5")
Codes6=rs("num_info6")
Codes7=rs("num_info7")
Codes8=rs("num_info8")
Codes9=rs("num_info9")
Codes10=rs("num_info10")
Codes11=rs("num_info11")
Codes12=rs("num_info12")
Codes13=rs("num_info13")
Codes14=rs("num_info14")
if request("pt")<>"" and (instr(1,request("LottType"),"Ssc")>0 or request("LottType")="Hnwfc" or request("LottType")="Ynwfc" or request("LottType")="Txffc") then
	if request("pt")="F6" or request("pt")="F3" or request("pt")="F2" then 
		if request("pt")="F2" then
			 ReDim Preserve MyArray(ai)
			 MyArray(ai)=codes5&codes4
		else
			 ReDim Preserve MyArray(ai)
			 MyArray(ai)=codes5&codes4&codes3
		end if
	 ai=ai+1
	else
	aa=aa&codes5
	bb=bb&codes4
	cc=cc&codes3
	dd=dd&codes2
	ee=ee&codes1
	end if
elseif request("pt")<>"" and (instr(1,request("LottType"),"Syxw")>0 or instr(1,request("LottType"),"Syydj")>0) then
	if request("pt")="q1" or request("pt")="q1|zhi2" then
		if codes1="10" then 
			codes1="a"
			ee=ee&codes1
		elseif codes1="11" then
			codes1="b"
			ee=ee&codes1
		else
		ee=ee&cstr(CInt(codes1)) 
		end if
		if codes2="10" then 
			codes2="a"
			dd=dd&codes2
		elseif codes2="11" then
			codes2="b"
			dd=dd&codes2
		else
		dd=dd&cstr(CInt(codes2)) 
		end if
	else 
		ReDim Preserve MyArray(ai)
		MyArray(ai)=codes5&","&codes4&","&codes3&","&codes2&","&codes1
		ai=ai+1
	end if
else
if instr(LottType,"Ks") or LottType="Ssl" then
%><row issue="<%=lottery_num%>" shortissue="<%=lottery_num%>" tm="<%=Format_Time(rs("kjtime"),9)%>" Codes1="<%=Codes1%>" Codes2="<%=Codes2%>" Codes3="<%=Codes3%>" /><%
Elseif LottType="Pls" or LottType="Sd" then
%><row issue="<%=lottery_num%>" shortissue="<%=lottery_num%>" tm="<%=Format_Time(rs("kjtime"),9)%>" Codes1="<%=Codes1%>" Codes2="<%=Codes2%>" Codes3="<%=Codes3%>" Codes4="<%=Codes4%>" Codes5="<%=Codes5%>" Codes6="<%=Codes6%>" /><%
elseif instr(LottType,"Syxw") or instr(LottType,"Ssc") or LottType="Syydj" or instr(LottType,"Klse") or LottType="Plw" or LottType="Swxw" or LottType="Eexw" or LottType="Hnwfc" or LottType="Ynwfc" or LottType="Txffc" then
%><row issue="<%=lottery_num%>" shortissue="<%=lottery_num%>" tm="<%=Format_Time(rs("kjtime"),9)%>" Codes1="<%=Codes1%>" Codes2="<%=Codes2%>" Codes3="<%=Codes3%>" Codes4="<%=Codes4%>" Codes5="<%=Codes5%>" /><%
Elseif LottType="Ssq" or LottType="Dlt" or LottType="Qxc" then
%><row issue="<%=lottery_num%>" shortissue="<%=lottery_num%>" tm="<%=Format_Time(rs("kjtime"),9)%>" Codes1="<%=Codes1%>" Codes2="<%=Codes2%>" Codes3="<%=Codes3%>" Codes4="<%=Codes4%>" Codes5="<%=Codes5%>" Codes6="<%=Codes6%>" Codes7="<%=Codes7%>" /><%
Elseif instr(LottType,"Klsf") or LottType="Qlc" or LottType="Jq4" then
%><row issue="<%=lottery_num%>" shortissue="<%=lottery_num%>" tm="<%=Format_Time(rs("kjtime"),9)%>" Codes1="<%=Codes1%>" Codes2="<%=Codes2%>" Codes3="<%=Codes3%>" Codes4="<%=Codes4%>" Codes5="<%=Codes5%>" Codes6="<%=Codes6%>" Codes7="<%=Codes7%>" Codes8="<%=Codes8%>" /><%
Elseif LottType="Zc6" then
%><row issue="<%=lottery_num%>" shortissue="<%=lottery_num%>" tm="<%=Format_Time(rs("kjtime"),9)%>" Codes1="<%=Codes1%>" Codes2="<%=Codes2%>" Codes3="<%=Codes3%>" Codes4="<%=Codes4%>" Codes5="<%=Codes5%>" Codes6="<%=Codes6%>" Codes7="<%=Codes7%>" Codes8="<%=Codes8%>" Codes9="<%=Codes9%>" Codes10="<%=Codes10%>" Codes11="<%=Codes11%>" Codes12="<%=Codes12%>" /><%
Elseif LottType="Sfc" or LottType="Rxjc" then
%><row issue="<%=lottery_num%>" shortissue="<%=lottery_num%>" tm="<%=Format_Time(rs("kjtime"),9)%>" Codes1="<%=Codes1%>" Codes2="<%=Codes2%>" Codes3="<%=Codes3%>" Codes4="<%=Codes4%>" Codes5="<%=Codes5%>" Codes6="<%=Codes6%>" Codes7="<%=Codes7%>" Codes8="<%=Codes8%>" Codes9="<%=Codes9%>" Codes10="<%=Codes10%>" Codes11="<%=Codes11%>" Codes12="<%=Codes12%>" Codes13="<%=Codes13%>" Codes14="<%=Codes14%>" /><%
Elseif LottType="Pk10" then %>
 <row issue="<%=lottery_num%>" shortissue="<%=lottery_num%>" tm="<%=Format_Time(rs("kjtime"),9)%>" Codes1="<%=Codes1%>" Codes2="<%=Codes2%>" Codes3="<%=Codes3%>" Codes4="<%=Codes4%>" Codes5="<%=Codes5%>" Codes6="<%=Codes6%>" Codes7="<%=Codes7%>" Codes8="<%=Codes8%>" Codes9="<%=Codes9%>" Codes10="<%=Codes10%>"/>
<%end if
end if
rs.MoveNext 
Wend 
set rs=nothing




if request("pt")<>"" then
YLou="{"
if (request("pt")="F6" or request("pt")="F3" or request("pt")="F2") and (instr(1,request("LottType"),"Ssc")>0 or request("LottType")="Hnwfc" or request("LottType")="Ynwfc" or request("LottType")="Txffc") then
    if request("pt")="F2" then
		YLou=YLou&"""zhu2x"":{"
	else
		YLou=YLou&"""zhu3x"":{"
	end if
	for tj=0 to 9
		panduan=true
		for ti=0 to ubound(MyArray)
			if instr(1,MyArray(ti),tj)>0 then
				if tj=9 then
					YLou=YLou&""""&tj&""""&":"&""""&ti&""""
				else
					YLou=YLou&""""&tj&""""&":"&""""&ti&""""&","
				end if
				panduan=false
				exit for
			end if
		next
		if panduan then
		if tj=9 then
			YLou=YLou&""""&tj&""""&":"&"""100+"""
		else
			YLou=YLou&""""&tj&""""&":"&"""100+"""&","
		end if
		end if
	next
elseif request("pt")<>"" and (instr(1,request("LottType"),"Syxw")>0 or instr(1,request("LottType"),"Syydj")>0) then
    if request("pt")<>"q1|zhi2" and request("pt")<>"q1" then
		YLou=YLou&""""&request("pt")&"yl"":{"
	end if
	if request("pt")="q1" or request("pt")="q1|zhi2"  then
	YLou=YLou&"""q1yl"":{"
	for tj=1 to 11
		if tj="10" then
			tj1="a"
		elseif tj="11" then
			tj1="b"
		else
			tj1=tj
		end if
		eee=instr(1,ee,tj1)
		if eee=0 then
			eee="100+"
		else
			eee=eee-1
		end if
		if tj1="a" then
			tj1=10
		elseif tj1="b" then
			tj1=11
		else
			tj1="0"&tj1
		end if
		if tj=11 then
			YLou=YLou&""""&tj1&""""&":"&""""&eee&""""
		else
			YLou=YLou&""""&tj1&""""&":"&""""&eee&""""&","
		end if	
	next
	if request("pt")="q1|zhi2" then
		YLou=YLou&"},""zhi2yl"":{"
			for tj=1 to 11
			if tj="10" then
				tj1="a"
			elseif tj="11" then
				tj1="b"
			else
				tj1=tj
			end if
			ddd=instr(1,dd,tj1)
			if ddd=0 then
				ddd="100+"
			else
				ddd=ddd-1
			end if
			if tj1="a" then
				tj1=10
			elseif tj1="b" then
				tj1=11
			else
				tj1="0"&tj1
			end if
			if tj=11 then
				YLou=YLou&""""&tj1&""""&":"&""""&ddd&""""
			else
				YLou=YLou&""""&tj1&""""&":"&""""&ddd&""""&","
			end if	
			next
		end if
	else
	for tj=1 to 11
		tpanduan=true
		for ti=0 to ubound(MyArray)
			if tj<10 then
				tj1="0"&tj
			else
				tj1=tj
			end if
			if instr(1,MyArray(ti),tj1)>0 then
				if tj=11 then
					YLou=YLou&""""&tj1&""""&":"&""""&ti&""""
				else
					YLou=YLou&""""&tj1&""""&":"&""""&ti&""""&","
				end if
				tpanduan=false
				exit for
			end if
		next
		if tpanduan then
		if tj=11 then
			YLou=YLou&""""&tj1&""""&":"&"""100+"""
		else
			YLou=YLou&""""&tj1&""""&":"&"""100+"""&","
		end if
		end if
	next
	end if
else
YLou=YLou&"""wei5"":{"
for ti=0 to 9       
	aaa=instr(1,aa,ti)  
	if aaa=0 then
	aaa="100+"
	else
	aaa=aaa-1
	end if
	if ti=9 then
		YLou=YLou&""""&ti&""""&":"&""""&aaa&""""
	else
	YLou=YLou&""""&ti&""""&":"&""""&aaa&""""&","
	end if	
	next
YLou=YLou&"},"


YLou=YLou&"""wei4"":{"
for ti=0 to 9      
bbb=instr(1,bb,ti) 
if bbb=0 then
bbb="100+"
else
bbb=bbb-1
end if
	if ti=9 then
		YLou=YLou&""""&ti&""""&":"&""""&bbb&""""
	else
	YLou=YLou&""""&ti&""""&":"&""""&bbb&""""&","
	end if	
next
YLou=YLou&"},"


YLou=YLou&"""wei3"":{"
for ti=0 to 9
ccc=instr(1,cc,ti) 
if ccc=0 then
ccc="100+"
else
ccc=ccc-1
end if
	if ti=9 then
		YLou=YLou&""""&ti&""""&":"&""""&ccc&""""
	else
	YLou=YLou&""""&ti&""""&":"&""""&ccc&""""&","
	end if	
next
YLou=YLou&"},"


YLou=YLou&"""wei2"":{"
for ti=0 to 9
ddd=instr(1,dd,ti) 
if ddd=0 then
ddd="100+"
else
ddd=ddd-1
end if
	if ti=9 then
		YLou=YLou&""""&ti&""""&":"&""""&ddd&""""
	else
	YLou=YLou&""""&ti&""""&":"&""""&ddd&""""&","
	end if	
next
YLou=YLou&"},"

YLou=YLou&"""wei1"":{"
for ti=0 to 9
eee=instr(1,ee,ti)  
if eee=0 then
eee="100+"
else
eee=eee-1
end if
	if ti=9 then
		YLou=YLou&""""&ti&""""&":"&""""&eee&""""
	else
	YLou=YLou&""""&ti&""""&":"&""""&eee&""""&","
	end if	
next
end if
YLou=YLou&"}}"

response.Write(YLou)
end if
if request("pt")="" then
%></xml><%end if%>
