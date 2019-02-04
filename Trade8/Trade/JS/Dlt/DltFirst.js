var caizhong="\u5927\u4e50\u900f",kaijiang="Dlt",qihaoid="slthistory",gp=0;
(function(e) {
    var t = e.$,
    n = e.kureicp;
    n.mobile.lotType = n.lottery.lotType.dlt,
    n.mobile.price = n.lottery.price,
    n.mobile.maxMoney = n.lottery.maxMoney,
    n.mobile.LOT_METHOD = 0,
    n.mobile.LOT_SELECTMAX = 5,
    n.mobile.getchartUrl_dev = n.lottery.APIChart + "/zst/qmchartdata",     //采集走势图
    n.mobile.cart = {
        group: 0,
        code: "",
        count: 0
    },
    n.mobile.cache = {
        chartbefore: 0,
        chartback: 0,
        chartdxjo: 0
    },
    n.mobile.chart = null,
    n.mobile.selectCodeInit = function() {
        var r = t(".pick-box"),
        i = t(".del"),
        s = t(".plays"),
        o = t(".sel-pick"),
        u = t("#reflash"),
        a = t("#navtit"),
        f = t(".pick-info a"),
        l = t(".top-date"),
        c = t(".all"),
        h = t(".btn-num"),
        p = t(".menu-popc"),
        d = t("#addcart"),
        v = t("#bets"),
        m = t(".btn-menu"),
        g = t(".btn-chart"),
        y = t(".helphanle");
        h.on(n.lottery.tap,
        function() {
            var e = t(this),
            n = this.id,
            r = "btn-numon",
            i = /before/.test(n) ? "before": "back",
            s = t("#" + i + "pop");
            e.hasClass(r) ? (e.removeClass(r), s.addClass("none")) : (e.addClass(r), s.removeClass("none"))
        }),
        p.on(n.lottery.tap, "a",
        function() {
            var e = t(this),
            r = e.parent(),
            i = r.attr("id"),
            s = /before/.test(i),
            o = s ? "before": "back",
            u = s ? "q": "h",
            a = e.text() * 1;
            t("#" + o + "pops").find("a").removeClass("on"),
            e.addClass("on"),
            t("#" + o + "ball").text(a),
            t("#" + o + "pop").addClass("none"),
            t("#" + o + "bar").removeClass("btn-numon"),
            n.mobile.getRandmul(a, u)
        }),
        r.on(n.lottery.tap, "span",
        function() {
            var r = t(this),
            i = n.mobile.LOT_METHOD,
            s = "selected";
            r.toggleClass(s);
            if (i === 3) {
                var o = t("#qd"),
                u = t("#qt"),
                a = t("#hd"),
                f = t("#ht"),
                l = r.parent().parent().attr("id"),
                c = t.trim(r.text()) * 1 - 1;
                if (l == "qd") {
                    if (o.find("." + s).length > 4) {
                        r.removeClass(s),
                        e.alert("\u524d\u533a\u80c6\u7801\u6700\u591a\u53ea\u80fd\u90094\u4e2a");
                        return
                    }
                    u.find("span").eq(c).removeClass(s)
                } else l == "qt" ? o.find("span").eq(c).removeClass(s) : l == "hd" ? (a.find("." + s).not(r).removeClass(s), f.find("span").eq(c).removeClass(s)) : l == "ht" && a.find("span").eq(c).removeClass(s)
            }
            n.mobile.count()
        }),
        i.on(n.lottery.tap,
        function() {
            var e = t(this),
            r = e.attr("dir"),
            i = t(".pick-" + r);
            i.find(".selected").removeClass("selected"),
            n.mobile.count()
        }),
        c.on(n.lottery.tap,
        function() {
            var e = t(this),
            r = t.trim(e.text()),
            i = t("#qt").find("span"),
            s = t("#qd").find(".selected");
            if (/(\u9009)/g.test(r)) {
                e.text("\u5168 \u6e05"),
                i.addClass("selected");
                var o = t.map(s,
                function(e) {
                    return t.trim(t(e).text()) * 1 - 1
                });
                for (var u = 0; u < o.length; u++) i.eq(o[u]).removeClass("selected")
            } else e.text("\u5168 \u9009"),
            i.removeClass("selected");
            n.mobile.count()
        }),
        s.on("click",
        function() {
            var e = t(this),
            r = t(".head-arr"),
            i = t(".pop-box2"),
            s = t(".btn-pop"),
            o = e.attr("action") * 1,
            u = t(".pick"),
            a = t("#pdeal").find("p"),
            f = t("#game"),
            l = e.attr("txt"),
            c = "btn-pop-on",
            h = "head-arron",
            p = "none",
            d = "selected",
            v = t("#chartscd"),
            m = t("#myhelp"),
            g = t("#myslt,#mycountdown,#myline"),
            y = t(".pick-b");
            n.mobile.LOT_METHOD = o,
            s.removeClass(c),
            r.removeClass(h),
            i.addClass(p),
            u.addClass(p),
            a.addClass(p),
            v.addClass(p),
            m.addClass(p),
            g.removeClass(p),
            f.text(l),
            o == 0 || o == 1 ? (a.eq(0).removeClass(p), u.eq(1).removeClass(p), o == 0 ? (u.eq(0).removeClass(p), s.eq(3).addClass(c), n.mobile.chart ? n.mobile.chart.reset({
                steps: 0,
                left: 0,
                curIndex: 0
            }) : n.mobile.chart = new t.touchSlider(".in-entry", {
                wrap: ".chart-tab",
                trigger: ".xq-nav-chart",
                hasTouch: !1,
                callback: function() {
                    n.mobile.getCharts()
                }
            }), n.mobile.getCharts(), m.removeClass(p), v.removeClass(p), g.addClass(p)) : s.eq(0).addClass(c)) : (a.eq(o - 1).removeClass(p), s.eq(o - 1).addClass(c), u.eq(o).removeClass(p)),
            o === 2 ? n.mobile.getRandgroup(5) : (t("#pdeal").find("strong").text(0), t(".pick-box").find("." + d).removeClass(d))
        }),
        o.on("change",
        function() {
            var e = t(this).val() * 1;
            n.mobile.getRandgroup(e)
        }),
        u.on(n.lottery.tap,
        function() {
            n.mobile.getRandgroup(o.val() * 1)
        }),
        a.on(n.lottery.tap,
        function() {
            var e = t(".head-arr"),
            r = t(".pop-box2"),
            i = t(".btn-menu"),
            s = "btn-menu-on";
            i.hasClass(s) && i.trigger(n.lottery.tap),
            e.hasClass("head-arron") ? (e.removeClass("head-arron"), r.addClass("none")) : (e.addClass("head-arron"), r.removeClass("none"))
        }),
        l.on(n.lottery.tap,
        function() {
            var e = t("#slthistory").find("p"),
            n = t(".top-arr"),
            r = "top-arr-on";
            n.hasClass(r) ? (n.removeClass(r), e.hide().eq(0).show().parent().css("height", 22)) : (n.addClass(r), e.show().parent().css("height", 110))
        }),
        m.on(n.lottery.tap,
        function() {
            var e = t("#tools"),
            r = t(this),
            i = t(".pop-box2"),
            s = t("#navtit"),
            o = "btn-menu-on",
            u = "none";
            i.hasClass(u) || s.trigger(n.lottery.tap),
            r.hasClass(o) ? (e.addClass(u), r.removeClass(o)) : (e.removeClass(u), r.addClass(o))
        }),
        d.on({
            click: function() {
                n.mobile.pickBall(t(this))
            },
            touchstart: function() {
                t(this).addClass("btn-addnmu-tap")
            },
            touchend: function() {
                t(this).removeClass("btn-addnmu-tap")
            }
        }),
        v.on({
            click: function() {
                var r = n.mobile.cart.group || 0,
                i, s = t(".pick"),
                o;
                n.mobile.LOT_METHOD == 0 || n.mobile.LOT_METHOD == 1 ? (i = 1, o = s.eq(1).find("ul")) : (i = n.mobile.LOT_METHOD, o = s.eq(i - 1).find("ul")),
                !r || o.find(".selected").length > 0 || n.mobile.LOT_METHOD === 2 ? n.mobile.pickBall(t(this)) : e.location.href = "./cart.asp"
            },
            touchstart: function() {
                t(this).addClass("btntap")
            },
            touchend: function() {
                t(this).removeClass("btntap")
            }
        }),
        y.on(n.lottery.tap,
        function() {
            var e = t(this),
            n = "none",
            r = "arr-on",
            i = t("#help-box"),
            s = e.find(".arr");
            i.hasClass(n) ? (s.removeClass(r), i.removeClass(n)) : (s.addClass(r), i.addClass(n))
        }),
        g.on(n.lottery.tap,
        function() {
            s.eq(3).trigger("click")
        });
        var b = n.string.getJsonHash(),
        w = 0;
        if (b.play) {
            switch (b.play) {
            case "chart":
                w = 3;
                break;
            case "dt":
                w = 2;
                break;
            case "rand":
                w = 1;
                break;
            case "hand":
            }
            s.eq(w).trigger("click");
            if (b.play == "chart" && b.sub) {
                var E = null,
                S = b.sub || 0;
                E = setTimeout(function() {
                    var e = t("#chart_tab").find("a").eq(S);
                    e.trigger("click")
                },
                150)
            }
        }
    },
    n.mobile.getCharts = function() {
        var e = t("#chart_tab"),
        r = t(".chart-tab"),
        i = t(".chart-help"),
        s = e.find(".sel").attr("m") * 1 || 0,
        o,
        u = "none",
        a = [572, 603],
        f = t("#fixed5"),
        l = t("#fixed2"),
        c = [32, 64],
        h,
        p,
        d = "title";
        switch (s) {
        case 0:
            o = "qqfqm",
            r.css("height", a[0]),
            f.css("height", c[0]),
            l.removeClass(d),
            i.css("color", "#ba2020"),
            h = "scroll_before",
            p = "chartbefore";
            break;
        case 1:
            o = "hqfbm",
            r.css("height", a[0]),
            f.css("height", c[0]),
            l.removeClass(d),
            i.css("color", "#3172c3"),
            h = "scroll_back",
            p = "chartback";
            break;
        case 2:
            o = "dxjom",
            r.css("height", a[1]),
            f.css("height", c[1]),
            l.addClass(d),
            i.css("color", "#ba2020"),
            h = "scroll_dxjo",
            p = "chartdxjo"
        }
        t("#fix_hd").html(t("#" + h).find("thead").html());
        if (n.mobile.cache[p]) return ! 1;
        t.ajax({
            url: n.mobile.getchartUrl_dev + "?lotId=" + n.mobile.lotType + "&chartType=" + o + "&r=" + t.now(),
            dataType: "jsonp",
            success: function(e) {
                if (e) {
                    switch (s) {
                    case 0:
                        var r = [],
                        i = [],
                        o = e[0].Body,
                        u = e[1].Body;
                        t.each(o,
                        function(e, n) {
                            r.push("<li>" + e.replace(/^(\d{4})(\d{3})$/g, "$2") + "</li>"),
                            i.push("<tr>"),
                            t.each(n,
                            function(e, t) {
                                var n = "",
                                r = t.T * 1,
                                s = t.S;
                                if (r == 2 || r == 3) n = "class = 'pitch'";
                                i.push('<td class="loss"><span ' + n + ">" + s + "</span></td>")
                            });
                            var s = u[e];
                            t.each(s,
                            function(e, t) {
                                var n = "",
                                r = t.S;
                                i.push("<td><span>" + r + "</span></td>")
                            }),
                            i.push("</tr>")
                        }),
                        t("#chart_before_tab").html("<li>\u671f\u53f7</li>" + r.join("")),
                        t("#chart_before").html(i.join(""));
                        break;
                    case 1:
                        var r = [],
                        a = [],
                        o = e[0].Body;
                        t.each(o,
                        function(e, n) {
                            r.push("<li>" + e.replace(/^(\d{4})(\d{3})$/g, "$2") + "</li>"),
                            a.push("<tr>"),
                            t.each(n,
                            function(e, t) {
                                var n = "",
                                r = t.T * 1,
                                i = t.S;
                                if (r == 2 || r == 3) n = "class = 'pitchb'";
                                a.push('<td class="loss"><span ' + n + ">" + i + "</span></td>")
                            }),
                            a.push("</tr>")
                        }),
                        t("#chart_back_tab").html("<li>\u671f\u53f7</li>" + r.join("")),
                        t("#chart_back").html(a.join(""));
                        break;
                    case 2:
                        var r = [],
                        f = [],
                        l = e[0].Body,
                        c = e[1].Body;
                        t.each(l,
                        function(e, t) {
                            f.push("<tr>"),
                            r.push("<li>" + e.replace(/^(\d{4})(\d{3})$/g, "$2") + "</li>");
                            var n = c[e];
                            for (var i = 0; i < t.length; i++) {
                                var s = "loss",
                                o = "",
                                u = t[i].T * 1,
                                a = t[i].S;
                                u == 2 && (s = "greenbg"),
                                i == t.length - 1 && (o = " br2"),
                                f.push("<td class='" + s + o + "'><span>" + a + "</span></td>")
                            }
                            for (var i = 0; i < n.length; i++) {
                                var s = "loss",
                                u = n[i].T * 1,
                                a = n[i].S;
                                u == 2 && (s = "bluebg"),
                                f.push("<td class=" + s + "><span>" + a + "</span></td>")
                            }
                            f.push("</tr>")
                        }),
                        t("#chart_dxjo_tab").html('<li class="title">\u671f\u53f7</li>' + r.join("")),
                        t("#chart_before_dxjom").html(f.join(""))
                    }
                    n.mobile.cache[p] = 1;
                    var d = h.replace("scroll_", "");
                    new iScroll(h, {
                        hScrollbar: !1,
                        vScrollbar: !1,
                        vScroll: !1,
                        onBeforeScrollStart: function(e) {
                            this.absDistX > this.absDistY + 5 && e.preventDefault()
                        },
                        onTouchEnd: function() {
                            var e = this;
                            e.touchEndTimeId && clearTimeout(e.touchEndTimeId),
                            e.touchEndTimeId = setTimeout(function() {
                                e.absDistX = 0,
                                e.absDistY = 0
                            },
                            600)
                        },
                        onRefresh: function() {
                            n.mobile.refreshCharts.call(null, d)
                        },
                        onScrollEnd: function() {
                            n.mobile.refreshCharts.call(null, d)
                        }
                    })
                }
            }
        })
    },
    n.mobile.pickBall = function(r) {
        var i = t("#pdeal").find("strong"),
        s = n.mobile.cart.code || "",
        o,
        u,
        a,
        f = n.mobile.LOT_METHOD,
        l = r.attr("id");
        if (f == 0 || f == 1) {
            var c = t("#q").find(".selected"),
            h = c.length,
            p = t("#h").find(".selected"),
            d = p.length;
            a = i.eq(2).text() * 1;
            if (h < 5) return e.alert("\u8bf7\u81f3\u5c11\u9009\u62e95\u4e2a\u524d\u533a\u53f7\u7801"),
            !1;
            if (d < 2) return e.alert("\u8bf7\u81f3\u5c11\u9009\u62e92\u4e2a\u540e\u533a\u53f7\u7801"),
            !1;
            o = t.map(c,
            function(e) {
                return t.trim(t(e).text())
            }),
            u = t.map(p,
            function(e) {
                return t.trim(t(e).text())
            }),
            s += a + "|" + o.join(" ") + "+" + u.join(" ") + ";",
            n.mobile.cart.group += 1
        } else if (f === 2) {
            var v = t("#mycart").find("li"),
            m,
            g;
            for (var y = 0; y < n.mobile.LOT_SELECTMAX; y++) m = v.eq(y).find(".redball"),
            g = v.eq(y).find(".blueball"),
            o = t.map(m,
            function(e) {
                return t.trim(t(e).text())
            }),
            u = t.map(g,
            function(e) {
                return t.trim(t(e).text())
            }),
            s += "1|" + o.join(" ") + "+" + u.join(" ") + ";",
            n.mobile.cart.group += 1;
            a = i.eq(4).text() * 1
        } else {
            var b = t("#qd").find(".selected"),
            w = t("#qt").find(".selected"),
            E = t("#hd").find(".selected"),
            S = t("#ht").find(".selected");
            a = i.eq(8).text() * 1;
            if (b.length < 1) {
                e.alert("\u524d\u533a\u80c6\u7801\u81f3\u5c11\u90091\u4e2a");
                return
            }
            if (w.length < 1) {
                e.alert("\u524d\u533a\u62d6\u7801\u81f3\u5c11\u90091\u4e2a");
                return
            }
            if (b.length + w.length < 5) {
                e.alert("\u524d\u533a\u80c6\u7801\u52a0\u62d6\u7801\u81f3\u5c115\u4e2a");
                return
            }
            if (S.length < 1) {
                e.alert("\u540e\u533a\u81f3\u5c11\u9009\u62e91\u4e2a\u62d6\u7801");
                return
            }
            if (E.length + S.length < 2) {
                e.alert("\u540e\u533a\u80c6\u7801\u52a0\u62d6\u7801\u81f3\u5c112\u4e2a");
                return
            }
            var x = t.map(b,
            function(e) {
                return t.trim(t(e).text())
            }),
            T = t.map(w,
            function(e) {
                return t.trim(t(e).text())
            }),
            N = t.map(E,
            function(e) {
                return t.trim(t(e).text())
            }),
            C = t.map(S,
            function(e) {
                return t.trim(t(e).text())
            }),
            k = "";
            N.length > 0 && (k = N.join(" ") + "$"),
            s += a + "|" + (x.join(" ") + "$" + T.join(" ")) + "+" + (k + C.join(" ")) + ";",
            n.mobile.cart.group += 1
        }
        n.mobile.cart.code = s,
        n.mobile.cart.count += a;
        var L = n.mobile.cart.code.replace(/;$/g, ""),
        a = n.mobile.cart.count;
        n.localstorage.setItem(n.mobile.storageName, L),
        n.localstorage.setItem(n.mobile.storageMulName, a),
        l == "addcart" ? (t("#group").text(n.mobile.cart.group), n.mobile.clearAll()) : e.location.href = "./cart.asp"
    },
    n.mobile.clearAll = function() {
        var e = n.mobile.LOT_METHOD,
        r = "selected";
        if (e === 2) n.mobile.getRandgroup(n.mobile.LOT_SELECTMAX);
        else {
            var i;
            e == 0 || e == 1 ? i = 1 : i = e - 1,
            t("#pdeal").find("strong").text(0),
            t(".pick").eq(i).find("." + r).removeClass(r),
            e === 3 && t(".all").text("\u5168 \u9009")
        }
    },
    n.mobile.countDownInit = function() {
        var e = t(".xq-tit"),
        r = e.attr("issale") * 1,
        i = e.attr("endtime"),
        s = t(".countdown");
        r ? n.mobile.getServerTimes(function(e) {
            if (e * 1 > 0) {
                var t = i * 1 - e * 1;
                t <= 0 && s.text("\u672c\u671f\u5df2\u622a\u6b62")
            }
        }) : s.text("\u6682\u505c\u9500\u552e")
    },
    n.mobile.AsynDownData = function() {
        var e = "#",//"/int/sltindex",
        r = t(".xq-tit"),
        i = t("#navtit"),
        s = t(".actqh"),
        o = t(".countdown"),
        u = t("#slthistory");
        i.html('\u5927\u4e50\u900f-<cite id="game">\u81ea\u9009</cite><span class="head-arr"><em></em></span>');
        var a = n.localstorage.getItem(n.mobile.storageName),
        f = ("0" + n.localstorage.getItem(n.mobile.storageMulName)) * 1;
        a && (n.mobile.cart.code = a + ";", n.mobile.cart.group = a.split(/;/g).length, n.mobile.cart.count = f),
        t("#group").text(n.mobile.cart.group);
        var l;
        t.getJSON(e + "?r=" + t.now(),
        function(e) {
            if (e) {
                var i = e.info,
                a = e.blist;
                r.attr({
                    issue: i.issue,
                    issale: i.IsOpen,
                    endtime: i.EndTime * 1 - i.DsTimeSpace * 1
                }),
                s.text(t.trim(i.issue)),
                n.mobile.countDownInit(),
                o.text("\u622a\u6b62\u65f6\u95f4\uff1a" + i.etstr);
                var f = [];
                t.each(a,
                function(e, t) {
                    f.push("<p>\u7b2c " + t.issue + ' \u671f\u5f00\u5956\uff1a<strong class="red">' + t.number.split("+")[0] + '</strong> + <strong class="blue">' + t.number.split("+")[1] + "</strong></p>")
                }),
                u.html(f.join(""))
            }
        })
    },
    n.mobile.getRandgroup = function(e) {
        var r = [],
        i,
        s;
        n.mobile.LOT_SELECTMAX = e;
        for (var o = 0; o < e; o++) {
            i = n.number.random({
                min: 1,
                max: 35,
                size: 5,
                repeat: 0,
                sort: 1
            })[0],
            s = n.number.random({
                min: 1,
                max: 12,
                size: 2,
                repeat: 0,
                sort: 1
            })[0],
            r.push("<li>"),
            r.push('<div class="kj-ball">');
            for (var u = 0; u < 5; u++) r.push('<span class="redball">' + i[u] + "</span> ");
            r.push('<span class="blueball">' + s[0] + "</span>" + '<span class="blueball">' + s[1] + "</span>"),
            r.push("</div>"),
            r.push("</li>")
        }
        t("#mycart").html(r.join("")),
        n.mobile.count()
    },
    n.mobile.getRandmul = function(e, r) {
        var i = t("#" + r).find("span"),
        s = [];
        r == "q" ? s = n.number.random({
            min: 1,
            max: 35,
            size: e,
            repeat: 0,
            sort: 1
        })[0] : s = n.number.random({
            min: 1,
            max: 12,
            size: e,
            repeat: 0,
            sort: 1
        })[0],
        t.each(i,
        function(e, n) {
            var r = t.trim(t(n).text()),
            i = t(this);
            t.inArray(r, s) != -1 ? i.addClass("selected") : i.removeClass("selected")
        }),
        n.mobile.count()
    },
    n.mobile.count = function() {
        var e = t("#pdeal").find("strong"),
        r = n.mobile.LOT_METHOD,
        i = n.mobile.price;
        switch (r) {
        case 0:
        case 1:
            var s = t("#q").find(".selected").length,
            o = t("#h").find(".selected").length,
            u = n.number.combo(s, 5) * n.number.combo(o, 2);
            e.eq(0).text(s),
            e.eq(1).text(o),
            e.eq(2).text(u),
            e.eq(3).text(u * i);
            break;
        case 2:
            var a = n.mobile.LOT_SELECTMAX || 5;
            e.eq(4).text(a),
            e.eq(5).text(a * i);
            break;
        case 3:
            var f = t("#qd").find(".selected").length,
            l = t("#qt").find(".selected").length,
            c = t("#hd").find(".selected").length,
            h = t("#ht").find(".selected").length,
            u = n.number.combo(l, 5 - f) * n.number.combo(h, 2 - c);
            e.eq(6).text(f + l),
            e.eq(7).text(c + h),
            e.eq(8).text(u),
            e.eq(9).text(u * i)
        }
    },
	
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
	
	
    n.mobile.shakeInit = function() {
        if (e.DeviceMotionEvent) {
            var n = t(".rocktip");
            n.removeClass("none"),
            e.addEventListener("devicemotion",
            function() {
                t.deviceMotionHandler.apply(null, arguments)
            },
            !1)
        }
    },
    n.mobile.firedeviceShake = function() {
			
        var e = "selected",
        r = "on",
        i = n.number.random({
            min: 1,
            max: 35,
            size: 5,////////////////////////////////////////////////////////////
            repeat: 0,                                                      ///
            sort: 1                                                        ///
        })[0],                                                            ///
        s = t("#q"),                                                     ///控制选号多少
        o = s.find("span"),                                             ///
        u = t("#beforeball"),                                          ///
        a = t("#beforepops").find("a");                               ///
        s.find("." + e).removeClass(e),                              ///
        a.find("." + r).removeClass(r),                             ///
        u.text(5),                                                 ///
        a.eq(0).addClass(r);                                      ///
        for (var f = 0; f < 5; f++) {///////////////////////////////
            var l = i[f] * 1 - 1;
            o.eq(l).addClass(e)
        }
        var c = n.number.random({
            min: 1,
            max: 12,
            size: 2,
            repeat: 0,
            sort: 1
        })[0],
        h = t("#h"),
        p = t("#backball"),
        d = t("#backpops").find("a"),
        v = h.find("span");
        h.find("." + e).removeClass(e),
        d.find("." + r).removeClass(r),
        p.text(2),
        d.eq(0).addClass(r);
        for (var f = 0; f < 2; f++) {
            var l = c[f] * 1 - 1;
            v.eq(l).addClass(e)
        }
        n.mobile.count();				
    },
	
	
	
	
//这里是手机摇一摇功能
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
	
	
	
	
	
	
    n.mobile.refreshCharts = function(e) {		
        var t = document.getElementById("fixed1").style.width,
        n = document.getElementById("fixed_" + e).style.cssText;
        document.getElementById("fixed3").style.cssText = n,
        document.getElementById("fixed4").style.width = t
    },
    n.mobile.chartsBar = function() {
        t(e).on("scroll",
        function() {
            if (n.mobile.LOT_METHOD === 0) {
                var r = e.scrollY,
                i = t("#fixed4"),
                s = 116,
                o = (t(".chart-tab").height() || 572) + s - 15,
                u = "none";
                r > s && r < o ? i.removeClass(u) : i.addClass(u)
            }
        })
    },
    t(function() {
        n.mobile.storageName = "storage" + n.mobile.lotType,
        n.mobile.storageMulName = "storage" + n.mobile.lotType + "mul",
        n.mobile.AsynDownData(),
        n.mobile.selectCodeInit(),
        n.mobile.shakeInit(),
        n.mobile.chartsBar()
    })
})(window);