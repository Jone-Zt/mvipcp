<!--#include file="Conn.asp"-->
<%
	Response.charset = "gb2312"
	Action = Request.QueryString("action")
	gdate = Request.QueryString("date")
	gameType = Request.QueryString("gameType")
%>
<!DOCTYPE HTML>
<html>
<head>
<link rel="shortcut icon" href="/favicon.ico"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="application-name" content="caipiao.163.com"/>
<meta name="msapplication-TileColor" content="#b82337"/>
<meta name="msapplication-TileImage" content="e0226958-5751-416d-bee6-4f2a40735ac2.png"/>
<meta name="keywords" content="�ȷ�ֱ�������±ȷ�ֱ��"/>
<meta name="description" content="�����ױȷ�ֱ����Ϊ���ṩ���¡���졢��׼���������±ȷ�ֱ������ʱ�ȷ֡�ȫ�����µľ��ʲʹ������ʷ�����ͬʱ��Ϊ���ṩ��������ȷ�ֱ���������ȷ�ֱ������ʱȷ�ֱ�������ʱȷ�ֱ���ȣ��ɱ߿���ͶעŶ��"/>
<link rel="canonical" href="http://live.caipiao.163.com/"/>
<title>����������ȷ�ֱ�������ʱȷ�ֱ��_2016��������ʱ�ȷ�ֱ��-���ײ�Ʊ��</title>
<link rel="stylesheet" href="http://pimg1.126.net/caipiao/css2/base.css?201602190330"/>
<link rel="stylesheet" href="http://pimg1.126.net/caipiao/css2/core.css?201602190330"/>
<link rel="stylesheet" href="http://pimg1.126.net/caipiao_info/css2/library/liveScore/common.css?201602190330"/>
<link rel="stylesheet" href="http://pimg1.126.net/caipiao_info/css2/library/liveScore/jczq.css?201602190330"/>
<% If Action="zcbf" or Action="all" Then%><link rel="stylesheet" href="http://pimg1.126.net/caipiao_info/css2/library/liveScore/zcbf.css?201602190325"/><% End If %>
<link rel="stylesheet" href="http://pimg1.126.net/caipiao_info/css2/library/liveScore/liveGame.css?201602190330"/>
<script src="http://pimg1.126.net/caipiao/js2/jquery-1.4.2.js?20150408"></script>
<script src="http://caipiao.163.com/globalConfig.html?"></script>
<script src="./js2/easyCore.js?201602190330"></script>
<script src="http://pimg1.126.net/caipiao/js2/jselect.js?201602190330"></script>
<script src="http://pimg1.126.net/caipiao_info/js2/library/liveScore/liveScore.js?201602190330"></script>
<script src="http://pimg1.126.net/caipiao_info/js2/library/liveScore/liveGame.js?201602190330"></script>
<link rel="stylesheet" href="/Trade/Css/Public.css"/>

<script language="javascript" type="text/javascript" src="/JS/Jquery-1.7.2.Min.js"></script>
<script type="text/javascript" src="/JS/jquery-ui-1.8.2.custom.min.js"></script>
<script type="text/javascript" src="/JS/Alertdiv.js"></script>
<script type="text/javascript" src="/JS/loginstatus.js"></script>
<script type="text/javascript" src="/JS/tool2.js"></script>
<script type="text/javascript" src="/JS/Utility.js"></script>
<script type="text/javascript" src="/JS/ZhanJi.js"></script>
<script type="text/javascript" src="/js/jquery.KinSlideshow-1.2.1.min.js"></script>
</head>
<body>
	<style>
	a:hover {
    	text-decoration: none;
	}
	</style>
<%buyhead()%>
</div>
<%

'http://localhost:100/football/currentEvents.html?cache=1455860261386

Function ReplaceExp(srcstr, patrn, replStr) 
Set regEx = New RegExp 
regEx.Pattern = patrn 
regEx.IgnoreCase = True 
regEx.Global = True 
regEx.Execute(srcstr) 
ReplaceExp = regEx.Replace(srcstr, replStr) 
Set regEx = Nothing 
End Function

	Dim Context
	Url = "http://live.caipiao.163.com/"&Action&"/"
	If Len(gdate)>0 Then Url = Url&"?date="&gdate
	If Len(gameType)>0 Then Url = Url&"?gameType="&gameType
	Url = ReplaceExp(Url,"\?(.+?)\?","?$1&")
	Context = getHTTPPage(Url)
	'Response.write(url)
	Context = strCut(Context,"<article class=""docBody clearfix"">","</article>",1)
	Dim delSTR(4)
	delSTR(0) = strCut(Context,"<div class=""phoneAppDownload"">","</div>",1)
	delSTR(1) = strCut(Context,"<label class=""showMyBet"" for=""showMyBet"">","</label>",1)
	delSTR(2) = strCut(Context,"<div class=""firstNav"">","</div>",1)
	delSTR(3) = strCut(Context,"<a class=""betBtn grayBtn""","</a>",1)
	delSTR(4) = "http://live.caipiao.163.com/jcbf/"


	For Each p In delSTR
		Context = Replace(Context,p,"")
	Next
	Context = ReplaceExp(Context,"<a href=""http://zx\.caipiao\.163\.com/football/.+?""","<a")
	Context = ReplaceExp(Context,"<a href=""http://zx.caipiao.163.com/library/football/match\.html.+?""","<a")

	Context = ReplaceExp(Context,"href=""(.+?)\?","href=""$1&")
	'<a class="betBtn grayBtn"
	'<a class="betBtn grayBtn" href="http://caipiao.163.com/order/dc/" target="_blank">Ͷע����</a>


	Context = Replace(Context,"http://caipiao.163.com/order/jczq/","/Trade/Jczq/")
	Context = Replace(Context,"<span class=""mcSelectBox betBtn"" id=""betBtn"">","<span class=""mcSelectBox betBtn"" id=""betBtn"" style='display:none'>")

	Context = Replace(Context,"<a href=""http://caipiao.163.com/"" target=""_blank"">���ײ�Ʊ</a>","<a href=""/"" target=""_blank"">"&Setting(0)&"</a>")
	Context = Replace(Context,"���ײ�Ʊ","")

	Context = Replace(Context,"http://live.caipiao.163.com/all/","?action=all")
	Context = Replace(Context,"href="""" title=""��������ȷ�ֱ��""","href=""?action=jcbf""")
	Context = Replace(Context,"http://live.caipiao.163.com/dcbf/","?action=dcbf")
	Context = Replace(Context,"http://live.caipiao.163.com/zcbf/","?action=zcbf")
	Context = Replace(Context,"<span class=""score jtip"" inf=""����鿴����"">","<span class=""jtip"" style=""width:44px"" inf=""����鿴����"">")


	Response.write(Context)
%>
<%footer()%>
