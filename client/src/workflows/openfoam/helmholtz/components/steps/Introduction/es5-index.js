"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _content = _interopRequireDefault(require("./content.html"));

// import DocumentationHTML from '../../../../../generic/components/steps/DocumentationHTML';
var Introduction = function Introduction(_ref) {
  var DocumentationHTML = _ref.DocumentationHTML;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(DocumentationHTML, {
    staticContent: _content["default"]
  }));
};

Introduction.propTypes = {
  DocumentationHTML: _propTypes["default"].elementType.isRequired
};
var _default = Introduction;
exports["default"] = _default;
