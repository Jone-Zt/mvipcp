<!--#include file="../Conn.asp"-->
<%
GetUrl()
Response.charset = "gb2312"

if KR(request("PayMoney")) <> "" then
BankName=split(KR(unescape(request("BankName"))),",")(0)
BankUserName=KR(unescape(request("BankUserName")))
BankCode=KR(unescape(request("BankCode")))

BankAdd=KR(request("BankAdd"))
PayMoney=KR(request("PayMoney"))
Province=KR(request("Province"))
City=KR(request("City"))
PayWay=KR(request("PayWay"))
UserName=session("un")
PayName=KR(request("PayName"))
Remark="审核中"

sql = "insert into KR_BankPay (BankName,BankUserName,BankCode,BankAdd,PayMoney,Province,City,PayWay,PayTime,PayName,UserName,Remark) values('"&BankName&"','"&BankUserName&"','"&BankCode&"','"&BankAdd&"','"&PayMoney&"','"&Province&"','"&City&"','"&PayWay&"','"&Now()&"','"&PayName&"','"&UserName&"','"&Remark&"')"
conn.execute(sql)
response.write "<script>alert('提交成功！');location.href='Pay.asp?action=BankPost';</script>"
else
response.write "<script>alert('提交内容不能为空！');location.href='./Pay.asp?action=BankPost';</script>"
end if
%>