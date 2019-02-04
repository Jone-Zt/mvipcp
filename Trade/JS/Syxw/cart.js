function cansu(name){
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
var czname=cansu("type"),caizhong="",gp=1;
if(czname=="Syxw") caizhong="\u6c5f\u897f\u0031\u0031\u9009\u0035";
else if(czname=="GdSyxw") caizhong="\u5e7f\u4e1c\u0031\u0031\u9009\u0035";
else if(czname=="JsSyxw") caizhong="\u6c5f\u82cf\u0031\u0031\u9009\u0035";
else if(czname=="ShSyxw") caizhong="\u4e0a\u6d77\u0031\u0031\u9009\u0035";
else if(czname=="LlSyxw") caizhong="\u8fbd\u5b81\u0031\u0031\u9009\u0035";
else if(czname=="XjSyxw") caizhong="\u65b0\u7586\u0031\u0031\u9009\u0035";
else if(czname=="Syydj") caizhong="\u0031\u0031\u8fd0\u593a\u91d1";
else if(czname=="FjSyxw") caizhong="\u798f\u5efa\u0031\u0031\u9009\u0035";
else if(czname=="AhSyxw") caizhong="\u5b89\u5fbd\u0031\u0031\u9009\u0035";
else if(czname=="ZjSyxw") caizhong="\u6d59\u6c5f\u0031\u0031\u9009\u0035";
else if(czname=="HljSyxw") caizhong="\u9ed1\u9f99\u6c5f\u0031\u0031\u9009\u0035";
else if(czname=="Hebyxw") caizhong="\u6cb3\u5317\u0031\u0031\u9009\u0035";
else if(czname=="JlSyxw") caizhong="\u5409\u6797\u0031\u0031\u9009\u0035";
else if(czname=="TjSyxw") caizhong="\u5929\u6d25\u0031\u0031\u9009\u0035";
function meFWabcd(){
	$("#meRG").val(1);tjisuan();
	/*if($("#meRG").val() == "" || Number($("#meRG").val()) <1){
		$("#meRG").val(1);jisuan()
	}*/
}
function jisuan()
{
	$("#jiangc").html(caizhong);	
	if( $("#meRG").val()!=""){
	if($("#coopMul").val()>500) $("#coopMul").val(500)
	if(localStorage["storage167607mul"]) var a=localStorage["storage167607mul"];else var a=0;
	$("#coopCount").html(a);
	var b=document.getElementById("coopMul").value;
	var sum=a*2*b;
	document.getElementById("meFW").value=sum;
	document.getElementById("coopMoney").innerHTML=sum;
	var zsrengou=sum*0.05,zsrengou1=Math.ceil(zsrengou);$("#meRG").val(zsrengou1);$("#meBD").val(sum-zsrengou1);	
	var maxbaodi=sum-zsrengou1;$("#maxBD").html(maxbaodi);var rg=$("#meRG").val(),bd=$("#meBD").val();$("#trengou").html(rg);$("#tbaodi").html($("#meBD").val());
	if(bd=="") bd=0;if(rg=="") rg=0;
	$("#tsum").html(parseInt(bd)+parseInt(rg));
	if(rg<zsrengou1){ $("#meRG").val(zsrengou1);jisuan();}
	if(bd>maxbaodi){ $("#meBD").val(maxbaodi);jisuan();}}
}
function tjisuan()
{
	var oneMoney = (Number($("#coopMoney").html())/Number($("#meFW").val())).toFixed(2)
	$("#meFWab").html(oneMoney);
	
	if( $("#meRG").val()!=""){
	var a=parseInt($("#meFW").val()),zsrengou=Math.ceil(a*0.05);
	//$("#meRG").val(zsrengou)
	
	if($("#meRG").val()<zsrengou) $("#meRG").val(zsrengou)
	if($("#meRG").val()>a){$("#meRG").val(a);$("#meBD").val(0);}
	
	$("#meBD").val(parseInt(a)-parseInt($("#meRG").val()));
	$("#trengou").html($("#meRG").val());$("#tbaodi").html($("#meBD").val());
	$("#tsum").html((parseInt($("#trengou").html())+parseInt($("#tbaodi").html()))*oneMoney);
	$("#maxBD").html(a-Math.ceil($("#meRG").val()))}
}
function tjisuanbak()
{
	
	var oneMoney = (Number($("#coopMoney").html())/Number($("#meFW").val())).toFixed(2)
	$("#meFWab").html(oneMoney);
	
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
	var a=parseInt($("#meFW").val()),zsrengou=Math.ceil(a*0.05);
	if(parseInt($("#meBD").val())>parseInt($("#maxBD").html())) $("#meBD").val($("#maxBD").html());
	$("#trengou").html($("#meRG").val());$("#tbaodi").html($("#meBD").val());if($("#meBD").val()==""){ $("#tbaodi").html(0);$("#meBD").val(000000)}
	$("#tsum").html((parseInt($("#trengou").html())+parseInt($("#tbaodi").html()))*$("#meFWab").html());
	$("#maxBD").html(a-Math.ceil($("#meRG").val()));}
}
function panduan()
{
	var tk1=document.getElementById("k1").className,tk2=document.getElementById("k2").className,tk3=document.getElementById("k3").className,qihao=$("#showid").html(),
	zhusu=localStorage["storage167607mul"],wanfa1=caizhong,qihao3=qihao,tqihaosum=qihao,wfname="",wfname1="";
	if(tk1=="infolist")//获取投注
	{
		
			var beisu=document.getElementById("ownMul").value,sum=document.getElementById("ownMoney").innerHTML,tjurl="../Include/Ajax_ZG_G.asp";
	}
	else if(tk2=="infolist")//获取追号
	{
			var beisu=document.getElementById("apMul").value,sum=document.getElementById("apMoney").innerHTML,qisu=$("#apNum").val(),showbeisu=beisu,
			tzzhongjiang=document.getElementById("stopbuy").checked;if(tzzhongjiang) var tzzhongjiang1=1;else var tzzhongjiang1=0;
			var tjurl="../Include/Ajax_ZG_G.asp",qisu2=beisu;for(var i=1;i<qisu;i++) qisu2=qisu2+","+beisu;
			var tqihao=qihao.split("-"),b=Number(tqihao[1]);
			for(var i=1;i<qisu;i++)
			{
				b++;
				if(b<10) 
					var c="0"+b;
				else 
					var c=b;
				tqihaosum=tqihaosum+","+tqihao[0]+"-"+c;
			}
			qihao=tqihaosum;beisu=qisu2;
			var qihaofw=qihao.split(","),qihaofw1=qihaofw[0]+"..."+qihaofw[qisu-1]		
	}
	else   //获取合玩
	{
		 var beisu=document.getElementById("coopMul").value,rengou=document.getElementById("meRG").value,baodi=document.getElementById("meBD").value,
		isgk=document.getElementById("ispublic").value,sum=zhusu*2*beisu,ttrengou=Math.ceil(sum*0.05);
		$("#coopCount").html(zhusu);$("#coopMoney").html(sum);$("#meRG").val(ttrengou);
		$("#trengou").html(ttrengou);var ticheng=document.getElementById("royalty").value,
		tjurl="/Trade/Include/Ajax_HM_G.asp",zhifu=$("#tsum").html();
	}
	if(localStorage["storage167607"]&&localStorage["storage167607mul"])
	{
		var k1=localStorage["storage167607"].split(";"),codes="";
		for(var i=0;i<k1.length;i++)
		{
			var k2=k1[i].split("|");
			for(var j=0;j<k2.length;j++)
			{	
				
				if(j==0)
				{
					var k3=k2[2].split(" "),code="";
					switch(k2[j])
					{
						case "r3dt":{ var wanfa="[303]";wfname="\u4efb\u4e09\u80c6\u62d6";break;}
						case "r1":{if(k3.length>1){ var wanfa="[101]";wfname="\u524d\u4e00\u590d\u5f0f";}else{ var wanfa="[201]";wfname="\u524d\u4e00\u5355\u5f0f";}break;}
						case "r2":{if(k3.length>2){ var wanfa="[102]";wfname="\u9009\u4e8c\u590d\u5f0f";}else{ var wanfa="[202]";wfname="\u9009\u4e8c\u5355\u5f0f";}break;}
						case "r3":{if(k3.length>3){ var wanfa="[103]";wfname="\u9009\u4e09\u590d\u5f0f";}else{ var wanfa="[203]";wfname="\u9009\u4e09\u5355\u5f0f";}break;}
						case "r4":{if(k3.length>4){ var wanfa="[104]";wfname="\u9009\u56db\u590d\u5f0f";}else{ var wanfa="[204]";wfname="\u9009\u56db\u5355\u5f0f";}break;}
						case "r5":{if(k3.length>5){ var wanfa="[105]";wfname="\u9009\u4e94\u590d\u5f0f";}else{ var wanfa="[205]";wfname="\u9009\u4e94\u5355\u5f0f";}break;}
						case "r6":{if(k3.length>6){ var wanfa="[106]";wfname="\u9009\u516d\u590d\u5f0f";}else{ var wanfa="[206]";wfname="\u9009\u516d\u5355\u5f0f";}break;}
						case "r7":{if(k3.length>7){ var wanfa="[107]";wfname="\u9009\u4e03\u590d\u5f0f";}else{ var wanfa="[207]";wfname="\u9009\u4e03\u5355\u5f0f";}break;}
						case "r8":{if(k3.length>8){ var wanfa="[108]";wfname="\u9009\u516b\u590d\u5f0f";}else{ var wanfa="[208]";wfname="\u9009\u516b\u5355\u5f0f";}break;}
	case "zhi2":{if(k3.length>2){ var wanfa="[501]";wfname="\u524d\u4e8c\u76f4\u9009\u590d\u5f0f";}else{ var wanfa="[502]";wfname="\u524d\u4e8c\u76f4\u9009\u5355\u5f0f";}break;}
					}
				}
				if(j==1){
				for(var d=0;d<k3.length;d++)
				{
					if(code!="") code=code+","+k3[d];else code=code+k3[d];	
				}}
			}
			if(wfname!=""&&wfname!=wfname1&&wfname1!="") wfname="\u6df7\u6295";
				wfname1=wfname;
			 if(codes=="") codes=codes+wanfa+code; else codes=codes+"$"+wanfa+code; 
		}
		if(baodi<1&&baodi=="")
			var isbaodi=0; else var isbaodi=1;
		codes = codes.replace(/\u62d6/g,";")	
		$.ajax({
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
					isbaodi:isbaodi,                             
					codes:codes,                                       
					ZjCut:tzzhongjiang1,                                   
					beishulistsuc:beisu,                             
					expectlistsuc:qihao,                                    
					single_zs:zhusu, 
					BuyJF:"0",                
					single_m:"",                
					escstr:"",
					buyCount:rengou,
					baodiCount:baodi,
					tc_money:ticheng,
					escstr:localStorage["storage167607"],
                    anumber:$("#meFW").val(),
                    onemoney:$("#meFWab").html(),
					isopen:$("#ispublic").find("option:selected").val()
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
				if(localStorage["storage167607"]&&localStorage["storage167607mul"]){localStorage.removeItem("storage167607");localStorage.removeItem("storage167607mul");}
		document.getElementById("mycart").innerHTML="<li class='nocode'> \u60a8\u8fd8\u6ca1\u6709\u9009\u62e9\u4efb\u4f55\u53f7\u7801\uff01</li>";
		$("#ownMul").val("1");$("#ownCount").html("0");$("#ownMoney").html("0");$("#coopMul").val("1");$("#coopCount").html("0");$("#coopMoney").html("0");
					$("#meRG").val("0");$("#meBD").val("0");$("#tsum").html("0");$("#trengou").html("0");$("#tbaodi").html("0");$("#apMul").val("1");$("#apNum").val("10");
					$("#apMoney").html("0");$("#maxBD").html("0");$("#royalty").val(0);$("#ispublic").val(0);
			}
		}});
	}
}
(function(e) {
    var t = e.$,
    n = e.kureicp;
    n.mobile.lotType = n.lottery.lotType.xj11,
    n.mobile.price = n.lottery.price,
    n.mobile.maxMoney = n.lottery.maxMoney,
    n.mobile.issuefreq = 2e3,
    n.mobile.getActIssueFreq = 6e4,
    n.mobile.clearCacheAPI = "#",//"/int/xj11cart/",
    n.mobile.gname = {
        r1: "\u524d\u4e00",
        r2: "\u4efb\u4e8c",
        r3: "\u4efb\u4e09",
        r4: "\u4efb\u56db",
        r5: "\u4efb\u4e94",
        r6: "\u4efb\u516d",
        r7: "\u4efb\u4e03",
        r8: "\u4efb\u516b",
        zhu2: "\u524d\u4e8c\u7ec4\u9009",
        zhu3: "\u524d\u4e09\u7ec4\u9009",
        zhi2: "\u524d\u4e8c\u76f4\u9009",
        zhi3: "\u524d\u4e09\u76f4\u9009",
		r3dt: "\u4efb\u4e09\u80c6\u62d6",
    },
    n.mobile.game = {
        r1: "R1",
        r2: "R2",
        r3: "R3",
        r4: "R4",
        r5: "R5",
        r6: "R6",
        r7: "R7",
        r8: "R8",
        zhu2: "Z2",
        zhu3: "Z3",
        zhi2: "Q2",
        zhi3: "Q3"
    },
    n.mobile.ylTP = "all",
    n.mobile.isZN = 0,
    n.mobile.jjprice = {
        r1: 13,
        r2: 6,
        r3: 19,
        r4: 78,
        r5: 540,
        r6: 90,
        r7: 26,
        r8: 9,
        zhu2: 65,
        zhu3: 195,
        zhi2: 130,
        zhi3: 1170
    },
    n.mobile.Callbacks = function() {
        t("#pay_buy").trigger("click")
    },
    n.mobile.AsynDownData = function() {
        var e = t(".xq-tit"),
        r = t("#actQH"),
        i = t("#sourceUrl"),
        s = n.string.getUrlParam("pt") || n.localstorage.getItem(n.mobile.storagePlayName) || "r3";
        i.attr("href", "./index.asp?type="+czname),
        t.getJSON(n.mobile.clearCacheAPI + "?r=" + t.now(),
        function(t) {
            t && (e.attr("endtime", t.EndTime), e.attr("prevtime", t.DsTimeSpace), e.attr("issale", t.IsOpen), e.attr("pt", s), r.text(t.issue), n.mobile.countDownInit(t.EndTime, t.DsTimeSpace), n.string.getUrlParam("dest") && n.mobile.Callbacks())
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
        var r = n.mobile.issuefreq || 5e3,
        i = t("#ownCount").text() * 1;
        t.ajax({
            url: "/int/qcurissue?LotID=" + e + "&r=" + t.now(),
            dataType: "json",
            error: function() {
                setTimeout(function() {
                    n.mobile.getActIssue.call(null, e)
                },
                n.mobile.getActIssueFreq)
            },
            success: function(s) {
                n.mobile.checkIssue(s) ? (n.mobile.dealActsue(s), i && (n.lightBox.close(), n.lightBox.alert({
                    content: "\u5feb\u4e5011\u90095\u671f\u53f7\u5df2\u5207\u6362,\u5f53\u524d\u671f\u662f" + t.trim(t("#actQH").text()).replace(/^\d{4}/, "") + "\u671f",
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
        var r, i;
        r = n.localstorage.getItem(n.mobile.storageMulName) * 1,
        i = n.localstorage.getItem(n.mobile.storageName).split(";");
        var s = [],
        o = i.length,
        u,
        a,
        f,
        l,
        c;
        if (r) {
            for (u = 0; u < o; u++) a = i[u].split("|"),
            l = a[0],
            f = a[2],
            /\$+/.test(f) ? c = "\u80c6\u62d6": c = "",
            s.push('<li pt="' + a[0] + '" code="' + a[2] + '" count="' + a[1] + '"><a href="javascript:;" class="cp-cls">X</a><strong class="red">' + n.mobile.gname[a[0]] + c + "\uff1a</strong>" + f + "</li>");
            t("#mycart").html(s.join(""))
        } else t("#mycart").html('<li class="nocode"> \u60a8\u8fd8\u6ca1\u6709\u9009\u62e9\u4efb\u4f55\u53f7\u7801\uff01</li>');
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
            u = (n.localstorage.getItem(n.mobile.storageName) + ";").replace(o + "|" + s + "|" + i + ";", "").replace(/^;|;$/g, ""),
            n.localstorage.setItem(n.mobile.storageName, u),
            n.localstorage.setItem(n.mobile.storageMulName, n.localstorage.getItem(n.mobile.storageMulName) - s),
            r.remove(),
            n.mobile.count(),jisuan(),
            a.find("li").length === 0 && (a.html('<li class="nocode">\u60a8\u8fd8\u6ca1\u6709\u9009\u62e9\u4efb\u4f55\u53f7\u7801\uff01</li>'), n.mobile.intellectZH())
        }),
        t("#tools").on(n.lottery.tap, ".btn2",
        function() {
            var e = t(".xq-tit").attr("pt"),
            r,
            i = t("#mycart"),
            s = i.find(".nocode"),
            o,
            u = t(this).attr("act"),
            a = 1;
            if (/rnd\d{1}/.test(u)) {
                a = u.replace(/rnd(\d{1})/, "$1") * 1,
                s.length === 1 && s.remove();
                for (var f = 0; f < a; f++) {
                    e == "zhi2" ? r = n.number.random({
                        min: 1,
                        max: 11,
                        size: 2,
                        repeat: 0,
                        sort: 0
                    })[0].join(",") : e == "zhi3" ? r = n.number.random({
                        min: 1,
                        max: 11,
                        size: 3,
                        repeat: 0,
                        sort: 0
                    })[0].join(",") : r = n.number.random({
                        min: 1,
                        max: 11,
                        size: e.replace(/[r|zhu]/gi, ""),
                        repeat: 0,
                        sort: 1
                    })[0].join(" ");jisuan();
                    var l = e + "|1|" + r;
                    i.append('<li pt="' + e + '" code="' + r + '" count="1"><a href="javascript:;" class="cp-cls">X</a><strong class="red">' + n.mobile.gname[e] + "\uff1a</strong>" + r + "</li>"),
                    n.localstorage.setItem(n.mobile.storageName, (n.localstorage.getItem(n.mobile.storageName) + ";" + l).replace(/^;|;$/g, "")),
                    o = ("0" + n.localstorage.getItem(n.mobile.storageMulName)) * 1 + 1,
                    o > 1 && n.mobile.isZN && n.mobile.intellectZH(),
                    n.localstorage.setItem(n.mobile.storageMulName, o)
                }
            } else i.html('<li class="nocode"> \u60a8\u8fd8\u6ca1\u6709\u9009\u62e9\u4efb\u4f55\u53f7\u7801\uff01</li>'),
            n.mobile.intellectZH(),
            n.localstorage.removeItem(n.mobile.storageMulName),
            n.localstorage.removeItem(n.mobile.storageName);
            n.mobile.count()
        }),
        n.mobile.intellectZH = function(e) {jisuan();
            e || (t(".xq-nav a").removeClass("on").eq(0).addClass("on"), t(".infolist").addClass("none").eq(0).removeClass("none"), t("#zhbox").addClass("none")),
            t("#zzhlist").html(""),
            t("#zcount,#zprice").text("0")
        },
        t("#createzh").on(n.lottery.tap,
        function() {
            var r = t("#ownCount").text() * 1,
            i = t("#mycart").find("li").not(".nocode");
            if (r === 0) {
                e.alert("\u8bf7\u5148\u8fdb\u884c\u6295\u6ce8");
                return
            }
            if (i.length > 1) {
                e.alert("\u667a\u80fd\u8ffd\u53f7\u53ea\u9002\u7528\u4e8e\u5355\u6ce8\u53f7\u7801");
                return
            }
            if (t.trim(t("#zhexp").val()) * 1 < 1) {
                e.alert("\u8bf7\u586b\u5199\u8ffd\u53f7\u671f\u6570");
                return
            }
            if (t.trim(t("#zhbs").val()) * 1 < 1) {
                e.alert("\u8bf7\u586b\u5199\u8d77\u59cb\u500d\u6570");
                return
            }
            if (n.mobile.ylTP == "money") {
                if (t.trim(t("#moneylv").val()) * 1 < 1) {
                    e.alert("\u8bf7\u586b\u5199\u5168\u7a0b\u6700\u4f4e\u76c8\u5229");
                    return
                }
            } else if (t.trim(t("#alllv").val()) * 1 < 1) {
                e.alert("\u8bf7\u586b\u5199\u5168\u7a0b\u6700\u4f4e\u76c8\u5229\u7387");
                return
            }
            var s = r * n.mobile.price,
            o = t("#mycart").find("li").attr("pt"),
            u = n.mobile.jjprice[o],
            a = u - s;
            if (a < 1) {
                e.alert("\u60a8\u7684\u6295\u6ce8\u91d1\u989d\u5df2\u5927\u4e8e\u7406\u8bba\u6700\u4f4e\u4e2d\u5956\u5956\u91d1\uff0c\u53ef\u80fd\u65e0\u6cd5\u76c8\u5229\uff0c\u8bf7\u91cd\u65b0\u9009\u53f7");
                return
            }
            var f = a / s * 100,
            l = (t("#prevMoney").val() || 0) * 1,
            c = (t("#zhexp").val() || 10) * 1,
            h = (t("#zhbs").val() || 1) * 1,
            p;
            if (n.mobile.ylTP == "all") {
                p = (t("#alllv").val() || 30) * 1;
                if (f <= p) {
                    e.alert("\u8d62\u5229\u7387\u8bbe\u7f6e\u8fc7\u5927\uff0c\u65e0\u6cd5\u8fdb\u884c\u8ba1\u7b97\uff0c\u8bf7\u91cd\u65b0\u8bbe\u7f6e(\u6b64\u6b21\u65b9\u6848\u6700\u5927\u8d62\u5229\u7387\u7ea6\u4e3a\uff1a" + parseInt(f, 10) + "%)");
                    return
                }
            } else p = (t("#moneylv").val() || 10) * 1;
            var d = [],
            v = 0;
            for (var m = 0; m < c; m++) {
                var g = 1,
                y;
                n.mobile.ylTP == "money" ? g = Math.ceil((l + p) / (u - s)) : g = Math.ceil(l * (p + 100) / (100 * u - 100 * s - p * s)),
                g = g < h ? h: g,
                y = l + g * s;
                if (y > 3e5) {
                    e.alert("\u6295\u6ce8\u603b\u91d1\u989d\u5df2\u8d85\u8fc7\u4e09\u5341\u4e07\uff0c\u8d85\u8fc7\u90e8\u5206\u4e0d\u518d\u8ba1\u7b97");
                    break
                }
                l += g * s;
                var b = Math.floor((u * g - l) / l * 100);
                d.push("<tr>"),
                d.push('<td width="13%"><em>|</em>' + (m + 1) + "</td>"),
                d.push('<td width="15%"><em>|</em><cite class="bei red">' + g + "</cite> \u500d</td>"),
                d.push('<td width="26%"><em>|</em><cite class="red">' + l + "</cite> \u5143</td>"),
                d.push('<td width="26%"><em>|</em><cite class="red">' + (u * g - l) + "</cite> \u5143</td>"),
                d.push('<td width="20%"><cite class="red">' + b + "</cite> %</td>"),
                d.push("</tr>"),
                v++
            }
            t("#zzhlist").html(d.join("")),
            t("#zcount").text(v),
            t("#zprice").text(l - t("#prevMoney").val()),
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
                    if (i === 1) return n.lottery.alert("\u8bf7\u5148\u8fdb\u884c\u9009\u53f7"),
                    !1;
                    if (s === 2 && !t("#zzhlist").html()) //return n.lottery.alert("\u8bf7\u5148\u751f\u6210\u8ffd\u53f7\u671f\u6b21"),
                    !1;
					if(document.getElementById("mycart").innerHTML==""){n.lottery.alert("\u8bf7\u5148\u8fdb\u884c\u9009\u53f7"),!1;return;}
		
					var tk1=document.getElementById("k1").className,tk2=document.getElementById("k2").className,tk3=document.getElementById("k3").className,qihao=$("#showid").html(),
					zhusu=localStorage["storage167607mul"],wanfa1=caizhong,qihao3=qihao,tqihaosum=qihao;
					if(tk1=="infolist")//获取投注
					{
						
						    var beisu=document.getElementById("ownMul").value,sum=document.getElementById("ownMoney").innerHTML,tjurl="../Include/Ajax_ZG_G.asp";
					}
					else if(tk2=="infolist")//获取追号
					{
							var beisu=document.getElementById("apMul").value,sum=document.getElementById("apMoney").innerHTML,qisu=$("#apNum").val(),showbeisu=beisu,
							tzzhongjiang=document.getElementById("stopbuy").checked;if(tzzhongjiang) var tzzhongjiang1=1;else var tzzhongjiang1=0;
							var tjurl="../Include/Ajax_ZG_G.asp",qisu2=beisu;for(var i=1;i<qisu;i++) qisu2=qisu2+","+beisu;
							var tqihao=qihao.split("-"),b=Number(tqihao[1]);
							for(var i=1;i<qisu;i++)
							{
								b++;
								if(b<10) 
									var c="0"+b;
								else 
									var c=b;
								tqihaosum=tqihaosum+","+tqihao[0]+"-"+c;
							}
							qihao=tqihaosum;beisu=qisu2;
							var qihaofw=qihao.split(","),qihaofw1=qihaofw[0]+"..."+qihaofw[qisu-1]		
					}
					else   //获取合玩
					{
						 var beisu=document.getElementById("coopMul").value,rengou=document.getElementById("meRG").value,baodi=document.getElementById("meBD").value,
						isgk=document.getElementById("ispublic").value,sum=zhusu*2*beisu,ttrengou=Math.ceil(sum*0.05);
						$("#coopCount").html(zhusu);$("#coopMoney").html(sum);//$("#meRG").val(ttrengou);
						$("#trengou").html(ttrengou);var ticheng=document.getElementById("royalty").value,
						tjurl="/Trade/Include/Ajax_HM_G.asp",zhifu=$("#tsum").html();
					}
					if(localStorage["storage167607"]&&localStorage["storage167607mul"])
					{
					var k1=localStorage["storage167607"].split(";"),codes="";
					for(var i=0;i<k1.length;i++)
					{
						var k2=k1[i].split("|");
						for(var j=0;j<k2.length;j++)
						{	
							if(j==0){
								var k3=k2[2].split(" "),code="";
								switch(k2[j])
								{
									case "r3dt":{ var wanfa="[305]";wfname="\u4efb\u4e09\u80c6\u62d6";break;}
									case "r1":{if(k3.length>1){ var wanfa="[101]";wfname="\u524d\u4e00\u590d\u5f0f";}else{ var wanfa="[201]";wfname="\u524d\u4e00\u5355\u5f0f";}break;}
									case "r2":{if(k3.length>2){ var wanfa="[102]";wfname="\u9009\u4e8c\u590d\u5f0f";}else{ var wanfa="[202]";wfname="\u9009\u4e8c\u5355\u5f0f";}break;}
									case "r3":{if(k3.length>3){ var wanfa="[103]";wfname="\u9009\u4e09\u590d\u5f0f";}else{ var wanfa="[203]";wfname="\u9009\u4e09\u5355\u5f0f";}break;}
									case "r4":{if(k3.length>4){ var wanfa="[104]";wfname="\u9009\u56db\u590d\u5f0f";}else{ var wanfa="[204]";wfname="\u9009\u56db\u5355\u5f0f";}break;}
									case "r5":{if(k3.length>5){ var wanfa="[105]";wfname="\u9009\u4e94\u590d\u5f0f";}else{ var wanfa="[205]";wfname="\u9009\u4e94\u5355\u5f0f";}break;}
									case "r6":{if(k3.length>6){ var wanfa="[106]";wfname="\u9009\u516d\u590d\u5f0f";}else{ var wanfa="[206]";wfname="\u9009\u516d\u5355\u5f0f";}break;}
									case "r7":{if(k3.length>7){ var wanfa="[107]";wfname="\u9009\u4e03\u590d\u5f0f";}else{ var wanfa="[207]";wfname="\u9009\u4e03\u5355\u5f0f";}break;}
									case "r8":{if(k3.length>8){ var wanfa="[108]";wfname="\u9009\u516b\u590d\u5f0f";}else{ var wanfa="[208]";wfname="\u9009\u516b\u5355\u5f0f";}break;}
	      case "zhi2":{if(k3.length>2){ var wanfa="[501]";wfname="\u524d\u4e8c\u76f4\u9009\u590d\u5f0f";}else{ var wanfa="[502]";wfname="\u524d\u4e8c\u76f4\u9009\u5355\u5f0f";}break;}
								}
							}
							if(j==1){
							for(var d=0;d<k3.length;d++)
							{
								if(code!="") code=code+","+k3[d];else code=code+k3[d];	
							}}
						}
						 if(codes=="") codes=codes+"["+wfname+"]"+code; else codes=codes+"$"+"["+wfname+"]"+code; 
					}
					var tcodes=codes.split("$");
					if(tcodes.length>1)tcodes[0]=tcodes[0]+"...";
					 if(tk1=="infolist")
					{
						n.lightBox.alert({
                        content: "<p>\u8bf7\u4f60\u4ed4\u7ec6\u786e\u8ba4\u6295\u6ce8\u4fe1\u606f\u002c\u4e00\u65e6\u63d0\u4ea4\u5c06\u65e0\u6cd5\u66f4\u6539:</p><p>\u73a9\u6cd5:"+wanfa1+"</p><p>\u8ffd\u5956\u53f7\u7801:"+tcodes[0]+"</p><p>\u6ce8\u6570:"+zhusu+"</p><p>\u500d\u6570:"+beisu+"</p><p>\u671f\u53f7:"+qihao+"</p><p>\u6295\u6ce8\u91d1\u989d:"+sum+"</p>",
                        confirmFn: function()
						 {
							this.close();ttpanduan();
						 }})
					}	
					else if(tk2=="infolist")
					{
					    n.lightBox.alert({
						content: "<p>\u8bf7\u4f60\u4ed4\u7ec6\u786e\u8ba4\u6295\u6ce8\u4fe1\u606f\u002c\u4e00\u65e6\u63d0\u4ea4\u5c06\u65e0\u6cd5\u66f4\u6539:</p><p>\u73a9\u6cd5:"+wanfa1+"</p><p>\u8ffd\u5956\u53f7\u7801:"+tcodes[0]+"</p><p>\u6ce8\u6570:"+zhusu+"</p><p>\u500d\u6570:"+showbeisu+"</p><p>\u671f\u53f7:"+qihaofw1+"</p><p>\u671f\u6570:"+qisu+"</p><p>\u662f\u5426\u4e2d\u5956\u540e\u505c\u6b62\u8ffd\u53f7:"+tzzhongjiang1+"</p><p>\u6295\u6ce8\u91d1\u989d:"+sum+"<p>",	
						confirmFn: function()
						 {
							this.close();ttpanduan();
						 }})
					}
					else
					{
						n.lightBox.alert({
						content: "<p>\u8bf7\u4f60\u786e\u8ba4\u6295\u6ce8\u4fe1\u606f\u002c\u4e00\u65e6\u63d0\u4ea4\u5c06\u65e0\u6cd5\u66f4\u6539:</P><P>\u73a9\u6cd5:"+wanfa1+"</P><P>\u8ffd\u5956\u53f7\u7801:"+tcodes[0]+"</P><P>\u6ce8\u6570:"+zhusu+"</P><P>\u500d\u6570:"+beisu+"</P><P>\u671f\u53f7:"+qihao+"</P><P>\u6295\u6ce8\u91d1\u989d:"+sum+"</P><P>\u76c8\u5229\u63d0\u6210"+ticheng+"</P><P>\u6211\u8981\u8ba4\u8d2d:"+rengou+"</P><P>\u6211\u8981\u4fdd\u5e95:"+baodi+"</P><P>\u662f\u5426\u516c\u5f00:"+isgk+"</P><P>\u60a8\u9700\u8981\u652f\u4ed8:"+zhifu+"</p>",
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
					}}
					return;
                }
            },
            touchstart: function() {
                t(this).addClass("btntap")
            },
            touchend: function() {
                t(this).removeClass("btntap")
            }
        })
    },
    n.mobile.postData = function() {
        var r = t(".xq-nav").find(".on").attr("buy") * 1,
        i = t("#mycart").find("li"),
        s = t("#pay_buy"),
        o = t.trim(t("#actQH").text()),
        u = t("#zzhlist").find(".bei"),
        a = !1,
        f,
        l,
        c,
        h,
        p,
        d,
        v,
        m,
        g,
        y = "",
        b;
        f = t("#ownCount").text() * 1,
        l = t("#ownMoney").text() * 1,
        r == 0 ? (c = t("#ownMul").val(), a = l > n.mobile.maxMoney) : r == 1 ? (h = t("#apMul").val(), p = t("#apNum").val(), d = t("#apMoney").text() * 1, v = t("#stopbuy").prop("checked") ? "0": "999999999", a = d > n.mobile.maxMoney) : (u.each(function(e, n) {
            y += t.trim(t(n).text()) + ","
        }), m = t("#zcount").text(), g = t("#zprice").text() * 1, b = t("#bounsstop").prop("checked") ? "0": "999999999", a = g > n.mobile.maxMoney);
        if (a) {
            e.alert("\u6295\u6ce8\u91d1\u989d\u4e0d\u80fd\u8d85\u8fc7" + n.mobile.maxMoney / 1e4 + "\u4e07\uff01\u8d2d\u5f69\u6709\u98ce\u9669\uff0c\u6295\u6ce8\u987b\u8c28\u614e\uff01");
            return
        }
        var w = t.map(i,
        function(e, r) {
            var i = t(e),
            s = i.attr("pt"),
            o = i.attr("code");
            return n.mobile.game[s] + "|" + o
        }).join(";"),
        E = {
            BetType: "bet",
            BetCodes: w.replace(/^;|;$/g, ""),
            LotID: n.mobile.lotType,
            OneMoney: 2,
            BetPageID: "2001",
            DrawNo: o
        };
        r == 0 ? (E.BetMoney = l, E.BetMulti = c) : r == 1 ? (E.BetType = "trc", E.BetMulti = h, E.ChipCount = f, E.ChipMoney = f * 2, E.TraceCount = p, E.TotalMoney = d, E.StopBonus = v) : (E.BetType = "trc", E.BetMulti = y.replace(/^,|,$/g, ""), E.ChipCount = f, E.ChipMoney = f * 2, E.TraceCount = m, E.TotalMoney = g, E.StopBonus = b),
        n.lottery.ajaxData(E,
        function() {
            n.mobile.Callbacks()
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