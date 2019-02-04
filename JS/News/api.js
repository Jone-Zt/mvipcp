(function(e) {
    e.androidPay = {
        upgrade: "#",//这里是获得app接口
        getUAItem: function(t) {
            var n = e.navigator.userAgent,
            r = new RegExp(t + "/(\\S+)", "g"),
            i = r.exec(n);
            return i ? i[1] : ""
        },
        getVersion: function() {
            return this.getUAItem("AppVerCode")
        },
        getDist: function() {
            return this.getUAItem("Dist")
        },
        bet: function(t, n, r, i) {
            var s = this;
            if (s.getVersion()) {
                var o = "bet",
                n = n || "",
                r = r || "",
                u = [o, n, r].join("_");
                $.ajax({
                    url: Q.mobile.APIPAY || "#",
                    data: $.param(t) + "&v=" + s.getVersion() + "&r=" + $.now(),
                    dataType: "jsonp",
                    timeout: 3e4,
                    success: function(t) {
                        var n = +t.xCode,
                        r;
                        switch (n) {
                        case 0:
                            t.resultCode = "0",
                            t.resultMsg = "\u6210\u529f",
                            t.actionCode = 316,
                            t.callback = u,
                            i && (t.doValue = i),
                            r = e.lotteryJs.runOnAndroidJavaScript(JSON.stringify(t));
                            if (r == "0") {
                                e.location.href = s.upgrade;
                                return
                            }
                            break;
                        case 1:
                            t.resultCode = "0",
                            t.resultMsg = "\u6210\u529f",
                            t.actionCode = 312;
                            var o = +t.xValue.TradeMoney / 100,
                            a = +Q.number.format(t.xValue.QBInfo.balance),
                            f = +t.xValue.QBInfo.pktbalance;
                            t.money = Math.abs(Q.number.format(a + f - o)),
                            t.callback = u,
                            i && (t.doValue = i),
                            r = e.lotteryJs.runOnAndroidJavaScript(JSON.stringify(t));
                            if (r == "0") {
                                e.location.href = s.upgrade;
                                return
                            }
                            break;
                        case 2:
                            t.resultCode = "0",
                            t.resultMsg = "\u6210\u529f",
                            t.actionCode = 314,
                            t.callback = u,
                            i && (t.doValue = i),
                            r = e.lotteryJs.runOnAndroidJavaScript(JSON.stringify(t));
                            if (r == "0") return e.location.href = s.upgrade,
                            !1;
                            break;
                        case 100:
                            t.resultCode = "0",
                            t.resultMsg = "\u6210\u529f",
                            t.actionCode = 300,
                            t.callback = u,
                            i && (t.doValue = i),
                            r = e.lotteryJs.runOnAndroidJavaScript(JSON.stringify(t));
                            if (r == "0") return e.location.href = s.upgrade,
                            !1;
                            break;
                        default:
                            Q.lightBox.alert({
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
                    timeout: 25e3,
                    error: function() {
                        Q.lightBox.alert({
                            content: '<p class="msg">\u4e0d\u597d\u610f\u601d\uff0c\u7f51\u7edc\u8d85\u65f6\u4e86\uff01</p>',
                            confirmFn: function() {
                                this.close()
                            },
                            cancelFn: function() {
                                this.close()
                            }
                        })
                    }
                })
            } else e.location.href = s.upgrade
        },
        success_bet: function(e, t, n) {
            var r = +e.status,
            i = e.code;
            r == "1" ? e.message && clientHelper.support(75) ? n && Q.mobile[n].call(null, e.message) : i == "312" || i == "314" || i == "300" ? t && $("#" + t).trigger("click") : n && Q.mobile[n]() : typeof Q.mobile.AndroidBetError == "function" && Q.mobile.AndroidBetError()
        },
        login: function(t, n) {
            var r = r || {},
            i = "login",
            t = t || "",
            n = n || "";
            $.type(n) == "number" && n === 1 && (r.refresh = 1, n = "");
            var s = [i, t, n].join("_");
            r.resultCode = "0",
            r.resultMsg = "\u6210\u529f",
            r.actionCode = 300,
            r.callback = s,
            eErr = e.lotteryJs.runOnAndroidJavaScript(JSON.stringify(r));
            if (eErr == "0") return e.location.href = this.upgrade,
            !1
        },
        success_login: function(e, t, n) {
            var r = +e.status,
            i = e.code;
            r == "1" && i == "300" && (t && $("#" + t).trigger("click"), n && Q.mobile[n]())
        },
        recharge: function(t, n) {
            var r = "recharge",
            t = t || "",
            n = n || "",
            i = [r, t, n].join("_");
            eErr = e.lotteryJs.runOnAndroidJavaScript(JSON.stringify({
                resultCode: "0",
                resultMsg: "\u6210\u529f",
                actionCode: 312,
                money: 0,
                callback: i
            }));
            if (eErr == "0") return e.location.href = this.upgrade,
            !1
        },
        success_recharge: function(e, t, n) {
            var r = +e.status,
            i = e.code;
            r == "1" ? i == "312" && (t && $("#" + t).trigger("click"), n && Q.mobile[n]()) : r == "2" && Q.mobile.AndroidActivityError(310)
        },
        activity: function(t, n, r) {
            var i = this;
            if (i.getVersion() >= 72) {
                var t = t || {},
                s = "activity",
                n = n || "",
                r = r || "",
                o = [s, n, r].join("_");
                t.resultCode = "0",
                t.resultMsg = "\u6210\u529f",
                t.actionCode = 312,
                t.callback = o,
                eErr = e.lotteryJs.runOnAndroidJavaScript(JSON.stringify(t));
                if (eErr == "0") return e.location.href = i.upgrade,
                !1
            } else e.location.href = i.upgrade
        },
        success_activity: function(e, t, n) {
            var r = +e.status,
            i = e.code;
            r == "1" ? i == "312" && (t && $("#" + t).trigger("click"), n && Q.mobile[n]()) : r == "2" && Q.mobile.AndroidActivityError(317)
        },
        packet: function(t, n, r) {
            var t = t || {},
            i = "packet",
            n = n || "",
            r = r || "",
            s = [i, n, r].join("_");
            t.resultCode = "0",
            t.resultMsg = "\u6210\u529f",
            t.actionCode = 312,
            t.callback = s,
            eErr = e.lotteryJs.runOnAndroidJavaScript(JSON.stringify(t));
            if (eErr == "0") return e.location.href = this.upgrade,
            !1
        },
        success_packet: function(e, t, n) {
            var r = +e.status,
            i = e.code;
            r == "1" ? i == "312" && (t && $("#" + t).trigger("click"), n && Q.mobile[n]()) : r == "2" && Q.mobile.AndroidActivityError(317)
        },
        share: function(t, n, r) {
            var i = "share",
            n = n || "",
            r = r || "",
            s = [i, n, r].join("_"),
            t = t || {};
            t.resultCode = "0",
            t.resultMsg = "\u6210\u529f",
            t.actionCode = 503,
            t.callback = s,
            eErr = e.lotteryJs.runOnAndroidJavaScript(JSON.stringify(t));
            if (eErr == "0") return e.location.href = this.upgrade,
            !1
        },
        success_share: function(e, t, n) {
            var r = +e.status,
            i = e.code;
            r == "1" && i == "503" && (t && $("#" + t).trigger("click"), n && Q.mobile[n]())
        },
        open: function(t, n, r) {
            var i = "open",
            s = s || {},
            n = n || "",
            r = r || "";
            n && $.type(n) == "array" && n.length && (s.lotId = n[0], s.projId = n[1], s.joinId = n[2], s.traceId = n[3], n = ""),
            n && $.type(n) == "string" && (s.code_params = n);
            var o = [i, n, r].join("_");
            s.resultCode = "0",
            s.resultMsg = "\u6210\u529f",
            s.actionCode = t,
            s.callback = o,
            eErr = e.lotteryJs.runOnAndroidJavaScript(JSON.stringify(s));
            if (eErr == "0") return e.location.href = this.upgrade,
            !1
        },
        jumpUrl: function(t) {
            var n = "jump",
            r = r || {},
            i = i || "",
            s = s || "",
            o = [n, i, s].join("_");
            r.url = t,
            r.resultCode = "0",
            r.resultMsg = "\u6210\u529f",
            r.actionCode = 311,
            r.callback = o,
            eErr = e.lotteryJs.runOnAndroidJavaScript(JSON.stringify(r));
            if (eErr == "0") return e.location.href = this.upgrade,
            !1
        },
        download: function(t, n, r) {
            var i = "download",
            n = n || "",
            r = r || "",
            s = [i, n, r].join("_"),
            o = o || {};
            o.resultCode = "0",
            o.resultMsg = "\u6210\u529f",
            o.actionCode = 309,
            o.callback = s,
            o.download_url = t,
            eErr = e.lotteryJs.runOnAndroidJavaScript(JSON.stringify(o));
            if (eErr == "0") return e.location.href = this.upgrade,
            !1
        },
        success: function(e) {
            if (e.callback) {
                var t = e.callback.split("_"),
                n = "success_" + t[0],
                r = t[1],
                i = t[2];
                this[n] && this[n](e, r, i)
            }
        }
    },
    e.iosJavascriptClient = {
        upgrade: "#",
        bridge: null,
        rmb: 0,
        bet: function(t, n) {
            var r = this,
            i = androidPay;
            if (i.getVersion()) {
                var s = "bet",
                n = n || "",
                o = t.BetType || t.buyType,
                u = 0;
                o == "team" ? u = t.SponsorBuy * 1 + t.LockCount * 1 : u = t.BetMoney || t.BuyMoney || t.TotalMoney,
                r.rmb = u,
                $.ajax({
                    url: "/int/mbet",
                    data: $.param(t) + "&r=" + $.now(),
                    dataType: "json",
                    type: "POST",
                    success: function(t) {
                        var s = +t.xCode,
                        o, u, a, f, l, c, h = i.getVersion(),
                        p;
                        switch (s) {
                        case 0:
                            !t.xValue || (u = t.xValue.OrderID, o = t.xValue.URL, f = +t.xValue.Coupons),
                            l = +o.match(/(\d)$/g)[0] || 1,
                            c = t.xValue.LotID || Q.mobile.lotType,
                            a = "",//"#" + u + "|" + l + "|" + c + "|100|" + f + "&v=" + h + "&vn=1.4.0&jump=browser",
                            e.location.href = a;
                            break;
                        case 1:
                            !t.xValue || (u = t.xValue.OrderID, o = t.xValue.URL, f = +t.xValue.Coupons),
                            l = +o.match(/(\d)$/g)[0] || 1,
                            c = t.xValue.LotID || Q.mobile.lotType,
                            p = r.rmb,
                            a = "",//"#" + u + "|" + l + "|" + c + "|101|" + f + "&v=" + h + "&vn=1.4.0&jump=browser",
                            f === 0 ? Q.lightBox.alert({
                                content: '<p class="msg">\u60a8\u7684\u8d26\u6237\u4f59\u989d\u4e0d\u8db3\uff0c\u8bf7\u5148\u8fdb\u884c\u5145\u503c\uff01</p>',
                                confirmFn: function() {
                                    this.close(),
                                    e.location.href = "#"//"#" + p + "|0|" + a
                                },
                                ensure: "\u7acb\u5373\u5145\u503c"
                            }) : e.location.href = a;
                            break;
                        case 2:
                            !t.xValue || (u = t.xValue.OrderID, o = t.xValue.URL, f = +t.xValue.Coupons),
                            l = +o.match(/(\d)$/g)[0] || 1,
                            c = t.xValue.LotID || Q.mobile.lotType,
                            a = "#",// + u + "|" + l + "|" + c + "|102|" + f + "&v=" + h + "&vn=1.4.0&jump=browser",
                            e.location.href = "#";// + a;
                            break;
                        case 100:
                            iosJavascriptClient.login(n);
                            break;
                        default:
                            Q.lightBox.alert({
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
                    timeout: 25e3,
                    error: function() {
                        Q.lightBox.alert({
                            content: '<p class="msg">\u4e0d\u597d\u610f\u601d\uff0c\u7f51\u7edc\u8d85\u65f6\u4e86\uff01</p>',
                            confirmFn: function() {
                                this.close()
                            },
                            cancelFn: function() {
                                this.close()
                            }
                        })
                    }
                })
            } else e.location.href = r.upgrade
        },
        open: function(t, n, r) {
            var i = "open",
            n = n || "",
            r = r || "",
            s = [i, n, r].join("_"),
            o = o || {};
            o.resultCode = "0",
            o.resultMsg = "\u6210\u529f",
            o.actionCode = t,
            o.callback = s,
            t == 328 && (o.code_params = n);
            var u = this;
            clientHelper.support(3) ? u.bridge.callHandler("runOnIOSJavaScript", o,
            function(t) {
                t == "-1" && (e.location.href = u.upgrade)
            }) : e.location.href = u.upgrade
        },
        login: function(t, n) {
            var r = r || {},
            i = "login",
            t = t || "",
            n = n || "";
            $.type(n) == "number" && n === 1 && (r.refresh = 1, n = "");
            var s = [i, t, n].join("_");
            r.resultCode = "0",
            r.resultMsg = "\u6210\u529f",
            r.actionCode = 300,
            r.callback = s;
            var o = this;
            clientHelper.support(3) ? o.bridge.callHandler("runOnIOSJavaScript", r,
            function(t) {
                t == "-1" && (e.location.href = o.upgrade)
            }) : e.location.href = o.upgrade
        },
        success_login: function(e, t, n) {
            var r = +e.status,
            i = e.code;
            r == "1" && i == "300" && (t && $("#" + t).trigger("click"), n && Q.mobile[n]())
        },
        share: function(t, n, r) {
            var t = t || {},
            i = "share",
            n = n || "",
            r = r || "",
            s = [i, n, r].join("_");
            t.resultCode = "0",
            t.resultMsg = "\u6210\u529f",
            t.actionCode = 503,
            t.callback = s;
            var o = this;
            clientHelper.support(6) ? o.bridge.callHandler("runOnIOSJavaScript", t,
            function(t) {
                t == "-1" && (e.location.href = o.upgrade)
            }) : e.location.href = o.upgrade
        },
        success_share: function(e, t, n) {
            var r = +e.status,
            i = e.code;
            r == "1" && i == "503" && (t && $("#" + t).trigger("click"), n && Q.mobile[n]())
        }
    },
    e.wxShareClient = {
        getWxConfig: function(e) {
            var t = this;
            $.ajax({
                url: "#", //微信接口
                data: {
                    format: "json",
                    url: location.href.split("#")[0],
                    appKey: "CaiPiao:caipiao:mpw"
                },
                dataType: "jsonp",
                success: function(n) {
                    t.bindWxEvent(n.data, e)
                }
            })
        },
        shareOpt: {},
        init: function(e) {
            this.getWxConfig(e)
        },
        bindWxEvent: function(e, t) {
            wx.config({
                debug: !1,
                appId: e.appId,
                timestamp: e.timestamp,
                nonceStr: e.nonceStr,
                signature: e.signature,
                jsApiList: ["checkJsApi", "onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "hideMenuItems", "showMenuItems", "hideAllNonBaseMenuItem", "showAllNonBaseMenuItem", "scanQRCode", "startRecord", "stopRecord", "onVoiceRecordEnd", "translateVoice", "chooseImage", "previewImage", "uploadImage", "downloadImage"]
            }),
            wx.ready(function() {
                wx.onMenuShareTimeline({
                    title: t.title,
                    link: t.url,
                    imgUrl: t.imgUrl
                }),
                wx.onMenuShareAppMessage({
                    title: t.title,
                    desc: t.desc,
                    link: t.url,
                    imgUrl: t.imgUrl
                })
            })
        }
    },
    e.clientHelper = {
        support: function(t) {
            var n = !1,
            r = e.navigator.userAgent.toLowerCase();
            if (/appvercode\/(\d+)/.test(r)) {
                var i = +RegExp.$1;
                i >= t && (n = !0)
            }
            return n
        },
        osName: function() {
            var t = e.navigator.userAgent.toLowerCase(),
            n = "";
            if (t.indexOf("iphone") >= 0 || t.indexOf("ipad") >= 0 || t.indexOf("ipod") >= 0) n = "IOS";
            else if (t.indexOf("android") >= 0 || t.indexOf("adr ") >= 0) n = "Android";
            return n
        },
        appName: function() {
            var t = e.navigator.userAgent.toLowerCase(),
            n = "";
            return t.indexOf("appvercode") + 1 ? n = "caipiao": t.indexOf("micromessenger") + 1 && (n = "weixin"),
            n
        }
    },
    $(document).ready(function() {
        if (clientHelper.appName() == "caipiao" && clientHelper.osName() == "IOS") {
            function e(e) {
                var t = e.bridge;
                t.init(function(e, t) {}),
                t.registerHandler("iosJavascriptHandler",
                function(e, t) {
                    var n = +e.status,
                    r = e.code,
                    i = e.callback;
                    if (i) {
                        var s = i.split("_"),
                        o = "success_" + s[0],
                        u = s[1],
                        a = s[2];
                        iosJavascriptClient[o] && iosJavascriptClient[o](e, u, a)
                    }
                }),
                iosJavascriptClient.bridge = t
            }
            document.addEventListener("WebViewJavascriptBridgeReady", e, !1)
        }
    })
})(window);