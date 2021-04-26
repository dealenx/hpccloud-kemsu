import NWChem from './nwchem/nwchem-simput';
import NWChemExec from './nwchem/nwchem-exec';
import NWChemNeb from './nwchem/nwchem-neb';
import OpenFOAMTutorial from './openfoam/tutorials';
import OpenFOAMWindTunnel from './openfoam/windtunnel';
import OpenFOAMCavity from './openfoam/cavity';
import OpenFOAMCavityTest from './openfoam/cavity_test';
// import OpenFOAMHelmholtz from './openfoam/helmholtz';

import PyFr from './pyfr';
import Visualizer from './visualizer';

const getAsyncOpenFOAMHelmholtz = async () => {
  const module = await import('./openfoam/helmholtz');
  return module.default;
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
