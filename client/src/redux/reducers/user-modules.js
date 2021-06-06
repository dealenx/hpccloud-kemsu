/* eslint-disable import/extensions */
// import { workflowNames } from 'workflows'; // alias
/* eslint-enable import/extensions */

import * as Actions from '../actions/user-module';

export const initialState = {
  list: [],
  active: null,
};

function updateUserModules(state, itemList, idKey = '_id') {
  const list = [];
  itemList.forEach((item) => {
    list.push(item[idKey]);
  });

  // const active = mapById[state.active] ? state.active : null;
  return Object.assign({}, state, { list });
}

export default function userModulesReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.UPDATE_PROJECT_LIST: {
      return updateUserModules(state, action.projects);
    }

    default:
      return state;
  }
}
