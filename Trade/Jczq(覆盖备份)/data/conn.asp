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
		Case "ŷ��"
			BackGround = "#F75000"
		Case "����"
			BackGround = "#663333"
		Case "�ճ�"
			BackGround = "#01673F"
		Case "����߱�"
			BackGround = "#01673F"
		Case "ī����"
			BackGround = "#a6b03e"
		Case "ŷ�ް���"
			BackGround = "#6F00DD"
		Case "��A��"
			BackGround = "#336699"
		Case "J1����"
			BackGround = "#017001"
		Case "��"
			BackGround = "#9773e5"
		Case "����"
			BackGround = "#DB31EE"
		Case "Ų��"
			BackGround = "#666666"
		Case "����"
			BackGround = "#ACA96C"
		Case "�ɼ�"
			BackGround = "#FF6699"
		Case "����"
			BackGround = "#FD91B5"
		Case "�¼�"
			BackGround = "#990099"
		Case "����"
			BackGround = "#006633"
		Case "���"
			BackGround = "#0066FF"
		Case "Ӣ���ܱ�"
			BackGround = "#003366"
		Case "�ϳ�"
			BackGround = "#008888"
		Case "������"
			BackGround = "#1650c5"
		Case "����"
			BackGround = "#00CCFF"
		Case "��������"
			BackGround = "#660033"
		Case "ī����"
			BackGround = "#2d0bc6"
		Case "����K����"
			BackGround = "#8265a4"
		Case "J2����"
			BackGround = "#7db29d"
		Case "Ӣ��"
			BackGround = "#CC3300"
		Case "Ӣ��"
			BackGround = "#FF1717"
		Case "��������"
			BackGround = "#054594"
	End Select
End Function
'style="background:#a6b03e"
%>