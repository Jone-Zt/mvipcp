<!--#include file="../Conn.asp"--><!doctype html>
<html><head><title>��������-<%=Setting(0)%></title>
<meta content="��Ϸ��������Ϸ��������Ϸ����ʣ����ʣ���Ϸ��������Ϸ���棬����ͼ����Ϸ����������ͳ��" name="keywords">
<meta content="<%=Setting(0)%>���ֻ�����õ�Ͷעƽ̨��10����Ϸ���Ʒ����飬Ϊ��Ϸ�����ṩ��ȫ���ֻ���ϷͶע����Ϸ���������Ϸ��Ѷ" name="description">
<meta charset="GB2312">
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1, user-scalable=0;" name="viewport" />
<meta http-equiv="Content-Type" content="text/html; charset=GB2312" />
<meta name="format-detection" content="telephone=no" />
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<link href="/Css/Basic.css" rel="stylesheet">
<link href="/Css/Hm.css" rel="stylesheet">
<link href="../Css/User.css" rel="stylesheet">

<script language="javascript" type="text/javascript" src="/JS/jquery.js"></script>
<script language="javascript" type="text/javascript" src="/JS/Jquery-ui-1.8.2.custom.min.js"></script>
<script>var ttusername="<%=session("un")%>",ttun="";if(ttusername!="") ttun=ttusername;
	var coinType = '<%=Setting(56)%>';
	var coinUnit = '<%=Setting(58)%>';
