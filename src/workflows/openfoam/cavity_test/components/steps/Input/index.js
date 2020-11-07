import React from 'react';
import PropTypes from 'prop-types';
import SimputReact from '../../../../../generic/components/steps/SimputReact';

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

// ----------------------------------------------------------------------------

class InputComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeDeltaT = this.handleChangeDeltaT.bind(this);
    this.handleChangeNu = this.handleChangeNu.bind(this);

    console.log('this.props', this.props);

    this.state = extract(props.simulation.steps.Input.metadata.model) || {
      data: {
        CavityFields: [
          {
            attr1: {
              deltaT: {
                value: [0.1],
              },
              nu: {
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

  saveModel() {
    // this.state.data.CavityFields[0].attr1.deltaT.value[0] =
    //   this.state.data.CavityFields[0].attr1.deltaT.value[0] + 1;

    const localState = this.state;
    // if (localState.data.CavityFields[0]) {
    //   localState.data.CavityFields[0].attr1.deltaT.value[0] =
    //     parseFloat(this.state.data.CavityFields[0].attr1.deltaT.value[0]) + 1;

    //   localState.data.CavityFields[0].attr1.nu.value[0] =
    //     parseFloat(this.state.data.CavityFields[0].attr1.nu.value[0]) + 1;
    // }

    this.setState({ date: localState.data });

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

  localProps() {
    const locProps = this.props;

    // const locState = extract(this.props.simulation.steps.Input.metadata.model);

    // locState.data.CavityFields[0].attr1.deltaT.value[0] =
    //   parseFloat(locState.data.CavityFields[0].attr1.deltaT.value[0]) + 1;

    // this.saveModel();

    locProps.simulation.steps.Input.metadata.model = JSON.stringify(this.state);

    return locProps;
  }

  handleChangeDeltaT(event) {
    const localState = this.state;
    if (localState.data.CavityFields[0]) {
      localState.data.CavityFields[0].attr1.deltaT.value[0] =
        event.target.value;
    }

    this.setState({ date: localState.data });
    this.saveModel();
  }

  handleChangeNu(event) {
    const localState = this.state;
    if (localState.data.CavityFields[0]) {
      localState.data.CavityFields[0].attr1.nu.value[0] = event.target.value;
    }

    this.setState({ date: localState.data });
    this.saveModel();
  }

  render() {
    let inputDeltaT;
    let inputNu;

    if (this.state.data.CavityFields[0]) {
      inputDeltaT = (
        <div className="form-group">
          <label htmlFor="inputDeltaT">DeltaT</label>

          <div className="input-group input-group-lg">
            <input
              value={this.state.data.CavityFields[0].attr1.deltaT.value[0]}
              onChange={this.handleChangeDeltaT}
              type="number"
              className="form-control"
              id="inputDeltaT"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              min={0}
            />
          </div>
          <small id="emailHelp" className="form-text text-muted">
            Шаг по времени
          </small>
        </div>
      );

      inputNu = (
        <div className="form-group">
          <label htmlFor="inputNu">nu</label>

          <div className="input-group input-group-lg">
            <input
              value={this.state.data.CavityFields[0].attr1.nu.value[0]}
              onChange={this.handleChangeNu}
              type="number"
              className="form-control"
              id="inputNu"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              min={0}
            />
          </div>
          <small id="emailHelp" className="form-text text-muted">
            Кинематическая вязкость
          </small>
        </div>
      );
    }

    return (
      <div>
        <div className="container" style={{ marginTop: '12px' }}>
          {inputDeltaT}
          {inputNu}
          {/* <p style={{ margin: '12px 0 4px 0' }}>nu:</p>
          <div>{inputNu}</div>
          <a onClick={() => this.saveModel()}>On Click</a> */}
        </div>
        <div
          style={{
            display: 'none',
          }}
        >
          <SimputReact
            {...this.localProps()}
            isUpdableAndHide
            simputType="openfoam_cavity_test"
            inputFileKeys={[{ key: 'sh', name: 'run.sh', parse: false }]}
            initialDataModel={{
              data: {},
              type: 'openfoam_cavity_test',
              hideViews: [],
            }}
          />
        </div>
      </div>
    );
  }
}

/* eslint-disable react/no-unused-prop-types */
InputComponent.propTypes = {
  project: PropTypes.object,
  simulation: PropTypes.object,
  step: PropTypes.string,
  saveSimulation: PropTypes.func,
  updateSimulation: PropTypes.func,
  patchSimulation: PropTypes.func,
};
/* eslint-enable */

InputComponent.defaultProps = {
  saveSimulation,
  updateSimulation,
  patchSimulation,

  project: undefined,
  simulation: undefined,
  step: undefined,
};

export default InputComponent;
