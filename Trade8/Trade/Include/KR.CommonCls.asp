<%
lotid=kr(request("lotid"))
if lotid="100" then
	Lottery_Name="˫ɫ��"
	lotterytype="˫ɫ��"
	shuoming="ÿ�ܶ����ġ��տ�����"
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
if dantuo="����" and 1=2 then
Codes=Replace(Codes,"]","")
Codes=Replace(Codes,"[D:","[<span class=red>��</span>]")
Codes=Replace(Codes,"[T:"," [<span class=green>��</span>]")
Codes=Replace(Codes,"|"," [<span class=blue>����</span>]")
end if

if instr(ProType,"��������")>0 then
	'Lottery_Name=left(ProType,4)
	'LottType="Pk10"
	'Lottery_Type=LottType
	Codes=Replace(Codes,"[1011]","[�¹ھ�]")
	'Codes=Replace(Codes,"[1020]","[���Ǿ�]")
	Codes=Replace(Codes,"[1021]","[���Ǿ�]")
	Codes=Replace(Codes,"[1022]","[���Ǿ�]")
	'Codes=Replace(Codes,"[1030]","[�¼���]")
	Codes=Replace(Codes,"[1031]","[�¼���]")
	Codes=Replace(Codes,"[1032]","[�¼���]")
	'Codes=Replace(Codes,"[1040]","[��ǰ��]")
	Codes=Replace(Codes,"[1041]","[��ǰ��]")
	Codes=Replace(Codes,"[1042]","[��ǰ��]")
	Codes=Replace(Codes,"[1051]","[��ǰ��]")
	Codes=Replace(Codes,"[1061]","[��ǰ��]")
	Codes=Replace(Codes,"[1071]","[��ǰ��]")
	Codes=Replace(Codes,"[1081]","[��ǰ��]")
	Codes=Replace(Codes,"[1091]","[��ǰ��]")
	Codes=Replace(Codes,"[1001]","[��ǰʮ]")
	'Codes=Replace(Codes,"[2050]","[��λ��]")
	Codes=Replace(Codes,"[2053]","[ǰ�嶨λ��]")
	Codes=Replace(Codes,"[2054]","[���嶨λ��]")
	'Codes=Replace(Codes,"[3050]","[��С��˫]")
	Codes=Replace(Codes,"[3051]","[ǰ���С��˫]")
	Codes=Replace(Codes,"[3052]","[�����С��˫]")
	Codes=Replace(Codes,"[3053]","[���Ǵ�С��˫]")
