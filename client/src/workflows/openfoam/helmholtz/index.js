// import Introduction from './components/steps/Introduction';
import stepInput from './components/steps/Input';

const helmholtzModule = {
  name: 'OpenFoam - Helmholtz',
  components: {
    NewSimulation: null,
  },
  // logo,
  requiredAttachments: {
    project: [],
    simulation: [],
  },
  config: {
    cluster: {
      'config.openfoam.enable': {
        type: 'bool',
        label: 'OpenFoam enabled',
        description: 'Check if the cluster is able to run OpenFoam simulation',
      },
    },
  },
  steps: {
    _order: [
      'Introduction',
      // 'Input',
      // 'Simulation',
      // 'Visualization',
    ],
    _disabled: ['Visualization'],
    _initial_state: {
      Introduction: {
        type: 'input',
        metadata: {
          alwaysAvailable: true,
        },
      },
      // Input: {
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
      default: null,
    },
    // Input: {
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
    Visualization: 'hpccloud.taskflow.paraview.visualizer.ParaViewTaskFlow',
  },
  primaryJobs: {
    Simulation: 'openfoam_run',
    Visualization: 'paraview',
  },
  labels: {
    Introduction: {
      default: 'Introduction',
    },
    // Input: {
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
  },
};

export const hello = 'Hello world';

export const getAsyncModule = async ({ components }) => {
  console.log('components', components);
  /* REMOTE LOADING OF COMPONENTS  */
  const loadRemoteComponent = async (url) => {
    return fetch(url)
      .then((res) => res.text())
      .then((source) => {
        const exports = {};
        function require(name) {
          console.log('name', name);
          if (name == 'react') return React;
          // if (name == 'prop-types') return PropTypes;
          else
            throw `You can't use modules other than "react" in remote component.`;
        }
        const transformedSource = Babel.transform(source, {
          presets: ['react', 'es2015', 'stage-2'],
        }).code;
        eval(transformedSource);
        return exports.__esModule ? exports.default : exports;
      });
  };

  const Introduction = await loadRemoteComponent(
    'https://gist.githubusercontent.com/dealenx/17d9523dc3d10df57689f147bd4411d8/raw/29893084a20a3ee05768445abe0b10804468c420/Introduction.js'
  );

  const moduleObject = {
    name: 'OpenFoam - Helmholtz',
    // logo,
    components: {
      NewSimulation: null,
    },
    requiredAttachments: {
      project: [],
      simulation: [],
    },
    config: {
      cluster: {
        'config.openfoam.enable': {
          type: 'bool',
          label: 'OpenFoam enabled',
          description:
            'Check if the cluster is able to run OpenFoam simulation',
        },
      },
    },
    steps: {
      _order: ['Introduction', 'Input', 'Simulation', 'Visualization'],
      _disabled: ['Visualization'],
      _initial_state: {
        Introduction: {
          type: 'input',
          metadata: {
            alwaysAvailable: true,
          },
        },
        Input: {
          type: 'input',
          metadata: {},
        },
        Simulation: {
          type: 'output',
          metadata: {},
        },
        Visualization: {
          type: 'output',
          metadata: {},
        },
      },
      Introduction: {
        default: Introduction,
      },
      Input: {
        default: stepInput,
      },
      Simulation: {
        default: components.stepSimulationStart,
        run: components.stepSimulationView,
      },
      Visualization: {
        default: components.stepVisualizationStart,
        run: components.stepVisualizationView,
      },
    },
    taskFlows: {
      Simulation: 'hpccloud.taskflow.openfoam.helmholtz.OpenFOAMTaskFlow',
      Visualization: 'hpccloud.taskflow.paraview.visualizer.ParaViewTaskFlow',
    },
    primaryJobs: {
      Simulation: 'openfoam_run',
      Visualization: 'paraview',
    },
    labels: {
      Introduction: {
        default: 'Introduction',
      },
      Input: {
        default: 'Dataset selection',
      },
      Simulation: {
        default: 'Simulation',
        run: 'Simulation (running)',
      },
      Visualization: {
        default: 'Visualization',
        run: 'Visualization (running)',
      },
    },
  };
  return moduleObject;
};

export default helmholtzModule;