</script>
<script src="/JS/tthm.js"></script>
 <div class="head"><h2 onClick="javascript:upcss();" id="navtit"><em id="jiangaa"></em><span id="jiange" class="head-arr"><em></em></span></h2><a href="../../index.asp" class="btn-qgkj" id="sourceUrl"><span><em></em></span>��Ϸ����</a></div>
  <div class="pop-box2 none" id="jiangf">
    <div class="pop-box2-arr"></div>
    <div class="filt-popc">
      <ul>
	    <li><a href="javascript:cx(100);" class="btn-pop btn-pop-on plays" id="tstyle100" >ȫ������</a></li>
	  	<%if LotterySetting(20)="1" then%>
        <li><a href="javascript:cx(20);" class="btn-pop plays" id="tstyle20" >˫ɫ��</a></li><%end if%><%if LotterySetting(21)="1" then%>
        <li><a href="javascript:cx(21);" class="btn-pop plays" id="tstyle21" >����3D</a></li><%end if%><%if LotterySetting(22)="1" then%>
        <li><a href="javascript:cx(22);" class="btn-pop plays" id="tstyle22" >���ֲ�</a></li><%end if%><%if LotterySetting(23)="1" then%>
        <li><a href="javascript:cx(23);" class="btn-pop plays" id="tstyle23" >15ѡ5</a></li><%end if%><%if LotterySetting(30)="1" then%>
        <li><a href="javascript:cx(30);" class="btn-pop plays" id="tstyle30" >����͸</a></li><%end if%><%if LotterySetting(31)="1" then%>
        <li><a href="javascript:cx(31);" class="btn-pop plays" id="tstyle31" >������</a></li><%end if%><%if LotterySetting(32)="1" then%>
        <li><a href="javascript:cx(32);" class="btn-pop plays" id="tstyle32" >������</a></li><%end if%><%if LotterySetting(33)="1" then%>
        <li><a href="javascript:cx(33);" class="btn-pop plays" id="tstyle33" >���ǲ�</a></li><%end if%><%if LotterySetting(34)="1" then%>
        <li><a href="javascript:cx(34);" class="btn-pop plays" id="tstyle34" >22ѡ5</a></li><%end if%><%if LotterySetting(40)="1" then%>
        <li><a href="javascript:cx(40);" class="btn-pop plays" id="tstyle40" >ʤ����</a></li><%end if%><%if LotterySetting(41)="1" then%>
        <li><a href="javascript:cx(41);" class="btn-pop plays" id="tstyle41" >��ѡ�ų�</a></li><%end if%><%if LotterySetting(42)="1" then%>
        <li><a href="javascript:cx(42);" class="btn-pop plays" id="tstyle42" >4������</a></li><%end if%><%if LotterySetting(43)="1" then%>
        <li><a href="javascript:cx(43);" class="btn-pop plays" id="tstyle43" >6����ȫ��</a></li><%end if%><%if LotterySetting(44)="1" then%>
        <li><a href="javascript:cx(44);" class="btn-pop plays" id="tstyle44" >��������</a></li><%end if%><%if LotterySetting(45)="1" then%>
        <li><a href="javascript:cx(45);" class="btn-pop plays" id="tstyle45" >��������</a></li><%end if%><%if LotterySetting(46)="1" then%>
        <li><a href="javascript:cx(46);" class="btn-pop plays" id="tstyle46" >��������</a></li><%end if%><%if LotterySetting(0)="1" then%>
        <li><a href="javascript:cx(0);" class="btn-pop plays" id="tstyle0" >����ʱʱ��</a></li><%end if%><%if LotterySetting(71)="1" then%>
        <li><a href="javascript:cx(71);" class="btn-pop plays" id="tstyle71" >������ֲ�</a></li><%end if%><%if LotterySetting(1)="1" then%>
        <li><a href="javascript:cx(1);" class="btn-pop plays" id="tstyle1" >����ʱʱ��</a></li><%end if%><%if LotterySetting(2)="1" then%>
        <li><a href="javascript:cx(2);" class="btn-pop plays" id="tstyle2" >���ʱʱ��</a></li><%end if%><%if LotterySetting(3)="1" then%>
        <li><a href="javascript:cx(3);" class="btn-pop plays" id="tstyle3" >�½�ʱʱ��</a></li><%end if%><%if LotterySetting(4)="1" then%>
        <li><a href="javascript:cx(4);" class="btn-pop plays" id="tstyle4" >������ʱʱ��</a></li><%end if%><%if LotterySetting(5)="1" then%>
        <li><a href="javascript:cx(5);" class="btn-pop plays" id="tstyle5" >����11ѡ5</a></li><%end if%><%if LotterySetting(6)="1" then%>
        <li><a href="javascript:cx(6);" class="btn-pop plays" id="tstyle6" >����11ѡ5</a></li><%end if%><%if LotterySetting(7)="1" then%>
        <li><a href="javascript:cx(7);" class="btn-pop plays" id="tstyle7" >�㶫11ѡ5</a></li><%end if%><%if LotterySetting(13)="1" then%>
        <li><a href="javascript:cx(13);" class="btn-pop plays" id="tstyle13" >����11ѡ5</a></li><%end if%><%if LotterySetting(14)="1" then%>
        <li><a href="javascript:cx(14);" class="btn-pop plays" id="tstyle14" >����11ѡ5</a></li><%end if%><%if LotterySetting(15)="1" then%>
        <li><a href="javascript:cx(15);" class="btn-pop plays" id="tstyle15" >����11ѡ5</a></li><%end if%><%if LotterySetting(59)="1" then%>
        <li><a href="javascript:cx(59);" class="btn-pop plays" id="tstyle59" >�㽭11ѡ5</a></li><%end if%><%if LotterySetting(16)="1" then%>
        <li><a href="javascript:cx(16);" class="btn-pop plays" id="tstyle16" >�Ϻ�11ѡ5</a></li><%end if%><%if LotterySetting(64)="1" then%>
        <li><a href="javascript:cx(64);" class="btn-pop plays" id="tstyle64" >����11ѡ5</a></li><%end if%><%if LotterySetting(65)="1" then%>
        <li><a href="javascript:cx(65);" class="btn-pop plays" id="tstyle65" >������11ѡ5</a></li><%end if%><%if LotterySetting(66)="1" then%>
        <li><a href="javascript:cx(66);" class="btn-pop plays" id="tstyle66" >�ӱ�11ѡ5</a></li><%end if%><%if LotterySetting(68)="1" then%>
        <li><a href="javascript:cx(68);" class="btn-pop plays" id="tstyle68" >�½�11ѡ5</a></li><%end if%><%if LotterySetting(69)="1" then%>
        <li><a href="javascript:cx(69);" class="btn-pop plays" id="tstyle69" >���11ѡ5</a></li><%end if%><%if LotterySetting(70)="1" then%>
        <li><a href="javascript:cx(70);" class="btn-pop plays" id="tstyle70" >����11ѡ5</a></li><%end if%><%if LotterySetting(8)="1" then%>
        <li><a href="javascript:cx(8);" class="btn-pop plays" id="tstyle8" >11�˶��</a></li><%end if%><%if LotterySetting(9)="1" then%>
        <li><a href="javascript:cx(9);" class="btn-pop plays" id="tstyle9" >ʱʱ��</a></li><%end if%><%if LotterySetting(10)="1" then%>
        <li><a href="javascript:cx(10);" class="btn-pop plays" id="tstyle10" >���տ�3</a></li><%end if%><%if LotterySetting(18)="1" then%>
        <li><a href="javascript:cx(18);" class="btn-pop plays" id="tstyle18" >���տ�3</a></li><%end if%><%if LotterySetting(17)="1" then%>
        <li><a href="javascript:cx(17);" class="btn-pop plays" id="tstyle17" >���ֿ�3</a></li><%end if%><%if LotterySetting(19)="1" then%>
        <li><a href="javascript:cx(19);" class="btn-pop plays" id="tstyle19" >������3</a></li><%end if%><%if LotterySetting(50)="1" then%>
        <li><a href="javascript:cx(50);" class="btn-pop plays" id="tstyle50" >���ɿ�3</a></li><%end if%><%if LotterySetting(51)="1" then%>
        <li><a href="javascript:cx(51);" class="btn-pop plays" id="tstyle51" >������3</a></li><%end if%><%if LotterySetting(52)="1" then%>
        <li><a href="javascript:cx(52);" class="btn-pop plays" id="tstyle52" >������3</a></li><%end if%><%if LotterySetting(53)="1" then%>
        <li><a href="javascript:cx(53);" class="btn-pop plays" id="tstyle53" >�ӱ���3</a></li><%end if%><%if LotterySetting(67)="1" then%>
        <li><a href="javascript:cx(67);" class="btn-pop plays" id="tstyle67" >�Ϻ���3</a></li><%end if%><%if LotterySetting(11)="1" then%>
        <li><a href="javascript:cx(11);" class="btn-pop plays" id="tstyle11" >�㶫����ʮ��</a></li><%end if%><%if LotterySetting(55)="1" then%>
        <li><a href="javascript:cx(55);" class="btn-pop plays" id="tstyle55" >���Ͽ���ʮ��</a></li><%end if%><%if LotterySetting(56)="1" then%>
        <li><a href="javascript:cx(56);" class="btn-pop plays" id="tstyle56" >��������12</a></li><%end if%><%if LotterySetting(57)="1" then%>
        <li><a href="javascript:cx(57);" class="btn-pop plays" id="tstyle57" >�㽭����12</a></li><%end if%><%if LotterySetting(58)="1" then%>
        <li><a href="javascript:cx(58);" class="btn-pop plays" id="tstyle58" >�Ĵ�����12</a></li><%end if%>
      </ul>
    </div>
  </div>
