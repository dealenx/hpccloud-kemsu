import NWChem from './nwchem/nwchem-simput';
import NWChemExec from './nwchem/nwchem-exec';
import NWChemNeb from './nwchem/nwchem-neb';
import OpenFOAMTutorial from './openfoam/tutorials';
import OpenFOAMWindTunnel from './openfoam/windtunnel';
import OpenFOAMCavity from './openfoam/cavity';
import OpenFOAMCavityTest from './openfoam/cavity_test';
import OpenFOAMHelmholtz from './openfoam/helmholtz';

import stepSimulationStart from './generic/components/steps/Simulation/Start';
import stepSimulationView from './generic/components/steps/Simulation/View';
import stepVisualizationStart from './generic/components/steps/Visualization/Start';
import stepVisualizationView from './generic/components/steps/Visualization/View';

import createLoadRemoteModule from '@paciolan/remote-module-loader';

import PyFr from './pyfr';
import Visualizer from './visualizer';

const getAsyncOpenFOAMHelmholtz = async () => {
  const module = await import('./openfoam/helmholtz/index');

  console.log('module', module);

  const asyncModule = await module.getAsyncModule({
    components: {
      stepSimulationStart,
      stepSimulationView,
      stepVisualizationStart,
      stepVisualizationView,
    },
  });

  console.log('asyncModule', asyncModule);

  return asyncModule;

  /* ES5 */
  // const module = await import('./openfoam/helmholtz/index-es5');

  // console.log('module', module.default);

  // const asyncModule = await module();

  // console.log('asyncModule', asyncModule);

  // return asyncModule;

  /* REMOTE IMPORTING */

  // const loadRemoteModule = createLoadRemoteModule();

  // const myRemoteModule = loadRemoteModule(
  //   'https://gist.githubusercontent.com/dealenx/17d9523dc3d10df57689f147bd4411d8/raw/b3f6fd2e57d57673c99f5515b804641d27465b6e/index.js'
  // );

  // const myModule = await myRemoteModule;

  // console.log('myModule', myModule);

  // const asyncTest = await myModule.getAsyncModule();

  // console.log('asyncTest', asyncTest);

  // return asyncTest;
};

const Workflows = {
  NWChem,
  NWChemExec,
  NWChemNeb,
  OpenFOAMTutorial,
  OpenFOAMWindTunnel,
  OpenFOAMCavity,
  OpenFOAMCavityTest,
  OpenFOAMHelmholtz,
  PyFr,
  Visualizer,
};

export const workflowNames = Object.keys(Workflows).map((value) => {
  const label = Workflows[value].name;
  return { value, label };
});

export const getNamesFromWorkflows = (workflows) =>
  Object.keys(workflows).map((value) => {
    const label = workflows[value].name;
    return { value, label };
  });

export const getAsyncWorkflows = async () => {
  console.log('asyncWORKFLOWS ');

  const asyncComponent = await getAsyncOpenFOAMHelmholtz();

  console.log('asyncComponent', asyncComponent);
  console.log('OpenFOAMCavityTest', OpenFOAMCavityTest);

  const asyncWorkflows = {
    NWChem,
    NWChemExec,
    NWChemNeb,
    OpenFOAMTutorial,
    OpenFOAMWindTunnel,
    OpenFOAMCavity,
    OpenFOAMCavityTest,
    OpenFOAMHelmholtz: asyncComponent,
    // OpenFOAMHelmholtz,
    module,
    PyFr,
    Visualizer,
  };

  console.log('asyncWORKFLOWS list', asyncWorkflows);

  return asyncWorkflows;
};

export default Workflows;
