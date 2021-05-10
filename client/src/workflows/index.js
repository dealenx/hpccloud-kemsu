import NWChem from './nwchem/nwchem-simput';
import NWChemExec from './nwchem/nwchem-exec';
import NWChemNeb from './nwchem/nwchem-neb';
import OpenFOAMTutorial from './openfoam/tutorials';
import OpenFOAMWindTunnel from './openfoam/windtunnel';
import OpenFOAMCavity from './openfoam/cavity';
import OpenFOAMCavityTest from './openfoam/cavity_test';
// import OpenFOAMHelmholtz from './openfoam/helmholtz';

import createLoadRemoteModule from '@paciolan/remote-module-loader';

import PyFr from './pyfr';
import Visualizer from './visualizer';

const getAsyncOpenFOAMHelmholtz = async () => {
  const loadRemoteModule = createLoadRemoteModule();
  const myRemoteModule = loadRemoteModule(
    'https://raw.githubusercontent.com/dealenx/hpccloud-kemsu/new-workflow/client/src/workflows/openfoam/helmholtz/index-es5.js'
  );

  const myModule = await myRemoteModule;

  console.log('myModule', myModule);

  // const module = await import('./openfoam/helmholtz');
  const moduleObject = await myModule.getAsyncModule();
  return moduleObject;
};

const Workflows = {
  NWChem,
  NWChemExec,
  NWChemNeb,
  OpenFOAMTutorial,
  OpenFOAMWindTunnel,
  OpenFOAMCavity,
  OpenFOAMCavityTest,
  // OpenFOAMHelmholtz,
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

  const asyncWorkflows = {
    NWChem,
    NWChemExec,
    NWChemNeb,
    OpenFOAMTutorial,
    OpenFOAMWindTunnel,
    OpenFOAMCavity,
    OpenFOAMCavityTest,
    OpenFOAMHelmholtz: asyncComponent,
    module,
    PyFr,
    Visualizer,
  };

  console.log('asyncWORKFLOWS list', asyncWorkflows);

  return asyncWorkflows;
};

export default Workflows;