</head>
<body>
<div align="center" style="margin:8px 0 0 0 ;overflow:hidden">
	<div class="a" style="width:43%">
	<label class="label">
         <select class="ttselect" onChange="javascript:cx1('jia');">
          <option value="">����Ϸ���и���</option>
         <option value="1">����ȫ������</option>
         <option value="3">���3��ĸ���</option>
         <option value="70">���7��ĸ���</option> 
        </select>
    	</label></div><div class="a" style="width:22%">
    <label class="label">
         <select class="ttselect" onChange="javascript:cx1('jia');">
             <option value="">״̬</option>
             <option value="0">δ��Ա</option>
             <option value="1">��Ա</option>
             <option value="2">����</option> 
        </select>
    </label></div>
    <div class="a" style="width:25%"><label class="label">
         <select class="ttselect" onChange="javascript:cx1('jia');">
                <option value="">����</option>
                <option value="0">10������</option>
                <option value="1">10%-20%</option>
                <option value="2">20%-30%</option>
                <option value="3">30%-40%</option>
                <option value="4">40%-50%</option>
                <option value="5">50%-60%</option>
                <option value="6">60%-70%</option>
                <option value="7">70%-80%</option>
                <option value="8">80%-90%</option>
                <option value="9">90%����</option>
        </select>
    </label></div>
</div>
<div style="margin:10px 0 0 0">
<div id="list_data">
<div class="Mask"></div>
<div class="hm_cont"></div>
<div align="center" style="margin:10px 0 20px 0;display:block" id="jiangbb"><a id="jiang5" href="javascript:cx(100);"><div id="jiang4" class="jiang4"><font color="#FBF8F8" id="jiang3">������ظ���...</font></div></a></div>
</div>
</div>
<div class="header" style="height:100%;background:#FFFCFC;display:none;" id="ttlogin">
	 <div class="head"><h2 onClick="javascript:upcss();" id="navtit"><em id="jiangaa">�û���¼</em></h2><a href="../../index.asp" class="btn-qgkj" id="sourceUrl"><span><em></em></span>����</a>
<a  class="btn-menu" href="/User/Reg/">ע��</a></div>
<div class="uc_wap" id="wrapper">
	<div class="login"> 
		<div class="login_list" >
			<ul>
				<li>
					<div class="f_box">
						<em><font color="#000000">�û���</font></em>
						<input type="text" class="txt color_black"  name="UserName" id="UserName" value="">
					</div>
				</li>
				<li>
					<div class="f_box" >
						<em><font color="#000000">��&nbsp;&nbsp;&nbsp;��</font></em>
						<input type="password" class="txt color_black" name="password" id="password" value="">
					</div>
				</li>
				<li>
					<div class="f_box">
						<em><font color="#000000">��֤��</font></em>
						<input type="text" style="width:60%;height:30px;" class="txt color_black" maxlength=4 name="Verifycode" id="Verifycode" onFocus="this.value='';" value="">
						<div class="ver_code" style="padding:4px 0 0 0" ><span id="showVerify"><img style='height:30px;cursor:pointer' title='���ˢ��' align='absmiddle' src='../../plus/verifycode.asp?n=<%=Timer%>' onClick='this.src="../../plus/verifycode.asp?n="+ Math.random();'></span></div>
					</div>
				</li>
			</ul>
		</div>
		<input class="login_btn" id="user_login" type="button" onClick="return(CheckForm(this))" name="imagesb" value="�ǡ� ¼">
	<!---<p class="ts_bottom"><a href="../Reg/">���ע��</a> <span class="color_red">���û���40��60���Ƚ����У�</span><br><a href="getpws.html">�������룿</a>--></p>
	</div>
</div>
</div>



<div class="tishi" align="center">
	<div class="tishi1"><div style="background:url(../Images/quxiao.png);width:50px;height:50px;" id="tishi4"></div><span id="tishi2"></sapn></div>
</div>


<!--#include file="../dh.asp"-->
</body>
</html>