end if
if lotterytype="ʱʱ��" then
Codes=Replace(Codes,"[101]","[ֱѡ��ʽ]")
Codes=Replace(Codes,"[102]","[��ѡ��ʽ]")
Codes=Replace(Codes,"[103]","[������ʽ]")
Codes=Replace(Codes,"[104]","[������ʽ]")
Codes=Replace(Codes,"[105]","[ǰ����ʽ]")
Codes=Replace(Codes,"[106]","[�����ʽ]")
Codes=Replace(Codes,"[107]","[ǰһ��ʽ]")
Codes=Replace(Codes,"[108]","[��һ��ʽ]")
Codes=Replace(Codes,"[201]","[ֱѡ��ʽ]")
Codes=Replace(Codes,"[202]","[��ѡ��ʽ]")
Codes=Replace(Codes,"[205]","[ǰ����ʽ]")
Codes=Replace(Codes,"[206]","[�����ʽ]")
Codes=Replace(Codes,"[207]","[ǰһ��ʽ]")
Codes=Replace(Codes,"[208]","[��һ��ʽ]")
Codes=Replace(Codes,"[301]","[ֱѡ��ֵ]")
Codes=Replace(Codes,"[302]","[��ѡ��ֵ]")
Codes=Replace(Codes,"[303]","[������ֵ]")
Codes=Replace(Codes,"[304]","[������ֵ]")
Codes=Replace(Codes,"[305]","[ǰ����ֵ]")
Codes=Replace(Codes,"[306]","[�����ֵ]")
Codes=Replace(Codes,"[401","[ֱѡ����][<span class=red>��</span>]")
Codes=Replace(Codes,"[403","[��������][<span class=red>��</span>]")
Codes=Replace(Codes,"[404","[��������][<span class=red>��</span>]")
Codes=Replace(Codes,";"," [<span class=green>��</span>]")
Codes=Replace(Codes,"[501]","[ֱѡ����]")
Codes=Replace(Codes,"[505]","[ǰ������]")
Codes=Replace(Codes,"[506]","[�������]")
Codes=Replace(Codes,"[601]","[ֱѡ���]")
Codes=Replace(Codes,"[603]","[�������]")
Codes=Replace(Codes,"[604]","[�������]")
end if
if lotterytype="����11ѡ5" or lotterytype="����11ѡ5" or lotterytype="�㶫11ѡ5" or lotterytype="����11ѡ5" or lotterytype="����11ѡ5" or lotterytype="����11ѡ5" or lotterytype="�㽭11ѡ5" or lotterytype="�Ϻ�11ѡ5" or lotterytype="����11ѡ5" or lotterytype="������11ѡ5" or lotterytype="�ӱ�11ѡ5" or lotterytype="�½�11ѡ5" or lotterytype="���11ѡ5" or lotterytype="����11ѡ5" or lotterytype="11�˶��" or lotterytype="��������12" or lotterytype="�㽭����12" or lotterytype="�Ĵ�����12" then
Codes=Replace(Codes,"[101]","[ǰһ��ʽ]")
Codes=Replace(Codes,"[102]","[ѡ����ʽ]")
Codes=Replace(Codes,"[103]","[ѡ����ʽ]")
Codes=Replace(Codes,"[104]","[ѡ�ĸ�ʽ]")
Codes=Replace(Codes,"[105]","[ѡ�帴ʽ]")
Codes=Replace(Codes,"[106]","[ѡ����ʽ]")
Codes=Replace(Codes,"[107]","[ѡ�߸�ʽ]")
Codes=Replace(Codes,"[108]","[ѡ�˸�ʽ]")
Codes=Replace(Codes,"[201]","[ѡһ��ʽ]")
Codes=Replace(Codes,"[202]","[ѡ����ʽ]")
Codes=Replace(Codes,"[203]","[ѡ����ʽ]")
Codes=Replace(Codes,"[204]","[ѡ�ĵ�ʽ]")
Codes=Replace(Codes,"[205]","[ѡ�嵥ʽ]")
Codes=Replace(Codes,"[206]","[ѡ����ʽ]")
Codes=Replace(Codes,"[207]","[ѡ�ߵ�ʽ]")
Codes=Replace(Codes,"[208]","[ѡ�˵�ʽ]")
Codes=Replace(Codes,"[302]","[ѡ������][<span class=red>��</span>]")
Codes=Replace(Codes,"[303]","[ѡ������][<span class=red>��</span>]")
Codes=Replace(Codes,"[304]","[ѡ�ĵ���][<span class=red>��</span>]")
Codes=Replace(Codes,"[305]","[ѡ�嵨��][<span class=red>��</span>]")
Codes=Replace(Codes,"[306]","[ѡ������][<span class=red>��</span>]")
Codes=Replace(Codes,"[307]","[ѡ�ߵ���][<span class=red>��</span>]")
Codes=Replace(Codes,"[308]","[ѡ�˵���][<span class=red>��</span>]")
Codes=Replace(Codes,"[302","[ѡ������][<span class=red>��</span>]")
Codes=Replace(Codes,"[303","[ѡ������][<span class=red>��</span>]")
Codes=Replace(Codes,"[304","[ѡ�ĵ���][<span class=red>��</span>]")
Codes=Replace(Codes,"[305","[ѡ�嵨��][<span class=red>��</span>]")
Codes=Replace(Codes,"[306","[ѡ������][<span class=red>��</span>]")
Codes=Replace(Codes,"[307","[ѡ�ߵ���][<span class=red>��</span>]")
Codes=Replace(Codes,"[308","[ѡ�˵���][<span class=red>��</span>]")
Codes=Replace(Codes,"[309","[ǰ����ѡ����][<span class=red>��</span>]")
Codes=Replace(Codes,"[310","[ǰ����ѡ����][<span class=red>��</span>]")
Codes=Replace(Codes,";"," [<span class=green>��</span>]")
Codes=Replace(Codes,"[401]","[ǰ��ֱѡ]")
Codes=Replace(Codes,"[403]","[ǰ����ʽ]")
Codes=Replace(Codes,"[404]","[ǰ����ѡ]")
Codes=Replace(Codes,"[405]","[ǰ����ѡ��ʽ]")
Codes=Replace(Codes,"[501]","[ǰ��ֱѡ]")
Codes=Replace(Codes,"[502]","[ǰ����ʽ]")
Codes=Replace(Codes,"[503]","[ǰ����ѡ]")
Codes=Replace(Codes,"[504]","[ǰ����ѡ��ʽ]")
end if
if lotterytype="����ʱʱ��" or lotterytype="����ʱʱ��" or lotterytype="���ʱʱ��" or lotterytype="�½�ʱʱ��" or lotterytype="������ʱʱ��" or lotterytype="������ֲ�" or lotterytype="��Ѷ�ֲַ�" then
Codes=Replace(Codes,"[104]","[���Ǹ�ʽ]")
Codes=Replace(Codes,"[105]","[���Ǹ�ʽ]")
Codes=Replace(Codes,"[106]","[���Ǹ�ʽ]")
Codes=Replace(Codes,"[107]","[һ�Ǹ�ʽ]")
Codes=Replace(Codes,"[108]","[�������]")
Codes=Replace(Codes,"[109]","[�������]")
Codes=Replace(Codes,"[110]","[�������]")
Codes=Replace(Codes,"[111]","[��С��˫]")
Codes=Replace(Codes,"[112]","[���ǵ�ʽ]")
Codes=Replace(Codes,"[113]","[����ֱѡ��ʽ]")
Codes=Replace(Codes,"[114]","[����ֱѡ��ʽ]")
Codes=Replace(Codes,"[116]","[������ѡ��ʽ]")
Codes=Replace(Codes,"[117]","[������ѡ��ʽ]")
Codes=Replace(Codes,"[118]","[������ѡ��ֵ]")
Codes=Replace(Codes,"[124]","[����ͨѡ]")
Codes=Replace(Codes,"[125]","[����ͨѡ��ʽ]")
Codes=Replace(Codes,"[304]","[����ֱѡ��ֵ]")
Codes=Replace(Codes,"[305]","[����ֱѡ��ֵ]")
Codes=Replace(Codes,"[311]","[������ѡ����]")
Codes=Replace(Codes,"[315]","[����]")
Codes=Replace(Codes,"[316]","[����]")
Codes=Replace(Codes,"[317]","[����]")
Codes=Replace(Codes,"[318]","[������ѡ��ֵ]")
Codes=Replace(Codes,"[319]","[������ϸ�ʽ]")
Codes=Replace(Codes,"[401","[��������][<span class=red>��</span>]")
Codes=Replace(Codes,"[402","[��������][<span class=red>��</span>]")
Codes=Replace(Codes,"[405","[ֱѡ����][<span class=red>��</span>]")
Codes=Replace(Codes,"[406","[ǰ��ֱѡ����][<span class=red>��</span>]")
Codes=Replace(Codes,"[407","[����ֱѡ����][<span class=red>��</span>]")
Codes=Replace(Codes,";"," [<span class=green>��</span>]")
Codes=Replace(Codes,"[424]","[ǰһ]")
Codes=Replace(Codes,"[425]","[��ѡ��]")
Codes=Replace(Codes,"[703]","[����������ʽ]")
Codes=Replace(Codes,"[704]","[����������ʽ]")
Codes=Replace(Codes,"[705]","[������ֵ]")
Codes=Replace(Codes,"[706]","[����������ֵ]")
Codes=Replace(Codes,"[801]","[���ǵ�ʽ]")
Codes=Replace(Codes,"[802]","[���Ǹ�ʽ]")
Codes=Replace(Codes,"[157]","[ֱѡ���]")
Codes=Replace(Codes,"[177]","[��ѡ����]")'�������
Codes=Replace(Codes,"[178]","[ǰ����ѡ����]")
Codes=Replace(Codes,"[179]","[������ѡ����]")
Codes=Replace(Codes,"[197]","[�������]")
Codes=Replace(Codes,"[205]","[ǰ����������]")
Codes=Replace(Codes,"[206]","[ǰ����������]")
Codes=Replace(Codes,"[201]","[ǰ��������ʽ]")
Codes=Replace(Codes,"[202]","[ǰ��������ʽ]")
Codes=Replace(Codes,"[555]","[ǰ��ֱѡ��ʽ]")
Codes=Replace(Codes,"[455]","[����ֱѡ��ʽ]")
Codes=Replace(Codes,"[466]","[����ֱѡ��ʽ]")
Codes=Replace(Codes,"[666]","[ǰ��ֱѡ��ʽ]")
Codes=Replace(Codes,"[335]","[ǰ��������ʽ]")
Codes=Replace(Codes,"[235]","[����������ʽ]")
Codes=Replace(Codes,"[231]","[����������ʽ]")
Codes=Replace(Codes,"[715]","[����������ֵ]")
Codes=Replace(Codes,"[336]","[ǰ��������ʽ]")
Codes=Replace(Codes,"[236]","[����������ʽ]")
Codes=Replace(Codes,"[212]","[����������ʽ]")
Codes=Replace(Codes,"[716]","[����������ֵ]")
Codes=Replace(Codes,"[725]","[ǰ��������ֵ]")
Codes=Replace(Codes,"[726]","[ǰ��������ֵ]")
Codes=Replace(Codes,"[364]","[ǰ��ֱѡ��ֵ]")
Codes=Replace(Codes,"[264]","[����ֱѡ��ֵ]")
Codes=Replace(Codes,"[203","[ǰ����������][<span class=red>��</span>]")
Codes=Replace(Codes,"[103","[������������][<span class=red>��</span>]")
Codes=Replace(Codes,"[204","[ǰ����������][<span class=red>��</span>]")
Codes=Replace(Codes,"[102","[������������][<span class=red>��</span>]")
Codes=Replace(Codes,"[999]","[��λ]")
Codes=Replace(Codes,"[502]","[ǰ������λ]")
Codes=Replace(Codes,"[501]","[��������λ]")
Codes=Replace(Codes,"[1000]","[������ǧ]")
Codes=Replace(Codes,"[1001]","[�������]")
Codes=Replace(Codes,"[1002]","[������ʮ]")
Codes=Replace(Codes,"[1003]","[�������]")
Codes=Replace(Codes,"[1004]","[����ǧ��]")
Codes=Replace(Codes,"[1005]","[����ǧʮ]")
Codes=Replace(Codes,"[1006]","[����ǧ��]")
Codes=Replace(Codes,"[1007]","[������ʮ]")
Codes=Replace(Codes,"[1008]","[�����ٸ�]")
Codes=Replace(Codes,"[1009]","[����ʮ��]")
end if
if lotterytype="���տ�3" or lotterytype="���տ�3" or lotterytype="���ֿ�3" or lotterytype="������3" or lotterytype="���ɿ�3" or lotterytype="������3" or lotterytype="������3" or lotterytype="�ӱ���3" or lotterytype="�Ϻ���3" then
Codes=Replace(Codes,"[101]","[��ֵ]")
Codes=Replace(Codes,"[102]","[��ͬ�ŵ�ѡ]")
Codes=Replace(Codes,"[103]","[��ͬ�Ÿ�ѡ]")
Codes=Replace(Codes,"[104]","[����ͬ��]")
Codes=Replace(Codes,"[105]","[����ͬ��]")
Codes=Replace(Codes,"[106]","[��ͬ�ŵ�ѡ]")
Codes=Replace(Codes,"[107]","[��ͬ��ͨѡ]")
Codes=Replace(Codes,"[108]","[������ͨѡ]")
diycodes = split(Code)
end if
if lotterytype="�㶫����ʮ��" or lotterytype="���Ͽ���ʮ��" then
Codes=Replace(Codes,"[101]","[ѡһ��Ͷ]")
Codes=Replace(Codes,"[102]","[ѡһ��Ͷ]")
Codes=Replace(Codes,"[201]","[ѡ����ֱ]")
Codes=Replace(Codes,"[202]","[ѡ������]")
Codes=Replace(Codes,"[203]","[ѡ�����鵨��]")
Codes=Replace(Codes,"[301]","[ѡ��ǰֱ]")
Codes=Replace(Codes,"[302]","[ѡ��ǰ��]")
Codes=Replace(Codes,"[303]","[ѡ�����鵨��]")
Codes=Replace(Codes,"[401]","[��ѡ��]")
Codes=Replace(Codes,"[402]","[�ζ�����]")
Codes=Replace(Codes,"[501]","[��ѡ��]")
Codes=Replace(Codes,"[502]","[��ѡ������]")
Codes=Replace(Codes,"[601]","[��ѡ��]")
Codes=Replace(Codes,"[602]","[��ѡ�ĵ���]")
Codes=Replace(Codes,"[701]","[��ѡ��]")
Codes=Replace(Codes,"[702]","[��ѡ�嵨��]")
end if
'if instr(codes,"[��С��˫]")<>0 then
'Codesa=split(Codes,"$")
'Codesal=ubound(Codesa)
'Codes=""
'	for ic=0 to Codesal
'	Codest=Codesa(ic)
'	if ic>0 then Codes=Codes&"$"
''	if instr(Codest,"[��С��˫]")>0 then
''		Codest=replace(Codest,"2","��")
''		Codest=replace(Codest,"1","С")
''		Codest=replace(Codest,"5","��")
''		Codest=replace(Codest,"4","˫")
''	end if
''	Codes=Codes&Codest
''	next
'end if
if instr(codes,"[��С��˫]")>0 or instr(Codes,"����")>0 or (instr(codes,"[��ֵ]")>0 and instr(lotterytype,"��3")>0) then
		Codesa=split(Codes,"$")
		Codesal=ubound(Codesa)
		Codes=""
			for ic=0 to Codesal
			Codest=Codesa(ic)
			if ic>0 then Codes=Codes&"$"
			if instr(Codest,"[��С��˫]")>0 or instr(Codest,"����")>0 then
				Codest=replace(Codest,"2","��")
				Codest=replace(Codest,"1","С")
				Codest=replace(Codest,"5","��")
				Codest=replace(Codest,"4","˫")
				Codest=replace(Codest,"a","��")
				Codest=replace(Codest,"b","��")
				Codest=replace(Codest,"c","��")
			end if
			if instr(Codest,"[��ֵ]")>0 and instr(lotterytype,"��3")>0 then
				Codest=replace(Codest,"20","��")
				Codest=replace(Codest,"21","С")
				Codest=replace(Codest,"22","��")
				Codest=replace(Codest,"23","˫")
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
if lotterytype="����ʱʱ��" or lotterytype="������ֲ�" then
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
if rs("prostate")="δ��Ч" then
zt="δ��Ч"
elseif rs("prostate")="����Ч" then
zt="����Ч"
elseif rs("prostate")="δ�н�" then
zt="δ�н�"
elseif rs("prostate")="���н�" then
zt="���н�"
elseif instr(rs("prostate"),"����") then
zt="�ѳ���"
end if
set rs=nothing
end if

