<!--#include file ="file/config.asp"-->
<%
session.timeout=20
On Error Resume Next

if request.querystring<>"" then call stophacker(request.querystring,"'|(and|or)\b.+?(>|<|=|in|like)|/\*.+?\*/|<\s*script\b|\bEXEC\b|UNION.+?SELECT|UPDATE.+?SET|INSERT\s+INTO.+?VALUES|(SELECT|DELETE).+?FROM|(CREATE|ALTER|DROP|TRUNCATE)\s+(TABLE|DATABASE)")
if Request.ServerVariables("HTTP_REFERER")<>"" then call test(Request.ServerVariables("HTTP_REFERER"),"'|\b(and|or)\b.+?(>|<|=|\bin\b|\blike\b)|/\*.+?\*/|<\s*script\b|\bEXEC\b|UNION.+?SELECT|UPDATE.+?SET|INSERT\s+INTO.+?VALUES|(SELECT|DELETE).+?FROM|(CREATE|ALTER|DROP|TRUNCATE)\s+(TABLE|DATABASE)")
if request.Cookies<>"" then call stophacker(request.Cookies,"\b(and|or)\b.{1,6}?(=|>|<|\bin\b|\blike\b)|/\*.+?\*/|<\s*script\b|\bEXEC\b|UNION.+?SELECT|UPDATE.+?SET|INSERT\s+INTO.+?VALUES|(SELECT|DELETE).+?FROM|(CREATE|ALTER|DROP|TRUNCATE)\s+(TABLE|DATABASE)") 
call stophacker(request.Form,"'|<[^>]+?style=[\w]+?:expression\(|\bonmouse(over|move)=\b|\b(alert|confirm|prompt)\b|^\+/v(8|9)|<[^>]*?=[^>]*?&#[^>]*?>|\b(and|or)\b.{1,6}?(=|>|<|\bin\b|\blike\b)|/\*.+?\*/|<\s*script\b|\bEXEC\b|UNION.+?SELECT|UPDATE.+?SET|INSERT\s+INTO.+?VALUES|(SELECT|DELETE).+?FROM|(CREATE|ALTER|DROP|TRUNCATE)\s+(TABLE|DATABASE)")

function test(values,re)
dim regex
set regex=new regexp
regex.ignorecase = true
regex.global = true
regex.pattern = re
if regex.test(values) then
IP=Request.ServerVariables("HTTP_X_FORWARDED_FOR")
If IP = "" Then 
IP=Request.ServerVariables("REMOTE_ADDR")
end if
Response.Write("<br><br>����IP: "&ip&"<br>����ʱ��: " & now() & "<br>����ҳ�棺"&Request.ServerVariables("URL")&"<br>�ύ��ʽ: "&Request.ServerVariables("Request_Method")&"<br>�ύ����: "&l_get&"<br>�ύ����: "&l_get2)
Response.end
end if
set regex = nothing
end function 

function stophacker(values,re)
	dim l_get, l_get2,n_get,regex,IP
	for each n_get in values
	for each l_get in values
	l_get2 = values(l_get)
	set regex = new regexp
	regex.ignorecase = true
	regex.global = true
	regex.pattern = re
	if regex.test(l_get2) then
	IP=Request.ServerVariables("HTTP_X_FORWARDED_FOR")
	If IP = "" Then 
	IP=Request.ServerVariables("REMOTE_ADDR")
	end if
	slog("<br><br>����IP: "&ip&"<br>����ʱ��: " & now() & "<br>����ҳ�棺"&Request.ServerVariables("URL")&"<br>�ύ��ʽ: "&Request.ServerVariables("Request_Method")&"<br>�ύ����: "&l_get&"<br>�ύ����: "&l_get2)
	Response.Write "�벻Ҫ�ύ�Ƿ�������лл��ϣ�"
	Response.end
	end if
	set regex = nothing
	next
	next
end function 

sub slog(logs)
dim toppath,fs,Ts
toppath = Server.Mappath("/Log.html")
Set fs = CreateObject("scripting.filesystemobject")
If Not Fs.FILEEXISTS(toppath) Then 
Set Ts = fs.createtextfile(toppath, True)
Ts.close
end if
Set Ts= Fs.OpenTextFile(toppath,8)
Ts.writeline (logs)
Ts.Close
Set Ts=nothing
Set fs=nothing
end sub

