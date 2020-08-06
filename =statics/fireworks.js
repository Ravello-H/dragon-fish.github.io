!(function () {
  $('body').append('<canvas id="fireworks" style="position: fixed; left: 0px; top: 0px; pointer-events: none; z-index: 114514;"></canvas>');
  var $jscomp = { scope: {} }; $jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function (c, a, b) { if (b.get || b.set) { throw new TypeError("ES3 does not support getters and setters.") } c != Array.prototype && c != Object.prototype && (c[a] = b.value) }; $jscomp.getGlobal = function (a) { return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a }; $jscomp.global = $jscomp.getGlobal(this); $jscomp.SYMBOL_PREFIX = "jscomp_symbol_"; $jscomp.initSymbol = function () { $jscomp.initSymbol = function () { }; $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol) }; $jscomp.symbolCounter_ = 0; $jscomp.Symbol = function (a) { return $jscomp.SYMBOL_PREFIX + (a || "") + $jscomp.symbolCounter_++ }; $jscomp.initSymbolIterator = function () { $jscomp.initSymbol(); var a = $jscomp.global.Symbol.iterator; a || (a = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator")); "function" != typeof Array.prototype[a] && $jscomp.defineProperty(Array.prototype, a, { configurable: !0, writable: !0, value: function () { return $jscomp.arrayIterator(this) } }); $jscomp.initSymbolIterator = function () { } }; $jscomp.arrayIterator = function (b) { var a = 0; return $jscomp.iteratorPrototype(function () { return a < b.length ? { done: !1, value: b[a++] } : { done: !0 } }) }; $jscomp.iteratorPrototype = function (a) { $jscomp.initSymbolIterator(); a = { next: a }; a[$jscomp.global.Symbol.iterator] = function () { return this }; return a }; $jscomp.array = $jscomp.array || {}; $jscomp.iteratorFromArray = function (d, b) { $jscomp.initSymbolIterator(); d instanceof String && (d += ""); var c = 0, a = { next: function () { if (c < d.length) { var e = c++; return { value: b(e, d[e]), done: !1 } } a.next = function () { return { done: !0, value: void 0 } }; return a.next() } }; a[Symbol.iterator] = function () { return a }; return a }; $jscomp.polyfill = function (f, c, d, a) { if (c) { d = $jscomp.global; f = f.split("."); for (a = 0; a < f.length - 1; a++) { var b = f[a]; b in d || (d[b] = {}); d = d[b] } f = f[f.length - 1]; a = d[f]; c = c(a); c != a && null != c && $jscomp.defineProperty(d, f, { configurable: !0, writable: !0, value: c }) } }; $jscomp.polyfill("Array.prototype.keys", function (a) { return a ? a : function () { return $jscomp.iteratorFromArray(this, function (b) { return b }) } }, "es6-impl", "es3"); var $jscomp$this = this; (function (b, a) { "function" === typeof define && define.amd ? define([], a) : "object" === typeof module && module.exports ? module.exports = a() : b.anime = a() })(this, function () {
    function aB(e) { if (!aA.col(e)) { try { return document.querySelectorAll(e) } catch (h) { } } } function aw(h, u) { for (var q = h.length, e = 2 <= arguments.length ? arguments[1] : void 0, p = [], r = 0; r < q; r++) { if (r in h) { var m = h[r]; u.call(e, m, r, h) && p.push(m) } } return p } function ay(e) { return e.reduce(function (h, m) { return h.concat(aA.arr(m) ? ay(m) : m) }, []) } function az(e) { if (aA.arr(e)) { return e } aA.str(e) && (e = aB(e) || e); return e instanceof NodeList || e instanceof HTMLCollection ? [].slice.call(e) : [e] } function av(e, h) { return e.some(function (m) { return m === h }) } function ai(e) { var m = {}, h; for (h in e) { m[h] = e[h] } return m } function ah(h, p) { var m = ai(h), e; for (e in h) { m[e] = p.hasOwnProperty(e) ? p[e] : h[e] } return m } function ar(h, p) { var m = ai(h), e; for (e in p) { m[e] = aA.und(h[e]) ? p[e] : h[e] } return m } function k(e) { e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (p, u, r, q) { return u + u + r + r + q + q }); var m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e); e = parseInt(m[1], 16); var h = parseInt(m[2], 16), m = parseInt(m[3], 16); return "rgba(" + e + "," + h + "," + m + ",1)" } function j(h) { function u(y, z, v) { 0 > v && (v += 1); 1 < v && --v; return v < 1 / 6 ? y + 6 * (z - y) * v : 0.5 > v ? z : v < 2 / 3 ? y + (z - y) * (2 / 3 - v) * 6 : y } var q = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(h) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(h); h = parseInt(q[1]) / 360; var e = parseInt(q[2]) / 100, p = parseInt(q[3]) / 100, q = q[4] || 1; if (0 == e) { p = e = h = p } else { var r = 0.5 > p ? p * (1 + e) : p + e - p * e, m = 2 * p - r, p = u(m, r, h + 1 / 3), e = u(m, r, h); h = u(m, r, h - 1 / 3) } return "rgba(" + 255 * p + "," + 255 * e + "," + 255 * h + "," + q + ")" } function at(e) { if (e = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e)) { return e[2] } } function i(e) { if (-1 < e.indexOf("translate") || "perspective" === e) { return "px" } if (-1 < e.indexOf("rotate") || -1 < e.indexOf("skew")) { return "deg" } } function ad(e, h) { return aA.fnc(e) ? e(h.target, h.id, h.total) : e } function ag(e, h) { if (h in e.style) { return getComputedStyle(e).getPropertyValue(h.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()) || "0" } } function ac(e, h) { if (aA.dom(e) && av(g, h)) { return "transform" } if (aA.dom(e) && (e.getAttribute(h) || aA.svg(e) && e[h])) { return "attribute" } if (aA.dom(e) && "transform" !== h && ag(e, h)) { return "css" } if (null != e[h]) { return "object" } } function f(h, u) { var q = i(u), q = -1 < u.indexOf("scale") ? 1 : 0 + q; h = h.style.transform; if (!h) { return q } for (var e = [], p = [], r = [], m = /(\w+)\((.+?)\)/g; e = m.exec(h);) { p.push(e[1]), r.push(e[2]) } h = aw(r, function (y, v) { return p[v] === u }); return h.length ? h[0] : q } function ab(e, h) { switch (ac(e, h)) { case "transform": return f(e, h); case "css": return ag(e, h); case "attribute": return e.getAttribute(h) }return e[h] || 0 } function G(h, p) { var m = /^(\*=|\+=|-=)/.exec(h); if (!m) { return h } var e = at(h) || 0; p = parseFloat(p); h = parseFloat(h.replace(m[0], "")); switch (m[0][0]) { case "+": return p + h + e; case "-": return p - h + e; case "*": return p * h + e } } function af(e, h) {
      return Math.sqrt(Math.pow(h.x - e.x, 2) + Math.pow(h.y - e.y, 2))
    } function x(h) { h = h.points; for (var q = 0, p, e = 0; e < h.numberOfItems; e++) { var m = h.getItem(e); 0 < e && (q += af(p, m)); p = m } return q } function w(e) { if (e.getTotalLength) { return e.getTotalLength() } switch (e.tagName.toLowerCase()) { case "circle": return 2 * Math.PI * e.getAttribute("r"); case "rect": return 2 * e.getAttribute("width") + 2 * e.getAttribute("height"); case "line": return af({ x: e.getAttribute("x1"), y: e.getAttribute("y1") }, { x: e.getAttribute("x2"), y: e.getAttribute("y2") }); case "polyline": return x(e); case "polygon": var h = e.points; return x(e) + af(h.getItem(h.numberOfItems - 1), h.getItem(0)) } } function d(h, r) { function p(u) { u = void 0 === u ? 0 : u; return h.el.getPointAtLength(1 <= r + u ? r + u : 0) } var e = p(), m = p(-1), q = p(1); switch (h.property) { case "x": return e.x; case "y": return e.y; case "angle": return 180 * Math.atan2(q.y - m.y, q.x - m.x) / Math.PI } } function t(h, q) { var p = /-?\d*\.?\d+/g, e; e = aA.pth(h) ? h.totalLength : h; if (aA.col(e)) { if (aA.rgb(e)) { var m = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e); e = m ? "rgba(" + m[1] + ",1)" : e } else { e = aA.hex(e) ? k(e) : aA.hsl(e) ? j(e) : void 0 } } else { m = (m = at(e)) ? e.substr(0, e.length - m.length) : e, e = q && !/\s/g.test(e) ? m + q : m } e += ""; return { original: e, numbers: e.match(p) ? e.match(p).map(Number) : [0], strings: aA.str(h) || q ? e.split(p) : [] } } function s(e) { e = e ? ay(aA.arr(e) ? e.map(az) : az(e)) : []; return aw(e, function (m, p, h) { return h.indexOf(m) === p }) } function c(e) { var h = s(e); return h.map(function (p, m) { return { target: p, id: m, total: h.length } }) } function al(h, p) { var m = ai(p); if (aA.arr(h)) { var e = h.length; 2 !== e || aA.obj(h[0]) ? aA.fnc(p.duration) || (m.duration = p.duration / e) : h = { value: h } } return az(h).map(function (r, q) { q = q ? 0 : p.delay; r = aA.obj(r) && !aA.pth(r) ? r : { value: r }; aA.und(r.delay) && (r.delay = q); return r }).map(function (q) { return ar(q, m) }) } function aC(h, q) { var p = {}, e; for (e in h) { var m = ad(h[e], q); aA.arr(m) && (m = m.map(function (r) { return ad(r, q) }), 1 === m.length && (m = m[0])); p[e] = m } p.duration = parseFloat(p.duration); p.delay = parseFloat(p.delay); return p } function ao(e) { return aA.arr(e) ? ak.apply(this, e) : o[e] } function am(e, m) { var h; return e.tweens.map(function (p) { p = aC(p, m); var u = p.value, v = ab(m.target, e.name), r = h ? h.to.original : v, r = aA.arr(u) ? u[0] : r, q = G(aA.arr(u) ? u[1] : u, r), v = at(q) || at(r) || at(v); p.from = t(r, v); p.to = t(q, v); p.start = h ? h.end : e.offset; p.end = p.start + p.delay + p.duration; p.easing = ao(p.easing); p.elasticity = (1000 - Math.min(Math.max(p.elasticity, 1), 999)) / 1000; p.isPath = aA.pth(u); p.isColor = aA.col(p.from.original); p.isColor && (p.round = 1); return h = p }) } function a(e, h) { return aw(ay(e.map(function (m) { return h.map(function (p) { var r = ac(m.target, p.name); if (r) { var q = am(p, m); p = { type: r, property: p.name, animatable: m, tweens: q, duration: q[q.length - 1].end, delay: q[0].delay } } else { p = void 0 } return p }) })), function (m) { return !aA.und(m) }) } function n(h, q, p, e) { var m = "delay" === h; return q.length ? (m ? Math.min : Math.max).apply(Math, q.map(function (r) { return r[h] })) : m ? e.delay : p.offset + e.delay + e.duration } function ap(m) { var v = ah(an, m), u = ah(l, m), h = c(m.targets), q = [], r = ar(v, u), p; for (p in m) { r.hasOwnProperty(p) || "targets" === p || q.push({ name: p, offset: r.offset, tweens: al(m[p], u) }) } m = a(h, q); return ar(v, { children: [], animatables: h, animations: m, duration: n("duration", m, v, u), delay: n("delay", m, v, u) }) } function ax(F) {
      function D() { return window.Promise && new Promise(function (e) { return q = e }) } function C(e) { return z.reversed ? z.duration - e : e } function E(V) { for (var T = 0, S = {}, R = z.animations, P = R.length; T < P;) { var Q = R[T], N = Q.animatable, O = Q.tweens, K = O.length - 1, M = O[K]; K && (M = aw(O, function (e) { return V < e.end })[0] || M); for (var O = Math.min(Math.max(V - M.start - M.delay, 0), M.duration) / M.duration, W = isNaN(O) ? 1 : M.easing(O, M.elasticity), O = M.to.strings, J = M.round, K = [], L = void 0, L = M.to.numbers.length, X = 0; X < L; X++) { var U = void 0, U = M.to.numbers[X], I = M.from.numbers[X], U = M.isPath ? d(M.value, W * U) : I + W * (U - I); J && (M.isColor && 2 < X || (U = Math.round(U * J) / J)); K.push(U) } if (M = O.length) { for (L = O[0], W = 0; W < M; W++) { J = O[W + 1], X = K[W], isNaN(X) || (L = J ? L + (X + J) : L + (X + " ")) } } else { L = K[0] } b[Q.type](N.target, Q.property, L, S, N.id); Q.currentValue = L; T++ } if (T = Object.keys(S).length) { for (R = 0; R < T; R++) { ae || (ae = ag(document.body, "transform") ? "transform" : "-webkit-transform"), z.animatables[R].target.style[ae] = S[R].join(" ") } } z.currentTime = V; z.progress = V / z.duration * 100 } function A(e) { if (z[e]) { z[e](z) } } function B() { z.remaining && !0 !== z.remaining && z.remaining-- } function v(I) { var p = z.duration, m = z.offset, K = m + z.delay, e = z.currentTime, J = z.reversed, h = C(I); if (z.children.length) { var N = z.children, L = N.length; if (h >= z.currentTime) { for (var M = 0; M < L; M++) { N[M].seek(h) } } else { for (; L--;) { N[L].seek(h) } } } if (h >= K || !p) { z.began || (z.began = !0, A("begin")), A("run") } if (h > m && h < p) { E(h) } else { if (h <= m && 0 !== e && (E(0), J && B()), h >= p && e !== p || !p) { E(p), J || B() } } A("update"); I >= p && (z.remaining ? (H = y, "alternate" === z.direction && (z.reversed = !z.reversed)) : (z.pause(), z.completed || (z.completed = !0, A("complete"), "Promise" in window && (q(), r = D()))), u = 0) } F = void 0 === F ? {} : F; var y, H, u = 0, q = null, r = D(), z = ap(F); z.reset = function () {
        var e = z.direction, h = z.loop; z.currentTime = 0; z.progress = 0; z.paused = !0; z.began = !1; z.completed = !1; z.reversed = "reverse" === e; z.remaining = "alternate" === e && 1 === h ? 2 : h; E(0); for (e = z.children.length; e--;) {
        z.children[e].reset()
        }
      }; z.tick = function (e) { y = e; H || (H = y); v((u + y - H) * ax.speed) }; z.seek = function (e) { v(C(e)) }; z.pause = function () { var e = au.indexOf(z); -1 < e && au.splice(e, 1); z.paused = !0 }; z.play = function () { z.paused && (z.paused = !1, H = 0, u = C(z.currentTime), au.push(z), aj || aq()) }; z.reverse = function () { z.reversed = !z.reversed; H = 0; u = C(z.currentTime) }; z.restart = function () { z.pause(); z.reset(); z.play() }; z.finished = r; z.reset(); z.autoplay && z.play(); return z
    } var an = { update: void 0, begin: void 0, run: void 0, complete: void 0, loop: 1, direction: "normal", autoplay: !0, offset: 0 }, l = { duration: 1000, delay: 0, easing: "easeOutElastic", elasticity: 500, round: 0 }, g = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "), ae, aA = { arr: function (e) { return Array.isArray(e) }, obj: function (e) { return -1 < Object.prototype.toString.call(e).indexOf("Object") }, pth: function (e) { return aA.obj(e) && e.hasOwnProperty("totalLength") }, svg: function (e) { return e instanceof SVGElement }, dom: function (e) { return e.nodeType || aA.svg(e) }, str: function (e) { return "string" === typeof e }, fnc: function (e) { return "function" === typeof e }, und: function (e) { return "undefined" === typeof e }, hex: function (e) { return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e) }, rgb: function (e) { return /^rgb/.test(e) }, hsl: function (e) { return /^hsl/.test(e) }, col: function (e) { return aA.hex(e) || aA.rgb(e) || aA.hsl(e) } }, ak = function () { function e(m, p, h) { return (((1 - 3 * h + 3 * p) * m + (3 * h - 6 * p)) * m + 3 * p) * m } return function (u, r, h, p) { if (0 <= u && 1 >= u && 0 <= h && 1 >= h) { var q = new Float32Array(11); if (u !== r || h !== p) { for (var m = 0; 11 > m; ++m) { q[m] = e(0.1 * m, u, h) } } return function (z) { if (u === r && h === p) { return z } if (0 === z) { return 0 } if (1 === z) { return 1 } for (var A = 0, y = 1; 10 !== y && q[y] <= z; ++y) { A += 0.1 } --y; var y = A + (z - q[y]) / (q[y + 1] - q[y]) * 0.1, C = 3 * (1 - 3 * h + 3 * u) * y * y + 2 * (3 * h - 6 * u) * y + 3 * u; if (0.001 <= C) { for (A = 0; 4 > A; ++A) { C = 3 * (1 - 3 * h + 3 * u) * y * y + 2 * (3 * h - 6 * u) * y + 3 * u; if (0 === C) { break } var v = e(y, u, h) - z, y = y - v / C } z = y } else { if (0 === C) { z = y } else { var y = A, A = A + 0.1, B = 0; do { v = y + (A - y) / 2, C = e(v, u, h) - z, 0 < C ? A = v : y = v } while (1e-7 < Math.abs(C) && 10 > ++B); z = v } } return e(z, r, p) } } } }(), o = function () { function m(v, e) { return 0 === v || 1 === v ? v : -Math.pow(2, 10 * (v - 1)) * Math.sin(2 * (v - 1 - e / (2 * Math.PI) * Math.asin(1)) * Math.PI / e) } var u = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "), r = { In: [[0.55, 0.085, 0.68, 0.53], [0.55, 0.055, 0.675, 0.19], [0.895, 0.03, 0.685, 0.22], [0.755, 0.05, 0.855, 0.06], [0.47, 0, 0.745, 0.715], [0.95, 0.05, 0.795, 0.035], [0.6, 0.04, 0.98, 0.335], [0.6, -0.28, 0.735, 0.045], m], Out: [[0.25, 0.46, 0.45, 0.94], [0.215, 0.61, 0.355, 1], [0.165, 0.84, 0.44, 1], [0.23, 1, 0.32, 1], [0.39, 0.575, 0.565, 1], [0.19, 1, 0.22, 1], [0.075, 0.82, 0.165, 1], [0.175, 0.885, 0.32, 1.275], function (e, v) { return 1 - m(1 - e, v) }], InOut: [[0.455, 0.03, 0.515, 0.955], [0.645, 0.045, 0.355, 1], [0.77, 0, 0.175, 1], [0.86, 0, 0.07, 1], [0.445, 0.05, 0.55, 0.95], [1, 0, 0, 1], [0.785, 0.135, 0.15, 0.86], [0.68, -0.55, 0.265, 1.55], function (e, v) { return 0.5 > e ? m(2 * e, v) / 2 : 1 - m(-2 * e + 2, v) / 2 }] }, h = { linear: ak(0.25, 0.25, 0.75, 0.75) }, p = {}, q; for (q in r) { p.type = q, r[p.type].forEach(function (e) { return function (y, v) { h["ease" + e.type + u[v]] = aA.fnc(y) ? y : ak.apply($jscomp$this, y) } }(p)), p = { type: p.type } } return h }(), b = { css: function (e, m, h) { return e.style[m] = h }, attribute: function (e, m, h) { return e.setAttribute(m, h) }, object: function (e, m, h) { return e[m] = h }, transform: function (h, q, p, e, m) { e[m] || (e[m] = []); e[m].push(q + "(" + p + ")") } }, au = [], aj = 0, aq = function () { function e() { aj = requestAnimationFrame(h) } function h(q) { var m = au.length; if (m) { for (var p = 0; p < m;) { au[p] && au[p].tick(q), p++ } e() } else { cancelAnimationFrame(aj), aj = 0 } } return e }(); ax.version = "2.2.0"; ax.speed = 1; ax.running = au; ax.remove = function (h) { h = s(h); for (var q = au.length; q--;) { for (var p = au[q], e = p.animations, m = e.length; m--;) { av(h, e[m].animatable.target) && (e.splice(m, 1), e.length || p.pause()) } } }; ax.getValue = ab; ax.path = function (h, p) { var m = aA.str(h) ? aB(h)[0] : h, e = p || 100; return function (q) { return { el: m, property: q, totalLength: w(m) * (e / 100) } } }; ax.setDashoffset = function (e) { var h = w(e); e.setAttribute("stroke-dasharray", h); return h }; ax.bezier = ak; ax.easings = o; ax.timeline = function (e) { var h = ax(e); h.pause(); h.duration = 0; h.add = function (m) { h.children.forEach(function (p) { p.began = !0; p.completed = !0 }); az(m).forEach(function (p) { var r = ar(p, ah(l, e || {})); r.targets = r.targets || e.targets; p = h.duration; var q = r.offset; r.autoplay = !1; r.direction = h.direction; r.offset = aA.und(q) ? p : G(q, p); h.began = !0; h.completed = !0; h.seek(r.offset); r = ax(r); r.began = !0; r.completed = !0; r.duration > p && (h.duration = r.duration); h.children.push(r) }); h.seek(0); h.reset(); h.autoplay && h.restart(); return h }; return h }; ax.random = function (e, h) { return Math.floor(Math.random() * (h - e + 1)) + e }; return ax
  }); function updateCoords(a) { pointerX = (a.clientX || a.touches[0].clientX) - canvasEl.getBoundingClientRect().left, pointerY = a.clientY || a.touches[0].clientY - canvasEl.getBoundingClientRect().top } function setParticuleDirection(d) { var c = anime.random(0, 360) * Math.PI / 180, b = anime.random(50, 180), f = [-1, 1][anime.random(0, 1)] * b; return { x: d.x + f * Math.cos(c), y: d.y + f * Math.sin(c) } } function createParticule(d, c) {
    var b = {}; return b.x = d, b.y = c, b.color = colors[anime.random(0, colors.length - 1)], b.radius = anime.random(16, 32), b.endPos = setParticuleDirection(b), b.draw = function () {
      ctx.beginPath(), ctx.arc(b.x, b.y, b.radius, 0, 2 * Math.PI, !0), ctx.fillStyle = b.color, ctx.fill()
    }, b
  } function createCircle(d, c) { var b = {}; return b.x = d, b.y = c, b.color = "#F00", b.radius = 0.1, b.alpha = 0.5, b.lineWidth = 6, b.draw = function () { ctx.globalAlpha = b.alpha, ctx.beginPath(), ctx.arc(b.x, b.y, b.radius, 0, 2 * Math.PI, !0), ctx.lineWidth = b.lineWidth, ctx.strokeStyle = b.color, ctx.stroke(), ctx.globalAlpha = 1 }, b } function renderParticule(b) { for (var a = 0; a < b.animatables.length; a++) { b.animatables[a].target.draw() } } function animateParticules(f, d) { for (var b = createCircle(f, d), g = [], c = 0; c < numberOfParticules; c++) { g.push(createParticule(f, d)) } anime.timeline().add({ targets: g, x: function (a) { return a.endPos.x }, y: function (a) { return a.endPos.y }, radius: 0.1, duration: anime.random(1200, 1800), easing: "easeOutExpo", update: renderParticule }).add({ targets: b, radius: anime.random(80, 160), lineWidth: 0, alpha: { value: 0, easing: "linear", duration: anime.random(600, 800) }, duration: anime.random(1200, 1800), easing: "easeOutExpo", update: renderParticule, offset: 0 }) } function debounce(b, a) { var c; return function () { var e = this; var d = arguments; clearTimeout(c); c = setTimeout(function () { b.apply(e, d) }, a) } } var canvasEl = document.querySelector("#fireworks"); if (canvasEl) { var ctx = canvasEl.getContext("2d"), numberOfParticules = 30, pointerX = 0, pointerY = 0, tap = "mousedown", colors = ["#FF1461", "#18FF92", "#5A87FF", "#FBF38C"], setCanvasSize = debounce(function () { canvasEl.width = 2 * window.innerWidth, canvasEl.height = 2 * window.innerHeight, canvasEl.style.width = window.innerWidth + "px", canvasEl.style.height = window.innerHeight + "px", canvasEl.getContext("2d").scale(2, 2) }, 500), render = anime({ duration: 1 / 0, update: function () { ctx.clearRect(0, 0, canvasEl.width, canvasEl.height) } }); document.addEventListener(tap, function (a) { "sidebar" !== a.target.id && "toggle-sidebar" !== a.target.id && "A" !== a.target.nodeName && "IMG" !== a.target.nodeName && (render.play(), updateCoords(a), animateParticules(pointerX, pointerY)) }, !1), setCanvasSize(), window.addEventListener("resize", setCanvasSize, !1) };
}());