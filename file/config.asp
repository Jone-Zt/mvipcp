<%
config1=Array("重庆时时彩","江西时时彩","天津时时彩","新疆时时彩","黑龙江时时彩","江西11选5","重庆11选5","广东11选5","11运夺金","上海时时乐","江苏快3","广东快乐十分","0","安徽11选5","江苏11选5","辽宁11选5","上海11选5","吉林快3","安徽快3","福建快3","双色球","福彩3D","七乐彩","15选5","0","0","0","0","0","0","大乐透","排列三","排列五","七星彩","22选5","0","0","0","0","0","胜负彩","任选九场","4场进球","6场半全场","竞彩足球","竞彩篮球","北京单场","0","0","0","内蒙快3","广西快3","湖北快3","河北快3","广西快乐十分","湖南快乐十分","辽宁快乐12","浙江快乐12","四川快乐12","浙江11选5","天津快乐十分","重庆快乐十分","快乐8","群英会","福建11选5","黑龙江11选5","河北11选5","上海快3","新疆11选5","吉林11选5","天津11选5","河内五分彩","印尼五分彩","腾讯分分彩","北京赛车")

config2=Array("Ssc","JxSsc","TjSsc","XjSsc","HljSsc","Syxw","CqSyxw","GdSyxw","Syydj","0","JsKs","GdKlsf","0","AhSyxw","JsSyxw","LlSyxw","ShSyxw","JlKs","AhKs","FjKs","Ssq","Sd","Qlc","Swxw","0","0","0","0","0","0","Dlt","Pls","Plw","Qxc","Eexw","0","0","0","0","0","Sfc","Rxjc","Jq4","Zc6","Jczq","Jclq","Bjdc","0","0","0","NmKs","GxKs","HubKs","GxKs","GxKlsf","HnKlsf","LlKlse","ZjKlse","ScKlse","ZjSyxw","TjKlsf","CqKlsf","Klb","Qyh","FjSyxw","HljSyxw","HebSyxw","ShKs","XjSyxw","JlSyxw","TjSyxw","Hnwfc","Ynwfc","Txffc","Pk10")

config3=Array("投注时间：10:00至02:00  每5-10分钟一期，全天120期","投注时间：09:00至23:10 每10分钟一期，共84期","投注时间：09:00至22:00 每10分钟一期，共84期","投注时间：10:00至02:00 每10分钟一期，共96期","投注时间：09:00至23:10 每10分钟一期，共84期","投注时间：09:10至21:59 每10分钟一期，共78期","投注时间：08:50至21:00 每10分钟一期，共85期","投注时间：09:00至23:00 每10分钟一期，共84期","投注时间：08:35至22:55 每10分钟一期，共87期","","投注时间：08:30-22:10 每10分钟一期，全天82期","","","投注时间：08:30至22:00 每10分钟一期，共81期","投注时间：08:20至22:00 每10分钟一期，共82期","投注时间：08:40至22:30 每10分钟一期，共83期","投注时间：08:50至23:50 每10分钟一期，共90期","投注时间：08:20-22:30 每10分钟一期，全天79期","投注时间：08:40-22:00 每10分钟一期，全天80期","投注时间：09:00至22:17 每10分钟一期，共78期","每周二、四、日开奖！","固定奖，玩法简单，每晚21：15开奖！","每周一、三、五晚21：30开奖！","玩法简单，每晚20：30开奖！","","","","","","","每周一,三,六晚20：30分开奖！","玩法简单，每晚20：30开奖！","玩法简单，每晚20：30开奖！","每周二、五、日 20:30开奖","玩法简单，每日开奖","","","","","","单注奖金高！","单注奖金高！","单注奖金高！","单注奖金高！","赛果以全场90分钟（含伤停补时，不含加时赛及点球）为准，返奖率最高73%！","","","","","","投注时间：09:35至22:05 每10分钟一期，共73期","投注时间：09:28至22:28 每10分钟一期，共78期","投注时间：09:00至22:00 每10分钟一期，共78期","河北快3","广西快乐十分","湖南快乐十分","辽宁快乐12","浙江快乐12","四川快乐12","投注时间：08:20至22:30 每10分钟一期，共85期","天津快乐十分","重庆快乐十分","快乐8","群英会","投注时间：08:50至23:50 每10分钟一期，共90期","投注时间：08:55至22:05 每10分钟一期，共79期","河北11选5","上海快3","投注时间：09:50至02:00 每10分钟一期，共97期","吉林11选5","天津11选5","全天投注  每5分钟一期，全天288期","全天投注  每5分钟一期，全天288期","全天投注  每分钟一期","北京赛车")

'KR_News id号
config4=Array(18,17,20,21,16,22,25,24,23,0,143,146,0,149,148,165,167,144,145,0,173,15,174,179,0,0,0,0,0,0,168,14,170,171,172,0,0,0,0,0,175,176,177,178,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,166,0,0,0,0,167,0,0,0,0,0,0,0,0,0,0)

'期数
'config5=Array(120,84,84,96,84,78,85,84,87,0,82,84,0,81,82,83,90,79,80,78,0(双色球))

function getlotid(LottType,configtype)
	configset=eval("config"&configtype)
	igetlotidmax=ubound(configset)
	for igetlotid=0 to igetlotidmax
		if configset(igetlotid)=LottType then
			getlotid=igetlotid
			exit for
		end if
	next
end function

Function lttSelect(caseselect)
lt=request("lt")
if lt="" then
	lt0="selected='selected'"
end if
if caseselect="lttSelect" then
	response.Write("<select name='lt' id='select'>")
	response.Write("<option value='' "&lt0&">选择游戏</option>")
elseif caseselect="lottSelect" then
	response.Write("<select name='lt' id='LottID' onChange='form.submit();'>")
	response.Write("<option value='' "&lt0&">选择游戏</option>")
elseif caseselect="lottgdSelect" then
	response.Write("<select name='lt' id='LottID'>")
elseif caseselect="opencode" then
	response.Write("<select name='lt' id='LottID' onChange='form.submit();'>")
end if
iLotterySettingl=ubound(LotterySetting)
for iLotterySetting=0 to iLotterySettingl
	lresponse=1
	if caseselect="opencode" and instr("Ssq,Sd,Qlc,Dlt,Pls,Plw,Qxc,Swxw,Sfc,Rxjc,Jq4,Zc6",config2(iLotterySetting))>0 then lresponse=0
	if LotterySetting(iLotterySetting)="1" and lresponse=1 then
		config1ls=config1(iLotterySetting)
'response.Write(lt&"----"&config1ls&"<br>")
		selectvalue=config1ls '重庆时时彩
		if caseselect="opencode" then selectvalue=config2(getlotid(config1ls,1)) 'Ssc
		if lt=selectvalue then ltselected=" selected='selected'" else ltselected=""
		response.Write("<option value='"&selectvalue&"'"&ltselected&">"&config1ls&"</option>")
	end if
next
response.Write("</select>")
end Function
%>
