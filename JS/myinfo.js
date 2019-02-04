(function(e) {
    var t = e.$ || {},
    n = e.kureicp;
    n.mobile.queryblanceUrl_dev = "/int/querybalance",
    n.mobile.querycardUrl_dev = "/int/querycardinfo",
    t(function() {
			   //console.log(n.mobile.queryblanceUrl_dev + "?coupon=1&r=" + t.now());
        if (!n.cookie.get("Q")) {
            //e.location.href = "/passport/login?redirect_url=%2Fprofile%2F";
            return
        }
        t.ajax({
            url: n.mobile.queryblanceUrl_dev + "?coupon=1&r=" + t.now(),
            dataType: "json",
            success: function(r) {
                if (r && r.code == "0") 
				{ 
				/ [@ * ] + /.test(r.username) && t("#setname").show(),
t("#myname").text(r.username),
t("#balance").text(r.balance ? r.balance: "0"),
t("#score").text(r.jifen),
t("#pktbalance").text(r.pktbalance ? r.pktbalance: "0"),
t("#couponcnt").text(r.couponcnt ? r.couponcnt: "0"),
t("#frozen").html(r.frozen == 0 ? "\u6682\u65e0": r.frozen + "\u5143");
var i = r.alive * 1,
s = t("#draw"),
o = t("#base"),
u = t("#card"),
a = t("#paypwd"),
f = t("#mobile");
switch (i) {
case 1:
    t.ajax({
        url:
        n.mobile.querycardUrl_dev + "?r=" + t.now(),
        dataType: "json",
        success: function(e) {
            e && e.result_code != "9999" && (s.attr("href", "/profile / bankcard ? url = /profile/withdraw "), u.attr("href ", " / profile / bankcard "))
        },
        error: function() {}
    });
    break;
case 2:
    s.attr("href ", " / profile / paypass ? action = bankcard "),
    o.attr("href ", " / profile / paypass "),
    u.attr("href ", " / profile / paypass "),
    a.attr("href ", " / profile / paypass ? url = /profile/homepwd "),
    f.attr("href ", " / profile / paypass ? url = /profile/changeMobile ");
    break;
case 3:
    s.attr("href ", " / profile / baseinfo ? url = /profile/bankcard "),
    o.attr("href ", " / profile / baseinfo "),
    a.attr("href ", " / profile / baseinfo "),
    f.attr("href ", " / profile / changemobile "),
    u.attr("href ", " / profile / baseinfo ? url = /profile/bankcard ")
}
} else if (r.code == "100 ") {
    e.location.href = " / passport / login ? redirect_url = %2Fprofile % 2F ";
    return
}
},
error: function() {}
});
var r = function(e) {
    t.ajax({
        url: " / int / querybalance ? coupon = 1 & r = " + new Date * 1,
        dataType: "json ",
        success: function(t) {
            e && e(t)
        }
    })
},
i = !1;n.mobile.getServerTimes(function(e) {
    var s = e * 1e3,
    o = n.localstorage.getItem("hbpassed_time "),
    u = n.localstorage.getItem("hbpassed_qid ");
    r(function(e) {
        var r = e.qid;
        if (!o || r != u) i = !0;
        else {
            var a = new Date(s),
            f = new Date(o * 1);
            if (a.getFullYear() != a.getFullYear() || a.getMonth() != f.getMonth() || a.getDate() != f.getDate()) i = !0
        }
        i ? t.ajax({
            url: " / profile / expiresoon ",
            dataType: "json ",
            success: function(e) {
                e.count * 1 > 0 && (t("#hbpassed.hbnum ").html(e.count * 1), t("#hbpassed ").show())
            }
        }) : t("#hbpassed ").hide(),
        t("#hbpassed ").click(function() {
            n.localstorage.setItem("hbpassed_qid ", r),
            n.localstorage.setItem("hbpassed_time ", s),
            t("#hbpassed ").hide()
        })
    })
})
})
})(window);