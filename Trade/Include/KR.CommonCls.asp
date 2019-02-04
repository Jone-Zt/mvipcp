<%
lotid=kr(request("lotid"))
if lotid="100" then
	Lottery_Name="双色球"
	lotterytype="双色球"
	shuoming="每周二、四、日开奖！"
	Lottery_Type="Ssq"
	Lottery_ID="20"
else
	Lottery_Name=config1(lotid)
	lotterytype=Lottery_Name
	shuoming=config3(lotid)
	Lottery_Type=config2(lotid)
	Lottery_ID=lotid
end if

if id1<>"" then
sql = "select * from KR_Buy where ID='"&id1&"'"
set rs = conn.execute(sql)
ProType=rs("ProType")
lotterytype=rs("lotterytype")
expectinfo=rs("expect")
Lotteryid=rs("Lotteryid")
slogo=left(Lotteryid,8)
elogo=left(slogo,8)
AddTime=rs("AddTime")
UserName=rs("UserName")
mainpaymoney=rs("mainpaymoney")
Allmoney=Formatnumber(rs("Allmoney"),2,-1)
Onemoney=Formatnumber(rs("Onemoney"),2,-1)
BeiShu=rs("BeiShu")
Anumber=rs("Anumber")
bd=rs("isbaodi")
tcSelect=rs("tcSelect")
Prostate=rs("Prostate")
schedule=Formatnumber(rs("schedule"),2,-1)
Codes=rs("Codes")
dantuo=right(protype,2)
if dantuo="胆拖" and 1=2 then
Codes=Replace(Codes,"]","")
Codes=Replace(Codes,"[D:","[<span class=red>胆</span>]")
Codes=Replace(Codes,"[T:"," [<span class=green>拖</span>]")
Codes=Replace(Codes,"|"," [<span class=blue>蓝球</span>]")
end if

if instr(ProType,"北京赛车")>0 then
	'Lottery_Name=left(ProType,4)
	'LottType="Pk10"
	'Lottery_Type=LottType
	Codes=Replace(Codes,"[1011]","[猜冠军]")
	'Codes=Replace(Codes,"[1020]","[猜亚军]")
	Codes=Replace(Codes,"[1021]","[猜亚军]")
	Codes=Replace(Codes,"[1022]","[猜亚军]")
	'Codes=Replace(Codes,"[1030]","[猜季军]")
	Codes=Replace(Codes,"[1031]","[猜季军]")
	Codes=Replace(Codes,"[1032]","[猜季军]")
	'Codes=Replace(Codes,"[1040]","[猜前四]")
	Codes=Replace(Codes,"[1041]","[猜前四]")
	Codes=Replace(Codes,"[1042]","[猜前四]")
	Codes=Replace(Codes,"[1051]","[猜前五]")
	Codes=Replace(Codes,"[1061]","[猜前六]")
	Codes=Replace(Codes,"[1071]","[猜前七]")
	Codes=Replace(Codes,"[1081]","[猜前八]")
	Codes=Replace(Codes,"[1091]","[猜前九]")
	Codes=Replace(Codes,"[1001]","[猜前十]")
	'Codes=Replace(Codes,"[2050]","[定位胆]")
	Codes=Replace(Codes,"[2053]","[前五定位胆]")
	Codes=Replace(Codes,"[2054]","[后五定位胆]")
	'Codes=Replace(Codes,"[3050]","[大小单双]")
	Codes=Replace(Codes,"[3051]","[前五大小单双]")
	Codes=Replace(Codes,"[3052]","[后五大小单双]")
	Codes=Replace(Codes,"[3053]","[冠亚大小单双]")
