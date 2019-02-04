
<!--#include file="../Conn.asp"-->

<%

Response.charset = "GB2312"

function BytesToBstr(body,Cset) 
	dim objstream 
	set objstream = Server.CreateObject("adodb.stream")
	objstream.Type = 1 
	objstream.Mode =3 
	objstream.Open 
	objstream.Write body 
	objstream.Position = 0 
	objstream.Type = 2 
	objstream.Charset = Cset 
	BytesToBstr = objstream.ReadText 
	objstream.Close 
	set objstream = nothing 
End function

function PostHTTPPage(url,data) 
	dim Http 
	set Http=server.createobject("MSXML2.SERVERXMLHTTP.3.0")
	Http.open "POST",url,false 
	Http.setRequestHeader "CONTENT-TYPE", "application/x-www-form-urlencoded" 
	Http.send(data) 
	if Http.readystate<>4 then 
	exit function 
	End if
	PostHTTPPage=bytesToBSTR(Http.responseBody,"UTF-8") 
	set http=nothing 
	if err.number<>0 then err.Clear 
End function

Function RegExpTest(patrn,strng)    
	Dim   regEx,   Match,   Matches '   建立变量。    
	Set   regEx   =   New   RegExp '   建立正则表达式。    
	regEx.Pattern   =   patrn '   设置模式。    
	regEx.IgnoreCase   =   True '   设置是否区分大小写。    
	regEx.Global   =   True '   设置全局替换。    
	Set   Matches   =   regEx.Execute(strng) '   执行搜索。   
	RetStr = ""
	For   Each   Match   in   Matches '   遍历   Matches   集合。    
	  'RetStr   =   RetStr   &   "Match   "   &   I   &   "   found   at   position   "    
	  'RetStr   =   RetStr   &   Match.FirstIndex   &   ".   Match   Value   is   "'    
	  RetStr   =   RetStr   &   Match.Value   '&   "'."   &   vbCRLF    
	Next    
	RegExpTest   =   RetStr    
End Function

Function URLDecode(ByVal urlcode) 
	Dim start,final,length,char,i,butf8,pass 
	Dim leftstr,rightstr,finalstr 
	Dim b0,b1,bx,blength,position,u,utf8 
	On Error Resume Next 

	b0 = Array(192,224,240,248,252,254) 
	urlcode = Replace(urlcode,"+"," ") 
	pass = 0 
	utf8 = -1 

	length = Len(urlcode) : start = InStr(urlcode,"%") : final = InStrRev(urlcode,"%") 
	If start = 0 Or length < 3 Then URLDecode = urlcode : Exit Function 
	leftstr = Left(urlcode,start - 1) : rightstr = Right(urlcode,length - 2 - final) 

	For i = start To final 
	char = Mid(urlcode,i,1) 
	If char = "%" Then 
	bx = URLDecode_Hex(Mid(urlcode,i + 1,2)) 
	If bx > 31 And bx < 128 Then 
	i = i + 2 
	finalstr = finalstr & ChrW(bx) 
	ElseIf bx > 127 Then 
	i = i + 2 
	If utf8 < 0 Then 
	butf8 = 1 : blength = -1 : b1 = bx 
	For position = 4 To 0 Step -1 
	If b1 >= b0(position) And b1 < b0(position + 1) Then 
	blength = position 
	Exit For 
	End If 
	Next 
	If blength > -1 Then 
	For position = 0 To blength 
	b1 = URLDecode_Hex(Mid(urlcode,i + position * 3 + 2,2)) 
	If b1 < 128 Or b1 > 191 Then butf8 = 0 : Exit For 
	Next 
	Else 
	butf8 = 0 
	End If 
	If butf8 = 1 And blength = 0 Then butf8 = -2 
	If butf8 > -1 And utf8 = -2 Then i = start - 1 : finalstr = "" : pass = 1 
	utf8 = butf8 
	End If 
	If pass = 0 Then 
	If utf8 = 1 Then 
	b1 = bx : u = 0 : blength = -1 
	For position = 4 To 0 Step -1 
	If b1 >= b0(position) And b1 < b0(position + 1) Then 
	blength = position 
	b1 = (b1 xOr b0(position)) * 64 ^ (position + 1) 
	Exit For 
	End If 
	Next 
	If blength > -1 Then 
	For position = 0 To blength 
	bx = URLDecode_Hex(Mid(urlcode,i + 2,2)) : i = i + 3 
	If bx < 128 Or bx > 191 Then u = 0 : Exit For 
	u = u + (bx And 63) * 64 ^ (blength - position) 
	Next 
	If u > 0 Then finalstr = finalstr & ChrW(b1 + u) 
	End If 
	Else 
	b1 = bx * &h100 : u = 0 
	bx = URLDecode_Hex(Mid(urlcode,i + 2,2)) 
	If bx > 0 Then 
	u = b1 + bx 
	i = i + 3 
	Else 
	If Left(urlcode,1) = "%" Then 
	u = b1 + Asc(Mid(urlcode,i + 3,1)) 
	i = i + 2 
	Else 
	u = b1 + Asc(Mid(urlcode,i + 1,1)) 
	i = i + 1 
	End If 
	End If 
	finalstr = finalstr & Chr(u) 
	End If 
	Else 
	pass = 0 
	End If 
	End If 
	Else 
	finalstr = finalstr & char 
	End If 
	Next 
	URLDecode = leftstr & finalstr & rightstr 
End Function 

Function URLDecode_Hex(ByVal h) 
	On Error Resume Next 
	h = "&h" & Trim(h) : URLDecode_Hex = -1 
	If Len(h) <> 4 Then Exit Function 
	If isNumeric(h) Then URLDecode_Hex = cInt(h) 
End Function

	amount = request("amount")
	
	UserID = request("UserID")
	
	url = request("url")

	if amount = "" or UserID = "" or url = "" then 
		response.write "接收数据不完整"
		response.end
	end if 
	
	url = "http://"&url&"/Online/"
	
	data = "amount="&amount&"&UserID="&UserID&"&bank_code=11"

	data = PostHTTPPage(url,data)

	if data = "" then 
		response.write "获取不到支付接口数据"
		response.end
	end if

	data = RegExpTest("data=[^""""]+",data)

	if data = "" then 
		response.write "正则匹配数据出现错误"
		response.end
	end if

	data = replace(data,"data=","")

	response.redirect URLDecode(data)

%>