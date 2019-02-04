! function(window, $) {! function() { $.bindModule = function(e, t, n) {
            if ("object" != typeof t) { n = t;
                t = e;
                e = 0 }
            var i = e || this;
            $.each(t || {}, function(e, t) { t && t.js && $.each(e.split(" "), function(e, r) {
                    if (i[r]) return;
                    var o = [],
                        a = [];
                    var s = i[r] = function() {
                        var e = arguments;
                        o.push(this);
                        a.push(e);
                        if (1 == s.autoLoaded) return;
                        s.autoLoaded = 1;
                        var u = window.setTimeout(function() { s.autoLoaded = 0 }, 1e3);
                        t.css && $.loadCss(t.css, n);
                        $.loadJS(t.js, function() { u && window.clearTimeout(u);
                            if (i[r] === s) { window.console && window.console.log("方法" + r + "在" + t.js + "中未被定义！自动加载模块处理失败！");
                                i[r] = $.noop;
                                return }
                            for (var e = a.length, n = 0; n < e; n++) i[r].apply(o[n], a[n]);
                            a.length = 0 }, n) } }) });
            return this } }();! function() {
        function e(e) {
            var t = {},
                n = {},
                i = e.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
                r = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                o = !!e.match(/\(Macintosh\; Intel /),
                a = e.match(/(iPad).*OS\s([\d_]+)/),
                s = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                u = !a && e.match(/(iPhone\sOS)\s([\d_]+)/),
                c = e.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
                d = e.match(/Windows Phone ([\d.]+)/),
                l = c && e.match(/TouchPad/),
                f = e.match(/Kindle\/([\d.]+)/),
                h = e.match(/Silk\/([\d._]+)/),
                p = e.match(/(BlackBerry).*Version\/([\d.]+)/),
                m = e.match(/(BB10).*Version\/([\d.]+)/),
                g = e.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
                w = e.match(/PlayBook/),
                v = e.match(/Chrome\/([\d.]+)/) || e.match(/CriOS\/([\d.]+)/),
                b = e.match(/Firefox\/([\d.]+)/),
                y = e.match(/MSIE\s([\d.]+)/) || e.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
                $ = !v && e.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
                S = $ || e.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/),
                C = e.match(/MicroMessenger\/([\d.]+)/),
                x = e.match(/baiduboxapp\/[^\/]+\/([\d.]+)_/) || e.match(/baiduboxapp\/([\d.]+)/) || e.match(/BaiduHD\/([\d.]+)/) || e.match(/FlyFlow\/([\d.]+)/) || e.match(/baidubrowser\/([\d.]+)/),
                T = e.match(/MQQBrowser\/([\d.]+)/) || e.match(/QQ\/([\d.]+)/),
                j = e.match(/UCBrowser\/([\d.]+)/),
                k = e.match(/SogouMobileBrowser\/([\d.]+)/),
                O = r && e.match(/MiuiBrowser\/([\d.]+)/),
                M = e.match(/LBKIT/),
                E = e.match(/Mercury\/([\d.]+)/);
            if (n.webkit = !!i) n.version = i[1];
            if (r) { t.android = true;
                t.version = r[2] }
            if (u && !s) { t.ios = t.iphone = true;
                t.version = u[2].replace(/_/g, ".") }
            if (a) { t.ios = t.ipad = true;
                t.version = a[2].replace(/_/g, ".") }
            if (s) { t.ios = t.ipod = true;
                t.version = s[3] ? s[3].replace(/_/g, ".") : null }
            if (d) { t.wp = true;
                t.version = d[1] }
            if (c) { t.webos = true;
                t.version = c[2] }
            if (l) t.touchpad = true;
            if (p) { t.blackberry = true;
                t.version = p[2] }
            if (m) { t.bb10 = true;
                t.version = m[2] }
            if (g) { t.rimtabletos = true;
                t.version = g[2] }
            if (w) n.playbook = true;
            if (f) { t.kindle = true;
                t.version = f[1] }
            if (h) { n.silk = true;
                n.version = h[1] }
            if (!h && t.android && e.match(/Kindle Fire/)) n.silk = true;
            if (v) { n.chrome = true;
                n.version = v[1] }
            if (b) { n.firefox = true;
                n.version = b[1] }
            if (y) { n.ie = true;
                n.version = y[1] }
            if (S && (o || t.ios)) { n.safari = true;
                if (o) n.version = S[1] }
            if ($) n.webview = true;
            if (C) { n.wechat = true;
                n.version = C[1] }
            if (x) { delete n.webview;
                n.baidu = true;
                n.version = x[1] }
            if (T) { n.qq = true;
                n.version = T[1] }
            if (j) { delete n.webview;
                n.uc = true;
                n.version = j[1] }
            if (k) { delete n.webview;
                n.sogou = true;
                n.version = k[1] }
            if (O) { n.xiaomi = true;
                n.version = O[1] }
            if (M) { n.liebao = true;
                n.version = "0" }
            if (E) { n.mercury = true;
                n.version = E[1] }
            if (navigator.standalone) n.standalone = true;
            t.tablet = !!(a || w || r && !e.match(/Mobile/) || b && e.match(/Tablet/) || y && !e.match(/Phone/) && e.match(/Touch/));
            t.phone = !!(!t.tablet && !t.ipod && (r || u || c || p || m || v && e.match(/Android/) || v && e.match(/CriOS\/([\d.]+)/) || b && e.match(/Mobile/) || y && e.match(/Touch/)));
            return { browser: n, os: t } }
        var t = e(window.navigator.userAgent);
        $.browser = $.browser || {};
        $.os = $.os || {};
        $.extend($.browser, t.browser);
        $.extend($.os, t.os) }();! function() {
        var e = $.browser;
        $.isSupportTouch = "ontouchstart" in document.createElement("div");
        $.support = $.extend($.support || {}, { orientation: !(e.uc || parseFloat($.os.version) < 5 && (e.qq || e.chrome)) && !($.os.android && parseFloat($.os.version) > 3) && "orientation" in window && "onorientationchange" in window, touch: "ontouchend" in document, cssTransitions: "WebKitTransitionEvent" in window, has3d: "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix }) }();

    function Class() {}! function(e) {
        if (e.Class !== Class) e.Class = Class;

        function t() {}
        Class.prototype.log = Class.prototype.warn = t;
        if (e.console) { Class.prototype.log = function() { console.log && console.log.apply(console, arguments) };
            Class.prototype.warn = function() { console.warn && console.warn.apply(console, arguments) } }
        var n = Class.prototype.warn;
        Class.prototype.callSuper = function() { n("父类没有同名方法，不能调用callSuper！") };
        Class.extend = function s(e, t) {
            var u, c, d = this.prototype;
            if (!t) { t = e;
                e = "" }
            if ("object" !== typeof t || !t.hasOwnProperty) { n("继承类的原型数据错误！");
                return }
            var l = r(e);
            if (!l) return;
            u = new this;
            for (var f in t)
                if (t.hasOwnProperty(f))
                    if ("function" == typeof t[f] && "function" == typeof d[f]) {
                        var h = d[f];
                        if (!h.__isAgent) h = o(a(f + "方法被子类覆盖，但是父类没有同名函数，不能调用callSuper!"), d[f]);
                        u[f] = o(h, t[f]) } else u[f] = t[f];
            function p() {}
            p.prototype = u;
            p.prototype.constructor = p;
            p.extend = s;
            p.create = i;
            l(p);
            return p };

        function i() {
            var e = new this;
            if (e.init) e.init.apply(e, arguments);
            return e }

        function r(e) {
            if (!e) return t;
            if (!/^(?:Base|Tools|Widgets|Game|Page)\./.test(e)) return n("Class命名空间错误，一级命名空间只能是:Base、Tools、Widgets、Game、Page");
            var i = e.split("."),
                r = i.length,
                o = 0,
                a = Class,
                s;
            for (; o < r - 1; o++) { s = i[o];
                a = a[s] = a[s] || {} }
            s = i[r - 1];
            if (a[s]) return n("已经有同名Class存在，请更换名称或路径！");
            return function(e) { a[s] = e } }

        function o(e, t) {
            var n = function() {
                var n = this.hasOwnProperty("callSuper"),
                    i = this.callSuper,
                    r;
                this.callSuper = e;
                r = t.apply(this, arguments);
                if (!n) delete this.callSuper;
                else this.callSuper = i;
                return r };
            n.__isAgent = true;
            return n }

        function a(e) {
            return function() { n(e) } } }(window);! function(e) {
        var t = Array.prototype.slice,
            n = Object.prototype.toString,
            i = function() {},
            r = 1,
            o = function(e) {
                return "[object Function]" == n.call(e) };
        var a = e.extend({ init: function() { this.eventCache = this.eventCache || {} }, createEvent: function(e, n) {
                if ("string" !== typeof e) return;
                var i = this,
                    r = i.eventCache;
                $.each(e.split(" "), function(e, a) { r[a] = r[a] || [];
                    n && (i[a] = function(e) {
                        if (o(e)) { i.bind(a, e);
                            return this } else return i.trigger.apply(i, [a].concat(t.call(arguments, 0))) }) }) }, trigger: function(e, n) {
                var i, r = 0,
                    o = this,
                    a = t.call(arguments, 1);
                if (!isNaN(e) && e && +e > 0) {
                    if ("string" !== typeof n) return 1;
                    i = this.eventCache[n || ""];
                    if (!i) return 2;
                    if (!i.length) return 0;
                    i.paras = a;
                    if (!i.t) i.t = window.setTimeout(function() { delete i.t;
                        o.trigger.apply(o, i.paras) }, parseInt(e, 10) || 200);
                    return 0 }
                if ("number" === typeof e && (isNaN(e) || e < 0)) {
                    if ("string" !== typeof n) return 1;
                    i = this.eventCache[n || ""];
                    if (i) this.warn("事件" + n + "设置的缓冲保护时间不是合法数字") } else {
                    if ("string" !== typeof(e || n)) return 1;
                    i = this.eventCache[e || n || ""] }
                if (!i) return 2;
                $.each(i.slice(0), function(e, t) {
                    try {
                        if (false === t.apply(o, a)) r++ } catch (n) { o.log(n);
                        return } });
                return r ? false : 0 }, bind: function(e, t) {
                if ("string" !== typeof e) return 1;
                var n = this.eventCache[e];
                if (!n) return 2;
                if (!o(t)) return 3;
                t.muid = t.muid || r++;
                n.push(t);
                return 0 }, unbind: function(e, t) {
                if (0 === arguments.length) { this.eventCache = {};
                    return 0 }
                if ("string" !== typeof e) return 1;
                var n = this.eventCache[e || ""];
                if (!n) return 2;
                if (void 0 === t) { n.length = 0;
                    return this }
                if (!o(t)) return 3;
                for (var i = 0; i < n.length; i++)
                    if (n[i] === t || t.muid && n[i].muid === t.muid) { n.splice(i, 1);
                        i-- }
                return 0 }, bindOnce: function(e, t) {
                if ("string" !== typeof e) return 1;
                var n = this.eventCache[e],
                    i = this;
                if (!n) return 2;
                if (!o(t)) return 3;
                var a = function() {
                    var n = t.apply(this, arguments);
                    i.unbind(e, a);
                    return n };
                a.muid = t.muid = t.muid || r++;
                return i.bind(e, a) } });
        e.extend("Base.Message", { init: function() { this.__agent = this.__agent || a.create() }, bindMsg: function(e, t, n, i) {
                if (!e || !o(t)) return this;
                this.__agent.createEvent(e);
                var r = n ? function() {
                    return t.apply(n, arguments) } : function() {
                    return t.apply(window, arguments) };
                r.muid = t.muid;
                this.__agent[i ? "bindOnce" : "bind"](e, r);
                t.muid = r.muid;
                return this }, bindMsgOnce: function(e, t, n) {
                return this.bindMsg(e, t, n, 1) }, unbindMsg: function(e) {
                if (!e) return this;
                this.__agent.unbind.apply(this.__agent, arguments);
                return this }, sendMsg: function(e) { this.__agent.trigger.apply(this.__agent, arguments);
                return this } });! function(t, n) {
            var i = e.Base.Message.create();
            t.each(["bindMsg", "bindMsgOnce", "unbindMsg", "sendMsg"], function(e, r) { n[r] = t[r] = function() { i[r].apply(i, arguments);
                    return this } }) }(window.jQuery || window.Zepto, window.Zepto || window);
        a.extend("Base.Event", { init: function(e) { this.callSuper();
                this.createEvent(e, true);
                this.createEvent = i }, trigger: function(e) {
                var t = this.callSuper.apply(this, arguments);
                if (t && !isNaN(t)) this.warn(["trigger事件名称必须是字符串", "未注册的事件(" + e + ")不能trigger"][t - 1]);
                if (false === t) return false }, bind: function(e) {
                var t = this.callSuper.apply(this, arguments);
                if (t) this.warn(["bind事件名称必须是字符串", "未注册的事件(" + e + ")不能bind", "bind(" + e + ")注册事件必须是函数"][t - 1]);
                return this }, unbind: function(e) {
                if (!e) { this.warn("暂不支持全部事件一次性卸载");
                    return this }
                this.callSuper.apply(this, arguments);
                return this }, bindOnce: function(e) {
                var t = this.callSuper.apply(this, arguments);
                if (t) this.warn(["bindOnce事件名称必须是字符串", "未注册的事件(" + e + ")不能bindOnce", "bindOnce(" + e + ")注册事件必须是函数"][t - 1]);
                return this } }) }(window.Class);! function() { $.extend(Number.prototype, { Round: function(e, t) {
                var n = Math.pow(10, e || 0);
                return 0 == t ? Math.ceil(this * n) / n : Math.round(this * n + (5 - (t || 5)) / 10) / n }, Cint: function(e) {
                return this.Round(0, e) }, Round465: function(e) {
                var t, e = e || 0,
                    n = "" + this,
                    i = false,
                    r;
                t = new RegExp("^(\\d*)(\\d)(\\.)(\\d{" + e + "})5(\\d*)$");
                if (t.test(n)) {
                    if (0 == e) { n = n.replace(t, "$1$2");
                        r = RegExp.$2 } else { n = n.replace(t, "$1$2$3$4");
                        r = RegExp.$4 }
                    if (+RegExp.$5 > 0) i = true;
                    else if (r % 2 != 0) i = true;
                    if (i) n = +n + 1 / Math.pow(10, e) }
                n = (+n).Round(e);
                return n } });
        var e = /./,
            t = e.compile && e.compile(e.source, "g");
        RegExp.regCompile = t;
        $.extend(String.prototype, { trim: function() {
                return this.replace(/^(?:\s|\xa0|\u3000)+|(?:\s|\xa0|\u3000)+$/g, "") }, byteLen: function() {
                return this.replace(/([^\x00-\xff])/g, "ma").length }, cutString: function(e, t) {
                var n = /([^\x00-\xff])/g,
                    i = /([^\x00-\xff]) /g;
                if (t) {
                    var r = String(t),
                        o = r.length,
                        a = this.replace(n, "$1 ");
                    e = e >= o ? e - o : 0;
                    t = a.length > e ? r : "";
                    return a.substr(0, e).replace(i, "$1") + t }
                return this.substr(0, e).replace(n, "$1 ").substr(0, e).replace(i, "$1") } });
        $.extend($.fn, { fixPosition: function(e) {
                var t = this;
                if (t.attr("isFixed")) return t;
                t.css(e).css("position", "fixed").attr("isFixed", true);
                var n = $('<div style="position:fixed;top:10px;"></div>').appendTo("body"),
                    i = n[0].getBoundingClientRect().top,
                    r = function() {
                        if (window.pageYOffset > 0) {
                            if (n[0].getBoundingClientRect().top !== i) { t.css("position", "absolute");
                                o();
                                $(document).on("scrollStop", o);
                                $(window).on("ortchange", o) }
                            $(document).off("scrollStop", r);
                            n.remove() } },
                    o = function() { t.css({ top: window.pageYOffset + (void 0 !== e.bottom ? window.innerHeight - t.height() - e.bottom : e.top || 0), left: void 0 !== e.right ? document.body.offsetWidth - t.width() - e.right : e.left || 0 }); "100%" == e.width && t.css("width", document.body.offsetWidth) };
                $(document).on("scrollStop", r);
                return t } }) }();! function() {
        var e = "163.com",
            t = /\.163\.com$/i,
            n = function(e) {
                var n = (e + "").toLowerCase(),
                    i = n.indexOf("http");
                return i < 0 ? t.test(n) ? n : "" : i ? "" : n.replace(/^https?:\/\//, "").replace(/\/.+$/, "") },
            i = {},
            r = {},
            o = function(e, t) {
                var a = n(e),
                    s = window.location.host + "",
                    u = i[a],
                    c = e.replace(/\/$/g, "") + "/agent/ajaxAgentV2.htm",
                    d = function(e) {
                        var t = r[a] || [];
                        $.each(t, function(t, n) { n(e) });
                        r[a] = null };
                if (c.indexOf("http") < 0) c = "http://" + c;
                if (!a || a == s) { d($);
                    t($);
                    return }
                if (u) try { u.__test = +new Date } catch (l) { i[a] = u = null }
                if (u) { d(u);
                    t(u);
                    return }
                if (r[a]) { r[a].push(t);
                    return }
                if (!document.body) { window.setTimeout(function() { o(e, t) }, 1);
                    return }
                r[a] = r[a] || [];
                r[a].push(t);
                var f = document.createElement("iframe");
                f.src = "about:blank";
                f.width = 0;
                f.height = 0;
                f.setAttribute("frameborder", 0);
                f.scrolling = "no";
                document.body.appendChild(f);

                function h(e, t) { $(f).unbind().bind("load", function() {
                        try {
                            var e = f.contentWindow.jQuery;
                            e.__test = +new Date;
                            d(e) } catch (n) { t && t() } });
                    f.src = c + "?domain=" + e + "&v=" + +new Date }
                if (a.indexOf(document.domain) > 0) h(document.domain = document.domain);
                else h(document.domain, function() {
                    if (a.indexOf(document.domain) > 0) h(document.domain);
                    else h("") }) },
            a = function(e) { e = e.replace(/("|')\\?\/Date\((-?[0-9+]+)\)\\?\/\1/g, "new Date($2)");
                return new Function("return " + e)() },
            s = {},
            u = function(e, i, r, a, s) {
                var u = window.location.host + "",
                    d = n(i) || u,
                    l = "http:",
                    f = "80",
                    h;
                if (/^(https?:)/i.test(i)) { l = RegExp.$1.toLowerCase();
                    if (/:(\d+)/i.test(i)) f = RegExp.$1 || "80" } else { l = window.location.protocol;
                    f = window.location.port || "80" }
                if (window.location.protocol != l || (window.location.port || "80") != f) { h = $.isFunction(a) ? a : $.isFunction(r) ? r : $.noop;
                    h.call(window.Core || window, 2, "", "protocols or ports not match");
                    return }
                if (t.test(d) && t.test(u) && d.indexOf(document.domain) >= 0 && "http:" == l) o(d, function(t) { c(t, e, i, r, a, s) });
                else c(jQuery, e, i.replace(/https?:\/\/[^\/]+/, ""), r, a, s) },
            r = {},
            c = function(e, t, n, i, o, u) {
                var c = $.isFunction(o) ? o : $.noop,
                    d = n,
                    l, f, h = window.Core || window,
                    p = false,
                    m = (d.indexOf("?") + 1 ? "&" : "?") + "cache=" + +new Date,
                    g, w;
                if ($.isFunction(i)) { c = i;
                    i = null;
                    u = o }
                if (u && 0 == u.indexOf("*")) { p = true;
                    u = u.substr(1) }
                if (u) {
                    if (0 === u.indexOf("!")) { u = u.substr(1);
                        if (r[u]) { r[u].push(c);
                            return }
                        r[u] = [];
                        o = c;
                        c = function() {
                            var e = arguments,
                                t = this;
                            o.apply(t, e);
                            $.each(r[u], function(n, i) { i.apply(t, e) });
                            delete r[u] } }
                    l = s[u];
                    if (l) {
                        if (0 !== u.indexOf("@")) return;
                        f = l.readyState;
                        if (f > 0 && f < 5) {
                            try { l.aborted = true } catch (v) {}
                            l.abort() } } }
                g = t.split(".");
                w = g.length > 1 ? g[1] : "";
                l = e.ajax({ url: d + (p ? "" : m), type: g[0], data: i, success: function(e, t, n) { delete s[u];
                        if (n.aborted) return;
                        e = n.responseText;
                        if (void 0 == e || null == e || "" == e || e.indexOf("<!DOCTYPE") >= 0) { c.call(h, 1, e, t);
                            return }
                        if ("JSON" == w) try { e = a(e) } catch (i) { c.call(h, 3, n.responseText, t);
                            return }
                        c.call(h, 0, e, t) }, error: function(e, t) { delete s[u];
                        if (!t || "error" == t) { c.call(h, 1, "", t);
                            return }
                        if (e.aborted) return;
                        c.call(h, 1, e.responseText, t) } });
                u && (s[u] = l) };
        $.extend({ get2: function(e, t, n, i) { u("GET", e, t, n, i);
                return this }, post2: function(e, t, n, i) { u("POST", e, t, n, i);
                return this }, getJSON2: function(e, t, n, i) { u("GET.JSON", e, t, n, i);
                return this }, postJSON2: function(e, t, n, i) { u("POST.JSON", e, t, n, i);
                return this } }) }();! function() {
        var e = function(e, t, n) {
            var i = 0,
                r;
            if ("function" !== typeof t) { n = t;
                t = e;
                e = 250 }

            function o() {
                var o = this,
                    a = Date.now() - i,
                    s = arguments;

                function u() { i = Date.now();
                    t.apply(o, s) }

                function c() { r = void 0 }
                if (n && !r) u();
                r && clearTimeout(r);
                if (void 0 === n && a > e) u();
                else r = setTimeout(n ? c : u, void 0 === n ? e - a : e) }
            o._zid = t._zid = t._zid || $.proxy(t)._zid;
            return o };
        $.matchMedia = function() {
            var e = 0,
                t = "gmu-media-detect",
                n = $.fx.transitionEnd,
                i = $.fx.cssPrefix,
                r = $("<style></style>").append("." + t + "{" + i + "transition: width 0.001ms; width: 0; position: relative; bottom: -999999px;}\n").appendTo("head");
            return function(i) {
                var o = t + e++,
                    a = $('<div class="' + t + '" id="' + o + '"></div>').appendTo("body"),
                    s = [],
                    u;
                r.append("@media " + i + " { #" + o + " { width: 100px; } }\n");
                if ("matchMedia" in window) return window.matchMedia(i);
                a.on(n, function() { u.matches = 100 === a.width();
                    $.each(s, function(e, t) { $.isFunction(t) && t.call(u, u) }) });
                u = { matches: 100 === a.width(), media: i, addListener: function(e) { s.push(e);
                        return this }, removeListener: function(e) {
                        var t = s.indexOf(e);~t && s.splice(t, 1);
                        return this } };
                return u } }();
        $(function() {
            var e = function(e) {
                    if (t !== e.matches) { $(window).trigger("ortchange");
                        t = e.matches } },
                t = true;
            $.mediaQuery = { ortchange: "screen and (width: " + document.documentElement.clientWidth + "px)" };
            $.matchMedia($.mediaQuery.ortchange).addListener(e) });

        function t() { $(window).on("scroll", e(80, function() { $(document).trigger("scrollStop") }, false)) }

        function n() { $(window).off("scroll");
            t() }
        t();
        $(window).on("pageshow", function(e) {
            if (e.persisted) $(document).off("touchstart", n).one("touchstart", n) }) }();! function() { $.cookie = function(e, t, n) {
            if (arguments.length > 1 && (null === t || "object" !== typeof t)) { n = $.extend({}, n);
                if (null === t) n.expires = -1;
                if ("number" === typeof n.expires) {
                    var i = n.expires,
                        r = n.expires = new Date;
                    r.setDate(r.getDate() + i) }
                return document.cookie = [encodeURIComponent(e), "=", n.raw ? String(t) : encodeURIComponent(String(t)), n.expires ? "; expires=" + n.expires.toUTCString() : "", n.path ? "; path=" + n.path : "", n.domain ? "; domain=" + n.domain : "", n.secure ? "; secure" : ""].join("") }
            n = t || {};
            var o, a = n.raw ? function(e) {
                return e } : decodeURIComponent;
            return (o = new RegExp("(?:^|; )" + encodeURIComponent(e) + "=([^;]*)").exec(document.cookie)) ? a(o[1]) : null } }();! function() {
        var e = {},
            t = function(t, n, i, r, o) {
                var a = n.toLowerCase().replace(/#.*$/, "").replace("/?.*$/", ""),
                    s, u, c = $.isFunction,
                    d = e[a] || [],
                    l = !!(i || $.noop)(n),
                    f = window.CollectGarbage || $.noop;
                if (l) { c(r) && r();
                    return }
                e[a] = d;
                if (!d || !d.loaded || i && !l) { c(r) && d.push(r);
                    d.loaded = 1;
                    s = document.createElement(t), u = document.getElementsByTagName("head")[0] || document.documentElement;
                    n = n + (n.indexOf("?") >= 0 ? "&" : "?") + (window.Core && Core.version || +new Date);
                    if ("link" == t) { s.rel = "stylesheet";
                        s.type = "text/css";
                        s.media = "screen";
                        s.charset = o || "UTF-8";
                        s.href = n } else { s.type = "text/javascript";
                        s.charset = o || "UTF-8";
                        var h = false;
                        s.onload = s.onreadystatechange = function() {
                            if (!h && (!this.readyState || { loaded: 1, complete: 1 }[this.readyState])) { h = true;
                                s.onload = s.onreadystatechange = null;
                                this.parentNode.removeChild(this);
                                var t = e[a],
                                    n = t.length,
                                    i = 0;
                                t.loaded = 2;
                                for (; i < n; i++) c(t[i]) && t[i]();
                                t.length = 0;
                                t = u = s = null;
                                f() } };
                        s.src = n }
                    u.appendChild(s, u.lastChild) } else if (2 == d.loaded) { c(r) && r();
                    d = null;
                    f() } else { c(r) && d.push(r);
                    d = null;
                    f() } },
            n = function(e, t) {
                if (!t) return e;
                return /^http/i.test(e) ? e : t.replace(/\/*$/, "") + e };
        $.extend({ loadJS: function(e, i, r, o, a) {
                if (!$.isFunction(r)) { a = o;
                    o = r;
                    r = i;
                    i = null }
                if (!$.isFunction(r)) { a = o;
                    o = r;
                    r = null }
                if (/^http/i.test(o)) { a = o;
                    o = "" }
                if ($.isArray(e)) {
                    var s = e.length,
                        u = function(c) {
                            if (c < s) t("script", n(e[c], a), i, function() { u(c + 1) }, o);
                            else $.isFunction(r) && r() };
                    u(0) } else t("script", n(e, a), i, r, o);
                return this }, loadCss: function(e, i) {
                if ($.isArray(e)) {
                    var r = e.length,
                        o = 0;
                    for (; o < r; o++) t("link", n(e[o], i)) } else t("link", n(e, i));
                return this } }) }();! function(e, t) {
        var n = function() {},
            i = { set: n, get: n, remove: n, clear: n, each: n, obj: n, length: 0 },
            r = function(e) {
                if (!e) return t;
                return { set: function(n, i) {
                        if (this.get(n) !== t) this.remove(n);
                        e.setItem(n, i) }, get: function(n) {
                        var i = e.getItem(n);
                        return null === i ? t : i }, remove: function(t) { e.removeItem(t) }, clear: function() { e.clear() }, each: function(e) {
                        var t = this.obj(),
                            n = e || function() {},
                            i;
                        for (i in t)
                            if (false === n.call(this, i, this.get(i))) break }, obj: function() {
                        var t = {},
                            n = 0,
                            i, r;
                        if (e.isVirtualObject) t = e.key(-1);
                        else { i = e.length;
                            for (; n < i; n++) { r = e.key(n);
                                t[r] = this.get(r) } }
                        return t } } };
        try { e.LS = r(e.localStorage);
            e.SS = r(e.sessionStorage);
            e.LS.set("test", "test");
            e.LS.remove("test") } catch (o) { e.LS = e.SS = i }
        if (e.$) { e.$.LS = e.LS;
            e.$.SS = e.SS } }(window);
    $.extend({ getUrlPara: function(e) {
            var t = window.location.search.replace(/^\?/g, ""),
                n = t;
            try { n = decodeURI(t) } catch (i) { n = t.replace(/"%26"/g, "&") }
            return $.getParaFromString(n, e) }, getHashPara: function(e) {
            var t = window.location.href.match(/#(.*)$/);
            return $.getParaFromString(t ? t[1] : "", e) }, getPara: function(e) {
            return $.getUrlPara(e) || $.getHashPara(e) }, getParaFromString: function(e, t) {
            var n = e.split("&"),
                i = {};
            $.each(n, function() {
                var e = this.split("=");
                e[0] && e.length > 1 && (i[e[0]] = decodeURIComponent(e[1])) });
            if (void 0 === t) return i;
            else return i[t] || "" }, safeHTML: function(e) {
            return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;") }, safeRegStr: function(e) {
            return String(e).replace(/([\\\(\)\{\}\[\]\^\$\+\-\*\?\|])/g, "\\$1") }, falseFn: function() {
            return false }, stopProp: function(e) { e.stopPropagation() }, preventDft: function(e) { e.preventDefault() }, isLeftClick: function(e) {
            return e.button == (eval('"\\v"=="v"') ? 1 : 0) }, addUrlPara: function(e, t) {
            var n = (e + "").split("#"),
                i = n[0].indexOf("?") + 1 ? "&" : "?";
            return n[0] + i + t + (n.length > 1 ? "#" + n[1] : "") }, removeUrlPara: function(e, t) {
            var n = e.split("#"),
                i = n[0].split("?"),
                r = i[0],
                o = i.length > 1 ? i[1] : "",
                a = n.length > 1 ? "#" + n[1] : "",
                s = "string" === typeof t && t ? [t] : t.join ? t : [];
            if (!s.length || !o) return r.replace(/\?.+$/, "") + a;
            $.map(s, function(e) {
                return e.replace(/([\\\(\)\{\}\[\]\^\$\+\-\*\?\|])/g, "\\$1") });
            return (r + "?" + o.replace(new RegExp("(?:^|&)(?:" + s.join("|") + ")=[^&$]+", "g"), "").replace(/^&/, "")).replace(/\?$/, "") + a }, fillUrl: function(e) {
            if ("string" !== typeof e || "" == e) return e;
            if (!/^http/i.test(e)) {
                var t = window.location.port || "80",
                    n = /^\//.test(e);
                if (!n) e = document.URL.replace(/\/[^\/]*$/g, "/") + e;
                else e = window.location.protocol + "//" + window.location.host + ("80" == t ? "" : ":" + t) + e }
            return e }, addFav: window.sidebar && window.sidebar.addPanel ? function(e, t) { window.sidebar.addPanel(t, e, "") } : function(e, t) {
            try { window.external.addFavorite(e, t) } catch (n) { window.alert("请尝试点击 Ctrl + D 来添加！") } }, formatTime: function(e, t) {
            var n = /^\d+$/gi.test(e + "") ? +e : Date.parse(e);
            if (isNaN(n)) return e;
            var i = new Date(n),
                r = function(e) {
                    return ("0" + e).slice(-2) },
                o = i.getFullYear(),
                a = i.getMonth() + 1,
                s = r(a),
                u = i.getDate(),
                c = r(u),
                d = i.getHours(),
                l = r(d),
                f = i.getMinutes(),
                h = r(f),
                p = i.getSeconds(),
                m = r(p);
            return (t || "yyyy-MM-dd hh:mm:ss").replace(/yyyy/g, o).replace(/MM/g, s).replace(/M/g, a).replace(/dd/g, c).replace(/d/g, u).replace(/hh/g, l).replace(/h/g, d).replace(/mm/g, h).replace(/m/g, f).replace(/ss/g, m).replace(/s/g, p) } });! function() {
        var e = window.jQuery || window.Zepto || window;
        var t = {},
            n = {},
            i = 0,
            r = Object.prototype.toString,
            o = function(e, t) {
                var n = t || "%",
                    i = new Function("var p=[],my=this,data=my,print=function(){p.push.apply(p,arguments);};p.push('" + e.replace(/[\r\t\n]/g, " ").split("<" + n).join("	").replace(new RegExp("((^|" + n + ">)[^\\t]*)'", "g"), "$1\r").replace(new RegExp("\\t=(.*?)" + n + ">", "g"), "',$1,'").split("	").join("');").split(n + ">").join("p.push('").split("\r").join("\\'") + "');return p.join('');");
                return i };
        e.template = function(e, a, s) { s = s || "%";
            var u = "[object Function]" === r.call(e) ? e : !/\W/.test(e) ? n[e + s] = n[e + s] || o(document.getElementById(e).innerHTML, s) : function() {
                for (var r in t)
                    if (t[r] === e) return n[r];
                return t[++i] = e, n[i] = o(e, s) }();
            return a ? u.call(a) : u } }();
    $.fn.extend({ disabled: function(e) {
            return this.each(function() {
                var t = this.bindDownCssFix || "",
                    n = !e ? "disabled" + t : e;
                $(this).attr("disabled", "disabled").addClass(n)[0].disabled = true }) }, enabled: function(e) {
            return this.each(function() {
                var t = this.bindDownCssFix || "",
                    n = !e ? "disabled" + t : e;
                $(this).removeClass(n).removeAttr("disabled")[0].disabled = false }) }, disableDrag: function() {
            return this.bind("dragstart", $.falseFn) }, enableDrag: function() {
            return this.unbind("dragstart", $.falseFn) } });! function() {
        var e = RegExp.regCompile ? /./.compile("\\{([\\w\\.]+)\\}", "g") : /\{([\w\.]+)\}/g;
        $.format = function(t, n) {
            var i = true,
                r, o, a = void 0 === n ? null : $.isPlainObject(n) ? (i = false, n) : $.isArray(n) ? n : Array.prototype.slice.call(arguments, 1);
            if (null === a) return t;
            r = i ? a.length : 0;
            o = RegExp.regCompile ? /./.compile("^\\d+$") : /^\d+$/;
            return String(t).replace(e, function(e, t) {
                var n = o.test(t),
                    s, u, c;
                if (n && i) { s = parseInt(t, 10);
                    return s < r ? a[s] : e } else { u = t.split(".");
                    c = a;
                    for (var d = 0; d < u.length; d++) c = c[u[d]];
                    return void 0 === c ? e : c } }) } }();
    $.fn.bindTab = function(e, t, n, i, r) {
        if (!$.isFunction(e)) { r = i;
            i = n;
            n = t;
            t = e;
            e = $.noop }
        return this.each(function() {
            var o = $(this),
                a, s = i || "active",
                u = n || "li",
                c = r || "rel",
                d = t || "mouseenter",
                l = "mouseenter" == d,
                f = function(t) { $(o.find("." + s).removeClass(s).attr(c)).hide();
                    var n = $(t.addClass(s).attr(c)).show()[0];
                    e.call(t[0], n) };
            o.delegate(u, d, function() {
                var e = $(this);
                if (e.hasClass(s) || this.disabled) return;
                if (l) { a && window.clearTimeout(a);
                    a = window.setTimeout(function() { f(e) }, 200) } else f(e) });
            l && o.delegate(u, "mouseleave", function() { a && window.clearTimeout(a);
                a = 0 }); "a" == u && o.delegate(u, "click", function(e) { e.preventDefault() }) }) };
    $.hash = function(e, t) {
        if ("string" === typeof e && void 0 === t) return $.getHashPara(e);
        var n = window.location.hash.replace(/^#*/, "").split("&"),
            i = {},
            r = n.length,
            o = 0,
            a, s = {},
            u = {},
            c, d;
        for (; o < r; o++) { a = n[o].split("=");
            if (2 == a.length && a[0].length) { d = decodeURIComponent(a[0]);
                c = d.toLowerCase();
                if (!u[c]) { s[d] = decodeURIComponent(a[1]);
                    u[c] = d } } }
        if (void 0 === e) return s;
        if ($.isPlainObject(e)) i = e;
        else i[e] = t;
        for (d in i) { t = i[d];
            c = d.toLowerCase();
            u[c] && void 0 !== s[u[c]] && delete s[u[c]];
            if (null !== t) { u[c] = d;
                s[d] = String(t) } }
        n.length = 0;
        for (d in s) n.push(encodeURIComponent(d) + "=" + encodeURIComponent(s[d]));
        window.location.hash = "#" + n.join("&") };! function(e, t) {
        var n = "",
            i, r = { Webkit: "webkit", Moz: "", O: "o" },
            o = document.createElement("div"),
            a = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
            s, u, c, d, l, f, h, p, m, g = {};

        function w(e) {
            return e.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase() }

        function v(e) {
            return i ? i + e : e.toLowerCase() }
        e.each(r, function(e, r) {
            if (o.style[e + "TransitionProperty"] !== t) { n = "-" + e.toLowerCase() + "-";
                i = r;
                return false } });
        s = n + "transform";
        g[u = n + "transition-property"] = g[c = n + "transition-duration"] = g[l = n + "transition-delay"] = g[d = n + "transition-timing-function"] = g[f = n + "animation-name"] = g[h = n + "animation-duration"] = g[m = n + "animation-delay"] = g[p = n + "animation-timing-function"] = "";
        e.extend(e.fx, { offCss3An: i === t && o.style.transitionProperty === t, cssPrefix: n, transitionEnd: v("TransitionEnd"), animationEnd: v("AnimationEnd") });
        e.fn.animateCss3 = function(n, i, r, o, a) {
            if (e.isFunction(i)) o = i, r = t, i = t;
            if (e.isFunction(r)) o = r, r = t;
            if (e.isPlainObject(i)) r = i.easing, o = i.complete, a = i.delay, i = i.duration;
            if (i) i = (e.isNumeric(i) ? +i : e.fx.speeds[i] || e.fx.speeds._default) / 1e3;
            if (a) a = parseFloat(a) / 1e3;
            return b.call(this, n, i, r, o, a) };

        function b(n, i, r, o, v) {
            var b, y = {},
                $, S = "",
                C = this,
                x, T = e.fx.transitionEnd,
                j = false;
            if (i === t) i = e.fx.speeds._default / 1e3;
            if (v === t) v = 0;
            if (e.fx.offCss3An) i = 0;
            if ("string" == typeof n) { y[f] = n;
                y[h] = i + "s";
                y[m] = v + "s";
                y[p] = r || "linear";
                T = e.fx.animationEnd } else { $ = [];
                for (b in n) {
                    if (a.test(b)) S += b + "(" + n[b] + ") ";
                    else { y[b] = n[b];
                        $.push(w(b)) }
                    if (S) { y[s] = S;
                        $.push(s) }
                    if (i > 0 && "object" === typeof n) { y[u] = $.join(", ");
                        y[c] = i + "s";
                        y[l] = v + "s";
                        y[d] = r || "linear" } } }
            x = function(t) {
                if ("undefined" !== typeof t) {
                    if (t.target !== t.currentTarget) return;
                    e(t.target).unbind(T, x) } else e(this).unbind(T, x);
                j = true;
                e(this).css(g);
                o && o.call(this) };
            if (i > 0) { this.bind(T, x);
                setTimeout(function() {
                    if (j) return;
                    x.call(C) }, 1e3 * (i + v) + 25) }
            this.size() && this.get(0).clientLeft;
            this.css(y);
            if (i <= 0) setTimeout(function() { C.each(function() { x.call(this) }) }, 0);
            return this }
        o = null }(window.$) }(window, jQuery);
var Core = function(e, t, n) {
    var i = { connectTime: e.performance && e.performance.timing ? e.performance.timing.connectStart || 0 : 0, serverInitTime: +new Date, localInitTime: +new Date, getServerTime: function() {
            var e = this.localInitTime - this.connectTime,
                t = this.serverInitTime + +new Date - this.localInitTime;
            return new Date(this.connectTime > 0 && e > 0 ? t + e : t) } };
    var r = document.domain,
        o = r.indexOf("bbs.") >= 0;
    if (/.*\.caipiao\.163\.com$/i.test(r) && !o) try { document.domain = "caipiao.163.com" } catch (a) {}
    var s = { version: 1, config: {}, cdnUrl: "http://pimg1.126.net/caipiao", navConfig: { appName: "游戏", appID: "caipiao" }, isSupportTouch: t.isSupportTouch, events: {}, eventWrap: null, serverTime: function() {
            return i.getServerTime() }, navInit: function() { delete this.navInit;
            return this }, configInit: function(e, n, r, o) {
            if (e) this.cdnUrl = e;
            if (n) this.userId = this.accountId = n;
            if (r) this.version = r;
            o = +o;
            if (o) i.serverInitTime = o;
            t.bindModule({ "dialog alert confirm toast": { js: "/wap/js/dialog.js" }, "getProtectedFn getStopRecursionFn": { js: "/wap/js/tools/protect.js" } }, this.cdnUrl);
            t.bindModule(t.fn, { "bindMinMaxCheck bindAutoCheck bindLiveCheck bindLiveCheck2 bindNumberLiveCheck bindNumberLiveCheck2": { js: "/wap/js/liveCheck.js" }, quickDelete: { js: "/wap/js/com/quickDelete.js", css: "/wap/css/com/quickDelete.css" }, easyEvents: { js: "/wap/js/tools/event.js" } }, this.cdnUrl);
            return this }, init: function() { this.autoModule = {};
            this.showTopAd();
            if (this.autoModule) this.bindModule(this.autoModule, this.cdnUrl);
            this.myInit();
            if (t.getPara("debug")) t.cookie("debug", "true" === t.getPara("debug") ? "true" : null, { path: "/" });
            this.__debug__ = "true" === t.cookie("debug");
            var n = e.gameEn || s.gameEn;
            if (!n || "string" == !typeof n) {
                if (s.config && s.config.gameEn) n = s.config.gameEn;
                if (e.Game) {
                    if (Game.gameEn) n = e.Game.gameEn;
                    if (e.Game.config && e.Game.config.gameEn) n = e.Game.config.gameEn } }
            this.checkGamePause(n);
            delete this.init;
            this.quickInit && delete this.quickInit;
            return this }, fastInit: function() {
            if (this.eventWrap && this.events && t.fn.easyEvents) t(this.eventWrap).easyEvents(this.events, this);
            this.quickInit && this.quickInit();
            this.dealUrl();
            delete this.fastInit;
            return this }, checkGamePause: function() {
            var n, i;
            return function(r, o) {
                var a = this;
                if (i) return;
                if (e.self !== e.top) return;
                i = e.setTimeout(function() { o = o || t.noop;
                    s.loadCdnJS("/wap/js/game/stopGameStatus.js", function() {
                        return !!Class.Game && Class.Game.StopGameStatus }, function() { n = n || Class.Game.StopGameStatus.create();
                        a.stopGameStatus = n;
                        n.onCheck(function(e) { o(e) });
                        n.checkStopStatus(r) });
                    i = null }, 200) } }(), showTopAd: function() {
            var e = t.getUrlPara("referered") || document.referrer,
                n = (e.match(/^https*:\/\/(.+?)\//) || [])[1];
            s.loadCdnJS("/wap/js/popularize/topHi.js", function() { s.topHi(e, n) }) }, openClient: function(i, r, o, a) {
            var s = function() {
                var e;
                if ("undefined" !== typeof document.hidden) e = "hidden";
                else if ("undefined" !== typeof document.mozHidden) e = "mozHidden";
                else if ("undefined" !== typeof document.msHidden) e = "msHidden";
                else if ("undefined" !== typeof document.webkitHidden) e = "webkitHidden";
                return function() {
                    return e ? document[e] : n } }();
            r = r || "http://caipiao.163.com/m/downloadClient.html?iclientid=411654863&channel=wap&isPop=true&from=wap";
            o = o || 1e3;
            t(i).on("click", function(t) { t.preventDefault();
                var n = document.body;
                var i = document.createElement("iframe");
                i.src = a || "ntescaipiao://hall";
                i.style.display = "none";
                n.appendChild(i);
                e.setTimeout(function() { n.removeChild(i);
                    if (!s()) e.location.href = r }, o) }) }, hideToolbar: function() {
            var n = t(".docBody"),
                i = n.height();
            n.height("5000px");
            setTimeout(function() { e.scrollTo(0, 0);
                n.css("height", e.innerHeight);
                t("body").css("height", e.innerHeight) }, 0);
            return this }, dealUrl: function() { t(document.body).delegate("a[cpurl]", "click", function(t) {
                var n = this.getAttribute("cpurl");
                if (n) {
                    if ("history" === n) history.back();
                    else if (/^javascript/.test(n)) return;
                    else e.location.href = n;
                    t.preventDefault() } });
            return this }, bindModule: function(e) { t.bindModule(this, e, this.cdnUrl);
            return this }, parseJSON: function(e) { e = e.replace(/("|')\\?\/Date\((-?[0-9+]+)\)\\?\/\1/g, "new Date($2)");
            return new Function("return " + e)() }, showToastFor: function(n, i, r) {
            var o = t(n),
                a = o.offset(),
                s = t("<div class='targetErrorToast'>" + i + "</div>").appendTo(document.body);
            s.css({ top: a.top - 1.2 * s.height(), left: (t(e).width() - s.width()) / 2 });
            var u = function() { s.remove();
                    o.unbind("input", u);
                    e.clearTimeout(c) },
                c = e.setTimeout(u, r || 2500);
            o.trigger("input").one("input", u);
            o[0].select && o[0].focus() }, login: function(t, n, i) {
            if (s.isLoginPage) return;
            if (!n) { e.location.href = "http://caipiao.163.com/t/login.html?backUrl=" + encodeURIComponent(t);
                return } }, isLogin: function(e) { this.get("http://caipiao.163.com/t/identity/queryLoginStatus.html", function(t, n) {
                var i = t ? false : "0" == n ? "" : n;
                e && e.call(this, i) }) }, virualViewStat: function(e, t) {
            if (!e) return;
            neteaseTracker(true, e, t);
            return this }, countLoadingTime: function(e) {
            var n = "http://click.caipiao.163.com/t/",
                r, o, a = t.cookie("countLoadingTime") || "",
                u = new Date,
                c;
            n += e;
            try { a = s.parseJSON(a) || {} } catch (d) {}
            a[e] = a[e] || 0;
            o = a[e];
            if (0 == o && Math.random() >= .6) { a[e] = 2;
                t.cookie("countLoadingTime", JSON.stringify(a), { expires: new Date(u.getTime() + 60 * 60 * 1e3), path: "/" });
                return this }
            if (o < 2 && "undefined" != typeof __loadindStartTime) { r = u.getTime() - __loadindStartTime.getTime();
                c = "?serverTime=";
                c += +i.getServerTime();
                c += "&loadingTime=" + r;
                a[e] = a[e] + 1;
                t.cookie("countLoadingTime", JSON.stringify(a), { expires: new Date(u.getTime() + 60 * 60 * 1e3), path: "/" });
                n += c;
                if ("undefined" != typeof neteaseTracker) neteaseTracker(true, n, "") }
            return this }, get: t.get2, post: t.post2, getJSON: t.getJSON2, postJSON: t.postJSON2, loadJS: t.loadJS, loadCss: t.loadCss, loadCdnJS: function() { Array.prototype.push.call(arguments, "utf-8", this.cdnUrl);
            return this.loadJS.apply(this, arguments) }, loadCdnCss: function(e) {
            return this.loadCss(e, this.cdnUrl) }, myInit: t.noop, quickInit: t.noop };
    return s }(window, jQuery);
jQuery(window).unload(function() { window.Core = null;
    window.onload = null;
    window.onunload = null;
    window.onerror = null });
jQuery(document).ready(function() { Core.init() });
! function(e) {
    var t = {},
        i, o, n, r, a = 750,
        u;

    function p(e, t, i, o) {
        return Math.abs(e - t) >= Math.abs(i - o) ? e - t > 0 ? "Left" : "Right" : i - o > 0 ? "Up" : "Down" }

    function l() { r = null;
        if (t.last) { t.el.trigger("longTap");
            t = {} } }

    function c() {
        if (r) clearTimeout(r);
        r = null }

    function s() {
        if (i) clearTimeout(i);
        if (o) clearTimeout(o);
        if (n) clearTimeout(n);
        if (r) clearTimeout(r);
        i = o = n = r = null;
        t = {} }

    function f(e) {
        return ("touch" == e.pointerType || e.pointerType == e.MSPOINTER_TYPE_TOUCH) && e.isPrimary }

    function g(e, t) {
        return e.type == "pointer" + t || e.type.toLowerCase() == "mspointer" + t }
    e(document).ready(function() {
        var d, h, T = 0,
            w = 0,
            y, v;
        var m = e('<div id="forTap" style="color: White;opacity:0;border-radius: 60px; position: absolute; z-index: 99999; width: 60px; height: 60px;left:-999px;top:-999px;"></div>');
        e("body").append(m);
        m.on("touchend", function(e) { e.preventDefault();
            e.stopPropagation() });
        if ("MSGesture" in window) { u = new MSGesture;
            u.target = document.body }
        e(document).bind("MSGestureEnd", function(e) { e = e.originalEvent || e;
            var i = e.velocityX > 1 ? "Right" : e.velocityX < -1 ? "Left" : e.velocityY > 1 ? "Down" : e.velocityY < -1 ? "Up" : null;
            if (i) { t.el.trigger("swipe");
                t.el.trigger("swipe" + i) } }).on("touchstart MSPointerDown pointerdown", function(o) { o = o.originalEvent || o;
            if ((v = g(o, "down")) && !f(o)) return;
            y = v ? o : o.touches[0];
            if (o.touches && 1 === o.touches.length && t.x2) { t.x2 = void 0;
                t.y2 = void 0 }
            d = Date.now();
            h = d - (t.last || d);
            t.el = e("tagName" in y.target ? y.target : y.target.parentNode);
            i && clearTimeout(i);
            t.x1 = y.pageX;
            t.y1 = y.pageY;
            if (h > 0 && h <= 250) t.isDoubleTap = true;
            t.last = d;
            r = setTimeout(l, a);
            if (u && v) u.addPointer(o.pointerId);
            var n = t.el;
            t.isShowTap = false;
            while (n[0] && "BODY" != n[0].nodeName) {
                if (n.attr("lazyTap")) { t.isShowTap = true;
                    break }
                n = n.parent() } }).on("touchmove MSPointerMove pointermove", function(e) { e = e.originalEvent || e;
            if ((v = g(e, "move")) && !f(e)) return;
            y = v ? e : e.touches[0];
            c();
            t.x2 = y.pageX;
            t.y2 = y.pageY;
            T += Math.abs(t.x1 - t.x2);
            w += Math.abs(t.y1 - t.y2) }).on("touchend MSPointerUp pointerup", function(r) { r = r.originalEvent || r;
            if ((v = g(r, "up")) && !f(r)) return;
            c();
            if (t.x2 && Math.abs(t.x1 - t.x2) > 30 || t.y2 && Math.abs(t.y1 - t.y2) > 30) n = setTimeout(function() { t.el.trigger("swipe");
                t.el.trigger("swipe" + p(t.x1, t.x2, t.y1, t.y2));
                t = {} }, 0);
            else if ("last" in t)
                if (T < 30 && w < 30) o = setTimeout(function() {
                    var o = e.Event("tap");
                    o.cancelTouch = s;
                    t.el.trigger(o);
                    if (t.isShowTap) { m.css({ top: r.changedTouches[0].pageY - 30 + "px", left: r.changedTouches[0].pageX - 30 + "px" });
                        setTimeout(function() { m.css({ left: "-999px", top: "-999px" }) }, 350) }
                    if (t.isDoubleTap) {
                        if (t.el) t.el.trigger("doubleTap");
                        t = {} } else i = setTimeout(function() { i = null;
                        if (t.el) t.el.trigger("singleTap");
                        t = {} }, 250) }, 0);
                else t = {};
            T = w = 0 }).on("touchcancel MSPointerCancel pointercancel", s);
        e(window).on("scroll", s) });
    ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(t) { e.fn[t] = function(e) {
            return this.on(t, e) } }) }(window.jQuery || window.Zepto);
