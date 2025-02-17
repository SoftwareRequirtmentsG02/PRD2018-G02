/* DaTouWang URL: www.datouwang.com */
var Chart = function() {
	"use strict";

	function t(t, e) {
		return "string" == typeof t ? (e || document).querySelector(t) : t || null
	}

	function e(t) {
		var e = t.getBoundingClientRect();
		return {
			top: e.top + (document.documentElement.scrollTop || document.body.scrollTop),
			left: e.left + (document.documentElement.scrollLeft || document.body.scrollLeft)
		}
	}

	function i(t) {
		var e = t.getBoundingClientRect();
		return e.top >= 0 && e.left >= 0 && e.bottom <= (window.innerHeight || document.documentElement.clientHeight) && e.right <= (window.innerWidth || document.documentElement.clientWidth)
	}

	function n(t) {
		var e = window.getComputedStyle(t),
			i = parseFloat(e.paddingLeft) + parseFloat(e.paddingRight);
		return t.clientWidth - i
	}

	function a(t, e, i) {
		var n = document.createEvent("HTMLEvents");
		n.initEvent(e, !0, !0);
		for(var a in i) n[a] = i[a];
		return t.dispatchEvent(n)
	}

	function s(t) {
		return parseFloat(t.toFixed(2))
	}

	function r(t, e, i) {
		var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
		i || (i = n ? t[0] : t[t.length - 1]);
		var a = new Array(Math.abs(e)).fill(i);
		return t = n ? a.concat(t) : t.concat(a)
	}

	function o(t, e) {
		return(t + "").length * e
	}

	function l(t, e) {
		return {
			x: Math.sin(t * Lt) * e,
			y: Math.cos(t * Lt) * e
		}
	}

	function h(t, e) {
		var i = void 0,
			n = void 0;
		return t <= e ? (i = e - t, n = t) : (i = t - e, n = e), [i, n]
	}

	function c(t, e) {
		var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.length - t.length;
		return i > 0 ? t = r(t, i) : e = r(e, i), [t, e]
	}

	function u(t, e) {
		return "string" == typeof t ? (e || document).querySelector(t) : t || null
	}

	function p(t, e) {
		var i = document.createElementNS("http://www.w3.org/2000/svg", t);
		for(var n in e) {
			var a = e[n];
			if("inside" === n) u(a).appendChild(i);
			else if("around" === n) {
				var s = u(a);
				s.parentNode.insertBefore(i, s), i.appendChild(s)
			} else "styles" === n ? "object" === (void 0 === a ? "undefined" : ft(a)) && Object.keys(a).map(function(t) {
				i.style[t] = a[t]
			}) : ("className" === n && (n = "class"), "innerHTML" === n ? i.textContent = a : i.setAttribute(n, a))
		}
		return i
	}

	function d(t, e) {
		return p("linearGradient", {
			inside: t,
			id: e,
			x1: 0,
			x2: 0,
			y1: 0,
			y2: 1
		})
	}

	function f(t, e, i, n) {
		return p("stop", {
			inside: t,
			style: "stop-color: " + i,
			offset: e,
			"stop-opacity": n
		})
	}

	function v(t, e, i, n) {
		return p("svg", {
			className: e,
			inside: t,
			width: i,
			height: n
		})
	}

	function g(t) {
		return p("defs", {
			inside: t
		})
	}

	function y(t, e) {
		return p("g", {
			className: e,
			inside: t,
			transform: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ""
		})
	}

	function m(t) {
		return p("path", {
			className: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
			d: t,
			styles: {
				stroke: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "none",
				fill: arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "none"
			}
		})
	}

	function b(t, e, i, n) {
		var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
			s = i.x + t.x,
			r = i.y + t.y,
			o = i.x + e.x,
			l = i.y + e.y;
		return "M" + i.x + " " + i.y + "\n\t\tL" + s + " " + r + "\n\t\tA " + n + " " + n + " 0 0 " + (a ? 1 : 0) + "\n\t\t" + o + " " + l + " z"
	}

	function x(t, e) {
		var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
			n = "path-fill-gradient-" + e + "-" + (i ? "lighter" : "default"),
			a = d(t, n),
			s = [1, .6, .2];
		return i && (s = [.4, .2, 0]), f(a, "0%", e, s[0]), f(a, "50%", e, s[1]), f(a, "100%", e, s[2]), n
	}

	function k(t, e, i, n) {
		var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "none",
			s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
			r = {
				className: t,
				x: e,
				y: i,
				width: n,
				height: n,
				fill: a
			};
		return Object.keys(s).map(function(t) {
			r[t] = s[t]
		}), p("rect", r)
	}

	function w(t, e, i, n) {
		return p("text", {
			className: t,
			x: e,
			y: i,
			dy: Ct / 2 + "px",
			"font-size": Ct + "px",
			innerHTML: n
		})
	}

	function A(t, e, i, n) {
		var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
		a.stroke || (a.stroke = Dt);
		var s = p("line", {
				className: "line-vertical " + a.className,
				x1: 0,
				x2: 0,
				y1: i,
				y2: n,
				styles: {
					stroke: a.stroke
				}
			}),
			r = p("text", {
				x: 0,
				y: i > n ? i + Ot : i - Ot - Ct,
				dy: Ct + "px",
				"font-size": Ct + "px",
				"text-anchor": "middle",
				innerHTML: e + ""
			}),
			o = p("g", {
				transform: "translate(" + t + ", 0)"
			});
		return o.appendChild(s), o.appendChild(r), o
	}

	function T(t, e, i, n) {
		var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
		a.stroke || (a.stroke = Dt), a.lineType || (a.lineType = "");
		var s = p("line", {
				className: "line-horizontal " + a.className + ("dashed" === a.lineType ? "dashed" : ""),
				x1: i,
				x2: n,
				y1: 0,
				y2: 0,
				styles: {
					stroke: a.stroke
				}
			}),
			r = p("text", {
				x: i < n ? i - Ot : i + Ot,
				y: 0,
				dy: Ct / 2 - 2 + "px",
				"font-size": Ct + "px",
				"text-anchor": i < n ? "end" : "start",
				innerHTML: e + ""
			}),
			o = p("g", {
				transform: "translate(0, " + t + ")",
				"stroke-opacity": 1
			});
		return 0 !== r && "0" !== r || (o.style.stroke = "rgba(27, 31, 35, 0.6)"), o.appendChild(s), o.appendChild(r), o
	}

	function P(t, e, i) {
		var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
		n.pos || (n.pos = "left"), n.offset || (n.offset = 0), n.mode || (n.mode = "span"), n.stroke || (n.stroke = Dt), n.className || (n.className = "");
		var a = -1 * Mt,
			s = "span" === n.mode ? i + Mt : 0;
		return "tick" === n.mode && "right" === n.pos && (a = i + Mt, s = i), a += n.offset, s += n.offset, T(t, e, a, s, {
			stroke: n.stroke,
			className: n.className,
			lineType: n.lineType
		})
	}

	function L(t, e, i) {
		var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
		n.pos || (n.pos = "bottom"), n.offset || (n.offset = 0), n.mode || (n.mode = "span"), n.stroke || (n.stroke = Dt), n.className || (n.className = "");
		var a = i + Mt,
			s = "span" === n.mode ? -1 * Mt : i;
		return "tick" === n.mode && "top" === n.pos && (a = -1 * Mt, s = 0), A(t, e, a, s, {
			stroke: n.stroke,
			className: n.className,
			lineType: n.lineType
		})
	}

	function M(t, e, i) {
		var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
			a = p("text", {
				className: "chart-label",
				x: i - o(e, 5) - Ot,
				y: 0,
				dy: Ct / -2 + "px",
				"font-size": Ct + "px",
				"text-anchor": "start",
				innerHTML: e + ""
			}),
			s = T(t, "", 0, i, {
				stroke: n.stroke || Dt,
				className: n.className || "",
				lineType: n.lineType
			});
		return s.appendChild(a), s
	}

	function O(t, e, i, n) {
		var a = t - e,
			s = p("rect", {
				className: "bar mini",
				styles: {
					fill: "rgba(228, 234, 239, 0.49)",
					stroke: Dt,
					"stroke-dasharray": i + ", " + a
				},
				x: 0,
				y: 0,
				width: i,
				height: a
			}),
			r = p("text", {
				className: "chart-label",
				x: i - o(n + "", 4.5) - Ot,
				y: 0,
				dy: Ct / -2 + "px",
				"font-size": Ct + "px",
				"text-anchor": "start",
				innerHTML: n + ""
			}),
			l = p("g", {
				transform: "translate(0, " + e + ")"
			});
		return l.appendChild(s), l.appendChild(r), l
	}

	function C(t, e, i, n) {
		var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
			s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
			r = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
			o = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : {},
			l = h(e, o.zeroLine),
			c = xt(l, 2),
			u = c[0],
			d = c[1],
			f = p("rect", {
				className: "bar mini",
				style: "fill: " + n,
				"data-point-index": s,
				x: t,
				y: d -= r,
				width: i,
				height: u || o.minHeight
			});
		if((a += "") || a.length) {
			f.setAttribute("y", 0), f.setAttribute("x", 0);
			var v = p("text", {
					className: "data-point-value",
					x: i / 2,
					y: 0,
					dy: Ct / 2 * -1 + "px",
					"font-size": Ct + "px",
					"text-anchor": "middle",
					innerHTML: a
				}),
				g = p("g", {
					"data-point-index": s,
					transform: "translate(" + t + ", " + d + ")"
				});
			return g.appendChild(f), g.appendChild(v), g
		}
		return f
	}

	function D(t, e, i, n) {
		var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
			s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
			r = p("circle", {
				style: "fill: " + n,
				"data-point-index": s,
				cx: t,
				cy: e,
				r: i
			});
		if((a += "") || a.length) {
			r.setAttribute("cy", 0), r.setAttribute("cx", 0);
			var o = p("text", {
					className: "data-point-value",
					x: 0,
					y: 0,
					dy: Ct / 2 * -1 - i + "px",
					"font-size": Ct + "px",
					"text-anchor": "middle",
					innerHTML: a
				}),
				l = p("g", {
					"data-point-index": s,
					transform: "translate(" + t + ", " + e + ")"
				});
			return l.appendChild(r), l.appendChild(o), l
		}
		return r
	}

	function _(t, e, i) {
		var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
			a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
			s = e.map(function(e, i) {
				return t[i] + "," + e
			}).join("L"),
			r = m("M" + s, "line-graph-path", i);
		if(n.heatline) {
			var o = x(a.svgDefs, i);
			r.style.stroke = "url(#" + o + ")"
		}
		var l = {
			path: r
		};
		if(n.regionFill) {
			var h = x(a.svgDefs, i, !0),
				c = "M" + t[0] + "," + a.zeroLine + "L" + s + "L" + t.slice(-1)[0] + "," + a.zeroLine;
			l.region = m(c, "region-fill", "none", "url(#" + h + ")")
		}
		return l
	}

	function N(t) {
		return t > 255 ? 255 : t < 0 ? 0 : t
	}

	function S(t, e) {
		var i = Et(t),
			n = !1;
		"#" == i[0] && (i = i.slice(1), n = !0);
		var a = parseInt(i, 16),
			s = N((a >> 16) + e),
			r = N((a >> 8 & 255) + e),
			o = N((255 & a) + e);
		return(n ? "#" : "") + (o | r << 8 | s << 16).toString(16)
	}

	function W(t) {
		return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)
	}

	function E(t, e, i, n) {
		if(t !== e) {
			jt.includes(t) || console.error("'" + t + "' is not a valid chart type."), zt[e].includes(t) || console.error("'" + e + "' chart cannot be converted to a '" + t + "' chart.");
			var a = Ft[e].includes(t);
			return n.type = t, n.colors = a ? n.colors : void 0, new te(i, n)
		}
	}

	function j(t, e, i, n) {
		var a = "string" == typeof e ? e : e.join(", ");
		return [t, {
			transform: i.join(", ")
		}, n, Gt, "translate", {
			transform: a
		}]
	}

	function z(t, e, i) {
		return j(t, [i, 0], [e, 0], Yt)
	}

	function F(t, e, i) {
		return j(t, [0, i], [0, e], Yt)
	}

	function H(t, e, i, n) {
		var a = e - i,
			s = t.childNodes[0];
		return [
			[s, {
				height: a,
				"stroke-dasharray": s.getAttribute("width") + ", " + a
			}, Yt, Gt], j(t, [0, n], [0, i], Yt)
		]
	}

	function R(t, e, i, n) {
		var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
			s = h(i, (arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {}).zeroLine),
			r = xt(s, 2),
			o = r[0],
			l = r[1];
		return l -= a, "rect" !== t.nodeName ? [
			[t.childNodes[0], {
				width: n,
				height: o
			}, Ht, Gt], j(t, t.getAttribute("transform").split("(")[1].slice(0, -1), [e, l], Yt)
		] : [
			[t, {
				width: n,
				height: o,
				x: e,
				y: l
			}, Ht, Gt]
		]
	}

	function Y(t, e, i) {
		return "circle" !== t.nodeName ? [j(t, t.getAttribute("transform").split("(")[1].slice(0, -1), [e, i], Yt)] : [
			[t, {
				cx: e,
				cy: i
			}, Ht, Gt]
		]
	}

	function I(t, e, i, n) {
		var a = [],
			s = i.map(function(t, i) {
				return e[i] + "," + t
			}).join("L"),
			r = [t.path, {
				d: "M" + s
			}, Rt, Gt];
		if(a.push(r), t.region) {
			var o = e[0] + "," + n + "L",
				l = "L" + e.slice(-1)[0] + ", " + n,
				h = [t.region, {
					d: "M" + o + s + l
				}, Rt, Gt];
			a.push(h)
		}
		return a
	}

	function G(t, e) {
		return [t, {
			d: e
		}, Ht, Gt]
	}

	function V(t, e, i) {
		var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear",
			a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0,
			s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
			r = t.cloneNode(!0),
			o = t.cloneNode(!0);
		for(var l in e) {
			var h = void 0;
			h = "transform" === l ? document.createElementNS("http://www.w3.org/2000/svg", "animateTransform") : document.createElementNS("http://www.w3.org/2000/svg", "animate");
			var c = s[l] || t.getAttribute(l),
				u = e[l],
				p = {
					attributeName: l,
					from: c,
					to: u,
					begin: "0s",
					dur: i / 1e3 + "s",
					values: c + ";" + u,
					keySplines: Vt[n],
					keyTimes: "0;1",
					calcMode: "spline",
					fill: "freeze"
				};
			a && (p.type = a);
			for(var d in p) h.setAttribute(d, p[d]);
			r.appendChild(h), a ? o.setAttribute(l, "translate(" + u + ")") : o.setAttribute(l, u)
		}
		return [r, o]
	}

	function q(t, e) {
		t.style.transform = e, t.style.webkitTransform = e, t.style.msTransform = e, t.style.mozTransform = e, t.style.oTransform = e
	}

	function B(t, e) {
		var i = [],
			n = [];
		e.map(function(t) {
			var e = t[0],
				a = e.parentNode,
				s = void 0,
				r = void 0;
			t[0] = e;
			var o = V.apply(void 0, kt(t)),
				l = xt(o, 2);
			s = l[0], r = l[1], i.push(r), n.push([s, a]), a.replaceChild(s, e)
		});
		var a = t.cloneNode(!0);
		return n.map(function(t, n) {
			t[1].replaceChild(i[n], t[0]), e[n][0] = i[n]
		}), a
	}

	function U(t, e, i) {
		if(0 !== i.length) {
			var n = B(e, i);
			e.parentNode == t && (t.removeChild(e), t.appendChild(n)), setTimeout(function() {
				n.parentNode == t && (t.removeChild(n), t.appendChild(e))
			}, It)
		}
	}

	function X(t, e, i) {
		var n = Object.keys(Jt).filter(function(e) {
				return t.includes(e)
			}),
			a = Jt[n[0]];
		return Object.assign(a, {
			constants: e,
			getData: i
		}), new Xt(a)
	}

	function J(t) {
		var e = new Date(t);
		return e.setMinutes(e.getMinutes() - e.getTimezoneOffset()), e
	}

	function K(t) {
		var e = t.getDate(),
			i = t.getMonth() + 1;
		return [(e > 9 ? "" : "0") + e, (i > 9 ? "" : "0") + i, t.getFullYear()].join("-")
	}

	function $(t, e) {
		return Math.ceil(Q(t, e) / 7)
	}

	function Q(t, e) {
		return(J(e) - J(t)) / 864e5
	}

	function Z(t, e) {
		t.setDate(t.getDate() + e)
	}

	function tt(t) {
		if(0 === t) return [0, 0];
		if(isNaN(t)) return {
			mantissa: -6755399441055744,
			exponent: 972
		};
		var e = t > 0 ? 1 : -1;
		if(!isFinite(t)) return {
			mantissa: 4503599627370496 * e,
			exponent: 972
		};
		t = Math.abs(t);
		var i = Math.floor(Math.log10(t));
		return [e * (t / Math.pow(10, i)), i]
	}

	function et(t) {
		var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
			i = Math.ceil(t),
			n = Math.floor(e),
			a = i - n,
			s = a,
			r = 1;
		a > 5 && (a % 2 != 0 && (a = ++i - n), s = a / 2, r = 2), a <= 2 && (r = a / (s = 4)), 0 === a && (s = 5, r = 1);
		for(var o = [], l = 0; l <= s; l++) o.push(n + r * l);
		return o
	}

	function it(t) {
		var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
			i = tt(t),
			n = xt(i, 2),
			a = n[0],
			s = n[1],
			r = e ? e / Math.pow(10, s) : 0,
			o = et(a = a.toFixed(6), r);
		return o = o.map(function(t) {
			return t * Math.pow(10, s)
		})
	}

	function nt(t) {
		function e(t, e) {
			for(var i = it(t), n = i[1] - i[0], a = 0, s = 1; a < e; s++) a += n, i.unshift(-1 * a);
			return i
		}
		var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
			n = Math.max.apply(Math, kt(t)),
			a = Math.min.apply(Math, kt(t)),
			s = [];
		if(n >= 0 && a >= 0) tt(n)[1], s = i ? it(n, a) : it(n);
		else if(n > 0 && a < 0) {
			var r = Math.abs(a);
			n >= r ? (tt(n)[1], s = e(n, r)) : (tt(r)[1], s = e(r, n).map(function(t) {
				return -1 * t
			}))
		} else if(n <= 0 && a <= 0) {
			var o = Math.abs(a),
				l = Math.abs(n);
			tt(o)[1], s = (s = i ? it(o, l) : it(o)).reverse().map(function(t) {
				return -1 * t
			})
		}
		return s
	}

	function at(t) {
		var e = st(t);
		return t.indexOf(0) >= 0 ? t.indexOf(0) : t[0] > 0 ? -1 * t[0] / e : -1 * t[t.length - 1] / e + (t.length - 1)
	}

	function st(t) {
		return t[1] - t[0]
	}

	function rt(t) {
		return t[t.length - 1] - t[0]
	}

	function ot(t, e) {
		return s(e.zeroLine - t * e.scaleMultiplier)
	}

	function lt(t, e) {
		for(var i = Math.max.apply(Math, kt(t)), n = 1 / (e - 1), a = [], s = 0; s < e; s++) {
			var r = i * (n * s);
			a.push(r)
		}
		return a
	}

	function ht(t, e) {
		return e.filter(function(e) {
			return e < t
		}).length
	}

	function ct(t, e) {
		t.labels = t.labels || [];
		var i = t.labels.length,
			n = t.datasets,
			a = new Array(i).fill(0);
		return n || (n = [{
			values: a
		}]), n.map(function(t) {
			if(t.values) {
				var n = t.values;
				n = (n = n.map(function(t) {
					return isNaN(t) ? 0 : t
				})).length > i ? n.slice(0, i) : r(n, i - n.length, 0)
			} else t.values = a;
			t.chartType || (Tt.includes(e), t.chartType = e)
		}), t.yRegions && t.yRegions.map(function(t) {
			if(t.end < t.start) {
				var e = [t.end, t.start];
				t.start = e[0], t.end = e[1]
			}
		}), t
	}

	function ut(t) {
		var e = t.labels.length,
			i = new Array(e).fill(0),
			n = {
				labels: t.labels.slice(0, -1),
				datasets: t.datasets.map(function(t) {
					return {
						name: "",
						values: i.slice(0, -1),
						chartType: t.chartType
					}
				})
			};
		return t.yMarkers && (n.yMarkers = [{
			value: 0,
			label: ""
		}]), t.yRegions && (n.yRegions = [{
			start: 0,
			end: 0,
			label: ""
		}]), n
	}

	function pt(t) {
		var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
			i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
			n = t / e.length / Pt;
		return e.map(function(t, e) {
			return(t += "").length > n && (i ? e % Math.ceil(t.length / n) != 0 && (t = "") : t = n - 3 > 0 ? t.slice(0, n - 3) + " ..." : t.slice(0, n) + ".."), t
		})
	}

	function dt() {
		var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "line",
			e = arguments[1],
			i = arguments[2];
		return "line" === t ? (i.type = "line", new Qt(e, i)) : "bar" === t ? (i.type = "bar", new Qt(e, i)) : "axis-mixed" === t ? (i.type = "line", new Qt(e, i)) : Zt[t] ? new Zt[t](e, i) : void console.error("Undefined chart type: " + t)
	}! function(t, e) {
		void 0 === e && (e = {});
		var i = e.insertAt;
		if(t && "undefined" != typeof document) {
			var n = document.head || document.getElementsByTagName("head")[0],
				a = document.createElement("style");
			a.type = "text/css", "top" === i && n.firstChild ? n.insertBefore(a, n.firstChild) : n.appendChild(a), a.styleSheet ? a.styleSheet.cssText = t : a.appendChild(document.createTextNode(t))
		}
	}('.chart-container{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif}.chart-container .graph-focus-margin{margin:0 5%}.chart-container>.title{margin-top:25px;margin-left:25px;text-align:left;font-weight:400;font-size:12px;color:#6c7680}.chart-container .graphics{margin-top:10px;padding-top:10px;padding-bottom:10px;position:relative}.chart-container .graph-stats-group{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-flex:1;-ms-flex:1;flex:1}.chart-container .graph-stats-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:10px}.chart-container .graph-stats-container:after,.chart-container .graph-stats-container:before{content:"";display:block}.chart-container .graph-stats-container .stats{padding-bottom:15px}.chart-container .graph-stats-container .stats-title{color:#8d99a6}.chart-container .graph-stats-container .stats-value{font-size:20px;font-weight:300}.chart-container .graph-stats-container .stats-description{font-size:12px;color:#8d99a6}.chart-container .graph-stats-container .graph-data .stats-value{color:#98d85b}.chart-container .axis,.chart-container .chart-label{fill:#555b51}.chart-container .axis line,.chart-container .chart-label line{stroke:#dadada}.chart-container .percentage-graph .progress{margin-bottom:0}.chart-container .dataset-units circle{stroke:#fff;stroke-width:2}.chart-container .dataset-units path{fill:none;stroke-opacity:1;stroke-width:2px}.chart-container .dataset-path,.chart-container .multiaxis-chart .line-horizontal,.chart-container .multiaxis-chart .y-axis-guide{stroke-width:2px}.chart-container .path-group path{fill:none;stroke-opacity:1;stroke-width:2px}.chart-container line.dashed{stroke-dasharray:5,3}.chart-container .axis-line .specific-value{text-anchor:start}.chart-container .axis-line .y-line{text-anchor:end}.chart-container .axis-line .x-line{text-anchor:middle}.chart-container .progress{height:20px;margin-bottom:20px;overflow:hidden;background-color:#f5f5f5;border-radius:4px;-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,.1);box-shadow:inset 0 1px 2px rgba(0,0,0,.1)}.chart-container .progress-bar{float:left;width:0;height:100%;font-size:12px;line-height:20px;color:#fff;text-align:center;background-color:#36414c;-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);-webkit-transition:width .6s ease;transition:width .6s ease}.chart-container .graph-svg-tip{position:absolute;z-index:1;padding:10px;font-size:12px;color:#959da5;text-align:center;background:rgba(0,0,0,.8);border-radius:3px}.chart-container .graph-svg-tip ol,.chart-container .graph-svg-tip ul{padding-left:0;display:-webkit-box;display:-ms-flexbox;display:flex}.chart-container .graph-svg-tip ul.data-point-list li{min-width:90px;-webkit-box-flex:1;-ms-flex:1;flex:1;font-weight:600}.chart-container .graph-svg-tip strong{color:#dfe2e5;font-weight:600}.chart-container .graph-svg-tip .svg-pointer{position:absolute;height:5px;margin:0 0 0 -5px;content:" ";border:5px solid transparent;border-top-color:rgba(0,0,0,.8)}.chart-container .graph-svg-tip.comparison{padding:0;text-align:left;pointer-events:none}.chart-container .graph-svg-tip.comparison .title{display:block;padding:10px;margin:0;font-weight:600;line-height:1;pointer-events:none}.chart-container .graph-svg-tip.comparison ul{margin:0;white-space:nowrap;list-style:none}.chart-container .graph-svg-tip.comparison li{display:inline-block;padding:5px 10px}.chart-container .indicator,.chart-container .indicator-right{background:none;font-size:12px;vertical-align:middle;font-weight:700;color:#6c7680}.chart-container .indicator i{content:"";display:inline-block;height:8px;width:8px;border-radius:8px}.chart-container .indicator:before,.chart-container .indicator i{margin:0 4px 0 0}.chart-container .indicator-right:after{margin:0 0 0 4px}', {});
	var ft = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		},
		vt = (function() {
			function t(t) {
				this.value = t
			}

			function e(e) {
				function i(t, e) {
					return new Promise(function(i, a) {
						var o = {
							key: t,
							arg: e,
							resolve: i,
							reject: a,
							next: null
						};
						r ? r = r.next = o : (s = r = o, n(t, e))
					})
				}

				function n(i, s) {
					try {
						var r = e[i](s),
							o = r.value;
						o instanceof t ? Promise.resolve(o.value).then(function(t) {
							n("next", t)
						}, function(t) {
							n("throw", t)
						}) : a(r.done ? "return" : "normal", r.value)
					} catch(t) {
						a("throw", t)
					}
				}

				function a(t, e) {
					switch(t) {
						case "return":
							s.resolve({
								value: e,
								done: !0
							});
							break;
						case "throw":
							s.reject(e);
							break;
						default:
							s.resolve({
								value: e,
								done: !1
							})
					}(s = s.next) ? n(s.key, s.arg): r = null
				}
				var s, r;
				this._invoke = i, "function" != typeof e.return && (this.return = void 0)
			}
			"function" == typeof Symbol && Symbol.asyncIterator && (e.prototype[Symbol.asyncIterator] = function() {
				return this
			}), e.prototype.next = function(t) {
				return this._invoke("next", t)
			}, e.prototype.throw = function(t) {
				return this._invoke("throw", t)
			}, e.prototype.return = function(t) {
				return this._invoke("return", t)
			}
		}(), function(t, e) {
			if(!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}),
		gt = function() {
			function t(t, e) {
				for(var i = 0; i < e.length; i++) {
					var n = e[i];
					n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
				}
			}
			return function(e, i, n) {
				return i && t(e.prototype, i), n && t(e, n), e
			}
		}(),
		yt = function t(e, i, n) {
			null === e && (e = Function.prototype);
			var a = Object.getOwnPropertyDescriptor(e, i);
			if(void 0 === a) {
				var s = Object.getPrototypeOf(e);
				return null === s ? void 0 : t(s, i, n)
			}
			if("value" in a) return a.value;
			var r = a.get;
			if(void 0 !== r) return r.call(n)
		},
		mt = function(t, e) {
			if("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		},
		bt = function(t, e) {
			if(!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !e || "object" != typeof e && "function" != typeof e ? t : e
		},
		xt = function() {
			function t(t, e) {
				var i = [],
					n = !0,
					a = !1,
					s = void 0;
				try {
					for(var r, o = t[Symbol.iterator](); !(n = (r = o.next()).done) && (i.push(r.value), !e || i.length !== e); n = !0);
				} catch(t) {
					a = !0, s = t
				} finally {
					try {
						!n && o.return && o.return()
					} finally {
						if(a) throw s
					}
				}
				return i
			}
			return function(e, i) {
				if(Array.isArray(e)) return e;
				if(Symbol.iterator in Object(e)) return t(e, i);
				throw new TypeError("Invalid attempt to destructure non-iterable instance")
			}
		}(),
		kt = function(t) {
			if(Array.isArray(t)) {
				for(var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
				return i
			}
			return Array.from(t)
		};
	t.create = function(e, i) {
		var n = document.createElement(e);
		for(var a in i) {
			var s = i[a];
			if("inside" === a) t(s).appendChild(n);
			else if("around" === a) {
				var r = t(s);
				r.parentNode.insertBefore(n, r), n.appendChild(r)
			} else "styles" === a ? "object" === (void 0 === s ? "undefined" : ft(s)) && Object.keys(s).map(function(t) {
				n.style[t] = s[t]
			}) : a in n ? n[a] = s : n.setAttribute(a, s)
		}
		return n
	};
	var wt = function() {
			function e(t) {
				var i = t.parent,
					n = void 0 === i ? null : i,
					a = t.colors,
					s = void 0 === a ? [] : a;
				vt(this, e), this.parent = n, this.colors = s, this.titleName = "", this.titleValue = "", this.listValues = [], this.titleValueFirst = 0, this.x = 0, this.y = 0, this.top = 0, this.left = 0, this.setup()
			}
			return gt(e, [{
				key: "setup",
				value: function() {
					this.makeTooltip()
				}
			}, {
				key: "refresh",
				value: function() {
					this.fill(), this.calcPosition()
				}
			}, {
				key: "makeTooltip",
				value: function() {
					var e = this;
					this.container = t.create("div", {
						inside: this.parent,
						className: "graph-svg-tip comparison",
						innerHTML: '<span class="title"></span>\n\t\t\t\t<ul class="data-point-list"></ul>\n\t\t\t\t<div class="svg-pointer"></div>'
					}), this.hideTip(), this.title = this.container.querySelector(".title"), this.dataPointList = this.container.querySelector(".data-point-list"), this.parent.addEventListener("mouseleave", function() {
						e.hideTip()
					})
				}
			}, {
				key: "fill",
				value: function() {
					var e = this,
						i = void 0;
					this.index && this.container.setAttribute("data-point-index", this.index), i = this.titleValueFirst ? "<strong>" + this.titleValue + "</strong>" + this.titleName : this.titleName + "<strong>" + this.titleValue + "</strong>", this.title.innerHTML = i, this.dataPointList.innerHTML = "", this.listValues.map(function(i, n) {
						var a = e.colors[n] || "black",
							s = t.create("li", {
								styles: {
									"border-top": "3px solid " + a
								},
								innerHTML: '<strong style="display: block;">' + (0 === i.value || i.value ? i.value : "") + "</strong>\n\t\t\t\t\t" + (i.title ? i.title : "")
							});
						e.dataPointList.appendChild(s)
					})
				}
			}, {
				key: "calcPosition",
				value: function() {
					var t = this.container.offsetWidth;
					this.top = this.y - this.container.offsetHeight, this.left = this.x - t / 2;
					var e = this.parent.offsetWidth - t,
						i = this.container.querySelector(".svg-pointer");
					if(this.left < 0) i.style.left = "calc(50% - " + -1 * this.left + "px)", this.left = 0;
					else if(this.left > e) {
						var n = "calc(50% + " + (this.left - e) + "px)";
						i.style.left = n, this.left = e
					} else i.style.left = "50%"
				}
			}, {
				key: "setValues",
				value: function(t, e) {
					var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
						n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
						a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1;
					this.titleName = i.name, this.titleValue = i.value, this.listValues = n, this.x = t, this.y = e, this.titleValueFirst = i.valueFirst || 0, this.index = a, this.refresh()
				}
			}, {
				key: "hideTip",
				value: function() {
					this.container.style.top = "0px", this.container.style.left = "0px", this.container.style.opacity = "0"
				}
			}, {
				key: "showTip",
				value: function() {
					this.container.style.top = this.top + "px", this.container.style.left = this.left + "px", this.container.style.opacity = "1"
				}
			}]), e
		}(),
		At = 700,
		Tt = ["line", "bar"],
		Pt = 7,
		Lt = Math.PI / 180,
		Mt = 6,
		Ot = 4,
		Ct = 10,
		Dt = "#dadada",
		_t = {
			bar: function(t) {
				var e = void 0;
				"rect" !== t.nodeName && (e = t.getAttribute("transform"), t = t.childNodes[0]);
				var i = t.cloneNode();
				return i.style.fill = "#000000", i.style.opacity = "0.4", e && i.setAttribute("transform", e), i
			},
			dot: function(t) {
				var e = void 0;
				"circle" !== t.nodeName && (e = t.getAttribute("transform"), t = t.childNodes[0]);
				var i = t.cloneNode(),
					n = t.getAttribute("r"),
					a = t.getAttribute("fill");
				return i.setAttribute("r", parseInt(n) + 4), i.setAttribute("fill", a), i.style.opacity = "0.6", e && i.setAttribute("transform", e), i
			}
		},
		Nt = {
			bar: function(t, e) {
				var i = void 0;
				"rect" !== t.nodeName && (i = t.getAttribute("transform"), t = t.childNodes[0]);
				var n = ["x", "y", "width", "height"];
				Object.values(t.attributes).filter(function(t) {
					return n.includes(t.name) && t.specified
				}).map(function(t) {
					e.setAttribute(t.name, t.nodeValue)
				}), i && e.setAttribute("transform", i)
			},
			dot: function(t, e) {
				var i = void 0;
				"circle" !== t.nodeName && (i = t.getAttribute("transform"), t = t.childNodes[0]);
				var n = ["cx", "cy"];
				Object.values(t.attributes).filter(function(t) {
					return n.includes(t.name) && t.specified
				}).map(function(t) {
					e.setAttribute(t.name, t.nodeValue)
				}), i && e.setAttribute("transform", i)
			}
		},
		St = {
			"light-blue": "#7cd6fd",
			blue: "#5e64ff",
			violet: "#743ee2",
			red: "#ff5858",
			orange: "#ffa00a",
			yellow: "#feef72",
			green: "#28a745",
			"light-green": "#98d85b",
			purple: "#b554ff",
			magenta: "#ffa3ef",
			black: "#36114C",
			grey: "#bdd3e6",
			"light-grey": "#f0f4f7",
			"dark-grey": "#b8c2cc"
		},
		Wt = ["light-blue", "blue", "violet", "red", "orange", "yellow", "green", "light-green", "purple", "magenta", "light-grey", "dark-grey"],
		Et = function(t) {
			return St[t] || t
		},
		jt = ["line", "scatter", "bar", "percentage", "heatmap", "pie"],
		zt = {
			bar: ["line", "scatter", "percentage", "pie"],
			line: ["scatter", "bar", "percentage", "pie"],
			pie: ["line", "scatter", "percentage", "bar"],
			scatter: ["line", "bar", "percentage", "pie"],
			percentage: ["bar", "line", "scatter", "pie"],
			heatmap: []
		},
		Ft = {
			bar: ["line", "scatter"],
			line: ["scatter", "bar"],
			pie: ["percentage"],
			scatter: ["line", "bar"],
			percentage: ["pie"],
			heatmap: []
		},
		Ht = 350,
		Rt = 350,
		Yt = Ht,
		It = 250,
		Gt = "easein",
		Vt = {
			ease: "0.25 0.1 0.25 1",
			linear: "0 0 1 1",
			easein: "0.1 0.8 0.2 1",
			easeout: "0 0 0.58 1",
			easeinout: "0.42 0 0.58 1"
		},
		qt = function() {
			function e(t, i) {
				if(vt(this, e), this.rawChartArgs = i, this.parent = "string" == typeof t ? document.querySelector(t) : t, !(this.parent instanceof HTMLElement)) throw new Error("No `parent` element to render on was provided.");
				this.title = i.title || "", this.subtitle = i.subtitle || "", this.argHeight = i.height || 240, this.type = i.type || "", this.realData = this.prepareData(i.data), this.data = this.prepareFirstData(this.realData), this.colors = [], this.config = {
					showTooltip: 1,
					showLegend: i.showLegend || 1,
					isNavigable: i.isNavigable || 0,
					animate: 1
				}, this.state = {}, this.options = {}, this.initTimeout = At, this.config.isNavigable && (this.overlays = []), this.configure(i)
			}
			return gt(e, [{
				key: "configure",
				value: function(t) {
					var e = this;
					this.setColors(t), this.setMargins(), window.addEventListener("resize", function() {
						return e.draw(!0)
					}), window.addEventListener("orientationchange", function() {
						return e.draw(!0)
					})
				}
			}, {
				key: "setColors",
				value: function() {
					var t = this.rawChartArgs,
						e = "percentage" === t.type || "pie" === t.type ? t.data.labels : t.data.datasets;
					!t.colors || e && t.colors.length < e.length ? this.colors = Wt : this.colors = t.colors, this.colors = this.colors.map(function(t) {
						return Et(t)
					})
				}
			}, {
				key: "setMargins",
				value: function() {
					var t = this.argHeight;
					this.baseHeight = t, this.height = t - 50, this.translateY = 20, this.leftMargin = 60, this.rightMargin = 40
				}
			}, {
				key: "validate",
				value: function() {
					return !0
				}
			}, {
				key: "setup",
				value: function() {
					this.validate() && this._setup()
				}
			}, {
				key: "_setup",
				value: function() {
					this.makeContainer(), this.makeTooltip(), this.draw(!1, !0)
				}
			}, {
				key: "setupComponents",
				value: function() {
					this.components = new Map
				}
			}, {
				key: "makeContainer",
				value: function() {
					this.container = t.create("div", {
						className: "chart-container",
						innerHTML: '<h6 class="title">' + this.title + '</h6>\n\t\t\t\t<h6 class="sub-title uppercase">' + this.subtitle + '</h6>\n\t\t\t\t<div class="frappe-chart graphics"></div>\n\t\t\t\t<div class="graph-stats-container"></div>'
					}), this.parent.innerHTML = "", this.parent.appendChild(this.container), this.chartWrapper = this.container.querySelector(".frappe-chart"), this.statsWrapper = this.container.querySelector(".graph-stats-container")
				}
			}, {
				key: "makeTooltip",
				value: function() {
					this.tip = new wt({
						parent: this.chartWrapper,
						colors: this.colors
					}), this.bindTooltip()
				}
			}, {
				key: "bindTooltip",
				value: function() {}
			}, {
				key: "draw",
				value: function() {
					var t = this,
						e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					this.calcWidth(), this.calc(e), this.makeChartArea(), this.setupComponents(), this.components.forEach(function(e) {
						return e.setup(t.drawArea)
					}), this.render(this.components, !1), i && (this.data = this.realData, setTimeout(function() {
						t.update()
					}, this.initTimeout)), e || this.renderLegend(), this.setupNavigation(i)
				}
			}, {
				key: "calcWidth",
				value: function() {
					this.baseWidth = n(this.parent), this.width = this.baseWidth - (this.leftMargin + this.rightMargin)
				}
			}, {
				key: "update",
				value: function() {
					var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.data;
					this.data = this.prepareData(t), this.calc(), this.render()
				}
			}, {
				key: "prepareData",
				value: function() {
					return arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.data
				}
			}, {
				key: "prepareFirstData",
				value: function() {
					return arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.data
				}
			}, {
				key: "calc",
				value: function() {}
			}, {
				key: "render",
				value: function() {
					var t = this,
						e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.components,
						i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
					this.config.isNavigable && this.overlays.map(function(t) {
						return t.parentNode.removeChild(t)
					});
					var n = [];
					e.forEach(function(t) {
						n = n.concat(t.update(i))
					}), n.length > 0 ? (U(this.chartWrapper, this.svg, n), setTimeout(function() {
						e.forEach(function(t) {
							return t.make()
						}), t.updateNav()
					}, 400)) : (e.forEach(function(t) {
						return t.make()
					}), this.updateNav())
				}
			}, {
				key: "updateNav",
				value: function() {
					this.config.isNavigable && (this.makeOverlay(), this.bindUnits())
				}
			}, {
				key: "makeChartArea",
				value: function() {
					this.svg && this.chartWrapper.removeChild(this.svg), this.svg = v(this.chartWrapper, "chart", this.baseWidth, this.baseHeight), this.svgDefs = g(this.svg), this.drawArea = y(this.svg, this.type + "-chart", "translate(" + this.leftMargin + ", " + this.translateY + ")")
				}
			}, {
				key: "renderLegend",
				value: function() {}
			}, {
				key: "setupNavigation",
				value: function() {
					var t = this,
						e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					this.config.isNavigable && e && (this.bindOverlay(), this.keyActions = {
						13: this.onEnterKey.bind(this),
						37: this.onLeftArrow.bind(this),
						38: this.onUpArrow.bind(this),
						39: this.onRightArrow.bind(this),
						40: this.onDownArrow.bind(this)
					}, document.addEventListener("keydown", function(e) {
						i(t.chartWrapper) && (e = e || window.event, t.keyActions[e.keyCode] && t.keyActions[e.keyCode]())
					}))
				}
			}, {
				key: "makeOverlay",
				value: function() {}
			}, {
				key: "updateOverlay",
				value: function() {}
			}, {
				key: "bindOverlay",
				value: function() {}
			}, {
				key: "bindUnits",
				value: function() {}
			}, {
				key: "onLeftArrow",
				value: function() {}
			}, {
				key: "onRightArrow",
				value: function() {}
			}, {
				key: "onUpArrow",
				value: function() {}
			}, {
				key: "onDownArrow",
				value: function() {}
			}, {
				key: "onEnterKey",
				value: function() {}
			}, {
				key: "addDataPoint",
				value: function() {}
			}, {
				key: "removeDataPoint",
				value: function() {}
			}, {
				key: "getDataPoint",
				value: function() {}
			}, {
				key: "setCurrentDataPoint",
				value: function() {}
			}, {
				key: "updateDataset",
				value: function() {}
			}, {
				key: "getDifferentChart",
				value: function(t) {
					return E(t, this.type, this.parent, this.rawChartArgs)
				}
			}]), e
		}(),
		Bt = function(e) {
			function i(t, e) {
				return vt(this, i), bt(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, t, e))
			}
			return mt(i, e), gt(i, [{
				key: "configure",
				value: function(t) {
					yt(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "configure", this).call(this, t), this.config.maxSlices = t.maxSlices || 20, this.config.maxLegendPoints = t.maxLegendPoints || 20
				}
			}, {
				key: "calc",
				value: function() {
					var t = this,
						e = this.state,
						i = this.config.maxSlices;
					e.sliceTotals = [];
					var n = this.data.labels.map(function(e, i) {
							var n = 0;
							return t.data.datasets.map(function(t) {
								n += t.values[i]
							}), [n, e]
						}).filter(function(t) {
							return t[0] > 0
						}),
						a = n;
					if(n.length > i) {
						n.sort(function(t, e) {
							return e[0] - t[0]
						}), a = n.slice(0, i - 1);
						var s = 0;
						n.slice(i - 1).map(function(t) {
							s += t[0]
						}), a.push([s, "Rest"]), this.colors[i - 1] = "grey"
					}
					e.labels = [], a.map(function(t) {
						e.sliceTotals.push(t[0]), e.labels.push(t[1])
					})
				}
			}, {
				key: "renderLegend",
				value: function() {
					var e = this,
						i = this.state;
					this.statsWrapper.textContent = "", this.legendTotals = i.sliceTotals.slice(0, this.config.maxLegendPoints);
					var n = i.labels;
					this.legendTotals.map(function(i, a) {
						i && (t.create("div", {
							className: "stats",
							inside: e.statsWrapper
						}).innerHTML = '<span class="indicator">\n\t\t\t\t\t<i style="background: ' + e.colors[a] + '"></i>\n\t\t\t\t\t<span class="text-muted">' + n[a] + ":</span>\n\t\t\t\t\t" + i + "\n\t\t\t\t</span>")
					})
				}
			}]), i
		}(qt),
		Ut = function(i) {
			function n(t, e) {
				vt(this, n);
				var i = bt(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, t, e));
				return i.type = "percentage", i.setup(), i
			}
			return mt(n, i), gt(n, [{
				key: "makeChartArea",
				value: function() {
					this.chartWrapper.className += " graph-focus-margin", this.chartWrapper.style.marginTop = "45px", this.statsWrapper.className += " graph-focus-margin", this.statsWrapper.style.marginBottom = "30px", this.statsWrapper.style.paddingTop = "0px", this.svg = t.create("div", {
						className: "div",
						inside: this.chartWrapper
					}), this.chart = t.create("div", {
						className: "progress-chart",
						inside: this.svg
					}), this.percentageBar = t.create("div", {
						className: "progress",
						inside: this.chart
					})
				}
			}, {
				key: "render",
				value: function() {
					var e = this,
						i = this.state;
					this.grandTotal = i.sliceTotals.reduce(function(t, e) {
						return t + e
					}, 0), i.slices = [], i.sliceTotals.map(function(n, a) {
						var s = t.create("div", {
							className: "progress-bar",
							"data-index": a,
							inside: e.percentageBar,
							styles: {
								background: e.colors[a],
								width: 100 * n / e.grandTotal + "%"
							}
						});
						i.slices.push(s)
					})
				}
			}, {
				key: "bindTooltip",
				value: function() {
					var t = this,
						i = this.state;
					this.chartWrapper.addEventListener("mousemove", function(n) {
						var a = n.target;
						if(a.classList.contains("progress-bar")) {
							var s = a.getAttribute("data-index"),
								r = e(t.chartWrapper),
								o = e(a),
								l = o.left - r.left + a.offsetWidth / 2,
								h = o.top - r.top - 6,
								c = (t.formattedLabels && t.formattedLabels.length > 0 ? t.formattedLabels[s] : t.state.labels[s]) + ": ",
								u = (100 * i.sliceTotals[s] / t.grandTotal).toFixed(1);
							t.tip.setValues(l, h, {
								name: c,
								value: u + "%"
							}), t.tip.showTip()
						}
					})
				}
			}]), n
		}(Bt),
		Xt = function() {
			function t(e) {
				var i = e.layerClass,
					n = void 0 === i ? "" : i,
					a = e.layerTransform,
					s = void 0 === a ? "" : a,
					r = e.constants,
					o = e.getData,
					l = e.makeElements,
					h = e.animateElements;
				vt(this, t), this.layerTransform = s, this.constants = r, this.makeElements = l, this.getData = o, this.animateElements = h, this.store = [], this.layerClass = n, this.layerClass = "function" == typeof this.layerClass ? this.layerClass() : this.layerClass, this.refresh()
			}
			return gt(t, [{
				key: "refresh",
				value: function(t) {
					this.data = t || this.getData()
				}
			}, {
				key: "setup",
				value: function(t) {
					this.layer = y(t, this.layerClass, this.layerTransform)
				}
			}, {
				key: "make",
				value: function() {
					this.render(this.data), this.oldData = this.data
				}
			}, {
				key: "render",
				value: function(t) {
					var e = this;
					this.store = this.makeElements(t), this.layer.textContent = "", this.store.forEach(function(t) {
						e.layer.appendChild(t)
					})
				}
			}, {
				key: "update",
				value: function() {
					var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
					this.refresh();
					var e = [];
					return t && (e = this.animateElements(this.data)), e
				}
			}]), t
		}(),
		Jt = {
			pieSlices: {
				layerClass: "pie-slices",
				makeElements: function(t) {
					return t.sliceStrings.map(function(e, i) {
						var n = m(e, "pie-path", "none", t.colors[i]);
						return n.style.transition = "transform .3s;", n
					})
				},
				animateElements: function(t) {
					return this.store.map(function(e, i) {
						return G(e, t.sliceStrings[i])
					})
				}
			},
			yAxis: {
				layerClass: "y axis",
				makeElements: function(t) {
					var e = this;
					return t.positions.map(function(i, n) {
						return P(i, t.labels[n], e.constants.width, {
							mode: e.constants.mode,
							pos: e.constants.pos
						})
					})
				},
				animateElements: function(t) {
					var e = t.positions,
						i = t.labels,
						n = this.oldData.positions,
						a = this.oldData.labels,
						s = c(n, e),
						r = xt(s, 2);
					n = r[0], e = r[1];
					var o = c(a, i),
						l = xt(o, 2);
					return a = l[0], i = l[1], this.render({
						positions: n,
						labels: i
					}), this.store.map(function(t, i) {
						return F(t, e[i], n[i])
					})
				}
			},
			xAxis: {
				layerClass: "x axis",
				makeElements: function(t) {
					var e = this;
					return t.positions.map(function(i, n) {
						return L(i, t.calcLabels[n], e.constants.height, {
							mode: e.constants.mode,
							pos: e.constants.pos
						})
					})
				},
				animateElements: function(t) {
					var e = t.positions,
						i = t.calcLabels,
						n = this.oldData.positions,
						a = this.oldData.calcLabels,
						s = c(n, e),
						r = xt(s, 2);
					n = r[0], e = r[1];
					var o = c(a, i),
						l = xt(o, 2);
					return a = l[0], i = l[1], this.render({
						positions: n,
						calcLabels: i
					}), this.store.map(function(t, i) {
						return z(t, e[i], n[i])
					})
				}
			},
			yMarkers: {
				layerClass: "y-markers",
				makeElements: function(t) {
					var e = this;
					return t.map(function(t) {
						return M(t.position, t.label, e.constants.width, {
							pos: "right",
							mode: "span",
							lineType: "dashed"
						})
					})
				},
				animateElements: function(t) {
					var e = c(this.oldData, t),
						i = xt(e, 2);
					this.oldData = i[0];
					var n = (t = i[1]).map(function(t) {
							return t.position
						}),
						a = t.map(function(t) {
							return t.label
						}),
						s = this.oldData.map(function(t) {
							return t.position
						});
					return this.render(s.map(function(t, e) {
						return {
							position: s[e],
							label: a[e]
						}
					})), this.store.map(function(t, e) {
						return F(t, n[e], s[e])
					})
				}
			},
			yRegions: {
				layerClass: "y-regions",
				makeElements: function(t) {
					var e = this;
					return t.map(function(t) {
						return O(t.startPos, t.endPos, e.constants.width, t.label)
					})
				},
				animateElements: function(t) {
					var e = c(this.oldData, t),
						i = xt(e, 2);
					this.oldData = i[0];
					var n = (t = i[1]).map(function(t) {
							return t.endPos
						}),
						a = t.map(function(t) {
							return t.label
						}),
						s = t.map(function(t) {
							return t.startPos
						}),
						r = this.oldData.map(function(t) {
							return t.endPos
						}),
						o = this.oldData.map(function(t) {
							return t.startPos
						});
					this.render(r.map(function(t, e) {
						return {
							startPos: o[e],
							endPos: r[e],
							label: a[e]
						}
					}));
					var l = [];
					return this.store.map(function(t, e) {
						l = l.concat(H(t, s[e], n[e], r[e]))
					}), l
				}
			},
			barGraph: {
				layerClass: function() {
					return "dataset-units dataset-bars dataset-" + this.constants.index
				},
				makeElements: function(t) {
					var e = this.constants;
					return this.unitType = "bar", this.units = t.yPositions.map(function(i, n) {
						return C(t.xPositions[n], i, t.barWidth, e.color, t.labels[n], n, t.offsets[n], {
							zeroLine: t.zeroLine,
							barsWidth: t.barsWidth,
							minHeight: e.minHeight
						})
					}), this.units
				},
				animateElements: function(t) {
					var e = t.xPositions,
						i = t.yPositions,
						n = t.offsets,
						a = t.labels,
						s = this.oldData.xPositions,
						r = this.oldData.yPositions,
						o = this.oldData.offsets,
						l = this.oldData.labels,
						h = c(s, e),
						u = xt(h, 2);
					s = u[0], e = u[1];
					var p = c(r, i),
						d = xt(p, 2);
					r = d[0], i = d[1];
					var f = c(o, n),
						v = xt(f, 2);
					o = v[0], n = v[1];
					var g = c(l, a),
						y = xt(g, 2);
					l = y[0], a = y[1], this.render({
						xPositions: s,
						yPositions: r,
						offsets: o,
						labels: a,
						zeroLine: this.oldData.zeroLine,
						barsWidth: this.oldData.barsWidth,
						barWidth: this.oldData.barWidth
					});
					var m = [];
					return this.store.map(function(a, s) {
						m = m.concat(R(a, e[s], i[s], t.barWidth, n[s], {
							zeroLine: t.zeroLine
						}))
					}), m
				}
			},
			lineGraph: {
				layerClass: function() {
					return "dataset-units dataset-line dataset-" + this.constants.index
				},
				makeElements: function(t) {
					var e = this.constants;
					return this.unitType = "dot", this.paths = {}, e.hideLine || (this.paths = _(t.xPositions, t.yPositions, e.color, {
						heatline: e.heatline,
						regionFill: e.regionFill
					}, {
						svgDefs: e.svgDefs,
						zeroLine: t.zeroLine
					})), this.units = [], e.hideDots || (this.units = t.yPositions.map(function(i, n) {
						return D(t.xPositions[n], i, t.radius, e.color, e.valuesOverPoints ? t.values[n] : "", n)
					})), Object.values(this.paths).concat(this.units)
				},
				animateElements: function(t) {
					var e = t.xPositions,
						i = t.yPositions,
						n = t.values,
						a = this.oldData.xPositions,
						s = this.oldData.yPositions,
						r = this.oldData.values,
						o = c(a, e),
						l = xt(o, 2);
					a = l[0], e = l[1];
					var h = c(s, i),
						u = xt(h, 2);
					s = u[0], i = u[1];
					var p = c(r, n),
						d = xt(p, 2);
					r = d[0], n = d[1], this.render({
						xPositions: a,
						yPositions: s,
						values: n,
						zeroLine: this.oldData.zeroLine,
						radius: this.oldData.radius
					});
					var f = [];
					return Object.keys(this.paths).length && (f = f.concat(I(this.paths, e, i, t.zeroLine))), this.units.length && this.units.map(function(t, n) {
						f = f.concat(Y(t, e[n], i[n]))
					}), f
				}
			}
		},
		Kt = function(t) {
			function i(t, e) {
				vt(this, i);
				var n = bt(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, t, e));
				return n.type = "pie", n.initTimeout = 0, n.setup(), n
			}
			return mt(i, t), gt(i, [{
				key: "configure",
				value: function(t) {
					yt(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "configure", this).call(this, t), this.mouseMove = this.mouseMove.bind(this), this.mouseLeave = this.mouseLeave.bind(this), this.hoverRadio = t.hoverRadio || .1, this.config.startAngle = t.startAngle || 0, this.clockWise = t.clockWise || !1
				}
			}, {
				key: "prepareFirstData",
				value: function() {
					var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.data;
					return this.init = 1, t
				}
			}, {
				key: "calc",
				value: function() {
					yt(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "calc", this).call(this);
					var t = this.state;
					this.center = {
						x: this.width / 2,
						y: this.height / 2
					}, this.radius = this.height > this.width ? this.center.x : this.center.y, t.grandTotal = t.sliceTotals.reduce(function(t, e) {
						return t + e
					}, 0), this.calcSlices()
				}
			}, {
				key: "calcSlices",
				value: function() {
					var t = this,
						e = this.state,
						i = this.radius,
						n = this.clockWise,
						a = e.slicesProperties || [];
					e.sliceStrings = [], e.slicesProperties = [];
					var s = 180 - this.config.startAngle;
					e.sliceTotals.map(function(r, o) {
						var h = s,
							c = r / e.grandTotal * 360,
							u = n ? -c : c,
							p = s += u,
							d = l(h, i),
							f = l(p, i),
							v = t.init && a[o],
							g = void 0,
							y = void 0;
						t.init ? (g = v ? v.startPosition : d, y = v ? v.endPosition : d) : (g = d, y = f);
						var m = b(g, y, t.center, t.radius, t.clockWise);
						e.sliceStrings.push(m), e.slicesProperties.push({
							startPosition: d,
							endPosition: f,
							value: r,
							total: e.grandTotal,
							startAngle: h,
							endAngle: p,
							angle: u
						})
					}), this.init = 0
				}
			}, {
				key: "setupComponents",
				value: function() {
					var t = this.state,
						e = [
							["pieSlices", {}, function() {
								return {
									sliceStrings: t.sliceStrings,
									colors: this.colors
								}
							}.bind(this)]
						];
					this.components = new Map(e.map(function(t) {
						var e = X.apply(void 0, kt(t));
						return [t[0], e]
					}))
				}
			}, {
				key: "calTranslateByAngle",
				value: function(t) {
					var e = this.radius,
						i = this.hoverRadio,
						n = l(t.startAngle + t.angle / 2, e);
					return "translate3d(" + n.x * i + "px," + n.y * i + "px,0)"
				}
			}, {
				key: "hoverSlice",
				value: function(t, i, n, a) {
					if(t) {
						var s = this.colors[i];
						if(n) {
							q(t, this.calTranslateByAngle(this.state.slicesProperties[i])), t.style.fill = S(s, 50);
							var r = e(this.svg),
								o = a.pageX - r.left + 10,
								l = a.pageY - r.top - 10,
								h = (this.formatted_labels && this.formatted_labels.length > 0 ? this.formatted_labels[i] : this.state.labels[i]) + ": ",
								c = (100 * this.state.sliceTotals[i] / this.state.grandTotal).toFixed(1);
							this.tip.setValues(o, l, {
								name: h,
								value: c + "%"
							}), this.tip.showTip()
						} else q(t, "translate3d(0,0,0)"), this.tip.hideTip(), t.style.fill = s
					}
				}
			}, {
				key: "bindTooltip",
				value: function() {
					this.chartWrapper.addEventListener("mousemove", this.mouseMove), this.chartWrapper.addEventListener("mouseleave", this.mouseLeave)
				}
			}, {
				key: "mouseMove",
				value: function(t) {
					var e = t.target,
						i = this.components.get("pieSlices").store,
						n = this.curActiveSliceIndex,
						a = this.curActiveSlice;
					if(i.includes(e)) {
						var s = i.indexOf(e);
						this.hoverSlice(a, n, !1), this.curActiveSlice = e, this.curActiveSliceIndex = s, this.hoverSlice(e, s, !0, t)
					} else this.mouseLeave()
				}
			}, {
				key: "mouseLeave",
				value: function() {
					this.hoverSlice(this.curActiveSlice, this.curActiveSliceIndex, !1)
				}
			}]), i
		}(Bt),
		$t = function(t) {
			function e(t, i) {
				vt(this, e);
				var n = bt(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, i));
				n.type = "heatmap", n.domain = i.domain || "", n.subdomain = i.subdomain || "", n.data = i.data || {}, n.discreteDomains = 0 === i.discreteDomains ? 0 : 1, n.countLabel = i.countLabel || "";
				var a = new Date;
				n.start = i.start || Z(a, 365);
				var s = (i.legendColors || []).slice(0, 5);
				return n.legendColors = n.validate_colors(s) ? s : ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"], n.distribution_size = 5, n.translateX = 0, n.setup(), n
			}
			return mt(e, t), gt(e, [{
				key: "setMargins",
				value: function() {
					yt(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setMargins", this).call(this), this.leftMargin = 10, this.translateY = 10
				}
			}, {
				key: "validate_colors",
				value: function(t) {
					if(t.length < 5) return 0;
					var e = 1;
					return t.forEach(function(t) {
						W(t) || (e = 0, console.warn('"' + t + '" is not a valid color.'))
					}, this), e
				}
			}, {
				key: "configure",
				value: function() {
					yt(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "configure", this).call(this), this.today = new Date, this.start || (this.start = new Date, this.start.setFullYear(this.start.getFullYear() - 1)), this.firstWeekStart = new Date(this.start.toDateString()), this.lastWeekStart = new Date(this.today.toDateString()), 7 !== this.firstWeekStart.getDay() && Z(this.firstWeekStart, -1 * this.firstWeekStart.getDay()), 7 !== this.lastWeekStart.getDay() && Z(this.lastWeekStart, -1 * this.lastWeekStart.getDay()), this.no_of_cols = $(this.firstWeekStart + "", this.lastWeekStart + "") + 1
				}
			}, {
				key: "calcWidth",
				value: function() {
					this.baseWidth = 12 * (this.no_of_cols + 3), this.discreteDomains && (this.baseWidth += 144)
				}
			}, {
				key: "makeChartArea",
				value: function() {
					yt(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "makeChartArea", this).call(this), this.domainLabelGroup = y(this.drawArea, "domain-label-group chart-label"), this.dataGroups = y(this.drawArea, "data-groups", "translate(0, 20)"), this.container.querySelector(".title").style.display = "None", this.container.querySelector(".sub-title").style.display = "None", this.container.querySelector(".graph-stats-container").style.display = "None", this.chartWrapper.style.marginTop = "0px", this.chartWrapper.style.paddingTop = "0px"
				}
			}, {
				key: "calc",
				value: function() {
					var t = this,
						e = Object.keys(this.data).map(function(e) {
							return t.data[e]
						});
					this.distribution = lt(e, this.distribution_size), this.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
				}
			}, {
				key: "render",
				value: function() {
					this.renderAllWeeksAndStoreXValues(this.no_of_cols)
				}
			}, {
				key: "renderAllWeeksAndStoreXValues",
				value: function(t) {
					this.domainLabelGroup.textContent = "", this.dataGroups.textContent = "";
					var e = new Date(this.firstWeekStart);
					this.weekCol = 0, this.currentMonth = e.getMonth(), this.months = [this.currentMonth + ""], this.monthWeeks = {}, this.monthStartPoints = [], this.monthWeeks[this.currentMonth] = 0, this.monthStartPoints.push(13);
					for(var i = 0; i < t; i++) {
						var n = void 0,
							a = 0,
							s = new Date(e),
							r = this.get_week_squares_group(s, this.weekCol),
							o = xt(r, 2);
						n = o[0], a = o[1], this.dataGroups.appendChild(n), this.weekCol += 1 + parseInt(this.discreteDomains && a), this.monthWeeks[this.currentMonth]++, a && (this.currentMonth = (this.currentMonth + 1) % 12, this.months.push(this.currentMonth + ""), this.monthWeeks[this.currentMonth] = 1), Z(e, 7)
					}
					this.render_month_labels()
				}
			}, {
				key: "get_week_squares_group",
				value: function(t, e) {
					for(var i = this.today.getTime(), n = 0, a = 0, s = y(this.dataGroups, "data-group"), r = 0, o = 0; o < 7; o += 1, r += 12) {
						var l = 0,
							h = 0,
							c = t.getTime() / 1e3,
							u = Math.floor(c - c % 86400).toFixed(1);
						this.data[u] && (l = this.data[u]), this.data[Math.round(u)] && (l = this.data[Math.round(u)]), l && (h = ht(l, this.distribution));
						var p = 13 + 12 * (e + a),
							d = {
								"data-date": K(t),
								"data-value": l,
								"data-day": t.getDay()
							},
							f = k("day", p, r, 10, this.legendColors[h], d);
						s.appendChild(f);
						var v = new Date(t);
						if(Z(v, 1), v.getTime() > i) break;
						v.getMonth() - t.getMonth() && (n = 1, this.discreteDomains && (a = 1), this.monthStartPoints.push(13 + 12 * (e + a))), t = v
					}
					return [s, n]
				}
			}, {
				key: "render_month_labels",
				value: function() {
					var t = this;
					this.months.shift(), this.monthStartPoints.shift(), this.months.pop(), this.monthStartPoints.pop(), this.monthStartPoints.map(function(e, i) {
						var n = w("y-value-text", e + 12, 10, t.monthNames[t.months[i]].substring(0, 3));
						t.domainLabelGroup.appendChild(n)
					})
				}
			}, {
				key: "bindTooltip",
				value: function() {
					var t = this;
					Array.prototype.slice.call(document.querySelectorAll(".data-group .day")).map(function(e) {
						e.addEventListener("mouseenter", function(e) {
							var i = e.target.getAttribute("data-value"),
								n = e.target.getAttribute("data-date").split("-"),
								a = t.monthNames[parseInt(n[1]) - 1].substring(0, 3),
								s = t.chartWrapper.getBoundingClientRect(),
								r = e.target.getBoundingClientRect(),
								o = parseInt(e.target.getAttribute("width")),
								l = r.left - s.left + (o + 2) / 2,
								h = r.top - s.top - (o + 2) / 2,
								c = i + " " + t.countLabel,
								u = " on " + a + " " + n[0] + ", " + n[2];
							t.tip.setValues(l, h, {
								name: u,
								value: c,
								valueFirst: 1
							}, []), t.tip.showTip()
						})
					})
				}
			}, {
				key: "update",
				value: function(t) {
					yt(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "update", this).call(this, t), this.bindTooltip()
				}
			}]), e
		}(qt),
		Qt = function(i) {
			function n(t, e) {
				vt(this, n);
				var i = bt(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, t, e));
				return i.barOptions = e.barOptions || {}, i.lineOptions = e.lineOptions || {}, i.type = e.type || "line", i.init = 1, i.setup(), i
			}
			return mt(n, i), gt(n, [{
				key: "configure",
				value: function(t) {
					yt(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "configure", this).call(this), t.axisOptions = t.axisOptions || {}, t.tooltipOptions = t.tooltipOptions || {}, this.config.xAxisMode = t.axisOptions.xAxisMode || "span", this.config.yAxisMode = t.axisOptions.yAxisMode || "span", this.config.xIsSeries = t.axisOptions.xIsSeries || 0, this.config.formatTooltipX = t.tooltipOptions.formatTooltipX, this.config.formatTooltipY = t.tooltipOptions.formatTooltipY, this.config.valuesOverPoints = t.valuesOverPoints
				}
			}, {
				key: "setMargins",
				value: function() {
					yt(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "setMargins", this).call(this), this.leftMargin = 60, this.rightMargin = 60
				}
			}, {
				key: "prepareData",
				value: function() {
					return ct(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.data, this.type)
				}
			}, {
				key: "prepareFirstData",
				value: function() {
					return ut(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.data)
				}
			}, {
				key: "calc",
				value: function() {
					var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					this.calcXPositions(), t || this.calcYAxisParameters(this.getAllYValues(), "line" === this.type)
				}
			}, {
				key: "calcXPositions",
				value: function() {
					var t = this.state,
						e = this.data.labels;
					t.datasetLength = e.length, t.unitWidth = this.width / t.datasetLength, t.xOffset = t.unitWidth / 2, t.xAxis = {
						labels: e,
						positions: e.map(function(e, i) {
							return s(t.xOffset + i * t.unitWidth)
						})
					}
				}
			}, {
				key: "calcYAxisParameters",
				value: function(t) {
					var e = nt(t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "false"),
						i = this.height / rt(e),
						n = st(e) * i,
						a = this.height - at(e) * n;
					this.state.yAxis = {
						labels: e,
						positions: e.map(function(t) {
							return a - t * i
						}),
						scaleMultiplier: i,
						zeroLine: a
					}, this.calcDatasetPoints(), this.calcYExtremes(), this.calcYRegions()
				}
			}, {
				key: "calcDatasetPoints",
				value: function() {
					var t = this.state,
						e = function(e) {
							return e.map(function(e) {
								return ot(e, t.yAxis)
							})
						};
					t.datasets = this.data.datasets.map(function(t, i) {
						var n = t.values,
							a = t.cumulativeYs || [];
						return {
							name: t.name,
							index: i,
							chartType: t.chartType,
							values: n,
							yPositions: e(n),
							cumulativeYs: a,
							cumulativeYPos: e(a)
						}
					})
				}
			}, {
				key: "calcYExtremes",
				value: function() {
					var t = this.state;
					if(this.barOptions.stacked) return void(t.yExtremes = t.datasets[t.datasets.length - 1].cumulativeYPos);
					t.yExtremes = new Array(t.datasetLength).fill(9999), t.datasets.map(function(e) {
						e.yPositions.map(function(e, i) {
							e < t.yExtremes[i] && (t.yExtremes[i] = e)
						})
					})
				}
			}, {
				key: "calcYRegions",
				value: function() {
					var t = this.state;
					this.data.yMarkers && (this.state.yMarkers = this.data.yMarkers.map(function(e) {
						return e.position = ot(e.value, t.yAxis), e
					})), this.data.yRegions && (this.state.yRegions = this.data.yRegions.map(function(e) {
						return e.startPos = ot(e.start, t.yAxis), e.endPos = ot(e.end, t.yAxis), e
					}))
				}
			}, {
				key: "getAllYValues",
				value: function() {
					var t, e = this,
						i = "values";
					if(this.barOptions.stacked) {
						i = "cumulativeYs";
						var n = new Array(this.state.datasetLength).fill(0);
						this.data.datasets.map(function(t, a) {
							var s = e.data.datasets[a].values;
							t[i] = n = n.map(function(t, e) {
								return t + s[e]
							})
						})
					}
					var a = this.data.datasets.map(function(t) {
						return t[i]
					});
					return this.data.yMarkers && a.push(this.data.yMarkers.map(function(t) {
						return t.value
					})), this.data.yRegions && this.data.yRegions.map(function(t) {
						a.push([t.end, t.start])
					}), (t = []).concat.apply(t, kt(a))
				}
			}, {
				key: "setupComponents",
				value: function() {
					var t = this,
						e = [
							["yAxis", {
								mode: this.config.yAxisMode,
								width: this.width
							}, function() {
								return this.state.yAxis
							}.bind(this)],
							["xAxis", {
								mode: this.config.xAxisMode,
								height: this.height
							}, function() {
								var t = this.state;
								return t.xAxis.calcLabels = pt(this.width, t.xAxis.labels, this.config.xIsSeries), t.xAxis
							}.bind(this)],
							["yRegions", {
								width: this.width,
								pos: "right"
							}, function() {
								return this.state.yRegions
							}.bind(this)]
						],
						i = this.state.datasets.filter(function(t) {
							return "bar" === t.chartType
						}),
						n = this.state.datasets.filter(function(t) {
							return "line" === t.chartType
						}),
						a = i.map(function(e) {
							var n = e.index;
							return ["barGraph-" + e.index, {
								index: n,
								color: t.colors[n],
								stacked: t.barOptions.stacked,
								valuesOverPoints: t.config.valuesOverPoints,
								minHeight: .01 * t.height
							}, function() {
								var t = this.state,
									e = t.datasets[n],
									a = this.barOptions.stacked,
									s = this.barOptions.spaceRatio || .5,
									r = t.unitWidth * (1 - s),
									o = r / (a ? 1 : i.length),
									l = t.xAxis.positions.map(function(t) {
										return t - r / 2
									});
								a || (l = l.map(function(t) {
									return t + o * n
								}));
								var h = new Array(t.datasetLength).fill("");
								this.config.valuesOverPoints && (h = a && e.index === t.datasets.length - 1 ? e.cumulativeYs : e.values);
								var c = new Array(t.datasetLength).fill(0);
								return a && (c = e.yPositions.map(function(t, i) {
									return t - e.cumulativeYPos[i]
								})), {
									xPositions: l,
									yPositions: e.yPositions,
									offsets: c,
									labels: h,
									zeroLine: t.yAxis.zeroLine,
									barsWidth: r,
									barWidth: o
								}
							}.bind(t)]
						}),
						s = n.map(function(e) {
							var i = e.index;
							return ["lineGraph-" + e.index, {
								index: i,
								color: t.colors[i],
								svgDefs: t.svgDefs,
								heatline: t.lineOptions.heatline,
								regionFill: t.lineOptions.regionFill,
								hideDots: t.lineOptions.hideDots,
								hideLine: t.lineOptions.hideLine,
								valuesOverPoints: t.config.valuesOverPoints
							}, function() {
								var t = this.state,
									e = t.datasets[i];
								return {
									xPositions: t.xAxis.positions,
									yPositions: e.yPositions,
									values: e.values,
									zeroLine: t.yAxis.zeroLine,
									radius: this.lineOptions.dotSize || 4
								}
							}.bind(t)]
						}),
						r = [
							["yMarkers", {
								width: this.width,
								pos: "right"
							}, function() {
								return this.state.yMarkers
							}.bind(this)]
						];
					e = e.concat(a, s, r);
					var o = ["yMarkers", "yRegions"];
					this.dataUnitComponents = [], this.components = new Map(e.filter(function(e) {
						return !o.includes(e[0]) || t.state[e[0]]
					}).map(function(e) {
						var i = X.apply(void 0, kt(e));
						return(e[0].includes("lineGraph") || e[0].includes("barGraph")) && t.dataUnitComponents.push(i), [e[0], i]
					}))
				}
			}, {
				key: "bindTooltip",
				value: function() {
					var t = this;
					this.chartWrapper.addEventListener("mousemove", function(i) {
						var n = e(t.chartWrapper),
							a = i.pageX - n.left - t.leftMargin;
						i.pageY - n.top - t.translateY < t.height + 2 * t.translateY ? t.mapTooltipXPosition(a) : t.tip.hideTip()
					})
				}
			}, {
				key: "mapTooltipXPosition",
				value: function(t) {
					var e = this,
						i = this.state;
					if(i.yExtremes) {
						var n = this.config.formatTooltipY,
							a = this.config.formatTooltipX,
							s = i.xAxis.labels;
						a && a(s[0]) && (s = s.map(function(t) {
							return a(t)
						})), n = n && n(i.yAxis.labels[0]) ? n : 0;
						for(var r = i.datasetLength - 1; r >= 0; r--) {
							var o = i.xAxis.positions[r];
							if(t > o - i.unitWidth / 2) {
								var l = o + this.leftMargin,
									h = i.yExtremes[r] + this.translateY,
									c = this.data.datasets.map(function(t, i) {
										return {
											title: t.name,
											value: n ? n(t.values[r]) : t.values[r],
											color: e.colors[i]
										}
									});
								this.tip.setValues(l, h, {
									name: s[r],
									value: ""
								}, c, r), this.tip.showTip();
								break
							}
						}
					}
				}
			}, {
				key: "renderLegend",
				value: function() {
					var e = this,
						i = this.data;
					this.statsWrapper.textContent = "", i.datasets.length > 1 && i.datasets.map(function(i, n) {
						t.create("div", {
							className: "stats",
							inside: e.statsWrapper
						}).innerHTML = '<span class="indicator">\n\t\t\t\t\t<i style="background: ' + e.colors[n] + '"></i>\n\t\t\t\t\t' + i.name + "\n\t\t\t\t</span>"
					})
				}
			}, {
				key: "makeOverlay",
				value: function() {
					var t = this;
					if(this.init) return void(this.init = 0);
					this.overlayGuides && this.overlayGuides.forEach(function(t) {
						var e = t.overlay;
						e.parentNode.removeChild(e)
					}), this.overlayGuides = this.dataUnitComponents.map(function(t) {
						return {
							type: t.unitType,
							overlay: void 0,
							units: t.units
						}
					}), void 0 === this.state.currentIndex && (this.state.currentIndex = this.state.datasetLength - 1), this.overlayGuides.map(function(e) {
						var i = e.units[t.state.currentIndex];
						e.overlay = _t[e.type](i), t.drawArea.appendChild(e.overlay)
					})
				}
			}, {
				key: "updateOverlayGuides",
				value: function() {
					this.overlayGuides && this.overlayGuides.forEach(function(t) {
						var e = t.overlay;
						e.parentNode.removeChild(e)
					})
				}
			}, {
				key: "bindOverlay",
				value: function() {
					var t = this;
					this.parent.addEventListener("data-select", function() {
						t.updateOverlay()
					})
				}
			}, {
				key: "bindUnits",
				value: function() {
					var t = this;
					this.dataUnitComponents.map(function(e) {
						e.units.map(function(e) {
							e.addEventListener("click", function() {
								var i = e.getAttribute("data-point-index");
								t.setCurrentDataPoint(i)
							})
						})
					}), this.tip.container.addEventListener("click", function() {
						var e = t.tip.container.getAttribute("data-point-index");
						t.setCurrentDataPoint(e)
					})
				}
			}, {
				key: "updateOverlay",
				value: function() {
					var t = this;
					this.overlayGuides.map(function(e) {
						var i = e.units[t.state.currentIndex];
						Nt[e.type](i, e.overlay)
					})
				}
			}, {
				key: "onLeftArrow",
				value: function() {
					this.setCurrentDataPoint(this.state.currentIndex - 1)
				}
			}, {
				key: "onRightArrow",
				value: function() {
					this.setCurrentDataPoint(this.state.currentIndex + 1)
				}
			}, {
				key: "getDataPoint",
				value: function() {
					var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.currentIndex,
						e = this.state;
					return {
						index: t,
						label: e.xAxis.labels[t],
						values: e.datasets.map(function(e) {
							return e.values[t]
						})
					}
				}
			}, {
				key: "setCurrentDataPoint",
				value: function(t) {
					var e = this.state;
					(t = parseInt(t)) < 0 && (t = 0), t >= e.xAxis.labels.length && (t = e.xAxis.labels.length - 1), t !== e.currentIndex && (e.currentIndex = t, a(this.parent, "data-select", this.getDataPoint()))
				}
			}, {
				key: "addDataPoint",
				value: function(t, e) {
					var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.state.datasetLength;
					yt(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "addDataPoint", this).call(this, t, e, i), this.data.labels.splice(i, 0, t), this.data.datasets.map(function(t, n) {
						t.values.splice(i, 0, e[n])
					}), this.update(this.data)
				}
			}, {
				key: "removeDataPoint",
				value: function() {
					var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.datasetLength - 1;
					this.data.labels.length <= 1 || (yt(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "removeDataPoint", this).call(this, t), this.data.labels.splice(t, 1), this.data.datasets.map(function(e) {
						e.values.splice(t, 1)
					}), this.update(this.data))
				}
			}, {
				key: "updateDataset",
				value: function(t) {
					var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
					this.data.datasets[e].values = t, this.update(this.data)
				}
			}, {
				key: "updateDatasets",
				value: function(t) {
					this.data.datasets.map(function(e, i) {
						t[i] && (e.values = t[i])
					}), this.update(this.data)
				}
			}]), n
		}(qt),
		Zt = {
			percentage: Ut,
			heatmap: $t,
			pie: Kt
		},
		te = function t(e, i) {
			return vt(this, t), dt(i.type, e, i)
		};
	return te
}();
//# sourceMappingURL=frappe-charts.min.js.map