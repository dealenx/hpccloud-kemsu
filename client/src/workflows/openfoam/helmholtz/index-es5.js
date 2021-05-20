"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getAsyncModule = exports.hello = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var helmholtzModule = {
  name: 'OpenFoam - Helmholtz',
  // logo,
  requiredAttachments: {
    project: [],
    simulation: []
  },
  config: {
    cluster: {
      'config.openfoam.enable': {
        type: 'bool',
        label: 'OpenFoam enabled',
        description: 'Check if the cluster is able to run OpenFoam simulation'
      }
    }
  },
  steps: {
    _order: ['Introduction' // 'Input',
    // 'Simulation',
    // 'Visualization',
    ],
    _disabled: ['Visualization'],
    _initial_state: {
      Introduction: {
        type: 'input',
        metadata: {
          alwaysAvailable: true
        }
      } // Input: {
      //   type: 'input',
      //   metadata: {},
      // },
      // Simulation: {
      //   type: 'output',
      //   metadata: {},
      // },
      // Visualization: {
      //   type: 'output',
      //   metadata: {},
      // },

    },
    Introduction: {
      "default": null
    } // Input: {
    //   default: stepInput,
    // },
    // Simulation: {
    //   default: stepSimulationStart,
    //   run: stepSimulationView,
    // },
    // Visualization: {
    //   default: stepVisualizationStart,
    //   run: stepVisualizationView,
    // },

  },
  taskFlows: {
    Simulation: 'hpccloud.taskflow.openfoam.helmholtz.OpenFOAMTaskFlow',
    Visualization: 'hpccloud.taskflow.paraview.visualizer.ParaViewTaskFlow'
  },
  primaryJobs: {
    Simulation: 'openfoam_run',
    Visualization: 'paraview'
  },
  labels: {
    Introduction: {
      "default": 'Introduction'
    } // Input: {
    //   default: 'Dataset selection',
    // },
    // Simulation: {
    //   default: 'Simulation',
    //   run: 'Simulation (running)',
    // },
    // Visualization: {
    //   default: 'Visualization',
    //   run: 'Visualization (running)',
    // },

  }
};
var hello = 'Hello world';
exports.hello = hello;

var getAsyncModule = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", helmholtzModule);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getAsyncModule() {
    return _ref.apply(this, arguments);
  };
}();

exports.getAsyncModule = getAsyncModule;
var _default = helmholtzModule;
exports["default"] = _default;
