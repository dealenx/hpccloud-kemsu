(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./src/workflows/openfoam/cavity_test/components/steps/Time/index.js":
/*!***************************************************************************!*\
  !*** ./src/workflows/openfoam/cavity_test/components/steps/Time/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../redux */ \"./src/redux/index.js\");\n/* harmony import */ var _redux_actions_projects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../redux/actions/projects */ \"./src/redux/actions/projects.js\");\n/* harmony import */ var _network__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../network */ \"./src/network/index.js\");\n\n\n\n\n\n\n\nfunction _createSuper(Derived) {\n  var hasNativeReflectConstruct = _isNativeReflectConstruct();\n\n  return function _createSuperInternal() {\n    var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived),\n        result;\n\n    if (hasNativeReflectConstruct) {\n      var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor;\n\n      result = Reflect.construct(Super, arguments, NewTarget);\n    } else {\n      result = Super.apply(this, arguments);\n    }\n\n    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result);\n  };\n}\n\nfunction _isNativeReflectConstruct() {\n  if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n  if (Reflect.construct.sham) return false;\n  if (typeof Proxy === \"function\") return true;\n\n  try {\n    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));\n    return true;\n  } catch (e) {\n    return false;\n  }\n}\n\n\n\n\n\n // ----------------------------------------------------------------------------\n\nfunction saveSimulation(simulation) {\n  Object(_redux__WEBPACK_IMPORTED_MODULE_8__[\"dispatch\"])(_redux_actions_projects__WEBPACK_IMPORTED_MODULE_9__[\"saveSimulation\"](simulation));\n} // ----------------------------------------------------------------------------\n\n\nfunction updateSimulation(simulation) {\n  Object(_redux__WEBPACK_IMPORTED_MODULE_8__[\"dispatch\"])(_redux_actions_projects__WEBPACK_IMPORTED_MODULE_9__[\"updateSimulation\"](simulation));\n} // ----------------------------------------------------------------------------\n\n\nfunction patchSimulation(simulation) {\n  Object(_redux__WEBPACK_IMPORTED_MODULE_8__[\"dispatch\"])(_redux_actions_projects__WEBPACK_IMPORTED_MODULE_9__[\"patchSimulation\"](simulation));\n}\n\nfunction extract(model) {\n  if (model) {\n    return JSON.parse(model);\n  }\n\n  return model;\n}\n\nvar TimeComponent = /*#__PURE__*/function (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(TimeComponent, _React$Component);\n\n  var _super = _createSuper(TimeComponent);\n\n  function TimeComponent(props) {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, TimeComponent);\n\n    _this = _super.call(this, props); // this.state = {\n    //   deltaT: 0,\n    // };\n\n    _this.handleChange = _this.handleChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this)); // Capture simput data model\n\n    _this.state = extract(props.simulation.steps.Input.metadata.model) || {\n      data: {\n        CavityFields: [{\n          attr1: {\n            deltaT: {\n              value: [0.1]\n            }\n          }\n        }]\n      },\n      type: 'openfoam_cavity_test',\n      hideViews: [],\n      external: {}\n    };\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(TimeComponent, [{\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      console.log('componentWillUnmount');\n    }\n  }, {\n    key: \"myTest\",\n    value: function myTest() {\n      this.saveModel();\n    }\n  }, {\n    key: \"handleChange\",\n    value: function handleChange(event) {\n      var localState = this.state;\n\n      if (localState.data.CavityFields[0]) {\n        localState.data.CavityFields[0].attr1.deltaT.value[0] = event.target.value;\n      }\n\n      this.setState({\n        date: localState.data\n      });\n      this.saveModel();\n    }\n  }, {\n    key: \"saveModel\",\n    value: function saveModel() {\n      // this.state.data.CavityFields[0].attr1.deltaT.value[0] =\n      //   this.state.data.CavityFields[0].attr1.deltaT.value[0] + 1;\n      var model = JSON.stringify(this.state); // Push changes right away to prevent invalid data in next step\n\n      var newSim = Object.assign({}, this.props.simulation);\n      newSim.steps.Input.metadata.model = model;\n      this.props.saveSimulation(newSim);\n      _network__WEBPACK_IMPORTED_MODULE_10__[\"default\"].updateSimulationStep(this.props.simulation._id, 'Input', {\n        metadata: {\n          model: model\n        }\n      })[\"catch\"](function (error) {\n        console.error('problem saving model (a)', error);\n      });\n      console.log('SaveModel()');\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      console.log('this.state', this.state);\n      var inputDeltaT;\n\n      if (this.state.data.CavityFields[0]) {\n        inputDeltaT = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"input\", {\n          type: \"number\",\n          value: this.state.data.CavityFields[0].attr1.deltaT.value[0],\n          onChange: this.handleChange\n        });\n      }\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"label\", null, \"Y\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", null, inputDeltaT), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"a\", {\n        onClick: function onClick() {\n          return _this2.saveModel();\n        }\n      }, \"On Click\"))));\n    }\n  }]);\n\n  return TimeComponent;\n}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);\n/* eslint-disable react/no-unused-prop-types */\n\n\nTimeComponent.propTypes = {\n  project: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,\n  simulation: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,\n  step: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,\n  saveSimulation: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,\n  updateSimulation: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,\n  patchSimulation: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func\n};\n/* eslint-enable */\n\nTimeComponent.defaultProps = {\n  saveSimulation: saveSimulation,\n  updateSimulation: updateSimulation,\n  patchSimulation: patchSimulation,\n  project: undefined,\n  simulation: undefined,\n  step: undefined\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (TimeComponent);\n\n//# sourceURL=webpack:///./src/workflows/openfoam/cavity_test/components/steps/Time/index.js?");

/***/ })

}]);