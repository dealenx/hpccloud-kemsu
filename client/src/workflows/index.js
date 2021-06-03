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

function includeInBody(file = '', text = '') {
  const script = document.createElement('script');
  if (file !== null) {
    script.src = file;
  }

  script.type = 'text/javascript';
  script.async = false;
  script.defer = true;
  script.text = text;

  document.getElementsByTagName('body').item(0).appendChild(script);
}

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

const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};

const remoteModulesList = {
  // OpenFOAMHelmholtz:
  //   'https://gist.github.com/dealenx/17d9523dc3d10df57689f147bd4411d8',
  OpenFOAMHelmholtz: './openfoam/helmholtz/index',

  OpenFOAMHelmholtzSecond:
    'https://gist.github.com/dealenx/17d9523dc3d10df57689f147bd4411d8',
};

const isValidHttpUrl = (string) => {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === 'http:' || url.protocol === 'https:';
};

includeInBody(
  'https://gitcdn.link/repo/dealenx/17d9523dc3d10df57689f147bd4411d8/raw/647d63b8ffe27bd077595d71773a5727ddbb397f/simput-openfoam_helmholtz.js'
);

const getAsyncRemoteModule = async (modulePath) => {
  let asyncModule = {};
  console.log('isValidHttpUrl(modulePath)', isValidHttpUrl(modulePath));
  if (isValidHttpUrl(modulePath)) {
    /* REMOTE IMPORTING */
    const formedURL = formRawURLfromGistGithubURL(modulePath);
    const loadRemoteModule = createLoadRemoteModule();

    const myRemoteModule = loadRemoteModule(`${formedURL}/index.js`);

    const myModule = await myRemoteModule;

    console.log('myModule', myModule);

    asyncModule = await myModule.getAsyncModule({
      components: {
        stepSimulationStart,
        stepSimulationView,
        stepVisualizationStart,
        stepVisualizationView,
      },
      loadRemoteComponent,
      isRemote: true,
      repoURL: formedURL,
    });

    console.log('asyncModule', asyncModule);
  } else {
    const remoteModule = await import('./openfoam/helmholtz/index');

    console.log('remoteModule', remoteModule);

    asyncModule = await remoteModule.getAsyncModule({
      components: {
        stepSimulationStart,
        stepSimulationView,
        stepVisualizationStart,
        stepVisualizationView,
      },
      loadRemoteComponent,
      isRemote: false,
      repoURL: '',
    });
    console.log('asyncModule', asyncModule);
  }

  return asyncModule;
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
  const remoteModule = await import('./openfoam/helmholtz/index');

  console.log('remoteModule', remoteModule);

  

  const OpenFOAMHelmholtz = await remoteModule.getAsyncModule({
    components: {
      stepSimulationStart,
      stepSimulationView,
      stepVisualizationStart,
      stepVisualizationView,
    },
    loadRemoteComponent,
    repoURL: '',
  });
  console.log('OpenFOAMHelmholtz', OpenFOAMHelmholtz);

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
    OpenFOAMHelmholtz,
    // ...list,
  };

  console.log('asyncWORKFLOWS list', asyncWorkflows);

  return asyncWorkflows;
};

export default Workflows;
