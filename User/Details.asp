<!--#include file="../Conn.asp"-->
<!--#include file="../Include/KR.CommonCls.asp"--><!doctype html>
<head>
<title>�ʽ���ϸ-<%=Setting(0)%></title>
<meta content="��Ϸ��������Ϸ��������Ϸ����ʣ����ʣ���Ϸ��������Ϸ���棬����ͼ����Ϸ����������ͳ��" name="keywords">
<meta content="<%=Setting(0)%>���ֻ�����õ�Ͷעƽ̨��10����Ϸ���Ʒ����飬Ϊ��Ϸ�����ṩ��ȫ���ֻ���ϷͶע����Ϸ���������Ϸ��Ѷ" name="description">
<meta charset="GB2312">
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1, user-scalable=0;" name="viewport" />
<meta http-equiv="Content-Type" content="text/html; charset=GB2312" />
<meta name="format-detection" content="telephone=no" />
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<link href="/Css/Basic.css" rel="stylesheet">
<link href="/Css/User.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="/JS/My97DatePicker/skin/WdatePicker.css" />
<script type="text/javascript" src="/JS/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="/JS/Utility.js"></script>
<script type="text/javascript" src="/JS/My97DatePicker/WdatePicker.js"></script>
</head>
<body>
<%checksssion()%>
<div class="head"><h2 id="navtit">�ʽ���ϸ</h2><a href="javascript:history.go(-1);" class="btn-qgkj" id="sourceUrl"><span><em></em></span>����</a></div>
</div>
<div class="wap_h" id="list_data">
	<div class="ex_record_box">
        <div id="div_tz" class="brts_box">
            <div class="filter_s" id="showpro">
            <div align="center">
            <p class="time_txt">
                <select style="font-size:16px;height:33px;vertical-align:-1px;" name="busisort">
                	<option selected="" value="0">��������</option>
                	<option value="1">Ͷע��Ϸ</option>
                	<option value="2">��������</option>
                	<option value="3">��������</option>
                	<option value="4">���߳�ֵ</option>
                	<option value="5">����һ�</option>
                	<option value="6">ϵͳ��ֵ</option>
                	<option value="7">ϵͳ�۳�</option>
                	<option value="8">ע������</option>
                	<option value="9">�����˱�</option>
                	<option value="10">�н��ɽ�</option>
                	<option value="11">������</option>
                	<option value="12">���׶���</option>
   </select>&nbsp;&nbsp;<input type="text" value="<%=Format_Time(now(),2)%>" class="basic_txt" id="beginday" name="beginday" onFocus="WdatePicker({dateFmt:'yyyy-MM-dd',onpicked:function(){do_search();}})"></p>
                </div><table width="100%" cellspacing="0" cellpadding="0" border="0">
					<colgroup>
                        <col width="25%">
                        <col width="25%">
                        <col width="25%">
                        <col width="25%">
                    </colgroup>
                    <thead>
                    	<tr class="brts_tit t_c">
                            <td>����</td>
                            <td>֧��</td>
                            <td>����</td>
                            <td>˵��</td>
                          </tr>
                    </thead>
                </table> 
            <ul class="brts_list">
            </ul>
            </div>
            <div class="my_page">
            <div align="center" style="margin:10px 0 20px 0;display:block" id="jiangbb"><a id="jiang5" href="javascript:do_search();"><div id="jiang4" class="jiang4"><font color="#FBF8F8" id="jiang3">������ظ���...</font></div></a></div>
            </div>
        </div>
    </div>
