<!--#include file="../Conn.asp"--><!doctype html>
<head>
<title>��Ա����-<%=Setting(0)%></title>
<meta content="��Ϸ��������Ϸ��������Ϸ����ʣ����ʣ���Ϸ��������Ϸ���棬����ͼ����Ϸ����������ͳ��" name="keywords">
<meta content="<%=Setting(0)%>���ֻ�����õ�Ͷעƽ̨��10����Ϸ���Ʒ����飬Ϊ��Ϸ�����ṩ��ȫ���ֻ���ϷͶע����Ϸ���������Ϸ��Ѷ" name="description">
<meta charset="GB2312">
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1, user-scalable=0;" name="viewport" />
<meta http-equiv="Content-Type" content="text/html; charset=GB2312" />
<meta name="format-detection" content="telephone=no" />
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<link href="../Css/Basic.css" rel="stylesheet">
<link href="../Css/User.css" rel="stylesheet">

</head>
<body>
<%checksssion()%>
  <div class="head"><h2 id="navtit">��Ա����</h2><a href="../../index.asp" class="btn-qgkj" id="sourceUrl"><span><em></em></span>����</a><a href="./logout.asp" class="btn-menu">�˳�</a></div>
<div class="wap">
    <div class="user_info_box">
	
	   <%
			
			set address = conn.execute("Select address From KR_User where username='"&session("un")&"'")
			if not rsmb.eof then
			address=address(0)
			end if
			rsmb.close:set rsmb=nothing
			%>
			
			   <%
			
			set pic = conn.execute("Select pic From KR_User where username='"&session("un")&"'")
			if not rsmb.eof then
			pic=pic(0)
			end if
			rsmb.close:set rsmb=nothing
			%>
	
            <div class="ov_hidden fl mgr30" style="width:100%;padding-top:10px;">
                  <img src="/<%=pic%>" height="40" width="40"  style="border-radius:50%"> <span id="uname" class="usertopc">���˻���<%=session("un")%></span> <span id="uname" class="usertopc">���ǳƣ�<%=address%> <a href="Securityinfo.html?action=Infoo">(����޸�)</a></span>
            </div>
            <%
			usermoney=0
			bonusc=0
			set rsmb = conn.execute("Select uermoney,record From KR_User where username='"&session("un")&"'")
			if not rsmb.eof then
			usermoney=rsmb(0)
			bonusc=rsmb(1)
			end if
			rsmb.close:set rsmb=nothing
			%>
            <!--<div id="toaqzx" class="seg_c fl">��ȫ�ȼ� <span id="level">...</span></div>-->
            <div class="ov_hidden info_bt_btn clear usertopc">
<hr style="height:1px;border:none;border-top:1px solid #6699ff;" />
            <ul class="userm" style="padding:8px 0;"><li style="border-right:1px solid #6699ff;">�������<br><span id="balance1" class="font_20"><%=usermoney%></span> <%=setting(56)%></li><li>����<br><span id="balance2" class="font_20"><%=bonusc%><%'�����н�
			'drzj=conn.execute("select sum(back_money2) from KR_Bank_Back where username='"&session("un")&"'and follows like 'ϵͳ�ɽ�%' and datediff(d,addtime,getdate())=0")(0)
			'if drzj<>"" then response.write drzj else response.write("0")%></span> <%=setting(56)%></li></ul>
            </div>
    </div>

<ul class="userm lhcss" style="background-color:#fff;height:40px;padding:5px 0 5px"><li><span class="iconfont icon-3"></span> <a href="Pay.html" style="font-size:18px;" display:inline-block; vertical-align: middle;">��ֵ</a></li><li><span class="iconfont icon-qianbao"></span> <a href="Drawal.html" style="font-size:18px; style="vertical-align: middle;"">����</a></li></ul>

	<div class="new_user_box mt10">
    	<dl>
        	<dt class="iconfont icon-mingxi"></dt>
            <a href="BuyRecord.html"><dd>Ͷע��¼</dd></a>
        </dl>
        <dl>
        	<dt class="iconfont icon-mingxi"></dt>
            <a href="ZhongJiang.html"><dd>�н���¼</dd></a>
        </dl>
        <dl>
        	<dt class="iconfont icon-bokuanmingxi"></dt>
            <a href="Details.html"><dd>�ʽ���ϸ</dd></a>
        </dl>    
    </div>
    
    <div class="new_user_box mt10">
    	<dl>
        	<dt class="iconfont icon-anquan"></dt>
            <a href="Securityinfo.html"><dd>��ȫ����</dd></a>
        </dl>
        <dl>
        	<dt class="iconfont icon-xiugai"></dt>
            <a href="Securityinfo.html?action=Infoo"><dd>�޸��û�����</dd></a>
        </dl>
        <dl>
        	<dt class="iconfont icon-lock"></dt>
            <a href="Securityinfo.html?action=Password"><dd>�޸ĵ�¼����</dd></a>
        </dl>
        <dl>
        	<dt class="iconfont icon-lock"></dt>
            <a href="Securityinfo.html?action=XGQKPassword"><dd>�޸Ķһ�����</dd></a>
        </dl>
    </div>
<%if session("daili")=1 then%>
    <div class="new_user_box mt10">
        <dl>
            <dt class="all_icon_user icon_1"></dt>
            <a href="Agent.html"><dd>��Ա�б�</dd></a>
        </dl>

        <dl>
            <dt class="all_icon_user icon_2"></dt>
            <a href="Agent.html?Type=VipForm"><dd>���ѱ���</dd></a>
        </dl>

        <dl>
            <dt class="all_icon_user icon_3"></dt>
            <a href="Agent.html?Type=VipProgramme"><dd>�����б�</dd></a>
        </dl>

        <dl>
            <dt class="all_icon_user icon_2"></dt>
            <a href="Agent.html?Type=VipUrl"><dd>�ƹ�����</dd></a>
        </dl>

        <dl>
            <dt class="all_icon_user icon_2"></dt>
            <a href="Agent_Add.html"><dd>��ӻ�Ա</dd></a>
        </dl>
    </div>
<%end if%>
<div class="new_user_box mt10"></div>
</div>
</body>
</html>
<!--#include file="../dh.asp"-->