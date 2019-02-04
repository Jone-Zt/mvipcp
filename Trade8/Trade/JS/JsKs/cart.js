function cansu(name){
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
var czname=cansu("type"),caizhong="",gp=1;
if(czname=="JsKs") caizhong="\u6c5f\u82cf\u5feb\u0033";
else if(czname=="JlKs") caizhong="\u5409\u6797\u5feb\u0033";
else if(czname=="AhKs") caizhong="\u5b89\u5fbd\u5feb\u0033";
else if(czname=="FjKs") caizhong="\u798f\u5efa\u5feb\u0033";
else if(czname=="NmKs") caizhong="\u5185\u8499\u5feb\u0033";
else if(czname=="GxKs") caizhong="\u5e7f\u897f\u5feb\u0033";
else if(czname=="HubKs") caizhong="\u6e56\u5317\u5feb\u0033";
else if(czname=="HebKs") caizhong="\u6cb3\u5317\u5feb\u0033";
else if(czname=="ShKs") caizhong="\u4e0a\u6d77\u5feb\u0033";
function jisuan()
{
	$("#jianga").html(caizhong); 
	if( $("#meRG").val()!=""){
	if($("#coopMul").val()>500) $("#coopMul").val(500)
	if(localStorage["storage255803mul"]) var a=localStorage["storage255803mul"];else var a=0;
	$("#coopCount").html(a);
	var b=document.getElementById("coopMul").value;
	var sum=a*2*b;document.getElementById("coopMoney").innerHTML=sum;
	var zsrengou=sum*0.05,zsrengou1=Math.ceil(zsrengou);$("#meRG").val(zsrengou1);$("#meBD").val(sum-zsrengou1);	
	var maxbaodi=sum-zsrengou1;$("#maxBD").html(maxbaodi);var rg=$("#meRG").val(),bd=$("#meBD").val();$("#trengou").html(rg);$("#tbaodi").html($("#meBD").val());
	if(bd=="") bd=0;if(rg=="") rg=0;
	$("#tsum").html(parseInt(bd)+parseInt(rg));
	if(rg<zsrengou1){ $("#meRG").val(zsrengou1);jisuan();}
	if(bd>maxbaodi){ $("#meBD").val(maxbaodi);jisuan();}} 
}
function tjisuan()
{
	if( $("#meRG").val()!=""){
	var a=parseInt($("#coopMoney").html()),zsrengou=Math.ceil(a*0.05);
	if($("#meRG").val()<zsrengou) $("#meRG").val(zsrengou)
	if($("#meRG").val()>a){$("#meRG").val(a);$("#meBD").val(0);}
	$("#meBD").val(parseInt(a)-parseInt($("#meRG").val()));
	$("#trengou").html($("#meRG").val());$("#tbaodi").html($("#meBD").val());
	$("#tsum").html(parseInt($("#trengou").html())+parseInt($("#tbaodi").html()));
	$("#maxBD").html(a-Math.ceil($("#meRG").val()))}
}
function tjisuan1()
{
	if( $("#meRG").val()!=""){
	var a=parseInt($("#coopMoney").html()),zsrengou=Math.ceil(a*0.05);
	if(parseInt($("#meBD").val())>parseInt($("#maxBD").html())) $("#meBD").val($("#maxBD").html());
	$("#trengou").html($("#meRG").val());$("#tbaodi").html($("#meBD").val());if($("#meBD").val()==""){ $("#tbaodi").html(0);$("#meBD").val(000000)}
	$("#tsum").html(parseInt($("#trengou").html())+parseInt($("#tbaodi").html()));
	$("#maxBD").html(a-Math.ceil($("#meRG").val()));}
}
function panduan()
{
	var tk1=document.getElementById("k1").className,tk2=document.getElementById("k2").className,tk3=document.getElementById("k3").className,qihao=$("#showid").html(),
	zhusu=localStorage["storage255803mul"],tjurl="",wanfa1=caizhong;qihao=qihao.substr(2,qihao.length);var tqihaosum=qihao,wfname="",wfname1="",wanfa="";
	if(tk1=="on")//获取投注
	{
		var beisu=document.getElementById("ownMul").value,sum=document.getElementById("ownMoney").innerHTML,tjurl="/Trade/Include/Ajax_ZG_G.asp";
	}
	else if(tk3=="on")//获取追号
	{
		var bbb=document.getElementById("stopbuy").checked;var qisu=document.getElementById("apNum").value;var beisu=document.getElementById("apMul").value;
		var sum=document.getElementById("apMoney").innerHTML;if(bbb) var zhuihaotz="1";else zhuihaotz="0";tjurl="/Trade/Include/Ajax_ZG_G.asp";qisu2=beisu;
		var showbeisu=beisu;for(var i=1;i<qisu;i++) qisu2=qisu2+","+beisu;	
		var tqihao=qihao.split("-"),a=Number(tqihao[1]);
		for(var j=1;j<qisu;j++)
		{
			a++;
			if(a<=10)
				var b="0"+a;
			else 
				var b=a;
			tqihaosum=tqihaosum+","+tqihao[0]+"-"+b;		
		}
		beisu=qisu2;qihao=tqihaosum;
		var qihaofw=qihao.split(","),qihaofw1=qihaofw[0]+"..."+qihaofw[qisu-1];
	}
	else   //获取合玩 
	{
		var beisu=document.getElementById("coopMul").value,rengou=document.getElementById("meRG").value,baodi=document.getElementById("meBD").value,
		isgk=document.getElementById("ispublic").value,sum=zhusu*2*beisu,ttrengou=Math.ceil(sum*0.05);
		$("#coopCount").html(zhusu);$("#coopMoney").html(sum);$("#meRG").val(ttrengou);
		$("#trengou").html(ttrengou);var ticheng=document.getElementById("royalty").value,
		tjurl="/Trade/Include/Ajax_HM_G.asp",zhifu=$("#tsum").html();
	}
	k1=localStorage["storage255803"].split("$"),codes="";
	for(var i=0;i<k1.length;i++)
	{
		if(i>0)
		{
			k2=k1[i].split("|");
			
			switch(k2[0])
			{
				case "HSZ":{wanfa="[101]";wfname="\u548c\u503c";break;}
				case "DXDS":{wanfa="[101]";wfname="\u5927\u5c0f\u5355\u53cc";break;}	
				case "3TD":{wanfa="[106]";wfname="\u4e09\u540c\u53f7\u5355\u9009";break;}	
				case "3TT":{wanfa="[107]";wfname="\u4e09\u540c\u53f7\u901a\u9009";break;}	
				case "3BT":{wanfa="[105]";wfname="\u4e09\u4e0d\u540c\u53f7";break;}	
				case "3LT":{wanfa="[108]";wfname="\u4e09\u8fde\u53f7\u901a\u9009";break;}	
				case "2TD":{wanfa="[102]";wfname="\u4e8c\u540c\u53f7\u5355\u9009";break;}	
				case "2BT":{wanfa="[104]";wfname="\u4e8c\u4e0d\u540c\u53f7";break;}	
			}
			if(codes!="") codes=codes+"$"+wanfa+k2[1]; else codes=codes+wanfa+k2[1]
			if(wfname!=""&&wfname!=wfname1&&wfname1!="") wfname="\u6df7\u6295";
				wfname1=wfname;
		}
	}
	if(baodi<1&&baodi=="")
		var isbaodi=0; else var isbaodi=1;
	$.ajax
	({
		url:tjurl,
		type:"POST",
		dataType:"xml",
		async:false,
		data:{
				caizhongdm:czname,
				protype:escape(wanfa1),
				wfname:escape(wfname),                                 
				iszhuihao:"1",                                
				allmoney:sum,                               
				codes:codes.replace(/\u5927/g,"20").replace(/\u5c0f/g,"21").replace(/\u5355/g,"22").replace(/\u53cc/g,"23"),                                       
				ZjCut:zhuihaotz,                                   
				beishulistsuc:beisu,                             
				expectlistsuc:qihao,                                    
				single_zs:zhusu, 
				BuyJF:"0",   
				isbaodi:isbaodi,             
				single_m:"",                
				escstr:"",
				buyCount:rengou,
				baodiCount:baodi,
				tc_money:ticheng,
				escstr: localStorage["storage255803"].replace(/\u5927/g,"20").replace(/\u5c0f/g,"21").replace(/\u5355/g,"22").replace(/\u53cc/g,"23"),
                anumber:sum,
                onemoney:1  
			},
	success:function(data)
			{
				var err = $(data).find("err");
				if($(err).attr("type")=="-1") //未登录
				{
					document.getElementById("ttlogin").style.display="none";
				}
				else if($(err).attr("type")=="0")
				{
					alert("\u5bf9\u4e0d\u8d77\u60a8\u7684\u4f59\u989d\u4e0d\u8db3");
				}
				else if($(err).attr("type")=="3")
				{
					alert("\u8be5\u9875\u9762\u5df2\u8fc7\u671f\u8bf7\u5237\u65b0");
				}
				else if($(err).attr("type")=="4")
				{
					alert("\u6295\u6ce8\u91d1\u989d\u5df2\u7ecf\u8d85\u8fc7\u6700\u5927\u9650\u989d");
				}
				else if($(err).attr("type")=="5")
				{
					alert("\u6295\u6ce8\u9519\u8bef");
				}
				else if($(err).attr("type")=="2")
				{
					alert("\u5bf9\u4e0d\u8d77\u60a8\u7684\u79ef\u5206\u4e0d\u8db3");
				}
				else if($(err).attr("type")=="-2")
				{
					alert("\u65f6\u95f4\u5df2\u622a\u6b62");
				}
				else if($(err).attr("type")=="1")
				{
					alert("\u6295\u6ce8\u6210\u529f\uff01");
					if(localStorage["storage255803"]&&localStorage["storage255803mul"])
					{localStorage.removeItem("storage255803");localStorage.removeItem("storage255803mul");}
	document.getElementById("mycart").innerHTML="<li class='nocode'> \u60a8\u8fd8\u6ca1\u6709\u9009\u62e9\u4efb\u4f55\u53f7\u7801\uff01</li>";
					$("#ownMul").val("1");$("#ownCount").html("0");$("#ownMoney").html("0");$("#coopMul").val("1");$("#coopCount").html("0");$("#coopMoney").html("0");
					$("#meRG").val("0");$("#meBD").val("0");$("#tsum").html("0");$("#trengou").html("0");$("#tbaodi").html("0");$("#apMul").val("1");$("#apNum").val("10");
					$("#apMoney").html("0");$("#maxBD").html("0");$("#royalty").val(0);$("#ispublic").val(0);
				}
			}
	});
}
(function(e) {
    var t = e.$,
    n = e.kureicp;
    n.mobile.lotType = n.lottery.lotType.k3gx,
    n.mobile.price = n.lottery.price,
    n.mobile.maxMoney = n.lottery.maxMoney,
    n.mobile.issuefreq = 2e3,
    n.mobile.getActIssueFreq = 6e4,
    n.mobile.clearCacheAPI = "#",
    n.mobile.game = {
        "HSZ": "\u548c\u503c",               //和值
        "3TT": "\u4e09\u540c\u53f7\u901a\u9009",  //三同号通选
        "3TD": "\u4e09\u540c\u53f7\u5355\u9009",  //三同号单选
        "3BT": "\u4e09\u4e0d\u540c\u53f7",  //三不同号
        "3LT": "\u4e09\u8fde\u53f7\u901a\u9009",//三连号通选
        "2TF": "\u4e8c\u540c\u53f7\u590d\u9009",//二同号复选
        "2TD": "\u4e8c\u540c\u53f7\u5355\u9009",//二同号单选
        "2BT": "\u4e8c\u4e0d\u540c\u53f7",      //二不同号
		"DXDS":"\u5927\u5c0f\u5355\u53cc"
    },
    n.mobile.isjiajiang = !1,
    n.mobile.isjiajiang ? n.mobile.jjprice = {
        HSZ3: 276,
        HSZ4: 92,
        HSZ5: 46,
        HSZ6: 29,
        HSZ7: 19,
        HSZ8: 14,
        HSZ9: 12,
        HSZ10: 11,
        HSZ11: 11,
        HSZ12: 12,
        HSZ13: 14,
        HSZ14: 19,
        HSZ15: 29,
        HSZ16: 46,
        HSZ17: 92,
        HSZ18: 276,
        "3TT": 46,
        "3TD": 276,
        "3BT": 46,
        "3LT": 12,
        "2TF": 18,
        "2TD": 92,
        "2BT": 10
    }: n.mobile.jjprice = {
        HSZ3: 240,
        HSZ4: 80,
        HSZ5: 40,
        HSZ6: 25,
        HSZ7: 16,
        HSZ8: 12,
        HSZ9: 10,
        HSZ10: 9,
        HSZ11: 9,
        HSZ12: 10,
        HSZ13: 12,
        HSZ14: 16,
        HSZ15: 25,
        HSZ16: 40,
        HSZ17: 80,
        HSZ18: 240,
        "3TT": 40,
        "3TD": 240,
        "3BT": 40,
        "3LT": 10,
        "2TF": 15,
        "2TD": 80,
        "2BT": 8
    },
    n.mobile.ylTP = "all",
    n.mobile.isZN = 0,
    n.mobile.callbacks = function() {
        t("#pay_buy").trigger("click")
    },
    n.mobile.AsynDownData = function() {
        var e = t(".xq-tit"),
        r = t("#actQH"),
        i = t("#sourceUrl"),
        s = n.string.getUrlParam("pt") || "HSZ";
        i.attr("href", "./index.asp?pt=" + s+"&type="+czname),
        t.getJSON(n.mobile.clearCacheAPI + "?r=" + t.now(),
        function(t) {
            t && (e.attr("endtime", t.EndTime), e.attr("prevtime", t.DsTimeSpace), e.attr("issale", t.IsOpen), e.attr("pt", s), r.text(t.issue), n.mobile.countDownInit(t.EndTime, t.DsTimeSpace), n.string.getUrlParam("dest") && n.mobile.callbacks())
        })
    },
    n.mobile.dealActsue = function(e) {
        var r = e.Issue,
        i = t.trim(t("#actQH").text());
        t(".xq-tit").attr("issale", e.IsOpen),
        t("#actQH").text(r).data("issue", r),
        t("#pay_buy").removeAttr("disabled").removeClass("btnoff").text("\u7acb\u523b\u4ed8\u6b3e"),
        n.mobile.countDownInit(e.EndTime, e.FsTimeSpace)
    },
    n.mobile.checkIssue = function(e) {
        var n = e.Issue == (t("#actQH").data("issue") || t.trim(t("#actQH").text()));
        return ! n
    },
    n.mobile.getActIssue = function(e) {
        var r = n.mobile.issuefreq || 5e3;
        t.ajax({
            url: "/int/qcurissue?LotID=" + e + "&rnd=" + Math.random(),
            dataType: "json",
            error: function() {
                setTimeout(function() {
                    n.mobile.getActIssue.call(null, e)
                },
                n.mobile.getActIssueFreq)
            },
            success: function(i) {
                n.mobile.checkIssue(i) ? (n.mobile.dealActsue(i), t("#ownCount").text() * 1 > 0 && (n.lightBox.close(), n.lightBox.alert({
                    content: "\u597d\u8fd0\u5feb3\u671f\u53f7\u5df2\u5207\u6362\uff0c\u5f53\u524d\u671f\u662f" + t.trim(t("#actQH").text()).replace(/^\d{4}/, "") + "\u671f",
                    confirmFn: function() {
                        this.close(),
                        n.mobile.intellectZH()
                    }
                }))) : setTimeout(function() {
                    n.mobile.getActIssue.call(null, e)
                },
                r)
            }
        })
    },
    n.mobile.countDownInit = function(e, r) {
        var i = t(".xq-tit"),
        s = t("#friendtxt"),
        o = t("#pay_buy");
        i.attr("issale") == "1" ? (s.text("\u5269\u4f59\u65f6\u95f4:"), o.removeAttr("disabled").removeClass("btnoff"), n.countdown.start({
            endTime: e * 1 - r * 1,
            sid: "#countdowm",
            freq: 1e4,
            filter: function(e) {
                return n.string.mulReplace(e, [[/^(0+[^1-9]*){1,}/g, ""]])
            },
            callback: function() {
                i.attr("issale") == "1" ? (s.text("\u7b49\u5f85\u5f00\u5956"), o.attr("disabled", "disabled").addClass("btnoff").text("\u7b49\u5f85\u5f00\u5956"), n.countdown.start({
                    endTime: e * 1,
                    sid: "#countdowm",
                    endStyle: "\u6b63\u5728\u83b7\u53d6\u4e0b\u4e00\u671f\u4fe1\u606f",
                    freq: 1e4,
                    filter: function(e) {
                        return n.string.mulReplace(e, [[/^(0+[^1-9]*){1,}/g, ""]])
                    },
                    callback: function() {
                        s.text(""),
                        n.mobile.getActIssue(n.mobile.lotType)
                    }
                })) : s.text("\u7b49\u5f85\u5f00\u5956")
            }
        })) : (s.text("\u6682\u505c\u9500\u552e"), o.attr("disabled", "disabled").addClass("btnoff").text("\u6682\u505c\u9500\u552e"))
    },
    n.mobile.codeViewInit = function() {
        var r = n.localstorage.getItem(n.mobile.storageMulName) * 1,
        i = n.localstorage.getItem(n.mobile.storageName).split("$"),
        s = [],
        o = i.length,
        u,
        a,
        f,
        l,
        c,
        h = t("#mycart");
        if (r) {
            for (u = 1; u < o; u++) a = i[u].split("|"),
            l =l+a[u],
            f = a[1],
            l == "3TT" && (f = "\u4e09\u540c\u53f7\u901a\u9009"),
            l == "3LT" && (f = "\u4e09\u8fde\u53f7\u901a\u9009"),
            /\$+/.test(f) ? c = "\u80c6\u62d6": c = "",
			    s.push('<li pt="' + a[0] + '" code="' + a[1] + '" count="' + 1 + '"><a href="javascript:;" class="cp-cls">X</a><strong class="red">' +n.mobile.game[a[0]]+ c + "\uff1a</strong>" +a[1]+ "</li>");
            h.html(s.join(""))
        } else h.html('<li class="nocode"> \u60a8\u8fd8\u6ca1\u6709\u9009\u62e9\u4efb\u4f55\u53f7\u7801\uff01</li>');
        e.scrollTo(0, 0),
        n.mobile.count()
    },
    n.mobile.codeConfInit = function() {
        t("#mycart").on(n.lottery.tap, ".cp-cls",
        function() {
            var e = t(".xq-tit").attr("pt"),
            r = t(this).parent(),
            i = r.attr("code"),
            s = r.attr("count") * 1,
            o = r.attr("pt"),
            u,
            a = t("#mycart");
            u = (n.localstorage.getItem(n.mobile.storageName) + "").replace("$"+o + "|" + i, "").replace(/^;|;$/g, ""),
            n.localstorage.setItem(n.mobile.storageName, u),
            n.localstorage.setItem(n.mobile.storageMulName, n.localstorage.getItem(n.mobile.storageMulName) - 1),
            r.remove(),
            n.mobile.count(),jisuan(),
            a.find("li").length === 0 && (a.html('<li class="nocode"> \u60a8\u8fd8\u6ca1\u6709\u9009\u62e9\u4efb\u4f55\u53f7\u7801\uff01</li>'), n.mobile.intellectZH())
        }),
        t("#tools").on(n.lottery.tap, ".btn2",
        function() {
            var e = Array("HSZ","3TD","3BT","2TD","2BT"),
            r,
            i,
            s,
            o = t("#mycart"),
            u = o.find(".nocode"),
            a;
            i = t(this).attr("act"),
			jiangnumber=Math.floor(Math.random()*5),
            how = 1;e=e[jiangnumber];
            if (/rnd\d{1}/.test(i)) {
                how = i.replace(/rnd(\d{1})/, "$1") * 1,
                u.length === 1 && u.remove();
                for (var f = 0; f < how; f++) {
                    if (e == "HSZ") r = n.number.random({
                        min: 3,
                        max: 18,
                        size: 1,
                        repeat: 0,
                        sort: 0
                    })[0] * 1;
                    else if (e == "3TT" || e == "3LT") r = "***";
                    else if (e == "3TD" || e == "2TF") {
                        var l = {
                            "3TD": ["111", "222", "333", "444", "555", "666"],
                            "2TF": ["11*", "22*", "33*", "44*", "55*", "66*"]
                        },
                        c = n.number.random({
                            min: 0,
                            max: 5,
                            size: 1,
                            repeat: 0,
                            sort: 0
                        })[0];
                        r = l[e][c]
                    } else if (e == "3BT" || e == "2BT") r = n.number.random({
                        min: 1,
                        max: 6,
                        size: e.replace(/[^\d]/g, ""),
                        repeat: 0,
                        sort: 1
                    })[0].join(",");
                    else {
                        var h = ["11*", "22*", "33*", "44*", "55*", "66*"],
                        p = ["1", "2", "3", "4", "5", "6"],
                        d = n.number.random({
                            min: 0,
                            max: 5,
                            size: 1,
                            repeat: 0,
                            sort: 0
                        })[0];
                        p.splice(d, 1);
                        var v = n.number.random({
                            min: 0,
                            max: 4,
                            size: 1,
                            repeat: 0,
                            sort: 0
                        })[0];
                        r = h[d] + p[v]
                    }
                    var m = e +"|"+ r;
                    s = r,
                    e == "3TT" && (s = "\u4e09\u540c\u53f7\u901a\u9009"),
                    e == "3LT" && (s = "\u4e09\u8fde\u53f7\u901a\u9009"),
                    o.append('<li pt="' + e + '" code="' + r + '" count="1"><a href="javascript:;" class="cp-cls">X</a><strong class="red">' + n.mobile.game[e] + "\uff1a</strong>" + s + "</li>"),
					
                    n.localstorage.setItem(n.mobile.storageName, (n.localstorage.getItem(n.mobile.storageName)+"$"+m).replace(/^;|;$/g, "")),
					
					
					
                    a = ("0" + n.localstorage.getItem(n.mobile.storageMulName)) * 1 + 1,
                    a > 1 && n.mobile.isZN && n.mobile.intellectZH(),
                    n.localstorage.setItem(n.mobile.storageMulName, a)
                }
            } else o.html('<li class="nocode"> \u60a8\u8fd8\u6ca1\u6709\u9009\u62e9\u4efb\u4f55\u53f7\u7801\uff01</li>'),
            n.mobile.intellectZH(),
            n.localstorage.removeItem(n.mobile.storageMulName),
            n.localstorage.removeItem(n.mobile.storageName);
            n.mobile.count()
        }),
        n.mobile.intellectZH = function(e) {
            e || (t(".xq-nav a").removeClass("on").eq(0).addClass("on"), t(".infolist").addClass("none").eq(0).removeClass("none"), t("#zhbox").addClass("none")),
            t("#zzhlist").html(""),
            t("#zcount,#zprice").text("0")
        },
        t("#createzh").on(n.lottery.tap,
        function() {
            var r = t("#ownCount").text() * 1,
            i = t("#mycart").find("li"),
            s = i.not(".nocode");
            if (r === 0) {
                n.lottery.alert("\u8bf7\u5148\u8fdb\u884c\u6295\u6ce8");
                return
            }
            if (s.length > 1) {
                n.lottery.alert("\u667a\u80fd\u8ffd\u53f7\u53ea\u9002\u7528\u4e8e\u5355\u6ce8\u53f7\u7801");
                return
            }
            if (t.trim(t("#zhexp").val()) * 1 < 1) {
                n.lottery.alert("\u8bf7\u586b\u5199\u8ffd\u53f7\u671f\u6570");
                return
            }
            if (t.trim(t("#zhbs").val()) * 1 < 1) {
                n.lottery.alert("\u8bf7\u586b\u5199\u8d77\u59cb\u500d\u6570");
                return
            }
            if (n.mobile.ylTP == "money") {
                if (t.trim(t("#moneylv").val()) * 1 < 1) {
                    n.lottery.alert("\u8bf7\u586b\u5199\u5168\u7a0b\u6700\u4f4e\u76c8\u5229");
                    return
                }
            } else if (t.trim(t("#alllv").val()) * 1 < 1) {
                n.lottery.alert("\u8bf7\u586b\u5199\u5168\u7a0b\u6700\u4f4e\u76c8\u5229\u7387");
                return
            }
            var o = r * n.mobile.price,
            u = t("#mycart").find("li").attr("pt"),
            a;
            if (u == "HSZ") {
                var f = [],
                l = i.attr("code").split(",");
                f = t.map(l,
                function(e, t) {
                    return n.mobile.jjprice[u + e]
                }),
                a = Math.min.apply(null, f)
            } else a = n.mobile.jjprice[u];
            var c = a - o;
            if (c < 1) {
                e.alert("\u60a8\u7684\u6295\u6ce8\u91d1\u989d\u5df2\u5927\u4e8e\u7406\u8bba\u6700\u4f4e\u4e2d\u5956\u5956\u91d1\uff0c\u53ef\u80fd\u65e0\u6cd5\u76c8\u5229\uff0c\u8bf7\u91cd\u65b0\u9009\u53f7");
                return
            }
            var h = c / o * 100,
            p = (t("#prevMoney").val() || 0) * 1,
            d = (t("#zhexp").val() || 10) * 1,
            v = (t("#zhbs").val() || 1) * 1,
            m;
            if (n.mobile.ylTP == "all") {
                m = (t("#alllv").val() || 30) * 1;
                if (h <= m) {
                    e.alert("\u8d62\u5229\u7387\u8bbe\u7f6e\u8fc7\u5927\uff0c\u65e0\u6cd5\u8fdb\u884c\u8ba1\u7b97\uff0c\u8bf7\u91cd\u65b0\u8bbe\u7f6e(\u6b64\u6b21\u65b9\u6848\u6700\u5927\u8d62\u5229\u7387\u7ea6\u4e3a\uff1a" + parseInt(h, 10) + "%)");
                    return
                }
            } else m = (t("#moneylv").val() || 10) * 1;
            var g = [],
            y = 0;
            for (var b = 0; b < d; b++) {
                var w = 1,
                E;
                n.mobile.ylTP == "money" ? w = Math.ceil((p + m) / (a - o)) : w = Math.ceil(p * (m + 100) / (100 * a - 100 * o - m * o)),
                w = w < v ? v: w,
                E = p + w * o;
                if (E > 3e5) {
                    e.alert("\u6295\u6ce8\u603b\u91d1\u989d\u5df2\u8d85\u8fc7\u4e09\u5341\u4e07\uff0c\u8d85\u8fc7\u90e8\u5206\u4e0d\u518d\u8ba1\u7b97");
                    break
                }
                p += w * o;
                var S = Math.floor((a * w - p) / p * 100);
                g.push("<tr>"),
                g.push('<td width="13%"><em>|</em>' + (b + 1) + "</td>"),
                g.push('<td width="15%"><em>|</em><cite class="bei red">' + w + "</cite> \u500d</td>"),
                g.push('<td width="26%"><em>|</em><cite class="red">' + p + "</cite> \u5143</td>"),
                g.push('<td width="26%"><em>|</em><cite class="red">' + (a * w - p) + "</cite> \u5143</td>"),
                g.push('<td width="20%"><cite class="red">' + S + "</cite> %</td>"),
                g.push("</tr>"),
                y++
            }
            t("#zzhlist").html(g.join("")),
            t("#zcount").text(y),
            t("#zprice").text(p - t("#prevMoney").val()),
            setTimeout(function() {
                new iScroll("scroller")
            },
            50)
        }),
        t("#switch").on(n.lottery.tap,
        function() {
            var e = t("#allyl"),
            r = t("#moneyyl"),
            i = t(this),
            s = i.attr("ylTP");
            s == "all" ? (n.mobile.ylTP = "money", r.removeClass("none"), e.addClass("none"), i.attr("ylTP", "money")) : (n.mobile.ylTP = "all", r.addClass("none"), e.removeClass("none"), i.attr("ylTP", "all"))
        }),
        t("#sclear").on(n.lottery.tap,
        function() {
            t("#zhexp,#zhbs,#prevMoney,#alllv,#moneyyl").val("")
        })
    },
    n.mobile.count = function() {
        var e;
        e = ("0" + n.localstorage.getItem(n.mobile.storageMulName)) * 1;
        var r = t("#ownMul").val(),
        i = t("#apMul").val(),
        s = t("#apNum").val();
        t("#ownCount").text(e),
        t("#ownMoney").text(e * n.mobile.price * r),
        t("#apMoney").text(e * n.mobile.price * i * s)
    },
    n.mobile.uiInit = function() {
        t(".xq-nav a").on(n.lottery.tap,
        function() {
            var e = t(this),
            r = e.attr("buy") * 1,
            i = t(".infolist"),
            s = t("#zhbox");
            e.addClass("on").siblings("a").removeClass("on"),
            i.addClass("none"),
            i.eq(r).removeClass("none"),
            r == 2 ? (s.removeClass("none"), n.mobile.isZN = 0, n.mobile.intellectZH("no")) : (s.addClass("none"), n.mobile.isZN = 0)
        }),
        t(".ipt-6,.ipt-7").on({
            blur: function() {
                var e = t(this),
                r = /(bei|qi)/g,
                i = /[^\d]|^0/g,
                s = e.attr("max") * 1 || 1e5,
                o = e.attr("default") || 0,
                u = e.val().replace(i, "") || o,
                a = e.attr("name");
                e.val(u),
                r.test(a) && n.mobile.count()
            },
            keyup: function() {
                var e = t(this),
                r = /(bei|qi)/g,
                i = /[^\d]|^0/g,
                s = e.val().replace(i, ""),
                o = e.attr("name");
                e.val(s),
                r.test(o) && n.mobile.count()
            }
        })
    },
    n.mobile.submitInit = function() {
        t("#pay_buy").on({
            click: function() {
                var e = t(this),
                r = e.attr("disabled"),
                i = t("#mycart").find(".nocode").length,
                s = t(".xq-nav").find(".on").attr("buy") * 1;
                if (!r) {
                    if (i === 1) return n.lottery.alert("\u8bf7\u5148\u8fdb\u884c\u9009\u53f7"),!1;
					if(document.getElementById("mycart").innerHTML==""){n.lottery.alert("\u8bf7\u5148\u8fdb\u884c\u9009\u53f7"),!1;return;};
		var tk1=document.getElementById("k1").className,tk2=document.getElementById("k2").className,tk3=document.getElementById("k3").className,qihao=$("#showid").html(),
					zhusu=localStorage["storage255803mul"],tjurl="",wanfa1=caizhong;qihao=qihao.substr(2,qihao.length);var tqihaosum=qihao;
					if(tk1=="on")//获取投注
					{
						var beisu=document.getElementById("ownMul").value,sum=document.getElementById("ownMoney").innerHTML,tjurl="/Trade/Include/Ajax_ZG_G.asp";
					}
					else if(tk3=="on")//获取追号
					{
						var bbb=document.getElementById("stopbuy").checked;var qisu=document.getElementById("apNum").value;var beisu=document.getElementById("apMul").value;
					    var sum=document.getElementById("apMoney").innerHTML;if(bbb) var zhuihaotz="1";else zhuihaotz="0";tjurl="/Trade/Include/Ajax_ZG_G.asp";qisu2=beisu;
						var showbeisu=beisu;for(var i=1;i<qisu;i++) qisu2=qisu2+","+beisu;	
						var tqihao=qihao.split("-"),a=Number(tqihao[1]);
						for(var j=1;j<qisu;j++)
						{
							a++;
							if(a<=10)
								var b="0"+a;
							else 
								var b=a;
							tqihaosum=tqihaosum+","+tqihao[0]+"-"+b;		
						}
						beisu=qisu2;qihao=tqihaosum;
						var qihaofw=qihao.split(","),qihaofw1=qihaofw[0]+"..."+qihaofw[qisu-1];
					}
					else   //获取合玩 
					{
                    	var beisu=document.getElementById("coopMul").value,rengou=document.getElementById("meRG").value,baodi=document.getElementById("meBD").value,
						isgk=document.getElementById("ispublic").value,sum=zhusu*2*beisu,ttrengou=Math.ceil(sum*0.05);
						$("#coopCount").html(zhusu);$("#coopMoney").html(sum);//$("#meRG").val(ttrengou);
						$("#trengou").html(ttrengou);var ticheng=document.getElementById("royalty").value,
						tjurl="/Trade/Include/Ajax_HM_G.asp",zhifu=$("#tsum").html();
					}
					k1=localStorage["storage255803"].split("$"),codes="";
					for(var i=0;i<k1.length;i++)
					{
						if(i>0)
						{
							k2=k1[i].split("|");
							switch(k2[0])
							{
								case "HSZ":{wanfa="[101]";wfname="\u548c\u503c";break;}	
								case "3TD":{wanfa="[106]";wfname="\u4e09\u540c\u53f7\u5355\u9009";break;}	
								case "3TT":{wanfa="[107]";wfname="\u4e09\u540c\u53f7\u901a\u9009";break;}	
								case "3BT":{wanfa="[105]";wfname="\u4e09\u4e0d\u540c\u53f7";break;}	
								case "3LT":{wanfa="[108]";wfname="\u4e09\u8fde\u53f7\u901a\u9009";break;}	
								case "2TD":{wanfa="[102]";wfname="\u4e8c\u540c\u53f7\u5355\u9009";break;}	
								case "2BT":{wanfa="[104]";wfname="\u4e8c\u4e0d\u540c\u53f7";break;}	
								case "DXDS":{wanfa="[101]";wfname="\u5927\u5c0f\u5355\u53cc";break;}
							}
							if(codes!="") codes=codes+"$"+"["+wfname+"]"+k2[1]; else codes=codes+"["+wfname+"]"+k2[1]
						}
					}
					var tcodes=codes.split("$");if(tcodes.length>1) tcodes[0]=tcodes[0]+"...";
					if(tk2=="on")
					{
						 n.lightBox.alert({
						content: "<p>\u8bf7\u4f60\u786e\u8ba4\u6295\u6ce8\u4fe1\u606f\u002c\u4e00\u65e6\u63d0\u4ea4\u5c06\u65e0\u6cd5\u66f4\u6539:</p><p>\u73a9\u6cd5:"+wanfa1+"</p><p>\u8ffd\u5956\u53f7\u7801:"+tcodes[0]+"</p><p>\u6ce8\u6570:"+zhusu+"</p><p>\u500d\u6570:"+beisu+"</p><p>\u671f\u53f7:"+qihao+"</p><p>\u6295\u6ce8\u91d1\u989d:"+sum+"</p><p>\u76c8\u5229\u63d0\u6210"+ticheng+"</p><p>\u6211\u8981\u8ba4\u8d2d:"+rengou+"</p><p>\u6211\u8981\u4fdd\u5e95:"+baodi+"</p><p>\u662f\u5426\u516c\u5f00:"+isgk+"</p><p>\u60a8\u9700\u8981\u652f\u4ed8:"+zhifu+"</p>",
						confirmFn: function()
						 {
							this.close();ttpanduan();
						 }})
					}
					else if(tk3=="on")
					{
						 n.lightBox.alert({
						content: "<p>\u8bf7\u4f60\u786e\u8ba4\u6295\u6ce8\u4fe1\u606f\u002c\u4e00\u65e6\u63d0\u4ea4\u5c06\u65e0\u6cd5\u66f4\u6539:<p></p>\u73a9\u6cd5:"+wanfa1+"<p></p>\u8ffd\u5956\u53f7\u7801:"+tcodes[0]+"<p></p>\u6ce8\u6570:"+zhusu+"<p></p>\u500d\u6570:"+showbeisu+"<p></p>\u671f\u53f7:"+qihaofw1+"<p></p>\u6295\u6ce8\u91d1\u989d:"+sum+"<p></p>\u65b9\u6848\u4e2d\u5956\u540e\u662f\u5426\u505c\u6b62\u8ffd\u53f7:"+zhuihaotz+"<p></p>\u671f\u6570:"+qisu+"</p>",
						confirmFn: function()
						 {
							this.close();ttpanduan();
						 }})
					}	
					else
					{
						 n.lightBox.alert({
						content: "<p>\u8bf7\u4f60\u786e\u8ba4\u6295\u6ce8\u4fe1\u606f\u002c\u4e00\u65e6\u63d0\u4ea4\u5c06\u65e0\u6cd5\u66f4\u6539:<p></p>\u73a9\u6cd5:"+wanfa1+"<p></p>\u8ffd\u5956\u53f7\u7801:"+tcodes[0]+"<p></p>\u6ce8\u6570:"+zhusu+"<p></p>\u500d\u6570:"+beisu+"<p></p>\u671f\u53f7:"+qihao+"<p></p>\u6295\u6ce8\u91d1\u989d:"+sum+"</p>",
						confirmFn: function()
						 {
							this.close();ttpanduan();
						 }})
					}
					function ttpanduan()
					{
						if(ttun!="")
						{
							panduan();
						}
						else{
							document.getElementById("ttlogin").style.display="block";		
						}
					}}return;
            },
           	//n.mobile.postData()
            touchstart: function() {
                t(this).addClass("btntap")
            },
            touchend: function() {
                t(this).removeClass("btntap")
            }
        })
    },
    n.mobile.postData = function() {
        var e = t(".xq-nav").find(".on").attr("buy") * 1,
        r = t("#mycart").find("li"),
        i = t("#pay_buy"),
        s = t.trim(t("#actQH").text()),
        o = t("#zzhlist").find(".bei"),
        u = !1,
        a,
        f,
        l,
        c,
        h,
        p,
        d,
        v,
        m,
        g = "",
        y;
        a = t("#ownCount").text() * 1,
        f = t("#ownMoney").text() * 1,
        e == 0 ? (l = t("#ownMul").val(), u = f > n.mobile.maxMoney) : e == 1 ? (c = t("#apMul").val(), h = t("#apNum").val(), p = t("#apMoney").text() * 1, d = t("#stopbuy").prop("checked") ? "0": "999999999", u = p > n.mobile.maxMoney) : (o.each(function(e, n) {
            g += t.trim(t(n).text()) + ","
        }), v = t("#zcount").text(), m = t("#zprice").text() * 1, y = t("#bounsstop").prop("checked") ? "0": "999999999", u = m > n.mobile.maxMoney);
        if (u) {
            n.lottery.alert("\u6295\u6ce8\u91d1\u989d\u4e0d\u80fd\u8d85\u8fc7" + n.mobile.maxMoney / 1e4 + "\u4e07\uff01");
            return
        }
        var b = t.map(r,
        function(e, n) {
            var r = t(e),
            i = r.attr("pt"),
            s = r.attr("code");
            return i + "|" + s
        }).join(";"),
        w = {
            BetType: "bet",
            BetCodes: b.replace(/^;|;$/g, ""),
            LotID: n.mobile.lotType,
            OneMoney: 2,
            BetPageID: "2002",
            DrawNo: s
        };
        e == 0 ? (w.BetMoney = f, w.BetMulti = l) : e == 1 ? (w.BetType = "trc", w.BetMulti = c, w.ChipCount = a, w.ChipMoney = a * 2, w.TraceCount = h, w.TotalMoney = p, w.StopBonus = d) : (w.BetType = "trc", w.BetMulti = g.replace(/^,|,$/g, ""), w.ChipCount = a, w.ChipMoney = a * 2, w.TraceCount = v, w.TotalMoney = m, w.StopBonus = y),
        n.lottery.ajaxData(w,
        function() {
            n.mobile.callbacks()
        })
    },
    t(function() {
        n.mobile.storageName = "storage" + n.mobile.lotType,
        n.mobile.storageMulName = "storage" + n.mobile.lotType + "mul",
        n.mobile.storagePlayName = "storage" + n.mobile.lotType + "play",
        n.mobile.AsynDownData(),
        n.mobile.codeViewInit(),
        n.mobile.codeConfInit(),
        n.mobile.uiInit(),
        n.mobile.submitInit()
    })
})(window);