<div class="bank_info ">
<p>��ѯ˵��</p>
<p>1.�����Բ�ѯ�����˻����3�����ڵ��˻���ϸ��</p>
<p>2.��������߳�ֵ�������˻�Ǯ���ˣ�<%=Setting(0)%>�˻���û�м���<%=Setting(56)%>���뼰ʱ��������ϵ�����ǽ���һʱ��Ϊ������</p>
<p>3.����Ҫ��ѯȫ����ϸ������ϵ��վ�ͷ���<%=Setting(42)%>��</p>
</div>
    <script language="javascript" type="text/javascript">
		var sel ={
			busisort:"",
			beginday:"",
			tnumber:10,
		}
		$(function(){
			d = <%=d%>
			page.pagesize = <%=Setting(19)%>
			$("select[name='busisort']").change(function(){
				sel.tnumber=10;do_search();
			})
			$("#beginday").click(function(){
				sel.tnumber=10;
			})
			do_search();
		})
		function do_search(){
			sel.beginday = $("#beginday").val();
			sel.busisort = $("select[name=busisort] > option:selected").val();
			$("#list_data > div.brts_box").show();
			$.ajax({
				type: "POST",
				url: "ajax_sel.html",
				data: {
					action:"mxlist",
					busisort:sel.busisort,   //��������
					beginday:sel.beginday,
					d:d,
					page:page.pageindex,
					pagesize:page.pagesize,
					tnumber:sel.tnumber,
				},
				dataType:"xml",
				success: function(data){
					var err = $(data).find("err"),err1 = $(data).find("row");
					if($(err).attr("type")=="-1") //δ��¼
					{
						$("#showpro> ul").empty();
						var tr = ""
						tr += "<li>����û�е�¼������<a onclick='parent.alertdiv.login()' title='' href='javascript:void 0'>��¼</a>��</li>"
						$("#showpro> > ul").html(tr)
						page.pageindex =0
						page.countpage = 0
						page.countrs = 0
						createpage();
					}
					else if($(err).attr("type")=="1")
					{
						if(err1.length<1) document.getElementById("jiang3").style.display="none"; else{
						document.getElementById("jiang3").style.display="block";document.getElementById("jiang5").href="javascript:do_search();";
						if(err1.length<sel.tnumber)
						{
							$("#jiang3").html("�Ѽ������")	;
							document.getElementById("jiang4").style.background="#B3B3B3";sel.tnumber=10;
							$("#jiang5").removeAttr("href");
						}else 
						{
							$("#jiang3").html("������ظ���...");document.getElementById("jiang4").style.background="#FB080C";
							sel.tnumber=sel.tnumber+10;
						}}
						
						if($(data).find("row").length>0)
						{
							$("#showpro> ul").empty();
							var tr = ""
							$(data).find("row").each(function(index){
							if($(this).attr("i")%2==0)
							{
								tr += "<li class='sel'>"
							}
							else
							{
								tr += "<li class='even'>"
							}
								tr += "<div class='zc t_c'>"+$(this).attr("zc")+"</div><div class='sr t_c'>"+$(this).attr("sr")+"</div><div class='dt t_c'>"+$(this).attr("dt")+"</div><div class='bz t_c'>"+$(this).attr("bz")+"</div>"
							})
							
							$("#showpro > ul").html(tr)
							var count = $(data).find("count");
							$("#zsr").text(count.attr("zsr"));
							$("#zzc").text(count.attr("zzc"));
							$("#zyl").text(count.attr("zyl"));
							
							var pageinfo = $(data).find("page");
							page.pagesize = Number(pageinfo.attr("pagesize"))
							page.pageindex = Number(pageinfo.attr("pageindex"))
							page.countpage = Number(pageinfo.attr("countpage"))
							page.countrs = Number(pageinfo.attr("countrs"))
							createpage()
						}
						else
						{
							$("#showpro > ul").empty();
							var tr = ""
							tr += "<li>��Ǹ��û���ҵ����������Ľ����</li>"
							$("#showpro > ul").html(tr)
							$("#zsr").text("��0.00");
							$("#zzc").text("��0.00");
							$("#zyl").text("��0.00");
							page.pageindex =0
							page.countpage = 0
							page.countrs = 0
							createpage()
						}
					}
					else
					{
						
						if($(err).attr("msg").length>0)
						{
							parent.alertdiv.alert($(err).attr("msg"));
						}
						if($(err).attr("url").length>0)
						{
							parent.location.href = $(err).attr("url");
						}
					}
				},
				error: function (jqXHR, textStatus, errorThrown) {
				},
				complete: function (jqXHR, textStatus) {
					$("#list_data > div.brts_box").hide();
				}
			});
		}
		
    </script>
<!--#include file="../dh.asp"-->
</body>
</html>