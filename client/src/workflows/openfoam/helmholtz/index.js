const helmholtzModule = {
  name: 'OpenFoam - Helmholtz',
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

export const getAsyncModule = async () => helmholtzModule;

export default helmholtzModule;
