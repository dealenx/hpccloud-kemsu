(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./src/workflows/openfoam/helmholtz/lib/RemoteComponent.js":
/*!*****************************************************************!*\
  !*** ./src/workflows/openfoam/helmholtz/lib/RemoteComponent.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.RemoteComponent = void 0;\n\nvar _remoteComponent = __webpack_require__(/*! @paciolan/remote-component */ \"./node_modules/@paciolan/remote-component/dist/index.js\");\n\nvar _remoteComponentConfig = __webpack_require__(/*! ./remote-component.config.js */ \"./src/workflows/openfoam/helmholtz/lib/remote-component.config.js\");\n\nvar requires = (0, _remoteComponent.createRequires)(_remoteComponentConfig.resolve);\nvar RemoteComponent = (0, _remoteComponent.createRemoteComponent)({\n  requires: requires\n});\nexports.RemoteComponent = RemoteComponent;\n\n//# sourceURL=webpack:///./src/workflows/openfoam/helmholtz/lib/RemoteComponent.js?");

/***/ }),

/***/ "./src/workflows/openfoam/helmholtz/lib/remote-component.config.js":
/*!*************************************************************************!*\
  !*** ./src/workflows/openfoam/helmholtz/lib/remote-component.config.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Dependencies for Remote Components\n */\n\nmodule.exports = {\n  resolve: {\n    react: __webpack_require__(/*! react */ \"./node_modules/react/index.js\")\n  }\n};\n\n//# sourceURL=webpack:///./src/workflows/openfoam/helmholtz/lib/remote-component.config.js?");

/***/ })

}]);