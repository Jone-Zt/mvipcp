<%
  LtName = "北京赛车" 
  LtSale = "频率：5分钟 全天：179期 销售时段：9:02-23:57"
  sql    = "select id,spec_code,win_money from KR_Lottery_Win WHERE  (Lottery_Name = '北京赛车')" 
  set rs = conn.execute(sql)
%>
<script type="text/javascript">
var WinMoney = {
<% 
 jishu = 1 
 do while not rs.eof
    if jishu > 1 then  echo (",") end if
	indexs = "'"& rs("id") & rs("spec_code")&"'"
	echo ( indexs )
	echo (":")
	echo (rs("win_money"))
	rs.movenext
	jishu = jishu + 1 
 loop
 rs.close
 set rs = nothing 
%>
}

var coindw ='<%=Setting(58)%>';
</script>