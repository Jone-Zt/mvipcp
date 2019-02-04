var Zepto = function() {
    function _(e) {
        return e == null ? String(e) : T[N.call(e)] || "object"
    }
    function D(e) {
        return _(e) == "function"
    }
    function P(e) {
        return e != null && e == e.window
    }
    function H(e) {
        return e != null && e.nodeType == e.DOCUMENT_NODE
    }
    function B(e) {
        return _(e) == "object"
    }
    function j(e) {
        return B(e) && !P(e) && Object.getPrototypeOf(e) == Object.prototype
    }
    function F(e) {
        return typeof e.length == "number"
    }
    function I(e) {
        return o.call(e,
        function(e) {
            return e != null
        })
    }
    function q(e) {
        return e.length > 0 ? n.fn.concat.apply([], e) : e
    }
    function R(e) {
        return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }
    function U(e) {
        return e in l ? l[e] : l[e] = new RegExp("(^|\\s)" + e + "(\\s|$)")
    }
    function z(e, t) {
        return typeof t == "number" && !c[R(e)] ? t + "px": t
    }
    function W(e) {
        var t, n;
        return f[e] || (t = a.createElement(e), a.body.appendChild(t), n = getComputedStyle(t, "").getPropertyValue("display"), t.parentNode.removeChild(t), n == "none" && (n = "block"), f[e] = n),
        f[e]
    }
    function X(e) {
        return "children" in e ? u.call(e.children) : n.map(e.childNodes,
        function(e) {
            if (e.nodeType == 1) return e
        })
    }
    function V(e, t) {
        var n, r = e ? e.length: 0;
        for (n = 0; n < r; n++) this[n] = e[n];
        this.length = r,
        this.selector = t || ""
    }
    function $(n, r, i) {
        for (t in r) i && (j(r[t]) || M(r[t])) ? (j(r[t]) && !j(n[t]) && (n[t] = {}), M(r[t]) && !M(n[t]) && (n[t] = []), $(n[t], r[t], i)) : r[t] !== e && (n[t] = r[t])
    }
    function J(e, t) {
        return t == null ? n(e) : n(e).filter(t)
    }
    function K(e, t, n, r) {
        return D(t) ? t.call(e, n, r) : t
    }
    function Q(e, t, n) {
        n == null ? e.removeAttribute(t) : e.setAttribute(t, n)
    }
    function G(t, n) {
        var r = t.className || "",
        i = r && r.baseVal !== e;
        if (n === e) return i ? r.baseVal: r;
        i ? r.baseVal = n: t.className = n
    }
    function Y(e) {
        try {
            return e ? e == "true" || (e == "false" ? !1 : e == "null" ? null: +e + "" == e ? +e: /^[\[\{]/.test(e) ? n.parseJSON(e) : e) : e
        } catch(t) {
            return e
        }
    }
    function Z(e, t) {
        t(e);
        for (var n = 0,
        r = e.childNodes.length; n < r; n++) Z(e.childNodes[n], t)
    }
    var e, t, n, r, i = [],
    s = i.concat,
    o = i.filter,
    u = i.slice,
    a = window.document,
    f = {},
    l = {},
    c = {
        "column-count": 1,
        columns: 1,
        "font-weight": 1,
        "line-height": 1,
        opacity: 1,
        "z-index": 1,
        zoom: 1
    },
    h = /^\s*<(\w+|!)[^>]*>/,
    p = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    d = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
    v = /^(?:body|html)$/i,
    m = /([A-Z])/g,
    g = ["val", "css", "html", "text", "data", "width", "height", "offset"],
    y = ["after", "prepend", "before", "append"],
    b = a.createElement("table"),
    w = a.createElement("tr"),
    E = {
        tr: a.createElement("tbody"),
        tbody: b,
        thead: b,
        tfoot: b,
        td: w,
        th: w,
        "*": a.createElement("div")
    },
    S = /complete|loaded|interactive/,
    x = /^[\w-]*$/,
    T = {},
    N = T.toString,
    C = {},
    k,
    L,
    A = a.createElement("div"),
    O = {
        tabindex: "tabIndex",
        readonly: "readOnly",
        "for": "htmlFor",
        "class": "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable"
    },
    M = Array.isArray ||
    function(e) {
        return e instanceof Array
    };
    return C.matches = function(e, t) {
        if (!t || !e || e.nodeType !== 1) return ! 1;
        var n = e.webkitMatchesSelector || e.mozMatchesSelector || e.oMatchesSelector || e.matchesSelector;
        if (n) return n.call(e, t);
        var r, i = e.parentNode,
        s = !i;
        return s && (i = A).appendChild(e),
        r = ~C.qsa(i, t).indexOf(e),
        s && A.removeChild(e),
        r
    },
    k = function(e) {
        return e.replace(/-+(.)?/g,
        function(e, t) {
            return t ? t.toUpperCase() : ""
        })
    },
    L = function(e) {
        return o.call(e,
        function(t, n) {
            return e.indexOf(t) == n
        })
    },
    C.fragment = function(t, r, i) {
        var s, o, f;
        return p.test(t) && (s = n(a.createElement(RegExp.$1))),
        s || (t.replace && (t = t.replace(d, "<$1></$2>")), r === e && (r = h.test(t) && RegExp.$1), r in E || (r = "*"), f = E[r], f.innerHTML = "" + t, s = n.each(u.call(f.childNodes),
        function() {
            f.removeChild(this)
        })),
        j(i) && (o = n(s), n.each(i,
        function(e, t) {
            g.indexOf(e) > -1 ? o[e](t) : o.attr(e, t)
        })),
        s
    },
    C.Z = function(e, t) {
        return new V(e, t)
    },
    C.isZ = function(e) {
        return e instanceof C.Z
    },
    C.init = function(t, r) {
        var i;
        if (!t) return C.Z();
        if (typeof t == "string") {
            t = t.trim();
            if (t[0] == "<" && h.test(t)) i = C.fragment(t, RegExp.$1, r),
            t = null;
            else {
                if (r !== e) return n(r).find(t);
                i = C.qsa(a, t)
            }
        } else {
            if (D(t)) return n(a).ready(t);
            if (C.isZ(t)) return t;
            if (M(t)) i = I(t);
            else if (B(t)) i = [t],
            t = null;
            else if (h.test(t)) i = C.fragment(t.trim(), RegExp.$1, r),
            t = null;
            else {
                if (r !== e) return n(r).find(t);
                i = C.qsa(a, t)
            }
        }
        return C.Z(i, t)
    },
    n = function(e, t) {
        return C.init(e, t)
    },
    n.extend = function(e) {
        var t, n = u.call(arguments, 1);
        return typeof e == "boolean" && (t = e, e = n.shift()),
        n.forEach(function(n) {
            $(e, n, t)
        }),
        e
    },
    C.qsa = function(e, t) {
        var n, r = t[0] == "#",
        i = !r && t[0] == ".",
        s = r || i ? t.slice(1) : t,
        o = x.test(s);
        return e.getElementById && o && r ? (n = e.getElementById(s)) ? [n] : [] : e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 ? [] : u.call(o && !r && e.getElementsByClassName ? i ? e.getElementsByClassName(s) : e.getElementsByTagName(t) : e.querySelectorAll(t))
    },
    n.contains = a.documentElement.contains ?
    function(e, t) {
        return e !== t && e.contains(t)
    }: function(e, t) {
        while (t && (t = t.parentNode)) if (t === e) return ! 0;
        return ! 1
    },
    n.type = _,
    n.isFunction = D,
    n.isWindow = P,
    n.isArray = M,
    n.isPlainObject = j,
    n.isEmptyObject = function(e) {
        var t;
        for (t in e) return ! 1;
        return ! 0
    },
    n.inArray = function(e, t, n) {
        return i.indexOf.call(t, e, n)
    },
    n.camelCase = k,
    n.trim = function(e) {
        return e == null ? "": String.prototype.trim.call(e)
    },
    n.uuid = 0,
    n.support = {},
    n.expr = {},
    n.noop = function() {},
    n.map = function(e, t) {
        var n, r = [],
        i,
        s;
        if (F(e)) for (i = 0; i < e.length; i++) n = t(e[i], i),
        n != null && r.push(n);
        else for (s in e) n = t(e[s], s),
        n != null && r.push(n);
        return q(r);
    },
    n.each = function(e, t) {
        var n, r;
        if (F(e)) {
            for (n = 0; n < e.length; n++) if (t.call(e[n], n, e[n]) === !1) return e
        } else for (r in e) if (t.call(e[r], r, e[r]) === !1) return e;
        return e
    },
    n.grep = function(e, t) {
        return o.call(e, t)
    },
    window.JSON && (n.parseJSON = JSON.parse),
    n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
    function(e, t) {
        T["[object " + t + "]"] = t.toLowerCase()
    }),
    n.fn = {
        constructor: C.Z,
        length: 0,
        forEach: i.forEach,
        reduce: i.reduce,
        push: i.push,
        sort: i.sort,
        splice: i.splice,
        indexOf: i.indexOf,
        concat: function() {
            var e, t, n = [];
            for (e = 0; e < arguments.length; e++) t = arguments[e],
            n[e] = C.isZ(t) ? t.toArray() : t;
            return s.apply(C.isZ(this) ? this.toArray() : this, n)
        },
        map: function(e) {
            return n(n.map(this,
            function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return n(u.apply(this, arguments))
        },
        ready: function(e) {
            return S.test(a.readyState) && a.body ? e(n) : a.addEventListener("DOMContentLoaded",
            function() {
                e(n)
            },
            !1),
            this
        },
        get: function(t) {
            return t === e ? u.call(this) : this[t >= 0 ? t: t + this.length]
        },
        toArray: function() {
            return this.get()
        },
        size: function() {
            return this.length
        },
        remove: function() {
            return this.each(function() {
                this.parentNode != null && this.parentNode.removeChild(this)
            })
        },
        each: function(e) {
            return i.every.call(this,
            function(t, n) {
                return e.call(t, n, t) !== !1
            }),
            this
        },
        filter: function(e) {
            return D(e) ? this.not(this.not(e)) : n(o.call(this,
            function(t) {
                return C.matches(t, e)
            }))
        },
        add: function(e, t) {
            return n(L(this.concat(n(e, t))))
        },
        is: function(e) {
            return this.length > 0 && C.matches(this[0], e)
        },
        not: function(t) {
            var r = [];
            if (D(t) && t.call !== e) this.each(function(e) {
                t.call(this, e) || r.push(this)
            });
            else {
                var i = typeof t == "string" ? this.filter(t) : F(t) && D(t.item) ? u.call(t) : n(t);
                this.forEach(function(e) {
                    i.indexOf(e) < 0 && r.push(e)
                })
            }
            return n(r)
        },
        has: function(e) {
            return this.filter(function() {
                return B(e) ? n.contains(this, e) : n(this).find(e).size()
            })
        },
        eq: function(e) {
            return e === -1 ? this.slice(e) : this.slice(e, +e + 1)
        },
        first: function() {
            var e = this[0];
            return e && !B(e) ? e: n(e)
        },
        last: function() {
            var e = this[this.length - 1];
            return e && !B(e) ? e: n(e)
        },
        find: function(e) {
            var t, r = this;
            return e ? typeof e == "object" ? t = n(e).filter(function() {
                var e = this;
                return i.some.call(r,
                function(t) {
                    return n.contains(t, e)
                })
            }) : this.length == 1 ? t = n(C.qsa(this[0], e)) : t = this.map(function() {
                return C.qsa(this, e)
            }) : t = n(),
            t
        },
        closest: function(e, t) {
            var r = this[0],
            i = !1;
            typeof e == "object" && (i = n(e));
            while (r && !(i ? i.indexOf(r) >= 0 : C.matches(r, e))) r = r !== t && !H(r) && r.parentNode;
            return n(r)
        },
        parents: function(e) {
            var t = [],
            r = this;
            while (r.length > 0) r = n.map(r,
            function(e) {
                if ((e = e.parentNode) && !H(e) && t.indexOf(e) < 0) return t.push(e),
                e
            });
            return J(t, e)
        },
        parent: function(e) {
            return J(L(this.pluck("parentNode")), e)
        },
        children: function(e) {
            return J(this.map(function() {
                return X(this)
            }), e)
        },
        contents: function() {
            return this.map(function() {
                return this.contentDocument || u.call(this.childNodes)
            })
        },
        siblings: function(e) {
            return J(this.map(function(e, t) {
                return o.call(X(t.parentNode),
                function(e) {
                    return e !== t
                })
            }), e)
        },
        empty: function() {
            return this.each(function() {
                this.innerHTML = ""
            })
        },
        pluck: function(e) {
            return n.map(this,
            function(t) {
                return t[e]
            })
        },
        show: function() {
            return this.each(function() {
                this.style.display == "none" && (this.style.display = ""),
                getComputedStyle(this, "").getPropertyValue("display") == "none" && (this.style.display = W(this.nodeName))
            })
        },
        replaceWith: function(e) {
            return this.before(e).remove()
        },
        wrap: function(e) {
            var t = D(e);
            if (this[0] && !t) var r = n(e).get(0),
            i = r.parentNode || this.length > 1;
            return this.each(function(s) {
                n(this).wrapAll(t ? e.call(this, s) : i ? r.cloneNode(!0) : r)
            })
        },
        wrapAll: function(e) {
            if (this[0]) {
                n(this[0]).before(e = n(e));
                var t;
                while ((t = e.children()).length) e = t.first();
                n(e).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            var t = D(e);
            return this.each(function(r) {
                var i = n(this),
                s = i.contents(),
                o = t ? e.call(this, r) : e;
                s.length ? s.wrapAll(o) : i.append(o)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n(this).replaceWith(n(this).children())
            }),
            this
        },
        clone: function() {
            return this.map(function() {
                return this.cloneNode(!0)
            })
        },
        hide: function() {
            return this.css("display", "none")
        },
        toggle: function(t) {
            return this.each(function() {
                var r = n(this); (t === e ? r.css("display") == "none": t) ? r.show() : r.hide()
            })
        },
        prev: function(e) {
            return n(this.pluck("previousElementSibling")).filter(e || "*")
        },
        next: function(e) {
            return n(this.pluck("nextElementSibling")).filter(e || "*")
        },
        html: function(e) {
            return 0 in arguments ? this.each(function(t) {
                var r = this.innerHTML;
                n(this).empty().append(K(this, e, t, r))
            }) : 0 in this ? this[0].innerHTML: null
        },
        text: function(e) {
            return 0 in arguments ? this.each(function(t) {
                var n = K(this, e, t, this.textContent);
                this.textContent = n == null ? "": "" + n
            }) : 0 in this ? this[0].textContent: null
        },
        attr: function(n, r) {
            var i;
            return typeof n != "string" || 1 in arguments ? this.each(function(e) {
                if (this.nodeType !== 1) return;
                if (B(n)) for (t in n) Q(this, t, n[t]);
                else Q(this, n, K(this, r, e, this.getAttribute(n)))
            }) : !this.length || this[0].nodeType !== 1 ? e: !(i = this[0].getAttribute(n)) && n in this[0] ? this[0][n] : i
        },
        removeAttr: function(e) {
            return this.each(function() {
                this.nodeType === 1 && e.split(" ").forEach(function(e) {
                    Q(this, e)
                },
                this)
            })
        },
        prop: function(e, t) {
            return e = O[e] || e,
            1 in arguments ? this.each(function(n) {
                this[e] = K(this, t, n, this[e])
            }) : this[0] && this[0][e]
        },
        data: function(t, n) {
            var r = "data-" + t.replace(m, "-$1").toLowerCase(),
            i = 1 in arguments ? this.attr(r, n) : this.attr(r);
            return i !== null ? Y(i) : e
        },
        val: function(e) {
            return 0 in arguments ? this.each(function(t) {
                this.value = K(this, e, t, this.value)
            }) : this[0] && (this[0].multiple ? n(this[0]).find("option").filter(function() {
                return this.selected
            }).pluck("value") : this[0].value)
        },
        offset: function(e) {
            if (e) return this.each(function(t) {
                var r = n(this),
                i = K(this, e, t, r.offset()),
                s = r.offsetParent().offset(),
                o = {
                    top: i.top - s.top,
                    left: i.left - s.left
                };
                r.css("position") == "static" && (o.position = "relative"),
                r.css(o)
            });
            if (!this.length) return null;
            if (!n.contains(a.documentElement, this[0])) return {
                top: 0,
                left: 0
            };
            var t = this[0].getBoundingClientRect();
            return {
                left: t.left + window.pageXOffset,
                top: t.top + window.pageYOffset,
                width: Math.round(t.width),
                height: Math.round(t.height)
            }
        },
        css: function(e, r) {
            if (arguments.length < 2) {
                var i, s = this[0];
                if (!s) return;
                i = getComputedStyle(s, "");
                if (typeof e == "string") return s.style[k(e)] || i.getPropertyValue(e);
                if (M(e)) {
                    var o = {};
                    return n.each(e,
                    function(e, t) {
                        o[t] = s.style[k(t)] || i.getPropertyValue(t)
                    }),
                    o
                }
            }
            var u = "";
            if (_(e) == "string") ! r && r !== 0 ? this.each(function() {
                this.style.removeProperty(R(e))
            }) : u = R(e) + ":" + z(e, r);
            else for (t in e) ! e[t] && e[t] !== 0 ? this.each(function() {
                this.style.removeProperty(R(t))
            }) : u += R(t) + ":" + z(t, e[t]) + ";";
            return this.each(function() {
                this.style.cssText += ";" + u
            })
        },
        index: function(e) {
            return e ? this.indexOf(n(e)[0]) : this.parent().children().indexOf(this[0])
        },
        hasClass: function(e) {
            return e ? i.some.call(this,
            function(e) {
                return this.test(G(e))
            },
            U(e)) : !1
        },
        addClass: function(e) {
            return e ? this.each(function(t) {
                if (! ("className" in this)) return;
                r = [];
                var i = G(this),
                s = K(this, e, t, i);
                s.split(/\s+/g).forEach(function(e) {
                    n(this).hasClass(e) || r.push(e)
                },
                this),
                r.length && G(this, i + (i ? " ": "") + r.join(" "))
            }) : this
        },
        removeClass: function(t) {
            return this.each(function(n) {
                if (! ("className" in this)) return;
                if (t === e) return G(this, "");
                r = G(this),
                K(this, t, n, r).split(/\s+/g).forEach(function(e) {
                    r = r.replace(U(e), " ")
                }),
                G(this, r.trim())
            })
        },
        toggleClass: function(t, r) {
            return t ? this.each(function(i) {
                var s = n(this),
                o = K(this, t, i, G(this));
                o.split(/\s+/g).forEach(function(t) { (r === e ? !s.hasClass(t) : r) ? s.addClass(t) : s.removeClass(t)
                })
            }) : this
        },
        scrollTop: function(t) {
            if (!this.length) return;
            var n = "scrollTop" in this[0];
            return t === e ? n ? this[0].scrollTop: this[0].pageYOffset: this.each(n ?
            function() {
                this.scrollTop = t
            }: function() {
                this.scrollTo(this.scrollX, t)
            })
        },
        scrollLeft: function(t) {
            if (!this.length) return;
            var n = "scrollLeft" in this[0];
            return t === e ? n ? this[0].scrollLeft: this[0].pageXOffset: this.each(n ?
            function() {
                this.scrollLeft = t
            }: function() {
                this.scrollTo(t, this.scrollY)
            })
        },
        position: function() {
            if (!this.length) return;
            var e = this[0],
            t = this.offsetParent(),
            r = this.offset(),
            i = v.test(t[0].nodeName) ? {
                top: 0,
                left: 0
            }: t.offset();
            return r.top -= parseFloat(n(e).css("margin-top")) || 0,
            r.left -= parseFloat(n(e).css("margin-left")) || 0,
            i.top += parseFloat(n(t[0]).css("border-top-width")) || 0,
            i.left += parseFloat(n(t[0]).css("border-left-width")) || 0,
            {
                top: r.top - i.top,
                left: r.left - i.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || a.body;
                while (e && !v.test(e.nodeName) && n(e).css("position") == "static") e = e.offsetParent;
                return e
            })
        }
    },
    n.fn.detach = n.fn.remove,
    ["width", "height"].forEach(function(t) {
        var r = t.replace(/./,
        function(e) {
            return e[0].toUpperCase()
        });
        n.fn[t] = function(i) {
            var s, o = this[0];
            return i === e ? P(o) ? o["inner" + r] : H(o) ? o.documentElement["scroll" + r] : (s = this.offset()) && s[t] : this.each(function(e) {
                o = n(this),
                o.css(t, K(this, i, e, o[t]()))
            })
        }
    }),
    y.forEach(function(e, t) {
        var r = t % 2;
        n.fn[e] = function() {
            var e, i = n.map(arguments,
            function(t) {
                return e = _(t),
                e == "object" || e == "array" || t == null ? t: C.fragment(t)
            }),
            s,
            o = this.length > 1;
            return i.length < 1 ? this: this.each(function(e, u) {
                s = r ? u: u.parentNode,
                u = t == 0 ? u.nextSibling: t == 1 ? u.firstChild: t == 2 ? u: null;
                var f = n.contains(a.documentElement, s);
                i.forEach(function(e) {
                    if (o) e = e.cloneNode(!0);
                    else if (!s) return n(e).remove();
                    s.insertBefore(e, u),
                    f && Z(e,
                    function(e) {
                        e.nodeName != null && e.nodeName.toUpperCase() === "SCRIPT" && (!e.type || e.type === "text/javascript") && !e.src && window.eval.call(window, e.innerHTML)
                    })
                })
            })
        },
        n.fn[r ? e + "To": "insert" + (t ? "Before": "After")] = function(t) {
            return n(t)[e](this),
            this
        }
    }),
    C.Z.prototype = V.prototype = n.fn,
    C.uniq = L,
    C.deserializeValue = Y,
    n.zepto = C,
    n
} ();
window.Zepto = Zepto,
window.$ === undefined && (window.$ = Zepto); (function(e) {
    function a(e, t, n, r) {
        return Math.abs(e - t) >= Math.abs(n - r) ? e - t > 0 ? "Left": "Right": n - r > 0 ? "Up": "Down"
    }
    function f() {
        s = null,
        t.last && (t.el.trigger("longTap"), t = {})
    }
    function l() {
        s && clearTimeout(s),
        s = null
    }
    function c() {
        n && clearTimeout(n),
        r && clearTimeout(r),
        i && clearTimeout(i),
        s && clearTimeout(s),
        n = r = i = s = null,
        t = {}
    }
    function h(e) {
        return (e.pointerType == "touch" || e.pointerType == e.MSPOINTER_TYPE_TOUCH) && e.isPrimary
    }
    function p(e, t) {
        return e.type == "pointer" + t || e.type.toLowerCase() == "mspointer" + t
    }
    var t = {},
    n, r, i, s, o = 750,
    u;
    e(document).ready(function() {
        var d, v, m = 0,
        g = 0,
        y, b;
        "MSGesture" in window && (u = new MSGesture, u.target = document.body),
        e(document).bind("MSGestureEnd",
        function(e) {
            var n = e.velocityX > 1 ? "Right": e.velocityX < -1 ? "Left": e.velocityY > 1 ? "Down": e.velocityY < -1 ? "Up": null;
            n && (t.el.trigger("swipe"), t.el.trigger("swipe" + n))
        }).on("touchstart MSPointerDown pointerdown",
        function(r) {
            if ((b = p(r, "down")) && !h(r)) return;
            y = b ? r: r.touches[0],
            r.touches && r.touches.length === 1 && t.x2 && (t.x2 = undefined, t.y2 = undefined),
            d = Date.now(),
            v = d - (t.last || d),
            t.el = e("tagName" in y.target ? y.target: y.target.parentNode),
            n && clearTimeout(n),
            t.x1 = y.pageX,
            t.y1 = y.pageY,
            v > 0 && v <= 250 && (t.isDoubleTap = !0),
            t.last = d,
            s = setTimeout(f, o),
            u && b && u.addPointer(r.pointerId)
        }).on("touchmove MSPointerMove pointermove",
        function(e) {
            if ((b = p(e, "move")) && !h(e)) return;
            y = b ? e: e.touches[0],
            l(),
            t.x2 = y.pageX,
            t.y2 = y.pageY,
            m += Math.abs(t.x1 - t.x2),
            g += Math.abs(t.y1 - t.y2)
        }).on("touchend MSPointerUp pointerup",
        function(s) {
            if ((b = p(s, "up")) && !h(s)) return;
            l(),
            t.x2 && Math.abs(t.x1 - t.x2) > 30 || t.y2 && Math.abs(t.y1 - t.y2) > 30 ? i = setTimeout(function() {
                t.el.trigger("swipe"),
                t.el.trigger("swipe" + a(t.x1, t.x2, t.y1, t.y2)),
                t = {}
            },
            0) : "last" in t && (m < 30 && g < 30 ? r = setTimeout(function() {
                var r = e.Event("tap");
                r.cancelTouch = c,
                t.el.trigger(r),
                t.isDoubleTap ? (t.el && t.el.trigger("doubleTap"), t = {}) : n = setTimeout(function() {
                    n = null,
                    t.el && t.el.trigger("singleTap"),
                    t = {}
                },
                250)
            },
            0) : t = {}),
            m = g = 0
        }).on("touchcancel MSPointerCancel pointercancel", c),
        e(window).on("scroll", c)
    }),
    ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(t) {
        e.fn[t] = function(e) {
            return this.on(t, e)
        }
    })
})(Zepto); (function(e) {
    function c(e) {
        return e._zid || (e._zid = t++)
    }
    function h(e, t, n, r) {
        t = p(t);
        if (t.ns) var i = d(t.ns);
        return (o[c(e)] || []).filter(function(e) {
            return e && (!t.e || e.e == t.e) && (!t.ns || i.test(e.ns)) && (!n || c(e.fn) === c(n)) && (!r || e.sel == r)
        })
    }
    function p(e) {
        var t = ("" + e).split(".");
        return {
            e: t[0],
            ns: t.slice(1).sort().join(" ")
        }
    }
    function d(e) {
        return new RegExp("(?:^| )" + e.replace(" ", " .* ?") + "(?: |$)")
    }
    function v(e, t) {
        return e.del && !a && e.e in f || !!t
    }
    function m(e) {
        return l[e] || a && f[e] || e
    }
    function g(t, r, i, s, u, a, f) {
        var h = c(t),
        d = o[h] || (o[h] = []);
        r.split(/\s/).forEach(function(r) {
            if (r == "ready") return e(document).ready(i);
            var o = p(r);
            o.fn = i,
            o.sel = u,
            o.e in l && (i = function(t) {
                var n = t.relatedTarget;
                if (!n || n !== this && !e.contains(this, n)) return o.fn.apply(this, arguments)
            }),
            o.del = a;
            var c = a || i;
            o.proxy = function(e) {
                e = x(e);
                if (e.isImmediatePropagationStopped()) return;
                e.data = s;
                var r = c.apply(t, e._args == n ? [e] : [e].concat(e._args));
                return r === !1 && (e.preventDefault(), e.stopPropagation()),
                r
            },
            o.i = d.length,
            d.push(o),
            "addEventListener" in t && t.addEventListener(m(o.e), o.proxy, v(o, f))
        })
    }
    function y(e, t, n, r, i) {
        var s = c(e); (t || "").split(/\s/).forEach(function(t) {
            h(e, t, n, r).forEach(function(t) {
                delete o[s][t.i],
                "removeEventListener" in e && e.removeEventListener(m(t.e), t.proxy, v(t, i))
            })
        })
    }
    function x(t, r) {
        if (r || !t.isDefaultPrevented) {
            r || (r = t),
            e.each(S,
            function(e, n) {
                var i = r[e];
                t[e] = function() {
                    return this[n] = b,
                    i && i.apply(r, arguments)
                },
                t[n] = w
            });
            if (r.defaultPrevented !== n ? r.defaultPrevented: "returnValue" in r ? r.returnValue === !1 : r.getPreventDefault && r.getPreventDefault()) t.isDefaultPrevented = b
        }
        return t
    }
    function T(e) {
        var t, r = {
            originalEvent: e
        };
        for (t in e) ! E.test(t) && e[t] !== n && (r[t] = e[t]);
        return x(r, e)
    }
    var t = 1,
    n, r = Array.prototype.slice,
    i = e.isFunction,
    s = function(e) {
        return typeof e == "string"
    },
    o = {},
    u = {},
    a = "onfocusin" in window,
    f = {
        focus: "focusin",
        blur: "focusout"
    },
    l = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    u.click = u.mousedown = u.mouseup = u.mousemove = "MouseEvents",
    e.event = {
        add: g,
        remove: y
    },
    e.proxy = function(t, n) {
        var o = 2 in arguments && r.call(arguments, 2);
        if (i(t)) {
            var u = function() {
                return t.apply(n, o ? o.concat(r.call(arguments)) : arguments)
            };
            return u._zid = c(t),
            u
        }
        if (s(n)) return o ? (o.unshift(t[n], t), e.proxy.apply(null, o)) : e.proxy(t[n], t);
        throw new TypeError("expected function")
    },
    e.fn.bind = function(e, t, n) {
        return this.on(e, t, n)
    },
    e.fn.unbind = function(e, t) {
        return this.off(e, t)
    },
    e.fn.one = function(e, t, n, r) {
        return this.on(e, t, n, r, 1)
    };
    var b = function() {
        return ! 0
    },
    w = function() {
        return ! 1
    },
    E = /^([A-Z]|returnValue$|layer[XY]$)/,
    S = {
        preventDefault: "isDefaultPrevented",
        stopImmediatePropagation: "isImmediatePropagationStopped",
        stopPropagation: "isPropagationStopped"
    };
    e.fn.delegate = function(e, t, n) {
        return this.on(t, e, n)
    },
    e.fn.undelegate = function(e, t, n) {
        return this.off(t, e, n)
    },
    e.fn.live = function(t, n) {
        return e(document.body).delegate(this.selector, t, n),
        this
    },
    e.fn.die = function(t, n) {
        return e(document.body).undelegate(this.selector, t, n),
        this
    },
    e.fn.on = function(t, o, u, a, f) {
        var l, c, h = this;
        if (t && !s(t)) return e.each(t,
        function(e, t) {
            h.on(e, o, u, t, f)
        }),
        h; ! s(o) && !i(a) && a !== !1 && (a = u, u = o, o = n);
        if (a === n || u === !1) a = u,
        u = n;
        return a === !1 && (a = w),
        h.each(function(n, i) {
            f && (l = function(e) {
                return y(i, e.type, a),
                a.apply(this, arguments)
            }),
            o && (c = function(t) {
                var n, s = e(t.target).closest(o, i).get(0);
                if (s && s !== i) return n = e.extend(T(t), {
                    currentTarget: s,
                    liveFired: i
                }),
                (l || a).apply(s, [n].concat(r.call(arguments, 1)))
            }),
            g(i, t, a, u, o, c || l)
        })
    },
    e.fn.off = function(t, r, o) {
        var u = this;
        return t && !s(t) ? (e.each(t,
        function(e, t) {
            u.off(e, r, t)
        }), u) : (!s(r) && !i(o) && o !== !1 && (o = r, r = n), o === !1 && (o = w), u.each(function() {
            y(this, t, o, r)
        }))
    },
    e.fn.trigger = function(t, n) {
        return t = s(t) || e.isPlainObject(t) ? e.Event(t) : x(t),
        t._args = n,
        this.each(function() {
            t.type in f && typeof this[t.type] == "function" ? this[t.type]() : "dispatchEvent" in this ? this.dispatchEvent(t) : e(this).triggerHandler(t, n)
        })
    },
    e.fn.triggerHandler = function(t, n) {
        var r, i;
        return this.each(function(o, u) {
            r = T(s(t) ? e.Event(t) : t),
            r._args = n,
            r.target = u,
            e.each(h(u, t.type || t),
            function(e, t) {
                i = t.proxy(r);
                if (r.isImmediatePropagationStopped()) return ! 1
            })
        }),
        i
    },
    "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t) {
        e.fn[t] = function(e) {
            return 0 in arguments ? this.bind(t, e) : this.trigger(t)
        }
    }),
    e.Event = function(e, t) {
        s(e) || (t = e, e = t.type);
        var n = document.createEvent(u[e] || "Events"),
        r = !0;
        if (t) for (var i in t) i == "bubbles" ? r = !!t[i] : n[i] = t[i];
        return n.initEvent(e, r, !0),
        x(n)
    }
})(Zepto); (function(e) {
    e.Callbacks = function(t) {
        t = e.extend({},
        t);
        var n, r, i, s, o, u, a = [],
        f = !t.once && [],
        l = function(e) {
            n = t.memory && e,
            r = !0,
            u = s || 0,
            s = 0,
            o = a.length,
            i = !0;
            for (; a && u < o; ++u) if (a[u].apply(e[0], e[1]) === !1 && t.stopOnFalse) {
                n = !1;
                break
            }
            i = !1,
            a && (f ? f.length && l(f.shift()) : n ? a.length = 0 : c.disable())
        },
        c = {
            add: function() {
                if (a) {
                    var r = a.length,
                    u = function(n) {
                        e.each(n,
                        function(e, n) {
                            typeof n == "function" ? (!t.unique || !c.has(n)) && a.push(n) : n && n.length && typeof n != "string" && u(n)
                        })
                    };
                    u(arguments),
                    i ? o = a.length: n && (s = r, l(n))
                }
                return this
            },
            remove: function() {
                return a && e.each(arguments,
                function(t, n) {
                    var r;
                    while ((r = e.inArray(n, a, r)) > -1) a.splice(r, 1),
                    i && (r <= o && --o, r <= u && --u)
                }),
                this
            },
            has: function(t) {
                return !! a && !!(t ? e.inArray(t, a) > -1 : a.length)
            },
            empty: function() {
                return o = a.length = 0,
                this
            },
            disable: function() {
                return a = f = n = undefined,
                this
            },
            disabled: function() {
                return ! a
            },
            lock: function() {
                return f = undefined,
                n || c.disable(),
                this
            },
            locked: function() {
                return ! f
            },
            fireWith: function(e, t) {
                return a && (!r || f) && (t = t || [], t = [e, t.slice ? t.slice() : t], i ? f.push(t) : l(t)),
                this
            },
            fire: function() {
                return c.fireWith(this, arguments)
            },
            fired: function() {
                return !! r
            }
        };
        return c
    }
})(Zepto); (function(e) {
    function n(t) {
        var r = [["resolve", "done", e.Callbacks({
            once: 1,
            memory: 1
        }), "resolved"], ["reject", "fail", e.Callbacks({
            once: 1,
            memory: 1
        }), "rejected"], ["notify", "progress", e.Callbacks({
            memory: 1
        })]],
        i = "pending",
        s = {
            state: function() {
                return i
            },
            always: function() {
                return o.done(arguments).fail(arguments),
                this
            },
            then: function() {
                var t = arguments;
                return n(function(n) {
                    e.each(r,
                    function(r, i) {
                        var u = e.isFunction(t[r]) && t[r];
                        o[i[1]](function() {
                            var t = u && u.apply(this, arguments);
                            if (t && e.isFunction(t.promise)) t.promise().done(n.resolve).fail(n.reject).progress(n.notify);
                            else {
                                var r = this === s ? n.promise() : this,
                                o = u ? [t] : arguments;
                                n[i[0] + "With"](r, o)
                            }
                        })
                    }),
                    t = null
                }).promise()
            },
            promise: function(t) {
                return t != null ? e.extend(t, s) : s
            }
        },
        o = {};
        return e.each(r,
        function(e, t) {
            var n = t[2],
            u = t[3];
            s[t[1]] = n.add,
            u && n.add(function() {
                i = u
            },
            r[e ^ 1][2].disable, r[2][2].lock),
            o[t[0]] = function() {
                return o[t[0] + "With"](this === o ? s: this, arguments),
                this
            },
            o[t[0] + "With"] = n.fireWith
        }),
        s.promise(o),
        t && t.call(o, o),
        o
    }
    var t = Array.prototype.slice;
    e.when = function(r) {
        var i = t.call(arguments),
        s = i.length,
        o = 0,
        u = s !== 1 || r && e.isFunction(r.promise) ? s: 0,
        a = u === 1 ? r: n(),
        f,
        l,
        c,
        h = function(e, n, r) {
            return function(i) {
                n[e] = this,
                r[e] = arguments.length > 1 ? t.call(arguments) : i,
                r === f ? a.notifyWith(n, r) : --u || a.resolveWith(n, r)
            }
        };
        if (s > 1) {
            f = new Array(s),
            l = new Array(s),
            c = new Array(s);
            for (; o < s; ++o) i[o] && e.isFunction(i[o].promise) ? i[o].promise().done(h(o, c, i)).fail(a.reject).progress(h(o, l, f)) : --u
        }
        return u || a.resolveWith(c, i),
        a.promise()
    },
    e.Deferred = n
})(Zepto); (function($) {
    function triggerAndReturn(e, t, n) {
        var r = $.Event(t);
        return $(e).trigger(r, n),
        !r.isDefaultPrevented()
    }
    function triggerGlobal(e, t, n, r) {
        if (e.global) return triggerAndReturn(t || document, n, r)
    }
    function ajaxStart(e) {
        e.global && $.active++===0 && triggerGlobal(e, null, "ajaxStart")
    }
    function ajaxStop(e) {
        e.global && !--$.active && triggerGlobal(e, null, "ajaxStop")
    }
    function ajaxBeforeSend(e, t) {
        var n = t.context;
        if (t.beforeSend.call(n, e, t) === !1 || triggerGlobal(t, n, "ajaxBeforeSend", [e, t]) === !1) return ! 1;
        triggerGlobal(t, n, "ajaxSend", [e, t])
    }
    function ajaxSuccess(e, t, n, r) {
        var i = n.context,
        s = "success";
        n.success.call(i, e, s, t),
        r && r.resolveWith(i, [e, s, t]),
        triggerGlobal(n, i, "ajaxSuccess", [t, n, e]),
        ajaxComplete(s, t, n)
    }
    function ajaxError(e, t, n, r, i) {
        var s = r.context;
        r.error.call(s, n, t, e),
        i && i.rejectWith(s, [n, t, e]),
        triggerGlobal(r, s, "ajaxError", [n, r, e || t]),
        ajaxComplete(t, n, r)
    }
    function ajaxComplete(e, t, n) {
        var r = n.context;
        n.complete.call(r, t, e),
        triggerGlobal(n, r, "ajaxComplete", [t, n]),
        ajaxStop(n)
    }
    function empty() {}
    function mimeToDataType(e) {
        return e && (e = e.split(";", 2)[0]),
        e && (e == htmlType ? "html": e == jsonType ? "json": scriptTypeRE.test(e) ? "script": xmlTypeRE.test(e) && "xml") || "text"
    }
    function appendQuery(e, t) {
        return t == "" ? e: (e + "&" + t).replace(/[&?]{1,2}/, "?")
    }
    function serializeData(e) {
        e.processData && e.data && $.type(e.data) != "string" && (e.data = $.param(e.data, e.traditional)),
        e.data && (!e.type || e.type.toUpperCase() == "GET") && (e.url = appendQuery(e.url, e.data), e.data = undefined)
    }
    function parseArguments(e, t, n, r) {
        return $.isFunction(t) && (r = n, n = t, t = undefined),
        $.isFunction(n) || (r = n, n = undefined),
        {
            url: e,
            data: t,
            success: n,
            dataType: r
        }
    }
    function serialize(e, t, n, r) {
        var i, s = $.isArray(t),
        o = $.isPlainObject(t);
        $.each(t,
        function(t, u) {
            i = $.type(u),
            r && (t = n ? r: r + "[" + (o || i == "object" || i == "array" ? t: "") + "]"),
            !r && s ? e.add(u.name, u.value) : i == "array" || !n && i == "object" ? serialize(e, u, n, t) : e.add(t, u)
        })
    }
    var jsonpID = 0,
    document = window.document,
    key, name, rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    scriptTypeRE = /^(?:text|application)\/javascript/i,
    xmlTypeRE = /^(?:text|application)\/xml/i,
    jsonType = "application/json",
    htmlType = "text/html",
    blankRE = /^\s*$/,
    originAnchor = document.createElement("a");
    originAnchor.href = window.location.href,
    $.active = 0,
    $.ajaxJSONP = function(e, t) {
        if ("type" in e) {
            var n = e.jsonpCallback,
            r = ($.isFunction(n) ? n() : n) || "jsonp" + ++jsonpID,
            i = document.createElement("script"),
            s = window[r],
            o,
            u = function(e) {
                $(i).triggerHandler("error", e || "abort")
            },
            a = {
                abort: u
            },
            f;
            return t && t.promise(a),
            $(i).on("load error",
            function(n, u) {
                clearTimeout(f),
                $(i).off().remove(),
                n.type == "error" || !o ? ajaxError(null, u || "error", a, e, t) : ajaxSuccess(o[0], a, e, t),
                window[r] = s,
                o && $.isFunction(s) && s(o[0]),
                s = o = undefined
            }),
            ajaxBeforeSend(a, e) === !1 ? (u("abort"), a) : (window[r] = function() {
                o = arguments
            },
            i.src = e.url.replace(/\?(.+)=\?/, "?$1=" + r), document.head.appendChild(i), e.timeout > 0 && (f = setTimeout(function() {
                u("timeout")
            },
            e.timeout)), a)
        }
        return $.ajax(e)
    },
    $.ajaxSettings = {
        type: "GET",
        beforeSend: empty,
        success: empty,
        error: empty,
        complete: empty,
        context: null,
        global: !0,
        xhr: function() {
            return new window.XMLHttpRequest
        },
        accepts: {
            script: "text/javascript, application/javascript, application/x-javascript",
            json: jsonType,
            xml: "application/xml, text/xml",
            html: htmlType,
            text: "text/plain"
        },
        crossDomain: !1,
        timeout: 0,
        processData: !0,
        cache: !0
    },
    $.ajax = function(options) {
        var settings = $.extend({},
        options || {}),
        deferred = $.Deferred && $.Deferred(),
        urlAnchor,
        hashIndex;
        for (key in $.ajaxSettings) settings[key] === undefined && (settings[key] = $.ajaxSettings[key]);
        ajaxStart(settings),
        settings.crossDomain || (urlAnchor = document.createElement("a"), urlAnchor.href = settings.url, urlAnchor.href = urlAnchor.href, settings.crossDomain = originAnchor.protocol + "//" + originAnchor.host != urlAnchor.protocol + "//" + urlAnchor.host),
        settings.url || (settings.url = window.location.toString()),
        (hashIndex = settings.url.indexOf("#")) > -1 && (settings.url = settings.url.slice(0, hashIndex)),
        serializeData(settings);
        var dataType = settings.dataType,
        hasPlaceholder = /\?.+=\?/.test(settings.url);
        hasPlaceholder && (dataType = "jsonp");
        if (settings.cache === !1 || (!options || options.cache !== !0) && ("script" == dataType || "jsonp" == dataType)) settings.url = appendQuery(settings.url, "_=" + Date.now());
        if ("jsonp" == dataType) return hasPlaceholder || (settings.url = appendQuery(settings.url, settings.jsonp ? settings.jsonp + "=?": settings.jsonp === !1 ? "": "callback=?")),
        $.ajaxJSONP(settings, deferred);
        var mime = settings.accepts[dataType],
        headers = {},
        setHeader = function(e, t) {
            headers[e.toLowerCase()] = [e, t]
        },
        protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1: window.location.protocol,
        xhr = settings.xhr(),
        nativeSetHeader = xhr.setRequestHeader,
        abortTimeout;
        deferred && deferred.promise(xhr),
        settings.crossDomain || setHeader("X-Requested-With", "XMLHttpRequest"),
        setHeader("Accept", mime || "*/*");
        if (mime = settings.mimeType || mime) mime.indexOf(",") > -1 && (mime = mime.split(",", 2)[0]),
        xhr.overrideMimeType && xhr.overrideMimeType(mime); (settings.contentType || settings.contentType !== !1 && settings.data && settings.type.toUpperCase() != "GET") && setHeader("Content-Type", settings.contentType || "application/x-www-form-urlencoded");
        if (settings.headers) for (name in settings.headers) setHeader(name, settings.headers[name]);
        xhr.setRequestHeader = setHeader,
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                xhr.onreadystatechange = empty,
                clearTimeout(abortTimeout);
                var result, error = !1;
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304 || xhr.status == 0 && protocol == "file:") {
                    dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader("content-type")),
                    result = xhr.responseText;
                    try {
                        dataType == "script" ? (1, eval)(result) : dataType == "xml" ? result = xhr.responseXML: dataType == "json" && (result = blankRE.test(result) ? null: $.parseJSON(result))
                    } catch(e) {
                        error = e
                    }
                    error ? ajaxError(error, "parsererror", xhr, settings, deferred) : ajaxSuccess(result, xhr, settings, deferred)
                } else ajaxError(xhr.statusText || null, xhr.status ? "error": "abort", xhr, settings, deferred)
            }
        };
        if (ajaxBeforeSend(xhr, settings) === !1) return xhr.abort(),
        ajaxError(null, "abort", xhr, settings, deferred),
        xhr;
        if (settings.xhrFields) for (name in settings.xhrFields) xhr[name] = settings.xhrFields[name];
        var async = "async" in settings ? settings.async: !0;
        xhr.open(settings.type, settings.url, async, settings.username, settings.password);
        for (name in headers) nativeSetHeader.apply(xhr, headers[name]);
        return settings.timeout > 0 && (abortTimeout = setTimeout(function() {
            xhr.onreadystatechange = empty,
            xhr.abort(),
            ajaxError(null, "timeout", xhr, settings, deferred)
        },
        settings.timeout)),
		xhr.send(settings.data ? settings.data: null),
        xhr	
    },
    $.get = function() {
        return $.ajax(parseArguments.apply(null, arguments))
    },
    $.post = function() {
        var e = parseArguments.apply(null, arguments);
        return e.type = "POST",
        $.ajax(e)
    },
    $.getJSON = function() {
        var e = parseArguments.apply(null, arguments);
        return e.dataType = "json",
        $.ajax(e)
    },
    $.fn.load = function(e, t, n) {
        if (!this.length) return this;
        var r = this,
        i = e.split(/\s/),
        s,
        o = parseArguments(e, t, n),
        u = o.success;
        return i.length > 1 && (o.url = i[0], s = i[1]),
        o.success = function(e) {
            r.html(s ? $("<div>").html(e.replace(rscript, "")).find(s) : e),
            u && u.apply(r, arguments)
        },
        $.ajax(o),
        this
    };
    var escape = encodeURIComponent;
    $.param = function(e, t) {
        var n = [];
        return n.add = function(e, t) {
            $.isFunction(t) && (t = t()),
            t == null && (t = ""),
            this.push(escape(e) + "=" + escape(t))
        },
        serialize(n, e, t),
        n.join("&").replace(/%20/g, "+")
    }
})(Zepto); (function(e) {
    e.fn.serializeArray = function() {
        var t, n, r = [],
        i = function(e) {
            if (e.forEach) return e.forEach(i);
            r.push({
                name: t,
                value: e
            })
        };
        return this[0] && e.each(this[0].elements,
        function(r, s) {
            n = s.type,
            t = s.name,
            t && s.nodeName.toLowerCase() != "fieldset" && !s.disabled && n != "submit" && n != "reset" && n != "button" && n != "file" && (n != "radio" && n != "checkbox" || s.checked) && i(e(s).val())
        }),
        r
    },
    e.fn.serialize = function() {
        var e = [];
        return this.serializeArray().forEach(function(t) {
            e.push(encodeURIComponent(t.name) + "=" + encodeURIComponent(t.value))
        }),
        e.join("&")
    },
    e.fn.submit = function(t) {
        if (0 in arguments) this.bind("submit", t);
        else if (this.length) {
            var n = e.Event("submit");
            this.eq(0).trigger(n),
            n.isDefaultPrevented() || this.get(0).submit()
        }
        return this
    }
})(Zepto); (function(e) {
    function i(t) {
        return t = e(t),
        ( !! t.width() || !!t.height()) && t.css("display") !== "none"
    }
    function f(e, t) {
        e = e.replace(/=#\]/g, '="#"]');
        var n, r, i = o.exec(e);
        if (i && i[2] in s) {
            n = s[i[2]],
            r = i[3],
            e = i[1];
            if (r) {
                var u = Number(r);
                isNaN(u) ? r = r.replace(/^["']|["']$/g, "") : r = u
            }
        }
        return t(e, n, r)
    }
    var t = e.zepto,
    n = t.qsa,
    r = t.matches,
    s = e.expr[":"] = {
        visible: function() {
            if (i(this)) return this
        },
        hidden: function() {
            if (!i(this)) return this
        },
        selected: function() {
            if (this.selected) return this
        },
        checked: function() {
            if (this.checked) return this
        },
        parent: function() {
            return this.parentNode
        },
        first: function(e) {
            if (e === 0) return this
        },
        last: function(e, t) {
            if (e === t.length - 1) return this
        },
        eq: function(e, t, n) {
            if (e === n) return this
        },
        contains: function(t, n, r) {
            if (e(this).text().indexOf(r) > -1) return this
        },
        has: function(e, n, r) {
            if (t.qsa(this, r).length) return this
        }
    },
    o = new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),
    u = /^\s*>/,
    a = "Zepto" + +(new Date);
    t.qsa = function(r, i) {
        return f(i,
        function(s, o, f) {
            try {
                var l; ! s && o ? s = "*": u.test(s) && (l = e(r).addClass(a), s = "." + a + " " + s);
                var c = n(r, s)
            } catch(h) {
                throw console.error("error performing selector: %o", i),
                h
            } finally {
                l && l.removeClass(a)
            }
            return o ? t.uniq(e.map(c,
            function(e, t) {
                return o.call(e, t, c, f)
            })) : c
        })
    },
    t.matches = function(e, t) {
        return f(t,
        function(t, n, i) {
            return (!t || r(e, t)) && (!n || n.call(e, null, i) === e)
        })
    }
})(Zepto); (function(e, t) {
    function g(e) {
        return e.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase()
    }
    function y(e) {
        return r ? r + e: e.toLowerCase()
    }
    var n = "",
    r, i = {
        Webkit: "webkit",
        Moz: "",
        O: "o"
    },
    s = document.createElement("div"),
    o = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
    u,
    a,
    f,
    l,
    c,
    h,
    p,
    d,
    v,
    m = {};
    e.each(i,
    function(e, i) {
        if (s.style[e + "TransitionProperty"] !== t) return n = "-" + e.toLowerCase() + "-",
        r = i,
        !1
    }),
    u = n + "transform",
    m[a = n + "transition-property"] = m[f = n + "transition-duration"] = m[c = n + "transition-delay"] = m[l = n + "transition-timing-function"] = m[h = n + "animation-name"] = m[p = n + "animation-duration"] = m[v = n + "animation-delay"] = m[d = n + "animation-timing-function"] = "",
    e.fx = {
        off: r === t && s.style.transitionProperty === t,
        speeds: {
            _default: 400,
            fast: 200,
            slow: 600
        },
        cssPrefix: n,
        transitionEnd: y("TransitionEnd"),
        animationEnd: y("AnimationEnd")
    },
    e.fn.animate = function(n, r, i, s, o) {
        return e.isFunction(r) && (s = r, i = t, r = t),
        e.isFunction(i) && (s = i, i = t),
        e.isPlainObject(r) && (i = r.easing, s = r.complete, o = r.delay, r = r.duration),
        r && (r = (typeof r == "number" ? r: e.fx.speeds[r] || e.fx.speeds._default) / 1e3),
        o && (o = parseFloat(o) / 1e3),
        this.anim(n, r, i, s, o)
    },
    e.fn.anim = function(n, r, i, s, y) {
        var b, w = {},
        E, S = "",
        x = this,
        T, N = e.fx.transitionEnd,
        C = !1;
        r === t && (r = e.fx.speeds._default / 1e3),
        y === t && (y = 0),
        e.fx.off && (r = 0);
        if (typeof n == "string") w[h] = n,
        w[p] = r + "s",
        w[v] = y + "s",
        w[d] = i || "linear",
        N = e.fx.animationEnd;
        else {
            E = [];
            for (b in n) o.test(b) ? S += b + "(" + n[b] + ") ": (w[b] = n[b], E.push(g(b)));
            S && (w[u] = S, E.push(u)),
            r > 0 && typeof n == "object" && (w[a] = E.join(", "), w[f] = r + "s", w[c] = y + "s", w[l] = i || "linear")
        }
        return T = function(t) {
            if (typeof t != "undefined") {
                if (t.target !== t.currentTarget) return;
                e(t.target).unbind(N, T)
            } else e(this).unbind(N, T);
            C = !0,
            e(this).css(m),
            s && s.call(this)
        },
        r > 0 && (this.bind(N, T), setTimeout(function() {
            if (C) return;
            T.call(x)
        },
        (r + y) * 1e3 + 25)),
        this.size() && this.get(0).clientLeft,
        this.css(w),
        r <= 0 && setTimeout(function() {
            x.each(function() {
                T.call(this)
            })
        },
        0),
        this
    },
    s = null
})(Zepto); (function(e) {
    function t(e, t) {
        var n = this.os = {},
        r = this.browser = {},
        i = e.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
        s = e.match(/(Android);?[\s\/]+([\d.]+)?/),
        o = !!e.match(/\(Macintosh\; Intel /),
        u = e.match(/(iPad).*OS\s([\d_]+)/),
        a = e.match(/(iPod)(.*OS\s([\d_]+))?/),
        f = !u && e.match(/(iPhone\sOS)\s([\d_]+)/),
        l = e.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
        c = /Win\d{2}|Windows/.test(t),
        h = e.match(/Windows Phone ([\d.]+)/),
        p = l && e.match(/TouchPad/),
        d = e.match(/Kindle\/([\d.]+)/),
        v = e.match(/Silk\/([\d._]+)/),
        m = e.match(/(BlackBerry).*Version\/([\d.]+)/),
        g = e.match(/(BB10).*Version\/([\d.]+)/),
        y = e.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
        b = e.match(/PlayBook/),
        w = e.match(/Chrome\/([\d.]+)/) || e.match(/CriOS\/([\d.]+)/),
        E = e.match(/Firefox\/([\d.]+)/),
        S = e.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/),
        x = e.match(/MSIE\s([\d.]+)/) || e.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
        T = !w && e.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
        N = T || e.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
        if (r.webkit = !!i) r.version = i[1];
        s && (n.android = !0, n.version = s[2]),
        f && !a && (n.ios = n.iphone = !0, n.version = f[2].replace(/_/g, ".")),
        u && (n.ios = n.ipad = !0, n.version = u[2].replace(/_/g, ".")),
        a && (n.ios = n.ipod = !0, n.version = a[3] ? a[3].replace(/_/g, ".") : null),
        h && (n.wp = !0, n.version = h[1]),
        l && (n.webos = !0, n.version = l[2]),
        p && (n.touchpad = !0),
        m && (n.blackberry = !0, n.version = m[2]),
        g && (n.bb10 = !0, n.version = g[2]),
        y && (n.rimtabletos = !0, n.version = y[2]),
        b && (r.playbook = !0),
        d && (n.kindle = !0, n.version = d[1]),
        v && (r.silk = !0, r.version = v[1]),
        !v && n.android && e.match(/Kindle Fire/) && (r.silk = !0),
        w && (r.chrome = !0, r.version = w[1]),
        E && (r.firefox = !0, r.version = E[1]),
        S && (n.firefoxos = !0, n.version = S[1]),
        x && (r.ie = !0, r.version = x[1]),
        N && (o || n.ios || c) && (r.safari = !0, n.ios || (r.version = N[1])),
        T && (r.webview = !0),
        n.tablet = !!(u || b || s && !e.match(/Mobile/) || E && e.match(/Tablet/) || x && !e.match(/Phone/) && e.match(/Touch/)),
        n.phone = !!(!n.tablet && !n.ipod && (s || f || l || m || g || w && e.match(/Android/) || w && e.match(/CriOS\/([\d.]+)/) || E && e.match(/Mobile/) || x && e.match(/Touch/)))
    }
    t.call(e, navigator.userAgent, navigator.platform),
    e.__detect = t
})(Zepto); (function(e, t) {
    function u(n, r, i, s, o) {
        typeof r == "function" && !o && (o = r, r = t);
        var u = {
            opacity: i
        };
        return s && (u.scale = s, n.css(e.fx.cssPrefix + "transform-origin", "0 0")),
        n.animate(u, r, null, o)
    }
    function a(t, n, r, i) {
        return u(t, n, 0, r,
        function() {
            s.call(e(this)),
            i && i.call(this)
        })
    }
    var n = window.document,
    r = n.documentElement,
    i = e.fn.show,
    s = e.fn.hide,
    o = e.fn.toggle;
    e.fn.show = function(e, n) {
        return i.call(this),
        e === t ? e = 0 : this.css("opacity", 0),
        u(this, e, 1, "", n)
    },
    e.fn.hide = function(e, n) {
        return e === t ? s.call(this) : a(this, e, "", n)
    },
    e.fn.toggle = function(n, r) {
        return n === t || typeof n == "boolean" ? o.call(this, n) : this.each(function() {
            var t = e(this);
            t[t.css("display") == "none" ? "show": "hide"](n, r)
        })
    },
    e.fn.fadeTo = function(e, t, n) {
        return u(this, e, t, null, n)
    },
    e.fn.fadeIn = function(e, t) {
        var n = this.css("opacity");
        return n > 0 ? this.css("opacity", 0) : n = 1,
        i.call(this).fadeTo(e, n, t)
    },
    e.fn.fadeOut = function(e, t) {
        return a(this, e, null, t)
    },
    e.fn.fadeToggle = function(t, n) {
        return this.each(function() {
            var r = e(this);
            r[r.css("opacity") == 0 || r.css("display") == "none" ? "fadeIn": "fadeOut"](t, n)
        })
    }
})(Zepto); (function(e) {
    e.extend(e, {
        now: function() {
            return (new Date).getTime()
        },
        isNumeric: function(e) {
            return ! isNaN(parseFloat(e)) && isFinite(e)
        },
        getScript: function(t) {
            return e.ajaxJSONP({
                url: t
            })
        },
        noop: function() {},
        hideScroll: function() {
            var t = document.getElementsByTagName("body")[0],
            n = window.innerHeight;
            document.documentElement.clientHeight < n && (t.style.height = n + "px"),
            scrollTo(0, 0),
            setTimeout(function() {
                var t = e.os.ios && e.os.version.split(".")[0] * 1 == 5;
                if (t) {
                    var n = e(".pick-b,.pk3bar"),
                    r = {
                        bottom: 0,
                        left: 0
                    };
                    n.css("position", "absolute");
                    var i = function() {
                        n.css({
                            top: window.pageYOffset + (r.bottom !== undefined ? window.innerHeight - n.height() - r.bottom: r.top || 0),
                            left: r.right !== undefined ? document.body.offsetWidth - n.width() - r.right: r.left || 0
                        })
                    };
                    n && (i(), e(window).on("scroll", i), e(window).on("ortchange", i), e(window).on("touchmove", i))
                }
            },
            250)
        },
        goAnimatetop: function() {
            window.scrollTo(0, 0)
        },
        md5: function(e) {
            function t(e, t) {
                return e << t | e >>> 32 - t
            }
            function n(e, t) {
                var n, r, i, s, o;
                return i = e & 2147483648,
                s = t & 2147483648,
                n = e & 1073741824,
                r = t & 1073741824,
                o = (e & 1073741823) + (t & 1073741823),
                n & r ? o ^ 2147483648 ^ i ^ s: n | r ? o & 1073741824 ? o ^ 3221225472 ^ i ^ s: o ^ 1073741824 ^ i ^ s: o ^ i ^ s
            }
            function r(e, t, n) {
                return e & t | ~e & n
            }
            function i(e, t, n) {
                return e & n | t & ~n
            }
            function s(e, t, n) {
                return e ^ t ^ n
            }
            function o(e, t, n) {
                return t ^ (e | ~n)
            }
            function u(e, i, s, o, u, a, f) {
                return e = n(e, n(n(r(i, s, o), u), f)),
                n(t(e, a), i)
            }
            function a(e, r, s, o, u, a, f) {
                return e = n(e, n(n(i(r, s, o), u), f)),
                n(t(e, a), r)
            }
            function f(e, r, i, o, u, a, f) {
                return e = n(e, n(n(s(r, i, o), u), f)),
                n(t(e, a), r)
            }
            function l(e, r, i, s, u, a, f) {
                return e = n(e, n(n(o(r, i, s), u), f)),
                n(t(e, a), r)
            }
            function c(e) {
                var t, n = e.length,
                r = n + 8,
                i = (r - r % 64) / 64,
                s = (i + 1) * 16,
                o = Array(s - 1),
                u = 0,
                a = 0;
                while (a < n) t = (a - a % 4) / 4,
                u = a % 4 * 8,
                o[t] = o[t] | e.charCodeAt(a) << u,
                a++;
                return t = (a - a % 4) / 4,
                u = a % 4 * 8,
                o[t] = o[t] | 128 << u,
                o[s - 2] = n << 3,
                o[s - 1] = n >>> 29,
                o
            }
            function h(e) {
                var t = "",
                n = "",
                r, i;
                for (i = 0; i <= 3; i++) r = e >>> i * 8 & 255,
                n = "0" + r.toString(16),
                t += n.substr(n.length - 2, 2);
                return t
            }
            var p = Array(),
            d,
            v,
            m,
            g,
            y,
            b,
            w,
            E,
            S,
            x = 7,
            T = 12,
            N = 17,
            C = 22,
            k = 5,
            L = 9,
            A = 14,
            O = 20,
            M = 4,
            _ = 11,
            D = 16,
            P = 23,
            H = 6,
            B = 10,
            j = 15,
            F = 21;
            p = c(e),
            b = 1732584193,
            w = 4023233417,
            E = 2562383102,
            S = 271733878;
            for (d = 0; d < p.length; d += 16) v = b,
            m = w,
            g = E,
            y = S,
            b = u(b, w, E, S, p[d + 0], x, 3614090360),
            S = u(S, b, w, E, p[d + 1], T, 3905402710),
            E = u(E, S, b, w, p[d + 2], N, 606105819),
            w = u(w, E, S, b, p[d + 3], C, 3250441966),
            b = u(b, w, E, S, p[d + 4], x, 4118548399),
            S = u(S, b, w, E, p[d + 5], T, 1200080426),
            E = u(E, S, b, w, p[d + 6], N, 2821735955),
            w = u(w, E, S, b, p[d + 7], C, 4249261313),
            b = u(b, w, E, S, p[d + 8], x, 1770035416),
            S = u(S, b, w, E, p[d + 9], T, 2336552879),
            E = u(E, S, b, w, p[d + 10], N, 4294925233),
            w = u(w, E, S, b, p[d + 11], C, 2304563134),
            b = u(b, w, E, S, p[d + 12], x, 1804603682),
            S = u(S, b, w, E, p[d + 13], T, 4254626195),
            E = u(E, S, b, w, p[d + 14], N, 2792965006),
            w = u(w, E, S, b, p[d + 15], C, 1236535329),
            b = a(b, w, E, S, p[d + 1], k, 4129170786),
            S = a(S, b, w, E, p[d + 6], L, 3225465664),
            E = a(E, S, b, w, p[d + 11], A, 643717713),
            w = a(w, E, S, b, p[d + 0], O, 3921069994),
            b = a(b, w, E, S, p[d + 5], k, 3593408605),
            S = a(S, b, w, E, p[d + 10], L, 38016083),
            E = a(E, S, b, w, p[d + 15], A, 3634488961),
            w = a(w, E, S, b, p[d + 4], O, 3889429448),
            b = a(b, w, E, S, p[d + 9], k, 568446438),
            S = a(S, b, w, E, p[d + 14], L, 3275163606),
            E = a(E, S, b, w, p[d + 3], A, 4107603335),
            w = a(w, E, S, b, p[d + 8], O, 1163531501),
            b = a(b, w, E, S, p[d + 13], k, 2850285829),
            S = a(S, b, w, E, p[d + 2], L, 4243563512),
            E = a(E, S, b, w, p[d + 7], A, 1735328473),
            w = a(w, E, S, b, p[d + 12], O, 2368359562),
            b = f(b, w, E, S, p[d + 5], M, 4294588738),
            S = f(S, b, w, E, p[d + 8], _, 2272392833),
            E = f(E, S, b, w, p[d + 11], D, 1839030562),
            w = f(w, E, S, b, p[d + 14], P, 4259657740),
            b = f(b, w, E, S, p[d + 1], M, 2763975236),
            S = f(S, b, w, E, p[d + 4], _, 1272893353),
            E = f(E, S, b, w, p[d + 7], D, 4139469664),
            w = f(w, E, S, b, p[d + 10], P, 3200236656),
            b = f(b, w, E, S, p[d + 13], M, 681279174),
            S = f(S, b, w, E, p[d + 0], _, 3936430074),
            E = f(E, S, b, w, p[d + 3], D, 3572445317),
            w = f(w, E, S, b, p[d + 6], P, 76029189),
            b = f(b, w, E, S, p[d + 9], M, 3654602809),
            S = f(S, b, w, E, p[d + 12], _, 3873151461),
            E = f(E, S, b, w, p[d + 15], D, 530742520),
            w = f(w, E, S, b, p[d + 2], P, 3299628645),
            b = l(b, w, E, S, p[d + 0], H, 4096336452),
            S = l(S, b, w, E, p[d + 7], B, 1126891415),
            E = l(E, S, b, w, p[d + 14], j, 2878612391),
            w = l(w, E, S, b, p[d + 5], F, 4237533241),
            b = l(b, w, E, S, p[d + 12], H, 1700485571),
            S = l(S, b, w, E, p[d + 3], B, 2399980690),
            E = l(E, S, b, w, p[d + 10], j, 4293915773),
            w = l(w, E, S, b, p[d + 1], F, 2240044497),
            b = l(b, w, E, S, p[d + 8], H, 1873313359),
            S = l(S, b, w, E, p[d + 15], B, 4264355552),
            E = l(E, S, b, w, p[d + 6], j, 2734768916),
            w = l(w, E, S, b, p[d + 13], F, 1309151649),
            b = l(b, w, E, S, p[d + 4], H, 4149444226),
            S = l(S, b, w, E, p[d + 11], B, 3174756917),
            E = l(E, S, b, w, p[d + 2], j, 718787259),
            w = l(w, E, S, b, p[d + 9], F, 3951481745),
            b = n(b, v),
            w = n(w, m),
            E = n(E, g),
            S = n(S, y);
            var I = h(b) + h(w) + h(E) + h(S);
            return I.toLowerCase()
        },
        hashencrypt: function(t) {
            return e.md5(Q.lottery.hashkey + "|" + t + "|" + Q.lottery.hashkey)
        },
        serialize: function(t, n, r, i) {
            var s, o = e.isArray(n);
            e.each(n,
            function(n, u) {
                s = e.type(u),
                i && (n = r ? i: i + "[" + (o ? "": n) + "]"),
                !i && o ? t.add(u.name, u.value) : s == "array" || !r && s == "object" ? this.serialize(t, u, r, n) : t.add(n, u)
            })
        },
        paramUncoding: function(e, t) {
            var n = [];
            return n.add = function(e, t) {
                this.push(e + "=" + t)
            },
            this.serialize(n, e, t),
            n.join("&").replace(/%20/g, "+")
        }
    })
})(Zepto),
function(e, t) {
    var n = navigator.userAgent,
    r = navigator.appVersion,
    i = e.browser;
    e.extend(i, {
        "360se": /360/i.test(n),
        qq: /qq/i.test(n),
        uc: /UC/i.test(n) || /UC/i.test(r)
    }),
    i.uc = i.uc || !i.qq && !i.chrome && !i.firefox && !/safari/i.test(n);
    try {
        i.version = i.uc ? r.match(/UC(?:Browser)?\/([\d.]+)/)[1] : i.qq ? n.match(/MQQBrowser\/([\d.]+)/)[1] : i.version
    } catch(s) {}
    e.support = e.extend(e.support || {},
    {
        orientation: !(i.uc || parseFloat(e.os.version) < 5 && (i.qq || i.chrome)) && !(e.os.android && parseFloat(e.os.version) > 3) && "orientation" in window && "onorientationchange" in window,
        touch: "ontouchend" in document,
        cssTransitions: "WebKitTransitionEvent" in window,
        has3d: "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix
    })
} (Zepto),
function(e) {
    e.matchMedia = function() {
        var t = 0,
        n = "gmu-media-detect",
        r = e.fx.transitionEnd,
        i = e.fx.cssPrefix,
        s = e("<style></style>").append("." + n + "{" + i + "transition: width 0.001ms; width: 0; position: absolute; top: -10000px;}\n").appendTo("head");
        return function(i) {
            var o = n + t++,
            u, a = [],
            f;
            return s.append("@media " + i + " { #" + o + " { width: 1px; } }\n"),
            "matchMedia" in window ? window.matchMedia(i) : (u = e('<div class="' + n + '" id="' + o + '"></div>').appendTo("body").on(r,
            function() {
                f.matches = u.width() === 1,
                e.each(a,
                function(t, n) {
                    e.isFunction(n) && n.call(f, f)
                })
            }), f = {
                matches: u.width() === 1,
                media: i,
                addListener: function(e) {
                    return a.push(e),
                    this
                },
                removeListener: function(e) {
                    var t = a.indexOf(e);
                    return~t && a.splice(t, 1),
                    this
                }
            },
            f)
        }
    } ()
} (Zepto),
$(function() {
    $.mediaQuery = {
        ortchange: "screen and (width: " + window.innerWidth + "px)"
    },
    $.matchMedia($.mediaQuery.ortchange).addListener(function() {
        $(window).trigger("ortchange")
    })
}),
$(function() {
    $.SHAKE = {
        SHAKE_THRESHOLD: 2e3,
        last_x: 0,
        last_y: 0,
        last_z: 0,
        lastUpdate: 0,
        sharkTimer: null
    },
    $.deviceMotionHandler = function(e) {
        var t = $.SHAKE,
        n, r, i, s = e.accelerationIncludingGravity,
        o, u = (new Date).getTime();
        if (u - t.lastUpdate > 100) {
            var a = u - t.lastUpdate;
            t.lastUpdate = u,
            n = s.x,
            r = s.y,
            i = s.z;
            var f = Math.abs(n + r + i - t.last_x - t.last_y - t.last_z) / a * 1e4;
            f > t.SHAKE_THRESHOLD && (t.sharkTimer && clearTimeout(t.sharkTimer), t.sharkTimer = setTimeout(function() {
                Q.mobile.firedeviceShake()
            },
            300)),
            t.last_x = n,
            t.last_y = r,
            t.last_z = i
        }
    }
}); (function(e) {
    var t = e.$,
    n = e.Math,
    r = e.document,
    i = e.Date,
    s = {
        version: "0.0.1",
        system: {},
        number: {},
        date: {},
        array: {},
        localstorage: {},
        string: {},
        cookie: {},
        countdown: {},
        lightBox: {},
        ui: {},
        mobile: {},
        lottery: {},
        html5: {},
        sec: {}
    };
    s.system.isMobile = function() {
        var t = e.navigator.userAgent,
        n = t.length,
        r = t.replace(/iPhone|iPad|Android|webOS|hpwOS|TouchPad|Kindle|Series60|BlackBerry|Silk|sony|nokia|mot|samsung|philips|ucweb|meizu|htc|nexusone|wap|lg|sharp|lenovo|Windows Phone/ig, "").length;
        return r != n
    } (),
    s.system.getFirefoxVersion = function() {
        var t = e.navigator.userAgent.toLowerCase(),
        n = 0;
        return s.system.isMobile && t.indexOf("firefox") >= 0 && (n = t.replace(/^.*firefox\/(\d+)\..*$/gi, "$1")),
        n * 1
    } (),
    s.system.isAndroidUC = function() {
        var n = s.system.isMobile && t.browser.uc;
        return n && (e.alert = function(e) {
            s.lightBox.alert({
                content: e,
                confirmFn: function() {
                    this.close()
                }
            })
        }),
        n
    } (),
    s.system.orientation = function() {
        return s.system.isMobile && "orientation" in e ? !!e.orientation: !1
    },
    s.localstorage.isStorage = function() {
        try {
            return "localStorage" in e && e.localStorage !== null && (e.localStorage.testfirefox4mobile = !0) && !0
        } catch(t) {
            return ! 1
        }
    } (),
    s.localstorage.getItem = function(t) {
        return s.localstorage.isStorage ? e.localStorage[t] || "": s.cookie.get(t)
    },
    s.localstorage.setItem = function(t, n) {
        s.localstorage.isStorage ? e.localStorage[t] = n: s.cookie.set({
            name: t,
            value: n,
            expires: 1
        })
    },
    s.localstorage.removeItem = function(t) {
        s.localstorage.isStorage ? e.localStorage.removeItem(t) : s.cookie.set({
            name: t,
            value: "",
            expires: -1
        })
    },
    s.number.format = function(e, t, r) {
        var i;
        t = typeof(t * 1) != "number" || isNaN(t * 1) ? 2 : n.abs(t),
        i = n.pow(10, t),
        e *= 1;
        var o = 9.9999e-11;
        switch (r) {
        case 1:
            e = n.ceil(e * i) / i;
            break;
        case - 1 : e = n.floor(e * i + o) / i;
            break;
        case 465:
            var u = n.floor(e * i + o) % 10 % 2,
            a = n.floor(e * i * 10 + o) % 10 == 5,
            f = a && !u ? 1 / i: 0;
            e = s.number.format(e, t) - f;
            break;
        default:
            e = (e * i + o) / i
        }
        return (e.toFixed(t) + "").replace(/^\./g, "0.").replace(/\.$/, "")
    },
    s.number.formatCurrency = function(e, t, n) {
        var r;
        return typeof t != "undefined" && (e = s.number.format(e, t, n)),
        r = (e + "").split("."),
        r[0] = r[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,"),
        (r[0] + (r.length == 2 ? "." + r[1] : "")).replace(/^\./g, "0.")
    },
    s.date.format = function(e, t) {
        var n, r, o, u, a, f, l;
        return e = typeof e == "object" ? e: new i(e * 1),
        t = t || "YYYY-MM-DD hh:mm:ss",
        n = e.getFullYear(),
        o = e.getMonth() + 1,
        u = e.getDate(),
        a = e.getHours(),
        f = e.getMinutes(),
        l = e.getSeconds(),
        r = (n + "").replace(/^\d\d/g, ""),
        o = o < 10 ? "0" + o: o,
        u = u < 10 ? "0" + u: u,
        a = a < 10 ? "0" + a: a,
        f = f < 10 ? "0" + f: f,
        l = l < 10 ? "0" + l: l,
        s.string.mulReplace(t, [[/YYYY/, n], [/YY/, r], [/MM/, o], [/DD/, u], [/hh/, a], [/mm/, f], [/ss/, l]])
    },
    s.date.boundDay = function(e) {
        var t = new i,
        n, r, s;
        return t.setDate(t.getDate() + e),
        n = t.getFullYear(),
        r = t.getMonth() + 1,
        s = t.getDate(),
        r = r < 10 ? "0" + r: r,
        s = s < 10 ? "0" + s: s,
        n + "-" + r + "-" + s
    },
    s.date.toDate = function(e) {
        var n, r, s;
        return n = t.trim(e).split(" "),
        r = n[0].split(/[\-\/]/),
        s = n[1] ? n[1].split(":") : [0, 0, 0],
        new i(r[0], r[1] - 1, r[2], s[0], s[1], s[2])
    },
    s.cookie.get = function(e, t) {
        var n = r.cookie.match(new RegExp("(^| )" + e + "=([^;])*", "gi")),
        i = n ? n[0].split(e + "=")[1] : "";
        return t ? i: decodeURIComponent(i)
    },
    s.cookie.set = s.cookie.del = function(e) {
        var t = [];
        t.push(e.name + "="),
        e.value && t.push(e.encode ? e.value: encodeURIComponent(e.value));
        if (e.expires) {
            var n = new i;
            n.setHours(0),
            n.setMinutes(0),
            n.setSeconds(0),
            n.setTime(n.getTime() + e.expires * 864e5),
            t.push(";expires=" + n.toGMTString())
        }
        e.domain && t.push(";domain=" + e.domain),
        t.push(";path=" + (e.path || "/")),
        e.secure && t.push(";secure"),
        r.cookie = t.join("")
    },
    s.array.remove = function(e, t) {
        var n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
    },
    s.number.aliquotsAndRemainder = function(e, t) {
        return [parseInt(e / t, 10), e % t]
    },
    s.number.perm = function(e, t) {
        if (e < t) return 0;
        var n = 1;
        for (var r = 0; r < t; r++) n *= e - r;
        return n
    },
    s.number.eachCombo = function(e, t) {
        var n = [];
        return function r(e, t, i) {
            if (i === 0) return n.push(e);
            for (var s = 0,
            o = t.length; s <= o - i; s++) r(e.concat(t[s]), t.slice(s + 1), i - 1)
        } ([], e, t),
        n
    },
    s.number.each_array_combo = function(e) {
        var t = 0,
        n = e.length,
        r = [],
        i,
        s = [];
        return s.push(e),
        function o(e) {
            var s = [];
            for (var u = 0,
            a = e.length; u < a; u++) for (var f = 0,
            l = e[u][t].length; f < l; f++) i = [].concat(e[u]),
            i.splice(t, 1, e[u][t][f]),
            s.push(i);
            t++;
            if (! (t < n)) {
                r = s;
                return
            }
            o(s)
        } (s),
        r
    },
    s.number.countzhh = function(e) {
        var n = [],
        r = e.length;
        for (var i = 0; i < r; i++) {
            var o = e[i].length;
            for (var u = 0; u < o; u++) e[i][u] = e[i][u].split("_");
            var a = s.number.each_array_combo(e[i]),
            f = [];
            t.each(a,
            function(e, n) {
                var r = {},
                i = [];
                t.each(n,
                function(e, t) {
                    var n = t.split("!");
                    r[n[0]] = n[1],
                    i.push(n[1] * 1)
                }),
                s.mobile.zhh_all ? t.param(r).indexOf("&") != -1 && f.push(i) : f.push(i)
            }),
            n = n.concat(f)
        }
        return n
    },
    s.number.each_vague_share = function(e, t, n, r) {
        var i = {},
        o = r[0] !== 0,
        u,
        a,
        f = n.length,
        l = t.length,
        c,
        h,
        p,
        d;
        for (var v = 0; v < f; v++) {
            a = n[v].split("*"),
            i[n[v]] = [];
            for (var m = r[0]; m <= r[1]; m++) {
                if (m > a[0]) break;
                c = s.number.eachCombo(e, a[0] - m),
                h = s.number.eachCombo(t, m);
                if (o) {
                    u = [],
                    d = c.length,
                    p = h.length;
                    for (var g = 0; g < d; g++) for (var y = 0; y < p; y++) u.push(c[g].concat(h[y]));
                    u[0] && typeof u[0][0] == "string" && u[0][0].indexOf("!") != -1 && (u = s.number.countzhh(u)),
                    i[n[v]] = i[n[v]].concat(u)
                } else c[0] && typeof c[0][0] == "string" && c[0][0].indexOf("!") != -1 && (c = s.number.countzhh(c)),
                i[n[v]] = i[n[v]].concat(c)
            }
        }
        return i
    },
    s.number.combo = function(e, t) {
        var n, r;
        e / 2 < t && (t = e - t);
        if (e < t || t < 0) return 0;
        if (e >= 0 && t === 0) return 1;
        n = 1,
        r = e;
        for (var i = 1; i <= t; i++) n *= i,
        i < t && (r *= e - i);
        return r / n
    },
    s.number.Cs = function(e, t) {
        var n = [];
        if (typeof e == "number") for (var r = 0; r < e; r++) n.push(r + 1);
        else n = e;
        var i = [];
        return function s(e, t, n) {
            if (n == 0) return i.push(e);
            for (var r = 0,
            o = t.length; r <= o - n; r++) s(e.concat(t[r]), t.slice(r + 1), n - 1)
        } ([], n, t),
        i
    },
    s.number.N1 = function(e, t) {
        var n = 0;
        if (t) {
            var r = e.length,
            i = s.number.Cs(r, t);
            for (var o = 0; o < i.length; o++) {
                var u = 1;
                for (var a = 0; a < i[o].length; a++) u *= e[i[o][a] - 1];
                n += u
            }
        } else n = 1;
        return n
    },
    s.number.N1d = function(e, t) {
        var n = [],
        r = [];
        try {
            for (var i = 0; i < e[1].length; i++) e[1][i] == 1 ? r.push(e[0][i]) : n.push(e[0][i])
        } catch(o) {
            return 0
        }
        return r.length <= t ? s.number.N1(n, t - r.length) * s.number.N1(r, r.length) : 0
    },
    s.number.N2SP = function(e, t) {
        var n = 0;
        if (t) {
            var r = e.length,
            i = s.number.Cs(r, t);
            for (var o = 0; o < i.length; o++) {
                var u = 1;
                for (var a = 0; a < i[o].length; a++) u *= e[i[o][a] - 1];
                n += u
            }
        } else n = 1;
        return n
    },
    s.number.N1SP = function(e, t, n) {
        var r = [],
        i = [];
        try {
            for (var o = 0; o < e[1].length; o++) e[1][o] == 1 ? i.push(e[0][o]) : r.push(e[0][o])
        } catch(u) {
            return 0
        }
        if (i.length <= t) {
            var a = 0,
            f = 1,
            l = s.number.Cs(r, t - i.length),
            c = s.number.Cs(i, i.length);
            for (var h = 0; h < c.length; h++) if (c[h]) for (var t = 0; t < c[h].length; t++) f *= c[h][t];
            for (var h = 0; h < l.length; h++) {
                var p = 1;
                for (var t = 0; t < l[h].length; t++) p *= l[h][t];
                var d = p * f * 2 * (s.mobile.backPerc || 1);
                d > 0 && d < 2 && (d = 2);
                var v = s.number.format(d, 3, -1);
                v = s.number.format(v, 2, 465),
                a += v * n
            }
            return a
        }
        return 0
    },
    s.number.sortNum = function(e, t) {
        var n = t != "desc" ?
        function(e, t) {
            return e - t
        }: function(e, t) {
            return t - e
        };
        return e instanceof Array ? e.sort(n) : e
    },
    s.number.random = function(e) {
        e = e || {
            min: 0,
            max: 9,
            size: 6
        },
        e.count = e.count || 1;
        var r = function(e) {
            var r, i, s = 0,
            o, u;
            o = (e.max + "").length,
            r = (e.share || []).toString(),
            r = r === "" ? [] : r.split(/[,\-_=+\|]/),
            u = r.length;
            if (u > 0 && e.max > 9) for (var a = 0; a < u; a++) r[a].length < o && (r[a] = "0000000000000000".substr(0, o - r[a].length) + r[a]);
            while (s < e.size) {
                i = n.floor(n.random() * (e.max - e.min + 1)) + e.min + "",
                i = "0000000000000000".substr(0, o - i.length) + i;
                if (e.repeat || !!e.repeat || t.inArray(i, r) == -1) r.push(i),
                s++
            }
            return ! e.sort || r.sort(),
            r
        },
        i = [];
        for (var s = 0; s < e.count; s++) i.push(r(e));
        return i
    },
    s.string.getUrlPath = function(t) {
        var n = e.location.protocol,
        r = e.location.host,
        i = "";
        n && r && (i = n + "//" + r);
        var s = t || "";
        return s && (/\?+/g.test(e.location.href) ? s = "&dest=" + s: s = "?dest=" + s),
        encodeURIComponent(e.location.href.replace(i, "") + s)
    },
    s.string.filterScript = function(e) {
        return e = e || "",
        e = decodeURIComponent(e),
        e = e.replace(/<.*>/g, ""),
        e = e.replace(/(java|vb|action)script/gi, ""),
        e = e.replace(/[\"\'][\s ]*([^=\"\'\s ]+[\s ]*=[\s ]*[\"\']?[^\"\']+[\"\']?)+/gi, ""),
        e
    },
    s.string.getHostName = function(e) {
        var t = new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),
        n = t.exec(e);
        return n ? n[1] : e
    },
    s.string.getUrlParam = function(t, n) {
        var r, i, s;
        return n = (n || e.location.href).split("#"),
        t.indexOf("#") != -1 ? s = n.length < 2 ? "": n[1] : s = n[0],
        r = s.match(new RegExp("(|[?&#])" + t.replace("#", "") + "=([^#&?]*)(\\s||$)", "gi")),
        r ? decodeURIComponent(r[0].split("=")[1]) : ""
    },
    s.string.getHash = function(e) {
        var t = e || location.hash;
        return t ? t.replace(/.*#/, "") : ""
    },
    s.string.getJsonHash = function(t) {
        var n = t || e.location.href;
        if (n.indexOf("#") < 0) return {};
        var r = n.split("#")[1];
        if (r === "") return {};
        r[r.length - 1] == "&" && (r = r.substr(0, r.length - 1)),
        r = r.replace(/"/ig, "'"),
        r = r.replace(/=/ig, '":"'),
        r = r.replace(/&/ig, '","'),
        r += '"',
        r = '{"' + r + "}";
        var i = JSON.parse(r);
        return i
    },
    s.string.setHash = function(t, n) {
        var r, i;
        typeof t == "object" ? (r = e.location.href, n = t) : r = t,
        r.indexOf("#") < 0 && (r += "#");
        var o = s.string.getJsonHash(r);
        for (var i in o) ! (i in n) && i !== "viewpath" && delete o[i];
        for (i in n) o[i] = n[i];
        r = r.split("#")[0] + "#";
        for (i in o) r += i + "=" + o[i] + "&";
        return r = r.substr(0, r.length - 1),
        r
    },
    s.string.getHashModelName = function(e) {
        var t = s.string.getHash();
        if (!t) return "";
        var n = t.split("&"),
        r;
        return e >= n.length ? r = n[0] : r = n[e],
        r.split("=")[0]
    },
    s.string.getHashActionName = function(e) {
        var t = s.string.getHash();
        if (!t) return "";
        var n = t.split("&"),
        r;
        return e >= n.length ? r = n[0] : r = n[e],
        r.split("=")[1]
    },
    s.string.mulReplace = function(e, t) {
        for (var n = 0,
        r = t.length; n < r; n++) e = e.replace(t[n][0], t[n][1]);
        return e
    },
    s.string.dbcTosbc = function(e) {
        return s.string.mulReplace(e, [[/[\uff01-\uff5e]/g,
        function(e) {
            return String.fromCharCode(e.charCodeAt(0) - 65248)
        }], [/\u3000/g, " "], [/\u3002/g, "."]])
    },
    s.string.getByteLength = function(e, t) {
        var n = 0,
        i, s, o;
        t = t ? t.toLowerCase() : r.charset || "";
        if (t === "utf-16" || t === "utf16") for (s = 0, o = e.length; s < o; s++) i = e.charCodeAt(s),
        i <= 65535 ? n += 2 : n += 4;
        else if (t === "utf-8" || t === "utf8") for (s = 0, o = e.length; s < o; s++) i = e.charCodeAt(s),
        i <= 127 ? n += 1 : i <= 2047 ? n += 2 : i <= 65535 ? n += 3 : n += 4;
        else for (s = 0, o = e.length; s < o; s++) i = e.charCodeAt(s),
        i <= 127 ? n += 1 : n += 2;
        return n
    },
    s.string.queryKey = function(t, n) {
        n = n || "search";
        var r = new RegExp("(^|&)" + t + "=([^&]*)(&|$)", "i"),
        i = e.location[n].substr(1).match(r);
        return i != null ? unescape(i[2]) : null
    },
    s.countdown.start = function(e) {
        return new s.countdown.Go(e)
    },
    s.countdown.count = 0,
    s.countdown.freq = 6e5,
    s.countdown.toDHMS = function(e) {
        var t, n, r;
        return t = s.number.aliquotsAndRemainder(e * 1, 864e5),
        n = s.number.aliquotsAndRemainder(t[1], 36e5),
        r = s.number.aliquotsAndRemainder(n[1], 6e4),
        [t[0], n[0], r[0], parseInt(r[1] / 1e3, 10)]
    },
    s.countdown.ct = (e.systemTime * 1e3 || t.now()) - t.now(),
    s.countdown.updateCT = function(n, r) {
        var i = function() {
            t.ajax({
                url: (s.lottery.serverTimeUrl || "about:blank") + "?r=" + t.now(),
                error: function() {
                    s.countdown.__updt = setTimeout(i, s.countdown.freq)
                },
                async: !1,
                success: function(r) {
                    s.countdown.ct = t.trim(r) * 1e3 - t.now(),
                    e.systemTime = r,
                    s.countdown.count > 0 && (s.countdown.__updt = setTimeout(i, s.countdown.freq)),
                    typeof n == "function" && n.call(null)
                }
            })
        };
        clearTimeout(s.countdown.__updt),
        i()
    },
    s.countdown.Go = function(e) {
        this.endTime = t.isNumeric(e.endTime) ? e.endTime * 1e3: s.date.toDate(e.endTime).getTime(),
        this.sid = e.sid,
        this.style = e.style || "DD\u5929hh\u5c0f\u65f6mm\u5206ss\u79d2",
        this.endStyle = e.endStyle || "\u8ba1\u65f6\u5df2\u7ed3\u675f",
        this.filter = e.filter || "",
        this.filled = e.filled,
        this.callback = typeof e.callback == "function" ? e.callback: t.noop,
        this.freq = (e.freq || s.countdown.freq) * 1,
        this.init()
    },
    s.countdown.Go.prototype = {
        init: function(e) {
            var r = this;
            s.countdown.count++,
            s.countdown.freq = n.min(this.freq, s.countdown.freq),
            s.countdown.updateCT(null, !0),
            function i() {
                var e, n;
                r.t = r.endTime - (t.now() + s.countdown.ct),
                r.t >= 1e3 ? (r.t < 2e3 && s.countdown.updateCT(null, !0), e = s.countdown.toDHMS(r.t), r.style.indexOf("DD") < 0 && (e[1] += e[0] * 24), r.style.indexOf("hh") < 0 && (e[2] += e[1] * 60), r.filled = typeof r.filled == "undefined" ? !0 : r.filled, r.filled && (e[1] = e[1] < 10 ? "0" + e[1] : e[1], e[2] = e[2] < 10 ? "0" + e[2] : e[2], e[3] = e[3] < 10 ? "0" + e[3] : e[3]), n = s.string.mulReplace(r.style, [[/DD/gi, e[0]], [/hh/gi, e[1]], [/mm/gi, e[2]], [/ss/gi, e[3]]]), typeof r.filter == "function" && (n = r.filter(n)), t(r.sid).html(n), setTimeout(i, 1e3)) : (t(r.sid).html(r.endStyle), s.countdown.count--, r.callback.call(r))
            } ()
        }
    },
    s.html5.translation = function(e, n, r) {
        var i = t.extend({
            duration: "0.3s",
            origin: "0 0"
        },
        n || {}),
        s = e.style; ! s.webkitTransitionProperty && (s.webkitTransitionProperty = "-webkit-transform"),
        s.webkitTransitionDuration !== i.duration && (s.webkitTransitionDuration = i.duration),
        s.webkitTransformOrigin !== i.origin && (s.webkitTransformOrigin = i.origin),
        s.webkitBackfaceVisibility !== "hidden" && (s.webkitBackfaceVisibility = "hidden"),
        s.webkitTransformStyle !== "preserve-3d" && (s.webkitTransformStyle = "preserve-3d");
        if (i.x != null || i.y != null) s.webkitTransform = "translate(" + (i.x ? i.x + "px,": "0,") + (i.y ? i.y + "px": "0") + ")",
        setTimeout(r, parseFloat(i.duration) * 1200)
    },
    s.number.pageHeight = function(e) {
        var t = r.body || r.documentElement;
        return /(height)/g.test(e) ? t.scrollHeight: t.scrollWidth
    },
    e.Q = e.kureicp = s
})(window); (function() {
    function i(e) {
        return p(c(m(e)))
    }
    function s(e) {
        return d(c(m(e)))
    }
    function o(e, t) {
        return v(c(m(e)), t)
    }
    function u(e, t) {
        return p(h(m(e), m(t)))
    }
    function a(e, t) {
        return d(h(m(e), m(t)))
    }
    function f(e, t, n) {
        return v(h(m(e), m(t)), n)
    }
    function l() {
        return i("abc").toLowerCase() == "900150983cd24fb0d6963f7d28e17f72"
    }
    function c(e) {
        return w(E(b(e), e.length * 8))
    }
    function h(e, t) {
        var n = b(e);
        n.length > 16 && (n = E(n, e.length * 8));
        var r = Array(16),
        i = Array(16);
        for (var s = 0; s < 16; s++) r[s] = n[s] ^ 909522486,
        i[s] = n[s] ^ 1549556828;
        var o = E(r.concat(b(t)), 512 + t.length * 8);
        return w(E(i.concat(o), 640))
    }
    function p(e) {
        try {
            n
        } catch(t) {
            n = 0
        }
        var r = n ? "0123456789ABCDEF": "0123456789abcdef",
        i = "",
        s;
        for (var o = 0; o < e.length; o++) s = e.charCodeAt(o),
        i += r.charAt(s >>> 4 & 15) + r.charAt(s & 15);
        return i
    }
    function d(e) {
        try {
            r
        } catch(t) {
            r = ""
        }
        var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        i = "",
        s = e.length;
        for (var o = 0; o < s; o += 3) {
            var u = e.charCodeAt(o) << 16 | (o + 1 < s ? e.charCodeAt(o + 1) << 8 : 0) | (o + 2 < s ? e.charCodeAt(o + 2) : 0);
            for (var a = 0; a < 4; a++) o * 8 + a * 6 > e.length * 8 ? i += r: i += n.charAt(u >>> 6 * (3 - a) & 63)
        }
        return i
    }
    function v(e, t) {
        var n = t.length,
        r, i, s, o, u, a = Array(Math.ceil(e.length / 2));
        for (r = 0; r < a.length; r++) a[r] = e.charCodeAt(r * 2) << 8 | e.charCodeAt(r * 2 + 1);
        var f = Math.ceil(e.length * 8 / (Math.log(t.length) / Math.log(2))),
        l = Array(f);
        for (i = 0; i < f; i++) {
            u = Array(),
            o = 0;
            for (r = 0; r < a.length; r++) {
                o = (o << 16) + a[r],
                s = Math.floor(o / n),
                o -= s * n;
                if (u.length > 0 || s > 0) u[u.length] = s
            }
            l[i] = o,
            a = u
        }
        var c = "";
        for (r = l.length - 1; r >= 0; r--) c += t.charAt(l[r]);
        return c
    }
    function m(e) {
        var t = "",
        n = -1,
        r, i;
        while (++n < e.length) r = e.charCodeAt(n),
        i = n + 1 < e.length ? e.charCodeAt(n + 1) : 0,
        55296 <= r && r <= 56319 && 56320 <= i && i <= 57343 && (r = 65536 + ((r & 1023) << 10) + (i & 1023), n++),
        r <= 127 ? t += String.fromCharCode(r) : r <= 2047 ? t += String.fromCharCode(192 | r >>> 6 & 31, 128 | r & 63) : r <= 65535 ? t += String.fromCharCode(224 | r >>> 12 & 15, 128 | r >>> 6 & 63, 128 | r & 63) : r <= 2097151 && (t += String.fromCharCode(240 | r >>> 18 & 7, 128 | r >>> 12 & 63, 128 | r >>> 6 & 63, 128 | r & 63));
        return t
    }
    function g(e) {
        var t = "";
        for (var n = 0; n < e.length; n++) t += String.fromCharCode(e.charCodeAt(n) & 255, e.charCodeAt(n) >>> 8 & 255);
        return t
    }
    function y(e) {
        var t = "";
        for (var n = 0; n < e.length; n++) t += String.fromCharCode(e.charCodeAt(n) >>> 8 & 255, e.charCodeAt(n) & 255);
        return t
    }
    function b(e) {
        var t = Array(e.length >> 2);
        for (var n = 0; n < t.length; n++) t[n] = 0;
        for (var n = 0; n < e.length * 8; n += 8) t[n >> 5] |= (e.charCodeAt(n / 8) & 255) << n % 32;
        return t
    }
    function w(e) {
        var t = "";
        for (var n = 0; n < e.length * 32; n += 8) t += String.fromCharCode(e[n >> 5] >>> n % 32 & 255);
        return t
    }
    function E(e, t) {
        e[t >> 5] |= 128 << t % 32,
        e[(t + 64 >>> 9 << 4) + 14] = t;
        var n = 1732584193,
        r = -271733879,
        i = -1732584194,
        s = 271733878;
        for (var o = 0; o < e.length; o += 16) {
            var u = n,
            a = r,
            f = i,
            l = s;
            n = x(n, r, i, s, e[o + 0], 7, parseInt("0xd76aa478")),
            s = x(s, n, r, i, e[o + 1], 12, parseInt("0xe8c7b756")),
            i = x(i, s, n, r, e[o + 2], 17, parseInt("0x242070db")),
            r = x(r, i, s, n, e[o + 3], 22, parseInt("0xc1bdceee")),
            n = x(n, r, i, s, e[o + 4], 7, parseInt("0xf57c0faf")),
            s = x(s, n, r, i, e[o + 5], 12, parseInt("0x4787c62a")),
            i = x(i, s, n, r, e[o + 6], 17, parseInt("0xa8304613")),
            r = x(r, i, s, n, e[o + 7], 22, parseInt("0xfd469501")),
            n = x(n, r, i, s, e[o + 8], 7, parseInt("0x698098d8")),
            s = x(s, n, r, i, e[o + 9], 12, parseInt("0x8b44f7af")),
            i = x(i, s, n, r, e[o + 10], 17, parseInt("0xffff5bb1")),
            r = x(r, i, s, n, e[o + 11], 22, parseInt("0x895cd7be")),
            n = x(n, r, i, s, e[o + 12], 7, parseInt("0x6b901122")),
            s = x(s, n, r, i, e[o + 13], 12, parseInt("0xfd987193")),
            i = x(i, s, n, r, e[o + 14], 17, parseInt("0xa679438e")),
            r = x(r, i, s, n, e[o + 15], 22, parseInt("0x49b40821")),
            n = T(n, r, i, s, e[o + 1], 5, parseInt("0xf61e2562")),
            s = T(s, n, r, i, e[o + 6], 9, parseInt("0xc040b340")),
            i = T(i, s, n, r, e[o + 11], 14, parseInt("0x265e5a51")),
            r = T(r, i, s, n, e[o + 0], 20, parseInt("0xe9b6c7aa")),
            n = T(n, r, i, s, e[o + 5], 5, parseInt("0xd62f105d")),
            s = T(s, n, r, i, e[o + 10], 9, parseInt("0x02441453")),
            i = T(i, s, n, r, e[o + 15], 14, parseInt("0xd8a1e681")),
            r = T(r, i, s, n, e[o + 4], 20, parseInt("0xe7d3fbc8")),
            n = T(n, r, i, s, e[o + 9], 5, parseInt("0x21e1cde6")),
            s = T(s, n, r, i, e[o + 14], 9, parseInt("0xc33707d6")),
            i = T(i, s, n, r, e[o + 3], 14, parseInt("0xf4d50d87")),
            r = T(r, i, s, n, e[o + 8], 20, parseInt("0x455a14ed")),
            n = T(n, r, i, s, e[o + 13], 5, parseInt("0xa9e3e905")),
            s = T(s, n, r, i, e[o + 2], 9, parseInt("0xfcefa3f8")),
            i = T(i, s, n, r, e[o + 7], 14, parseInt("0x676f02d9")),
            r = T(r, i, s, n, e[o + 12], 20, parseInt("0x8d2a4c8a")),
            n = N(n, r, i, s, e[o + 5], 4, parseInt("0xfffa3942")),
            s = N(s, n, r, i, e[o + 8], 11, parseInt("0x8771f681")),
            i = N(i, s, n, r, e[o + 11], 16, parseInt("0x6d9d6122")),
            r = N(r, i, s, n, e[o + 14], 23, parseInt("0xfde5380c")),
            n = N(n, r, i, s, e[o + 1], 4, parseInt("0xa4beea44")),
            s = N(s, n, r, i, e[o + 4], 11, parseInt("0x4bdecfa9")),
            i = N(i, s, n, r, e[o + 7], 16, parseInt("0xf6bb4b60")),
            r = N(r, i, s, n, e[o + 10], 23, parseInt("0xbebfbc70")),
            n = N(n, r, i, s, e[o + 13], 4, parseInt("0x289b7ec6")),
            s = N(s, n, r, i, e[o + 0], 11, parseInt("0xeaa127fa")),
            i = N(i, s, n, r, e[o + 3], 16, parseInt("0xd4ef3085")),
            r = N(r, i, s, n, e[o + 6], 23, parseInt("0x04881d05")),
            n = N(n, r, i, s, e[o + 9], 4, parseInt("0xd9d4d039")),
            s = N(s, n, r, i, e[o + 12], 11, parseInt("0xe6db99e5")),
            i = N(i, s, n, r, e[o + 15], 16, parseInt("0x1fa27cf8")),
            r = N(r, i, s, n, e[o + 2], 23, parseInt("0xc4ac5665")),
            n = C(n, r, i, s, e[o + 0], 6, parseInt("0xf4292244")),
            s = C(s, n, r, i, e[o + 7], 10, parseInt("0x432aff97")),
            i = C(i, s, n, r, e[o + 14], 15, parseInt("0xab9423a7")),
            r = C(r, i, s, n, e[o + 5], 21, parseInt("0xfc93a039")),
            n = C(n, r, i, s, e[o + 12], 6, parseInt("0x655b59c3")),
            s = C(s, n, r, i, e[o + 3], 10, parseInt("0x8f0ccc92")),
            i = C(i, s, n, r, e[o + 10], 15, parseInt("0xffeff47d")),
            r = C(r, i, s, n, e[o + 1], 21, parseInt("0x85845dd1")),
            n = C(n, r, i, s, e[o + 8], 6, parseInt("0x6fa87e4f")),
            s = C(s, n, r, i, e[o + 15], 10, parseInt("0xfe2ce6e0")),
            i = C(i, s, n, r, e[o + 6], 15, parseInt("0xa3014314")),
            r = C(r, i, s, n, e[o + 13], 21, parseInt("0x4e0811a1")),
            n = C(n, r, i, s, e[o + 4], 6, parseInt("0xf7537e82")),
            s = C(s, n, r, i, e[o + 11], 10, parseInt("0xbd3af235")),
            i = C(i, s, n, r, e[o + 2], 15, parseInt("0x2ad7d2bb")),
            r = C(r, i, s, n, e[o + 9], 21, parseInt("0xeb86d391")),
            n = k(n, u),
            r = k(r, a),
            i = k(i, f),
            s = k(s, l)
        }
        return Array(n, r, i, s)
    }
    function S(e, t, n, r, i, s) {
        return k(L(k(k(t, e), k(r, s)), i), n)
    }
    function x(e, t, n, r, i, s, o) {
        return S(t & n | ~t & r, e, t, i, s, o)
    }
    function T(e, t, n, r, i, s, o) {
        return S(t & r | n & ~r, e, t, i, s, o)
    }
    function N(e, t, n, r, i, s, o) {
        return S(t ^ n ^ r, e, t, i, s, o)
    }
    function C(e, t, n, r, i, s, o) {
        return S(n ^ (t | ~r), e, t, i, s, o)
    }
    function k(e, t) {
        var n = (e & 65535) + (t & 65535),
        r = (e >> 16) + (t >> 16) + (n >> 16);
        return r << 16 | n & 65535
    }
    function L(e, t) {
        return e << t | e >>> 32 - t
    }
    var e = window.$,
    t = window.kureicp;
    t.sec = t.sec || {};
    var n = 0,
    r = "";
    t.sec.md5 = t.sec.hex_md5 = function(e) {
        return i(e)
    },
    t.sec.b64_md5 = function(e) {
        return s(e)
    },
    t.sec.str_md5 = function(e) {
        return str_md5(e)
    },
    t.sec.hex_hmac_md5 = function(e, t) {
        return u(e, t)
    },
    t.sec.b64_hmac_md5 = function(e, t) {
        return a(e, t)
    },
    t.sec.str_hmac_md5 = function(e, t) {
        return str_hmac_md5(e, t)
    },
    t.sec.md5_test_abc = function() {
        return i("abc") == "900150983cd24fb0d6963f7d28e17f72"
    }
})(); (function(e) {
    var t = e.$,
    n = e.kureicp,
    r = function(e) {
        this.maskColor = "#fff",
        this.opacity = 1,
        this.html = "",
        this.domMain = null,
        this.domMask = null,
        this.id = "",
        this.closeSel = "",
        this.cancelSel = "",
        this.confrimSel = "",
        this.closeFn = t.noop,
        this.cancelFn = t.noop,
        this.confirmFn = t.noop,
        this.showFn = t.noop,
        this.init(e)
    };
    r.prototype = {
        constructor: r,
        init: function(e) {
            t.extend(this, e),
            this._create(),
            this._events()
        },
        _create: function() {
            var e, r, i = null;
            this.close(),
            t("body").append('<div name="m360mobile" id="mobilepop" class="popup"></div>'),
            t("body").append('<div name="m360mobile" id="mobilemask">'),
            this.domMain = r = t("#mobilepop"),
            this.domMask = e = t("#mobilemask"),
            r.html(this.html),
            t.goAnimatetop(),
            i && clearTimeout(),
            i = setTimeout(function() {
                t("#mobilemask").height(n.number.pageHeight("height") + "px")
            },
            200)
        },
        _events: function() {
            var e = this;
            this.closeSel && this.domMain.find(this.closeSel).on({
                click: function() {
                    typeof e.closeFn == "function" && e.closeFn.call(e),
                    e.close()
                }
            }),
            this.confirmSel && this.domMain.find(this.confirmSel).on({
                click: function() {
                    typeof e.confirmFn == "function" && e.confirmFn.call(e)
                },
                touchstart: function() {
                    t(this).addClass("btntap")
                },
                touchend: function() {
                    t(this).removeClass("btntap")
                }
            }),
            this.cancelSel && this.domMain.find(this.cancelSel).on({
                click: function() {
                    typeof e.cancelFn == "function" && e.cancelFn.call(e),
                    e.close()
                }
            }),
            typeof this.showFn == "function" && this.showFn.call(this)
        },
        close: function() {
            this.domMask !== null && t("div[name=m360mobile]").remove()
        }
    },
    n.lightBox.show = function(e) {
        return new r(e)
    },
    n.lightBox.regOther = function(e) {
        var r = ['<div class="head">', '  <div class="head-tit">\u6ce8\u518c360\u8d26\u53f7</div>', '  <a href="javascript:;" class="cls">\u5173\u95ed x</a>', "</div>", '<div class="popupc loginlayout">', '<div class="area" id="loginForm">', '	<div id="errorTips"><span id="qt_global_text"></span></div>', '	<div id="LoginWrap" class="chart-tab">', '		  <ul class="fieldinner">', '			<li class="username">', '			  <input type="text" name="qt_loginemail" id="qt_loginemail" placeholder="\u8bf7\u8f93\u5165\u60a8\u7684\u90ae\u7bb1" class="ipt-txt" maxlength="100">', '			  <div class="del_touch"><span class="del_u"></span></div>', "			</li>", '			<li class="pwd">', '			  <input type="password" name="qt_password" id="qt_password" placeholder="\u8bf7\u8f93\u51656-18\u4e2a\u5b57\u7b26\u7684\u5bc6\u7801" class="input other" maxlength="18">', '			  <span class="btn3 eyes">\u663e\u793a\u5bc6\u7801</span>', "			</li>", '			<li class="auth-code" style="display:block;">', '			  <input type="text" name="qt_phrase" id="qt_phrase" placeholder="\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801" class="auth-code-txt" maxlength="14">', '			  <img class="check-code-img other" src="##" id="qt_phrasecode"> </li>', "		  </ul>", '		  <div class="submit-cont"><input id="qt_btn" class="submit" type="button" value="\u6ce8  \u518c"></div>', '		  <p class="center">', '			<input type="checkbox" id="qtis_agree" tabindex="5" checked="checked" value="1">\u70b9\u51fb"\u6ce8\u518c"\u6309\u94ae\uff0c\u5373\u8868\u793a\u60a8\u540c\u610f<a href="/guide/help" class="blue">\u300a360\u7528\u6237\u534f\u8bae\u300b</a>', "		  </p>", '		  <div class="login-option"><a href="javascript:;" class="fr blue font14 regmobile"><b>\u4f7f\u7528\u624b\u673a\u53f7\u6ce8\u518c</b>>></a></div>', "	</div>", "</div>", "</div>"].join("");
        n.lightBox.show({
            html: r,
            closeSel: ".cls"
        }),
        document.getElementById("mobilemask").style.cssText = "background:#ededed;",
        typeof e == "function" && (n.lightBox.filescallbacks = function() {
            e.call(null)
        });
        var i = null,
        s = n.cookie.get("from"),
        o = n.cookie.get("cp_kurei_agent"),
        u;
        s ? u = "mpw_caipiao" + (s ? "_tg_" + s: "") : o ? u = "mpw_caipiao" + (o ? "_tg_" + o: "") : u = "mpw_caipiao";
        var a = t(".del_touch"),
        f = t(".eyes"),
        l = t(".regmobile"),
        c = "",
        h = function() {
            c = "",
            QHPass.mShowReg(function() {
                n.lightBox.close(),
                n.lightBox.filescallbacks()
            },
            {
                doms: {
                    loginEmail: "qt_loginemail",
                    password: "qt_password",
                    phrase: "qt_phrase",
                    isAgree: "qtis_agree",
                    globalTips: "qt_global_text",
                    phraseImg: "qt_phrasecode"
                },
                extFun: {
                    init: function() {
                        var e = t("#qt_loginemail"),
                        n = t("#qt_btn"),
                        r = t("#qt_password"),
                        i = t("#qt_phrase"),
                        s = t("#qt_phrasecode");
                        n.off(),
                        e.off(),
                        r.off(),
                        s.off(),
                        QHPass.regUtils.getCaptchaUrl(function(e) {
                            c = e,
                            QHPass.regUtils.setPhrase(e)
                        }),
                        n.on({
                            click: function() {
                                QHPass.regUtils.submit()
                            },
                            touchstart: function() {
                                t(this).addClass("btntap")
                            },
                            touchend: function() {
                                t(this).removeClass("btntap")
                            }
                        }),
                        e.on({
                            keydown: function(e) {
                                e.keyCode == 13 && r.focus()
                            },
                            keyup: function() {
                                var e = t(this);
                                t.trim(e.val()) ? a.show() : a.hide()
                            },
                            blur: function() {
                                QHPass.regUtils.checkLoginEmail(!0)
                            }
                        }),
                        r.on("keydown",
                        function(e) {
                            e.keyCode == 13 && i.focus()
                        }),
                        s.on("click",
                        function() {
                            QHPass.regUtils.setPhrase(c)
                        })
                    },
                    error: function(e) {
                        if (e.extra == "201") {
                            n.lottery.alert("\u90ae\u7bb1\u5df2\u6ce8\u518c");
                            return
                        }
                        var r = t("#errorTips");
                        r.css("top", "45%"),
                        i && clearTimeout(i),
                        i = setTimeout(function() {
                            r.css("top", "-40px")
                        },
                        2e3),
                        QHPass.regUtils.setPhrase(c)
                    },
                    correct: function(e) {
                        var n = t("#errorTips");
                        n.css("top", "-40px")
                    },
                    phrase: function(e) {
                        c = e,
                        QHPass.regUtils.setPhrase(e)
                    },
                    before: function() {},
                    loading: function() {},
                    after: function() {},
                    httpTimeout: function() {}
                },
                regway: "email",
                postCharset: "gbk",
                domainList: ["360"],
                src: u,
                captchaAppId: "caipiaoWap"
            })
        };
        h(),
        a.on(n.lottery.tap,
        function() {
            var e = t("#chart-nav").find(".on").attr("channel"),
            n;
            e == "user" ? n = t("#qt_username") : n = t("#qt_loginemail"),
            n.val(""),
            t(this).hide()
        }),
        f.on(n.lottery.tap,
        function() {
            var e = t("#chart-nav").find(".on").attr("channel"),
            n;
            e == "user" ? n = t("#qt_password_u") : n = t("#qt_password");
            var r = n.attr("type"),
            i = t(this);
            t.trim(n.val()) && (r == "password" ? (n.attr("type", "text"), i.text("\u9690\u85cf\u5bc6\u7801")) : (n.attr("type", "password"), i.text("\u663e\u793a\u5bc6\u7801")))
        }),
        l.on("click",
        function() {
            n.lightBox.close(),
            n.lightBox.regIphone(e)
        })
    },
    n.lightBox.regIphone = function(e) {
        var r = ['<div class="head">', '  <div class="head-tit">\u6ce8\u518c360\u8d26\u53f7</div>', '  <a href="javascript:;" class="cls">\u5173\u95ed x</a>', "</div>", '<div class="popupc loginlayout">', '<div class="area" id="iphone">', '<div id="LoginWrap">', '  <div id="errorTips"><span id="qt_global_text"></span></div>', '  <ul class="fieldinner">', '	<li class="username">', '	  <input type="tel" name="qt_phone_num" id="qt_phone_num" placeholder="\u8bf7\u8f93\u5165\u60a8\u7684\u624b\u673a\u53f7" class="ipt-txt" maxlength="11">', '	  <div class="del_touch"><span class="del_u"></span></div>', "	</li>", '	<li class="gets-code">', '	  <input type="tel" name="qt_ac" id="qt_ac" placeholder="\u8bf7\u8f93\u5165\u624b\u673a\u6821\u9a8c\u7801" class="input" maxlength="6">', '	  <span class="btn3 dcode" id="qt_fetch_code">\u83b7\u53d6\u6821\u9a8c\u7801</span> </li>', '	<li class="pwd">', '	  <input type="password" name="qt_password" id="qt_password" placeholder="\u8bf7\u8f93\u51656-18\u4e2a\u5b57\u7b26\u7684\u5bc6\u7801" class="input" maxlength="18">', '	  <span class="btn3 eyes">\u663e\u793a\u5bc6\u7801</span> </li>', "  </ul>", '  <div class="submit-cont">', '	<input id="qt_btn" class="submit" type="button" value="\u6ce8  \u518c">', "  </div>", '  <p class="center">', '	<input type="checkbox" id="qtis_agree" tabindex="5" checked="checked" value="1">', '	\u70b9\u51fb"\u6ce8\u518c"\u6309\u94ae\uff0c\u5373\u8868\u793a\u60a8\u540c\u610f<a href="/guide/help" class="blue">\u300a360\u7528\u6237\u534f\u8bae\u300b</a></p>', '  <div class="login-option"><a href="javascript:;" id="other" class="fr blue font14"><b>\u4f7f\u7528\u90ae\u7bb1\u6ce8\u518c</b>&gt;&gt;</a></div>', "</div>", "</div>", "</div>"].join("");
        n.lightBox.show({
            html: r,
            closeSel: ".cls"
        }),
        document.getElementById("mobilemask").style.cssText = "background:#ededed;",
        typeof e == "function" && (n.lightBox.filescallbacks = function() {
            e.call(null)
        });
        var i = null,
        s = n.cookie.get("from"),
        o = n.cookie.get("cp_kurei_agent"),
        u;
        s ? u = "mpw_caipiao" + (s ? "_tg_" + s: "") : o ? u = "mpw_caipiao" + (o ? "_tg_" + o: "") : u = "mpw_caipiao";
        var a = t(".del_touch"),
        f = t(".eyes"),
        l = t("#other");
        QHPass.mShowReg(function() {
            n.lightBox.close(),
            n.lightBox.filescallbacks()
        },
        {
            doms: {
                phone: "qt_phone_num",
                smsCode: "qt_ac",
                password: "qt_password",
                isAgree: "qtis_agree",
                globalTips: "qt_global_text"
            },
            extFun: {
                init: function() {
                    var e = t("#qt_btn"),
                    n = t("#qt_phone_num"),
                    r = t("#qt_fetch_code"),
                    i = t("#qt_ac"),
                    s = t("#qt_password");
                    e.on({
                        click: function() {
                            QHPass.regUtils.submit()
                        },
                        touchstart: function() {
                            t(this).addClass("btntap")
                        },
                        touchend: function() {
                            t(this).removeClass("btntap")
                        }
                    }),
                    n.on({
                        keydown: function(e) {
                            e.keyCode == 13 && s.focus()
                        },
                        blur: function() {
                            QHPass.regUtils.checkPhone(!0)
                        },
                        keyup: function() {
                            var e = t(this);
                            t.trim(e.val()) ? a.show() : a.hide()
                        }
                    }),
                    r.on("click",
                    function() {
                        var e = t(this),
                        n = "disabled";
                        e.hasClass(n) || QHPass.regUtils.getSmsCode(function(t) {
                            if (t.errno == 0) {
                                e.addClass(n);
                                var r = 120,
                                i = null;
                                i = setInterval(function() {
                                    e.text(r + "\u79d2\u540e\u91cd\u53d1"),
                                    r--,
                                    r < 1 && (clearInterval(i), e.text("\u83b7\u53d6\u6821\u8bc1\u7801").removeClass(n))
                                },
                                1e3)
                            }
                        })
                    }),
                    s.on("keydown",
                    function(e) {
                        e.keyCode == 13 && QHPass.regUtils.submit()
                    })
                },
                error: function(e) {
                    if (e.type == "phone" && e.extra == "30000" || e.type == "smsCode" && e.extra == "1106") n.lottery.alert("\u624b\u673a\u53f7\u5df2\u88ab\u4f7f\u7528");
                    else {
                        var r = t("#errorTips");
                        r.css("top", "45%"),
                        i && clearTimeout(i),
                        i = setTimeout(function() {
                            r.css("top", "-40px")
                        },
                        2e3)
                    }
                },
                correct: function(e) {
                    var n = t("#errorTips");
                    n.css("top", "-40px")
                },
                before: function() {},
                loading: function() {},
                after: function() {},
                httpTimeout: function() {}
            },
            regway: "phone",
            postCharset: "gbk",
            domainList: ["360"],
            src: u
        }),
        a.on(n.lottery.tap,
        function() {
            t("#qt_phone_num").val(""),
            t(this).hide()
        }),
        f.on(n.lottery.tap,
        function() {
            var e = t("#qt_password"),
            n = e.attr("type"),
            r = t(this);
            t.trim(e.val()) && (n == "password" ? (e.attr("type", "text"), r.text("\u9690\u85cf\u5bc6\u7801")) : (e.attr("type", "password"), r.text("\u663e\u793a\u5bc6\u7801")))
        }),
        l.on("click",
        function() {
            n.lightBox.close(),
            n.lightBox.regOther(e)
        })
    },
    n.lightBox.login = function(r) {
        var //i = ['<div class="head">', '  <div class="head-tit">\u767b\u5f55360\u8d26\u53f7</div>', '  <a href="javascript:;" class="cls">\u5173\u95ed x</a>', "</div>", '<div class="popupc loginlayout">', '<div class="area" id="login">', '  <div id="loginForm">', '	<div id="LoginWrap"> ', '	  <div id="errorTips"><span id="qt_global_text">\u8bf7\u8f93\u5165\u60a8\u7684\u624b\u673a\u53f7/\u90ae\u7bb1/\u7528\u6237\u540d</span></div>', '	  <ul class="fieldinner">', '		  <li class="username">', '			<input type="text" name="qt_account" id="qt_account" placeholder="\u8bf7\u8f93\u5165\u624b\u673a\u53f7/\u90ae\u7bb1/\u7528\u6237\u540d" class="ipt-txt">', '			<div class="del_touch"><span class="del_u"></span></div>', "		  </li>", '		  <li class="pwd">', '			<input type="password" name="qt_password" id="qt_password" placeholder="\u8bf7\u8f93\u5165\u5bc6\u7801" class="ipt-txt">', "		  </li>", '		  <li class="auth-code">', '			<input type="text" name="qt_phrase" id="qt_phrase" placeholder="\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801" class="auth-code-txt" maxlength="7">', '			<img class="check-code-img" src="##" id="qt_phrasecode">', "		  </li>", "		  <li>", '			<p id="wait1" class="red none">\u6b63\u5728\u767b\u5f55\u4e2d(<cite id="second">20</cite>),\u8bf7\u7a0d\u540e......</p>', '			<p id="wait2" class="red none">\u7531\u4e8e\u7f51\u7edc\u8d85\u65f6,\u8bf7\u7a0d\u540e\u518d\u8bd5\uff01</p>', "		  </li>", "	  </ul>", '	  <div id="iskeepalive"><label for="qtis_autologin"><input type="checkbox" id="qtis_autologin" tabindex="5" checked="checked" value="1">\u4e0b\u6b21\u81ea\u52a8\u767b\u5f55</label></div>', '	  <div class="submit-cont submit-reg">', '		<input class="submit" type="button" id="qt_btn" value="\u767b  \u5f55">', '		<input id="qt_btn_reg" class="sub-reg" type="submit" value="\u6ce8  \u518c">', "	  </div>", '	  <div class="login-option"><a href="#" id="findpwd" class="fr blue font14" id="forget">\u5fd8\u8bb0\u5bc6\u7801\uff1f</a><a href="#" class="blue font14" id="forget">\u5fd8\u8bb0\u8d26\u53f7\uff1f</a></div>', "	</div>", " </div>", "</div>", "</div>"].join(""),
        s = n.string.getUrlPath("next");
        n.lightBox.show({
            html: i,
            closeSel: ".cls",
            cancelSel: "#qt_btn_reg",
            cancelFn: function() {
                this.close(),
                setTimeout(function() {
                    n.lightBox.regIphone(r)
                },
                20)
            }
        }),
        typeof r == "function" && (n.lightBox.filescallbacks = function() {
            r.call(null)
        }),
        document.getElementById("mobilemask").style.cssText = "background:#ededed;";
        var o = n.cookie.get("mpw_account"),
        u = n.cookie.get("from"),
        a = "mpw_caipiao" + (u ? "_tg_" + u: ""),
        f = null,
        l = "none",
        c = t("#wait1"),
        h = t("#wait2"),
        p = t("#second"),
        d = t(".del_touch");
        o && (t("#qt_account").val(o), d.show());
        var v = t.trim(t("#qt_account").val()),
        m = "";
        v && (m = "&account=" + encodeURIComponent(v)),
        t("#findpwd").attr("href", "#" + m + "&destUrl=" + encodeURIComponent(e.location.href)),       //找回密码链接
        t("#forget").attr("href", "/passport/findaccount?redirect_url=" + s),
        n.mobile.waittimer = null,
        n.mobile.resolve = 1;
        var g = "";
        QHPass.mShowLogin(function() {
            var e = t.trim(t("#qt_account").val());
            n.cookie.set({
                name: "mpw_account",
                value: e,
                expires: 7
            }),
            n.lightBox.close(),
            typeof n.lightBox.filescallbacks == "function" && n.lightBox.filescallbacks()
        },
        {
            doms: {
                account: "qt_account",
                password: "qt_password",
                phrase: "qt_phrase",
                isAutologin: "qtis_autologin",
                globalTips: "qt_global_text",
                phraseImg: "qt_phrasecode"
            },
            extFun: {
                init: function() {
                    var e = t("#qt_btn"),
                    n = t("#qt_account"),
                    r = t("#qt_password"),
                    i = t("#qt_phrase"),
                    s = t("#qt_phrasecode");
                    e.on({
                        click: function() {
                            var e = t(this);
                            e.val("\u767b\u5f55\u4e2d..."),
                            c.addClass(l),
                            h.addClass(l),
                            QHPass.loginUtils.submit()
                        },
                        touchstart: function() {
                            t(this).addClass("btntap")
                        },
                        touchend: function() {
                            t(this).removeClass("btntap")
                        }
                    }),
                    n.on({
                        keydown: function(e) {
                            e.keyCode == 13 && r.focus()
                        },
                        keyup: function() {
                            var e = t(this);
                            t.trim(e.val()) ? d.show() : d.hide()
                        }
                    }),
                    r.on("keydown",
                    function(e) {
                        e.keyCode == 13 && (t("#LoginWrap .auth-code").css("display") !== "none" ? i.focus() : QHPass.loginUtils.submit())
                    }),
                    i.on("keydown",
                    function(e) {
                        e.keyCode == 13 && QHPass.loginUtils.submit()
                    }),
                    s.on("click",
                    function() {
                        QHPass.loginUtils.setPhrase(g)
                    })
                },
                phrase: function(e) {
                    t("#LoginWrap .auth-code").show(),
                    g = e,
                    QHPass.loginUtils.setPhrase(e)
                },
                error: function(e) {
                    n.mobile.resolve = 0,
                    clearTimeout(n.mobile.waittimer),
                    p.text("20"),
                    c.addClass(l),
                    t("#qt_btn").val("\u767b  \u5f55");
                    var r = t("#errorTips");
                    r.css("top", "45%"),
                    f && clearTimeout(f),
                    f = setTimeout(function() {
                        r.css("top", "-40px")
                    },
                    2e3),
                    QHPass.loginUtils.setPhrase(g)
                },
                correct: function(e) {},
                before: function() {
                    setTimeout(function() {
                        if (n.mobile.resolve) {
                            clearTimeout(n.mobile.waittimer);
                            var e = t("#qt_btn"),
                            r = 20;
                            n.mobile.waittimer = setInterval(function() {
                                c.removeClass(l),
                                h.addClass(l),
                                r--,
                                p.text(r),
                                r <= 1 && (h.removeClass(l), c.addClass(l), e.val("\u767b  \u5f55"), clearTimeout(n.mobile.waittimer))
                            },
                            1e3)
                        }
                    },
                    4e3)
                },
                loading: function() {},
                after: function() {},
                httpsTimeout: function() {},
                httpTimeout: function() {}
            },
            phraseTime: "2",
            domainList: ["360"],
            src: a,
            captchaAppId: "caipiaoWap"
        }),
        d.on(n.lottery.tap,
        function() {
            t("#qt_account").val(""),
            t(this).hide()
        })
    },
    n.lightBox.close = function(e) {
        return t("div[name=m360mobile]").remove(),
        typeof e == "function" && e.call(null),
        !1
    },
    n.lightBox.alert = function(e) {
        var t = [];
        return t.push('<div class="pop-box"><div class="pop-boxt"><h2>' + (e.title || "\u6e29\u99a8\u63d0\u793a") + '</h2><a href="javascript:;" class="cls">X</a></div><div class="pop-boxc"><div class="pop-ts">' + e.content + '</div></div><div class="pop-boxb"><button type="button" class="btn confirm">' + (e.ensure || "\u786e \u5b9a") + "</button></div></div>"),
        e.confirmSel = ".confirm",
        e.html = t.join(""),
        e.closeSel = ".cls",
        n.lightBox.show(e)
    },
    n.lightBox.confirm = function(e) {
        var t = [];
        return t.push('<div class="pop-box"><div class="pop-boxt"><h2>' + (e.title || "\u6e29\u99a8\u63d0\u793a") + '</h2><a href="javascript:;" class="cls">X</a></div><div class="pop-boxc"><div class="pop-ts">' + e.content + '</div></div><div class="pop-boxb"><button type="button" class="btn sure">' + (e.sure || "\u786e\u8ba4") + '</button><button type="button" class="btn btn-gray off">' + (e.off || "\u53d6\u6d88") + "</button></div></div>"),
        e.confirmSel = ".sure",
        e.cancelSel = ".off",
        e.html = t.join(""),
        e.closeSel = ".cls",
        n.lightBox.show(e)
    },
    n.lightBox.pageLoading = {
        open: function() {
            t("body").append(t('<div name="mloading360mobile" class="load_wrap"><div class="css3_loading" id="css3_loading"></div></div><div name="mloading360mobile" class="mask" id="mobile-pagemask">')),
            setTimeout(function() {
                t("#mobile-pagemask").height(n.number.pageHeight("height") + "px")
            },
            120)
        },
        close: function(e) {
            return t("div[name=mloading360mobile]").remove(),
            typeof e == "function" && e.call(null),
            !1
        }
    },
    n.lightBox.buildLoad = {
        tmpl: '<div class="build-loading-wrap" id="build_loading_wrap"><img src="/Images/Public/t01d1a06fa5e1915fb9.png"><p>\u6b63\u5728\u52a0\u8f7d...</p></div><div style="width:100%;height:100%;opacity:0.5;background-color:#000;-webkit-backface-visibility:hidden;position:fixed;left:0;top:0;z-index:999;" id="build_loading_mask">',
        open: function() {
            t(document.body).append(this.tmpl)
        },
        destroys: function() {
            t("#build_loading_wrap").remove(),
            t("#build_loading_mask").remove()
        }
    },
    n.lightBox.tip = {
        tmpl: '<div class="pop-layer-wp"><div class="pop-layer"><span></span></div></div>',
        dom: null,
        show: function(e, n) {
            var r = null,
            e = e || "\u8bf7\u7a0d\u5019...",
            i = t(".pop-layer-wp"),
            s = this;
            i.size() === 0 && (t(document.body).append(s.tmpl), i = t(".pop-layer-wp")),
            i.find("span").html(e),
            i.css({
                opacity: 100
            }).show(),
            clearTimeout(r),
            n != -1 && (r = setTimeout(s.hide, n || 2500))
        },
        hide: function() {
            var e = this,
            n = null,
            r = t(".pop-layer-wp");
            clearTimeout(n),
            n = setTimeout(function() {
                r && r.animate({
                    opacity: 0
                },
                200, "ease-out",
                function() {
                    r.hide()
                })
            },
            50)
        }
    }
})(window); (function(e) {
    var t = e.$ || {},
    n = e.kureicp || {};
    n.lottery.debug = !0,
    n.lottery.APIUrls = "#",
    n.lottery.APIUrl = "#",
    n.lottery.APIChart = "http://chart.cp.360.cn",     //电脑版走势图链接,屏蔽游戏不能用走势投注功能
    n.lottery.APIHelper = "#",
    n.lottery.APILeitai = "#",
    n.lottery.APIOdds = "#",
    n.lottery.APICircle = "#",
    n.lottery.APItouch = "#",
    n.lottery.tap = t.support.touch ? "tap": "click",
    n.lottery.hashkey = "fcfa5d2e",
    n.lottery.defaultMssage = "\u586b\u5199\u4fe1\u606f\u6709\u8bef!",
    n.lottery.price = 2,
    n.lottery.maxMoney = 5e6,
    n.lottery.payBuyMoney = 0,
    n.lottery.postSuccessBackUrl = "",
    n.lottery.serverTimeUrl = "#",
    n.lottery.special = /\/?(bt)\/(join|coop|trc)$/,
    n.lottery.routeHighlottery = /^(166406|168009|255401|258001|258203|255903|257503|165707|166407|166507|165207|166907|255803|257703|265108|167607)$/,
    n.lottery.lotType = {
        ssq: 220051,
        sfc: 130011,
        rj: 130019,
        dlt: 120029,
        p3: 110033,
        p5: 110035,
        qx: 110022,
        sd: 210053,
        qlc: 220028,
        syy: 166406,
        sscjx: 258001,
        ssccq: 255401,
        jczq: 130042,
        jclq: 130043,
        dc: 130041,
        worldcup: 140045,
        gyj: 140046,
        kl8: 265108,
        dlc: 168009,
        hbk3: 257703,
        jsk3: 255903,
        jlk3: 258203,
        k3nm: 257503,
        k3gx: 255803,
        gd11: 165707,
        sh11: 165207,
        ln11: 166907,
        xw: 223515,
        pk3: 166407,
        hlj11: 166507,
        xj11: 167607,
        kl8: 265108
    },
    n.lottery.payResultcode = {
        1329 : "\u652f\u4ed8\u5bc6\u7801\u9519\u8bef",
        1351 : "\u60a8\u586b\u5199\u7684\u4fe1\u606f\u548c\u5f53\u521d\u53c2\u4e0e\u6d3b\u52a8\u8bbe\u7f6e\u4e0d\u7b26\uff0c\u8bf7\u91cd\u65b0\u586b\u5199\u3002\u6709\u95ee\u9898\u8bf7\u81f4\u7535010-59059560\uff01",
        1314 : "\u5df2\u586b\u5199\u8fc7\u5b9e\u540d\u4fe1\u606f",
        1319 : "\u8d26\u6237\u767b\u5f55\u5bc6\u7801\u9519\u8bef",
        1328 : "\u652f\u4ed8\u5bc6\u7801\u9519\u8bef\u6b21\u6570\u8d85\u9650\uff0c\u9700\u898115\u5206\u949f\u540e\u518d\u8bd5",
        1320 : "\u652f\u4ed8\u5bc6\u7801\u4e0d\u80fd\u4e0e\u767b\u5f55\u5bc6\u7801\u76f8\u540c",
        1318 : "\u4e24\u6b21\u8f93\u5165\u7684\u5bc6\u7801\u4e0d\u4e00\u81f4",
        1305 : "\u5fc5\u9700\u53c2\u6570\u4e0d\u80fd\u4e3a\u7a7a",
        "1332:": "\u5df2\u586b\u5199\u8fc7\u652f\u4ed8\u5bc6\u7801",
        1339 : "\u767b\u5f55\u5bc6\u7801\u9519\u8bef\u6b21\u6570\u8d85\u9650",
        1322 : "\u7b7e\u540d\u9519\u8bef",
        9003 : "\u7528\u6237\u672a\u767b\u5f55",
        1824 : "\u59d3\u540d\u4e0e\u94f6\u884c\u5361\u59d3\u540d\u4fe1\u606f\u4e0d\u7b26",
        1805 : "\u6bcf\u5929\u53ea\u80fd\u63d0\u6b3e\u4e00\u6b21\uff0c\u8bf7\u60a8\u660e\u5929\u518d\u6765\u63d0\u6b3e\uff01",
        1711 : "\u59d3\u540d\u4e0e\u7528\u6237\u4fe1\u606f\u771f\u5b9e\u59d3\u540d\u4e0d\u7b26",
        1709 : "\u672a\u7ed1\u5b9a\u94f6\u884c\u5361",
        1710 : "\u5df2\u7ed1\u5b9a\u94f6\u884c\u5361",
        1330 : "\u7b54\u6848\u6216\u8005\u9a8c\u8bc1\u7801\u9519\u8bef",
        1331 : "\u8f93\u5165\u7b54\u6848\u6216\u8005\u9a8c\u8bc1\u7801\u9519\u8bef\u6b21\u6570\u8fc7\u591a\uff0c\u9700\u91cd\u65b0\u83b7\u53d6\u9a8c\u8bc1\u7801",
        1806 : "\u63d0\u73b0\u91d1\u989d\u5927\u4e8e\u8d26\u6237\u4f59\u989d",
        1807 : "\u63d0\u73b0\u5931\u8d25",
        1336 : "\u4fee\u6539\u624b\u673a\u53f7\u5931\u8d25",
        1335 : "\u65b0\u624b\u673a\u53f7\u4e0e\u65e7\u624b\u673a\u53f7\u53f7\u7801\u76f8\u540c",
        1337 : "\u65e7\u624b\u673a\u53f7\u7801\u9519\u8bef",
        1602 : "\u65b0\u589e\u652f\u4ed8\u8ba2\u5355\u5931\u8d25",
        1601 : "\u53c2\u6570\u9519\u8bef",
        1605 : "\u652f\u4ed8\u6263\u6b3e\u6210\u529f\uff0c\u4f46\u901a\u77e5\u5f69\u7968\u5931\u8d25",
        1610 : "\u8ba2\u5355\u5f02\u5e38\uff0c\u4e0d\u80fd\u652f\u4ed8",
        1611 : "\u8be5\u8ba2\u5355\u5df2\u7ecf\u652f\u4ed8\u8fc7",
        1612 : "\u8be5\u8ba2\u5355\u76ee\u524d\u4e0d\u53ef\u652f\u4ed8",
        1613 : "\u8ba2\u5355\u8d85\u65f6\u4e0d\u80fd\u652f\u4ed8\uff0c\u8bf7\u91cd\u65b0\u63d0\u4ea4\u8ba2\u5355",
        1112 : "\u8d26\u6237\u672a\u5b8c\u5168\u6fc0\u6d3b",
        1303 : "\u5b89\u5168\u95ee\u9898\u7b54\u6848\u9519\u8bef",
        1304 : "\u91cd\u7f6e\u5bc6\u7801\u5931\u8d25",
        1332 : "\u60a8\u5df2\u7ecf\u586b\u5199\u8fc7\u652f\u4ed8\u5bc6\u7801\uff0c\u8bf7\u52ff\u91cd\u590d\u586b\u5199",
        1317 : "\u8bc1\u4ef6\u53f7\u7801\u4e0d\u7b26\u5408\u89c4\u5b9a",
        6002 : "\u8ddd\u79bb\u4e0a\u6b21\u53d1\u9001\u65f6\u95f4\u8fc7\u77ed",
        6003 : "\u60a8\u5df2\u8fbe\u5230\u89c4\u5b9a\u65f6\u95f4\u5185\u7684\u6700\u5927\u53d1\u9001\u6b21\u6570",
        1006 : "qid\u9519\u8bef",
        1607 : "\u7b49\u5f85\u65f6\u95f4\u8d85\u957f\uff0c\u8bf7\u91cd\u65b0\u652f\u4ed8",
        1619 : "\u7b7e\u540d\u9519\u8bef",
        6002 : "\u8ddd\u79bb\u4e0a\u6b21\u53d1\u9001\u65f6\u95f4\u8fc7\u77ed",
        6003 : "\u60a8\u5df2\u8fbe\u5230\u89c4\u5b9a\u65f6\u95f4\u5185\u7684\u6700\u5927\u53d1\u9001\u6b21\u6570",
        6004 : "\u624b\u673a\u9a8c\u8bc1\u7801\u9519\u8bef",
        6005 : "\u624b\u673a\u9a8c\u8bc1\u7801\u9519\u8bef\u6b21\u6570\u8fc7\u591a\uff0c\u8bf7\u91cd\u65b0\u83b7\u53d6",
        6006 : "\u624b\u673a\u9a8c\u8bc1\u7801\u9519\u8bef",
        6007 : "\u5f53\u65e5\u77ed\u4fe1\u53d1\u9001\u6570\u76ee\u592a\u591a"
    },
    n.lottery.lotReffer = {
        220051 : "ssq",
        120029 : "slt",
        210053 : "sd",
        110033 : "p3",
        110035 : "p5",
        110022 : "qxc",
        220028 : "qlc",
        166406 : "syy",
        168009 : "dlc",
        258001 : "xssc",
        255401 : "lssc",
        258203 : "k3jlx",
        130043 : "jclq",
        130042 : "jczq",
        130041 : "bjdc",
        130011 : "sf",
        130019 : "rj",
        165707 : "gd11",
        165207 : "sh11",
        257503 : "k3nmx",
        255903 : "k3jsx",
        223515 : "xw",
        255803 : "k3gxx",
        166407 : "pk3",
        166507 : "hlj11",
        166907 : "ln11",
        140045 : "worldcup",
        140046 : "gyj",
        257703 : "k3hb",
        167607 : "xj11",
        265108 : "kl8"
    },
    n.lottery.lotTypeCn = {
        220051 : "\u53cc\u8272\u7403",
        130011 : "\u80dc\u8d1f\u5f69",
        130019 : "\u4efb\u9009\u4e5d",
        120029 : "\u5927\u4e50\u900f",
        110033 : "\u6392\u5217\u4e09",
        110035 : "\u6392\u5217\u4e94",
        110022 : "\u4e03\u661f\u5f69",
        210053 : "\u798f\u5f693D",
        220028 : "\u4e03\u4e50\u5f69",
        166406 : "11\u90095",
        168009 : "\u65b011\u90095",
        258001 : "\u65b0\u65f6\u65f6\u5f69",
        255401 : "\u8001\u65f6\u65f6\u5f69",
        130042 : "\u7ade\u5f69\u8db3\u7403",
        265108 : "\u5feb\u4e508",
        130041 : "\u5317\u4eac\u5355\u573a",
        130043 : "\u7ade\u5f69\u7bee\u7403",
        257703 : "\u6e56\u5317\u5feb3",
        255903 : "\u8001\u5feb3",
        258203 : "\u65b0\u5feb3",
        257503 : "\u5feb3",
        165707 : "\u7ca411\u90095",
        165207 : "\u4e0a\u6d7711\u90095",
        223515 : "15\u90095",
        166407 : "\u5feb\u4e50\u6251\u514b",
        166507 : "\u5e78\u8fd011\u90095",
        166907 : "\u8fbd\u5b8111\u90095",
        167607 : "\u5feb\u4e5011\u90095",
        140045 : "\u4e16\u754c\u676f\u51a0\u519b",
        140046 : "\u4e16\u754c\u676f\u51a0\u4e9a\u519b",
        255803 : "\u597d\u8fd0\u5feb3",
        265108 : "\u5feb\u4e508"
    },
    n.mobile.getServerTimes = function(e) {
        t.ajax({
            url: "/int/getcurtime?r=" + t.now(),
            error: function() {
                typeof e == "function" && e(0)
            },
            success: function(t) {
                t = t * 1 > 0 ? t * 1 : 0,
                typeof e == "function" && e(t)
            }
        })
    },
    n.lottery.getUserPass = function(e) {
        t.ajax({
            url: "/int/getcuruser?r=" + t.now(),
            dataType: "json",
            success: function(t) {
                typeof e == "function" && e(t)
            }
        })
    },
    n.lottery.ajaxData = function(r, i) {
        var s = "/int/mbet",
        o = r.BetType || r.buyType;
        n.lottery.disabledInit();
        if (!n.cookie.get("Q")) {
            n.lightBox.login(i),
            n.lottery.recoveryInit();
            return
        }
        var u = e.location.pathname,
        a = "";
        switch (o) {
        case "joinbuy":
            s = "/int/join/",
            a = "/bt/join";
            break;
        case "team":
            a = "/bt/coop";
            break;
        case "trc":
            a = "/bt/trc"
        }
        n.lottery.postSuccessBackUrl = a ? u.replace(/\/$/g, "") + a: u;
        var f;
        o == "team" ? f = r.SponsorBuy * 1 + r.LockCount * 1 : f = r.BetMoney || r.BuyMoney || r.TotalMoney,
        n.lottery.payBuyMoney = f,
        t.ajax({
            url: s,
            data: t.param(r) + "&r=" + t.now(),
            dataType: "json",
            type: "POST",
            success: function(e) {
                n.lottery.chkStatus(e, i, r)
            },
            timeout: 25e3,
            error: function() {
                n.lightBox.alert({
                    content: '<p class="msg">\u7f51\u7edc\u8d85\u65f6\uff0c\u8bf7\u7a0d\u540e\u518d\u8fdb\u884c\u6295\u6ce8\uff01</p>',//网络超时，请稍后再进行投注！
                    confirmFn: function() {
                        this.close()
                    },
                    cancelFn: function() {
                        this.close();
                    }
                }),
                n.lottery.recoveryInit()
            }
        })
    },
    n.lottery.recoveryInit = function() {
        t("#pay_buy").prop("disabled", !1).removeClass("btnoff").text("\u7acb\u523b\u4ed8\u6b3e")//立即投注
    },
    n.lottery.disabledInit = function() {
        t("#pay_buy").prop("disabled", !0).addClass("btnoff").text("\u5904\u7406\u4e2d...")//处理中...
    },
    n.lottery.chkStatus = function(t, r, i) {
        var s = +t.xCode,
        o, u, a, f, l, c = n.lottery.postSuccessBackUrl || e.location.pathname,
        h;		
        n.lottery.recoveryInit();
        if (s == 0 || s == 1 || s == 2) ! t.xValue || (o = t.xValue.OrderID, u = t.xValue.URL, a = +t.xValue.Coupons, f = u.match(/(\d)$/g) ? +u.match(/(\d)$/g)[0] : 1),
        l = t.xValue.LotID || n.mobile.lotType,
        h = "/pay?orderid=" + o + "&paychan=" + f + "&coupons=" + a + "&url=" + c + "&lotID=" + l;
        switch (s) {
        case 0:
            e.location.href = h;
            break;
        case 1:
            var p = n.lottery.payBuyMoney,
            d = "./index.htm";
            a === 0 ? n.lightBox.alert({
                content: '<p class="msg">\u60a8\u7684\u8d26\u6237\u5f69\u8c46\u4e0d\u8db3\uff0c\u8bf7\u5148\u8fdb\u884c\u5145\u503c\uff01</p>',//您的账户彩豆不足，请先进行充值！
                confirmFn: function() {
                    e.location.href = "/recharge#" + p + "|0|" + d + h
                },
                ensure: "\u7acb\u5373\u5145\u503c"//立即充值
            }) : e.location.href = h;
            break;
        case 2:
            e.location.href = "/profile/pasvpay#" + h;
            break;
        case 100:
            n.lightBox.login(r);
            break;
        case 2001:
            if (i) {
                var v = i.LotID,
                m = "",
                g = "";
                v == "220051" ? (m = "\u514d\u8d39\u731c\u7403\u8d62iPhone6", g = "./index.htm/activity/guessq") : v == "120029" ? (m = "\u514d\u8d39\u731c\u7403\u8d62iPhone6", g = "./index.htm/activity/guesst") : v == "130042" ? (m = "\u514d\u8d39\u731c\u8db3\u7403\u8d62\u5927\u5956", g = "./index.htm/fifa2014") : (m = "\u66f4\u591a\u60ca\u559c", g = "./index.htm/activity/mobile"),
                n.lightBox.alert({
                    content: '<p class="msg">' + t.xMessage + "</p>",
                    ensure: m,
                    confirmFn: function() {
                        this.close(),
                        e.location.href = g
                    },
                    cancelFn: function() {
                        this.close()
                    }
                })
            } else n.lightBox.alert({
                content: '<p class="msg">' + t.xMessage || "\u4e0d\u597d\u610f\u601d\uff0c\u51fa\u9519\u4e86\uff01</p>",
                confirmFn: function() {
                    this.close()
                },
                cancelFn: function() {
                    this.close()
                }
            });
            break;
        default:
            n.lightBox.alert({
                content:
                '<p class="msg">' + t.xMessage || "\u4e0d\u597d\u610f\u601d\uff0c\u51fa\u9519\u4e86\uff01</p>",
                confirmFn: function() {
                    this.close()
                },
                cancelFn: function() {
                    this.close()
                }
            })
        }
    },
    n.lottery.errMsg = function(e, n) {
        var r = t("#error_" + e),
        i = "none";
        t(".err").html(""),
        n ? r.removeClass(i).html(n) : r.addClass(i).html("")
    },
    n.lottery.dealPlay = function(e) {
        var t = "";
        return e.length && (e[0] == e[1] && e[1] == e[2] ? t = "(\u8c79\u5b50)": e[0] != e[1] && e[0] != e[2] && e[1] != e[2] ? t = "(\u7ec4\u516d)": t = "(\u7ec4\u4e09)"),
        t
    },
    n.lottery.dealpk3 = function(e) {
        var n;
        t.type(e) == "string" ? n = e.split(" ") : n = e;
        var r = [n[0].substring(0, 1), n[1].substring(0, 1), n[2].substring(0, 1)],
        i = [n[0].substring(1), n[1].substring(1), n[2].substring(1)],
        s = function(e, t) {
            var n = Array.prototype.indexOf;
            if (n && e.indexOf === n) return e.indexOf(t) != -1
        },
        o = [],
        u = [];
        t.each(i,
        function(e, t) {
            s(u, t) || (u.push(t), o.push(i[e]))
        });
        var a = "",
        f = "",
        l = 0,
        c = 0;
        o.length === 1 ? a = "\u8c79\u5b50": o.length === 2 && (a = "\u5bf9\u5b50"),
        r[0] === r[1] && r[0] === r[2] && (l = 1);
        var h = ["A23", "234", "345", "456", "567", "678", "789", "890", "90J", "0JQ", "JQK", "AQK"];
        return h.indexOf(i.join("")) != -1 && (c = 1),
        l && c ? (a = "\u540c\u82b1\u987a", f = r[0]) : l ? (a = "\u540c\u82b1", f = r[0]) : c && (a = "\u987a\u5b50"),
        [r, i, a, f]
    },
    n.lottery.calPosition = function(n, r) {
        var i = {},
        s = t(e),
        o = [s.width(), s.height()];
        return i.left = "50%",
        i.top = o[1] / 2,
        i.marginLeft = "-" + n / 2 + "px",
        i.marginTop = "-80px",
        i
    },
    n.lottery.alert = function(e) {
        var r = null,
        i = t('<div id="alertBox">' + e + "</div>");
        t("body").append(i),
        setTimeout(function() {
            i.css(n.lottery.calPosition(i.width(), i.height()))
        },
        20),
        r && clearTimeout(timer),
        r = setTimeout(function() {
            t("#alertBox").remove()
        },
        2e3)
    },
    n.lottery.getencrypt = function(e, t) {
        var n = e.length,
        r = Math.ceil(t.length / n),
        i = "";
        for (var s = 0; s < r; s++) {
            var o = t.substring(s * n, (s + 1) * n),
            u = n;
            o.length < n && (u = o.length);
            for (var a = 0; a < u; a++) i += String.fromCharCode(e.charCodeAt(a) ^ o.charCodeAt(a))
        }
        return i
    },
    n.lottery.requireToken = function(e) {
        var r = t("#token");
        t.ajax({
            url: n.lottery.APIUrl + "/qpayapissl/requiretoken?r=" + t.now(),
            dataType: "jsonp",
            success: function(t) {
                t && t.result_code == "9999" && (r.val(t.pptoken), e && e())
            },
            error: function() {
                n.lottery.requireToken.call(null, e)
            }
        })
    },
    n.lottery.validateCard = function(e) {
        try {
            if (e.length == 0 || e.length < 12 || e.length > 19) return ! 1;
            var t = /[34569]/,
            r = new RegExp(t);
            if (r.test(e.charAt(0) == 0)) return ! 1;
            var i = n.lottery.reverse(e),
            s = 0,
            o = 0;
            for (var u = 0; u < i.length; u++) if (u % 2 == 0) s += i.charAt(u) * 1;
            else {
                var a = i.charAt(u) * 2;
                a > 9 ? o = o + (a / 10 | 0) + a % 10 : o += a
            }
            var f = s + o;
            return f % 10 == 0 ? !0 : !1
        } catch(l) {
            return ! 1
        }
    },
    n.lottery.reverse = function(e) {
        var t = e,
        n = "";
        for (m = t.length - 1; m >= 0; m--) n += t.charAt(m);
        return n
    },
    n.lottery.getActionTarget = function(e, t, n, r) {
        var i = e.target,
        s = t || 3,
        o = t !== -1,
        u = n || "cmd",
        a = r || document.body;
        if (i === a) return i.getAttribute(u) ? i: null;
        while (i && i !== a && (o ? s-->0 : !0)) {
            if (i.getAttribute(u)) return i;
            i = i.parentNode
        }
        return null
    }
})(window); (function(e) {
    $(function() {
        var t = /http:\/\/([\w-]+\.)+([\w-]+\.)(360\.)(?:cn|com)/g,
        n = /\/lotdetails\/(coopbuy|appendbuy|ownbuy)\//g,
        r = /\/lotdetails\/(coopbuy|appendbuy|ownbuy|buycoop)\//g,
        i = /(\?)?(redirect_url=).*/g,
        s = /\/(profile|recharge|pay)[\/\?]?/g,
        o = /360browser/g,
        u = /lotid\/(\d{6})\/?/,
        a = encodeURIComponent(e.location.href.replace(t, "").replace(i, "")),
        f = $(".head-r"),
        l = $("#model-u"),
        c = $(".gotop"),
        h = e.location.href.split(/\?/)[0],
        p = "/passport/login/?redirect_url=",
        d = function(e) {
            var t = $("#tools").find("li"),
            n = t.eq(0),
            r = t.eq(0).find("a"),
            i = t.eq(2),
            s = t.eq(2).find("a"),
            o = t.eq(3),
            u = t.eq(3).find("a"),
            a = t.eq(5),
            f = t.eq(5).find("a"),
            l = "none";
            e == "220051" && a.removeClass(l);
            if (/^(13004)[123]$/g.test(e)) {
                var c = {
                    130043 : ["/jclq", "/kaijiang/jclqkj"],
                    130042 : ["/jczq", "/kaijiang/fballkj"],
                    130041 : ["/dc", "/kaijiang/bjdckj"]
                };
                r.attr("href", c[e][0]),
                u.attr("href", c[e][1])
            } else {
                var p = "";
                /^(13001)[1|9]$/g.test(e) && (p = "zc/"),
                r.attr("href", "/" + p + Q.lottery.lotReffer[e]),
                u.attr("href", "/kaijiang/thistory/?lotid=" + e)
            }
            /(buycoop|coopbuy)/g.test(h) && (i.removeClass(l), o.addClass(l), s.attr("href", "/coophall/" + Q.lottery.lotReffer[e] + "/"))
        };
        if (r.test(h) && !/(MSSQ|MBJD)\d{15,}/g.test(h)) {
            $("body").append('<div class="pop-box3 none" id="tools"><div class="pop-box2-bar"></div><div class="filt-popc"><ul><li><a href="#" class="btn-pop">\u6295\u6ce8\u8be5\u5f69\u79cd</a></li><li><a href="/lotteryhall" class="btn-pop">\u8d2d\u5f69\u5927\u5385</a></li><li class="none"><a href="#" class="btn-pop">\u53c2\u4e0e\u5408\u4e70</a></li><li><a href="#" id="history" class="btn-pop">\u5386\u53f2\u5f00\u5956</a></li><li><a href="/profile/" class="btn-pop">\u6211\u7684\u5f69\u7968</a></li><li class="none"><a href="/gallery/" class="btn-pop">\u53cc\u8272\u7403\u9891\u9053</a></li></ul></div></div>'),
            $(".head").append('<a href="javascript:;" class="btn-menu">\u2261</a>');
            var v = setTimeout(function() {
                $(".btn-menu").on(Q.lottery.tap,
                function() {
                    var e = $("#tools"),
                    t = $(this),
                    n = "btn-menu-on",
                    r = "none";
                    t.hasClass(n) ? (e.addClass(r), t.removeClass(n)) : (e.removeClass(r), t.addClass(n))
                })
            },
            400),
            m;
            if (u.test(h)) m = h.match(u)[1],
            d(m);
            else var g = $("#product"),
            y = setInterval(function() {
                m = g.attr("lotid"),
                m && (d(m), clearInterval(y))
            },
            400)
        }
        var b = {
           // landing: ['<a href="#" class="btn-h aboutlg">\u767b\u5f55</a>|<a href="#" class="btn-h aboutrg">\u6ce8\u518c</a>', '<a href="#" class="btn-12 aboutlg">\u767b\u5f55</a><a href="#" class="btn-12 aboutrg">\u6ce8\u518c</a><a href="/recharge/" class="btn-12">\u5145\u503c</a><a href="/profile/withdraw" class="btn-12">\u63d0\u6b3e</a>'],
            //notlogged: ['<a href="/profile/" class="btn-11">\u6211\u7684\u5f69\u7968</a>', '<span><a href="javascript:;" id="mequit" class="blue">[\u9000\u51fa]</a></span><a href="/profile/" class="blue aboutme">{%aboutme%}</a>']
        };
        if (!Q.cookie.get("Q")) {
            if (s.test(h) || n.test(h)) e.location.href = p + a;
            /*f.html(b.landing[0]),
            l.html(b.landing[1]),*/
            $(".aboutlg").attr("href", "/passport/login/?redirect_url=" + a),
            $(".aboutrg").attr("href", "/passport/reg/?redirect_url=" + a)
        } else f.html(b.notlogged[0]),
        $.ajax({
            url: "/int/getcuruser?r=" + $.now(),
            dataType: "json",
            success: function(e) {
                e && l.html(b.notlogged[1].replace(/{%aboutme%}/g, e))
            }
        });
        c.on("click",
        function() {
            setTimeout(function() {
                e.scrollTo(0, 0)
            },
            200)
        });
        var w = !1;
        $.os.android && (parseFloat($.os.version.substring(0, 3)) < 4 ? w = !0 : w = !1);
        if (!w) {
            var E = $("#sheader");
            E.show();
            var S = [0, 78, 135];
            $(e).on("scroll",
            function() {
                var t = e.scrollY;
                E.css({
                    "-webkit-transform": "translate(0, -" + (t > S[1] ? S[1] : S[2]) + "px)"
                })
            }),
            $(".head-btn").on("click",
            function() {
                var e = $(this),
                t = e.attr("status") || "close";
                t == "close" ? (e.attr("status", "open"), E.css({
                    "-webkit-transform": "translate(0, -0px)"
                })) : (e.attr("status", "close"), E.css({
                    "-webkit-transform": "translate(0, -78px)"
                }))
            })
        }
        $("#live800").on("click",
        function() {
            e.open("http://v1.live800.com/live800/chatClient/chatbox.jsp?companyID=147557&configID=40801&jid=6145526885&enterurl=mobile", "", "toolbar=0,scrollbars=0,location=0,menubar=0,resizable=1,width=570,height=424")
        });
        var x = Q.string.getUrlParam("from");
        /(360se|ucweb|dolphin|oupeng|dingyuan)$/g.test(x) && Q.cookie.set({
            name: "from",
            value: x,
            expires: 0
        });
        var T = Q.string.getUrlParam("agent");
        T && Q.cookie.set({
            name: "cp_kurei_agent",
            value: T,
            expires: 7
        }),
        typeof QHPass != "undefined" && (QHPass.resConfig.reloadAfterLogout = !1, l.on("click", "#mequit",
        function() {
            QHPass.logout()
        })),
        e.addEventListener("load",
        function(t) {
            $.hideScroll(),
            e.applicationCache && (e.applicationCache.addEventListener("error",
            function() {
                console.log("Error: Cache failed to update!")
            },
            !1), e.applicationCache.addEventListener("updateready",
            function(t) {
                e.applicationCache.status == e.applicationCache.UPDATEREADY && (e.applicationCache.swapCache(), e.location.reload())
            },
            !1))
        },
        !1)
    })
})(window);
function is(e, t) {
    return typeof e === t
}
function testProps(e, t) {
    for (var n in e) if (mStyle[e[n]] !== undefined) return t == "pfx" ? e[n] : !0;
    return ! 1
}
function testPropsAll(e, t, n) {
    var r = e.charAt(0).toUpperCase() + e.substr(1),
    i = (e + " " + cssomPrefixes.join(r + " ") + r).split(" ");
    if (is(t, "string") || is(t, "undefined")) return testProps(i, t)
}
var css3 = {},
docElement = document.documentElement,
mod = "modernizr",
injectElementWithStyles = function(e, t, n, r) {
    var i, s, o, u = document.createElement("div"),
    a = document.body,
    f = a ? a: document.createElement("body");
    if (parseInt(n, 10)) while (n--) o = document.createElement("div"),
    o.id = r ? r[n] : mod + (n + 1),
    u.appendChild(o);
    return i = ["&#173;", '<style id="s', mod, '">', e, "</style>"].join(""),
    u.id = mod,
    (a ? u: f).innerHTML += i,
    f.appendChild(u),
    a || (f.style.background = "", docElement.appendChild(f)),
    s = t(u, e),
    a ? u.parentNode.removeChild(u) : f.parentNode.removeChild(f),
    !!s
},
cssomPrefixes = "Webkit Moz O ms".split(" "),
mStyle = docElement.style;
css3.hasTransform = function() {
    return !! testPropsAll("transform")
},
css3.has3d = function() {
    var e = !!testPropsAll("perspective");
    return e && "webkitPerspective" in docElement.style && injectElementWithStyles("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",
    function(t, n) {
        e = t.offsetLeft === 9 && t.offsetHeight === 3
    }),
    e
};
var isAndroid = /android/gi.test(navigator.appVersion),
has3d = css3.has3d(),
hasTransform = css3.hasTransform(),
gv1 = has3d ? "translate3d(": "translate(",
gv2 = has3d ? ",0)": ")";
$.touchSlider = function(e, t) {
    if (!e) return null;
    t ? t.container = e: t = typeof e == "string" ? {
        container: e
    }: e,
    $.extend(this, {
        container: ".slider",
        wrap: null,
        panel: null,
        trigger: null,
        activeTriggerCls: "sel",
        hasTrigger: !0,
        hasTouch: !0,
        steps: 0,
        autoResize: 1,
        left: 0,
        reduce: 0,
        visible: 1,
        margin: 0,
        curIndex: 0,
        len: 3,
        duration: 500,
        loop: !1,
        play: !1,
        repeat: -1,
        interval: 5e3,
        useTransform: !isAndroid,
        isEvent: !0,
        callback: null,
        prev: null,
        next: null,
        activePnCls: "none"
    },
    t),
    this.initialize()
},
$.extend($.touchSlider.prototype, {
    initialize: function() {
        this.findEl() && this.init(),
        this.isEvent && this.initEvent()
    },
    reset: function(e) {
        $.extend(this, e || {}),
        this.init(),
        this.isEvent ? this.initEvent() : this.destroy()
    },
    resetItemWidth: function(e) {
        var t = this,
        n = this.panel.find("li");
        this.wrap.css({
            height: (this.ratio || .2708) * e + "px",
            width: e + "px",
            overflow: "hidden"
        }),
        this.itemWidth = e,
        this.steps = this.itemWidth,
        this.panel.css("width", this.itemWidth * n.length),
        this.panel.find("img").css("width", "100%"),
        n.css("width", this.itemWidth),
        n.eq(n.length - 1).css("left", -t.steps * n.length),
        this.slideTo(this.curIndex)
    },
    findEl: function() {
        var e = this.container = $(this.container);
        return e.length ? (this.wrap = this.wrap && e.find(this.wrap) || e.children().first(), this.wrap.length ? (this.panel = this.panel && e.find(this.panel) || this.wrap.children().first(), this.panel.length ? (this.panels = this.panel.children(), this.panels.length ? (this.trigger = this.trigger && e.find(this.trigger), this.prev = this.prev && e.find(this.prev), this.next = this.next && e.find(this.next), this) : (this.container.hide(), null)) : null) : null) : null
    },
    init: function() {
        var e = this.wrap,
        t = this.panel,
        n = this.container,
        r = this.panels,
        i = this.trigger,
        s = this.len || r.length,
        o = this.margin,
        u = 0,
        a = this.visible,
        f = this.useTransform = hasTransform ? this.useTransform: !1,
        l = (this.fact ? this.fact.width() : e.width()) - this.reduce;
        this.steps = l;
        var c = this.steps;
        r.each(function(e, t) {
            $(t).css("width", c),
            u += c
        }),
        o && typeof o == "number" && (u += (s - 1) * o, this.steps += o),
        a > 1 && (this.loop = !1);
        var h = this.left;
        h -= this.curIndex * this.steps,
        this.setCoord(t, h),
        f && (e.css({
            "-webkit-transform": "translate3d(0,0,0)"
        }), t.css({
            "-webkit-backface-visibility": "hidden"
        }), r.css({
            "-webkit-transform": gv1 + "0,0" + gv2
        }));
        var p = this._pages = Math.ceil(s / a);
        this._minpage = 0,
        this._maxpage = this._pages - 1;
        if (p <= 1) return i && i.hide(),
        null;
        if (this.loop) {
            t.append(r[0].cloneNode(!0));
            var d = r[s - 1].cloneNode(!0);
            t.append(d),
            d.style.cssText += "position:relative;left:" + -this.steps * (s + 2) + "px;",
            u += r[0].offsetWidth,
            u += r[s - 1].offsetWidth
        }
        t.css("width", u);
        if (i && i.length) {
            var v = "",
            m = i.children();
            if (!m.length) {
                for (var g = 0; g < p; g++) v += "<span" + (g == this.curIndex ? " class=" + this.activeTriggerCls + "": "") + "></span>";
                i.html(v)
            }
            this.triggers = i.children(),
            this.triggerSel = this.triggers[this.curIndex]
        } else this.hasTrigger = !1;
        return this.update(),
        this
    },
    initEvent: function() {
        var e = this,
        t = e.wrap[0],
        n = e.prev,
        r = e.next,
        i = e.triggers;
        t.addEventListener && e.hasTouch && (t.addEventListener("touchstart", e, !1), t.addEventListener("touchmove", e, !1), t.addEventListener("touchend", e, !1), t.addEventListener("webkitTransitionEnd", e, !1)),
        e.play && e.begin(),
        n && n.length && n.on("click",
        function(t) {
            e.backward.call(e, t)
        }),
        r && r.length && r.on("click",
        function(t) {
            e.forward.call(e, t)
        }),
        e.hasTrigger && i && i.each(function(t, n) {
            $(n).on("click",
            function() {
                e.slideTo(t)
            })
        }),
        e.isEvent = 1,
        e.autoResize && ($(window).on("ortchange",
        function() {
            e.init()
        }), $(window).on("resize",
        function() {
            e.init()
        }))
    },
    handleEvent: function(e) {
        switch (e.type) {
        case "touchstart":
            this.start(e);
            break;
        case "touchmove":
            this.move(e);
            break;
        case "touchend":
        case "touchcancel":
            this.end(e);
            break;
        case "webkitTransitionEnd":
            this.transitionEnd(e)
        }
    },
    start: function(e) {
        var t = e.touches[0];
        this._movestart = undefined,
        this._disX = 0,
        this._coord = {
            x: t.pageX,
            y: t.pageY
        }
    },
    move: function(e) {
        if (e.touches.length > 1 || e.scale && e.scale !== 1) return;
        var t = e.touches[0],
        n = this._disX = t.pageX - this._coord.x,
        r = this.left,
        i;
        typeof this._movestart == "undefined" && (this._movestart = !!(this._movestart || Math.abs(n) < Math.abs(t.pageY - this._coord.y))),
        this._movestart || (e.preventDefault(), this.stop(), this.loop || (n /= !this.curIndex && n > 0 || this.curIndex == this._maxpage && n < 0 ? Math.abs(n) / this.steps + 1 : 1), i = r - this.curIndex * this.steps + n, this.setCoord(this.panel, i), this._disX = n)
    },
    end: function(e) {
        if (!this._movestart) {
            var t = this._disX;
            t < -10 ? (e.preventDefault(), this.forward()) : t > 10 && (e.preventDefault(), this.backward())
        }
    },
    backward: function(e) {
        e && e.preventDefault && e.preventDefault();
        var t = this.curIndex,
        n = this._minpage;
        t -= 1,
        this.repeat >= 0 && t == this.repeat && (t -= 1),
        t < n && (this.loop ? t = n - 1 : t = n),
        this.slideTo(t)
    },
    forward: function(e) {
        e && e.preventDefault && e.preventDefault();
        var t = this.curIndex,
        n = this._maxpage;
        t += 1,
        this.repeat >= 0 && t == this.repeat && (t += 1),
        t > n && (this.loop ? t = n + 1 : t = n),
        this.slideTo(t)
    },
    setCoord: function(e, t) {
        this.useTransform && e.css("-webkit-transform", gv1 + t + "px,0" + gv2) || e.css("left", t)
    },
    slideTo: function(e, t) {
        e = e || 0,
        this.curIndex = e;
        var n = this.panel,
        r = n[0].style,
        i = this.left - e * this.steps;
        r.webkitTransitionDuration = r.MozTransitionDuration = r.msTransitionDuration = r.OTransitionDuration = r.transitionDuration = (t || this.duration) + "ms",
        this.setCoord(n, i),
        this.update(),
        !this.hasTouch && this.callback && this.callback()
    },
    transitionEnd: function() {
        var e = this.panel,
        t = e[0].style,
        n = this.loop,
        r = this.curIndex;
        n && (r > this._maxpage ? this.curIndex = 0 : r < this._minpage && (this.curIndex = this._maxpage), this.setCoord(e, this.left - this.curIndex * this.steps)),
        !n && r == this._maxpage ? (this.stop(), this.play = !1) : this.begin(),
        this.update(),
        t.webkitTransitionDuration = t.transitionDuration = 0,
        this.updateArrow(),
        this.hasTouch && this.callback && this.callback()
    },
    update: function() {
        var e = this.triggers,
        t = this.activeTriggerCls,
        n = this.curIndex;
        e && e[n] && (this.triggerSel && (this.triggerSel.className = ""), e.removeClass(t), e[n].className = t, this.triggerSel = e[n])
    },
    updateArrow: function() {
        var e = this.prev,
        t = this.next;
        if (!e || !e.length || !t || !t.length) return;
        if (this.loop) return;
        var n = this.curIndex,
        r = this.activePnCls,
        i = this._maxpage,
        s = this.repeat;
        n <= 0 ? e.addClass(r) : e.removeClass(r),
        n >= i ? t.addClass(r) : t.removeClass(r),
        s > -1 && (n == 1 && s == 0 && e.addClass(r), n == i - 1 && s == i && t.addClass(r))
    },
    begin: function() {
        var e = this;
        e.play && !e._playTimer && (e.stop(), e._playTimer = setInterval(function() {
            e.forward()
        },
        e.interval))
    },
    stop: function() {
        var e = this;
        e.play && e._playTimer && (clearInterval(e._playTimer), e._playTimer = null)
    },
    destroy: function() {
        var e = this,
        t = e.wrap[0],
        n = e.prev,
        r = e.next,
        i = e.triggers;
        t.removeEventListener && e.hasTouch && (t.removeEventListener("touchstart", e, !1), t.removeEventListener("touchmove", e, !1), t.removeEventListener("touchend", e, !1), t.removeEventListener("webkitTransitionEnd", e, !1)),
        n && n.length && n.off("click"),
        r && r.length && r.off("click"),
        e.hasTrigger && i && i.each(function(e, t) {
            $(t).off("click")
        }),
        e.isEvent = 0
    }
}),
$.touchSlider.cache = [],
$.fn.slider = function(e) {
    return this.each(function(t, n) {
        n.getAttribute("l") || (n.setAttribute("l", !0), $.touchSlider.cache.push(new $.touchSlider(n, e)))
    })
},
$.touchSlider.destroy = function() {
    var e = $.touchSlider.cache,
    t = e.length;
    if (t < 1) return;
    for (var n = 0; n < t; n++) e[n].destroy();
    $.touchSlider.cache = []
};
/*! * iScroll v4.2.5 ~ Copyright (c) 2012 Matteo Spinelli, http://cubiq.org * Released under MIT license, http://cubiq.org/license */
(function(e, t) {
    function A(e) {
        return i === "" ? e: (e = e.charAt(0).toUpperCase() + e.substr(1), i + e)
    }
    var n = Math,
    r = t.createElement("div").style,
    i = function() {
        var e = "t,webkitT,MozT,msT,OT".split(","),
        t,
        n = 0,
        i = e.length;
        for (; n < i; n++) {
            t = e[n] + "ransform";
            if (t in r) return e[n].substr(0, e[n].length - 1)
        }
        return ! 1
    } (),
    s = i ? "-" + i.toLowerCase() + "-": "",
    o = A("transform"),
    u = A("transitionProperty"),
    a = A("transitionDuration"),
    f = A("transformOrigin"),
    l = A("transitionTimingFunction"),
    c = A("transitionDelay"),
    h = /android/gi.test(navigator.appVersion),
    p = /iphone|ipad/gi.test(navigator.appVersion),
    d = /hp-tablet/gi.test(navigator.appVersion),
    v = A("perspective") in r,
    m = "ontouchstart" in e && !d,
    g = i !== !1,
    y = A("transition") in r,
    b = "onorientationchange" in e ? "orientationchange": "resize",
    w = m ? "touchstart": "mousedown",
    E = m ? "touchmove": "mousemove",
    S = m ? "touchend": "mouseup",
    x = m ? "touchcancel": "mouseup",
    T = function() {
        if (i === !1) return ! 1;
        var e = {
            "": "transitionend",
            webkit: "webkitTransitionEnd",
            Moz: "transitionend",
            O: "otransitionend",
            ms: "MSTransitionEnd"
        };
        return e[i]
    } (),
    N = function() {
        return e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame ||
        function(e) {
            return setTimeout(e, 1)
        }
    } (),
    C = function() {
        return e.cancelRequestAnimationFrame || e.webkitCancelAnimationFrame || e.webkitCancelRequestAnimationFrame || e.mozCancelRequestAnimationFrame || e.oCancelRequestAnimationFrame || e.msCancelRequestAnimationFrame || clearTimeout
    } (),
    k = v ? " translateZ(0)": "",
    L = function(n, r) {
        var i = this,
        c;
        i.wrapper = typeof n == "object" ? n: t.getElementById(n),
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
            handleClick: !0,
            hScrollbar: !0,
            vScrollbar: !0,
            fixedScrollbar: h,
            hideScrollbar: p,
            fadeScrollbar: p && v,
            scrollbarClass: "",
            zoom: !1,
            zoomMin: 1,
            zoomMax: 4,
            doubleTapZoom: 2,
            wheelAction: "scroll",
            snap: !1,
            snapThreshold: 1,
            onRefresh: null,
            onBeforeScrollStart: function(e) {
                e.preventDefault()
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
        for (c in r) i.options[c] = r[c];
        i.x = i.options.x,
        i.y = i.options.y,
        i.options.useTransform = g && i.options.useTransform,
        i.options.hScrollbar = i.options.hScroll && i.options.hScrollbar,
        i.options.vScrollbar = i.options.vScroll && i.options.vScrollbar,
        i.options.zoom = i.options.useTransform && i.options.zoom,
        i.options.useTransition = y && i.options.useTransition,
        i.options.zoom && h && (k = ""),
        i.scroller.style[u] = i.options.useTransform ? s + "transform": "top left",
        i.scroller.style[a] = "0",
        i.scroller.style[f] = "0 0",
        i.options.useTransition && (i.scroller.style[l] = "cubic-bezier(0.33,0.66,0.66,1)"),
        i.options.useTransform ? i.scroller.style[o] = "translate(" + i.x + "px," + i.y + "px)" + k: i.scroller.style.cssText += ";position:absolute;top:" + i.y + "px;left:" + i.x + "px",
        i.options.useTransition && (i.options.fixedScrollbar = !0),
        i.refresh(),
        i._bind(b, e),
        i._bind(w),
        m || i.options.wheelAction != "none" && (i._bind("DOMMouseScroll"), i._bind("mousewheel")),
        i.options.checkDOMChanges && (i.checkDOMTime = setInterval(function() {
            i._checkDOMChanges()
        },
        500))
    };
    L.prototype = {
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
        handleEvent: function(e) {
            var t = this;
            switch (e.type) {
            case w:
                if (!m && e.button !== 0) return;
                t._start(e);
                break;
            case E:
                t._move(e);
                break;
            case S:
            case x:
                t._end(e);
                break;
            case b:
                t._resize();
                break;
            case "DOMMouseScroll":
            case "mousewheel":
                t._wheel(e);
                break;
            case T:
                t._transitionEnd(e)
            }
        },
        _checkDOMChanges: function() {
            if (this.moved || this.zoomed || this.animating || this.scrollerW == this.scroller.offsetWidth * this.scale && this.scrollerH == this.scroller.offsetHeight * this.scale) return;
            this.refresh()
        },
        _scrollbar: function(e) {
            var r = this,
            i;
            if (!r[e + "Scrollbar"]) {
                r[e + "ScrollbarWrapper"] && (g && (r[e + "ScrollbarIndicator"].style[o] = ""), r[e + "ScrollbarWrapper"].parentNode.removeChild(r[e + "ScrollbarWrapper"]), r[e + "ScrollbarWrapper"] = null, r[e + "ScrollbarIndicator"] = null);
                return
            }
            r[e + "ScrollbarWrapper"] || (i = t.createElement("div"), r.options.scrollbarClass ? i.className = r.options.scrollbarClass + e.toUpperCase() : i.style.cssText = "position:absolute;z-index:100;" + (e == "h" ? "height:7px;bottom:1px;left:2px;right:" + (r.vScrollbar ? "7": "2") + "px": "width:7px;bottom:" + (r.hScrollbar ? "7": "2") + "px;top:2px;right:1px"), i.style.cssText += ";pointer-events:none;" + s + "transition-property:opacity;" + s + "transition-duration:" + (r.options.fadeScrollbar ? "350ms": "0") + ";overflow:hidden;opacity:" + (r.options.hideScrollbar ? "0": "1"), r.wrapper.appendChild(i), r[e + "ScrollbarWrapper"] = i, i = t.createElement("div"), r.options.scrollbarClass || (i.style.cssText = "position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);" + s + "background-clip:padding-box;" + s + "box-sizing:border-box;" + (e == "h" ? "height:100%": "width:100%") + ";" + s + "border-radius:3px;border-radius:3px"), i.style.cssText += ";pointer-events:none;" + s + "transition-property:" + s + "transform;" + s + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);" + s + "transition-duration:0;" + s + "transform: translate(0,0)" + k, r.options.useTransition && (i.style.cssText += ";" + s + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"), r[e + "ScrollbarWrapper"].appendChild(i), r[e + "ScrollbarIndicator"] = i),
            e == "h" ? (r.hScrollbarSize = r.hScrollbarWrapper.clientWidth, r.hScrollbarIndicatorSize = n.max(n.round(r.hScrollbarSize * r.hScrollbarSize / r.scrollerW), 8), r.hScrollbarIndicator.style.width = r.hScrollbarIndicatorSize + "px", r.hScrollbarMaxScroll = r.hScrollbarSize - r.hScrollbarIndicatorSize, r.hScrollbarProp = r.hScrollbarMaxScroll / r.maxScrollX) : (r.vScrollbarSize = r.vScrollbarWrapper.clientHeight, r.vScrollbarIndicatorSize = n.max(n.round(r.vScrollbarSize * r.vScrollbarSize / r.scrollerH), 8), r.vScrollbarIndicator.style.height = r.vScrollbarIndicatorSize + "px", r.vScrollbarMaxScroll = r.vScrollbarSize - r.vScrollbarIndicatorSize, r.vScrollbarProp = r.vScrollbarMaxScroll / r.maxScrollY),
            r._scrollbarPos(e, !0)
        },
        _resize: function() {
            var e = this;
            setTimeout(function() {
                e.refresh()
            },
            h ? 200 : 0)
        },
        _pos: function(e, t) {
            if (this.zoomed) return;
            e = this.hScroll ? e: 0,
            t = this.vScroll ? t: 0,
            this.options.useTransform ? this.scroller.style[o] = "translate(" + e + "px," + t + "px) scale(" + this.scale + ")" + k: (e = n.round(e), t = n.round(t), this.scroller.style.left = e + "px", this.scroller.style.top = t + "px"),
            this.x = e,
            this.y = t,
            this._scrollbarPos("h"),
            this._scrollbarPos("v")
        },
        _scrollbarPos: function(e, t) {
            var r = this,
            i = e == "h" ? r.x: r.y,
            s;
            if (!r[e + "Scrollbar"]) return;
            i = r[e + "ScrollbarProp"] * i,
            i < 0 ? (r.options.fixedScrollbar || (s = r[e + "ScrollbarIndicatorSize"] + n.round(i * 3), s < 8 && (s = 8), r[e + "ScrollbarIndicator"].style[e == "h" ? "width": "height"] = s + "px"), i = 0) : i > r[e + "ScrollbarMaxScroll"] && (r.options.fixedScrollbar ? i = r[e + "ScrollbarMaxScroll"] : (s = r[e + "ScrollbarIndicatorSize"] - n.round((i - r[e + "ScrollbarMaxScroll"]) * 3), s < 8 && (s = 8), r[e + "ScrollbarIndicator"].style[e == "h" ? "width": "height"] = s + "px", i = r[e + "ScrollbarMaxScroll"] + (r[e + "ScrollbarIndicatorSize"] - s))),
            r[e + "ScrollbarWrapper"].style[c] = "0",
            r[e + "ScrollbarWrapper"].style.opacity = t && r.options.hideScrollbar ? "0": "1",
            r[e + "ScrollbarIndicator"].style[o] = "translate(" + (e == "h" ? i + "px,0)": "0," + i + "px)") + k
        },
        _start: function(t) {
            var r = this,
            i = m ? t.touches[0] : t,
            s,
            u,
            a,
            f,
            l;
            if (!r.enabled) return;
            r.options.onBeforeScrollStart && r.options.onBeforeScrollStart.call(r, t),
            (r.options.useTransition || r.options.zoom) && r._transitionTime(0),
            r.moved = !1,
            r.animating = !1,
            r.zoomed = !1,
            r.distX = 0,
            r.distY = 0,
            r.absDistX = 0,
            r.absDistY = 0,
            r.dirX = 0,
            r.dirY = 0,
            r.options.zoom && m && t.touches.length > 1 && (f = n.abs(t.touches[0].pageX - t.touches[1].pageX), l = n.abs(t.touches[0].pageY - t.touches[1].pageY), r.touchesDistStart = n.sqrt(f * f + l * l), r.originX = n.abs(t.touches[0].pageX + t.touches[1].pageX - r.wrapperOffsetLeft * 2) / 2 - r.x, r.originY = n.abs(t.touches[0].pageY + t.touches[1].pageY - r.wrapperOffsetTop * 2) / 2 - r.y, r.options.onZoomStart && r.options.onZoomStart.call(r, t));
            if (r.options.momentum) {
                r.options.useTransform ? (s = getComputedStyle(r.scroller, null)[o].replace(/[^0-9\-.,]/g, "").split(","), u = +(s[12] || s[4]), a = +(s[13] || s[5])) : (u = +getComputedStyle(r.scroller, null).left.replace(/[^0-9-]/g, ""), a = +getComputedStyle(r.scroller, null).top.replace(/[^0-9-]/g, ""));
                if (u != r.x || a != r.y) r.options.useTransition ? r._unbind(T) : C(r.aniTime),
                r.steps = [],
                r._pos(u, a),
                r.options.onScrollEnd && r.options.onScrollEnd.call(r)
            }
            r.absStartX = r.x,
            r.absStartY = r.y,
            r.startX = r.x,
            r.startY = r.y,
            r.pointX = i.pageX,
            r.pointY = i.pageY,
            r.startTime = t.timeStamp || Date.now(),
            r.options.onScrollStart && r.options.onScrollStart.call(r, t),
            r._bind(E, e),
            r._bind(S, e),
            r._bind(x, e)
        },
        _move: function(e) {
            var t = this,
            r = m ? e.touches[0] : e,
            i = r.pageX - t.pointX,
            s = r.pageY - t.pointY,
            u = t.x + i,
            a = t.y + s,
            f,
            l,
            c,
            h = e.timeStamp || Date.now();
            t.options.onBeforeScrollMove && t.options.onBeforeScrollMove.call(t, e);
            if (t.options.zoom && m && e.touches.length > 1) {
                f = n.abs(e.touches[0].pageX - e.touches[1].pageX),
                l = n.abs(e.touches[0].pageY - e.touches[1].pageY),
                t.touchesDist = n.sqrt(f * f + l * l),
                t.zoomed = !0,
                c = 1 / t.touchesDistStart * t.touchesDist * this.scale,
                c < t.options.zoomMin ? c = .5 * t.options.zoomMin * Math.pow(2, c / t.options.zoomMin) : c > t.options.zoomMax && (c = 2 * t.options.zoomMax * Math.pow(.5, t.options.zoomMax / c)),
                t.lastScale = c / this.scale,
                u = this.originX - this.originX * t.lastScale + this.x,
                a = this.originY - this.originY * t.lastScale + this.y,
                this.scroller.style[o] = "translate(" + u + "px," + a + "px) scale(" + c + ")" + k,
                t.options.onZoom && t.options.onZoom.call(t, e);
                return
            }
            t.pointX = r.pageX,
            t.pointY = r.pageY;
            if (u > 0 || u < t.maxScrollX) u = t.options.bounce ? t.x + i / 2 : u >= 0 || t.maxScrollX >= 0 ? 0 : t.maxScrollX;
            if (a > t.minScrollY || a < t.maxScrollY) a = t.options.bounce ? t.y + s / 2 : a >= t.minScrollY || t.maxScrollY >= 0 ? t.minScrollY: t.maxScrollY;
            t.distX += i,
            t.distY += s,
            t.absDistX = n.abs(t.distX),
            t.absDistY = n.abs(t.distY);
            if (t.absDistX < 6 && t.absDistY < 6) return;
            t.options.lockDirection && (t.absDistX > t.absDistY + 5 ? (a = t.y, s = 0) : t.absDistY > t.absDistX + 5 && (u = t.x, i = 0)),
            t.moved = !0,
            t._pos(u, a),
            t.dirX = i > 0 ? -1 : i < 0 ? 1 : 0,
            t.dirY = s > 0 ? -1 : s < 0 ? 1 : 0,
            h - t.startTime > 300 && (t.startTime = h, t.startX = t.x, t.startY = t.y),
            t.options.onScrollMove && t.options.onScrollMove.call(t, e)
        },
        _end: function(r) {
            if (m && r.touches.length !== 0) return;
            var i = this,
            s = m ? r.changedTouches[0] : r,
            u,
            f,
            l = {
                dist: 0,
                time: 0
            },
            c = {
                dist: 0,
                time: 0
            },
            h = (r.timeStamp || Date.now()) - i.startTime,
            p = i.x,
            d = i.y,
            v,
            g,
            y,
            b,
            w;
            i._unbind(E, e),
            i._unbind(S, e),
            i._unbind(x, e),
            i.options.onBeforeScrollEnd && i.options.onBeforeScrollEnd.call(i, r);
            if (i.zoomed) {
                w = i.scale * i.lastScale,
                w = Math.max(i.options.zoomMin, w),
                w = Math.min(i.options.zoomMax, w),
                i.lastScale = w / i.scale,
                i.scale = w,
                i.x = i.originX - i.originX * i.lastScale + i.x,
                i.y = i.originY - i.originY * i.lastScale + i.y,
                i.scroller.style[a] = "200ms",
                i.scroller.style[o] = "translate(" + i.x + "px," + i.y + "px) scale(" + i.scale + ")" + k,
                i.zoomed = !1,
                i.refresh(),
                i.options.onZoomEnd && i.options.onZoomEnd.call(i, r);
                return
            }
            if (!i.moved) {
                m && (i.doubleTapTimer && i.options.zoom ? (clearTimeout(i.doubleTapTimer), i.doubleTapTimer = null, i.options.onZoomStart && i.options.onZoomStart.call(i, r), i.zoom(i.pointX, i.pointY, i.scale == 1 ? i.options.doubleTapZoom: 1), i.options.onZoomEnd && setTimeout(function() {
                    i.options.onZoomEnd.call(i, r)
                },
                200)) : this.options.handleClick && (i.doubleTapTimer = setTimeout(function() {
                    i.doubleTapTimer = null,
                    u = s.target;
                    while (u.nodeType != 1) u = u.parentNode;
                    u.tagName != "SELECT" && u.tagName != "INPUT" && u.tagName != "TEXTAREA" && (f = t.createEvent("MouseEvents"), f.initMouseEvent("click", !0, !0, r.view, 1, s.screenX, s.screenY, s.clientX, s.clientY, r.ctrlKey, r.altKey, r.shiftKey, r.metaKey, 0, null), f._fake = !0, u.dispatchEvent(f))
                },
                i.options.zoom ? 250 : 0))),
                i._resetPos(400),
                i.options.onTouchEnd && i.options.onTouchEnd.call(i, r);
                return
            }
            if (h < 300 && i.options.momentum) {
                l = p ? i._momentum(p - i.startX, h, -i.x, i.scrollerW - i.wrapperW + i.x, i.options.bounce ? i.wrapperW: 0) : l,
                c = d ? i._momentum(d - i.startY, h, -i.y, i.maxScrollY < 0 ? i.scrollerH - i.wrapperH + i.y - i.minScrollY: 0, i.options.bounce ? i.wrapperH: 0) : c,
                p = i.x + l.dist,
                d = i.y + c.dist;
                if (i.x > 0 && p > 0 || i.x < i.maxScrollX && p < i.maxScrollX) l = {
                    dist: 0,
                    time: 0
                };
                if (i.y > i.minScrollY && d > i.minScrollY || i.y < i.maxScrollY && d < i.maxScrollY) c = {
                    dist: 0,
                    time: 0
                }
            }
            if (l.dist || c.dist) {
                y = n.max(n.max(l.time, c.time), 10),
                i.options.snap && (v = p - i.absStartX, g = d - i.absStartY, n.abs(v) < i.options.snapThreshold && n.abs(g) < i.options.snapThreshold ? i.scrollTo(i.absStartX, i.absStartY, 200) : (b = i._snap(p, d), p = b.x, d = b.y, y = n.max(b.time, y))),
                i.scrollTo(n.round(p), n.round(d), y),
                i.options.onTouchEnd && i.options.onTouchEnd.call(i, r);
                return
            }
            if (i.options.snap) {
                v = p - i.absStartX,
                g = d - i.absStartY,
                n.abs(v) < i.options.snapThreshold && n.abs(g) < i.options.snapThreshold ? i.scrollTo(i.absStartX, i.absStartY, 200) : (b = i._snap(i.x, i.y), (b.x != i.x || b.y != i.y) && i.scrollTo(b.x, b.y, b.time)),
                i.options.onTouchEnd && i.options.onTouchEnd.call(i, r);
                return
            }
            i._resetPos(200),
            i.options.onTouchEnd && i.options.onTouchEnd.call(i, r)
        },
        _resetPos: function(e) {
            var t = this,
            n = t.x >= 0 ? 0 : t.x < t.maxScrollX ? t.maxScrollX: t.x,
            r = t.y >= t.minScrollY || t.maxScrollY > 0 ? t.minScrollY: t.y < t.maxScrollY ? t.maxScrollY: t.y;
            if (n == t.x && r == t.y) {
                t.moved && (t.moved = !1, t.options.onScrollEnd && t.options.onScrollEnd.call(t)),
                t.hScrollbar && t.options.hideScrollbar && (i == "webkit" && (t.hScrollbarWrapper.style[c] = "300ms"), t.hScrollbarWrapper.style.opacity = "0"),
                t.vScrollbar && t.options.hideScrollbar && (i == "webkit" && (t.vScrollbarWrapper.style[c] = "300ms"), t.vScrollbarWrapper.style.opacity = "0");
                return
            }
            t.scrollTo(n, r, e || 0)
        },
        _wheel: function(e) {
            var t = this,
            n, r, i, s, o;
            if ("wheelDeltaX" in e) n = e.wheelDeltaX / 12,
            r = e.wheelDeltaY / 12;
            else if ("wheelDelta" in e) n = r = e.wheelDelta / 12;
            else {
                if (! ("detail" in e)) return;
                n = r = -e.detail * 3
            }
            if (t.options.wheelAction == "zoom") {
                o = t.scale * Math.pow(2, 1 / 3 * (r ? r / Math.abs(r) : 0)),
                o < t.options.zoomMin && (o = t.options.zoomMin),
                o > t.options.zoomMax && (o = t.options.zoomMax),
                o != t.scale && (!t.wheelZoomCount && t.options.onZoomStart && t.options.onZoomStart.call(t, e), t.wheelZoomCount++, t.zoom(e.pageX, e.pageY, o, 400), setTimeout(function() {
                    t.wheelZoomCount--,
                    !t.wheelZoomCount && t.options.onZoomEnd && t.options.onZoomEnd.call(t, e)
                },
                400));
                return
            }
            i = t.x + n,
            s = t.y + r,
            i > 0 ? i = 0 : i < t.maxScrollX && (i = t.maxScrollX),
            s > t.minScrollY ? s = t.minScrollY: s < t.maxScrollY && (s = t.maxScrollY),
            t.maxScrollY < 0 && t.scrollTo(i, s, 0)
        },
        _transitionEnd: function(e) {
            var t = this;
            if (e.target != t.scroller) return;
            t._unbind(T),
            t._startAni()
        },
        _startAni: function() {
            var e = this,
            t = e.x,
            r = e.y,
            i = Date.now(),
            s,
            o,
            u;
            if (e.animating) return;
            if (!e.steps.length) {
                e._resetPos(400);
                return
            }
            s = e.steps.shift(),
            s.x == t && s.y == r && (s.time = 0),
            e.animating = !0,
            e.moved = !0;
            if (e.options.useTransition) {
                e._transitionTime(s.time),
                e._pos(s.x, s.y),
                e.animating = !1,
                s.time ? e._bind(T) : e._resetPos(0);
                return
            }
            u = function() {
                var a = Date.now(),
                f,
                l;
                if (a >= i + s.time) {
                    e._pos(s.x, s.y),
                    e.animating = !1,
                    e.options.onAnimationEnd && e.options.onAnimationEnd.call(e),
                    e._startAni();
                    return
                }
                a = (a - i) / s.time - 1,
                o = n.sqrt(1 - a * a),
                f = (s.x - t) * o + t,
                l = (s.y - r) * o + r,
                e._pos(f, l),
                e.animating && (e.aniTime = N(u))
            },
            u()
        },
        _transitionTime: function(e) {
            e += "ms",
            this.scroller.style[a] = e,
            this.hScrollbar && (this.hScrollbarIndicator.style[a] = e),
            this.vScrollbar && (this.vScrollbarIndicator.style[a] = e)
        },
        _momentum: function(e, t, r, i, s) {
            var o = 6e-4,
            u = n.abs(e) / t,
            a = u * u / (2 * o),
            f = 0,
            l = 0;
            return e > 0 && a > r ? (l = s / (6 / (a / u * o)), r += l, u = u * r / a, a = r) : e < 0 && a > i && (l = s / (6 / (a / u * o)), i += l, u = u * i / a, a = i),
            a *= e < 0 ? -1 : 1,
            f = u / o,
            {
                dist: a,
                time: n.round(f)
            }
        },
        _offset: function(e) {
            var t = -e.offsetLeft,
            n = -e.offsetTop;
            while (e = e.offsetParent) t -= e.offsetLeft,
            n -= e.offsetTop;
            return e != this.wrapper && (t *= this.scale, n *= this.scale),
            {
                left: t,
                top: n
            }
        },
        _snap: function(e, t) {
            var r = this,
            i, s, o, u, a, f;
            o = r.pagesX.length - 1;
            for (i = 0, s = r.pagesX.length; i < s; i++) if (e >= r.pagesX[i]) {
                o = i;
                break
            }
            o == r.currPageX && o > 0 && r.dirX < 0 && o--,
            e = r.pagesX[o],
            a = n.abs(e - r.pagesX[r.currPageX]),
            a = a ? n.abs(r.x - e) / a * 500 : 0,
            r.currPageX = o,
            o = r.pagesY.length - 1;
            for (i = 0; i < o; i++) if (t >= r.pagesY[i]) {
                o = i;
                break
            }
            return o == r.currPageY && o > 0 && r.dirY < 0 && o--,
            t = r.pagesY[o],
            f = n.abs(t - r.pagesY[r.currPageY]),
            f = f ? n.abs(r.y - t) / f * 500 : 0,
            r.currPageY = o,
            u = n.round(n.max(a, f)) || 200,
            {
                x: e,
                y: t,
                time: u
            }
        },
        _bind: function(e, t, n) { (t || this.scroller).addEventListener(e, this, !!n)
        },
        _unbind: function(e, t, n) { (t || this.scroller).removeEventListener(e, this, !!n)
        },
        destroy: function() {
            var t = this;
            t.scroller.style[o] = "",
            t.hScrollbar = !1,
            t.vScrollbar = !1,
            t._scrollbar("h"),
            t._scrollbar("v"),
            t._unbind(b, e),
            t._unbind(w),
            t._unbind(E, e),
            t._unbind(S, e),
            t._unbind(x, e),
            t.options.hasTouch || (t._unbind("DOMMouseScroll"), t._unbind("mousewheel")),
            t.options.useTransition && t._unbind(T),
            t.options.checkDOMChanges && clearInterval(t.checkDOMTime),
            t.options.onDestroy && t.options.onDestroy.call(t)
        },
        refresh: function() {
            var e = this,
            t, r, i, s, o = 0,
            u = 0;
            e.scale < e.options.zoomMin && (e.scale = e.options.zoomMin),
            e.wrapperW = e.wrapper.clientWidth || 1,
            e.wrapperH = e.wrapper.clientHeight || 1,
            e.minScrollY = -e.options.topOffset || 0,
            e.scrollerW = n.round(e.scroller.offsetWidth * e.scale),
            e.scrollerH = n.round((e.scroller.offsetHeight + e.minScrollY) * e.scale),
            e.maxScrollX = e.wrapperW - e.scrollerW,
            e.maxScrollY = e.wrapperH - e.scrollerH + e.minScrollY,
            e.dirX = 0,
            e.dirY = 0,
            e.options.onRefresh && e.options.onRefresh.call(e),
            e.hScroll = e.options.hScroll && e.maxScrollX < 0,
            e.vScroll = e.options.vScroll && (!e.options.bounceLock && !e.hScroll || e.scrollerH > e.wrapperH),
            e.hScrollbar = e.hScroll && e.options.hScrollbar,
            e.vScrollbar = e.vScroll && e.options.vScrollbar && e.scrollerH > e.wrapperH,
            t = e._offset(e.wrapper),
            e.wrapperOffsetLeft = -t.left,
            e.wrapperOffsetTop = -t.top;
            if (typeof e.options.snap == "string") {
                e.pagesX = [],
                e.pagesY = [],
                s = e.scroller.querySelectorAll(e.options.snap);
                for (r = 0, i = s.length; r < i; r++) o = e._offset(s[r]),
                o.left += e.wrapperOffsetLeft,
                o.top += e.wrapperOffsetTop,
                e.pagesX[r] = o.left < e.maxScrollX ? e.maxScrollX: o.left * e.scale,
                e.pagesY[r] = o.top < e.maxScrollY ? e.maxScrollY: o.top * e.scale
            } else if (e.options.snap) {
                e.pagesX = [];
                while (o >= e.maxScrollX) e.pagesX[u] = o,
                o -= e.wrapperW,
                u++;
                e.maxScrollX % e.wrapperW && (e.pagesX[e.pagesX.length] = e.maxScrollX - e.pagesX[e.pagesX.length - 1] + e.pagesX[e.pagesX.length - 1]),
                o = 0,
                u = 0,
                e.pagesY = [];
                while (o >= e.maxScrollY) e.pagesY[u] = o,
                o -= e.wrapperH,
                u++;
                e.maxScrollY % e.wrapperH && (e.pagesY[e.pagesY.length] = e.maxScrollY - e.pagesY[e.pagesY.length - 1] + e.pagesY[e.pagesY.length - 1])
            }
            e._scrollbar("h"),
            e._scrollbar("v"),
            e.zoomed || (e.scroller.style[a] = "0", e._resetPos(400))
        },
        scrollTo: function(e, t, n, r) {
            var i = this,
            s = e,
            o, u;
            i.stop(),
            s.length || (s = [{
                x: e,
                y: t,
                time: n,
                relative: r
            }]);
            for (o = 0, u = s.length; o < u; o++) s[o].relative && (s[o].x = i.x - s[o].x, s[o].y = i.y - s[o].y),
            i.steps.push({
                x: s[o].x,
                y: s[o].y,
                time: s[o].time || 0
            });
            i._startAni()
        },
        scrollToElement: function(e, t) {
            var r = this,
            i;
            e = e.nodeType ? e: r.scroller.querySelector(e);
            if (!e) return;
            i = r._offset(e),
            i.left += r.wrapperOffsetLeft,
            i.top += r.wrapperOffsetTop,
            i.left = i.left > 0 ? 0 : i.left < r.maxScrollX ? r.maxScrollX: i.left,
            i.top = i.top > r.minScrollY ? r.minScrollY: i.top < r.maxScrollY ? r.maxScrollY: i.top,
            t = t === undefined ? n.max(n.abs(i.left) * 2, n.abs(i.top) * 2) : t,
            r.scrollTo(i.left, i.top, t)
        },
        scrollToPage: function(e, t, n) {
            var r = this,
            i, s;
            n = n === undefined ? 400 : n,
            r.options.onScrollStart && r.options.onScrollStart.call(r),
            r.options.snap ? (e = e == "next" ? r.currPageX + 1 : e == "prev" ? r.currPageX - 1 : e, t = t == "next" ? r.currPageY + 1 : t == "prev" ? r.currPageY - 1 : t, e = e < 0 ? 0 : e > r.pagesX.length - 1 ? r.pagesX.length - 1 : e, t = t < 0 ? 0 : t > r.pagesY.length - 1 ? r.pagesY.length - 1 : t, r.currPageX = e, r.currPageY = t, i = r.pagesX[e], s = r.pagesY[t]) : (i = -r.wrapperW * e, s = -r.wrapperH * t, i < r.maxScrollX && (i = r.maxScrollX), s < r.maxScrollY && (s = r.maxScrollY)),
            r.scrollTo(i, s, n)
        },
        disable: function() {
            this.stop(),
            this._resetPos(0),
            this.enabled = !1,
            this._unbind(E, e),
            this._unbind(S, e),
            this._unbind(x, e)
        },
        enable: function() {
            this.enabled = !0
        },
        stop: function() {
            this.options.useTransition ? this._unbind(T) : C(this.aniTime),
            this.steps = [],
            this.moved = !1,
            this.animating = !1
        },
        zoom: function(e, t, n, r) {
            var i = this,
            s = n / i.scale;
            if (!i.options.useTransform) return;
            i.zoomed = !0,
            r = r === undefined ? 200 : r,
            e = e - i.wrapperOffsetLeft - i.x,
            t = t - i.wrapperOffsetTop - i.y,
            i.x = e - e * s + i.x,
            i.y = t - t * s + i.y,
            i.scale = n,
            i.refresh(),
            i.x = i.x > 0 ? 0 : i.x < i.maxScrollX ? i.maxScrollX: i.x,
            i.y = i.y > i.minScrollY ? i.minScrollY: i.y < i.maxScrollY ? i.maxScrollY: i.y,
            i.scroller.style[a] = r + "ms",
            i.scroller.style[o] = "translate(" + i.x + "px," + i.y + "px) scale(" + n + ")" + k,
            i.zoomed = !1
        },
        isReady: function() {
            return ! this.moved && !this.zoomed && !this.animating
        }
    },
    r = null,
    typeof exports != "undefined" ? exports.iScroll = L: e.iScroll = L
})(window, document); (function(e) {
    var t = e.kureicp || {};
    t.template = function(t, r) {
        var i = function() {
            if (!e.document) return n._compile(t);
            var r = document.getElementById(t);
            if (r) {
                if (n.cache[t]) return n.cache[t];
                var i = /^(textarea|input)$/i.test(r.nodeName) ? r.value: r.innerHTML;
                return n._compile(i)
            }
            return n._compile(t)
        } (),
        s = n._isObject(r) ? i(r) : i;
        return i = null,
        s
    };
    var n = t.template;
    n.versions = n.versions || [],
    n.versions.push("1.0.6"),
    n.cache = {},
    n.LEFT_DELIMITER = n.LEFT_DELIMITER || "<%",
    n.RIGHT_DELIMITER = n.RIGHT_DELIMITER || "%>",
    n.ESCAPE = !0,
    n._encodeHTML = function(e) {
        return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\\/g, "&#92;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
    },
    n._encodeReg = function(e) {
       return String(e).replace(/([.*+?^=!:${}()|[\]/\\])/g,"\\$1")
    },
    n._encodeEventHTML = function(e) {
        return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/\\\\/g, "\\").replace(/\\\//g, "/").replace(/\\n/g, "\n").replace(/\\r/g, "\r")
    },
    n._compile = function(e) {
        var t = "var _template_fun_array=[];\nvar fn=(function(__data__){\nvar _template_varName='';\nfor(name in __data__){\n_template_varName+=('var '+name+'=__data__[\"'+name+'\"];');\n};\neval(_template_varName);\n_template_fun_array.push('" + n._analysisStr(e) + "');\n_template_varName=null;\n})(_template_object);\nfn = null;\nreturn _template_fun_array.join('');\n";
        return new Function("_template_object", t)
    },
    n._isObject = function(e) {
        return "function" == typeof e || !!e && "object" == typeof e
    },
    n._analysisStr = function(e) {
        var t = n.LEFT_DELIMITER,
        r = n.RIGHT_DELIMITER,
        i = n._encodeReg(t),
        s = n._encodeReg(r);
        return e = String(e).replace(new RegExp("(" + i + "[^" + s + "]*)//.*\n", "g"), "$1").replace(new RegExp("<!--.*?-->", "g"), "").replace(new RegExp(i + "\\*.*?\\*" + s, "g"), "").replace(new RegExp("[\\r\\t\\n]", "g"), "").replace(new RegExp(i + "(?:(?!" + s + ")[\\s\\S])*" + s + "|((?:(?!" + i + ")[\\s\\S])+)", "g"),
        function(e, t) {
            var n = "";
            if (t) {
                n = t.replace(/\\/g, "&#92;").replace(/'/g, "&#39;");
                while (/<[^<]*?&#39;[^<]*?>/g.test(n)) n = n.replace(/(<[^<]*?)&#39;([^<]*?>)/g, "$1\r$2")
            } else n = e;
            return n
        }),
        e = e.replace(new RegExp("(" + i + "[\\s]*?var[\\s]*?.*?[\\s]*?[^;])[\\s]*?" + s, "g"), "$1;" + r).replace(new RegExp("(" + i + ":?[hvu]?[\\s]*?=[\\s]*?[^;|" + s + "]*?);[\\s]*?" + s, "g"), "$1" + r).split(t).join("	"),
        n.ESCAPE ? e = e.replace(new RegExp("\\t=(.*?)" + s, "g"), "',typeof($1) === 'undefined'?'':Q.template._encodeHTML($1),'") : e = e.replace(new RegExp("\\t=(.*?)" + s, "g"), "',typeof($1) === 'undefined'?'':$1,'"),
        e = e.replace(new RegExp("\\t:h=(.*?)" + s, "g"), "',typeof($1) === 'undefined'?'':Q.template._encodeHTML($1),'").replace(new RegExp("\\t(?::=|-)(.*?)" + s, "g"), "',typeof($1)==='undefined'?'':$1,'").replace(new RegExp("\\t:u=(.*?)" + s, "g"), "',typeof($1)==='undefined'?'':encodeURIComponent($1),'").replace(new RegExp("\\t:v=(.*?)" + s, "g"), "',typeof($1)==='undefined'?'':Q.template._encodeEventHTML($1),'").split("	").join("');").split(r).join("_template_fun_array.push('").split("\r").join("\\'"),
        e
    }
})(window);