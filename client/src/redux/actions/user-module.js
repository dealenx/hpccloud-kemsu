import client from '../../network';
import * as netActions from './network';
import { store, dispatch } from '../';
import history from './history';

export const GET_USERS = 'GET_USERS';
export const FETCH_PROJECT_LIST = 'FETCH_PROJECT_LIST';
export const UPDATE_PROJECT_LIST = 'UPDATE_PROJECT_LIST';
export const UPDATE_PROJECT_SIMULATIONS = 'UPDATE_PROJECT_SIMULATIONS';

/* eslint-disable no-shadow */
export function updateProjectList(projects) {
  return { type: UPDATE_PROJECT_LIST, projects };
}

export function updateProjectSimulations(id, simulations) {
  return { type: UPDATE_PROJECT_SIMULATIONS, id, simulations };
}

export function fetchProjectSimulations(id) {
  return (dispatch) => {
    const action = netActions.addNetworkCall(
      `fetch_project_simulations_${id}`,
      'Retreive project simulations'
    );

    client
      .listSimulations(id)
      .then((resp) => {
        const simulations = resp.data;
        dispatch(netActions.successNetworkCall(action.id, resp));
        dispatch(updateProjectSimulations(id, simulations));
      })
      .catch((error) => {
        dispatch(netActions.errorNetworkCall(action.id, error));
      });

    return action;
  };
}

export function fetchProjectList() {
  return (dispatch) => {
    const action = netActions.addNetworkCall(
      'fetch_project_list',
      'Retreive projects'
    );

    client
      .listProjects()
      .then((resp) => {
        dispatch(netActions.successNetworkCall(action.id, resp));
        dispatch(updateProjectList(resp.data));
        resp.data.forEach((project) => {
          dispatch(fetchProjectSimulations(project._id));
        });
      })
      .catch((error) => {
        dispatch(netActions.errorNetworkCall(action.id, error));
      });

    return action;
  };
}
