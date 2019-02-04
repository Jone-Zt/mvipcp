var jiangdashuai=false;
!
function(e, t) {
    if ("object" === typeof module && "object" === typeof module.exports) module.exports = e.document ? t(e, true) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    };
    else t(e)
} ("undefined" !== typeof window ? window: this,
function(e, t) {
    var n = [];
    var i = n.slice;
    var r = n.concat;
    var o = n.push;
    var s = n.indexOf;
    var a = {};
    var u = a.toString;
    var l = a.hasOwnProperty;
    var f = {};
    var c = e.document,
    p = "2.1.3",
    d = function(e, t) {
        return new d.fn.init(e, t)
    },
    h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    g = /^-ms-/,
    m = /-([\da-z])/gi,
    v = function(e, t) {
        return t.toUpperCase()
    };
    d.fn = d.prototype = {
        jquery: p,
        constructor: d,
        selector: "",
        length: 0,
        toArray: function() {
            return i.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : i.call(this)
        },
        pushStack: function(e) {
            var t = d.merge(this.constructor(), e);
            t.prevObject = this;
            t.context = this.context;
            return t
        },
        each: function(e, t) {
            return d.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(d.map(this,
            function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(i.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(e) {
            var t = this.length,
            n = +e + (e < 0 ? t: 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: o,
        sort: n.sort,
        splice: n.splice
    };
    d.extend = d.fn.extend = function() {
        var e, t, n, i, r, o, s = arguments[0] || {},
        a = 1,
        u = arguments.length,
        l = false;
        if ("boolean" === typeof s) {
            l = s;
            s = arguments[a] || {};
            a++
        }
        if ("object" !== typeof s && !d.isFunction(s)) s = {};
        if (a === u) {
            s = this;
            a--
        }
        for (; a < u; a++) if (null != (e = arguments[a])) for (t in e) {
            n = s[t];
            i = e[t];
            if (s === i) continue;
            if (l && i && (d.isPlainObject(i) || (r = d.isArray(i)))) {
                if (r) {
                    r = false;
                    o = n && d.isArray(n) ? n: []
                } else o = n && d.isPlainObject(n) ? n: {};
                s[t] = d.extend(l, o, i)
            } else if (void 0 !== i) s[t] = i
        }
        return s
    };
    d.extend({
        expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""),
        isReady: true,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === d.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            return ! d.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isPlainObject: function(e) {
            if ("object" !== d.type(e) || e.nodeType || d.isWindow(e)) return false;
            if (e.constructor && !l.call(e.constructor.prototype, "isPrototypeOf")) return false;
            return true
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return false;
            return true
        },
        type: function(e) {
            if (null == e) return e + "";
            return "object" === typeof e || "function" === typeof e ? a[u.call(e)] || "object": typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            e = d.trim(e);
            if (e) if (1 === e.indexOf("use strict")) {
                t = c.createElement("script");
                t.text = e;
                c.head.appendChild(t).parentNode.removeChild(t)
            } else n(e)
        },
        camelCase: function(e) {
            return e.replace(g, "ms-").replace(m, v)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var i, r = 0,
            o = e.length,
            s = y(e);
            if (n) if (s) for (; r < o; r++) {
                i = t.apply(e[r], n);
                if (false === i) break
            } else for (r in e) {
                i = t.apply(e[r], n);
                if (false === i) break
            } else if (s) for (; r < o; r++) {
                i = t.call(e[r], r, e[r]);
                if (false === i) break
            } else for (r in e) {
                i = t.call(e[r], r, e[r]);
                if (false === i) break
            }
            return e
        },
        trim: function(e) {
            return null == e ? "": (e + "").replace(h, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            if (null != e) if (y(Object(e))) d.merge(n, "string" === typeof e ? [e] : e);
            else o.call(n, e);
            return n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : s.call(t, e, n)
        },
        merge: function(e, t) {
            var n = +t.length,
            i = 0,
            r = e.length;
            for (; i < n; i++) e[r++] = t[i];
            e.length = r;
            return e
        },
        grep: function(e, t, n) {
            var i, r = [],
            o = 0,
            s = e.length,
            a = !n;
            for (; o < s; o++) {
                i = !t(e[o], o);
                if (i !== a) r.push(e[o])
            }
            return r
        },
        map: function(e, t, n) {
            var i, o = 0,
            s = e.length,
            a = y(e),
            u = [];
            if (a) for (; o < s; o++) {
                i = t(e[o], o, n);
                if (null != i) u.push(i)
            } else for (o in e) {
                i = t(e[o], o, n);
                if (null != i) u.push(i)
            }
            return r.apply([], u)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, o;
            if ("string" === typeof t) {
                n = e[t];
                t = e;
                e = n
            }
            if (!d.isFunction(e)) return void 0;
            r = i.call(arguments, 2);
            o = function() {
                return e.apply(t || this, r.concat(i.call(arguments)))
            };
            o.guid = e.guid = e.guid || d.guid++;
            return o
        },
        now: Date.now,
        support: f
    });
    d.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
    function(e, t) {
        a["[object " + t + "]"] = t.toLowerCase()
    });
    function y(e) {
        var t = e.length,
        n = d.type(e);
        if ("function" === n || d.isWindow(e)) return false;
        if (1 === e.nodeType && t) return true;
        return "array" === n || 0 === t || "number" === typeof t && t > 0 && t - 1 in e
    }
    var x = function(e) {
        var t, n, i, r, o, s, a, u, l, f, c, p, d, h, g, m, v, y, x, w = "sizzle" + 1 * new Date,
        b = e.document,
        T = 0,
        C = 0,
        k = at(),
        N = at(),
        E = at(),
        S = function(e, t) {
            if (e === t) c = true;
            return 0
        },
        D = 1 << 31,
        j = {}.hasOwnProperty,
        A = [],
        L = A.pop,
        q = A.push,
        H = A.push,
        O = A.slice,
        F = function(e, t) {
            var n = 0,
            i = e.length;
            for (; n < i; n++) if (e[n] === t) return n;
            return - 1
        },
        P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        R = "[\\x20\\t\\r\\n\\f]",
        M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        W = M.replace("w", "w#"),
        $ = "\\[" + R + "*(" + M + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + W + "))|)" + R + "*\\]",
        I = ":(" + M + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + $ + ")*)|" + ".*" + ")\\)|)",
        B = new RegExp(R + "+", "g"),
        _ = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
        z = new RegExp("^" + R + "*," + R + "*"),
        X = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
        U = new RegExp("=" + R + "*([^\\]'\"]*?)" + R + "*\\]", "g"),
        V = new RegExp(I),
        Y = new RegExp("^" + W + "$"),
        G = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + $),
            PSEUDO: new RegExp("^" + I),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + P + ")$", "i"),
            needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
        },
        Q = /^(?:input|select|textarea|button)$/i,
        J = /^h\d$/i,
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        et = /[+~]/,
        tt = /'|\\/g,
        nt = new RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)", "ig"),
        it = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i !== i || n ? t: i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        },
        rt = function() {
            p()
        };
        try {
            H.apply(A = O.call(b.childNodes), b.childNodes);
            A[b.childNodes.length].nodeType
        } catch(ot) {
            H = {
                apply: A.length ?
                function(e, t) {
                    q.apply(e, O.call(t))
                }: function(e, t) {
                    var n = e.length,
                    i = 0;
                    while (e[n++] = t[i++]);
                    e.length = n - 1
                }
            }
        }
        function st(e, t, i, r) {
            var o, a, l, f, c, h, v, y, T, C;
            if ((t ? t.ownerDocument || t: b) !== d) p(t);
            t = t || d;
            i = i || [];
            f = t.nodeType;
            if ("string" !== typeof e || !e || 1 !== f && 9 !== f && 11 !== f) return i;
            if (!r && g) {
                if (11 !== f && (o = Z.exec(e))) if (l = o[1]) {
                    if (9 === f) {
                        a = t.getElementById(l);
                        if (a && a.parentNode) {
                            if (a.id === l) {
                                i.push(a);
                                return i
                            }
                        } else return i
                    } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(l)) && x(t, a) && a.id === l) {
                        i.push(a);
                        return i
                    }
                } else if (o[2]) {
                    H.apply(i, t.getElementsByTagName(e));
                    return i
                } else if ((l = o[3]) && n.getElementsByClassName) {
                    H.apply(i, t.getElementsByClassName(l));
                    return i
                }
                if (n.qsa && (!m || !m.test(e))) {
                    y = v = w;
                    T = t;
                    C = 1 !== f && e;
                    if (1 === f && "object" !== t.nodeName.toLowerCase()) {
                        h = s(e);
                        if (v = t.getAttribute("id")) y = v.replace(tt, "\\$&");
                        else t.setAttribute("id", y);
                        y = "[id='" + y + "'] ";
                        c = h.length;
                        while (c--) h[c] = y + vt(h[c]);
                        T = et.test(e) && gt(t.parentNode) || t;
                        C = h.join(",")
                    }
                    if (C) try {
                        H.apply(i, T.querySelectorAll(C));
                        return i
                    } catch(k) {} finally {
                        if (!v) t.removeAttribute("id")
                    }
                }
            }
            return u(e.replace(_, "$1"), t, i, r)
        }
        function at() {
            var e = [];
            function t(n, r) {
                if (e.push(n + " ") > i.cacheLength) delete t[e.shift()];
                return t[n + " "] = r
            }
            return t
        }
        function ut(e) {
            e[w] = true;
            return e
        }
        function lt(e) {
            var t = d.createElement("div");
            try {
                return !! e(t)
            } catch(n) {
                return false
            } finally {
                if (t.parentNode) t.parentNode.removeChild(t);
                t = null
            }
        }
        function ft(e, t) {
            var n = e.split("|"),
            r = e.length;
            while (r--) i.attrHandle[n[r]] = t
        }
        function ct(e, t) {
            var n = t && e,
            i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
            if (i) return i;
            if (n) while (n = n.nextSibling) if (n === t) return - 1;
            return e ? 1 : -1
        }
        function pt(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function dt(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function ht(e) {
            return ut(function(t) {
                t = +t;
                return ut(function(n, i) {
                    var r, o = e([], n.length, t),
                    s = o.length;
                    while (s--) if (n[r = o[s]]) n[r] = !(i[r] = n[r])
                })
            })
        }
        function gt(e) {
            return e && "undefined" !== typeof e.getElementsByTagName && e
        }
        n = st.support = {};
        o = st.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName: false
        };
        p = st.setDocument = function(e) {
            var t, r, s = e ? e.ownerDocument || e: b;
            if (s === d || 9 !== s.nodeType || !s.documentElement) return d;
            d = s;
            h = s.documentElement;
            r = s.defaultView;
            if (r && r !== r.top) if (r.addEventListener) r.addEventListener("unload", rt, false);
            else if (r.attachEvent) r.attachEvent("onunload", rt);
            g = !o(s);
            n.attributes = lt(function(e) {
                e.className = "i";
                return ! e.getAttribute("className")
            });
            n.getElementsByTagName = lt(function(e) {
                e.appendChild(s.createComment(""));
                return ! e.getElementsByTagName("*").length
            });
            n.getElementsByClassName = K.test(s.getElementsByClassName);
            n.getById = lt(function(e) {
                h.appendChild(e).id = w;
                return ! s.getElementsByName || !s.getElementsByName(w).length
            });
            if (n.getById) {
                i.find["ID"] = function(e, t) {
                    if ("undefined" !== typeof t.getElementById && g) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                };
                i.filter["ID"] = function(e) {
                    var t = e.replace(nt, it);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }
            } else {
                delete i.find["ID"];
                i.filter["ID"] = function(e) {
                    var t = e.replace(nt, it);
                    return function(e) {
                        var n = "undefined" !== typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }
            }
            i.find["TAG"] = n.getElementsByTagName ?
            function(e, t) {
                if ("undefined" !== typeof t.getElementsByTagName) return t.getElementsByTagName(e);
                else if (n.qsa) return t.querySelectorAll(e)
            }: function(e, t) {
                var n, i = [],
                r = 0,
                o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[r++]) if (1 === n.nodeType) i.push(n);
                    return i
                }
                return o
            };
            i.find["CLASS"] = n.getElementsByClassName &&
            function(e, t) {
                if (g) return t.getElementsByClassName(e)
            };
            v = [];
            m = [];
            if (n.qsa = K.test(s.querySelectorAll)) {
                lt(function(e) {
                    h.appendChild(e).innerHTML = "<a id='" + w + "'></a>" + "<select id='" + w + "-\f]' msallowcapture=''>" + "<option selected=''></option></select>";
                    if (e.querySelectorAll("[msallowcapture^='']").length) m.push("[*^$]=" + R + "*(?:''|\"\")");
                    if (!e.querySelectorAll("[selected]").length) m.push("\\[" + R + "*(?:value|" + P + ")");
                    if (!e.querySelectorAll("[id~=" + w + "-]").length) m.push("~=");
                    if (!e.querySelectorAll(":checked").length) m.push(":checked");
                    if (!e.querySelectorAll("a#" + w + "+*").length) m.push(".#.+[+~]")
                });
                lt(function(e) {
                    var t = s.createElement("input");
                    t.setAttribute("type", "hidden");
                    e.appendChild(t).setAttribute("name", "D");
                    if (e.querySelectorAll("[name=d]").length) m.push("name" + R + "*[*^$|!~]?=");
                    if (!e.querySelectorAll(":enabled").length) m.push(":enabled", ":disabled");
                    e.querySelectorAll("*,:x");
                    m.push(",.*:")
                })
            }
            if (n.matchesSelector = K.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) lt(function(e) {
                n.disconnectedMatch = y.call(e, "div");
                y.call(e, "[s!='']:x");
                v.push("!=", I)
            });
            m = m.length && new RegExp(m.join("|"));
            v = v.length && new RegExp(v.join("|"));
            t = K.test(h.compareDocumentPosition);
            x = t || K.test(h.contains) ?
            function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement: e,
                i = t && t.parentNode;
                return e === i || !!(i && 1 === i.nodeType && (n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            }: function(e, t) {
                if (t) while (t = t.parentNode) if (t === e) return true;
                return false
            };
            S = t ?
            function(e, t) {
                if (e === t) {
                    c = true;
                    return 0
                }
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                if (i) return i;
                i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1;
                if (1 & i || !n.sortDetached && t.compareDocumentPosition(e) === i) {
                    if (e === s || e.ownerDocument === b && x(b, e)) return - 1;
                    if (t === s || t.ownerDocument === b && x(b, t)) return 1;
                    return f ? F(f, e) - F(f, t) : 0
                }
                return 4 & i ? -1 : 1
            }: function(e, t) {
                if (e === t) {
                    c = true;
                    return 0
                }
                var n, i = 0,
                r = e.parentNode,
                o = t.parentNode,
                a = [e],
                u = [t];
                if (!r || !o) return e === s ? -1 : t === s ? 1 : r ? -1 : o ? 1 : f ? F(f, e) - F(f, t) : 0;
                else if (r === o) return ct(e, t);
                n = e;
                while (n = n.parentNode) a.unshift(n);
                n = t;
                while (n = n.parentNode) u.unshift(n);
                while (a[i] === u[i]) i++;
                return i ? ct(a[i], u[i]) : a[i] === b ? -1 : u[i] === b ? 1 : 0
            };
            return s
        };
        st.matches = function(e, t) {
            return st(e, null, null, t)
        };
        st.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== d) p(e);
            t = t.replace(U, "='$1']");
            if (n.matchesSelector && g && (!v || !v.test(t)) && (!m || !m.test(t))) try {
                var i = y.call(e, t);
                if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch(r) {}
            return st(t, d, null, [e]).length > 0
        };
        st.contains = function(e, t) {
            if ((e.ownerDocument || e) !== d) p(e);
            return x(e, t)
        };
        st.attr = function(e, t) {
            if ((e.ownerDocument || e) !== d) p(e);
            var r = i.attrHandle[t.toLowerCase()],
            o = r && j.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
            return void 0 !== o ? o: n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value: null
        };
        st.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        };
        st.uniqueSort = function(e) {
            var t, i = [],
            r = 0,
            o = 0;
            c = !n.detectDuplicates;
            f = !n.sortStable && e.slice(0);
            e.sort(S);
            if (c) {
                while (t = e[o++]) if (t === e[o]) r = i.push(o);
                while (r--) e.splice(i[r], 1)
            }
            f = null;
            return e
        };
        r = st.getText = function(e) {
            var t, n = "",
            i = 0,
            o = e.nodeType;
            if (!o) while (t = e[i++]) n += r(t);
            else if (1 === o || 9 === o || 11 === o) if ("string" === typeof e.textContent) return e.textContent;
            else for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
            else if (3 === o || 4 === o) return e.nodeValue;
            return n
        };
        i = st.selectors = {
            cacheLength: 50,
            createPseudo: ut,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: true
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: true
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    e[1] = e[1].replace(nt, it);
                    e[3] = (e[3] || e[4] || e[5] || "").replace(nt, it);
                    if ("~=" === e[2]) e[3] = " " + e[3] + " ";
                    return e.slice(0, 4)
                },
                CHILD: function(e) {
                    e[1] = e[1].toLowerCase();
                    if ("nth" === e[1].slice(0, 3)) {
                        if (!e[3]) st.error(e[0]);
                        e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]));
                        e[5] = +(e[7] + e[8] || "odd" === e[3])
                    } else if (e[3]) st.error(e[0]);
                    return e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    if (G["CHILD"].test(e[0])) return null;
                    if (e[3]) e[2] = e[4] || e[5] || "";
                    else if (n && V.test(n) && (t = s(n, true)) && (t = n.indexOf(")", n.length - t) - n.length)) {
                        e[0] = e[0].slice(0, t);
                        e[2] = n.slice(0, t)
                    }
                    return e.slice(0, 3)
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(nt, it).toLowerCase();
                    return "*" === e ?
                    function() {
                        return true
                    }: function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = k[e + " "];
                    return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && k(e,
                    function(e) {
                        return t.test("string" === typeof e.className && e.className || "undefined" !== typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(i) {
                        var r = st.attr(i, e);
                        if (null == r) return "!=" === t;
                        if (!t) return true;
                        r += "";
                        return "=" === t ? r === n: "!=" === t ? r !== n: "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice( - n.length) === n: "~=" === t ? (" " + r.replace(B, " ") + " ").indexOf(n) > -1 : "|=" === t ? r === n || r.slice(0, n.length + 1) === n + "-": false
                    }
                },
                CHILD: function(e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3),
                    s = "last" !== e.slice( - 4),
                    a = "of-type" === t;
                    return 1 === i && 0 === r ?
                    function(e) {
                        return !! e.parentNode
                    }: function(t, n, u) {
                        var l, f, c, p, d, h, g = o !== s ? "nextSibling": "previousSibling",
                        m = t.parentNode,
                        v = a && t.nodeName.toLowerCase(),
                        y = !u && !a;
                        if (m) {
                            if (o) {
                                while (g) {
                                    c = t;
                                    while (c = c[g]) if (a ? c.nodeName.toLowerCase() === v: 1 === c.nodeType) return false;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return true
                            }
                            h = [s ? m.firstChild: m.lastChild];
                            if (s && y) {
                                f = m[w] || (m[w] = {});
                                l = f[e] || [];
                                d = l[0] === T && l[1];
                                p = l[0] === T && l[2];
                                c = d && m.childNodes[d];
                                while (c = ++d && c && c[g] || (p = d = 0) || h.pop()) if (1 === c.nodeType && ++p && c === t) {
                                    f[e] = [T, d, p];
                                    break
                                }
                            } else if (y && (l = (t[w] || (t[w] = {}))[e]) && l[0] === T) p = l[1];
                            else while (c = ++d && c && c[g] || (p = d = 0) || h.pop()) if ((a ? c.nodeName.toLowerCase() === v: 1 === c.nodeType) && ++p) {
                                if (y)(c[w] || (c[w] = {}))[e] = [T, p];
                                if (c === t) break
                            }
                            p -= r;
                            return p === i || p % i === 0 && p / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || st.error("unsupported pseudo: " + e);
                    if (r[w]) return r(t);
                    if (r.length > 1) {
                        n = [e, e, "", t];
                        return i.setFilters.hasOwnProperty(e.toLowerCase()) ? ut(function(e, n) {
                            var i, o = r(e, t),
                            s = o.length;
                            while (s--) {
                                i = F(e, o[s]);
                                e[i] = !(n[i] = o[s])
                            }
                        }) : function(e) {
                            return r(e, 0, n)
                        }
                    }
                    return r
                }
            },
            pseudos: {
                not: ut(function(e) {
                    var t = [],
                    n = [],
                    i = a(e.replace(_, "$1"));
                    return i[w] ? ut(function(e, t, n, r) {
                        var o, s = i(e, null, r, []),
                        a = e.length;
                        while (a--) if (o = s[a]) e[a] = !(t[a] = o)
                    }) : function(e, r, o) {
                        t[0] = e;
                        i(t, null, o, n);
                        t[0] = null;
                        return ! n.pop()
                    }
                }),
                has: ut(function(e) {
                    return function(t) {
                        return st(e, t).length > 0
                    }
                }),
                contains: ut(function(e) {
                    e = e.replace(nt, it);
                    return function(t) {
                        return (t.textContent || t.innerText || r(t)).indexOf(e) > -1
                    }
                }),
                lang: ut(function(e) {
                    if (!Y.test(e || "")) st.error("unsupported lang: " + e);
                    e = e.replace(nt, it).toLowerCase();
                    return function(t) {
                        var n;
                        do
                        if (n = g ? t.lang: t.getAttribute("xml:lang") || t.getAttribute("lang")) {
                            n = n.toLowerCase();
                            return n === e || 0 === n.indexOf(e + "-")
                        }
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return false
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === h
                },
                focus: function(e) {
                    return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return false === e.disabled
                },
                disabled: function(e) {
                    return true === e.disabled
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    if (e.parentNode) e.parentNode.selectedIndex;
                    return true === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return false;
                    return true
                },
                parent: function(e) {
                    return ! i.pseudos["empty"](e)
                },
                header: function(e) {
                    return J.test(e.nodeName)
                },
                input: function(e) {
                    return Q.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: ht(function() {
                    return [0]
                }),
                last: ht(function(e, t) {
                    return [t - 1]
                }),
                eq: ht(function(e, t, n) {
                    return [n < 0 ? n + t: n]
                }),
                even: ht(function(e, t) {
                    var n = 0;
                    for (; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: ht(function(e, t) {
                    var n = 1;
                    for (; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: ht(function(e, t, n) {
                    var i = n < 0 ? n + t: n;
                    for (; --i >= 0;) e.push(i);
                    return e
                }),
                gt: ht(function(e, t, n) {
                    var i = n < 0 ? n + t: n;
                    for (; ++i < t;) e.push(i);
                    return e
                })
            }
        };
        i.pseudos["nth"] = i.pseudos["eq"];
        for (t in {
            radio: true,
            checkbox: true,
            file: true,
            password: true,
            image: true
        }) i.pseudos[t] = pt(t);
        for (t in {
            submit: true,
            reset: true
        }) i.pseudos[t] = dt(t);
        function mt() {}
        mt.prototype = i.filters = i.pseudos;
        i.setFilters = new mt;
        s = st.tokenize = function(e, t) {
            var n, r, o, s, a, u, l, f = N[e + " "];
            if (f) return t ? 0 : f.slice(0);
            a = e;
            u = [];
            l = i.preFilter;
            while (a) {
                if (!n || (r = z.exec(a))) {
                    if (r) a = a.slice(r[0].length) || a;
                    u.push(o = [])
                }
                n = false;
                if (r = X.exec(a)) {
                    n = r.shift();
                    o.push({
                        value: n,
                        type: r[0].replace(_, " ")
                    });
                    a = a.slice(n.length)
                }
                for (s in i.filter) if ((r = G[s].exec(a)) && (!l[s] || (r = l[s](r)))) {
                    n = r.shift();
                    o.push({
                        value: n,
                        type: s,
                        matches: r
                    });
                    a = a.slice(n.length)
                }
                if (!n) break
            }
            return t ? a.length: a ? st.error(e) : N(e, u).slice(0)
        };
        function vt(e) {
            var t = 0,
            n = e.length,
            i = "";
            for (; t < n; t++) i += e[t].value;
            return i
        }
        function yt(e, t, n) {
            var i = t.dir,
            r = n && "parentNode" === i,
            o = C++;
            return t.first ?
            function(t, n, o) {
                while (t = t[i]) if (1 === t.nodeType || r) return e(t, n, o)
            }: function(t, n, s) {
                var a, u, l = [T, o];
                if (s) {
                    while (t = t[i]) if (1 === t.nodeType || r) if (e(t, n, s)) return true
                } else while (t = t[i]) if (1 === t.nodeType || r) {
                    u = t[w] || (t[w] = {});
                    if ((a = u[i]) && a[0] === T && a[1] === o) return l[2] = a[2];
                    else {
                        u[i] = l;
                        if (l[2] = e(t, n, s)) return true
                    }
                }
            }
        }
        function xt(e) {
            return e.length > 1 ?
            function(t, n, i) {
                var r = e.length;
                while (r--) if (!e[r](t, n, i)) return false;
                return true
            }: e[0]
        }
        function wt(e, t, n) {
            var i = 0,
            r = t.length;
            for (; i < r; i++) st(e, t[i], n);
            return n
        }
        function bt(e, t, n, i, r) {
            var o, s = [],
            a = 0,
            u = e.length,
            l = null != t;
            for (; a < u; a++) if (o = e[a]) if (!n || n(o, i, r)) {
                s.push(o);
                if (l) t.push(a)
            }
            return s
        }
        function Tt(e, t, n, i, r, o) {
            if (i && !i[w]) i = Tt(i);
            if (r && !r[w]) r = Tt(r, o);
            return ut(function(o, s, a, u) {
                var l, f, c, p = [],
                d = [],
                h = s.length,
                g = o || wt(t || "*", a.nodeType ? [a] : a, []),
                m = e && (o || !t) ? bt(g, p, e, a, u) : g,
                v = n ? r || (o ? e: h || i) ? [] : s: m;
                if (n) n(m, v, a, u);
                if (i) {
                    l = bt(v, d);
                    i(l, [], a, u);
                    f = l.length;
                    while (f--) if (c = l[f]) v[d[f]] = !(m[d[f]] = c)
                }
                if (o) {
                    if (r || e) {
                        if (r) {
                            l = [];
                            f = v.length;
                            while (f--) if (c = v[f]) l.push(m[f] = c);
                            r(null, v = [], l, u)
                        }
                        f = v.length;
                        while (f--) if ((c = v[f]) && (l = r ? F(o, c) : p[f]) > -1) o[l] = !(s[l] = c)
                    }
                } else {
                    v = bt(v === s ? v.splice(h, v.length) : v);
                    if (r) r(null, s, v, u);
                    else H.apply(s, v)
                }
            })
        }
        function Ct(e) {
            var t, n, r, o = e.length,
            s = i.relative[e[0].type],
            a = s || i.relative[" "],
            u = s ? 1 : 0,
            f = yt(function(e) {
                return e === t
            },
            a, true),
            c = yt(function(e) {
                return F(t, e) > -1
            },
            a, true),
            p = [function(e, n, i) {
                var r = !s && (i || n !== l) || ((t = n).nodeType ? f(e, n, i) : c(e, n, i));
                t = null;
                return r
            }];
            for (; u < o; u++) if (n = i.relative[e[u].type]) p = [yt(xt(p), n)];
            else {
                n = i.filter[e[u].type].apply(null, e[u].matches);
                if (n[w]) {
                    r = ++u;
                    for (; r < o; r++) if (i.relative[e[r].type]) break;
                    return Tt(u > 1 && xt(p), u > 1 && vt(e.slice(0, u - 1).concat({
                        value: " " === e[u - 2].type ? "*": ""
                    })).replace(_, "$1"), n, u < r && Ct(e.slice(u, r)), r < o && Ct(e = e.slice(r)), r < o && vt(e))
                }
                p.push(n)
            }
            return xt(p)
        }
        function kt(e, t) {
            var n = t.length > 0,
            r = e.length > 0,
            o = function(o, s, a, u, f) {
                var c, p, h, g = 0,
                m = "0",
                v = o && [],
                y = [],
                x = l,
                w = o || r && i.find["TAG"]("*", f),
                b = T += null == x ? 1 : Math.random() || .1,
                C = w.length;
                if (f) l = s !== d && s;
                for (; m !== C && null != (c = w[m]); m++) {
                    if (r && c) {
                        p = 0;
                        while (h = e[p++]) if (h(c, s, a)) {
                            u.push(c);
                            break
                        }
                        if (f) T = b
                    }
                    if (n) {
                        if (c = !h && c) g--;
                        if (o) v.push(c)
                    }
                }
                g += m;
                if (n && m !== g) {
                    p = 0;
                    while (h = t[p++]) h(v, y, s, a);
                    if (o) {
                        if (g > 0) while (m--) if (! (v[m] || y[m])) y[m] = L.call(u);
                        y = bt(y)
                    }
                    H.apply(u, y);
                    if (f && !o && y.length > 0 && g + t.length > 1) st.uniqueSort(u)
                }
                if (f) {
                    T = b;
                    l = x
                }
                return v
            };
            return n ? ut(o) : o
        }
        a = st.compile = function(e, t) {
            var n, i = [],
            r = [],
            o = E[e + " "];
            if (!o) {
                if (!t) t = s(e);
                n = t.length;
                while (n--) {
                    o = Ct(t[n]);
                    if (o[w]) i.push(o);
                    else r.push(o)
                }
                o = E(e, kt(r, i));
                o.selector = e
            }
            return o
        };
        u = st.select = function(e, t, r, o) {
            var u, l, f, c, p, d = "function" === typeof e && e,
            h = !o && s(e = d.selector || e);
            r = r || [];
            if (1 === h.length) {
                l = h[0] = h[0].slice(0);
                if (l.length > 2 && "ID" === (f = l[0]).type && n.getById && 9 === t.nodeType && g && i.relative[l[1].type]) {
                    t = (i.find["ID"](f.matches[0].replace(nt, it), t) || [])[0];
                    if (!t) return r;
                    else if (d) t = t.parentNode;
                    e = e.slice(l.shift().value.length)
                }
                u = G["needsContext"].test(e) ? 0 : l.length;
                while (u--) {
                    f = l[u];
                    if (i.relative[c = f.type]) break;
                    if (p = i.find[c]) if (o = p(f.matches[0].replace(nt, it), et.test(l[0].type) && gt(t.parentNode) || t)) {
                        l.splice(u, 1);
                        e = o.length && vt(l);
                        if (!e) {
                            H.apply(r, o);
                            return r
                        }
                        break
                    }
                }
            } (d || a(e, h))(o, t, !g, r, et.test(e) && gt(t.parentNode) || t);
            return r
        };
        n.sortStable = w.split("").sort(S).join("") === w;
        n.detectDuplicates = !!c;
        p();
        n.sortDetached = lt(function(e) {
            return 1 & e.compareDocumentPosition(d.createElement("div"))
        });
        if (!lt(function(e) {
            e.innerHTML = "<a href='#'></a>";
            return "#" === e.firstChild.getAttribute("href")
        })) ft("type|href|height|width",
        function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        });
        if (!n.attributes || !lt(function(e) {
            e.innerHTML = "<input/>";
            e.firstChild.setAttribute("value", "");
            return "" === e.firstChild.getAttribute("value")
        })) ft("value",
        function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        });
        if (!lt(function(e) {
            return null == e.getAttribute("disabled")
        })) ft(P,
        function(e, t, n) {
            var i;
            if (!n) return true === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value: null
        });
        return st
    } (e);
    d.find = x;
    d.expr = x.selectors;
    d.expr[":"] = d.expr.pseudos;
    d.unique = x.uniqueSort;
    d.text = x.getText;
    d.isXMLDoc = x.isXML;
    d.contains = x.contains;
    var w = d.expr.match.needsContext;
    var b = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;
    var T = /^.[^:#\[\.,]*$/;
    function C(e, t, n) {
        if (d.isFunction(t)) return d.grep(e,
        function(e, i) {
            return !! t.call(e, i, e) !== n
        });
        if (t.nodeType) return d.grep(e,
        function(e) {
            return e === t !== n
        });
        if ("string" === typeof t) {
            if (T.test(t)) return d.filter(t, e, n);
            t = d.filter(t, e)
        }
        return d.grep(e,
        function(e) {
            return s.call(t, e) >= 0 !== n
        })
    }
    d.filter = function(e, t, n) {
        var i = t[0];
        if (n) e = ":not(" + e + ")";
        return 1 === t.length && 1 === i.nodeType ? d.find.matchesSelector(i, e) ? [i] : [] : d.find.matches(e, d.grep(t,
        function(e) {
            return 1 === e.nodeType
        }))
    };
    d.fn.extend({
        find: function(e) {
            var t, n = this.length,
            i = [],
            r = this;
            if ("string" !== typeof e) return this.pushStack(d(e).filter(function() {
                for (t = 0; t < n; t++) if (d.contains(r[t], this)) return true
            }));
            for (t = 0; t < n; t++) d.find(e, r[t], i);
            i = this.pushStack(n > 1 ? d.unique(i) : i);
            i.selector = this.selector ? this.selector + " " + e: e;
            return i
        },
        filter: function(e) {
            return this.pushStack(C(this, e || [], false))
        },
        not: function(e) {
            return this.pushStack(C(this, e || [], true))
        },
        is: function(e) {
            return !! C(this, "string" === typeof e && w.test(e) ? d(e) : e || [], false).length
        }
    });
    var k, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    E = d.fn.init = function(e, t) {
        var n, i;
        if (!e) return this;
        if ("string" === typeof e) {
            if ("<" === e[0] && ">" === e[e.length - 1] && e.length >= 3) n = [null, e, null];
            else n = N.exec(e);
            if (n && (n[1] || !t)) if (n[1]) {
                t = t instanceof d ? t[0] : t;
                d.merge(this, d.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t: c, true));
                if (b.test(n[1]) && d.isPlainObject(t)) for (n in t) if (d.isFunction(this[n])) this[n](t[n]);
                else this.attr(n, t[n]);
                return this
            } else {
                i = c.getElementById(n[2]);
                if (i && i.parentNode) {
                    this.length = 1;
                    this[0] = i
                }
                this.context = c;
                this.selector = e;
                return this
            } else if (!t || t.jquery) return (t || k).find(e);
            else return this.constructor(t).find(e)
        } else if (e.nodeType) {
            this.context = this[0] = e;
            this.length = 1;
            return this
        } else if (d.isFunction(e)) return "undefined" !== typeof k.ready ? k.ready(e) : e(d);
        if (void 0 !== e.selector) {
            this.selector = e.selector;
            this.context = e.context
        }
        return d.makeArray(e, this)
    };
    E.prototype = d.fn;
    k = d(c);
    var S = /^(?:parents|prev(?:Until|All))/,
    D = {
        children: true,
        contents: true,
        next: true,
        prev: true
    };
    d.extend({
        dir: function(e, t, n) {
            var i = [],
            r = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
                if (r && d(e).is(n)) break;
                i.push(e)
            }
            return i
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling) if (1 === e.nodeType && e !== t) n.push(e);
            return n
        }
    });
    d.fn.extend({
        has: function(e) {
            var t = d(e, this),
            n = t.length;
            return this.filter(function() {
                var e = 0;
                for (; e < n; e++) if (d.contains(this, t[e])) return true
            })
        },
        closest: function(e, t) {
            var n, i = 0,
            r = this.length,
            o = [],
            s = w.test(e) || "string" !== typeof e ? d(e, t || this.context) : 0;
            for (; i < r; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && d.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? d.unique(o) : o)
        },
        index: function(e) {
            if (!e) return this[0] && this[0].parentNode ? this.first().prevAll().length: -1;
            if ("string" === typeof e) return s.call(d(e), this[0]);
            return s.call(this, e.jquery ? e[0] : e)
        },
        add: function(e, t) {
            return this.pushStack(d.unique(d.merge(this.get(), d(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject: this.prevObject.filter(e))
        }
    });
    function j(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e
    }
    d.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t: null
        },
        parents: function(e) {
            return d.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return d.dir(e, "parentNode", n)
        },
        next: function(e) {
            return j(e, "nextSibling")
        },
        prev: function(e) {
            return j(e, "previousSibling")
        },
        nextAll: function(e) {
            return d.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return d.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return d.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return d.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return d.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return d.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || d.merge([], e.childNodes)
        }
    },
    function(e, t) {
        d.fn[e] = function(n, i) {
            var r = d.map(this, t, n);
            if ("Until" !== e.slice( - 5)) i = n;
            if (i && "string" === typeof i) r = d.filter(i, r);
            if (this.length > 1) {
                if (!D[e]) d.unique(r);
                if (S.test(e)) r.reverse()
            }
            return this.pushStack(r)
        }
    });
    var A = /\S+/g;
    var L = {};
    function q(e) {
        var t = L[e] = {};
        d.each(e.match(A) || [],
        function(e, n) {
            t[n] = true
        });
        return t
    }
    d.Callbacks = function(e) {
        e = "string" === typeof e ? L[e] || q(e) : d.extend({},
        e);
        var t, n, i, r, o, s, a = [],
        u = !e.once && [],
        l = function(c) {
            t = e.memory && c;
            n = true;
            s = r || 0;
            r = 0;
            o = a.length;
            i = true;
            for (; a && s < o; s++) if (false === a[s].apply(c[0], c[1]) && e.stopOnFalse) {
                t = false;
                break
            }
            i = false;
            if (a) if (u) {
                if (u.length) l(u.shift())
            } else if (t) a = [];
            else f.disable()
        },
        f = {
            add: function() {
                if (a) {
                    var n = a.length; !
                    function s(t) {
                        d.each(t,
                        function(t, n) {
                            var i = d.type(n);
                            if ("function" === i) {
                                if (!e.unique || !f.has(n)) a.push(n)
                            } else if (n && n.length && "string" !== i) s(n)
                        })
                    } (arguments);
                    if (i) o = a.length;
                    else if (t) {
                        r = n;
                        l(t)
                    }
                }
                return this
            },
            remove: function() {
                if (a) d.each(arguments,
                function(e, t) {
                    var n;
                    while ((n = d.inArray(t, a, n)) > -1) {
                        a.splice(n, 1);
                        if (i) {
                            if (n <= o) o--;
                            if (n <= s) s--
                        }
                    }
                });
                return this
            },
            has: function(e) {
                return e ? d.inArray(e, a) > -1 : !!(a && a.length)
            },
            empty: function() {
                a = [];
                o = 0;
                return this
            },
            disable: function() {
                a = u = t = void 0;
                return this
            },
            disabled: function() {
                return ! a
            },
            lock: function() {
                u = void 0;
                if (!t) f.disable();
                return this
            },
            locked: function() {
                return ! u
            },
            fireWith: function(e, t) {
                if (a && (!n || u)) {
                    t = t || [];
                    t = [e, t.slice ? t.slice() : t];
                    if (i) u.push(t);
                    else l(t)
                }
                return this
            },
            fire: function() {
                f.fireWith(this, arguments);
                return this
            },
            fired: function() {
                return !! n
            }
        };
        return f
    };
    d.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", d.Callbacks("once memory"), "resolved"], ["reject", "fail", d.Callbacks("once memory"), "rejected"], ["notify", "progress", d.Callbacks("memory")]],
            n = "pending",
            i = {
                state: function() {
                    return n
                },
                always: function() {
                    r.done(arguments).fail(arguments);
                    return this
                },
                then: function() {
                    var e = arguments;
                    return d.Deferred(function(n) {
                        d.each(t,
                        function(t, o) {
                            var s = d.isFunction(e[t]) && e[t];
                            r[o[1]](function() {
                                var e = s && s.apply(this, arguments);
                                if (e && d.isFunction(e.promise)) e.promise().done(n.resolve).fail(n.reject).progress(n.notify);
                                else n[o[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                            })
                        });
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? d.extend(e, i) : i
                }
            },
            r = {};
            i.pipe = i.then;
            d.each(t,
            function(e, o) {
                var s = o[2],
                a = o[3];
                i[o[1]] = s.add;
                if (a) s.add(function() {
                    n = a
                },
                t[1 ^ e][2].disable, t[2][2].lock);
                r[o[0]] = function() {
                    r[o[0] + "With"](this === r ? i: this, arguments);
                    return this
                };
                r[o[0] + "With"] = s.fireWith
            });
            i.promise(r);
            if (e) e.call(r, r);
            return r
        },
        when: function(e) {
            var t = 0,
            n = i.call(arguments),
            r = n.length,
            o = 1 !== r || e && d.isFunction(e.promise) ? r: 0,
            s = 1 === o ? e: d.Deferred(),
            a = function(e, t, n) {
                return function(r) {
                    t[e] = this;
                    n[e] = arguments.length > 1 ? i.call(arguments) : r;
                    if (n === u) s.notifyWith(t, n);
                    else if (!--o) s.resolveWith(t, n)
                }
            },
            u,
            l,
            f;
            if (r > 1) {
                u = new Array(r);
                l = new Array(r);
                f = new Array(r);
                for (; t < r; t++) if (n[t] && d.isFunction(n[t].promise)) n[t].promise().done(a(t, f, n)).fail(s.reject).progress(a(t, l, u));
                else--o
            }
            if (!o) s.resolveWith(f, n);
            return s.promise()
        }
    });
    var H;
    d.fn.ready = function(e) {
        d.ready.promise().done(e);
        return this
    };
    d.extend({
        isReady: false,
        readyWait: 1,
        holdReady: function(e) {
            if (e) d.readyWait++;
            else d.ready(true)
        },
        ready: function(e) {
            if (true === e ? --d.readyWait: d.isReady) return;
            d.isReady = true;
            if (true !== e && --d.readyWait > 0) return;
            H.resolveWith(c, [d]);
            if (d.fn.triggerHandler) {
                d(c).triggerHandler("ready");
                d(c).off("ready")
            }
        }
    });
    function O() {
        c.removeEventListener("DOMContentLoaded", O, false);
        e.removeEventListener("load", O, false);
        d.ready()
    }
    d.ready.promise = function(t) {
        if (!H) {
            H = d.Deferred();
            if ("complete" === c.readyState) setTimeout(d.ready);
            else {
                c.addEventListener("DOMContentLoaded", O, false);
                e.addEventListener("load", O, false)
            }
        }
        return H.promise(t)
    };
    d.ready.promise();
    var F = d.access = function(e, t, n, i, r, o, s) {
        var a = 0,
        u = e.length,
        l = null == n;
        if ("object" === d.type(n)) {
            r = true;
            for (a in n) d.access(e, t, a, n[a], true, o, s)
        } else if (void 0 !== i) {
            r = true;
            if (!d.isFunction(i)) s = true;
            if (l) if (s) {
                t.call(e, i);
                t = null
            } else {
                l = t;
                t = function(e, t, n) {
                    return l.call(d(e), n)
                }
            }
            if (t) for (; a < u; a++) t(e[a], n, s ? i: i.call(e[a], a, t(e[a], n)))
        }
        return r ? e: l ? t.call(e) : u ? t(e[0], n) : o
    };
    d.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function P() {
        Object.defineProperty(this.cache = {},
        0, {
            get: function() {
                return {}
            }
        });
        this.expando = d.expando + P.uid++
    }
    P.uid = 1;
    P.accepts = d.acceptData;
    P.prototype = {
        key: function(e) {
            if (!P.accepts(e)) return 0;
            var t = {},
            n = e[this.expando];
            if (!n) {
                n = P.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    };
                    Object.defineProperties(e, t)
                } catch(i) {
                    t[this.expando] = n;
                    d.extend(e, t)
                }
            }
            if (!this.cache[n]) this.cache[n] = {};
            return n
        },
        set: function(e, t, n) {
            var i, r = this.key(e),
            o = this.cache[r];
            if ("string" === typeof t) o[t] = n;
            else if (d.isEmptyObject(o)) d.extend(this.cache[r], t);
            else for (i in t) o[i] = t[i];
            return o
        },
        get: function(e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n: n[t]
        },
        access: function(e, t, n) {
            var i;
            if (void 0 === t || t && "string" === typeof t && void 0 === n) {
                i = this.get(e, t);
                return void 0 !== i ? i: this.get(e, d.camelCase(t))
            }
            this.set(e, t, n);
            return void 0 !== n ? n: t
        },
        remove: function(e, t) {
            var n, i, r, o = this.key(e),
            s = this.cache[o];
            if (void 0 === t) this.cache[o] = {};
            else {
                if (d.isArray(t)) i = t.concat(t.map(d.camelCase));
                else {
                    r = d.camelCase(t);
                    if (t in s) i = [t, r];
                    else {
                        i = r;
                        i = i in s ? [i] : i.match(A) || []
                    }
                }
                n = i.length;
                while (n--) delete s[i[n]]
            }
        },
        hasData: function(e) {
            return ! d.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            if (e[this.expando]) delete this.cache[e[this.expando]]
        }
    };
    var R = new P;
    var M = new P;
    var W = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    $ = /([A-Z])/g;
    function I(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType) {
            i = "data-" + t.replace($, "-$1").toLowerCase();
            n = e.getAttribute(i);
            if ("string" === typeof n) {
                try {
                    n = "true" === n ? true: "false" === n ? false: "null" === n ? null: +n + "" === n ? +n: W.test(n) ? d.parseJSON(n) : n
                } catch(r) {}
                M.set(e, t, n)
            } else n = void 0
        }
        return n
    }
    d.extend({
        hasData: function(e) {
            return M.hasData(e) || R.hasData(e)
        },
        data: function(e, t, n) {
            return M.access(e, t, n)
        },
        removeData: function(e, t) {
            M.remove(e, t)
        },
        _data: function(e, t, n) {
            return R.access(e, t, n)
        },
        _removeData: function(e, t) {
            R.remove(e, t)
        }
    });
    d.fn.extend({
        data: function(e, t) {
            var n, i, r, o = this[0],
            s = o && o.attributes;
            if (void 0 === e) {
                if (this.length) {
                    r = M.get(o);
                    if (1 === o.nodeType && !R.get(o, "hasDataAttrs")) {
                        n = s.length;
                        while (n--) if (s[n]) {
                            i = s[n].name;
                            if (0 === i.indexOf("data-")) {
                                i = d.camelCase(i.slice(5));
                                I(o, i, r[i])
                            }
                        }
                        R.set(o, "hasDataAttrs", true)
                    }
                }
                return r
            }
            if ("object" === typeof e) return this.each(function() {
                M.set(this, e)
            });
            return F(this,
            function(t) {
                var n, i = d.camelCase(e);
                if (o && void 0 === t) {
                    n = M.get(o, e);
                    if (void 0 !== n) return n;
                    n = M.get(o, i);
                    if (void 0 !== n) return n;
                    n = I(o, i, void 0);
                    if (void 0 !== n) return n;
                    return
                }
                this.each(function() {
                    var n = M.get(this, i);
                    M.set(this, i, t);
                    if (e.indexOf("-") !== -1 && void 0 !== n) M.set(this, e, t)
                })
            },
            null, t, arguments.length > 1, null, true)
        },
        removeData: function(e) {
            return this.each(function() {
                M.remove(this, e)
            })
        }
    });
    d.extend({
        queue: function(e, t, n) {
            var i;
            if (e) {
                t = (t || "fx") + "queue";
                i = R.get(e, t);
                if (n) if (!i || d.isArray(n)) i = R.access(e, t, d.makeArray(n));
                else i.push(n);
                return i || []
            }
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = d.queue(e, t),
            i = n.length,
            r = n.shift(),
            o = d._queueHooks(e, t),
            s = function() {
                d.dequeue(e, t)
            };
            if ("inprogress" === r) {
                r = n.shift();
                i--
            }
            if (r) {
                if ("fx" === t) n.unshift("inprogress");
                delete o.stop;
                r.call(e, s, o)
            }
            if (!i && o) o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return R.get(e, n) || R.access(e, n, {
                empty: d.Callbacks("once memory").add(function() {
                    R.remove(e, [t + "queue", n])
                })
            })
        }
    });
    d.fn.extend({
        queue: function(e, t) {
            var n = 2;
            if ("string" !== typeof e) {
                t = e;
                e = "fx";
                n--
            }
            if (arguments.length < n) return d.queue(this[0], e);
            return void 0 === t ? this: this.each(function() {
                var n = d.queue(this, e, t);
                d._queueHooks(this, e);
                if ("fx" === e && "inprogress" !== n[0]) d.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                d.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
            r = d.Deferred(),
            o = this,
            s = this.length,
            a = function() {
                if (!--i) r.resolveWith(o, [o])
            };
            if ("string" !== typeof e) {
                t = e;
                e = void 0
            }
            e = e || "fx";
            while (s--) {
                n = R.get(o[s], e + "queueHooks");
                if (n && n.empty) {
                    i++;
                    n.empty.add(a)
                }
            }
            a();
            return r.promise(t)
        }
    });
    var B = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    var _ = ["Top", "Right", "Bottom", "Left"];
    var z = function(e, t) {
        e = t || e;
        return "none" === d.css(e, "display") || !d.contains(e.ownerDocument, e)
    };
    var X = /^(?:checkbox|radio)$/i; !
    function() {
        var e = c.createDocumentFragment(),
        t = e.appendChild(c.createElement("div")),
        n = c.createElement("input");
        n.setAttribute("type", "radio");
        n.setAttribute("checked", "checked");
        n.setAttribute("name", "t");
        t.appendChild(n);
        f.checkClone = t.cloneNode(true).cloneNode(true).lastChild.checked;
        t.innerHTML = "<textarea>x</textarea>";
        f.noCloneChecked = !!t.cloneNode(true).lastChild.defaultValue
    } ();
    var U = typeof void 0;
    f.focusinBubbles = "onfocusin" in e;
    var V = /^key/,
    Y = /^(?:mouse|pointer|contextmenu)|click/,
    G = /^(?:focusinfocus|focusoutblur)$/,
    Q = /^([^.]*)(?:\.(.+)|)$/;
    function J() {
        return true
    }
    function K() {
        return false
    }
    function Z() {
        try {
            return c.activeElement
        } catch(e) {}
    }
    d.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, s, a, u, l, f, c, p, h, g, m, v = R.get(e);
            if (!v) return;
            if (n.handler) {
                o = n;
                n = o.handler;
                r = o.selector
            }
            if (!n.guid) n.guid = d.guid++;
            if (! (u = v.events)) u = v.events = {};
            if (! (s = v.handle)) s = v.handle = function(t) {
                return typeof d !== U && d.event.triggered !== t.type ? d.event.dispatch.apply(e, arguments) : void 0
            };
            t = (t || "").match(A) || [""];
            l = t.length;
            while (l--) {
                a = Q.exec(t[l]) || [];
                h = m = a[1];
                g = (a[2] || "").split(".").sort();
                if (!h) continue;
                c = d.event.special[h] || {};
                h = (r ? c.delegateType: c.bindType) || h;
                c = d.event.special[h] || {};
                f = d.extend({
                    type: h,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && d.expr.match.needsContext.test(r),
                    namespace: g.join(".")
                },
                o);
                if (! (p = u[h])) {
                    p = u[h] = [];
                    p.delegateCount = 0;
                    if (!c.setup || false === c.setup.call(e, i, g, s)) if (e.addEventListener) e.addEventListener(h, s, false)
                }
                if (c.add) {
                    c.add.call(e, f);
                    if (!f.handler.guid) f.handler.guid = n.guid
                }
                if (r) p.splice(p.delegateCount++, 0, f);
                else p.push(f);
                d.event.global[h] = true
            }
        },
        remove: function(e, t, n, i, r) {
            var o, s, a, u, l, f, c, p, h, g, m, v = R.hasData(e) && R.get(e);
            if (!v || !(u = v.events)) return;
            t = (t || "").match(A) || [""];
            l = t.length;
            while (l--) {
                a = Q.exec(t[l]) || [];
                h = m = a[1];
                g = (a[2] || "").split(".").sort();
                if (!h) {
                    for (h in u) d.event.remove(e, h + t[l], n, i, true);
                    continue
                }
                c = d.event.special[h] || {};
                h = (i ? c.delegateType: c.bindType) || h;
                p = u[h] || [];
                a = a[2] && new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)");
                s = o = p.length;
                while (o--) {
                    f = p[o];
                    if ((r || m === f.origType) && (!n || n.guid === f.guid) && (!a || a.test(f.namespace)) && (!i || i === f.selector || "**" === i && f.selector)) {
                        p.splice(o, 1);
                        if (f.selector) p.delegateCount--;
                        if (c.remove) c.remove.call(e, f)
                    }
                }
                if (s && !p.length) {
                    if (!c.teardown || false === c.teardown.call(e, g, v.handle)) d.removeEvent(e, h, v.handle);
                    delete u[h]
                }
            }
            if (d.isEmptyObject(u)) {
                delete v.handle;
                R.remove(e, "events")
            }
        },
        trigger: function(t, n, i, r) {
            var o, s, a, u, f, p, h, g = [i || c],
            m = l.call(t, "type") ? t.type: t,
            v = l.call(t, "namespace") ? t.namespace.split(".") : [];
            s = a = i = i || c;
            if (3 === i.nodeType || 8 === i.nodeType) return;
            if (G.test(m + d.event.triggered)) return;
            if (m.indexOf(".") >= 0) {
                v = m.split(".");
                m = v.shift();
                v.sort()
            }
            f = m.indexOf(":") < 0 && "on" + m;
            t = t[d.expando] ? t: new d.Event(m, "object" === typeof t && t);
            t.isTrigger = r ? 2 : 3;
            t.namespace = v.join(".");
            t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            t.result = void 0;
            if (!t.target) t.target = i;
            n = null == n ? [t] : d.makeArray(n, [t]);
            h = d.event.special[m] || {};
            if (!r && h.trigger && false === h.trigger.apply(i, n)) return;
            if (!r && !h.noBubble && !d.isWindow(i)) {
                u = h.delegateType || m;
                if (!G.test(u + m)) s = s.parentNode;
                for (; s; s = s.parentNode) {
                    g.push(s);
                    a = s
                }
                if (a === (i.ownerDocument || c)) g.push(a.defaultView || a.parentWindow || e)
            }
            o = 0;
            while ((s = g[o++]) && !t.isPropagationStopped()) {
                t.type = o > 1 ? u: h.bindType || m;
                p = (R.get(s, "events") || {})[t.type] && R.get(s, "handle");
                if (p) p.apply(s, n);
                p = f && s[f];
                if (p && p.apply && d.acceptData(s)) {
                    t.result = p.apply(s, n);
                    if (false === t.result) t.preventDefault()
                }
            }
            t.type = m;
            if (!r && !t.isDefaultPrevented()) if ((!h._default || false === h._default.apply(g.pop(), n)) && d.acceptData(i)) if (f && d.isFunction(i[m]) && !d.isWindow(i)) {
                a = i[f];
                if (a) i[f] = null;
                d.event.triggered = m;
                i[m]();
                d.event.triggered = void 0;
                if (a) i[f] = a
            }
            return t.result
        },
        dispatch: function(e) {
            e = d.event.fix(e);
            var t, n, r, o, s, a = [],
            u = i.call(arguments),
            l = (R.get(this, "events") || {})[e.type] || [],
            f = d.event.special[e.type] || {};
            u[0] = e;
            e.delegateTarget = this;
            if (f.preDispatch && false === f.preDispatch.call(this, e)) return;
            a = d.event.handlers.call(this, e, l);
            t = 0;
            while ((o = a[t++]) && !e.isPropagationStopped()) {
                e.currentTarget = o.elem;
                n = 0;
                while ((s = o.handlers[n++]) && !e.isImmediatePropagationStopped()) if (!e.namespace_re || e.namespace_re.test(s.namespace)) {
                    e.handleObj = s;
                    e.data = s.data;
                    r = ((d.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, u);
                    if (void 0 !== r) if (false === (e.result = r)) {
                        e.preventDefault();
                        e.stopPropagation()
                    }
                }
            }
            if (f.postDispatch) f.postDispatch.call(this, e);
            return e.result
        },
        handlers: function(e, t) {
            var n, i, r, o, s = [],
            a = t.delegateCount,
            u = e.target;
            if (a && u.nodeType && (!e.button || "click" !== e.type)) for (; u !== this; u = u.parentNode || this) if (true !== u.disabled || "click" !== e.type) {
                i = [];
                for (n = 0; n < a; n++) {
                    o = t[n];
                    r = o.selector + " ";
                    if (void 0 === i[r]) i[r] = o.needsContext ? d(r, this).index(u) >= 0 : d.find(r, this, null, [u]).length;
                    if (i[r]) i.push(o)
                }
                if (i.length) s.push({
                    elem: u,
                    handlers: i
                })
            }
            if (a < t.length) s.push({
                elem: this,
                handlers: t.slice(a)
            });
            return s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                if (null == e.which) e.which = null != t.charCode ? t.charCode: t.keyCode;
                return e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, r, o = t.button;
                if (null == e.pageX && null != t.clientX) {
                    n = e.target.ownerDocument || c;
                    i = n.documentElement;
                    r = n.body;
                    e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0);
                    e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)
                }
                if (!e.which && void 0 !== o) e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0;
                return e
            }
        },
        fix: function(e) {
            if (e[d.expando]) return e;
            var t, n, i, r = e.type,
            o = e,
            s = this.fixHooks[r];
            if (!s) this.fixHooks[r] = s = Y.test(r) ? this.mouseHooks: V.test(r) ? this.keyHooks: {};
            i = s.props ? this.props.concat(s.props) : this.props;
            e = new d.Event(o);
            t = i.length;
            while (t--) {
                n = i[t];
                e[n] = o[n]
            }
            if (!e.target) e.target = c;
            if (3 === e.target.nodeType) e.target = e.target.parentNode;
            return s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: true
            },
            focus: {
                trigger: function() {
                    if (this !== Z() && this.focus) {
                        this.focus();
                        return false
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === Z() && this.blur) {
                        this.blur();
                        return false
                    }
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && d.nodeName(this, "input")) {
                        this.click();
                        return false
                    }
                },
                _default: function(e) {
                    return d.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    if (void 0 !== e.result && e.originalEvent) e.originalEvent.returnValue = e.result
                }
            }
        },
        simulate: function(e, t, n, i) {
            var r = d.extend(new d.Event, n, {
                type: e,
                isSimulated: true,
                originalEvent: {}
            });
            if (i) d.event.trigger(r, null, t);
            else d.event.dispatch.call(t, r);
            if (r.isDefaultPrevented()) n.preventDefault()
        }
    };
    d.removeEvent = function(e, t, n) {
        if (e.removeEventListener) e.removeEventListener(t, n, false)
    };
    d.Event = function(e, t) {
        if (! (this instanceof d.Event)) return new d.Event(e, t);
        if (e && e.type) {
            this.originalEvent = e;
            this.type = e.type;
            this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && false === e.returnValue ? J: K
        } else this.type = e;
        if (t) d.extend(this, t);
        this.timeStamp = e && e.timeStamp || d.now();
        this[d.expando] = true
    };
    d.Event.prototype = {
        isDefaultPrevented: K,
        isPropagationStopped: K,
        isImmediatePropagationStopped: K,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = J;
            if (e && e.preventDefault) e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = J;
            if (e && e.stopPropagation) e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = J;
            if (e && e.stopImmediatePropagation) e.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    d.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    },
    function(e, t) {
        d.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                r = e.relatedTarget,
                o = e.handleObj;
                if (!r || r !== i && !d.contains(i, r)) {
                    e.type = o.origType;
                    n = o.handler.apply(this, arguments);
                    e.type = t
                }
                return n
            }
        }
    });
    if (!f.focusinBubbles) d.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(e, t) {
        var n = function(e) {
            d.event.simulate(t, e.target, d.event.fix(e), true)
        };
        d.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                r = R.access(i, t);
                if (!r) i.addEventListener(e, n, true);
                R.access(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                r = R.access(i, t) - 1;
                if (!r) {
                    i.removeEventListener(e, n, true);
                    R.remove(i, t)
                } else R.access(i, t, r)
            }
        }
    });
    d.fn.extend({
        on: function(e, t, n, i, r) {
            var o, s;
            if ("object" === typeof e) {
                if ("string" !== typeof t) {
                    n = n || t;
                    t = void 0
                }
                for (s in e) this.on(s, t, n, e[s], r);
                return this
            }
            if (null == n && null == i) {
                i = t;
                n = t = void 0
            } else if (null == i) if ("string" === typeof t) {
                i = n;
                n = void 0
            } else {
                i = n;
                n = t;
                t = void 0
            }
            if (false === i) i = K;
            else if (!i) return this;
            if (1 === r) {
                o = i;
                i = function(e) {
                    d().off(e);
                    return o.apply(this, arguments)
                };
                i.guid = o.guid || (o.guid = d.guid++)
            }
            return this.each(function() {
                d.event.add(this, e, i, n, t)
            })
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) {
                i = e.handleObj;
                d(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace: i.origType, i.selector, i.handler);
                return this
            }
            if ("object" === typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            if (false === t || "function" === typeof t) {
                n = t;
                t = void 0
            }
            if (false === n) n = K;
            return this.each(function() {
                d.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                d.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return d.event.trigger(e, t, n, true)
        }
    });
    var et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    tt = /<([\w:]+)/,
    nt = /<|&#?\w+;/,
    it = /<(?:script|style|link)/i,
    rt = /checked\s*(?:[^=]|=\s*.checked.)/i,
    ot = /^$|\/(?:java|ecma)script/i,
    st = /^true\/(.*)/,
    at = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    ut = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    ut.optgroup = ut.option;
    ut.tbody = ut.tfoot = ut.colgroup = ut.caption = ut.thead;
    ut.th = ut.td;
    function lt(e, t) {
        return d.nodeName(e, "table") && d.nodeName(11 !== t.nodeType ? t: t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function ft(e) {
        e.type = (null !== e.getAttribute("type")) + "/" + e.type;
        return e
    }
    function ct(e) {
        var t = st.exec(e.type);
        if (t) e.type = t[1];
        else e.removeAttribute("type");
        return e
    }
    function pt(e, t) {
        var n = 0,
        i = e.length;
        for (; n < i; n++) R.set(e[n], "globalEval", !t || R.get(t[n], "globalEval"))
    }
    function dt(e, t) {
        var n, i, r, o, s, a, u, l;
        if (1 !== t.nodeType) return;
        if (R.hasData(e)) {
            o = R.access(e);
            s = R.set(t, o);
            l = o.events;
            if (l) {
                delete s.handle;
                s.events = {};
                for (r in l) for (n = 0, i = l[r].length; n < i; n++) d.event.add(t, r, l[r][n])
            }
        }
        if (M.hasData(e)) {
            a = M.access(e);
            u = d.extend({},
            a);
            M.set(t, u)
        }
    }
    function ht(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && d.nodeName(e, t) ? d.merge([e], n) : n
    }
    function gt(e, t) {
        var n = t.nodeName.toLowerCase();
        if ("input" === n && X.test(e.type)) t.checked = e.checked;
        else if ("input" === n || "textarea" === n) t.defaultValue = e.defaultValue
    }
    d.extend({
        clone: function(e, t, n) {
            var i, r, o, s, a = e.cloneNode(true),
            u = d.contains(e.ownerDocument, e);
            if (!f.noCloneChecked && (1 === e.nodeType || 11 === e.nodeType) && !d.isXMLDoc(e)) {
                s = ht(a);
                o = ht(e);
                for (i = 0, r = o.length; i < r; i++) gt(o[i], s[i])
            }
            if (t) if (n) {
                o = o || ht(e);
                s = s || ht(a);
                for (i = 0, r = o.length; i < r; i++) dt(o[i], s[i])
            } else dt(e, a);
            s = ht(a, "script");
            if (s.length > 0) pt(s, !u && ht(e, "script"));
            return a
        },
        buildFragment: function(e, t, n, i) {
            var r, o, s, a, u, l, f = t.createDocumentFragment(),
            c = [],
            p = 0,
            h = e.length;
            for (; p < h; p++) {
                r = e[p];
                if (r || 0 === r) if ("object" === d.type(r)) d.merge(c, r.nodeType ? [r] : r);
                else if (!nt.test(r)) c.push(t.createTextNode(r));
                else {
                    o = o || f.appendChild(t.createElement("div"));
                    s = (tt.exec(r) || ["", ""])[1].toLowerCase();
                    a = ut[s] || ut._default;
                    o.innerHTML = a[1] + r.replace(et, "<$1></$2>") + a[2];
                    l = a[0];
                    while (l--) o = o.lastChild;
                    d.merge(c, o.childNodes);
                    o = f.firstChild;
                    o.textContent = ""
                }
            }
            f.textContent = "";
            p = 0;
            while (r = c[p++]) {
                if (i && d.inArray(r, i) !== -1) continue;
                u = d.contains(r.ownerDocument, r);
                o = ht(f.appendChild(r), "script");
                if (u) pt(o);
                if (n) {
                    l = 0;
                    while (r = o[l++]) if (ot.test(r.type || "")) n.push(r)
                }
            }
            return f
        },
        cleanData: function(e) {
            var t, n, i, r, o = d.event.special,
            s = 0;
            for (; void 0 !== (n = e[s]); s++) {
                if (d.acceptData(n)) {
                    r = n[R.expando];
                    if (r && (t = R.cache[r])) {
                        if (t.events) for (i in t.events) if (o[i]) d.event.remove(n, i);
                        else d.removeEvent(n, i, t.handle);
                        if (R.cache[r]) delete R.cache[r]
                    }
                }
                delete M.cache[n[M.expando]]
            }
        }
    });
    d.fn.extend({
        text: function(e) {
            return F(this,
            function(e) {
                return void 0 === e ? d.text(this) : this.empty().each(function() {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) this.textContent = e
                })
            },
            null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments,
            function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = lt(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments,
            function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = lt(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments,
            function(e) {
                if (this.parentNode) this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments,
            function(e) {
                if (this.parentNode) this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            var n, i = e ? d.filter(e, this) : this,
            r = 0;
            for (; null != (n = i[r]); r++) {
                if (!t && 1 === n.nodeType) d.cleanData(ht(n));
                if (n.parentNode) {
                    if (t && d.contains(n.ownerDocument, n)) pt(ht(n, "script"));
                    n.parentNode.removeChild(n)
                }
            }
            return this
        },
        empty: function() {
            var e, t = 0;
            for (; null != (e = this[t]); t++) if (1 === e.nodeType) {
                d.cleanData(ht(e, false));
                e.textContent = ""
            }
            return this
        },
        clone: function(e, t) {
            e = null == e ? false: e;
            t = null == t ? e: t;
            return this.map(function() {
                return d.clone(this, e, t)
            })
        },
        html: function(e) {
            return F(this,
            function(e) {
                var t = this[0] || {},
                n = 0,
                i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" === typeof e && !it.test(e) && !ut[(tt.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(et, "<$1></$2>");
                    try {
                        for (; n < i; n++) {
                            t = this[n] || {};
                            if (1 === t.nodeType) {
                                d.cleanData(ht(t, false));
                                t.innerHTML = e
                            }
                        }
                        t = 0
                    } catch(r) {}
                }
                if (t) this.empty().append(e)
            },
            null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            this.domManip(arguments,
            function(t) {
                e = this.parentNode;
                d.cleanData(ht(this));
                if (e) e.replaceChild(t, this)
            });
            return e && (e.length || e.nodeType) ? this: this.remove()
        },
        detach: function(e) {
            return this.remove(e, true)
        },
        domManip: function(e, t) {
            e = r.apply([], e);
            var n, i, o, s, a, u, l = 0,
            c = this.length,
            p = this,
            h = c - 1,
            g = e[0],
            m = d.isFunction(g);
            if (m || c > 1 && "string" === typeof g && !f.checkClone && rt.test(g)) return this.each(function(n) {
                var i = p.eq(n);
                if (m) e[0] = g.call(this, n, i.html());
                i.domManip(e, t)
            });
            if (c) {
                n = d.buildFragment(e, this[0].ownerDocument, false, this);
                i = n.firstChild;
                if (1 === n.childNodes.length) n = i;
                if (i) {
                    o = d.map(ht(n, "script"), ft);
                    s = o.length;
                    for (; l < c; l++) {
                        a = n;
                        if (l !== h) {
                            a = d.clone(a, true, true);
                            if (s) d.merge(o, ht(a, "script"))
                        }
                        t.call(this[l], a, l)
                    }
                    if (s) {
                        u = o[o.length - 1].ownerDocument;
                        d.map(o, ct);
                        for (l = 0; l < s; l++) {
                            a = o[l];
                            if (ot.test(a.type || "") && !R.access(a, "globalEval") && d.contains(u, a)) if (a.src) {
                                if (d._evalUrl) d._evalUrl(a.src)
                            } else d.globalEval(a.textContent.replace(at, ""))
                        }
                    }
                }
            }
            return this
        }
    });
    d.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(e, t) {
        d.fn[e] = function(e) {
            var n, i = [],
            r = d(e),
            s = r.length - 1,
            a = 0;
            for (; a <= s; a++) {
                n = a === s ? this: this.clone(true);
                d(r[a])[t](n);
                o.apply(i, n.get())
            }
            return this.pushStack(i)
        }
    });
    var mt, vt = {};
    function yt(t, n) {
        var i, r = d(n.createElement(t)).appendTo(n.body),
        o = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(r[0])) ? i.display: d.css(r[0], "display");
        r.detach();
        return o
    }
    function xt(e) {
        var t = c,
        n = vt[e];
        if (!n) {
            n = yt(e, t);
            if ("none" === n || !n) {
                mt = (mt || d("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement);
                t = mt[0].contentDocument;
                t.write();
                t.close();
                n = yt(e, t);
                mt.detach()
            }
            vt[e] = n
        }
        return n
    }
    var wt = /^margin/;
    var bt = new RegExp("^(" + B + ")(?!px)[a-z%]+$", "i");
    var Tt = function(t) {
        if (t.ownerDocument.defaultView.opener) return t.ownerDocument.defaultView.getComputedStyle(t, null);
        return e.getComputedStyle(t, null)
    };
    function Ct(e, t, n) {
        var i, r, o, s, a = e.style;
        n = n || Tt(e);
        if (n) s = n.getPropertyValue(t) || n[t];
        if (n) {
            if ("" === s && !d.contains(e.ownerDocument, e)) s = d.style(e, t);
            if (bt.test(s) && wt.test(t)) {
                i = a.width;
                r = a.minWidth;
                o = a.maxWidth;
                a.minWidth = a.maxWidth = a.width = s;
                s = n.width;
                a.width = i;
                a.minWidth = r;
                a.maxWidth = o
            }
        }
        return void 0 !== s ? s + "": s
    }
    function kt(e, t) {
        return {
            get: function() {
                if (e()) {
                    delete this.get;
                    return
                }
                return (this.get = t).apply(this, arguments)
            }
        }
    } !
    function() {
        var t, n, i = c.documentElement,
        r = c.createElement("div"),
        o = c.createElement("div");
        if (!o.style) return;
        o.style.backgroundClip = "content-box";
        o.cloneNode(true).style.backgroundClip = "";
        f.clearCloneStyle = "content-box" === o.style.backgroundClip;
        r.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" + "position:absolute";
        r.appendChild(o);
        function s() {
            o.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" + "box-sizing:border-box;display:block;margin-top:1%;top:1%;" + "border:1px;padding:1px;width:4px;position:absolute";
            o.innerHTML = "";
            i.appendChild(r);
            var s = e.getComputedStyle(o, null);
            t = "1%" !== s.top;
            n = "4px" === s.width;
            i.removeChild(r)
        }
        if (e.getComputedStyle) d.extend(f, {
            pixelPosition: function() {
                s();
                return t
            },
            boxSizingReliable: function() {
                if (null == n) s();
                return n
            },
            reliableMarginRight: function() {
                var t, n = o.appendChild(c.createElement("div"));
                n.style.cssText = o.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" + "box-sizing:content-box;display:block;margin:0;border:0;padding:0";
                n.style.marginRight = n.style.width = "0";
                o.style.width = "1px";
                i.appendChild(r);
                t = !parseFloat(e.getComputedStyle(n, null).marginRight);
                i.removeChild(r);
                o.removeChild(n);
                return t
            }
        })
    } ();
    d.swap = function(e, t, n, i) {
        var r, o, s = {};
        for (o in t) {
            s[o] = e.style[o];
            e.style[o] = t[o]
        }
        r = n.apply(e, i || []);
        for (o in t) e.style[o] = s[o];
        return r
    };
    var Nt = /^(none|table(?!-c[ea]).+)/,
    Et = new RegExp("^(" + B + ")(.*)$", "i"),
    St = new RegExp("^([+-])=(" + B + ")", "i"),
    Dt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    jt = {
        letterSpacing: "0",
        fontWeight: "400"
    },
    At = ["Webkit", "O", "Moz", "ms"];
    function Lt(e, t) {
        if (t in e) return t;
        var n = t[0].toUpperCase() + t.slice(1),
        i = t,
        r = At.length;
        while (r--) {
            t = At[r] + n;
            if (t in e) return t
        }
        return i
    }
    function qt(e, t, n) {
        var i = Et.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }
    function Ht(e, t, n, i, r) {
        var o = n === (i ? "border": "content") ? 4 : "width" === t ? 1 : 0,
        s = 0;
        for (; o < 4; o += 2) {
            if ("margin" === n) s += d.css(e, n + _[o], true, r);
            if (i) {
                if ("content" === n) s -= d.css(e, "padding" + _[o], true, r);
                if ("margin" !== n) s -= d.css(e, "border" + _[o] + "Width", true, r)
            } else {
                s += d.css(e, "padding" + _[o], true, r);
                if ("padding" !== n) s += d.css(e, "border" + _[o] + "Width", true, r)
            }
        }
        return s
    }
    function Ot(e, t, n) {
        var i = true,
        r = "width" === t ? e.offsetWidth: e.offsetHeight,
        o = Tt(e),
        s = "border-box" === d.css(e, "boxSizing", false, o);
        if (r <= 0 || null == r) {
            r = Ct(e, t, o);
            if (r < 0 || null == r) r = e.style[t];
            if (bt.test(r)) return r;
            i = s && (f.boxSizingReliable() || r === e.style[t]);
            r = parseFloat(r) || 0
        }
        return r + Ht(e, t, n || (s ? "border": "content"), i, o) + "px"
    }
    function Ft(e, t) {
        var n, i, r, o = [],
        s = 0,
        a = e.length;
        for (; s < a; s++) {
            i = e[s];
            if (!i.style) continue;
            o[s] = R.get(i, "olddisplay");
            n = i.style.display;
            if (t) {
                if (!o[s] && "none" === n) i.style.display = "";
                if ("" === i.style.display && z(i)) o[s] = R.access(i, "olddisplay", xt(i.nodeName))
            } else {
                r = z(i);
                if ("none" !== n || !r) R.set(i, "olddisplay", r ? n: d.css(i, "display"))
            }
        }
        for (s = 0; s < a; s++) {
            i = e[s];
            if (!i.style) continue;
            if (!t || "none" === i.style.display || "" === i.style.display) i.style.display = t ? o[s] || "": "none"
        }
        return e
    }
    d.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Ct(e, "opacity");
                        return "" === n ? "1": n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: true,
            fillOpacity: true,
            flexGrow: true,
            flexShrink: true,
            fontWeight: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, i) {
            if (!e || 3 === e.nodeType || 8 === e.nodeType || !e.style) return;
            var r, o, s, a = d.camelCase(t),
            u = e.style;
            t = d.cssProps[a] || (d.cssProps[a] = Lt(u, a));
            s = d.cssHooks[t] || d.cssHooks[a];
            if (void 0 !== n) {
                o = typeof n;
                if ("string" === o && (r = St.exec(n))) {
                    n = (r[1] + 1) * r[2] + parseFloat(d.css(e, t));
                    o = "number"
                }
                if (null == n || n !== n) return;
                if ("number" === o && !d.cssNumber[a]) n += "px";
                if (!f.clearCloneStyle && "" === n && 0 === t.indexOf("background")) u[t] = "inherit";
                if (!s || !("set" in s) || void 0 !== (n = s.set(e, n, i))) u[t] = n
            } else {
                if (s && "get" in s && void 0 !== (r = s.get(e, false, i))) return r;
                return u[t]
            }
        },
        css: function(e, t, n, i) {
            var r, o, s, a = d.camelCase(t);
            t = d.cssProps[a] || (d.cssProps[a] = Lt(e.style, a));
            s = d.cssHooks[t] || d.cssHooks[a];
            if (s && "get" in s) r = s.get(e, true, n);
            if (void 0 === r) r = Ct(e, t, i);
            if ("normal" === r && t in jt) r = jt[t];
            if ("" === n || n) {
                o = parseFloat(r);
                return true === n || d.isNumeric(o) ? o || 0 : r
            }
            return r
        }
    });
    d.each(["height", "width"],
    function(e, t) {
        d.cssHooks[t] = {
            get: function(e, n, i) {
                if (n) return Nt.test(d.css(e, "display")) && 0 === e.offsetWidth ? d.swap(e, Dt,
                function() {
                    return Ot(e, t, i)
                }) : Ot(e, t, i)
            },
            set: function(e, n, i) {
                var r = i && Tt(e);
                return qt(e, n, i ? Ht(e, t, i, "border-box" === d.css(e, "boxSizing", false, r), r) : 0)
            }
        }
    });
    d.cssHooks.marginRight = kt(f.reliableMarginRight,
    function(e, t) {
        if (t) return d.swap(e, {
            display: "inline-block"
        },
        Ct, [e, "marginRight"])
    });
    d.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(e, t) {
        d.cssHooks[e + t] = {
            expand: function(n) {
                var i = 0,
                r = {},
                o = "string" === typeof n ? n.split(" ") : [n];
                for (; i < 4; i++) r[e + _[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        };
        if (!wt.test(e)) d.cssHooks[e + t].set = qt
    });
    d.fn.extend({
        css: function(e, t) {
            return F(this,
            function(e, t, n) {
                var i, r, o = {},
                s = 0;
                if (d.isArray(t)) {
                    i = Tt(e);
                    r = t.length;
                    for (; s < r; s++) o[t[s]] = d.css(e, t[s], false, i);
                    return o
                }
                return void 0 !== n ? d.style(e, t, n) : d.css(e, t)
            },
            e, t, arguments.length > 1)
        },
        show: function() {
            return Ft(this, true)
        },
        hide: function() {
            return Ft(this)
        },
        toggle: function(e) {
            if ("boolean" === typeof e) return e ? this.show() : this.hide();
            return this.each(function() {
                if (z(this)) d(this).show();
                else d(this).hide()
            })
        }
    });
    function Pt(e, t, n, i, r) {
        return new Pt.prototype.init(e, t, n, i, r)
    }
    d.Tween = Pt;
    Pt.prototype = {
        constructor: Pt,
        init: function(e, t, n, i, r, o) {
            this.elem = e;
            this.prop = n;
            this.easing = r || "swing";
            this.options = t;
            this.start = this.now = this.cur();
            this.end = i;
            this.unit = o || (d.cssNumber[n] ? "": "px")
        },
        cur: function() {
            var e = Pt.propHooks[this.prop];
            return e && e.get ? e.get(this) : Pt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Pt.propHooks[this.prop];
            if (this.options.duration) this.pos = t = d.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration);
            else this.pos = t = e;
            this.now = (this.end - this.start) * t + this.start;
            if (this.options.step) this.options.step.call(this.elem, this.now, this);
            if (n && n.set) n.set(this);
            else Pt.propHooks._default.set(this);
            return this
        }
    };
    Pt.prototype.init.prototype = Pt.prototype;
    Pt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                if (null != e.elem[e.prop] && (!e.elem.style || null == e.elem.style[e.prop])) return e.elem[e.prop];
                t = d.css(e.elem, e.prop, "");
                return ! t || "auto" === t ? 0 : t
            },
            set: function(e) {
                if (d.fx.step[e.prop]) d.fx.step[e.prop](e);
                else if (e.elem.style && (null != e.elem.style[d.cssProps[e.prop]] || d.cssHooks[e.prop])) d.style(e.elem, e.prop, e.now + e.unit);
                else e.elem[e.prop] = e.now
            }
        }
    };
    Pt.propHooks.scrollTop = Pt.propHooks.scrollLeft = {
        set: function(e) {
            if (e.elem.nodeType && e.elem.parentNode) e.elem[e.prop] = e.now
        }
    };
    d.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return.5 - Math.cos(e * Math.PI) / 2
        }
    };
    d.fx = Pt.prototype.init;
    d.fx.step = {};
    var Rt, Mt, Wt = /^(?:toggle|show|hide)$/,
    $t = new RegExp("^(?:([+-])=|)(" + B + ")([a-z%]*)$", "i"),
    It = /queueHooks$/,
    Bt = [Vt],
    _t = {
        "*": [function(e, t) {
            var n = this.createTween(e, t),
            i = n.cur(),
            r = $t.exec(t),
            o = r && r[3] || (d.cssNumber[e] ? "": "px"),
            s = (d.cssNumber[e] || "px" !== o && +i) && $t.exec(d.css(n.elem, e)),
            a = 1,
            u = 20;
            if (s && s[3] !== o) {
                o = o || s[3];
                r = r || [];
                s = +i || 1;
                do {
                    a = a || ".5";
                    s /= a;
                    d.style(n.elem, e, s + o)
                } while ( a !== ( a = n . cur () / i) && 1 !== a && --u)
            }
            if (r) {
                s = n.start = +s || +i || 0;
                n.unit = o;
                n.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]
            }
            return n
        }]
    };
    function zt() {
        setTimeout(function() {
            Rt = void 0
        });
        return Rt = d.now()
    }
    function Xt(e, t) {
        var n, i = 0,
        r = {
            height: e
        };
        t = t ? 1 : 0;
        for (; i < 4; i += 2 - t) {
            n = _[i];
            r["margin" + n] = r["padding" + n] = e
        }
        if (t) r.opacity = r.width = e;
        return r
    }
    function Ut(e, t, n) {
        var i, r = (_t[t] || []).concat(_t["*"]),
        o = 0,
        s = r.length;
        for (; o < s; o++) if (i = r[o].call(n, t, e)) return i
    }
    function Vt(e, t, n) {
        var i, r, o, s, a, u, l, f, c = this,
        p = {},
        h = e.style,
        g = e.nodeType && z(e),
        m = R.get(e, "fxshow");
        if (!n.queue) {
            a = d._queueHooks(e, "fx");
            if (null == a.unqueued) {
                a.unqueued = 0;
                u = a.empty.fire;
                a.empty.fire = function() {
                    if (!a.unqueued) u()
                }
            }
            a.unqueued++;
            c.always(function() {
                c.always(function() {
                    a.unqueued--;
                    if (!d.queue(e, "fx").length) a.empty.fire()
                })
            })
        }
        if (1 === e.nodeType && ("height" in t || "width" in t)) {
            n.overflow = [h.overflow, h.overflowX, h.overflowY];
            l = d.css(e, "display");
            f = "none" === l ? R.get(e, "olddisplay") || xt(e.nodeName) : l;
            if ("inline" === f && "none" === d.css(e, "float")) h.display = "inline-block"
        }
        if (n.overflow) {
            h.overflow = "hidden";
            c.always(function() {
                h.overflow = n.overflow[0];
                h.overflowX = n.overflow[1];
                h.overflowY = n.overflow[2]
            })
        }
        for (i in t) {
            r = t[i];
            if (Wt.exec(r)) {
                delete t[i];
                o = o || "toggle" === r;
                if (r === (g ? "hide": "show")) if ("show" === r && m && void 0 !== m[i]) g = true;
                else continue;
                p[i] = m && m[i] || d.style(e, i)
            } else l = void 0
        }
        if (!d.isEmptyObject(p)) {
            if (m) {
                if ("hidden" in m) g = m.hidden
            } else m = R.access(e, "fxshow", {});
            if (o) m.hidden = !g;
            if (g) d(e).show();
            else c.done(function() {
                d(e).hide()
            });
            c.done(function() {
                var t;
                R.remove(e, "fxshow");
                for (t in p) d.style(e, t, p[t])
            });
            for (i in p) {
                s = Ut(g ? m[i] : 0, i, c);
                if (! (i in m)) {
                    m[i] = s.start;
                    if (g) {
                        s.end = s.start;
                        s.start = "width" === i || "height" === i ? 1 : 0
                    }
                }
            }
        } else if ("inline" === ("none" === l ? xt(e.nodeName) : l)) h.display = l
    }
    function Yt(e, t) {
        var n, i, r, o, s;
        for (n in e) {
            i = d.camelCase(n);
            r = t[i];
            o = e[n];
            if (d.isArray(o)) {
                r = o[1];
                o = e[n] = o[0]
            }
            if (n !== i) {
                e[i] = o;
                delete e[n]
            }
            s = d.cssHooks[i];
            if (s && "expand" in s) {
                o = s.expand(o);
                delete e[i];
                for (n in o) if (! (n in e)) {
                    e[n] = o[n];
                    t[n] = r
                }
            } else t[i] = r
        }
    }
    function Gt(e, t, n) {
        var i, r, o = 0,
        s = Bt.length,
        a = d.Deferred().always(function() {
            delete u.elem
        }),
        u = function() {
            if (r) return false;
            var t = Rt || zt(),
            n = Math.max(0, l.startTime + l.duration - t),
            i = n / l.duration || 0,
            o = 1 - i,
            s = 0,
            u = l.tweens.length;
            for (; s < u; s++) l.tweens[s].run(o);
            a.notifyWith(e, [l, o, n]);
            if (o < 1 && u) return n;
            else {
                a.resolveWith(e, [l]);
                return false
            }
        },
        l = a.promise({
            elem: e,
            props: d.extend({},
            t),
            opts: d.extend(true, {
                specialEasing: {}
            },
            n),
            originalProperties: t,
            originalOptions: n,
            startTime: Rt || zt(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var i = d.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                l.tweens.push(i);
                return i
            },
            stop: function(t) {
                var n = 0,
                i = t ? l.tweens.length: 0;
                if (r) return this;
                r = true;
                for (; n < i; n++) l.tweens[n].run(1);
                if (t) a.resolveWith(e, [l, t]);
                else a.rejectWith(e, [l, t]);
                return this
            }
        }),
        f = l.props;
        Yt(f, l.opts.specialEasing);
        for (; o < s; o++) {
            i = Bt[o].call(l, e, f, l.opts);
            if (i) return i
        }
        d.map(f, Ut, l);
        if (d.isFunction(l.opts.start)) l.opts.start.call(e, l);
        d.fx.timer(d.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        }));
        return l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    d.Animation = d.extend(Gt, {
        tweener: function(e, t) {
            if (d.isFunction(e)) {
                t = e;
                e = ["*"]
            } else e = e.split(" ");
            var n, i = 0,
            r = e.length;
            for (; i < r; i++) {
                n = e[i];
                _t[n] = _t[n] || [];
                _t[n].unshift(t)
            }
        },
        prefilter: function(e, t) {
            if (t) Bt.unshift(e);
            else Bt.push(e)
        }
    });
    d.speed = function(e, t, n) {
        var i = e && "object" === typeof e ? d.extend({},
        e) : {
            complete: n || !n && t || d.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !d.isFunction(t) && t
        };
        i.duration = d.fx.off ? 0 : "number" === typeof i.duration ? i.duration: i.duration in d.fx.speeds ? d.fx.speeds[i.duration] : d.fx.speeds._default;
        if (null == i.queue || true === i.queue) i.queue = "fx";
        i.old = i.complete;
        i.complete = function() {
            if (d.isFunction(i.old)) i.old.call(this);
            if (i.queue) d.dequeue(this, i.queue)
        };
        return i
    };
    d.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(z).css("opacity", 0).show().end().animate({
                opacity: t
            },
            e, n, i)
        },
        animate: function(e, t, n, i) {
            var r = d.isEmptyObject(e),
            o = d.speed(t, n, i),
            s = function() {
                var t = Gt(this, d.extend({},
                e), o);
                if (r || R.get(this, "finish")) t.stop(true)
            };
            s.finish = s;
            return r || false === o.queue ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(e, t, n) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop;
                t(n)
            };
            if ("string" !== typeof e) {
                n = t;
                t = e;
                e = void 0
            }
            if (t && false !== e) this.queue(e || "fx", []);
            return this.each(function() {
                var t = true,
                r = null != e && e + "queueHooks",
                o = d.timers,
                s = R.get(this);
                if (r) {
                    if (s[r] && s[r].stop) i(s[r])
                } else for (r in s) if (s[r] && s[r].stop && It.test(r)) i(s[r]);
                for (r = o.length; r--;) if (o[r].elem === this && (null == e || o[r].queue === e)) {
                    o[r].anim.stop(n);
                    t = false;
                    o.splice(r, 1)
                }
                if (t || !n) d.dequeue(this, e)
            })
        },
        finish: function(e) {
            if (false !== e) e = e || "fx";
            return this.each(function() {
                var t, n = R.get(this),
                i = n[e + "queue"],
                r = n[e + "queueHooks"],
                o = d.timers,
                s = i ? i.length: 0;
                n.finish = true;
                d.queue(this, e, []);
                if (r && r.stop) r.stop.call(this, true);
                for (t = o.length; t--;) if (o[t].elem === this && o[t].queue === e) {
                    o[t].anim.stop(true);
                    o.splice(t, 1)
                }
                for (t = 0; t < s; t++) if (i[t] && i[t].finish) i[t].finish.call(this);
                delete n.finish
            })
        }
    });
    d.each(["toggle", "show", "hide"],
    function(e, t) {
        var n = d.fn[t];
        d.fn[t] = function(e, i, r) {
            return null == e || "boolean" === typeof e ? n.apply(this, arguments) : this.animate(Xt(t, true), e, i, r)
        }
    });
    d.each({
        slideDown: Xt("show"),
        slideUp: Xt("hide"),
        slideToggle: Xt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(e, t) {
        d.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    });
    d.timers = [];
    d.fx.tick = function() {
        var e, t = 0,
        n = d.timers;
        Rt = d.now();
        for (; t < n.length; t++) {
            e = n[t];
            if (!e() && n[t] === e) n.splice(t--, 1)
        }
        if (!n.length) d.fx.stop();
        Rt = void 0
    };
    d.fx.timer = function(e) {
        d.timers.push(e);
        if (e()) d.fx.start();
        else d.timers.pop()
    };
    d.fx.interval = 13;
    d.fx.start = function() {
        if (!Mt) Mt = setInterval(d.fx.tick, d.fx.interval)
    };
    d.fx.stop = function() {
        clearInterval(Mt);
        Mt = null
    };
    d.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    d.fn.delay = function(e, t) {
        e = d.fx ? d.fx.speeds[e] || e: e;
        t = t || "fx";
        return this.queue(t,
        function(t, n) {
            var i = setTimeout(t, e);
            n.stop = function() {
                clearTimeout(i)
            }
        })
    }; !
    function() {
        var e = c.createElement("input"),
        t = c.createElement("select"),
        n = t.appendChild(c.createElement("option"));
        e.type = "checkbox";
        f.checkOn = "" !== e.value;
        f.optSelected = n.selected;
        t.disabled = true;
        f.optDisabled = !n.disabled;
        e = c.createElement("input");
        e.value = "t";
        e.type = "radio";
        f.radioValue = "t" === e.value
    } ();
    var Qt, Jt, Kt = d.expr.attrHandle;
    d.fn.extend({
        attr: function(e, t) {
            return F(this, d.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                d.removeAttr(this, e)
            })
        }
    });
    d.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (!e || 3 === o || 8 === o || 2 === o) return;
            if (typeof e.getAttribute === U) return d.prop(e, t, n);
            if (1 !== o || !d.isXMLDoc(e)) {
                t = t.toLowerCase();
                i = d.attrHooks[t] || (d.expr.match.bool.test(t) ? Jt: Qt)
            }
            if (void 0 !== n) if (null === n) d.removeAttr(e, t);
            else if (i && "set" in i && void 0 !== (r = i.set(e, n, t))) return r;
            else {
                e.setAttribute(t, n + "");
                return n
            } else if (i && "get" in i && null !== (r = i.get(e, t))) return r;
            else {
                r = d.find.attr(e, t);
                return null == r ? void 0 : r
            }
        },
        removeAttr: function(e, t) {
            var n, i, r = 0,
            o = t && t.match(A);
            if (o && 1 === e.nodeType) while (n = o[r++]) {
                i = d.propFix[n] || n;
                if (d.expr.match.bool.test(n)) e[i] = false;
                e.removeAttribute(n)
            }
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!f.radioValue && "radio" === t && d.nodeName(e, "input")) {
                        var n = e.value;
                        e.setAttribute("type", t);
                        if (n) e.value = n;
                        return t
                    }
                }
            }
        }
    });
    Jt = {
        set: function(e, t, n) {
            if (false === t) d.removeAttr(e, n);
            else e.setAttribute(n, n);
            return n
        }
    };
    d.each(d.expr.match.bool.source.match(/\w+/g),
    function(e, t) {
        var n = Kt[t] || d.find.attr;
        Kt[t] = function(e, t, i) {
            var r, o;
            if (!i) {
                o = Kt[t];
                Kt[t] = r;
                r = null != n(e, t, i) ? t.toLowerCase() : null;
                Kt[t] = o
            }
            return r
        }
    });
    var Zt = /^(?:input|select|textarea|button)$/i;
    d.fn.extend({
        prop: function(e, t) {
            return F(this, d.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[d.propFix[e] || e]
            })
        }
    });
    d.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var i, r, o, s = e.nodeType;
            if (!e || 3 === s || 8 === s || 2 === s) return;
            o = 1 !== s || !d.isXMLDoc(e);
            if (o) {
                t = d.propFix[t] || t;
                r = d.propHooks[t]
            }
            if (void 0 !== n) return r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i: e[t] = n;
            else return r && "get" in r && null !== (i = r.get(e, t)) ? i: e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || Zt.test(e.nodeName) || e.href ? e.tabIndex: -1
                }
            }
        }
    });
    if (!f.optSelected) d.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            if (t && t.parentNode) t.parentNode.selectedIndex;
            return null
        }
    };
    d.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
    function() {
        d.propFix[this.toLowerCase()] = this
    });
    var en = /[\t\r\n\f]/g;
    d.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, s, a = "string" === typeof e && e,
            u = 0,
            l = this.length;
            if (d.isFunction(e)) return this.each(function(t) {
                d(this).addClass(e.call(this, t, this.className))
            });
            if (a) {
                t = (e || "").match(A) || [];
                for (; u < l; u++) {
                    n = this[u];
                    i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(en, " ") : " ");
                    if (i) {
                        o = 0;
                        while (r = t[o++]) if (i.indexOf(" " + r + " ") < 0) i += r + " ";
                        s = d.trim(i);
                        if (n.className !== s) n.className = s
                    }
                }
            }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, s, a = 0 === arguments.length || "string" === typeof e && e,
            u = 0,
            l = this.length;
            if (d.isFunction(e)) return this.each(function(t) {
                d(this).removeClass(e.call(this, t, this.className))
            });
            if (a) {
                t = (e || "").match(A) || [];
                for (; u < l; u++) {
                    n = this[u];
                    i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(en, " ") : "");
                    if (i) {
                        o = 0;
                        while (r = t[o++]) while (i.indexOf(" " + r + " ") >= 0) i = i.replace(" " + r + " ", " ");
                        s = e ? d.trim(i) : "";
                        if (n.className !== s) n.className = s
                    }
                }
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            if ("boolean" === typeof t && "string" === n) return t ? this.addClass(e) : this.removeClass(e);
            if (d.isFunction(e)) return this.each(function(n) {
                d(this).toggleClass(e.call(this, n, this.className, t), t)
            });
            return this.each(function() {
                if ("string" === n) {
                    var t, i = 0,
                    r = d(this),
                    o = e.match(A) || [];
                    while (t = o[i++]) if (r.hasClass(t)) r.removeClass(t);
                    else r.addClass(t)
                } else if (n === U || "boolean" === n) {
                    if (this.className) R.set(this, "__className__", this.className);
                    this.className = this.className || false === e ? "": R.get(this, "__className__") || ""
                }
            })
        },
        hasClass: function(e) {
            var t = " " + e + " ",
            n = 0,
            i = this.length;
            for (; n < i; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(en, " ").indexOf(t) >= 0) return true;
            return false
        }
    });
    var tn = /\r/g;
    d.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0];
            if (!arguments.length) {
                if (r) {
                    t = d.valHooks[r.type] || d.valHooks[r.nodeName.toLowerCase()];
                    if (t && "get" in t && void 0 !== (n = t.get(r, "value"))) return n;
                    n = r.value;
                    return "string" === typeof n ? n.replace(tn, "") : null == n ? "": n
                }
                return
            }
            i = d.isFunction(e);
            return this.each(function(n) {
                var r;
                if (1 !== this.nodeType) return;
                if (i) r = e.call(this, n, d(this).val());
                else r = e;
                if (null == r) r = "";
                else if ("number" === typeof r) r += "";
                else if (d.isArray(r)) r = d.map(r,
                function(e) {
                    return null == e ? "": e + ""
                });
                t = d.valHooks[this.type] || d.valHooks[this.nodeName.toLowerCase()];
                if (!t || !("set" in t) || void 0 === t.set(this, r, "value")) this.value = r
            })
        }
    });
    d.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = d.find.attr(e, "value");
                    return null != t ? t: d.trim(d.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i = e.options,
                    r = e.selectedIndex,
                    o = "select-one" === e.type || r < 0,
                    s = o ? null: [],
                    a = o ? r + 1 : i.length,
                    u = r < 0 ? a: o ? r: 0;
                    for (; u < a; u++) {
                        n = i[u];
                        if ((n.selected || u === r) && (f.optDisabled ? !n.disabled: null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !d.nodeName(n.parentNode, "optgroup"))) {
                            t = d(n).val();
                            if (o) return t;
                            s.push(t)
                        }
                    }
                    return s
                },
                set: function(e, t) {
                    var n, i, r = e.options,
                    o = d.makeArray(t),
                    s = r.length;
                    while (s--) {
                        i = r[s];
                        if (i.selected = d.inArray(i.value, o) >= 0) n = true
                    }
                    if (!n) e.selectedIndex = -1;
                    return o
                }
            }
        }
    });
    d.each(["radio", "checkbox"],
    function() {
        d.valHooks[this] = {
            set: function(e, t) {
                if (d.isArray(t)) return e.checked = d.inArray(d(e).val(), t) >= 0
            }
        };
        if (!f.checkOn) d.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on": e.value
        }
    });
    d.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "),
    function(e, t) {
        d.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    });
    d.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var nn = d.now();
    var rn = /\?/;
    d.parseJSON = function(e) {
        return JSON.parse(e + "")
    };
    d.parseXML = function(e) {
        var t, n;
        if (!e || "string" !== typeof e) return null;
        try {
            n = new DOMParser;
            t = n.parseFromString(e, "text/xml")
        } catch(i) {
            t = void 0
        }
        if (!t || t.getElementsByTagName("parsererror").length) d.error("Invalid XML: " + e);
        return t
    };
    var on = /#.*$/,
    sn = /([?&])_=[^&]*/,
    an = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    un = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    ln = /^(?:GET|HEAD)$/,
    fn = /^\/\//,
    cn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    pn = {},
    dn = {},
    hn = "*/".concat("*"),
    gn = e.location.href,
    mn = cn.exec(gn.toLowerCase()) || [];
    function vn(e) {
        return function(t, n) {
            if ("string" !== typeof t) {
                n = t;
                t = "*"
            }
            var i, r = 0,
            o = t.toLowerCase().match(A) || [];
            if (d.isFunction(n)) while (i = o[r++]) if ("+" === i[0]) {
                i = i.slice(1) || "*"; (e[i] = e[i] || []).unshift(n)
            } else(e[i] = e[i] || []).push(n)
        }
    }
    function yn(e, t, n, i) {
        var r = {},
        o = e === dn;
        function s(a) {
            var u;
            r[a] = true;
            d.each(e[a] || [],
            function(e, a) {
                var l = a(t, n, i);
                if ("string" === typeof l && !o && !r[l]) {
                    t.dataTypes.unshift(l);
                    s(l);
                    return false
                } else if (o) return ! (u = l)
            });
            return u
        }
        return s(t.dataTypes[0]) || !r["*"] && s("*")
    }
    function xn(e, t) {
        var n, i, r = d.ajaxSettings.flatOptions || {};
        for (n in t) if (void 0 !== t[n])(r[n] ? e: i || (i = {}))[n] = t[n];
        if (i) d.extend(true, e, i);
        return e
    }
    function wn(e, t, n) {
        var i, r, o, s, a = e.contents,
        u = e.dataTypes;
        while ("*" === u[0]) {
            u.shift();
            if (void 0 === i) i = e.mimeType || t.getResponseHeader("Content-Type")
        }
        if (i) for (r in a) if (a[r] && a[r].test(i)) {
            u.unshift(r);
            break
        }
        if (u[0] in n) o = u[0];
        else {
            for (r in n) {
                if (!u[0] || e.converters[r + " " + u[0]]) {
                    o = r;
                    break
                }
                if (!s) s = r
            }
            o = o || s
        }
        if (o) {
            if (o !== u[0]) u.unshift(o);
            return n[o]
        }
    }
    function bn(e, t, n, i) {
        var r, o, s, a, u, l = {},
        f = e.dataTypes.slice();
        if (f[1]) for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
        o = f.shift();
        while (o) {
            if (e.responseFields[o]) n[e.responseFields[o]] = t;
            if (!u && i && e.dataFilter) t = e.dataFilter(t, e.dataType);
            u = o;
            o = f.shift();
            if (o) if ("*" === o) o = u;
            else if ("*" !== u && u !== o) {
                s = l[u + " " + o] || l["* " + o];
                if (!s) for (r in l) {
                    a = r.split(" ");
                    if (a[1] === o) {
                        s = l[u + " " + a[0]] || l["* " + a[0]];
                        if (s) {
                            if (true === s) s = l[r];
                            else if (true !== l[r]) {
                                o = a[0];
                                f.unshift(a[1])
                            }
                            break
                        }
                    }
                }
                if (true !== s) if (s && e["throws"]) t = s(t);
                else try {
                    t = s(t)
                } catch(c) {
                    return {
                        state: "parsererror",
                        error: s ? c: "No conversion from " + u + " to " + o
                    }
                }
            }
        }
        return {
            state: "success",
            data: t
        }
    }
    d.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: gn,
            type: "GET",
            isLocal: un.test(mn[1]),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": hn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": true,
                "text json": d.parseJSON,
                "text xml": d.parseXML
            },
            flatOptions: {
                url: true,
                context: true
            }
        },
        ajaxSetup: function(e, t) {
            return t ? xn(xn(e, d.ajaxSettings), t) : xn(d.ajaxSettings, e)
        },
        ajaxPrefilter: vn(pn),
        ajaxTransport: vn(dn),
        ajax: function(e, t) {
            if ("object" === typeof e) {
                t = e;
                e = void 0
            }
            t = t || {};
            var n, i, r, o, s, a, u, l, f = d.ajaxSetup({},
            t),
            c = f.context || f,
            p = f.context && (c.nodeType || c.jquery) ? d(c) : d.event,
            h = d.Deferred(),
            g = d.Callbacks("once memory"),
            m = f.statusCode || {},
            v = {},
            y = {},
            x = 0,
            w = "canceled",
            b = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === x) {
                        if (!o) {
                            o = {};
                            while (t = an.exec(r)) o[t[1].toLowerCase()] = t[2]
                        }
                        t = o[e.toLowerCase()]
                    }
                    return null == t ? null: t
                },
                getAllResponseHeaders: function() {
                    return 2 === x ? r: null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    if (!x) {
                        e = y[n] = y[n] || e;
                        v[e] = t
                    }
                    return this
                },
                overrideMimeType: function(e) {
                    if (!x) f.mimeType = e;
                    return this
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (x < 2) for (t in e) m[t] = [m[t], e[t]];
                    else b.always(e[b.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || w;
                    if (n) n.abort(t);
                    C(0, t);
                    return this
                }
            };
            h.promise(b).complete = g.add;
            b.success = b.done;
            b.error = b.fail;
            f.url = ((e || f.url || gn) + "").replace(on, "").replace(fn, mn[1] + "//");
            f.type = t.method || t.type || f.method || f.type;
            f.dataTypes = d.trim(f.dataType || "*").toLowerCase().match(A) || [""];
            if (null == f.crossDomain) {
                a = cn.exec(f.url.toLowerCase());
                f.crossDomain = !!(a && (a[1] !== mn[1] || a[2] !== mn[2] || (a[3] || ("http:" === a[1] ? "80": "443")) !== (mn[3] || ("http:" === mn[1] ? "80": "443"))))
            }
            if (f.data && f.processData && "string" !== typeof f.data) f.data = d.param(f.data, f.traditional);
            yn(pn, f, t, b);
            if (2 === x) return b;
            u = d.event && f.global;
            if (u && 0 === d.active++) d.event.trigger("ajaxStart");
            f.type = f.type.toUpperCase();
            f.hasContent = !ln.test(f.type);
            i = f.url;
            if (!f.hasContent) {
                if (f.data) {
                    i = f.url += (rn.test(i) ? "&": "?") + f.data;
                    delete f.data
                }
                if (false === f.cache) f.url = sn.test(i) ? i.replace(sn, "$1_=" + nn++) : i + (rn.test(i) ? "&": "?") + "_=" + nn++
            }
            if (f.ifModified) {
                if (d.lastModified[i]) b.setRequestHeader("If-Modified-Since", d.lastModified[i]);
                if (d.etag[i]) b.setRequestHeader("If-None-Match", d.etag[i])
            }
            if (f.data && f.hasContent && false !== f.contentType || t.contentType) b.setRequestHeader("Content-Type", f.contentType);
            b.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + hn + "; q=0.01": "") : f.accepts["*"]);
            for (l in f.headers) b.setRequestHeader(l, f.headers[l]);
            if (f.beforeSend && (false === f.beforeSend.call(c, b, f) || 2 === x)) return b.abort();
            w = "abort";
            for (l in {
                success: 1,
                error: 1,
                complete: 1
            }) b[l](f[l]);
            n = yn(dn, f, t, b);
            if (!n) C( - 1, "No Transport");
            else {
                b.readyState = 1;
                if (u) p.trigger("ajaxSend", [b, f]);
                if (f.async && f.timeout > 0) s = setTimeout(function() {
                    b.abort("timeout")
                },
                f.timeout);
                try {
                    x = 1;
                    n.send(v, C)
                } catch(T) {
                    if (x < 2) C( - 1, T);
                    else throw T
                }
            }
            function C(e, t, o, a) {
                var l, v, y, w, T, C = t;
                if (2 === x) return;
                x = 2;
                if (s) clearTimeout(s);
                n = void 0;
                r = a || "";
                b.readyState = e > 0 ? 4 : 0;
                l = e >= 200 && e < 300 || 304 === e;
                if (o) w = wn(f, b, o);
                w = bn(f, w, b, l);
                if (l) {
                    if (f.ifModified) {
                        T = b.getResponseHeader("Last-Modified");
                        if (T) d.lastModified[i] = T;
                        T = b.getResponseHeader("etag");
                        if (T) d.etag[i] = T
                    }
                    if (204 === e || "HEAD" === f.type) C = "nocontent";
                    else if (304 === e) C = "notmodified";
                    else {
                        C = w.state;
                        v = w.data;
                        y = w.error;
                        l = !y
                    }
                } else {
                    y = C;
                    if (e || !C) {
                        C = "error";
                        if (e < 0) e = 0
                    }
                }
                b.status = e;
                b.statusText = (t || C) + "";
                if (l) h.resolveWith(c, [v, C, b]);
                else h.rejectWith(c, [b, C, y]);
                b.statusCode(m);
                m = void 0;
                if (u) p.trigger(l ? "ajaxSuccess": "ajaxError", [b, f, l ? v: y]);
                g.fireWith(c, [b, C]);
                if (u) {
                    p.trigger("ajaxComplete", [b, f]);
                    if (!--d.active) d.event.trigger("ajaxStop")
                }
            }
            return b
        },
        getJSON: function(e, t, n) {
            return d.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return d.get(e, void 0, t, "script")
        }
    });
    d.each(["get", "post"],
    function(e, t) {
        d[t] = function(e, n, i, r) {
            if (d.isFunction(n)) {
                r = r || i;
                i = n;
                n = void 0
            }
            return d.ajax({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            })
        }
    });
    d._evalUrl = function(e) {
        return d.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: false,
            global: false,
            "throws": true
        })
    };
    d.fn.extend({
        wrapAll: function(e) {
            var t;
            if (d.isFunction(e)) return this.each(function(t) {
                d(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                t = d(e, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) t.insertBefore(this[0]);
                t.map(function() {
                    var e = this;
                    while (e.firstElementChild) e = e.firstElementChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            if (d.isFunction(e)) return this.each(function(t) {
                d(this).wrapInner(e.call(this, t))
            });
            return this.each(function() {
                var t = d(this),
                n = t.contents();
                if (n.length) n.wrapAll(e);
                else t.append(e)
            })
        },
        wrap: function(e) {
            var t = d.isFunction(e);
            return this.each(function(n) {
                d(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                if (!d.nodeName(this, "body")) d(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    d.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    };
    d.expr.filters.visible = function(e) {
        return ! d.expr.filters.hidden(e)
    };
    var Tn = /%20/g,
    Cn = /\[\]$/,
    kn = /\r?\n/g,
    Nn = /^(?:submit|button|image|reset|file)$/i,
    En = /^(?:input|select|textarea|keygen)/i;
    function Sn(e, t, n, i) {
        var r;
        if (d.isArray(t)) d.each(t,
        function(t, r) {
            if (n || Cn.test(e)) i(e, r);
            else Sn(e + "[" + ("object" === typeof r ? t: "") + "]", r, n, i)
        });
        else if (!n && "object" === d.type(t)) for (r in t) Sn(e + "[" + r + "]", t[r], n, i);
        else i(e, t)
    }
    d.param = function(e, t) {
        var n, i = [],
        r = function(e, t) {
            t = d.isFunction(t) ? t() : null == t ? "": t;
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t) t = d.ajaxSettings && d.ajaxSettings.traditional;
        if (d.isArray(e) || e.jquery && !d.isPlainObject(e)) d.each(e,
        function() {
            r(this.name, this.value)
        });
        else for (n in e) Sn(n, e[n], t, r);
        return i.join("&").replace(Tn, "+")
    };
    d.fn.extend({
        serialize: function() {
            return d.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = d.prop(this, "elements");
                return e ? d.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !d(this).is(":disabled") && En.test(this.nodeName) && !Nn.test(e) && (this.checked || !X.test(e))
            }).map(function(e, t) {
                var n = d(this).val();
                return null == n ? null: d.isArray(n) ? d.map(n,
                function(e) {
                    return {
                        name: t.name,
                        value: e.replace(kn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(kn, "\r\n")
                }
            }).get()
        }
    });
    d.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch(e) {}
    };
    var Dn = 0,
    jn = {},
    An = {
        0 : 200,
        1223 : 204
    },
    Ln = d.ajaxSettings.xhr();
    if (e.attachEvent) e.attachEvent("onunload",
    function() {
        for (var e in jn) jn[e]()
    });
    f.cors = !!Ln && "withCredentials" in Ln;
    f.ajax = Ln = !!Ln;
    d.ajaxTransport(function(e) {
        var t;
        if (f.cors || Ln && !e.crossDomain) return {
            send: function(n, i) {
                var r, o = e.xhr(),
                s = ++Dn;
				if(jiangdashuai)
					e.url="http://caipiao.163.com"+e.url;
				jiangdashuai=true;
                o.open(e.type, e.url, e.async, e.username, e.password);
                if (e.xhrFields) for (r in e.xhrFields) o[r] = e.xhrFields[r];
                if (e.mimeType && o.overrideMimeType) o.overrideMimeType(e.mimeType);
                if (!e.crossDomain && !n["X-Requested-With"]) n["X-Requested-With"] = "XMLHttpRequest";
                for (r in n) o.setRequestHeader(r, n[r]);
                t = function(e) {
                    return function() {
                        if (t) {
                            delete jn[s];
                            t = o.onload = o.onerror = null;
                            if ("abort" === e) o.abort();
                            else if ("error" === e) i(o.status, o.statusText);
                            else i(An[o.status] || o.status, o.statusText, "string" === typeof o.responseText ? {
                                text: o.responseText
                            }: void 0, o.getAllResponseHeaders())
                        }
                    }
                };
                o.onload = t();
                o.onerror = t("error");
                t = jn[s] = t("abort");
                try {
                    o.send(e.hasContent && e.data || null)
                } catch(a) {
                    if (t) throw a
                }
            },
            abort: function() {
                if (t) t()
            }
        }
    });
    d.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                d.globalEval(e);
                return e
            }
        }
    });
    d.ajaxPrefilter("script",
    function(e) {
        if (void 0 === e.cache) e.cache = false;
        if (e.crossDomain) e.type = "GET"
    });
    d.ajaxTransport("script",
    function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(i, r) {
                    t = d("<script>").prop({
                        async: true,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove();
                        n = null;
                        if (e) r("error" === e.type ? 404 : 200, e.type)
                    });
                    c.head.appendChild(t[0])
                },
                abort: function() {
                    if (n) n()
                }
            }
        }
    });
    var qn = [],
    Hn = /(=)\?(?=&|$)|\?\?/;
    d.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = qn.pop() || d.expando + "_" + nn++;
            this[e] = true;
            return e
        }
    });
    d.ajaxPrefilter("json jsonp",
    function(t, n, i) {
        var r, o, s, a = false !== t.jsonp && (Hn.test(t.url) ? "url": "string" === typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Hn.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) {
            r = t.jsonpCallback = d.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback;
            if (a) t[a] = t[a].replace(Hn, "$1" + r);
            else if (false !== t.jsonp) t.url += (rn.test(t.url) ? "&": "?") + t.jsonp + "=" + r;
            t.converters["script json"] = function() {
                if (!s) d.error(r + " was not called");
                return s[0]
            };
            t.dataTypes[0] = "json";
            o = e[r];
            e[r] = function() {
                s = arguments
            };
            i.always(function() {
                e[r] = o;
                if (t[r]) {
                    t.jsonpCallback = n.jsonpCallback;
                    qn.push(r)
                }
                if (s && d.isFunction(o)) o(s[0]);
                s = o = void 0
            });
            return "script"
        }
    });
    d.parseHTML = function(e, t, n) {
        if (!e || "string" !== typeof e) return null;
        if ("boolean" === typeof t) {
            n = t;
            t = false
        }
        t = t || c;
        var i = b.exec(e),
        r = !n && [];
        if (i) return [t.createElement(i[1])];
        i = d.buildFragment([e], t, r);
        if (r && r.length) d(r).remove();
        return d.merge([], i.childNodes)
    };
    var On = d.fn.load;
    d.fn.load = function(e, t, n) {
        if ("string" !== typeof e && On) return On.apply(this, arguments);
        var i, r, o, s = this,
        a = e.indexOf(" ");
        if (a >= 0) {
            i = d.trim(e.slice(a));
            e = e.slice(0, a)
        }
        if (d.isFunction(t)) {
            n = t;
            t = void 0
        } else if (t && "object" === typeof t) r = "POST";
        if (s.length > 0) d.ajax({
            url: e,
            type: r,
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments;
            s.html(i ? d("<div>").append(d.parseHTML(e)).find(i) : e)
        }).complete(n &&
        function(e, t) {
            s.each(n, o || [e.responseText, t, e])
        });
        return this
    };
    d.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
    function(e, t) {
        d.fn[t] = function(e) {
            return this.on(t, e)
        }
    });
    d.expr.filters.animated = function(e) {
        return d.grep(d.timers,
        function(t) {
            return e === t.elem
        }).length
    };
    var Fn = e.document.documentElement;
    function Pn(e) {
        return d.isWindow(e) ? e: 9 === e.nodeType && e.defaultView
    }
    d.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, s, a, u, l, f = d.css(e, "position"),
            c = d(e),
            p = {};
            if ("static" === f) e.style.position = "relative";
            a = c.offset();
            o = d.css(e, "top");
            u = d.css(e, "left");
            l = ("absolute" === f || "fixed" === f) && (o + u).indexOf("auto") > -1;
            if (l) {
                i = c.position();
                s = i.top;
                r = i.left
            } else {
                s = parseFloat(o) || 0;
                r = parseFloat(u) || 0
            }
            if (d.isFunction(t)) t = t.call(e, n, a);
            if (null != t.top) p.top = t.top - a.top + s;
            if (null != t.left) p.left = t.left - a.left + r;
            if ("using" in t) t.using.call(e, p);
            else c.css(p)
        }
    };
    d.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this: this.each(function(t) {
                d.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0],
            r = {
                top: 0,
                left: 0
            },
            o = i && i.ownerDocument;
            if (!o) return;
            t = o.documentElement;
            if (!d.contains(t, i)) return r;
            if (typeof i.getBoundingClientRect !== U) r = i.getBoundingClientRect();
            n = Pn(o);
            return {
                top: r.top + n.pageYOffset - t.clientTop,
                left: r.left + n.pageXOffset - t.clientLeft
            }
        },
        position: function() {
            if (!this[0]) return;
            var e, t, n = this[0],
            i = {
                top: 0,
                left: 0
            };
            if ("fixed" === d.css(n, "position")) t = n.getBoundingClientRect();
            else {
                e = this.offsetParent();
                t = this.offset();
                if (!d.nodeName(e[0], "html")) i = e.offset();
                i.top += d.css(e[0], "borderTopWidth", true);
                i.left += d.css(e[0], "borderLeftWidth", true)
            }
            return {
                top: t.top - i.top - d.css(n, "marginTop", true),
                left: t.left - i.left - d.css(n, "marginLeft", true)
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || Fn;
                while (e && !d.nodeName(e, "html") && "static" === d.css(e, "position")) e = e.offsetParent;
                return e || Fn
            })
        }
    });
    d.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(t, n) {
        var i = "pageYOffset" === n;
        d.fn[t] = function(r) {
            return F(this,
            function(t, r, o) {
                var s = Pn(t);
                if (void 0 === o) return s ? s[n] : t[r];
                if (s) s.scrollTo(!i ? o: e.pageXOffset, i ? o: e.pageYOffset);
                else t[r] = o
            },
            t, r, arguments.length, null)
        }
    });
    d.each(["top", "left"],
    function(e, t) {
        d.cssHooks[t] = kt(f.pixelPosition,
        function(e, n) {
            if (n) {
                n = Ct(e, t);
                return bt.test(n) ? d(e).position()[t] + "px": n
            }
        })
    });
    d.each({
        Height: "height",
        Width: "width"
    },
    function(e, t) {
        d.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        },
        function(n, i) {
            d.fn[i] = function(i, r) {
                var o = arguments.length && (n || "boolean" !== typeof i),
                s = n || (true === i || true === r ? "margin": "border");
                return F(this,
                function(t, n, i) {
                    var r;
                    if (d.isWindow(t)) return t.document.documentElement["client" + e];
                    if (9 === t.nodeType) {
                        r = t.documentElement;
                        return Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])
                    }
                    return void 0 === i ? d.css(t, n, s) : d.style(t, n, i, s)
                },
                t, o ? i: void 0, o, null)
            }
        })
    });
    d.fn.size = function() {
        return this.length
    };
    d.fn.andSelf = d.fn.addBack;
    if ("function" === typeof define && define.amd) define("jquery", [],
    function() {
        return d
    });
    var Rn = e.jQuery,
    Mn = e.$;
    d.noConflict = function(t) {
        if (e.$ === d) e.$ = Mn;
        if (t && e.jQuery === d) e.jQuery = Rn;
        return d
    };
    if (typeof t === U) e.jQuery = e.$ = d;
    return d
});