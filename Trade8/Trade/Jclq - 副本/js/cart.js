(function(e) {
    var t = e.$,
    n = e.qh360cp;
    n.mobile.max = 5e6,
    n.mobile.code = "",
    n.mobile.price = n.lottery.price,
    n.mobile.maxMoney = n.lottery.maxMoney,
    n.mobile.playType = "LHH",
    n.mobile.buyPercent = "0.05",
    n.mobile.baodiPerc = 0,
    n.mobile.BUYTYPE = 0,
    n.mobile.limit = 2,
    n.mobile.passTypejclq = {
        "2*1": [2],
        "3*1": [3],
        "4*1": [4],
        "5*1": [5],
        "6*1": [6],
        "7*1": [7],
        "8*1": [8],
        "3*3": [2],
        "3*4": [2, 3],
        "4*4": [3],
        "4*5": [3, 4],
        "4*6": [2],
        "4*11": [2, 3, 4],
        "5*5": [4],
        "5*6": [4, 5],
        "5*10": [2],
        "5*16": [3, 4, 5],
        "5*20": [2, 3],
        "5*26": [2, 3, 4, 5],
        "6*6": [5],
        "6*7": [5, 6],
        "6*15": [2],
        "6*20": [3],
        "6*22": [4, 5, 6],
        "6*35": [2, 3],
        "6*42": [3, 4, 5, 6],
        "6*50": [2, 3, 4],
        "6*57": [2, 3, 4, 5, 6],
        "7*7": [6],
        "7*8": [6, 7],
        "7*21": [5],
        "7*35": [4],
        "7*120": [2, 3, 4, 5, 6, 7],
        "8*8": [7],
        "8*9": [7, 8],
        "8*28": [6],
        "8*56": [5],
        "8*70": [4],
        "8*247": [2, 3, 4, 5, 6, 7, 8]
    },
    n.mobile.passTypejclqDg = {
        "1*1": [1],
        "2*1": [2],
        "3*1": [3],
        "4*1": [4],
        "5*1": [5],
        "6*1": [6],
        "7*1": [7],
        "8*1": [8],
        "3*3": [2],
        "3*4": [2, 3],
        "4*4": [3],
        "4*5": [3, 4],
        "4*6": [2],
        "4*11": [2, 3, 4],
        "5*5": [4],
        "5*6": [4, 5],
        "5*10": [2],
        "5*16": [3, 4, 5],
        "5*20": [2, 3],
        "5*26": [2, 3, 4, 5],
        "6*6": [5],
        "6*7": [5, 6],
        "6*15": [2],
        "6*20": [3],
        "6*22": [4, 5, 6],
        "6*35": [2, 3],
        "6*42": [3, 4, 5, 6],
        "6*50": [2, 3, 4],
        "6*57": [2, 3, 4, 5, 6],
        "7*7": [6],
        "7*8": [6, 7],
        "7*21": [5],
        "7*35": [4],
        "7*120": [2, 3, 4, 5, 6, 7],
        "8*8": [7],
        "8*9": [7, 8],
        "8*28": [6],
        "8*56": [5],
        "8*70": [4],
        "8*247": [2, 3, 4, 5, 6, 7, 8]
    },
    n.mobile.cal = function() {
        var e = n.mobile.selectGame,
        t = n.mobile.selectGameMap,
        r = e.length,
        i = 2;
        if (r) {
            for (var s = 0; s < e.length; s++) if (t[e[s]].dg) {
                var o = t[e[s]].dg;
                for (var u = 0; u < o.length; u++) i += o[u] * 1
            }
        } else i = 3;
        i > 2 ? n.mobile.limit = 2 : n.mobile.limit = 1
    },
    n.mobile.codeViewInit = function() {
        var e = n.mobile.selectGameMap,
        r = n.number.sortNum(n.mobile.selectGame),
        i = {
            sfc: {
                2 : "\u5ba2\u80dc",
                1 : "\u4e3b\u80dc"
            },
            rsf: {
                2 : "\u8ba9\u5206\u5ba2\u80dc",
                1 : "\u8ba9\u5206\u4e3b\u80dc"
            },
            dxf: {
                2 : "\u5c0f\u5206",
                1 : "\u5927\u5206"
            },
            sfd: {
                11 : "\u5ba2\u80dc1-5",
                12 : "\u5ba2\u80dc6-10",
                13 : "\u5ba2\u80dc11-15",
                14 : "\u5ba2\u80dc16-20",
                15 : "\u5ba2\u80dc21-25",
                16 : "\u5ba2\u80dc26+",
                "01": "\u4e3b\u80dc1-5",
                "02": "\u4e3b\u80dc6-10",
                "03": "\u4e3b\u80dc11-15",
                "04": "\u4e3b\u80dc16-20",
                "05": "\u4e3b\u80dc21-25",
                "06": "\u4e3b\u80dc26+"
            }
        },
        s = [],
        o = t("#mybet");
        if (!r.length) return o.html('<tr><th colspan="3" class="nocode font14">\u60a8\u8fd8\u6ca1\u6709\u9009\u62e9\u4efb\u4f55\u6bd4\u8d5b</th></tr>'),
        t("#standard").html('<li class="nobet red">\u8bf7\u81f3\u5c11\u9009\u62e92\u573a\u6bd4\u8d5b</li>'),
        t("#end").remove(),
        t("#clear").addClass("btn-off"),
        !1;
        for (var u = 0; u < r.length; u++) {
            var a = t.extend({},
            e[r[u]]);
            a.matchcode = r[u];
            var f = "",
            l = a.sp,
            c = a.dan;
            l.length === 0 ? f = "dan-dis": c && (f = "dan-on"),
            a.selectdan = f;
            var h = {
                sfc: [],
                rsf: [],
                dxf: [],
                sfd: []
            },
            p = a.indexs;
			console.log(p);
            for (var d = 0; d < p.length; d++) {
                var v = p[d].match(/^(sfc|rsf|dxf|sfd)_(\d{1,2})/);
				console.log("VV=>"+v);
                h[v[1]].push(i[v[1]][v[2]])
            }
            h.sfc.length && (a.sfc = '<p><em class="gray play">\u80dc\u8d1f\uff1a</em> <b class="red">' + h.sfc.join("\uff0c") + "</b></p>");
            if (h.rsf.length) {
                var m = ""; + a.rq > 0 ? m = '<b class="red">(' + a.rq + ")</b>": +a.rq < 0 && (m = '<b class="green">(' + a.rq + ")</b>"),
                a.rsf = '<p><em class="gray play">\u8ba9\u5206' + m + '\uff1a</em> <b class="red">' + h.rsf.join("\uff0c") + "</b></p>"
            }
            h.dxf.length && (a.dxf = '<p><em class="gray play">\u5927\u5c0f\u5206<b class="red">(' + a.mid * 1 + ')</b>\uff1a</em> <b class="red">' + h.dxf.join("\uff0c") + "</b></p>"),
            h.sfd.length && (a.sfd = '<p><em class="gray play">\u80dc\u5206\u5dee\uff1a</em> <b class="red">' + h.sfd.join("\uff0c") + "</b></p>"),
            s.push(n.template("order_list_zhh", a))
        }
        t("#teamnum").text(r.length),
        t("#endtime").text(e[r[0]].endtime),
        o.html(s.join("")),
        n.mobile.cal(),
        n.mobile.createPM("create")
    },
    n.mobile.sdan = function() {
        var e = n.mobile.selectGame,
        t = n.mobile.selectGameMap,
        r = 0;
        for (var i = 0; i < e.length; i++) t[e[i]].dan && r++;
        return r
    },
    n.mobile.removedan = function() {
        var e = n.mobile.selectGame;
        for (var r = 0; r < e.length; r++) {
            var i = t("#dans_" + e[r]).removeClass("dan-on").removeClass("dan-dis");
            n.mobile.selectGameMap[e[r]].dan = !1
        }
    },
    n.mobile.codeConfInit = function() {
        var r = t("#betScroll"),
        i = null,
        s = t("#mybet"),
        o = t("#standard"),
        u = t("#group"),
        a = t("#select"),
        f = t("#pick-way"),
        l = t("#mypass"),
        c = "btn-jc-on",
        h = "pick-way-show",
        p = t(".ui-panel-dismiss"),
        d = t(".more-play"),
        v = t("#editor"),
        m = t("#clear"),
        g = t("#sponsor"),
        y = t("#scrollwrap"),
        b = "none",
        w = t("#MS-wrapper");
        w.height("2500px"),
        setTimeout(function() {
            e.scrollTo(0, 0);
            var t = e.innerHeight - 194;
            r.height(t),
            y.css("min-height", t),
            w.css("height", e.innerHeight + "px"),
            i && i.refresh()
        },
        0),
        s.on(n.lottery.tap, "span",
        function() {
            var e = t(this);
            if (e.parent().hasClass("disabled")) return ! 1;
            var r = e.parent().parent(),
            o = e.attr("name"),
            u = r.attr("matchcode"),
            a = t("#teamnum"),
            f = t("#end"),
            l = t("#endtime"),
            c = "active";
            if (o == "del") {
                var h = n.mobile.sdan();
                n.mobile.selectGame.length - 1 == h && n.mobile.removedan(),
                a.text(n.mobile.selectGame.length - 1);
                var p = t.inArray(u, n.mobile.selectGame);
                delete n.mobile.selectGameMap[u],
                n.mobile.selectGame.splice(p, 1),
                t("#match-" + u).remove(),
                t("#bet-" + u).remove();
                if (n.mobile.selectGame.length === 0) m.addClass("btn-off"),
                f.remove();
                else {
                    var f = n.mobile.selectGameMap[n.mobile.selectGame[0]].endtime;
                    l.text(f)
                }
                n.mobile.selectGame.length === 0 && (s.html('<tr><th colspan="3" class="nocode font14">\u60a8\u8fd8\u6ca1\u6709\u9009\u62e9\u4efb\u4f55\u6bd4\u8d5b</th></tr>'), t("#meBD").val(0)),
                i && i.refresh()
            } else if (o == "dans") {
                var d = "dan-on",
                v = "btn-jc-dis";
                if (e.hasClass(v)) return ! 1;
                if (!e.hasClass(d)) {
                    var g = n.mobile.get_passtype_max() - 1 || 7;
                    if (s.find("." + d).length >= g) return n.lottery.alert("\u8be5\u73a9\u6cd5\u6700\u591a\u652f\u6301" + g + "\u4e2a\u80c6"),
                    !1
                }
                var y = n.mobile.selectGameMap[u].indexs.length;
                if (!y) return ! 1;
                e.toggleClass(d),
                e.hasClass(d) ? n.mobile.selectGameMap[u].dan = !0 : n.mobile.selectGameMap[u].dan = !1
            }
            n.localstorage.setItem(n.mobile.storageGameMap, JSON.stringify(n.mobile.selectGameMap)),
            n.localstorage.setItem(n.mobile.storageGame, JSON.stringify(n.mobile.selectGame)),
            n.mobile.selectGame = n.localstorage.getItem(n.mobile.storageGame) ? JSON.parse(n.localstorage.getItem(n.mobile.storageGame)) : [],
            n.mobile.selectGameMap = n.localstorage.getItem(n.mobile.storageGameMap) ? JSON.parse(n.localstorage.getItem(n.mobile.storageGameMap)) : {},
            n.mobile.cal(),
            n.mobile.createPM("create"),
            n.mobile.passs(),
            n.mobile.count()
        }),
        o.on(n.lottery.tap, "span",
        function() {
            var e = t(this);
            e.toggleClass(c),
            u.find("." + c).removeClass(c),
            n.mobile.createPM(),
            n.mobile.passs(),
            n.mobile.count()
        }),
        u.on(n.lottery.tap, "span",
        function() {
            var e = t(this);
            u.find("." + c).removeClass(c),
            e.toggleClass(c),
            o.find("." + c).removeClass(c),
            n.mobile.createPM(),
            n.mobile.passs(),
            n.mobile.count()
        }),
        a.on(n.lottery.tap,
        function() {
            if (!t("#standard").find("li").not(".btn-jc-dis").not(".none").length) return n.lottery.alert("\u8d5b\u4e8b\u9009\u62e9\u4e0d\u8db32\u573a"),
            !1;
            f.hasClass(h) ? (f.removeClass(h), p.hide()) : (f.addClass(h), p.show())
        }),
        p.on("click",
        function() {
            var e = n.mobile.BUYTYPE || 0;
            if (!e) {
                var r = t(this);
                r.hide(),
                f.removeClass(h)
            }
        }),
        d.on(n.lottery.tap,
        function() {
            var e = t(this);
            u.hasClass(b) ? u.removeClass(b) : u.addClass(b)
        }),
        v.on(n.lottery.tap,
        function() {
            e.location.href = "/jclq/zhh"
        }),
        s.on(n.lottery.tap, ".jc-list2",
        function() {
            var n = t(this),
            r = n.attr("matchcode");
            e.location.href = "/jclq/zhh#" + r
        }),
        m.on("click",
        function() {
            if (m.hasClass("btn-off")) return ! 1;
            n.lightBox.confirm({
                content: '<p class="msg">\u60a8\u771f\u7684\u8981\u6e05\u7a7a\u5df2\u9009\u53f7\u7801\uff1f</p>',
                sure: "\u53d6\u6d88",
                confirmFn: function() {
                    this.close()
                },
                off: "\u786e\u8ba4",
                cancelFn: function() {
                    s.html('<tr><th colspan="3" class="nocode font14">\u60a8\u8fd8\u6ca1\u6709\u9009\u62e9\u4efb\u4f55\u6bd4\u8d5b</th></tr>'),
                    n.mobile.selectGame = [],
                    n.mobile.selectGameMap = {},
                    n.localstorage.removeItem(n.mobile.storageGame),
                    n.localstorage.removeItem(n.mobile.storageGameMap),
                    n.mobile.cal(),
                    n.mobile.createPM("create"),
                    n.mobile.passs(),
                    n.mobile.count(),
                    t("#teamnum").text(0),
                    m.addClass("btn-off"),
                    this.close()
                }
            }),
            t(".sure").addClass("shut")
        }),
        t("#mecoop").on("click",
        function() {
            if (n.mobile.selectGame.length < n.mobile.limit) return n.lottery.alert("\u8bf7\u81f3\u5c11\u9009\u53d6" + n.mobile.limit + "\u573a\u6bd4\u8d5b"),
            !1;
            if (f.find("." + c).length < 1) return n.lottery.alert("\u8bf7\u9009\u53d6\u8fc7\u5173\u65b9\u5f0f"),
            !1;
            n.mobile.BUYTYPE = 1,
            p.show(),
            g.removeClass(b),
            f.removeClass(h),
            t(".own-1").hide(),
            t(".own-2").show()
        }),
        t("#meown").on("click",
        function() {
            n.mobile.BUYTYPE = 0,
            g.addClass(b),
            t(".own-1").show(),
            t(".own-2").hide()
        }),
        t("#meRG").on({
            keyup: function() {
                var e = t(this),
                r = t("#ownMoney").text() * 1;
                n.mobile.minRGcheck(e, r)
            },
            blur: function() {
                var e = t("#ownMoney").text() * 1,
                r = t(this);
                n.mobile.minRGcheck(r, e),
                r.val() / e < n.mobile.buyPercent && r.val(Math.ceil(e * n.mobile.buyPercent)),
                t("#maxBD").html(e - r.val() * 1),
                t("#meBD").val() * 1 + r.val() * 1 >= e && t("#meBD").val(e - r.val() * 1),
                t("#payMoney").text(t("#meBD").val() * 1 + r.val() * 1)
            }
        }),
        t("#title,#content").on({
            focus: function() {
                var e = t(this),
                n = t.trim(e.val()),
                r = e.attr("id"),
                i = r == "title" ? "\u7ade\u5f69\u8db3\u7403": "\u8fd9\u4e2a\u5bb6\u4f19\u5f88\u61d2\uff0c\u53ea\u60f3\u4e2d\u5927\u5956";
                n == i && e.val("")
            },
            blur: function() {
                var e = t(this),
                n = t.trim(e.val()),
                r = e.attr("id"),
                i = r == "title" ? "\u7ade\u5f69\u8db3\u7403": "\u8fd9\u4e2a\u5bb6\u4f19\u5f88\u61d2\uff0c\u53ea\u60f3\u4e2d\u5927\u5956";
                n || e.val(i)
            }
        }),
        t("#meBD").on({
            keyup: function() {
                var e = +t("#ownMoney").text(),
                n = t(this),
                r = +t("#meRG").val();
                e < 2 && n.val(0),
                n.val(n.val().replace(/[^\d]|^0/g, "")),
                n.val() * 1 > e - r && n.val(e - r)
            },
            blur: function() {
                var e = +t("#ownMoney").text(),
                n = t(this),
                r = +t("#meRG").val();
                n.val(n.val().replace(/[^\d]|^0/g, "")),
                n.val() == "" && n.val(0),
                n.val() * 1 > e - r && n.val(e - r),
                t("#payMoney").text(r + n.val() * 1)
            }
        }),
        t("#royalty").on("change",
        function() {
            var e = t(this),
            r = e.val(),
            i = parseInt(r * 100),
            s = t("#percent");
            i > 5 ? (n.mobile.buyPercent = r, s.text(i)) : (n.mobile.buyPercent = "0.05", s.text(5)),
            n.mobile.count("clear")
        }),
        setTimeout(function() {
            i = new iScroll("betScroll", {
                hScrollbar: !1,
                vScrollbar: !1
            }),
            i && i.refresh && i.refresh()
        },
        400)
    },
    n.mobile.passs = function() {
        var e = t("#pick-way"),
        n = t("#mypass"),
        r = "btn-jc-on",
        i = [],
        s = e.find("." + r);
        t.each(s,
        function(e, n) {
            i.push(t(n).text())
        }),
        i.length ? n.html(i.join(",")) : (n.html('\u8fc7\u5173\u65b9\u5f0f<em class="red">(\u5fc5\u9009)</em>'), t("#optimize").addClass("btn-off"))
    },
    n.mobile.count = function(e) {
        var r = n.number.sortNum(n.mobile.selectGame),
        i = [],
        s = [],
        o = 0,
        u = [],
        a = [],
        f = [],
        l = [],
        c = [],
        h = 0,
        p = 0,
        d = [],
        v = t("#ownMul").val();
        t.each(r,
        function(e, r) {
            var f = n.mobile.selectGameMap[r],
            h = t("#bet-" + r),
            p = {};
            p.matchCode = r;
            if (f.indexs.length) {
                var v = r.replace(/^\d{2}/g, ""),
                m = f.indexs,
                g = f.sp,
                y = "",
                b = {
                    sfc: [],
                    rsf: [],
                    dxf: [],
                    sfd: []
                },
                w = [];
                p.sp = {
                    sfc: {},
                    rsf: {},
                    dxf: {},
                    sfd: {}
                };
                for (var E = 0; E < m.length; E++) {
                    var S = m[E].split("_"),
                    x = S[0],
                    T = S[1],
                    N = S[1];
                    if (x == "sfc" || x == "rsf") T == "1" ? T = "3": T == "2" && (T = "0");
                    x == "sfd" && (T == "01" ? T = "31": T == "02" ? T = "32": T == "03" ? T = "33": T == "04" ? T = "34": T == "05" ? T = "35": T == "06" ? T = "36": T == "11" ? T = "01": T == "12" ? T = "02": T == "13" ? T = "03": T == "14" ? T = "04": T == "15" ? T = "05": T == "16" && (T = "06")),
                    p.sp[x][T] = +g[E],
                    b[x].push(N)
                }
                t.each(b,
                function(e, t) {
                    t.length && (y += v + "-" + e + "=" + t.join("/") + ",", w.push(e + "!" + t.length))
                }),
                y && (y = y.replace(/,$/, "")),
                f.dan ? (o++, u.push(y), c.push(w.join("_"))) : (a.push(y), l.push(w.join("_"))),
                p.isDan = f.dan,
                p.score = +f.rq,
                i.push(f.indexs.length),
                s.push(f.dan ? 1 : 0),
                d.push(p)
            }
        }),
        u.length < 1 ? n.mobile.code = a.join(",") : n.mobile.code = u.join(",") + "$" + a.join(",");
        var m = t("#pick-way");
        f = t.map(m.find(".btn-jc-on"),
        function(e) {
            return t(e).attr("type")
        }),
        n.mobile.code = n.mobile.playType + "|" + n.mobile.code + "|" + f.join(",") + "|" + o + "," + o;
        var g = t("#bouns"),
        y = f.length,
        b = {};
        if (y) for (var w = 0; w < y; w++) {
            var E = f[w],
            S = E.split("*");
            if ( + S[1] > 1) {
                var x = n.number.each_vague_share(l, c, [E], [o, o]),
                T = n.mobile.passTypejclq[E];
                for (var N = 0; N < T.length; N++) {
                    var C = T[N];
                    for (var k = 0; k < x[E].length; k++) h += n.number.N1(x[E][k], C)
                }
                b = {
                    selectMethod: [E.replace("*", "_")],
                    selectGameInfo: d
                };
                var L = Game.jclq.getSpComboBound(b),
                A = L.d,
                O = L.t,
                M = [],
                _ = [];
                for (var k = 0; k < O.length; k++) {
                    var D = O[k].max,
                    P = [];
                    for (var w = 0; w < D.length; w++) {
                        var H = D[w][0],
                        B = D[w][4];
                        H == "sfc" && P.push("sfc!" + B),
                        H == "rsf" && P.push("rsf!" + B),
                        H == "dxf" && P.push("dxf!" + B),
                        H == "sfd" && P.push("sfd!" + B)
                    }
                    M.push(P.join("_"))
                }
                for (var k = 0; k < A.length; k++) {
                    var D = A[k].max,
                    P = [];
                    for (var w = 0; w < D.length; w++) {
                        var H = D[w][0],
                        B = D[w][4];
                        H == "sfc" && P.push("sfc!" + B),
                        H == "rsf" && P.push("rsf!" + B),
                        H == "dxf" && P.push("dxf!" + B),
                        H == "sfd" && P.push("sfd!" + B)
                    }
                    _.push(P.join("_"))
                }
                var x = n.number.each_vague_share(M, _, [E], [o, o]),
                T = n.mobile.passTypejclq[E];
                for (var N = 0; N < T.length; N++) {
                    var C = T[N],
                    j = 0;
                    for (var k = 0; k < x[E].length; k++) j += n.number.N1(x[E][k], C);
                    var F = n.number.format(j, 3, -1);
                    F = n.number.format(F, 2, 465) * 1 * 2 * v,
                    p += F
                }
            } else {
                b = {
                    selectMethod: [E.replace("*", "_")],
                    selectGameInfo: d
                },
                h += n.number.N1d([i, s], S[0]);
                var F = n.number.format(Game.jclq.getMaxBound(b), 3, -1);
                F = n.number.format(F, 2, 465) * v,
                p += F
            }
        }
        var I = t.trim(t("#ownMul").val()) || 1,
        q = h * n.mobile.price * v,
        R = h * n.mobile.price * I,
        U = Math.ceil(R * n.mobile.buyPercent);
        t("#ownCount").text(h),
        t("#ownMoney").text(q),
        t("#meRG").val(U),
        t("#payMoney").text(U),
        t("#maxBD").text(R - U),
        e && t("#meBD").val(0),
        g.text(n.number.format(p, 2))
    },
    n.mobile.createPM = function(e) {
        var r = n.mobile.selectGame.length,
        i = 0,
        s = [],
        o,
        u = "btn-jc-on",
        a = "dan-on",
        f = "btn-jc-dis",
        l = n.mobile.limit == 1 ? n.mobile.passTypejclqDg: n.mobile.passTypejclq,
        c = [],
        h = [],
        p = [],
        d,
        v,
        m,
        g,
        y,
        b = t("#pick-way"),
        w = n.mobile.get_passtype_max();
        t.each(n.mobile.selectGame,
        function(e, t) {
            var r = n.mobile.selectGameMap[t];
            r.indexs.length && (r.dan && i++, s.push(t))
        }),
        o = s.length,
        c = t.map(b.find("." + u),
        function(e) {
            return t(e).attr("type")
        });
        for (item in l) {
            d = l[item],
            g = +item.split("*")[0] * 1;
            if (g > w) continue;
            y = t.inArray(item, c) != -1 ? " btn-jc-on": "",
            v = g <= r ? "block": "none",
            m = '<li><span class="btn-jc' + y + '" type="' + item + '" style="display:' + v + '">' + item.replace("1*1", "\u5355\u5173").replace(/\*/g, "\u4e32") + "</span></li>",
            v == "block" && (item.replace(/^\d\*1$/g, "") === "" ? h.push(m) : p.push(m))
        }
        var E = t("#standard"),
        S = t("#pmb"),
        x = t("#group"),
        T = t("#mypass");
        if (h.length) {
            E.html(h.join(""));
            if (e && r <= 2) if (n.mobile.limit > 1 || n.mobile.limit == 1 && r == 1) {
                var N = E.find("span").eq(0),
                C = "btn-jc-on";
                N.hasClass(C) || (N.toggleClass(C), T.text(N.text()), t("#optimize").removeClass("btn-off"), n.mobile.createPM(), n.mobile.passs(), n.mobile.count())
            }
        } else E.html("<li class='nobet red'>\u8bf7\u81f3\u5c11\u9009\u62e92\u573a\u6bd4\u8d5b</li>");
        p.length ? (x.html(p.join("")), S.show()) : S.hide();
        var k = 0,
        L = 0,
        A = 0,
        O = t("#standard").find("." + u),
        h = [],
        M = [];
        O.each(function() {
            var e = t(this),
            n = e.attr("type"),
            r = n.split("*")[0] * 1;
            M.push(n),
            h.push(r)
        }),
        k = h[0] || 0;
        if (k) k == o && (L = 1, A = 1),
        k - 1 == i && (A = 1);
        else if (i == o - 1 || i == n.mobile.get_passtype_max() - 1) A = 1;
        t.each(s,
        function(e, r) {
            var i = t("#dans_" + r);
            A ? (L && i.removeClass(a), i.hasClass(a) || (i.addClass(f), n.mobile.selectGameMap[r].dan = !1)) : (i.removeClass(f), L && i.removeClass(a))
        }),
        b.find("span").each(function() {
            var e = t(this),
            n = e.parent(),
            r = "none",
            s = e.attr("type").split("*")[0];
            L ? s > o ? (e.addClass(f), n.addClass(r)) : (e.removeClass(f), n.removeClass(r)) : s > o ? (e.addClass(f).removeClass(u), n.addClass(r)) : i < s ? (e.removeClass(f), n.removeClass(r)) : (e.addClass(f).removeClass(u), n.addClass(r))
        })
    },
    n.mobile.get_passtype_max = function() {
        var e = 8,
        r = [],
        i = [],
        s = [],
        o = [],
        u = n.mobile.selectGameMap,
        a = n.mobile.selectGame;
        for (var f = 0; f < a.length; f++) {
            var l = u[a[f]].indexs;
            t.each(l,
            function(e, t) {
                t.indexOf("sfd") > -1 && o.push(t)
            })
        }
        return o.length && (e = 4),
        e
    },
    n.mobile.minRGcheck = function(e, t) {
        if (t < 2) {
            e.val(0);
            return
        }
        e.val(e.val().replace(/[^\d]|^0+/g, "")),
        e.val() * 1 > t && e.val(t)
    },
    n.mobile.uiInit = function() {
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
                n.mobile.count("clear")
            }
        })
    },
    n.mobile.submitInit = function() {
        t("#pay_buy").on({
            click: function() {
                var e = t(this);
                if (e.attr("disabled")) return ! 1;
                if (n.mobile.selectGame.length < n.mobile.limit) return n.lottery.alert("\u8bf7\u81f3\u5c11\u9009\u53d6" + n.mobile.limit + "\u573a\u6bd4\u8d5b"),
                !1;
                if (t("#pick-way").find(".btn-jc-on").length < 1) return n.lottery.alert("\u8bf7\u9009\u53d6\u8fc7\u5173\u65b9\u5f0f"),
                !1;
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
        var e = n.mobile.BUYTYPE || 0,
        r, i = {
            BetCodes: n.mobile.code,
            LotID: "130043",
            OneMoney: n.mobile.price,
            BetPageID: "2001",
            PlayID: 1019
        },
        s = {},
        o = 0;
        if (e == 0) {
            o = t("#ownMoney").text();
            var u = t("#ownMul").val();
            s = {
                BetType: "bet",
                BetMoney: o,
                BetMulti: u
            }
        } else {
            o = t("#ownMoney").text();
            var a = t("#ownMul").val(),
            f = t("#ispublic").val(),
            l = t("#meBD").val(),
            c = t("#meRG").val(),
            h = t("#royalty").val();
            s = {
                BetType: "team",
                BetMoney: o,
                BetMulti: a,
                SecrecyFlag: f,
                UploadFlag: 0,
                LockCount: l,
                SponsorBuy: c,
                SponsorDeduck: h,
                PTitle: t.trim(t("#title").val()) || "\u7ade\u5f69\u8db3\u7403",
                PMemo: t.trim(t("#content").val()) || "\u8fd9\u4e2a\u5bb6\u4f19\u5f88\u61d2\uff0c\u53ea\u60f3\u4e2d\u5927\u5956"
            }
        }
        r = o * 1 > n.mobile.maxMoney;
        if (r) return n.lottery.alert("\u6295\u6ce8\u91d1\u989d\u4e0d\u80fd\u8d85\u8fc7" + n.mobile.maxMoney / 1e4 + "\u4e07\uff01"),
        !1;
        for (var p in s) s.hasOwnProperty(p) && (i[p] = s[p]);
        n.mobile.buyType == "optimize" && (i.OriginCodes = n.mobile.code, i.BetCodes = n.mobile.optimizeCode, i.MixedMulti = 1, i.BetMulti = 1, i.ChipType = 1004),
		n.lottery.ajaxData(i,
        function() {
            t("#pay_buy").trigger("click")
        })
    },
    n.mobile.dealStorage = function() {
        var e = n.date.format(new Date, "YYYY/MM/DD hh:mm"),
        r = (new Date(e)).getTime();
        n.mobile.selectGame = n.localstorage.getItem(n.mobile.storageGame) ? JSON.parse(n.localstorage.getItem(n.mobile.storageGame)) : [],
        n.mobile.selectGameMap = n.localstorage.getItem(n.mobile.storageGameMap) ? JSON.parse(n.localstorage.getItem(n.mobile.storageGameMap)) : {},
        t.each(n.mobile.selectGameMap,
        function(e) {
            var t;
            n.mobile.selectGameMap[e].endtime.match(/01\-01/) ? t = "2015-" + n.mobile.selectGameMap[e].endtime: t = e.match(/^(\d{4})/g)[0] + "-" + n.mobile.selectGameMap[e].endtime;
            var i = (new Date(t.replace(/-/g, "/"))).getTime();
            i - r < 0 && (delete n.mobile.selectGameMap[e], n.array.remove(n.mobile.selectGame, e))
        })
    },
    t(function() {
		/****/
		 var href  = window.location.href ;
		 href      = href.split("/");
		 href      = href[href.length-1];
		 var map   = "storage_130043_"+href.replace('cart.html','_map');
		 var game  = "storage_130043_"+href.replace('cart.html','_game');
		/***/
        n.mobile.storageGameMap = map,
        n.mobile.storageGame = game,
        n.mobile.dealStorage(),
        n.mobile.uiInit(),
        n.mobile.submitInit(),
        n.mobile.codeViewInit(),
        n.mobile.codeConfInit()
    })
})(window);