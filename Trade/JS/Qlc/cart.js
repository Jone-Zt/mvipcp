var caizhong="\u4e03\u4e50\u5f69",gp=0;
function panduan()
{
	var tk1=document.getElementById("k1").className,tk2=document.getElementById("k2").className,tk3=document.getElementById("k3").className,qihao=$("#showid").html(),
		zhusu=localStorage["storage220028mul"],wanfa1="\u4e03\u4e50\u5f69",tqihao2=qihao,wfname="",wfname1="",kcode="";
					if(tk1=="on")//获取投注
					{
						
						    var beisu=document.getElementById("ownMul").value,sum=document.getElementById("ownMoney").innerHTML,tjurl="../Include/Ajax_ZG_D.asp";
					}
					else if(tk3=="on")//获取追号
					{
						var beisu=document.getElementById("apMul").value,sum=document.getElementById("apMoney").innerHTML,qisu=$("#apNum").val(),tjurl="../Include/Ajax_ZG_D.asp",
						showbeisu=beisu,qisu2=beisu,tzzhongjiang=document.getElementById("stopbuy").checked;if(tzzhongjiang) var tzzhongjiang1=1;else var tzzhongjiang1=0;
						for(var i=1;i<qisu;i++) qisu2=qisu2+","+beisu;
						var tqihao=Number(qihao);
						for(var j=1;j<qisu;j++)
						{
							tqihao++;
							tqihao2=tqihao2+","+tqihao;	
						}
						beisu=qisu2;qihao=tqihao2;
						var qihaofw=qihao.split(","),qihaofw1=qihaofw[0]+"..."+qihaofw[qisu-1];//sum=Number(sum)/Number(qisu)	
					}
					else   //获取合玩 
					{
							var beisu=document.getElementById("coopMul").value,
							rengou=document.getElementById("meRG").value,
							baodi=document.getElementById("meBD").value,
							isgk=document.getElementById("ispublic").value,
							ticheng=document.getElementById("royalty").value,
							sum=document.getElementById("coopMoney").innerHTML,
							zhifu=$("#tsum").html(),
							tjurl="../Include/Ajax_HM_D.asp";
					}
		if(localStorage["storage220028"]&&localStorage["storage220028mul"])
		{
			var k1=localStorage["storage220028"].split(";"),codes="";
			for(var i=0;i<k1.length;i++)
			{
				var k2=k1[i].split("|"),kcode1="";
				if(k2[0]>1){ var wanfa="[101]";wfname="\u590d\u5f0f";}else{ var wanfa="[102]";wfname="\u5355\u5f0f";}
				if(wfname!=""&&wfname!=wfname1&&wfname1!="") wfname="\u6df7\u6295";
					wfname1=wfname;
				var k3=k2[1].split(" ");
				for(var d=0;d<k3.length;d++)
				{
					if(kcode1!="") kcode1=kcode1+","+k3[d];else kcode1=kcode1+k3[d];	
				}
				if(kcode!="") kcode=kcode+"$"+kcode1; else kcode=kcode+kcode1;
			}	
			codes=kcode;
			var tcodes=codes.split("$");
			if(tcodes.length>1)tcodes[0]=tcodes[0]+"...";
			if(baodi<1&&baodi=="")
				var isbaodi=0; else var isbaodi=1;
			$.ajax({
				    url:tjurl,
				   	type:"POST",
					dataType:"xml",
					async:false,
					data:{
						caizhongdm:"QLC",
						protype:escape(wanfa1), 
						wfname:escape(wfname),                                                                 
						allmoney:sum,                                   
						codes:codes,                               
						ZjCut:"0",                                      
						beishulistsuc:beisu,                             
						expectlistsuc:qihao,                                 
						single_zs:$("#coopCount").html(),  
						BuyJF:"0",                   
						single_m:"",                  
						escstr:"",
						buyCount:rengou,
						baodiCount:baodi,
						tc_money:ticheng, 
						isbaodi:isbaodi,
						escstr:localStorage["storage220028"],        
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
							if(localStorage["storage220028"]&&localStorage["storage220028mul"]){localStorage.removeItem("storage220028");localStorage.removeItem("storage220028mul");}
				document.getElementById("mycart").innerHTML="<li class='nocode'>\u60a8\u8fd8\u6ca1\u6709\u9009\u62e9\u4efb\u4f55\u53f7\u7801\uff01</li>";
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
    n.mobile.lotType = n.lottery.lotType.qlc,
    n.mobile.price = n.lottery.price,
    n.mobile.maxMoney = n.lottery.maxMoney,
    n.mobile.buyPercent = "0.05",
    n.mobile.baodiPerc = 0,
    n.mobile.Callbacks = function() {
        t("#pay_buy").trigger("click")
    },
    n.mobile.countDownInit = function() {
        var e = t(".xq-tit"),
        r = e.attr("issale") * 1,
        i = e.attr("endtime"),
        s = t("#countdowm"),
        o = t("#pay_buy");
        r ? n.mobile.getServerTimes(function(e) {
            if (e * 1 > 0) {
                var t = i * 1 - e * 1;
                t <= 0 && (s.html("\u672c\u671f\u5df2\u622a\u6b62"), o.prop("disabled", !0).addClass("btnoff").text("\u7b49\u5f85\u5f00\u5956"))
            }
        }) : (s.html("\u6682\u505c\u9500\u552e"), o.prop("disabled", !0).addClass("btnoff").text("\u6682\u505c\u9500\u552e"))
    },
    n.mobile.codeViewInit = function() {
        var e = n.string.filterScript(n.string.getUrlParam("luck")),
        r = /^1\|(\d{2}[\s ]{1}){6}(\d{2})$/g;
        e && r.test(e) && (n.localstorage.setItem(n.mobile.storageName, e), n.localstorage.setItem(n.mobile.storageMulName, 1));
        var i = n.localstorage.getItem(n.mobile.storageMulName) * 1,
        s = n.localstorage.getItem(n.mobile.storageName).split(";"),
        o = [],
        u = s.length,
        a,
        f = t("#mycart"),
        l = '<li code="{code}" count="{count}"><a herf="javascript:;" class="cp-cls">X</a>{name}\uff1a<strong class="red">{red}</strong></li>',
        c = "";
        if (i) {
            for (var h = 0; h < u; h++) {
                a = s[h].split("|");
                var p = "";
                /\$+/g.test(a[1]) ? p = "\u80c6\u62d6": a[0] * 1 > 1 ? p = "\u590d\u5f0f": p = "\u5355\u5f0f",
                c = l.replace("{code}", a[1]).replace("{count}", a[0]).replace("{name}", p).replace("{red}", a[1]),
                o.push(c)
            }
            f.html(o.join(""))
        } else f.html('<li class="nocode">\u60a8\u8fd8\u6ca1\u6709\u9009\u62e9\u4efb\u4f55\u53f7\u7801\uff01</li>');
        n.mobile.count()
    },
    n.mobile.codeConfInit = function() {
        t("#mycart").on(n.lottery.tap, ".cp-cls",
        function() {
            var e = t(this).parent(),
            r = e.attr("code"),
            i = e.attr("count") * 1,
            s,
            o = t("#mycart");
            s = (n.localstorage.getItem(n.mobile.storageName) + ";").replace(i + "|" + r + ";", "").replace(/^;|;$/g, ""),
            n.localstorage.setItem(n.mobile.storageName, s),
            n.localstorage.setItem(n.mobile.storageMulName, n.localstorage.getItem(n.mobile.storageMulName) - i),
            e.remove(),
            n.mobile.count("bd"),
            o.find("li").length === 0 && o.html('<li class="nocode"> \u60a8\u8fd8\u6ca1\u6709\u9009\u62e9\u4efb\u4f55\u53f7\u7801\uff01</li>')
        }),
        t("#tools").on(n.lottery.tap, ".btn2",
        function() {
            var e = t(this).attr("act"),
            r = 1,
            i = t("#mycart"),
            s = i.find(".nocode"),
            o,
            u = "",
            a = '<li code="{code}" count="{count}"><a herf="javascript:;" class="cp-cls">X</a>\u5355\u5f0f\uff1a<strong class="red">{red}</strong></li>';
            if (/rnd\d{1}/.test(e)) {
                r = e.replace(/rnd(\d{1})/, "$1") * 1,
                s.length === 1 && s.remove();
                for (var f = 0; f < r; f++) {
                    o = n.number.random({
                        min: 1,
                        max: 30,
                        size: 7,
                        repeat: 0,
                        sort: 1
                    })[0].join(" ");
                    var l = "1|" + o;
                    u += a.replace("{code}", o).replace("{count}", 1).replace("{red}", o),
                    n.localstorage.setItem(n.mobile.storageName, (n.localstorage.getItem(n.mobile.storageName) + ";" + l).replace(/^;|;$/g, "")),
                    n.localstorage.setItem(n.mobile.storageMulName, ("0" + n.localstorage.getItem(n.mobile.storageMulName)) * 1 + 1)
                }
                i.append(u)
            } else i.html('<li class="nocode">\u60a8\u8fd8\u6ca1\u6709\u9009\u62e9\u4efb\u4f55\u53f7\u7801\uff01</li>'),
            n.localstorage.removeItem(n.mobile.storageMulName),
            n.localstorage.removeItem(n.mobile.storageName),
            t("#meBD").val(0),
            t(".mycoop").find("strong").eq(2).html(0);
            n.mobile.count("bd")
        }),
        n.mobile.minRGcheck = function(e, t) {
            if (t < 2) {
                e.val(0);
                return
            }
            e.val(e.val().replace(/[^\d]|^0+/g, "")),
            e.val() * 1 > t && e.val(t)
        },
        t("#title,#content").on({
            focus: function() {
                var e = t(this),
                r = t.trim(e.val()),
                i = e.attr("id"),
                s = i == "title" ? "\u4e03\u4e50\u5f69\u7b2c" + n.mobile.issue + "\u671f": "\u8fd9\u4e2a\u5bb6\u4f19\u5f88\u61d2\uff0c\u53ea\u60f3\u4e2d\u5927\u5956";
                r == s && e.val("")
            },
            blur: function() {
                var e = t(this),
                r = t.trim(e.val()),
                i = e.attr("id"),
                s = i == "title" ? "\u4e03\u4e50\u5f69\u7b2c" + n.mobile.issue + "\u671f": "\u8fd9\u4e2a\u5bb6\u4f19\u5f88\u61d2\uff0c\u53ea\u60f3\u4e2d\u5927\u5956";
                r || e.val(s)
            }
        }),
        t("#meRG").on({
            keyup: function() {
                var e = t("#coopMoney").html() * 1;
                n.mobile.minRGcheck(t(this), e)
            },
            blur: function() {
                var e = t("#coopMoney").html() * 1,
                r = t(this);
                n.mobile.minRGcheck(r, e),
                r.val() / e < n.mobile.buyPercent && r.val(Math.ceil(e * n.mobile.buyPercent)),
                t("#maxBD").html(e - r.val() * 1),
                t("#meBD").val() * 1 + r.val() * 1 >= e && (t("#meBD").val(e - r.val() * 1), e - r.val() < 1 ? t("#baodibl").html("") : t("#baodibl").html("(\u7ea6" + (100 - parseInt(r.val() * 100 / e, 10)) + "%)")),
                o = t(".mycoop").find("strong"),
                o.eq(0).html(t("#meBD").val() * 1 + r.val() * 1),
                o.eq(1).html(r.val()),
                o.eq(2).html(t("#meBD").val())
            }
        }),
        t("#meBD").on({
            keyup: function() {
                var e = t("#coopMoney").html() * 1,
                n,
                r = t(this);
                if (e < 2) {
                    t(this).val(0);
                    return
                }
                r.val(t(this).val().replace(/[^\d]|^0/g, "")),
                r.val() * 1 > e - t("#meRG").val() * 1 && r.val(e - t("#meRG").val() * 1),
                r.val() * 1 < 1 ? t("#baodibl").html("") : (e == t("#meRG").val() * 1 + r.val() * 1 ? n = Math.ceil(r.val() * 100 / e) : n = parseInt(r.val() * 100 / e, 10), t("#baodibl").html("(\u7ea6" + n + "%)"))
            },
            blur: function() {
                var e, n = t("#coopMoney").html() * 1,
                r = t(this),
                i;
                if (n < 2) {
                    r.val(0);
                    return
                }
                r.val(r.val().replace(/[^\d]|^0/g, "")),
                r.val() == "" && r.val(0),
                r.val() * 1 > n - t("#meRG").val() * 1 && r.val(n - t("#meRG").val() * 1),
                e = t(".mycoop").find("strong"),
                e.eq(0).html(t("#meRG").val() * 1 + r.val() * 1),
                e.eq(1).html(t("#meRG").val()),
                e.eq(2).html(r.val()),
                r.val() * 1 < 1 ? t("#baodibl").html("") : (n == t("#meRG").val() * 1 + r.val() * 1 ? i = Math.ceil(r.val() * 100 / n) : i = parseInt(r.val() * 100 / n, 10), t("#baodibl").html("(\u7ea6" + i + "%)"))
            }
        })
    },
    n.mobile.AsynDownData = function() {
        var e = "#",//"/int/qlccart/",
        r = t(".xq-tit"),
        i = t("#actQH"),
        s = t("#countdowm"),
        o = t("#title");
        t.getJSON(e + "?rnd=" + Math.random(),
        function(e) {
            e && (r.attr({
                issue: e.issue,
                issale: e.IsOpen,
                endtime: e.EndTime * 1 - e.DsTimeSpace * 1
            }), i.text(t.trim(e.issue)), n.mobile.countDownInit(), n.mobile.issue = e.issue, s.html("\u622a\u6b62\u65f6\u95f4\uff1a" + e.etstr), o.val("\u4e03\u4e50\u5f69\u7b2c{issue}\u671f".replace(/{issue}/i, n.mobile.issue)), n.string.getUrlParam("dest") && n.mobile.Callbacks())
        })
    },
    n.mobile.count = function(e) {
        var r = t(".mycoop").find("strong"),
        i = ("0" + n.localstorage.getItem(n.mobile.storageMulName)) * 1,
        s = n.mobile.price,
        o = t("#ownMul").val(),
        u = t("#coopMul").val(),
        a = t("#apMul").val(),
        f = t("#apNum").val(),
        l = i * s * o,
        c = i * s * u,
        h = i * s * a * f,
        p = Math.ceil(c * n.mobile.buyPercent);
        t("#ownCount").text(i),
        t("#coopCount").text(i),
        t("#ownMoney").text(l),
        t("#coopMoney").text(c),
        t("#apMoney").text(h),
        t("#meRG").val(p),
        r.eq(1).text(p),
        t("#maxBD").text(c - p),
        e && (t("#meBD").val(c-p), t("#baodibl").html(""), r.eq(2).text(t("#meBD").val())),r.eq(0).text(parseInt(r.eq(1).text())+parseInt(r.eq(2).text()))
    },
    n.mobile.uiInit = function() {
        t(".xq-nav a").on(n.lottery.tap,
        function() {
            var e = t(this),
            n = e.attr("buy") * 1,
            r = t(".infolist");
            t(".xq-nav a").removeClass("on"),
            e.addClass("on"),
            r.addClass("none"),
            r.eq(n).removeClass("none")
        }),
        t(".ipt-6").not("#meRG,#meBD").on({
            blur: function() {
                var e = t(this).val().replace(/[^\d]/g, "") || 1,
                r = t(this).attr("max") * 1;
                r = r == 0 ? 1e5: r,
                e <= 0 ? e = 1 : e > r && (e = r),
                t(this).val(e),
                n.mobile.count()
            },
            keyup: function() {
                n.mobile.count("bd")
            }
        })
    },
    n.mobile.submitInit = function() {
        t("#pay_buy").on({
            click: function() {
                var e = t("#mycart").find(".nocode").length;
                if (t(this).attr("disabled")) return;
                if (e === 1) {
                    n.lightBox.alert({
                        content: '<p class="msg">\u8bf7\u5148\u8fdb\u884c\u9009\u53f7\uff01</p>',
                        confirmFn: function() {
                            this.close()
                        },
                        closeFn: function() {
                            this.close()
                        }
                    });
                    return
                }
                n.mobile.postData()
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
        var e = t(".xq-nav .on").attr("buy") * 1,
        r = "";
        t("#mycart").find("li").each(function() {
            var e = t(this).attr("code");
            r += e + ";"
        }),
        r = r.replace(/^;|;$/g, "");
        if (!t("#agree").prop("checked")) return n.lottery.alert("\u8bf7\u5148\u9605\u8bfb\u5e76\u540c\u610f\u300a\u8d2d\u5f69\u534f\u8bae\u300b\uff01"),
        !1;
        if (!r) return n.lottery.alert("\u8bf7\u5148\u8fdb\u884c\u9009\u53f7\uff01"),
        !1;
		if(document.getElementById("mycart").innerHTML==""){n.lottery.alert("\u8bf7\u5148\u8fdb\u884c\u9009\u53f7"),!1;return;}
		
		
		
		
		var tk1=document.getElementById("k1").className,tk2=document.getElementById("k2").className,tk3=document.getElementById("k3").className,qihao=$("#showid").html(),
		zhusu=localStorage["storage220028mul"],wanfa1="\u4e03\u4e50\u5f69",tqihao2=qihao;
		
		
		
					
					if(tk1=="on")//获取投注
					{
						
						    var beisu=document.getElementById("ownMul").value,sum=document.getElementById("ownMoney").innerHTML,tjurl="../Include/Ajax_ZG_D.asp";
					}
					else if(tk3=="on")//获取追号
					{
						var beisu=document.getElementById("apMul").value,sum=document.getElementById("apMoney").innerHTML,qisu=$("#apNum").val(),tjurl="../Include/Ajax_ZG_D.asp",
						showbeisu=beisu,qisu2=beisu,tzzhongjiang=document.getElementById("stopbuy").checked;if(tzzhongjiang) var tzzhongjiang1=1;else var tzzhongjiang1=0;
						for(var i=1;i<qisu;i++) qisu2=qisu2+","+beisu;
						var tqihao=Number(qihao);
						for(var j=1;j<qisu;j++)
						{
							tqihao++;
							tqihao2=tqihao2+","+tqihao;	
						}
						beisu=qisu2;qihao=tqihao2;
						var qihaofw=qihao.split(","),qihaofw1=qihaofw[0]+"..."+qihaofw[qisu-1];sum=Number(sum)/Number(qisu)	
					}
					else   //获取合玩 
					{
							var beisu=document.getElementById("coopMul").value,
							rengou=document.getElementById("meRG").value,
							baodi=document.getElementById("meBD").value,
							isgk=document.getElementById("ispublic").value,
							ticheng=document.getElementById("royalty").value,
							sum=document.getElementById("coopMoney").innerHTML,
							zhifu=$("#tsum").html(),
							tjurl="../Include/Ajax_HM_D.asp";
					}
					
		
		if(localStorage["storage220028"]&&localStorage["storage220028mul"])
		{
			var k1=localStorage["storage220028"].split(";"),kcode=codes="";
			for(var i=0;i<k1.length;i++)
			{
				var k2=k1[i].split("|"),kcode1="";
				if(k2[0]>1){ var wanfa="[101]";wfname="\u590d\u5f0f";}else{ var wanfa="[102]";wfname="\u5355\u5f0f";}
				var k3=k2[1].split(" ");
				for(var d=0;d<k3.length;d++)
				{
					if(kcode1!="") kcode1=kcode1+","+k3[d];else kcode1=kcode1+k3[d];	
				}
				if(kcode!="") kcode=kcode+"$"+"["+wfname+"]"+kcode1; else kcode=kcode+"["+wfname+"]"+kcode1;
			}	
				var tcodes=kcode.split("$");
				if(tcodes.length>1)tcodes[0]=tcodes[0]+"...";
						
				
					if(tk2=="on")
					{
						 n.lightBox.alert({
						content: "</P><P>\u8bf7\u4f60\u4ed4\u7ec6\u786e\u8ba4\u6295\u6ce8\u4fe1\u606f\u002c\u4e00\u65e6\u63d0\u4ea4\u5c06\u65e0\u6cd5\u66f4\u6539:</P><P>\u73a9\u6cd5:"+wanfa1+"</P><P>\u8ffd\u5956\u53f7\u7801:"+tcodes[0]+"</P><P>\u6ce8\u6570:"+zhusu+"</P><P>\u500d\u6570:"+beisu+"</P><P>\u671f\u53f7:"+qihao+"</P><P>\u6295\u6ce8\u91d1\u989d:"+sum+"</P><P>\u76c8\u5229\u63d0\u6210"+ticheng+"</P><P>\u6211\u8981\u8ba4\u8d2d:"+rengou+"</P><P>\u6211\u8981\u4fdd\u5e95:"+baodi+"</P><P>\u662f\u5426\u516c\u5f00:"+isgk+"</P><P>\u9700\u8981\u652f\u4ed8:"+zhifu+"</P>",
						confirmFn: function()
						 {
							this.close();ttpanduan();
						 }})
					}
				else if(tk1=="on")
					{	
					    n.lightBox.alert({
						content: "<P>\u8bf7\u4f60\u4ed4\u7ec6\u786e\u8ba4\u6295\u6ce8\u4fe1\u606f\u002c\u4e00\u65e6\u63d0\u4ea4\u5c06\u65e0\u6cd5\u66f4\u6539:</P><P>\u73a9\u6cd5:"+wanfa1+"</P><P>\u8ffd\u5956\u53f7\u7801:"+tcodes[0]+"</P><P>\u6ce8\u6570:"+zhusu+"</P><P>\u500d\u6570:"+beisu+"</P><P>\u671f\u53f7:"+qihao+"</P><P>\u6295\u6ce8\u91d1\u989d:"+sum+"</P>",
						confirmFn: function()
						 {
							this.close();ttpanduan();
						 }})		
					}
				else
					{
						 n.lightBox.alert({
						content: "<p>\u8bf7\u4f60\u4ed4\u7ec6\u786e\u8ba4\u6295\u6ce8\u4fe1\u606f\u002c\u4e00\u65e6\u63d0\u4ea4\u5c06\u65e0\u6cd5\u66f4\u6539:</p><p>\u73a9\u6cd5:"+wanfa1+"</p><p>\u8ffd\u5956\u53f7\u7801:"+tcodes[0]+"</p><p>\u6ce8\u6570:"+zhusu+"</p><p>\u500d\u6570:"+showbeisu+"</p><p>\u671f\u53f7:"+qihaofw1+"</p><p>\u671f\u6570:"+qisu+"</p><p></p><p>\u6295\u6ce8\u91d1\u989d:"+sum*qisu+"</p>",
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
        var i, s = {
            BetCodes: r,
            LotID: n.mobile.lotType,
            OneMoney: n.mobile.price,
            BetPageID: "2001",
            DrawNo: n.mobile.issue
        },
        o = {},
        u = 0;
        if (e == 0) {
            u = t("#ownMoney").text();
            var a = t("#ownMul").val();
            o = {
                BetType: "bet",
                BetMoney: u,
                BetMulti: a
            }
        } else if (e == 1) {
            u = t("#coopMoney").text();
            var f = t("#coopMul").val(),
            l = t("#ispublic").val(),
            c = t("#meBD").val(),
            h = t("#meRG").val(),
            p = t("#royalty").val();
            o = {
                BetType: "team",
                BetMoney: u,
                BetMulti: f,
                SecrecyFlag: l,
                UploadFlag: 0,
                LockCount: c,
                SponsorBuy: h,
                SponsorDeduck: p,
                PTitle: t.trim(t("#title").val()) || "\u4e03\u4e50\u5f69\u7b2c" + n.mobile.issue + "\u671f",
                PMemo: t.trim(t("#content").val()) || "\u8fd9\u4e2a\u5bb6\u4f19\u5f88\u61d2\uff0c\u53ea\u60f3\u4e2d\u5927\u5956"
            }
        } else {
            var d = t("#ownCount").text(),
            v = t("#apMul").val(),
            m = t("#apNum").val(),
            u = t("#apMoney").text(),
            g = t("#stopbuy").prop("checked") ? "0": "999999999";
            o = {
                BetType: "trc",
                BetMulti: v,
                ChipCount: d,
                ChipMoney: d * n.mobile.price,
                TraceCount: m,
                TotalMoney: u,
                StopBonus: g
            }
        }
        i = u * 1 > n.mobile.maxMoney;
        if (i) {
            n.lightBox.alert({
                content: "<p class='msg'>\u6295\u6ce8\u91d1\u989d\u4e0d\u80fd\u8d85\u8fc7 " + n.mobile.maxMoney / 1e4 + "\u4e07\uff01\u8d2d\u5f69\u6709\u98ce\u9669\uff0c\u6295\u6ce8\u987b\u8c28\u614e\uff01</p>",
                confirmFn: function() {
                    this.close()
                },
                closeFn: function() {
                    this.close()
                }
            });
            return
        }
        for (var y in o) o.hasOwnProperty(y) && (s[y] = o[y]);
        n.lottery.ajaxData(s,
        function() {
            n.mobile.Callbacks()
        })
    },
    t(function() {
        n.mobile.storageName = "storage" + n.mobile.lotType,
        n.mobile.storageMulName = "storage" + n.mobile.lotType + "mul",
        n.mobile.AsynDownData(),
        n.mobile.codeConfInit(),
        n.mobile.uiInit(),
        n.mobile.submitInit(),
        n.mobile.codeViewInit()
    })
})(window);