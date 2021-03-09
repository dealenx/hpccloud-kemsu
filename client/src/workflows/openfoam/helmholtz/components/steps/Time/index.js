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
    // this.state = {
    //   deltaT: 0,
    // };

    this.handleChange = this.handleChange.bind(this);

    // Capture simput data model
    this.state = extract(props.simulation.steps.Input.metadata.model) || {
      data: {
        CavityFields: [
          {
            attr1: {
              deltaT: {
                value: [0.1],
              },
            },
          },
        ],
      },
      type: 'openfoam_cavity_test',
      hideViews: [],
      external: {},
    };
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  myTest() {
    this.saveModel();
  }

  handleChange(event) {
    const localState = this.state;
    if (localState.data.CavityFields[0]) {
      localState.data.CavityFields[0].attr1.deltaT.value[0] =
        event.target.value;
    }

    this.setState({ date: localState.data });
    this.saveModel();
  }

  saveModel() {
    // this.state.data.CavityFields[0].attr1.deltaT.value[0] =
    //   this.state.data.CavityFields[0].attr1.deltaT.value[0] + 1;

    const model = JSON.stringify(this.state);

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
    console.log('this.state', this.state);

    let inputDeltaT;

    if (this.state.data.CavityFields[0]) {
      inputDeltaT = (
        <input
          type="number"
          value={this.state.data.CavityFields[0].attr1.deltaT.value[0]}
          onChange={this.handleChange}
        />
      );
    }
    return (
      <div>
        <div>
          <div>
            <label>Y</label>
            <div>{inputDeltaT}</div>
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
