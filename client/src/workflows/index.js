import createLoadRemoteModule from '@paciolan/remote-module-loader';

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

import { loadRemoteComponent } from './generic/components/steps/LoadRemoteComponent';

import PyFr from './pyfr';
import Visualizer from './visualizer';

const getGistRepoIDByURL = (stringURL) => {
  const url = new URL(stringURL);
  const pathNames = url.pathname.split('/');
  return pathNames[2];
};

const formRawURLfromGistGithubURL = (stringURL) => {
  const id = getGistRepoIDByURL(stringURL);
  const url = `https://gist.githubusercontent.com/dealenx/${id}/raw`;

  return url;
};

const remoteModulesList = {
  OpenFOAMHelmholtz:
    'https://gist.github.com/dealenx/17d9523dc3d10df57689f147bd4411d8',
  OpenFOAMHelmholtzSecond:
    'https://gist.github.com/dealenx/17d9523dc3d10df57689f147bd4411d8',
};

const getAsyncRemoteModule = async (modulePath) => {
  // const module = await import('./openfoam/helmholtz/index');

  // console.log('module', module);

  // const asyncModule = await module.getAsyncModule({
  //   components: {
  //     stepSimulationStart,
  //     stepSimulationView,
  //     stepVisualizationStart,
  //     stepVisualizationView,
  //   },
  //   loadRemoteComponent,
  // });

  // console.log('asyncModule', asyncModule);

  // return asyncModule;

  /* ES5 */
  // const module = await import('./openfoam/helmholtz/index-es5');

  // console.log('module', module.default);

  // const asyncModule = await module();

  // console.log('asyncModule', asyncModule);

  // return asyncModule;

  /* REMOTE IMPORTING */

  const formedURL = formRawURLfromGistGithubURL(modulePath);
  const loadRemoteModule = createLoadRemoteModule();

  const myRemoteModule = loadRemoteModule(`${formedURL}/index.js`);

  const myModule = await myRemoteModule;

  console.log('myModule', myModule);

  const asyncTest = await myModule.getAsyncModule({
    components: {
      stepSimulationStart,
      stepSimulationView,
      stepVisualizationStart,
      stepVisualizationView,
    },
    loadRemoteComponent,
    repoURL: formedURL,
  });

  console.log('asyncTest', asyncTest);

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

export const getNamesFromWorkflows = (workflows) =>
  Object.keys(workflows).map((value) => {
    const label = workflows[value].name;
    return { value, label };
  });

export const getAsyncWorkflows = async () => {
  // console.log('asyncWORKFLOWS ');

  // const list = await Promise.all(
  //   remoteModulesList.map(async (item, key) => {
  //     const localList = {};
  //     localList[item.name] = await getAsyncRemoteModule(item.path);
  //     return localList[item.name];
  //   })
  // );

  const list = {};

  // list = remoteModulesList.map( (item) => {
  //   return
  // } )
  list['OpenFOAMHelmholtz'] = await getAsyncRemoteModule(
    remoteModulesList.OpenFOAMHelmholtz
  );

  console.log('OpenFOAMHelmholtz', list['OpenFOAMHelmholtz']);
  console.log('OpenFOAMCavityTest', OpenFOAMCavityTest);

  const asyncWorkflows = {
    NWChem,
    NWChemExec,
    NWChemNeb,
    OpenFOAMTutorial,
    OpenFOAMWindTunnel,
    OpenFOAMCavity,
    OpenFOAMCavityTest,
    PyFr,
    Visualizer,
    ...list,
  };

  console.log('asyncWORKFLOWS list', asyncWorkflows);

  return asyncWorkflows;
};

export default Workflows;
