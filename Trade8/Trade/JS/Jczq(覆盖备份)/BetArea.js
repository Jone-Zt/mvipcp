! function(e, t, n, i, a, o) {
	var s = n.isSupportTouch ? "tap" : "click";
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
			this.config = n.extend({}, this.config, e);
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
			for (var h in t)
				if ("string" == a.getType(h) && o.test(h)) i[RegExp.$1] = n(t[h]);
			if (!i.gameWrap || !i.gameWrap.length) {
				this.log("betArea初始化错误，没有找到页面元素");
				return this
			}
			if (!t.gameTypes || !t.gameTypes.length) {
				this.log("betArea初始化错误，没有找到玩法类型");
				return this
			}
			r = {};
			n.each(c, function(e) {
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
			for (var i in e)
				if ("length" != i) t.push(i);
			return t
		},
		eachGameInfo: function(e) {
			var t = this.cache.gameInfo;
			for (var n in t)
				if ("length" != n)
					if (false === e.call(this, n, t[n], t)) return this
		},
		eachSelectGameInfo: function(e) {
			var t = this.cache.selectGameInfo;
			for (var n in t)
				if ("length" != n)
					if (false === e.call(this, n, t[n], t)) return this
		},
		each: function(e, t) {
			if (e)
				for (var n in e)
					if ("length" != n)
						if (false === t.call(this, n, e[n], e)) return this
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
				if ("boolean" == a.getType(l) && "boolean" == a.getType(f) && "undefined" != a.getType(u.score)) o = 0 === u.score ? f : l;
				if (true === p && "boolean" == a.getType(u.isHot)) s = u.isHot;
				n[m] = i && o && s && c;
				this.displayOneGame(m, n[m])
			}
			this.trigger("onDisplay", n);
			return this
		},
		displayByLeagueId: function(e) {
			var t = a.getType(e),
				n, i, o = {},
				s = this.cache.gameInfo;
			if ("object" != t) return this;
			for (n in s)
				for (i in e)
					if (s[n].leagueId == i) {
						o[n] = !!e[i];
						this.displayOneGame(n, !!e[i])
					}
			this.trigger("onDisplay", o);
			return this
		},
		displayByMap: function(e) {
			var t = a.getType(e),
				n = {},
				i, o = this.cache.gameInfo;
			if ("object" != t) return this;
			for (i in e)
				if (o[i]) {
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
				n.each(e[i].game, function() {
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
			i && i.ele.css("display", t ? "" : "none");
			i && i.relationEle && i.relationEle.css("display", t ? "" : "none");
			return this
		},
		delOneMatch: function(e) {
			var t = this.cache,
				i = t.gameInfo,
				a = i[e],
				o, s;
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
			if (e && n.isPlainObject(e))
				for (var a in e) t.addOneMatch(e[a], i);
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
					c = n.extend({}, e, c);
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
				for (t in e)
					if (true === e[t]) {
						if (true === s[t]) {
							r = true;
							delete s[t]
						}
						if (o[t].danBtn) o[t].danBtn.removeClass(c.danActive).addClass(c.danDisabled)
					} else if (false === e[t]) {
					if (!i[t]) continue;
					if (o[t].danBtn) o[t].danBtn.removeClass(c.danDisabled)
				}
			} else if ("boolean" == a.getType(e))
				for (t in o) {
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
					} else if (false === e[t])
						if (a[t]) {
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
				u, p = this.config.serialize;
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
				1: "sf",
				4: "rfsf",
				3: "dxf",
				2: "sfc"
			};
			else if (/^jczq.+/.test(t)) O = {
				1: "spf",
				2: "bf",
				3: "zjq",
				4: "bqc",
				5: "rqspf"
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
						f = f.split(".");
						++S;
						if (f && f.length && h && v[h])
							for (c = 0; c < f.length; c++) {
								p = u || O[String(f[c]).length];
								if (p) {
									y = C[p][f[c]];
									this.selectOption(h, p, y)
								}
							}
					}
				}
			} catch (M) {} finally {}
		},
		destroy: function() {
			var e = this,
				t = e.config,
				i = this.cache;
			if (false === this.trigger("onBeforeDestroy")) return false;
			i.gameWrap.undelegate(t.oneTitleSelect, s, r.titleDisplay).undelegate(t.oneOptionSelect, s, r.selOpt).undelegate(t.delBtnSelect, s, r.delMatch).undelegate(t.danBtnSelect, s, r.selDan);
			var a = ["onDisplay", "onPosition", "onSelectOption", "onRemoveOption", "onDel", "onClear", "onChange", "onDelGame", "onAddGame", "onDanChange", "onBeforeDestroy", "onRender"];
			n.each(a, function(t, n) {
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
					c, r = t.cache.gameDateInfo,
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
				if (c && a.gameInfo[c])
					if (!o.hasClass(i.danDisabled)) {
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
					a, o;
				a = e.attr(i.config.oneGameId);
				o = e.attr(i.config.oneGameRelId);
				if (a) t[a] ? t[a].ele ? t[a].ele.add(e) : t[a].ele = e : t[a] = {
					ele: e
				};
				if (o) t[o] ? t[o].relationEle ? t[o].relationEle.add(e) : t[o].relationEle = e : t[o] = {
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
			if (!(c >= 0) || r[e] && r[e][t] && r[e][t][n] >= 0) return this;
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
			if (c && c[t] && c[t][n] >= 0)
				if (1 == this.getMapKeyList(c).length && 1 == c[t].length) this.del(e);
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
				if (i)
					for (a in i)
						for (o in i[a]) i[a][o].removeClass(n.selectOption);
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
				if (i)
					for (o in i)
						for (s in i[o]) i[o][s].removeClass(n.selectOption)
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
}(window, Core, window.jQuery || window.Zepto, Class, Game);
! function(e, t, n, i, a, o) {
	var s = n.isSupportTouch ? "tap" : "click";
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
			this.config = n.extend({}, this.config, e);
			i = {
				selectMethod: [],
				currentMethod: []
			};
			this.cache = i;
			t = this.config;
			this.callSuper("onMethodChange");
			for (var s in t)
				if ("string" == a.getType(s) && o.test(s)) i[RegExp.$1] = n(t[s]);
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
}(window, Core, window.jQuery || window.Zepto, Class, Game);
! function(e, t, n, i, a) {
	var o = t.isSupportTouch ? "tap" : "click";
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
					this.config = t.extend({}, this.config, {
						wrap: i
					});
					break;
				case "array":
					if (i.ready) {
						this.config = t.extend({}, this.config, {
							wrap: i
						});
						break
					}
				case "object":
					if (i.jquery) {
						this.config = t.extend({}, this.config, {
							wrap: i
						});
						break
					}
					this.config = t.extend({}, this.config, i || {});
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
			if (this.config.editable) e.loadCdnJS("wap/js/liveCheck.js", function() {
				return !!t.fn.bindLiveCheck
			}, function() {
				o.cache.input.bindLiveCheck(/\D/g, function() {
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
			this.cache.wrap.delegate(e, o, function(e) {
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
			if (t) o = o > a ? a : o;
			else o = o < i ? i : o > a ? a : o;
			return o
		},
		__checkCtrl: function() {
			var e = this.config,
				t = e.min,
				n = e.max,
				i = this.get();
			this.cache.add[n == i ? "addClass" : "removeClass"](e.addDisCss);
			this.cache.reduce[t == i ? "addClass" : "removeClass"](e.reduceDisCss)
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
}(Core, window.jQuery || window.Zepto, Game, window);