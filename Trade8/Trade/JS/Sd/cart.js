var caizhong="\u798f\u5f69\u0033\u0044",gp=0;
function panduan()
{
	var tk1=document.getElementById("k1").className,tk2=document.getElementById("k2").className,tk3=document.getElementById("k3").className,qihao=$("#showid").html(),
		zhusu=localStorage["storage210053mul"],wanfa1="\u798f\u5f69\u0033\u0044",tqihao2=qihao,wfname="",wfname1="";
			if(tk1=="on")  //投注
			{
				var beisu=document.getElementById("ownMul").value,sum=document.getElementById("ownMoney").innerHTML,tjurl="/Trade/Include/Ajax_ZG_D.asp";
			}
			else if(tk2=="on") //合玩
			{
				    var beisu=document.getElementById("coopMul").value,
					rengou=document.getElementById("meRG").value,
					baodi=document.getElementById("meBD").value,
					isgk=document.getElementById("ispublic").value,
					ticheng=document.getElementById("royalty").value,
					sum=document.getElementById("coopMoney").innerHTML,
					zhifu=$("#price").html(),tjurl="/Trade/Include/Ajax_HM_D.asp";
			}
			else        //追号
			{
				var beisu=document.getElementById("apMul").value,sum=document.getElementById("apMoney").innerHTML,qisu=$("#apNum").val(),qisu2=beisu,tjurl="/Trade/Include/Ajax_ZG_D.asp",
				showbeisu=beisu,tzzhongjiang=document.getElementById("stopbuy").checked;if(tzzhongjiang) var tzzhongjiang1=1;else var tzzhongjiang1=0;
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
			if(localStorage["storage210053"]&&localStorage["storage210053mul"])
					{
						var k1=localStorage['storage210053'].split(";"),codes="";
						for(var j=0;j<k1.length;j++)
						{
							var k2=k1[j].split("|");
							for(var i=0;i<k2.length;i++)
							{
								if(i==0){switch(k2[0])
								{
									case "Z1":
										{
											if(Number(k2[1])>1){wanfa="[101]";wfname="\u76f4\u9009\u590d\u5f0f";}else{wanfa="[102]";wfname="\u76f4\u9009\u5355\u5f0f";} 
											break;
										}
									case "Z6":
										{
											if(Number(k2[1])>1){wanfa="[201]";wfname="\u7ec4\u516d\u590d\u5f0f";}else{wanfa="[204]";wfname="\u7ec4\u516d\u5355\u5f0f";} 
											break;
										}
									case "Z3":
										{
											if(Number(k2[1])>1){wanfa="[301]";wfname="\u7ec4\u4e09\u590d\u5f0f";}else{wanfa="[304]";wfname="\u7ec4\u4e09\u5355\u5f0f";} 
											break;
										}
									case "HS":
										{
											wanfa="[103]";wfname="\u76f4\u9009\u548c\u503c";
											break;
										}
							    }}
							 if(i==2){if(codes=="") codes=codes+k2[i]; else codes=codes+"$"+k2[i];}
					       }
						 if(wfname!=""&&wfname!=wfname1&&wfname1!="") wfname=wfname.replace("\u590d\u5f0f","").replace("\u5355\u5f0f","")+"\u590d\u5f0f";//wfname="\u6df7\u6295";
							wfname1=wfname;
					}	
					codes=codes.replace(/\,/g,"|")
				if(baodi<1&&baodi=="")
					var isbaodi=0; else var isbaodi=1;
				$.ajax({
							url:tjurl,
							type:"POST",
							dataType:"xml",
							data:{
								caizhongdm:"SD",
								protype:escape(wanfa1), 
								wfname:escape(wfname),                                                                 
								allmoney:sum,                                  
								codes:codes, 
								isbaodi:isbaodi,                                    
								ZjCut:0,                                    
								beishulistsuc:beisu,                            
								expectlistsuc:qihao,                                 
								single_zs:$("#coopCount").html(), 
								BuyJF:"0",                   
								single_m:"",                  
								buyCount:rengou,
								baodiCount:baodi,
								tc_money:ticheng, 
								escstr:localStorage["storage210053"],                
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
				if(localStorage["storage210053"]&&localStorage["storage210053mul"]){localStorage.removeItem("storage210053");localStorage.removeItem("storage210053mul");}
							document.getElementById("mycart").innerHTML="<li class='nocode'>\u60a8\u8fd8\u6ca1\u6709\u9009\u62e9\u4efb\u4f55\u53f7\u7801\uff01</li>";
							$("#ownMul").val("1");$("#ownCount").html("0");$("#ownMoney").html("0");$("#coopMul").val("1");$("#coopCount").html("0");$("#coopMoney").html("0");
					$("#meRG").val("0");$("#meBD").val("0");$("#price").html("0");$("#buyprice").html("0");$("#baoprice").html("0");$("#apMul").val("1");$("#apNum").val("10");
					$("#apMoney").html("0");$("#maxBD").html("0");$("#royalty").val(0);$("#ispublic").val(0);
									}
							}});
					}
}
(function(e) {
    var t = e.$,
    n = e.kureicp;
    n.mobile.lotType = n.lottery.lotType.sd,
    n.mobile.price = n.lottery.price,
    n.mobile.maxMoney = n.lottery.maxMoney,
    n.mobile.buyPercent = "0.05",
    n.mobile.baodiPerc = 0,
    n.mobile.title = {
        Z1: "\u76f4\u9009",
        F3: "\u7ec4\u4e09\u5305\u53f7",
        F6: "\u7ec4\u516d\u5305\u53f7",
        Z3: "\u7ec4\u4e09",
        Z6: "\u7ec4\u516d",
        TX: "\u901a\u9009",
        HS: "\u548c\u6570",
        B3: "\u5305\u9009\u4e09",
        B6: "\u5305\u9009\u516d",
        "1D": "1D",
        C1: "\u731c1D",
        "2D": "2D",
        C2: "\u731c2D",
        DX: "\u5927\u5c0f",
        DX: "\u5927\u5c0f",
        JO: "\u5947\u5076",
        JO: "\u5947\u5076",
        TL: "\u62d6\u62c9\u673a",
        "3T": "\u4e09\u540c\u53f7"
    },
    n.mobile.callbacks = function() {
        t("#pay_buy").trigger("click")
    },
    n.mobile.countDownInit = function(e, r) {
        var i = t(".xq-tit"),
        s = i.attr("issale") * 1,
        e = i.attr("endtime"),
        o = t("#pay_buy"),
        u = t("#countdowm"),
        a = t("#sourceUrl"),
        f = n.string.getUrlParam("pt").toUpperCase() || "Z1";
        s ? n.mobile.getServerTimes(function(t) {
            if (t * 1 > 0) {
                var n = e * 1 - t * 1;
                n <= 0 && (u.html("\u672c\u671f\u5df2\u622a\u6b62"), o.prop("disabled", !0).addClass("btnoff").text("\u7b49\u5f85\u5f00\u5956"))
            }
        }) : (u.html("\u6682\u505c\u9500\u552e"), o.prop("disabled", !0).addClass("btnoff").text("\u6682\u505c\u9500\u552e")),
        i.attr("pt", f),
        a.attr("href", "./index.asp?pt=" + f)
    },
    n.mobile.codeViewInit = function() {
        var e = n.string.filterScript(n.string.getUrlParam("luck")),
        r = /^Z1\|1\|(\d\,){2}\d$/g;
        e && r.test(e) && (n.localstorage.setItem(n.mobile.storageName, e), n.localstorage.setItem(n.mobile.storageMulName, 1));
        var i = +n.localstorage.getItem(n.mobile.storageMulName),
        s = n.localstorage.getItem(n.mobile.storageName).split(";"),
        o = [],
        u = s.length,
        a = t("#mycart");
        if (i) {
            for (var f = 0; f < u; f++) {
                var l = s[f].split("|"),
                c = l[2],
                h = l[1],
                p = l[0],
                d = h > 1 ? "\u590d\u5f0f": "\u5355\u5f0f",
                v;
                v = c,
                p == "DX" && (v = c == 1 ? "\u5927": "\u5c0f"),
                p == "JO" && (v = c == 1 ? "\u5947": "\u5076"),
                p == "3T" && (v = "\u4e09\u540c\u53f7"),
                p == "TL" && (v = "\u62d6\u62c9\u673a"),
                o.push("<li pt=" + p + " code=" + c + " count=" + h + '><a href="javascript:;" class="cp-cls">X</a>' + n.mobile.title[p] + d + '\uff1a<strong class="red">' + v + "</strong></li>")
            }
            a.html(o.join(""))
        } else a.html('<li class="nocode">\u60a8\u8fd8\u6ca1\u6709\u9009\u62e9\u4efb\u4f55\u53f7\u7801\uff01</li>');
        n.mobile.count()
    },
    n.mobile.codeConfInit = function() {
        t("#mycart").on(n.lottery.tap, ".cp-cls",
        function() {
            var e = t(".xq-tit").attr("pt"),
            r = t(this).parent(),
            i = r.attr("code"),
            s = +r.attr("count"),
            o = r.attr("pt"),
            u,
            a = t("#mycart");
            u = (n.localstorage.getItem(n.mobile.storageName) + ";").replace(o + "|" + s + "|" + i + ";", "").replace(/^;|;$/g, ""),
            n.localstorage.setItem(n.mobile.storageName, u),
            n.localstorage.setItem(n.mobile.storageMulName, n.localstorage.getItem(n.mobile.storageMulName) - s),
            r.remove(),
            a.find("li").length || a.html('<li class="nocode">\u60a8\u8fd8\u6ca1\u6709\u9009\u62e9\u4efb\u4f55\u53f7\u7801\uff01</li>'),
            n.mobile.count()
        }),
        t("#tools").on(n.lottery.tap, ".btn2",
        function() {
            var e = t(this).attr("act"),
            r = 1,
            i = t("#mycart"),
            s = i.find(".nocode"),
            o = t(".xq-tit").attr("pt"),
            u,
            a,
            f,
            l = "",
            c,
            h = 1,
            p,
            d,
            v,
            m,
            g = '<li pt="{pt}" code="{code}" count="{count}"><a href="javascript:;" class="cp-cls">X</a>{name}\uff1a<strong class="red">{red}</strong></li>';
            if (/rnd\d{1}/.test(e)) {
                r = e.replace(/rnd(\d{1})/, "$1") * 1,
                s.length === 1 && s.remove();
                for (var y = 0; y < r; y++) {
                    switch (o) {
                    case "TX":
                    case "Z1":
                        c = n.number.random({
                            min: 0,
                            max: 9,
                            size: 3,
                            repeat: 1,
                            sort: 0
                        })[0].join(","),
                        m = c;
                        break;
                    case "HS":
                        c = +n.number.random({
                            min: 0,
                            max: 27,
                            size: 1,
                            repeat: 1,
                            sort: 0
                        })[0][0],
                        m = c;
                        break;
                    case "B3":
                        p = n.number.eachCombo(n.number.random({
                            min: 0,
                            max: 9,
                            size: 2,
                            repeat: 0,
                            sort: 0
                        })[0], 2),
                        d = Math.floor(Math.random() * 2),
                        c = p[0][0] + "," + p[0][d] + "," + p[0][1],
                        m = c;
                        break;
                    case "C1":
                        c = +n.number.random({
                            min: 0,
                            max: 9,
                            size: 1,
                            repeat: 1,
                            sort: 0
                        })[0][0],
                        m = c;
                        break;
                    case "C2":
                        p = n.number.random({
                            min: 0,
                            max: 9,
                            size: 2,
                            repeat: 1,
                            sort: 0
                        })[0],
                        d = Math.floor(Math.random() * 2),
                        d == 0 ? c = p[0] + "" + p[0] : c = p[0] + "" + p[1],
                        m = c;
                        break;
                    case "B6":
                        c = n.number.random({
                            min: 0,
                            max: 9,
                            size: 3,
                            repeat: 0,
                            sort: 0
                        })[0].join(","),
                        m = c;
                        break;
                    case "1D":
                        p = +n.number.random({
                            min: 0,
                            max: 9,
                            size: 1,
                            repeat: 0,
                            sort: 0
                        })[0][0],
                        d = Math.floor(Math.random() * 3),
                        d == 0 ? c = p + ",-,-": d == 1 ? c = "-," + p + ",-": c = ",-,-" + p,
                        m = c;
                        break;
                    case "2D":
                        p = n.number.random({
                            min: 0,
                            max: 9,
                            size: 2,
                            repeat: 0,
                            sort: 0
                        })[0],
                        d = Math.floor(Math.random() * 3),
                        d == 0 ? c = p[0] + "," + p[1] + ",-": d == 1 ? c = "-," + p[0] + "," + p[1] : c = p[0] + ",-," + p[1],
                        m = c;
                        break;
                    case "F3":
                        p = n.number.eachCombo(n.number.random({
                            min: 0,
                            max: 9,
                            size: 2,
                            repeat: 0,
                            sort: 0
                        })[0], 2),
                        o = "Z3",
                        c = p[0][0] + "," + p[0][1] + "," + p[0][1],
                        m = c;
                        break;
                    case "F6":
                        o = "Z6",
                        c = n.number.random({
                            min: 0,
                            max: 9,
                            size: 3,
                            repeat: 0,
                            sort: 1
                        })[0].join(","),
                        m = c;
                        break;
                    case "DXJO":
                        p = Math.floor(Math.random() * 4),
                        d = ["DX", "DX", "JO", "JO"],
                        v = [1, 0, 1, 0],
                        o = d[p],
                        c = v[p],
                        o == "DX" && (m = v[p] == 1 ? "\u5927": "\u5c0f"),
                        o == "JO" && (m = v[p] == 1 ? "\u5947": "\u5076");
                        break;
                    case "3T":
                        m = "\u4e09\u540c\u53f7",
                        c = "***";
                        break;
                    case "TL":
                        m = "\u62d6\u62c9\u673a",
                        c = "***"
                    }
                    f = o + "|" + h + "|" + c,
                    l += g.replace("{pt}", o).replace("{code}", c).replace("{count}", h).replace("{name}", n.mobile.title[o] + "\u5355\u5f0f").replace("{red}", m),
                    n.localstorage.setItem(n.mobile.storageName, (n.localstorage.getItem(n.mobile.storageName) + ";" + f).replace(/^;|;$/g, "")),
                    n.localstorage.setItem(n.mobile.storageMulName, ("0" + n.localstorage.getItem(n.mobile.storageMulName)) * 1 + h)
                }
                i.append(l)
            } else i.html('<li class="nocode">\u60a8\u8fd8\u6ca1\u6709\u9009\u62e9\u4efb\u4f55\u53f7\u7801\uff01</li>'),
            n.localstorage.removeItem(n.mobile.storageMulName),
            n.localstorage.removeItem(n.mobile.storageName),
            t("#meBD").val(0),
            t(".mycoop").find("strong").eq(2).text(0);
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
                s = i == "title" ? "\u798f\u5f693D\u7b2c" + n.mobile.issue + "\u671f": "\u8fd9\u4e2a\u5bb6\u4f19\u5f88\u61d2\uff0c\u53ea\u60f3\u4e2d\u5927\u5956";
                r == s && e.val("")
            },
            blur: function() {
                var e = t(this),
                r = t.trim(e.val()),
                i = e.attr("id"),
                s = i == "title" ? "\u798f\u5f693D\u7b2c" + n.mobile.issue + "\u671f": "\u8fd9\u4e2a\u5bb6\u4f19\u5f88\u61d2\uff0c\u53ea\u60f3\u4e2d\u5927\u5956";
                r || e.val(s)
            }
        }),
        t("#meRG").on({
            keyup: function() {
                var e = t("#coopMoney").text() * 1;
                n.mobile.minRGcheck(t(this), e)
            },
            blur: function() {
                var e = t("#coopMoney").text() * 1,
                r = t(this);
                n.mobile.minRGcheck(r, e),
                r.val() / e < n.mobile.buyPercent && r.val(Math.ceil(e * n.mobile.buyPercent)),
                t("#maxBD").html(e - r.val() * 1),
                t("#meBD").val() * 1 + r.val() * 1 >= e && (t("#meBD").val(e - r.val() * 1), e - r.val() < 1 ? t("#baodibl").html("") : t("#baodibl").html("(\u7ea6" + (100 - parseInt(r.val() * 100 / e, 10)) + "%)")),
                t("#price").text(t("#meBD").val() * 1 + r.val() * 1),
                t("#buyprice").text(r.val()),
                t("#baoprice").text(t("#meBD").val())
            }
        }),
        t("#meBD").on({
            keyup: function() {
                var e = t("#coopMoney").text() * 1,
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
                var e, n = t("#coopMoney").text() * 1,
                r = t(this),
                i;
                if (n < 2) {
                    r.val(0);
                    return
                }
                r.val(r.val().replace(/[^\d]|^0/g, "")),
                r.val() == "" && r.val(0),
                r.val() * 1 > n - t("#meRG").val() * 1 && r.val(n - t("#meRG").val() * 1),
                t("#price").text(t("#meRG").val() * 1 + r.val() * 1),
                t("#buyprice").text(t("#meRG").val()),
                t("#baoprice").text(r.val()),
                r.val() * 1 < 1 ? t("#baodibl").html("") : (n == t("#meRG").val() * 1 + r.val() * 1 ? i = Math.ceil(r.val() * 100 / n) : i = parseInt(r.val() * 100 / n, 10), t("#baodibl").html("(\u7ea6" + i + "%)"))
            }
        }),
        t("#royalty").on("change",
        function() {
            var e = t(this),
            r = e.val(),
            i = parseInt(r * 100),
            s = t("#percent");
            i > 5 ? (n.mobile.buyPercent = r, s.text(i)) : (n.mobile.buyPercent = "0.05", s.text(5)),
            n.mobile.count("bd")
        })
    },
    n.mobile.count = function(e) {
        var r, i, s, o = t("#ownMul").val() * 1,
        u = t("#coopMul").val() * 1,
        a = t("#apMul").val() * 1,
        f = t("#apNum").val() * 1,
        l = ("0" + n.localstorage.getItem(n.mobile.storageMulName)) * 1 || 0;
        t("#ownCount,#coopCount").text(l),
        r = l * n.mobile.price * o,
        i = l * n.mobile.price * u,
        s = l * n.mobile.price * a * f;
        var c = Math.ceil(i * n.mobile.buyPercent);
        t("#ownMoney").text(r),
        t("#coopMoney").text(i),
        t("#apMoney").text(s),
        t("#buyprice").text(c),
        t("#meRG").val(c),
        t("#maxBD").text(i - c),        
        e && (t("#meBD").val(i-c), t("#baodibl").html(""), t("#baoprice").text(t("#meBD").val())),t("#price").text(parseInt(t("#meBD").val())+parseInt(t("#buyprice").text()))
    },
    n.mobile.AsynDownData = function() {
        var e, r = t("#title");
        t.getJSON("#" + Math.random(),///int/sdcart/?r=
        function(e) {
            t(".xq-tit").attr({
                issue: e.issue,
                issale: e.IsOpen,
                endtime: e.EndTime * 1 - e.DsTimeSpace * 1
            }),
            t("#actQH").text(t.trim(e.issue)),
            n.mobile.issue = t.trim(e.issue),
            t("#countdowm").html("\u622a\u6b62\u65f6\u95f4\uff1a" + e.etstr),
            n.mobile.countDownInit(),
            r.val("\u798f\u5f693D\u7b2c{issue}\u671f".replace(/{issue}/i, n.mobile.issue)),
            n.string.getUrlParam("dest") && n.mobile.callbacks()
        })
    },
    n.mobile.uiInit = function() {
        t(".xq-nav a").on(n.lottery.tap,
        function() {
            t(this).addClass("on").siblings("a").removeClass("on"),
            t(".infolist").hide();
            var e = t(this).attr("buy") * 1;
            t(".infolist").eq(e).show()
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
                    n.lottery.alert("\u8bf7\u5148\u8fdb\u884c\u9009\u53f7\uff01");
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
        var e = t(".xq-nav").find(".on").attr("buy") * 1,
        r = "";
        t("#mycart").find("li").each(function() {
            var e, i = t(this).attr("code"),
            s = t(this).attr("pt");
            if (/\$+/.test(i)) {
                var o = i.split("$"),
                u = o[0].split(""),
                a = o[1].split("");
                if (s == "F3") for (var f = 0; f < a.length; f++) r += "Z3|" + u[0] + "," + a[f] + "," + a[f] + ";" + "Z3" + "|" + u[0] + "," + u[0] + "," + a[f] + ";";
                else if (s == "F6") {
                    var l = n.number.eachCombo(a, 3 - u.length);
                    for (var f = 0; f < l.length; f++) r += "Z6|" + u.join(",") + "," + l[f].join(",") + ";"
                }
            } else if (s == "F3") {
                e = n.number.eachCombo(i.split(""), 2);
                for (var f = 0; f < e.length; f++) r += "Z3|" + e[f][0] + "," + e[f][1] + "," + e[f][1] + ";" + "Z3" + "|" + e[f][0] + "," + e[f][0] + "," + e[f][1] + ";"
            } else if (s == "F6") {
                e = n.number.eachCombo(i.split(""), 3);
                for (var f = 0; f < e.length; f++) r += "Z6|" + e[f].join(",") + ";"
            } else r += s + "|" + i + ";"
        }),
        r = r.replace(/^;|;$/g, "");
        if (!t("#agree").prop("checked")) return n.lottery.alert("\u8bf7\u5148\u9605\u8bfb\u5e76\u540c\u610f\u300a\u8d2d\u5f69\u534f\u8bae\u300b\uff01"),
        !1;
        if (!r) return n.lottery.alert("\u8bf7\u5148\u8fdb\u884c\u9009\u53f7\uff01"),
        !1;
		if(document.getElementById("mycart").innerHTML==""){n.lottery.alert("\u8bf7\u5148\u8fdb\u884c\u9009\u53f7"),!1;return;}
		

		
		
		
		var tk1=document.getElementById("k1").className,tk2=document.getElementById("k2").className,tk3=document.getElementById("k3").className,qihao=$("#showid").html(),
		zhusu=localStorage["storage210053mul"],wanfa1="\u798f\u5f69\u0033\u0044",tqihao2=qihao;
			if(tk1=="on")  //投注
			{
				var beisu=document.getElementById("ownMul").value,sum=document.getElementById("ownMoney").innerHTML,tjurl="../Include/Ajax_ZG_D.asp";
			}
			else if(tk2=="on") //合玩
			{
				    var beisu=document.getElementById("coopMul").value,
					rengou=document.getElementById("meRG").value,
					baodi=document.getElementById("meBD").value,
					isgk=document.getElementById("ispublic").value,
					ticheng=document.getElementById("royalty").value,
					sum=document.getElementById("coopMoney").innerHTML,
					zhifu=$("#price").html(),tjurl="../Include/Ajax_HM_D.asp";
			}
			else        //追号
			{
				var beisu=document.getElementById("apMul").value,sum=document.getElementById("apMoney").innerHTML,qisu=$("#apNum").val(),qisu2=beisu,tjurl="../Include/Ajax_ZG_D.asp",
				showbeisu=beisu,tzzhongjiang=document.getElementById("stopbuy").checked;if(tzzhongjiang) var tzzhongjiang1=1;else var tzzhongjiang1=0;
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
			if(localStorage["storage210053"]&&localStorage["storage210053mul"])
					{
						var k1=localStorage['storage210053'].split(";"),codes="";
						for(var j=0;j<k1.length;j++)
						{
							var k2=k1[j].split("|");
							for(var i=0;i<k2.length;i++)
							{
								if(i==0){switch(k2[0])
								{
									case "Z1":
										{
											if(Number(k2[1])>1){wanfa="[101]";wfname="\u76f4\u9009\u590d\u5f0f";}else{wanfa="[102]";wfname="\u76f4\u9009\u5355\u5f0f";} 
											break;
										}
									case "Z6":
										{
											if(Number(k2[1])>1){wanfa="[201]";wfname="\u7ec4\u516d\u590d\u5f0f";}else{wanfa="[204]";wfname="\u7ec4\u516d\u5355\u5f0f";} 
											break;
										}
									case "Z3":
										{
											if(Number(k2[1])>1){wanfa="[301]";wfname="\u7ec4\u4e09\u590d\u5f0f";}else{wanfa="[304]";wfname="\u7ec4\u4e09\u5355\u5f0f";} 
											break;
										}
									case "HS":
										{
											wanfa="[103]";wfname="\u76f4\u9009\u548c\u503c";
											break;
										}
							    }}
							 if(i==2){if(codes=="") codes=codes+"["+wfname+"]"+k2[i]; else codes=codes+"$"+"["+wfname+"]"+k2[i];}
					       }
					}	
					var tcodes=codes.split("$");
					if(tcodes.length>1)tcodes[0]=tcodes[0]+"..."+tcodes[tcodes.length-1];
					if(tk2=="on")
					{
					 	n.lightBox.alert({
						content: "<p>\u8bf7\u4f60\u786e\u8ba4\u6295\u6ce8\u4fe1\u606f\u002c\u4e00\u65e6\u63d0\u4ea4\u5c06\u65e0\u6cd5\u66f4\u6539:</P><P>\u73a9\u6cd5:"+wanfa1+"</P><P>\u8ffd\u5956\u53f7\u7801:"+tcodes[0]+"</P><P>\u6ce8\u6570:"+zhusu+"</P><P>\u500d\u6570:"+beisu+"</P><P>\u671f\u53f7:"+qihao+"</P><P>\u6295\u6ce8\u91d1\u989d:"+sum+"</P><P>\u76c8\u5229\u63d0\u6210"+ticheng+"</P><P>\u6211\u8981\u8ba4\u8d2d:"+rengou+"</P><P>\u6211\u8981\u4fdd\u5e95:"+baodi+"</P><P>\u662f\u5426\u516c\u5f00:"+isgk+"</P><P>\u60a8\u9700\u8981\u652f\u4ed8:"+zhifu+"</p>",
						confirmFn: function()
						 {
							this.close();ttpanduan();
						 }})
					}
					else if(tk1=="on")
					{			
						n.lightBox.alert({
                        content: "<p>\u8bf7\u4f60\u4ed4\u7ec6\u786e\u8ba4\u6295\u6ce8\u4fe1\u606f\u002c\u4e00\u65e6\u63d0\u4ea4\u5c06\u65e0\u6cd5\u66f4\u6539:</p><p>\u73a9\u6cd5:"+wanfa1+"</p><p>\u8ffd\u5956\u53f7\u7801:"+tcodes[0]+"</p><p>\u6ce8\u6570:"+zhusu+"</p><p>\u500d\u6570:"+beisu+"</p><p>\u671f\u53f7:"+qihao+"</p><p>\u6295\u6ce8\u91d1\u989d:"+sum+"</p>",
                        confirmFn: function()
						 {
							this.close();ttpanduan();
						 }})
					}
					else
					{			
						n.lightBox.alert({
						content: "<p>\u8bf7\u4f60\u4ed4\u7ec6\u786e\u8ba4\u6295\u6ce8\u4fe1\u606f\u002c\u4e00\u65e6\u63d0\u4ea4\u5c06\u65e0\u6cd5\u66f4\u6539:</p><p>\u73a9\u6cd5:"+wanfa1+"</p><p>\u8ffd\u5956\u53f7\u7801:"+tcodes[0]+"</p><p>\u6ce8\u6570:"+zhusu+"</p><p>\u500d\u6570:"+showbeisu+"</p><p>\u671f\u53f7:"+qihaofw1+"</p><p>\u671f\u6570:"+qisu+"</p><p>\u662f\u5426\u4e2d\u5956\u540e\u505c\u6b62\u8ffd\u53f7:"+tzzhongjiang1+"</p><p>\u6295\u6ce8\u91d1\u989d:"+sum*qisu+"</p>",
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
		}
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
                PTitle: t.trim(t("#title").val()) || "\u798f\u5f693D\u7b2c" + n.mobile.issue + "\u671f",
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
            var y = n.mobile.maxMoney / 1e4;
            return n.lottery.alert("\u6295\u6ce8\u91d1\u989d\u4e0d\u80fd\u8d85\u8fc7" + y + "\u4e07\uff01"),
            !1
        }
        for (var b in o) o.hasOwnProperty(b) && (s[b] = o[b]);
        n.lottery.ajaxData(s,
        function() {
            n.mobile.callbacks()
        })
    },
    t(function() {
        n.mobile.storageName = "storage" + n.mobile.lotType,
        n.mobile.storageMulName = "storage" + n.mobile.lotType + "mul",
        n.mobile.AsynDownData(),
        n.mobile.codeViewInit(),
        n.mobile.codeConfInit(),
        n.mobile.uiInit(),
        n.mobile.submitInit()
    })
})(window);