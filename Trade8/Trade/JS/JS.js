function hex_md5(e) {
    return binl2hex(core_md5(str2binl(e), e.length * chrsz))
}
function b64_md5(e) {
    return binl2b64(core_md5(str2binl(e), e.length * chrsz))
}
function str_md5(e) {
    return binl2str(core_md5(str2binl(e), e.length * chrsz))
}
function hex_hmac_md5(e, t) {
    return binl2hex(core_hmac_md5(e, t))
}
function b64_hmac_md5(e, t) {
    return binl2b64(core_hmac_md5(e, t))
}
function str_hmac_md5(e, t) {
    return binl2str(core_hmac_md5(e, t))
}
function md5_vm_test() {
    return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72"
}
function core_md5(e, t) {
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
        n = md5_ff(n, r, i, s, e[o + 0], 7, -680876936),
        s = md5_ff(s, n, r, i, e[o + 1], 12, -389564586),
        i = md5_ff(i, s, n, r, e[o + 2], 17, 606105819),
        r = md5_ff(r, i, s, n, e[o + 3], 22, -1044525330),
        n = md5_ff(n, r, i, s, e[o + 4], 7, -176418897),
        s = md5_ff(s, n, r, i, e[o + 5], 12, 1200080426),
        i = md5_ff(i, s, n, r, e[o + 6], 17, -1473231341),
        r = md5_ff(r, i, s, n, e[o + 7], 22, -45705983),
        n = md5_ff(n, r, i, s, e[o + 8], 7, 1770035416),
        s = md5_ff(s, n, r, i, e[o + 9], 12, -1958414417),
        i = md5_ff(i, s, n, r, e[o + 10], 17, -42063),
        r = md5_ff(r, i, s, n, e[o + 11], 22, -1990404162),
        n = md5_ff(n, r, i, s, e[o + 12], 7, 1804603682),
        s = md5_ff(s, n, r, i, e[o + 13], 12, -40341101),
        i = md5_ff(i, s, n, r, e[o + 14], 17, -1502002290),
        r = md5_ff(r, i, s, n, e[o + 15], 22, 1236535329),
        n = md5_gg(n, r, i, s, e[o + 1], 5, -165796510),
        s = md5_gg(s, n, r, i, e[o + 6], 9, -1069501632),
        i = md5_gg(i, s, n, r, e[o + 11], 14, 643717713),
        r = md5_gg(r, i, s, n, e[o + 0], 20, -373897302),
        n = md5_gg(n, r, i, s, e[o + 5], 5, -701558691),
        s = md5_gg(s, n, r, i, e[o + 10], 9, 38016083),
        i = md5_gg(i, s, n, r, e[o + 15], 14, -660478335),
        r = md5_gg(r, i, s, n, e[o + 4], 20, -405537848),
        n = md5_gg(n, r, i, s, e[o + 9], 5, 568446438),
        s = md5_gg(s, n, r, i, e[o + 14], 9, -1019803690),
        i = md5_gg(i, s, n, r, e[o + 3], 14, -187363961),
        r = md5_gg(r, i, s, n, e[o + 8], 20, 1163531501),
        n = md5_gg(n, r, i, s, e[o + 13], 5, -1444681467),
        s = md5_gg(s, n, r, i, e[o + 2], 9, -51403784),
        i = md5_gg(i, s, n, r, e[o + 7], 14, 1735328473),
        r = md5_gg(r, i, s, n, e[o + 12], 20, -1926607734),
        n = md5_hh(n, r, i, s, e[o + 5], 4, -378558),
        s = md5_hh(s, n, r, i, e[o + 8], 11, -2022574463),
        i = md5_hh(i, s, n, r, e[o + 11], 16, 1839030562),
        r = md5_hh(r, i, s, n, e[o + 14], 23, -35309556),
        n = md5_hh(n, r, i, s, e[o + 1], 4, -1530992060),
        s = md5_hh(s, n, r, i, e[o + 4], 11, 1272893353),
        i = md5_hh(i, s, n, r, e[o + 7], 16, -155497632),
        r = md5_hh(r, i, s, n, e[o + 10], 23, -1094730640),
        n = md5_hh(n, r, i, s, e[o + 13], 4, 681279174),
        s = md5_hh(s, n, r, i, e[o + 0], 11, -358537222),
        i = md5_hh(i, s, n, r, e[o + 3], 16, -722521979),
        r = md5_hh(r, i, s, n, e[o + 6], 23, 76029189),
        n = md5_hh(n, r, i, s, e[o + 9], 4, -640364487),
        s = md5_hh(s, n, r, i, e[o + 12], 11, -421815835),
        i = md5_hh(i, s, n, r, e[o + 15], 16, 530742520),
        r = md5_hh(r, i, s, n, e[o + 2], 23, -995338651),
        n = md5_ii(n, r, i, s, e[o + 0], 6, -198630844),
        s = md5_ii(s, n, r, i, e[o + 7], 10, 1126891415),
        i = md5_ii(i, s, n, r, e[o + 14], 15, -1416354905),
        r = md5_ii(r, i, s, n, e[o + 5], 21, -57434055),
        n = md5_ii(n, r, i, s, e[o + 12], 6, 1700485571),
        s = md5_ii(s, n, r, i, e[o + 3], 10, -1894986606),
        i = md5_ii(i, s, n, r, e[o + 10], 15, -1051523),
        r = md5_ii(r, i, s, n, e[o + 1], 21, -2054922799),
        n = md5_ii(n, r, i, s, e[o + 8], 6, 1873313359),
        s = md5_ii(s, n, r, i, e[o + 15], 10, -30611744),
        i = md5_ii(i, s, n, r, e[o + 6], 15, -1560198380),
        r = md5_ii(r, i, s, n, e[o + 13], 21, 1309151649),
        n = md5_ii(n, r, i, s, e[o + 4], 6, -145523070),
        s = md5_ii(s, n, r, i, e[o + 11], 10, -1120210379),
        i = md5_ii(i, s, n, r, e[o + 2], 15, 718787259),
        r = md5_ii(r, i, s, n, e[o + 9], 21, -343485551),
        n = safe_add(n, u),
        r = safe_add(r, a),
        i = safe_add(i, f),
        s = safe_add(s, l)
    }
    return Array(n, r, i, s)
}
function md5_cmn(e, t, n, r, i, s) {
    return safe_add(bit_rol(safe_add(safe_add(t, e), safe_add(r, s)), i), n)
}
function md5_ff(e, t, n, r, i, s, o) {
    return md5_cmn(t & n | ~t & r, e, t, i, s, o)
}
function md5_gg(e, t, n, r, i, s, o) {
    return md5_cmn(t & r | n & ~r, e, t, i, s, o)
}
function md5_hh(e, t, n, r, i, s, o) {
    return md5_cmn(t ^ n ^ r, e, t, i, s, o)
}
function md5_ii(e, t, n, r, i, s, o) {
    return md5_cmn(n ^ (t | ~r), e, t, i, s, o)
}
function core_hmac_md5(e, t) {
    var n = str2binl(e);
    n.length > 16 && (n = core_md5(n, e.length * chrsz));
    var r = Array(16),
    i = Array(16);
    for (var s = 0; s < 16; s++) r[s] = n[s] ^ 909522486,
    i[s] = n[s] ^ 1549556828;
    var o = core_md5(r.concat(str2binl(t)), 512 + t.length * chrsz);
    return core_md5(i.concat(o), 640)
}
function safe_add(e, t) {
    var n = (e & 65535) + (t & 65535),
    r = (e >> 16) + (t >> 16) + (n >> 16);
    return r << 16 | n & 65535
}
function bit_rol(e, t) {
    return e << t | e >>> 32 - t
}
function str2binl(e) {
    var t = Array(),
    n = (1 << chrsz) - 1;
    for (var r = 0; r < e.length * chrsz; r += chrsz) t[r >> 5] |= (e.charCodeAt(r / chrsz) & n) << r % 32;
    return t
}
function binl2str(e) {
    var t = "",
    n = (1 << chrsz) - 1;
    for (var r = 0; r < e.length * 32; r += chrsz) t += String.fromCharCode(e[r >> 5] >>> r % 32 & n);
    return t
}
function binl2hex(e) {
    var t = hexcase ? "0123456789ABCDEF": "0123456789abcdef",
    n = "";
    for (var r = 0; r < e.length * 4; r++) n += t.charAt(e[r >> 2] >> r % 4 * 8 + 4 & 15) + t.charAt(e[r >> 2] >> r % 4 * 8 & 15);
    return n
}
function binl2b64(e) {
    var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    n = "";
    for (var r = 0; r < e.length * 4; r += 3) {
        var i = (e[r >> 2] >> 8 * (r % 4) & 255) << 16 | (e[r + 1 >> 2] >> 8 * ((r + 1) % 4) & 255) << 8 | e[r + 2 >> 2] >> 8 * ((r + 2) % 4) & 255;
        for (var s = 0; s < 4; s++) r * 8 + s * 6 > e.length * 32 ? n += b64pad: n += t.charAt(i >> 6 * (3 - s) & 63)
    }
    return n
}
var QHPass = window.QHPass || {},
QHDomain = window.QHDomain || {
    i360: "#",
    login_https: "#",
    captcha: "#",
    login_http: "#"
};
QHPass.resConfig = {
    reloadAfterLogout: !0,
    jumpUrl: "",
    isByqt: !0,
    logoutCallback: null
};
var _hostConf = "#",
_hostArr = _hostConf.split("|"),
_hostShortArr = [],
_hostShort2long = {},
_i = 0,
_tmpHost,
_tmpHostName,
_l = _hostArr.length;
for (; _i < _l; _i++) _tmpHost = _hostArr[_i],
_tmpHostName = _tmpHost.split(".")[0],
_hostShortArr.push(_tmpHostName),
_hostShort2long[_tmpHostName] = _tmpHost;
QHPass._hostConf = _hostConf,
QHPass._hostShort = _hostShortArr.join("|"),
QHPass._hostShort2long = _hostShort2long;
var reHost = location.host.match(new RegExp(QHPass._hostConf.replace(/\./, "\\."), "ig"));
QHPass._hostCurr = reHost && reHost[0],
QHPass.CrossDomainRequest = function(e, t, n, r) {
    var i = +(new Date),
    s = "";
    typeof n == "string" ? s = n: (s = "_CrossDomainCallback" + i, window[s] = function() {
        var e = decodeURIComponent(arguments[0]);
        return o.parentNode.removeChild(o),
        n(e)
    });
    var o = document.createElement("div");
    o.innerHTML = '<iframe style="display:none" id="_CrossDomainiframe' + i + '" name="' + "_CrossDomainiframe" + i + '" src=""></iframe>',
    document.body.appendChild(o);
    var u = document.createElement("FORM");
    u.style.display = "none",
    u.method = r || "post",
    u.target = "_CrossDomainiframe" + i,
    u.action = e;
    var a = [];
    a.push('<input type="hidden" name="callback" value="' + s + '" />'),
    a.push('<input type="hidden" name="proxy" value="http://' + location.host + '/psp_jump.html" />'),
    u.innerHTML = a.join("");
    for (var f in t) {
        var l = document.createElement("input");
        l.setAttribute("type", "hidden"),
        l.setAttribute("name", f),
        l.setAttribute("value", t[f]),
        u.appendChild(l)
    }
    document.body.appendChild(u),
    u.submit(),
    u.parentNode.removeChild(u)
},
QHPass.loadJs = function(e, t, n) {
    n = n || {};
    var r = document.getElementsByTagName("head")[0] || document.documentElement,
    i = document.createElement("script"),
    s = !1;
    i.src = e,
    n.charset && (i.charset = n.charset),
    i.onerror = i.onload = i.onreadystatechange = function() { ! s && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") && (s = !0, t && t(), i.onerror = i.onload = i.onreadystatechange = null, r.removeChild(i))
    },
    r.insertBefore(i, r.firstChild)
},
QHPass.loadJsonp = function() {
    var e = new Date * 1;
    return function(t, n, r) {
        r = r || {};
        var i = "QiUserJsonP" + e++,
        s = r.callbackReplacer || /%callback%/ig;
        window[i] = function(e) {
            n && n(e),
            window[i] = null
        },
        s.test(t) ? t = t.replace(s, i) : t += (/\?/.test(t) ? "&": "?") + "callback=" + i,
        QHPass.loadJs(t, null, r)
    }
} (),
QHPass.g = function(e) {
    return "string" == typeof e || e instanceof String ? document.getElementById(e) : e && e.nodeName && (e.nodeType == 1 || e.nodeType == 9) ? e: null
},
QHPass.trim = function(e) {
    return e && e.replace(/^\s+|\s+$/g, "")
},
QHPass.forEach = function(e, t, n) {
    for (var r = 0,
    i = e.length; r < i; r++) r in e && t.call(n, e[r], r, e)
},
QHPass.byteLen = function(e) {
    return e.replace(/[^\x00-\xff]/g, "--").length
},
QHPass.trace = function(e) {
    window.console && window.console.log(e)
},
QHPass.execCallback = function(e, t) {
    typeof e == "string" ? window.location.href = e: typeof e == "boolean" ? window.location.reload(e) : e && e(t)
},
QHPass.Cookie = QHPass.Cookie || {},
QHPass.Cookie.get = function(e) {
    if (QHPass.Cookie._isValidKey(e)) {
        var t = new RegExp("(^| )" + e + "=([^;]*)(;|$)"),
        n = t.exec(document.cookie);
        if (n) try {
            return decodeURIComponent(n[2]) || null
        } catch(r) {
            return n[2] || null
        }
    }
    return null
},
QHPass.Cookie._isValidKey = function(e) {
    return (new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+$')).test(e)
},
QHPass.Cookie.set = function(e, t, n) {
    if (!QHPass.Cookie._isValidKey(e)) return;
    n = n || {};
    var r = n.expires;
    "number" == typeof n.expires && (r = new Date, r.setTime(r.getTime() + n.expires)),
    document.cookie = e + "=" + encodeURIComponent(t) + "; path=" + (n.path ? n.path: "/") + (r ? "; expires=" + r.toGMTString() : "") + (n.domain ? "; domain=" + n.domain: "") + (n.secure ? "; secure": "")
},
QHPass.Cookie.del = function(e) {
    QHPass.Cookie.set(e, "")
},
QHPass.getUserInfo = function(e, t, n) {
    if (QHPass.Cookie.get("Q") || !QHPass.resConfig.isByqt) {
        var r = n || "http://login." + QHPass._hostCurr || QHDomain.login_http;
        r += "/?o=sso&m=info&func=%callback%&show_name_flag=1",
        QHPass.loadJsonp(r,
        function(n) {
            n.qid ? e && e(n) : t && t()
        })
    } else t && t()
},
QHPass.logoutOtherDomain = function(e) {
    function t() {
        QHPass.resConfig.logoutCallback ? QHPass.execCallback(QHPass.resConfig.logoutCallback) : location.reload(!0)
    }
    e.errno == 0 && (QHPass._hostCurr && QHPass._hostCurr !== "kurei.cn1" ? QHPass.loadJsonp("http://login." + QHPass._hostCurr + "/?o=sso&m=logout&func=%callback%", t) : t())
},
QHPass.logout = function(e) {
    e && (QHPass.resConfig.logoutCallback = e);
    if (QHPass.Cookie.get("Q") || !QHPass.resConfig.isByqt) if (QHPass.resConfig.reloadAfterLogout) {
        var t = QHPass.resConfig.jumpUrl || location.href;
        location.href = QHDomain.login_http + "/?op=logout&destUrl=" + encodeURIComponent(t)
    } else QHPass.loadJsonp(QHDomain.login_http + "/?o=sso&m=logout&func=%callback%", QHPass.logoutOtherDomain);
    else e && QHPass.execCallback(e)
},
QHPass.cookieEnabled = function() {
    var e = !0,
    t = document.cookie.length,
    n = Math.random(),
    r = ["test", n, "test=test", ";expires=Thu, 01 Jan 9970 00:00:00 GMT", ";path=/"].join("");
    return document.cookie = r,
    document.cookie.length == t && (e = !1),
    r = ["test", n, "test=test", ";expires=Thu, 01 Jan 1970 00:00:00 GMT", ";path=/"].join(""),
    document.cookie = r,
    e
},
QHPass.getCaptchaUrl = function(e, t, n) {
    var r = QHDomain.ikurei + "/QuCapt/getQuCaptUrl?captchaApp=" + t + "&captchaScene=" + e;
    QHPass.loadJsonp(r,
    function(e) {
        e.errno == "0" && n && QHPass.execCallback(n, e.captchaUrl)
    })
};
var hexcase = 0,
b64pad = "",
chrsz = 8;
var tipTextLogin = {
    login_account_empty: "\u8bf7\u8f93\u5165\u60a8\u7684\u5e10\u53f7",
    login_password_empty: "\u8bf7\u8f93\u5165\u60a8\u7684\u5bc6\u7801",
    login_default_wrong: "\u5e10\u53f7\u6216\u5bc6\u7801\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",
    login_phrase_wrong: "\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u9a8c\u8bc1\u7801",
    contact_kefu: ',<a target="_blank" href="#">\u8bf7\u8054\u7cfb\u5ba2\u670d</a>'
};
QHPass.mShowLogin = function(e, t) {
    t = t || {},
    QHPass.loginUtils.run(e, t)
},
QHPass.loginUtils = function() {
    function S(t, n, r) {
        QHPass.trace(t),
        h += 1;
        var i = QHPass.g(e.globalTips);
        i && (i.innerHTML = n, i.style.display = "block"),
        d && d({
            type: t,
            msg: n,
            extra: r
        }),
        clearTimeout(QHPass._timeoutHandler)
    }
    function x(t, n, r) {
        var i = QHPass.g(e.globalTips);
        i && (i.innerHTML = n, i.style.display = "none"),
        v && v({
            type: t,
            msg: n,
            extra: r
        })
    }
    function T() {
        var t = e.account,
        n = "account",
        r = QHPass.byteLen(QHPass.g(t).value);
        r || S(n, tipTextLogin.login_account_empty)
    }
    function N() {
        var t = e.password,
        n = "pwd",
        r = QHPass.trim(QHPass.g(t).value);
        r ? r && r.length < 6 && S(n, tipTextLogin.login_default_wrong) : S(n, tipTextLogin.login_password_empty)
    }
    function C() {
        var t = e.phrase,
        n = "phrase",
        r = QHPass.trim(QHPass.g(t).value); (r.length < 0 || r.length > 7) && S(n, tipTextLogin.login_phrase_wrong)
    }
    function k() {
        t && t[0] != "360" && QHPass.forEach(t,
        function(e) {
            e == "360pay" || e == "yunpan" ? n.push("http://login." + e + ".cn") : "#".indexOf(e) > -1 && n.push("http://login." + e + ".com")
        })
    }
    function L() {
        h = 0;
        if (h != 0) return;
        T();
        if (h != 0) return;
        N();
        if (u) {
            if (h != 0) return;
            C()
        }
        if (h > 0) return;
        beforeFun && beforeFun(),
        QHPass._timeoutHandler = setTimeout(function() {
            QHDomain.login_https = "#",
            A(),
            y && y(),
            QHPass._timeoutHandler = setTimeout(function() {
                b && b(),
                S("network", "\u7f51\u7edc\u8d85\u65f6~")
            },
            1e4)
        },
        1e4),
        A()
    }
    function A() {
        var t = QHDomain.login_https + "/?o=sso&m=getToken",
        n = QHPass.trim(QHPass.g(e.account).value),
        r = t + "&func=QHPass.loginUtils.tokenCallback&" + "userName=" + encodeURIComponent(n) + "&rand=" + Math.random();
        QHPass.loadJsonp(r)
    }
    function O(t) {
        var n = QHPass.trim(QHPass.g(e.account).value),
        r = QHPass.g(e.password).value,
        i = QHPass.g(e.isAutologin).checked ? 1 : 0,
        s = QHPass.g(e.phrase).value;
        t.errno != 0 ? S("token", decodeURIComponent(t.errmsg), t.errno) : M(n, r, i, t.token, s)
    }
    function M(e, t, n, r, i) {
        var s = [];
        s.push("userName=" + encodeURIComponent(e)),
        s.push("pwdmethod=1"),
        s.push("password=" + hex_md5(t)),
        s.push("isKeepAlive=" + n),
        s.push("token=" + r),
        o ? (s.push("captFlag=1"), s.push("captchaApp=" + a), s.push("captcha=" + encodeURIComponent(i))) : s.push("captFlag="),
        s.push("r=" + (new Date).getTime()),
        w && w();
        var u = QHDomain.login_https + "/?o=sso&m=login&from=" + p + "&rtype=data&func=QHPass.loginUtils.loginCallback";
        QHPass.loadJsonp(u + "&" + s.join("&"))
    }
    function _(e) {
        QHPass.getCaptchaUrl("login", a, e)
    }
    function D() {
        QHPass.g(e.phraseImg).src = f + "&_=" + Math.random()
    }
    function P(e) {
        E && E();
        if (e.errno == 0) i = e.s,
        r = e.userinfo,
        H();
        else switch (e.errno) {
        case 1036:
            S("account", tipTextLogin.login_default_wrong, e.errno);
            break;
        case 221:
            var t = decodeURIComponent(e.errmsg) + tipTextLogin.contact_kefu;
            S("account", t, e.errno);
            break;
        case 219:
        case 220:
            S("pwd", tipTextLogin.login_default_wrong, e.errno);
            break;
        case 2e4:
            S("account", decodeURIComponent(e.errmsg), e.errno);
            break;
        case 78e3:
        case 78002:
            u = !0,
            f = e.errdetail.captchaUrl,
            l && l(),
            S("phrase", decodeURIComponent(e.errmsg), e);
            break;
        default:
            S("rd", decodeURIComponent(e.errmsg), e.errno)
        }
    }
    function H() {
        c = 0,
        t && t[0] == "360" ? (clearTimeout(QHPass._timeoutHandler), QHPass.execCallback(s, r)) : QHPass.loadJs(n[c] + "/?o=sso&m=setcookie&func=QHPass.loginUtils.rdCallBack&" + "s=" + i)
    }
    function B(e) {
        e.errno == 0 ? (c += 1, c == n.length ? (clearTimeout(QHPass._timeoutHandler), QHPass.execCallback(s, r)) : QHPass.loadJs(n[c] + "/?o=sso&m=setcookie&func=QHPass.loginUtils.rdCallBack&" + "s=" + i)) : (clearTimeout(QHPass._timeoutHandler), QHPass.execCallback(s, r))
    }
    function j(n, r) {
        e = r.doms,
        t = r.domainList || t,
        s = n,
        p = r.src,
        a = r.captchaAppId || a,
        l = r.extFun.phrase,
        d = r.extFun.error,
        v = r.extFun.correct,
        phraseTime = r.phraseTime || "start",
        m = r.extFun.init,
        y = r.extFun.httpsTimeout,
        b = r.extFun.httpTimeout,
        beforeFun = r.extFun.before,
        w = r.extFun.loading,
        E = r.extFun.after,
        phraseTime == "start" ? u = !0 : u = !1,
        k(),
        m && m()
    }
    var e = {},
    t = ["so", "qihoo", "1360", "woxihuan", "yunpan", "leidian", "qikoo"],
    n = [],
    r = null,
    i = "",
    s = "",
    o = !0,
    u = !1,
    a = "i360",
    f = "",
    l = null,
    c = 0,
    h = 0,
    p = "",
    d = null,
    v = null,
    m = null,
    g = null,
    y = null,
    b = null,
    w = null,
    E = null;
    return QHPass._timeoutHandler = null,
    {
        run: j,
        submit: L,
        showError: S,
        showCorrect: x,
        tokenCallback: O,
        loginCallback: P,
        rdCallBack: B,
        getCaptchaUrl: _,
        setPhrase: D
    }
} ();
var tipTextReg = {
    reg_default_regUsername: "2-14\u4e2a\u5b57\u7b26\uff1a\u82f1\u6587\u3001\u6570\u5b57\u6216\u4e2d\u6587",
    reg_default_password: "6-20\u4e2a\u5b57\u7b26\uff08\u533a\u5206\u5927\u5c0f\u5199\uff09",
    reg_wrong_loginEmail_empty: "\u8bf7\u8f93\u5165\u60a8\u7684\u5e38\u7528\u90ae\u7bb1",
    reg_wrong_loginEmail_format: "\u8bf7\u8f93\u5165\u6709\u6548\u7684\u90ae\u7bb1\u5730\u5740",
    reg_wrong_default_regUsername: "\u8bf7\u8f93\u5165\u60a8\u7684\u7528\u6237\u540d",
    reg_wrong_default_password: "\u5bc6\u7801\u5e94\u4e3a6-20\u4e2a\u5b57\u7b26\uff08\u533a\u5206\u5927\u5c0f\u5199\uff09",
    reg_wrong_default_rePassword: "\u4e24\u6b21\u8f93\u5165\u7684\u5bc6\u7801\u4e0d\u4e00\u6837\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",
    reg_wrong_default_phrase: "\u8bf7\u6b63\u786e\u586b\u5199\u9a8c\u8bc1\u7801",
    reg_wrong_password_chinese: "\u5bc6\u7801\u4e0d\u80fd\u542b\u6709\u4e2d\u6587",
    reg_wrong_password_same_chars: "\u5bc6\u7801\u4e0d\u80fd\u5168\u4e3a\u76f8\u540c\u5b57\u7b26",
    reg_wrong_password_empty: "\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a",
    reg_wrong_password_emptychars: "\u5bc6\u7801\u4e0d\u80fd\u5168\u90e8\u4e3a\u7a7a\u683c",
    reg_wrong_password_weaklevel: "\u5bc6\u7801\u5f31\uff0c\u6709\u98ce\u9669\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",
    reg_wrong_password_lx_chars: "\u5bc6\u7801\u4e0d\u80fd\u4e3a\u8fde\u7eed\u5b57\u7b26",
    reg_wrong_phrase_input: "\u9a8c\u8bc1\u7801\u8f93\u5165\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",
    reg_wrong_phrase_ban: "\u9a8c\u8bc1\u7801\u8fde\u7eed\u9519\u8bef\u6b21\u6570\u8fc7\u591a\uff0c\u8bf7\u6539\u5929\u518d\u6765",
    reg_wrong_isagree: "\u8bf7\u5148\u9605\u8bfb\u5e76\u540c\u610f\u300a360\u7528\u6237\u670d\u52a1\u6761\u6b3e\u300b",
    reg_wrong_process_error: "\u6ce8\u518c\u8fc7\u7a0b\u4e2d\u53d1\u751f\u610f\u5916\uff0c\u8bf7\u5237\u65b0\u540e\u91cd\u8bd5",
    net_check: "\u68c0\u67e5\u4e2d\uff0c\u8bf7\u7a0d\u540e...",
    reg_wrong_username_short: "\u7528\u6237\u540d\u6700\u5c11\u4f7f\u75282\u4e2a\u5b57\u7b26\u6216\u6c49\u5b57",
    reg_wrong_username_long: "\u7528\u6237\u540d\u4e0d\u8d85\u8fc77\u4e2a\u6c49\u5b57\u621614\u4e2a\u5b57\u7b26",
    reg_wrong_username_chars: "\u7528\u6237\u540d\u4e0d\u80fd\u5305\u542b\u7279\u6b8a\u5b57\u7b26",
    reg_wrong_username_empty: "\u8bf7\u8f93\u5165\u6709\u6548\u7684\u7528\u6237\u540d",
    reg_wrong_smsCode_empty: "\u6821\u9a8c\u7801\u4e0d\u80fd\u4e3a\u7a7a",
    reg_wrong_format_smsCode: "\u6821\u9a8c\u7801\u683c\u5f0f\u9519\u8bef",
    reg_wrong_phone_empty: "\u8bf7\u8f93\u5165\u60a8\u7684\u5e38\u7528\u624b\u673a\u53f7\u7801",
    reg_wrong_phone_format: "\u8bf7\u8f93\u5165\u6709\u6548\u7684\u624b\u673a\u53f7\u7801",
    immediately_login_tips: '\uff0c<a target="_blank" class="fac clk-quc-login" href="###">\u7acb\u5373\u767b\u5f55</a>'
};
QHPass.mShowReg = function(e, t) {
    t = t || {},
    QHPass.regUtils.run(e, t)
},
QHPass.regUtils = function() {
    function E(t, n, r) {
        QHPass.trace(t),
        f++;
        var i = QHPass.g(e.globalTips);
        i && (i.innerHTML = n, i.style.display = "block"),
        p && p({
            type: t,
            msg: n,
            extra: r
        }),
        clearTimeout(QHPass._timeoutHandler)
    }
    function S(t, n, r) {
        var i = QHPass.g(e.globalTips);
        i && (i.innerHTML = n, i.style.display = "none"),
        d && d({
            type: t,
            msg: n,
            extra: r
        })
    }
    function x(t) {
        var n = e.loginEmail,
        r = "loginEmail",
        i = QHPass.trim(QHPass.g(n).value),
        s = QHDomain.login_http + "/index.php?op=checkemail&loginEmail=" + i + "&r=" + Math.random();
        i ? T(i) ? t && QHPass.loadJsonp(s, N) : E(r, tipTextReg.reg_wrong_loginEmail_format) : E(r, tipTextReg.reg_wrong_loginEmail_empty)
    }
    function T(e) {
        if (e.length > 100) return ! 1;
        if (!/^([\w\-\.]+)@(([0-9a-zA-Z\-]+\.)+[a-zA-Z]{2,4})$/i.test(e)) return ! 1;
        var t = e.split("@"),
        n = t[1];
        if (n == "163.com" || n == "126.com" || n == "yeah.net") if (!/^([a-zA-Z][\w]{5,17}|1(3|5|8|4|7)\d{9})$/.test(t[0])) return ! 1;
        return ! 0
    }
    function N(e) {
        if (0 == e.res) S("loginEmail", e.msg, e.errno);
        else if (e.errno == 2e4) E("loginEmail", e.msg, e.errno);
        else if (1 == e.res) {
            var t = e.msg + tipTextReg.immediately_login_tips;
            E("loginEmail", t, e.errno)
        } else E("loginEmail", e.msg, e.errno)
    }
    function C(t) {
        var n = e.username,
        r = "username",
        i = QHPass.trim(QHPass.g(n).value),
        s = QHPass.byteLen(i),
        o = /^[0-9a-zA-Z\u4e00-\u9fa5_\.]*$/i,
        u = QHDomain.login_http + "/index.php?op=checkuser&userName=" + encodeURIComponent(i) + "&r=" + Math.random();
        i ? 0 == o.test(i) ? E(r, tipTextReg.reg_wrong_username_chars) : s < 2 ? E(r, tipTextReg.reg_wrong_username_short) : s > 14 ? E(r, tipTextReg.reg_wrong_username_long) : t && QHPass.loadJsonp(u, I) : E(r, tipTextReg.reg_wrong_username_empty)
    }
    function k() {
        var t = "smsCode",
        n = QHPass.trim(QHPass.g(e.smsCode).value);
        n ? /^\d{6}$/.test(n) || E(t, tipTextReg.reg_wrong_format_smsCode) : E(t, tipTextReg.reg_wrong_smsCode_empty)
    }
    function L(t) {
        var n = "phone",
        r = QHPass.trim(QHPass.g(e.phone).value);
        r ? /^1(3|5|8|4|7)\d{9}$/.test(r) ? t && QHPass.loadJsonp(QHDomain.login_http + "/index.php?op=checkmobile&mobile=" + encodeURIComponent(r) + "&r=" + Math.random(), A) : E(n, tipTextReg.reg_wrong_phone_format) : E(n, tipTextReg.reg_wrong_phone_empty)
    }
    function A(e) {
        0 == e.errno ? S("phone", e.msg, e.errno) : e.errno == 1037 ? E("phone", e.msg + tipTextReg.immediately_login_tips, e.errno) : E("phone", e.msg, e.errno)
    }
    function O() {
        var t = e.password,
        n = "pwd",
        r = QHPass.g(t).value,
        i = _(r),
        s = /[\u4e00-\u9fa5]+/,
        o = /^\s*$/;
        r && r.length >= 6 && r.length <= 20 ? s.test(r) ? E(n, tipTextReg.reg_wrong_password_chinese) : i < 3 ? r ? o.test(r) ? E(n, tipTextReg.reg_wrong_password_emptychars) : i == 0 ? E(n, tipTextReg.reg_wrong_password_same_chars) : i == 1 ? E(n, tipTextReg.reg_wrong_password_lx_chars) : i == 2 ? E(n, tipTextReg.reg_wrong_password_weaklevel) : E(n, tipTextReg.reg_wrong_password_weaklevel) : E(n, tipTextReg.reg_wrong_password_empty) : S(n, tipTextReg.reg_default_password) : E(n, tipTextReg.reg_wrong_default_password)
    }
    function M(e) {
        var t = e.length,
        n = e.slice(0),
        r,
        i;
        while (--t > 0) {
            i = n[t],
            r = t;
            while (r--) if (i === n[r]) {
                n.splice(t, 1);
                break
            }
        }
        return n
    }
    function _(e) {
        function u(e) {
            e += "";
            var t = e.length,
            n = !0,
            r = e.charCodeAt(t - 1) - e.charCodeAt(0) > 0 ? 1 : -1;
            for (var i = 0; i < t - 1; i++) if (r !== e.charCodeAt(i + 1) - e.charCodeAt(i)) return n = !1,
            n;
            return n
        }
        e += "";
        var t = e.length,
        n = e.split(""),
        r = M(n),
        i = r.length,
        s = -1;
        cflag = u(e);
        if (t < 6 || t > 20) s = -1;
        else if (i == 1) s = 0;
        else if (cflag) s = 1;
        else if (w.join("#").indexOf(e) > -1) s = 2;
        else {
            var o = {
                d: 0,
                c: 0,
                o: 0
            };
            QHPass.forEach(r,
            function(e, t) { / \d / .test(e) ? o.d = 1 : /[a-zA-Z]/.test(e) ? o.c = 1 : o.o = 1
            }),
            s = o.d + o.c + o.o + (t > 9 ? 2 : 1),
            s = s == 2 ? s + 1 : s
        }
        return s
    }
    function D() {
        var t = e.phrase;
        if (!t || !QHPass.g(t)) return;
        if (!h) return;
        var n = "phrase",
        r = QHPass.trim(QHPass.g(t).value); (r.length < 0 || r.length > 7) && E(n, tipTextReg.reg_wrong_default_phrase)
    }
    function P(e) {
        QHPass.getCaptchaUrl("reg", o, e)
    }
    function H() {
        QHPass.g(e.phraseImg).src = u + "&_=" + Math.random()
    }
    function B() {
        t && t[0] != "360" && QHPass.forEach(t,
        function(e) {
            e == "360pay" || e == "yunpan" ? n.push("http://login." + e + ".cn") : "1360|qihoo|woxihuan|360kan|so|leidian|qikoo".indexOf(e) > -1 && n.push("http://login." + e + ".com")
        })
    }
    function j() {
        a = 0,
        t && t[0] == "360" ? (clearTimeout(QHPass._timeoutHandler), QHPass.execCallback(s)) : QHPass.loadJs(n[a] + "/?o=sso&m=setcookie&func=QHPass.regUtils.rdCallBack&" + "s=" + i)
    }
    function F(e) {
        e.errno == 0 ? (a += 1, a == n.length ? (clearTimeout(QHPass._timeoutHandler), QHPass.execCallback(s)) : QHPass.loadJs(n[a] + "/?o=sso&m=setcookie&func=QHPass.regUtils.rdCallBack&" + "s=" + i)) : (clearTimeout(QHPass._timeoutHandler), QHPass.execCallback(s))
    }
    function I(e) {
        if (0 == e.res) S("username", e.msg, e.errno);
        else {
            var t = e.msg + tipTextReg.immediately_login_tips;
            E("username", t, e.userinfo)
        }
    }
    function R(e) {
        if (f > 0) return;
        q[e] && q[e](!1);
        if (f > 0) return;
        O();
        if (f > 0) return;
        D()
    }
    function U(t) {
        f = 0,
        L(!1);
        if (f > 0) return;
        var n = "smsCode",
        r = QHPass.trim(QHPass.g(e.phone).value);
        QHPass.loadJsonp(QHDomain.i360 + "/smsApi/sendsmscode?account=" + r + "&condition=2&r=" + Math.random(),
        function(e) {
            t && t(e),
            e.errno == "0" ? S(n, e.errmsg, e.errno) : e.errno == 1106 ? E(n, "\u5e10\u53f7\u5df2\u5b58\u5728" + tipTextReg.immediately_login_tips, e.errno) : E(n, e.errmsg, e.errno)
        })
    }
    function X() {
        f = 0,
        QHPass.trace("submit"),
        R(r);
        if (f > 0) return;
        beforeFun && beforeFun(),
        QHPass._timeoutHandler = setTimeout(function() {
            E("network", "\u7f51\u7edc\u8d85\u65f6~"),
            g && g()
        },
        2e4);
        var t = {
            account: QHPass.trim(QHPass.g(e[z[r]]).value),
            acctype: W[r],
            password: hex_md5(QHPass.g(e.password).value),
            rePassword: hex_md5(QHPass.g(e.password).value),
            captcha: e.phrase && QHPass.g(e.phrase) ? QHPass.g(e.phrase).value: "",
            smscode: e.smsCode && QHPass.g(e.smsCode) ? QHPass.g(e.smsCode).value: "",
            src: l,
            is_agree: QHPass.g(e.isAgree).checked ? "1": "0",
            charset: c,
            loginEmailActiveFlag: "0",
            captchaApp: o,
            captchaFlag: h ? "1": "0",
            proxy: "http://" + location.host + "/psp_jump.html",
            callback: "parent.QHPass.regUtils.submitCB"
        };
        QHPass.CrossDomainRequest(QHDomain.i360 + "/reg/doregAccount", t),
        y && y()
    }
    function V(e) {
        var t = "";
        e.errdetail && (t = JSON.parse(decodeURIComponent(e.errdetail)), u = t.captchaUrl),
        b && b(),
        e.errno == 0 ? (i = e.rd, j()) : e.errno == 78e3 ? (phraseFun && phraseFun(), E("phrase", tipTextReg.reg_wrong_phrase_input, e)) : e.errno == 78001 ? (phraseFun && phraseFun(), E("phrase", tipTextReg.reg_wrong_phrase_ban, e)) : e.errno == 1670 ? (h = !0, phraseFun && phraseFun(), E("phrase", decodeURIComponent(e.errmsg), e.errno)) : E("rd", decodeURIComponent(e.errmsg), e.errno)
    }
    function $(n, i) {
        e = i.doms,
        t = i.domainList || t,
        r = i.regway,
        s = n,
        l = i.src,
        o = i.captchaAppId || o,
        c = i.postCharset,
        p = i.extFun.error,
        d = i.extFun.correct,
        v = i.extFun.init,
        beforeFun = i.extFun.before,
        g = i.extFun.httpTimeout,
        y = i.extFun.loading,
        b = i.extFun.after,
        phraseFun = i.extFun.phrase,
        h = i.captFlag,
        B(),
        v && v(),
        r != "phone" && P(function(e) {
            u = e,
            H()
        })
    }
    var e = {},
    t = ["so", "qihoo", "1360", "woxihuan", "yunpan", "leidian", "qikoo"],
    n = [],
    r = "",
    i = "",
    s = "",
    o = "i360",
    u = "",
    a = 0,
    f = 0,
    l = "",
    c = "",
    h = !0,
    p = null,
    d = null,
    v = null,
    m = null,
    g = null,
    y = null,
    b = null,
    w = ["asdasd", "asdfgh", "asdfghjkl", "Iloveyou", "qwerty", "Password", "Passwd", "Woaini", "Wodemima", "Woaiwojia", "zxcvbn", "tamade", "nimade", "123abc", "0123456", "0123456789", "100200", "102030", "121212", "111222", "115415", "123000", "123123", "123789", "12301230", "123321", "123456", "1234560", "123465", "1234567", "12345678", "123456789", "1234567890", "123123123", "1314520", "1314521", "147258369", "147852369", "159357", "168168", "201314", "211314", "321321", "456456", "4655321", "521521", "5201314", "520520", "741852", "741852963", "7758258", "7758521", "654321", "852963", "987654", "963852741", "000000", "111111", "11111111", "112233", "666666", "888888", "abcdef", "abcabc", "abc123", "a1b2c3", "aaa111", "123qwe", "qweasd", "admin", "password", "p@ssword", "passwd", "iloveyou", "1qaz2wsx", "qwertyuiop", "qq123456", "1q2w3e4r", "123456abc", "abc123456", "qazwsxedc", "1q2w3e4r5t"];
    QHPass._timeoutHandler = null;
    var q = {
        email: x,
        username: C,
        phone: function(e) {
            L(e);
            if (f > 0) return;
            k()
        }
    },
    z = {
        email: "loginEmail",
        username: "username",
        phone: "phone"
    },
    W = {
        email: "1",
        username: "4",
        phone: "2"
    };
    return {
        run: $,
        submit: X,
        submitCB: V,
        checkLoginEmail: x,
        checkUsername: C,
        checkPhone: L,
        checkSmsCode: k,
        loginEmailCallback: N,
        checkUsernameCallback: I,
        checkPhoneCallback: A,
        getSmsCode: U,
        showError: E,
        showCorrect: S,
        customError: p,
        rdCallBack: F,
        getCaptchaUrl: P,
        setPhrase: H
    }
} ();
var tipTextSetname = {
    username_short: "\u7528\u6237\u540d\u6700\u5c11\u4f7f\u75282\u4e2a\u5b57\u7b26\u6216\u6c49\u5b57",
    username_long: "\u7528\u6237\u540d\u4e0d\u8d85\u8fc77\u4e2a\u6c49\u5b57\u621614\u4e2a\u5b57\u7b26",
    username_chars: "\u7528\u6237\u540d\u4e0d\u80fd\u5305\u542b\u7279\u6b8a\u5b57\u7b26",
    username_empty: "\u8bf7\u8f93\u5165\u6709\u6548\u7684\u7528\u6237\u540d"
};
QHPass.mShowSetname = function(e, t) {
    t = t || {},
    QHPass.setnameUtils.run(e, t)
},
QHPass.setnameUtils = function() {
    function d(t, n, r) {
        QHPass.trace(t),
        o++;
        var s = QHPass.g(e.globalTips);
        s && (s.innerHTML = n, s.style.display = "block"),
        i && i({
            type: t,
            msg: n,
            extra: r
        }),
        clearTimeout(QHPass._timeoutHandler)
    }
    function v(t, n, r) {
        var i = QHPass.g(e.globalTips);
        i && (i.innerHTML = n, i.style.display = "none"),
        s && s({
            type: t,
            msg: n,
            extra: r
        })
    }
    function m(t) {
        var n = e.username,
        r = "username",
        i = QHPass.trim(QHPass.g(n).value),
        s = QHPass.byteLen(i),
        o = /^[0-9a-zA-Z\u4e00-\u9fa5_\.]*$/i,
        u = QHDomain.login_http + "/?op=checkuser&userName=" + encodeURIComponent(i) + "&r=" + Math.random();
        i ? 0 == o.test(i) ? d(r, tipTextSetname.username_chars) : s < 2 ? d(r, tipTextSetname.username_short) : s > 14 ? d(r, tipTextSetname.username_long) : t && QHPass.loadJsonp(u,
        function(e) {
            var t = decodeURIComponent(e.msg);
            0 == e.res ? (h && h(e), v("username", t, e.errno)) : d("username", t, {
                errno: e.errno,
                userInfo: e.userinfo
            })
        }) : d(r, tipTextSetname.username_empty)
    }
    function g() {
        o = 0,
        m(!1);
        if (o > 0) return;
        beforeFun && beforeFun(),
        QHPass._timeoutHandler = setTimeout(function() {
            l && l(),
            d("network", "\u7f51\u7edc\u8d85\u65f6~")
        },
        2e4);
        var t = {
            userName: QHPass.trim(QHPass.g(e.username).value),
            o: "User",
            m: "modifyUserName",
            from: n,
            crumb: u && u.crumb || "",
            charset: r,
            proxy: "http://" + location.host + "/psp_jump.html",
            callback: "parent.QHPass.setnameUtils.setnameCallback"
        };
        QHPass.CrossDomainRequest(QHDomain.login_http, t)
    }
    function y(e) {
        p && p();
        if (e.errno == 0) clearTimeout(QHPass._timeoutHandler),
        QHPass.execCallback(t);
        else {
            var n = decodeURIComponent(e.errmsg);
            d("username", n, e.errno)
        }
    }
    function b(o, f) {
        e = f.doms,
        t = o,
        n = f.src,
        r = f.postCharset,
        h = f.extFun.checkNameSucess,
        i = f.extFun.error,
        s = f.extFun.correct,
        a = f.extFun.init,
        l = f.extFun.httpTimeout,
        beforeFun = f.extFun.before,
        c = f.extFun.loading,
        p = f.extFun.after,
        a && a(),
        QHPass.getUserInfo(function(e) {
            u = e
        })
    }
    var e = {},
    t = null,
    n = "",
    r = "",
    i = null,
    s = null,
    o = 0,
    u = null,
    a = null,
    f = null,
    l = null,
    c = null,
    h = null,
    p = null;
    return QHPass._timeoutHandler = null,
    {
        run: b,
        submit: g,
        checkUsername: m,
        showError: d,
        showCorrect: v,
        setnameCallback: y
    }
} ();