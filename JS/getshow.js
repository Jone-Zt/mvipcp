// JavaScript Document



//路径
var UrlJson={
	OmittedUrl : "../../KaiJiang/Xml/JxSsc/Omitted.html",
	InfoUrl : "../../asp/Trade/JxSsc/Ajax_Info.asp",
	ZGUrl:"../../asp/Trade/JxSsc/Ajax_ZG.html",
	HMUrl:"../../asp/Trade/JxSsc/Ajax_HM.html",
	OtherUrl:"../../asp/Trade/JxSsc/Ajax_Other.html",
	OpenCodeUrl:"../../asp/Trade/Include/KR.Ajax.html"
}
$(function(){
  GetActiveExpect();	
})

/*
ajax 函数
*/
// 获取系统以及 当前期号
function GetActiveExpect(){
	$.ajax({
		type: "POST",
		url: UrlJson.InfoUrl,
		data: {
			action:"activeexpect"
		},
		dataType:"xml",
		success: function(data){
			var err = $(data).find("err");
			if($(err).attr("type")=="1")
			{
				var status = $(data).find("status");
				issale = $(status).attr("issale");
				ServerTime = $(status).attr("servertime");
				ServerTime = Date.parse(ServerTime.replace(/-/g,"/"))
				var date = new Date();
				LocalSubServerSecond = Math.round((Date.parse(date)-ServerTime)/1000);
				LocalSubServerSecond = LocalSubServerSecond-1;
					
				var issue = $(data).find("issue");
				ActionIssue = $(issue).attr("expect");
				ActionIssueEndtime = $(issue).attr("endtime");
				var order = $(issue).attr("order");
				$("#issueNo_2").text(ActionIssue.substr(2,ActionIssue.length-2));
				//$("#issueNo_2").text(ActionIssue.substr(9,ActionIssue.length-2));
				ShowTime();
				if(order=="001")//当新的一天一期开始 自动刷新今日开奖
				{
					GetnCodes();
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
			GetActiveExpect();
		},
		complete: function (jqXHR, textStatus) {
		}
	});
}

//校对系统时间
function GetServerTime(){
	$.ajax({
		type: "POST",
		url: UrlJson.InfoUrl,
		data: {
			action:"time"
		},
		dataType:"xml",
		success: function(data){
			var err = $(data).find("err");
			if($(err).attr("type")=="1")
			{
				
				var status = $(data).find("status");
				issale = $(status).attr("issale");
				ServerTime = $(status).attr("servertime");
				ServerTime = Date.parse(ServerTime.replace(/-/g,"/"))
				var date = new Date();
				LocalSubServerSecond = Math.round((Date.parse(date)-ServerTime)/1000);
				LocalSubServerSecond = LocalSubServerSecond-1;
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
			//GetServerTime();
		},
		complete: function (jqXHR, textStatus) {
		}
	});
}
function zztz_close(){window.location.reload();}
var ShowNumber=0
//显示信息
function ShowTime()
{
	if(issale==0)
	{
		$("#countDownDiv").html("<span class='stop'>已停售</span>");
		$("#jishi_2").html("已停售");
		return;
	}
	
	CalculateTime();
	if(SurplusSecond>0) //显示当前期期号和时间
	{
		IssueState = true;
		/*if(ListTopIssue !="" &&  ListTopIssue != ActionIssue)
		{
			var oldTopIssue = $("#preIssue").html()
			if (oldTopIssue != ListTopIssue)
			{
				$("#preIssue").html(ListTopIssue)
				$("#currentIssue").html(ActionIssue)
				alertdiv.showBox("overduePrompt","温馨提示",null,250,null,null);
				ColseCountdownWin('overduePrompt','close_time','close_time_second',null,zztz_close)
				GetDayExpect();
			}
		}*/
		
		ShowNumber = ShowNumber + 1
		if(ShowNumber>30) //每两分钟更新一次当前期数
		{
			GetServerTime();
			ShowNumber = 0;
		}
		window.setTimeout("ShowTime()",1000)
	}
	else
	{
		ShowNumber = 0;
		IssueState = false;
		$("#countDownDiv").html("<span class='stop'>截止</span>");
		$("#jishi_2").html("截止");
		GetActiveExpect();
		//GetDayExpect();
	}
}

//计算离各时间还有多少秒
function CalculateTime()
{
	ServerTime = ServerTime + 1000
	SurplusSecond = Math.round((Date.parse(ActionIssueEndtime.replace(/-/g,"/"))-ServerTime)/1000);
	if(SurplusSecond>=3600)
	{
		$("#countDownDiv").html("预售");
		$("#jishi_2").html("预售");
	}
	else
	{
		m = Math.floor(SurplusSecond/60);
		if (m<10)
		{
			m = "0"+m;
		}
		var s = SurplusSecond%60;
		if(s<10)
		{
			s = "0"+s;
		}
		$("#countDownDiv").html(""+m+":"+s+"");
		$("#jishi_2").html(""+m+":"+s+"");
	}
}



/*显示投注期号列表*/
function GetDayExpect()
{
	$.ajax({
		type: "POST",
		url: UrlJson.InfoUrl,
		data: {
			action:"expect"
		},
		dataType:"xml",
		success: function(data){
			var err = $(data).find("err");
			if($(err).attr("type")=="1")
			{
				$("#todayTb > tbody").empty();
				$("#tomorrowTb > tbody").empty();
				$("#btStartList").empty();
				
				j = 0;
				var tr = "";
				var sellist=""
				$(data).find("today").each(function(index){
					var qihao = $(this).attr("expect");
					var qih = $(this).attr("qih");
					var dgendtime = $(this).attr("endtime");
					j = j+1
					var dgendtime2 = Date.parse(dgendtime.replace(/-/g,"/"));
					dgendtime2 = new Date(dgendtime2);
					dgendtime2 = TimeToStr(dgendtime2);
					
					tr = tr + "<tr>";
					tr = tr + "<td><input type='checkbox' value='"+qihao+"' name='checkbeishu' id='qihao"+qihao+"'>"
					if(j == 1)
					{
							tr = tr + ""+qih+"";
							ListTopIssue = qihao;
					}
					else
					{
							tr = tr + ""+qih+"";
					}
					tr = tr + "</td>";
					tr = tr + "<td class='tc'>";
					tr = tr + "<input type='text' value='0' maxlength='4' name='beishu_show' class='auto_ipt' disabled/><label> 倍</label>";
					tr = tr + "</td>";
					tr = tr + "<td class='tc red'>--</td>";
					tr = tr + "</tr>";
					if(j == 1)
					{
						sellist = sellist + "<option value='"+qihao+"'>["+j+"]"+qihao+"</option>"
					}
					else
					{
						sellist = sellist + "<option value='"+qihao+"'>["+j+"]"+qihao+"</option>"
					}
				});
				$("#todayTb > tbody").html(tr);
				
				tr = "";
				$(data).find("tomorrow").each(function(index){
					var qihao = $(this).attr("expect");
					var dgendtime = $(this).attr("endtime");
					j = j+1
					var dgendtime2 = Date.parse(dgendtime.replace(/-/g,"/"));
					dgendtime2 = new Date(dgendtime2);
					dgendtime2 = TimeToStr(dgendtime2);
					
					
					tr = tr + "<tr>";
					tr = tr + "<td class='tc'>"+j+"</td>"
					tr = tr + "<td><input style='margin-left:3px' type='checkbox' value='"+qihao+"' class='l' name='checkbeishu' id='qihao"+qihao+"'>"
					if(j == 1)
					{
							tr = tr + " <label class='l red'>&nbsp;"+qihao+"(当前期号)</label>";
							ListTopIssue = qihao;
					}
					else
					{
							tr = tr + "<label class='l'>&nbsp;"+qihao+"</label>";
					}
					tr = tr + "</td>";
					tr = tr + "<td class='tc'>";
					tr = tr + "<input type='text' value='0' maxlength='4' name='beishu_show' class='i-a' disabled/><label> 倍</label>";
					tr = tr + "</td>";
					tr = tr + "<td class='tc red'>--</td>";
					tr = tr + "<td class='tc'>"+dgendtime2.substr(0,16)+"</td>";
					tr = tr + "</tr>";
					if(j == 1)
					{
						sellist = sellist + "<option value='"+qihao+"'>["+j+"]"+qihao+"(当前期号)</option>"
					}
					else
					{
						sellist = sellist + "<option value='"+qihao+"'>["+j+"]"+qihao+"</option>"
					}
				});
				$("#tomorrowTb > tbody").html(tr);
				$("#btStartList").html(sellist);
				
				//绑定复选框和输入框事件
				Check_Show_BeiShu_Even();
				SetTozhuExpect();
			}
			else
			{
				if($(err).attr("msg").length>0)
				{
					alert($(err).attr("msg"));
				}
				if($(err).attr("url").length>0)
				{
					location.href = $(err).attr("url");
				}
			}
		},
		error:function (XMLHttpRequest, textStatus, errorThrown) {
			alertdiv.alert("获取期号错误，请刷新！")
		},
		complete:function(XMLHttpRequest, textStatus){
			$("#TzListMask").hide()
		}
	});
}

//设置倍数和期号
function SetTozhuExpect()
{
	if($("#btDiv").is(":hidden"))
	{
		var expectlistsuc = $("#expectlistsuc").val();
		var beishulistsuc = $("#beishulistsuc").val();
		var expectlistsucArr = expectlistsuc.split(",");
		var beishulistsucArr = beishulistsuc.split(",");
		for (var i =0; i < expectlistsucArr.length ; i++)
		{
			if($("input#qihao"+expectlistsucArr[i]).length > 0)
			{
				 $("input#qihao"+expectlistsucArr[i]).attr("checked",true).parent().next().find("input").removeAttr("disabled").val(beishulistsucArr[i]);
			}
		}
		if ($("#todayTb,#tomorrowTb").find(" tbody > tr > td > input:checked").length==0)
		{
			$("#todayTb,#tomorrowTb").find(" tbody > tr").eq(0).find("input[name='checkbeishu']").attr("checked",true).parent().next().find("input").removeAttr("disabled").val(1);
			if($("#todayTb >  tbody > tr").length==0)
			{
				$("#zhTab2").click();//当今天投注列表没有，切换到明天投注列表
			}
		}
		JoinExpectBeishu();
		ShowMoney();
		SetHM();
	}
	else
	{
		$("#todayTb,#tomorrowTb").find(" tbody > tr").eq(0).find("input[name='checkbeishu']").attr("checked",true).parent().next().find("input").removeAttr("disabled").val(1);
		
	}
}


//获取今日全部开奖号码
function GetnCodes(){
	$.ajax({
		type: "POST",
		url: UrlJson.InfoUrl,
		data: {
			action:"codes"
		},
		dataType:"xml",
		success: function(data){
			var err = $(data).find("err");
			if($(err).attr("type")=="1")
			{
				$("#allIssues > table").find("table > tbody > tr").each(function(){
					$(this).find("td:last ").html("&nbsp;")
				})
					
				$(data).find("row").each(function(index){
					var qihao = Number($(this).attr("issue"));
					var awardNum = $(this).attr("awardnum");
					var tableIndex = parseInt(qihao / 20);
					if (qihao % 20 == 0)
					{
						tableIndex = tableIndex -1;
					}
					var table =  $("#allIssues > table").find("table").eq(tableIndex);
					qihao = qihao % 20 ;
					if(qihao==0)
					{
						qihao = 20;
					}
					
					$(table).find(" tbody > tr").eq(qihao-1).find("td").eq(1).text(awardNum);
				});
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
		}
	});
}

// 获取开奖号码列表
function GetOpenCode()
{
	$.ajax({
		type: "POST",
		url: UrlJson.OpenCodeUrl,
		data: {
			action:"GetJxSscOpenCode"
		},
		dataType:"xml",
		success: function(data){
			var err = $(data).find("err");
			if($(err).attr("type")=="1")
			{
				 
				var saleqh=$(data).find("saleqh");
				
				//更新开奖返奖
				var kj=$(data).find("kj");
				kjqh= "<em class='ball_lesson red' id='news_kj_qh'>" + $(kj).attr("kjqh") + "期</em>";
				hm1=$(kj).attr("kjq1")
				hm2=$(kj).attr("kjq2")
				hm3=$(kj).attr("kjq3")
				hm4=$(kj).attr("kjq4")
				hm5=$(kj).attr("kjq5")
				$("#news_kj_qh").html(kjqh);
				tempkj02= "<span class='ball_s'>"+hm1+"</span><span class='ball_s'>"+hm2+"</span><span class='ball_s'>"+hm3+"</span><span class='ball_s'>"+hm4+"</span><span class='ball_s'>"+hm5+"</span>"
				$("#news_kj").html(tempkj02);
				//返奖更新结束

				$("#kj_top10 > table > tbody").empty();
				var j = 0;
				var tr = "";
				var optionstr = "";
				$(data).find("row").each(function(index){
					j = j+1
					if(j == 1)
					{
						var firstIssue = $(this).attr("issue")
						if(firstIssue != lastissue)
						{
							if(lastissue!="")
							{
								var qihao = Number($(this).attr("shortissue"));
								var awardNum = $(this).attr("awardnum");
								qihao = qihao - 1 
								var tableIndex = parseInt(qihao / 20);
								
								var table = $("#allIssues > table").find("table").eq(tableIndex);
								qihao = qihao % 20 ;
								if(qihao==0)
								{
									qihao = 20;
									tableIndex = tableIndex -1
									table = $("#allIssues > table").find("table").eq(tableIndex);
								}
								
								$(table).find(" tbody > tr").eq(qihao-1).find("td").eq(1).text(awardNum);
							}
							lastissue = firstIssue;
							GetOmitted();
						}
					}
					tr = tr + "<tr>"
					tr = tr + "<td class='tc'>" + $(this).attr("tm") + "</td>";
					tr = tr + "<td class='tc'><span class='gray'>" + $(this).attr("shortissue") + "期</span></td>";
					tr = tr + "<td class='tc'><em class='red'>" + $(this).attr("awardnum") + "</em></td>";
					var infoarr = $(this).attr("awardnum").split(",")
					var num=Number(infoarr[3]);
					var txt = ""
					if(num < 5)
					{
						txt = "小"
					}
					else
					{
						txt = "大"
					}
							
					if(num%2==0)
					{
						txt += "双"
					}
					else
					{
						txt += "单"
					}
					tr = tr + "<td class='tc red'>"+txt+"</td>";
					num=Number(infoarr[4]);
					txt = ""
					if(num < 5)
					{
						txt = "小"
					}
					else
					{
						txt = "大"
					}
							
					if(num%2==0)
					{
						txt += "双"
					}
					else
					{
						txt += "单"
					}
					tr = tr + "<td class='tc red'>"+txt+"</td>";
					
				if($(this).attr("housan")=="1")
				  {
					tr = tr + "<td class='tc red'>组三</td>";					

				  }
				  else
				  {
				if($(this).attr("housan")=="2")
				  		{
					tr = tr + "<td class='tc gray'>组六</td>";	

				  		}
				  		else
				  		{
					tr = tr + "<td class='tc blue'>豹子</td>";			

				  		}		  		
				  }
					tr = tr + "</tr>";
					
				});
				
				$("#kj_top10 > table > tbody").html(tr);
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
	    }
	});
}

// 获取遗漏
function GetOmitted()
{
	$.ajax({
		type: "POST",
		url: UrlJson.OmittedUrl,
		data: {
			action:"omitted"
		},
		dataType:"xml",
		success: function(data){
			var err = $(data).find("err");
			if($(err).attr("type")=="1")
			{
				if ($(data).find("row").length > 0)
				{
					var sapnArr =$("ul.c-s-num > li > i");
					$(data).find("row").each(function(index){
						var Omitted = Number($(this).attr("Omitted"))
						if (Omitted<20)
						{
							$(sapnArr[index]).html($(this).attr("Omitted"))
						}
						else
						{
							$(sapnArr[index]).html("<font color='red'>"+$(this).attr("Omitted")+"</font>")
						}
					})
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
	    }
	});
}