<%
config1=Array("����ʱʱ��","����ʱʱ��","���ʱʱ��","�½�ʱʱ��","������ʱʱ��","����11ѡ5","����11ѡ5","�㶫11ѡ5","11�˶��","�Ϻ�ʱʱ��","���տ�3","�㶫����ʮ��","0","����11ѡ5","����11ѡ5","����11ѡ5","�Ϻ�11ѡ5","���ֿ�3","���տ�3","������3","˫ɫ��","����3D","���ֲ�","15ѡ5","0","0","0","0","0","0","����͸","������","������","���ǲ�","22ѡ5","0","0","0","0","0","ʤ����","��ѡ�ų�","4������","6����ȫ��","��������","��������","��������","0","0","0","���ɿ�3","������3","������3","�ӱ���3","��������ʮ��","���Ͽ���ʮ��","��������12","�㽭����12","�Ĵ�����12","�㽭11ѡ5","������ʮ��","�������ʮ��","����8","ȺӢ��","����11ѡ5","������11ѡ5","�ӱ�11ѡ5","�Ϻ���3","�½�11ѡ5","����11ѡ5","���11ѡ5","������ֲ�","ӡ����ֲ�","��Ѷ�ֲַ�","��������")

config2=Array("Ssc","JxSsc","TjSsc","XjSsc","HljSsc","Syxw","CqSyxw","GdSyxw","Syydj","0","JsKs","GdKlsf","0","AhSyxw","JsSyxw","LlSyxw","ShSyxw","JlKs","AhKs","FjKs","Ssq","Sd","Qlc","Swxw","0","0","0","0","0","0","Dlt","Pls","Plw","Qxc","Eexw","0","0","0","0","0","Sfc","Rxjc","Jq4","Zc6","Jczq","Jclq","Bjdc","0","0","0","NmKs","GxKs","HubKs","GxKs","GxKlsf","HnKlsf","LlKlse","ZjKlse","ScKlse","ZjSyxw","TjKlsf","CqKlsf","Klb","Qyh","FjSyxw","HljSyxw","HebSyxw","ShKs","XjSyxw","JlSyxw","TjSyxw","Hnwfc","Ynwfc","Txffc","Pk10")

config3=Array("Ͷעʱ�䣺10:00��02:00  ÿ5-10����һ�ڣ�ȫ��120��","Ͷעʱ�䣺09:00��23:10 ÿ10����һ�ڣ���84��","Ͷעʱ�䣺09:00��22:00 ÿ10����һ�ڣ���84��","Ͷעʱ�䣺10:00��02:00 ÿ10����һ�ڣ���96��","Ͷעʱ�䣺09:00��23:10 ÿ10����һ�ڣ���84��","Ͷעʱ�䣺09:10��21:59 ÿ10����һ�ڣ���78��","Ͷעʱ�䣺08:50��21:00 ÿ10����һ�ڣ���85��","Ͷעʱ�䣺09:00��23:00 ÿ10����һ�ڣ���84��","Ͷעʱ�䣺08:35��22:55 ÿ10����һ�ڣ���87��","","Ͷעʱ�䣺08:30-22:10 ÿ10����һ�ڣ�ȫ��82��","","","Ͷעʱ�䣺08:30��22:00 ÿ10����һ�ڣ���81��","Ͷעʱ�䣺08:20��22:00 ÿ10����һ�ڣ���82��","Ͷעʱ�䣺08:40��22:30 ÿ10����һ�ڣ���83��","Ͷעʱ�䣺08:50��23:50 ÿ10����һ�ڣ���90��","Ͷעʱ�䣺08:20-22:30 ÿ10����һ�ڣ�ȫ��79��","Ͷעʱ�䣺08:40-22:00 ÿ10����һ�ڣ�ȫ��80��","Ͷעʱ�䣺09:00��22:17 ÿ10����һ�ڣ���78��","ÿ�ܶ����ġ��տ�����","�̶������淨�򵥣�ÿ��21��15������","ÿ��һ����������21��30������","�淨�򵥣�ÿ��20��30������","","","","","","","ÿ��һ,��,����20��30�ֿ�����","�淨�򵥣�ÿ��20��30������","�淨�򵥣�ÿ��20��30������","ÿ�ܶ����塢�� 20:30����","�淨�򵥣�ÿ�տ���","","","","","","��ע����ߣ�","��ע����ߣ�","��ע����ߣ�","��ע����ߣ�","������ȫ��90���ӣ�����ͣ��ʱ��������ʱ��������Ϊ׼�����������73%��","","","","","","Ͷעʱ�䣺09:35��22:05 ÿ10����һ�ڣ���73��","Ͷעʱ�䣺09:28��22:28 ÿ10����һ�ڣ���78��","Ͷעʱ�䣺09:00��22:00 ÿ10����һ�ڣ���78��","�ӱ���3","��������ʮ��","���Ͽ���ʮ��","��������12","�㽭����12","�Ĵ�����12","Ͷעʱ�䣺08:20��22:30 ÿ10����һ�ڣ���85��","������ʮ��","�������ʮ��","����8","ȺӢ��","Ͷעʱ�䣺08:50��23:50 ÿ10����һ�ڣ���90��","Ͷעʱ�䣺08:55��22:05 ÿ10����һ�ڣ���79��","�ӱ�11ѡ5","�Ϻ���3","Ͷעʱ�䣺09:50��02:00 ÿ10����һ�ڣ���97��","����11ѡ5","���11ѡ5","ȫ��Ͷע  ÿ5����һ�ڣ�ȫ��288��","ȫ��Ͷע  ÿ5����һ�ڣ�ȫ��288��","ȫ��Ͷע  ÿ����һ��","��������")

'KR_News id��
config4=Array(18,17,20,21,16,22,25,24,23,0,143,146,0,149,148,165,167,144,145,0,173,15,174,179,0,0,0,0,0,0,168,14,170,171,172,0,0,0,0,0,175,176,177,178,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,166,0,0,0,0,167,0,0,0,0,0,0,0,0,0,0)

'����
'config5=Array(120,84,84,96,84,78,85,84,87,0,82,84,0,81,82,83,90,79,80,78,0(˫ɫ��))

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
	response.Write("<option value='' "&lt0&">ѡ����Ϸ</option>")
elseif caseselect="lottSelect" then
	response.Write("<select name='lt' id='LottID' onChange='form.submit();'>")
	response.Write("<option value='' "&lt0&">ѡ����Ϸ</option>")
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
		selectvalue=config1ls '����ʱʱ��
		if caseselect="opencode" then selectvalue=config2(getlotid(config1ls,1)) 'Ssc
		if lt=selectvalue then ltselected=" selected='selected'" else ltselected=""
		response.Write("<option value='"&selectvalue&"'"&ltselected&">"&config1ls&"</option>")
	end if
next
response.Write("</select>")
end Function
%>
