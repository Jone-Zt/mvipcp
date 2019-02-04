var caizhong="\u53cc\u8272\u7403",kaijiang="Ssq",qihaoid="history",gp=0;
(function(e) {
    var t = e.$,
    n = e.kureicp;
    n.mobile.lotType = n.lottery.lotType.ssq,
    n.mobile.price = n.lottery.price,
    n.mobile.maxMoney = n.lottery.maxMoney,
    n.mobile.LOT_METHOD = 1,
    n.mobile.getchartUrl_dev = n.lottery.APIChart + "/zst/qmchartdata",
    n.mobile.cart = {
        group: 0,
        code: "",
        count: 0
    },
    n.mobile.cache = {
        chartred: 0,
        chartblue: 0,
        chartdxjo: 0
    },
    n.mobile.editor = 0,
    n.mobile.chart = null,
    n.mobile.initPlay = function(e, r) {
        var i = t(".head-arr"),
        s = t(".pop-box2"),
        o = t(".btn-pop"),
        u = e.attr("action") * 1,
        a = t(".pick"),
        f = t("#game"),
        l = t("#chartscd"),
        c = t("#myhelp"),
        h = t("#myssq,#myline"),
        p = t("#clear"),
        d = t("#rndom"),
        v = t(".pick-b"),
        m = e.attr("txt"),
        g = "btn-pop-on",
        y = "head-arron",
        b = "none",
        w = "selected";
        o.removeClass(g),
        i.removeClass(y),
        s.addClass(b),
        a.addClass(b),
        l.addClass(b),
        c.addClass(b),
        h.removeClass(b),
        n.mobile.LOT_METHOD = u;
        if (/[01]/.test(u)) {
            a.eq(1).removeClass(b);
            if (u == 0) {
                a.eq(0).removeClass(b),
                o.eq(2).addClass(g),
                n.mobile.chart ? n.mobile.chart.reset({
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
                });
                if (r) {
                    var E = null;
                    E = setTimeout(function() {
                        var e = t("#chart_tab").find("a").eq(r);
                        e.trigger("click")
                    },
                    150)
                }
                c.removeClass(b),
                l.removeClass(b),
                h.addClass(b),
                n.mobile.getCharts()
            } else o.eq(0).addClass(g)
        } else o.eq(u - 1).addClass(g),
        a.eq(u).removeClass(b),
        p.removeClass(b),
        d.addClass(b);
        f.text(m),
        n.mobile.clearAll.call(null)
    },
    n.mobile.selectCodeInit = function() {
        var r = t(".pick-box"),
        i = t(".plays"),
        s = t("#navtit"),
        o = t("#myssq"),
        u = t("#addcart"),
        a = t("#bets"),
        f = t(".btn-menu"),
        l = t(".btn-chart"),
        c = t(".helphanle"),
        h = t("#clear"),
        p = t("#rndom"),
        d = "none",
        v = n.string.getJsonHash(),
        m = 0;
        v.play && (v.play == 0 ? m = 2 : m = v.play - 1);
        var g = i.eq(m);
        n.mobile.initPlay.call(null, g, v.sub),
        r.on(n.lottery.tap, "span",
        function() {
            var e = t(this),
            r = "selected",
            i = 0,
            s = n.mobile.LOT_METHOD;
            e.toggleClass(r);
            if (s === 2) {
                var o = t("#rd"),
                u = t("#rt"),
                a = e.parent().parent().attr("id"),
                i = t.trim(e.text()) * 1 - 1;
                if (a == "rd") {
                    if (o.find("." + r).length > 5) return e.removeClass(r),
                    n.lottery.alert("\u80c6\u7801\u6700\u591a\u53ef\u90095\u4e2a"),
                    !1;
                    u.find("span").eq(i).removeClass(r)
                } else a == "rt" && o.find("span").eq(i).removeClass(r)
            }
            /[01]/.test(s) ? i = 1 : i = 2;
            var f = t(".pick").eq(i).find("." + r).length;
            f ? (p.addClass(d), h.removeClass(d)) : (h.addClass(d), p.removeClass(d)),
            n.mobile.count()
        }),
        h.on(n.lottery.tap,
        function() {
            var e = t(this),
            r = n.mobile.LOT_METHOD;
            r != 2 && (e.addClass(d), p.removeClass(d)),
            n.mobile.clearAll("ok")
        }),
        p.on(n.lottery.tap,
        function() {
            var e = t(this),
            r = n.number.random({
                min: 1,
                max: 33,
                size: 6,
                repeat: 0,
                sort: 1
            })[0],
            i = n.number.random({
                min: 1,
                max: 16,
                size: 1,
                repeat: 0,
                sort: 1
            })[0];
            n.mobile.random(r, i),
            e.addClass(d),
            h.removeClass(d),
            n.mobile.count("rnd")
        }),
        i.on("click",
        function() {
            var e = t(this);
            n.mobile.initPlay(e)
        }),
        s.on(n.lottery.tap,
        function() {
            var e = t(".head-arr"),
            r = t(".pop-box2"),
            i = t(".btn-menu"),
            s = "btn-menu-on",
            o = "head-arron",
            u = "none";
            i.hasClass(s) && i.trigger(n.lottery.tap),
            e.hasClass(o) ? (e.removeClass(o), r.addClass(u)) : (e.addClass(o), r.removeClass(u))
        }),
        o.on(n.lottery.tap,
        function() {
            var e = t("#history").find("p"),
            n = t("#arrow"),
            r = "top-arr-on",
            i = "history-show",
            s = t(this).find(".history");
            n.hasClass(r) ? (n.removeClass(r), s.removeClass(i)) : (n.addClass(r), s.addClass(i))
        }),
        f.on(n.lottery.tap,
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
        l.on(n.lottery.tap,
        function() {
            i.eq(2).trigger("click");
        }),
        u.on({
            click: function() {
                var e = t(this);
                n.mobile.pickBall(e)
            },
            touchstart: function() {
                t(this).addClass("btn-addnmu-tap")
            },
            touchend: function() {
                t(this).removeClass("btn-addnmu-tap")
            }
        }),
        a.on({
            click: function() {
                var r = n.mobile.cart.group || 0,
                i = n.mobile.editor,
                s = t(this),
                o,
                u = t(".pick"),
                a = n.mobile.LOT_METHOD,
                f = "selected";
                a == 0 || a == 1 ? (a = 1, o = u.eq(1).find("ul")) : o = u.eq(a).find("ul"),
                !r || o.find("." + f).length > 0 || i ? n.mobile.pickBall(s) : e.location.href = "./cart.asp"
            },
            touchstart: function() {
                t(this).addClass("btntap")
            },
            touchend: function() {
                t(this).removeClass("btntap")
            }
        }),
        c.on(n.lottery.tap,
        function() {
            var e = t(this),
            n = "none",
            r = "arr-on",
            i = t("#help-box"),
            s = e.find(".arr");
            i.hasClass(n) ? (s.removeClass(r), i.removeClass(n)) : (s.addClass(r), i.addClass(n))
        }),
        t(document.body).on(n.lottery.tap,
        function(e) {
            setTimeout(function() {
                var r = n.lottery.getActionTarget(e, -1, "cmd", null),
                i = "none",
                s = t(".pop-box2"),
                o = t(".pop-box3"),
                u = t(".btn-menu"),
                a = t(".head-arr");
                r || (u.removeClass("btn-menu-on"), a.removeClass("head-arron"), s.addClass(i), o.addClass(i))

            },
            80)
        })
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
            o = "hqfqm",
            r.css("height", a[0]),
            f.css("height", c[0]),
            l.removeClass(d),
            i.css("color", "#ba2020"),
            h = "scroll_red",
            p = "chartred";
            break;
        case 1:
            o = "lqhmm",
            r.css("height", a[0]),
            f.css("height", c[0]),
            l.removeClass(d),
            i.css("color", "#3172c3"),
            h = "scroll_blue",
            p = "chartblue";
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
                        t("#chart_red_tab").html("<li>\u671f\u53f7</li>" + r.join("")),
                        t("#chart_red").html(i.join(""));
                        break;
                    case 1:
                        var r = [],
                        a = [],
                        o = e[0].Body,
                        f = e[1].Body,
                        l = e[2].Body;
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
                            t.each(f[e],
                            function(e, t) {
                                var n = "",
                                r = t.S,
                                i = t.T * 1,
                                s = "";
                                e === 1 && (s = " br2");
                                if (r == "\u5927" || r == "\u5c0f") n = "ball01";
                                a.push("<td class='" + n + "'><span>" + r + "</span></td>")
                            }),
                            t.each(l[e],
                            function(e, t) {
                                var n = "",
                                r = t.T * 1,
                                i = t.S;
                                if (i == "\u5947" || i == "\u5076") n = "ball02";
                                a.push("<td class='" + n + "'><span>" + i + "</span></td>")
                            }),
                            a.push("</tr>")
                        }),
                        t("#chart_blue_tab").html("<li>\u671f\u53f7</li>" + r.join("")),
                        t("#chart_blue").html(a.join(""));
                        break;
                    case 2:
                        var r = [],
                        c = [],
                        d = e[0].Body,
                        v = e[1].Body;
                        t.each(d,
                        function(e, t) {
                            c.push("<tr>"),
                            r.push("<li>" + e.replace(/^(\d{4})(\d{3})$/g, "$2") + "</li>");
                            var n = v[e];
                            for (var i = 0; i < t.length; i++) {
                                var s = "loss",
                                o = "",
                                u = t[i].T * 1,
                                a = t[i].S;
                                u == 2 && (s = "greenbg"),
                                i == t.length - 1 && (o = " br2"),
                                c.push("<td class='" + s + o + "'><span>" + a + "</span></td>")
                            }
                            for (var i = 0; i < n.length; i++) {
                                var s = "loss",
                                u = n[i].T * 1,
                                a = n[i].S;
                                u == 2 && (s = "bluebg"),
                                c.push("<td class=" + s + "><span>" + a + "</span></td>")
                            }
                            c.push("</tr>")
                        }),
                        t("#chart_dxjo_tab").html('<li class="title">\u671f\u53f7</li>' + r.join("")),
                        t("#chart_red_dxjom").html(c.join(""))
                    }
                    n.mobile.cache[p] = 1;
                    var m = h.replace("scroll_", "");
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
                            n.mobile.refreshCharts.call(null, m)
                        },
                        onScrollEnd: function() {
                            n.mobile.refreshCharts.call(null, m)
                        }
                    })
                }
            }
        })
    },
    n.mobile.pickBall = function(r) {
        var i = t("#deal"),
        s = t("#group"),
        o = n.mobile.cart.code || "",
        u = i.find("em"),
        a = r.attr("id"),
        f = n.mobile.LOT_METHOD,
        l = "selected",
        c = u.eq(0).text() * 1,
        h = "none",
        p = t(".pick-b"),
        d = n.mobile.editor,
        v = n.localstorage.getItem("ssqSelectEditor");
        if (/^[01]$/.test(f)) {
            var m = t("#r").find("." + l),
            g = t("#b").find("." + l),
            y = m.length,
            b = g.length;
            if (y == 0 && b == 0) {
                var w = n.number.random({
                    min: 1,
                    max: 33,
                    size: 6,
                    repeat: 0,
                    sort: 1
                })[0],
                E = n.number.random({
                    min: 1,
                    max: 16,
                    size: 1,
                    repeat: 0,
                    sort: 1
                })[0];
                return n.mobile.random(w, E),
                t("#rndom").addClass(h),
                t("#clear").removeClass(h),
                n.mobile.count("rnd"),
                t(".off").addClass("shut"),
                !1
            }
            if (y < 6) return n.lottery.alert("\u8bf7\u81f3\u5c11\u9009\u62e96\u4e2a\u7ea2\u7403"),
            !1;
            if (b < 1) return n.lottery.alert("\u8bf7\u81f3\u5c11\u9009\u62e91\u4e2a\u84dd\u7403"),
            !1;
            var S = t.map(m,
            function(e) {
                return t.trim(t(e).text())
            }),
            x = t.map(g,
            function(e) {
                return t.trim(t(e).text())
            });
            if (d && v) {
                var T = v.split("|"),
                N = T[2] * 1,
                C = T[1] * 1,
                k = o.split(";");
                k[N] = c + "|" + S.join(" ") + "+" + x.join(" "),
                o = k.join(";"),
                c -= C
            } else o = c + "|" + S.join(" ") + "+" + x.join(" ") + ";" + o
        } else {
            var L = t("#rd").find("." + l),
            A = t("#rt").find("." + l),
            O = t("#bd").find("." + l);
            if (L.length < 1) return n.lottery.alert("\u80c6\u7801\u81f3\u5c11\u90091\u4e2a"),
            !1;
            if (A.length < 1) return n.lottery.alert("\u62d6\u7801\u81f3\u5c11\u90091\u4e2a"),
            !1;
            if (A.length + L.length < 6) return n.lottery.alert("\u80c6\u7801\u52a0\u62d6\u7801\u81f3\u5c116\u4e2a"),
            !1;
            if (O.length < 1) return n.lottery.alert("\u84dd\u7403\u81f3\u5c11\u90091\u4e2a"),
            !1;
            var M = t.map(L,
            function(e) {
                return t.trim(t(e).text())
            }),
            _ = t.map(A,
            function(e) {
                return t.trim(t(e).text())
            }),
            D = t.map(O,
            function(e) {
                return t.trim(t(e).text())
            });
            if (d && v) {
                var T = v.split("|"),
                N = T[2] * 1,
                C = T[1] * 1,
                k = o.split(";");
                k[N] = c + "|" + (M.join(" ") + "$" + _.join(" ")) + "+" + D.join(" "),
                o = k.join(";"),
                c -= C
            } else o = c + "|" + (M.join(" ") + "$" + _.join(" ")) + "+" + D.join(" ") + ";" + o
        }
        n.mobile.cart.group += 1,
        n.mobile.cart.code = o,
        n.mobile.cart.count += c;                                                                                            //这里是对选号存储
        var P = n.mobile.cart.code.replace(/;$/g, ""),
        H = n.mobile.cart.count;
        n.localstorage.setItem(n.mobile.storageName,P),
        n.localstorage.setItem(n.mobile.storageMulName,H),
        a == "addcart" ? (s.text(n.mobile.cart.group), t("#rndom").removeClass(h), t("#clear").addClass(h), n.mobile.clearAll("ok")) : (n.localstorage.removeItem("ssqSelectEditor"), e.location.href = "./cart.asp")
    },
    n.mobile.clearAll = function(e) {
        var r = n.mobile.LOT_METHOD,
        i = n.mobile.editor,
        s = "selected",
        o = t("#deal"),
        u = t(".pick"),
        a;
        r == 0 || r == 1 ? a = 1 : a = r,
        e && (o.find("em").text("0"), u.eq(a).find("." + s).removeClass(s)),
        n.mobile.count()
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
        var e = "#",
        r = t(".xq-tit"),
        i = t(".actqh"),
        s = t(".countdown"),
        o = t("#history"),
        u = n.localstorage.getItem(n.mobile.storageName),
        a = ("0" + n.localstorage.getItem(n.mobile.storageMulName)) * 1;
        u && (n.mobile.cart.code = u + ";", n.mobile.cart.group = u.split(/;/g).length, n.mobile.cart.count = a),
        t("#group").text(n.mobile.cart.group),
        t.getJSON(e + "?r=" + t.now(),
        function(e) {
            if (e) {
                var u = e.info,
                a = e.blist;
                r.attr({
                    issue: u.issue,
                    issale: u.IsOpen,
                    endtime: u.EndTime * 1 - u.DsTimeSpace * 1
                }),
                i.text(t.trim(u.issue)),
                n.mobile.countDownInit(),
                s.text("\u622a\u6b62\u65f6\u95f4\uff1a" + u.etstr);
                var f = [];
                t.each(a,
                function(e, t) {
                    var n = t.number.split("+"),
                    r = n[0],
                    i = n[1].split("#");
                    i[1] ? f.push("<p>\u7b2c " + t.issue + ' \u671f\uff1a<strong class="red">' + r + '</strong> + <strong class="blue">' + i[0] + '</strong> \u5e78\u8fd0<strong class="blue">' + i[1] + "</strong></p>") : f.push("<p>\u7b2c " + t.issue + ' \u671f\uff1a<strong class="red">' + r + '</strong> + <strong class="blue">' + i[0] + "</strong></p>")
                }),
                o.html(f.join(""))
            }
        })
    },
    n.mobile.random = function(e, r, i) {
        var s = "selected",
        o = "on",
        u = n.mobile.editor;
        if (!i) {
            var a = t("#r"),
            f = a.find("span"),
            l = e.length;
            a.find("." + s).removeClass(s);
            var c = null,
            h = 0;
            c = setInterval(function() {
                h < l ? f.eq(e[h] * 1 - 1).addClass(s) : clearInterval(c),
                h++
            },
            40);
            var p = t("#b"),
            d = p.find("span"),
            v = r.length;
            p.find("." + s).removeClass(s);
            var m = null,
            g = 0;
            m = setInterval(function() {
                g < v ? d.eq(r[g] * 1 - 1).addClass(s) : clearInterval(m),
                g++
            },
            40)
        } else {
            var y = t("#rd"),
            b = y.find("span"),
            w = e[0].length;
            y.find("." + s).removeClass(s);
            var E = null,
            S = 0;
            E = setInterval(function() {
                S < w ? b.eq(e[0][S] * 1 - 1).addClass(s) : clearInterval(E),
                S++
            },
            40);
            var x = t("#rt"),
            T = x.find("span"),
            N = e[1].length;
            x.find("." + s).removeClass(s);
            var C = null,
            k = 0;
            C = setInterval(function() {
                k < N ? T.eq(e[1][k] * 1 - 1).addClass(s) : clearInterval(C),
                k++
            },
            40);
            var L = t("#bd"),
            A = L.find("span"),
            O = r.length;
            L.find("." + s).removeClass(s);
            var M = null,
            _ = 0;
            M = setInterval(function() {
                _ < O ? A.eq(r[_] * 1 - 1).addClass(s) : clearInterval(M),
                _++
            },
            40)
        }
    },
    n.mobile.layoutInit = function() {
        var e = n.localstorage.getItem("ssqSelectEditor"),
        r = n.string.getHashActionName(0),
        i = n.string.getHashModelName(0),
        s = t("#rndom"),
        o = t("#clear"),
        u = t("#addcart"),
        a = t("#bets"),
        f = t(".plays"),
        l = "none";
        if (i == "do" && r == "editor" && e) {
            s.addClass(l),
            o.removeClass(l),
            u.addClass(l),
            n.mobile.editor = 1;
            var c = e.split("|");
            if (/\$/g.test(c[0])) {
                f.eq(1).trigger("click");
                var h = c[0].split("+"),
                p = h[0].split("$"),
                d = p[0].split(" "),
                v = p[1].split(" "),
                m = h[1].split(" ");
                n.mobile.random([d, v], m, "dt")
            } else {
                var h = c[0].split("+"),
                g = h[0].split(" "),
                y = h[1].split(" ");
                n.mobile.random(g, y)
            }
            n.mobile.count("editor"),
            t("#reffer").attr("href", "./cart.asp"),
            t("#refferto").text("\u53d6\u6d88"),
            t("#dim1,#dim2,#dim3").addClass(l),
            t("#lottery").text("\u4fee\u6539"),
            a.text("\u786e\u8ba4\u4fee\u6539")
        }
    },
    n.mobile.count = function(e) {
        var r = t("#deal").find("em"),
        i = n.mobile.price,
        s = n.mobile.editor,
        o = "selected";
        if (s && e == "editor") {
            var u = n.localstorage.getItem("ssqSelectEditor");
            if (u) {
                var a = u.split("|");
                r.eq(0).text(a[1]),
                r.eq(1).text(a[1] * i)
            }
        } else if (e == "rnd") r.eq(0).text(1),
        r.eq(1).text(2);
        else {
            var f = n.mobile.LOT_METHOD;
            switch (f) {
            case 0:
            case 1:
                var l = t("#r").find("." + o).length,
                c = t("#b").find("." + o).length,
                h = n.number.combo(l, 6) * c;
                r.eq(0).text(h),
                r.eq(1).text(h * i);
                break;
            case 2:
                var p = t("#rd").find("." + o).length,
                d = t("#rt").find("." + o).length,
                v = t("#bd").find("." + o).length,
                h = n.number.combo(d, 6 - p) * v;
                r.eq(0).text(h),
                r.eq(1).text(h * i)
            }
        }
    },
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
        var e = n.mobile.LOT_METHOD,
        r = "none";
        if (/[01]/.test(e)) {
            var i = n.number.random({
                min: 1,
                max: 33,
                size: 6,
                repeat: 0,
                sort: 1
            })[0],
            s = n.number.random({
                min: 1,
                max: 16,
                size: 1,
                repeat: 0,
                sort: 1
            })[0];
            n.mobile.random(i, s),
            n.mobile.count("rnd"),
            t("#rndom").addClass(r),
            t("#clear").removeClass(r)
        }
    },
    n.mobile.refreshCharts = function(e) {
        var t = document.getElementById("fixed1").style.width,
        n = document.getElementById("fixed_" + e).style.cssText;
        document.getElementById("fixed3").style.cssText = n,
        document.getElementById("fixed4").style.width = t
    },
    n.mobile.chartsBar = function() {
        t(e).on("scroll",
        function() {
            var r = n.mobile.LOT_METHOD;
            if (r == 0) {
                var i = e.scrollY,
                s = t("#fixed4"),
                o = 116,
                u = (t(".chart-tab").height() || 572) + o - 15,
                a = "none";
                i > o && i < u ? s.removeClass(a) : s.addClass(a)
            }
        })
    },
    t(function() {
        n.mobile.storageName = "storage" + n.mobile.lotType,
        n.mobile.storageMulName = "storage" + n.mobile.lotType + "mul",
        n.mobile.AsynDownData(),
        n.mobile.selectCodeInit(),
        n.mobile.layoutInit(),
        n.mobile.shakeInit(),
        n.mobile.chartsBar()
    })
})(window);