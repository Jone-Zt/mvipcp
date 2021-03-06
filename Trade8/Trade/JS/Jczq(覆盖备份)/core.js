! function(e, t, n, f, i) {
	f.jczq = f.jczq || {};
	f.jczq.core = f.jczq.core || {};
	t.extend(f.jczq.core, {
		getTotalNum: function(e, t, n, i, r) {
			var o = 0,
				a = 0,
				s, c, l, h, g = [],
				d, u = {
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
					p[n[c] ? "d" : "t"].push(s)
				}
				for (h = 0; h < e.length; h++) {
					d = i[e[h]];
					if (d) g = g.concat(d)
				}
				a = f.c2(p.t, p.d, g);
				if (r.length > 1) {
					for (c in u.t)
						if (u.t[c].length > 0) o += f.c2(u.t[c], u.d[c], g)
				} else o = a
			}
			return [a, o]
		},
		getMaxMethod: function(e, t) {
			var n = {},
				f, i, r = 0;
			for (f in e)
				for (i in e[f])
					if (!n[i]) n[i] = true;
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
						for (var r in f)
							if ("length" != r)
								for (var o in f[r])
									if (!(i[r] && i[r].dgStatus[o])) return t;
						t = 1
					}
			}
			return t
		},
		formatGameInfo: function(e, t, n, f) {
			var i = [],
				r, o, a, s, c, l, h, g, d, u, p = {
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
						for (s in d)
							if ("length" != s) {
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
				l, h, g, d, u, p;
			for (var b in o)
				if ("length" != b)
					if (a[b]) {
						r += 1;
						i[b] = false
					} else i[b] = true;
			for (d = 0; d < f.length; d++) {
				h = s[f[d]];
				h = h[0];
				if (!g || g > h) g = h
			}
			if (g)
				if (g == o.length) t.setDisabledDan(true);
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
				0: "星期天",
				1: "星期一",
				2: "星期二",
				3: "星期三",
				4: "星期四",
				5: "星期五",
				6: "星期六"
			};
			return t[e.getDay()]
		}
	})
}(window, window.jQuery || window.Zepto, Core, Game);