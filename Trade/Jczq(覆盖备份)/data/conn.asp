<!--#include file="../../conn.asp"-->
<!--#include file="../../Include/KR.CommonCls.asp"-->
<%
Function BackGround(lid)
	lid = Right("00"&lid,3)
	ppsp = array("180","60","100","120","0","40","20","140","160","80")
	lida = ""
	For i2=1 To 3
		lida = lida & Right("0" & Hex(ppsp(Mid(lid,i2,1))),2)
	Next
	'255/10
	BackGround = "#"&lida
End Function

Function BackGround2(game)
	Select Case game
		Case "Å·¹Ú"
			BackGround = "#F75000"
		Case "·¨¼×"
			BackGround = "#663333"
		Case "ËÕ³¬"
			BackGround = "#01673F"
		Case "½â·ÅÕß±­"
			BackGround = "#01673F"
		Case "Ä«´º±­"
			BackGround = "#a6b03e"
		Case "Å·ÂÞ°ÍÁª"
			BackGround = "#6F00DD"
		Case "°ÄAÁª"
			BackGround = "#336699"
		Case "J1ÁªÈü"
			BackGround = "#017001"
		Case "¶í³¬"
			BackGround = "#9773e5"
		Case "µÂÒÒ"
			BackGround = "#DB31EE"
		Case "Å²³¬"
			BackGround = "#666666"
		Case "·¨ÒÒ"
			BackGround = "#ACA96C"
		Case "ºÉ¼×"
			BackGround = "#FF6699"
		Case "ºÉÒÒ"
			BackGround = "#FD91B5"
		Case "µÂ¼×"
			BackGround = "#990099"
		Case "Î÷¼×"
			BackGround = "#006633"
		Case "Òâ¼×"
			BackGround = "#0066FF"
		Case "Ó¢×ã×Ü±­"
			BackGround = "#003366"
		Case "ÆÏ³¬"
			BackGround = "#008888"
		Case "ÖÇÀû¼×"
			BackGround = "#1650c5"
		Case "°¢¼×"
			BackGround = "#00CCFF"
		Case "ÃÀ´óÁªÃË"
			BackGround = "#660033"
		Case "Ä«Áª´º"
			BackGround = "#2d0bc6"
		Case "¾­µäKÁªÈü"
			BackGround = "#8265a4"
		Case "J2ÁªÈü"
			BackGround = "#7db29d"
		Case "Ó¢¹Ú"
			BackGround = "#CC3300"
		Case "Ó¢³¬"
			BackGround = "#FF1717"
		Case "ËÕÁªÈü±­"
			BackGround = "#054594"
	End Select
End Function
'style="background:#a6b03e"
%>