var caizhong="\u6392\u5217\u4e09",kaijiang="Pls",qihaoid="p3history",gp=0;
(function(e) {
    var t = e.$,
    n = e.kureicp;
    n.mobile.lotType = n.lottery.lotType.p3,
    n.mobile.price = n.lottery.price,
    n.mobile.LOT_METHOD = 1,
    n.mobile.LOT_GAME = "Z1",
    n.mobile.LOT_PLAY = "normal",
    n.mobile.cart = {
        group: 0,
        code: "",
        count: 0
    },
    n.mobile.cache = {
        one: 0,
        two: 0,
        three: 0
    },
    n.mobile.getchartUrl_dev = n.lottery.APIChart + "/zst/qmchartdata",
    n.mobile.selectCodeInit = function() {
        t(".pick-box").on(n.lottery.tap, "span",
        function() {
            var r = t(this),
            i = "selected";
            r.toggleClass(i);
            if (n.mobile.LOT_PLAY == "dt") {
                var s = t(".pick").eq(4).find("ul"),
                o = s.eq(0),
                u = s.eq(1),
                a = n.mobile.LOT_GAME,
                f;
                a == "F6" ? f = 2 : a == "F3" && (f = 1);
                if (o.find("." + i).length > f) {
                    r.removeClass(i),
                    e.alert("\u80c6\u7801\u6700\u591a\u53ea\u80fd\u9009" + f + "\u4e2a\u80c6\u9009");
                    return
                }
            }
            if (n.mobile.LOT_PLAY == "dt") {
                var l = r.parents("dl"),
                c = r.text() * 1,
                h = l.siblings().find("span");
                h.eq(c).removeClass(i)
            }
            n.mobile.count()
        }),
        t("#navtit").on(n.lottery.tap,
        function() {
            var e = t(".head-arr"),
            r = t(".pop-box2"),
            i = "head-arron",
            s = t(".btn-menu"),
            o = "btn-menu-on",
            u = "none";
            s.hasClass(o) && s.trigger(n.lottery.tap),
            e.hasClass(i) ? (e.removeClass(i), r.addClass(u)) : (e.addClass(i), r.removeClass(u))
        }),
        t(".top-date").on(n.lottery.tap,
        function() {
            var e = t("#p3history").find("p"),
            n = t(".top-arr"),
            r = "top-arr-on";
            n.hasClass(r) ? (n.removeClass(r), e.hide().eq(0).show().parent().css("height", 22)) : (n.addClass(r), e.show().parent().css("height", 110))
        }),
        t(".btn-menu").on(n.lottery.tap,
        function() {
            var e = t("#tools"),
            r = t(this),
            i = "btn-menu-on",
            s = "none",
            o = t(".pop-box2"),
            u = t("#navtit");
            o.hasClass(s) || u.trigger(n.lottery.tap),
            r.hasClass(i) ? (e.addClass(s), r.removeClass(i)) : (e.removeClass(s), r.addClass(i))
        }),
        t(".plays").on("click",
        function() {
            var e = t(this),
            r = t(".head-arr"),
            i = t(".pop-box2"),
            s = t(".btn-pop"),
            o = t(".pick"),
            u = t("#game"),
            a = t("#detxt"),
            f = t("#referer"),
            l = t("#count,#price"),
            c = t(".pick-b"),
            h = t("#chartscd"),
            p = t("#myhelp"),
            d = t("#myp3,#mycountdown,#myline"),
            v = "btn-pop-on",
            m = "head-arron",
            g = "none",
            y = "selected",
            b = e.attr("method") * 1,
            w = e.attr("game"),
            E = e.attr("txt"),
            S = e.attr("play") || "normal";
            f.attr("href", "/p3/cart?pt=" + w),
            s.removeClass(v),
            e.addClass(v),
            r.removeClass(m),
            i.addClass(g),
            p.addClass(g),
            h.addClass(g),
            a.removeClass(g),
            d.removeClass(g),
            c.removeClass("fix"),
            o.addClass(g).eq(b).removeClass(g),
            u.text(e.text()),
            a.html(E),
            o.find("." + y).removeClass(y),
            l.text(0),
            n.mobile.LOT_PLAY = S,
            n.mobile.LOT_METHOD = b,
            n.mobile.LOT_GAME = w;
            if (S == "charts") {
                o.eq(0).removeClass(g);
                var x = t("#chartplay");
                t("#hd_second,#hd_third").html('<tr><td colspan="12">\u6b63\u5728\u52aa\u529b\u52a0\u8f7d\u4e2d...</td></tr>'),
                t("#bd_second,#bd_third").html(""),
                n.mobile.cache.one = 0,
                n.mobile.cache.two = 0,
                n.mobile.cache.three = 0,
                n.mobile.touchSlider ? n.mobile.touchSlider.reset({
                    steps: 0,
                    left: 0,
                    curIndex: 0
                }) : n.mobile.touchSlider = new t.touchSlider(".in-entry", {
                    wrap: ".chart-tab",
                    trigger: ".xq-nav-chart",
                    duration: 500,
                    callback: function() {
                        n.mobile.getCharts()
                    }
                }),
                o.eq(b).removeClass(g),
                p.removeClass(g),
                h.removeClass(g),
                a.addClass(g),
                d.addClass(g),
                c.addClass("fix"),
                x.text(e.text()),
                n.mobile.getCharts()
            }
        }),
        t("#addcart").on({
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
        t("#bets").on({
            click: function() {
                var r = n.mobile.cart.group || 0,
                i = n.mobile.LOT_METHOD,
                s = t(".pick"),
                o = s.eq(i).find("ul"),
                u = n.mobile.LOT_GAME || "Z1"; ! r || o.find(".selected").length > 0 ? n.mobile.pickBall(t(this)) : e.location.href = "Cart.html"
            },
            touchstart: function() {
                t(this).addClass("btntap")
            },
            touchend: function() {
                t(this).removeClass("btntap")
            }
        }),
        t(".helphanle").on(n.lottery.tap,
        function() {
            var e = t(this),
            n = "none",
            r = "arr-on",
            i = t("#help-box"),
            s = e.find(".arr");
            i.hasClass(n) ? (s.removeClass(r), i.removeClass(n)) : (s.addClass(r), i.addClass(n))
        }),
        t(".btn-chart").on(n.lottery.tap,
        function() {
            t(".plays").eq(3).trigger("click")
        });
        var r = n.string.getJsonHash();
        if (r.play) {
            var i = 0;
            r.sub && (i = r.sub);
            if (r.play == "chart") {
                t(".plays").eq(i).trigger("click");
                if (r.m) {
                    var s = null,
                    o = r.m || 0;
                    s = setTimeout(function() {
                        var e = t("#chart_tab").find("a").eq(o);
                        e.trigger("click")
                    },
                    150)
                }
            } else t(".plays").eq(i).trigger("click")
        }
    },
    n.mobile.getCharts = function() {
        var e = t("#chart_tab"),
        r = t(".chart-tab"),
        i,
        s = e.find("a"),
        o = "none",
        u = [572, 604],
        a = n.mobile.LOT_GAME == "Z1",
        f = t("#hd_first"),
        l = t("#hd_second"),
        c = t("#hd_third"),
        h = t("#bd_first"),
        p = t("#bd_second"),
        d = t("#bd_third"),
        v = e.find(".sel").attr("m") * 1 || 0,
        m = [];
        if (a) m = ["\u767e\u4f4d\u5956\u53f7", "\u5341\u4f4d\u5956\u53f7", "\u4e2a\u4f4d\u5956\u53f7"];
        else {
            var g = n.mobile.LOT_GAME.replace("F", "") * 1;
            m = ["\u5f00\u5956\u53f7\u7801", "\u8de8\u5ea6/\u91cd\u53f7\u7c7b\u578b", "\u5927\u5c0f/\u5947\u5076"]
        }
        for (var y = 0; y < 3; y++) s.eq(y).text(m[y]);
        switch (v) {
        case 0:
            a ? i = "dww1m": i = "hmfbm",
            r.css("height", u[0]);
            if (n.mobile.cache.one) return;
            break;
        case 1:
            a ? (i = "dww2m", r.css("height", u[0])) : (i = "kdchm", r.css("height", u[1]));
            if (n.mobile.cache.two) return;
            break;
        case 2:
            a ? (i = "dww3m", r.css("height", u[0])) : (i = "dxjom", r.css("height", u[1]));
            if (n.mobile.cache.three) return
        }
        var b = ["<tr><th>\u671f\u53f7</th><th>\u5956\u53f7</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th></tr>", '<tr><th rowspan="2" width="28">\u671f\u53f7</th><th colspan="5" class="br2">\u5927\u5c0f\u6bd4</th><th colspan="5">\u5947\u5076\u6bd4</th></tr><tr><th>\u5f62\u6001</th><th>0:3</th><th>1:2</th><th>2:1</th><th class="br2">3:0</th><th>\u5f62\u6001</th><th>0:3</th><th>1:2</th><th>2:1</th><th>3:0</th></tr>', '<tr><th rowspan="2" width="28">\u671f\u53f7</th><th colspan="10" class="br2">\u8de8\u5ea6</th><th colspan="3" style="width:200px;">\u91cd\u53f7\u7c7b\u578b</th></tr><tr><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th class="br2">9</th><th>\u7ec4\u516d</th><th>\u7ec4\u4e09</th><th>\u8c79\u5b50</th></tr>'];
        t.ajax({
            url: n.mobile.getchartUrl_dev + "?lotId=" + n.mobile.lotType + "&chartType=" + i + "&r=" + t.now(),
            dataType: "jsonp",
            success: function(e) {
                if (e) switch (v) {
                case 0:
                    f.html(b[0]);
                    var r = e[0].Body,
                    i = e[1].Body,
                    s = [];
                    t.each(r,
                    function(e, t) {
                        var n = [],
                        r = i[e],
                        o = t[1].S;
                        for (var u = 0; u < r.length; u++) {
                            var a = "",
                            f = "",
                            l = r[u].T * 1,
                            c = r[u].S * 1,
                            h = r[u].E * 1;
                            h && h > 1 && (f = "<i>" + h + "</i>");
                            if (l == 2 || l == 3) {
                                a = "class = 'pitch'";
                                if (!h) {
                                    var p = o.split("");
                                    o = "<b>" + p[0] + "</b>" + p[1] + p[2]
                                }
                            }
                            n.push('<td class="loss"><span ' + a + ">" + f + c + "</span></td>")
                        }
                        s.push("<tr><td>" + e.replace(/^(\d{4})/g, "") + '</td><td class="num"><span>' + o + "</span></td>" + n.join("") + "</tr>")
                    }),
                    h.html(s.join("")),
                    n.mobile.cache.one = 1;
                    break;
                case 1:
                    if (a) {
                        l.html(b[0]);
                        var r = e[0].Body,
                        i = e[1].Body,
                        s = [];
                        t.each(r,
                        function(e, t) {
                            var n = [],
                            r = i[e],
                            o = t[1].S;
                            for (var u = 0; u < r.length; u++) {
                                var a = "",
                                f = r[u].T * 1,
                                l = r[u].S * 1;
                                if (f == 2 || f == 3) {
                                    a = 'class = "pitch"';
                                    var c = o.split("");
                                    o = c[0] + "<b>" + c[1] + "</b>" + c[2]
                                }
                                n.push('<td class="loss"><span ' + a + ">" + l + "</span></td>")
                            }
                            s.push("<tr><td>" + e.replace(/^(\d{4})/g, "") + '</td><td><span class="num">' + o + "</span></td>" + n.join("") + "</tr>")
                        })
                    } else {
                        l.html(b[2]);
                        var o = e[0].Body,
                        u = e[1].Body,
                        s = [];
                        t.each(o,
                        function(e, t) {
                            var n = [];
                            for (var r = 0; r < t.length; r++) {
                                var i = "loss",
                                o = "",
                                a = t[r].T * 1,
                                f = t[r].S;
                                if (a == 2 || a == 3) i = "greenbg";
                                r == t.length - 1 && (o = " br2"),
                                n.push("<td class='" + i + o + '\'><span class="k">' + f + "</span></td>")
                            }
                            for (var r = 0; r < u[e].length; r++) {
                                var f = u[e][r].S,
                                a = u[e][r].T * 1,
                                i = "loss";
                                if (a == 2 || a == 3) i = "ball08";
                                n.push("<td class='" + i + "'>" + f + "</td>")
                            }
                            s.push("<tr><td>" + e.replace(/^(\d{4})/g, "") + "</td></td>" + n.join("") + "</tr>")
                        })
                    }
                    t("#bd_second").html(s.join("")),
                    n.mobile.cache.second = 1;
                    break;
                case 2:
                    if (a) {
                        c.html(b[0]);
                        var r = e[0].Body,
                        i = e[1].Body,
                        s = [];
                        t.each(r,
                        function(e, t) {
                            var n = [],
                            r = i[e],
                            o = t[1].S;
                            for (var u = 0; u < r.length; u++) {
                                var a = "",
                                f = r[u].T * 1,
                                l = r[u].S * 1;
                                if (f == 2 || f == 3) {
                                    a = 'class = "pitch"';
                                    var c = o.split("");
                                    o = c[0] + c[1] + "<b>" + c[2] + "</b>"
                                }
                                n.push('<td class="loss"><span ' + a + ">" + l + "</span></td>")
                            }
                            s.push("<tr><td>" + e.replace(/^(\d{4})/g, "") + '</td><td><span class="num">' + o + "</span></td>" + n.join("") + "</tr>")
                        })
                    } else {
                        c.html(b[1]);
                        var p = e[0].Body,
                        m = e[1].Body,
                        g = e[2].Body,
                        y = e[3].Body,
                        s = [];
                        t.each(p,
                        function(e, t) {
                            var n = [];
                            for (var r = 0; r < t.length; r++) {
                                var i = t[r].S;
                                n.push('<td class="blue">' + i.replace(/(\u5927)/g, '<cite class="red">$1</cite>') + "</td>")
                            }
                            for (var r = 0; r < m[e].length; r++) {
                                var o = "loss",
                                u = "",
                                a = m[e][r].T * 1,
                                i = m[e][r].S;
                                if (a == 2 || a == 3) o = "ball01";
                                r == m[e].length - 1 && (u = " br2"),
                                n.push("<td class='" + o + u + "'><span>" + i + "</span></td>")
                            }
                            for (var r = 0; r < g[e].length; r++) {
                                var i = g[e][r].S;
                                n.push('<td class="blue">' + i.replace(/(\u5947)/g, '<cite class="red">$1</cite>') + "</td>")
                            }
                            for (var r = 0; r < y[e].length; r++) {
                                var o = "loss",
                                a = y[e][r].T * 1,
                                i = y[e][r].S;
                                if (a == 2 || a == 3) o = "ball04";
                                n.push("<td class=" + o + "><span>" + i + "</span></td>")
                            }
                            s.push("<tr><td>" + e.replace(/^(\d{4})/g, "") + "</td>" + n.join("") + "</tr>")
                        })
                    }
                    d.html(s.join("")),
                    n.mobile.cache.three = 1
                }
            }
        })
    },
    n.mobile.pickBall = function(r) {
        var i = t(this),
        s = n.mobile.LOT_METHOD,
        o = n.mobile.LOT_GAME || "Z1",
        u;
        s == 0 || s == 1 ? u = t(".pick").eq(1).find("ul") : u = t(".pick").eq(s).find("ul");
        var a = u.length,
        f = t("#count").text() * 1,
        l = r.attr("id"),
        c = n.mobile.cart.code || "";
        if (n.mobile.LOT_PLAY == "dt") {
            var h = u.eq(0).find(".selected"),
            p = u.eq(1).find(".selected"),
            d;
            o == "F6" ? d = 3 : o == "F3" && (d = 2);
            if (h.length < 1) {
                n.lottery.alert("\u8bf7\u81f3\u5c11\u9009\u62e91\u4e2a\u80c6\u7801");
                return
            }
            if (p.length < 1) {
                n.lottery.alert("\u8bf7\u81f3\u5c11\u9009\u62e91\u4e2a\u62d6\u7801");
                return
            }
            if (h.length + p.length < d) {
                n.lottery.alert("\u80c6\u7801\u52a0\u62d6\u7801\u81f3\u5c11\u8981\u9009\u62e9 " + d + "\u4e2a");
                return
            }
            var v = t.map(h,
            function(e) {
                return t.trim(t(e).text())
            }),
            m = t.map(p,
            function(e) {
                return t.trim(t(e).text())
            }),
            g,
            y;
            o == "F3" ? (g = n.number.eachCombo(m, 2 - v.length), t.each(g,
            function(e, t) {
                var n = v.concat(t);
                y = n[0] + "," + n[0] + "," + n[1],
                c += "Z3|1|" + y + ";",
                y = n[0] + "," + n[1] + "," + n[1],
                c += "Z3|1|" + y + ";"
            })) : o == "F6" && (g = n.number.eachCombo(m, 3 - v.length), t.each(g,
            function(e, t) {
                y = v.concat(t).join(","),
                c += "Z6|1|" + y + ";"
            }))
        } else {
            var b = ["\u767e", "\u5341", "\u4e2a"],
            w;
            for (var s = 0; s < a; s++) if (o == "Z1") {
                w = u.eq(s).find(".selected").length;
                if (w < 1) {
                    n.lottery.alert("\u8bf7\u5728" + b[s] + "\u4f4d\u81f3\u5c11\u9009\u62e91\u4e2a\u53f7\u7801");
                    return
                }
            } else if (o == "F3") {
                w = u.find(".selected").length;
                if (w < 2) {
                    n.lottery.alert("\u8bf7\u81f3\u5c11\u9009\u62e92\u4e2a\u53f7\u7801");
                    return
                }
            } else {
                w = u.find(".selected").length;
                if (w < 3) {
                    n.lottery.alert("\u8bf7\u81f3\u5c11\u9009\u62e93\u4e2a\u53f7\u7801");
                    return
                }
            }
            var E = [],
            S = "";
            for (var s = 0; s < a; s++) E = t.map(u.eq(s).find(".selected"),
            function(e) {
                return t.trim(t(e).text())
            }),
            o == "Z1" && (S += E.join("") + ",");
            var y;
            o == "F3" ? (g = n.number.eachCombo(E, 2), t.each(g,
            function(e, t) {
                y = t.join(",") + "," + t[1],
                c += "Z3|1|" + y + ";",
                y = t[0] + "," + t.join(","),
                c += "Z3|1|" + y + ";"
            })) : o == "F6" ? (g = n.number.eachCombo(E, 3), t.each(g,
            function(e, t) {
                y = t.join(","),
                c += "Z6|1|" + y + ";"
            })) : c += "Z1|" + f + "|" + S.replace(/^,|,$/g, "") + ";"
        }
        n.mobile.cart.code = c,
        n.mobile.cart.group += o == "Z1" ? 1 : f,
        n.mobile.cart.count += f;
        var x = n.mobile.cart.code.replace(/;$/g, ""),
        f = n.mobile.cart.count;
        n.localstorage.setItem(n.mobile.storageName, x),
        n.localstorage.setItem(n.mobile.storageMulName, f),
        l == "addcart" ? (t("#group").text(n.mobile.cart.group), n.mobile.clearAll()) : e.location.href = "Cart.html"
    },
    n.mobile.clearAll = function() {
        var e = t("#count,#price"),
        r = t(".pick"),
        i = "selected",
        s = n.mobile.LOT_METHOD,
        o = r.eq(s);
        e.text(0),
        o.find("." + i).removeClass(i)
    },
    n.mobile.countDownInit = function() {
        var e = t(".time"),
        r = e.attr("issale") * 1,
        i = e.attr("endtime"),
        s = t(".countdowm");
        r ? n.mobile.getServerTimes(function(e) {
            if (e * 1 > 0) {
                var t = i * 1 - e * 1;
                t <= 0 && s.text("\u672c\u671f\u5df2\u622a\u6b62")
            }
        }) : s.text("\u6682\u505c\u9500\u552e")
    },
    n.mobile.AsynDownData = function() {
        var e = "#" + t.now(),
        r = t("#navtit");
        r.html('\u6392\u5217\u4e09-<cite id="game">\u76f4\u9009</cite><span class="head-arr"><em></em></span>');
        var i = n.localstorage.getItem(n.mobile.storageName),
        s = ("0" + n.localstorage.getItem(n.mobile.storageMulName)) * 1;
        i && (n.mobile.cart.code = i + ";", n.mobile.cart.group = i.split(/;/g).length, n.mobile.cart.count = s),
        t("#group").text(n.mobile.cart.group),
        t.getJSON(e,
        function(e) {
            var r = e.info,
            i = e.blist,
            s = [];
            t(".time").attr({
                issue: r.issue,
                issale: r.IsOpen,
                endtime: r.EndTime * 1 - r.DsTimeSpace * 1,
                mul: r.MaxChipMul
            }),
            t(".actqh").text(t.trim(r.issue)),
            t(".countdowm").html("\u622a\u6b62\u65f6\u95f4\uff1a" + r.etstr),
            n.mobile.countDownInit(),
            t.each(i,
            function(e, t) {
                s.push("<p>\u7b2c" + t.issue + '\u671f\u5f00\u5956\uff1a<strong class="red">' + t.number.split(/\s?/g).join(" ") + "</strong><em>" + n.lottery.dealPlay(t.number.split(/\s?/g)) + "</em></p>")
            }),
            t("#p3history").html(s.join(""))
        })
    },
    n.mobile.count = function() {
        var e = n.mobile.LOT_METHOD,
        r = t(".pick"),
        i = r.eq(e).find("ul"),
        s = n.mobile.LOT_GAME || "Z1",
        o = 0;
        if (n.mobile.LOT_PLAY == "dt") {
            var u = i.eq(0).find(".selected").length,
            a = i.eq(1).find(".selected").length;
            if (u === 0) return;
            switch (s) {
            case "F6":
                o = n.number.combo(a, 3 - u);
                break;
            case "F3":
                o = u * a * 2
            }
        } else switch (s) {
        case "Z1":
            var o = 1,
            f = i.length;
            for (var l = 0; l < f; l++) o *= i.eq(l).find(".selected").length;
            break;
        case "F3":
            o = n.number.perm(i.find(".selected").length, 2);
            break;
        case "F6":
            o = n.number.combo(i.find(".selected").length, 3)
        }
        t("#count").text(o),
        t("#price").text(o * n.mobile.price)
    },
    t(function() {
        n.mobile.storageName = "storage" + n.mobile.lotType,
        n.mobile.storageMulName = "storage" + n.mobile.lotType + "mul",
        n.mobile.AsynDownData(),
        n.mobile.selectCodeInit()
    })
})(window);