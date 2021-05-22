"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getAsyncModule = exports.hello = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var loadRemoteComponent, HelloWorld, moduleObject;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            loadRemoteComponent = /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        return _context.abrupt("return", fetch(url).then(function (res) {
                          return res.text();
                        }).then(function (source) {
                          var exports = {};

                          function require(name) {
                            if (name == 'react') return React;else throw "You can't use modules other than \"react\" in remote component.";
                          }

                          var transformedSource = Babel.transform(source, {
                            presets: ['react', 'es2015', 'stage-2']
                          }).code;
                          eval(transformedSource);
                          return exports.__esModule ? exports["default"] : exports;
                        }));

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function loadRemoteComponent(_x) {
                return _ref2.apply(this, arguments);
              };
            }();

            _context2.next = 3;
            return loadRemoteComponent('https://raw.githubusercontent.com/dealenx/hpccloud-kemsu/new-workflow/client/src/workflows/openfoam/helmholtz/components/steps/Introduction/HelloWorld.js');

          case 3:
            HelloWorld = _context2.sent;
            moduleObject = {
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
                  "default": HelloWorld
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
            return _context2.abrupt("return", moduleObject);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getAsyncModule() {
    return _ref.apply(this, arguments);
  };
}();

exports.getAsyncModule = getAsyncModule;
var _default = helmholtzModule;
exports["default"] = _default;
