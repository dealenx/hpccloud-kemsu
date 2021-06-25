(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./src/workflows/openfoam/helmholtz/lib/Introduction.js":
/*!**************************************************************!*\
  !*** ./src/workflows/openfoam/helmholtz/lib/Introduction.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst staticContent = \"\\n<div style='padding: 0 30px;'>\\n    <h2>Introduction</h2>\\n    <p>OpenFOAM is a free, open source computational fluid dynamics (CFD) software package released by the OpenFOAM Foundation. It has a large user base across most areas of engineering and science, from both commercial and academic organisations. OpenFOAM has an extensive range of features to solve anything from complex fluid flows involving chemical reactions, turbulence and heat transfer, to solid dynamics and electromagnetics.</p>\\n\\n    <p><a style=\\\"text-decoration: underline;\\\" href=\\\"http://openfoam.org/resources/\\\" target=\\\"_blank\\\">Find out more</a></p>\\n</div>\\n\\n\";\n\nclass Introduction extends _react.default.Component {\n  constructor(props) {\n    super();\n  }\n\n  render() {\n    const DocumentationHTML = this.props.DocumentationHTML;\n    return /*#__PURE__*/_react.default.createElement(\"div\", null, /*#__PURE__*/_react.default.createElement(DocumentationHTML, {\n      staticContent: staticContent\n    }));\n  }\n\n}\n/* eslint-disable react/no-unused-prop-types */\n\n\nIntroduction.propTypes = {\n  DocumentationHTML: _propTypes.default.func\n};\n/* eslint-enable */\n\nIntroduction.defaultProps = {\n  DocumentationHTML: undefined\n};\nvar _default = Introduction;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/workflows/openfoam/helmholtz/lib/Introduction.js?");

/***/ })

}]);