end if
if lotterytype="时时乐" then
Codes=Replace(Codes,"[101]","[直选复式]")
Codes=Replace(Codes,"[102]","[组选复式]")
Codes=Replace(Codes,"[103]","[组三复式]")
Codes=Replace(Codes,"[104]","[组六复式]")
Codes=Replace(Codes,"[105]","[前二复式]")
Codes=Replace(Codes,"[106]","[后二复式]")
Codes=Replace(Codes,"[107]","[前一复式]")
Codes=Replace(Codes,"[108]","[后一复式]")
Codes=Replace(Codes,"[201]","[直选单式]")
Codes=Replace(Codes,"[202]","[组选单式]")
Codes=Replace(Codes,"[205]","[前二单式]")
Codes=Replace(Codes,"[206]","[后二单式]")
Codes=Replace(Codes,"[207]","[前一单式]")
Codes=Replace(Codes,"[208]","[后一单式]")
Codes=Replace(Codes,"[301]","[直选和值]")
Codes=Replace(Codes,"[302]","[组选和值]")
Codes=Replace(Codes,"[303]","[组三和值]")
Codes=Replace(Codes,"[304]","[组六和值]")
Codes=Replace(Codes,"[305]","[前二和值]")
Codes=Replace(Codes,"[306]","[后二和值]")
Codes=Replace(Codes,"[401","[直选胆拖][<span class=red>胆</span>]")
Codes=Replace(Codes,"[403","[组三胆拖][<span class=red>胆</span>]")
Codes=Replace(Codes,"[404","[组六胆拖][<span class=red>胆</span>]")
Codes=Replace(Codes,";"," [<span class=green>拖</span>]")
Codes=Replace(Codes,"[501]","[直选包号]")
Codes=Replace(Codes,"[505]","[前二包号]")
Codes=Replace(Codes,"[506]","[后二包号]")
Codes=Replace(Codes,"[601]","[直选跨度]")
Codes=Replace(Codes,"[603]","[组三跨度]")
Codes=Replace(Codes,"[604]","[组六跨度]")
end if
if lotterytype="江西11选5" or lotterytype="重庆11选5" or lotterytype="广东11选5" or lotterytype="安徽11选5" or lotterytype="江苏11选5" or lotterytype="辽宁11选5" or lotterytype="浙江11选5" or lotterytype="上海11选5" or lotterytype="福建11选5" or lotterytype="黑龙江11选5" or lotterytype="河北11选5" or lotterytype="新疆11选5" or lotterytype="天津11选5" or lotterytype="吉林11选5" or lotterytype="11运夺金" or lotterytype="辽宁快乐12" or lotterytype="浙江快乐12" or lotterytype="四川快乐12" then
Codes=Replace(Codes,"[101]","[前一复式]")
Codes=Replace(Codes,"[102]","[选二复式]")
Codes=Replace(Codes,"[103]","[选三复式]")
Codes=Replace(Codes,"[104]","[选四复式]")
Codes=Replace(Codes,"[105]","[选五复式]")
Codes=Replace(Codes,"[106]","[选六复式]")
Codes=Replace(Codes,"[107]","[选七复式]")
Codes=Replace(Codes,"[108]","[选八复式]")
Codes=Replace(Codes,"[201]","[选一单式]")
Codes=Replace(Codes,"[202]","[选二单式]")
Codes=Replace(Codes,"[203]","[选三单式]")
Codes=Replace(Codes,"[204]","[选四单式]")
Codes=Replace(Codes,"[205]","[选五单式]")
Codes=Replace(Codes,"[206]","[选六单式]")
Codes=Replace(Codes,"[207]","[选七单式]")
Codes=Replace(Codes,"[208]","[选八单式]")
Codes=Replace(Codes,"[302]","[选二胆拖][<span class=red>胆</span>]")
Codes=Replace(Codes,"[303]","[选三胆拖][<span class=red>胆</span>]")
Codes=Replace(Codes,"[304]","[选四胆拖][<span class=red>胆</span>]")
Codes=Replace(Codes,"[305]","[选五胆拖][<span class=red>胆</span>]")
Codes=Replace(Codes,"[306]","[选六胆拖][<span class=red>胆</span>]")
Codes=Replace(Codes,"[307]","[选七胆拖][<span class=red>胆</span>]")
Codes=Replace(Codes,"[308]","[选八胆拖][<span class=red>胆</span>]")
Codes=Replace(Codes,"[302","[选二胆拖][<span class=red>胆</span>]")
Codes=Replace(Codes,"[303","[选三胆拖][<span class=red>胆</span>]")
Codes=Replace(Codes,"[304","[选四胆拖][<span class=red>胆</span>]")
Codes=Replace(Codes,"[305","[选五胆拖][<span class=red>胆</span>]")
Codes=Replace(Codes,"[306","[选六胆拖][<span class=red>胆</span>]")
Codes=Replace(Codes,"[307","[选七胆拖][<span class=red>胆</span>]")
Codes=Replace(Codes,"[308","[选八胆拖][<span class=red>胆</span>]")
Codes=Replace(Codes,"[309","[前三组选胆拖][<span class=red>胆</span>]")
Codes=Replace(Codes,"[310","[前二组选胆拖][<span class=red>胆</span>]")
Codes=Replace(Codes,";"," [<span class=green>拖</span>]")
Codes=Replace(Codes,"[401]","[前三直选]")
Codes=Replace(Codes,"[403]","[前三单式]")
Codes=Replace(Codes,"[404]","[前三组选]")
Codes=Replace(Codes,"[405]","[前三组选单式]")
Codes=Replace(Codes,"[501]","[前二直选]")
Codes=Replace(Codes,"[502]","[前二单式]")
Codes=Replace(Codes,"[503]","[前二组选]")
Codes=Replace(Codes,"[504]","[前二组选单式]")
end if
if lotterytype="重庆时时彩" or lotterytype="江西时时彩" or lotterytype="天津时时彩" or lotterytype="新疆时时彩" or lotterytype="黑龙江时时彩" or lotterytype="河内五分彩" or lotterytype="腾讯分分彩" then
Codes=Replace(Codes,"[104]","[五星复式]")
Codes=Replace(Codes,"[105]","[三星复式]")
Codes=Replace(Codes,"[106]","[二星复式]")
Codes=Replace(Codes,"[107]","[一星复式]")
Codes=Replace(Codes,"[108]","[五星组合]")
Codes=Replace(Codes,"[109]","[三星组合]")
Codes=Replace(Codes,"[110]","[二星组合]")
Codes=Replace(Codes,"[111]","[大小单双]")
Codes=Replace(Codes,"[112]","[五星单式]")
Codes=Replace(Codes,"[113]","[三星直选单式]")
Codes=Replace(Codes,"[114]","[二星直选单式]")
Codes=Replace(Codes,"[116]","[二星组选复式]")
Codes=Replace(Codes,"[117]","[二星组选单式]")
Codes=Replace(Codes,"[118]","[二星组选和值]")
Codes=Replace(Codes,"[124]","[五星通选]")
Codes=Replace(Codes,"[125]","[五星通选单式]")
Codes=Replace(Codes,"[304]","[三星直选和值]")
Codes=Replace(Codes,"[305]","[二星直选和值]")
Codes=Replace(Codes,"[311]","[二星组选包胆]")
Codes=Replace(Codes,"[315]","[组三]")
Codes=Replace(Codes,"[316]","[组六]")
Codes=Replace(Codes,"[317]","[包胆]")
Codes=Replace(Codes,"[318]","[三星组选和值]")
Codes=Replace(Codes,"[319]","[三星组合复式]")
Codes=Replace(Codes,"[401","[组三胆拖][<span class=red>胆</span>]")
Codes=Replace(Codes,"[402","[组六胆拖][<span class=red>胆</span>]")
Codes=Replace(Codes,"[405","[直选胆拖][<span class=red>胆</span>]")
Codes=Replace(Codes,"[406","[前三直选胆拖][<span class=red>胆</span>]")
Codes=Replace(Codes,"[407","[中三直选胆拖][<span class=red>胆</span>]")
Codes=Replace(Codes,";"," [<span class=green>拖</span>]")
Codes=Replace(Codes,"[424]","[前一]")
Codes=Replace(Codes,"[425]","[任选二]")
Codes=Replace(Codes,"[703]","[三星组三单式]")
Codes=Replace(Codes,"[704]","[三星组六单式]")
Codes=Replace(Codes,"[705]","[组三和值]")
Codes=Replace(Codes,"[706]","[三星组六和值]")
Codes=Replace(Codes,"[801]","[四星单式]")
Codes=Replace(Codes,"[802]","[四星复式]")
Codes=Replace(Codes,"[157]","[直选组合]")
Codes=Replace(Codes,"[177]","[组选包胆]")'三组包胆
Codes=Replace(Codes,"[178]","[前三组选包胆]")
Codes=Replace(Codes,"[179]","[中三组选包胆]")
Codes=Replace(Codes,"[197]","[三组包点]")
Codes=Replace(Codes,"[205]","[前三组六包号]")
Codes=Replace(Codes,"[206]","[前三组三包号]")
Codes=Replace(Codes,"[201]","[前三组三单式]")
Codes=Replace(Codes,"[202]","[前三组六单式]")
Codes=Replace(Codes,"[555]","[前三直选复式]")
Codes=Replace(Codes,"[455]","[中三直选复式]")
Codes=Replace(Codes,"[466]","[中三直选单式]")
Codes=Replace(Codes,"[666]","[前三直选单式]")
Codes=Replace(Codes,"[335]","[前三组三复式]")
Codes=Replace(Codes,"[235]","[中三组三复式]")
Codes=Replace(Codes,"[231]","[中三组三单式]")
Codes=Replace(Codes,"[715]","[中三组三和值]")
Codes=Replace(Codes,"[336]","[前三组六复式]")
Codes=Replace(Codes,"[236]","[中三组六复式]")
Codes=Replace(Codes,"[212]","[中三组六单式]")
Codes=Replace(Codes,"[716]","[中三组六和值]")
Codes=Replace(Codes,"[725]","[前三组三和值]")
Codes=Replace(Codes,"[726]","[前三组六和值]")
Codes=Replace(Codes,"[364]","[前三直选和值]")
Codes=Replace(Codes,"[264]","[中三直选和值]")
Codes=Replace(Codes,"[203","[前三组三胆拖][<span class=red>胆</span>]")
Codes=Replace(Codes,"[103","[中三组三胆拖][<span class=red>胆</span>]")
Codes=Replace(Codes,"[204","[前三组六胆拖][<span class=red>胆</span>]")
Codes=Replace(Codes,"[102","[中三组六胆拖][<span class=red>胆</span>]")
Codes=Replace(Codes,"[999]","[定位]")
Codes=Replace(Codes,"[502]","[前三不定位]")
Codes=Replace(Codes,"[501]","[后三不定位]")
Codes=Replace(Codes,"[1000]","[龙虎万千]")
Codes=Replace(Codes,"[1001]","[龙虎万百]")
Codes=Replace(Codes,"[1002]","[龙虎万十]")
Codes=Replace(Codes,"[1003]","[龙虎万个]")
Codes=Replace(Codes,"[1004]","[龙虎千百]")
Codes=Replace(Codes,"[1005]","[龙虎千十]")
Codes=Replace(Codes,"[1006]","[龙虎千个]")
Codes=Replace(Codes,"[1007]","[龙虎百十]")
Codes=Replace(Codes,"[1008]","[龙虎百个]")
Codes=Replace(Codes,"[1009]","[龙虎十个]")
end if
if lotterytype="江苏快3" or lotterytype="安徽快3" or lotterytype="吉林快3" or lotterytype="福建快3" or lotterytype="内蒙快3" or lotterytype="广西快3" or lotterytype="湖北快3" or lotterytype="河北快3" or lotterytype="上海快3" then
Codes=Replace(Codes,"[101]","[和值]")
Codes=Replace(Codes,"[102]","[二同号单选]")
Codes=Replace(Codes,"[103]","[二同号复选]")
Codes=Replace(Codes,"[104]","[二不同号]")
Codes=Replace(Codes,"[105]","[三不同号]")
Codes=Replace(Codes,"[106]","[三同号单选]")
Codes=Replace(Codes,"[107]","[三同号通选]")
Codes=Replace(Codes,"[108]","[三连号通选]")
diycodes = split(Code)
end if
if lotterytype="广东快乐十分" or lotterytype="湖南快乐十分" then
Codes=Replace(Codes,"[101]","[选一数投]")
Codes=Replace(Codes,"[102]","[选一红投]")
Codes=Replace(Codes,"[201]","[选二连直]")
Codes=Replace(Codes,"[202]","[选二连组]")
Codes=Replace(Codes,"[203]","[选二连组胆拖]")
Codes=Replace(Codes,"[301]","[选三前直]")
Codes=Replace(Codes,"[302]","[选三前组]")
Codes=Replace(Codes,"[303]","[选三连组胆拖]")
Codes=Replace(Codes,"[401]","[任选二]")
Codes=Replace(Codes,"[402]","[任二胆拖]")
Codes=Replace(Codes,"[501]","[任选三]")
Codes=Replace(Codes,"[502]","[任选三胆拖]")
Codes=Replace(Codes,"[601]","[任选四]")
Codes=Replace(Codes,"[602]","[任选四胆拖]")
Codes=Replace(Codes,"[701]","[任选五]")
Codes=Replace(Codes,"[702]","[任选五胆拖]")
end if
'if instr(codes,"[大小单双]")<>0 then
'Codesa=split(Codes,"$")
'Codesal=ubound(Codesa)
'Codes=""
'	for ic=0 to Codesal
'	Codest=Codesa(ic)
'	if ic>0 then Codes=Codes&"$"
''	if instr(Codest,"[大小单双]")>0 then
''		Codest=replace(Codest,"2","大")
''		Codest=replace(Codest,"1","小")
''		Codest=replace(Codest,"5","单")
''		Codest=replace(Codest,"4","双")
''	end if
''	Codes=Codes&Codest
''	next
'end if
if instr(codes,"[大小单双]")>0 or instr(Codes,"龙虎")>0 or (instr(codes,"[和值]")>0 and instr(lotterytype,"快3")>0) then
		Codesa=split(Codes,"$")
		Codesal=ubound(Codesa)
		Codes=""
			for ic=0 to Codesal
			Codest=Codesa(ic)
			if ic>0 then Codes=Codes&"$"
			if instr(Codest,"[大小单双]")>0 or instr(Codest,"龙虎")>0 then
				Codest=replace(Codest,"2","大")
				Codest=replace(Codest,"1","小")
				Codest=replace(Codest,"5","单")
				Codest=replace(Codest,"4","双")
				Codest=replace(Codest,"a","龙")
				Codest=replace(Codest,"b","虎")
				Codest=replace(Codest,"c","和")
			end if
			if instr(Codest,"[和值]")>0 and instr(lotterytype,"快3")>0 then
				Codest=replace(Codest,"20","大")
				Codest=replace(Codest,"21","小")
				Codest=replace(Codest,"22","单")
				Codest=replace(Codest,"23","双")
			end if
			Codes=Codes&Codest
			next
