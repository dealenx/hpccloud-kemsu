(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/@paciolan/remote-component/dist/components/RemoteComponent.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@paciolan/remote-component/dist/components/RemoteComponent.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.RemoteComponent = void 0;\nvar createRemoteComponent_1 = __webpack_require__(/*! ../createRemoteComponent */ \"./node_modules/@paciolan/remote-component/dist/createRemoteComponent.js\");\nvar createRequires_1 = __webpack_require__(/*! ../createRequires */ \"./node_modules/@paciolan/remote-component/dist/createRequires.js\");\nvar getDependencies_1 = __webpack_require__(/*! ../getDependencies */ \"./node_modules/@paciolan/remote-component/dist/getDependencies.js\");\nvar requires = createRequires_1.createRequires(getDependencies_1.getDependencies);\nexports.RemoteComponent = createRemoteComponent_1.createRemoteComponent({ requires: requires });\n//# sourceMappingURL=RemoteComponent.js.map\n\n//# sourceURL=webpack:///./node_modules/@paciolan/remote-component/dist/components/RemoteComponent.js?");

/***/ }),

/***/ "./node_modules/@paciolan/remote-component/dist/createRemoteComponent.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@paciolan/remote-component/dist/createRemoteComponent.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __rest = (this && this.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nexports.__esModule = true;\nexports.createRemoteComponent = void 0;\n/* eslint-disable @typescript-eslint/no-explicit-any */\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar useRemoteComponent_1 = __webpack_require__(/*! ./hooks/useRemoteComponent */ \"./node_modules/@paciolan/remote-component/dist/hooks/useRemoteComponent.js\");\nvar createRemoteComponent = function (props) {\n    var useRemoteComponent = useRemoteComponent_1.createUseRemoteComponent(props);\n    var remoteComponent = function (_a) {\n        var url = _a.url, _b = _a.fallback, fallback = _b === void 0 ? null : _b, render = _a.render, props = __rest(_a, [\"url\", \"fallback\", \"render\"]);\n        var _c = useRemoteComponent(url), loading = _c[0], err = _c[1], Component = _c[2];\n        if (loading) {\n            return fallback;\n        }\n        if (render) {\n            return render({ err: err, Component: Component });\n        }\n        if (err || !Component) {\n            return react_1[\"default\"].createElement(\"div\", null,\n                \"Unknown Error: \",\n                (err || \"UNKNOWN\").toString());\n        }\n        return react_1[\"default\"].createElement(Component, __assign({}, props));\n    };\n    return remoteComponent;\n};\nexports.createRemoteComponent = createRemoteComponent;\n//# sourceMappingURL=createRemoteComponent.js.map\n\n//# sourceURL=webpack:///./node_modules/@paciolan/remote-component/dist/createRemoteComponent.js?");

/***/ }),

/***/ "./node_modules/@paciolan/remote-component/dist/createRequires.js":
/*!************************************************************************!*\
  !*** ./node_modules/@paciolan/remote-component/dist/createRequires.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nexports.createRequires = void 0;\nvar sanitizeDependencies = function (dependencies) {\n    return typeof dependencies === \"function\" ? dependencies() : dependencies || {};\n};\nvar createRequires = function (dependencies) {\n    var isSanitized = false;\n    return function (name) {\n        if (!isSanitized) {\n            // note: needs to happen inside the inner function for the laziness to work.\n            dependencies = sanitizeDependencies(dependencies);\n            isSanitized = true;\n        }\n        if (!(name in dependencies)) {\n            throw new Error(\"Could not require '\" + name + \"'. '\" + name + \"' does not exist in dependencies.\");\n        }\n        return dependencies[name];\n    };\n};\nexports.createRequires = createRequires;\n//# sourceMappingURL=createRequires.js.map\n\n//# sourceURL=webpack:///./node_modules/@paciolan/remote-component/dist/createRequires.js?");

/***/ }),

