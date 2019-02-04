(function() {
    if (typeof window.QIHOO_MONITOR != "undefined") return;
    var e = "v1.3.2 (2014.04.30)",
    t = "#",//["kurei.cn", "so.com", "leidian.com"],
    n = function(r, i) {
        var s; (function() {
            s = !0;
            try {
                var e = location.protocol.toLowerCase();
                if (e == "http:" || e == "https:") s = !1
            } catch(t) {}
        })();
        var o = document,
        u = navigator,
        a = r.screen,
        f = s ? "": document.domain.toLowerCase(),
        l = u.userAgent.toLowerCase(),
        c = {
            trim: function(e) {
                return e.replace(/^[\s\xa0\u3000]+|[\u3000\xa0\s]+$/g, "")
            }
        },
        h = {
            on: function(e, t, n) {
                e.addEventListener ? e && e.addEventListener(t, n, !1) : e && e.attachEvent("on" + t, n)
            },
            parentNode: function(e, t, n) {
                n = n || 5,
                t = t.toUpperCase();
                while (e && n-->0) {
                    if (e.tagName === t) return e;
                    e = e.parentNode
                }
                return null
            }
        },
        p = {
            fix: function(e) {
                if (! ("target" in e)) {
                    var t = e.srcElement || e.target;
                    t && t.nodeType == 3 && (t = t.parentNode),
                    e.target = t
                }
                return e
            }
        },
        d = function() {
            function e(e) {
                return e != null && e.constructor != null ? Object.prototype.toString.call(e).slice(8, -1) : ""
            }
            return {
                isArray: function(t) {
                    return e(t) == "Array"
                },
                isObject: function(e) {
                    return e !== null && typeof e == "object"
                },
                mix: function(e, t, n) {
                    for (var r in t) if (n || !(e[r] || r in e)) e[r] = t[r];
                    return e
                },
                encodeURIJson: function(e) {
                    var t = [];
                    for (var n in e) {
                        if (e[n] == null) continue;
                        t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]))
                    }
                    return t.join("&")
                }
            }
        } (),
        v = {
            get: function(e) {
                try {
                    var t, n = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
                    return (t = o.cookie.match(n)) ? unescape(t[2]) : ""
                } catch(r) {
                    return ""
                }
            },
            set: function(e, t, n) {
                n = n || {};
                var r = n.expires;
                typeof r == "number" && (r = new Date, r.setTime(r.getTime() + n.expires));
                try {
                    o.cookie = e + "=" + escape(t) + (r ? ";expires=" + r.toGMTString() : "") + (n.path ? ";path=" + n.path: "") + (n.domain ? "; domain=" + n.domain: "")
                } catch(i) {}
            }
        },
        m = {
            getProject: function() {
                return ""
            },
            getReferrer: function() {
                return o.referrer
            },
            getBrowser: function() {
                var e = {
                    "360se-ua": "360se",
                    TT: "tencenttraveler",
                    Maxthon: "maxthon",
                    GreenBrowser: "greenbrowser",
                    Sogou: "se 1.x / se 2.x",
                    TheWorld: "theworld"
                };
                for (var t in e) if (l.indexOf(e[t]) > -1) return t;
                var n = !1;
                try { + external.twGetVersion(external.twGetSecurityID(r)).replace(/\./g, "") > 1013 && (n = !0)
                } catch(i) {}
                if (n) return "360se-noua";
                var s = l.match(/(msie|chrome|safari|firefox|opera|trident)/);
                return s = s ? s[0] : "",
                s == "msie" ? s = l.match(/msie[^;]+/) + "": s == "trident" && l.replace(/trident\/[0-9].*rv[ :]([0-9.]+)/ig,
                function(e, t) {
                    s = "msie " + t
                }),
                s
            },
            getLocation: function() {
                var e = "";
                try {
                    e = location.href
                } catch(t) {
                    e = o.createElement("a"),
                    e.href = "",
                    e = e.href
                }
                return e = e.replace(/[?#].*$/, ""),
                e = /\.(s?htm|php)/.test(e) ? e: e.replace(/\/$/, "") + "/",
                e
            },
            getGuid: function() {
                function e(e) {
                    var t = 0,
                    n = 0,
                    r = e.length - 1;
                    for (r; r >= 0; r--) {
                        var i = parseInt(e.charCodeAt(r), 10);
                        t = (t << 6 & 268435455) + i + (i << 14),
                        (n = t & 266338304) != 0 && (t ^= n >> 21)
                    }
                    return t
                }
                function n() {
                    var t = [u.appName, u.version, u.language || u.browserLanguage, u.platform, u.userAgent, a.width, "x", a.height, a.colorDepth, o.referrer].join(""),
                    n = t.length,
                    i = r.history.length;
                    while (i) t += i--^n++;
                    return (Math.round(Math.random() * 2147483647) ^ e(t)) * 2147483647
                }
                var i = "__guid",
                l = v.get(i);
                if (!l) {
                    l = [e(s ? "": o.domain), n(), +(new Date) + Math.random() + Math.random()].join(".");
                    var c = {
                        expires: 2592e7,
                        path: "/"
                    };
                    if (t.length) for (var h = 0; h < t.length; h++) {
                        var p = t[h],
                        d = "." + p;
                        if (f.indexOf(d) > 0 && f.lastIndexOf(d) == f.length - d.length || f == p) {
                            c.domain = d;
                            break
                        }
                    }
                    v.set(i, l, c)
                }
                return function() {
                    return l
                }
            } (),
            getCount: function() {
                var e = "monitor_count",
                t = v.get(e);
                return t = (parseInt(t) || 0) + 1,
                v.set(e, t, {
                    expires: 864e5,
                    path: "/"
                }),
                function() {
                    return t
                }
            } (),
            getFlashVer: function() {
                var e = -1;
                if (u.plugins && u.mimeTypes.length) {
                    var t = u.plugins["Shockwave Flash"];
                    t && t.description && (e = t.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".") + ".0")
                } else if (r.ActiveXObject && !r.opera) try {
                    var n = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                    if (n) {
                        var i = n.GetVariable("$version");
                        e = i.replace(/WIN/g, "").replace(/,/g, ".")
                    }
                } catch(s) {}
                return e = parseInt(e, 10),
                e
            },
            getContainerId: function(e) {
                var t, n, r = 100;
                y.areaIds && (t = new RegExp("^(" + y.areaIds.join("|") + ")$", "ig"));
                while (e) {
                    if (e.attributes && ("bk" in e.attributes || "data-bk" in e.attributes)) {
                        n = e.getAttribute("bk") || e.getAttribute("data-bk");
                        if (n) return n = "bk:" + n,
                        n.substr(0, r);
                        if (e.id) return n = e.getAttribute("data-desc") || e.id,
                        n.substr(0, r)
                    } else if (t && e.id && t.test(e.id)) return n = e.getAttribute("data-desc") || e.id,
                    n.substr(0, r);
                    e = e.parentNode
                }
                return ""
            },
            getText: function(e) {
                var t = "";
                return e.tagName.toLowerCase() == "input" ? t = e.getAttribute("text") || e.getAttribute("data-text") || e.value || e.title || "": t = e.getAttribute("text") || e.getAttribute("data-text") || e.innerText || e.textContent || e.title || "",
                c.trim(t).substr(0, 100)
            },
            getHref: function(e) {
                try {
                    return e.getAttribute("data-href") || e.href || ""
                } catch(t) {
                    return ""
                }
            }
        },
        g = {
            getBase: function() {
                return {
                    p: m.getProject(),
                    u: m.getLocation(),
                    id: m.getGuid(),
                    guid: m.getGuid()
                }
            },
            getTrack: function() {
                return {
                    b: m.getBrowser(),
                    c: m.getCount(),
                    r: m.getReferrer(),
                    fl: m.getFlashVer()
                }
            },
            getClick: function(e) {
                e = p.fix(e || event);
                var t = e.target,
                n = t.tagName,
                r = m.getContainerId(t);
                if (!t.type || t.type != "submit" && t.type != "button") {
                    if (n == "AREA") return {
                        f: m.getHref(t),
                        c: "area:" + t.parentNode.name,
                        cId: r
                    };
                    var f, l;
                    return n == "IMG" && (f = t),
                    t = h.parentNode(t, "A"),
                    t ? (l = m.getText(t), {
                        f: m.getHref(t),
                        c: l ? l: f ? f.src.match(/[^\/]+$/) : "",
                        cId: r
                    }) : !1
                }
                var i = h.parentNode(t, "FORM"),
                s = {};
                if (i) {
                    var o = i.id || "",
                    u = t.id;
                    s = {
                        f: i.action,
                        c: "form:" + (i.name || o),
                        cId: r
                    };
                    if ((o == "search-form" || o == "searchForm") && (u == "searchBtn" || u == "search-btn")) {
                        var a = b("kw") || b("search-kw") || b("kw1");
                        s.w = a ? a.value: ""
                    }
                } else s = {
                    f: m.getHref(t),
                    c: m.getText(t),
                    cId: r
                };
                return s
            },
            getKeydown: function(e) {
                e = p.fix(e || event);
                if (e.keyCode != 13) return ! 1;
                var t = e.target,
                n = t.tagName,
                r = m.getContainerId(t);
                if (n == "INPUT") {
                    var i = h.parentNode(t, "FORM");
                    if (i) {
                        var s = i.id || "",
                        o = t.id,
                        u = {
                            f: i.action,
                            c: "form:" + (i.name || s),
                            cId: r
                        };
                        if (o == "kw" || o == "search-kw" || o == "kw1") u.w = t.value;
                        return u
                    }
                }
                return ! 1
            }
        },
        y = {
            trackUrl: null,
            clickUrl: null,
            areaIds: null
        },
        b = function(e) {
            return document.getElementById(e)
        };
        return {
            version: e,
            util: m,
            data: g,
            config: y,
            sendLog: function() {
                return r.__qihoo_monitor_imgs = {},
                function(e) {
                    var t = "log_" + +(new Date),
                    n = r.__qihoo_monitor_imgs[t] = new Image;
                    n.onload = n.onerror = function() {
                        r.__qihoo_monitor_imgs && r.__qihoo_monitor_imgs[t] && (r.__qihoo_monitor_imgs[t] = null, delete r.__qihoo_monitor_imgs[t])
                    },
                    n.src = e
                }
            } (),
            buildLog: function() {
                var e = "";
                return function(t, n) {
                    if (t === !1) return;
                    t = t || {};
                    var r = g.getBase();
                    t = d.mix(r, t, !0);
                    var i = n + d.encodeURIJson(t);
                    if (i == e) return;
                    e = i,
                    setTimeout(function() {
                        e = ""
                    },
                    500);
                    var s = d.encodeURIJson(t);
                    s += "&t=" + +(new Date),
                    n = n.indexOf("?") > -1 ? n + "&" + s: n + "?" + s,
                    this.sendLog(n)
                }
            } (),
            log: function(e, t) {
                t = t || "click";
                var n = y[t + "Url"];
                n || alert("Error : the " + t + "url does not exist!"),
                this.buildLog(e, n)
            },
            setConf: function(e, t) {
                var n = {};
                return d.isObject(e) ? n = e: n[e] = t,
                this.config = d.mix(this.config, n, !0),
                this
            },
            setUrl: function(e) {
                return e && (this.util.getLocation = function() {
                    return e
                }),
                this
            },
            setProject: function(e) {
                return e && (this.util.getProject = function() {
                    return e
                }),
                this
            },
            setId: function() {
                var e = [],
                t = 0,
                n;
                while (n = arguments[t++]) d.isArray(n) ? e = e.concat(n) : e.push(n);
                return this.setConf("areaIds", e),
                this
            },
            getTrack: function() {
                var e = this.data.getTrack();
                return this.log(e, "track"),
                this
            },
            getClickAndKeydown: function() {
                var e = this;
                return h.on(o, "mousedown",
                function(t) {
                    var n = e.data.getClick(t);
                    e.log(n, "click")
                }),
                h.on(o, "keydown",
                function(t) {
                    var n = e.data.getKeydown(t);
                    e.log(n, "click")
                }),
                n.getClickAndKeydown = function() {
                    return e
                },
                this
            }
        }
    } (window);
    n.setConf({
        trackUrl: "#",
        clickUrl: "#",
        wpoUrl: "#"
    }),
    window.QIHOO_MONITOR = n,
    typeof window.monitor == "undefined" && (window.monitor = n)
})();