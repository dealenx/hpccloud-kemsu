import NWChem       from './nwchem/nwchem-simput';
import NWChemExec   from './nwchem/nwchem-exec';
import PyFr         from './pyfr';
import Visualizer   from './visualizer';

const Workflows = {
  NWChem,
  NWChemExec,
  PyFr,
  Visualizer,
};

export const workflowNames = Object.keys(Workflows).map(value => {
  const label = Workflows[value].name;
  return { value, label };
});

export default Workflows;
