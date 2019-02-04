<%session("un")="abc"%>
<!--#include file="../../../Conn.asp"-->
<%
 matchids = Request.Form("matchids")
 play     = Request.Form("play")
 rv       = Request.Form("rv")
 url      = "http://m.cp.360.cn/jclq/statsinfo"
 data     = "matchids="&matchids&"&play="&play&"rv="&rv 
 getdata  = PostHTTPPage(url,data)
 //Response.Write(getdata)
 function PostHTTPPage(url,data)
	dim Http
	set Http=server.createobject("MSXML2.SERVERXMLHTTP.3.0")
	Http.open "POST",url,false
	Http.setRequestHeader "CONTENT-TYPE", "application/x-www-form-urlencoded"
	Http.setRequestHeader "Host","m.cp.360.cn"
	Http.setRequestHeader "Origin","http://m.cp.360.cn"
	Http.send(data)
	if Http.readystate<>4 then
	exit function
	End if
	PostHTTPPage=bytesToBSTR(Http.responseBody,"utf-8")
	set http=nothing
	if err.number<>0 then err.Clear
End function

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
%>
[]