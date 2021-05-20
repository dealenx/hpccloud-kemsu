import NWChem from './nwchem/nwchem-simput';
import NWChemExec from './nwchem/nwchem-exec';
import NWChemNeb from './nwchem/nwchem-neb';
import OpenFOAMTutorial from './openfoam/tutorials';
import OpenFOAMWindTunnel from './openfoam/windtunnel';
import OpenFOAMCavity from './openfoam/cavity';
import OpenFOAMCavityTest from './openfoam/cavity_test';
import OpenFOAMHelmholtz from './openfoam/helmholtz';

import createLoadRemoteModule from '@paciolan/remote-module-loader';

import PyFr from './pyfr';
import Visualizer from './visualizer';

const getAsyncOpenFOAMHelmholtz = async () => {
  // const module = await import('./openfoam/helmholtz/index-es5');

  // console.log('module', module.default);

  // const asyncModule = await module();

  // console.log('asyncModule', asyncModule);

  // return asyncModule;

  const loadRemoteModule = createLoadRemoteModule();

  const myRemoteModule = loadRemoteModule(
    'https://gist.githubusercontent.com/dealenx/17d9523dc3d10df57689f147bd4411d8/raw/efdad121b081bee2c29a4fb738bdb73f7631d571/helmholtz-es5.js'
  );

  const myModule = await myRemoteModule;

  console.log('myModule', myModule);

  const asyncTest = await myModule.getAsyncModule();

  console.log('asyncTest', asyncTest);

  // return myModule.default;
  return asyncTest;
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