end if

Codes=Replace(Codes,"$","<div style=""margin-bottom:4px;height:4px;border-bottom:1px solid #D5E3EE;width:97%""></div>")
Codes=Replace(Codes,"]an class=red>","]")
baodijd=100*rs("baodinum")/rs("anumber")
baodijr=Formatnumber(rs("baodinum")*rs("Onemoney"),2,-1)
wininfo=rs("wininfo")
wincost=rs("wincost")
isreturn=rs("isreturn")
iszhuihao=rs("iszhuihao")
istop=rs("istop")
isshow=rs("isshow")
allperson=rs("allperson")
addtime=rs("addtime")
fqtime=Format_Time(rs("addtime"),2)
if lotterytype="重庆时时彩" or lotterytype="河内五分彩" then
qihao=mid(rs("expect"),8,3)
qh=mid(right(rs("expect"),10),8,3)
else
qihao=mid(rs("expect"),8,2)
qh=mid(right(rs("expect"),9),8,2)
end if
ishm=rs("ishm")
object=rs("object")
manyuan=rs("anumber")-rs("hnumber")
tcSelect=rs("tcSelect")
if wincost<>"" then
tcmony=Formatnumber(rs("wincost")*rs("tcSelect")/100,2,-1)
end if
sql = "update KR_Buy set clickstime=clickstime+1 where id="&id1
conn.execute(sql)
if rs("prostate")="未生效" then
zt="未生效"
elseif rs("prostate")="已生效" then
zt="已生效"
elseif rs("prostate")="未中奖" then
zt="未中奖"
elseif rs("prostate")="已中奖" then
zt="已中奖"
elseif instr(rs("prostate"),"撤单") then
zt="已撤单"
end if
set rs=nothing
end if

