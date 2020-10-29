import React from 'react';
import PropTypes from 'prop-types';

import { dispatch } from '../../../../../../redux';
import * as Actions from '../../../../../../redux/actions/projects';

import client from '../../../../../../network';

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

function extract(model) {
  if (model) {
    return JSON.parse(model);
  }
  return model;
}

class TimeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // console.log('PROPS', props);

    // console.log(
    //   'extract(props.simulation.steps.Input.metadata.model)',
    //   extract(props.simulation.steps.Input.metadata.model)
    // );

    // this.state = extract(props.simulation.steps[props.step].metadata.model) || {
    //   direction: ['x', '-'],
    //   orientation: ['z', '+'],
    //   speed: 20,
    //   object: [-1, 1, -1, 1, -1, 1],
    //   tunnel: [MAX, -MAX, MAX, -MAX, MAX, -MAX],
    // };

    // Capture simput data model
    this.inputModel = extract(props.simulation.steps.Input.metadata.model) || {
      data: {},
      type: 'openfoam_cavity_test',
      hideViews: [],
      external: {},
      CavityFields: [
        {
          attr1: {
            deltaT: 0.0,
          },
        },
      ],
    };
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');

    this.saveModel();
  }

  saveModel() {
    this.inputModel.data.CavityFields[0].attr1.deltaT.value[0] =
      this.inputModel.data.CavityFields[0].attr1.deltaT.value[0] + 1;

    const model = JSON.stringify(this.inputModel);

    // Push changes right away to prevent invalid data in next step
    const newSim = Object.assign({}, this.props.simulation);
    newSim.steps.Input.metadata.model = model;
    this.props.saveSimulation(newSim);

    client
      .updateSimulationStep(this.props.simulation._id, 'Input', {
        metadata: { model },
      })
      .catch((error) => {
        console.error('problem saving model (a)', error);
      });

    console.log('SaveModel()');
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <label>Y</label>
            <div>
              {/* {this.inputModel.data.CavityFields[0].attr1.deltaT} */}
              {/* <input type="number" value={this.state.deltaT} onChange={this.updateTunnelBounds} name="2" /> */}
            </div>
            <a onClick={() => this.saveModel()}>On Click</a>
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
