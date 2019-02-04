!
function(t, e, a, i, n) {
    var o = t.isSupportTouch ? "tap": "click",
    c = e.common,
    r = e.helper;
    t.extend(e, {
        config: {
            gameUrl: "/Trade/Jczq/data/jczqData_0.html",
            loadingSelector: ".loading",
            noDataSelector: ".no-data",
            failLoadingSelector: ".load-failed",
            teamData: c.teamData,
            supportMethod: {
                m_1: ["1_1", "2_1", "3_1", "4_1", "5_1", "6_1", "7_1", "8_1"],
                m_n: ["3_3", "3_4", "4_4", "4_5", "4_6", "4_11", "5_5", "5_6", "5_10", "5_16", "5_20", "5_26", "6_6", "6_7", "6_15", "6_20", "6_22", "6_35", "6_42", "6_50", "6_57", "7_7", "7_8", "7_21", "7_35", "7_120", "8_8", "8_9", "8_28", "8_56", "8_70", "8_247"]
            },
            gameTypes: ["spf", "bf", "zjq", "bqc", "rfspf"],
            playType: "mixall"
        },
        cache: {
            matchList: null
        },
        quickInit: function() {
            var e = this.config,
            i = this.cache,
            n = /(\S+)Selector$/;
            for (var o in e) if ("string" == a.getType(o) && n.test(o)) i[RegExp.$1] = t(e[o]);
            this.betAreaInit().betMethodInit().loadData();
            this.common.init();
            return this
        },
        myInit: function() {
            t(i).on("ortchange",
            function(t) {
                i.document.location.reload()
            });
            return this
        },
        betAreaInit: function() {
            var a = this,
            n = this.cache.matchNum,
            c, r = this.cache.boxCenter;
            c = Class.Game.COMS.JC.BetArea.create({
                gameWrapSelector: "#wrapper",
                gameTypes: this.config.gameTypes,
                teamData: this.config.teamData
            });
            c.initMoreOption = function() {
                var a = c,
                n;
                this.cache.gameWrap.find(".content").delegate(".more-option[data-matchcode]", t.browser.uc ? "touchstart": "click",
                function(a) {
                    var n = t(this),
                    r = n.attr("data-matchcode"),
                    s,
                    l,
                    h,
                    d = c.cache.gameInfo,
                    m = c.cache.selectGameInfo;
                    if (r && d[r] && d[r].spData) {
                        l = m[r];
                        t.dialog({
                            title: null,
                            css: "select-dialog mixall-dialog",
                            width: "95%",
                            height: 0,
                            content: t.template(t("#mixallDialogTpl").html(), {
                                teamData: c.config.teamData,
                                gameInfo: d[r],
                                selectInfo: l || {},
                                playType: e.config.playType,
                                isShowTips: 0 !== t(".markHL").length
                            }),
                            button: [],
                            init: function() {
                                var e = t(this),
                                a = t(".mixall-dialog .bet-list-body", e),
                                n = this.id;
                                if (a.height() > .6 * i.innerHeight) {
                                    a.css({
                                        height: .6 * i.innerHeight,
                                        padding: "1px",
                                        overflow: "hidden"
                                    });
                                    setTimeout(function() {
                                        h = new i.IScroll(a[0], {
                                            click: true
                                        })
                                    },
                                    200)
                                }
                                e.delegate(".cancel", "click",
                                function(e) {
                                    t.dialog(n);
                                    h && h.destroy()
                                }).delegate(".confirm", "click",
                                function(a) {
                                    t.dialog(n);
                                    if (l) {
                                        for (var i in l.bf) if ("length" != i) c.removeOption(r, "bf", +i);
                                        for (var i in l.bqc) if ("length" != i) c.removeOption(r, "bqc", +i);
                                        for (var i in l.zjq) if ("length" != i) c.removeOption(r, "zjq", +i)
                                    }
                                    e.find(".betbtn.active[data-gametype]").each(function() {
                                        var e = t(this),
                                        a = e.attr("data-gameType"),
                                        i = +e.attr("data-index");
                                        if (i >= 0 && a && r) c.selectOption(r, a, i)
                                    });
                                    h && h.destroy()
                                }).delegate(".betbtn[data-gameType]", o,
                                function(e) {
                                    var a = t(this);
                                    a.toggleClass("active")
                                })
                            }
                        })
                    }
                });
                c.onChange(function(t) {
                    if (!t) return;
                    var e = this.get().selectGameInfo[t],
                    a = this.get().gameInfo[t],
                    i,
                    n,
                    o = 0,
                    c,
                    r = a.ele.find(".more-option"),
                    n = "展开<br/>全部";
                    if (r.hasClass("no-play")) return;
                    if (e) for (var s in e) if ("spf" != s && "rfspf" != s) o += +e[s].length || 0;
                    if (o > 0) {
                        n = "已选<br/>" + o + "项";
                        r.addClass("active")
                    } else r.removeClass("active");
                    r.html(n)
                });
                c.onClear(function() {
                    if (!n || !n.length) n = c.cache.gameWrap.find(".more-option");
                    n.not(".no-play").removeClass("active").html("展开<br/>全部")
                })
            };
            c.initMoreOption();
            this.betArea = c;
            return this
        },
        betMethodInit: function() {
            var t, e = this,
            a = this.cache;
            t = Class.Game.COMS.JC.BetMethod.create({
                supportMethod: this.config.supportMethod
            });
            this.betMethod = t;
            return this
        },
        renderHTML: function() {
            var e = this.cache,
            i = t("#matchTpl").html(),
            n = t("#matchWrapTpl").html(),
            o = t("#wrapper .content"),
            c = this;
            var r = function() {
                var r = {},
                s = [],
                l,
                h,
                d,
                m,
                d = document.createDocumentFragment();
                h = e.matchList;
                h.forEach(function(t, e) {
                    if (!r[t.gameDate]) {
                        r[t.gameDate] = [];
                        s.push(t.gameDate)
                    }
                    r[t.gameDate].push(t)
                });
                s.sort(function(t, e) {
                    return + t - +e
                });
                s.forEach(function(e, o) {
                    var c = [e.slice(0, 4), e.slice(4, 6), +e.slice(6, 8)];
                    m = t.format(n, {
                        gameDate: e,
                        disDate: c.join("-"),
                        week: a.jczq.core.getWeek(new Date(c[0], c[1] - 1, c[2])),
                        dateNum: r[e].length,
                        dayMatchList: t.template(i, r[e])
                    });
                    m = t(m);
                    d.appendChild(m[0])
                });
                o.append(d);
                c.betArea.addMatch(h)
            };
            r();
            delete this.renderHTML;
            return this
        },
        loadData: function() {
            var i = this,
            n = this.config,
            o = this.cache,
            c = this.config.gameUrl,
            s = t(".match-table");
            this.get(c, {},
            function(n, c) {
                o.loading.addClass("hide");
                if (n) {
                    o.failLoading.removeClass("hide");
                    t.sendMsg("loadData", 3);
                    o.loadDataStatus = 3
                }
                try {
                    c = JSON.parse(c) || e.parseJSON(c) || {};
                    if (!c.matchList || t.isEmptyObject(c.matchList)) {
                        o.noData.removeClass("hide");
                        o.loadDataStatus = 1;
                        t.sendMsg("loadData", 1);
                        return
                    }
                    a.gameEn = c.gameEn;
                    o.matchList = r.explainData(c, i.config.gameTypes);
                    if (!r.checkList4Bet(o.matchList)) {
                        o.noData.removeClass("hide");
                        o.noData.find(".gotosfc").removeClass("hide");
                        o.loadDataStatus = 1;
                        t.sendMsg("loadData", 1);
                        return
                    }
                    i.renderHTML();
                    s.removeClass("hide");
                    o.loadDataStatus = 0;
                    t.sendMsg("loadData", 0)
                } catch(l) {
                    o.failLoading.removeClass("hide");
                    t.sendMsg("loadData", 2);
                    o.loadDataStatus = 2;
                    console.log(l)
                }
            },
            "@jzcqMixp");
            return this
        }
    })
} (window.jQuery || window.Zepto, Core, Game, window);