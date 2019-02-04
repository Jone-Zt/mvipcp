var caizhong="\u4e03\u661f\u5f69",kaijiang="Qxc",qihaoid="qxchistory",gp=0;
(function(e) {
    var t = e.$,
    n = e.kureicp;
    n.mobile.lotType = n.lottery.lotType.qx,
    n.mobile.price = n.lottery.price,
    n.mobile.LOT_METHOD = 0,
    n.mobile.LOT_SELECTMAX = 5,
    n.mobile.cart = {
        group: 0,
        code: "",
        count: 0
    },
    n.mobile.selectCodeInit = function() {
        t(".pick-box li span").on(n.lottery.tap,
        function() {
            t(this).toggleClass("selected"),
            n.mobile.count()
        }),
        t(".top-date").on(n.lottery.tap,
        function() {
            var e = t("#qxchistory").find("p"),
            n = t(".top-arr"),
            r = "top-arr-on";
            n.hasClass(r) ? (n.removeClass(r), e.hide().eq(0).show().parent().css("height", 22)) : (n.addClass(r), e.show().parent().css("height", 110))
        }),
        t("#navtit").on(n.lottery.tap,
        function() {
            var e = t(".head-arr"),
            r = t(".pop-box2"),
            i = "head-arron",
            s = t(".btn-menu"),
            o = "btn-menu-on",
            u = "none";
            s.hasClass(o) && s.trigger(n.lottery.tap),
            e.hasClass(i) ? (e.removeClass(i), r.addClass(u)) : (e.addClass(i), r.removeClass(u))
        }),
        t(".plays").on(n.lottery.tap,
        function() {
            var e = t(this),
            r = t(".head-arr"),
            i = t(".pop-box2"),
            s = t(".btn-pop"),
            o = e.attr("action") * 1,
            u = t(".pick"),
            a = t("#game"),
            f = t("#detxt");
            s.removeClass("btn-pop-on").eq(o).addClass("btn-pop-on"),
            r.removeClass("head-arron"),
            i.addClass("none"),
            n.mobile.LOT_METHOD = o,
            o === 0 ? (f.removeClass("none"), a.text("\u81ea\u9009")) : o === 1 && (f.addClass("none"), a.text("\u673a\u9009"), n.mobile.getRandgroup(5)),
            u.addClass("none").eq(n.mobile.LOT_METHOD).removeClass("none")
        }),
        t("#topick").on("change",
        function() {
            var e = t(this).val() * 1;
            n.mobile.getRandgroup(e)
        }),
        t("#reflash").on(n.lottery.tap,
        function() {
            var e = t("#topick").val() * 1;
            n.mobile.getRandgroup(e)
        }),
        t(".btn-menu").on(n.lottery.tap,
        function() {
            var e = t("#tools"),
            r = t(this),
            i = "btn-menu-on",
            s = t(".pop-box2"),
            o = t("#navtit"),
            u = "none";
            s.hasClass(u) || o.trigger(n.lottery.tap),
            r.hasClass(i) ? (e.addClass(u), r.removeClass(i)) : (e.removeClass(u), r.addClass(i))
        }),
        t("#addcart").on({
            click: function() {
                n.mobile.pickBall(t(this))
            },
            touchstart: function() {
                t(this).addClass("btn-addnmu-tap")
            },
            touchend: function() {
                t(this).removeClass("btn-addnmu-tap")
            }
        }),
        t("#bets").on({
            click: function() {
                var r = n.mobile.cart.group || 0,
                i = t(".pick").eq(n.mobile.LOT_METHOD).find("ul"); ! r || i.find(".selected").length > 0 || n.mobile.LOT_METHOD === 1 ? n.mobile.pickBall(t(this)) : e.location.href = "./goumai.asp"
            },
            touchstart: function() {
                t(this).addClass("btntap")
            },
            touchend: function() {
                t(this).removeClass("btntap")
            }
        })
    },
    n.mobile.pickBall = function(r) {
        var i = n.mobile.cart.code || "",
        s = t("#count").text() * 1,
        o = r.attr("id"),
        u = n.mobile.LOT_METHOD;
        if (u === 0) {
            var a = ["\u7b2c\u4e00\u4f4d", "\u7b2c\u4e8c\u4f4d", "\u7b2c\u4e09\u4f4d", "\u7b2c\u56db\u4f4d", "\u7b2c\u4e94\u4f4d", "\u7b2c\u516d\u4f4d", "\u7b2c\u4e03\u4f4d"],
            f,
            l = "",
            c = t(".pick-box").find("ul"),
            h = c.length || 1;
            for (var p = 0; p < h; p++) {
                f = c.eq(p).find(".selected").length;
                if (f < 1) {
                    e.alert("\u8bf7\u5728" + a[p] + "\u4f4d\u81f3\u5c11\u9009\u62e91\u4e2a\u53f7\u7801");
                    return
                }
                l += t.map(c.eq(p).find(".selected"),
                function(e) {
                    return t.trim(t(e).text())
                }).join("") + ","
            }
            i += s + "|" + l.replace(/^,|,$/g, "") + ";",
            n.mobile.cart.group += 1
        } else {
            var c = t("#mycart").find("li"),
            d = c.length || 1,
            v = [];
            for (var p = 0; p < d; p++) v = t.map(c.eq(p).find("span"),
            function(e) {
                return t.trim(t(e).text())
            }),
            i += "1|" + v.join(",") + ";",
            n.mobile.cart.group += 1
        }
        n.mobile.cart.code = i,
        n.mobile.cart.count += s;
        var m = n.mobile.cart.code.replace(/;$/g, ""),
        s = n.mobile.cart.count;
        n.localstorage.setItem(n.mobile.storageName, m),
        n.localstorage.setItem(n.mobile.storageMulName, s),
        o == "addcart" ? (t("#group").text(n.mobile.cart.group), n.mobile.clearAll()) : e.location.href = "./goumai.asp"
    },
    n.mobile.clearAll = function() {
        var e = n.mobile.LOT_METHOD;
        e === 1 ? n.mobile.getRandgroup(n.mobile.LOT_SELECTMAX) : (t("#count,#price").text(0), t(".pick").eq(0).find(".selected").removeClass("selected"))
    },
    n.mobile.AsynDownData = function() {
        var e = "#" + Math.random();///int/qxcindex?rnd=
        t("#navtit").html('\u4e03\u661f\u5f69-<cite id="game">\u81ea\u9009</cite><span class="head-arr"><em></em></span>');
        var r = n.localstorage.getItem(n.mobile.storageName),
        i = ("0" + n.localstorage.getItem(n.mobile.storageMulName)) * 1;
        r && (n.mobile.cart.code = r + ";", n.mobile.cart.group = r.split(/;/g).length, n.mobile.cart.count = i),
        t("#group").text(n.mobile.cart.group),
        t.getJSON(e,
        function(e) {
            var r = e.info,
            i = e.blist,
            s = [];
            t(".time").attr({
                issue: r.issue,
                issale: r.IsOpen,
                endtime: r.EndTime * 1 - r.DsTimeSpace * 1,
                mul: r.MaxChipMul
            }),
            t("#actQH").text(t.trim(r.issue)),
            t("#countdowm").html("\u622a\u6b62\u65f6\u95f4\uff1a" + r.etstr),
            n.mobile.countDownInit(),
            t.each(i,
            function(e, t) {
                s.push("<p>\u7b2c" + t.issue + '\u671f\u5f00\u5956\uff1a<strong class="red">' + t.number.split(/\s?/g).join(" ") + "</strong></p>")
            }),
            t("#qxchistory").html(s.join(""))
        })
    },
    n.mobile.countDownInit = function() {
        var e = t(".time").attr("issale") * 1,
        r = Math.abs(t(".time").attr("endtime"));
        e ? n.mobile.getServerTimes(function(e) {
            if (e * 1 > 0) {
                var n = r * 1 - e * 1;
                n <= 0 && t("#countdowm").html("\u672c\u671f\u5df2\u622a\u6b62")
            }
        }) : t("#countdowm").html("\u6682\u505c\u9500\u552e")
    },
    n.mobile.getRandgroup = function(e) {
        var r = [],
        i;
        n.mobile.LOT_SELECTMAX = e;
        for (var s = 0; s < e; s++) {
            i = n.number.random({
                min: 0,
                max: 9,
                size: 7,
                repeat: 1,
                sort: 0
            })[0],
            r.push('<li><div class="kj-ball">');
            for (var o = 0; o < 7; o++) r.push('<span class="redball">' + i[o] + "</span> ");
            r.push("</div></li>")
        }
        t("#mycart").html(r.join("")),
        n.mobile.count()
    },
    n.mobile.count = function() {
        var e;
        if (n.mobile.LOT_METHOD === 0) {
            e = 1,
            o = t(".pick-box").find("ul"),
            max = o.length;
            for (var r = 0; r < max; r++) e *= o.eq(r).find(".selected").length
        } else e = n.mobile.LOT_SELECTMAX;
        t("#count").text(e),
        t("#price").text(e * n.mobile.price)
    },
    t(function() {
        n.mobile.storageName = "storage" + n.mobile.lotType,
        n.mobile.storageMulName = "storage" + n.mobile.lotType + "mul",
        n.mobile.AsynDownData(),
        n.mobile.selectCodeInit()
    })
})(window);