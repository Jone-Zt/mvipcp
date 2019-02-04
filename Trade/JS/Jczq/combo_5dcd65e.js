!
function(t, i, s) {
    var e = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame ||
    function(i) {
        t.setTimeout(i, 1e3 / 60)
    };
    var o = function() {
        var e = {};
        var o = i.createElement("div").style;
        var n = function() {
            var t = ["t", "webkitT", "MozT", "msT", "OT"],
            i,
            s = 0,
            e = t.length;
            for (; s < e; s++) {
                i = t[s] + "ransform";
                if (i in o) return t[s].substr(0, t[s].length - 1)
            }
            return false
        } ();
        function r(t) {
            if (false === n) return false;
            if ("" === n) return t;
            return n + t.charAt(0).toUpperCase() + t.substr(1)
        }
        e.getTime = Date.now ||
        function a() {
            return (new Date).getTime()
        };
        e.extend = function(t, i) {
            for (var s in i) t[s] = i[s]
        };
        e.addEvent = function(t, i, s, e) {
            t.addEventListener(i, s, !!e)
        };
        e.removeEvent = function(t, i, s, e) {
            t.removeEventListener(i, s, !!e)
        };
        e.prefixPointerEvent = function(i) {
            return t.MSPointerEvent ? "MSPointer" + i.charAt(9).toUpperCase() + i.substr(10) : i
        };
        e.momentum = function(t, i, e, o, n, r) {
            var h = t - i,
            a = s.abs(h) / e,
            l,
            c;
            r = void 0 === r ? 6e-4: r;
            l = t + a * a / (2 * r) * (h < 0 ? -1 : 1);
            c = a / r;
            if (l < o) {
                l = n ? o - n / 2.5 * (a / 8) : o;
                h = s.abs(l - t);
                c = h / a
            } else if (l > 0) {
                l = n ? n / 2.5 * (a / 8) : 0;
                h = s.abs(t) + l;
                c = h / a
            }
            return {
                destination: s.round(l),
                duration: c
            }
        };
        var h = r("transform");
        e.extend(e, {
            hasTransform: false !== h,
            hasPerspective: r("perspective") in o,
            hasTouch: "ontouchstart" in t,
            hasPointer: t.PointerEvent || t.MSPointerEvent,
            hasTransition: r("transition") in o
        });
        e.isBadAndroid = /Android /.test(t.navigator.appVersion) && !/Chrome\/\d/.test(t.navigator.appVersion);
        e.isBadXiaoMI = /MI.*Build/.test(t.navigator.appVersion);
        e.extend(e.style = {},
        {
            transform: h,
            transitionTimingFunction: r("transitionTimingFunction"),
            transitionDuration: r("transitionDuration"),
            transitionDelay: r("transitionDelay"),
            transformOrigin: r("transformOrigin")
        });
        e.hasClass = function(t, i) {
            var s = new RegExp("(^|\\s)" + i + "(\\s|$)");
            return s.test(t.className)
        };
        e.addClass = function(t, i) {
            if (e.hasClass(t, i)) return;
            var s = t.className.split(" ");
            s.push(i);
            t.className = s.join(" ")
        };
        e.removeClass = function(t, i) {
            if (!e.hasClass(t, i)) return;
            var s = new RegExp("(^|\\s)" + i + "(\\s|$)", "g");
            t.className = t.className.replace(s, " ")
        };
        e.offset = function(t) {
            var i = -t.offsetLeft,
            s = -t.offsetTop;
            while (t = t.offsetParent) {
                i -= t.offsetLeft;
                s -= t.offsetTop
            }
            return {
                left: i,
                top: s
            }
        };
        e.preventDefaultException = function(t, i) {
            for (var s in i) if (i[s].test(t[s])) return true;
            return false
        };
        e.extend(e.eventType = {},
        {
            touchstart: 1,
            touchmove: 1,
            touchend: 1,
            mousedown: 2,
            mousemove: 2,
            mouseup: 2,
            pointerdown: 3,
            pointermove: 3,
            pointerup: 3,
            MSPointerDown: 3,
            MSPointerMove: 3,
            MSPointerUp: 3
        });
        e.extend(e.ease = {},
        {
            quadratic: {
                style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                fn: function(t) {
                    return t * (2 - t)
                }
            },
            circular: {
                style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                fn: function(t) {
                    return s.sqrt(1 - --t * t)
                }
            },
            back: {
                style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                fn: function(t) {
                    var i = 4;
                    return (t -= 1) * t * ((i + 1) * t + i) + 1
                }
            },
            bounce: {
                style: "",
                fn: function(t) {
                    if ((t /= 1) < 1 / 2.75) return 7.5625 * t * t;
                    else if (t < 2 / 2.75) return 7.5625 * (t -= 1.5 / 2.75) * t + .75;
                    else if (t < 2.5 / 2.75) return 7.5625 * (t -= 2.25 / 2.75) * t + .9375;
                    else return 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }
            },
            elastic: {
                style: "",
                fn: function(t) {
                    var i = .22,
                    e = .4;
                    if (0 === t) return 0;
                    if (1 == t) return 1;
                    return e * s.pow(2, -10 * t) * s.sin(2 * (t - i / 4) * s.PI / i) + 1
                }
            }
        });
        e.tap = function(t, s) {
            var e = i.createEvent("Event");
            e.initEvent(s, true, true);
            e.pageX = t.pageX;
            e.pageY = t.pageY;
            t.target.dispatchEvent(e)
        };
        e.click = function(t) {
            var s = t.target,
            e;
            if (!/(SELECT|INPUT|TEXTAREA)/i.test(s.tagName)) {
                e = i.createEvent("MouseEvents");
                e.initMouseEvent("click", true, true, t.view, 1, s.screenX, s.screenY, s.clientX, s.clientY, t.ctrlKey, t.altKey, t.shiftKey, t.metaKey, 0, null);
                e._constructed = true;
                s.dispatchEvent(e)
            }
        };
        return e
    } ();
    function n(t, s) {
        this.wrapper = "string" == typeof t ? i.querySelector(t) : t;
        this.scroller = this.wrapper.children[0];
        this.scrollerStyle = this.scroller.style;
        this.options = {
            resizeScrollbars: true,
            mouseWheelSpeed: 20,
            snapThreshold: .334,
            startX: 0,
            startY: 0,
            scrollY: true,
            directionLockThreshold: 5,
            momentum: true,
            bounce: true,
            bounceTime: 600,
            bounceEasing: "",
            preventDefault: true,
            preventDefaultException: {
                tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
            },
            HWCompositing: true,
            useTransition: true,
            useTransform: true
        };
        for (var e in s) this.options[e] = s[e];
        this.translateZ = this.options.HWCompositing && o.hasPerspective ? " translateZ(0)": "";
        this.options.useTransition = o.hasTransition && this.options.useTransition;
        this.options.useTransform = o.hasTransform && this.options.useTransform;
        this.options.eventPassthrough = true === this.options.eventPassthrough ? "vertical": this.options.eventPassthrough;
        this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;
        this.options.scrollY = "vertical" == this.options.eventPassthrough ? false: this.options.scrollY;
        this.options.scrollX = "horizontal" == this.options.eventPassthrough ? false: this.options.scrollX;
        this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
        this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;
        this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? o.ease[this.options.bounceEasing] || o.ease.circular: this.options.bounceEasing;
        this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling;
        if (true === this.options.tap) this.options.tap = "tap";
        if ("scale" == this.options.shrinkScrollbars) this.options.useTransition = false;
        this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;
        if (3 == this.options.probeType) this.options.useTransition = false;
        this.x = 0;
        this.y = 0;
        this.directionX = 0;
        this.directionY = 0;
        this._events = {};
        this._init();
        this.refresh();
        this.scrollTo(this.options.startX, this.options.startY);
        this.enable()
    }
    n.prototype = {
        version: "5.1.2",
        _init: function() {
            this._initEvents();
            if (this.options.scrollbars || this.options.indicators) this._initIndicators();
            if (this.options.mouseWheel) this._initWheel();
            if (this.options.snap) this._initSnap();
            if (this.options.keyBindings) this._initKeys()
        },
        destroy: function() {
            this._initEvents(true);
            this._execEvent("destroy")
        },
        _transitionEnd: function(t) {
            if (t.target != this.scroller || !this.isInTransition) return;
            this._transitionTime();
            if (!this.resetPosition(this.options.bounceTime)) {
                this.isInTransition = false;
                this._execEvent("scrollEnd")
            }
        },
        _start: function(t) {
            if (1 != o.eventType[t.type]) if (0 !== t.button) return;
            if (!this.enabled || this.initiated && o.eventType[t.type] !== this.initiated) return;
            if (this.options.preventDefault && !o.isBadAndroid && !o.preventDefaultException(t.target, this.options.preventDefaultException)) t.preventDefault();
            var i = t.touches ? t.touches[0] : t,
            e;
            this.initiated = o.eventType[t.type];
            this.moved = false;
            this.distX = 0;
            this.distY = 0;
            this.directionX = 0;
            this.directionY = 0;
            this.directionLocked = 0;
            this._transitionTime();
            this.startTime = o.getTime();
            if (this.options.useTransition && this.isInTransition) {
                this.isInTransition = false;
                e = this.getComputedPosition();
                this._translate(s.round(e.x), s.round(e.y));
                this._execEvent("scrollEnd")
            } else if (!this.options.useTransition && this.isAnimating) {
                this.isAnimating = false;
                this._execEvent("scrollEnd")
            }
            this.startX = this.x;
            this.startY = this.y;
            this.absStartX = this.x;
            this.absStartY = this.y;
            this.pointX = i.pageX;
            this.pointY = i.pageY;
            this._execEvent("beforeScrollStart")
        },
        _move: function(t) {
            if (!this.enabled || o.eventType[t.type] != this.initiated) return;
            if (this.options.preventDefault) t.preventDefault();
            var i = t.touches ? t.touches[0] : t,
            e = i.pageX - this.pointX,
            n = i.pageY - this.pointY,
            r = o.getTime(),
            h,
            a,
            l,
            c;
            this.pointX = i.pageX;
            this.pointY = i.pageY;
            this.distX += e;
            this.distY += n;
            l = s.abs(this.distX);
            c = s.abs(this.distY);
            if (r - this.endTime > 300 && l < 10 && c < 10) return;
            if (!this.directionLocked && !this.options.freeScroll) if (l > c + this.options.directionLockThreshold) this.directionLocked = "h";
            else if (c >= l + this.options.directionLockThreshold) this.directionLocked = "v";
            else this.directionLocked = "n";
            if ("h" == this.directionLocked) {
                if ("vertical" == this.options.eventPassthrough) t.preventDefault();
                else if ("horizontal" == this.options.eventPassthrough) {
                    this.initiated = false;
                    return
                }
                n = 0
            } else if ("v" == this.directionLocked) {
                if ("horizontal" == this.options.eventPassthrough) t.preventDefault();
                else if ("vertical" == this.options.eventPassthrough) {
                    this.initiated = false;
                    return
                }
                e = 0
            }
            e = this.hasHorizontalScroll ? e: 0;
            n = this.hasVerticalScroll ? n: 0;
            h = this.x + e;
            a = this.y + n;
            if (h > 0 || h < this.maxScrollX) h = this.options.bounce ? this.x + e / 3 : h > 0 ? 0 : this.maxScrollX;
            if (a > 0 || a < this.maxScrollY) a = this.options.bounce ? this.y + n / 3 : a > 0 ? 0 : this.maxScrollY;
            this.directionX = e > 0 ? -1 : e < 0 ? 1 : 0;
            this.directionY = n > 0 ? -1 : n < 0 ? 1 : 0;
            if (!this.moved) this._execEvent("scrollStart");
            this.moved = true;
            this._translate(h, a);
            if (r - this.startTime > 300) {
                this.startTime = r;
                this.startX = this.x;
                this.startY = this.y;
                if (1 == this.options.probeType) this._execEvent("scroll")
            }
            if (this.options.probeType > 1) this._execEvent("scroll")
        },
        _end: function(t) {
            if (!this.enabled || o.eventType[t.type] != this.initiated) return;
            if (this.options.preventDefault && !o.preventDefaultException(t.target, this.options.preventDefaultException)) t.preventDefault();
            var i = t.changedTouches ? t.changedTouches[0] : t,
            e,
            n,
            r = o.getTime() - this.startTime,
            h = s.round(this.x),
            a = s.round(this.y),
            l = s.abs(h - this.startX),
            c = s.abs(a - this.startY),
            p = 0,
            f = "";
            this.isInTransition = 0;
            this.initiated = 0;
            this.endTime = o.getTime();
            if (this.resetPosition(this.options.bounceTime)) return;
            this.scrollTo(h, a);
            if (!this.moved) {
                if (this.options.tap) o.tap(t, this.options.tap);
                if (this.options.click) o.click(t);
                this._execEvent("scrollCancel");
                return
            }
            if (this._events.flick && r < 200 && l < 100 && c < 100) {
                this._execEvent("flick");
                return
            }
            if (this.options.momentum && r < 300) {
                e = this.hasHorizontalScroll ? o.momentum(this.x, this.startX, r, this.maxScrollX, this.options.bounce ? this.wrapperWidth: 0, this.options.deceleration) : {
                    destination: h,
                    duration: 0
                };
                n = this.hasVerticalScroll ? o.momentum(this.y, this.startY, r, this.maxScrollY, this.options.bounce ? this.wrapperHeight: 0, this.options.deceleration) : {
                    destination: a,
                    duration: 0
                };
                h = e.destination;
                a = n.destination;
                p = s.max(e.duration, n.duration);
                this.isInTransition = 1
            }
            if (this.options.snap) {
                var u = this._nearestSnap(h, a);
                this.currentPage = u;
                p = this.options.snapSpeed || s.max(s.max(s.min(s.abs(h - u.x), 1e3), s.min(s.abs(a - u.y), 1e3)), 300);
                h = u.x;
                a = u.y;
                this.directionX = 0;
                this.directionY = 0;
                f = this.options.bounceEasing
            }
            if (h != this.x || a != this.y) {
                if (h > 0 || h < this.maxScrollX || a > 0 || a < this.maxScrollY) f = o.ease.quadratic;
                this.scrollTo(h, a, p, f);
                return
            }
            this._execEvent("scrollEnd")
        },
        _resize: function() {
            var t = this;
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(function() {
                t.refresh()
            },
            this.options.resizePolling)
        },
        resetPosition: function(t) {
            var i = this.x,
            s = this.y;
            t = t || 0;
            if (!this.hasHorizontalScroll || this.x > 0) i = 0;
            else if (this.x < this.maxScrollX) i = this.maxScrollX;
            if (!this.hasVerticalScroll || this.y > 0) s = 0;
            else if (this.y < this.maxScrollY) s = this.maxScrollY;
            if (i == this.x && s == this.y) return false;
            this.scrollTo(i, s, t, this.options.bounceEasing);
            return true
        },
        disable: function() {
            this.enabled = false
        },
        enable: function() {
            this.enabled = true
        },
        refresh: function() {
            var t = this.wrapper.offsetHeight;
            this.wrapperWidth = this.wrapper.clientWidth;
            this.wrapperHeight = this.wrapper.clientHeight;
            this.scrollerWidth = this.scroller.offsetWidth;
            this.scrollerHeight = this.scroller.offsetHeight;
            this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
            this.maxScrollY = this.wrapperHeight - this.scrollerHeight;
            this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
            this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;
            if (!this.hasHorizontalScroll) {
                this.maxScrollX = 0;
                this.scrollerWidth = this.wrapperWidth
            }
            if (!this.hasVerticalScroll) {
                this.maxScrollY = 0;
                this.scrollerHeight = this.wrapperHeight
            }
            this.endTime = 0;
            this.directionX = 0;
            this.directionY = 0;
            this.wrapperOffset = o.offset(this.wrapper);
            this._execEvent("refresh");
            this.resetPosition()
        },
        on: function(t, i) {
            if (!this._events[t]) this._events[t] = [];
            this._events[t].push(i)
        },
        off: function(t, i) {
            if (!this._events[t]) return;
            var s = this._events[t].indexOf(i);
            if (s > -1) this._events[t].splice(s, 1)
        },
        _execEvent: function(t) {
            if (!this._events[t]) return;
            var i = 0,
            s = this._events[t].length;
            if (!s) return;
            for (; i < s; i++) this._events[t][i].apply(this, [].slice.call(arguments, 1))
        },
        scrollBy: function(t, i, s, e) {
            t = this.x + t;
            i = this.y + i;
            s = s || 0;
            this.scrollTo(t, i, s, e)
        },
        scrollTo: function(t, i, s, e) {
            e = e || o.ease.circular;
            this.isInTransition = this.options.useTransition && s > 0;
            if (!s || this.options.useTransition && e.style) {
                this._transitionTimingFunction(e.style);
                this._transitionTime(s);
                this._translate(t, i)
            } else this._animate(t, i, s, e.fn)
        },
        scrollToElement: function(t, i, e, n, r) {
            t = t.nodeType ? t: this.scroller.querySelector(t);
            if (!t) return;
            var h = o.offset(t);
            h.left -= this.wrapperOffset.left;
            h.top -= this.wrapperOffset.top;
            if (true === e) e = s.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
            if (true === n) n = s.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
            h.left -= e || 0;
            h.top -= n || 0;
            h.left = h.left > 0 ? 0 : h.left < this.maxScrollX ? this.maxScrollX: h.left;
            h.top = h.top > 0 ? 0 : h.top < this.maxScrollY ? this.maxScrollY: h.top;
            i = void 0 === i || null === i || "auto" === i ? s.max(s.abs(this.x - h.left), s.abs(this.y - h.top)) : i;
            this.scrollTo(h.left, h.top, i, r)
        },
        _transitionTime: function(t) {
            t = t || 0;
            this.scrollerStyle[o.style.transitionDuration] = t + "ms";
            if (!t && o.isBadAndroid) this.scrollerStyle[o.style.transitionDuration] = "0.001s";
            if (!t && o.isBadXiaoMI) this.scrollerStyle[o.style.transitionDuration] = "";
            if (this.indicators) for (var i = this.indicators.length; i--;) this.indicators[i].transitionTime(t)
        },
        _transitionTimingFunction: function(t) {
            this.scrollerStyle[o.style.transitionTimingFunction] = t;
            if (this.indicators) for (var i = this.indicators.length; i--;) this.indicators[i].transitionTimingFunction(t)
        },
        _translate: function(t, i) {
            if (this.options.useTransform) this.scrollerStyle[o.style.transform] = "translate(" + t + "px," + i + "px)" + this.translateZ;
            else {
                t = s.round(t);
                i = s.round(i);
                this.scrollerStyle.left = t + "px";
                this.scrollerStyle.top = i + "px"
            }
            this.x = t;
            this.y = i;
            if (this.indicators) for (var e = this.indicators.length; e--;) this.indicators[e].updatePosition()
        },
        _initEvents: function(i) {
            var s = i ? o.removeEvent: o.addEvent,
            e = this.options.bindToWrapper ? this.wrapper: t;
            s(t, "orientationchange", this);
            s(t, "resize", this);
            if (this.options.click) s(this.wrapper, "click", this, true);
            if (!this.options.disableMouse) {
                s(this.wrapper, "mousedown", this);
                s(e, "mousemove", this);
                s(e, "mousecancel", this);
                s(e, "mouseup", this)
            }
            if (o.hasPointer && !this.options.disablePointer) {
                s(this.wrapper, o.prefixPointerEvent("pointerdown"), this);
                s(e, o.prefixPointerEvent("pointermove"), this);
                s(e, o.prefixPointerEvent("pointercancel"), this);
                s(e, o.prefixPointerEvent("pointerup"), this)
            }
            if (o.hasTouch && !this.options.disableTouch) {
                s(this.wrapper, "touchstart", this);
                s(e, "touchmove", this);
                s(e, "touchcancel", this);
                s(e, "touchend", this)
            }
            s(this.scroller, "transitionend", this);
            s(this.scroller, "webkitTransitionEnd", this);
            s(this.scroller, "oTransitionEnd", this);
            s(this.scroller, "MSTransitionEnd", this)
        },
        getComputedPosition: function() {
            var i = t.getComputedStyle(this.scroller, null),
            s,
            e;
            if (this.options.useTransform) {
                i = i[o.style.transform].split(")")[0].split(", ");
                s = +(i[12] || i[4]);
                e = +(i[13] || i[5])
            } else {
                s = +i.left.replace(/[^-\d.]/g, "");
                e = +i.top.replace(/[^-\d.]/g, "")
            }
            return {
                x: s,
                y: e
            }
        },
        _initIndicators: function() {
            var t = this.options.interactiveScrollbars,
            i = "string" != typeof this.options.scrollbars,
            s = [],
            e;
            var o = this;
            this.indicators = [];
            if (this.options.scrollbars) {
                if (this.options.scrollY) {
                    e = {
                        el: r("v", t, this.options.scrollbars),
                        interactive: t,
                        defaultScrollbars: true,
                        customStyle: i,
                        resize: this.options.resizeScrollbars,
                        shrink: this.options.shrinkScrollbars,
                        fade: this.options.fadeScrollbars,
                        listenX: false
                    };
                    this.wrapper.appendChild(e.el);
                    s.push(e)
                }
                if (this.options.scrollX) {
                    e = {
                        el: r("h", t, this.options.scrollbars),
                        interactive: t,
                        defaultScrollbars: true,
                        customStyle: i,
                        resize: this.options.resizeScrollbars,
                        shrink: this.options.shrinkScrollbars,
                        fade: this.options.fadeScrollbars,
                        listenY: false
                    };
                    this.wrapper.appendChild(e.el);
                    s.push(e)
                }
            }
            if (this.options.indicators) s = s.concat(this.options.indicators);
            for (var n = s.length; n--;) this.indicators.push(new h(this, s[n]));
            function a(t) {
                for (var i = o.indicators.length; i--;) t.call(o.indicators[i])
            }
            if (this.options.fadeScrollbars) {
                this.on("scrollEnd",
                function() {
                    a(function() {
                        this.fade()
                    })
                });
                this.on("scrollCancel",
                function() {
                    a(function() {
                        this.fade()
                    })
                });
                this.on("scrollStart",
                function() {
                    a(function() {
                        this.fade(1)
                    })
                });
                this.on("beforeScrollStart",
                function() {
                    a(function() {
                        this.fade(1, true)
                    })
                })
            }
            this.on("refresh",
            function() {
                a(function() {
                    this.refresh()
                })
            });
            this.on("destroy",
            function() {
                a(function() {
                    this.destroy()
                });
                delete this.indicators
            })
        },
        _initWheel: function() {
            o.addEvent(this.wrapper, "wheel", this);
            o.addEvent(this.wrapper, "mousewheel", this);
            o.addEvent(this.wrapper, "DOMMouseScroll", this);
            this.on("destroy",
            function() {
                o.removeEvent(this.wrapper, "wheel", this);
                o.removeEvent(this.wrapper, "mousewheel", this);
                o.removeEvent(this.wrapper, "DOMMouseScroll", this)
            })
        },
        _wheel: function(t) {
            if (!this.enabled) return;
            t.preventDefault();
            t.stopPropagation();
            var i, e, o, n, r = this;
            if (void 0 === this.wheelTimeout) r._execEvent("scrollStart");
            clearTimeout(this.wheelTimeout);
            this.wheelTimeout = setTimeout(function() {
                r._execEvent("scrollEnd");
                r.wheelTimeout = void 0
            },
            400);
            if ("deltaX" in t) {
                i = -t.deltaX;
                e = -t.deltaY
            } else if ("wheelDeltaX" in t) {
                i = t.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
                e = t.wheelDeltaY / 120 * this.options.mouseWheelSpeed
            } else if ("wheelDelta" in t) i = e = t.wheelDelta / 120 * this.options.mouseWheelSpeed;
            else if ("detail" in t) i = e = -t.detail / 3 * this.options.mouseWheelSpeed;
            else return;
            i *= this.options.invertWheelDirection;
            e *= this.options.invertWheelDirection;
            if (!this.hasVerticalScroll) {
                i = e;
                e = 0
            }
            if (this.options.snap) {
                o = this.currentPage.pageX;
                n = this.currentPage.pageY;
                if (i > 0) o--;
                else if (i < 0) o++;
                if (e > 0) n--;
                else if (e < 0) n++;
                this.goToPage(o, n);
                return
            }
            o = this.x + s.round(this.hasHorizontalScroll ? i: 0);
            n = this.y + s.round(this.hasVerticalScroll ? e: 0);
            if (o > 0) o = 0;
            else if (o < this.maxScrollX) o = this.maxScrollX;
            if (n > 0) n = 0;
            else if (n < this.maxScrollY) n = this.maxScrollY;
            this.scrollTo(o, n, 0);
            if (this.options.probeType > 1) this._execEvent("scroll")
        },
        _initSnap: function() {
            this.currentPage = {};
            if ("string" == typeof this.options.snap) this.options.snap = this.scroller.querySelectorAll(this.options.snap);
            this.on("refresh",
            function() {
                var t = 0,
                i, e = 0,
                o, n, r, h = 0,
                a, l = this.options.snapStepX || this.wrapperWidth,
                c = this.options.snapStepY || this.wrapperHeight,
                p;
                this.pages = [];
                if (!this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight) return;
                if (true === this.options.snap) {
                    n = s.round(l / 2);
                    r = s.round(c / 2);
                    while (h > -this.scrollerWidth) {
                        this.pages[t] = [];
                        i = 0;
                        a = 0;
                        while (a > -this.scrollerHeight) {
                            this.pages[t][i] = {
                                x: s.max(h, this.maxScrollX),
                                y: s.max(a, this.maxScrollY),
                                width: l,
                                height: c,
                                cx: h - n,
                                cy: a - r
                            };
                            a -= c;
                            i++
                        }
                        h -= l;
                        t++
                    }
                } else {
                    p = this.options.snap;
                    i = p.length;
                    o = -1;
                    for (; t < i; t++) {
                        if (0 === t || p[t].offsetLeft <= p[t - 1].offsetLeft) {
                            e = 0;
                            o++
                        }
                        if (!this.pages[e]) this.pages[e] = [];
                        h = s.max( - p[t].offsetLeft, this.maxScrollX);
                        a = s.max( - p[t].offsetTop, this.maxScrollY);
                        n = h - s.round(p[t].offsetWidth / 2);
                        r = a - s.round(p[t].offsetHeight / 2);
                        this.pages[e][o] = {
                            x: h,
                            y: a,
                            width: p[t].offsetWidth,
                            height: p[t].offsetHeight,
                            cx: n,
                            cy: r
                        };
                        if (h > this.maxScrollX) e++
                    }
                }
                this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);
                if (this.options.snapThreshold % 1 === 0) {
                    this.snapThresholdX = this.options.snapThreshold;
                    this.snapThresholdY = this.options.snapThreshold
                } else {
                    this.snapThresholdX = s.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
                    this.snapThresholdY = s.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold)
                }
            });
            this.on("flick",
            function() {
                var t = this.options.snapSpeed || s.max(s.max(s.min(s.abs(this.x - this.startX), 1e3), s.min(s.abs(this.y - this.startY), 1e3)), 300);
                this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, t)
            })
        },
        _nearestSnap: function(t, i) {
            if (!this.pages.length) return {
                x: 0,
                y: 0,
                pageX: 0,
                pageY: 0
            };
            var e = 0,
            o = this.pages.length,
            n = 0;
            if (s.abs(t - this.absStartX) < this.snapThresholdX && s.abs(i - this.absStartY) < this.snapThresholdY) return this.currentPage;
            if (t > 0) t = 0;
            else if (t < this.maxScrollX) t = this.maxScrollX;
            if (i > 0) i = 0;
            else if (i < this.maxScrollY) i = this.maxScrollY;
            for (; e < o; e++) if (t >= this.pages[e][0].cx) {
                t = this.pages[e][0].x;
                break
            }
            o = this.pages[e].length;
            for (; n < o; n++) if (i >= this.pages[0][n].cy) {
                i = this.pages[0][n].y;
                break
            }
            if (e == this.currentPage.pageX) {
                e += this.directionX;
                if (e < 0) e = 0;
                else if (e >= this.pages.length) e = this.pages.length - 1;
                t = this.pages[e][0].x
            }
            if (n == this.currentPage.pageY) {
                n += this.directionY;
                if (n < 0) n = 0;
                else if (n >= this.pages[0].length) n = this.pages[0].length - 1;
                i = this.pages[0][n].y
            }
            return {
                x: t,
                y: i,
                pageX: e,
                pageY: n
            }
        },
        goToPage: function(t, i, e, o) {
            o = o || this.options.bounceEasing;
            if (t >= this.pages.length) t = this.pages.length - 1;
            else if (t < 0) t = 0;
            if (i >= this.pages[t].length) i = this.pages[t].length - 1;
            else if (i < 0) i = 0;
            var n = this.pages[t][i].x,
            r = this.pages[t][i].y;
            e = void 0 === e ? this.options.snapSpeed || s.max(s.max(s.min(s.abs(n - this.x), 1e3), s.min(s.abs(r - this.y), 1e3)), 300) : e;
            this.currentPage = {
                x: n,
                y: r,
                pageX: t,
                pageY: i
            };
            this.scrollTo(n, r, e, o)
        },
        next: function(t, i) {
            var s = this.currentPage.pageX,
            e = this.currentPage.pageY;
            s++;
            if (s >= this.pages.length && this.hasVerticalScroll) {
                s = 0;
                e++
            }
            this.goToPage(s, e, t, i)
        },
        prev: function(t, i) {
            var s = this.currentPage.pageX,
            e = this.currentPage.pageY;
            s--;
            if (s < 0 && this.hasVerticalScroll) {
                s = 0;
                e--
            }
            this.goToPage(s, e, t, i)
        },
        _initKeys: function(i) {
            var s = {
                pageUp: 33,
                pageDown: 34,
                end: 35,
                home: 36,
                left: 37,
                up: 38,
                right: 39,
                down: 40
            };
            var e;
            if ("object" == typeof this.options.keyBindings) {
                for (e in this.options.keyBindings) if ("string" == typeof this.options.keyBindings[e]) this.options.keyBindings[e] = this.options.keyBindings[e].toUpperCase().charCodeAt(0)
            } else this.options.keyBindings = {};
            for (e in s) this.options.keyBindings[e] = this.options.keyBindings[e] || s[e];
            o.addEvent(t, "keydown", this);
            this.on("destroy",
            function() {
                o.removeEvent(t, "keydown", this)
            })
        },
        _key: function(t) {
            if (!this.enabled) return;
            var i = this.options.snap,
            e = i ? this.currentPage.pageX: this.x,
            n = i ? this.currentPage.pageY: this.y,
            r = o.getTime(),
            h = this.keyTime || 0,
            a = .25,
            l;
            if (this.options.useTransition && this.isInTransition) {
                l = this.getComputedPosition();
                this._translate(s.round(l.x), s.round(l.y));
                this.isInTransition = false
            }
            this.keyAcceleration = r - h < 200 ? s.min(this.keyAcceleration + a, 50) : 0;
            switch (t.keyCode) {
            case this.options.keyBindings.pageUp:
                if (this.hasHorizontalScroll && !this.hasVerticalScroll) e += i ? 1 : this.wrapperWidth;
                else n += i ? 1 : this.wrapperHeight;
                break;
            case this.options.keyBindings.pageDown:
                if (this.hasHorizontalScroll && !this.hasVerticalScroll) e -= i ? 1 : this.wrapperWidth;
                else n -= i ? 1 : this.wrapperHeight;
                break;
            case this.options.keyBindings.end:
                e = i ? this.pages.length - 1 : this.maxScrollX;
                n = i ? this.pages[0].length - 1 : this.maxScrollY;
                break;
            case this.options.keyBindings.home:
                e = 0;
                n = 0;
                break;
            case this.options.keyBindings.left:
                e += i ? -1 : 5 + this.keyAcceleration >> 0;
                break;
            case this.options.keyBindings.up:
                n += i ? 1 : 5 + this.keyAcceleration >> 0;
                break;
            case this.options.keyBindings.right:
                e -= i ? -1 : 5 + this.keyAcceleration >> 0;
                break;
            case this.options.keyBindings.down:
                n -= i ? 1 : 5 + this.keyAcceleration >> 0;
                break;
            default:
                return
            }
            if (i) {
                this.goToPage(e, n);
                return
            }
            if (e > 0) {
                e = 0;
                this.keyAcceleration = 0
            } else if (e < this.maxScrollX) {
                e = this.maxScrollX;
                this.keyAcceleration = 0
            }
            if (n > 0) {
                n = 0;
                this.keyAcceleration = 0
            } else if (n < this.maxScrollY) {
                n = this.maxScrollY;
                this.keyAcceleration = 0
            }
            this.scrollTo(e, n, 0);
            this.keyTime = r
        },
        _animate: function(t, i, s, n) {
            var r = this,
            h = this.x,
            a = this.y,
            l = o.getTime(),
            c = l + s;
            function p() {
                var f = o.getTime(),
                u,
                d,
                m;
                if (f >= c) {
                    r.isAnimating = false;
                    r._translate(t, i);
                    if (!r.resetPosition(r.options.bounceTime)) r._execEvent("scrollEnd");
                    return
                }
                f = (f - l) / s;
                m = n(f);
                u = (t - h) * m + h;
                d = (i - a) * m + a;
                r._translate(u, d);
                if (r.isAnimating) e(p);
                if (3 == r.options.probeType) r._execEvent("scroll")
            }
            this.isAnimating = true;
            p()
        },
        handleEvent: function(t) {
            switch (t.type) {
            case "touchstart":
            case "pointerdown":
            case "MSPointerDown":
            case "mousedown":
                this._start(t);
                break;
            case "touchmove":
            case "pointermove":
            case "MSPointerMove":
            case "mousemove":
                this._move(t);
                break;
            case "touchend":
            case "pointerup":
            case "MSPointerUp":
            case "mouseup":
            case "touchcancel":
            case "pointercancel":
            case "MSPointerCancel":
            case "mousecancel":
                this._end(t);
                break;
            case "orientationchange":
            case "resize":
                this._resize();
                break;
            case "transitionend":
            case "webkitTransitionEnd":
            case "oTransitionEnd":
            case "MSTransitionEnd":
                this._transitionEnd(t);
                break;
            case "wheel":
            case "DOMMouseScroll":
            case "mousewheel":
                this._wheel(t);
                break;
            case "keydown":
                this._key(t);
                break;
            case "click":
                if (!t._constructed) {
                    t.preventDefault();
                    t.stopPropagation()
                }
            }
        }
    };
    function r(t, s, e) {
        var o = i.createElement("div"),
        n = i.createElement("div");
        if (true === e) {
            o.style.cssText = "position:absolute;z-index:9999";
            n.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"
        }
        n.className = "iScrollIndicator";
        if ("h" == t) {
            if (true === e) {
                o.style.cssText += ";height:7px;left:2px;right:2px;bottom:0";
                n.style.height = "100%"
            }
            o.className = "iScrollHorizontalScrollbar"
        } else {
            if (true === e) {
                o.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px";
                n.style.width = "100%"
            }
            o.className = "iScrollVerticalScrollbar"
        }
        o.style.cssText += ";overflow:hidden";
        if (!s) o.style.pointerEvents = "none";
        o.appendChild(n);
        return o
    }
    function h(s, e) {
        this.wrapper = "string" == typeof e.el ? i.querySelector(e.el) : e.el;
        this.wrapperStyle = this.wrapper.style;
        this.indicator = this.wrapper.children[0];
        this.indicatorStyle = this.indicator.style;
        this.scroller = s;
        this.options = {
            listenX: true,
            listenY: true,
            interactive: false,
            resize: true,
            defaultScrollbars: false,
            shrink: false,
            fade: false,
            speedRatioX: 0,
            speedRatioY: 0
        };
        for (var n in e) this.options[n] = e[n];
        this.sizeRatioX = 1;
        this.sizeRatioY = 1;
        this.maxPosX = 0;
        this.maxPosY = 0;
        if (this.options.interactive) {
            if (!this.options.disableTouch) {
                o.addEvent(this.indicator, "touchstart", this);
                o.addEvent(t, "touchend", this)
            }
            if (!this.options.disablePointer) {
                o.addEvent(this.indicator, o.prefixPointerEvent("pointerdown"), this);
                o.addEvent(t, o.prefixPointerEvent("pointerup"), this)
            }
            if (!this.options.disableMouse) {
                o.addEvent(this.indicator, "mousedown", this);
                o.addEvent(t, "mouseup", this)
            }
        }
        if (this.options.fade) {
            this.wrapperStyle[o.style.transform] = this.scroller.translateZ;
            this.wrapperStyle[o.style.transitionDuration] = o.isBadAndroid ? "0.001s": "0ms";
            this.wrapperStyle.opacity = "0"
        }
    }
    h.prototype = {
        handleEvent: function(t) {
            switch (t.type) {
            case "touchstart":
            case "pointerdown":
            case "MSPointerDown":
            case "mousedown":
                this._start(t);
                break;
            case "touchmove":
            case "pointermove":
            case "MSPointerMove":
            case "mousemove":
                this._move(t);
                break;
            case "touchend":
            case "pointerup":
            case "MSPointerUp":
            case "mouseup":
            case "touchcancel":
            case "pointercancel":
            case "MSPointerCancel":
            case "mousecancel":
                this._end(t)
            }
        },
        destroy: function() {
            if (this.options.interactive) {
                o.removeEvent(this.indicator, "touchstart", this);
                o.removeEvent(this.indicator, o.prefixPointerEvent("pointerdown"), this);
                o.removeEvent(this.indicator, "mousedown", this);
                o.removeEvent(t, "touchmove", this);
                o.removeEvent(t, o.prefixPointerEvent("pointermove"), this);
                o.removeEvent(t, "mousemove", this);
                o.removeEvent(t, "touchend", this);
                o.removeEvent(t, o.prefixPointerEvent("pointerup"), this);
                o.removeEvent(t, "mouseup", this)
            }
            if (this.options.defaultScrollbars) this.wrapper.parentNode.removeChild(this.wrapper)
        },
        _start: function(i) {
            var s = i.touches ? i.touches[0] : i;
            i.preventDefault();
            i.stopPropagation();
            this.transitionTime();
            this.initiated = true;
            this.moved = false;
            this.lastPointX = s.pageX;
            this.lastPointY = s.pageY;
            this.startTime = o.getTime();
            if (!this.options.disableTouch) o.addEvent(t, "touchmove", this);
            if (!this.options.disablePointer) o.addEvent(t, o.prefixPointerEvent("pointermove"), this);
            if (!this.options.disableMouse) o.addEvent(t, "mousemove", this);
            this.scroller._execEvent("beforeScrollStart")
        },
        _move: function(t) {
            var i = t.touches ? t.touches[0] : t,
            s,
            e,
            n,
            r,
            h = o.getTime();
            if (!this.moved) this.scroller._execEvent("scrollStart");
            this.moved = true;
            s = i.pageX - this.lastPointX;
            this.lastPointX = i.pageX;
            e = i.pageY - this.lastPointY;
            this.lastPointY = i.pageY;
            n = this.x + s;
            r = this.y + e;
            this._pos(n, r);
            if (1 == this.scroller.options.probeType && h - this.startTime > 300) {
                this.startTime = h;
                this.scroller._execEvent("scroll")
            } else if (this.scroller.options.probeType > 1) this.scroller._execEvent("scroll");
            t.preventDefault();
            t.stopPropagation()
        },
        _end: function(i) {
            if (!this.initiated) return;
            this.initiated = false;
            i.preventDefault();
            i.stopPropagation();
            o.removeEvent(t, "touchmove", this);
            o.removeEvent(t, o.prefixPointerEvent("pointermove"), this);
            o.removeEvent(t, "mousemove", this);
            if (this.scroller.options.snap) {
                var e = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);
                var n = this.options.snapSpeed || s.max(s.max(s.min(s.abs(this.scroller.x - e.x), 1e3), s.min(s.abs(this.scroller.y - e.y), 1e3)), 300);
                if (this.scroller.x != e.x || this.scroller.y != e.y) {
                    this.scroller.directionX = 0;
                    this.scroller.directionY = 0;
                    this.scroller.currentPage = e;
                    this.scroller.scrollTo(e.x, e.y, n, this.scroller.options.bounceEasing)
                }
            }
            if (this.moved) this.scroller._execEvent("scrollEnd")
        },
        transitionTime: function(t) {
            t = t || 0;
            this.indicatorStyle[o.style.transitionDuration] = t + "ms";
            if (!t && o.isBadAndroid) this.indicatorStyle[o.style.transitionDuration] = "0.001s"
        },
        transitionTimingFunction: function(t) {
            this.indicatorStyle[o.style.transitionTimingFunction] = t
        },
        refresh: function() {
            this.transitionTime();
            if (this.options.listenX && !this.options.listenY) this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block": "none";
            else if (this.options.listenY && !this.options.listenX) this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block": "none";
            else this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block": "none";
            if (this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll) {
                o.addClass(this.wrapper, "iScrollBothScrollbars");
                o.removeClass(this.wrapper, "iScrollLoneScrollbar");
                if (this.options.defaultScrollbars && this.options.customStyle) if (this.options.listenX) this.wrapper.style.right = "8px";
                else this.wrapper.style.bottom = "8px"
            } else {
                o.removeClass(this.wrapper, "iScrollBothScrollbars");
                o.addClass(this.wrapper, "iScrollLoneScrollbar");
                if (this.options.defaultScrollbars && this.options.customStyle) if (this.options.listenX) this.wrapper.style.right = "2px";
                else this.wrapper.style.bottom = "2px"
            }
            var t = this.wrapper.offsetHeight;
            if (this.options.listenX) {
                this.wrapperWidth = this.wrapper.clientWidth;
                if (this.options.resize) {
                    this.indicatorWidth = s.max(s.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
                    this.indicatorStyle.width = this.indicatorWidth + "px"
                } else this.indicatorWidth = this.indicator.clientWidth;
                this.maxPosX = this.wrapperWidth - this.indicatorWidth;
                if ("clip" == this.options.shrink) {
                    this.minBoundaryX = -this.indicatorWidth + 8;
                    this.maxBoundaryX = this.wrapperWidth - 8
                } else {
                    this.minBoundaryX = 0;
                    this.maxBoundaryX = this.maxPosX
                }
                this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX
            }
            if (this.options.listenY) {
                this.wrapperHeight = this.wrapper.clientHeight;
                if (this.options.resize) {
                    this.indicatorHeight = s.max(s.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
                    this.indicatorStyle.height = this.indicatorHeight + "px"
                } else this.indicatorHeight = this.indicator.clientHeight;
                this.maxPosY = this.wrapperHeight - this.indicatorHeight;
                if ("clip" == this.options.shrink) {
                    this.minBoundaryY = -this.indicatorHeight + 8;
                    this.maxBoundaryY = this.wrapperHeight - 8
                } else {
                    this.minBoundaryY = 0;
                    this.maxBoundaryY = this.maxPosY
                }
                this.maxPosY = this.wrapperHeight - this.indicatorHeight;
                this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY
            }
            this.updatePosition()
        },
        updatePosition: function() {
            var t = this.options.listenX && s.round(this.sizeRatioX * this.scroller.x) || 0,
            i = this.options.listenY && s.round(this.sizeRatioY * this.scroller.y) || 0;
            if (!this.options.ignoreBoundaries) {
                if (t < this.minBoundaryX) {
                    if ("scale" == this.options.shrink) {
                        this.width = s.max(this.indicatorWidth + t, 8);
                        this.indicatorStyle.width = this.width + "px"
                    }
                    t = this.minBoundaryX
                } else if (t > this.maxBoundaryX) if ("scale" == this.options.shrink) {
                    this.width = s.max(this.indicatorWidth - (t - this.maxPosX), 8);
                    this.indicatorStyle.width = this.width + "px";
                    t = this.maxPosX + this.indicatorWidth - this.width
                } else t = this.maxBoundaryX;
                else if ("scale" == this.options.shrink && this.width != this.indicatorWidth) {
                    this.width = this.indicatorWidth;
                    this.indicatorStyle.width = this.width + "px"
                }
                if (i < this.minBoundaryY) {
                    if ("scale" == this.options.shrink) {
                        this.height = s.max(this.indicatorHeight + 3 * i, 8);
                        this.indicatorStyle.height = this.height + "px"
                    }
                    i = this.minBoundaryY
                } else if (i > this.maxBoundaryY) if ("scale" == this.options.shrink) {
                    this.height = s.max(this.indicatorHeight - 3 * (i - this.maxPosY), 8);
                    this.indicatorStyle.height = this.height + "px";
                    i = this.maxPosY + this.indicatorHeight - this.height
                } else i = this.maxBoundaryY;
                else if ("scale" == this.options.shrink && this.height != this.indicatorHeight) {
                    this.height = this.indicatorHeight;
                    this.indicatorStyle.height = this.height + "px"
                }
            }
            this.x = t;
            this.y = i;
            if (this.scroller.options.useTransform) this.indicatorStyle[o.style.transform] = "translate(" + t + "px," + i + "px)" + this.scroller.translateZ;
            else {
                this.indicatorStyle.left = t + "px";
                this.indicatorStyle.top = i + "px"
            }
        },
        _pos: function(t, i) {
            if (t < 0) t = 0;
            else if (t > this.maxPosX) t = this.maxPosX;
            if (i < 0) i = 0;
            else if (i > this.maxPosY) i = this.maxPosY;
            t = this.options.listenX ? s.round(t / this.sizeRatioX) : this.scroller.x;
            i = this.options.listenY ? s.round(i / this.sizeRatioY) : this.scroller.y;
            this.scroller.scrollTo(t, i)
        },
        fade: function(t, i) {
            if (i && !this.visible) return;
            clearTimeout(this.fadeTimeout);
            this.fadeTimeout = null;
            var s = t ? 250 : 500,
            e = t ? 0 : 300;
            t = t ? "1": "0";
            this.wrapperStyle[o.style.transitionDuration] = s + "ms";
            this.fadeTimeout = setTimeout(function(t) {
                this.wrapperStyle.opacity = t;
                this.visible = +t
            }.bind(this, t), e)
        }
    };
    n.utils = o;
    if ("undefined" != typeof module && module.exports) module.exports = n;
    else t.IScroll = n
} (window, document, Math); !
function(t, n, r, e) {
    "use strict"; !
    function(t, n) {
        var r = 1,
        e = {},
        i = {};
        n.getStopRecursionFn = function(o, u) {
            u = u || t;
            if (n.isFunction(o)) if (o.__stopRecursion && i[o.__stopRecursion]) return function() {
                i[o.__stopRecursion](u, arguments)
            };
            else {
                o.__stopRecursion = r;
                i[o.__stopRecursion] = function(t, n) {
                    var r = e[o.__stopRecursion] || [],
                    i = 0;
                    for (i = 0; i < r.length; i++) if (r[i] === t) return t;
                    r.push(t);
                    e[o.__stopRecursion] = r;
                    o.apply(t, n);
                    for (i = 0; i < r.length; i++) if (r[i] === t) r.splice(i, 1)
                };
                r += 1;
                return function() {
                    i[o.__stopRecursion](u, arguments)
                }
            }
        }
    } (window, window.jQuery || window.Zepto);
    var i = t.Game = t.Game || {},
    o = function(t) {
        var n = i.getCdnUrl(),
        r = i.getVersionId(),
        e = i,
        o = "";
        n += "/wap/js/game";
        if ("string" === typeof t) {
            t = t.split(".");
            for (var u = 0; u < t.length; u++) if (e[t[u]]) {
                e = e[t[u]];
                continue
            } else o = [n, "/", t.join("/"), ".js?", r].join("");
            if (o) return o;
            else return true
        }
        return null
    },
    u = function(t, r, e) {
        switch (t) {
        case "link":
            n.loadCss(r);
            break;
        case "script":
            n.loadJS(r, e)
        }
    },
    a = function(t) {
        var n = i._toStrings,
        r = Object.prototype.toString,
        o = {
            1 : "element",
            3 : "textnode",
            9 : "document",
            11 : "fragment"
        };
        if (!n) {
            n = {};
            var u = "Arguments Array Boolean Date Document Element Error Fragment Function NodeList Null Number Object RegExp String TextNode Undefined Window".split(" ");
            for (var a = u.length; a--;) {
                var s = u[a],
                f = window[s];
                if (f) try {
                    n[r.call(new f)] = s.toLowerCase()
                } catch(c) {}
            }
            i._toStrings = n
        }
        return null == t && (t === e ? "undefined": "null") || t.nodeType && o[t.nodeType] || "number" == typeof t.length && (t.callee && _arguments || t.alert && "window" || t.item && "nodelist") || n[r.call(t)]
    },
    s = function() {};
    s.fn = s.prototype = {
        getEventCache: function() {
            return {}
        },
        regEvent: function(t) {
            var n = a(t),
            i = this,
            o = i.getEventCache();
            switch (n) {
            case "string":
                t = t.split(" ");
            case "array":
                r.each(t,
                function(t, n) {
                    o[n] = o[n] || []
                })
            }
            r.each(o,
            function(t) {
                i[t] = function(n) {
                    if (r.isFunction(n)) this.bind(t, n);
                    else if (n === e) this.callEvent(t);
                    return this
                }
            });
            this.regEvent = function() {}
        },
        callEvent: function(t, n, r) {
            var i, o, u, a, s, f, c, l = this,
            s = Array.prototype.slice.call(arguments, 1);
            if (!isNaN(t)) {
                i = parseInt(t) || 200,
                o = this.getEventCache()[n],
                u = o.length;
                if (0 === u) return;
                o.paras = s;
                if (!o.t) o.t = window.setTimeout(function() {
                    delete o.t;
                    l.callEvent.apply(l, o.paras)
                },
                i);
                return
            }
            n = t;
            o = this.getEventCache()[n] || [],
            u = o.length,
            a = 0;
            if (0 == u) return;
            for (; a < u; a++) {
                c = o[a].apply(this, s);
                if (f === e || false === c) f = c
            }
            return f
        },
        bind: function(t, n) {
            if ("object" == Game.getType(t)) {
                for (var e in t) this.bind(e, t[e]);
                return this
            }
            var i = this.getEventCache()[t];
            if (i) r.isFunction(n) && i.push(n);
            else window.alert("未知的事件类型（" + t + "）！请检查大小写。");
            return this
        },
        unbind: function(t, n) {
            if ("object" == Game.getType(t)) {
                for (var e in t) this.unbind(e, t[e]);
                return this
            }
            var i = this.getEventCache()[t];
            if (i) this.getEventCache()[t] = n ? r.grep(i,
            function(t, r) {
                return t !== n
            }) : [];
            else window.alert("未知的事件类型（" + t + "）！请检查大小写。");
            return this
        },
        extend: function(t) {
            r.extend(this, t);
            return this
        }
    }; !
    function(t) {
        var e = 1,
        i = {},
        o;
        var u = function(t, n, r) {
            this.work = t;
            this.guid = e++;
            this.runNum = 0;
            this.interval = isNaN(n) ? 0 : 1e3 * +n;
            this.maxNum = this.interval ? r || 0 : 1;
            i[this.guid] = this;
            u.start()
        };
        u.start = function() {
            if (o) return;
            o = window.setInterval(u.loop, 250)
        };
        u.loop = function() {
            var t = 0;
            for (var n in i) {
                t++;
                i[n].run()
            }
            if (0 == t) {
                window.clearInterval(o);
                o = 0
            }
        };
        u.prototype = {
            stop: function() {
                if (i[this.guid]) delete i[this.guid];
                this.running = 0;
                this.wrok = null
            },
            run: function() {
                var t = new Date;
                if (this.running) return;
                if (!this.lastRunTime || t - this.lastRunTime >= this.interval && this.interval && (this.runNum < this.maxNum || !this.maxNum)) {
                    this.running = 1;
                    this.lastRunTime = t;
                    this.runNum++;
                    try {
                        this.work(r.proxy(this.notice, this), this.runNum, this.maxNum)
                    } catch(e) {
                        n.log && n.log("定时任务(" + this.guid + ")运行错误！任务已经强制终止！", e);
                        this.stop()
                    }
                }
                if (this.maxNum && this.runNum >= this.maxNum) this.stop()
            },
            notice: function(t) {
                this.running = 0;
                if (t) this.stop()
            }
        };
        t.setTask = function(t, n, e) {
            if (!r.isFunction(t)) return - 1;
            var i = new u(t, n, e);
            return i.guid
        };
        t.clearTask = function(t) {
            if (!t) return;
            i[t] && i[t].stop()
        }
    } (i); !
    function(t) {
        var n = {},
        r = function(t) {
            this.tmpl = t
        };
        r.prototype = {
            getPeriodInfo: function(t) {
                var n = {},
                r = {};
                r.prefix = this.tmpl.replace(/(y+|m+|d+|i+)/gi,
                function(r, e, i) {
                    var o = e.slice(0, 1);
                    n[o] = t.slice(i, e.length);
                    return "i" == o ? "": n[o]
                });
                r.year = +(2 == n.y.length ? "20" + n.y: n.y);
                r.month = +n.m;
                r.day = +n.d;
                r.strIndex = n.i;
                r.index = +n.i;
                return r
            },
            getPriod: function(t, n, r, e) {
                if (!t) return;
                var i = t;
                if (i.year && i.month && i.day) return this.getPeriod(i.year, i.month, i.day, i.index || n);
                if (!r && !e) {
                    i = this.getPeriodInfo(t);
                    return this.getPeriod(i.year, i.month, i.day, n)
                } else return this.tmpl.replace(/(y+|m+|d+|i+)/gi,
                function(i, o, u) {
                    var a = o.slice(0, 1);
                    return "y" == a ? ("" + t).slice( - o.length) : "m" == a ? ("0" + n).slice( - 2) : "d" == a ? ("0" + r).slice( - 2) : ("0000000" + e).slice( - o.length)
                })
            }
        };
        t.getPeriodHelper = function(e) {
            var i = e || (t.config ? t.config.periodTmpl: null);
            return ! i ? null: n[i] || (n[i] = new r(i))
        }
    } (i);
    r.extend(i, {
        config: {
            cdnUrl: "http://pimg1.126.net/caipiao",
            versionId: +new Date
        },
        format: r.format,
        getType: a,
        getVersionId: function() {
            return n.version || this.config.versionId
        },
        getCdnUrl: function() {
            return n.cdnUrl || this.config.cdnUrl
        },
        c: function(t, n) {
            t = +t;
            n = +n;
            if ("number" === a(t) && "number" === a(n)) {
                var r = 1,
                e = 1;
                for (var i = t,
                o = 1; o <= n; r *= i--, e *= o++);
                return r / e
            }
            return 0
        },
        CR: function(t, n) {
            var r = [],
            e = function(t, n, r, i, o) {
                var u, a = t.length - o,
                s;
                for (s = i; s <= a; s++) {
                    u = r.slice(0);
                    u.push(t[s]);
                    if (1 == o) n.push(u);
                    else e(t, n, u, s + 1, o - 1)
                }
            };
            e(t, r, [], 0, n);
            return r
        },
        c1: function(t, n) {
            var e = 0,
            o, u = i,
            s, f, c = 0;
            if ("array" !== a(t[0])) t = u.groupNum(t);
            if ("array" !== a(n)) n = [n];
            o = t.length;
            f = function(n, r) {
                s.push(Math.pow(t[n][0], r) * u.c(t[n][1], r))
            }; !
            function l(i, a) {
                if (a == o) {
                    c = 0;
                    s = u.addArr(i);
                    for (var a = 0; a < n.length; a++) if (n[a] == s) c += 1;
                    if (c > 0) {
                        s = [];
                        r.each(i, f);
                        e += u.multipleArr(s) * c
                    }
                    return
                }
                for (var h = 0; h <= t[a][1]; h++) l(i.concat(h), a + 1)
            } ([], 0);
            return e
        },
        c2: function(t, n, e) {
            var o = 0,
            u = 1,
            s = 0,
            f = i;
            if ("array" !== a(t[0])) t = f.groupNum(t);
            if ("array" !== a(n[0])) n = f.groupNum(n);
            if ("array" !== a(e)) e = [e];
            for (var c = 0,
            l = n.length; c < l; c++) {
                o += n[c][1];
                u *= Math.pow(n[c][0], n[c][1])
            }
            if (0 == o) s = f.c1(t, e);
            else r.each(e,
            function(r) {
                s += e[r] > o ? f.c1(t, e[r] - o) * u: f.c1(n, e[r])
            });
            return s
        },
        groupNum: function(t) {
            var n = [],
            r = {};
            if ("array" === a(t)) {
                for (var e = 0,
                i = t.length; e < i; e++) r[t[e]] ? r[t[e]]++:r[t[e]] = 1;
                for (var o in r) n.push([o, r[o]])
            }
            return n
        },
        multipleArr: function(t) {
            var n = 1;
            if ("array" === a(t)) {
                for (var r = 0,
                e = t.length; r < e; r++) n *= t[r];
                return n
            } else return 0
        },
        sortNum: function(t, n) {
            var r = "desc" != n ?
            function(t, n) {
                return t - n
            }: function(t, n) {
                return n - t
            };
            if ("array" === a(t)) return t.sort(r);
            else return t
        },
        addArr: function(t) {
            var n = 0;
            if ("array" === a(t)) for (var r = 0,
            e = t.length; r < e; r++) n += t[r];
            return n
        },
        indexOf: function(t, n) {
            if ("array" === a(t) && t.length) {
                if (Array.prototype.indexOf) return Array.prototype.indexOf.call(t, n);
                else for (var r = 0; r < t.length; r++) if (t[r] == n) return r;
                return - 1
            }
            return - 1
        },
        random: function(t, n, e) {
            var i = [],
            o,
            u,
            a = 0,
            n = +n,
            s = /^\d+$/;
            if ("string" === typeof t) {
                t = t.split("-");
                if (2 === t.length) {
                    o = +t[0];
                    u = +t[1];
                    t = [];
                    if ("number" == typeof o && u && o < u) for (a = o; a <= u; a++) t.push(a)
                }
            }
            if (r.isArray(t) && n && n < t.length) {
                t = t.slice(0);
                i = this.randomSortArr(t).slice(0, n)
            } else if (n == t.length) {
                if (!e) s.test(t.join("")) && t.sort(function(t, n) {
                    return + t - +n
                });
                return t
            }
            if (!e) s.test(t.join("")) && i.sort(function(t, n) {
                return + t - +n
            });
            return i
        },
        randomWeight: function(t, n) {
            var e = [],
            o,
            u,
            a,
            s,
            f,
            c = 0,
            l,
            h = {},
            g = [],
            p,
            d,
            m,
            v = /^\d+$/;
            n = +n;
            if (t && r.isArray(t) && n) {
                s = 0;
                for (o = 0, a = t.length; o < a; o++) if (r.isArray(t[o]) && 2 == t[o].length) {
                    if (t[o][0] && r.isArray(t[o][0]) && t[o][0].length) {
                        l = +t[o][1];
                        if (!l || l < 0) l = 0;
                        l = Math.round(l);
                        s += t[o][0].length;
                        if (h[l]) h[l] = h[l].concat(t[o][0]);
                        else {
                            h[l] = t[o][0].slice(0);
                            g.push(l);
                            c += l
                        }
                    }
                } else return e;
                g.sort(function(t, n) {
                    return t - n
                });
                if (n < s) {
                    d = {};
                    for (o = 0; o < n; o++) {
                        m = ~~ (Math.random() * c + 1);
                        d[m] ? d[m] += 1 : d[m] = 1
                    }
                    p = {};
                    for (m in d) {
                        f = 0;
                        for (u = 0, a = g.length; u < a; u++) if (m > f && m <= (f += g[u])) {
                            p[g[u]] ? p[g[u]] += d[m] : p[g[u]] = d[m];
                            break
                        }
                    }
                    for (m in p) e = e.concat(i.random(h[m], p[m]))
                } else if (n == s) for (o = 0, a = t.length; o < a; o++) e = e.concat(t[o][0]);
                if (e.length && v.test(e.join(""))) e.sort(function(t, n) {
                    return + t - +n
                })
            }
            return e
        },
        randomNum: function(t, n) {
            t = +t;
            if (null == n) {
                n = t;
                t = 0
            }
            return t + Math.floor(Math.random() * (n - t + 1))
        },
        randomSortArr: function(t) {
            if (!t || !t.length) return [];
            var n, r = [],
            e = 0,
            o = t.length,
            u;
            for (; e < o; e++) {
                u = t[e];
                n = i.randomNum(e);
                r[e] = r[n];
                r[n] = u
            }
            return r
        },
        fillZero: function(t, n) {
            var r = Math.floor( + t),
            e = r + "",
            i = [],
            o = n || 2,
            u = o - e.length,
            a = 0;
            for (; a < u; a++) i[a] = "0";
            return u > 0 ? i.join("") + r: r + ""
        },
        unique: function(t) {
            var n = [],
            e = Array.prototype.slice.call(arguments, r.isArray(t) ? 0 : 1),
            i = e.length,
            o = 0,
            u;
            if (0 == i) return;
            for (; o < i; o++) {
                u = e[o];
                r.each(u,
                function(t, e) {
                    if (r.inArray(e, n) < 0) n.push(e)
                })
            }
            true !== t && n.sort();
            return n
        },
        checkArr: function(t, n, e, i, o, u) {
            var a = 0,
            s = [];
            if (!r.isArray(t)) return {
                err: 1,
                org: t,
                fix: []
            };
            if ("boolean" == typeof o) {
                u = o;
                o = 0
            }
            o = o || Math.abs(e - n + 1);
            var f = {};
            r.each(t,
            function(t, r) {
                var i = parseInt((r + "").replace(/\D/g, "") || -1, 10);
                if (i < n || i > e) a++;
                else if (f[i]) a++;
                else {
                    f[i] = 1;
                    s[s.length] = i
                }
            });
            if (s.length < i) {
                a++;
                s = []
            }
            if (s.length > o) {
                a++;
                s.length = o
            } ! u && s.sort(function(t, n) {
                return + t - +n
            });
            return {
                err: a,
                org: t,
                fix: s
            }
        },
        getStopRecursionFn: function(t, n) {
            return r.getStopRecursionFn(t, n)
        },
        loadMolude: function(t, n) {
            var e;
            n = r.isFunction(n) ? n: r.noop;
            if ("string" === typeof t) {
                e = o(t);
                if (e) true === e ? n() : u("script", e, n)
            } else if (r.isArray(t)) {
                var i = t.length,
                a = 0,
                s = i,
                f = r.isFunction(n) ?
                function() {
                    0 == --s && n()
                }: r.noop;
                for (; a < i; a++) {
                    e = o(t[a]);
                    if (e) true === e ? f() : u("script", e, f)
                }
            }
        },
        checkGamePause: function(t, e) {
            var e = e || r.noop;
            n.checkGamePause(t,
            function(t) {
                e(t);
                if (1 == t || 999 === t) {
                    i.gameStop = true;
                    r.sendMsg("gameOver", t)
                }
            })
        },
        regBaseCom2Lib: function(t, n, e) {
            var i = function(t) {
                var r = {};
                this.getEventCache = function() {
                    return r
                };
                n && this.regEvent(n);
                this.init(t);
                return this
            };
            i.fn = i.prototype = new s;
            if (!e || !e.init) {
                alert("原型链数据错误，缺少init构造函数！");
                return
            }
            r.extend(i.fn, e);
            var o = t.split("."),
            u = o.length,
            a = 0,
            f = this;
            for (; a < u; a++) if (a < u - 1) f = f[o[a]] = f[o[a]] || {};
            else f[o[a]] = i;
            return i
        },
        createCom: function(t, n, e) {
            var o = function(t) {
                var n = i || {},
                r = t.split("."),
                e = r.length,
                o = 0;
                for (; o < e; o++) {
                    n = n[r[o]];
                    if (!n) break
                }
                return n
            };
            var u = o(t),
            a = u ? new u(n) : null;
            if (a) {
                r.isFunction(e) && e(a);
                return a
            }
            this.loadMolude(t,
            function() {
                var i = o(t),
                u = i ? new i(n) : null;
                r.isFunction(e) && e(u)
            })
        },
        dialog: function(t, n) {
            return r.dialog(r.extend({},
            t, {
                title: t.title || "提示",
                css: t.className || "betDialog",
                button: t.button || ["确定"],
                content: "<div class='betDialogContent'>" + t.content + "</div>",
                width: t.width == e ? "22.91rem": t.width,
                height: t.height || 0,
                animate: 0,
                check: t.check || r.noop
            }), n || r.noop)
        },
        alert: function(t, n, e) {
            r.alert(t, n, e)
        },
        confirm: function(t, n, e) {
            r.confirm(t, n, e)
        },
        toast: function(t, n) {
            r.toast(t, n)
        },
        getMoneyText: function(t) {
            if (isNaN(t)) return t;
            var n = 1e8,
            r = 1e12;
            return t < n ? t: t < r ? "<span title='" + t + "彩豆！\n土豪，我们做朋友吧！'>" + (t / n).Round(2) + "亿</span>": "<span title='" + t + "彩豆！\n震精！请问您是哪路高人？'>" + (t / r).Round(2) + "万亿</span>"
        },
        setTimeout: function(t, n) {
            if (!r.isFunction(t) || n === e) return;
            var i, o = 36e5,
            u = function(n) {
                if (n < 0) i = window.setTimeout(t, 0);
                else if (n <= o) i = window.setTimeout(t, n);
                else i = window.setTimeout(function() {
                    u(n - o)
                },
                o)
            };
            u( + n);
            return {
                clear: function() {
                    i && window.clearTimeout(i)
                }
            }
        }
    })
} (window, Core, window.jQuery || window.Zepto); !
function(e, t, n, f, i) {
    f.jczq = f.jczq || {};
    f.jczq.core = f.jczq.core || {};
    t.extend(f.jczq.core, {
        getTotalNum: function(e, t, n, i, r) {
            var o = 0,
            a = 0,
            s, c, l, h, g = [],
            d,
            u = {
                d: {},
                t: {}
            },
            p = {
                d: [],
                t: []
            };
            for (h = 0; h < r.length; h++) {
                u["d"][r[h]] = [];
                u["t"][r[h]] = []
            }
            if (e.length) {
                for (c in t) {
                    if ("length" == c) continue;
                    s = 0;
                    for (l in t[c]) {
                        if (n[c]) u.d[l].push(t[c][l].length);
                        else u.t[l].push(t[c][l].length);
                        s += t[c][l].length
                    }
                    p[n[c] ? "d": "t"].push(s)
                }
                for (h = 0; h < e.length; h++) {
                    d = i[e[h]];
                    if (d) g = g.concat(d)
                }
                a = f.c2(p.t, p.d, g);
                if (r.length > 1) {
                    for (c in u.t) if (u.t[c].length > 0) o += f.c2(u.t[c], u.d[c], g)
                } else o = a
            }
            return [a, o]
        },
        getMaxMethod: function(e, t) {
            var n = {},
            f, i, r = 0;
            for (f in e) for (i in e[f]) if (!n[i]) n[i] = true;
            if (n["bqc"] || n["bf"]) r = 4;
            else if (n["zjq"]) r = 6;
            else if (n["spf"] || n["rfspf"]) r = 8;
            if (e.length < r) r = e.length;
            return r
        },
        getMinMethod: function(e) {
            var t = 2,
            e, f, i;
            e = e || n.config.playType;
            switch (e) {
            case "mixall4dg":
            case "bf":
                t = 1;
                break;
            default:
                if (n.config.isSupportDg) {
                    f = n.betArea.cache.selectGameInfo;
                    i = n.betArea.cache.gameInfo;
                    for (var r in f) if ("length" != r) for (var o in f[r]) if (! (i[r] && i[r].dgStatus[o])) return t;
                    t = 1
                }
            }
            return t
        },
        formatGameInfo: function(e, t, n, f) {
            var i = [],
            r,
            o,
            a,
            s,
            c,
            l,
            h,
            g,
            d,
            u,
            p = {
                spf: -1,
                rfspf: -1,
                bqc: -2,
                zjq: -1,
                bf: -2
            };
            for (a in t) {
                if ("length" == a) continue;
                c = {};
                for (g in t[a]) {
                    d = t[a][g];
                    u = {};
                    if (d) {
                        for (s in d) if ("length" != s) {
                            o = f[g][s];
                            u[String(o[2]).slice(p[g])] = d[s]
                        }
                        c[g] = u
                    }
                }
                i.push({
                    matchCode: a,
                    rq: e[a].rq,
                    score: e[a].rq,
                    isDan: !!n[a],
                    sp: c
                })
            }
            return i
        },
        dan: function() {
            var e = e || n.betMethod,
            t = t || n.betArea,
            f = e.get().selectMethod,
            i = {},
            r = 0,
            o = t.cache.selectGameInfo,
            a = t.cache.selectDanInfo,
            s = e.config.methodType,
            c = e.config.supportMethod,
            l,
            h,
            g,
            d,
            u,
            p;
            for (var b in o) if ("length" != b) if (a[b]) {
                r += 1;
                i[b] = false
            } else i[b] = true;
            for (d = 0; d < f.length; d++) {
                h = s[f[d]];
                h = h[0];
                if (!g || g > h) g = h
            }
            if (g) if (g == o.length) t.setDisabledDan(true);
            else if (g - 1 == r) t.setDisabledDan(i);
            else t.setDisabledDan(false);
            else if (r === o.length - 1) t.setDisabledDan(i);
            else t.setDisabledDan(false);
            u = this.getMaxMethod(o);
            r = 0;
            for (var b in a) r += 1;
            if (0 === r) e.changeMethod(u);
            else {
                l = [];
                for (d = 0; d < c["m_1"].length; d++) {
                    h = s[c["m_1"][d]][0];
                    if (r < h && h <= u) l.push(h)
                }
                l.sort();
                e.changeMethod(u, l[0])
            }
        },
        getWeek: function(e) {
            var t = {
                0 : "星期天",
                1 : "星期一",
                2 : "星期二",
                3 : "星期三",
                4 : "星期四",
                5 : "星期五",
                6 : "星期六"
            };
            return t[e.getDay()]
        }
    })
} (window, window.jQuery || window.Zepto, Core, Game); !
function(e, t, i, n, a) {
    var o = t.support.touch ? "tap": "click",
    l = n.jczq.core;
    var s = {
        teamData: {
            spf: [["blockWin", "胜", "3"], ["blockPing", "平", "1"], ["blockFu", "负", "0"]],
            rfspf: [["blockWin", "让球胜", "10003"], ["blockPing", "让球平", "10001"], ["blockFu", "让球负", "10000"]],
            bf: [["blockYel", "1:0", "10"], ["blockYel", "2:0", "20"], ["blockYel", "2:1", "21"], ["blockYel", "3:0", "30"], ["blockYel", "3:1", "31"], ["blockYel", "3:2", "32"], ["blockYel", "4:0", "40"], ["blockYel", "4:1", "41"], ["blockYel", "4:2", "42"], ["blockYel", "5:0", "50"], ["blockYel", "5:1", "51"], ["blockYel", "5:2", "52"], ["blockYel", "胜其他", "90"], ["blockYel", "0:0", "00"], ["blockYel", "1:1", "11"], ["blockYel", "2:2", "22"], ["blockYel", "3:3", "33"], ["blockYel", "平其他", "99"], ["blockYel", "0:1", "01"], ["blockYel", "0:2", "02"], ["blockYel", "1:2", "12"], ["blockYel", "0:3", "03"], ["blockYel", "1:3", "13"], ["blockYel", "2:3", "23"], ["blockYel", "0:4", "04"], ["blockYel", "1:4", "14"], ["blockYel", "2:4", "24"], ["blockYel", "0:5", "05"], ["blockYel", "1:5", "15"], ["blockYel", "2:5", "25"], ["blockYel", "负其他", "09"]],
            zjq: [["blockYel", "0", "100"], ["blockYel", "1", "101"], ["blockYel", "2", "102"], ["blockYel", "3", "103"], ["blockYel", "4", "104"], ["blockYel", "5", "105"], ["blockYel", "6", "106"], ["blockYel", "7+", "107"]],
            bqc: [["blockYel", "胜胜", "1033"], ["blockYel", "胜平", "1031"], ["blockYel", "胜负", "1030"], ["blockYel", "平胜", "1013"], ["blockYel", "平平", "1011"], ["blockYel", "平负", "1010"], ["blockYel", "负胜", "1003"], ["blockYel", "负平", "1001"], ["blockYel", "负负", "1000"]]
        },
        init: function() {
            var e = this;
            e.gameChange();
            t.bindMsg("loadData",
            function(t) {
                if (0 === t) {
                    e.layoutInit();
                    e.filterLeague();
                    e.initConfirm();
                    e.initGoToBuy();
                    e.initDGSelect();
                    e.initAnalysis();
                    c.initParam()
                }
            });
            delete this.init;
            return this
        },
        gameChange: function() {
            var i = t("#gameSelector"),
            n = i.find(".gametype-wrap"),
            a = n.find(".gametype"),
            l = n.find("li"),
            s,
            c = i.find(".leftArrow"),
            r = i.find(".rightArrow"),
            h,
            f = Math.min(e.innerWidth, e.clientWidth),
            d;
            setTimeout(function() {
                d = l.eq(0).width();
                h = l.length * d;
                l.css("width", d);
                a.css("width", h);
                n.css("width", f);
                s = this.navScroll = new e.IScroll(".gametype-wrap", {
                    snap: "li",
                    scrollX: true,
                    scrollY: false,
                    click: true
                });
                i.delegate(".leftArrow", o,
                function() {
                    s.prev()
                }).delegate(".rightArrow", o,
                function() {
                    s.next()
                });
                this.navScroll.on("scrollEnd",
                function() {
                    var e = this.x;
                    e = Math.abs(e);
                    c.add(r).hide();
                    if (e > 0) c.show();
                    if (e < h - f) r.show()
                });
                this.navScroll.scrollToElement(l.filter(".active")[0], 0)
            },
            200);
            delete this.gameChange;
            return this
        },
        filterLeague: function() {
            var e = t("<div></div>"),
            n = {},
            a = [],
            l = ["1", "2", "3", "4", "5"],
            s = i.cache.matchList,
            c = i.betArea,
            r = this,
            h = function() {
                t.dialog({
                    css: "league-dialog",
                    title: '赛事筛选<span class="total">共<em id="filterResultLen"></em>场比赛</span>',
                    type: "insert",
                    content: e[0],
                    btn: ["确定"],
                    init: function() {
                        f()
                    }
                },
                d)
            },
            f = function() {
                var e = 0;
                t.each(s,
                function(t, i) {
                    var a = n[i.leagueId];
                    if (a && a.checked) e++
                });
                t("#filterResultLen").text(e)
            },
            d = function() {
                t.each(c.cache.gameInfo, u);
                filterDateTitle();
                if (r.scroll) r.scroll.refresh()
            },
            u = function(e, t) {
                var i = n[t.leagueId];
                if (i && i.checked) t.ele.removeClass("hide");
                else t.ele.addClass("hide")
            },
            m = function(e) {
                var i = {},
                n = c.cache.gameInfo,
                a = c.cache.gameDateInfo;
                t.each(a,
                function(a, o) {
                    i[a] = [];
                    t.each(o.game,
                    function(t, o) {
                        var l = e[n[t].leagueId] || {};
                        if (l.checked) i[a].push(n[t])
                    })
                });
                return i
            };
            filterDateTitle = function() {
                var e = c.cache.gameDateInfo,
                i = m(n);
                t.each(i,
                function(t, i) {
                    var n = e[t] || {};
                    var a = n.gameTitle;
                    var o = i.length;
                    if (o > 0) a && a.show().find(".date-num").text(o);
                    else a && a.hide()
                })
            },
            initDOM = function() {
                t.each(s,
                function(e, t) {
                    var i = t.leagueId;
                    if (!n[i]) {
                        var o = {
                            leagueId: i,
                            elem: null,
                            leagueName: t.leagueName,
                            checked: true
                        };
                        n[i] = o;
                        a.push(o)
                    }
                });
                e.append(t.template(t("#leagueFilterDialogTpl").html(), a));
                e.find(".filter-tab").on(o, "span",
                function() {
                    var e = this.getAttribute("class");
                    if ("all" == e) t.each(n,
                    function(e, t) {
                        if (!t.checked) {
                            t.checked = true;
                            t.elem.addClass("active")
                        }
                    });
                    else if ("revert" == e) t.each(n,
                    function(e, t) {
                        t.checked = !t.checked;
                        t.elem.toggleClass("active")
                    });
                    else if ("fiveLeague" == e) t.each(n,
                    function(e, i) {
                        if (t.inArray(i.leagueId, l) === -1) {
                            if (i.checked) {
                                i.checked = false;
                                i.elem.removeClass("active")
                            }
                        } else if (!i.checked) {
                            i.checked = true;
                            i.elem.addClass("active")
                        }
                    });
                    f()
                });
                e.find(".league-list").on(o, "li",
                function() {
                    var e = t(this),
                    i = e.data("leagueId"),
                    a = n[i];
                    a.checked = !a.checked;
                    a.elem.toggleClass("active");
                    f()
                }).find("li").each(function() {
                    var e = t(this),
                    i = e.data("leagueId");
                    if (i) n[i].elem = e
                });
                var i = t("#header");
                i.find(".league-filter-ico").on(o,
                function() {
                    h()
                })
            };
            initDOM();
            filterDateTitle();
            delete this.filterLeague;
            return this
        },
        layoutInit: function() {
            var i, n = t(e),
            a = this,
            l = t(".confirm-bottom"),
            s = t("#header"),
            c = t("#gameSelector"),
            r = t("#wrapper"),
            h = function() {
                var e = l.height(),
                t = s.height(),
                i = +c.height() || 0,
                a = n.height();
                r.height(a - e - t - i);
                l.css({
                    top: a - e,
                    left: 0,
                    bottom: "auto"
                })
            },
            f = function() {
                l.show();
                h();
                i = a.scroll = new IScroll(r[0], {
                    click: true
                });
                t.sendMsg("iScrollReady", i)
            };
            l.css("position", "absolute");
            a.reSetHeight = h;
            r.css("overflow", "hidden");
            r[0] && r[0].addEventListener("touchstart",
            function(e) {
                e.preventDefault()
            },
            false);
            r.delegate(".match-divider", o,
            function() {
                if (i) i.refresh()
            });
            e.setTimeout(f, 200);
            delete this.layoutInit;
            return this
        },
        initDGSelect: function() {
            var e = t(".dgSelect"),
            n;
            if (i.config.isSupportDg && e[0]) {
                n = t("body");
                if (1 == LS.get("isDgMarkHL")) n.addClass("markHL");
                else n.removeClass("markHL");
                e.show();
                t(".dgCheck", e).on(o,
                function() {
                    if (n.hasClass("markHL")) {
                        n.removeClass("markHL");
                        LS.set("isDgMarkHL", 0)
                    } else {
                        n.addClass("markHL");
                        LS.set("isDgMarkHL", 1)
                    }
                });
                t(".chelp", e).on(o,
                function() {
                    t.dialog({
                        css: "dgSelect-help",
                        title: "",
                        type: "html",
                        content: "<b>单关固定：</b>猜一场或多场比赛，猜中即中奖。奖金以生效时刻的赔率为准。单关固定返奖率高达87%。",
                        button: ["我知道了"]
                    })
                })
            }
            delete this.initDGSelect;
            return this
        },
        initAnalysis: function() {
            var e = t("#analysisTpl").html(),
            n = t(".data-body .content"),
            a,
            l = i.betArea.cache.gameInfo,
            s,
            c,
            r,
            h,
            f;
            n.delegate(".league-nd-time", o,
            function() {
                var n = t(this);
                a = t(".showAnalysis", n);
                if (!a[0]) return;
                s = n.closest(".match-item");
                c = t(".analyBox", s);
                if (c[0]) {
                    c.toggle();
                    a.toggleClass("on")
                } else {
                    r = s.attr("data-matchcode");
                    h = l[r];
                    if (h && h.analyData) {
                        h = h.analyData;
                        f = t.template(e, h);
                        s.append(f)
                    }
                    a.addClass("on")
                }
                i.common.scroll.refresh()
            })
        },
        initGoToBuy: function() {
            var a = i,
            s = a.betArea,
            r = a.betMethod,
            h = t(".goToBuy"),
            f = h.find(".layout"),
            d = h.find(".buy-bottom"),
            u = h.find(".bottom-box"),
            m = h.find(".methods-wrap"),
            g = h.find(".method-option"),
            b = h.find(".totalmoney"),
            p = h.find(".btn-confirm"),
            k = h.find(".bonus"),
            v = t("#methodListTpl").html(),
            y = {
                config: {
                    payUrl: "/t/pay/order.html"
                },
                init: function() {
                    var i = function() {
                        e.setTimeout(function() {
                            if (d[0].scrollIntoView) d[0].scrollIntoView()
                        },
                        210)
                    };
                    t(e).resize(i);
                    d.css({
                        position: "absolute",
                        bottom: "",
                        overflow: "hidden"
                    });
                    f.css({
                        height: e.innerHeight,
                        position: "absolute"
                    });
                    h.delegate(".close-icon", "click",
                    function(e) {
                        y.hide()
                    }).delegate(".method", o,
                    function(e) {
                        var i = t(this),
                        n,
                        a = [];
                        i.toggleClass("active");
                        n = h.find(".methods-wrap .active");
                        n.each(function() {
                            var e = this.getAttribute("data-method");
                            if (e) a.push(e)
                        });
                        r.setMethod(a);
                        M()
                    }).delegate(".method-option", "click",
                    function(e) {
                        var i = h.find(".methods");
                        t(this).toggleClass("close");
                        i.toggleClass("hide");
                        M();
                        y.reSetHeight()
                    });
                    h.find("input").focus(function() {
                        if (d[0].scrollIntoView) d[0].scrollIntoView()
                    });
                    r.onMethodChange(this.updateInfo);
                    this.initBetTime();
                    this.goToBuy();
                    delete this.init
                },
                show: function() {
                    var e, n, a, o, c;
                    c = i.config.playType || "";
                    h.find(".match-num").html(s.cache.selectGameInfo.length || 0);
                    a = l.getMaxMethod(s.cache.selectGameInfo);
                    o = l.getMinMethod();
                    r.changeMethod(a, l.getMinMethod());
                    e = r.get().selectMethod,
                    n = r.get().currentMethod;
                    if (1 == o && "mixall4dg" == c) r.setMethod(o + "_1");
                    else if (!e.length && n.length >= 1 && n.indexOf(a + "_1") > -1) r.setMethod(a + "_1");
                    m.html(t.template(v, r.get()));
                    M();
                    this.updateInfo();
                    f.show();
                    d.removeClass("hide3");
                    this.reSetHeight();
                    return this
                },
                hide: function() {
                    f.hide();
                    d.addClass("hide3");
                    return this
                },
                initBetTime: function() {
                    this.betTime = i.betTime = Class.Widgets.iNumber.create(h.find(".inputBox"));
                    this.betTime.onChange(this.updateInfo);
                    delete this.initBetTime
                },
                updateInfo: function() {
                    var e = r.get().selectMethod,
                    t = s.get().gameInfo,
                    a = s.get().selectGameInfo,
                    o = r.config.methodType,
                    c = s.config.gameTypes,
                    h = 0,
                    f = y.betTime.get() || 1;
                    h = l.getTotalNum(e, a, {},
                    o, c)[0] || 0;
                    b.html(h * f * 2);
                    i.loadCdnJS("/js2/sportGame2/bonus/com/jczqBonus.js",
                    function() {
                        return !! (n.jczq && n.jczq.getMaxBound)
                    },
                    function() {
                        var i = l.formatGameInfo(t, a, {},
                        s.config.teamData),
                        o,
                        c = 0,
                        r = 0;
                        if (i.length >= 1 && e.length > 0) try {
                            c = n.jczq.getMaxBound({
                                selectMethod: e,
                                selectGameInfo: i
                            });
                            r = n.jczq.getMinBound({
                                selectMethod: e,
                                selectGameInfo: i
                            });
                            c = +c || 0;
                            r = +r || 0
                        } catch(h) {
                            console.log(h, "计算奖金出现错误");
                            c = 0;
                            r = 0
                        } else {
                            c = 0;
                            r = 0
                        }
                        if (r == c) k.html((c * f).toFixed(2) + "彩豆");
                        else k.html((r * f).toFixed(2) + "-" + (c * f).toFixed(2) + "彩豆")
                    });
                    return this
                },
                reSetHeight: function() {
                    var t = u.height(),
                    i = e.innerHeight,
                    n;
                    n = i - t;
                    if (n < 0) n = 0;
                    d.css({
                        top: n + "px",
                        height: t
                    })
                },
                goToBuy: function() {
                    var i = this.config,
                    a = false;
                    p.on("click",
                    function() {
                        if (a) return;
                        e.setTimeout(function() {
                            a = false
                        },
                        3e3);
                        var o = r.serialize();
                        if (!o) {
                            t.alert("请选择过关方式");
                            return
                        }
                        c.createForm(i.payUrl, {
                            stakeNumber: s.serialize(),
                            gameExtra: o,
                            gameEn: n.gameEn,
                            isSupportPassWay: 1,
                            betTimes: y.betTime.get() || 1,
                            backUrl: "history"
                        });
                        a = true
                    });
                    delete this.goToBuy;
                    return this
                }
            },
            M = function() {
                g.find(".method-option-text").html(r.get().selectMethod.join(" ").replace("1_1", "单关").replace(/_/g, "串") || (h.find(".methods").hasClass("hide") ? "展开": "隐藏"))
            };
            y.init();
            this.BuyModule = y;
            delete this.initGoToBuy;
            return this
        },
        initConfirm: function() {
            var e = i,
            n = e.betArea,
            a = t(".confirm-bottom .btn-cancel"),
            c = e.config,
            r = t(".confirm-bottom .btn-confirm"),
            h = t(".confirm-bottom .box-center"),
            f = t(".confirm-bottom .bet-help"),
            d = t(".confirm-bottom .match-num"),
            u;
            r.html("请选择比赛结果");
            n.onChange(function() {
                var e = n.cache.selectGameInfo.length,
                t = false;
                u = l.getMinMethod();
                if (e >= u) {
                    if (h.hasClass("hide")) {
                        h.removeClass("hide");
                        f.addClass("hide");
                        t = true
                    }
                } else if (!h.hasClass("hide")) {
                    h.addClass("hide");
                    f.removeClass("hide");
                    t = true
                }
                if (e >= u) r.html("选好了，下一步");
                else if (0 == e) r.html("请选择比赛结果");
                else r.html("请至少选择" + u + "场比赛结果");
                if (t) {
                    s.reSetHeight();
                    if (s.scroll) s.scroll.refresh()
                }
                d.html(e);
                return this
            });
            a.bind(o,
            function() {
                if (0 === n.cache.selectGameInfo.length) return;
                t.confirm("确定要清空所有选项？",
                function(e) {
                    if (1 === e) n.clear()
                })
            });
            r.bind("click",
            function() {
                var e = n.cache.selectGameInfo.length,
                i = l.getMinMethod();
                if (e >= i) s.BuyModule.show();
                else t.alert("请至少选择" + i + "场比赛结果")
            });
            delete this.initConfirm;
            return this
        }
    },
    c = {
        checkList4Bet: function(e) {
            var t = i.config.isSupportDg,
            n;
            if (!e || !e.length || e.length < 1) return false;
            if (1 == e.length && !t) return false;
            if (1 == e.length && t) {
                n = e[0].dgStatus;
                if (!n) return false;
                for (var a in n) if (n[a]) return true;
                return false
            }
            return true
        },
        explainData: function(e, n) {
            var a, o = [],
            l,
            s,
            c,
            r,
            h,
            f,
            d,
            u,
            m,
            g,
            b,
            p = e.matchList,
            k = i.config,
            v = k.playType,
            y = function(e, t, i, n) {
                if ("rfspf" == i) {
                    r = +e[3] || 0;
                    t.rq = r
                }
                if ("spf" == i || "rfspf" == i) {
                    t.spData[i] = e.slice(0, 3);
                    h = true
                } else if (e.length > 0) {
                    t.spData[i] = e.slice(0);
                    h = true
                }
                t.dgStatus[i] = "1" == n ? true: false
            };
            k.gameId = e.gameId;
            k.gameEn = e.gameEn;
            k.isSupportDg = "1" == e.isDispJczqSingleFix ? true: false;
            if (!n) return o;
            for (a in p) {
                s = p[a];
                h = false;
                if (s.matchCode && 1 == s.status) {
                    l = {
                        rq: 0,
                        gameDate: t.formatTime( + s.matchDate, "yyyyMMdd") || null,
                        startTime: +s.startTime,
                        endTime: +s.buyEndTime,
                        matchDate: +s.matchDate,
                        matchnumcn: s.matchCode.slice( - 3),
                        hostName: s.hostName.cutString(8),
                        guestName: s.guestName.cutString(8),
                        hostRankInfo: s.hostRankInfo || "-",
                        visitRankInfo: s.visitRankInfo || "-",
                        isStop: !(1 == s.status),
                        leagueId: s.lid,
                        hostTeamId: s.hid,
                        visitTeamId: s.gid,
                        leagueName: s.leagueName,
                        matchCode: s.matchCode,
                        matchId: s.mid,
                        spData: {},
                        dgStatus: {},
                        analyData: {},
                        status: s.status
                    };
                    if (s.spTabMix && s.spTabMix.length) {
                        if ("mixall4dg" == v) b = s.singleMixStatus;
                        else b = s.mixStatus;
                        u = s.spTabMix;
                        m = s.singleMixStatus || [];
                        n.forEach(function(e, t) {
                            if (1 == b[t] && u[t] && u[t].length) {
                                c = u[t];
                                g = m[t];
                                y(c, l, e, g)
                            }
                        });
                        l.mixStatus = s.mixStatus;
                        l.singleMixStatus = s.singleMixStatus
                    } else if (s.spTab) {
                        c = s.spTab;
                        f = n[0];
                        if (c && c.length) y(c, l, f, s.singleStatus)
                    }
                    l.analyData = {
                        matchId: s.mid,
                        hid: s.hid,
                        gid: s.gid,
                        hint: s.hint,
                        visitRecent: s.visitRecent || "0,0,0",
                        hostRecent: s.hostRecent || "0,0,0",
                        hisHitCount: s.hisHitCount || 0,
                        historyScore: s.historyScore || "0,0,0",
                        hostName: s.hostName
                    };
                    if (s.mixBidCounts && s.mixBidCounts.length) l.analyData.mixBidCounts = s.mixBidCounts;
                    else l.analyData.bidCounts = s.bidCounts;
                    if (s.odds3) {
                        l.analyData.odds3 = s.odds3;
                        l.analyData.odds1 = s.odds1;
                        l.analyData.odds0 = s.odds0
                    }
                    if (h) o.push(l)
                }
            }
            o.sort(function(e, t) {
                return + e.matchCode - +t.matchCode
            });
            return o
        },
        initParam: function() {
            var e = i,
            n = t.getPara(),
            a = n.gameStr || n.stakeNumber,
            o,
            s = n.gameExtra,
            c = n.anchor,
            r = i.betArea,
            h = i.betMethod,
            f,
            d,
            u,
            m = r.cache.gameInfo;
            try {
                if (a) {
                    r.unSerialize(a);
                    o = a.split(" ")[0] || "";
                    o = o.split(":")[0];
                    if (o && m[o]) if (!c || !m[c]) c = o;
                    if (s) {
                        s = s.split(",");
                        u = l.getMaxMethod(r.cache.selectGameInfo);
                        d = l.getMinMethod();
                        h.changeMethod(u, d);
                        h.setMethod(s)
                    }
                }
                f = +n.betTimes;
                if (!isNaN(f)) {
                    f = Math.floor(f);
                    if (f < 0) f = 0;
                    if (f > 5e5) f = 5e5;
                    e.betTime.set(f)
                }
            } catch(g) {
                console.log(g, "反序列化比赛的时候出现错误")
            }
            t.bindMsgOnce("iScrollReady",
            function(e) {
                if (e && c && m[c]) e.scrollToElement(m[c].ele[0], 0, true, true)
            })
        },
        createForm: function(e, i, n, a) {
            var o = ["<form method='", n || "post", "' action='", e, "' target='", a || "_self", "'>"],
            l,
            s;
            if (i) for (l in i) o.push("<input type='hidden' name='" + l + "' value='" + i[l] + "'/>");
            s = t(o.join("") + "</form>").appendTo(document.body);
            s.submit();
            s.remove()
        }
    };
    t.extend(i, {
        common: s,
        helper: c
    })
} (window, window.jQuery || window.Zepto, Core, Game); !
function(e, t, n, i, a, o) {
    var s = n.isSupportTouch ? "tap": "click";
    i.Base.Event.extend("Game.COMS.JC.BetArea", {
        config: {
            oneGameId: "data-matchcode",
            oneGameRelId: "data-relation",
            oneDayId: "data-gamedate",
            oneDaySelect: "dl[data-gamedate]",
            oneTitleSelect: "dt.match-divider",
            oneGameSelect: "dd[data-matchcode],dd[data-relation]",
            oneOptionSelect: "span[data-index][data-gametype]",
            delBtnSelect: ".delete-col",
            danBtnSelect: ".danbtn",
            danActive: "active",
            danDisabled: "disabled",
            oneOptionIndex: "data-index",
            oneOptionGameType: "data-gametype",
            oneOptionSp: "data-sp",
            selectOption: "active",
            gameWrapSelector: ".gameSelect",
            gameTypes: null,
            teamData: null,
            gameId: null,
            serialize: null
        },
        init: function(e) {
            var t, i, o = /(\S+)Selector$/,
            s = this;
            this.config = n.extend({},
            this.config, e);
            i = {
                gameDateInfo: {},
                gameInfo: {},
                selectGameInfo: {
                    length: 0
                },
                selectDanInfo: {}
            };
            this.cache = i;
            t = this.config;
            this.callSuper("onDisplay onPosition onSelectOption onRemoveOption onDel onClear onChange onDelGame onAddGame onDanChange onBeforeDestroy onRender");
            for (var h in t) if ("string" == a.getType(h) && o.test(h)) i[RegExp.$1] = n(t[h]);
            if (!i.gameWrap || !i.gameWrap.length) {
                this.log("betArea初始化错误，没有找到页面元素");
                return this
            }
            if (!t.gameTypes || !t.gameTypes.length) {
                this.log("betArea初始化错误，没有找到玩法类型");
                return this
            }
            r = {};
            n.each(c,
            function(e) {
                r[e] = n.proxy(c[e], s)
            });
            p.call(this);
            u.call(this)
        },
        get: function() {
            var e = this;
            return {
                selectGameInfo: e.cache.selectGameInfo,
                gameInfo: e.cache.gameInfo,
                gameDateInfo: e.cache.gameDateInfo,
                selectDanInfo: e.cache.selectDanInfo
            }
        },
        getGameInfo: function() {
            return this.cache.gameInfo
        },
        getSelectGameInfo: function() {
            return this.cache.selectGameInfo
        },
        getSelectDanInfo: function() {
            return this.cache.selectDanInfo
        },
        getGameDateInfo: function() {
            return this.cache.gameDateInfo
        },
        getOneGameInfo: function(e) {
            return this.cache.gameInfo[e]
        },
        getOneDateInfo: function(e) {
            return this.cache.gameDateInfo[e]
        },
        getOneSelectGameInfo: function(e) {
            return this.cache.selectGameInfo[e]
        },
        getOneSelectDanInfo: function(e) {
            return this.cache.selectDanInfo[e] || false
        },
        getMapKeyList: function(e) {
            var t = [];
            if (!e || !n.isPlainObject(e)) return t;
            for (var i in e) if ("length" != i) t.push(i);
            return t
        },
        eachGameInfo: function(e) {
            var t = this.cache.gameInfo;
            for (var n in t) if ("length" != n) if (false === e.call(this, n, t[n], t)) return this
        },
        eachSelectGameInfo: function(e) {
            var t = this.cache.selectGameInfo;
            for (var n in t) if ("length" != n) if (false === e.call(this, n, t[n], t)) return this
        },
        each: function(e, t) {
            if (e) for (var n in e) if ("length" != n) if (false === t.call(this, n, e[n], e)) return this
        },
        findGameOption: function(e, t, n) {
            var i = this.cache,
            a = this.config,
            o, s = i.gameInfo;
            n = +n;
            if (!e || !s[e]) return;
            o = s[e].optionMap;
            if (t && n >= 0) {
                if (o[t] && o[t][n]) return o[t][n]
            } else return o
        },
        findGameOptionSp: function(e, t, n) {
            var i = this.cache,
            a = this.config,
            o, s = i.gameInfo;
            n = +n;
            if (!e || !s[e]) return;
            o = s[e].spData;
            if (t && n >= 0) {
                if (o[t] && o[t][n]) return o[t][n]
            } else return o;
            return this
        },
        selectOption: function(e, t, n) {
            return a.getStopRecursionFn(l, this)(e, t, n)
        },
        removeOption: function(e, t, n) {
            return a.getStopRecursionFn(f, this)(e, t, n)
        },
        del: function(e) {
            return a.getStopRecursionFn(d, this)(e)
        },
        clear: function() {
            return a.getStopRecursionFn(g, this)()
        },
        display: function(e, t) {
            e = +e;
            if (!e) return this;
            switch (e) {
            case 1:
                this.displayByGameInfo(t);
                break;
            case 2:
                this.displayByLeagueid(t);
                break;
            case 3:
                this.displayByMap(t)
            }
            return this
        },
        displayByGameInfo: function(e) {
            var t = a.getType(e),
            n = {};
            if ("object" != t) return this;
            var i, o, s, c, r = this.cache.gameInfo,
            h = this.cache.selectGameInfo,
            l = e.isRq,
            f = e.isFrq,
            d = e.isStop,
            g = e.isSelect,
            u, p = e.isHot;
            for (var m in r) {
                i = true;
                o = true;
                s = true;
                c = true;
                u = r[m];
                if (true === g && (!h || !h.length || !h[m])) c = false;
                if (u.isStop && "boolean" == a.getType(d)) i = d;
                if ("boolean" == a.getType(l) && "boolean" == a.getType(f) && "undefined" != a.getType(u.score)) o = 0 === u.score ? f: l;
                if (true === p && "boolean" == a.getType(u.isHot)) s = u.isHot;
                n[m] = i && o && s && c;
                this.displayOneGame(m, n[m])
            }
            this.trigger("onDisplay", n);
            return this
        },
        displayByLeagueId: function(e) {
            var t = a.getType(e),
            n,
            i,
            o = {},
            s = this.cache.gameInfo;
            if ("object" != t) return this;
            for (n in s) for (i in e) if (s[n].leagueId == i) {
                o[n] = !!e[i];
                this.displayOneGame(n, !!e[i])
            }
            this.trigger("onDisplay", o);
            return this
        },
        displayByMap: function(e) {
            var t = a.getType(e),
            n = {},
            i,
            o = this.cache.gameInfo;
            if ("object" != t) return this;
            for (i in e) if (o[i]) {
                n[i] = !!e[i];
                this.displayOneGame(i, !!e[i])
            }
            this.trigger("onDisplay", n);
            return this
        },
        displayAllGame: function() {
            var e = this.cache.gameDateInfo,
            t = {},
            i, a = this,
            o;
            for (i in e) {
                n.each(e[i].game,
                function() {
                    t[this] = true;
                    a.displayOneGame(this, true)
                });
                o = e[i].wrap;
                o.removeClass("closeData")
            }
            this.trigger("onDisplay", t);
            return this
        },
        displayOneGame: function(e, t) {
            var n = this.cache.gameInfo,
            i = n[e];
            if (!i && "boolean" != a.getType(t)) return this;
            i && i.ele.css("display", t ? "": "none");
            i && i.relationEle && i.relationEle.css("display", t ? "": "none");
            return this
        },
        delOneMatch: function(e) {
            var t = this.cache,
            i = t.gameInfo,
            a = i[e],
            o,
            s;
            if (e && a) {
                this.del(e);
                s = a.gameDate;
                i[e].ele.remove();
                if (i[e].relationEle) i[e].relationEle.remove();
                if (s) {
                    o = t.gameDateInfo[s];
                    if (o && o.game[e]) delete o.game[e];
                    if (n.isEmptyObject(o.game)) {
                        if (o.titleEle) o.titleEle.remove();
                        if (o.wrap) o.wrap.remove();
                        delete t.gameDateInfo[s]
                    }
                }
                delete i[e];
                this.trigger("onDelGame", e)
            }
            return this
        },
        addMatch: function(e) {
            var t = this,
            i = h.call(this, this.cache.gameWrap.find(this.config.oneGameSelect));
            if (e && e.length) e.forEach(function(e, n) {
                t.addOneMatch(e, i)
            });
            if (e && n.isPlainObject(e)) for (var a in e) t.addOneMatch(e[a], i);
            return this
        },
        addOneMatch: function(e, t) {
            var i = this.cache.gameInfo,
            a = this.cache.gameDateInfo,
            o = this.cache.selectGameInfo,
            s, c, r = this,
            l = this.config,
            f, d, g, u;
            s = t || h.call(this, this.cache.gameWrap.find(l.oneGameSelect));
            if (n.isPlainObject(e) && e.matchCode && s[e.matchCode]) {
                c = i[e.matchCode] || {};
                d = s[e.matchCode].ele;
                u = s[e.matchCode].relationEle;
                if (d) {
                    c.rq = +e.rq || 0;
                    c = n.extend({},
                    e, c);
                    if (o[e.matchCode]) this.del(e.matchCode);
                    c.option = d.find(l.oneOptionSelect);
                    if (u) c.option = c.option.add(u.find(l.oneOptionSelect));
                    c.optionMap = {};
                    c.option.each(function(e, t) {
                        var i = n(this),
                        a = i.attr(l.oneOptionGameType),
                        o = i.attr(l.oneOptionIndex),
                        s = +i.attr(l.oneOptionSp);
                        if (a && s >= 0 && o >= 0) {
                            c.optionMap[a] = c.optionMap[a] || {};
                            if (c.optionMap[a][o]) c.optionMap[a][o] = c.optionMap[a][o].add(i);
                            else c.optionMap[a][o] = i
                        }
                    });
                    n.extend(c, s[e.matchCode]);
                    g = c.ele.find(l.danBtnSelect);
                    if (g && g.length) c.danBtn = g;
                    c.wrap = c.ele.closest(l.oneDaySelect);
                    f = c.gameDate;
                    if (f) {
                        if (!a[f]) a[f] = {
                            wrap: c.wrap,
                            gameTitle: c.wrap.find(l.oneTitleSelect),
                            game: {}
                        };
                        a[f]["game"][c.matchCode] = c.ele
                    }
                    i[e.matchCode] = c;
                    r.trigger("onAddGame", c.matchCode)
                }
            }
            return this
        },
        setDisabledDan: function(e) {
            var t, i = this.cache.selectGameInfo,
            o = this.cache.gameInfo,
            s = this.cache.selectDanInfo,
            c = this.config,
            r = false;
            if (n.isPlainObject(e)) {
                for (t in e) if (true === e[t]) {
                    if (true === s[t]) {
                        r = true;
                        delete s[t]
                    }
                    if (o[t].danBtn) o[t].danBtn.removeClass(c.danActive).addClass(c.danDisabled)
                } else if (false === e[t]) {
                    if (!i[t]) continue;
                    if (o[t].danBtn) o[t].danBtn.removeClass(c.danDisabled)
                }
            } else if ("boolean" == a.getType(e)) for (t in o) {
                if ("length" === t) continue;
                if (e) {
                    if (true === s[t]) {
                        r = true;
                        delete s[t]
                    }
                    if (o[t] && o[t].danBtn) o[t].danBtn.removeClass(c.danActive).addClass(c.danDisabled)
                } else {
                    if (!i[t]) continue;
                    if (o[t] && o[t].danBtn) o[t].danBtn.removeClass(c.danDisabled)
                }
            }
            if (r) this.trigger("onDanChange", s);
            return this
        },
        setDan: function(e) {
            var t, i = this.cache.gameInfo,
            a = this.cache.selectDanInfo,
            o = this.config,
            s = this.cache.selectGameInfo;
            if (n.isPlainObject(e)) {
                for (t in e) {
                    if (!i[t]) continue;
                    if (true === e[t]) {
                        a[t] = true;
                        if (i[t].danBtn) i[t].danBtn.addClass(o.danActive).removeClass(o.danDisabled)
                    } else if (false === e[t]) if (a[t]) {
                        delete a[t];
                        if (i[t].danBtn) i[t].danBtn.removeClass(o.danActive)
                    }
                }
                this.trigger("onDanChange", a)
            } else if ("boolean" == typeof e) {
                for (t in s) {
                    if (!i[t]) continue;
                    if (e) {
                        if (!a[t]) {
                            a[t] = true;
                            if (i[t].danBtn) i[t].danBtn.addClass(o.danActive).removeClass(o.danDisabled)
                        }
                    } else if (a[t]) {
                        delete a[t];
                        if (i[t].danBtn) i[t].danBtn.removeClass(o.danActive)
                    }
                }
                this.trigger("onDanChange", a)
            }
            return this
        },
        show: function() {
            this.cache.gameWrap.show()
        },
        hide: function() {
            this.cache.gameWrap.hide()
        },
        serialize: function() {
            var e = this.cache,
            t, i, o, s, c = this.config.teamData,
            r, h = e.selectGameInfo,
            l = e.selectDanInfo,
            f, d, g = [],
            u,
            p = this.config.serialize;
            if (n.isFunction(p)) return p(h);
            else {
                u = this.getMapKeyList(h);
                a.sortNum(u);
                for (s = 0; s < u.length; s++) {
                    t = u[s];
                    d = [];
                    d.push(t);
                    f = [];
                    for (i in h[t]) {
                        r = c[i];
                        for (o in h[t][i]) {
                            if ("length" == o) continue;
                            f.push(r[o][2])
                        }
                    }
                    d.push(f.join("."));
                    if (l[t]) d.push(1);
                    else d.push(0);
                    g.push(d.join(":"))
                }
                return g.join(" ")
            }
        },
        unSerialize: function(e, t) {
            var i = {},
            o, s, c, r, h, l, f, d, g, u, p, m, v, I, C, y, D, _ = {},
            G = 0,
            S = 0,
            O = {};
            t = t || a.gameEn;
            if (/^jclq.+/.test(t)) O = {
                1 : "sf",
                4 : "rfsf",
                3 : "dxf",
                2 : "sfc"
            };
            else if (/^jczq.+/.test(t)) O = {
                1 : "spf",
                2 : "bf",
                3 : "zjq",
                4 : "bqc",
                5 : "rqspf"
            };
            if (1 == this.config.gameTypes.length) u = this.config.gameTypes[0];
            if (!e) return i;
            try {
                I = this.config.teamData;
                C = {};
                this.clear();
                for (r in I) {
                    g = I[r];
                    C[r] = C[r] || {};
                    for (s = 0; s < g.length; s++) C[r][g[s][2]] = s
                }
                e = n.trim(e).split(" ");
                v = this.get().gameInfo;
                for (s = 0; s < e.length; s++) {
                    o = e[s].split(":");
                    if (o.length > 1 && o.length <= 3) {
                        h = o[0];
                        f = o[1];
                        l = "1" == o[2];
                        l && ++G;
                        _[h] = l;
                        f = f.split("."); ++S;
                        if (f && f.length && h && v[h]) for (c = 0; c < f.length; c++) {
                            p = u || O[String(f[c]).length];
                            if (p) {
                                y = C[p][f[c]];
                                this.selectOption(h, p, y)
                            }
                        }
                    }
                }
            } catch(M) {} finally {}
        },
        destroy: function() {
            var e = this,
            t = e.config,
            i = this.cache;
            if (false === this.trigger("onBeforeDestroy")) return false;
            i.gameWrap.undelegate(t.oneTitleSelect, s, r.titleDisplay).undelegate(t.oneOptionSelect, s, r.selOpt).undelegate(t.delBtnSelect, s, r.delMatch).undelegate(t.danBtnSelect, s, r.selDan);
            var a = ["onDisplay", "onPosition", "onSelectOption", "onRemoveOption", "onDel", "onClear", "onChange", "onDelGame", "onAddGame", "onDanChange", "onBeforeDestroy", "onRender"];
            n.each(a,
            function(t, n) {
                e.unbind(n)
            });
            i.gameWrap.html("");
            i.gameDateInfo = {};
            i.selectGameInfo = {};
            i.gameInfo = {};
            i.gameWrap = null
        }
    });
    var c = {
        titleDisplay: function(e) {
            var t = this,
            i = t.config,
            a = this.cache,
            o = n(e.currentTarget),
            s = o.closest(i.oneDaySelect),
            c,
            r = t.cache.gameDateInfo,
            h = {};
            if (s && s.length) {
                c = s.attr(i.oneDayId);
                if (c && r[c] && r[c].game) {
                    if (s.hasClass("hideOneDay")) {
                        s.removeClass("hideOneDay");
                        o.removeClass("closed")
                    } else {
                        s.addClass("hideOneDay");
                        o.addClass("closed")
                    }
                    for (key in r[c].game) h[key] = !s.hasClass("hideOneDay");
                    t.trigger("onDisplay", h)
                }
            }
        },
        selOpt: function(e) {
            var t = this,
            i = t.config,
            o = this.cache,
            s = n(e.currentTarget),
            c = s.closest(i.oneGameSelect),
            r = c.attr(i.oneGameId) || c.attr(i.oneGameRelId),
            h = s.attr(i.oneOptionGameType),
            l = s.attr(i.oneOptionIndex),
            f = i.selectOption,
            d = o.gameInfo[r],
            g = o.selectGameInfo[r];
            if (!r || d.isStop) return this;
            if (!h || a.indexOf(i.gameTypes, h) == -1) alert("gameTypes或者oneOptionSelect配置错误");
            l = +l;
            if (s.hasClass(f)) t.removeOption(r, h, l);
            else t.selectOption(r, h, l);
            if (i.isStopSelOptPropagation) e.stopPropagation()
        },
        selDan: function(e) {
            var t = this,
            i = t.config,
            a = this.cache,
            o = n(e.currentTarget),
            s = o.closest(i.oneGameSelect),
            c = s.attr(i.oneGameId),
            r = {};
            if (c && a.gameInfo[c]) if (!o.hasClass(i.danDisabled)) {
                r[c] = !o.hasClass(i.danActive);
                t.setDan(r)
            }
        },
        delMatch: function(e) {
            var t = this,
            i = t.config,
            a = this.cache,
            o = n(e.currentTarget),
            s = o.closest(i.oneGameSelect),
            c = s.attr(i.oneGameId);
            if (c && a.gameInfo[c]) t.delOneMatch(c)
        }
    },
    r = {},
    h = function(e) {
        var t = {},
        i = this;
        if (e && e.length && e.each) e.each(function() {
            var e = n(this),
            a,
            o;
            a = e.attr(i.config.oneGameId);
            o = e.attr(i.config.oneGameRelId);
            if (a) t[a] ? t[a].ele ? t[a].ele.add(e) : t[a].ele = e: t[a] = {
                ele: e
            };
            if (o) t[o] ? t[o].relationEle ? t[o].relationEle.add(e) : t[o].relationEle = e: t[o] = {
                relationEle: e
            }
        });
        return t
    },
    l = function(e, t, n) {
        var i = this.cache,
        o = this.config,
        s, c, r = i.selectGameInfo,
        h = r[e];
        n = +n;
        if (!e || !t || n < 0) return this;
        s = this.findGameOption(e, t, n);
        c = this.findGameOptionSp(e, t, n);
        c = +c;
        if (! (c >= 0) || r[e] && r[e][t] && r[e][t][n] >= 0) return this;
        if (!r[e] && r.length > 14) {
            a.alert("啊偶，选择的比赛不能超过15场哦");
            return this
        }
        if (false === this.trigger("onSelectOption", e, t, n, c, r)) return this;
        if (!i.selectGameInfo) i.selectGameInfo = {
            length: 0
        };
        if (!h) {
            h = {};
            i.selectGameInfo[e] = h;
            i.selectGameInfo.length += 1
        }
        if (!h[t]) h[t] = {
            length: 0
        };
        h[t][n] = c;
        h[t].length += 1;
        s && s.addClass(o.selectOption);
        this.trigger("onChange", e, t, n, c)
    },
    f = function(e, t, n) {
        var i = this.cache,
        a = this.config,
        o, s = i.selectGameInfo,
        c = s[e];
        n = +n;
        if (!e || !t || n < 0) return this;
        if (c && c[t] && c[t][n] >= 0) if (1 == this.getMapKeyList(c).length && 1 == c[t].length) this.del(e);
        else {
            if (false === this.trigger("onRemoveOption", e, t, n, s)) return this;
            if (1 == c[t].length) delete c[t];
            else {
                delete c[t][n];
                c[t].length -= 1
            }
            o = this.findGameOption(e, t, n);
            o && o.length && o.removeClass(a.selectOption);
            this.trigger("onChange", e, t, n)
        }
    },
    d = function(e) {
        var t = this.cache,
        n = this.config,
        i, a, o, s;
        if (!e || !t.selectGameInfo[e]) return this;
        if (1 == t.selectGameInfo.length) this.clear();
        else {
            if (false === this.trigger("onDel", e)) return this;
            delete t.selectGameInfo[e];
            if (t.selectDanInfo[e]) {
                s = {};
                s[e] = false;
                this.setDan(s)
            }
            t.selectGameInfo.length -= 1;
            i = this.findGameOption(e);
            if (i) for (a in i) for (o in i[a]) i[a][o].removeClass(n.selectOption);
            this.trigger("onChange", e)
        }
        return this
    },
    g = function() {
        var e, t = this.cache,
        n = this.config,
        i, a = t.selectGameInfo,
        o, s;
        if (!a.length) return this;
        if (false === this.trigger("onClear", t.selectGameInfo)) return this;
        for (e in a) {
            if ("length" == e) continue;
            i = this.findGameOption(e);
            if (i) for (o in i) for (s in i[o]) i[o][s].removeClass(n.selectOption)
        }
        this.setDan(false);
        t.selectGameInfo = {
            length: 0
        };
        t.selectDanInfo = {};
        this.trigger("onChange");
        return this
    },
    u = function() {
        var e = this,
        t = e.config,
        n = this.cache;
        n.gameWrap.delegate(t.oneTitleSelect, s, r.titleDisplay)
    },
    p = function() {
        var e = this,
        t = e.config,
        n = this.cache;
        n.gameWrap.delegate(t.oneOptionSelect, s, r.selOpt).delegate(t.delBtnSelect, s, r.delMatch).delegate(t.danBtnSelect, s, r.selDan);
        return this
    }
} (window, Core, window.jQuery || window.Zepto, Class, Game); !
function(e, t, n, i, a, o) {
    var s = n.isSupportTouch ? "tap": "click";
    i.Base.Event.extend("Game.COMS.JC.BetMethod", {
        config: {
            supportMethod: null,
            methodType: {
                "1_1": [1],
                "2_1": [2],
                "3_1": [3],
                "4_1": [4],
                "5_1": [5],
                "6_1": [6],
                "7_1": [7],
                "8_1": [8],
                "9_1": [9],
                "10_1": [10],
                "11_1": [11],
                "12_1": [12],
                "13_1": [13],
                "14_1": [14],
                "15_1": [15],
                "2_3": [2, 1],
                "3_3": [2],
                "3_4": [3, 2],
                "3_6": [2, 1],
                "3_7": [3, 2, 1],
                "4_4": [3],
                "4_5": [4, 3],
                "4_6": [2],
                "4_10": [2, 1],
                "4_11": [4, 3, 2],
                "4_14": [3, 2, 1],
                "4_15": [4, 3, 2, 1],
                "5_5": [4],
                "5_6": [5, 4],
                "5_10": [2],
                "5_15": [2, 1],
                "5_16": [5, 4, 3],
                "5_20": [3, 2],
                "5_25": [3, 2, 1],
                "5_26": [5, 4, 3, 2],
                "5_30": [4, 3, 2, 1],
                "5_31": [5, 4, 3, 2, 1],
                "6_6": [5],
                "6_7": [5, 6],
                "6_15": [2],
                "6_20": [3],
                "6_21": [2, 1],
                "6_22": [6, 5, 4],
                "6_35": [3, 2],
                "6_41": [3, 2, 1],
                "6_42": [6, 5, 4, 3],
                "6_50": [4, 3, 2],
                "6_56": [4, 3, 2, 1],
                "6_57": [6, 5, 4, 3, 2],
                "6_62": [5, 4, 3, 2, 1],
                "6_63": [6, 5, 4, 3, 2, 1],
                "7_7": [6],
                "7_8": [7, 6],
                "7_21": [5],
                "7_35": [4],
                "7_120": [7, 6, 5, 4, 3, 2],
                "7_127": [7, 6, 5, 4, 3, 2, 1],
                "8_8": [7],
                "8_9": [8, 7],
                "8_28": [6],
                "8_56": [5],
                "8_70": [4],
                "8_247": [8, 7, 6, 5, 4, 3, 2],
                "8_255": [8, 7, 6, 5, 4, 3, 2, 1]
            },
            serialize: null
        },
        init: function(e) {
            var t, i, o = /(\S+)Selector$/;
            this.config = n.extend({},
            this.config, e);
            i = {
                selectMethod: [],
                currentMethod: []
            };
            this.cache = i;
            t = this.config;
            this.callSuper("onMethodChange");
            for (var s in t) if ("string" == a.getType(s) && o.test(s)) i[RegExp.$1] = n(t[s]);
            if (!t.supportMethod || !t.supportMethod["m_1"]) {
                this.log("betMethod初始化错误，没有找到玩法类型");
                return this
            }
        },
        get: function() {
            return {
                selectMethod: this.cache.selectMethod.slice(0),
                currentMethod: this.cache.currentMethod.slice(0)
            }
        },
        changeMethod: function(e, t) {
            var n = this.cache,
            i = this.config,
            a = false,
            o = i.supportMethod,
            s = n.selectMethod,
            c = [],
            r = [];
            e = +e;
            t = +t || 1;
            if (t > e) t = 1;
            o["m_1"].forEach(function(n, a) {
                var o = i.methodType[n][0];
                if (o <= e && o >= t) r.push(n)
            });
            s.forEach(function(e, t) {
                if (r.indexOf(e) > -1) c.push(e)
            });
            n.currentMethod = r;
            if (n.selectMethod.toString() !== c.toString()) {
                n.selectMethod = c;
                this.trigger("onMethodChange", n.selectMethod)
            }
            return this
        },
        serialize: function() {
            var e = this.config,
            t = this.cache,
            i = e.serialize;
            if (n.isFunction(i)) return i(t.selectMethod);
            else return t.selectMethod.join(",")
        },
        setMethod: function(e) {
            var t = this,
            n = this.cache,
            i = this.config,
            o = [],
            s = n.currentMethod;
            if (!e) return;
            if ("" == e || !e.length) {
                n.selectMethod = [];
                this.trigger("onMethodChange", n.selectMethod);
                return
            }
            if ("string" == a.getType(e)) e = [e];
            if ("array" != a.getType(e)) return this;
            s.forEach(function(t, n) {
                if (e.indexOf(t) > -1) o.push(t)
            });
            if (o.toString() !== n.selectMethod.toString()) {
                n.selectMethod = o;
                this.trigger("onMethodChange", n.selectMethod)
            }
            return this
        }
    })
} (window, Core, window.jQuery || window.Zepto, Class, Game); !
function(e, t, n, i, a) {
    var o = t.isSupportTouch ? "tap": "click";
    Class.Base.Event.extend("Widgets.iNumber", {
        config: {
            wrap: "",
            addSelector: ".add",
            reduceSelector: ".minus",
            addDisCss: "addDisable",
            reduceDisCss: "subtractDisable",
            min: 1,
            max: 5e5,
            step: 1,
            editable: true
        },
        init: function(i) {
            var a = n.getType(i),
            o = this;
            switch (a) {
            case "string":
            case "element":
                this.config = t.extend({},
                this.config, {
                    wrap: i
                });
                break;
            case "array":
                if (i.ready) {
                    this.config = t.extend({},
                    this.config, {
                        wrap: i
                    });
                    break
                }
            case "object":
                if (i.jquery) {
                    this.config = t.extend({},
                    this.config, {
                        wrap: i
                    });
                    break
                }
                this.config = t.extend({},
                this.config, i || {});
                break;
            default:
                return
            }
            var s = t(this.config.wrap);
            if (!s[0]) {
                console.log("数字容器设置错误，初始化失败！", "num001");
                return
            }
            this.cache = {
                wrap: s,
                input: s.find("input"),
                add: s.find(this.config.addSelector),
                reduce: s.find(this.config.reduceSelector)
            };
            this.callSuper("onChange");
            this.cache.input.val(this.get());
            this.__initCtrl(this.config.addSelector, +o.config.step).__initCtrl(this.config.reduceSelector, -o.config.step);
            if (this.config.editable) e.loadCdnJS("wap/js/liveCheck.js",
            function() {
                return !! t.fn.bindLiveCheck
            },
            function() {
                o.cache.input.bindLiveCheck(/\D/g,
                function() {
                    var e = o.get(true),
                    t = this.value;
                    if (e + "" != t && t) this.value = e;
                    t && o.trigger(200, "onChange", +t)
                });
                o.cache.input.blur(function() {
                    o.set(this.value)
                })
            });
            else this.cache.input.attr("readonly", "readonly");
            o.onChange(function() {
                o.__checkCtrl()
            });
            o.__checkCtrl()
        },
        __initCtrl: function(e, t) {
            var n = function() {
                this.ctimer && i.clearTimeout(this.ctimer);
                this.stimer && i.clearInterval(this.stimer)
            },
            a = this;
            this.cache.wrap.delegate(e, o,
            function(e) {
                n.call(this);
                return a.__ctrlClick(this, e, t)
            });
            return this
        },
        __ctrlClick: function(e, n, i) {
            if (t(e).hasClass("disabled")) return;
            this.set(this.get() + i)
        },
        __convert: function(e, t) {
            var n = (e + "").replace(/\D/g, ""),
            i = this.config.min,
            a = this.config.max,
            o;
            if (!n.length) n = i;
            o = +n;
            if (t) o = o > a ? a: o;
            else o = o < i ? i: o > a ? a: o;
            return o
        },
        __checkCtrl: function() {
            var e = this.config,
            t = e.min,
            n = e.max,
            i = this.get();
            this.cache.add[n == i ? "addClass": "removeClass"](e.addDisCss);
            this.cache.reduce[t == i ? "addClass": "removeClass"](e.reduceDisCss)
        },
        get: function(e) {
            return this.__convert(this.cache.input[0].value, e)
        },
        set: function(e) {
            var t = this.__convert(e),
            n = this.cache.input[0];
            if (t + "" != n.value) {
                n.value = t;
                this.trigger("onChange", t)
            }
            return this
        },
        hide: function() {
            this.config.wrap.hide();
            return this
        },
        show: function() {
            this.config.wrap.show();
            this.onChange();
            return this
        },
        updateConfig: function(e) {
            t.extend(this.config, e);
            this.set(this.get()).__checkCtrl()
        }
    })
} (Core, window.jQuery || window.Zepto, Game, window); !
function(t, a, e, i, n) {
    var o = t.isSupportTouch ? "tap": "click",
    s = a.common,
    c = a.helper;
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
            gameTypes: ["spf"],
            playType: "spf"
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
            this.countLoadingTime("jzcqspf");
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
            var c = function() {
                var c = {},
                r = [],
                h,
                d,
                l,
                m,
                l = document.createDocumentFragment();
                d = a.matchList;
                d.forEach(function(t, a) {
                    if (!c[t.gameDate]) {
                        c[t.gameDate] = [];
                        r.push(t.gameDate)
                    }
                    c[t.gameDate].push(t)
                });
                r.sort(function(t, a) {
                    return + t - +a
                });
                r.forEach(function(a, o) {
                    var s = [a.slice(0, 4), a.slice(4, 6), +a.slice(6, 8)];
                    m = t.format(n, {
                        gameDate: a,
                        disDate: s.join("-"),
                        week: e.jczq.core.getWeek(new Date(s[0], s[1] - 1, s[2])),
                        dateNum: c[a].length,
                        dayMatchList: t.template(i, c[a])
                    });
                    m = t(m);
                    l.appendChild(m[0])
                });
                o.append(l);
                s.betArea.addMatch(d)
            };
            c();
            delete this.renderHTML;
            return this
        },
        loadData: function() {
            var i = this,
            n = this.config,
            o = this.cache,
            s = this.config.gameUrl,
            r = t(".match-table");
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
                    o.matchList = c.explainData(s, i.config.gameTypes);
                    if (!o.matchList.length || o.matchList.length <= 1) {
                        o.noData.removeClass("hide");
                        o.loadDataStatus = 1;
                        t.sendMsg("loadData", 1);
                        return
                    }
                    i.renderHTML();
                    r.removeClass("hide");
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