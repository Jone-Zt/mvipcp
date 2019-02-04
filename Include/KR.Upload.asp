<%
Response.Charset="gb2312"
Response.Buffer = True 
Response.ExpiresAbsolute = Now() - 1 
Response.Expires = 0 
Response.CacheControl = "no-cache" 
Response.AddHeader "Pragma", "No-Cache" 

dim oUpFileStream
Class upload_file  
dim Form,File,Version  
Private Sub Class_Initialize 
   '定义变量
  dim RequestBinDate,sStart,bCrLf,sInfo,iInfoStart,iInfoEnd,tStream,iStart,oFileInfo
  dim iFileSize,sFilePath,sFileType,sFormvalue,sFileName
  dim iFindStart,iFindEnd
  dim iFormStart,iFormEnd,sFormName
   '代码开始
  Version="无组件上传类 Version 0.96"
  set Form = Server.CreateObject("Scripting.Dictionary")
  set File = Server.CreateObject("Scripting.Dictionary")
  if Request.TotalBytes < 1 then Exit Sub
  set tStream = Server.CreateObject("adodb.stream")
  set oUpFileStream = Server.CreateObject("adodb.stream")
  oUpFileStream.Type = 1
  oUpFileStream.Mode = 3
  oUpFileStream.Open 
  oUpFileStream.Write Request.BinaryRead(Request.TotalBytes)
  oUpFileStream.Position=0
  RequestBinDate = oUpFileStream.Read 
  iFormEnd = oUpFileStream.Size
  bCrLf = chrB(13) & chrB(10)
  '取得每个项目之间的分隔符
  sStart = MidB(RequestBinDate,1, InStrB(1,RequestBinDate,bCrLf)-1)
  iStart = LenB (sStart)
  iFormStart = iStart+2
  '分解项目
  Do
    iInfoEnd = InStrB(iFormStart,RequestBinDate,bCrLf & bCrLf)+3
    tStream.Type = 1
    tStream.Mode = 3
    tStream.Open
    oUpFileStream.Position = iFormStart
    oUpFileStream.CopyTo tStream,iInfoEnd-iFormStart
    tStream.Position = 0
    tStream.Type = 2
    tStream.Charset ="gb2312"
    sInfo = tStream.ReadText      
    '取得表单项目名称
    iFormStart = InStrB(iInfoEnd,RequestBinDate,sStart)-1
    iFindStart = InStr(22,sInfo,"name=""",1)+6
    iFindEnd = InStr(iFindStart,sInfo,"""",1)
    sFormName = Mid (sinfo,iFindStart,iFindEnd-iFindStart)
    '如果是文件
    if InStr (45,sInfo,"filename=""",1) > 0 then
      set oFileInfo= new FileInfo
      '取得文件属性
      iFindStart = InStr(iFindEnd,sInfo,"filename=""",1)+10
      iFindEnd = InStr(iFindStart,sInfo,"""",1)
      sFileName = Mid (sinfo,iFindStart,iFindEnd-iFindStart)
      oFileInfo.FileName = GetFileName(sFileName)
      oFileInfo.FilePath = GetFilePath(sFileName)
      oFileInfo.FileExt = GetFileExt(sFileName)
      iFindStart = InStr(iFindEnd,sInfo,"Content-Type: ",1)+14
      iFindEnd = InStr(iFindStart,sInfo,vbCr)
      oFileInfo.FileType = Mid (sinfo,iFindStart,iFindEnd-iFindStart)
      oFileInfo.FileStart = iInfoEnd
      oFileInfo.FileSize = iFormStart -iInfoEnd -2
      oFileInfo.FormName = sFormName
      file.add sFormName,oFileInfo
    else
    '如果是表单项目
      tStream.Close
      tStream.Type = 1
      tStream.Mode = 3
      tStream.Open
      oUpFileStream.Position = iInfoEnd 
      oUpFileStream.CopyTo tStream,iFormStart-iInfoEnd-2
      tStream.Position = 0
      tStream.Type = 2
      tStream.Charset = "gb2312"
      sFormvalue = tStream.ReadText 
      form.Add sFormName,sFormvalue
    end if
    tStream.Close
    iFormStart = iFormStart+iStart+2
    '如果到文件尾了就退出
    loop until (iFormStart+2) = iFormEnd 
  RequestBinDate=""
  set tStream = nothing
End Sub
Private Sub Class_Terminate  
  '清除变量及对像
  if not Request.TotalBytes<1 then
    oUpFileStream.Close
    set oUpFileStream =nothing
    end if
  Form.RemoveAll
  File.RemoveAll
  set Form=nothing
  set File=nothing
End Sub   
 '取得文件路径
Private function GetFilePath(FullPath)
  If FullPath <> "" Then
    GetFilePath = left(FullPath,InStrRev(FullPath, "\"))
    Else
    GetFilePath = ""
  End If
End function 
'取得文件名
Private function GetFileName(FullPath)
  If FullPath <> "" Then
    GetFileName = mid(FullPath,InStrRev(FullPath, "\")+1)
    Else
    GetFileName = ""
  End If
End function
'取得扩展名
Private function GetFileExt(FullPath)
  If FullPath <> "" Then
    GetFileExt = mid(FullPath,InStrRev(FullPath, ".")+1)
    Else
    GetFileExt = ""
  End If
End function
End Class
'文件属性类
Class FileInfo
  dim FormName,FileName,FilePath,FileSize,FileType,FileStart,FileExt
  Private Sub Class_Initialize 
    FileName = ""
    FilePath = ""
    FileSize = 0
    FileStart= 0
    FormName = ""
    FileType = ""
    FileExt = ""
  End Sub  
'保存文件方法
 Public function SaveToFile(FullPath)
    dim oFileStream,ErrorChar,i
    SaveToFile=1
    if trim(fullpath)="" or right(fullpath,1)="/" then exit function
    set oFileStream=CreateObject("Adodb.Stream")
    oFileStream.Type=1
    oFileStream.Mode=3
    oFileStream.Open
    oUpFileStream.position=FileStart
    oUpFileStream.copyto oFileStream,FileSize
    oFileStream.SaveToFile FullPath,2
    oFileStream.Close
    set oFileStream=nothing 
    SaveToFile=0
  end function
End Class
function CheckFileType(files)

'//判断图片是否为木马
const adTypeBinary=1
dim jpg(1):jpg(0)=CByte(&HFF):jpg(1)=CByte(&HD8)
dim bmp(1):bmp(0)=CByte(&H42):bmp(1)=CByte(&H4D)
dim png(3):png(0)=CByte(&H89):png(1)=CByte(&H50):png(2)=CByte(&H4E):png(3)=CByte(&H47)
dim gif(5):gif(0)=CByte(&H47):gif(1)=CByte(&H49):gif(2)=CByte(&H46):gif(3)=CByte(&H39):gif(4)=CByte(&H38):gif(5)=CByte(&H61)

on error resume next
CheckFileType=false
dim fstream,fileExt,stamp,i
fileExt=mid(files,InStrRev(files,".")+1)
set fstream=Server.createobject("ADODB.Stream")
fstream.Open
fstream.Type=adTypeBinary
fstream.LoadFromFile files
fstream.position=0
select case fileExt
case "jpg","jpeg"
  stamp=fstream.read(2)
  for i=0 to 1
   if ascB(MidB(stamp,i+1,1))=jpg(i) then CheckFileType=true else CheckFileType=false
  next
case "gif"
   stamp=fstream.read(6)
   for i=0 to 5
   if ascB(MidB(stamp,i+1,1))=gif(i) then CheckFileType=true else CheckFileType=false
   next
case "png"
   stamp=fstream.read(4)
   for i=0 to 3
   if ascB(MidB(stamp,i+1,1))=png(i) then CheckFileType=true else CheckFileType=false
   next
case "bmp"
stamp=fstream.read(2)
for i=0 to 1
if ascB(MidB(stamp,i+1,1))=bmp(i) then CheckFileType=true else CheckFileType=false
next
end select
fstream.Close
set fseteam=nothing
if err.number<>0 then CheckFileType=false
end function

'//判断上传目录是否存在，然后建立
function fileold(fold)
If fold<> "" Then 
set fso = server.CreateObject("scripting.filesystemobject") 
  if not fso.folderexists(Server.MapPath(fold)) then 
     fso.createfolder(server.MapPath(fold)) 
  end if 
End if 
end function

set upload=new upload_file
if upload.form("act")="uploadfile" then

sdcms_jpeg_t0=0
sdcms_jpeg_t1=0
sdcms_jpeg_t2="100"
sdcms_jpeg_t3="vipcp.cn"
sdcms_jpeg_t4="Arial"
sdcms_jpeg_t5="12"
sdcms_jpeg_t6="&H000000"
sdcms_jpeg_t7="1"
sdcms_jpeg_t8="UploadFiles/20124313132655944.jpg"
sdcms_jpeg_t9=1
sdcms_jpeg_t10="&HFFFFFF"
sdcms_jpeg_t11=4
sdcms_jpeg_t12=Split("5|5","|")
sdcms_jpeg_t13="330"
sdcms_jpeg_t14="250"
sdcms_jpeg_t15=0
filepath="profilepicture"
filetp="jpg|gif|png|rar|zip"
filesz="500"

'//检查组件是否安装
Function IsObjInstall(obj) 
  Dim IsObj 
  On Error Resume Next 
  Set IsObj = Server.CreateObject(obj) 
  if Err = 0 then 
     IsObjInstall = "True" 
  else 
     IsObjInstall = "Flase" 
  end If 
  Set IsObj = Nothing 
  If Err <> 0 Then Err.Clear 
 End Function

Sub Sdcms_Jpeg(t0)
	IF Not IsObjInstall("Persits.Jpeg") Then Exit Sub
	IF Check_ispic(t0)=0 Then Exit Sub
	Set AspJpeg=Server.CreateObject("Persits.Jpeg")
	IF AspJpeg.Expires<Now Then Exit Sub
	AspJpeg.Open Trim(Server.MapPath(t0))
	IF AspJpeg.OriginalWidth>Sdcms_Jpeg_t12(0)*2 Then
		IF Sdcms_Jpeg_t1 Then
			IF Len(Sdcms_Jpeg_t3)>0 And Len(Sdcms_Jpeg_t6)>0 Then
				Dim LogoWidth,LogoHeight,iLeft,iTop
				LogoWidth=(Sdcms_Jpeg_t5+1)*GetStrLen(Sdcms_Jpeg_t3)/2
				LogoHeight=Sdcms_Jpeg_t5+1

				iLeft=GetPosition_X(AspJpeg.OriginalWidth, LogoWidth, Sdcms_Jpeg_t12(0))
				iTop=GetPosition_Y(AspJpeg.OriginalHeight, LogoHeight, Sdcms_Jpeg_t12(1))
				
				AspJpeg.Canvas.Font.COLOR=Sdcms_Jpeg_t6         ' 文字的颜色
				AspJpeg.Canvas.Font.Family=Sdcms_Jpeg_t4         ' 文字的字体
				AspJpeg.Canvas.Font.Size=Sdcms_Jpeg_t5          ' 文字的大小
				AspJpeg.Canvas.Font.Bold=Sdcms_Jpeg_t7              ' 文字是否粗体
				AspJpeg.Canvas.Font.Quality=4                              ' Antialiased
				AspJpeg.Canvas.PrintText iLeft,iTop,Sdcms_Jpeg_t3         ' 加入文字及坐标位置
				AspJpeg.Canvas.Pen.COLOR=&H0               ' 边框的颜色
				AspJpeg.Canvas.Pen.Width=1                 ' 边框的粗细
				AspJpeg.Canvas.Brush.Solid=False           ' 图片边框内是否填充颜色
				AspJpeg.Quality=Sdcms_Jpeg_t2
				AspJpeg.Save Server.MapPath(t0)     ' 生成文件
			End IF
		Else
			Dim Fso
			Set Fso=CreateObject("Scrip"&"ting."&"File"&"System"&"Object")
			IF Not Fso.FileExists(Server.MapPath(Sdcms_Jpeg_t8)) Then
				Exit Sub
			End IF
			Set Fso=Nothing
			Dim AspJpeg2
			Set AspJpeg2=Server.CreateObject("Persits.Jpeg")
			AspJpeg2.Open Server.MapPath(Sdcms_Jpeg_t8)  '打开水印图片
			iLeft=GetPosition_X(AspJpeg.OriginalWidth,AspJpeg2.Width,Sdcms_Jpeg_t12(0))
			iTop=GetPosition_Y(AspJpeg.OriginalHeight,AspJpeg2.Height,Sdcms_Jpeg_t12(1))
			
			IF Sdcms_Jpeg_t10="" Then
				AspJpeg.DrawImage iLeft,iTop,AspJpeg2,Sdcms_Jpeg_t9,100
			Else
				AspJpeg.DrawImage iLeft,iTop,AspJpeg2,Sdcms_Jpeg_t9,Sdcms_Jpeg_t10,100
			End IF
			AspJpeg.Quality=Sdcms_Jpeg_t2
			AspJpeg.Save Server.MapPath(t0)
			Set AspJpeg2=Nothing	
		End IF
	End IF
	Set AspJpeg= Nothing
End Sub

Sub Jpeg_Thumb(t0)
	IF Not IsObjInstall("Persits.Jpeg") Then Exit Sub
	IF Check_ispic(t0)=0 Then Exit Sub
	Dim AspJpeg,AspJpeg2,bl_h,bl_w
	Set AspJpeg=Server.CreateObject("Persits.Jpeg")
	Set AspJpeg2=Server.CreateObject("Persits.Jpeg")
	IF AspJpeg.Expires<Now Then Exit Sub
	AspJpeg.Open Trim(Server.MapPath(t0))
	AspJpeg2.Open Trim(Server.MapPath(t0))	
	bl_w=Sdcms_Jpeg_t13/AspJpeg.OriginalWidth
	bl_h=Sdcms_Jpeg_t14/AspJpeg.OriginalHeight
	IF Sdcms_Jpeg_t13>0 Then
		IF Sdcms_Jpeg_t14>0 Then
			Select Case Sdcms_Jpeg_t15
			Case "0"   '常规算法：宽度和高度都大于0时，直接缩小成指定大小，其中一个为0时，按比例缩小
				IF bl_w<1 Or bl_h<1 Then
					AspJpeg.Width=Sdcms_Jpeg_t13
					AspJpeg.Height=Sdcms_Jpeg_t14
					AspJpeg.Quality=Sdcms_Jpeg_t2
					AspJpeg.save Server.MapPath(t0)
				End IF
			Case "1"    '裁剪法：宽度和高度都大于0时，先按最佳比例缩小再裁剪成指定大小，其中一个为0时，按比例缩小
				IF bl_w<1 Or bl_h<1 Then
					If bl_w<bl_h Then
						AspJpeg.Height=Sdcms_Jpeg_t14
						AspJpeg.Width=Round(AspJpeg.OriginalWidth * bl_h)   '按缩小成大比例者
					Else
						AspJpeg.Width=Sdcms_Jpeg_t13
						AspJpeg.Height=Round(AspJpeg.OriginalHeight * bl_w)
					End IF
					AspJpeg.Crop 0, 0, Sdcms_Jpeg_t13, Sdcms_Jpeg_t14
					AspJpeg.Quality=Sdcms_Jpeg_t2
					AspJpeg.Save Server.MapPath(t0)
				End IF
			Case "2"  '补充法：在指定大小的背景图上附加上按最佳比例缩小的图片
				'创建一个指定大小的背景图
				AspJpeg2.Width=Sdcms_Jpeg_t13
				AspJpeg2.Height=Sdcms_Jpeg_t14
				AspJpeg2.Canvas.Brush.Solid=True            ' 图片边框内是否填充颜色
				AspJpeg2.Canvas.Brush.COLOR="&HFFFFFF"  '设定背景颜色
				AspJpeg2.Canvas.Bar -1, -1, AspJpeg2.Width+1, AspJpeg2.Height+1 '填充

				'按最佳比例缩小图片
				IF bl_w>bl_h Then
					IF bl_h<1 Then
						AspJpeg.Height=Sdcms_Jpeg_t14
						AspJpeg.Width=Round(AspJpeg.OriginalWidth*bl_h)   '按缩小成小比例者
					End IF
				Else
					IF bl_w<1 Then
						AspJpeg.Width=Sdcms_Jpeg_t13
						AspJpeg.Height=Round(AspJpeg.OriginalHeight*bl_w)
					End IF
				End IF

				'得到缩略图的坐标
				iLeft=(AspJpeg2.Width-AspJpeg.Width)/2
				iTop=(AspJpeg2.Height-AspJpeg.Height)/2
				AspJpeg2.DrawImage iLeft,iTop,AspJpeg   '将缩略图附加到背景上
				AspJpeg2.Quality=Sdcms_Jpeg_t2
				AspJpeg2.Save Server.MapPath(t0)
			End Select

		Else
			IF bl_w<1 Then
				AspJpeg.Width=Sdcms_Jpeg_t13
				AspJpeg.Height=Round(AspJpeg.OriginalHeight*bl_w)
				AspJpeg.Quality=Sdcms_Jpeg_t2
				AspJpeg.Save Server.MapPath(t0)
			End IF
		End If

	Else
		IF Sdcms_Jpeg_t14>0 And bl_h<1 Then
			AspJpeg.Height=Sdcms_Jpeg_t14
			AspJpeg.Width=Round(AspJpeg.OriginalWidth*bl_h)
			AspJpeg.Quality=Sdcms_Jpeg_t2
			AspJpeg.Save Server.MapPath(t0)
		End IF
	End If
	Set AspJpeg=Nothing
	Set AspJpeg2=Nothing
End Sub

Function GetPosition_X(t0,t1,t2)
    Select Case Sdcms_Jpeg_t11
		Case 0:GetPosition_X=t2'左上
		Case 1:GetPosition_X=t2'左下
		Case 2:GetPosition_X=(t0-t1)/2'居中
		Case 3:GetPosition_X=t0-t1-t2'右上
		Case 4:GetPosition_X=t0-t1-t2'右下
		Case Else:GetPosition_X=0'不显示
	End Select
End Function

Function GetPosition_Y(t0,t1,t2)
    Select Case Sdcms_Jpeg_t11
		Case 0:GetPosition_Y=t2'左上
		Case 1:GetPosition_Y=t0-t1-t2'左下
		Case 2:GetPosition_Y=(t0-t1)/2'居中
		Case 3:GetPosition_Y=t2'右上
		Case 4:GetPosition_Y=t0-t1-t2'右下
		Case Else:GetPosition_Y=0'不显示
    End Select
End Function

Function GetStrLen(t0)
    On Error Resume Next
	Dim L,C,WINNT_CHINESE,T,I
    WINNT_CHINESE=(Len("中国")=2)
    IF WINNT_CHINESE Then
        L=Len(t0)
        T=l
        For I=1 To L
            C=Asc(Mid(t0,I,1))
            IF C<0 Then C=C+65536
            IF C>255 Then
                T=T+1
            End IF
        Next
        GetStrLen=T
    Else
        GetStrLen=Len(t0)
    End IF
    IF Err.Number<>0 Then Err.Clear
End Function

Function Check_IsPic(t0)
	Select Case Right(Lcase(t0),3)
		Case "jpg","gif","peg","bmp","png":Check_ispic=1
		Case Else:Check_ispic=0
   End Select
End Function

cf_root="/"

i=0
for each formName in upload.File
set file=upload.File(formName)
lei=cint(trim(upload.form("lei")))
pid=trim(upload.form("pid"))

'//上传类型验证
 fileExt=lcase(file.FileExt)	'得到的文件扩展名不含有.
 if file.filesize<10 then
       Response.Write("{""error"":1,""message"":"" 请先选择你要上传的文件！ ""}")
       response.end
 end if

filelx="|"&filetp&"|"
if inStr(filelx,"|"&fileExt&"|")>0 then
  if file.filesize>(1024*filesz) then
        Response.Write("{""error"":1,""message"":"" 最大只能上传 "&filesz&"KB 的文件！ ""}")
	response.end
  end if
else
   Response.Write("{""error"":1,""message"":"" 不支持上传的文件类型！ ""}")
   response.end
end if
 
'//重命名
 randomize
 ranNum=int(90000*rnd)+10000 
 file_f="../"&filepath&"/"
 call fileold(file_f)         '验证上传目录是否存在
 file_n=year(now)&month(now)&day(now)&hour(now)&minute(now)&second(now)&ranNum&"."&fileExt
 file_ss=filepath&"/"&file_n  '添加的内容的地址
 filename=file_f&file_n       '上传的地址
 
'//保存文件
if file.FileSize>0 then file.SaveToFile Server.mappath(FileName)

'//判断图片是否为木马伪装
if filelx="jpg" then
   if CheckFileType(Server.MapPath(filename))=false then
    Set fso = CreateObject("Scripting.FileSystemObject")
    Set ficn = fso.GetFile(Server.mappath(filename))
    ficn.delete
    set ficn=nothing
    set fso=nothing
    response.write("<script>alert('你上传的图片不安全！请不要做坏事！');window.close();</script>")
    response.end()
   end if
end if

'//加水印
if Sdcms_Jpeg_t0=1 then
   call sdcms_jpeg(filename) 
end if

'//返回路径
'//添加到编辑器
if lei=1 then
response.Write("<script>parent.document.getElementById('"&pid&"').value='"&file_ss&"';parent.addItem('"&file_ss&"');</script>")
Response.Write("{""error"":0,""url"":"""&cf_root&file_ss&"""}")
end if
'//直接添加到input
if lei=2 then
response.Write("<script>alert('上传成功！');parent.document.getElementById('"&pid&"').innerHTML='<img src=/"&file_ss&" height=30>';parent.document.getElementById('picpic').value='"&file_ss&"';history.back();</script>")
end if
'//模拟窗口返回,用以模板选择调用
if lei=3 then
response.Write("<script>parent.document.getElementById('"&pid&"').value='"&file_ss&"'; parent.document.getElementById('ifr').style.display='none'; parent.document.getElementById('"&pid&"').style.display='block';</script>")
end if

set file=nothing
next
set upload=nothing
else
%><html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>文件上传</title>
<style type="text/css">
body{margin:0; padding-left:2px}
</style>
</head>
<body>
<script type="text/javascript">
function checkup()
{
 if (document.form1.file1.value=="")
 {
    alert('请选择你要上传的图片！');
	return;
  }
  document.form1.submit();
}
</script>
<form action="" method="post" enctype="multipart/form-data" name="form1" >
<input name="file1" style="height:22px;text-indent:2px;line-height:20px;background:#ffffff; width:66px; font-size:12px;" type="file" id="file1" value="" size="30">
<input type="button" style="background:url('../images/button_bg.gif') left repeat-x;cursor: pointer;height:23px;BORDER-RIGHT: #2C59AA 1px solid; PADDING-RIGHT: 2px; BORDER-TOP: #2C59AA 1px solid; PADDING-LEFT: 2px; FONT-SIZE: 12px; FILTER: progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr=#ffffff, EndColorStr=#C3DAF5); BORDER-LEFT: #2C59AA 1px solid;  color:#555; PADDING-TOP: 2px; padding-top:0px !important;BORDER-BOTTOM: #2C59AA 1px solid; font-size:12px;" name="Submit" value="上传头像" onClick="checkup()"  >	  
<input name="lei" type="hidden" id="lei" value="<%=request.QueryString("lei")%>">
<input name="pid" type="hidden" id="pid" value="<%=request.QueryString("pid")%>">
<input type="hidden" name="act" value="uploadfile">
</form>
<%end if%>


