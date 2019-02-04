function cansu(name){
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
var czname=cansu("type"),caizhong="",kaijiang=czname,qihaoid="",gp=1,dm="",tjies="",tcanyu="";
if(czname=="JsKs"){ caizhong="\u6c5f\u82cf\u5feb\u0033";dm=6;tjies=143;tcanyu=10;}
else if(czname=="JlKs"){ caizhong="\u5409\u6797\u5feb\u0033";dm=11;tjies=144;tcanyu=17;}
else if(czname=="AhKs"){ caizhong="\u5b89\u5fbd\u5feb\u0033";dm=12;tjies=145;tcanyu=18;}
else if(czname=="FjKs"){ caizhong="\u798f\u5efa\u5feb\u0033";dm=13;tjies=153;tcanyu=19;}
else if(czname=="NmKs"){ caizhong="\u5185\u8499\u5feb\u0033";dm=31;tjies=153;tcanyu=50;}
else if(czname=="GxKs"){ caizhong="\u5e7f\u897f\u5feb\u0033";dm=32;tjies=153;tcanyu=51;}
else if(czname=="HubKs"){ caizhong="\u6e56\u5317\u5feb\u0033";dm=33;tjies=153;tcanyu=52;}
else if(czname=="HebKs"){ caizhong="\u6cb3\u5317\u5feb\u0033";dm=34;tjies=153;tcanyu=53;}
else if(czname=="ShKs"){ caizhong="\u4e0a\u6d77\u5feb\u0033";dm=35;tjies=153;tcanyu=67;}
function kscaizhong(){  $("#kscz").html(caizhong+"-");
						document.getElementById("kjlianjie").href="/KaiJiang/caizhongkj.asp?caizhong="+dm;
						document.getElementById("goumailj").href="./goumai.asp?type="+czname;
						document.getElementById("tjies").href="/News/newsxq.asp?xq="+tjies;
						document.getElementById("tcanyu").href="/Trade/?type="+tcanyu;}
(function(e) {
    var t = e.$,
    n = e.kureicp;
    n.mobile.lotType = n.lottery.lotType.k3nm,
    n.mobile.price = n.lottery.price,
    n.mobile.kjfreq = 3e3,
    n.mobile.issuefreq = 3e3,
    n.mobile.getBounsTimer = null,
    n.mobile.first,
    n.mobile.getk3nmindexUrl_dev = "#",
    n.mobile.callbacks = function() {
        t("#pay").trigger(n.lottery.tap)
    },
    n.mobile.Config = {},
    n.mobile.singleScroll = function(e, t) {
        n.mobile.Config[e + "scroll"] && n.mobile.Config[e + "scroll"].destroy(),
        n.mobile.Config[e + "scroll"] = new iScroll(e, t)
    },
    n.mobile.initLayout = function(e) {
        var e = e,
        n = t("#myk3"),
        r = t("#game"),
        i = "btn-pop-on",
        s = e.attr("eq") || 0,
        o = "none";
        r.text(e.attr("k")),
        n.find(".btn-pop").removeClass(i),
        e.find(".btn-pop").addClass(i),
        t(".head-arr").removeClass("head-arron"),
        n.addClass(o),
        t("#curInfo").removeClass("mod-kj-show"),
        t("#result").css("height", 0),
        t("#k3bar").find("li").eq(s).trigger("click")
    },
    n.mobile.buildAbacusScroll = function() {
        n.mobile.touchSlider = new t.touchSlider("#k3_manual", {
            wrap: "#k3abacus",
            trigger: "#k3bar",
            duration: 500,
            len: 4,
            activeTriggerCls: "on",
            callback: function() {
                var e = t("#game"),
                n = t("#k3bar").find(".on"),
                r = t("#myk3"),
                i = {
                    a: n.attr("rel"),
                    b: n.attr("k")
                },
                s = r.find("li[rel='" + i.a + "']").find(".btn-pop"),
                o = r.find(".btn-pop");
                o.removeClass("btn-pop-on"),
                s.addClass("btn-pop-on"),
                e.text(i.b)
            }
        })
    },
    n.mobile.AsynDownData = function() {
        var e = t("#setting"),
        r = t("#kjlist");/*
        t.ajax({
            url: n.mobile.getk3nmindexUrl_dev + "?r=" + t.now(),
            dataType: "json",
            timeout: 2e4,
            success: function(i) {
                var s = i.info;
                e.attr({
                    endtime: s.EndTime,
                    prevtime: s.DsTimeSpace,
                    issale: s.IsOpen
                }),
                n.mobile.distance = s.issue,
                n.mobile.countDownInit(s.EndTime, s.DsTimeSpace);
                var u = i.blist,
                a, f, l, c, h = [],
                p;
                for (var d = 0; d < u.length; d++) c = u[d].issue,
                f = c.replace(/^\d{8}/g, "") * 1,
                a = n.mobile.distance.replace(/^\d{8}/g, "") * 1,
                f = f = f < 10 ? "0" + f: f,
                l = u[d].number,
                a = a = a < 10 ? "0" + a: a,
                p = n.mobile.dealK3number(l),
                d === 0 ? (n.mobile.first = c, t("#fq1").text(f), t("#fq2").text(a), t("#fq3").text(p[0].join(" ")), t("#myluck").html('<span class="k3-num-m k3-num-m-' + p[0][0] + '"></span> <span class="k3-num-m k3-num-m-' + p[0][1] + '"></span> <span class="k3-num-m k3-num-m-' + p[0][2] + '"></span>')) : h.push("<tr><td>" + f + '\u671f</td><td><span><span class="k3-num-s k3-num-s-' + p[0][0] + '"></span><span class="k3-num-s k3-num-s-' + p[0][1] + '"></span><span class="k3-num-s k3-num-s-' + p[0][2] + '"></span><span class="num">' + p[0][0] + " " + p[0][1] + " " + p[0][2] + "</span></span></td><td>" + p[1] + "</td><td>" + p[3] + "</td></tr>");
                r.html(h.join(""))
            },
            error: function() {
                n.mobile.AsynDownData()
            }
        })*/
    },
    n.mobile.stopGo = function() {
        n.lightBox.alert({
            content: '<p class="msg">\u8be5\u5f69\u7968\u6682\u505c\u9500\u552e\uff01<br>\u597d\u8fd0\u5feb3\u6b63\u5728\u70ed\u5356\u4e2d,\u53bb\u8bd5\u8bd5\u624b\u6c14\u5427\uff1f</p>',
            ensure: "\u53bb\u6295\u6ce8",
            confirmFn: function() {
                e.location.href = "#"
            }
        })
    },
    n.mobile.dealK3number = function(e) {
        var t = e.replace(/\s+/g, "").split(""),
        n,
        r,
        i = "",
        s = +t[0],
        o = +t[1],
        u = +t[2];
        return t.sort(),
        n = s + o + u,
        n > 10 ? i += "\u5927": i += "\u5c0f",
        n % 2 == 0 ? i += "\u53cc": i += "\u5355",
        u - o == 1 && o - s == 1 ? r = "\u4e09\u8fde\u53f7": u != o && o != s && u != s ? r = "\u4e09\u4e0d\u540c": s == o && s == u && o == u ? r = "\u4e09\u540c\u53f7": r = "\u4e8c\u540c\u53f7",
        [t, n, i, r]
    },
    n.mobile.animateScroll = function(e, t) {
        var n = parseInt(document.body.scrollTop),
        r = 0,
        i = 5;
        e = parseInt(e),
        t /= i;
        var s = setInterval(function() {
            r++,
            document.body.scrollTop = (e - n) / t * r + n,
            r >= t && clearInterval(s)
        },
        i)
    },
    n.mobile.selectCodeInit = function() {
        n.mobile.buildAbacusScroll(),
        t.os.ios || t.browser.uc ? (t("#fixed").remove(), n.mobile.animateScroll("45px", 240)) : t("#assist").addClass("fixfixed"),
        t(document.body).on(n.lottery.tap,
        function(e) {
            setTimeout(function() {
                var r = n.lottery.getActionTarget(e, -1, "cmd", null),
                i = "none",
                s = t("#myk3"),
                o = t("#tools"),
                u = t(".btn-menu"),
                a = t(".head-arr");
                r || (u.removeClass("btn-menu-on"), a.removeClass("head-arron"), s.addClass(i), o.addClass(i))
            },
            80)
        }),
        t("#k3abacus").on(n.lottery.tap, "td",
        function() {
            var e = t(this);
            e.toggleClass("on"),
            n.mobile.count()
        }),
        t("#pay").on(n.lottery.tap,
        function() {
            var e = +t("#count").text(),
            r = +t("#price").text(),
            i = t(this);
            if (i.hasClass("disabled")) return ! 1;
            if (!localStorage["storage255803mul"]||!localStorage["storage255803"]||localStorage["storage255803mul"]==""||localStorage["storage255803"]==""){
			if(!e){return n.lottery.alert("\u8bf7\u81f3\u5c11\u9009\u62e9\u4e00\u6ce8"),!1;}}		
			 if(e){
				var panduan=$("#game").html(),beishu=$("#bei").html(),qishu=$("#zh").html(),zhushu=$("#count").html(),sumcodes="";
				if(panduan=="\u548c\u503c/\u4e09\u540c\u53f7"||1)            //三同号
				{ 
						var codes1="",codes="",objTable=document.getElementById("table1");if(objTable){
						 for(var i=0;i<objTable.rows.length;i++){
							for(var j=0;j<objTable.rows[i].cells.length;j++)
							{if(objTable.rows[i].cells[j].className=="on"){	
									switch(i){
										case 0:{switch(j){case 0:{codes=3;break;}case 1:{codes=4;break;}case 2:{codes=5;break;}case 3:{codes=6;break;}}break;}
										case 1:{switch(j){case 0:{codes=7;break;}case 1:{codes=8;break;}case 2:{codes=9;break;}case 3:{codes=10;break;}}break;}
										case 2:{switch(j){case 0:{codes=11;break;}case 1:{codes=12;break;}case 2:{codes=13;break;}case 3:{codes=14;break;}}break;}	
										case 3:{switch(j){case 0:{codes=15;break;}case 1:{codes=16;break;}case 2:{codes=17;break;}case 3:{codes=18;break;}}break;}
										case 4:{switch(j){case 0:{codes='\u5927';break;}case 1:{codes='\u5c0f';break;}case 2:{codes='\u5355';break;}case 3:{codes='\u53cc';break;}}break;}}
									var yls = i == 4 ? 'DXDS' : 'HSZ'
									if(codes1!="") codes1=codes1+"$"+yls+"|"+codes;else codes1=codes1+yls+"|"+codes;}}}}			
					  var codes2="",codes3="",objTable=document.getElementById("table2");if(objTable){
						 for(var i=0;i<objTable.rows.length;i++){
							for(var j=0;j<objTable.rows[i].cells.length;j++){
								if(objTable.rows[i].cells[j].className=="on"){	
									switch(i){
										case 0:{switch(j){case 0:{codes2=111;break;}case 1:{codes2=222;break;}case 2:{codes2=333;break;}}break;}
										case 1:{switch(j){case 0:{codes2=444;break;}case 1:{codes2=555;	break;}case 2:{codes2=666;break;}}break;}}
									if(codes3!="")codes3=codes3+"$"+"3TD|"+codes2; else codes3=codes3+"3TD|"+codes2;}}}}
					  var tongxuan=document.getElementById("table3").className,tongxuan1="";
					  if(tongxuan=="on"){for(var i=1;i<7;i++){if(tongxuan1!="") tongxuan1=tongxuan1+"*"+i+i+i; else tongxuan1=tongxuan1+i+i+i;}}
					  if(tongxuan1!="") tongxuan1="3TT|"+tongxuan1;	
					   if(codes3==""&&tongxuan1==""||codes1==""&&tongxuan1==""||codes1==""&&codes3=="")
					   if(sumcodes!=""&&codes1!=""&&codes3!=""&&tongxuan1!="") sumcodes+="$"+codes1+codes3+tongxuan1;else sumcodes+=codes1+codes3+tongxuan1;
						 else if(codes3==""&&tongxuan1!=""||codes=="")
						 if(sumcodes!=""&&codes1!=""&&codes3!=""&&tongxuan1!="") sumcodes+="$"+codes1+codes3+"$"+tongxuan1;else sumcodes+=codes1+codes3+"$"+tongxuan1;
						 else if(codes3!=""&&tongxuan1=="")
						 if(sumcodes!=""&&codes1!=""&&codes3!=""&&tongxuan1!="") sumcodes+="$"+codes1+"$"+codes3+tongxuan1;else sumcodes+=codes1+"$"+codes3+tongxuan1;	
						 else if(sumcodes!=""&&codes1!=""&&codes3!=""&&tongxuan1!="") sumcodes+="$"+codes1+"$"+codes3+"$"+tongxuan1; else sumcodes+=codes1+"$"+codes3+"$"+tongxuan1;			
				}
				if(panduan=="\u4e09\u4e0d\u540c\u53f7"||1)   //三不同号
				{
					var codes1="",codes="",objTable=document.getElementById("butongtable"),tongxuan1="";if(objTable){for(var i=0;i<objTable.rows.length;i++){
							for(var j=0;j<objTable.rows[i].cells.length;j++){
								if(objTable.rows[i].cells[j].className=="on"){switch(i)
									{
case 0:{switch(j){case 0:{codes=1+","+2+","+3;break;}case 1:{codes=1+","+2+","+4;break;}case 2:{codes=1+","+2+","+5;break;}case 3:{codes=1+","+2+","+6;break;}case 4:{codes=1+","+3+","+4;break;}}break;}
case 1:{switch(j){case 0:{codes=1+","+3+","+5;break;}case 1:{codes=1+","+3+","+6;break;}case 2:{codes=1+","+4+","+5;break;}case 3:{codes=1+","+4+","+6;break;}case 4:{codes=1+","+5+","+6;break;}}break;}
case 2:{switch(j){case 0:{codes=2+","+3+","+4;break;}case 1:{codes=2+","+3+","+5;break;}case 2:{codes=2+","+3+","+6;break;}case 3:{codes=2+","+4+","+5;break;}case 4:{codes=2+","+4+","+6;break;}}break;}
case 3:{switch(j){case 0:{codes=2+","+5+","+6;break;}case 1:{codes=3+","+4+","+5;break;}case 2:{codes=3+","+4+","+6;break;}case 3:{codes=3+","+5+","+6;break;}case 4:{codes=4+","+5+","+6;break;}}break;}}
							if(codes1=="") codes1=codes1+"3BT|"+codes;else codes1=codes1+"$"+"3BT|"+codes;}}}}
							var tongxuan=document.getElementById("butongtx").className
							if(tongxuan=="on"){tongxuan1="123"+"*"+234+"*"+345+"*"+456;tongxuan1="3LT|"+tongxuan1}
							if(sumcodes!=""&&tongxuan1!=""&&codes1!="") sumcodes+="$"+codes1+"$"+tongxuan1;
							else if(sumcodes==""&&tongxuan1!=""&&codes1!="") sumcodes+=codes1+"$"+tongxuan1;
							else if(sumcodes==""&&tongxuan1!=""&&codes1=="") sumcodes+=codes1+tongxuan1;
							else if(sumcodes==""&&tongxuan1==""&&codes1!="") sumcodes+=codes1+tongxuan1;
							else if(sumcodes!=""&&tongxuan1==""&&codes1=="") sumcodes+=codes1+tongxuan1;
							else if(sumcodes!=""&&tongxuan1==""&&codes1!="") sumcodes+="$"+codes1+tongxuan1;
							else if(sumcodes!=""&&tongxuan1!=""&&codes1=="") sumcodes+="$"+codes1+tongxuan1;					
				}
				if(panduan=="\u4e8c\u540c\u53f7"||1)         //二同号
				{
					var codes1="",codes="",objTable=document.getElementById("erbutong"),tongxuan1="";
					if(objTable){
						 for(var i=0;i<objTable.rows.length;i++){
							for(var j=0;j<objTable.rows[i].cells.length;j++){
								if(objTable.rows[i].cells[j].className=="on"){	
									switch(i){
case 0:{switch(j){case 0:{codes=11+"*"+2;break;}case 1:{codes=11+"*"+3;break;}case 2:{codes=11+"*"+4;break;}case 3:{codes=11+"*"+5;break;}case 4:{codes=11+"*"+6;break;}}break;}
case 1:{switch(j){case 0:{codes=1+"*"+22;break;}case 1:{codes=22+"*"+3;break;}case 2:{codes=22+"*"+4;break;}case 3:{codes=22+"*"+5;break;}case 4:{codes=22+"*"+6;break;}}break;}
case 2:{switch(j){case 0:{codes=1+"*"+33;break;}case 1:{codes=2+"*"+33;break;}case 2:{codes=33+"*"+4;break;}case 3:{codes=33+"*"+5;break;}case 4:{codes=33+"*"+6;break;}}break;}
case 3:{switch(j){case 0:{codes=1+"*"+44;break;}case 1:{codes=2+"*"+44;break;}case 2:{codes=3+"*"+44;break;}case 3:{codes=44+"*"+5;break;}case 4:{codes=44+"*"+6;break;}}break;}
case 4:{switch(j){case 0:{codes=1+"*"+55;break;}case 1:{codes=2+"*"+55;break;}case 2:{codes=3+"*"+55;break;}case 3:{codes=4+"*"+55;break;}case 4:{codes=55+"*"+6;break;}}break;}
case 5:{switch(j){case 0:{codes=1+"*"+66;break;}case 1:{codes=2+"*"+66;break;}case 2:{codes=3+"*"+66;break;}case 3:{codes=4+"*"+66;break;}case 4:{codes=5+"*"+66;break;}}break;}}
								if(codes1=="") codes1=codes1+"2TD|"+codes;else codes1=codes1+"$"+"2TD|"+codes;}}}}
								if(sumcodes!=""&&codes1!="") sumcodes+="$"+codes1;
								else if(sumcodes!=""&&codes1=="") sumcodes+=codes1;
								else if(sumcodes==""&&codes1!="") sumcodes+=codes1;
				}
				
				if(panduan=="\u4e8c\u4e0d\u540c\u53f7"||1)       //二不同号
				{
					var codes1="",codes="",objTable=document.getElementById("ertong");
					if(objTable)
					{
						 for(var i=0;i<objTable.rows.length;i++){
							for(var j=0;j<objTable.rows[i].cells.length;j++){
								if(objTable.rows[i].cells[j].className=="on"){	
									switch(i)
									{
case 0:{switch(j){case 0:{codes=1+","+2;break;}case 1:{codes=1+","+3;break;}case 2:{codes=1+","+4;break;}case 3:{codes=1+","+5;break;}case 4:{codes=1+","+6;break;}}break;}
case 1:{switch(j){case 0:{codes=2+","+3;break;}case 1:{codes=2+","+4;break;}case 2:{codes=2+","+5;break;}case 3:{codes=2+","+6;break;}case 4:{codes=3+","+4;break;}}break;}
case 2:{switch(j){case 0:{codes=3+","+5;break;}case 1:{codes=3+","+6;break;}case 2:{codes=4+","+5;break;}case 3:{codes=4+","+6;break;}case 4:{codes=5+","+6;break;}}break;}	
									}
									if(codes1=="") codes1=codes1+"2BT|"+codes;else codes1=codes1+"$"+"2BT|"+codes;}}}}
					var objTable=document.getElementById("tonghaofx"),tonghaofx="",tonghaofx1="";
					if(objTable)
					{
						 for(var i=0;i<objTable.rows.length;i++){
							for(var j=0;j<objTable.rows[i].cells.length;j++){
								if(objTable.rows[i].cells[j].className=="on"){	
									switch(j){case 0:{tonghaofx="11*";break;}case 1:{tonghaofx="22*";break;}case 2:{tonghaofx="33*";break;}	
									case 3:{tonghaofx="44*";break;}	case 4:{tonghaofx="55*";break;}	case 5:{tonghaofx="66*";break;}}
								if(tonghaofx1!="") tonghaofx1=tonghaofx1+"$"+"2BT|"+tonghaofx;else tonghaofx1=tonghaofx1+"2BT|"+tonghaofx;}}}}
				    if(sumcodes!=""&&codes1!=""&&tonghaofx1!="") sumcodes+="$"+codes1+"$"+tonghaofx1;
					else if(sumcodes!=""&&codes1==""&&tonghaofx1!="") sumcodes+=codes1+"$"+tonghaofx1;
					else if(sumcodes!=""&&codes1!=""&&tonghaofx1=="") sumcodes+="$"+codes1+tonghaofx1;
					else if(sumcodes==""&&codes1==""&&tonghaofx1!="") sumcodes+=codes1+tonghaofx1;
					else if(sumcodes==""&&codes1!=""&&tonghaofx1=="") sumcodes+=codes1+tonghaofx1;
					else if(sumcodes==""&&codes1!=""&&tonghaofx1!="") sumcodes+=codes1+"$"+tonghaofx1;
				}
				if(localStorage["storage255803"])
				 	localStorage["storage255803"]=localStorage["storage255803"]+"$"+sumcodes;
				else
					localStorage.setItem("storage255803",sumcodes);
				if(localStorage["storage255803mul"])
				 	localStorage["storage255803mul"]=parseInt(localStorage["storage255803mul"])+parseInt(zhushu);
				else
					localStorage.setItem("storage255803mul",parseInt(zhushu));
			if(localStorage["storage255803"].indexOf("$")!=0&&localStorage["storage255803"].indexOf("$")!="0")
					localStorage["storage255803"]="$"+localStorage["storage255803"];
			}
			location.href = "./goumai.asp?type="+czname;	
			return;
            var s = "",
            o = t("#k3abacus").find(".on");
            t.each(o,
            function(e, n) {
                var r = t(n).find("span"),
                i = r.attr("pt"),
                o = r.attr("data");
                s += i + "|" + o + ";"
            });
            var u = {
                BetType: "bet",
                BetCodes: s.replace(/^;|;$/g, ""),
                LotID: n.mobile.lotType,
                OneMoney: 2,
                BetPageID: "2001",
                DrawNo: n.mobile.distance
            };
            apMul = +t("#apMul").val(),
            apNum = +t("#apNum").val(),
            stopbuy = "0",
            overMoney = r > n.mobile.maxMoney;
            if (overMoney) return n.lottery.alert("\u6295\u6ce8\u91d1\u989d\u4e0d\u80fd\u8d85\u8fc7" + n.mobile.maxMoney / 1e4 + "\u4e07\uff01"),
            !1;
            apNum === 1 ? (u.BetMoney = r, u.BetMulti = apMul) : (u.BetType = "trc", u.BetMulti = apMul, u.ChipCount = e, u.ChipMoney = e * 2, u.TraceCount = apNum, u.TotalMoney = r, u.StopBonus = stopbuy),
            n.lottery.ajaxData(u,
            function() {
                n.mobile.callbacks()
            })
        }),
        t(".ipt-6").on({
            blur: function() {
                var e = t(this),
                r = /[^\d]|^0/g,
                i = e.attr("max") * 1 || 1e5,
                s = e.attr("default") || 1,
                o = e.val().replace(r, "") || s;
                e.val(o),
                n.mobile.count()
            },
            keyup: function() {
                var e = t(this),
                r = /[^\d]|^0/g,
                i = e.val().replace(r, "");
                e.val(i),
                n.mobile.count()

            }
        }),
        t("#curInfo").on(n.lottery.tap,
        function() {
            var e = t(this),
            n = t("#result"),
            r = t("#curInfo"),
            i = "mod-kj-show",
            s = e.hasClass(i),
            o;
            s ? o = 0 : o = 166,
            n.animate({
                height: o + "px"
            },
            300, "ease",
            function() {
                s ? e.removeClass(i) : e.addClass(i)
            })
        }),
        t("#myk3").on("click", "li",
        function() {
            var e = t(this);
            n.mobile.initLayout.call(null, e)
        }),
        t(".k3nav").on(n.lottery.tap,
        function() {
            var e = t(".head-arr"),
            r = t("#myk3"),
            i = "head-arron",
            s = t(".btn-menu"),
            o = "btn-menu-on",
            u = "none";
            s.hasClass(o) && s.trigger(n.lottery.tap),
            e.hasClass(i) ? (e.removeClass(i), r.addClass(u)) : (e.addClass(i), r.removeClass(u))
        }),
        t(".btn-menu").on(n.lottery.tap,
        function() {
            var e = t("#tools"),
            r = t("#myk3"),
            i = t(".k3nav"),
            s = t(this),
            o = "btn-menu-on",
            u = "none";
            r.hasClass(u) || i.trigger(n.lottery.tap),
            s.hasClass(o) ? (e.addClass(u), s.removeClass(o)) : (e.removeClass(u), s.addClass(o))
        })
    },
    n.mobile.getBouns = function(e) {
        t.ajax({
            url: "/int/getkpkjcode?lotid=" + n.mobile.lotType + "&issue=" + e + "&r=" + t.now(),
            dataType: "json",
            success: function(r) {
                var i, r = r[0];
                if (r.issue == e && r.code) {
                    var s = n.mobile.dealK3number(r.code);
                    t("#fq3").text(s[0].join(" ")),
                    t("#myluck").html('<span class="k3-num-m k3-num-m-' + s[0][0] + '"></span> <span class="k3-num-m k3-num-m-' + s[0][1] + '"></span> <span class="k3-num-m k3-num-m-' + s[0][2] + '"></span>'),
                    n.mobile.first = e
                } else clearTimeout(n.mobile.getBounsTimer),
                n.mobile.getBounsTimer = setTimeout(function() {
                    n.mobile.getBouns(e)
                },
                n.mobile.kjfreq)
            }
        })
    },
    n.mobile.dealActsue = function(e) {
        var r = e.Issue,
        i = n.mobile.distance,
        s = i.replace(/^\d{8}/g, "") * 1,
        o = t("#setting"),
        u = t("#fq3"),
        a = t("#kjlist");
        n.mobile.distance = r;
        var f = n.mobile.distance.replace(/^\d{8}/g, "") * 1;
        f = f = f < 10 ? "0" + f: f,
        o.attr("issale", e.IsOpen);
        var l = n.mobile.dealK3number(t("#fq3").text());
        a.prepend("<tr><td>" + t("#fq1").text() + '\u671f</td><td><span><span class="k3-num-s k3-num-s-' + l[0][0] + '"></span><span class="k3-num-s k3-num-s-' + l[0][1] + '"></span><span class="k3-num-s k3-num-s-' + l[0][2] + '"></span><span class="num">' + l[0][0] + " " + l[0][1] + " " + l[0][2] + "</span></span></td><td>" + l[1] + "</td><td>" + l[3] + "</td></tr>"),
        a.find("tr").last().remove(),
        t("#fq1").text(s = s < 10 ? "0" + s: s),
        t("#fq2").text(f),
        u.text("\u5f00\u5956\u4e2d..."),
        t("#myluck").html('<span class="k3-num-m k3-num-m-7"></span> <span class="k3-num-m k3-num-m-7"></span> <span class="k3-num-m k3-num-m-7"></span>'),
        t("#pay").removeClass("disabled").text("\u7acb\u5373\u4ed8\u6b3e"),
        n.mobile.countDownInit(e.EndTime, e.FsTimeSpace),
        n.mobile.getBouns(i)
    },
    n.mobile.checkIssue = function(e) {
        var t = e.Issue == n.mobile.distance;
        return ! t
    },
    n.mobile.getActIssue = function(e) {
        var r = n.mobile.issuefreq || 5e3;
        t.ajax({
            url: "/int/qcurissue?LotID=" + e + "&r=" + t.now(),
            dataType: "json",
            error: function() {
                setTimeout(function() {
                    n.mobile.getActIssue.call(null, e)
                },
                r)
            },
            success: function(t) {
                n.mobile.checkIssue(t) ? n.mobile.dealActsue(t) : setTimeout(function() {
                    n.mobile.getActIssue.call(null, e)
                },
                r)
            }
        })
    },
    n.mobile.countDownInit = function(e, r) {
        var i = t("#setting"),
        s = +i.attr("issale"),
        o = t("#friends"),
        u = n.mobile.distance.replace(/^\d{8}/g, "") * 1,
        a = t("#pay");
        u = u = u < 10 ? "0" + u: u,
        s ? (o.html('\u8ddd<em id="fq2">' + u + "</em>\u671f\u622a\u6b62\u8fd8\u6709"), n.countdown.start({
            endTime: e * 1 - r * 1,
            sid: "#countdown",
            style: "hh\u65f6mm\u5206ss\u79d2",
            freq: 1e4,
            filter: function(e) {
                return e.replace(/^(00\u65f6)/g, "").replace(/^(00\u5206)/g, "")
            },
            callback: function() {
                s ? (o.html('\u8ddd<em id="fq2">' + u + "</em>\u671f\u5f00\u5956\u8fd8\u6709"), a.addClass("disabled").text("\u7b49\u5f85\u5f00\u5956"), n.countdown.start({
                    endTime: e * 1,
                    sid: "#countdown",
                    freq: 1e4,
                    endStyle: "\u6b63\u5728\u83b7\u53d6\u4e0b\u4e00\u671f",
                    style: "hh\u65f6mm\u5206ss\u79d2",
                    filter: function(e) {
                        return e.replace(/^(00\u65f6)/g, "").replace(/^(00\u5206)/g, "")
                    },
                    callback: function() {
                        o.html(""),
                        n.mobile.getActIssue(n.mobile.lotType)
                    }
                })) : o.html("\u6682\u505c\u9500\u552e")
            }
        })) : o.html("\u6682\u505c\u9500\u552e")
    },
    n.mobile.count = function() {
        var e = t("#count"),
        n = t("#price"),
        r = t("#apMul"),
        i = t("#apNum"),
        s = t("#zh"),
        o = t("#bei"),
        u = t("#k3abacus"),
        a = u.find(".on").length,
        f = +i.val(),
        l = +r.val();
        e.text(a),
        s.text(f),
        o.text(l),
        n.text(a * f * l * 2)
    },
    t(function() {
        n.mobile.AsynDownData(),
        n.mobile.selectCodeInit()
    })
	t.ajax({
	  url:"/Trade/Include/GetMoney.asp?"+Math.random(),
	  type:"post",
	  dataType:"json",
	  success:function(data){
		objTable=document.getElementById("table1");
		if(!objTable) return ;
		 for(var i=0;i<objTable.rows.length;i++){
			for(var j=0;j<objTable.rows[i].cells.length;j++){
			   var target = objTable.rows[i].cells[j];
			   var index = target.querySelector("span").getAttribute("data");
			   var p = target.querySelector("p");
			   p.innerHTML = "\u4e2d"+data[index]+"\u5f69\u8c46";	
			}
		 }
	  },
	  error:function(){
	    console.log('error');
	  }
	})
})(window);