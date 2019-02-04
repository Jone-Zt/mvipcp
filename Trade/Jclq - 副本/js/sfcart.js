(function(e) {
    var t = e.$,
    n = e.qh360cp;
    n.mobile.max = 5e6,
    n.mobile.code = "",
    n.mobile.price = n.lottery.price,
    n.mobile.maxMoney = n.lottery.maxMoney,
    n.mobile.playType = "SFC",
    n.mobile.buyPercent = "0.05",
    n.mobile.baodiPerc = 0,
    n.mobile.BUYTYPE = 0,
    n.mobile.limit = 2,
    n.mobile.passTypeJclq = {
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
    n.mobile.passTypeJclqDg = {
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
        if (r) for (var s = 0; s < e.length; s++) {
            var o = t[e[s]].dg * 1;
            i += o
        } else i = 3;
        i > 2 ? n.mobile.limit = 2 : n.mobile.limit = 1
    },
    n.mobile.codeViewInit = function() {
        var e = n.mobile.selectGameMap,
        r = n.number.sortNum(n.mobile.selectGame),
        i = [],
        s = t("#mybet");
        if (!r.length) return s.html('<tr><th colspan="3" class="nocode font14">\u60a8\u8fd8\u6ca1\u6709\u9009\u62e9\u4efb\u4f55\u6bd4\u8d5b</th></tr>'),
        t("#standard").html('<li class="nobet red">\u8bf7\u81f3\u5c11\u9009\u62e92\u573a\u6bd4\u8d5b</li>'),
        t("#end").remove(),
        t("#clear").addClass("btn-off"),
        !1;
        for (var o = 0; o < r.length; o++) {
            var u = e[r[o]],
            a = u.sp,
            f = u.indexs,
            l = u.spall,
            c = u.dan,
            h = u.rq,
            p = "",
            d = ["", ""],
            v = " active";
            for (var m = 0; m < f.length; m++) f[m] == "2" ? d[0] = "class='" + v + "'": f[m] == "1" && (d[1] = "class='" + v + "'");
            a.length === 0 ? p = "dan-dis": c && (p = "dan-on"),
            i.push("<tr id='match-" + r[o] + "' matchcode='" + r[o] + "' homeTeam='" + u.homeTeam + "' awayTeam='" + u.awayTeam + "' endtime='" + u.endtime + "'>"),
            i.push("<th width='10%'></th>"),
            i.push("<th width='80%'><ul class='list-hd'><li>" + u.awayTeam + "</li><li class='vs'><em class='gray'>VS</em></li><li>" + u.homeTeam + "</li></ul></th>"),
            i.push("<th width='10%'></th></tr>"),
            i.push("<tr id='bet-" + r[o] + "' matchcode='" + r[o] + "' homeTeam='" + u.homeTeam + "' awayTeam='" + u.awayTeam + "' endtime='" + u.endtime + "' rq='" + u.rq + "'>"),
            i.push("<td width='10%'><span class='cp-cls' name='del' id='del_" + r[o] + "'>X</span></td>"),
            i.push("<td width='80%'>"),
            i.push("<ul class='jc-list2' matchcode='" + r[o] + "'>"),
            i.push("<li " + d[0] + " index='2'><span class='bet-btn'>\u5ba2\u80dc <cite class='gray ml5'>" + l[0] + "</cite></span></li>"),
            i.push("<li " + d[1] + " index='1'><span class='bet-btn'>\u4e3b\u80dc <cite class='gray ml5'>" + l[1] + "</cite></span></li>"),
            i.push("</ul></td>"),
            i.push("<td width='10%'><span class='dan " + p + "' name='dans' id='dans_" + r[o] + "'>\u80c6</span></td>"),
            i.push("</tr>")
        }
        t("#teamnum").text(r.length),
        t("#endtime").text(e[r[0]].endtime),
        s.html(i.join("")),
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
            var e = t(this),
            r = e.parent().parent(),
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
                if (!e.hasClass(d) && s.find("." + d).length >= 7) return n.lottery.alert("\u8be5\u73a9\u6cd5\u6700\u591a\u652f\u63017\u4e2a\u80c6"),
                !1;
                var g = n.mobile.selectGameMap[u].indexs.length;

                if (!g) return ! 1;
                e.toggleClass(d),
                e.hasClass(d) ? n.mobile.selectGameMap[u].dan = !0 : n.mobile.selectGameMap[u].dan = !1
            } else {
                var y = e.parent();
                y.toggleClass(c);
                var b = [],
                w = [],
                E;
                if (!u) return;
                r.find("span").each(function() {
                    var e = t(this),
                    n = e.parent(),
                    r = e.find("cite");
                    n.hasClass(c) && (E = r.text(), b.push(E), temp = n.attr("index"), w.push(temp))
                });
                var S = t("#dans_" + u);
                b.length === 0 ? (S.addClass("dan-dis"), n.mobile.selectGameMap[u].indexs = w, n.mobile.selectGameMap[u].sp = b) : (n.mobile.selectGameMap[u].indexs = w, n.mobile.selectGameMap[u].sp = b, S.removeClass("dan-dis"))
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
            if (!t("#standard").find("li").not(".btn-jc-dis").not(".none").length) return n.lottery.alert("\u8bf7\u81f3\u5c11\u9009\u62e92\u573a\u6bd4\u8d5b"),
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
            e.location.href = "/Trade/jclq/sf.htm"
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
                    s.html('<tr><th colspan="3" class="nocode font14">\u60a8\u8fd8\u6ca1\u6709\u9009\u62e9\u4efb\u4f55\u6bd4\u8d5b\uff01</th></tr>'),
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
                i = r == "title" ? "\u7ade\u5f69\u7bee\u7403": "\u8fd9\u4e2a\u5bb6\u4f19\u5f88\u61d2\uff0c\u53ea\u60f3\u4e2d\u5927\u5956";
                n == i && e.val("")
            },
            blur: function() {
                var e = t(this),
                n = t.trim(e.val()),
                r = e.attr("id"),
                i = r == "title" ? "\u7ade\u5f69\u7bee\u7403": "\u8fd9\u4e2a\u5bb6\u4f19\u5f88\u61d2\uff0c\u53ea\u60f3\u4e2d\u5927\u5956";
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
        o = [],
        u = 0,
        a = [],
        f = [],
        l = [],
        c = [],
        h = [],
        p = [],
        d = [],
        v = 0,
        m = 0,
        g = t("#ownMul").val();
        t.each(r,
        function(e, t) {
            var r = n.mobile.selectGameMap[t];
            if (r.indexs.length) {
                var d = Math.max.apply(null, r.sp),
                v = t.replace(/^\d{2}/g, "");
                r.dan ? (u++, a.push(r.indexs.length), f.push(d), l.push(v + "=" + r.indexs.join("/"))) : (c.push(r.indexs.length), h.push(d), p.push(v + "=" + r.indexs.join("/"))),
                i.push(r.indexs.length),
                s.push(d),
                o.push(r.dan ? 1 : 0)
            }
        }),
        l.length < 1 ? n.mobile.code = p.join(",") : n.mobile.code = l.join(",") + "$" + p.join(","),
        d = t.map(t("#pick-way").find(".btn-jc-on"),
        function(e) {
            return t(e).attr("type")
        }),
        n.mobile.code = n.mobile.playType + "|" + n.mobile.code + "|" + d.join(",") + "|" + u + "," + u;
        if (d.length) {
            var y = d.length,
            b, w, E, S, x, T, N, C;
            for (var k = 0; k < y; k++) {
                var L = d[k].split("*");
                if (L[1] > 1) {
                    b = n.number.Cs(c, L[0] - u),
                    w = n.number.Cs(a, u),
                    comboListSP = n.number.Cs(h, L[0] - u),
                    comboShareSP = n.number.Cs(f, u);
                    if (u) {
                        x = [],
                        E = b.length,
                        S = w.length;
                        for (var A = 0; A < E; A++) for (var O = 0; O < S; O++) x.push(b[A].concat(w[O]));
                        for (var M = 0; M < x.length; M++) {
                            var _ = n.mobile.passTypeJclq[d[k]];
                            for (var D = 0; D < _.length; D++) v += n.number.N1(x[M], _[D])
                        }
                        C = [],
                        comboListTmpSP = comboListSP.length,
                        N = comboShareSP.length;
                        for (var P = 0; P < comboListTmpSP; P++) for (var H = 0; H < N; H++) C.push(comboListSP[P].concat(comboShareSP[H]));
                        for (var B = 0; B < C.length; B++) {
                            var _ = n.mobile.passTypeJclq[d[k]],
                            j = 0;
                            for (var F = 0; F < _.length; F++) j += n.number.N2SP(C[B], _[F]);
                            m += n.number.format(j, 3, -1) * 1 * 2 * g
                        }
                    } else {
                        for (var M = 0; M < b.length; M++) {
                            var _ = n.mobile.passTypeJclq[d[k]];
                            for (var D = 0; D < _.length; D++) v += n.number.N1(b[M], _[D])
                        }
                        for (var B = 0; B < comboListSP.length; B++) {
                            var _ = n.mobile.passTypeJclq[d[k]],
                            j = 0;
                            for (var F = 0; F < _.length; F++) j += n.number.N2SP(comboListSP[B], _[F]);
                            m += n.number.format(j, 3, -1) * 1 * 2 * g
                        }
                    }
                } else v += n.number.N1d([i, o], L[0]),
                m += n.number.N1SP([s, o], L[0], g)
            }
        }
        var I = t("#ownMul").val(),
        q = v * n.mobile.price * g,
        R = v * n.mobile.price * I,
        U = Math.ceil(R * n.mobile.buyPercent);
        t("#ownCount").text(v),
        t("#ownMoney").text(q),
        t("#meRG").val(U),
        t("#payMoney").text(U),
        t("#maxBD").text(R - U),
        e && t("#meBD").val(0),
        t("#bouns").text(n.number.format(m, 2))
    },
    n.mobile.createPM = function(e) {
        var r = n.mobile.selectGame.length,
        i = 0,
        s = [],
        o,
        u = "btn-jc-on",
        a = "dan-on",
        f = "btn-jc-dis",
        l = n.mobile.limit == 1 ? n.mobile.passTypeJclqDg: n.mobile.passTypeJclq,
        c = [],
        h = [],
        p = [],
        d,
        v,
        m,
        g,
        y,
        b = t("#pick-way");
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
        for (item in l) d = l[item],
        g = item.split("*")[0] * 1,
        y = t.inArray(item, c) != -1 ? " btn-jc-on": "",
        v = g <= r ? "block": "none",
        m = '<li><span class="btn-jc' + y + '" type="' + item + '" style="display:' + v + '">' + item.replace("1*1", "\u5355\u5173").replace(/\*/g, "\u4e32") + "</span></li>",
        v == "block" && (item.replace(/^\d\*1$/g, "") === "" ? h.push(m) : p.push(m));
        var w = t("#standard"),
        E = t("#pmb"),
        S = t("#group"),
        x = t("#mypass");
        if (h.length) {
            w.html(h.join(""));
            if (e && r <= 2) if (n.mobile.limit > 1 || n.mobile.limit == 1 && r == 1) {
                var T = w.find("span").eq(0),
                N = "btn-jc-on";
                T.hasClass(N) || (T.toggleClass(N), x.text(T.text()), t("#optimize").removeClass("btn-off"), n.mobile.createPM(), n.mobile.passs(), n.mobile.count())
            }
        } else w.html("<li class='nobet red'>\u8bf7\u81f3\u5c11\u9009\u62e92\u573a\u6bd4\u8d5b</li>");
        p.length ? (S.html(p.join("")), E.show()) : E.hide();
        var C = 0,
        k = 0,
        L = 0,
        A = t("#standard").find("." + u),
        h = [],
        O = [];
        A.each(function() {
            var e = t(this),
            n = e.attr("type"),
            r = n.split("*")[0] * 1;
            O.push(n),
            h.push(r)
        }),
        C = h[0] || 0,
        C ? (C == o && (k = 1, L = 1), C - 1 == i && (L = 1)) : i === o - 1 && (L = 1),
        t.each(s,
        function(e, r) {
            var i = t("#dans_" + r);
            L ? (k && i.removeClass(a), i.hasClass(a) || (i.addClass(f), n.mobile.selectGameMap[r].dan = !1)) : (i.removeClass(f), k && i.removeClass(a))
        }),
        b.find("span").each(function() {
            var e = t(this),
            n = e.parent(),
            r = "none",
            s = e.attr("type").split("*")[0];
            k ? s > o ? (e.addClass(f), n.addClass(r)) : (e.removeClass(f), n.removeClass(r)) : s > o ? (e.addClass(f).removeClass(u), n.addClass(r)) : i < s ? (e.removeClass(f), n.removeClass(r)) : (e.addClass(f).removeClass(u), n.addClass(r))
        })
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
                //n.mobile.postData()
				football_submit("storage_130043_sf_map","storage_130043_sf_game");
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
            PlayID: 1011
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
                PTitle: t.trim(t("#title").val()) || "\u7ade\u5f69\u7bee\u7403",
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
        n.mobile.storageGameMap = "storage_130043_sf_map",
        n.mobile.storageGame = "storage_130043_sf_game",
        n.mobile.dealStorage(),
        n.mobile.uiInit(),
        n.mobile.submitInit(),
        n.mobile.codeViewInit(),
        n.mobile.codeConfInit()
    })
})(window);