'Response.Buffer=True
Dim SqlNowString,DataPart_D,DataPart_Y,DataPart_H,DataPart_S,DataPart_W,DataPart_M
Dim Conn,DBPath,DataServer,DataUser,DataBaseName,DataBasePsw,ConnStr,CollcetConnStr
Const DataBaseType=1                 'ϵͳ���ݿ����ͣ�"1"ΪMS SQL2000���ݿ⣬"0"ΪMS ACCESS 2000���ݿ�
Const MsxmlVersion=".3.0"                'ϵͳ����XML�汾���� 

Const EnableSiteManageCode = True        '�Ƿ����ú�̨������֤���� �ǣ� True  �� False 
Const SiteManageCode = "8888"      '��̨������֤���룬���޸ģ�������ʹ����֪�������ĺ�̨�û���������Ҳ���ܵ�¼��̨
Const IsBusiness=False              '�Ƿ���ʽ�ٷ���Ȩ�汾����Ѱ汾����дFalse,��ʽ����дTrue
 
If DataBaseType=0 then
	'�����ACCESS���ݿ⣬�������޸ĺ���������ݿ���ļ���
	DBPath       = "/KR_Data/vipcp.mdb"      'ACCESS���ݿ���ļ�������ʹ���������վ��Ŀ¼�ĵľ���·��
Else
     DataServer   = "(local)"                                  '���ݿ������IP
	 DataUser     = "sa"                                       '�������ݿ��û���
	 DataBaseName = "vipcp"                                '���ݿ�����
	 DataBasePsw  = "Abc789456123"                                   '�������ݿ�����
	 Application("DbConfig") = DataServer &"|"& DataUser &"|"& DataBaseName &"|"& DataBaseName &"|"& DataBasePsw
End if

'=============================================================== ���´����벻Ҫ�����޸�========================================
Call OpenConn
Sub OpenConn()
    If DataBaseType = 1 Then
       ConnStr="Provider = Sqloledb; User ID = " & datauser & "; Password = " & databasepsw & "; Initial Catalog = " & databasename & "; Data Source = " & dataserver & ";"
	   SqlNowString = "getdate()"
	   DataPart_D   = "d"
	   DataPart_Y   = "y"
	   DataPart_H   = "hour"
	   DataPart_S   = "s"
	   DataPart_W   = "week"
       DataPart_M   = "month"
    Else
       ConnStr = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" & Server.MapPath(DBPath)
	   SqlNowString = "Now()"
	   DataPart_D   = "'d'"
	   DataPart_Y   = "'yyyy'"
	   DataPart_H   = "'h'"
	   DataPart_S   = "'s'"
	   DataPart_W   = "'w'"
       DataPart_M   = "'m'"
    End If
    Set conn = Server.CreateObject("ADODB.Connection")
    conn.open ConnStr
    If Err Then Err.Clear:Set conn = Nothing:Response.Write "���ݿ����ӳ�������Conn.asp�ļ��е����ݿ�������á�����ԭ��:<br/>" & Err.Description:Response.End
End Sub

Sub closedb()
	conn.close:Set conn=nothing
End sub

Function Format_Time(s_Time, n_Flag)
    Dim y, m, d, h, mi, s
    Format_Time = ""
    If IsDate(s_Time) = False Then Exit Function
    y = CStr(Year(s_Time))
    m = CStr(Month(s_Time))
    If Len(m) = 1 Then m = "0" & m
    d = CStr(Day(s_Time))
    If Len(d) = 1 Then d = "0" & d
    h = CStr(Hour(s_Time))
    If Len(h) = 1 Then h = "0" & h
    mi = CStr(Minute(s_Time))
    If Len(mi) = 1 Then mi = "0" & mi
    s = CStr(Second(s_Time))
    If Len(s) = 1 Then s = "0" & s
    Select Case n_Flag
        Case 1
            ' yyyy-mm-dd hh:mm:ss
            Format_Time = y & "-" & m & "-" & d & " " & h & ":" & mi & ":" & s
        Case 2
            ' yyyy-mm-dd
            Format_Time = y & "-" & m & "-" & d
        Case 3
            ' mm:dd
            Format_Time = m & "-" & d 
        Case 4
            ' hh:mm:ss
            Format_Time = h & ":" & mi & ":" & s
        Case 5
            ' yyyy��mm��dd��
            Format_Time = y & "��" & m & "��" & d & "��"
        Case 6
            ' yyyymmdd
            Format_Time = y & m & d
        Case 7
            'yyyymmddhhmmss
            Format_Time = y & m & d & h & mi & s
        Case 8
            ' yyyy-mm-dd hh:mm
            Format_Time = y & "-" & m & "-" & d & " " & h & ":" & mi
        Case 9
            ' hh:mm
            Format_Time = h & ":" & mi
        Case 10
            ' yyyymmddhhmmss
            Format_Time = y & m & d & h & mi & s
        Case 11
            ' yyyymmddhhmmsst
            Format_Time = y & m & d & h & mi & s & left(timer(),5)
        Case 12
            ' yyyymmddhhmmsst
            Format_Time = m & "-" & d & " " & h & ":" & mi
    End Select
