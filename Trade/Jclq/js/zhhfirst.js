(function(e) {
    var t = e.$,
    n = e.qh360cp;
    n.mobile.week = ["\u661f\u671f\u65e5", "\u661f\u671f\u4e00", "\u661f\u671f\u4e8c", "\u661f\u671f\u4e09", "\u661f\u671f\u56db", "\u661f\u671f\u4e94", "\u661f\u671f\u516d"],
    n.mobile.tpl = "<div class='jc-tit' name='{key}' id='game_{key}'><div class='jc-arr jc-arr-on'><i></i></div><cite>{matchday}</cite><cite>{wd}</cite><em class='red'>{count}</em>\u573a\u6bd4\u8d5b\u53ef\u6295\u6ce8</div>",
    n.mobile.jz_spfUrl_dev = "data/zhhapi.asp",
    n.mobile.jz_statsinfoUrl_dev = "data/statsinfo.asp",
    n.mobile.matches = [],
    n.mobile.rv = [],
    n.mobile.matchData = {},
    n.mobile.times = [],
    n.mobile.scrollBet = null,
    n.mobile.limit = 2,
    n.mobile.dgbet = function(e) {
        var e = +e,
        /*t = {
            sfc: 1,
            rsf: 1,
            dxf: 1,
            sfd: 0
        };*/
		t = {
            sfc: 1,
            rsf: 1,
            dxf: 1,
            sfd: 1
        };
		return t ;
        return e && ((e & 1) == 0 && (t.sfc = 0), (e >> 2 & 1) == 0 && (t.rsf = 0), (e >> 4 & 1) == 0 && (t.dxf = 0), (e >> 6 & 1) == 0 && (t.sfd = 0)),
        t
    },
    n.mobile.selectTmp = function() {
        var e = {
            sfc_1: "",
            sfc_2: "",
            rsf_1: "",
            rsf_2: "",
            dxf_1: "",
            dxf_2: "",
            sfd_01: "",
            sfd_02: "",
            sfd_03: "",
            sfd_04: "",
            sfd_05: "",
            sfd_06: "",
            sfd_11: "",
            sfd_12: "",
            sfd_13: "",
            sfd_14: "",
            sfd_15: "",
            sfd_16: "",
            more: ""
        };
        return e
    },
    n.mobile.cal = function() {
        var e = n.mobile.selectGame,
        r = n.mobile.selectGameMap,
        i = e.length,
        s = t("#group"),
        o = 0;
        for (var u = 0; u < e.length; u++) {
            var a = r[e[u]].dg;
            for (var f = 0; f < a.length; f++) o += a[f] * 1
        }
        i ? o == 0 ? (n.mobile.limit = 1, i > 0 ? s.text("\u5df2\u9009" + i + "\u573a\u6bd4\u8d5b") : s.text("\u8bf7\u9009\u62e9\u6bd4\u8d5b\u7ed3\u679c")) : (n.mobile.limit = 2, i > 1 ? s.text("\u5df2\u9009" + i + "\u573a\u6bd4\u8d5b") : i == 1 ? s.text("\u81f3\u5c11\u9009\u62e92\u573a\u6bd4\u8d5b") : s.text("\u8bf7\u9009\u62e9\u6bd4\u8d5b\u7ed3\u679c")) : (n.mobile.limit = 2, s.text("\u8bf7\u9009\u62e9\u6bd4\u8d5b\u7ed3\u679c"))
    },
    n.mobile.Tplmatch = function(e) {
        var r = t("#betgame"),
        i = t("#guide"),
        s = 0,
        o = e.battle;
        if (!o) {
            i.remove(),
            r.html("<p class='nodata'>\u6682\u65e0\u6bd4\u8d5b\uff0c\u7b49\u5f85\u5b98\u65b9\u516c\u5e03\u6700\u65b0\u8d5b\u7a0b\uff01</p>");
            return
        }
        var u = n.mobile.selectGame,
        a = n.mobile.selectGameMap;
        t.each(o,
        function(o, u) {
            var a = [],
            f = u.length;
            if (f) {
                s = 1,
                n.mobile.times.push(o);
                var l = o.replace(/(\d{4})(\d{2})(\d{2})/g, "$1-$2-$3"),
                c = n.mobile.week[(new Date(l.replace(/-/g, "/"))).getDay()],
                h = t("#game_" + o),
                p = t("#table_" + o);
                if (!h.length) {
                    var d = a.length,
                    v = n.mobile.tpl.replace(/{key}/g, o).replace(/{matchday}/, l).replace(/{wd}/, c).replace(/{count}/, e.count ? e.count[o] : f);
                    a.push(v)
                }
                var m = [],
                g = 0;
                for (var y = 0; y < f; y++) {
                    var b = u[y];
                    b.matchCode = o + b.itemId,
                    b.endTimeHHMM = b.endTime.split(" ")[1],
                    b.selected = n.mobile.selectTmp();
                    var w = b.matchCode;
                    if (b.spSfc2 == "-1" && b.spSfc1 == "-1" && b.spRsf2 == "-1" && b.spRsf1 == "-1" && b.spDxf1 == "-1" && b.spDxf2 == "-1" && b.spSfd11 == "-1" && b.spSfd12 == "-1" && b.spSfd13 == "-1" && b.spSfd14 == "-1" && b.spSfd15 == "-1" && b.spSfd16 == "-1" && b.spSfd01 == "-1" && b.spSfd02 == "-1" && b.spSfd03 == "-1" && b.spSfd04 == "-1" && b.spSfd05 == "-1" && b.spSfd06 == "-1") {
                        g++,
                        g == f && a.pop();
                        continue
                    }
                    var E = 0;
                    if (t.inArray(w, n.mobile.selectGame) > -1) {
                        var S = n.mobile.selectGameMap[w].indexs;
                        if (S) for (var x = 0,
                        T = S.length; x < T; x++) b.selected[S[x]] = "active",
                        /^sfd_\d{1,2}$/g.test(S[x]) && (b.selected.more = "other-games-active", E++)
                    }
                    b.moreHtml = E ? "\u5df2<br>\u9009<br>" + E + "<br>\u9879": "\u80dc<br>\u5206<br>\u5dee",
                    b.lotLose = b.lotLose * 1,
                    b.lotLose < 0 ? b.rfColor = "green": (b.lotLose = "+" + b.lotLose, b.rfColor = "red");
                    var N = n.mobile.dgbet( + b.isDgDisable),
                    C = "",
                    k = "",
                    L = "",
                    A = "",
                    O = "";
					console.log(N);
                    if (N["sfc"] == 0 || N["rsf"] == 0 || N["dxf"] == 0) C = "<span class='triangle'></span><span class='dgtext'>\u5355</span>",
                    N["sfc"] == 0 && (k = "can"),
                    N["rsf"] == 0 && (L = "can"),
                    N["dxf"] == 0 && (A = "can");
                    b.dgtr = C,
                    b.dgsfc = k,
                    b.dgrsf = L,
                    b.dgdxf = A,
                    n.mobile.matchData[w] = b,
                    n.mobile.matchData[w].dg = N,
                    n.mobile.scrollToEdit.setTop(b.matchCode, o),
                    m.push(n.template("matchs_list_lhh", b)),
                    b.matchId && n.mobile.matches.push(b.matchId),
                    n.mobile.rv.push(b.VsReverseFlag * 1)
                }
                i.remove(),
                p.length ? p.append(m.join("")) : a.push('<table width="100%" id="table_' + o + '"><tbody>' + m.join("") + "</tbody></table>"),
                r.append(a.join("")),
                n.mobile.scrollBet && n.mobile.scrollBet.refresh()
            }
        }),
        s || (i.remove(), r.html("<p class='nodata'>\u6682\u65e0\u6bd4\u8d5b\uff0c\u7b49\u5f85\u5b98\u65b9\u516c\u5e03\u6700\u65b0\u8d5b\u7a0b\uff01</p>")),
        n.mobile.scrollBet = new iScroll("betScroll", {
            y: n.mobile.scrollToEdit.top,
            hScrollbar: !1,
            vScrollbar: !1
        }),
        n.mobile.cal(),
        n.mobile.Analysis()
    },
    n.mobile.Analysis = function() {
        var e = n.mobile.matches,
        r = n.mobile.rv;
        if (!e.length) return ! 1;
        var i = e.join(","),
        s = r.join(",");
        t.ajax({
            url: n.mobile.jz_statsinfoUrl_dev,
            data: {
                matchids: i,
                rv: s,
                play: "zhh"
            },
            dataType: "json",
            type: "POST",
            timeout: 2e4,
            success: function(e) {
                e && (t.each(e,
                function(e, r) {
                    var i = t("#stats_" + e),
                    s = t("#match_" + e);
                    r.matchid = e,
                    r.rv = s.attr("rv") * 1,
                    r.homeTeam = s.attr("hometeam"),
                    r.rq = +s.attr("rq"),
                    r.color = "",
                    r.rq > 0 ? (r.color = "red", r.rq = "+" + r.rq) : r.color = "green";
                    var o = r.ratio;
                    r.spf0 = "--",
                    r.spf3 = "--",
                    r.rsq0 = "--",
                    r.rsq3 = "--",
                    r.dxf0 = "--",
                    r.dxf3 = "--";
                    if (o) {
                        var u = o[0];
                        if (u) {
                            r.spf0 = +u.code0,
                            r.spf3 = +u.code3;
                            var a = r.spf0 + r.spf3;
                            a && (r.spf0 = n.number.format(r.spf0 / a * 100, 2, 0) + "%", r.spf3 = n.number.format(r.spf3 / a * 100, 2, 0) + "%")
                        }
                        var f = o[1];
                        if (f) {
                            r.rsq0 = +f.code0,
                            r.rsq3 = +f.code3;
                            var l = r.rsq0 + r.rsq3;
                            l && (r.rsq0 = n.number.format(r.rsq0 / l * 100, 2, 0) + "%", r.rsq3 = n.number.format(r.rsq3 / l * 100, 2, 0) + "%")
                        }
                        var c = o[2];
                        if (f) {
                            r.dxf0 = +c.code0,
                            r.dxf3 = +c.code3;
                            var h = r.dxf0 + r.dxf3;
                            h && (r.dxf0 = n.number.format(r.dxf0 / h * 100, 2, 0) + "%", r.dxf3 = n.number.format(r.dxf3 / h * 100, 2, 0) + "%")
                        }
                    }
                    if (r.his.home) {
                        var p = r.his.home,
                        d = r.his.away;
                        p.hhwRatio >= .5 && s.attr("wr0", "1"),
                        d.aawRatio >= .5 && s.attr("wr1", "1"),
                        p.hhhbwRatio >= .5 && s.attr("whr0", "1"),
                        d.aahbwRatio >= .5 && s.attr("whr1", "1"),
                        p.hhoRatio >= .5 && s.attr("whr2", "1"),
                        d.aaoRatio >= .5 && s.attr("whr3", "1")
                    }
                    i.html(n.template("analysis_tpl", r)),
                    n.mobile.scrollBet && n.mobile.scrollBet.refresh()
                }), t("#whr").removeClass("none"))
            },
            error: function() {
                n.mobile.Analysis.call(null)
            }
        })
    },
    n.mobile.AsynDownData = function() {
        var e = n.mobile.selectGame;
        t.ajax({
            url: n.mobile.jz_spfUrl_dev + "?page=0&r=" + t.now(),
            dataType: "json",
            timeout: 2e4,
            success: function(e) {
                if (e) {
                    n.mobile.Tplmatch(e);
                    var r = e.leagues;
                    if (r) {
                        var i = [];
                        t.each(r,
                        function(e, n) {
                            n["name"] == "NBA" && t("#NBA").removeClass("none"),
                            i.push('<li><span class="btn-pop btn-pop-on" matches="' + e + '">' + n.name + "</span></li>")
                        }),
                        t("#leagues").html(i.join(""))
                    }
                }
            },
            error: function() {
                setTimeout(function() {
                    n.mobile.Analysis.call(null)
                },
                1e4)
            }
        })
    },
    n.mobile.selectCodeInit = function() {
        var r = t("#betgame"),
        i = t("#themore"),
        s = t("#betgame"),
        o = t("#betScroll"),
        u = t(".ui-panel-dismiss"),
        a = "none",
        f = t("#MS-wrapper");
        f.height("2500px"),
        e.scrollTo(0, 0),
        setTimeout(function() {
            var t = e.innerHeight - 156;
            o.height(t),
            s.css("min-height", t),
            f.css("height", e.innerHeight + "px"),
            n.mobile.scrollBet && n.mobile.scrollBet.refresh()
        },
        0),
        r.on(n.lottery.tap, ".jc-tit",
        function() {
            var e = t(this),
            r = e.attr("name"),
            i = t("#table_" + r),
            s = "jc-arr-on",
            o = e.find("div");
            o.hasClass(s) ? (o.removeClass(s), i.hide()) : (o.addClass(s), i.show()),
            n.mobile.scrollBet && n.mobile.scrollBet.refresh()
        }),
        r.on(n.lottery.tap, ".stats",
        function() {
            var r = t(this),
            i = r.attr("m");
            if (i == "0") return n.lottery.alert("\u8d5b\u4e8b\u4fe1\u606f\u540c\u6b65\u4e2d\uff0c\u8bf7\u7a0d\u540e\uff01"),
            !1;
            var s = t("#stats_" + i),
            o = r.find("i");
            s.hasClass(a) ? (s.removeClass(a), o.addClass("down"), n.mobile.scrollBet && n.mobile.scrollBet.refresh(), s.position().top + 111 > t(e).height() - 50 && n.mobile.scrollBet.scrollTo(0, 111, 0, "relative")) : (s.addClass(a), o.removeClass("down"))
        }),
        r.on(n.lottery.tap, ".ops",
        function() {
            var e = t(this),
            r = e.parents("tr"),
            i = r.find(".other-games");
            if (e.hasClass("disabled")) return ! 1;
            if (!e.attr("index")) return ! 1;
            var s = e.parents("tr"),
            o = s.attr("matchcode"),
            u = [],
            a = t.inArray(o, n.mobile.selectGame),
            f = [],
            l = [],
            c,
            h = "active";
            if (!o) return ! 1;
            e.toggleClass(h);
            var p = n.mobile.matchData[o];
            e.hasClass(h) ? p.selected[e.attr("index")] = h: p.selected[e.attr("index")] = "";
            var d = s.find(".ops");
            d.each(function() {
                var e = t(this),
                n = e.find("cite").text().replace("--", 0);
                n == "\u672a\u5f00\u552e" && (n = "-1");
                var r = e.attr("index"),
                i = e.parent().hasClass("can") ? 0 : 1;
                e.hasClass(h) && (u.push(n), f.push(r), l.push(i))
            });
            if (u.length === 0 && !i.hasClass("other-games-active")) delete n.mobile.selectGameMap[o],
            n.mobile.selectGame.splice(a, 1);
            else if (a < 0) {
                if (n.mobile.selectGame.length >= 15) return e.removeClass(h),
                n.lottery.alert("\u6700\u591a\u53ea\u80fd\u6dfb\u52a015\u573a\u6bd4\u8d5b"),
                !1;
                n.mobile.selectGameMap[o] = {
                    dan: !1
                },
                n.mobile.selectGameMap[o].indexs = f,
                n.mobile.selectGameMap[o].sp = u,
                n.mobile.selectGameMap[o].dg = l,
                n.mobile.selectGameMap[o].mid = s.attr("mid"),
                n.mobile.selectGameMap[o].rq = s.attr("rq"),
                n.mobile.selectGameMap[o].endtime = s.attr("endtime"),
                n.mobile.selectGameMap[o].homeTeam = s.attr("homeTeam"),
                n.mobile.selectGameMap[o].awayTeam = s.attr("awayTeam"),
                n.mobile.selectGame.push(o)
            } else {
                var v = [],
                m = [],
                g = [],
                y = n.mobile.selectGameMap[o].indexs,
                b = n.mobile.selectGameMap[o].sp,
                w = y.length;
                for (var E = 0; E < w; E++) y[E].replace(/_\d{1,2}$/g, "") == "sfd" && (v.push(y[E]), m.push(b[E]), g.push(0));
                n.mobile.selectGameMap[o].indexs = f.concat(v),
                n.mobile.selectGameMap[o].sp = u.concat(m),
                n.mobile.selectGameMap[o].dg = l.concat(g)
            }
            n.mobile.cal()
        }),
        r.on(n.lottery.tap, ".other-games",
        function() {
            n.mobile.hideNavTab();
            var e = t(this).parents("tr"),
            r = e.attr("matchcode"),
            i = t.inArray(r, n.mobile.selectGame);
            if (i < 0 && n.mobile.selectGame.length >= 15) {
                n.lottery.alert("\u6700\u591a\u53ea\u80fd\u6dfb\u52a015\u573a\u6bd4\u8d5b");
                return
            }
            var s = n.mobile.matchData[r],
            o = n.template("bet_sel_lhh", s);
            n.lightBox.show({
                html: o,
                showFn: function() {
                    new iScroll("sel_wrapper", {
                        hScrollbar: !1,
                        vScrollbar: !1
                    });
                    var o = this,
                    u = t("#pop_bet_sel"),
                    a = "active";
                    u.on(n.lottery.tap, ".ops",
                    function() {
                        t(this).toggleClass(a)
                    }),
                    u.find("#confirm_sel").on("click",
                    function() {
                        var a = n.mobile.selectTmp(),
                        f = [],
                        l = "active",
                        c = r,
                        h = [],
                        p = [],
                        d = [];
                        if (i > -1) {
                            var v = n.mobile.selectGameMap[c].indexs,
                            m = n.mobile.selectGameMap[c].sp,
                            g = n.mobile.selectGameMap[c].dg,
                            y = v.length;
                            for (var b = 0; b < y; b++) v[b].replace(/_\d{1,2}$/g, "") != "sfd" && (p.push(v[b]), h.push(m[b]), d.push(g[b]), a[v[b]] = l)
                        }
                        var w = "other-games-active",
                        E = u.find(".active").length;
                        u.find(".active").each(function(e) {
                            var n = t(this),
                            r = n.find(".sp").text(),
                            i = n.attr("index"),
                            s = n.parent().hasClass("can") ? 0 : 1;
                            h.push(r),
                            p.push(i),
                            d.push(s),
                            a[i] = l
                        }),
                        E ? (e.find(".other-games").addClass(w).html("\u5df2<br>\u9009<br>" + E + "<br>\u9879"), a.more = "") : (e.find(".other-games").removeClass(w).html("\u80dc<br>\u5206<br>\u5dee"), a.more = w),
                        s.selected = a,
                        h.length === 0 ? i >= 0 && (delete n.mobile.selectGameMap[c], n.mobile.selectGame.splice(i, 1)) : i < 0 ? (n.mobile.selectGameMap[c] = {
                            dan: !1
                        },
                        n.mobile.selectGameMap[c].indexs = p, n.mobile.selectGameMap[c].sp = h, n.mobile.selectGameMap[c].dg = d, n.mobile.selectGameMap[c].mid = e.attr("mid"), n.mobile.selectGameMap[c].rq = e.attr("rq"), n.mobile.selectGameMap[c].endtime = e.attr("endtime"), n.mobile.selectGameMap[c].homeTeam = e.attr("homeTeam"), n.mobile.selectGameMap[c].awayTeam = e.attr("awayTeam"), n.mobile.selectGame.push(c)) : (n.mobile.selectGameMap[c].indexs = p, n.mobile.selectGameMap[c].sp = h, n.mobile.selectGameMap[c].dg = d),
                        n.mobile.cal(),
                        o.close()
                    }),
                    u.find("#cancel_sel").on("click",
                    function() {
                        o.close()
                    })
                }
            })
        }),
        t("#tab").on(n.lottery.tap, "li",
        function() {
            var e = t(this),
            r = "on",
            o = e.attr("id") || "all";
            e.siblings().removeClass(r),
            e.addClass(r);
            var f = s.find(".matchinfo");
            o != "more" && i.addClass(a),
            n.mobile.clearBet();
            switch (o) {
            case "all":
                t.each(f,
                function(e, n) {
                    t(n).removeClass(a)
                }),
                n.mobile.scrollBet && n.mobile.scrollBet.refresh(),
                n.mobile.count();
                break;
            case "hot":
                t.each(f,
                function(e, n) {
                    var r = t(n),
                    i = t(n).attr("ishot");
                    i ? r.removeClass(a) : r.addClass(a)
                }),
                n.mobile.scrollBet && n.mobile.scrollBet.refresh(),
                n.mobile.count();
                break;
            case "filter":
                i.hasClass(a) ? (i.removeClass(a), u.show()) : (i.addClass(a), u.hide())
            }
        }),
        t("#navtit").on("click",
        function() {
            var e = t("#playing"),
            n = t(".head-arr");
            e.toggleClass("none"),
            n.toggleClass("head-arron")
        }),
        t(".btn-menu").on(n.lottery.tap,
        function() {
            var e = t("#tools"),
            r = t(this),
            i = "btn-menu-on",
            s = t("#playing"),
            o = t("#navtit");
            s.hasClass(a) || o.trigger(n.lottery.tap),
            r.hasClass(i) ? (e.addClass(a), r.removeClass(i)) : (e.removeClass(a), r.addClass(i))
        }),
        t("#cancel").on("click",
        function() {
            i.addClass(a);
            var e = "on";
            t("#more").removeClass(e),
            t("#all").addClass(e).trigger(n.lottery.tap),
            u.hide()
        }),
        t("#confirm").on("click",
        function() {
            var e = s.find(".matchinfo"),
            r = "btn-pop-on",
            o = t("#leagues").find("." + r),
            f = t("#whr").find("." + r),
            l = t.map(o,
            function(e) {
                return t.trim(t(e).attr("matches"))
            });
            t.each(e,
            function(e, n) {
                var r = t(n),
                i = r.attr("league");
                t.inArray(i, l) > -1 ? (r.removeClass(a), f.length && t.map(f,
                function(e) {
                    var n = t(e).attr("data-target");
                    r.attr(n) != 1 && r.addClass(a)
                })) : r.addClass(a)
            }),
            u.hide(),
            n.mobile.scrollBet && n.mobile.scrollBet.refresh(),
            n.mobile.count(),
            i.addClass(a)
        }),
        t("#leagues").on("click", "span",
        function() {
            var e = t(this),
            n = "btn-pop-on";
            e.toggleClass(n)
        }),
        t("#whr").on("click", "span",
        function() {
            var e = t(this),
            n = "btn-pop-on";
            e.hasClass(n) ? e.removeClass(n) : (t("#whr").find(".btn-pop").removeClass(n), e.addClass(n))
        }),
        t("#selall").on("click",
        function() {
            t("#leagues span").addClass("btn-pop-on")
        }),
        t("#inverse").on("click",
        function() {
            t("#leagues span").trigger("click")
        }),
        t("#clear").on(n.lottery.tap,
        function() {
            n.mobile.clearBet()
        }),
        t(document.body).on(n.lottery.tap,
        function(e) {
            setTimeout(function() {
                var r = n.lottery.getActionTarget(e, -1, "cmd", null),
                i = "none",
                s = t("#playing"),
                o = t("#tools"),
                u = t(".btn-menu"),
                a = t(".head-arr");
                r || (u.removeClass("btn-menu-on"), a.removeClass("head-arron"), s.addClass(i), o.addClass(i))
            },
            80)
        })
    },
    n.mobile.count = function() {
        var e = n.mobile.times,
        r, i;
        for (var s = 0; s < e.length; s++) r = t("#table_" + e[s]),
        i = t("#game_" + e[s]).find("em"),
        i.text(r.find(".matchinfo").not(".none").length || 0)
    },
    n.mobile.clearBet = function() {
        var e = t("#betgame"),
        r = "other-games",
        i = "matches",
        s = "none",
        o = "down",
        u = "active";
        e.find("." + u).removeClass(u),
        e.find("." + i).addClass(s),
        e.find("." + r).removeClass("other-games-active").html("\u80dc<br>\u5206<br>\u5dee"),
        e.find("." + o).removeClass(o),
        n.mobile.selectGame = [],
        n.mobile.selectGameMap = {};
        for (var a in n.mobile.matchData) n.mobile.matchData[a].selected = n.mobile.selectTmp();
        n.mobile.cal()
    },
    n.mobile.confirmCodeInit = function() {
        var r = t("#submit"),
        i = "btntap";
        r.on("click",
        function() {
            if (n.mobile.selectGame.length < n.mobile.limit) return n.lottery.alert("\u8bf7\u81f3\u5c11\u9009\u62e9" + n.mobile.limit + "\u573a\u6bd4\u8d5b"),
            !1;
            n.localstorage.setItem(n.mobile.storageGameMap, JSON.stringify(n.mobile.selectGameMap)),
            n.localstorage.setItem(n.mobile.storageGame, JSON.stringify(n.mobile.selectGame)),
            e.location.href = "zhhcart.htm"
        })
    },
    n.mobile.dealStorage = function() {
        var e = n.date.format(new Date, "YYYY/MM/DD hh:mm"),
        r = (new Date(e)).getTime(),
        i = n.mobile.storageGame,
        s = n.mobile.storageGameMap;
        n.mobile.selectGame = n.localstorage.getItem(i) ? JSON.parse(n.localstorage.getItem(i)) : [],
        n.mobile.selectGameMap = n.localstorage.getItem(s) ? JSON.parse(n.localstorage.getItem(s)) : {},
        t.each(n.mobile.selectGameMap,
        function(e) {
            var t = e.match(/^(\d{4})/g)[0] + "-" + n.mobile.selectGameMap[e].endtime,
            i = (new Date(t.replace(/-/g, "/"))).getTime();
            i - r < 0 && (delete n.mobile.selectGameMap[e], n.array.remove(n.mobile.selectGame, e))
        })
    },
    n.mobile.hideNavTab = function() {
        var e = t("#playing"),
        n = t(".head-arr");
        e.addClass("none"),
        n.removeClass("head-arron")
    },
    n.mobile.scrollToEdit = {
        dc: 0,
        mc: 0,
        dh: 40,
        mh: 83,
        temp: "",
        top: 0,
        hash: e.location.hash,
        setTop: function(e, t) {
            this.temp != t && (this.dc++, this.temp = t),
            this.hash.indexOf(e) > -1 && (this.top -= this.dc * this.dh + this.mc * this.mh),
            this.mc++
        }
    },
    t(function() {
        n.mobile.storageGameMap = "storage_130043_zhh_map",
        n.mobile.storageGame = "storage_130043_zhh_game",
        n.mobile.dealStorage(),
        n.mobile.AsynDownData(),
        n.mobile.selectCodeInit(),
        n.mobile.confirmCodeInit()
    })
})(window);