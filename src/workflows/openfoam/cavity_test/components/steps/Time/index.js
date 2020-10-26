import React from 'react';
import PropTypes from 'prop-types';

import { dispatch } from '../../../../../../redux';
import * as Actions from '../../../../../../redux/actions/projects';

// ----------------------------------------------------------------------------

function saveSimulation(simulation) {
  dispatch(Actions.saveSimulation(simulation));
}

// ----------------------------------------------------------------------------

function updateSimulation(simulation) {
  dispatch(Actions.updateSimulation(simulation));
}

// ----------------------------------------------------------------------------

function patchSimulation(simulation) {
  dispatch(Actions.patchSimulation(simulation));
}

// function extract(model) {
//   if (model) {
//     return JSON.parse(model);
//   }
//   return model;
// }

class TimeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deltaT: 0.1,
    };
    console.log('PROPS', props);

    // this.state = extract(props.simulation.steps[props.step].metadata.model) || {
    //   direction: ['x', '-'],
    //   orientation: ['z', '+'],
    //   speed: 20,
    //   object: [-1, 1, -1, 1, -1, 1],
    //   tunnel: [MAX, -MAX, MAX, -MAX, MAX, -MAX],
    // };

    // // Capture simput data model
    // this.inputModel = extract(props.simulation.steps.Input.metadata.model) || {
    //   data: {},
    //   type: 'openfoam-windtunnel',
    //   hideViews: [],
    //   external: {},
    // };
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <label>Y</label>
            <div>
              {this.state.deltaT}
              {/* <input type="number" value={this.state.deltaT} onChange={this.updateTunnelBounds} name="2" /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/* eslint-disable react/no-unused-prop-types */
TimeComponent.propTypes = {
  project: PropTypes.object,
  simulation: PropTypes.object,
  step: PropTypes.string,
  saveSimulation: PropTypes.func,
  updateSimulation: PropTypes.func,
  patchSimulation: PropTypes.func,
};
/* eslint-enable */

TimeComponent.defaultProps = {
  saveSimulation,
  updateSimulation,
  patchSimulation,

  project: undefined,
  simulation: undefined,
  step: undefined,
};

export default TimeComponent;
