! function(e, t, i, n, a) {
	var o = t.support.touch ? "tap" : "click",
		l = n.jczq.core;
	var s = {
			teamData: {
				spf: [
					["blockWin", "胜", "3"],
					["blockPing", "平", "1"],
					["blockFu", "负", "0"]
				],
				rfspf: [
					["blockWin", "让球胜", "10003"],
					["blockPing", "让球平", "10001"],
					["blockFu", "让球负", "10000"]
				],
				bf: [
					["blockYel", "1:0", "10"],
					["blockYel", "2:0", "20"],
					["blockYel", "2:1", "21"],
					["blockYel", "3:0", "30"],
					["blockYel", "3:1", "31"],
					["blockYel", "3:2", "32"],
					["blockYel", "4:0", "40"],
					["blockYel", "4:1", "41"],
					["blockYel", "4:2", "42"],
					["blockYel", "5:0", "50"],
					["blockYel", "5:1", "51"],
					["blockYel", "5:2", "52"],
					["blockYel", "胜其他", "90"],
					["blockYel", "0:0", "00"],
					["blockYel", "1:1", "11"],
					["blockYel", "2:2", "22"],
					["blockYel", "3:3", "33"],
					["blockYel", "平其他", "99"],
					["blockYel", "0:1", "01"],
					["blockYel", "0:2", "02"],
					["blockYel", "1:2", "12"],
					["blockYel", "0:3", "03"],
					["blockYel", "1:3", "13"],
					["blockYel", "2:3", "23"],
					["blockYel", "0:4", "04"],
					["blockYel", "1:4", "14"],
					["blockYel", "2:4", "24"],
					["blockYel", "0:5", "05"],
					["blockYel", "1:5", "15"],
					["blockYel", "2:5", "25"],
					["blockYel", "负其他", "09"]
				],
				zjq: [
					["blockYel", "0", "100"],
					["blockYel", "1", "101"],
					["blockYel", "2", "102"],
					["blockYel", "3", "103"],
					["blockYel", "4", "104"],
					["blockYel", "5", "105"],
					["blockYel", "6", "106"],
					["blockYel", "7+", "107"]
				],
				bqc: [
					["blockYel", "胜胜", "1033"],
					["blockYel", "胜平", "1031"],
					["blockYel", "胜负", "1030"],
					["blockYel", "平胜", "1013"],
					["blockYel", "平平", "1011"],
					["blockYel", "平负", "1010"],
					["blockYel", "负胜", "1003"],
					["blockYel", "负平", "1001"],
					["blockYel", "负负", "1000"]
				]
			},
			init: function() {
				var e = this;
				e.gameChange();
				t.bindMsg("loadData", function(t) {
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
					s, c = i.find(".leftArrow"),
					r = i.find(".rightArrow"),
					h, f = Math.min(e.innerWidth, e.clientWidth),
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
					i.delegate(".leftArrow", o, function() {
						s.prev()
					}).delegate(".rightArrow", o, function() {
						s.next()
					});
					this.navScroll.on("scrollEnd", function() {
						var e = this.x;
						e = Math.abs(e);
						c.add(r).hide();
						if (e > 0) c.show();
						if (e < h - f) r.show()
					});
					this.navScroll.scrollToElement(l.filter(".active")[0], 0)
				}, 200);
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
						}, d)
					},
					f = function() {
						var e = 0;
						t.each(s, function(t, i) {
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
						t.each(a, function(a, o) {
							i[a] = [];
							t.each(o.game, function(t, o) {
								var l = e[n[t].leagueId] || {};
								if (l.checked) i[a].push(n[t])
							})
						});
						return i
					};
				filterDateTitle = function() {
					var e = c.cache.gameDateInfo,
						i = m(n);
					t.each(i, function(t, i) {
						var n = e[t] || {};
						var a = n.gameTitle;
						var o = i.length;
						if (o > 0) a && a.show().find(".date-num").text(o);
						else a && a.hide()
					})
				}, initDOM = function() {
					t.each(s, function(e, t) {
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
					e.find(".filter-tab").on(o, "span", function() {
						var e = this.getAttribute("class");
						if ("all" == e) t.each(n, function(e, t) {
							if (!t.checked) {
								t.checked = true;
								t.elem.addClass("active")
							}
						});
						else if ("revert" == e) t.each(n, function(e, t) {
							t.checked = !t.checked;
							t.elem.toggleClass("active")
						});
						else if ("fiveLeague" == e) t.each(n, function(e, i) {
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
					e.find(".league-list").on(o, "li", function() {
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
					i.find(".league-filter-ico").on(o, function() {
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
				r[0] && r[0].addEventListener("touchstart", function(e) {
					e.preventDefault()
				}, false);
				r.delegate(".match-divider", o, function() {
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
					t(".dgCheck", e).on(o, function() {
						if (n.hasClass("markHL")) {
							n.removeClass("markHL");
							LS.set("isDgMarkHL", 0)
						} else {
							n.addClass("markHL");
							LS.set("isDgMarkHL", 1)
						}
					});
					t(".chelp", e).on(o, function() {
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
					a, l = i.betArea.cache.gameInfo,
					s, c, r, h, f;
				n.delegate(".league-nd-time", o, function() {
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
							payUrl: "/trade/jczq/req.html"
						},
						init: function() {
							var i = function() {
								e.setTimeout(function() {
									if (d[0].scrollIntoView) d[0].scrollIntoView()
								}, 210)
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
							h.delegate(".close-icon", "click", function(e) {
								y.hide();
								if($(".chk-hm").hasClass('chk-hm-hover')) $(".chk-hm").click();
							}).delegate(".method", o, function(e) {
								var i = t(this),
									n, a = [];
								i.toggleClass("active");
								n = h.find(".methods-wrap .active");
								n.each(function() {
									var e = this.getAttribute("data-method");
									if (e) a.push(e)
								});
								r.setMethod(a);
								M()
							}).delegate(".method-option", "click", function(e) {
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
							e = r.get().selectMethod, n = r.get().currentMethod;
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
							h = l.getTotalNum(e, a, {}, o, c)[0] || 0;
							b.html(h * f * 2);
							i.loadCdnJS("/js2/sportGame2/bonus/com/jczqBonus.js", function() {
								return !!(n.jczq && n.jczq.getMaxBound)
							}, function() {
								var i = l.formatGameInfo(t, a, {}, s.config.teamData),
									o, c = 0,
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
								} catch (h) {
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
							var recode = function(ccode){
								//201603152003:3.1.0.10003.10001.10000:0 201603152021:3.1.0.10003.10001.10000:0 201603163001:3.1.0.10003.10001.10000:0
								
								var db = {
									"3":["1","spf","胜"],
									"1":["0","spf","平"],
									"0":["-1","spf","负"],

									"10003":["1","rfspf","让球胜"],
									"10001":["0","rfspf","让球平"],
									"10000":["-1","rfspf","让球负"],

									"1033":["1:1","bqc","胜胜"],
									"1031":["1:0","bqc","胜平"],
									"1030":["1:-1","bqc","胜负"],
									"1013":["0:1","bqc","平胜"],
									"1011":["0:0","bqc","平平"],
									"1010":["0:-1","bqc","平负"],
									"1003":["-1:1","bqc","负胜"],
									"1001":["-1:0","bqc","负平"],
									"1000":["-1:-1","bqc","负负"],

									"10":["1:0","bf","1:0"],
									"20":["2:0","bf","2:0"],
									"21":["2:1","bf","2:1"],
									"30":["3:0","bf","3:0"],
									"31":["3:1","bf","3:1"],
									"32":["3:2","bf","3:2"],
									"40":["4:0","bf","4:0"],
									"41":["4:1","bf","4:1"],
									"42":["4:2","bf","4:2"],
									"50":["5:0","bf","5:0"],
									"51":["5:1","bf","5:1"],
									"52":["5:2","bf","5:2"],
									"90":["1","bf","胜其他"],
									"00":["0:0","bf","0:0"],
									"11":["1:1","bf","1:1"],
									"22":["2:2","bf","2:2"],
									"33":["3:3","bf","3:3"],
									"99":["0","bf","平其他"],
									"01":["0:1","bf","0:1"],
									"02":["0:2","bf","0:2"],
									"12":["1:2","bf","1:2"],
									"03":["0:3","bf","0:3"],
									"13":["1:3","bf","1:3"],
									"23":["2:3","bf","2:3"],
									"04":["0:4","bf","0:4"],
									"14":["1:4","bf","1:4"],
									"24":["2:4","bf","2:4"],
									"05":["0:5","bf","0:5"],
									"15":["1:5","bf","1:5"],
									"25":["2:5","bf","2:5"],
									"09":["-1","bf","负其他"],

									"100":["0","zjq","0"],
									"101":["1","zjq","1"],
									"102":["2","zjq","2"],
									"103":["3","zjq","3"],
									"104":["4","zjq","4"],
									"105":["5","zjq","5"],
									"106":["6","zjq","6"],
									"107":["7+","zjq","7+"]
								}

								var code = {dan:[],code:[""]};
								var c = ccode.split(" ");
								for (var i = 0; i < c.length; i++) {
									var d = c[i].split(":");
									var e = d[1].split(".");
									var f = {"spf":[],"rfspf":[],"bqc":[],"bf":[],"zjq":[]};
									for (var i2 = 0; i2 < e.length; i2++) {
										var tp = db[e[i2]][1],val = db[e[i2]][0];
										f[tp].push(val);
									};
									f.lid = d[0];
									code.code.push(f.lid+"~"+f.spf+"~"+f.rfspf+"~"+f.bqc+"~"+f.bf+"~"+f.zjq);
								}
								var ord = ["spf","rfspf","bac","bf","zjq"];
								return code.code.join("|");
							};
							p.on("click", function() {
								if (a) return;
								e.setTimeout(function() {
									a = false
								}, 3e3);
								var o = r.serialize();
								if (!o) {
									t.alert("请选择过关方式");
									return
								}
								var hmData = {
									hm:$(".chk-hm").hasClass('chk-hm-hover') ? 1 : 0,
									my:$("#hm_my").val(),
									tc:$("#hm_tc").text(),
									bd:$("#hm_bd").val()
								}
								t.ajax({
									type:"POST",
									url:"/trade/jczq/req.html",
									data:{code: recode(s.serialize()),
										play: o,
										type: n.gameEn || 0,
										isSupportPassWay: 1,
										mul: y.betTime.get() || 1,
										hm:hmData.hm,
										my:hmData.my,
										tc:hmData.tc,
										bd:hmData.bd,
										backUrl: "history"
									},
									success:function(data){
								    	var d = eval("("+data+")");
								    	if(d.err == "1"){
								    		var context = '<div class="kr_login_box"><form><dl>'+
								    		'<dd><label>帐&#12288;户</label><div class="inputWrap"><input type="text" value="" placeholder="用户名" id="UserName" autocomplete="off"></div></dd>'+
								    		'<dd><label>密&#12288;码</label><div class="inputWrap"><input type="text" value="" placeholder="密码" id="password" autocomplete="off"></div></dd>'+
								    		'<dd class="yzm"><label>验证码</label><div class="inputWrap"><input type="text" value="" typle="tel" id="Verifycode" autocomplete="off"><div class="ver_code"><span id="showVerify"><img style="height:26px;cursor:pointer" title="点击刷新"" align="absmiddle" src="../../plus/verifycode.asp?n='+new Date().getTime()+'" onClick=\'this.src="/plus/verifycode.asp?n="+ Math.random();\'></span></div></div></dd>'+
								    		'</dl></form><div class="login_box_btn">'+
								    		//''+
								    		'<div class="btn-buttom">登录</div>'+
								    		'</div></div>';
								    		e.M.window(context,"<h1>账户登录</h1><a class='reg'>注册</a>",function(je){
								    			var $this = je;
								    			var form = $this.find("form")[0];
								    			$this.find(".btn-buttom").click(function() {
								    				e.CheckForm(form,function(){
								    					$this.find(".KR_window_body > .KR_window_top > .KR_window_close").click();
								    				});
								    			});;
								    		});
								    		//alert("请登录！");
								    	}else{
								    		if(d.err == 2){
								    			alert("投注失败（彩豆不足）！");
								    		}else if(d.err == 3){
								    			alert("投注失败（您所投注的场次已截止投注）！");
								    		}else{
								    			alert("投注成功！");
								    		}
								    		$(".KR_window_close").click();
								    		window.location.reload();
								    	}
									}
							});
																
								// c.createForm(i.payUrl, {
								// 	code: recode(s.serialize()),
								// 	play: o,
								// 	type: n.gameEn,
								// 	isSupportPassWay: 1,
								// 	mul: y.betTime.get() || 1,
								// 	backUrl: "history"
								// });
								a = true
							});
							delete this.goToBuy;
							return this
						}
					},
					M = function() {
						g.find(".method-option-text").html(r.get().selectMethod.join(" ").replace("1_1", "单关").replace(/_/g, "串") || (h.find(".methods").hasClass("hide") ? "展开" : "隐藏"))
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
				a.bind(o, function() {
					if (0 === n.cache.selectGameInfo.length) return;
					t.confirm("确定要清空所有选项？", function(e) {
						if (1 === e) n.clear()
					})
				});
				r.bind("click", function() {
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
					for (var a in n)
						if (n[a]) return true;
					return false
				}
				return true
			},
			explainData: function(e, n) {
				var a, o = [],
					l, s, c, r, h, f, d, u, m, g, b, p = e.matchList,
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
						t.dgStatus[i] = "1" == n ? true : false
					};
				k.gameId = e.gameId;
				k.gameEn = e.gameEn;
				k.isSupportDg = "1" == e.isDispJczqSingleFix ? true : false;
				if (!n) return o;
				for (a in p) {
					s = p[a];
					h = false;
					if (s.matchCode && 1 == s.status) {
						l = {
							rq: 0,
							gameDate: t.formatTime(+s.matchDate, "yyyyMMdd") || null,
							startTime: +s.startTime,
							endTime: +s.buyEndTime,
							matchDate: +s.matchDate,
							matchnumcn: s.matchCode.slice(-3),
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
						var kk = {
							"bf":1,
							"zjq":2,
							"bqc":3
						};
						console.log(v);
						if (s.spTabMix && s.spTabMix.length && !(v in kk)) {
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
						} else if (s.spTab || v in kk) {
							c = s.spTabMix[kk[v]];

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
					return +e.matchCode - +t.matchCode
				});
				return o
			},
			initParam: function() {
				var e = i,
					n = t.getPara(),
					a = n.gameStr || n.stakeNumber,
					o, s = n.gameExtra,
					c = n.anchor,
					r = i.betArea,
					h = i.betMethod,
					f, d, u, m = r.cache.gameInfo;
				try {
					if (a) {
						r.unSerialize(a);
						o = a.split(" ")[0] || "";
						o = o.split(":")[0];
						if (o && m[o])
							if (!c || !m[c]) c = o;
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
				} catch (g) {
					console.log(g, "反序列化比赛的时候出现错误")
				}
				t.bindMsgOnce("iScrollReady", function(e) {
					if (e && c && m[c]) e.scrollToElement(m[c].ele[0], 0, true, true)
				})
			},
			createForm: function(e, i, n, a) {
				var o = ["<form method='", n || "post", "' action='", e, "' target='", a || "_self", "'>"],
					l, s;
				if (i)
					for (l in i) o.push("<input type='hidden' name='" + l + "' value='" + i[l] + "'/>");
				s = t(o.join("") + "</form>").appendTo(document.body);
				s.submit();
				s.remove()
			}
		};
	t.extend(i, {
		common: s,
		helper: c
	})
}(window, window.jQuery || window.Zepto, Core, Game);