/***/ "./node_modules/@paciolan/remote-component/dist/fetchRemoteComponent.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@paciolan/remote-component/dist/fetchRemoteComponent.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nexports.__esModule = true;\nexports.fetchRemoteComponent = void 0;\nvar remote_module_loader_1 = __importDefault(__webpack_require__(/*! @paciolan/remote-module-loader */ \"./node_modules/@paciolan/remote-module-loader/dist/index.js\"));\nvar fetchRemoteComponent = function (_a) {\n    var requires = _a.requires, url = _a.url, _b = _a.imports, imports = _b === void 0 ? \"default\" : _b;\n    var loadRemoteModule = remote_module_loader_1[\"default\"]({ requires: requires });\n    return loadRemoteModule(url).then(function (module) {\n        var Component = module && module[imports];\n        if (!Component) {\n            throw new Error(\"Could not load '\" + imports + \"' from '\" + url + \"'.\");\n        }\n        return Component;\n    });\n    // suppressHydrationWarning={true}\n};\nexports.fetchRemoteComponent = fetchRemoteComponent;\n//# sourceMappingURL=fetchRemoteComponent.js.map\n\n//# sourceURL=webpack:///./node_modules/@paciolan/remote-component/dist/fetchRemoteComponent.js?");

/***/ }),

/***/ "./node_modules/@paciolan/remote-component/dist/getDependencies.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@paciolan/remote-component/dist/getDependencies.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/* eslint-disable @typescript-eslint/no-explicit-any */\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nexports.__esModule = true;\nexports.getDependencies = exports.ensureRemoteComponentConfig = void 0;\nvar cannotFindModule = function (err) {\n    return err &&\n        typeof err.message === \"string\" &&\n        err.message.indexOf(\"Cannot find module\") > -1;\n};\nvar isConfigInResolve = function (config) {\n    return typeof config === \"object\" && \"remote-component.config.js\" in config;\n};\n/**\n * Makes sure the config contains remote-component.config.js.\n * If not, then it adds it.\n */\nvar ensureRemoteComponentConfig = function (_a) {\n    var resolve = _a.resolve;\n    if (isConfigInResolve(resolve)) {\n        return resolve;\n    }\n    // add remote-component.config.js recursively\n    var newResolve = __assign({}, resolve);\n    newResolve[\"remote-component.config.js\"] = { resolve: newResolve };\n    return newResolve;\n};\nexports.ensureRemoteComponentConfig = ensureRemoteComponentConfig;\nvar getDependencies = function () {\n    try {\n        // eslint-disable-next-line @typescript-eslint/no-var-requires\n        return exports.ensureRemoteComponentConfig(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'remote-component.config.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));\n    }\n    catch (err) {\n        // istanbul ignore next: This is just too impossible to test\n        if (!cannotFindModule(err)) {\n            throw err;\n        }\n        return {};\n    }\n};\nexports.getDependencies = getDependencies;\n//# sourceMappingURL=getDependencies.js.map\n\n//# sourceURL=webpack:///./node_modules/@paciolan/remote-component/dist/getDependencies.js?");

/***/ }),

/***/ "./node_modules/@paciolan/remote-component/dist/getServerSideProps.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@paciolan/remote-component/dist/getServerSideProps.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nexports.__esModule = true;\nexports.getServerSideProps = void 0;\nvar remote_module_loader_1 = __importDefault(__webpack_require__(/*! @paciolan/remote-module-loader */ \"./node_modules/@paciolan/remote-module-loader/dist/index.js\"));\nvar getServerSideProps = function (_a) {\n    var url = _a.url, requires = _a.requires, context = _a.context, _b = _a.imports, imports = _b === void 0 ? \"default\" : _b;\n    var loadRemoteModule = remote_module_loader_1[\"default\"]({ requires: requires });\n    return loadRemoteModule(url).then(function (module) {\n        var func = module && module[imports] && module[imports].getServerSideProps;\n        return typeof func === \"function\" ? func(context) : {};\n    });\n};\nexports.getServerSideProps = getServerSideProps;\n//# sourceMappingURL=getServerSideProps.js.map\n\n//# sourceURL=webpack:///./node_modules/@paciolan/remote-component/dist/getServerSideProps.js?");

