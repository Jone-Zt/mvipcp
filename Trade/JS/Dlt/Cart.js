var caizhong="\u5927\u4e50\u900f",gp=0;
function panduan()
{
		var tk1=document.getElementById("k1").className,tk2=document.getElementById("k2").className,tk3=document.getElementById("k3").className,qihao=$("#showid").html(),
		zhusu=localStorage["storage120029mul"],wanfa1="\u5927\u4e50\u900f",qihao3=qihao,zhuijiatz="",wfname="",wfname1="",kcode="";
					
		
		if(tk1=="infolist")
		{
			var beisu=document.getElementById("ownMul").value,sum=document.getElementById("ownMoney").innerHTML,tjurl="../Include/Ajax_ZG_D.asp";
			if(document.getElementById("ZG").className=="appends") zhuijiatz="0";else zhuijiatz="1";
		}
		else if(tk2=="infolist")
		{
			var beisu=document.getElementById("coopMul").value,rengou=document.getElementById("meRG").value,baodi=document.getElementById("meBD").value,
			isgk=document.getElementById("ispublic").value,ticheng=document.getElementById("royalty").value,sum=document.getElementById("coopMoney").innerHTML,
			zhifu=document.getElementById("tsum").innerHTML,tjurl="../Include/Ajax_HM_D.asp";
			if(document.getElementById("ZG").className=="appends") zhuijiatz="0";else zhuijiatz="1";
		}
		else    
		{
			var beisu=document.getElementById("apMul").value,sum=document.getElementById("apMoney").innerHTML,tjurl="../Include/Ajax_ZG_D.asp",qisu2=beisu,showbeisu=beisu,
			qisu=$("#apNum").val(),qihao2=Number(qihao);for(var i=1;i<qisu;i++) qisu2=qisu2+","+beisu;for(var j=1;j<qisu;j++){qihao2++;qihao3=qihao3+","+qihao2;}qihao=qihao3;
			beisu=qisu2;if(document.getElementById("ZG").className=="appends") zhuijiatz="0";else zhuijiatz="1";
			var qihaofw=qihao.split(","),qihaofw1=qihaofw[0]+"..."+qihaofw[qisu-1];//sum=Number(sum)/Number(qisu)
		}

		
		if(localStorage["storage120029"]&&localStorage["storage120029mul"])
		{
			var k1=localStorage['storage120029'].split(";"),codes="";
			for(var i=0;i<k1.length;i++)
			{
				var k2=k1[i].split("|");
				for(var j=0;j<k2.length;j++)
				{
					if(j==1)
					{
						var k3=k2[j].split("+");
						for(var a=0;a<k3.length;a++)
						{
							var k4=k3[a].split(" ");
							if(a==0){ if(k4.length<6){wfname="\u5355\u5f0f";var wanfa="[102]";} else{ var wanfa="[101]";wfname="\u590d\u5f0f";}var kcode1=k4;}	
						    if(a==1){ if(k4.length>2){wfname="\u590d\u5f0f";var wanfa="[101]";}var kcode2="|"+k4}	
						}
						if(kcode!="") kcode=kcode+"$"+kcode1+kcode2; else kcode=kcode+kcode1+kcode2;
					}
				}
				if(wfname!=""&&wfname!=wfname1&&wfname1!="") wfname=wfname.replace("\u590d\u5f0f","").replace("\u5355\u5f0f","")+"\u590d\u5f0f";//wfname="\u6df7\u6295";
				wfname1=wfname;
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
								caizhongdm:"DLT",
								protype:escape(wanfa1),                                                                  
								allmoney:sum,                                   
								codes:codes,
								wfname:escape(wfname),
								isbaodi:isbaodi,                                     
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
								zuijia:zhuijiatz,  
								escstr:localStorage["storage120029"],                  
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
						if(localStorage["storage120029"]&&localStorage["storage120029mul"]){localStorage.removeItem("storage120029");localStorage.removeItem("storage120029mul");}
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
    n.mobile.lotType = n.lottery.lotType.dlt,
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
        n.mobile.getServerTimes(function(e) {
            if (e * 1 > 0) {
                var t = i * 1 - e * 1;
                t <= 0 && (s.html("\u672c\u671f\u5df2\u622a\u6b62"), o.prop("disabled", !0).addClass("btnoff").text("\u7b49\u5f85\u5f00\u5956"))
            }
        })
    },
    n.mobile.codeViewInit = function() {
        var e = n.string.filterScript(n.string.getUrlParam("luck")),
        r = /^1\|(\d{2}[\s ]{1}){4}(\d{2})\+(\d{2}[\s ]{1})\d{2}$/g;
        e && r.test(e) && (n.localstorage.setItem(n.mobile.storageName, e), n.localstorage.setItem(n.mobile.storageMulName, 1));
        var i = n.localstorage.getItem(n.mobile.storageMulName) * 1,
        s = n.localstorage.getItem(n.mobile.storageName).split(";"),
        o = [],
        u = s.length,
        a,
        f,
        l = t("#mycart"),
        c = '<li code="{code}" count="{count}"><a href="javascript:;" class="cp-cls">X</a>{type}\uff1a<strong class="red">{red}</strong> + <strong class="blue">{blue}</strong></li>',
        h = "";
        if (i) {
            for (var p = 0; p < u; p++) {
                a = s[p].split("|"),
                f = a[1].split("+");
                var d = "";
                /\$+/g.test(a[1]) ? d = "\u80c6\u62d6": a[0] * 1 > 1 ? d = "\u590d\u5f0f": d = "\u5355\u5f0f",
                h = c.replace("{type}", d).replace("{code}", a[1]).replace("{count}", a[0]).replace("{red}", f[0]).replace("{blue}", f[1]),
                o.push(h)
            }
            l.html(o.join(""))
        } else l.html('<li class="nocode">\u60a8\u8fd8\u6ca1\u6709\u9009\u62e9\u4efb\u4f55\u53f7\u7801\uff01</li>');
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
            n.mobile.count(),
            o.find("li").length === 0 && o.html('<li class="nocode"> \u60a8\u8fd8\u6ca1\u6709\u9009\u62e9\u4efb\u4f55\u53f7\u7801\uff01</li>')
        }),
        t(".apb").on(n.lottery.tap,
        function() {
            var e = t(this),
            r = e.find("em"),
            i = r.hasClass("checked"),
            s = t(".apb").find("em");
            i ? (n.mobile.price = 2, s.removeClass("checked")) : (n.mobile.price = 3, s.addClass("checked")),
            n.mobile.count("bd")
        }),
        t("#tools").on(n.lottery.tap, ".btn2",
        function() {
            var e = t(this).attr("act"),
            r = 1,
            i = t("#mycart"),
            s = i.find(".nocode"),
            o,
            u,
            a,
            f = "",
            l = '<li code="{code}" count="1"><a href="javascript:;" class="cp-cls">X</a>\u5355\u5f0f\uff1a<strong class="red">{red}</strong> + <strong class="blue">{blue}</strong></li>';
            if (/rnd\d{1}/.test(e)) {
                r = e.replace(/rnd(\d{1})/, "$1") * 1,
                s.length === 1 && s.remove();
                for (var c = 0; c < r; c++) o = n.number.random({
                    min: 1,
                    max: 35,
                    size: 5,
                    repeat: 0,
                    sort: 1
                })[0].join(" "),
                u = n.number.random({
                    min: 1,
                    max: 12,
                    size: 2,
                    repeat: 0,
                    sort: 1
                })[0].join(" "),
                a = o + "+" + u,
                f += l.replace("{code}", a).replace("{red}", o).replace("{blue}", u),
                n.localstorage.setItem(n.mobile.storageName, (n.localstorage.getItem(n.mobile.storageName) + ";" + "1|" + a).replace(/^;|;$/g, "")),
                n.localstorage.setItem(n.mobile.storageMulName, ("0" + n.localstorage.getItem(n.mobile.storageMulName)) * 1 + 1);
                i.append(f)
            } else i.html('<li class="nocode"> \u60a8\u8fd8\u6ca1\u6709\u9009\u62e9\u4efb\u4f55\u53f7\u7801\uff01</li>'),
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
                s = i == "title" ? "\u5927\u4e50\u900f\u7b2c" + n.mobile.issue + "\u671f": "\u8fd9\u4e2a\u5bb6\u4f19\u5f88\u61d2\uff0c\u53ea\u60f3\u4e2d\u5927\u5956";
                r == s && e.val("")
            },
            blur: function() {
                var e = t(this),
                r = t.trim(e.val()),
                i = e.attr("id"),
                s = i == "title" ? "\u5927\u4e50\u900f\u7b2c" + n.mobile.issue + "\u671f": "\u8fd9\u4e2a\u5bb6\u4f19\u5f88\u61d2\uff0c\u53ea\u60f3\u4e2d\u5927\u5956";
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
        var e = "#",//"/int/sltcart/",
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
            }), i.text(t.trim(e.issue)), n.mobile.countDownInit(), n.mobile.issue = e.issue, s.html("\u622a\u6b62\u65f6\u95f4\uff1a" + e.etstr), o.val("\u5927\u4e50\u900f\u7b2c{issue}\u671f".replace(/{issue}/i, n.mobile.issue)), n.string.getUrlParam("dest") && n.mobile.Callbacks())
        })
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
        r = t.map(t("#mycart").find("li"),
        function(e) {
            return t(e).attr("code")
        }).join(";");
        if (!t("#agree").prop("checked")) return n.lottery.alert("\u8bf7\u5148\u9605\u8bfb\u5e76\u540c\u610f\u300a\u8d2d\u5f69\u534f\u8bae\u300b\uff01"),
        !1;
        if (!/^\d{7}$/g.test(n.mobile.issue)) //return n.lottery.alert("\u671f\u53f7\u4fe1\u606f\u6709\u8bef\uff01"),
        !1;
        if (!r) return n.lottery.alert("\u8bf7\u5148\u8fdb\u884c\u9009\u53f7\uff01"),
        !1;
		if(document.getElementById("mycart").innerHTML==""){n.lottery.alert("\u8bf7\u5148\u8fdb\u884c\u9009\u53f7"),!1;return;}
		var tk1=document.getElementById("k1").className,tk2=document.getElementById("k2").className,tk3=document.getElementById("k3").className,qihao=$("#showid").html(),
		zhusu=localStorage["storage120029mul"],wanfa1="\u5927\u4e50\u900f",qihao3=qihao,zhuijiatz="";
			if(tk1=="infolist")
			{
				var beisu=document.getElementById("ownMul").value,sum=document.getElementById("ownMoney").innerHTML,tjurl="../Include/Ajax_ZG_D.asp";
				if(document.getElementById("ZG").className=="appends") zhuijiatz="0";else zhuijiatz="1";
			}
			else if(tk2=="infolist")
			{
				    var beisu=document.getElementById("coopMul").value,rengou=document.getElementById("meRG").value,baodi=document.getElementById("meBD").value,
					isgk=document.getElementById("ispublic").value,ticheng=document.getElementById("royalty").value,sum=document.getElementById("coopMoney").innerHTML,
					zhifu=document.getElementById("tsum").innerHTML,tjurl="../Include/Ajax_HM_D.asp";
					if(document.getElementById("ZG").className=="appends") zhuijiatz="0";else zhuijiatz="1";
			}
			else    
			{
				var beisu=document.getElementById("apMul").value,sum=document.getElementById("apMoney").innerHTML,tjurl="../Include/Ajax_ZG_D.asp",qisu2=beisu,showbeisu=beisu,
				qisu=$("#apNum").val(),qihao2=Number(qihao);for(var i=1;i<qisu;i++) qisu2=qisu2+","+beisu;for(var j=1;j<qisu;j++){qihao2++;qihao3=qihao3+","+qihao2;}qihao=qihao3;
				beisu=qisu2;if(document.getElementById("ZG").className=="appends") zhuijiatz="0";else zhuijiatz="1";
				var qihaofw=qihao.split(","),qihaofw1=qihaofw[0]+"..."+qihaofw[qisu-1];sum=Number(sum)/Number(qisu)
			}
		if(localStorage["storage120029"]&&localStorage["storage120029mul"])
		{
					var k1=localStorage['storage120029'].split(";"),codes="",kcode=kcode1=kcode2="";
						for(var i=0;i<k1.length;i++)
						{
							var k2=k1[i].split("|");
							for(var j=0;j<k2.length;j++)
							{
								if(j==1)
								{
									var k3=k2[j].split("+");
									for(var a=0;a<k3.length;a++)
									{
										var k4=k3[a].split(" ");
										if(a==0){ if(k4.length<6){wfname="\u5355\u5f0f";var wanfa="[102]";} else{ var wanfa="[101]";wfname="\u590d\u5f0f";}var kcode1=k4;}	
										if(a==1){ if(k4.length>2){wfname="\u590d\u5f0f";var wanfa="[101]";}var kcode2="|"+k4}	
									}
									if(kcode!="") kcode=kcode+"$"+"["+wfname+"]"+kcode1+kcode2; else kcode=kcode+"["+wfname+"]"+kcode1+kcode2;
								}
							}
						}
					var tcodes=kcode.split("$");
					if(tcodes.length>1)tcodes[0]=tcodes[0]+"...";
					if(tk2=="infolist")
					{
						 n.lightBox.alert({
						content: "<p>\u8bf7\u4f60\u786e\u8ba4\u6295\u6ce8\u4fe1\u606f\u002c\u4e00\u65e6\u63d0\u4ea4\u5c06\u65e0\u6cd5\u66f4\u6539:</p><p>\u73a9\u6cd5:"+wanfa1+"</p><p>\u8ffd\u5956\u53f7\u7801:"+tcodes[0]+"</p><p>\u6ce8\u6570:"+zhusu+"</p><p>\u500d\u6570:"+beisu+"</p><p>\u671f\u53f7:"+qihao+"</p><p>\u6295\u6ce8\u91d1\u989d:"+sum+"</p><p>\u76c8\u5229\u63d0\u6210"+ticheng+"</p><p>\u6211\u8981\u8ba4\u8d2d:"+rengou+"</p><p>\u6211\u8981\u4fdd\u5e95:"+baodi+"</p><p>\u662f\u5426\u516c\u5f00:"+isgk+"</p><p>\u60a8\u9700\u8981\u652f\u4ed8:"+zhifu+"</p><p>\u662f\u5426\u8ffd\u52a0\u6295\u6ce8:"+zhuijiatz+"</p>",
						confirmFn: function()
						 {
							this.close();ttpanduan();
						 }})
					}
					else if(tk1=="infolist")
					{	
					    n.lightBox.alert({
						content: "<p>\u8bf7\u4f60\u786e\u8ba4\u6295\u6ce8\u4fe1\u606f\u002c\u4e00\u65e6\u63d0\u4ea4\u5c06\u65e0\u6cd5\u66f4\u6539:</p><p>\u73a9\u6cd5:"+wanfa1+"</p><p>\u8ffd\u5956\u53f7\u7801:"+tcodes[0]+"</p><p>\u6ce8\u6570:"+zhusu+"</p><p>\u500d\u6570:"+beisu+"</p><p>\u671f\u53f7:"+qihao+"</p><p>\u6295\u6ce8\u91d1\u989d:"+sum+"</p><p>\u662f\u5426\u8ffd\u52a0\u6295\u6ce8:"+zhuijiatz+"</p>",
						confirmFn: function()
						 {
							this.close();ttpanduan();
						 }})		
					}
					else
					{		
					 	n.lightBox.alert({
						content: "<p>\u8bf7\u4f60\u786e\u8ba4\u6295\u6ce8\u4fe1\u606f\u002c\u4e00\u65e6\u63d0\u4ea4\u5c06\u65e0\u6cd5\u66f4\u6539:</p><p>\u73a9\u6cd5:"+wanfa1+"</p><p>\u8ffd\u5956\u53f7\u7801:"+tcodes[0]+"</p><p>\u6ce8\u6570:"+zhusu+"</p><p>\u500d\u6570:"+showbeisu+"</p><p>\u671f\u53f7:"+qihaofw1+"</p><p>\u6295\u6ce8\u91d1\u989d:"+sum*qisu+"</p><p>\u671f\u6570:"+qisu+"</p><p>\u662f\u5426\u8ffd\u52a0\u6295\u6ce8:"+zhuijiatz+"</p>",
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
				}
				return;
		}
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
                PTitle: t.trim(t("#title").val()) || "\u5927\u4e50\u900f\u7b2c" + n.mobile.issue + "\u671f",
                PMemo: t.trim(t("#content").val()) || "\u8fd9\u4e2a\u5bb6\u4f19\u5f88\u61d2\uff0c\u53ea\u60f3\u4e2d\u5927\u5956"
            }
        } else {
            var d = t("#ownCount").text(),
            v = t("#apMul").val(),
            m = t("#apNum").val(),
            u = t("#apMoney").text(),
            g = t("#stopbuy").prop("checked") ? t("#stopbuyMoney").val() : "999999999";
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