End Function

Function checksessionM()
if session("htadmin") ="" then
Response.Write "<script>parent.location.href='/"&Setting(17)&"/Login.html';</script>"
end if
end Function

Function checksession()
if session("htadmin") ="" then
Response.Write "<script>parent.location.href='/"&Setting(17)&"/Login.html';</script>"
end if
'response.Write(uqx)
'response.Write(instr(session("uqx"),uqx))
if len(trim(uqx))=0 then  response.Write("<script>alert('�Բ�����û�й���Ȩ�ޣ�');</script>"):response.End()
if instr(session("uqx"),uqx)<=0 then response.Write("<script>alert('�Բ�����û�й���Ȩ�ޣ�');</script>"):response.End()
end Function

Function checksssion()
if session("un")="" then
response.write "<script>parent.location.href='/User/Login/';</script>"
else
SQL = "Select uermoney,bonusc,bonusex,Point from KR_User where username='"&session("un")&"'"
set rr=conn.execute(sql)
session("um") = rr("uermoney")
session("jf") = rr("Point")
session("ub") = rr("bonusc")
session("ubex") = rr("bonusex")
rr.close
set rr=nothing
end if
end Function

sql="select * from KR_Config"
set rs=conn.execute(sql)
if rs.eof and rs.bof then
response.write ""
response.end
else
Setting=split(rs("Setting"),"^%^")
LotterySetting=split(rs("LotterySetting"),"^%^")
LotteryAutoOpen=split(rs("LotteryAutoOpen"),"^%^")
end if
set rs=nothing
PageUrl=request.ServerVariables("Path_Info")
PageUrls=split(PageUrl,"/")
if ubound(PageUrls)>=2 then
PageLottid=PageUrls(2)
end if

Function isLogin()
    if Session("un")="" Then isLogin=False Else isLogin=True
End Function

Function goLogin()
unLoginUrl = array("login","reg","checkuserlogin",Setting(13),Setting(17))
For i=0 To Ubound(unLoginUrl)
If instr(Lcase(PageUrl),"/"&Lcase(unLoginUrl(i)))>0 Then
Exit Function
Exit For
End If
Next
if Not isLogin() Then Response.Redirect("/User/Login/")
End Function

if Request.cookies("username")<>"" and session("un")="" then session("un")=Request.cookies("username")
if Setting(15)="1" then goLogin()

if instr(Lcase(PageUrl),Lcase(Setting(17)))=0 and instr(PageUrl,"/404")=0 Then
    if Setting(8)="0" Then Response.Redirect("/404.html")