Function OpenWin()
%><!--弹出登录窗口开始-->
<div id="_login_common" style="display: none;;border-bottom:1px solid #ff0000">
<div><span style="margin-top:100px" id="nyroModalContent"></span></div>
<div style="background:#fff;height:15px"></div>
<h2 id="login_tip" style="display: none;width:90%;font-size:12px;margin:0 10px 10px 18px;background:#fff6f1;border:1px solid #ff7c7c;height:25px;line-height:25px;color:#333333"></h2>
<table id=PopLogin class=dl_tbl border=0 cellSpacing=0 cellPadding=0 width="100%">
<colgroup>
<col width=40>
<col width=150>
<col></colgroup>
<tbody>
<tr>
<td align=left>用户名：</td>
<td align=left><INPUT class="tips_txt" name="username_common" id="username_common"></td>
</tr>
<tr>
<td align=left>密　码：</td>
<td align=left><INPUT class="tips_txt" type=password name="password_common" id="password_common"></td>
</tr>
<tr>
<td align=left>验证码：</td>
<td align=left><input type="text" onfocus="loginstatus.showImage()" class="tips_yzm" name="vcode_common" id="vcode_common" value="" title="验证码"> <span id="validcodespan"><img style="height:26px;width:80px;cursor:pointer" alt="点击刷新" title="点击刷新" align="absMiddle" src="/plus/verifycode.html" onClick='this.src="/plus/verifycode.html?n="+ Math.random();'></span></td>
<tr>
<td></td>
<td align=left><button type="button" id="commonLoginButton" name="commonLoginButton"  style="cursor:pointer;MARGIN-RIGHT: 18px" class=btn_Dora_b> 登 录 </button></td>
</tr>
</tbody>
</table>
</div>
<!--弹出登录窗口结束-->
<!--弹出投注提示窗口开始-->
<div class="notifyicon tip-3" style="width: 360px; overflow: hidden; top: 295px; left: -9999px;">
<div class="notifyicon_space"></div>
<div class="notifyicon_arrow"><s></s><em></em></div>
<div class="notifyicon_content"></div>
</div>
<div id="_box_common" style="display: none;">
<div style="padding:10px">
<br/>
<font style="font-size: 14px;line-height:30px; color:#666;" class="t_weight"></font>
</div>
</div> 
<div id="_config_common" style="display: none;">
<div class="pop_layer_content">
<div class="pop_add">
<br/>
<font style="font-size: 14px;line-height:30px; color:#666;"class="t_weight"></font>
</div>
</div>
</div> 
<!--弹出投注提示窗口结束-->
<!--弹出数据载入窗口开始-->
<div id="_box_loading" style="display: none;">
<div class="pop_layer_content">
<div class="pop_add">
<img src="/Images/loading.gif"  alt="数据载入中..."/>
</div>
</div>
</div>
<!--弹出数据载入结束-->
<!--弹出合玩投注成功开始-->
<div id="_ajax_common_div4" style="display: none;">
<div class="tc_x tc_x2">
<div class="gongx">
<p><span id="_ajax_common_Info4">发起投注成功！</span></p>
</div>
<p><span><a target="_blank;" href="/User/?u=Touzhu">投注记录</a></span> | <span><a href="/User/?u=Pay"  target="_blank;">在线充值</a></span></p>
<input onclick="alertdiv.close('_ajax_common_div4');" type="button" class="input02" />
<input type="hidden" id="sytime_second" value="5"/>
</div>
</div>
<!--弹出合玩投注成功结束-->
<!--弹出投注投注成功开始-->
<div id="_ajax_common_div5" style="display: none;">
<div class="tc_x tc_x2">
<div class="gongx">
<p><span id="_ajax_common_Info5">发起合玩成功！</span></p>
</div>
<p><span><a target="_blank;" href="/User/?u=Touzhu">投注记录</a></span> | <span><a href="/User/?u=Pay"  target="_blank;">在线充值</a></span></p>
<input type="button" class="input02" id="_ajax_common_btn5" />
<input type="hidden" id="sytime2_second" value="5"/>
</div>
</div>
<!--弹出投注投注成功结束-->
<div id="overduePrompt" style="display: none;">
<div style="height: 180px; " align="center">
<p style="font-size:14px;line-height:30px; padding-top:20px; text-align: center">您好，<font color='grey' id="preIssue">-</font>期已截止<BR>当前期是<font color='red' id="currentIssue">-</font>期<BR>投注时请确认您选择的期号<BR>
<input onclick="window.location.reload();" type="button" class="input02" />
<input type="hidden" id="close_time_second" value="5"/></p>
</div>
</div>
<!--弹出窗口结束-->
<%
End Function%>