import { dispatch } from '../../../../redux';
import * as Actions from '../../../../redux/actions/projects';

// ----------------------------------------------------------------------------

export function saveSimulation(simulation) {
  dispatch(Actions.saveSimulation(simulation));
}

// ----------------------------------------------------------------------------

export function updateSimulation(simulation) {
  dispatch(Actions.updateSimulation(simulation));
}

// ----------------------------------------------------------------------------

export function patchSimulation(simulation) {
  dispatch(Actions.patchSimulation(simulation));
}
