/** layui-v2.5.6 MIT License By https://www.layui.com */ ;
! function (e) {
	"use strict";
	var t = document,
		n = {
			modules: {},
			status: {},
			timeout: 10,
			event: {}
		},
		o = function () {
			this.v = "2.5.6"
		},
		r = function () {
			var e = t.currentScript ? t.currentScript.src : function () {
				for (var e, n = t.scripts, o = n.length - 1, r = o; r > 0; r--)
					if ("interactive" === n[r].readyState) {
						e = n[r].src;
						break
					} return e || n[o].src
			}();
			return e.substring(0, e.lastIndexOf("/") + 1)
		}(),
		a = function (t) {
			e.console && console.error && console.error("Layui hint: " + t)
		},
		i = "undefined" != typeof opera && "[object Opera]" === opera.toString(),
		u = {
			layer: "modules/layer",
			laydate: "modules/laydate",
			laypage: "modules/laypage",
			laytpl: "modules/laytpl",
			layim: "modules/layim",
			layedit: "modules/layedit",
			form: "modules/form",
			upload: "modules/upload",
			transfer: "modules/transfer",
			tree: "modules/tree",
			table: "modules/table",
			element: "modules/element",
			rate: "modules/rate",
			colorpicker: "modules/colorpicker",
			slider: "modules/slider",
			carousel: "modules/carousel",
			flow: "modules/flow",
			util: "modules/util",
			code: "modules/code",
			jquery: "modules/jquery",
			mobile: "modules/mobile",
			pearTab: "extends/pearTab",
			pearMenu: "extends/pearMenu",
			pearOper: "extends/pearOper",
			pearHash: "extends/pearHash",
			pearAdmin: "extends/pearAdmin",
			pearFrame: "extends/pearFrame",
			pearSocial: "extends/pearSocial",
			pearNotice: "extends/pearNotice",
			pearStep: "extends/pearStep",
			tinymce: "extends/tinymce/tinymce",
			echarts: "extends/echarts",
			echartsTheme: "extends/echartsTheme",
			formSelects: 'extends/formSelects-v4',
			treeTable: "extends/treetable",
			iconPicker: "extends/iconPicker",
			dtree: "extends/dtree",
			"layui.all": "../layui.all"
		};
	o.prototype.cache = n, o.prototype.define = function (e, t) {
		var o = this,
			r = "function" == typeof e,
			a = function () {
				var e = function (e, t) {
					layui[e] = t, n.status[e] = !0
				};
				return "function" == typeof t && t(function (o, r) {
					e(o, r), n.callback[o] = function () {
						t(e)
					}
				}), this
			};
		return r && (t = e, e = []), !layui["layui.all"] && layui["layui.mobile"] ? a.call(o) : (o.use(e, a), o)
	}, o.prototype.use = function (e, o, l) {
		function s(e, t) {
			var o = "PLaySTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/;
			("load" === e.type || o.test((e.currentTarget || e.srcElement).readyState)) && (n.modules[d] = t, y.removeChild(v),
				function r() {
					return ++m > 1e3 * n.timeout / 4 ? a(d + " is not a valid module") : void(n.status[d] ? c() : setTimeout(r, 4))
				}())
		}

		function c() {
			l.push(layui[d]), e.length > 1 ? p.use(e.slice(1), o, l) : "function" == typeof o && o.apply(layui, l)
		}
		var p = this,
			f = n.dir = n.dir ? n.dir : r,
			y = t.getElementsByTagName("head")[0];
		e = "string" == typeof e ? [e] : e, window.jQuery && jQuery.fn.on && (p.each(e, function (t, n) {
			"jquery" === n && e.splice(t, 1)
		}), layui.jquery = layui.$ = jQuery);
		var d = e[0],
			m = 0;
		if (l = l || [], n.host = n.host || (f.match(/\/\/([\s\S]+?)\//) || ["//" + location.host + "/"])[0], 0 === e.length ||
			layui["layui.all"] && u[d] || !layui["layui.all"] && layui["layui.mobile"] && u[d]) return c(), p;
		var h = (u[d] ? f + "lay/" : /^\{\/\}/.test(p.modules[d]) ? "" : n.base || "") + (p.modules[d] || d) + ".js";
		if (h = h.replace(/^\{\/\}/, ""), !n.modules[d] && layui[d] && (n.modules[d] = h), n.modules[d]) ! function g() {
			return ++m > 1e3 * n.timeout / 4 ? a(d + " is not a valid module") : void("string" == typeof n.modules[d] && n.status[
				d] ? c() : setTimeout(g, 4))
		}();
		else {
			var v = t.createElement("script");
			v.async = !0, v.charset = "utf-8", v.src = h + function () {
					var e = n.version === !0 ? n.v || (new Date).getTime() : n.version || "";
					return e ? "?v=" + e : ""
				}(), y.appendChild(v), !v.attachEvent || v.attachEvent.toString && v.attachEvent.toString().indexOf("[native code") <
				0 || i ? v.addEventListener("load", function (e) {
					s(e, h)
				}, !1) : v.attachEvent("onreadystatechange", function (e) {
					s(e, h)
				}), n.modules[d] = h
		}
		return p
	}, o.prototype.getStyle = function (t, n) {
		var o = t.currentStyle ? t.currentStyle : e.getComputedStyle(t, null);
		return o[o.getPropertyValue ? "getPropertyValue" : "getAttribute"](n)
	}, o.prototype.link = function (e, o, r) {
		var i = this,
			u = t.createElement("link"),
			l = t.getElementsByTagName("head")[0];
		"string" == typeof o && (r = o);
		var s = (r || e).replace(/\.|\//g, ""),
			c = u.id = "layuicss-" + s,
			p = 0;
		return u.rel = "stylesheet", u.href = e + (n.debug ? "?v=" + (new Date).getTime() : ""), u.media = "all", t.getElementById(
			c) || l.appendChild(u), "function" != typeof o ? i : (function f() {
			return ++p > 1e3 * n.timeout / 100 ? a(e + " timeout") : void(1989 === parseInt(i.getStyle(t.getElementById(c),
				"width")) ? function () {
				o()
			}() : setTimeout(f, 100))
		}(), i)
	}, n.callback = {}, o.prototype.factory = function (e) {
		if (layui[e]) return "function" == typeof n.callback[e] ? n.callback[e] : null
	}, o.prototype.addcss = function (e, t, o) {
		return layui.link(n.dir + "css/" + e, t, o)
	}, o.prototype.img = function (e, t, n) {
		var o = new Image;
		return o.src = e, o.complete ? t(o) : (o.onload = function () {
			o.onload = null, "function" == typeof t && t(o)
		}, void(o.onerror = function (e) {
			o.onerror = null, "function" == typeof n && n(e)
		}))
	}, o.prototype.config = function (e) {
		e = e || {};
		for (var t in e) n[t] = e[t];
		return this
	}, o.prototype.modules = function () {
		var e = {};
		for (var t in u) e[t] = u[t];
		return e
	}(), o.prototype.extend = function (e) {
		var t = this;
		e = e || {};
		for (var n in e) t[n] || t.modules[n] ? a("模块名 " + n + " 已被占用") : t.modules[n] = e[n];
		return t
	}, o.prototype.router = function (e) {
		var t = this,
			e = e || location.hash,
			n = {
				path: [],
				search: {},
				hash: (e.match(/[^#](#.*$)/) || [])[1] || ""
			};
		return /^#\//.test(e) ? (e = e.replace(/^#\//, ""), n.href = "/" + e, e = e.replace(/([^#])(#.*$)/, "$1").split("/") || [], t.each(e, function (e, t) {
			/^\w+=/.test(t) ? function () {
				t = t.split("="), n.search[t[0]] = t[1]
			}() : n.path.push(t)
		}), n) : n
	}, o.prototype.url = function (e) {
		var t = this,
			n = {
				pathname: function () {
					var t = e ? function () {
						var t = (e.match(/\.[^.]+?\/.+/) || [])[0] || "";
						return t.replace(/^[^\/]+/, "").replace(/\?.+/, "")
					}() : location.pathname;
					return t.replace(/^\//, "").split("/")
				}(),
				search: function () {
					var n = {},
						o = (e ? (e.match(/\?.+/) || [])[0] || "" : location.search).replace(/^\?+/, "").split("&");
					return t.each(o, function (e, t) {
						var o = t.indexOf("="),
							r = function () {
								return o < 0 ? t.substr(0, t.length) : 0 !== o && t.substr(0, o)
							}();
						r && (n[r] = o > 0 ? t.substr(o + 1) : null)
					}), n
				}(),
				hash: t.router(function () {
					return e ? (e.match(/#.+/) || [])[0] || "" : location.hash
				}())
			};
		return n
	}, o.prototype.data = function (t, n, o) {
		if (t = t || "layui", o = o || localStorage, e.JSON && e.JSON.parse) {
			if (null === n) return delete o[t];
			n = "object" == typeof n ? n : {
				key: n
			};
			try {
				var r = JSON.parse(o[t])
			} catch (a) {
				var r = {}
			}
			return "value" in n && (r[n.key] = n.value), n.remove && delete r[n.key], o[t] = JSON.stringify(r), n.key ? r[n.key] :
				r
		}
	}, o.prototype.sessionData = function (e, t) {
		return this.data(e, t, sessionStorage)
	}, o.prototype.device = function (t) {
		var n = navigator.userAgent.toLowerCase(),
			o = function (e) {
				var t = new RegExp(e + "/([^\\s\\_\\-]+)");
				return e = (n.match(t) || [])[1], e || !1
			},
			r = {
				os: function () {
					return /windows/.test(n) ? "windows" : /linux/.test(n) ? "linux" : /iphone|ipod|ipad|ios/.test(n) ? "ios" :
						/mac/.test(n) ? "mac" : void 0
				}(),
				ie: function () {
					return !!(e.ActiveXObject || "ActiveXObject" in e) && ((n.match(/msie\s(\d+)/) || [])[1] || "11")
				}(),
				weixin: o("micromessenger")
			};
		return t && !r[t] && (r[t] = o(t)), r.android = /android/.test(n), r.ios = "ios" === r.os, r.mobile = !(!r.android &&
			!r.ios), r
	}, o.prototype.hint = function () {
		return {
			error: a
		}
	}, o.prototype.each = function (e, t) {
		var n, o = this;
		if ("function" != typeof t) return o;
		if (e = e || [], e.constructor === Object) {
			for (n in e)
				if (t.call(e[n], n, e[n])) break
		} else
			for (n = 0; n < e.length && !t.call(e[n], n, e[n]); n++);
		return o
	}, o.prototype.sort = function (e, t, n) {
		var o = JSON.parse(JSON.stringify(e || []));
		return t ? (o.sort(function (e, n) {
			var o = /^-?\d+$/,
				r = e[t],
				a = n[t];
			return o.test(r) && (r = parseFloat(r)), o.test(a) && (a = parseFloat(a)), r && !a ? 1 : !r && a ? -1 : r > a ?
				1 : r < a ? -1 : 0
		}), n && o.reverse(), o) : o
	}, o.prototype.stope = function (t) {
		t = t || e.event;
		try {
			t.stopPropagation()
		} catch (n) {
			t.cancelBubble = !0
		}
	}, o.prototype.onevent = function (e, t, n) {
		return "string" != typeof e || "function" != typeof n ? this : o.event(e, t, null, n)
	}, o.prototype.event = o.event = function (e, t, o, r) {
		var a = this,
			i = null,
			u = t.match(/\((.*)\)$/) || [],
			l = (e + "." + t).replace(u[0], ""),
			s = u[1] || "",
			c = function (e, t) {
				var n = t && t.call(a, o);
				n === !1 && null === i && (i = !1)
			};
		return r ? (n.event[l] = n.event[l] || {}, n.event[l][s] = [r], this) : (layui.each(n.event[l], function (e, t) {
			return "{*}" === s ? void layui.each(t, c) : ("" === e && layui.each(t, c), void(s && e === s && layui.each(t, c)))
		}), i)
	}, e.layui = new o
}(window);



function loadScript(src, callback) {
	var script = document.createElement('script'),
		head = document.getElementsByTagName('head')[0];
	script.type = 'text/javascript';
	script.charset = 'UTF-8';
	script.src = src;
	if (script.addEventListener) {
		script.addEventListener('load', function () {
			callback();
		}, false);
	} else if (script.attachEvent) {
		script.attachEvent('onreadystatechange', function () {
			var target = window.event.srcElement;
			if (target.readyState == 'loaded') {
				callback();
			}
		});
	}
	head.appendChild(script);
}

loadScript("/admin/js/ajaxhook.core.min.js", function () {
	ah.hook({
		onreadystatechange: function (xhr) {
			if (xhr.status === 401) {
				window.location.href = "/login.html"
			}
		},
		open: function (arg, xhr) {
			//拦截请求
			if (arg[1].search("notice.json") == -1) {
				arg[1] = "http://localhost:7001" + arg[1]
			}
		},
		send: function (arg, xhr) {
			//本地token为空
			if (layui.data('mooc').auth) {
				//存在token
				xhr.setRequestHeader("Authorization", "bearer " + layui.data('mooc').auth.access_token)
			} else {
				console.log("token为空");
			}
		}
	})

});

// //如果是登录，直接放行
// if(xhr.responseURL.endWith("/oauth/token")){
// 	//删除token
// 	layui.data('auth', null);
// 	return;
// }

// function addScript(url){
//     var script = document.createElement('script');
//     script.setAttribute('type','text/javascript');
//     script.setAttribute('src',url);
//     document.getElementsByTagName('head')[0].appendChild(script);
// }

// addScript("../../admin/js/ajaxhook.core.min.js");

// console.log(ah);

// $.getScript("../../admin/js/ajaxhook.core.min.js")
// 	.done(function () {
// 		ah.proxy({
// 			//请求发起前进入
// 			onRequest: (config, handler) => {
// 				console.log(config.url)
// 				handler.next(config);
// 			},
// 			//请求发生错误时进入，比如超时；注意，不包括http状态码错误，如404仍然会认为请求成功
// 			onError: (err, handler) => {
// 				console.log(err.type)
// 				handler.next(err)
// 			},
// 			//请求成功后进入
// 			onResponse: (response, handler) => {
// 				console.log(response.response)
// 				handler.next(response)
// 			}
// 		})
// 	});