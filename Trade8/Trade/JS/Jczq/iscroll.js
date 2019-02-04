! function(t, i, s) {
    var e = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(i) { t.setTimeout(i, 1e3 / 60) };
    var o = function() {
        var e = {};
        var o = i.createElement("div").style;
        var n = function() {
            var t = ["t", "webkitT", "MozT", "msT", "OT"],
                i, s = 0,
                e = t.length;
            for (; s < e; s++) { i = t[s] + "ransform";
                if (i in o) return t[s].substr(0, t[s].length - 1) }
            return false }();

        function r(t) {
            if (false === n) return false;
            if ("" === n) return t;
            return n + t.charAt(0).toUpperCase() + t.substr(1) }
        e.getTime = Date.now || function a() {
            return (new Date).getTime() };
        e.extend = function(t, i) {
            for (var s in i) t[s] = i[s] };
        e.addEvent = function(t, i, s, e) { t.addEventListener(i, s, !!e) };
        e.removeEvent = function(t, i, s, e) { t.removeEventListener(i, s, !!e) };
        e.prefixPointerEvent = function(i) {
            return t.MSPointerEvent ? "MSPointer" + i.charAt(9).toUpperCase() + i.substr(10) : i };
        e.momentum = function(t, i, e, o, n, r) {
            var h = t - i,
                a = s.abs(h) / e,
                l, c;
            r = void 0 === r ? 6e-4 : r;
            l = t + a * a / (2 * r) * (h < 0 ? -1 : 1);
            c = a / r;
            if (l < o) { l = n ? o - n / 2.5 * (a / 8) : o;
                h = s.abs(l - t);
                c = h / a } else if (l > 0) { l = n ? n / 2.5 * (a / 8) : 0;
                h = s.abs(t) + l;
                c = h / a }
            return { destination: s.round(l), duration: c } };
        var h = r("transform");
        e.extend(e, { hasTransform: false !== h, hasPerspective: r("perspective") in o, hasTouch: "ontouchstart" in t, hasPointer: t.PointerEvent || t.MSPointerEvent, hasTransition: r("transition") in o });
        e.isBadAndroid = /Android /.test(t.navigator.appVersion) && !/Chrome\/\d/.test(t.navigator.appVersion);
        e.isBadXiaoMI = /MI.*Build/.test(t.navigator.appVersion);
        e.extend(e.style = {}, { transform: h, transitionTimingFunction: r("transitionTimingFunction"), transitionDuration: r("transitionDuration"), transitionDelay: r("transitionDelay"), transformOrigin: r("transformOrigin") });
        e.hasClass = function(t, i) {
            var s = new RegExp("(^|\\s)" + i + "(\\s|$)");
            return s.test(t.className) };
        e.addClass = function(t, i) {
            if (e.hasClass(t, i)) return;
            var s = t.className.split(" ");
            s.push(i);
            t.className = s.join(" ") };
        e.removeClass = function(t, i) {
            if (!e.hasClass(t, i)) return;
            var s = new RegExp("(^|\\s)" + i + "(\\s|$)", "g");
            t.className = t.className.replace(s, " ") };
        e.offset = function(t) {
            var i = -t.offsetLeft,
                s = -t.offsetTop;
            while (t = t.offsetParent) { i -= t.offsetLeft;
                s -= t.offsetTop }
            return { left: i, top: s } };
        e.preventDefaultException = function(t, i) {
            for (var s in i)
                if (i[s].test(t[s])) return true;
            return false };
        e.extend(e.eventType = {}, { touchstart: 1, touchmove: 1, touchend: 1, mousedown: 2, mousemove: 2, mouseup: 2, pointerdown: 3, pointermove: 3, pointerup: 3, MSPointerDown: 3, MSPointerMove: 3, MSPointerUp: 3 });
        e.extend(e.ease = {}, { quadratic: { style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", fn: function(t) {
                    return t * (2 - t) } }, circular: { style: "cubic-bezier(0.1, 0.57, 0.1, 1)", fn: function(t) {
                    return s.sqrt(1 - --t * t) } }, back: { style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)", fn: function(t) {
                    var i = 4;
                    return (t -= 1) * t * ((i + 1) * t + i) + 1 } }, bounce: { style: "", fn: function(t) {
                    if ((t /= 1) < 1 / 2.75) return 7.5625 * t * t;
                    else if (t < 2 / 2.75) return 7.5625 * (t -= 1.5 / 2.75) * t + .75;
                    else if (t < 2.5 / 2.75) return 7.5625 * (t -= 2.25 / 2.75) * t + .9375;
                    else return 7.5625 * (t -= 2.625 / 2.75) * t + .984375 } }, elastic: { style: "", fn: function(t) {
                    var i = .22,
                        e = .4;
                    if (0 === t) return 0;
                    if (1 == t) return 1;
                    return e * s.pow(2, -10 * t) * s.sin(2 * (t - i / 4) * s.PI / i) + 1 } } });
        e.tap = function(t, s) {
            var e = i.createEvent("Event");
            e.initEvent(s, true, true);
            e.pageX = t.pageX;
            e.pageY = t.pageY;
            t.target.dispatchEvent(e) };
        e.click = function(t) {
            var s = t.target,
                e;
            if (!/(SELECT|INPUT|TEXTAREA)/i.test(s.tagName)) { e = i.createEvent("MouseEvents");
                e.initMouseEvent("click", true, true, t.view, 1, s.screenX, s.screenY, s.clientX, s.clientY, t.ctrlKey, t.altKey, t.shiftKey, t.metaKey, 0, null);
                e._constructed = true;
                s.dispatchEvent(e) } };
        return e }();

    function n(t, s) { this.wrapper = "string" == typeof t ? i.querySelector(t) : t;
        this.scroller = this.wrapper.children[0];
        this.scrollerStyle = this.scroller.style;
        this.options = { resizeScrollbars: true, mouseWheelSpeed: 20, snapThreshold: .334, startX: 0, startY: 0, scrollY: true, directionLockThreshold: 5, momentum: true, bounce: true, bounceTime: 600, bounceEasing: "", preventDefault: true, preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ }, HWCompositing: true, useTransition: true, useTransform: true };
        for (var e in s) this.options[e] = s[e];
        this.translateZ = this.options.HWCompositing && o.hasPerspective ? " translateZ(0)" : "";
        this.options.useTransition = o.hasTransition && this.options.useTransition;
        this.options.useTransform = o.hasTransform && this.options.useTransform;
        this.options.eventPassthrough = true === this.options.eventPassthrough ? "vertical" : this.options.eventPassthrough;
        this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;
        this.options.scrollY = "vertical" == this.options.eventPassthrough ? false : this.options.scrollY;
        this.options.scrollX = "horizontal" == this.options.eventPassthrough ? false : this.options.scrollX;
        this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
        this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;
        this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? o.ease[this.options.bounceEasing] || o.ease.circular : this.options.bounceEasing;
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
        this.enable() }
    n.prototype = { version: "5.1.2", _init: function() { this._initEvents();
            if (this.options.scrollbars || this.options.indicators) this._initIndicators();
            if (this.options.mouseWheel) this._initWheel();
            if (this.options.snap) this._initSnap();
            if (this.options.keyBindings) this._initKeys() }, destroy: function() { this._initEvents(true);
            this._execEvent("destroy") }, _transitionEnd: function(t) {
            if (t.target != this.scroller || !this.isInTransition) return;
            this._transitionTime();
            if (!this.resetPosition(this.options.bounceTime)) { this.isInTransition = false;
                this._execEvent("scrollEnd") } }, _start: function(t) {
            if (1 != o.eventType[t.type])
                if (0 !== t.button) return;
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
            if (this.options.useTransition && this.isInTransition) { this.isInTransition = false;
                e = this.getComputedPosition();
                this._translate(s.round(e.x), s.round(e.y));
                this._execEvent("scrollEnd") } else if (!this.options.useTransition && this.isAnimating) { this.isAnimating = false;
                this._execEvent("scrollEnd") }
            this.startX = this.x;
            this.startY = this.y;
            this.absStartX = this.x;
            this.absStartY = this.y;
            this.pointX = i.pageX;
            this.pointY = i.pageY;
            this._execEvent("beforeScrollStart") }, _move: function(t) {
            if (!this.enabled || o.eventType[t.type] != this.initiated) return;
            if (this.options.preventDefault) t.preventDefault();
            var i = t.touches ? t.touches[0] : t,
                e = i.pageX - this.pointX,
                n = i.pageY - this.pointY,
                r = o.getTime(),
                h, a, l, c;
            this.pointX = i.pageX;
            this.pointY = i.pageY;
            this.distX += e;
            this.distY += n;
            l = s.abs(this.distX);
            c = s.abs(this.distY);
            if (r - this.endTime > 300 && l < 10 && c < 10) return;
            if (!this.directionLocked && !this.options.freeScroll)
                if (l > c + this.options.directionLockThreshold) this.directionLocked = "h";
                else if (c >= l + this.options.directionLockThreshold) this.directionLocked = "v";
            else this.directionLocked = "n";
            if ("h" == this.directionLocked) {
                if ("vertical" == this.options.eventPassthrough) t.preventDefault();
                else if ("horizontal" == this.options.eventPassthrough) { this.initiated = false;
                    return }
                n = 0 } else if ("v" == this.directionLocked) {
                if ("horizontal" == this.options.eventPassthrough) t.preventDefault();
                else if ("vertical" == this.options.eventPassthrough) { this.initiated = false;
                    return }
                e = 0 }
            e = this.hasHorizontalScroll ? e : 0;
            n = this.hasVerticalScroll ? n : 0;
            h = this.x + e;
            a = this.y + n;
            if (h > 0 || h < this.maxScrollX) h = this.options.bounce ? this.x + e / 3 : h > 0 ? 0 : this.maxScrollX;
            if (a > 0 || a < this.maxScrollY) a = this.options.bounce ? this.y + n / 3 : a > 0 ? 0 : this.maxScrollY;
            this.directionX = e > 0 ? -1 : e < 0 ? 1 : 0;
            this.directionY = n > 0 ? -1 : n < 0 ? 1 : 0;
            if (!this.moved) this._execEvent("scrollStart");
            this.moved = true;
            this._translate(h, a);
            if (r - this.startTime > 300) { this.startTime = r;
                this.startX = this.x;
                this.startY = this.y;
                if (1 == this.options.probeType) this._execEvent("scroll") }
            if (this.options.probeType > 1) this._execEvent("scroll") }, _end: function(t) {
            if (!this.enabled || o.eventType[t.type] != this.initiated) return;
            if (this.options.preventDefault && !o.preventDefaultException(t.target, this.options.preventDefaultException)) t.preventDefault();
            var i = t.changedTouches ? t.changedTouches[0] : t,
                e, n, r = o.getTime() - this.startTime,
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
                return }
            if (this._events.flick && r < 200 && l < 100 && c < 100) { this._execEvent("flick");
                return }
            if (this.options.momentum && r < 300) { e = this.hasHorizontalScroll ? o.momentum(this.x, this.startX, r, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: h, duration: 0 };
                n = this.hasVerticalScroll ? o.momentum(this.y, this.startY, r, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: a, duration: 0 };
                h = e.destination;
                a = n.destination;
                p = s.max(e.duration, n.duration);
                this.isInTransition = 1 }
            if (this.options.snap) {
                var u = this._nearestSnap(h, a);
                this.currentPage = u;
                p = this.options.snapSpeed || s.max(s.max(s.min(s.abs(h - u.x), 1e3), s.min(s.abs(a - u.y), 1e3)), 300);
                h = u.x;
                a = u.y;
                this.directionX = 0;
                this.directionY = 0;
                f = this.options.bounceEasing }
            if (h != this.x || a != this.y) {
                if (h > 0 || h < this.maxScrollX || a > 0 || a < this.maxScrollY) f = o.ease.quadratic;
                this.scrollTo(h, a, p, f);
                return }
            this._execEvent("scrollEnd") }, _resize: function() {
            var t = this;
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(function() { t.refresh() }, this.options.resizePolling) }, resetPosition: function(t) {
            var i = this.x,
                s = this.y;
            t = t || 0;
            if (!this.hasHorizontalScroll || this.x > 0) i = 0;
            else if (this.x < this.maxScrollX) i = this.maxScrollX;
            if (!this.hasVerticalScroll || this.y > 0) s = 0;
            else if (this.y < this.maxScrollY) s = this.maxScrollY;
            if (i == this.x && s == this.y) return false;
            this.scrollTo(i, s, t, this.options.bounceEasing);
            return true }, disable: function() { this.enabled = false }, enable: function() { this.enabled = true }, refresh: function() {
            var t = this.wrapper.offsetHeight;
            this.wrapperWidth = this.wrapper.clientWidth;
            this.wrapperHeight = this.wrapper.clientHeight;
            this.scrollerWidth = this.scroller.offsetWidth;
            this.scrollerHeight = this.scroller.offsetHeight;
            this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
            this.maxScrollY = this.wrapperHeight - this.scrollerHeight;
            this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
            this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;
            if (!this.hasHorizontalScroll) { this.maxScrollX = 0;
                this.scrollerWidth = this.wrapperWidth }
            if (!this.hasVerticalScroll) { this.maxScrollY = 0;
                this.scrollerHeight = this.wrapperHeight }
            this.endTime = 0;
            this.directionX = 0;
            this.directionY = 0;
            this.wrapperOffset = o.offset(this.wrapper);
            this._execEvent("refresh");
            this.resetPosition() }, on: function(t, i) {
            if (!this._events[t]) this._events[t] = [];
            this._events[t].push(i) }, off: function(t, i) {
            if (!this._events[t]) return;
            var s = this._events[t].indexOf(i);
            if (s > -1) this._events[t].splice(s, 1) }, _execEvent: function(t) {
            if (!this._events[t]) return;
            var i = 0,
                s = this._events[t].length;
            if (!s) return;
            for (; i < s; i++) this._events[t][i].apply(this, [].slice.call(arguments, 1)) }, scrollBy: function(t, i, s, e) { t = this.x + t;
            i = this.y + i;
            s = s || 0;
            this.scrollTo(t, i, s, e) }, scrollTo: function(t, i, s, e) { e = e || o.ease.circular;
            this.isInTransition = this.options.useTransition && s > 0;
            if (!s || this.options.useTransition && e.style) { this._transitionTimingFunction(e.style);
                this._transitionTime(s);
                this._translate(t, i) } else this._animate(t, i, s, e.fn) }, scrollToElement: function(t, i, e, n, r) { t = t.nodeType ? t : this.scroller.querySelector(t);
            if (!t) return;
            var h = o.offset(t);
            h.left -= this.wrapperOffset.left;
            h.top -= this.wrapperOffset.top;
            if (true === e) e = s.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
            if (true === n) n = s.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
            h.left -= e || 0;
            h.top -= n || 0;
            h.left = h.left > 0 ? 0 : h.left < this.maxScrollX ? this.maxScrollX : h.left;
            h.top = h.top > 0 ? 0 : h.top < this.maxScrollY ? this.maxScrollY : h.top;
            i = void 0 === i || null === i || "auto" === i ? s.max(s.abs(this.x - h.left), s.abs(this.y - h.top)) : i;
            this.scrollTo(h.left, h.top, i, r) }, _transitionTime: function(t) { t = t || 0;
            this.scrollerStyle[o.style.transitionDuration] = t + "ms";
            if (!t && o.isBadAndroid) this.scrollerStyle[o.style.transitionDuration] = "0.001s";
            if (!t && o.isBadXiaoMI) this.scrollerStyle[o.style.transitionDuration] = "";
            if (this.indicators)
                for (var i = this.indicators.length; i--;) this.indicators[i].transitionTime(t) }, _transitionTimingFunction: function(t) { this.scrollerStyle[o.style.transitionTimingFunction] = t;
            if (this.indicators)
                for (var i = this.indicators.length; i--;) this.indicators[i].transitionTimingFunction(t) }, _translate: function(t, i) {
            if (this.options.useTransform) this.scrollerStyle[o.style.transform] = "translate(" + t + "px," + i + "px)" + this.translateZ;
            else { t = s.round(t);
                i = s.round(i);
                this.scrollerStyle.left = t + "px";
                this.scrollerStyle.top = i + "px" }
            this.x = t;
            this.y = i;
            if (this.indicators)
                for (var e = this.indicators.length; e--;) this.indicators[e].updatePosition() }, _initEvents: function(i) {
            var s = i ? o.removeEvent : o.addEvent,
                e = this.options.bindToWrapper ? this.wrapper : t;
            s(t, "orientationchange", this);
            s(t, "resize", this);
            if (this.options.click) s(this.wrapper, "click", this, true);
            if (!this.options.disableMouse) { s(this.wrapper, "mousedown", this);
                s(e, "mousemove", this);
                s(e, "mousecancel", this);
                s(e, "mouseup", this) }
            if (o.hasPointer && !this.options.disablePointer) { s(this.wrapper, o.prefixPointerEvent("pointerdown"), this);
                s(e, o.prefixPointerEvent("pointermove"), this);
                s(e, o.prefixPointerEvent("pointercancel"), this);
                s(e, o.prefixPointerEvent("pointerup"), this) }
            if (o.hasTouch && !this.options.disableTouch) { s(this.wrapper, "touchstart", this);
                s(e, "touchmove", this);
                s(e, "touchcancel", this);
                s(e, "touchend", this) }
            s(this.scroller, "transitionend", this);
            s(this.scroller, "webkitTransitionEnd", this);
            s(this.scroller, "oTransitionEnd", this);
            s(this.scroller, "MSTransitionEnd", this) }, getComputedPosition: function() {
            var i = t.getComputedStyle(this.scroller, null),
                s, e;
            if (this.options.useTransform) { i = i[o.style.transform].split(")")[0].split(", ");
                s = +(i[12] || i[4]);
                e = +(i[13] || i[5]) } else { s = +i.left.replace(/[^-\d.]/g, "");
                e = +i.top.replace(/[^-\d.]/g, "") }
            return { x: s, y: e } }, _initIndicators: function() {
            var t = this.options.interactiveScrollbars,
                i = "string" != typeof this.options.scrollbars,
                s = [],
                e;
            var o = this;
            this.indicators = [];
            if (this.options.scrollbars) {
                if (this.options.scrollY) { e = { el: r("v", t, this.options.scrollbars), interactive: t, defaultScrollbars: true, customStyle: i, resize: this.options.resizeScrollbars, shrink: this.options.shrinkScrollbars, fade: this.options.fadeScrollbars, listenX: false };
                    this.wrapper.appendChild(e.el);
                    s.push(e) }
                if (this.options.scrollX) { e = { el: r("h", t, this.options.scrollbars), interactive: t, defaultScrollbars: true, customStyle: i, resize: this.options.resizeScrollbars, shrink: this.options.shrinkScrollbars, fade: this.options.fadeScrollbars, listenY: false };
                    this.wrapper.appendChild(e.el);
                    s.push(e) } }
            if (this.options.indicators) s = s.concat(this.options.indicators);
            for (var n = s.length; n--;) this.indicators.push(new h(this, s[n]));

            function a(t) {
                for (var i = o.indicators.length; i--;) t.call(o.indicators[i]) }
            if (this.options.fadeScrollbars) { this.on("scrollEnd", function() { a(function() { this.fade() }) });
                this.on("scrollCancel", function() { a(function() { this.fade() }) });
                this.on("scrollStart", function() { a(function() { this.fade(1) }) });
                this.on("beforeScrollStart", function() { a(function() { this.fade(1, true) }) }) }
            this.on("refresh", function() { a(function() { this.refresh() }) });
            this.on("destroy", function() { a(function() { this.destroy() });
                delete this.indicators }) }, _initWheel: function() { o.addEvent(this.wrapper, "wheel", this);
            o.addEvent(this.wrapper, "mousewheel", this);
            o.addEvent(this.wrapper, "DOMMouseScroll", this);
            this.on("destroy", function() { o.removeEvent(this.wrapper, "wheel", this);
                o.removeEvent(this.wrapper, "mousewheel", this);
                o.removeEvent(this.wrapper, "DOMMouseScroll", this) }) }, _wheel: function(t) {
            if (!this.enabled) return;
            t.preventDefault();
            t.stopPropagation();
            var i, e, o, n, r = this;
            if (void 0 === this.wheelTimeout) r._execEvent("scrollStart");
            clearTimeout(this.wheelTimeout);
            this.wheelTimeout = setTimeout(function() { r._execEvent("scrollEnd");
                r.wheelTimeout = void 0 }, 400);
            if ("deltaX" in t) { i = -t.deltaX;
                e = -t.deltaY } else if ("wheelDeltaX" in t) { i = t.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
                e = t.wheelDeltaY / 120 * this.options.mouseWheelSpeed } else if ("wheelDelta" in t) i = e = t.wheelDelta / 120 * this.options.mouseWheelSpeed;
            else if ("detail" in t) i = e = -t.detail / 3 * this.options.mouseWheelSpeed;
            else return;
            i *= this.options.invertWheelDirection;
            e *= this.options.invertWheelDirection;
            if (!this.hasVerticalScroll) { i = e;
                e = 0 }
            if (this.options.snap) { o = this.currentPage.pageX;
                n = this.currentPage.pageY;
                if (i > 0) o--;
                else if (i < 0) o++;
                if (e > 0) n--;
                else if (e < 0) n++;
                this.goToPage(o, n);
                return }
            o = this.x + s.round(this.hasHorizontalScroll ? i : 0);
            n = this.y + s.round(this.hasVerticalScroll ? e : 0);
            if (o > 0) o = 0;
            else if (o < this.maxScrollX) o = this.maxScrollX;
            if (n > 0) n = 0;
            else if (n < this.maxScrollY) n = this.maxScrollY;
            this.scrollTo(o, n, 0);
            if (this.options.probeType > 1) this._execEvent("scroll") }, _initSnap: function() { this.currentPage = {};
            if ("string" == typeof this.options.snap) this.options.snap = this.scroller.querySelectorAll(this.options.snap);
            this.on("refresh", function() {
                var t = 0,
                    i, e = 0,
                    o, n, r, h = 0,
                    a, l = this.options.snapStepX || this.wrapperWidth,
                    c = this.options.snapStepY || this.wrapperHeight,
                    p;
                this.pages = [];
                if (!this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight) return;
                if (true === this.options.snap) { n = s.round(l / 2);
                    r = s.round(c / 2);
                    while (h > -this.scrollerWidth) { this.pages[t] = [];
                        i = 0;
                        a = 0;
                        while (a > -this.scrollerHeight) { this.pages[t][i] = { x: s.max(h, this.maxScrollX), y: s.max(a, this.maxScrollY), width: l, height: c, cx: h - n, cy: a - r };
                            a -= c;
                            i++ }
                        h -= l;
                        t++ } } else { p = this.options.snap;
                    i = p.length;
                    o = -1;
                    for (; t < i; t++) {
                        if (0 === t || p[t].offsetLeft <= p[t - 1].offsetLeft) { e = 0;
                            o++ }
                        if (!this.pages[e]) this.pages[e] = [];
                        h = s.max(-p[t].offsetLeft, this.maxScrollX);
                        a = s.max(-p[t].offsetTop, this.maxScrollY);
                        n = h - s.round(p[t].offsetWidth / 2);
                        r = a - s.round(p[t].offsetHeight / 2);
                        this.pages[e][o] = { x: h, y: a, width: p[t].offsetWidth, height: p[t].offsetHeight, cx: n, cy: r };
                        if (h > this.maxScrollX) e++ } }
                this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);
                if (this.options.snapThreshold % 1 === 0) { this.snapThresholdX = this.options.snapThreshold;
                    this.snapThresholdY = this.options.snapThreshold } else { this.snapThresholdX = s.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
                    this.snapThresholdY = s.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold) } });
            this.on("flick", function() {
                var t = this.options.snapSpeed || s.max(s.max(s.min(s.abs(this.x - this.startX), 1e3), s.min(s.abs(this.y - this.startY), 1e3)), 300);
                this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, t) }) }, _nearestSnap: function(t, i) {
            if (!this.pages.length) return { x: 0, y: 0, pageX: 0, pageY: 0 };
            var e = 0,
                o = this.pages.length,
                n = 0;
            if (s.abs(t - this.absStartX) < this.snapThresholdX && s.abs(i - this.absStartY) < this.snapThresholdY) return this.currentPage;
            if (t > 0) t = 0;
            else if (t < this.maxScrollX) t = this.maxScrollX;
            if (i > 0) i = 0;
            else if (i < this.maxScrollY) i = this.maxScrollY;
            for (; e < o; e++)
                if (t >= this.pages[e][0].cx) { t = this.pages[e][0].x;
                    break }
            o = this.pages[e].length;
            for (; n < o; n++)
                if (i >= this.pages[0][n].cy) { i = this.pages[0][n].y;
                    break }
            if (e == this.currentPage.pageX) { e += this.directionX;
                if (e < 0) e = 0;
                else if (e >= this.pages.length) e = this.pages.length - 1;
                t = this.pages[e][0].x }
            if (n == this.currentPage.pageY) { n += this.directionY;
                if (n < 0) n = 0;
                else if (n >= this.pages[0].length) n = this.pages[0].length - 1;
                i = this.pages[0][n].y }
            return { x: t, y: i, pageX: e, pageY: n } }, goToPage: function(t, i, e, o) { o = o || this.options.bounceEasing;
            if (t >= this.pages.length) t = this.pages.length - 1;
            else if (t < 0) t = 0;
            if (i >= this.pages[t].length) i = this.pages[t].length - 1;
            else if (i < 0) i = 0;
            var n = this.pages[t][i].x,
                r = this.pages[t][i].y;
            e = void 0 === e ? this.options.snapSpeed || s.max(s.max(s.min(s.abs(n - this.x), 1e3), s.min(s.abs(r - this.y), 1e3)), 300) : e;
            this.currentPage = { x: n, y: r, pageX: t, pageY: i };
            this.scrollTo(n, r, e, o) }, next: function(t, i) {
            var s = this.currentPage.pageX,
                e = this.currentPage.pageY;
            s++;
            if (s >= this.pages.length && this.hasVerticalScroll) { s = 0;
                e++ }
            this.goToPage(s, e, t, i) }, prev: function(t, i) {
            var s = this.currentPage.pageX,
                e = this.currentPage.pageY;
            s--;
            if (s < 0 && this.hasVerticalScroll) { s = 0;
                e-- }
            this.goToPage(s, e, t, i) }, _initKeys: function(i) {
            var s = { pageUp: 33, pageDown: 34, end: 35, home: 36, left: 37, up: 38, right: 39, down: 40 };
            var e;
            if ("object" == typeof this.options.keyBindings) {
                for (e in this.options.keyBindings)
                    if ("string" == typeof this.options.keyBindings[e]) this.options.keyBindings[e] = this.options.keyBindings[e].toUpperCase().charCodeAt(0) } else this.options.keyBindings = {};
            for (e in s) this.options.keyBindings[e] = this.options.keyBindings[e] || s[e];
            o.addEvent(t, "keydown", this);
            this.on("destroy", function() { o.removeEvent(t, "keydown", this) }) }, _key: function(t) {
            if (!this.enabled) return;
            var i = this.options.snap,
                e = i ? this.currentPage.pageX : this.x,
                n = i ? this.currentPage.pageY : this.y,
                r = o.getTime(),
                h = this.keyTime || 0,
                a = .25,
                l;
            if (this.options.useTransition && this.isInTransition) { l = this.getComputedPosition();
                this._translate(s.round(l.x), s.round(l.y));
                this.isInTransition = false }
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
                    return }
            if (i) { this.goToPage(e, n);
                return }
            if (e > 0) { e = 0;
                this.keyAcceleration = 0 } else if (e < this.maxScrollX) { e = this.maxScrollX;
                this.keyAcceleration = 0 }
            if (n > 0) { n = 0;
                this.keyAcceleration = 0 } else if (n < this.maxScrollY) { n = this.maxScrollY;
                this.keyAcceleration = 0 }
            this.scrollTo(e, n, 0);
            this.keyTime = r }, _animate: function(t, i, s, n) {
            var r = this,
                h = this.x,
                a = this.y,
                l = o.getTime(),
                c = l + s;

            function p() {
                var f = o.getTime(),
                    u, d, m;
                if (f >= c) { r.isAnimating = false;
                    r._translate(t, i);
                    if (!r.resetPosition(r.options.bounceTime)) r._execEvent("scrollEnd");
                    return }
                f = (f - l) / s;
                m = n(f);
                u = (t - h) * m + h;
                d = (i - a) * m + a;
                r._translate(u, d);
                if (r.isAnimating) e(p);
                if (3 == r.options.probeType) r._execEvent("scroll") }
            this.isAnimating = true;
            p() }, handleEvent: function(t) {
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
                    if (!t._constructed) { t.preventDefault();
                        t.stopPropagation() } } } };

    function r(t, s, e) {
        var o = i.createElement("div"),
            n = i.createElement("div");
        if (true === e) { o.style.cssText = "position:absolute;z-index:9999";
            n.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px" }
        n.className = "iScrollIndicator";
        if ("h" == t) {
            if (true === e) { o.style.cssText += ";height:7px;left:2px;right:2px;bottom:0";
                n.style.height = "100%" }
            o.className = "iScrollHorizontalScrollbar" } else {
            if (true === e) { o.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px";
                n.style.width = "100%" }
            o.className = "iScrollVerticalScrollbar" }
        o.style.cssText += ";overflow:hidden";
        if (!s) o.style.pointerEvents = "none";
        o.appendChild(n);
        return o }

    function h(s, e) { this.wrapper = "string" == typeof e.el ? i.querySelector(e.el) : e.el;
        this.wrapperStyle = this.wrapper.style;
        this.indicator = this.wrapper.children[0];
        this.indicatorStyle = this.indicator.style;
        this.scroller = s;
        this.options = { listenX: true, listenY: true, interactive: false, resize: true, defaultScrollbars: false, shrink: false, fade: false, speedRatioX: 0, speedRatioY: 0 };
        for (var n in e) this.options[n] = e[n];
        this.sizeRatioX = 1;
        this.sizeRatioY = 1;
        this.maxPosX = 0;
        this.maxPosY = 0;
        if (this.options.interactive) {
            if (!this.options.disableTouch) { o.addEvent(this.indicator, "touchstart", this);
                o.addEvent(t, "touchend", this) }
            if (!this.options.disablePointer) { o.addEvent(this.indicator, o.prefixPointerEvent("pointerdown"), this);
                o.addEvent(t, o.prefixPointerEvent("pointerup"), this) }
            if (!this.options.disableMouse) { o.addEvent(this.indicator, "mousedown", this);
                o.addEvent(t, "mouseup", this) } }
        if (this.options.fade) { this.wrapperStyle[o.style.transform] = this.scroller.translateZ;
            this.wrapperStyle[o.style.transitionDuration] = o.isBadAndroid ? "0.001s" : "0ms";
            this.wrapperStyle.opacity = "0" } }
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
                    this._end(t) } },
        destroy: function() {
            if (this.options.interactive) { o.removeEvent(this.indicator, "touchstart", this);
                o.removeEvent(this.indicator, o.prefixPointerEvent("pointerdown"), this);
                o.removeEvent(this.indicator, "mousedown", this);
                o.removeEvent(t, "touchmove", this);
                o.removeEvent(t, o.prefixPointerEvent("pointermove"), this);
                o.removeEvent(t, "mousemove", this);
                o.removeEvent(t, "touchend", this);
                o.removeEvent(t, o.prefixPointerEvent("pointerup"), this);
                o.removeEvent(t, "mouseup", this) }
            if (this.options.defaultScrollbars) this.wrapper.parentNode.removeChild(this.wrapper) },
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
            this.scroller._execEvent("beforeScrollStart") },
        _move: function(t) {
            var i = t.touches ? t.touches[0] : t,
                s, e, n, r, h = o.getTime();
            if (!this.moved) this.scroller._execEvent("scrollStart");
            this.moved = true;
            s = i.pageX - this.lastPointX;
            this.lastPointX = i.pageX;
            e = i.pageY - this.lastPointY;
            this.lastPointY = i.pageY;
            n = this.x + s;
            r = this.y + e;
            this._pos(n, r);
            if (1 == this.scroller.options.probeType && h - this.startTime > 300) { this.startTime = h;
                this.scroller._execEvent("scroll") } else if (this.scroller.options.probeType > 1) this.scroller._execEvent("scroll");
            t.preventDefault();
            t.stopPropagation() },
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
                if (this.scroller.x != e.x || this.scroller.y != e.y) { this.scroller.directionX = 0;
                    this.scroller.directionY = 0;
                    this.scroller.currentPage = e;
                    this.scroller.scrollTo(e.x, e.y, n, this.scroller.options.bounceEasing) } }
            if (this.moved) this.scroller._execEvent("scrollEnd") },
        transitionTime: function(t) { t = t || 0;
            this.indicatorStyle[o.style.transitionDuration] = t + "ms";
            if (!t && o.isBadAndroid) this.indicatorStyle[o.style.transitionDuration] = "0.001s" },
        transitionTimingFunction: function(t) { this.indicatorStyle[o.style.transitionTimingFunction] = t },
        refresh: function() { this.transitionTime();
            if (this.options.listenX && !this.options.listenY) this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none";
            else if (this.options.listenY && !this.options.listenX) this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none";
            else this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none";
            if (this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll) { o.addClass(this.wrapper, "iScrollBothScrollbars");
                o.removeClass(this.wrapper, "iScrollLoneScrollbar");
                if (this.options.defaultScrollbars && this.options.customStyle)
                    if (this.options.listenX) this.wrapper.style.right = "8px";
                    else this.wrapper.style.bottom = "8px" } else { o.removeClass(this.wrapper, "iScrollBothScrollbars");
                o.addClass(this.wrapper, "iScrollLoneScrollbar");
                if (this.options.defaultScrollbars && this.options.customStyle)
                    if (this.options.listenX) this.wrapper.style.right = "2px";
                    else this.wrapper.style.bottom = "2px" }
            var t = this.wrapper.offsetHeight;
            if (this.options.listenX) { this.wrapperWidth = this.wrapper.clientWidth;
                if (this.options.resize) { this.indicatorWidth = s.max(s.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
                    this.indicatorStyle.width = this.indicatorWidth + "px" } else this.indicatorWidth = this.indicator.clientWidth;
                this.maxPosX = this.wrapperWidth - this.indicatorWidth;
                if ("clip" == this.options.shrink) { this.minBoundaryX = -this.indicatorWidth + 8;
                    this.maxBoundaryX = this.wrapperWidth - 8 } else { this.minBoundaryX = 0;
                    this.maxBoundaryX = this.maxPosX }
                this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX }
            if (this.options.listenY) { this.wrapperHeight = this.wrapper.clientHeight;
                if (this.options.resize) { this.indicatorHeight = s.max(s.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
                    this.indicatorStyle.height = this.indicatorHeight + "px" } else this.indicatorHeight = this.indicator.clientHeight;
                this.maxPosY = this.wrapperHeight - this.indicatorHeight;
                if ("clip" == this.options.shrink) { this.minBoundaryY = -this.indicatorHeight + 8;
                    this.maxBoundaryY = this.wrapperHeight - 8 } else { this.minBoundaryY = 0;
                    this.maxBoundaryY = this.maxPosY }
                this.maxPosY = this.wrapperHeight - this.indicatorHeight;
                this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY }
            this.updatePosition() },
        updatePosition: function() {
            var t = this.options.listenX && s.round(this.sizeRatioX * this.scroller.x) || 0,
                i = this.options.listenY && s.round(this.sizeRatioY * this.scroller.y) || 0;
            if (!this.options.ignoreBoundaries) {
                if (t < this.minBoundaryX) {
                    if ("scale" == this.options.shrink) { this.width = s.max(this.indicatorWidth + t, 8);
                        this.indicatorStyle.width = this.width + "px" }
                    t = this.minBoundaryX } else if (t > this.maxBoundaryX)
                    if ("scale" == this.options.shrink) { this.width = s.max(this.indicatorWidth - (t - this.maxPosX), 8);
                        this.indicatorStyle.width = this.width + "px";
                        t = this.maxPosX + this.indicatorWidth - this.width } else t = this.maxBoundaryX;
                else if ("scale" == this.options.shrink && this.width != this.indicatorWidth) { this.width = this.indicatorWidth;
                    this.indicatorStyle.width = this.width + "px" }
                if (i < this.minBoundaryY) {
                    if ("scale" == this.options.shrink) { this.height = s.max(this.indicatorHeight + 3 * i, 8);
                        this.indicatorStyle.height = this.height + "px" }
                    i = this.minBoundaryY } else if (i > this.maxBoundaryY)
                    if ("scale" == this.options.shrink) {
                        this.height = s.max(this.indicatorHeight - 3 * (i - this.maxPosY), 8);
                        this.indicatorStyle.height = this.height + "px";
                        i = this.maxPosY + this.indicatorHeight - this.height
                    } else i = this.maxBoundaryY;
                else if ("scale" == this.options.shrink && this.height != this.indicatorHeight) { this.height = this.indicatorHeight;
                    this.indicatorStyle.height = this.height + "px" }
            }
            this.x = t;
            this.y = i;
            if (this.scroller.options.useTransform) this.indicatorStyle[o.style.transform] = "translate(" + t + "px," + i + "px)" + this.scroller.translateZ;
            else { this.indicatorStyle.left = t + "px";
                this.indicatorStyle.top = i + "px" }
        },
        _pos: function(t, i) {
            if (t < 0) t = 0;
            else if (t > this.maxPosX) t = this.maxPosX;
            if (i < 0) i = 0;
            else if (i > this.maxPosY) i = this.maxPosY;
            t = this.options.listenX ? s.round(t / this.sizeRatioX) : this.scroller.x;
            i = this.options.listenY ? s.round(i / this.sizeRatioY) : this.scroller.y;
            this.scroller.scrollTo(t, i) },
        fade: function(t, i) {
            if (i && !this.visible) return;
            clearTimeout(this.fadeTimeout);
            this.fadeTimeout = null;
            var s = t ? 250 : 500,
                e = t ? 0 : 300;
            t = t ? "1" : "0";
            this.wrapperStyle[o.style.transitionDuration] = s + "ms";
            this.fadeTimeout = setTimeout(function(t) { this.wrapperStyle.opacity = t;
                this.visible = +t }.bind(this, t), e) }
    };
    n.utils = o;
    if ("undefined" != typeof module && module.exports) module.exports = n;
    else t.IScroll = n
}(window, document, Math);