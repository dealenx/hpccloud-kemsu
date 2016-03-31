import ButtonBar        from '../../../../../../panels/ButtonBar';
import FileListing      from '../../../../../../panels/FileListing';
import JobMonitor       from '../../../../../../panels/JobMonitor';
import merge            from 'mout/src/object/merge';
import React            from 'react';

import get              from 'mout/src/object/get';
import { connect }      from 'react-redux';
import { dispatch }     from '../../../../../../redux';
import * as Actions     from '../../../../../../redux/actions/taskflows';
import * as SimActions  from '../../../../../../redux/actions/projects';


const ACTIONS = {
  terminate: { name: 'terminateTaskflow', label: 'Terminate', icon: '' },
  visualize: { name: 'visualizeTaskflow', label: 'Visualize', icon: '' },
  rerun: { name: 'deleteTaskflow', label: 'Rerun', icon: '' },
};

function getActions(actionsList, disabled) {
  return actionsList.map((action) => Object.assign({ disabled }, ACTIONS[action]));
}

const VisualizationView = React.createClass({
  displayName: 'pyfr/common/steps/Visualization/View',

  propTypes: {
    location: React.PropTypes.object,
    project: React.PropTypes.object,
    simulation: React.PropTypes.object,
    step: React.PropTypes.string,
    taskFlowName: React.PropTypes.string,
    primaryJob: React.PropTypes.string,
    view: React.PropTypes.string,

    onTerminateTaskflow: React.PropTypes.func,
    onDeleteTaskflow: React.PropTypes.func,
    onVisualizeTaskflow: React.PropTypes.func,

    taskflowId: React.PropTypes.string,
    taskflow: React.PropTypes.object,
    buttonsDisabled: React.PropTypes.bool,
    error: React.PropTypes.string,
  },

  visualizeTaskflow() {
    const newSimState = Object.assign({}, this.props.simulation, { active: 'Visualization' });
    const location = {
      pathname: this.props.location.pathname,
      query: merge(this.props.location.query, { view: 'visualizer' }),
      state: this.props.location.state,
    };

    this.props.onVisualizeTaskflow(newSimState, location);
  },

  terminateTaskflow() {
    this.props.onTerminateTaskflow(this.props.taskflowId);
  },

  deleteTaskflow() {
    const simulationStep = {
      id: this.props.simulation._id,
      step: 'Visualization',
      data: {
        view: 'default',
        metadata: {},
      },
    };
    const location = {
      pathname: this.props.location.pathname,
      query: { view: 'default' },
      state: this.props.location.state,
    };

    this.props.onDeleteTaskflow(this.props.taskflowId, simulationStep, location);
  },

  buttonBarAction(action) {
    this[action]();
  },

  render() {
    if (!this.props.taskflow || !this.props.taskflow.flow) {
      return null;
    }

    const { taskflow, taskflowId, error, simulation, buttonsDisabled } = this.props;
    const jobs = Object.keys(taskflow.jobMapById).map(id => taskflow.jobMapById[id]);
    const actions = [];

    // name is paraview and status is running -> visualize
    if (jobs.some(job => job.name === this.props.primaryJob && job.status === 'running')) {
      actions.push('visualize');
    }

    taskflow.actions.forEach(action => {
      actions.push(action);
    });

    return (
      <div>
        <JobMonitor taskflowId={ taskflowId } />
        <FileListing title="Input Files" folderId={simulation.metadata.inputFolder._id} />
        <FileListing title="Output Files" folderId={simulation.metadata.outputFolder._id} />
        <section>
          <ButtonBar
            onAction={ this.buttonBarAction }
            actions={ getActions(actions, buttonsDisabled) }
            error={ error }
          />
        </section>
      </div>
    );
  },
});


// Binding --------------------------------------------------------------------
/* eslint-disable arrow-body-style */

export default connect(
  (state, props) => {
    var taskflowId = null;
    const activeProject = state.projects.active;
    const activeSimulation = activeProject ? state.projects.simulations[activeProject].active : null;

    if (activeSimulation) {
      const simulation = state.simulations.mapById[activeSimulation];
      taskflowId = simulation.steps.Visualization.metadata.taskflowId;
    }

    return {
      taskflowId,
      taskflow: taskflowId ? state.taskflows.mapById[taskflowId] : null,
      buttonsDisabled: !!get(state, 'network.pending.terminate_taskflow') ||
                       !!get(state, 'network.pending.delete_taskflow'),
      error: null,
    };
  },
  () => {
    return {
      onVisualizeTaskflow: (sim, location) => dispatch(SimActions.saveSimulation(sim, null, location)),
      onDeleteTaskflow: (id, simulationStep, location) => dispatch(Actions.deleteTaskflow(id, simulationStep, location)),
      onTerminateTaskflow: (id) => dispatch(Actions.terminateTaskflow(id)),
    };
  }
)(VisualizationView);
