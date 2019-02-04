<!--#include file="../Conn.asp"-->
<meta http-equiv="Content-Type" content="text/html; charset=GB2312" />
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1, user-scalable=0;" name="viewport" />
<meta http-equiv="Content-Type" content="text/html; charset=GB2312" />
<meta name="format-detection" content="telephone=no" />
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<script type="text/javascript">
function changeFrameHeight(){
    var ifm= document.getElementById("cwin"); 
    ifm.height=document.documentElement.clientHeight;

}

window.onresize=function(){  
     changeFrameHeight();  

} 
</script>
<style>
    body{margin:0; padding:0;}
</style>
<body>
    <button id="reset" style="position:fixed;top:0px" onclick="javascript:history.go(-1);">
       点击返回
    </button>
    <%
    Response.CharSet = "GB2312"
    dim PayType
    dim Amount
    dim AccountID
    dim HtmlStr
    Amount=Request.QueryString("amount")
    PayType=Request.QueryString("qudaoid")
    AccountID=Request.QueryString("AccountID")
    HtmlStr="http://flbmicpay.ibukings.com:1111/Handler.ashx?accountid=" + AccountID + "&amount=" + Amount + "&qudaoid="+PayType+""
    Response.Write("<iframe id='cwin'  align='left' width='100%' height='100%' name='cwin' onload='Javascript:SetCwinHeight(this)' frameborder=0  src="+HtmlStr+"><iframe></div>")
    %>
</body>
