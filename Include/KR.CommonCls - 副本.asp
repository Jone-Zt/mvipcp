<%
Function lottidSelect()
response.Write("<select style='font-size:16px;height:33px;vertical-align:-1px;' name='lotid'>")
response.Write("<option value=''>������Ϸ</option>")
iLotterySettingl=ubound(LotterySetting)
for iLotterySetting=0 to iLotterySettingl
	if LotterySetting(iLotterySetting)="1" then
		config1ls=config1(iLotterySetting) '����ʱʱ��
		selectvalue=config2(getlotid(config1ls,1)) 'Ssc
		response.Write("<option value='"&selectvalue&"'>"&config1ls&"</option>")
	end if
next
response.Write("</select>")
end Function
%>