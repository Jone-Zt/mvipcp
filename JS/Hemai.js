$(function(){
	$("#srearch").click(function(){
		sel.findstr = $("#findstr").val();
		do_search();
	})
	$("#expect").change(function(){
		sel.expect = $("#expect > option:selected").val();
		do_search();
	})
	
	$("#detail_search").click(function(){
		sel.tcSelect = $("#tcSelect > option:selected").val();
		sel.ztSelect = $("#ztSelect > option:selected").val();
		sel.jeSelect = $("#jeSelect > option:selected").val();
		sel.mfSelect = $("#mfSelect > option:selected").val();
		sel.jdSelect = $("#jdSelect > option:selected").val();
		sel.bdSelect = $("#bdSelect > option:selected").val();
		do_search();
	})

	do_search();
})

function do_search(){
	$("#list_data > div.Mask").show();
	$.ajax({
		type: "POST",
		url: "/Trade/Ajax_Trade.html",
		data: {
			action:"hmlist",
			findstr:escape(sel.findstr),
			expect:sel.expect,
			tcSelect:sel.tcSelect,
			ztSelect:sel.ztSelect,
			jeSelect:escape(sel.jeSelect),
			mfSelect:escape(sel.mfSelect),
			jdSelect:escape(sel.jdSelect),
			lotid:sel.lotid,
			bdSelect:sel.bdSelect,
			Pageno:page.pageindex,
			pagesize:page.pagesize
		},
		dataType:"xml",
		success: function(data){
			var err = $(data).find("err");
			if($(err).attr("type")=="1")
			{
				if($(data).find("row").length>0)
				{
					$("div.hm_cont > div").empty();
					var tr = ""
					$(data).find("row").each(function(index){
						
						tr += "<a href='/Trade/"+$(this).attr("Lottery_Type")+"/Project_Info-"+$(this).attr("cid")+"'>"
						tr += "<dl class='hm_contlist'>"
						tr += "<dt>"
						tr += "<h3>"+$(this).attr("Lottery_Name")+"</h3>"
						tr += "<div class='pie_box'>"
						tr += "<font class='font_18'>"
						tr += "<div class='circle'>"
						tr += "<div class='pie_left'><div class='left'></div></div>"
						tr += "<div class='pie_right'><div class='right'></div></div>"
						tr += "<div class='mask'><span>"+$(this).attr("jd")+"</span>%</div>"
						tr += "</div>"
						tr += "</div>"
						tr += "</font>"
						if($(this).attr("bd")!="0.00")
						{
							tr += "<font class='color_ff9900 font_b'>保"+$(this).attr("bd")+"%</font>"
						}
						tr += "</dt>"
						tr += "<dd>"
						tr += "<div class='hm_list_info'>"
						tr += "<h4>"+unescape($(this).attr("user"))+"<span class='hg_ico'>"
						var am = $(this).attr("amoney")
						var ar = Math.floor(am / 10000000)
						if (ar > 0 )
						{
						    tr += "<img src='../../Images/y4.gif' />";
						    tr += "<img src='../Images/s" + ar + ".png' />";
						    am = am - 10000000 * ar
						}
						var ar = Math.floor(am / 1000000)
						if (ar > 0) {
						    tr += "<img src='../Images/y3.gif' />";
						    tr += "<img src='../Images/s" + ar + ".png' />";
						    am = am - 1000000 * ar
						}
						var ar = Math.floor(am / 100000)
						if (ar > 0) {
						    tr += "<img src='../Images/y2.gif' />";
						    tr += "<img src='../Images/s" + ar + ".png' />";
						    am = am - 100000 * ar
						}
						var ar = Math.floor(am / 10000)
						if (ar > 0) {
						    tr += "<img src='../Images/y1.gif' />";
						    tr += "<img src='../Images/s" + ar + ".png' />";
						    am = am - 10000 * ar
						}
						if ($(this).attr("amoney") > 1000 && $(this).attr("amoney") < 10000)
						{ tr += "<img src='../Images/y1.gif' />" }
						tr += "</span></h4>"
						tr += "<ul class='hm_list_box hm_list_tp'>"
						tr += "<li class='color_red'>"+$(this).attr("allmoney")+""+coinType+"</li>"
						tr += "<li>"+$(this).attr("mfje")+""+coinType+"</li>"
						tr += "<li>"+$(this).attr("sy")+"</li>"
						tr += "</ul>"
						tr += "<ul class='hm_list_box color_999 font_10'>"
						tr += "<li>总"+coinType+"</li>"
						tr += "<li>每份</li>"
						tr += "<li>剩余份数</li>"
						tr += "</ul>"
						tr += "</div>"
						tr += "</dd>"


						tr += "<i class='fa_icon'></i>"
						tr += "</dl>"
						tr += "</a>"
					})
					$("div.hm_cont > div").html(tr)
					var pageinfo = $(data).find("page");
					page.pagesize = Number(pageinfo.attr("pagesize"))
					page.pageindex = Number(pageinfo.attr("pageindex"))
					page.countpage = Number(pageinfo.attr("countpage"))
					page.countrs = Number(pageinfo.attr("countrs"))
					createpage()
				}
				else
				{
					
					$("div.hm_cont > div").empty();
					var tr = "<dl>"
					tr += "<td colspan='12'>抱歉！没有找到符合条件的结果！</td>"
					tr += "</dl>"
					$("div.hm_cont > div").html(tr)
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
					alertdiv.alert($(err).attr("msg"));
				}
				if($(err).attr("url").length>0)
				{
					location.href = $(err).attr("url");
				}
			}
		},
		error: function (jqXHR, textStatus, errorThrown) {
		},
		complete: function (jqXHR, textStatus) {
			$("#list_data > div.Mask").hide();
		}
	});
}