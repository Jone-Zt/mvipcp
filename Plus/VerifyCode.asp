<%
' ��discuz��̳��֤��
' version 1.0
' http://www.mysuc.com/
' Copyright (C) 2009 by hayden
Option Explicit
Response.buffer=true
Response.Expires = -1
Response.ExpiresAbsolute = Now() - 1
Response.Addheader   "cache-control","no-cache"   
Response.AddHeader   "Pragma","no-cache"
Response.ContentType = "Image/BMP"
'If Trim(Request.ServerVariables("HTTP_REFERER"))="" Then response.End()

	' ��ȷ��������
	' �˴������ûỰ��ʱΪ3����
	Session.Timeout = 3

	' ������У���ȷ��һ������������
	Randomize	
	
	' ��������
	Dim jpeg
	Dim pixelsAcross,textColour,CodeTotal
	Dim sessionnaem 
	Dim randomNumber : randomNumber = Int(Rnd * 7)+1
	
	' ��֤��ȫ�ֱ��������趨
	sessionnaem = "Verifycode"
	' ��֤�����
	CodeTotal = 4
	' ������ɫ
	textColour =  randomFomtcolor(randomNumber)
	
	' ��֤����������
	pixelsAcross = Int(Rnd * 20)+3
	
	' ����һ��jpeg����
	on error resume next
	Set jpeg = Server.CreateObject("Persits.jpeg")
	if err then  '��֧��aspjpeg����ԭ����
	  err.clear
	  Com_CreatValidCode
	  response.end
	end if
	
	' ���������ͼƬ
	drawBackGroud randomNumber,170,60
	' �����ַ�
	doString
	' �����
	drawLines
	' ���Բ
	drawCircle
	' �������
	'drawBar

	' ���صĶ����ƣ�������ҳΪһ��JPEGͼƬ����
	jpeg.SendBinary
	Set jpeg = Nothing 

	' ������drawBackGroud�����򿪱���ͼƬ
	Function drawBackGroud(srandom,swidth,sheight)
		Jpeg.Open Server.MapPath("background/background.jpg")
		Jpeg.Width = swidth
		Jpeg.Height = sheight	
	End Function
	
	' ������drawLines�������������
	Sub drawLines
		jpeg.Canvas.Pen.Color = &HADCD3C
		jpeg.Canvas.DrawLine 0, Int(Rnd * jpeg.Height), jpeg.Width, Int(Rnd * jpeg.Height)
	End Sub
	
	' ������drawBar��������������ο�
	Sub drawBar
		jpeg.Canvas.Brush.Solid = False '���
		'���α߿���ɫ
		jpeg.Canvas.Pen.Color = &H9CCF00
		'���ƾ��ο�
		jpeg.Canvas.Bar Int(Rnd * jpeg.Width), Int(Rnd * jpeg.Height), Int(Rnd * 50)+20,Int(Rnd * 50)+20
	End Sub

	' ������drawCircle�����������Բ
	Sub drawCircle
		jpeg.Canvas.Brush.Solid = False '���
		jpeg.Canvas.Pen.Color = &H8080FF
		jpeg.Canvas.Circle Int(Rnd * jpeg.Width), Int(Rnd * jpeg.Height), Int(Rnd * 10)+5
		jpeg.Canvas.Pen.Color = &HEEEEEE
		jpeg.Canvas.Circle Int(Rnd * jpeg.Width), Int(Rnd * jpeg.Height), Int(Rnd * 10)+10
	End Sub

	' ������doString����������֤���ַ�
	Sub doString
		Dim theString
		Dim x
	
		' ��ȡ׹���ַ���
		theString = createRandomString()
		
		' ѭ��ͨ���ַ�����ÿ���ַ�
		For x = 1 to len(theString)

			' ����֤��ͼƬ��ǰλ�ô�ӡ�ַ�
			addLetter Mid(theString, x, 1)
			
		Next

	End Sub

	' ������addLetter������֤��ͼƬ��ǰλ�ô�ӡ�ַ�
	Sub addLetter(theLetter)	
		' �������ɫ
		jpeg.Canvas.Font.Color = textColour
		' ������Ӱ
		jpeg.Canvas.Font.ShadowColor = &HFFFFFF
		' �Ƿ�Ϊ���塡�ʲ�������жϣ�����ֱ���趨�Ӵ�
		'if doTextStyle then
			jpeg.Canvas.Font.Bold = True
		'End If
		if doTextStyle then  '�»���
			'jpeg.Canvas.Font.Underlined  = True
		End If	
		' �Ƿ�Ϊб��
		if doTextStyle then
			jpeg.Canvas.Font.Italic   = False
		End If		
		' ����
		jpeg.Canvas.Font.Family = "Arial Black"'randomFont()		
		' �����С
		jpeg.Canvas.Font.Size = randomFontSize()
		
		' ����������
		jpeg.Canvas.Font.Quality = 10
		
		' ����ɫ����ǰʹ���˱���ͼ���ʴ˴�ע�͵�
		'jpeg.Canvas.Font.BkColor = backColour
		
		' ���屳��ģʽ(����ƽ��)
		jpeg.Canvas.Font.BkMode = "transparent"
		' �����ַ�
		jpeg.canvas.print pixelsAcross, Int(Rnd * 5), theLetter
		' �ַ����
		pixelsAcross = pixelsAcross + Int(Rnd * 10)+30
	End Sub
	
	' ����������ֵ������Ϊ50%
	Function doTextStyle()
		if Rnd() > 0.5 then
			doTextStyle = true
		else
			doTextStyle = false
		end if
	End Function

	' ������֤���и��ַ��������С
	Function randomFontSize()
		Dim theNumber
		' ��ȡһ�������С����Χ(40-60)
		theNumber = Int(Rnd * 0) + 60
		randomFontSize = theNumber
		
	End Function

	' ���������֤��������ɫ
	Function randomFomtcolor(srandomm)
		Dim arrFomtcolor(8)
		arrFomtcolor(1) = &HBDE3FF
		arrFomtcolor(2) = &HBDE3FF
		arrFomtcolor(3) = &HBDE3FF
		arrFomtcolor(4) = &HBDE3FF
		arrFomtcolor(5) = &HBDE3FF
		arrFomtcolor(6) = &HBDDBF7
		arrFomtcolor(7) = &HBDE3FF
		arrFomtcolor(8) = &HBDE3FF
		randomFomtcolor = arrFomtcolor(srandomm)
	End Function 
	
	' �����������
	Function randomFont()
		Dim theNumber	
		Dim font	
		' ȡ��1-6������һ����ַ�
		theNumber = Int(Rnd * 5) + 1
		' �������
		if theNumber =1 then
			font = "Arial Black"
		elseif theNumber =2 then
			font = "Courier New"
		elseif theNumber =3 then
			font = "Helvetica"
		elseif theNumber =4 then
			font = "Times New Roman"
		elseif theNumber =5 then
			font = "Verdana"
		else
			font = "Geneva"
		end If
		randomFont = font
	
	End Function
	
	' ���������֤֤�ַ���
	Function createRandomString
		Dim outputString
		Dim x
        For x = 0 To CodeTotal-1
			' Ӣ���ַ����ֻ���60%, ���ֳ��ֻ���40%
			if rnd() < 0 then
				' ����һ�����Ӣ���ַ�
            	outputString = Lcase(outputString & Chr(Int((26 * rnd()) + 65)))
			else
				' ����һ���������
				outputString = outputString & Chr(Int((10 * rnd()) + 48))
			end if
        Next
		Session(sessionnaem) = outputString
        createRandomString = outputString	
	End Function
	