Function OpenWin()
%><!--������¼���ڿ�ʼ-->
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
<td align=left>�û�����</td>
<td align=left><INPUT class="tips_txt" name="username_common" id="username_common"></td>
</tr>
<tr>
<td align=left>�ܡ��룺</td>
<td align=left><INPUT class="tips_txt" type=password name="password_common" id="password_common"></td>
</tr>
<tr>
<td align=left>��֤�룺</td>
<td align=left><input type="text" onfocus="loginstatus.showImage()" class="tips_yzm" name="vcode_common" id="vcode_common" value="" title="��֤��"> <span id="validcodespan"><img style="height:26px;width:80px;cursor:pointer" alt="���ˢ��" title="���ˢ��" align="absMiddle" src="/plus/verifycode.html" onClick='this.src="/plus/verifycode.html?n="+ Math.random();'></span></td>
<tr>
<td></td>
<td align=left><button type="button" id="commonLoginButton" name="commonLoginButton"  style="cursor:pointer;MARGIN-RIGHT: 18px" class=btn_Dora_b> �� ¼ </button></td>
</tr>
</tbody>
</table>
</div>
<!--������¼���ڽ���-->
<!--����Ͷע��ʾ���ڿ�ʼ-->
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
<!--����Ͷע��ʾ���ڽ���-->
<!--�����������봰�ڿ�ʼ-->
<div id="_box_loading" style="display: none;">
<div class="pop_layer_content">
<div class="pop_add">
<img src="/Images/loading.gif"  alt="����������..."/>
</div>
</div>
</div>
<!--���������������-->
<!--��������Ͷע�ɹ���ʼ-->
<div id="_ajax_common_div4" style="display: none;">
<div class="tc_x tc_x2">
<div class="gongx">
<p><span id="_ajax_common_Info4">����Ͷע�ɹ���</span></p>
</div>
<p><span><a target="_blank;" href="/User/?u=Touzhu">Ͷע��¼</a></span> | <span><a href="/User/?u=Pay"  target="_blank;">���߳�ֵ</a></span></p>
<input onclick="alertdiv.close('_ajax_common_div4');" type="button" class="input02" />
<input type="hidden" id="sytime_second" value="5"/>
</div>
</div>
<!--��������Ͷע�ɹ�����-->
<!--����ͶעͶע�ɹ���ʼ-->
<div id="_ajax_common_div5" style="display: none;">
<div class="tc_x tc_x2">
<div class="gongx">
<p><span id="_ajax_common_Info5">�������ɹ���</span></p>
</div>
<p><span><a target="_blank;" href="/User/?u=Touzhu">Ͷע��¼</a></span> | <span><a href="/User/?u=Pay"  target="_blank;">���߳�ֵ</a></span></p>
<input type="button" class="input02" id="_ajax_common_btn5" />
<input type="hidden" id="sytime2_second" value="5"/>
</div>
</div>
<!--����ͶעͶע�ɹ�����-->
<div id="overduePrompt" style="display: none;">
<div style="height: 180px; " align="center">
<p style="font-size:14px;line-height:30px; padding-top:20px; text-align: center">���ã�<font color='grey' id="preIssue">-</font>���ѽ�ֹ<BR>��ǰ����<font color='red' id="currentIssue">-</font>��<BR>Ͷעʱ��ȷ����ѡ����ں�<BR>
<input onclick="window.location.reload();" type="button" class="input02" />
<input type="hidden" id="close_time_second" value="5"/></p>
</div>
</div>
<!--�������ڽ���-->
<%
End Function%>