/***/ }),

/***/ "./node_modules/@paciolan/remote-component/dist/hooks/useRemoteComponent.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@paciolan/remote-component/dist/hooks/useRemoteComponent.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nexports.__esModule = true;\nexports.createUseRemoteComponent = void 0;\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar remote_module_loader_1 = __importDefault(__webpack_require__(/*! @paciolan/remote-module-loader */ \"./node_modules/@paciolan/remote-module-loader/dist/index.js\"));\nvar createUseRemoteComponent = function (args) {\n    var loadRemoteModule = remote_module_loader_1[\"default\"](args);\n    var useRemoteComponent = function (url) {\n        var _a = react_1.useState({\n            loading: true,\n            err: undefined,\n            component: undefined\n        }), _b = _a[0], loading = _b.loading, err = _b.err, component = _b.component, setState = _a[1];\n        react_1.useEffect(function () {\n            var update = setState;\n            update({ loading: true, err: undefined, component: undefined });\n            loadRemoteModule(url)\n                .then(function (module) {\n                return update({ loading: false, err: undefined, component: module[\"default\"] });\n            })[\"catch\"](function (err) { return update({ loading: false, err: err, component: undefined }); });\n            return function () {\n                // invalidate update function for stale closures\n                update = function () {\n                    // this function is left intentionally blank\n                };\n            };\n        }, [url]);\n        return [loading, err, component];\n    };\n    return useRemoteComponent;\n};\nexports.createUseRemoteComponent = createUseRemoteComponent;\n//# sourceMappingURL=useRemoteComponent.js.map\n\n//# sourceURL=webpack:///./node_modules/@paciolan/remote-component/dist/hooks/useRemoteComponent.js?");

/***/ }),

/***/ "./node_modules/@paciolan/remote-component/dist/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@paciolan/remote-component/dist/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nexports.__esModule = true;\nexports.getServerSideProps = exports.fetchRemoteComponent = exports.RemoteComponent = exports.createRemoteComponent = exports.getDependencies = exports.createRequires = exports.createUseRemoteComponent = void 0;\nvar useRemoteComponent_1 = __webpack_require__(/*! ./hooks/useRemoteComponent */ \"./node_modules/@paciolan/remote-component/dist/hooks/useRemoteComponent.js\");\n__createBinding(exports, useRemoteComponent_1, \"createUseRemoteComponent\");\nvar createRequires_1 = __webpack_require__(/*! ./createRequires */ \"./node_modules/@paciolan/remote-component/dist/createRequires.js\");\n__createBinding(exports, createRequires_1, \"createRequires\");\nvar getDependencies_1 = __webpack_require__(/*! ./getDependencies */ \"./node_modules/@paciolan/remote-component/dist/getDependencies.js\");\n__createBinding(exports, getDependencies_1, \"getDependencies\");\nvar createRemoteComponent_1 = __webpack_require__(/*! ./createRemoteComponent */ \"./node_modules/@paciolan/remote-component/dist/createRemoteComponent.js\");\n__createBinding(exports, createRemoteComponent_1, \"createRemoteComponent\");\nvar RemoteComponent_1 = __webpack_require__(/*! ./components/RemoteComponent */ \"./node_modules/@paciolan/remote-component/dist/components/RemoteComponent.js\");\n__createBinding(exports, RemoteComponent_1, \"RemoteComponent\");\nvar fetchRemoteComponent_1 = __webpack_require__(/*! ./fetchRemoteComponent */ \"./node_modules/@paciolan/remote-component/dist/fetchRemoteComponent.js\");\n__createBinding(exports, fetchRemoteComponent_1, \"fetchRemoteComponent\");\nvar getServerSideProps_1 = __webpack_require__(/*! ./getServerSideProps */ \"./node_modules/@paciolan/remote-component/dist/getServerSideProps.js\");\n__createBinding(exports, getServerSideProps_1, \"getServerSideProps\");\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@paciolan/remote-component/dist/index.js?");

/***/ })

}]);