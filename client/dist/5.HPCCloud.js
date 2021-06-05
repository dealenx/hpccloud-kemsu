(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./src/workflows/openfoam/helmholtz/lib/simput-openfoam_helmholtz.js":
/*!***************************************************************************!*\
  !*** ./src/workflows/openfoam/helmholtz/lib/simput-openfoam_helmholtz.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n!function (e) {\n  var t = {};\n\n  function n(r) {\n    if (t[r]) return t[r].exports;\n    var o = t[r] = {\n      i: r,\n      l: !1,\n      exports: {}\n    };\n    return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;\n  }\n\n  n.m = e, n.c = t, n.d = function (e, t, r) {\n    n.o(e, t) || Object.defineProperty(e, t, {\n      configurable: !1,\n      enumerable: !0,\n      get: r\n    });\n  }, n.r = function (e) {\n    Object.defineProperty(e, \"__esModule\", {\n      value: !0\n    });\n  }, n.n = function (e) {\n    var t = e && e.__esModule ? function () {\n      return e.default;\n    } : function () {\n      return e;\n    };\n    return n.d(t, \"a\", t), t;\n  }, n.o = function (e, t) {\n    return Object.prototype.hasOwnProperty.call(e, t);\n  }, n.p = \"\", n(n.s = 27);\n}([function (e, t, n) {\n  \"use strict\";\n\n  var r = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (e) {\n    return typeof e;\n  } : function (e) {\n    return e && \"function\" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? \"symbol\" : typeof e;\n  };\n  t.__esModule = !0, t.extend = u, t.indexOf = function (e, t) {\n    for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;\n\n    return -1;\n  }, t.escapeExpression = function (e) {\n    if (\"string\" != typeof e) {\n      if (e && e.toHTML) return e.toHTML();\n      if (null == e) return \"\";\n      if (!e) return e + \"\";\n      e = \"\" + e;\n    }\n\n    if (!i.test(e)) return e;\n    return e.replace(a, l);\n  }, t.isEmpty = function (e) {\n    return !e && 0 !== e || !(!f(e) || 0 !== e.length);\n  }, t.createFrame = function (e) {\n    var t = u({}, e);\n    return t._parent = e, t;\n  }, t.blockParams = function (e, t) {\n    return e.path = t, e;\n  }, t.appendContextPath = function (e, t) {\n    return (e ? e + \".\" : \"\") + t;\n  };\n  var o = {\n    \"&\": \"&amp;\",\n    \"<\": \"&lt;\",\n    \">\": \"&gt;\",\n    '\"': \"&quot;\",\n    \"'\": \"&#x27;\",\n    \"`\": \"&#x60;\",\n    \"=\": \"&#x3D;\"\n  },\n      a = /[&<>\"'`=]/g,\n      i = /[&<>\"'`=]/;\n\n  function l(e) {\n    return o[e];\n  }\n\n  function u(e) {\n    for (var t = 1; t < arguments.length; t++) for (var n in arguments[t]) Object.prototype.hasOwnProperty.call(arguments[t], n) && (e[n] = arguments[t][n]);\n\n    return e;\n  }\n\n  var s = Object.prototype.toString;\n  t.toString = s;\n\n  var c = function (e) {\n    return \"function\" == typeof e;\n  };\n\n  c(/x/) && (t.isFunction = c = function (e) {\n    return \"function\" == typeof e && \"[object Function]\" === s.call(e);\n  }), t.isFunction = c;\n\n  var f = Array.isArray || function (e) {\n    return !(!e || \"object\" !== (void 0 === e ? \"undefined\" : r(e))) && \"[object Array]\" === s.call(e);\n  };\n\n  t.isArray = f;\n}, function (e, t, n) {\n  \"use strict\";\n\n  t.__esModule = !0;\n  var r = [\"description\", \"fileName\", \"lineNumber\", \"message\", \"name\", \"number\", \"stack\"];\n\n  function o(e, t) {\n    var n = t && t.loc,\n        a = void 0,\n        i = void 0;\n    n && (e += \" - \" + (a = n.start.line) + \":\" + (i = n.start.column));\n\n    for (var l = Error.prototype.constructor.call(this, e), u = 0; u < r.length; u++) this[r[u]] = l[r[u]];\n\n    Error.captureStackTrace && Error.captureStackTrace(this, o);\n\n    try {\n      n && (this.lineNumber = a, Object.defineProperty ? Object.defineProperty(this, \"column\", {\n        value: i,\n        enumerable: !0\n      }) : this.column = i);\n    } catch (e) {}\n  }\n\n  o.prototype = new Error(), t.default = o, e.exports = t.default;\n}, function (e, t, n) {\n  \"use strict\";\n\n  function r(e) {\n    return e && e.__esModule ? e : {\n      default: e\n    };\n  }\n\n  t.__esModule = !0, t.HandlebarsEnvironment = s;\n  var o = n(0),\n      a = r(n(1)),\n      i = n(17),\n      l = n(9),\n      u = r(n(7));\n  t.VERSION = \"4.0.11\";\n  t.COMPILER_REVISION = 7;\n  t.REVISION_CHANGES = {\n    1: \"<= 1.0.rc.2\",\n    2: \"== 1.0.0-rc.3\",\n    3: \"== 1.0.0-rc.4\",\n    4: \"== 1.x.x\",\n    5: \"== 2.0.0-alpha.x\",\n    6: \">= 2.0.0-beta.1\",\n    7: \">= 4.0.0\"\n  };\n\n  function s(e, t, n) {\n    this.helpers = e || {}, this.partials = t || {}, this.decorators = n || {}, i.registerDefaultHelpers(this), l.registerDefaultDecorators(this);\n  }\n\n  s.prototype = {\n    constructor: s,\n    logger: u.default,\n    log: u.default.log,\n    registerHelper: function (e, t) {\n      if (\"[object Object]\" === o.toString.call(e)) {\n        if (t) throw new a.default(\"Arg not supported with multiple helpers\");\n        o.extend(this.helpers, e);\n      } else this.helpers[e] = t;\n    },\n    unregisterHelper: function (e) {\n      delete this.helpers[e];\n    },\n    registerPartial: function (e, t) {\n      if (\"[object Object]\" === o.toString.call(e)) o.extend(this.partials, e);else {\n        if (void 0 === t) throw new a.default('Attempting to register a partial called \"' + e + '\" as undefined');\n        this.partials[e] = t;\n      }\n    },\n    unregisterPartial: function (e) {\n      delete this.partials[e];\n    },\n    registerDecorator: function (e, t) {\n      if (\"[object Object]\" === o.toString.call(e)) {\n        if (t) throw new a.default(\"Arg not supported with multiple decorators\");\n        o.extend(this.decorators, e);\n      } else this.decorators[e] = t;\n    },\n    unregisterDecorator: function (e) {\n      delete this.decorators[e];\n    }\n  };\n  var c = u.default.log;\n  t.log = c, t.createFrame = o.createFrame, t.logger = u.default;\n}, function (e, t, n) {\n  \"use strict\";\n\n  var r,\n      o = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (e) {\n    return typeof e;\n  } : function (e) {\n    return e && \"function\" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? \"symbol\" : typeof e;\n  };\n\n  r = function () {\n    return this;\n  }();\n\n  try {\n    r = r || Function(\"return this\")() || (0, eval)(\"this\");\n  } catch (e) {\n    \"object\" === (\"undefined\" == typeof window ? \"undefined\" : o(window)) && (r = window);\n  }\n\n  e.exports = r;\n}, function (e, t, n) {\n  \"use strict\";\n\n  (function (n) {\n    t.__esModule = !0, t.default = function (e) {\n      var t = void 0 !== n ? n : window,\n          r = t.Handlebars;\n\n      e.noConflict = function () {\n        return t.Handlebars === e && (t.Handlebars = r), e;\n      };\n    }, e.exports = t.default;\n  }).call(this, n(3));\n}, function (e, t, n) {\n  \"use strict\";\n\n  var r = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (e) {\n    return typeof e;\n  } : function (e) {\n    return e && \"function\" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? \"symbol\" : typeof e;\n  };\n  t.__esModule = !0, t.checkRevision = function (e) {\n    var t = e && e[0] || 1,\n        n = u.COMPILER_REVISION;\n\n    if (t !== n) {\n      if (t < n) {\n        var r = u.REVISION_CHANGES[n],\n            o = u.REVISION_CHANGES[t];\n        throw new l.default(\"Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (\" + r + \") or downgrade your runtime to an older version (\" + o + \").\");\n      }\n\n      throw new l.default(\"Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (\" + e[1] + \").\");\n    }\n  }, t.template = function (e, t) {\n    if (!t) throw new l.default(\"No environment passed to template\");\n    if (!e || !e.main) throw new l.default(\"Unknown template object: \" + (void 0 === e ? \"undefined\" : r(e)));\n    e.main.decorator = e.main_d, t.VM.checkRevision(e.compiler);\n    var n = {\n      strict: function (e, t) {\n        if (!(t in e)) throw new l.default('\"' + t + '\" not defined in ' + e);\n        return e[t];\n      },\n      lookup: function (e, t) {\n        for (var n = e.length, r = 0; r < n; r++) if (e[r] && null != e[r][t]) return e[r][t];\n      },\n      lambda: function (e, t) {\n        return \"function\" == typeof e ? e.call(t) : e;\n      },\n      escapeExpression: a.escapeExpression,\n      invokePartial: function (n, r, o) {\n        o.hash && (r = a.extend({}, r, o.hash), o.ids && (o.ids[0] = !0));\n        n = t.VM.resolvePartial.call(this, n, r, o);\n        var i = t.VM.invokePartial.call(this, n, r, o);\n        null == i && t.compile && (o.partials[o.name] = t.compile(n, e.compilerOptions, t), i = o.partials[o.name](r, o));\n\n        if (null != i) {\n          if (o.indent) {\n            for (var u = i.split(\"\\n\"), s = 0, c = u.length; s < c && (u[s] || s + 1 !== c); s++) u[s] = o.indent + u[s];\n\n            i = u.join(\"\\n\");\n          }\n\n          return i;\n        }\n\n        throw new l.default(\"The partial \" + o.name + \" could not be compiled when running in runtime-only mode\");\n      },\n      fn: function (t) {\n        var n = e[t];\n        return n.decorator = e[t + \"_d\"], n;\n      },\n      programs: [],\n      program: function (e, t, n, r, o) {\n        var a = this.programs[e],\n            i = this.fn(e);\n        return t || o || r || n ? a = s(this, e, i, t, n, r, o) : a || (a = this.programs[e] = s(this, e, i)), a;\n      },\n      data: function (e, t) {\n        for (; e && t--;) e = e._parent;\n\n        return e;\n      },\n      merge: function (e, t) {\n        var n = e || t;\n        return e && t && e !== t && (n = a.extend({}, t, e)), n;\n      },\n      nullContext: Object.seal({}),\n      noop: t.VM.noop,\n      compilerInfo: e.compiler\n    };\n\n    function o(t) {\n      var r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],\n          a = r.data;\n      o._setup(r), !r.partial && e.useData && (a = function (e, t) {\n        t && \"root\" in t || ((t = t ? u.createFrame(t) : {}).root = e);\n        return t;\n      }(t, a));\n      var i = void 0,\n          l = e.useBlockParams ? [] : void 0;\n\n      function s(t) {\n        return \"\" + e.main(n, t, n.helpers, n.partials, a, l, i);\n      }\n\n      return e.useDepths && (i = r.depths ? t != r.depths[0] ? [t].concat(r.depths) : r.depths : [t]), (s = f(e.main, s, n, r.depths || [], a, l))(t, r);\n    }\n\n    return o.isTop = !0, o._setup = function (r) {\n      r.partial ? (n.helpers = r.helpers, n.partials = r.partials, n.decorators = r.decorators) : (n.helpers = n.merge(r.helpers, t.helpers), e.usePartial && (n.partials = n.merge(r.partials, t.partials)), (e.usePartial || e.useDecorators) && (n.decorators = n.merge(r.decorators, t.decorators)));\n    }, o._child = function (t, r, o, a) {\n      if (e.useBlockParams && !o) throw new l.default(\"must pass block params\");\n      if (e.useDepths && !a) throw new l.default(\"must pass parent depths\");\n      return s(n, t, e[t], r, 0, o, a);\n    }, o;\n  }, t.wrapProgram = s, t.resolvePartial = function (e, t, n) {\n    e ? e.call || n.name || (n.name = e, e = n.partials[e]) : e = \"@partial-block\" === n.name ? n.data[\"partial-block\"] : n.partials[n.name];\n    return e;\n  }, t.invokePartial = function (e, t, n) {\n    var r = n.data && n.data[\"partial-block\"];\n    n.partial = !0, n.ids && (n.data.contextPath = n.ids[0] || n.data.contextPath);\n    var o = void 0;\n    n.fn && n.fn !== c && function () {\n      n.data = u.createFrame(n.data);\n      var e = n.fn;\n      o = n.data[\"partial-block\"] = function (t) {\n        var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];\n        return n.data = u.createFrame(n.data), n.data[\"partial-block\"] = r, e(t, n);\n      }, e.partials && (n.partials = a.extend({}, n.partials, e.partials));\n    }();\n    void 0 === e && o && (e = o);\n    if (void 0 === e) throw new l.default(\"The partial \" + n.name + \" could not be found\");\n    if (e instanceof Function) return e(t, n);\n  }, t.noop = c;\n\n  var o,\n      a = function (e) {\n    if (e && e.__esModule) return e;\n    var t = {};\n    if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);\n    return t.default = e, t;\n  }(n(0)),\n      i = n(1),\n      l = (o = i) && o.__esModule ? o : {\n    default: o\n  },\n      u = n(2);\n\n  function s(e, t, n, r, o, a, i) {\n    function l(t) {\n      var o = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],\n          l = i;\n      return !i || t == i[0] || t === e.nullContext && null === i[0] || (l = [t].concat(i)), n(e, t, e.helpers, e.partials, o.data || r, a && [o.blockParams].concat(a), l);\n    }\n\n    return (l = f(n, l, e, i, r, a)).program = t, l.depth = i ? i.length : 0, l.blockParams = o || 0, l;\n  }\n\n  function c() {\n    return \"\";\n  }\n\n  function f(e, t, n, r, o, i) {\n    if (e.decorator) {\n      var l = {};\n      t = e.decorator(t, l, n, r && r[0], o, i, r), a.extend(t, l);\n    }\n\n    return t;\n  }\n}, function (e, t, n) {\n  \"use strict\";\n\n  function r(e) {\n    this.string = e;\n  }\n\n  t.__esModule = !0, r.prototype.toString = r.prototype.toHTML = function () {\n    return \"\" + this.string;\n  }, t.default = r, e.exports = t.default;\n}, function (e, t, n) {\n  \"use strict\";\n\n  t.__esModule = !0;\n  var r = n(0),\n      o = {\n    methodMap: [\"debug\", \"info\", \"warn\", \"error\"],\n    level: \"info\",\n    lookupLevel: function (e) {\n      if (\"string\" == typeof e) {\n        var t = r.indexOf(o.methodMap, e.toLowerCase());\n        e = t >= 0 ? t : parseInt(e, 10);\n      }\n\n      return e;\n    },\n    log: function (e) {\n      if (e = o.lookupLevel(e), \"undefined\" != typeof console && o.lookupLevel(o.level) <= e) {\n        var t = o.methodMap[e];\n        console[t] || (t = \"log\");\n\n        for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];\n\n        console[t].apply(console, r);\n      }\n    }\n  };\n  t.default = o, e.exports = t.default;\n}, function (e, t, n) {\n  \"use strict\";\n\n  t.__esModule = !0;\n  var r = n(0);\n  t.default = function (e) {\n    e.registerDecorator(\"inline\", function (e, t, n, o) {\n      var a = e;\n      return t.partials || (t.partials = {}, a = function (o, a) {\n        var i = n.partials;\n        n.partials = r.extend({}, i, t.partials);\n        var l = e(o, a);\n        return n.partials = i, l;\n      }), t.partials[o.args[0]] = o.fn, a;\n    });\n  }, e.exports = t.default;\n}, function (e, t, n) {\n  \"use strict\";\n\n  t.__esModule = !0, t.registerDefaultDecorators = function (e) {\n    a.default(e);\n  };\n  var r,\n      o = n(8),\n      a = (r = o) && r.__esModule ? r : {\n    default: r\n  };\n}, function (e, t, n) {\n  \"use strict\";\n\n  t.__esModule = !0;\n  var r = n(0);\n  t.default = function (e) {\n    e.registerHelper(\"with\", function (e, t) {\n      r.isFunction(e) && (e = e.call(this));\n      var n = t.fn;\n      if (r.isEmpty(e)) return t.inverse(this);\n      var o = t.data;\n      return t.data && t.ids && ((o = r.createFrame(t.data)).contextPath = r.appendContextPath(t.data.contextPath, t.ids[0])), n(e, {\n        data: o,\n        blockParams: r.blockParams([e], [o && o.contextPath])\n      });\n    });\n  }, e.exports = t.default;\n}, function (e, t, n) {\n  \"use strict\";\n\n  t.__esModule = !0, t.default = function (e) {\n    e.registerHelper(\"lookup\", function (e, t) {\n      return e && e[t];\n    });\n  }, e.exports = t.default;\n}, function (e, t, n) {\n  \"use strict\";\n\n  t.__esModule = !0, t.default = function (e) {\n    e.registerHelper(\"log\", function () {\n      for (var t = [void 0], n = arguments[arguments.length - 1], r = 0; r < arguments.length - 1; r++) t.push(arguments[r]);\n\n      var o = 1;\n      null != n.hash.level ? o = n.hash.level : n.data && null != n.data.level && (o = n.data.level), t[0] = o, e.log.apply(e, t);\n    });\n  }, e.exports = t.default;\n}, function (e, t, n) {\n  \"use strict\";\n\n  t.__esModule = !0;\n  var r = n(0);\n  t.default = function (e) {\n    e.registerHelper(\"if\", function (e, t) {\n      return r.isFunction(e) && (e = e.call(this)), !t.hash.includeZero && !e || r.isEmpty(e) ? t.inverse(this) : t.fn(this);\n    }), e.registerHelper(\"unless\", function (t, n) {\n      return e.helpers.if.call(this, t, {\n        fn: n.inverse,\n        inverse: n.fn,\n        hash: n.hash\n      });\n    });\n  }, e.exports = t.default;\n}, function (e, t, n) {\n  \"use strict\";\n\n  t.__esModule = !0;\n  var r,\n      o = n(1),\n      a = (r = o) && r.__esModule ? r : {\n    default: r\n  };\n  t.default = function (e) {\n    e.registerHelper(\"helperMissing\", function () {\n      if (1 !== arguments.length) throw new a.default('Missing helper: \"' + arguments[arguments.length - 1].name + '\"');\n    });\n  }, e.exports = t.default;\n}, function (e, t, n) {\n  \"use strict\";\n\n  var r = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (e) {\n    return typeof e;\n  } : function (e) {\n    return e && \"function\" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? \"symbol\" : typeof e;\n  };\n  t.__esModule = !0;\n  var o,\n      a = n(0),\n      i = n(1),\n      l = (o = i) && o.__esModule ? o : {\n    default: o\n  };\n  t.default = function (e) {\n    e.registerHelper(\"each\", function (e, t) {\n      if (!t) throw new l.default(\"Must pass iterator to #each\");\n      var n = t.fn,\n          o = t.inverse,\n          i = 0,\n          u = \"\",\n          s = void 0,\n          c = void 0;\n\n      function f(t, r, o) {\n        s && (s.key = t, s.index = r, s.first = 0 === r, s.last = !!o, c && (s.contextPath = c + t)), u += n(e[t], {\n          data: s,\n          blockParams: a.blockParams([e[t], t], [c + t, null])\n        });\n      }\n\n      if (t.data && t.ids && (c = a.appendContextPath(t.data.contextPath, t.ids[0]) + \".\"), a.isFunction(e) && (e = e.call(this)), t.data && (s = a.createFrame(t.data)), e && \"object\" === (void 0 === e ? \"undefined\" : r(e))) if (a.isArray(e)) for (var d = e.length; i < d; i++) i in e && f(i, i, i === e.length - 1);else {\n        var p = void 0;\n\n        for (var h in e) e.hasOwnProperty(h) && (void 0 !== p && f(p, i - 1), p = h, i++);\n\n        void 0 !== p && f(p, i - 1, !0);\n      }\n      return 0 === i && (u = o(this)), u;\n    });\n  }, e.exports = t.default;\n}, function (e, t, n) {\n  \"use strict\";\n\n  t.__esModule = !0;\n  var r = n(0);\n  t.default = function (e) {\n    e.registerHelper(\"blockHelperMissing\", function (t, n) {\n      var o = n.inverse,\n          a = n.fn;\n      if (!0 === t) return a(this);\n      if (!1 === t || null == t) return o(this);\n      if (r.isArray(t)) return t.length > 0 ? (n.ids && (n.ids = [n.name]), e.helpers.each(t, n)) : o(this);\n\n      if (n.data && n.ids) {\n        var i = r.createFrame(n.data);\n        i.contextPath = r.appendContextPath(n.data.contextPath, n.name), n = {\n          data: i\n        };\n      }\n\n      return a(t, n);\n    });\n  }, e.exports = t.default;\n}, function (e, t, n) {\n  \"use strict\";\n\n  function r(e) {\n    return e && e.__esModule ? e : {\n      default: e\n    };\n  }\n\n  t.__esModule = !0, t.registerDefaultHelpers = function (e) {\n    o.default(e), a.default(e), i.default(e), l.default(e), u.default(e), s.default(e), c.default(e);\n  };\n  var o = r(n(16)),\n      a = r(n(15)),\n      i = r(n(14)),\n      l = r(n(13)),\n      u = r(n(12)),\n      s = r(n(11)),\n      c = r(n(10));\n}, function (e, t, n) {\n  \"use strict\";\n\n  function r(e) {\n    return e && e.__esModule ? e : {\n      default: e\n    };\n  }\n\n  function o(e) {\n    if (e && e.__esModule) return e;\n    var t = {};\n    if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);\n    return t.default = e, t;\n  }\n\n  t.__esModule = !0;\n  var a = o(n(2)),\n      i = r(n(6)),\n      l = r(n(1)),\n      u = o(n(0)),\n      s = o(n(5)),\n      c = r(n(4));\n\n  function f() {\n    var e = new a.HandlebarsEnvironment();\n    return u.extend(e, a), e.SafeString = i.default, e.Exception = l.default, e.Utils = u, e.escapeExpression = u.escapeExpression, e.VM = s, e.template = function (t) {\n      return s.template(t, e);\n    }, e;\n  }\n\n  var d = f();\n  d.create = f, c.default(d), d.default = d, t.default = d, e.exports = t.default;\n}, function (e, t, n) {\n  \"use strict\";\n\n  e.exports = n(18).default;\n}, function (e, t, n) {\n  var r = n(19);\n  e.exports = (r.default || r).template({\n    compiler: [7, \">= 4.0.0\"],\n    main: function (e, t, n, r, o) {\n      var a,\n          i,\n          l = null != t ? t : e.nullContext || {},\n          u = n.helperMissing;\n      return '#!/bin/bash\\n\\ncd $1\\n\\n\\n# Paths\\nCASE_PATH=\"/home/gorodilov/cases/helmholtz-flow/prepared_case\"\\nSALOME_PATH=\"/home/gorodilov/SALOME-9.3.0-CO6-SRC\"\\n\\n\\n# Variables\\ncp -r $CASE_PATH current_case\\ncd current_case\\n\\nmodule load openfoam_switcher\\n. switchFoam 6\\n\\n\\n\\n# Preparing salome mesh\\necho \\'{\"field_length\": ' + (null != (a = \"function\" == typeof (i = null != (i = n.fieldLength || (null != t ? t.fieldLength : t)) ? i : u) ? i.call(l, {\n        name: \"fieldLength\",\n        hash: {},\n        data: o\n      }) : i) ? a : \"\") + \" }' > case_vars.json\\n$SALOME_PATH/salome -t python ./generate_mesh.py\\nideasUnvToFoam ./mesh.unv\\nsed -i 's/patch/wall/' constant/polyMesh/boundary\\n\\nsed -i 's/0.001/\" + (null != (a = \"function\" == typeof (i = null != (i = n.nu || (null != t ? t.nu : t)) ? i : u) ? i.call(l, {\n        name: \"nu\",\n        hash: {},\n        data: o\n      }) : i) ? a : \"\") + \"/' constant/transportProperties\\nsed -i 's/0.005/\" + (null != (a = \"function\" == typeof (i = null != (i = n.deltaT || (null != t ? t.deltaT : t)) ? i : u) ? i.call(l, {\n        name: \"deltaT\",\n        hash: {},\n        data: o\n      }) : i) ? a : \"\") + \"/' system/controlDict\\nsed -i 's/10./\" + (null != (a = \"function\" == typeof (i = null != (i = n.endTime || (null != t ? t.endTime : t)) ? i : u) ? i.call(l, {\n        name: \"endTime\",\n        hash: {},\n        data: o\n      }) : i) ? a : \"\") + \"/' system/controlDict\\n\\n\\n# OpenFoam calcing with icoFoam solver\\nfoamJob -wait icoFoam\\n\\n\\nfoamToVTK\\n\\n# Make dataset readable by PV\\ntouch dataset.foam\\n\\n# Unzip any obj file so they can be used as context\\nfind . -name *.obj.gz -exec gzip -dk {} \\\\;\\n\\n# Gather context shapes in ../context\\nmkdir -p ../context\\ncd ../context\\nfind ../cavity -name *.obj -exec ln -s {} ../context/ \\\\;\";\n    },\n    useData: !0\n  });\n}, function (e, t, n) {\n  \"use strict\";\n\n  var r = n(20);\n\n  e.exports = function (e) {\n    var t = {};\n    console.log(\"dataModel\", e);\n\n    try {\n      var n = e.data.CavityFields[0].attr1.nu.value[0],\n          o = e.data.CavityFields[0].attr1.deltaT.value[0],\n          a = e.data.CavityFields[0].attr1.endTime.value[0],\n          i = e.data.CavityFields[0].attr1.fieldLength.value[0];\n      t[\"run.sh\"] = r({\n        nu: n,\n        deltaT: o,\n        endTime: a,\n        fieldLength: i\n      });\n    } catch (e) {\n      console.log(\"Error trying to convert model for generating run.sh\", e);\n    }\n\n    return {\n      results: t,\n      error: null\n    };\n  };\n}, function (e) {\n  e.exports = {\n    views: {\n      SingleView: \"Single View\"\n    },\n    attributes: {\n      attr1: {\n        title: \"Attribute 1\",\n        parameters: {\n          nu: \"nu\",\n          deltaT: \"deltaT\",\n          endTime: \"endTime\",\n          fieldLength: \"fieldLength\"\n        }\n      },\n      double: {\n        title: \"Double\",\n        parameters: {\n          nu: \"nu\",\n          deltaT: \"deltaT\",\n          endTime: \"endTime\",\n          fieldLength: \"fieldLength\"\n        }\n      }\n    }\n  };\n}, function (e, t, n) {\n  \"use strict\";\n\n  e.exports = {\n    \"label.json\": n(22)\n  };\n}, function (e, t, n) {\n  \"use strict\";\n\n  e.exports = {\n    en: n(23)\n  };\n}, function (e) {\n  e.exports = {\n    order: [\"CavityFields\"],\n    views: {\n      CavityFields: {\n        attributes: [\"attr1\"]\n      }\n    },\n    definitions: {\n      attr1: {\n        parameters: [{\n          id: \"nu\",\n          type: \"double\",\n          size: 1,\n          default: [1]\n        }, {\n          id: \"deltaT\",\n          type: \"double\",\n          size: 1,\n          default: [1]\n        }, {\n          id: \"endTime\",\n          type: \"double\",\n          size: 1,\n          default: [1]\n        }, {\n          id: \"fieldLength\",\n          type: \"double\",\n          size: 1,\n          default: [1]\n        }]\n      }\n    }\n  };\n}, function (e, t, n) {\n  \"use strict\";\n\n  e.exports = {\n    type: \"openfoam_helmholtz\",\n    model: n(25),\n    lang: n(24),\n    convert: n(21),\n    parse: null\n  };\n}, function (e, t, n) {\n  (function (t) {\n    t.Simput || (t.Simput = {}), t.Simput.types || (t.Simput.types = {}), e.exports = t.Simput.types.openfoam_helmholtz = n(26);\n  }).call(this, n(3));\n}]);\n\n//# sourceURL=webpack:///./src/workflows/openfoam/helmholtz/lib/simput-openfoam_helmholtz.js?");

/***/ })

}]);