End if
'---------------------------------------------------------------------------
'���ڸ�ʽ������ 
Function Format_Time(s_Time, n_Flag)
    Dim y, m, d, h, mi, s
    Format_Time = ""
    If IsDate(s_Time) = False Then Exit Function
    y = CStr(Year(s_Time))
    m = CStr(Month(s_Time))
    If Len(m) = 1 Then m = "0" & m
    d = CStr(Day(s_Time))
    If Len(d) = 1 Then d = "0" & d
    h = CStr(Hour(s_Time))
    If Len(h) = 1 Then h = "0" & h
    mi = CStr(Minute(s_Time))
    If Len(mi) = 1 Then mi = "0" & mi
    s = CStr(Second(s_Time))
    If Len(s) = 1 Then s = "0" & s
    Select Case n_Flag
        Case 1
            ' yyyy-mm-dd hh:mm:ss
            Format_Time = y & "-" & m & "-" & d & " " & h & ":" & mi & ":" & s
        Case 2
            ' yyyy-mm-dd
            Format_Time = y & "-" & m & "-" & d
        Case 3
            ' mm:dd
            Format_Time = m & "-" & d 
        Case 4
            ' hh:mm:ss
            Format_Time = h & ":" & mi & ":" & s
        Case 5
            ' yyyy��mm��dd��
            Format_Time = y & "��" & m & "��" & d & "��"
        Case 6
            ' yyyymmdd
            Format_Time = y & m & d
        Case 7
            'yyyymmddhhmmss
            Format_Time = y & m & d & h & mi & s
        Case 8
            ' yyyy-mm-dd hh:mm
            Format_Time = y & "-" & m & "-" & d & " " & h & ":" & mi
        Case 9
            ' hh:mm
            Format_Time = h & ":" & mi
        Case 10
            ' yyyymmddhhmmss
            Format_Time = y & m & d & h & mi & s
        Case 11
            ' yyyymmddhhmmsst
            Format_Time = y & m & d & h & mi & s & left(timer(),5)
        Case 12
            ' yyyymmddhhmmsst
            Format_Time = m & "-" & d & " " & h & ":" & mi
    End Select
End Function

'---------------------------------------------------------------------------
'��������� 
Function randKey(obj)
Dim char_array(80)
Dim temp
For i = 0 To 9 
   char_array(i) = Cstr(i)
Next
For i = 10 To 35
   char_array(i) = Chr(i + 55)
Next
For i = 36 To 61
   char_array(i) = Chr(i + 61)
Next
Randomize
For i = 1 To obj
   'rnd�������ص��������0~1֮�䣬�ɵ���0����������1
   '��ʽ��int((����-����+1)*Rnd+����)��ȡ�ô����޵�����֮��������ɵ������޵����ɵ�������
   temp = temp&char_array(int(62 - 0 + 1)*Rnd + 0)
Next
randKey = temp
End Function

'---------------------------------------------------------------------------
'��ȡIP����	
Private Function getIP() 
Dim strIPAddr 
If Request.ServerVariables("HTTP_X_FORWARDED_FOR") = "" OR InStr(Request.ServerVariables("HTTP_X_FORWARDED_FOR"), "unknown") > 0 Then 
strIPAddr = Request.ServerVariables("REMOTE_ADDR") 
ElseIf InStr(Request.ServerVariables("HTTP_X_FORWARDED_FOR"), ",") > 0 Then 
strIPAddr = Mid(Request.ServerVariables("HTTP_X_FORWARDED_FOR"), 1, InStr(Request.ServerVariables("HTTP_X_FORWARDED_FOR"), ",")-1) 
ElseIf InStr(Request.ServerVariables("HTTP_X_FORWARDED_FOR"), ";") > 0 Then 
strIPAddr = Mid(Request.ServerVariables("HTTP_X_FORWARDED_FOR"), 1, InStr(Request.ServerVariables("HTTP_X_FORWARDED_FOR"), ";")-1) 
Else 
strIPAddr = Request.ServerVariables("HTTP_X_FORWARDED_FOR") 
End If 
getIP = Mid(strIPAddr, 1, 30)
End Function

'SQL��������
sub exesql(byval sqlstr)
dim trsql
trsql = "set xact_abort on;begin transaction;"
trsql = trsql & sqlstr
trsql = trsql & ";commit transaction;set xact_abort off"
conn.execute(trsql) 
end sub

function KR_Class(zd,table,classid)
 set ta=server.CreateObject("adodb.recordset")
 taq="select "&zd&" from "&table&" where id="&classid
 ta.open taq,conn,1,1
 if not ta.eof then
  KR_Class=ta(0)
 else
  KR_Class=""
 end if
 ta.close
 set ta=nothing 
end function

