<!--#include file="../Conn.asp"-->
<!--#include file="../Include/md5.asp"-->
<!--#include file="../Include/KR.CommonCls.asp"--><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>代理中心 - 添加会员 - <%=Setting(0)%></title>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta http-equiv="content-type" content="text/html;charset=GBK">
<meta name="Keywords" content="<%=Setting(0)%>" />
<meta name="Description" content="<%=Setting(0)%>" />
<link href="../Css/Basic.css" rel="stylesheet">
<link href="../Css/User.css" rel="stylesheet">
<script type="text/javascript" src="/JS/common.min.js" ></script>
<script type="text/javascript" src="/JS/Select.js"></script>
<script type="text/javascript" src="/JS/Jquery-1.7.2.Min.js"></script>
<script type="text/javascript" src="/JS/jquery-ui-1.8.2.custom.min.js"></script>
<script type="text/javascript" src="/JS/Alertdiv.js"></script>
<script type="text/javascript" src="/JS/loginstatus.js"></script>
<script type="text/javascript" src="/JS/tool2.js"></script>
<script type="text/javascript" src="/JS/Utility.js"></script>
</head>
<div class="head"><h2 id="navtit">添加会员</h2><a href="javascript:history.go(-1);" class="btn-qgkj" id="sourceUrl"><span><em></em></span>返回</a></div>
<body class="none_bg"><!--头部链接开始-->
<%buyhead()%>
<!--头部链接开始-->
<!--主导航-->
<div class="docBody clearfix">
<% UserLeft()%>
<div class="my_right">
<script language="javascript">
<!--
function JHshNumberText(obj)
{
    if ( !((window.event.keyCode >= 48) && (window.event.keyCode <= 57)) && (window.event.keyCode != 46))
    {
    window.event.keyCode = 0 ;
    }
    var obj11 = window.event.srcElement == null ? window.event.target : window.event.srcElement;
    return parseInt( obj11.getAttribute("keyCode"), 10);
}
-->
</script>
<script language="javascript">
function check_data(form){
 	if (form.user_name.value == '' ){
		alert('请输入登录帐户名');
		form.user_name.focus();
		return false;
	}
	if (form.passwd.value == ''){
		alert('请输入登录密码');
		form.passwd.focus();
		return false;
	} 
    //记录不含引号的文本框数量    
 var resultTag = 0;    
    //记录所有text文本框数量    
    var flag = 0;    
 for(var i = 0; i < form.elements.length; i ++)    
 {    
  if(form.elements[i].type=="text"||form.elements[i].type=="password")    
  {    
  flag = flag + 1;    
   //此处填写所要过滤的特殊符号    
   //注意：修改####处的字符，其它部分不许修改".    
   //if(/^[^####]*$/.test(form.elements[i].value))     
   
   if(/^[^\*"'%;]*$/.test(form.elements[i].value))   
      resultTag = resultTag+1;   
   else   
    form.elements[i].select();   
  }   
 }   
  
    /**   
     * 如果含引号的文本框等于全部文本框的值，则校验通过   
     */   
 if(resultTag == flag)   
  return true;   
 else   
 {   
  alert("文本框中不能含有\n\n 1 单引号: ' \n 2 分号: \; \n 3 特殊符号: * % \n 4 单词: and or \n\n请检查输入！");    
  return false;    
 }    
}
</script>

<%
sql="select count(*) from KR_User where regfrom like '%"&session("un")&"%'"
set ra=conn.execute(sql)
xiajisl=ra(0)
set ra=nothing
SQL = "Select * from KR_User where username='"&session("un")&"'"
set rr=conn.execute(sql)
contrl=rr("contrl")
regf=rr("username")
regfrom=rr("regfrom")
Proxy_Quota=cdbl(rr("Proxy_Quota")-xiajisl)
if Proxy_Quota<=0 then
Proxy_Quota1=0
else
Proxy_Quota1=Proxy_Quota
end if
rebate=cdbl(rr("rebate"))
if rebate<=0 then
rebate1=0
else
rebate1=cdbl(rr("rebate"))-Setting(64)
end if
set rr=nothing
 

user_name=trim(KR(request.Form("user_name"))) 
user_name = replace(user_name,"admin","")

if user_name<>"" then

Set abcd = conn.execute("SELECT COUNT(1) FROM KR_User Where dldiy='"&request.Form("dldiy")&"'")

if abcd(0) > 0 And request.Form("user_role")=1 Then
	response.write "<script language='javascript'>alert('输入代理参数已经被使用了!');history.back(-1)</script>"
        response.end   
End If  
abcd.close
Set abcd = Nothing

   sql="select username from KR_User where username='"&user_name&"'"
   set rw=conn.execute(sql)
   if rw.eof then
 
	SQL = "Select top 1 * from KR_User"
	Set Rs = Server.CreateObject("ADODB.Recordset")
	Rs.Open SQL,conn,1,2
	Rs.addnew
	Rs("contrl") = 0
	Rs("islock") = 0
	Rs("username") = trim(user_name)
	Rs("userpass") = md5(request.Form("passwd"),16)
	Rs("regfrom")  = "&"&session("un")&"&"&regfrom
	Rs("daili")    = KR(request.Form("user_role"))
	Rs("dldiy")    = KR(request.Form("dldiy"))
	Rs("QQ")    = KR(request.Form("QQ"))

		if Setting(62)>=cdbl(request.Form("rebate")) and (cdbl(request.Form("rebate"))<= rebate1 or rebate1<0) and cdbl(request.Form("rebate"))>=0 then
	       Rs("rebate")   = cdbl(request.Form("rebate"))
		else
		   response.write "<script language='javascript'>alert('返点值不能超过或等于自己的返点值');history.back(-1)</script>"
		   response.end   
	    end if
		
		if cdbl(request.Form("rebate"))=8 or cdbl(request.Form("rebate"))=12 or cdbl(request.Form("rebate"))=12 then
	       Rs("rebate")   = cdbl(request.Form("rebate"))
		else
		   response.write "<script language='javascript'>alert('返点值设置只能是8或者12');history.back(-1)</script>"
		   response.end   
	    end if
		
		if Proxy_Quota1>=cdbl(request.Form("Proxy_Quota")) then
	       Rs("Proxy_Quota")   = cdbl(request.Form("Proxy_Quota"))
		else
		   response.write "<script language='javascript'>alert('输入的开户限额已经超过了您所剩的开户限额');history.back(-1)</script>"
		   response.end   
	    end if
	Rs.update
    set rs=nothing
    %>
<script>alert('恭喜您添加会员成功！');document.location.href='Agent_Add.html'</script>
<%else%>
<script>alert('对不起，此用户名已经有人使用！');document.location.href='Agent_Add.html'</script>
<%
end if 
set rw=nothing
end if 
%><%if Proxy_Quota1=0 then%>
<table style="margin-top:8px;" width="100%" border="0" cellspacing="0" cellpadding="0">
<tr>
<td colspan="4" height="40" align="center" style="font-size:14px; font-weight:bold;color:red;">对不起您的可开户配额不足，请联系你的上级以增加更多的开户配额。</td>
</tr>
</table><%else%>
<TABLE style="BORDER-bottom: 0px;BORDER-right: 0px;" class=my_tbl border=0 cellSpacing=0 cellPadding=0 width="100%">
<form action="" method="Post" name="frmAdd" id="frmAdd" onSubmit="return check_data(this)">
<tr>
<td align="right">会员级别：<%=request.Form("rebate")%>/<%=xiajisl%>/<%=Proxy_Quota%>/<%=Proxy_Quota1%></td>
<td align="left">&nbsp;&nbsp;<input type="radio" name="user_role" id="user_role_2" value="1" checked="checked" />&nbsp;代理用户&nbsp;&nbsp;<input type="radio" name="user_role" id="user_role_3" value="<%if Setting(9)=0 then%>2<%else%>0<%end if%>" />&nbsp;会员用户</td>
</tr>
<tr>
<td align="right">登录帐户名：</td>
<td align="left">&nbsp;&nbsp;<input type="text" class="basic_txt" name="user_name" id="user_name" value="" maxlength="16" /><span>（由 0-9、a-z、A-Z 组成的6-16个字符）</span></td>
</tr>
<tr>
<td align="right">登录密码：</td>
<td align="left">&nbsp;&nbsp;<input class="basic_txt" type="password" name="passwd" id="passwd" value="" size="21" maxlength="16" /><span>（由数字和字母组成6-16个字符）</span></td>
</tr>
<tr>
<td align="right">用户QQ号：</td>
<td align="left">&nbsp;&nbsp;<input class="basic_txt" type="text" name="qq" id="qq" value="" maxlength="16" /><span>（由数字和字母组成6-16个字符）</span></td>
</tr>

<tbody id="tbody">

<tr>
  <td align="right">代理参数：</td>
  <td align="left">&nbsp;&nbsp;<input class="basic_txt" type="text" name="dldiy" id="dldiy" value="" maxlength="16" /><span>（由数字和字母组成6-16个字符）</span></td>
</tr>

  <tr>
    <td align="right">设置返点：</td>
    <td align="left">&nbsp;&nbsp;<input name="rebate" class="basic_txt" type="text" value="<%=rebate1%>" style="width:50px;" onKeyUp="this.value=this.value.replace(/[^\d]/g,'');" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))" />(请设置:<%=Setting(63)%>%或<%if rebate<Setting(64) then Response.Write rebate-Setting(64) else  Response.Write  "0" end if  %>%)</td>
  </tr>

<tr>
  <td align="right">开户限额：</td>
  <td align="left">&nbsp;&nbsp;<input name="Proxy_Quota" class="basic_txt" type="text" value="<%=Proxy_Quota1%>" style="width:50px;" onKeyUp="this.value=this.value.replace(/[^\d]/g,'');" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))" />(范围:小于 <%=Proxy_Quota1%>)</td>
</tr>

</tbody>

</table>
<table style="margin-top:8px;" width="100%" border="0" cellspacing="0" cellpadding="0">
<tr>
<td colspan="4" height="40" align="center"><input name="cmdAdd" type="submit" class="login_btn" id="cmdAdd" value="添 加" /></td>
</tr>
</table>
</FORM><%end if%>
</div>
</div>
<!--详细内容iframe-end-->
</div>

<script>

  $(function(){
    $("input[name='user_role']").click(function(){
      var i = $("#tbody");
       if(i.html())
          $(this).val() == 2 ? i.hide() : i.show();
    });
  });

</script>


<!--底部包含文件开始-->
<% footer() %>
<!--底部包含文件结束-->