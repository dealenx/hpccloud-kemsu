import createLoadRemoteModule from '@paciolan/remote-module-loader';

import NWChem from './nwchem/nwchem-simput';
import NWChemExec from './nwchem/nwchem-exec';
import NWChemNeb from './nwchem/nwchem-neb';
import OpenFOAMTutorial from './openfoam/tutorials';
import OpenFOAMWindTunnel from './openfoam/windtunnel';
import OpenFOAMCavity from './openfoam/cavity';
import OpenFOAMCavityTest from './openfoam/cavity_test';
// import OpenFOAMHelmholtz from './openfoam/helmholtz';

import stepSimulationStart from './generic/components/steps/Simulation/Start';
import stepSimulationView from './generic/components/steps/Simulation/View';
import stepVisualizationStart from './generic/components/steps/Visualization/Start';
import stepVisualizationView from './generic/components/steps/Visualization/View';

import { loadRemoteComponent } from './generic/components/steps/LoadRemoteComponent';

import client from '../network';

import PyFr from './pyfr';
import Visualizer from './visualizer';

// const json = `{

// }`;

// const remoteModulesList = JSON.parse(json);

const loadScript = ({ src = null, text = '', isAsync = true }) => {
  const s = document.createElement('script');
  return new Promise((resolve, reject) => {
    let r = false;
    s.type = 'text/javascript';
    s.text = text;
    s.async = isAsync;
    if (src !== null) {
      s.src = src;
      s.onerror = (err) => {
        reject(err, s);
      };
      /* eslint-disable */
      s.onload = s.onreadystatechange = function () {
        /* eslint-enable */
        console.log(this.readyState); // uncomment this line to see which ready states are called.
        if (!r && (!this.readyState || this.readyState === 'complete')) {
          r = true;
          resolve();
        }
      };
    }

    document.getElementsByTagName('body').item(0).appendChild(s);
  });
};

const getGistRepoIDByURL = (stringURL) => {
  const url = new URL(stringURL);
  const pathNames = url.pathname.split('/');
  return pathNames[2];
};

const getRepoUsernameByURL = (stringURL) => {
  const url = new URL(stringURL);
  const pathNames = url.pathname.split('/');
  return pathNames[1];
};

const formRawURLfromGistGithubURL = (stringURL) => {
  const user = getRepoUsernameByURL(stringURL);
  const id = getGistRepoIDByURL(stringURL);
  const url = `https://gist.githubusercontent.com/${user}/${id}/raw`;

  return url;
};

const formCNDfromGistGithubURL = (stringURL) => {
  const user = getRepoUsernameByURL(stringURL);
  const id = getGistRepoIDByURL(stringURL);
  const url = `https://gitcdn.link/repo/${user}/${id}/raw`;

  return url;
};

const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    /* eslint-disable */
    await callback(array[index], index, array);
    /* eslint-enable */
  }
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
    const remoteModule = await import(`${modulePath}/index`);

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

  if (isValidHttpUrl(modulePath)) {
    const formedURL = formCNDfromGistGithubURL(modulePath);
    await loadScript({
      src: `${formedURL}/${asyncModule.simputTypeFile}`,
    });
  } else {
    /* eslint-disable */
    const rawImportedFile = require(`${modulePath}/${asyncModule.simputTypeFile}`)
      .default;
    /* eslint-enable */

    loadScript({ text: rawImportedFile });
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
  // OpenFOAMHelmholtz,
  PyFr,
  Visualizer,
};

export const getNamesFromWorkflows = (workflows) =>
  Object.keys(workflows).map((value) => {
    const label = workflows[value].name;
    return { value, label };
  });

export const getAsyncWorkflows = async () => {
  console.log('client.listUserModules()', await client.listUserModules());

  const responseListUserModules = await client.listUserModules();

  console.log('responseListUserModules.data', responseListUserModules.data);
  const list = {};

  console.log('before list');

  await asyncForEach(responseListUserModules.data, async (item) => {
    list[item.name] = await getAsyncRemoteModule(item.url);
    console.log(list[item.name]);
  });
  console.log('Done');
  console.log('list', list);

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