Function KR(input)
	KR = replace(input," ","")
	KR = replace(KR,"`","")
	KR = replace(KR,"~","")
	KR = replace(KR,"!","")
	KR = replace(KR,"#","")
	KR = replace(KR,"$","")
	KR = replace(KR,"%","")
	KR = replace(KR,"^","")
	KR = replace(KR,"&","")
	KR = replace(KR,"*","")
	KR = replace(KR,"(","")
	KR = replace(KR,")","")
	KR = replace(KR,"-","")
	KR = replace(KR,"+","")
	KR = replace(KR,"=","")
	KR = replace(KR,"{","")
	KR = replace(KR,"}","")
	KR = replace(KR,"[","")
	KR = replace(KR,"]","")
	KR = replace(KR,";","")
	KR = replace(KR,":","")
	KR = replace(KR,"""","")
	KR = replace(KR,"'","")
	KR = replace(KR,"|","")
	KR = replace(KR,"\","")
	KR = replace(KR,"/","")
	KR = replace(KR,"<","")
	KR = replace(KR,">","")
	KR = replace(KR,"?","")
end Function

Function KRA(input)
	KRA = replace(input,"","")
	KRA = replace(KRA,"\","")
	KRA = replace(KRA,"~","")
	KRA = replace(KRA,"#","")
	KRA = replace(KRA,"^","")
	KRA = replace(KRA,"$","")
	KRA = replace(KRA,"+","")
	KRA = replace(KRA,"|","")
	KRA = replace(KRA,"`","")
	KRA = replace(KRA,"{","")
	KRA = replace(KRA,"}","")
	KRA = replace(KRA,"'","")
end Function

Function GetUrl()
server_v1=Cstr(Request.ServerVariables("HTTP_REFERER")) 
server_v2=Cstr(Request.ServerVariables("SERVER_NAME")) 
if mid(server_v1,8,len(server_v2))<>server_v2 then
response.write "�Ƿ�����!"
response.end
end if 
End Function


function cutstr(str,strlen)
dim l,t,c, i
l=len(trim(str))
t=0
for i=1 to l
c=Abs(Asc(Mid(str,i,1)))
if c>255 then '����Ǻ���Ϊ2���ֽ�
t=t+2
else
t=t+1
end if
if t>=strlen then
cutstr=left(str,i)&""
exit for
else
cutstr=str
end if
next
end function

	Function getDateStr() 
	dim dateStr1,dateStr2,strTemp 
	dateStr1=split(cstr(formatdatetime(now(),2)),"-") 
	dateStr1=split(cstr(formatdatetime(now(),2)),"/") 
	dateStr2=split(cstr(formatdatetime(now(),3) & left(timer(),4)),":") 

	for each StrTemp in dateStr1 
	if len(StrTemp)<2 then 
	getDateStr=getDateStr & "0" & strTemp 
	else 
	getDateStr=getDateStr & strTemp 
	end if 
	next 

	for each StrTemp in dateStr2 
	if len(StrTemp)<2 then 
	getDateStr=getDateStr & "0" & strTemp 
	else 
	getDateStr=getDateStr & strTemp 
	end if
	next
	End function 

Function escape(str) 
    dim i,s,c,a 
    s="" 
    For i=1 to Len(str) 
        c=Mid(str,i,1) 
        a=ASCW(c) 
        If (a>=48 and a<=57) or (a>=65 and a<=90) or (a>=97 and a<=122) Then 
            s = s & c 
        ElseIf InStr("@*_+-./",c)>0 Then 
            s = s & c 
        ElseIf a>0 and a<16 Then 
            s = s & "%0" & Hex(a) 
        ElseIf a>=16 and a<256 Then 
            s = s & "%" & Hex(a) 
        Else 
            s = s & "%u" & Hex(a) 
        End If 
    Next 
    escape = s 
End Function

Function Unescape(str) 
    dim i,s,c 
    s="" 
    For i=1 to Len(str) 
        c=Mid(str,i,1) 
        If Mid(str,i,2)="%u" and i<=Len(str)-5 Then 
            If IsNumeric("&H" & Mid(str,i+2,4)) Then 
                s = s & CHRW(CInt("&H" & Mid(str,i+2,4))) 
                i = i+5 
            Else 
                s = s & c 
            End If 
        ElseIf c="%" and i<=Len(str)-2 Then 
            If IsNumeric("&H" & Mid(str,i+1,2)) Then 
                s = s & CHRW(CInt("&H" & Mid(str,i+1,2))) 
                i = i+2 
            Else 
                s = s & c 
            End If 
        Else 
            s = s & c 
        End If 
    Next 
    Unescape = s 
End Function 

Function bytes2BSTR(vIn)
strReturn = "" 
For j = 1 To LenB(vIn) 
ThisCharCode = AscB(MidB(vIn,j,1)) 
If ThisCharCode < &H80 Then 
strReturn = strReturn & Chr(ThisCharCode) 
Else 
NextCharCode = AscB(MidB(vIn,j+1,1)) 
strReturn = strReturn & Chr(CLng(ThisCharCode) * &H100 + CInt(NextCharCode)) 
j = j + 1 
End If 
Next 
bytes2BSTR = strReturn 
End Function 

Function getHTTPPage(url)
dim objXML
set objXML=server.createobject("MSXML2.XMLHTTP")'����
objXML.open "GET",url,false'��
objXML.send()'����
If objXML.readystate<>4 then '�ж��ĵ��Ƿ��Ѿ������꣬�����ͻ��˽��ܷ�����Ϣ
exit function
End If
getHTTPPage=BytesToBstr(objXML.responseBody)'������Ϣ��ͬʱ�ú����������
set objXML=nothing'�ر�
if err.number<>0 then err.Clear 
End Function

Function GetResponse(sUrl)
	Dim objHttp, sResponseTxt
	'Set objHttp = Server.CreateObject("Microsoft.XMLHTTP")
	'���Microsoft.XMLHTTP���У���ô���滻����������д��볢��
	Set objHttp = Server.CreateObject("Msxml2.ServerXMLHTTP.3.0")
	objHttp.setOption 2, 13056
	objHttp.open "GET", sUrl, False, "", ""
	objHttp.send()
	sResponseTxt = objHttp.ResponseText
	Set objHttp = Nothing
	GetResponse = sResponseTxt
End Function

Function BytesToBstr(body)
dim objstream
set objstream = Server.CreateObject("adodb.stream")
objstream.Type = 1
objstream.Mode =3
objstream.Open
objstream.Write body
objstream.Position = 0
objstream.Type = 2
objstream.Charset = "GB2312" 
objstream.Charset = "UTF-8" 
BytesToBstr = objstream.ReadText 
objstream.Close
set objstream = nothing
End Function

Function strCut(strContent,StartStr,EndStr,CutType)
	Dim S1,S2
	On Error Resume Next
	Select Case CutType
	Case 1
		S1 = InStr(strContent,StartStr)
		S2 = InStr(S1,strContent,EndStr)+Len(EndStr)
	Case 2
		S1 = InStr(strContent,StartStr)+Len(StartStr)
		S2 = InStr(S1,strContent,EndStr)
	End Select
	If Err Then
		strCute = ""
		Err.Clear
		Exit Function
	Else
		strCut = Mid(strContent,S1,S2-S1)
	End If
End Function

dldiya=split(Request.ServerVariables("HTTP_HOST"),".")
if ubound(dldiya)>0 then
if ucase(dldiya(0))<>"WWW" then
if ucase(dldiya(1))<>"COM" and ucase(dldiya(1))<>"CN" and ucase(dldiya(1))<>"NET" then
session("dldiy")=dldiya(0)
end if
end if
end if

Dim scriptCtrl  
Function parseJSON(str)  
    If Not IsObject(scriptCtrl) Then  
        Set scriptCtrl = Server.CreateObject("MSScriptControl.ScriptControl")  
        scriptCtrl.Language = "JScript"  
        scriptCtrl.AddCode "Array.prototype.get = function(x) { return this[x]; }; var result = null;"  
    End If  
    scriptCtrl.ExecuteStatement "result = " & str & ";"  
    Set parseJSON = scriptCtrl.CodeObject.result  
End Function

Function FromUnixTime(intTime, intTimeZone)        
    If IsEmpty(intTime) Or Not IsNumeric(intTime) Then       
         FromUnixTime = Now()        
        Exit Function       
    End If       
    If IsEmpty(intTime) Or Not IsNumeric(intTimeZone) Then intTimeZone = 0        
     FromUnixTime = DateAdd("s", intTime, "1970-1-1 0:0:0")        
     FromUnixTime = DateAdd("h", intTimeZone, FromUnixTime)        
End Function


Function Ceil(value)
    Dim return
    return = int(value)
    Cei2=value-return
    if Cei2>0 then
        Ceil = return + 1
    else
        Ceil=value+0'����Ceil=value��һ��+0 ǿ������ֵΪ������
    End If
End Function

Function FromIsNull(num)
	FromIsNull = False
	If num="" Or IsNull(num) Then 
		FromIsNull = True
	End If
End Function
function readTextImage(diyname)
     path = Setting(2)&"/Images/Pay/"& diyname &".txt"
	' response.write(getHTTPPage(path))
    readTextImage=getHTTPPage(path)
end function
%>