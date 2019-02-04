<!--#include file="../Conn.asp"-->
<!--#include file="../Include/KR.CommonCls.asp"-->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>��Ա���� - <%=Setting(0)%></title>
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1, user-scalable=0;" name="viewport" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta http-equiv="content-type" content="text/html;charset=GBK">
    <meta name="Keywords" content="<%=Setting(0)%>" />
    <meta name="Description" content="<%=Setting(0)%>" />
    <link rel="stylesheet" type="text/css" href="/Css/mycenter.css" />
    <link href="../Css/Basic.css" rel="stylesheet">
    <script type="text/javascript" src="/JS/My97DatePicker/WdatePicker.js"></script>
    <script type="text/javascript" src="/JS/Jquery-1.7.2.Min.js"></script>
    <script type="text/javascript" src="/JS/jquery-ui-1.8.2.custom.min.js"></script>
    <script type="text/javascript" src="/JS/Alertdiv.js"></script>
    <script type="text/javascript" src="/JS/loginstatus.js"></script>
    <script type="text/javascript" src="/JS/tool2.js"></script>
    <script type="text/javascript" src="/JS/Utility.js"></script>
    <script type="text/javascript" src="/User/Js/Library.js"></script>  
</head>

<style>
	#mesWindow{
		left: 40%; top: 277px; position: absolute;
		display:none;	
	}
	#mesWindow ul {
		margin:20px 20px;
	}
	#mesWindow ul li{
		margin:15px 15px;
	}
	#mesWindowTow{
		top: 137px; position: absolute;width:100%;
		display:none;	
	}
	.TiShi{
		color:red;
		font-weight:bold;
	}
    .isTable{
        width:100%;
    }
    .isTable td{
        text-align: center;
        line-height: 50px;
    }
    .isTable td,.isTable th{
        text-align: center;
        line-height: 50px;
    }
    .isTable .sel{
        background: #FFFFFF;
    }
    .isTable .even{
        background: #f5f5f5;   
    }
    .my_tab{
    
    }

    .btn_xx,.btn_cy{
        border: 1px solid #b70a00;
        border-radius: 5px;
        padding: 3px 8px;
        background: #e8291d;
        background: -webkit-gradient(linear, 0 0, 0 70%, from(#f94539), to(#e8291d));
        box-shadow: 0 1px 1px #fc7f77 inset;
        color: #FFFFFF;margin-left: 2px;
        height: 33px;width:60px;
    }

    .tips_m{width:500px}
    .tips_b{background:rgba(94,133,178,.6);filter:alpha(opacity=60);zoom:1;padding:4px}
    .tips_box{background:#fff;overflow:hidden;border:1px solid #cccccc;zoom:1;position:relative;}
    .tips_box .tips_title{height:32px;padding:3px 6px 0 10px;border-bottom:1px solid #cccccc;background:#f5f5f5;overflow:hidden}
    .dl_err,.kbq,.tips_box .tips_title .close a{background:url(/images/public/tips_ico.png) no-repeat}
    .tips_box .tips_title .close a{float:right;width:23px;height:22px;margin-top:3px;background-position:0 -30px;text-indent:-99999em;overflow:hidden}
    .tips_box .tips_title .close a:hover{background-position:0 -54px}
    .tips_box h2{float:left;font:700 14px/28px simsun}
    .tips_box .tips_text{padding:10px 12px}
    .tips_box .real_name{padding:10px 10px 10px 60px;line-height:26px}
    .tips_box .real_name p.btn{padding-left:100px
    }

    .basic_txt {
    border: 1px solid #cccccc;
    height: 25px;
    vertical-align: -1px;
    padding: 3px;
    display: inline-block;
    border-radius: 5px;
    font-size: 16px;
    width: 88px;
    }

     .brts_tit{
        background:#ddd;  
    }

    .my_tab li a.cur, .my_tab li a.cur:hover {
    color: #fff;
    background: red;
    border-radius: 3px;
}

</style>

<script>
	var Type = "<%=request("Type")%>";
	$(function(){
		$(".my_tab a").click(Vip.SelectType);
		$("#TypeName").click(Vip.Recharge);
		Type == "" && (Type = "VipList")
		$(".my_tab a[Type='"+Type+"']").trigger("click");
	});
</script>

<body class="none_bg" style="width:100%;">

<% checksssion() %>

  <div class="head"><h2 id="navtit">��Ա��������</h2><a href="javascript:history.go(-1);" class="btn-qgkj" id="sourceUrl"><span><em></em></span>����</a><a href="./logout.asp" class="btn-menu">�˳�</a></div>

<div class="docBody clearfix" align="center">

<div>
    <ul class="my_tab">               	
        <li><a href="javascript:void(0);" Type="VipList">��Ա�б�</a></li>
        <li><a href="javascript:void(0);" Type="VipForm">���ѱ���</a></li>
        <li><a href="javascript:void(0);" Type="VipProgramme">��Ա����</a></li>
        <li><a href="javascript:void(0);" Type="VipUrl">�ƹ�����</a></li>
    </ul>
    <form id="frm_search" onSubmit="javascript:Vip.SelectWhere(this);return false" style="margin-left:17px;">
        <div>
        	<span class="m_r10 l"><span  class="l"><input style="width:80px" class="basic_txt gray" name="username" type="text" id="username" placeholder="�û���" autocomplete="off" /></span><span  class="l" id="IsTime" style="display:none"><span class="l">
                <select name="IsLt" id="LottID" style="margin-left:6px;font-size:12px;height:24px;vertical-align:-1px;" onChange="javascript:$('#frm_search').submit()">
					<option value="������Ϸ">������Ϸ</option><%if LotterySetting(20)="1" then%>
                    <option value="˫ɫ��">˫ɫ��</option><%end if%><%if LotterySetting(21)="1" then%>
                    <option value="����3D">����3D</option><%end if%><%if LotterySetting(22)="1" then%>
                    <option value="���ֲ�">���ֲ�</option><%end if%><%if LotterySetting(23)="1" then%>
                    <option value="15ѡ5">15ѡ5</option><%end if%><%if LotterySetting(30)="1" then%>
                    <option value="����͸">����͸</option><%end if%><%if LotterySetting(31)="1" then%>
                    <option value="������">������</option><%end if%><%if LotterySetting(32)="1" then%>
                    <option value="������">������</option><%end if%><%if LotterySetting(33)="1" then%>
                    <option value="���ǲ�">���ǲ�</option><%end if%><%if LotterySetting(34)="1" then%>
                    <option value="22ѡ5">22ѡ5</option><%end if%><%if LotterySetting(40)="1" then%>
                    <option value="ʤ����">ʤ����</option><%end if%><%if LotterySetting(41)="1" then%>
                    <option value="��ѡ�ų�">��ѡ�ų�</option><%end if%><%if LotterySetting(42)="1" then%>
                    <option value="4������">4������</option><%end if%><%if LotterySetting(43)="1" then%>
                    <option value="6����ȫ��">6����ȫ��</option><%end if%><%if LotterySetting(44)="1" then%>
                    <option value="��������">��������</option><%end if%><%if LotterySetting(45)="1" then%>
                    <option value="��������">��������</option><%end if%><%if LotterySetting(46)="1" then%>
                    <option value="��������">��������</option><%end if%><%if LotterySetting(0)="1" then%>
                    <option value="����ʱʱ��">����ʱʱ��</option><%end if%><%if LotterySetting(71)="1" then%>
                    <option value="������ֲ�">������ֲ�</option><%end if%><%if LotterySetting(1)="1" then%>
                    <option value="����ʱʱ��">����ʱʱ��</option><%end if%><%if LotterySetting(2)="1" then%>
                    <option value="���ʱʱ��">���ʱʱ��</option><%end if%><%if LotterySetting(3)="1" then%>
                    <option value="�½�ʱʱ��">�½�ʱʱ��</option><%end if%><%if LotterySetting(4)="1" then%>
                    <option value="������ʱʱ��">������ʱʱ��</option><%end if%><%if LotterySetting(5)="1" then%>
                    <option value="����11ѡ5">����11ѡ5</option><%end if%><%if LotterySetting(6)="1" then%>
                    <option value="����11ѡ5">����11ѡ5</option><%end if%><%if LotterySetting(7)="1" then%>
                    <option value="�㶫11ѡ5">�㶫11ѡ5</option><%end if%><%if LotterySetting(13)="1" then%>
                    <option value="����11ѡ5">����11ѡ5</option><%end if%><%if LotterySetting(14)="1" then%>
                    <option value="����11ѡ5">����11ѡ5</option><%end if%><%if LotterySetting(15)="1" then%>
                    <option value="����11ѡ5">����11ѡ5</option><%end if%><%if LotterySetting(59)="1" then%>
                    <option value="�㽭11ѡ">�㽭11ѡ</option><%end if%><%if LotterySetting(16)="1" then%>
                    <option value="�Ϻ�11ѡ5">�Ϻ�11ѡ5</option><%end if%><%if LotterySetting(64)="1" then%>
                    <option value="������11ѡ5">����11ѡ5</option><%end if%><%if LotterySetting(65)="1" then%>
                    <option value="������11ѡ5">������11ѡ5</option><%end if%><%if LotterySetting(66)="1" then%>
                    <option value="�ӱ�11ѡ5">�ӱ�11ѡ5</option><%end if%><%if LotterySetting(8)="1" then%>
                    <option value="11�˶��">11�˶��</option><%end if%><%if LotterySetting(9)="1" then%>
                    <option value="ʱʱ��">ʱʱ��</option><%end if%><%if LotterySetting(10)="1" then%>
                    <option value="���տ�3">���տ�3</option><%end if%><%if LotterySetting(18)="1" then%>
                    <option value="���տ�3">���տ�3</option><%end if%><%if LotterySetting(17)="1" then%>
                    <option value="���ֿ�3">���ֿ�3</option><%end if%><%if LotterySetting(19)="1" then%>
                    <option value="������3">������3</option><%end if%><%if LotterySetting(50)="1" then%>
                    <option value="���ɿ�3">���ɿ�3</option><%end if%><%if LotterySetting(51)="1" then%>
                    <option value="������3">������3</option><%end if%><%if LotterySetting(52)="1" then%>
                    <option value="������3">������3</option><%end if%><%if LotterySetting(53)="1" then%>
                    <option value="�ӱ���3">�ӱ���3</option><%end if%><%if LotterySetting(67)="1" then%>
                    <option value="�Ϻ���3">�Ϻ���3</option><%end if%><%if LotterySetting(11)="1" then%>
                    <option value="�㶫����ʮ��">�㶫����ʮ��</option><%end if%><%if LotterySetting(55)="1" then%>
                    <option value="���Ͽ���ʮ��">���Ͽ���ʮ��</option><%end if%><%if LotterySetting(56)="1" then%>
                    <option value="��������12">��������12</option><%end if%><%if LotterySetting(57)="1" then%>
                    <option value="�㽭����12">�㽭����12</option><%end if%><%if LotterySetting(58)="1" then%>
                    <option value="�Ĵ�����12">�Ĵ�����12</option><%end if%>
                </select></span>
             	<input name="sdate" class="basic_txt gray" type="text" id="sdate" onClick="WdatePicker({dateFmt:'yyyy-MM-dd'})" value="<%=Format_Time(now()-7,2)%>" style="margin-left:7px;width:80px;font-size:12px;" /> - <input name="edate" class="basic_txt gray" type="text" id="edate" onClick="WdatePicker({dateFmt:'yyyy-MM-dd'})" value="<%=Format_Time(now(),2)%>" style="width:80px;font-size:12px;"/>
             </span></span>
             <span class="l"><input type="submit" class="btn_xx" value="����"></span>
        </div>
    </form>

    <div id="VipList" style="display:none;margin-top:50px">
        <table class="isTable">
            <colgroup>
                <col width="10%">
                <col width="10%">
                <col width="10%">
                <col width="10%">
                <col width="10%">
                <col width="20%">
            </colgroup>
                <thead>
                    <tr class="brts_tit t_c">
                        <th>�û���</th>
                        <th>�ϼ�����</th>
                        <th>�û�<%=setting(56)%></th>
                        <th>����½ʱ��</th>
                        <th>ע������</th>
                        <th>����</th>
                    </tr>
                </thead>
                <tbody id="VipListOne">
                </tbody>
        </table>
    </div>

        <div class="latelyOrder" id="VipForm" style="display:none;margin-top:50px">
            <table class="isTable">
                <colgroup>
                    <col width="10%">
                    <col width="10%">
                    <col width="10%">
                    <col width="10%">
                    <col width="10%">
                    <col width="10%">
                    <col width="10%">
                    <col width="10%">
                </colgroup>
                <thead>
                  <tr class="brts_tit t_c">
                    <th>���</th>
                    <th>�û�</th>
                    <th>��ֵ</th>
                    <th>�һ�</th>
                    <th>����</th>
                    <th>����</th>
                    <th>�н�</th>
                    <th>ӯ��</th>
                  </tr>
                </thead>
                <tbody id="VipFormOne">
				</tbody>
			</table>
		</div>

        <div class="latelyOrder" id="VipProgramme" style="display:none;margin-top:50px">
            <div id="list_data" class="Mask">
                <table id="showpro" class="isTable">
                
                    <colgroup>
                       <col width="12%">
                        <col width="17%">
                        <col width="10%">
                        <col width="10%">
                        <col width="10%">
                        <col width="12%">
                        <col>
                        <col width="10%">
                    </colgroup>
                    
                    <thead>
                        <tr class="brts_tit t_c">
                            <th>��Ϸ</th>
                            <th>������</th>
                            <th>�û�</th>
                            <th>����<%=setting(56)%></th>
                            <th>Ͷע<%=setting(56)%></th>
                            <th>�ҵĽ���</th>
                            <th>Ͷעʱ��</th>
                            <th>״̬˵��</th>
                        </tr>
                    </thead>
                    <tbody id="VipProgrammeOne">
                    </tbody>
                </table>
            </div>
        </div>

		<div id="IsPage"></div>
        
		<div id="VipUrl" style="display:none">
			
             <% DlUrl = Setting(2)
                DlUrl = Replace(Replace(DlUrl,"http://www.",""),"http://","")%>
            
            <div class="s_level"><b class="e_mark"></b>��ܰ��ʾ�����������ӷ�������û������ƹ㡣</div>
            <div class="sec_m">
                <ul>
                    <li></li><%dllj=conn.execute("select dldiy from kr_user where username='"&session("un")&"'")(0)
if Setting(15)="1" then%>
                    <li><span style="margin-left:180px;"><A HREF="<%=Setting(2)%>/User/Reg/?u=<%=dllj%>" TARGET="_blank"><b id="DlUrl"><%=Setting(2)%>/User/Reg/?u=<%=dllj%></b></A></span></li><%else%>
                    <li><span style="margin-left:180px;"><A HREF="http://<%=dllj%>.<%=DlUrl%>/" TARGET="_blank"><b id="DlUrl">http://<%=dllj%>.<%=DlUrl%>/</b></A></span></li><%end if%>

     <li><span style="margin-left:180px;">
<img src="http://qr.liantu.com/api.php?text=<%=Setting(2)%>/User/Reg/?u=<%=dllj%>"/>

</span></li>

     <li><span style="margin-left:180px;">

�ҵ��ƹ��ά��
</span></li>


                </ul>
            </div>
        </div>  
</div>
</div>

<div id="mesWindow" align="center"><div><div class="tips_box"><div class="tips_title"><h2></h2><span class="close"><a href="javascript:GdObj.CloSe('mesWindow');">�ر�</a></span></div>
<ul>
<li>��ֵ<%=setting(56)%>��<span><input class="basic_txt gray" type="text" id="IsMoney" value="0" onKeyUp="this.value=Number(this.value.replace(/\D/g,''))" onafterpaste="Number(this.value=this.value.replace(/\D/g,''))"></span></li>
<li><span class="TiShi"></span></li>
<li>
<span>
<input id="TypeName" class="btn_xx" value="��ֵ" type="submit">
<input class="btn_xx" onClick="javascript:GdObj.CloSe('mesWindow');" value="ȡ��" type="submit">
<li></li>
</ul>
</div>
</div>
</div>

<div id="mesWindowTow" align="center"><div><div class="tips_box"><div class="tips_title"><h2></h2><span class="close"><a href="javascript:GdObj.CloSe('mesWindowTow');">�ر�</a></span></div> 	
            <div class="filter_s">
            <span  class="l"><input style="width:100px" class="basic_txt gray" name="username" type="text" id="IsUserName" placeholder="�û���" autocomplete="off" /></span>
            	<span class="m_r10 l"><select id="busisort" onChange="javascript:$('#search').trigger('click');" style="margin-left:6px;font-size:16px;height:33px;vertical-align:-1px;">
                	<option selected="" value="">��������</option>
                	<option value="Ͷע��Ϸ">Ͷע��Ϸ</option>
                    <option value="�����ֵ">�����ֵ</option>
                	<option value="���׶���">���׶���</option>
                	<option value="��Ա����">��������</option>
                	<option value="���߳�ֵ">���߳�ֵ</option>
                	<option value="�һ��ɹ�">�û��һ�</option>
                	<option value="ϵͳ��ֵ">ϵͳ��ֵ</option>
                	<option value="��ֵ����">��ֵ����</option>
                	<option value="���׷���">�����˱�</option>
                	<option value="ϵͳ�ɽ�">�н��ɽ�</option>
                	<option value="ϵͳ����">������</option>
                </select> 
                </span>
                <span class="l"><input type="text" style="width:100px" value="<%=Format_Time(now()-7,2)%>" class="basic_txt gray" id="beginday" name="beginday" onFocus="WdatePicker({dateFmt:'yyyy-MM-dd'})"> - <input type="text" style="width:100px" value="<%=Format_Time(now(),2)%>" id="endday" name="endday" class="basic_txt gray" onFocus="WdatePicker({dateFmt:'yyyy-MM-dd'})"> 
                </span>

                <span class="l"><input id="search" type="submit" onClick="javascript:Vip.Capital();" class="btn_xx" value="����"></span>

        	</div>
        	<div class="latelyOrder">
            <div class="Mask">
                <table id="showpro" class="isTable">
					<colgroup>
                    	 <col width="10%">
                        <col width="10%">
                        <col width="10%">
                        <col width="10%">
                        <col width="10%">
                        <col width="10%">
                        <col width="10%">
                    </colgroup>
                    <thead>
                    	<tr class="brts_tit t_c">
                        	<th>�û�</th>
                            <th>����ʱ��</th>
                            <th>����</th>
                            <th>֧��</th>
                            <th><%=setting(56)%></th>
                            <th>������</th>
                            <th>��ע</th>
                          </tr>
                    </thead>
                    <tbody id="Capital">
                    </tbody>
                </table> 
            </div>
            </div>
            <div id="IsPage1"></div>
</div>
</div>
</div>
<% footer() %>
</body>
</html>
