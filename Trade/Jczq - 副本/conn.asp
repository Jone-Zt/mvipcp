<!--#include file="../../conn.asp"-->
<%
Function BackGround(lid)
	lid = Right("00"&lid,3)
	ppsp = array("180","60","100","120","0","40","20","140","160","80")
	lida = ""
	For i2=1 To 3
		lida = lida & Right("0" & Hex(ppsp(Mid(lid,i2,1))),2)
	Next
	BackGround = "#"&lida
End Function

%>