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
  <div class="head"><h2 id="navtit">��Ա����</h2><a href="../../index.asp" class="btn-qgkj" id="sourceUrl"><span><em></em></span>��Ϸ����</a><a href="./logout.asp" class="btn-menu">�˳�</a></div>
<div class="wap">
    <div class="user_info_box">
            <div class="ov_hidden fl mgr30">
                 <i class="people_ico"></i><span id="uname"><%=session("un")%></span>
            </div>
            <%
			usermoney=0
			bonusc=0
			set rsmb = conn.execute("Select uermoney,bonusc From KR_User where username='"&session("un")&"'")
			if not rsmb.eof then
			usermoney=rsmb(0)
			bonusc=rsmb(1)
			end if
			rsmb.close:set rsmb=nothing
			%>
            <!--<div id="toaqzx" class="seg_c fl">��ȫ�ȼ� <span id="level">...</span></div>-->
            <div class="ov_hidden info_bt_btn clear">
            �˻���<span id="balance1" class="color_red font_20"><%=usermoney%><em class="font_s"><%=setting(56)%></em></span><!--������<span id="balance2" class="color_red font_20"><%=bonusc%><em class="font_s"><%=setting(56)%></em></span>-->
                <div class="fr"><a href="Pay.html" class="uc_aut_btn red_btn"><span>��ֵ</span></a><a href="Drawal.html" class="uc_aut_btn blue_btn"><span>�һ�</span></a><!--<a href="Drawal.html?btm=1" class="uc_aut_btn blue_btn"><span>����ת��</span></a>--></div>
            </div>
    </div>

	<div class="new_user_box">
    	<dl>
        	<dt class="all_icon_user icon_1"></dt>
            <a href="BuyRecord.html"><dd>Ͷע��¼</dd></a>
        </dl>
        <dl>
        	<dt class="all_icon_user icon_2"></dt>
            <a href="ZhongJiang.html"><dd>�н���¼</dd></a>
        </dl>
        <dl>
        	<dt class="all_icon_user icon_3"></dt>
            <a href="Details.html"><dd>�ʽ���ϸ</dd></a>
        </dl>
        <dl>
        	<dt class="all_icon_user icon_4"></dt>
            <a href="Point.html"><dd>�ҵĻ���</dd></a>
        </dl>       
    </div>
    
    <div class="new_user_box mt10">
    	<dl>
        	<dt class="all_icon_user icon_5"></dt>
            <a href="Securityinfo.html"><dd>��ȫ����</dd></a>
        </dl>
        <dl>
        	<dt class="all_icon_user icon_6"></dt>
            <a href="Securityinfo.html?action=Infoo"><dd>�޸��û�����</dd></a>
        </dl>
        <dl>
        	<dt class="all_icon_user icon_6"></dt>
            <a href="Securityinfo.html?action=Password"><dd>�޸ĵ�¼����</dd></a>
        </dl>
        <dl>
        	<dt class="all_icon_user icon_6"></dt>
            <a href="Securityinfo.html?action=XGQKPassword"><dd>�޸Ķһ�����</dd></a>
        </dl>
    </div>
<!--#include file="../dh.asp"-->
</div>
</body>
</html>