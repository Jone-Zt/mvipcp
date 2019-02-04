<!--#include file="../../Conn.asp" --><%
     response.Charset="GBK"
     caizhong = unescape(request("caizhong"))

	 if Instr(caizhong,"时时彩") > 0 OR Instr(caizhong,"五分彩") > 0 or Instr(caizhong,"分分彩") > 0 then

	 	 sql = "SELECT Lottery_Name,win_money,win_name FROM KR_Lottery_Win WHERE Lottery_Name LIKE '"&caizhong&"%'"
		 j = Array(caizhong&"五星直选复式",caizhong&"三星直选",caizhong&"二星直选",caizhong&"一星",caizhong&"二星组选",caizhong&"五星通选",caizhong&"组三",caizhong&"组六",caizhong&"四星",caizhong&"定位",caizhong&"大小单双",caizhong&"龙虎",caizhong&"龙虎和",caizhong&"龙虎和值")
	 else 
		 sql = "SELECT Lottery_Name,win_money,win_name FROM KR_Lottery_Win WHERE Lottery_Name like '11选5%'"

		 j = Array("11选5前一","11选5任选二","11选5任选三","11选5任选四","11选5任选五","11选5任选六","11选5任选七","11选5任选八","11选5前三直选","11选5前三组选","11选5前二直选","11选5前二组选","","")
	 end if
     if caizhong ="" then 
	    sql = "SELECT Lottery_Name,win_money,win_name FROM KR_Lottery_Win WHERE Lottery_Name like '快3和值%'"
		j   = Array("a","b","c","d","e","f","g","h","i","j","k","l","s","w","d","h")
	 end if 
	set rs=server.createobject("ADODB.recordset")
    jianjin =""
    rs.open sql,conn,1,1
    do while not rs.eof
	
	if rs("win_name") = "一等奖" and Instr(rs("Lottery_Name"),j(0)) > 0 then
		a1=rs("win_money")
	elseif rs("win_name") = "一等奖" and Instr(rs("Lottery_Name"),j(1)) > 0 then
		a2=rs("win_money")
	elseif rs("win_name") = "一等奖" and Instr(rs("Lottery_Name"),j(2)) > 0 then
		a3=rs("win_money")
	elseif (rs("win_name") = "一等奖" or rs("win_name") = "一星奖") and Instr(rs("Lottery_Name"),j(3)) > 0 then
		a4=rs("win_money")
	elseif rs("win_name") = "一等奖" and Instr(rs("Lottery_Name"),j(4)) > 0 then
		a5=rs("win_money")
	elseif rs("win_name") = "一等奖" and Instr(rs("Lottery_Name"),j(5)) > 0 then
		a6=rs("win_money")
	elseif rs("win_name") = "一等奖" and Instr(rs("Lottery_Name"),j(6)) > 0 then
		a7=rs("win_money")
	elseif rs("win_name") = "一等奖" and Instr(rs("Lottery_Name"),j(7)) > 0 then
		a8=rs("win_money")
	elseif rs("win_name") = "一等奖" and Instr(rs("Lottery_Name"),j(8)) > 0 then
		a9=rs("win_money")
	elseif rs("win_name") = "一等奖" and Instr(rs("Lottery_Name"),j(9)) > 0 then
		a10=rs("win_money")
	elseif (rs("win_name") = "一等奖" or rs("win_name") = "组合奖") and Instr(rs("Lottery_Name"),j(10)) > 0 then
		a11=rs("win_money")
	elseif rs("win_name") = "一等奖" and Instr(rs("Lottery_Name"),j(11)) > 0 and Instr(rs("Lottery_Name"),"11选5") > 0 then
		a12=rs("win_money")
	elseif  rs("win_name") = "一等奖" and rs("Lottery_Name")=j(11) then 
	   jianjin  = rs("win_money")&","&rs("win_money")
	elseif rs("win_name") = "一等奖" and rs("Lottery_Name")=j(12) then 
	   jianjin = jianjin&","&rs("win_money")
	elseif rs("win_name") = "一等奖" and rs("Lottery_Name")=j(13) then 
		 jianjin = jianjin&","&rs("win_money")&","&rs("win_money")&","&rs("win_money")&","&rs("win_money")&","&rs("win_money")
	elseif rs("win_name") = "一等奖" and rs("Lottery_Name") ="快3和值3和值18" then 
		    jianjin = """3"":""" & rs("win_money")&""",""18"":"""&rs("win_money") &""","
	 elseif rs("win_name") = "一等奖" and rs("Lottery_Name") ="快3和值4和值17" then 
	        jianjin = jianjin & """4"":""" & rs("win_money")&""",""17"":"""&rs("win_money") &""","	
	 elseif rs("win_name") = "一等奖" and rs("Lottery_Name") ="快3和值5和值16" then 
	        jianjin = jianjin & """5"":""" & rs("win_money")&""",""16"":"""&rs("win_money")&""","
			
	 elseif rs("win_name") = "一等奖" and rs("Lottery_Name") ="快3和值6和值15" then 
	        jianjin = jianjin & """6"":""" & rs("win_money")&""",""15"":"""&rs("win_money")	&""","
			
	 elseif rs("win_name") = "一等奖" and rs("Lottery_Name") ="快3和值7和值14" then 
	        jianjin = jianjin & """7"":""" & rs("win_money")&""",""14"":"""&rs("win_money")	&""","
	
	 elseif rs("win_name") = "一等奖" and rs("Lottery_Name") ="快3和值8和值13" then 
	        jianjin = jianjin & """8"":""" & rs("win_money")&""",""13"":"""&rs("win_money")	&""","

	 elseif rs("win_name") = "一等奖" and rs("Lottery_Name") ="快3和值9和值12" then 
	        jianjin = jianjin & """9"":""" & rs("win_money")&""",""12"":"""&rs("win_money")	&""","

	 elseif rs("win_name") = "一等奖" and rs("Lottery_Name") ="快3和值10和值11" then 
	        jianjin = jianjin & """10"":""" & rs("win_money")&""",""11"":"""&rs("win_money")	&""","
	 elseif rs("win_name") = "一等奖" and rs("Lottery_Name") ="快3和值大小单双" then 
	        jianjin = jianjin & """20"":""" & rs("win_money")&""",""21"":"""&rs("win_money")&""",""22"":"""&rs("win_money")&""",""23"":"""&rs("win_money") &""","	 		
	 		 					     			 
	end if
	rs.movenext
	loop
	rs.close
	set rs=nothing
	conn.close
	set conn=nothing
	if caizhong = "" then 
	  response.Write("{")
      jianjins =  mid(jianjin,1,len(jianjin)-1) &"}"
	  Response.Write(jianjins)
	  response.End()
    end if 
	
%>
<xml><row a1="<%=a1%>" a2="<%=a2%>" a3="<%=a3%>" a4="<%=a4%>" a5="<%=a5%>" a6="<%=a6%>" a7="<%=a7%>" a8="<%=a8%>" a9="<%=a9%>" a10="<%=a10%>" a11="<%=a11%>" a12="<%=a12%>"  lh="<%=jianjin%>"/></xml>
