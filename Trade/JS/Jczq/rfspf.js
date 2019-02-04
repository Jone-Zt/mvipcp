!
function(t, a, e, i, n) {
    var o = t.isSupportTouch ? "tap": "click",
    s = a.common,
    r = a.helper;
    t.extend(a, {
        config: {
            gameUrl: "/Trade/Jczq/data/jczqData_0.html",
            loadingSelector: ".loading",
            noDataSelector: ".no-data",
            failLoadingSelector: ".load-failed",
            teamData: s.teamData,
            supportMethod: {
                m_1: ["1_1", "2_1", "3_1", "4_1", "5_1", "6_1", "7_1", "8_1"],
                m_n: ["3_3", "3_4", "4_4", "4_5", "4_6", "4_11", "5_5", "5_6", "5_10", "5_16", "5_20", "5_26", "6_6", "6_7", "6_15", "6_20", "6_22", "6_35", "6_42", "6_50", "6_57", "7_7", "7_8", "7_21", "7_35", "7_120", "8_8", "8_9", "8_28", "8_56", "8_70", "8_247"]
            },
            gameTypes: ["rfspf"],
            playType: "rfspf"
        },
        cache: {
            matchList: null
        },
        quickInit: function() {
            var a = this.config,
            i = this.cache,
            n = /(\S+)Selector$/;
            for (var o in a) if ("string" == e.getType(o) && n.test(o)) i[RegExp.$1] = t(a[o]);
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
            var t = this,
            a = this.cache.matchNum,
            e, i = this.cache.boxCenter;
            e = Class.Game.COMS.JC.BetArea.create({
                gameWrapSelector: "#wrapper",
                gameTypes: this.config.gameTypes,
                teamData: this.config.teamData
            });
            this.betArea = e;
            return this
        },
        betMethodInit: function() {
            var t, a = this,
            e = this.cache;
            t = Class.Game.COMS.JC.BetMethod.create({
                supportMethod: this.config.supportMethod
            });
            this.betMethod = t;
            return this
        },
        renderHTML: function() {
            var a = this.cache,
            i = t("#matchTpl").html(),
            n = t("#matchWrapTpl").html(),
            o = t("#wrapper .content"),
            s = this;
            var r = function() {
                var r = {},
                c = [],
                h,
                d,
                l,
                m,
                l = document.createDocumentFragment();
                d = a.matchList;
                d.forEach(function(t, a) {
                    if (!r[t.gameDate]) {
                        r[t.gameDate] = [];
                        c.push(t.gameDate)
                    }
                    r[t.gameDate].push(t)
                });
                c.sort(function(t, a) {
                    return + t - +a
                });
                c.forEach(function(a, o) {
                    var s = [a.slice(0, 4), a.slice(4, 6), +a.slice(6, 8)];
                    m = t.format(n, {
                        gameDate: a,
                        disDate: s.join("-"),
                        week: e.jczq.core.getWeek(new Date(s[0], s[1] - 1, s[2])),
                        dateNum: r[a].length,
                        dayMatchList: t.template(i, r[a])
                    });
                    m = t(m);
                    l.appendChild(m[0])
                });
                o.append(l);
                s.betArea.addMatch(d)
            };
            r();
            delete this.renderHTML;
            return this
        },
        loadData: function() {
            var i = this,
            n = this.config,
            o = this.cache,
            s = this.config.gameUrl,
            c = t(".match-table");
            this.get(s, {},
            function(n, s) {
                o.loading.addClass("hide");
                if (n) {
                    o.failLoading.removeClass("hide");
                    t.sendMsg("loadData", 3);
                    o.loadDataStatus = 3
                }
                try {
                    s = JSON.parse(s) || a.parseJSON(s);
                    if (!s.matchList || t.isEmptyObject(s.matchList)) {
                        o.noData.removeClass("hide");
                        o.loadDataStatus = 1;
                        t.sendMsg("loadData", 1);
                        return
                    }
                    e.gameEn = s.gameEn;
                    o.matchList = r.explainData(s, i.config.gameTypes);
                    if (!o.matchList.length || o.matchList.length <= 1) {
                        o.noData.removeClass("hide");
                        o.loadDataStatus = 1;
                        t.sendMsg("loadData", 1);
                        return
                    }
                    i.renderHTML();
                    c.removeClass("hide");
                    o.loadDataStatus = 0;
                    t.sendMsg("loadData", 0)
                } catch(h) {
                    o.failLoading.removeClass("hide");
                    t.sendMsg("loadData", 2);
                    o.loadDataStatus = 2;
                    console.log(h)
                }
            },
            "@jzcqMixp");
            return this
        }
    })
} (window.jQuery || window.Zepto, Core, Game, window);