'�Դ���֤��
Sub Com_CreatValidCode()
        Randomize
        Dim i, ii, iii
        Const cOdds = 0 ' �ӵ���ֵĻ���
        Const cAmount = 10 ' ��������
        Const cCode = "0123456789"
        
        ' ��ɫ������(�ַ�������)
        Dim vColorData(1)
        vColorData(0) = ChrB(0) & ChrB(0) & ChrB(2)  ' ��0����0����0����ɫ��
        vColorData(1) = ChrB(255) & ChrB(255) & ChrB(255) ' ��250����236����211��ǳ��ɫ��
        
        ' ��������ַ�
        Dim vCode(4), vCodes
        For i = 0 To 3
          vCode(i) = Int(Rnd * cAmount)
          vCodes = vCodes & Mid(cCode, vCode(i) + 1, 1)
        Next
        Session("Verifycode") = vCodes  '��¼��Session
        ' �ַ�������
        Dim vNumberData(9)
        vNumberData(0) = "1110000111110111101111011110111101001011110100101111010010111101001011110111101111011110111110000111"
        vNumberData(1) = "1111011111110001111111110111111111011111111101111111110111111111011111111101111111110111111100000111"
        vNumberData(2) = "1110000111110111101111011110111111111011111111011111111011111111011111111011111111011110111100000011"
        vNumberData(3) = "1110000111110111101111011110111111110111111100111111111101111111111011110111101111011110111110000111"
        vNumberData(4) = "1111101111111110111111110011111110101111110110111111011011111100000011111110111111111011111111000011"
        vNumberData(5) = "1100000011110111111111011111111101000111110011101111111110111111111011110111101111011110111110000111"
        vNumberData(6) = "1111000111111011101111011111111101111111110100011111001110111101111011110111101111011110111110000111"
        vNumberData(7) = "1100000011110111011111011101111111101111111110111111110111111111011111111101111111110111111111011111"
        vNumberData(8) = "1110000111110111101111011110111101111011111000011111101101111101111011110111101111011110111110000111"
        vNumberData(9) = "1110001111110111011111011110111101111011110111001111100010111111111011111111101111011101111110001111"
        ' ���ͼ���ļ�ͷ
        Response.BinaryWrite ChrB(66) & ChrB(77) & ChrB(230) & ChrB(4) & ChrB(0) & ChrB(0) & ChrB(0) & ChrB(0) &_
          ChrB(0) & ChrB(0) & ChrB(54) & ChrB(0) & ChrB(0) & ChrB(0) & ChrB(40) & ChrB(0) &_
          ChrB(0) & ChrB(0) & ChrB(40) & ChrB(0) & ChrB(0) & ChrB(0) & ChrB(10) & ChrB(0) &_
          ChrB(0) & ChrB(0) & ChrB(1) & ChrB(0)
        
        ' ���ͼ����Ϣͷ
        Response.BinaryWrite ChrB(24) & ChrB(0) & ChrB(0) & ChrB(0) & ChrB(0) & ChrB(0) & ChrB(176) & ChrB(4) &_
          ChrB(0) & ChrB(0) & ChrB(18) & ChrB(11) & ChrB(0) & ChrB(0) & ChrB(18) & ChrB(11) &_
          ChrB(0) & ChrB(0) & ChrB(0) & ChrB(0) & ChrB(0) & ChrB(0) & ChrB(0) & ChrB(0) &_
          ChrB(0) & ChrB(0)
        
        For i = 9 To 0 Step -1  ' ����������
                For ii = 0 To 3  ' ����������
                        For iii = 1 To 10 ' ������������
                                ' ���С����֡������ص����ͼ������
                                If Rnd * 99 + 1 < cOdds Then ' ��������ӵ�
                                        If Mid(vNumberData(vCode(ii)), i * 10 + iii, 1) Then
                                                Response.BinaryWrite vColorData(0)
                                        Else
                                                Response.BinaryWrite vColorData(1)
                                        End If
                                Else
                                        Response.BinaryWrite vColorData(Mid(vNumberData(vCode(ii)), i * 10 + iii, 1))
                                End If
                        Next
                Next
        Next
End Sub

%>
