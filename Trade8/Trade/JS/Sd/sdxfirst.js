var caizhong="\u798f\u5f69\u0033\u0044",kaijiang="Sd",qihaoid="sdh",gp=0;
(function(e) {
    var t = e.$,
    n = e.kureicp;
    n.mobile.lotType = n.lottery.lotType.sd,
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
    n.mobile.game = {
        Z1: "\u6bcf\u4f4d\u81f3\u5c11\u90091\u4e2a\u53f7,\u5956\u91d1<strong class='red'>"+jiangjinsd1+"</strong>\u5143",
        TX: "\u4e0e\u5956\u53f7\u76f8\u540c(\u987a\u5e8f\u4e00\u81f4)\uff0c\u4e2d<strong class='red'>470</strong>\u5143\uff1b<br>\u4e0e\u5956\u53f7\u4efb\u610f\u4e24\u4f4d\u6309\u4f4d\u76f8\u540c\uff0c\u4e2d<strong class='red'>21</strong>\u5143",
        F6: "\u81f3\u5c11\u9009\u62e93\u4e2a\u53f7,\u5956\u91d1<strong class='red'>"+jiangjinsd2+"</strong>\u5143",
        F3: "\u81f3\u5c11\u9009\u62e92\u4e2a\u53f7,\u5956\u91d1<strong class='red'>"+jiangjinsd3+"</strong>\u5143",
        HS: "\u4e0e\u5956\u53f73\u4e2a\u53f7\u7801\u76f8\u52a0\u4e4b\u548c\u76f8\u540c\u5373\u4e2d<strong class='red'>14</strong>\u81f3<strong class='red'>1404</strong>\u5143",
        B3: "\u6295\u6ce8\u53f7\u7801\u4e2d\u4efb\u610f\u4e24\u4f4d\u6570\u5b57\u76f8\u540c\u3002\u4e0e\u5956\u53f7\u76f8\u540c(\u987a\u5e8f\u4e00\u81f4)\uff0c\u4e2d<strong class='red'>693</strong>\u5143\uff1b\u4e0e\u5956\u53f7\u76f8\u540c(\u987a\u5e8f\u4e0d\u9650)\uff0c\u4e2d<strong class='red'>173</strong>\u5143",
        B6: "\u6295\u6ce8\u53f7\u7801\u4e2d\u4e09\u4f4d\u6570\u5b57\u5404\u4e0d\u76f8\u540c\u3002\u4e0e\u5956\u53f7\u76f8\u540c(\u987a\u5e8f\u4e00\u81f4)\uff0c\u4e2d<strong class='red'>606</strong>\u5143\uff1b\u4e0e\u5956\u53f7\u76f8\u540c(\u987a\u5e8f\u4e0d\u9650)\uff0c\u4e2d<strong class='red'>86</strong>\u5143",
        "1D": "\u4e0e\u5956\u53f7\u4e2d\u5bf9\u5e94\u4f4d\u7f6e\u7684\u53f7\u7801\u76f8\u540c\uff0c\u4e2d<strong class='red'>10</strong>\u5143",
        C1: "\u4e0e\u5956\u53f7\u4efb\u610f\u4e00\u4e2a\u53f7\u7801\uff0c\u4e2d<strong class='red'>2</strong>\u5143\uff1b\u4e8c\u4e2a\u53f7\u7801\u76f8\u540c\uff0c\u4e2d<strong class='red'>12</strong>\u5143\uff1b\u4e09\u4e2a\u53f7\u7801\u76f8\u540c\uff0c\u4e2d<strong class='red'>230</strong>\u5143",
        "2D": "\u4e0e\u5956\u53f7\u4e2d\u5bf9\u5e94\u4e24\u4e2a\u4f4d\u7f6e\u7684\u53f7\u7801\u76f8\u540c\uff0c\u4e2d<strong class='red'>104</strong>\u5143",
        C2: "\u4e0e\u5956\u53f7\u4efb\u610f\u4e24\u4e2a\u53f7\u7801\u76f8\u540c\u5373\u4e2d\u5956\u3002\u6295\u6ce8\u4e3a\u4e24\u540c\u53f7\uff0c\u4e2d<strong class='red'>37</strong>\u5143\uff1b\u4e24\u4e0d\u540c\u53f7\uff0c\u4e2d<strong class='red'>19</strong>\u5143",
        DXJO: "\u5927\u5c0f\uff1a\u731c\u5956\u53f73\u4e2a\u6570\u5b57\u4e4b\u548c\u7684\u5927\u6216\u5c0f\uff0c\u5956\u91d1<strong class='red'>6</strong>\u5143\uff1b<br>\u5947\u5076\uff1a\u731c\u5956\u53f73\u4e2a\u6570\u5b57\u7684\u5947\u6216\u5076\uff0c\u5956\u91d1<strong class='red'>8</strong>\u5143",
        TL: "\u5956\u53f7\u4ee5\u5347\u3001\u964d\u5e8f\u6392\u5217\u7684\u53f7\u7801(890\u3001098\u3001901\u3001109\u9664\u5916)\uff0c\u5956\u91d1<strong class='red'>65</strong>\u5143",
        "3T": "\u5956\u53f7\u4e3a\u4e09\u540c\u53f7(\u5982111\u3001222)\uff0c\u5956\u91d1<strong class='red'>104</strong>\u5143"
    },
    n.mobile.gamedt = {
        F6: "\u90091-2\u4e2a\u80c6\u7801,1-9\u4e2a\u62d6\u7801,\u76f8\u52a0\u81f3\u5c113\u4e2a,\u5956\u91d1<strong class='red'>173</strong>\u5143",
        F3: "\u90091\u4e2a\u80c6\u7801,1-9\u4e2a\u62d6\u7801,\u76f8\u52a0\u81f3\u5c112\u4e2a,\u5956\u91d1<strong class='red'>346</strong>\u5143"
    },
    n.mobile.getchartUrl_dev = n.lottery.APIChart + "/zst/qmchartdata",
    n.mobile.selectCodeInit = function() {
        var r = t(".plays");
        r.on("click",
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
            p = t("#help"),
            d = t("#sd,#countdown,#line"),
            v = "btn-pop-on",
            m = "head-arron",
            g = "none",
            y = "selected",
            b = e.attr("pt").split("|"),
            w = +b[0],
            E = b[1],
            S = b[2],
            x;
            S == "dt" ? x = n.mobile.gamedt[E] : x = n.mobile.game[E],
            f.attr("href", "./cart.asp?pt=" + E),
            s.removeClass(v),
            e.addClass(v),
            r.removeClass(m),
            i.addClass(g),
            p.addClass(g),
            h.addClass(g),
            a.removeClass(g),
            d.removeClass(g),
            o.addClass(g).eq(w).removeClass(g),
            u.text(e.text()),
            a.html(x),
            o.find("." + y).removeClass(y),
            l.text(0),
            n.mobile.LOT_PLAY = S,
            n.mobile.LOT_METHOD = w,
            n.mobile.LOT_GAME = E;
            if (S == "charts") {
                o.eq(0).removeClass(g);
                var T = t("#chartplay");
                t("#hd_second,#hd_third").html('<tr><td colspan="12">\u6b63\u5728\u52aa\u529b\u52a0\u8f7d\u4e2d\uff0c\u8bf7\u7a0d\u540e...</td></tr>'),
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
                o.eq(w).removeClass(g),
                p.removeClass(g),
                h.removeClass(g),
                a.addClass(g),
                d.addClass(g),
                T.text(e.text()),
                n.mobile.getCharts()
            }
            n.mobile.clear()
        });
        var i = n.string.getUrlParam("pt") || "Z1",
        s = {
            Z1: 0,
            TX: 1,
            F6: 2,
            F3: 3,
            HS: 4,
            B3: 5,
            B6: 6,
            "1D": 7,
            C1: 8,
            "2D": 9,
            C2: 10,
            DX: 11,
            JO: 11,
            DXJO: 11,
            TL: 12,
            "3T": 13
        };
        r.eq(s[i]).trigger("click"),
        t(".pick-box").on(n.lottery.tap, "span",
        function() {
            var e = t(this),
            r = "selected",
            i = "dis";
            if (e.hasClass(i)) return ! 1;
            var s = t(".pick"),
            o = n.mobile.LOT_PLAY,
            u = n.mobile.LOT_GAME;
            e.toggleClass(r);
            if (u == "B3" || u == "B6") {
                var a = s.eq(1).find("ul"),
                f = a.eq(0).find("." + r),
                l = a.eq(1).find("." + r),
                c = a.eq(2).find("." + r),
                h = a.find("." + i),
                p = [],
                d = [],
                v = [];
                t.each(h,
                function(e, n) {
                    t(n).removeClass(i)
                }),
                t.each(f,
                function(e, n) {
                    p.push( + t.trim(t(n).text()))
                }),
                t.each(l,
                function(e, n) {
                    d.push( + t.trim(t(n).text()))
                }),
                t.each(c,
                function(e, n) {
                    v.push( + t.trim(t(n).text()))
                });
                if (u == "B3") {
                    var m = n.mobile.intersection(p, d),
                    g = n.mobile.intersection(d, v),
                    y = n.mobile.intersection(v, p);
                    if (m.length) for (var b = 0; b < m.length; b++) a.eq(2).find("span").eq(m[b]).addClass(i);
                    if (g.length) for (var b = 0; b < g.length; b++) a.eq(0).find("span").eq(g[b]).addClass(i);
                    if (y.length) for (var b = 0; b < y.length; b++) a.eq(1).find("span").eq(y[b]).addClass(i)
                } else {
                    if (p.length) for (var b = 0; b < p.length; b++) a.eq(1).find("span").eq(p[b]).addClass(i),
                    a.eq(2).find("span").eq(p[b]).addClass(i);
                    if (d.length) for (var b = 0; b < d.length; b++) a.eq(0).find("span").eq(d[b]).addClass(i),
                    a.eq(2).find("span").eq(d[b]).addClass(i);
                    if (v.length) for (var b = 0; b < v.length; b++) a.eq(1).find("span").eq(v[b]).addClass(i),
                    a.eq(0).find("span").eq(v[b]).addClass(i)
                }
            }
            if (o == "dt") {
                var a = s.eq(7).find("ul"),
                w = a.eq(0),
                E;
                u == "F6" ? E = 2 : u == "F3" && (E = 1);
                if (w.find("." + r).length > E) {
                    e.removeClass(r),
                    n.lottery.alert("\u80c6\u7801\u6700\u591a\u53ea\u80fd\u9009" + E + "\u4e2a\u80c6\u9009");
                    return
                }
                var S = e.parents("dl"),
                x = +e.text(),
                T = S.siblings().find("span");
                T.eq(x).removeClass(r)
            }
            n.mobile.count()
        }),
        t("#nav").on(n.lottery.tap,
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
        t("#sd").on(n.lottery.tap,
        function() {
            var e = t("#sdh").find("p"),
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
            u = t("#nav");
            o.hasClass(s) || u.trigger(n.lottery.tap),
            r.hasClass(i) ? (e.addClass(s), r.removeClass(i)) : (e.removeClass(s), r.addClass(i))
        }),
        t(".btn-chart").on(n.lottery.tap,
        function() {
            r.eq(4).trigger("click");
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
                u = n.mobile.LOT_GAME || "Z1"; ! r || o.find(".selected").length ? n.mobile.pickBall(t(this)) : e.location.href = "./cart.asp?pt=" + u
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
        });
        var o = n.string.getJsonHash();
        if (o.play) {
            var u = 0;
            o.sub && (u = o.sub);
            if (o.play == "chart") {
                r.eq(u).trigger("click");
                if (o.m) {
                    var a = null,
                    f = o.m || 0;
                    a = setTimeout(function() {
                        var e = t("#chart_tab").find("a").eq(f);
                        e.trigger("click")
                    },
                    150)
                }
            } else r.eq(u).trigger("click")
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
        s = "selected",
        o = "dis",
        u = n.mobile.LOT_METHOD,
        a = n.mobile.LOT_GAME || "Z1",
        f = n.mobile.LOT_PLAY,
        l = t(".pick").eq(u).find("ul"),
        c = l.length,
        h = +t("#count").text(),
        p = r.attr("id"),
        d = n.mobile.cart.code || "";
        if (f == "dt") {
            var v = l.eq(0).find("." + s),
            m = l.eq(1).find("." + s),
            g;
            a == "F6" ? g = 3 : a == "F3" && (g = 2);
            if (v.length < 1) {
                n.lottery.alert("\u8bf7\u81f3\u5c11\u9009\u62e91\u4e2a\u80c6\u7801");
                return
            }
            if (m.length < 1) {
                n.lottery.alert("\u8bf7\u81f3\u5c11\u9009\u62e91\u4e2a\u62d6\u7801");
                return
            }
            if (v.length + m.length < g) {
                n.lottery.alert("\u80c6\u7801\u52a0\u62d6\u7801\u81f3\u5c11\u8981\u9009\u62e9 " + g + "\u4e2a");
                return
            }
            var y = t.map(v,
            function(e) {
                return t.trim(t(e).text())
            }),
            b = t.map(m,
            function(e) {
                return t.trim(t(e).text())
            }),
            w,
            E;
            a == "F3" ? (w = n.number.eachCombo(b, 2 - y.length), t.each(w,
            function(e, t) {
                var n = y.concat(t);
                E = n[0] + "," + n[0] + "," + n[1],
                d += "Z3|1|" + E + ";",
                E = n[0] + "," + n[1] + "," + n[1],
                d += "Z3|1|" + E + ";"
            })) : a == "F6" && (w = n.number.eachCombo(b, 3 - y.length), t.each(w,
            function(e, t) {
                E = y.concat(t).join(","),
                d += "Z6|1|" + E + ";"
            }))
        } else {
            var S = ["\u767e", "\u5341", "\u4e2a"],
            x;
            for (var u = 0; u < c; u++) if (a == "Z1" || a == "TX" || a == "B6") {
                x = l.eq(u).find("." + s).length;
                if (!x) {
                    n.lottery.alert("\u8bf7\u5728" + S[u] + "\u4f4d\u81f3\u5c11\u9009\u62e91\u4e2a\u53f7\u7801");
                    return
                }
            } else if (a == "F3") {
                x = l.find("." + s).length;
                if (x < 2) {
                    n.lottery.alert("\u8bf7\u81f3\u5c11\u9009\u62e92\u4e2a\u53f7\u7801");
                    return
                }
            } else if (a == "F6") {
                x = l.find("." + s).length;
                if (x < 3) {
                    n.lottery.alert("\u8bf7\u81f3\u5c11\u9009\u62e93\u4e2a\u53f7\u7801");
                    return
                }
            } else if (a == "HS") {
                x = l.find("." + s).length;
                if (x < 1) {
                    n.lottery.alert("\u8bf7\u81f3\u5c11\u9009\u53d61\u4e2a\u548c\u6570\u53f7\u7801");
                    return
                }
            } else if (a == "B3") {
                if (h < 1) {
                    n.lottery.alert("\u8bf7\u81f3\u5c11\u9009\u53d63\u4e2a\u53f7\u7801\uff0c\u4e14\u6709\u4e24\u4e2a\u76f8\u540c");
                    return
                }
            } else if (a == "1D") {
                if (h < 1) {
                    n.lottery.alert("\u8bf7\u5728\u4efb\u4e00\u4f4d\u81f3\u5c11\u9009\u53d61\u4e2a\u53f7\u7801");
                    return
                }
            } else if (a == "C1") {
                if (h < 1) {
                    n.lottery.alert("\u8bf7\u81f3\u5c11\u9009\u53d61\u4e2a\u53f7\u7801");
                    return
                }
            } else if (a == "2D") {
                if (h < 1) {
                    n.lottery.alert("\u8bf7\u5728\u4efb\u4e24\u4f4d\u5404\u81f3\u5c11\u9009\u53d61\u4e2a\u53f7\u7801");
                    return
                }
            } else if (a == "C2") {
                if (h < 1) {
                    n.lottery.alert("\u8bf7\u81f3\u5c11\u9009\u53d62\u4e2a\u53f7\u7801");
                    return
                }
            } else if (a == "DXJO") {
                if (h < 1) {
                    n.lottery.alert("\u8bf7\u81f3\u5c11\u9009\u62e9\u4e00\u4e2a\u53f7\u7801");
                    return
                }
            } else if (a == "3T" || a == "TL") if (h < 1) {
                n.lottery.alert("\u8bf7\u81f3\u5c11\u9009\u53d61\u6ce8\u53f7\u7801");
                return
            }
            var E, T = "",
            N = [];
            if (a == "F3") N = t.map(l.find("." + s),
            function(e) {
                return t.trim(t(e).text())
            }),
            w = n.number.eachCombo(N, 2),
            t.each(w,
            function(e, t) {
                E = t.join(",") + "," + t[1],
                d += "Z3|1|" + E + ";",
                E = t[0] + "," + t.join(","),
                d += "Z3|1|" + E + ";"
            });
            else if (a == "F6") N = t.map(l.find("." + s),
            function(e) {
                return t.trim(t(e).text())
            }),
            w = n.number.eachCombo(N, 3),
            t.each(w,
            function(e, t) {
                E = t.join(","),
                d += "Z6|1|" + E + ";"
            });
            else if (a == "Z1" || a == "TX") {
                for (var C = 0; C < c; C++) N = t.map(l.eq(C).find("." + s),
                function(e) {
                    return t.trim(t(e).text())
                }),
                T += N.join("") + ",";
                d += a + "|" + h + "|" + T.replace(/^,|,$/g, "") + ";"
            } else if (a == "B3") for (var C = 0; C < c; C++) {
                var k = l.eq(C),
                L = t.map(k.find("." + o),
                function(e) {
                    return t.trim(t(e).text())
                }),
                A = t.map(k.find("." + s),
                function(e) {
                    return t.trim(t(e).text())
                });
                if (L.length > 0 && A.length > 0) for (var O = 0; O < L.length; O++) {
                    var M = +L[O];
                    for (var _ = 0; _ < A.length; _++) {
                        var D = +A[_];
                        C == 0 ? d += "B3|1|" + D + "," + M + "," + M + ";": C == 1 ? d += "B3|1|" + M + "," + D + "," + M + ";": d += "B3|1|" + M + "," + M + "," + D + ";"
                    }
                }
            } else if (a == "B6") {
                var P = [[], [], []];
                for (var C = 0; C < c; C++) {
                    var k = l.eq(C),
                    A = t.map(k.find("." + s),
                    function(e) {
                        return t.trim(t(e).text())
                    });
                    P[C] = A
                }
                for (var O = 0; O < P[0].length; O++) for (var _ = 0; _ < P[1].length; _++) for (var H = 0; H < P[2].length; H++) d += "B6|1|" + P[0][O] + "," + P[1][_] + "," + P[2][H] + ";"
            } else if (a == "1D") {
                var P = [[], [], []];
                for (var C = 0; C < c; C++) {
                    var k = l.eq(C),
                    A = t.map(k.find("." + s),
                    function(e) {
                        return t.trim(t(e).text())
                    });
                    P[C] = A
                }
                for (var O = 0; O < 3; O++) {
                    var M = P[O],
                    D = P[O].length;
                    D && (O == 0 ? d += "1D|" + D + "|" + M.join("") + ",-,-;": O == 1 ? d += "1D|" + D + "|-," + M.join("") + ",-;": d += "1D|" + D + "|-,-," + M.join("") + ";")
                }
            } else if (a == "2D") {
                var P = [[], [], []],
                B = [0, 1, 2];
                for (var C = 0; C < c; C++) {
                    var k = l.eq(C),
                    A = t.map(k.find("." + s),
                    function(e) {
                        return t.trim(t(e).text())
                    });
                    P[C] = A
                }
                var j = n.number.eachCombo(B, 2);
                for (var u = 0; u < j.length; u++) {
                    var D = j[u][0],
                    F = j[u][1],
                    I = ["-", "-", "-"],
                    q = P[D].length * P[F].length;
                    q && (I[D] = P[D].join(""), I[F] = P[F].join(""), d += "2D|" + q + "|" + I.join(",") + ";")
                }
            } else if (a == "C2") {
                N = t.map(l.find("." + s),
                function(e) {
                    return t.trim(t(e).text())
                });
                var k = n.number.eachCombo(N, 2);
                for (var u = 0; u < k.length; u++) d += "C2|1|" + k[u].join("") + ";";
                for (var u = 0; u < N.length; u++) d += "C2|1|" + N[u] + N[u] + ";"
            } else a == "HS" ? (N = t.map(l.find("." + s),
            function(e) {
                return t.trim(t(e).find("strong").text())
            }), T += N.join(",") + ",", d += a + "|" + h + "|" + T.replace(/^,|,$/g, "") + ";") : a == "C1" ? (N = t.map(l.find("." + s),
            function(e) {
                return t.trim(t(e).text())
            }), d += a + "|" + h + "|" + N.join("") + ";") : a == "3T" || a == "TL" ? d += a + "|1|***" + ";": a == "DXJO" && (N = t.map(l.find("." + s),
            function(e) {
                var n = t(e),
                r = n.attr("rel"),
                i = n.attr("pt");
                return i + "|1|" + r
            }), d += N.join(";") + ";")
        }
        var R = h;
        if (a == "Z1" || a == "TX" || a == "HS") R = 1;
        n.mobile.cart.code = d,
        n.mobile.cart.group += R,
        n.mobile.cart.count += h;
        var U = n.mobile.cart.code.replace(/;$/g, ""),
        h = n.mobile.cart.count;
        n.localstorage.setItem(n.mobile.storageName, U),
        n.localstorage.setItem(n.mobile.storageMulName, h),
        p == "addcart" ? (t("#group").text(n.mobile.cart.group), n.mobile.clear()) : e.location.href = "./cart.asp?pt=" + a
    },
    n.mobile.clear = function() {
        var e = t("#count,#price"),
        r = t(".pick"),
        i = "selected",
        s = "dis",
        o = n.mobile.LOT_METHOD,
        u = n.mobile.LOT_GAME,
        a = r.eq(o);
        e.text(0),
        a.find("." + i).removeClass(i),
        r.eq(o).find("." + s).removeClass(s)
    },
    n.mobile.countDownInit = function() {
        var e = t("#sd"),
        r = +e.attr("issale"),
        i = e.attr("endtime"),
        s = t(".countdowm");
        r ? n.mobile.getServerTimes(function(e) {
            if ( + e > 0) {
                var t = i * 1 - e * 1;
                t <= 0 && s.text("\u672c\u671f\u5df2\u622a\u6b62")
            }
        }) : s.text("\u6682\u505c\u9500\u552e")
    },
    n.mobile.AsynDownData = function() {
        var e = n.localstorage.getItem(n.mobile.storageName),
        r = ("0" + n.localstorage.getItem(n.mobile.storageMulName)) * 1;
        e && (n.mobile.cart.code = e + ";", n.mobile.cart.group = e.split(/;/g).length, n.mobile.cart.count = r),
        t("#group").text(n.mobile.cart.group)
        /*t.ajax({
            url: "#",//"/int/sdindex?r=" + t.now(),
            dataType: "json",
            timeout: 2e4,
            success: function(e) {
                var r = e.info,
                i = e.blist,
                s = [];
                t("#sd").attr({
                    issue: r.issue,
                    issale: r.IsOpen,
                    endtime: r.EndTime * 1 - r.DsTimeSpace * 1,
                    mul: r.MaxChipMul
                }),
                t(".act").text(r.issue),
                t(".countdowm").text("\u622a\u6b62\u65f6\u95f4\uff1a" + r.etstr),
                n.mobile.countDownInit(),
                t.each(i,
                function(e, t) {
                    var r = t.number.split(/\s?/g),
                    i = "";
                    r[0] != "-" && (i = n.lottery.dealPlay(r));
                    var o = t.trynum ? t.trynum: "-";
                    s.push("<p>\u7b2c" + t.issue + '\u671f\u5f00\u5956\uff1a<strong class="red">' + r.join(" ") + "</strong><em>" + i + "</em><em>\u8bd5\u673a\u53f7\uff1a" + o + "</em></p>")
                }),
                t("#sdh").html(s.join(""))
            },
            error: function() {
                n.mobile.AsynDownData()
            }
        })*/
	},
    n.mobile.count = function() {
        var e = n.mobile.LOT_METHOD,
        r = t(".pick"),
        i = r.eq(e).find("ul"),
        s = n.mobile.LOT_GAME,
        o = n.mobile.LOT_PLAY,
        u = 0,
        a = "selected",
        f,
        l,
        c;
        if (o == "dt") {
            var h = i.eq(0).find("." + a).length,
            p = i.eq(1).find("." + a).length;
            if (h === 0) return;
            switch (s) {
            case "F6":
                u = n.number.combo(p, 3 - h);
                break;
            case "F3":
                u = h * p * 2
            }
        } else switch (s) {
        case "TX":
        case "Z1":
        case "B6":
            u = 1,
            f = i.length;
            for (var d = 0; d < f; d++) u *= i.eq(d).find("." + a).length;
            break;
        case "B3":
            var v = "disabled",
            m = r.eq(1).find("ul"),
            g = m.eq(0).find("." + a),
            y = m.eq(1).find("." + a),
            b = m.eq(2).find("." + a),
            w = m.find("." + v),
            E = [],
            S = [],
            x = [];
            t.each(w,
            function(e, n) {
                t(n).removeClass(v)
            }),
            t.each(g,
            function(e, n) {
                E.push( + t.trim(t(n).text()))
            }),
            t.each(y,
            function(e, n) {
                S.push( + t.trim(t(n).text()))
            }),
            t.each(b,
            function(e, n) {
                x.push( + t.trim(t(n).text()))
            });
            var T = n.mobile.intersection(E, S),
            N = n.mobile.intersection(S, x),
            C = n.mobile.intersection(x, E);
            T.length && b.length && (u += b.length * T.length),
            N.length && g.length && (u += g.length * N.length),
            C.length && y.length && (u += y.length * C.length);
            break;
        case "F3":
            u = n.number.perm(i.find("." + a).length, 2);
            break;
        case "C2":
            l = i.find("." + a).length,
            u = n.number.combo(l, 2),
            u += l;
            break;
        case "F6":
            u = n.number.combo(i.find("." + a).length, 3);
            break;
        case "2D":
            l = [i.eq(0).find("." + a).length, i.eq(1).find("." + a).length, i.eq(2).find("." + a).length],
            c = n.number.eachCombo(l, 2);
            for (var d = 0; d < c.length; d++) u += c[d][0] * c[d][1];
            break;
        case "1D":
        case "C1":
        case "HS":
        case "DXJO":
        case "TL":
        case "3T":
            u = i.find("." + a).length
        }
        t("#count").text(u),
        t("#price").text(u * n.mobile.price)
    },
    n.mobile.intersection = function(e) {
        var n = Array.prototype.slice.call(arguments, 1),
        r = n[0].length,
        i = [];
        for (var s = 0; s < r; s++) t.inArray(n[0][s], e) > -1 && i.push(n[0][s]);
        return i
    },
    t(function() {
        n.mobile.storageName = "storage" + n.mobile.lotType,
        n.mobile.storageMulName = "storage" + n.mobile.lotType + "mul",
        n.mobile.AsynDownData(),
        n.mobile.selectCodeInit()
    })
})(window);