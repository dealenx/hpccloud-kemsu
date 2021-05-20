(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/workflows/openfoam/helmholtz/index-es5.js":
/*!*******************************************************!*\
  !*** ./src/workflows/openfoam/helmholtz/index-es5.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar helmholtzModule = {\n  name: 'OpenFoam - Helmholtz',\n  // logo,\n  requiredAttachments: {\n    project: [],\n    simulation: []\n  },\n  config: {\n    cluster: {\n      'config.openfoam.enable': {\n        type: 'bool',\n        label: 'OpenFoam enabled',\n        description: 'Check if the cluster is able to run OpenFoam simulation'\n      }\n    }\n  },\n  steps: {\n    _order: ['Introduction' // 'Input',\n    // 'Simulation',\n    // 'Visualization',\n    ],\n    _disabled: ['Visualization'],\n    _initial_state: {\n      Introduction: {\n        type: 'input',\n        metadata: {\n          alwaysAvailable: true\n        }\n      } // Input: {\n      //   type: 'input',\n      //   metadata: {},\n      // },\n      // Simulation: {\n      //   type: 'output',\n      //   metadata: {},\n      // },\n      // Visualization: {\n      //   type: 'output',\n      //   metadata: {},\n      // },\n\n    },\n    Introduction: {\n      \"default\": null\n    } // Input: {\n    //   default: stepInput,\n    // },\n    // Simulation: {\n    //   default: stepSimulationStart,\n    //   run: stepSimulationView,\n    // },\n    // Visualization: {\n    //   default: stepVisualizationStart,\n    //   run: stepVisualizationView,\n    // },\n\n  },\n  taskFlows: {\n    Simulation: 'hpccloud.taskflow.openfoam.helmholtz.OpenFOAMTaskFlow',\n    Visualization: 'hpccloud.taskflow.paraview.visualizer.ParaViewTaskFlow'\n  },\n  primaryJobs: {\n    Simulation: 'openfoam_run',\n    Visualization: 'paraview'\n  },\n  labels: {\n    Introduction: {\n      \"default\": 'Introduction'\n    } // Input: {\n    //   default: 'Dataset selection',\n    // },\n    // Simulation: {\n    //   default: 'Simulation',\n    //   run: 'Simulation (running)',\n    // },\n    // Visualization: {\n    //   default: 'Visualization',\n    //   run: 'Visualization (running)',\n    // },\n\n  }\n};\nvar _default = helmholtzModule;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack:///./src/workflows/openfoam/helmholtz/index-es5.js?");

/***/ })

}]);