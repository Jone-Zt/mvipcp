!
function(a) {
    function c(a) {
        var c = b[a] || window[a];
        if (!c) throw new Error("Requested module '" + a + "' has not been defined.");
        return c
    }
    function d(a, c) {
        return b[a] = c
    }
    function e(a, b) {
        for (var c in b)"noConflict" != c && "_VERSION" != c && (a[c] = b[c]);
        return a
    }
    function f(a, b, c) {
        return g._select && ("string" == typeof a || a.nodeName || a.length && "item" in a || a == window) ? (c = g._select(a, b), c.selector = a) : c = isFinite(a.length) ? a: [a],
        e(c, f)
    }
    function g(a, b) {
        return f(a, b)
    }
    var b, h;
    a.global = a,
    b = {},
    a.provide = d,
    a.require = c,
    e(g, {
        _VERSION: "0.2.5",
        ender: function(a, b) {
            e(b ? f: g, a)
        },
        fn: a.$ && a.$.fn || {}
    }),
    e(f, {
        forEach: function(a, b, c) {
            for (c = 0, l = this.length; l > c; ++c) c in this && a.call(b || this[c], this[c], c, this);
            return this
        },
        $: g
    }),
    h = a.$,
    g.noConflict = function() {
        return a.$ = h,
        this
    },
    "undefined" != typeof module && module.exports && (module.exports = g),
    a.ender = a.$ = a.ender || g
} (this),
!
function() {
    var a = {
        exports: {}
    };
    a.exports,
    !
    function(b, c) {
        "function" == typeof define ? define(c) : "undefined" != typeof a ? a.exports = c() : this[b] = c()
    } ("qwery",
    function() {
        function L() {
            this.c = {}
        }
        function Q(a) {
            for (k = [], d = 0, g = a.length; g > d; d++) Z(a[d]) ? k = k.concat(a[d]) : k.push(a[d]);
            return k
        }
        function R(a) {
            for (; (a = a.previousSibling) && 1 != a.nodeType;);
            return a
        }
        function S(a) {
            return a.match(J)
        }
        function T(a, b, c, e, f, g, h, j, k, l, m) {
            var n, o, q;
            if (b && this.tagName.toLowerCase() !== b) return ! 1;
            if (c && (n = c.match(u)) && n[1] !== this.id) return ! 1;
            if (c && (p = c.match(v))) for (d = p.length; d--;) if (o = p[d].slice(1), !(M.g(o) || M.s(o, new RegExp("(^|\\s+)" + o + "(\\s+|$)"))).test(this.className)) return ! 1;
            if (k && _.pseudos[k] && !_.pseudos[k](this, m)) return ! 1;
            if (e && !h) {
                i = this.attributes;
                for (q in i) if (Object.prototype.hasOwnProperty.call(i, q) && (i[q].name || q) == f) return this
            }
            return e && !V(g, this.getAttribute(f) || "", h) ? !1 : this
        }
        function U(a) {
            return N.g(a) || N.s(a, a.replace(D, "\\$1"))
        }
        function V(a, b, c) {
            switch (a) {
            case "=":
                return b == c;
            case "^=":
                return b.match(O.g("^=" + c) || O.s("^=" + c, new RegExp("^" + U(c))));
            case "$=":
                return b.match(O.g("$=" + c) || O.s("$=" + c, new RegExp(U(c) + "$")));
            case "*=":
                return b.match(O.g(c) || O.s(c, new RegExp(U(c))));
            case "~=":
                return b.match(O.g("~=" + c) || O.s("~=" + c, new RegExp("(?:^|\\s+)" + U(c) + "(?:\\s+|$)")));
            case "|=":
                return b.match(O.g("|=" + c) || O.s("|=" + c, new RegExp("^" + U(c) + "(-|$)")))
            }
            return 0
        }
        function W(a) {
            var e, g, h, i, j, k, m, n, p, q, c = [],
            d = [],
            f = 0,
            s = P.g(a) || P.s(a, a.split(I)),
            t = a.match(H);
            if (s = s.slice(0), !s.length) return c;
            if (k = s.pop(), n = s.length && (i = s[s.length - 1].match(w)) ? b.getElementById(i[1]) : b, !n) return c;
            for (p = S(k), m = t && /^[+~]$/.test(t[t.length - 1]) ?
            function(a) {
                for (; n = n.nextSibling;) 1 == n.nodeType && (p[1] ? p[1] == n.tagName.toLowerCase() : 1) && a.push(n);
                return a
            } ([]) : n.getElementsByTagName(p[1] || "*"), e = 0, h = m.length; h > e; e++)(q = T.apply(m[e], p)) && (c[f++] = q);
            if (!s.length) return c;
            for (f = 0, h = c.length, g = 0; h > f; f++) {
                for (j = c[f], e = s.length; e--;) for (; (j = K[t[e]](j, c[f])) && !(o = T.apply(j, S(s[e]))););
                o && (d[g++] = c[f])
            }
            return d
        }
        function X(a) {
            return a && a.nodeType && (1 == a.nodeType || 9 == a.nodeType)
        }
        function Y(a) {
            var c, d, b = [];
            a: for (c = 0; c < a.length; c++) {
                for (d = 0; d < b.length; d++) if (b[d] == a[c]) continue a;
                b[b.length] = a[c]
            }
            return b
        }
        function Z(a) {
            return "object" == typeof a && isFinite(a.length)
        }
        function $(a) {
            return a ? "string" == typeof a ? _(a)[0] : Z(a) ? a[0] : a: b
        }
        function _(a, c) {
            var d = $(c);
            return d && a ? a === window || X(a) ? !c || a !== window && X(d) && ab(a, d) ? [a] : [] : a && Z(a) ? Q(a) : (h = a.match(w)) ? (m = b.getElementById(h[1])) ? [m] : [] : (h = a.match(y)) ? Q(d.getElementsByTagName(h[1])) : cb(a, d) : []
        }
        var d, e, g, h, i, k, m, o, p, r, M, N, O, P, ab, bb, cb, db, a = this,
        b = document,
        t = b.documentElement,
        u = /#([\w\-]+)/,
        v = /\.[\w\-]+/g,
        w = /^#([\w\-]+$)/,
        x = /^\.([\w\-]+)$/,
        y = /^([\w\-]+)$/,
        z = /^([\w]+)?\.([\w\-]+)$/,
        A = /\s*([\s\+\~>])\s*/g,
        B = /[\s\>\+\~]/,
        C = /(?![\s\w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^'"]*\]|[\s\w\+\-]*\))/,
        D = /([.*+?\^=!:${}()|\[\]\/\\])/g,
        E = /^([a-z0-9]+)?(?:([\.\#]+[\w\-\.#]+)?)/,
        F = /\[([\w\-]+)(?:([\|\^\$\*\~]?\=)['"]?([ \w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^]+)["']?)?\]/,
        G = /:([\w\-]+)(\(['"]?([\s\w\+\-]+)['"]?\))?/,
        H = new RegExp("(" + B.source + ")" + C.source, "g"),
        I = new RegExp(B.source + C.source),
        J = new RegExp(E.source + "(" + F.source + ")?" + "(" + G.source + ")?"),
        K = {
            " ": function(a) {
                return a && a !== t && a.parentNode
            },
            ">": function(a, b) {
                return a && a.parentNode == b.parentNode && a.parentNode
            },
            "~": function(a) {
                return a && a.previousSibling
            },
            "+": function(a, b, c, d) {
                return a ? (c = R(a), d = R(b), c && d && c == d && c) : !1
            }
        };
        return L.prototype = {
            g: function(a) {
                return this.c[a] || void 0
            },
            s: function(a, b) {
                return this.c[a] = b,
                b
            }
        },
        M = new L,
        N = new L,
        O = new L,
        P = new L,
        ab = "compareDocumentPosition" in t ?
        function(a, b) {
            return 16 == (16 & b.compareDocumentPosition(a))
        }: "contains" in t ?
        function(a, c) {
            return c = c == b || c == window ? t: c,
            c !== a && c.contains(a)
        }: function(a, b) {
            for (; a = a.parentNode;) if (a === b) return 1;
            return 0
        },
        bb = function() {
            if (!b.querySelector || !b.querySelectorAll) return ! 1;
            try {
                return b.querySelectorAll(":nth-of-type(1)").length > 0
            } catch(a) {
                return ! 1
            }
        } (),
        cb = bb ?
        function(a, c) {
            return b.getElementsByClassName && (h = a.match(x)) ? Q(c.getElementsByClassName(h[1])) : Q(c.querySelectorAll(a))
        }: function(a, c) {
            var f, i, l, d, j, m;
            if (a = a.replace(A, "$1"), d = [], j = [], h = a.match(z)) {
                for (r = c.getElementsByTagName(h[1] || "*"), k = M.g(h[2]) || M.s(h[2], new RegExp("(^|\\s+)" + h[2] + "(\\s+|$)")), l = 0, g = r.length, e = 0; g > l; l++) k.test(r[l].className) && (d[e++] = r[l]);
                return d
            }
            for (l = 0, r = a.split(","), g = r.length; g > l; l++) j[l] = W(r[l]);
            for (l = 0, g = j.length; g > l && (i = j[l]); l++) {
                if (m = i, c !== b) for (m = [], e = 0, h = i.length; h > e && (f = i[e]); e++) ab(f, c) && m.push(f);
                d = d.concat(m)
            }
            return Y(d)
        },
        _.uniq = Y,
        _.pseudos = {},
        db = a.qwery,
        _.noConflict = function() {
            return a.qwery = db,
            this
        },
        _
    }),
    provide("qwery", a.exports),
    !
    function(a, b) {
        function f(b, c) {
            var d = /^<([^\s>]+)/.exec(b)[1],
            f = (c || a).createElement(e[d] || "div"),
            g = [];
            for (f.innerHTML = b, f.childNodes, f = f.firstChild, g.push(f); f = f.nextSibling;) 1 == f.nodeType && g.push(f);
            return g
        }
        var c = require("qwery"),
        d = "table",
        e = {
            thead: d,
            tbody: d,
            tfoot: d,
            tr: "tbody",
            th: "tr",
            td: "tr",
            fieldset: "form",
            option: "select"
        };
        b._select = function(a, b) {
            return /^\s*</.test(a) ? f(a, b) : c(a, b)
        },
        b.pseudos = c.pseudos,
        b.ender({
            find: function(a) {
                var e, f, g, h, i, d = [];
                for (e = 0, f = this.length; f > e; e++) for (i = c(a, this[e]), g = 0, h = i.length; h > g; g++) d.push(i[g]);
                return b(c.uniq(d))
            },
            and: function(a) {
                var d, e, f, c = b(a);
                for (d = this.length, e = 0, f = this.length + c.length; f > d; d++, e++) this[d] = c[e];
                return this
            }
        },
        !0)
    } (document, ender)
} (),
!
function() {
    var a = {
        exports: {}
    };
    a.exports,
    !
    function(b, c) {
        function o(a) {
            for (n = 1; a = d.shift();) a()
        }
        var e, f, g, d = [],
        h = !1,
        i = c.documentElement,
        j = i.doScroll,
        k = "DOMContentLoaded",
        l = "addEventListener",
        m = "onreadystatechange",
        n = /^loade|c/.test(c.readyState);
        c[l] && c[l](k, g = function() {
            c.removeEventListener(k, g, h),
            o()
        },
        h),
        j && c.attachEvent(m, f = function() { / ^c / .test(c.readyState) && (c.detachEvent(m, f), o())
        }),
        e = j ?
        function(a) {
            self != top ? n ? a() : d.push(a) : function() {
                try {
                    i.doScroll("left")
                } catch(b) {
                    return setTimeout(function() {
                        e(a)
                    },
                    50)
                }
                a()
            } ()
        }: function(a) {
            n ? a() : d.push(a)
        },
        "undefined" != typeof a ? a.exports = e: b.domReady = e
    } (this, document),
    provide("domready", a.exports),
    !
    function(a) {
        var b = require("domready");
        a.ender({
            domReady: b
        }),
        a.ender({
            ready: function(a) {
                return b(a),
                this
            }
        },
        !0)
    } (ender)
} (),
!
function() {
    var a = {
        exports: {}
    },
    b = a.exports; !
    function() {
        var a = Math,
        c = /webkit/i.test(navigator.appVersion) ? "webkit": /firefox/i.test(navigator.userAgent) ? "Moz": "opera" in window ? "O": "",
        d = "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix,
        e = "ontouchstart" in window,
        f = c + "Transform" in document.documentElement.style,
        g = /android/gi.test(navigator.appVersion),
        h = /iphone|ipad/gi.test(navigator.appVersion),
        i = /playbook/gi.test(navigator.appVersion),
        j = h || i,
        k = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
            function(a) {
                return setTimeout(a, 1)
            }
        } (),
        l = function() {
            return window.cancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
        } (),
        m = "onorientationchange" in window ? "orientationchange": "resize",
        n = e ? "touchstart": "mousedown",
        o = e ? "touchmove": "mousemove",
        p = e ? "touchend": "mouseup",
        q = e ? "touchcancel": "mouseup",
        r = "Moz" == c ? "DOMMouseScroll": "mousewheel",
        s = "translate" + (d ? "3d(": "("),
        t = d ? ",0)": ")",
        u = function(a, b) {
            var l, i = this,
            k = document;
            i.wrapper = "object" == typeof a ? a: k.getElementById(a),
            i.wrapper.style.overflow = "hidden",
            i.scroller = i.wrapper.children[0],
            i.options = {
                hScroll: !0,
                vScroll: !0,
                x: 0,
                y: 0,
                bounce: !0,
                bounceLock: !1,
                momentum: !0,
                lockDirection: !0,
                useTransform: !0,
                useTransition: !1,
                topOffset: 0,
                checkDOMChanges: !1,
                hScrollbar: !0,
                vScrollbar: !0,
                fixedScrollbar: g,
                hideScrollbar: h,
                fadeScrollbar: h && d,
                scrollbarClass: "",
                zoom: !1,
                zoomMin: 1,
                zoomMax: 4,
                doubleTapZoom: 2,
                wheelAction: "scroll",
                snap: !1,
                snapThreshold: 1,
                onRefresh: null,
                onBeforeScrollStart: function(a) {
                    a.preventDefault()
                },
                onScrollStart: null,
                onBeforeScrollMove: null,
                onScrollMove: null,
                onBeforeScrollEnd: null,
                onScrollEnd: null,
                onTouchEnd: null,
                onDestroy: null,
                onZoomStart: null,
                onZoom: null,
                onZoomEnd: null
            };
            for (l in b) i.options[l] = b[l];
            i.x = i.options.x,
            i.y = i.options.y,
            i.options.useTransform = f ? i.options.useTransform: !1,
            i.options.hScrollbar = i.options.hScroll && i.options.hScrollbar,
            i.options.vScrollbar = i.options.vScroll && i.options.vScrollbar,
            i.options.zoom = i.options.useTransform && i.options.zoom,
            i.options.useTransition = j && i.options.useTransition,
            i.scroller.style[c + "TransitionProperty"] = i.options.useTransform ? "-" + c.toLowerCase() + "-transform": "top left",
            i.scroller.style[c + "TransitionDuration"] = "0",
            i.scroller.style[c + "TransformOrigin"] = "0 0",
            i.options.useTransition && (i.scroller.style[c + "TransitionTimingFunction"] = "cubic-bezier(0.33,0.66,0.66,1)"),
            i.options.useTransform ? i.scroller.style[c + "Transform"] = s + i.x + "px," + i.y + "px" + t: i.scroller.style.cssText += ";position:absolute;top:" + i.y + "px;left:" + i.x + "px",
            i.options.useTransition && (i.options.fixedScrollbar = !0),
            i.refresh(),
            i._bind(m, window),
            i._bind(n),
            e || (i._bind("mouseout", i.wrapper), i._bind(r)),
            i.options.checkDOMChanges && (i.checkDOMTime = setInterval(function() {
                i._checkDOMChanges()
            },
            500))
        };
        u.prototype = {
            enabled: !0,
            x: 0,
            y: 0,
            steps: [],
            scale: 1,
            currPageX: 0,
            currPageY: 0,
            pagesX: [],
            pagesY: [],
            aniTime: null,
            wheelZoomCount: 0,
            handleEvent: function(a) {
                var b = this;
                switch (a.type) {
                case n:
                    if (!e && 0 !== a.button) return;
                    b._start(a);
                    break;
                case o:
                    b._move(a);
                    break;
                case p:
                case q:
                    b._end(a);
                    break;
                case m:
                    b._resize();
                    break;
                case r:
                    b._wheel(a);
                    break;
                case "mouseout":
                    b._mouseout(a);
                    break;
                case "webkitTransitionEnd":
                    b._transitionEnd(a)
                }
            },
            _checkDOMChanges: function() {
                this.moved || this.zoomed || this.animating || this.scrollerW == this.scroller.offsetWidth * this.scale && this.scrollerH == this.scroller.offsetHeight * this.scale || this.refresh()
            },
            _scrollbar: function(b) {
                var g, d = this,
                e = document;
                return d[b + "Scrollbar"] ? (d[b + "ScrollbarWrapper"] || (g = e.createElement("div"), d.options.scrollbarClass ? g.className = d.options.scrollbarClass + b.toUpperCase() : g.style.cssText = "position:absolute;z-index:100;" + ("h" == b ? "height:7px;bottom:1px;left:2px;right:" + (d.vScrollbar ? "7": "2") + "px": "width:7px;bottom:" + (d.hScrollbar ? "7": "2") + "px;top:2px;right:1px"), g.style.cssText += ";pointer-events:none;-" + c + "-transition-property:opacity;-" + c + "-transition-duration:" + (d.options.fadeScrollbar ? "350ms": "0") + ";overflow:hidden;opacity:" + (d.options.hideScrollbar ? "0": "1"), d.wrapper.appendChild(g), d[b + "ScrollbarWrapper"] = g, g = e.createElement("div"), d.options.scrollbarClass || (g.style.cssText = "position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);-" + c + "-background-clip:padding-box;-" + c + "-box-sizing:border-box;" + ("h" == b ? "height:100%": "width:100%") + ";-" + c + "-border-radius:3px;border-radius:3px"), g.style.cssText += ";pointer-events:none;-" + c + "-transition-property:-" + c + "-transform;-" + c + "-transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);-" + c + "-transition-duration:0;-" + c + "-transform:" + s + "0,0" + t, d.options.useTransition && (g.style.cssText += ";-" + c + "-transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"), d[b + "ScrollbarWrapper"].appendChild(g), d[b + "ScrollbarIndicator"] = g), "h" == b ? (d.hScrollbarSize = d.hScrollbarWrapper.clientWidth, d.hScrollbarIndicatorSize = a.max(a.round(d.hScrollbarSize * d.hScrollbarSize / d.scrollerW), 8), d.hScrollbarIndicator.style.width = d.hScrollbarIndicatorSize + "px", d.hScrollbarMaxScroll = d.hScrollbarSize - d.hScrollbarIndicatorSize, d.hScrollbarProp = d.hScrollbarMaxScroll / d.maxScrollX) : (d.vScrollbarSize = d.vScrollbarWrapper.clientHeight, d.vScrollbarIndicatorSize = a.max(a.round(d.vScrollbarSize * d.vScrollbarSize / d.scrollerH), 8), d.vScrollbarIndicator.style.height = d.vScrollbarIndicatorSize + "px", d.vScrollbarMaxScroll = d.vScrollbarSize - d.vScrollbarIndicatorSize, d.vScrollbarProp = d.vScrollbarMaxScroll / d.maxScrollY), d._scrollbarPos(b, !0), void 0) : (d[b + "ScrollbarWrapper"] && (f && (d[b + "ScrollbarIndicator"].style[c + "Transform"] = ""), d[b + "ScrollbarWrapper"].parentNode.removeChild(d[b + "ScrollbarWrapper"]), d[b + "ScrollbarWrapper"] = null, d[b + "ScrollbarIndicator"] = null), void 0)
            },
            _resize: function() {
                var a = this;
                setTimeout(function() {
                    a.refresh()
                },
                g ? 200 : 0)
            },
            _pos: function(b, d) {
                b = this.hScroll ? b: 0,
                d = this.vScroll ? d: 0,
                this.options.useTransform ? this.scroller.style[c + "Transform"] = s + b + "px," + d + "px" + t + " scale(" + this.scale + ")": (b = a.round(b), d = a.round(d), this.scroller.style.left = b + "px", this.scroller.style.top = d + "px"),
                this.x = b,
                this.y = d,
                this._scrollbarPos("h"),
                this._scrollbarPos("v")
            },
            _scrollbarPos: function(b, d) {
                var g, e = this,
                f = "h" == b ? e.x: e.y;
                e[b + "Scrollbar"] && (f = e[b + "ScrollbarProp"] * f, 0 > f ? (e.options.fixedScrollbar || (g = e[b + "ScrollbarIndicatorSize"] + a.round(3 * f), 8 > g && (g = 8), e[b + "ScrollbarIndicator"].style["h" == b ? "width": "height"] = g + "px"), f = 0) : f > e[b + "ScrollbarMaxScroll"] && (e.options.fixedScrollbar ? f = e[b + "ScrollbarMaxScroll"] : (g = e[b + "ScrollbarIndicatorSize"] - a.round(3 * (f - e[b + "ScrollbarMaxScroll"])), 8 > g && (g = 8), e[b + "ScrollbarIndicator"].style["h" == b ? "width": "height"] = g + "px", f = e[b + "ScrollbarMaxScroll"] + (e[b + "ScrollbarIndicatorSize"] - g))), e[b + "ScrollbarWrapper"].style[c + "TransitionDelay"] = "0", e[b + "ScrollbarWrapper"].style.opacity = d && e.options.hideScrollbar ? "0": "1", e[b + "ScrollbarIndicator"].style[c + "Transform"] = s + ("h" == b ? f + "px,0": "0," + f + "px") + t)
            },
            _start: function(b) {
                var g, h, i, j, k, d = this,
                f = e ? b.touches[0] : b;
                d.enabled && (d.options.onBeforeScrollStart && d.options.onBeforeScrollStart.call(d, b), (d.options.useTransition || d.options.zoom) && d._transitionTime(0), d.moved = !1, d.animating = !1, d.zoomed = !1, d.distX = 0, d.distY = 0, d.absDistX = 0, d.absDistY = 0, d.dirX = 0, d.dirY = 0, d.options.zoom && e && b.touches.length > 1 && (j = a.abs(b.touches[0].pageX - b.touches[1].pageX), k = a.abs(b.touches[0].pageY - b.touches[1].pageY), d.touchesDistStart = a.sqrt(j * j + k * k), d.originX = a.abs(b.touches[0].pageX + b.touches[1].pageX - 2 * d.wrapperOffsetLeft) / 2 - d.x, d.originY = a.abs(b.touches[0].pageY + b.touches[1].pageY - 2 * d.wrapperOffsetTop) / 2 - d.y, d.options.onZoomStart && d.options.onZoomStart.call(d, b)), d.options.momentum && (d.options.useTransform ? (g = getComputedStyle(d.scroller, null)[c + "Transform"].replace(/[^0-9-.,]/g, "").split(","), h = 1 * g[4], i = 1 * g[5]) : (h = 1 * getComputedStyle(d.scroller, null).left.replace(/[^0-9-]/g, ""), i = 1 * getComputedStyle(d.scroller, null).top.replace(/[^0-9-]/g, "")), (h != d.x || i != d.y) && (d.options.useTransition ? d._unbind("webkitTransitionEnd") : l(d.aniTime), d.steps = [], d._pos(h, i))), d.absStartX = d.x, d.absStartY = d.y, d.startX = d.x, d.startY = d.y, d.pointX = f.pageX, d.pointY = f.pageY, d.startTime = b.timeStamp || Date.now(), d.options.onScrollStart && d.options.onScrollStart.call(d, b), d._bind(o), d._bind(p), d._bind(q))
            },
            _move: function(b) {
                var k, l, m, d = this,
                f = e ? b.touches[0] : b,
                g = f.pageX - d.pointX,
                h = f.pageY - d.pointY,
                i = d.x + g,
                j = d.y + h,
                n = b.timeStamp || Date.now();
                return d.options.onBeforeScrollMove && d.options.onBeforeScrollMove.call(d, b),
                d.options.zoom && e && b.touches.length > 1 ? (k = a.abs(b.touches[0].pageX - b.touches[1].pageX), l = a.abs(b.touches[0].pageY - b.touches[1].pageY), d.touchesDist = a.sqrt(k * k + l * l), d.zoomed = !0, m = 1 / d.touchesDistStart * d.touchesDist * this.scale, m < d.options.zoomMin ? m = .5 * d.options.zoomMin * Math.pow(2, m / d.options.zoomMin) : m > d.options.zoomMax && (m = 2 * d.options.zoomMax * Math.pow(.5, d.options.zoomMax / m)), d.lastScale = m / this.scale, i = this.originX - this.originX * d.lastScale + this.x, j = this.originY - this.originY * d.lastScale + this.y, this.scroller.style[c + "Transform"] = s + i + "px," + j + "px" + t + " scale(" + m + ")", d.options.onZoom && d.options.onZoom.call(d, b), void 0) : (d.pointX = f.pageX, d.pointY = f.pageY, (i > 0 || i < d.maxScrollX) && (i = d.options.bounce ? d.x + g / 2 : i >= 0 || d.maxScrollX >= 0 ? 0 : d.maxScrollX), (j > d.minScrollY || j < d.maxScrollY) && (j = d.options.bounce ? d.y + h / 2 : j >= d.minScrollY || d.maxScrollY >= 0 ? d.minScrollY: d.maxScrollY), d.absDistX < 6 && d.absDistY < 6 ? (d.distX += g, d.distY += h, d.absDistX = a.abs(d.distX), d.absDistY = a.abs(d.distY), void 0) : (d.options.lockDirection && (d.absDistX > d.absDistY + 5 ? (j = d.y, h = 0) : d.absDistY > d.absDistX + 5 && (i = d.x, g = 0)), d.moved = !0, d._pos(i, j), d.dirX = g > 0 ? -1 : 0 > g ? 1 : 0, d.dirY = h > 0 ? -1 : 0 > h ? 1 : 0, n - d.startTime > 300 && (d.startTime = n, d.startX = d.x, d.startY = d.y), d.options.onScrollMove && d.options.onScrollMove.call(d, b), void 0))
            },
            _end: function(b) {
                if (!e || 0 == b.touches.length) {
                    var g, h, n, r, u, v, w, d = this,
                    f = e ? b.changedTouches[0] : b,
                    i = {
                        dist: 0,
                        time: 0
                    },
                    j = {
                        dist: 0,
                        time: 0
                    },
                    k = (b.timeStamp || Date.now()) - d.startTime,
                    l = d.x,
                    m = d.y;
                    if (d._unbind(o), d._unbind(p), d._unbind(q), d.options.onBeforeScrollEnd && d.options.onBeforeScrollEnd.call(d, b), d.zoomed) return w = d.scale * d.lastScale,
                    w = Math.max(d.options.zoomMin, w),
                    w = Math.min(d.options.zoomMax, w),
                    d.lastScale = w / d.scale,
                    d.scale = w,
                    d.x = d.originX - d.originX * d.lastScale + d.x,
                    d.y = d.originY - d.originY * d.lastScale + d.y,
                    d.scroller.style[c + "TransitionDuration"] = "200ms",
                    d.scroller.style[c + "Transform"] = s + d.x + "px," + d.y + "px" + t + " scale(" + d.scale + ")",
                    d.zoomed = !1,
                    d.refresh(),
                    d.options.onZoomEnd && d.options.onZoomEnd.call(d, b),
                    void 0;
                    if (!d.moved) return e && (d.doubleTapTimer && d.options.zoom ? (clearTimeout(d.doubleTapTimer), d.doubleTapTimer = null, d.options.onZoomStart && d.options.onZoomStart.call(d, b), d.zoom(d.pointX, d.pointY, 1 == d.scale ? d.options.doubleTapZoom: 1), d.options.onZoomEnd && setTimeout(function() {
                        d.options.onZoomEnd.call(d, b)
                    },
                    200)) : d.doubleTapTimer = setTimeout(function() {
                        for (d.doubleTapTimer = null, g = f.target; 1 != g.nodeType;) g = g.parentNode;
                        "SELECT" != g.tagName && "INPUT" != g.tagName && "TEXTAREA" != g.tagName && (h = document.createEvent("MouseEvents"), h.initMouseEvent("click", !0, !0, b.view, 1, f.screenX, f.screenY, f.clientX, f.clientY, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, 0, null), h._fake = !0, g.dispatchEvent(h))
                    },
                    d.options.zoom ? 250 : 0)),
                    d._resetPos(200),
                    d.options.onTouchEnd && d.options.onTouchEnd.call(d, b),
                    void 0;
                    if (300 > k && d.options.momentum && (i = l ? d._momentum(l - d.startX, k, -d.x, d.scrollerW - d.wrapperW + d.x, d.options.bounce ? d.wrapperW: 0) : i, j = m ? d._momentum(m - d.startY, k, -d.y, d.maxScrollY < 0 ? d.scrollerH - d.wrapperH + d.y - d.minScrollY: 0, d.options.bounce ? d.wrapperH: 0) : j, l = d.x + i.dist, m = d.y + j.dist, (d.x > 0 && l > 0 || d.x < d.maxScrollX && l < d.maxScrollX) && (i = {
                        dist: 0,
                        time: 0
                    }), (d.y > d.minScrollY && m > d.minScrollY || d.y < d.maxScrollY && m < d.maxScrollY) && (j = {
                        dist: 0,
                        time: 0
                    })), i.dist || j.dist) return u = a.max(a.max(i.time, j.time), 10),
                    d.options.snap && (n = l - d.absStartX, r = m - d.absStartY, a.abs(n) < d.options.snapThreshold && a.abs(r) < d.options.snapThreshold ? d.scrollTo(d.absStartX, d.absStartY, 200) : (v = d._snap(l, m), l = v.x, m = v.y, u = a.max(v.time, u))),
                    d.scrollTo(a.round(l), a.round(m), u),
                    d.options.onTouchEnd && d.options.onTouchEnd.call(d, b),
                    void 0;
                    if (d.options.snap) return n = l - d.absStartX,
                    r = m - d.absStartY,
                    a.abs(n) < d.options.snapThreshold && a.abs(r) < d.options.snapThreshold ? d.scrollTo(d.absStartX, d.absStartY, 200) : (v = d._snap(d.x, d.y), (v.x != d.x || v.y != d.y) && d.scrollTo(v.x, v.y, v.time)),
                    d.options.onTouchEnd && d.options.onTouchEnd.call(d, b),
                    void 0;
                    d._resetPos(200),
                    d.options.onTouchEnd && d.options.onTouchEnd.call(d, b)
                }
            },
            _resetPos: function(a) {
                var b = this,
                d = b.x >= 0 ? 0 : b.x < b.maxScrollX ? b.maxScrollX: b.x,
                e = b.y >= b.minScrollY || b.maxScrollY > 0 ? b.minScrollY: b.y < b.maxScrollY ? b.maxScrollY: b.y;
                return d == b.x && e == b.y ? (b.moved && (b.moved = !1, b.options.onScrollEnd && b.options.onScrollEnd.call(b)), b.hScrollbar && b.options.hideScrollbar && ("webkit" == c && (b.hScrollbarWrapper.style[c + "TransitionDelay"] = "300ms"), b.hScrollbarWrapper.style.opacity = "0"), b.vScrollbar && b.options.hideScrollbar && ("webkit" == c && (b.vScrollbarWrapper.style[c + "TransitionDelay"] = "300ms"), b.vScrollbarWrapper.style.opacity = "0"), void 0) : (b.scrollTo(d, e, a || 0), void 0)
            },
            _wheel: function(a) {
                var c, d, e, f, g, b = this;
                return "wheelDeltaX" in a ? (c = a.wheelDeltaX / 12, d = a.wheelDeltaY / 12) : c = d = "detail" in a ? 3 * -a.detail: -a.wheelDelta,
                "zoom" == b.options.wheelAction ? (g = b.scale * Math.pow(2, 1 / 3 * (d ? d / Math.abs(d) : 0)), g < b.options.zoomMin && (g = b.options.zoomMin), g > b.options.zoomMax && (g = b.options.zoomMax), g != b.scale && (!b.wheelZoomCount && b.options.onZoomStart && b.options.onZoomStart.call(b, a), b.wheelZoomCount++, b.zoom(a.pageX, a.pageY, g, 400), setTimeout(function() {
                    b.wheelZoomCount--,
                    !b.wheelZoomCount && b.options.onZoomEnd && b.options.onZoomEnd.call(b, a)
                },
                400)), void 0) : (e = b.x + c, f = b.y + d, e > 0 ? e = 0 : e < b.maxScrollX && (e = b.maxScrollX), f > b.minScrollY ? f = b.minScrollY: f < b.maxScrollY && (f = b.maxScrollY), b.scrollTo(e, f, 0), void 0)
            },
            _mouseout: function(a) {
                var b = a.relatedTarget;
                if (!b) return this._end(a),
                void 0;
                for (; b = b.parentNode;) if (b == this.wrapper) return;
                this._end(a)
            },
            _transitionEnd: function(a) {
                var b = this;
                a.target == b.scroller && (b._unbind("webkitTransitionEnd"), b._startAni())
            },
            _startAni: function() {
                var f, g, h, b = this,
                c = b.x,
                d = b.y,
                e = Date.now();
                if (!b.animating) {
                    if (!b.steps.length) return b._resetPos(400),
                    void 0;
                    if (f = b.steps.shift(), f.x == c && f.y == d && (f.time = 0), b.animating = !0, b.moved = !0, b.options.useTransition) return b._transitionTime(f.time),
                    b._pos(f.x, f.y),
                    b.animating = !1,
                    f.time ? b._bind("webkitTransitionEnd") : b._resetPos(0),
                    void 0;
                    h = function() {
                        var j, l, i = Date.now();
                        return i >= e + f.time ? (b._pos(f.x, f.y), b.animating = !1, b.options.onAnimationEnd && b.options.onAnimationEnd.call(b), b._startAni(), void 0) : (i = (i - e) / f.time - 1, g = a.sqrt(1 - i * i), j = (f.x - c) * g + c, l = (f.y - d) * g + d, b._pos(j, l), b.animating && (b.aniTime = k(h)), void 0)
                    },
                    h()
                }
            },
            _transitionTime: function(a) {
                a += "ms",
                this.scroller.style[c + "TransitionDuration"] = a,
                this.hScrollbar && (this.hScrollbarIndicator.style[c + "TransitionDuration"] = a),
                this.vScrollbar && (this.vScrollbarIndicator.style[c + "TransitionDuration"] = a)
            },
            _momentum: function(b, c, d, e, f) {
                var g = 6e-4,
                h = a.abs(b) / c,
                i = h * h / (2 * g),
                j = 0,
                k = 0;
                return b > 0 && i > d ? (k = f / (6 / (i / h * g)), d += k, h = h * d / i, i = d) : 0 > b && i > e && (k = f / (6 / (i / h * g)), e += k, h = h * e / i, i = e),
                i *= 0 > b ? -1 : 1,
                j = h / g,
                {
                    dist: i,
                    time: a.round(j)
                }
            },
            _offset: function(a) {
                for (var b = -a.offsetLeft,
                c = -a.offsetTop; a = a.offsetParent;) b -= a.offsetLeft,
                c -= a.offsetTop;
                return a != this.wrapper && (b *= this.scale, c *= this.scale),
                {
                    left: b,
                    top: c
                }
            },
            _snap: function(b, c) {
                var e, f, g, h, i, j, d = this;
                for (g = d.pagesX.length - 1, e = 0, f = d.pagesX.length; f > e; e++) if (b >= d.pagesX[e]) {
                    g = e;
                    break
                }
                for (g == d.currPageX && g > 0 && d.dirX < 0 && g--, b = d.pagesX[g], i = a.abs(b - d.pagesX[d.currPageX]), i = i ? 500 * (a.abs(d.x - b) / i) : 0, d.currPageX = g, g = d.pagesY.length - 1, e = 0; g > e; e++) if (c >= d.pagesY[e]) {
                    g = e;
                    break
                }
                return g == d.currPageY && g > 0 && d.dirY < 0 && g--,
                c = d.pagesY[g],
                j = a.abs(c - d.pagesY[d.currPageY]),
                j = j ? 500 * (a.abs(d.y - c) / j) : 0,
                d.currPageY = g,
                h = a.round(a.max(i, j)) || 200,
                {
                    x: b,
                    y: c,
                    time: h
                }
            },
            _bind: function(a, b, c) { (b || this.scroller).addEventListener(a, this, !!c)
            },
            _unbind: function(a, b, c) { (b || this.scroller).removeEventListener(a, this, !!c)
            },
            destroy: function() {
                var a = this;
                a.scroller.style[c + "Transform"] = "",
                a.hScrollbar = !1,
                a.vScrollbar = !1,
                a._scrollbar("h"),
                a._scrollbar("v"),
                a._unbind(m, window),
                a._unbind(n),
                a._unbind(o),
                a._unbind(p),
                a._unbind(q),
                a.options.hasTouch && (a._unbind("mouseout", a.wrapper), a._unbind(r)),
                a.options.useTransition && a._unbind("webkitTransitionEnd"),
                a.options.checkDOMChanges && clearInterval(a.checkDOMTime),
                a.options.onDestroy && a.options.onDestroy.call(a)
            },
            refresh: function() {
                var d, e, f, g, b = this,
                h = 0,
                i = 0;
                if (b.scale < b.options.zoomMin && (b.scale = b.options.zoomMin), b.wrapperW = b.wrapper.clientWidth || 1, b.wrapperH = b.wrapper.clientHeight || 1, b.minScrollY = -b.options.topOffset || 0, b.scrollerW = a.round(b.scroller.offsetWidth * b.scale), b.scrollerH = a.round((b.scroller.offsetHeight + b.minScrollY) * b.scale), b.maxScrollX = b.wrapperW - b.scrollerW, b.maxScrollY = b.wrapperH - b.scrollerH + b.minScrollY, b.dirX = 0, b.dirY = 0, b.options.onRefresh && b.options.onRefresh.call(b), b.hScroll = b.options.hScroll && b.maxScrollX < 0, b.vScroll = b.options.vScroll && (!b.options.bounceLock && !b.hScroll || b.scrollerH > b.wrapperH), b.hScrollbar = b.hScroll && b.options.hScrollbar, b.vScrollbar = b.vScroll && b.options.vScrollbar && b.scrollerH > b.wrapperH, d = b._offset(b.wrapper), b.wrapperOffsetLeft = -d.left, b.wrapperOffsetTop = -d.top, "string" == typeof b.options.snap) for (b.pagesX = [], b.pagesY = [], g = b.scroller.querySelectorAll(b.options.snap), e = 0, f = g.length; f > e; e++) h = b._offset(g[e]),
                h.left += b.wrapperOffsetLeft,
                h.top += b.wrapperOffsetTop,
                b.pagesX[e] = h.left < b.maxScrollX ? b.maxScrollX: h.left * b.scale,
                b.pagesY[e] = h.top < b.maxScrollY ? b.maxScrollY: h.top * b.scale;
                else if (b.options.snap) {
                    for (b.pagesX = []; h >= b.maxScrollX;) b.pagesX[i] = h,
                    h -= b.wrapperW,
                    i++;
                    for (b.maxScrollX % b.wrapperW && (b.pagesX[b.pagesX.length] = b.maxScrollX - b.pagesX[b.pagesX.length - 1] + b.pagesX[b.pagesX.length - 1]), h = 0, i = 0, b.pagesY = []; h >= b.maxScrollY;) b.pagesY[i] = h,
                    h -= b.wrapperH,
                    i++;
                    b.maxScrollY % b.wrapperH && (b.pagesY[b.pagesY.length] = b.maxScrollY - b.pagesY[b.pagesY.length - 1] + b.pagesY[b.pagesY.length - 1])
                }
                b._scrollbar("h"),
                b._scrollbar("v"),
                b.zoomed || (b.scroller.style[c + "TransitionDuration"] = "0", b._resetPos(200))
            },
            scrollTo: function(a, b, c, d) {
                var g, h, e = this,
                f = a;
                for (e.stop(), f.length || (f = [{
                    x: a,
                    y: b,
                    time: c,
                    relative: d
                }]), g = 0, h = f.length; h > g; g++) f[g].relative && (f[g].x = e.x - f[g].x, f[g].y = e.y - f[g].y),
                e.steps.push({
                    x: f[g].x,
                    y: f[g].y,
                    time: f[g].time || 0
                });
                e._startAni()
            },
            scrollToElement: function(b, c) {
                var e, d = this;
                b = b.nodeType ? b: d.scroller.querySelector(b),
                b && (e = d._offset(b), e.left += d.wrapperOffsetLeft, e.top += d.wrapperOffsetTop, e.left = e.left > 0 ? 0 : e.left < d.maxScrollX ? d.maxScrollX: e.left, e.top = e.top > d.minScrollY ? d.minScrollY: e.top < d.maxScrollY ? d.maxScrollY: e.top, c = void 0 === c ? a.max(2 * a.abs(e.left), 2 * a.abs(e.top)) : c, d.scrollTo(e.left, e.top, c))
            },
            scrollToPage: function(a, b, c, d, e) {
                var g, h, f = this;
                f.options.onScrollStart && f.options.onScrollStart.call(f),
                f.options.snap ? (a = "next" == a ? f.currPageX + 1 : "prev" == a ? f.currPageX - 1 : a, b = "next" == b ? f.currPageY + 1 : "prev" == b ? f.currPageY - 1 : b, a = 0 > a ? 0 : a > f.pagesX.length - 1 ? f.pagesX.length - 1 : a, b = 0 > b ? 0 : b > f.pagesY.length - 1 ? f.pagesY.length - 1 : b, f.currPageX = a, f.currPageY = b, g = d || f.pagesX[a], h = e || f.pagesY[b]) : (g = d || -f.wrapperW * a, h = d || -f.wrapperH * b, g < f.maxScrollX && (g = d || f.maxScrollX), h < f.maxScrollY && (h = d || f.maxScrollY)),
                f.scrollTo(g, h, c || 400)
            },
            disable: function() {
                this.stop(),
                this._resetPos(0),
                this.enabled = !1,
                this._unbind(o),
                this._unbind(p),
                this._unbind(q)
            },
            enable: function() {
                this.enabled = !0
            },
            stop: function() {
                this.options.useTransition ? this._unbind("webkitTransitionEnd") : l(this.aniTime),
                this.steps = [],
                this.moved = !1,
                this.animating = !1
            },
            zoom: function(a, b, d, e) {
                var f = this,
                g = d / f.scale;
                f.options.useTransform && (f.zoomed = !0, e = void 0 === e ? 200 : e, a = a - f.wrapperOffsetLeft - f.x, b = b - f.wrapperOffsetTop - f.y, f.x = a - a * g + f.x, f.y = b - b * g + f.y, f.scale = d, f.refresh(), f.x = f.x > 0 ? 0 : f.x < f.maxScrollX ? f.maxScrollX: f.x, f.y = f.y > f.minScrollY ? f.minScrollY: f.y < f.maxScrollY ? f.maxScrollY: f.y, f.scroller.style[c + "TransitionDuration"] = e + "ms", f.scroller.style[c + "Transform"] = s + f.x + "px," + f.y + "px" + t + " scale(" + d + ")", f.zoomed = !1)
            },
            isReady: function() {
                return ! this.moved && !this.zoomed && !this.animating
            }
        },
        "undefined" != typeof b ? b.iScroll = u: window.iScroll = u
    } (),
    provide("iscroll", a.exports),
    !
    function(a, b) {
        a.ender({
            iScroll: function(a) {
                return new b(this[0], a)
            }
        },
        !0)
    } (ender, require("iscroll").iScroll)
} ();