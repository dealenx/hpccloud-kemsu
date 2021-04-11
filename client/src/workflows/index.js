import NWChem from './nwchem/nwchem-simput';
import NWChemExec from './nwchem/nwchem-exec';
import NWChemNeb from './nwchem/nwchem-neb';
import OpenFOAMTutorial from './openfoam/tutorials';
import OpenFOAMWindTunnel from './openfoam/windtunnel';
import OpenFOAMCavity from './openfoam/cavity';
import OpenFOAMCavityTest from './openfoam/cavity_test';
import OpenFOAMHelmholtz from './openfoam/helmholtz';

import PyFr from './pyfr';
import Visualizer from './visualizer';

const Workflows = {
  NWChem,
  NWChemExec,
  NWChemNeb,
  OpenFOAMTutorial,
  OpenFOAMWindTunnel,
  OpenFOAMCavity,
  OpenFOAMCavityTest,
  OpenFOAMHelmholtz,
  // ...returnComponentTest(),
  PyFr,
  Visualizer,
};

export const workflowNames = Object.keys(Workflows).map((value) => {
  const label = Workflows[value].name;
  return { value, label };
});

export const getAsyncWorkflows = async () => {
  console.log('WORKFLOWS ');
  return Workflows;
};

export default Workflows;
