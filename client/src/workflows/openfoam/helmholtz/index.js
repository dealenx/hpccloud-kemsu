export const getAsyncModule = async ({
  components,
  loadRemoteComponent,
  isRemote,
  repoURL,
}) => {
  const asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
      /* eslint-disable */
      await callback(array[index], index, array);
      /* eslint-enable */
    }
  };
  const initCustomComponents = async (componentsName) => {
    const list = {};

    await asyncForEach(componentsName, async (compName) => {
      const comp = await import(`./${compName}`);
      list[compName] = comp.default;
    });

    return {
      ...list,
    };
  };

  const initCustomRemoteComponents = async (componentsName) => {
    const list = {};

    await asyncForEach(componentsName, async (compName) => {
      const comp = await loadRemoteComponent(`${repoURL}/${compName}.js`);
      list[compName] = comp;
    });

    return {
      ...list,
    };
  };

  let customComponents = {};

  const compNames = ['Input', 'Introduction'];

  if (isRemote) {
    customComponents = await initCustomRemoteComponents(compNames);
  } else {
    customComponents = await initCustomComponents(compNames);
  }

  const moduleObject = {
    name: 'OpenFoam - Helmholtz',
    simputTypeFile: 'simput-openfoam_helmholtz.js',
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
        default: customComponents.Introduction,
      },
      Input: {
        default: customComponents.Input,
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

// export default helmholtzModule;
