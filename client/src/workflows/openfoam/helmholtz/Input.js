import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as THREE from 'three';

import * as Antd from 'antd';

// import Viz from './viz';

// import { RemoteComponent } from './RemoteComponent';

// const url = "https://raw.githubusercontent.com/Paciolan/remote-component/master/examples/remote-components/HelloWorld.js"; // prettier-ignore

// const HelloWorld = (props) => <RemoteComponent url={url} {...props} />;

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
    this.handleChangeEndTime = this.handleChangeEndTime.bind(this);
    this.handleChangeNu = this.handleChangeNu.bind(this);
    this.handleChangeFieldLength = this.handleChangeFieldLength.bind(this);

    console.log('this.props', this.props);

    this.state = extract(props.simulation.steps.Input.metadata.model) || {
      data: {
        CavityFields: [
          {
            attr1: {
              deltaT: {
                value: [0.005],
              },
              endTime: {
                value: [10],
              },
              nu: {
                value: [0.001],
              },
              fieldLength: {
                value: [12.0],
              },
            },
          },
        ],
      },
      type: 'openfoam_helmholtz',
      hideViews: [],
      external: {},
    };

    this.simputKey = 0;
  }

  updateSimputKey() {
    ++this.simputKey;
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

    const saveSimulation = this.props.saveSimulation;

    const client = this.props.client;

    // Push changes right away to prevent invalid data in next step
    const newSim = Object.assign({}, this.props.simulation);
    newSim.steps.Input.metadata.model = model;
    console.log('before saveSimulation');
    saveSimulation(newSim);

    client
      .updateSimulationStep(this.props.simulation._id, 'Input', {
        metadata: { model },
      })
      .catch((error) => {
        console.error('problem saving model (a)', error);
      });

    console.log('SaveModel()');
    // this.updateSimputKey();
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

  handleChangeEndTime(event) {
    const localState = this.state;
    if (localState.data.CavityFields[0]) {
      localState.data.CavityFields[0].attr1.endTime.value[0] =
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

  async handleChangeFieldLength(event) {
    const localState = this.state;
    if (localState.data.CavityFields[0]) {
      localState.data.CavityFields[0].attr1.fieldLength.value[0] =
        event.target.value;
    }

    await this.setState({ date: localState.data });
    this.saveModel();
  }

  render() {
    const SimputReact = this.props.SimputReact;

    let inputDeltaT;
    let inputEndTime;
    let inputNu;
    let inputFieldLength;
    let inputFieldHeight;
    let inputFieldWidth;
    let leftY1;
    let leftY2;
    let rightY1;
    let rightY2;

    if (this.state.data.CavityFields[0]) {
      inputDeltaT = (
        <div className="form-group">
          {/* <label htmlFor="inputDeltaT">
            DeltaT <HelloWorld name="Paciolan" />
          </label> */}

          <div className="input-group input-group-lg">
            <Antd.Input
              value={this.state.data.CavityFields[0].attr1.deltaT.value[0]}
              onChange={this.handleChangeDeltaT}
              type="number"
              className="form-control"
              id="inputDeltaT"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              step={0.05}
              min={0}
            />
          </div>
          <small id="emailHelp" className="form-text text-muted">
            Шаг по времени
          </small>
        </div>
      );

      inputEndTime = (
        <div className="form-group">
          <label htmlFor="inputDeltaT">endTime</label>

          <div className="input-group input-group-lg">
            <Antd.Input
              value={this.state.data.CavityFields[0].attr1.endTime.value[0]}
              onChange={this.handleChangeEndTime}
              type="number"
              className="form-control"
              id="inputDeltaT"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              min={0}
            />
          </div>
          <small id="emailHelp" className="form-text text-muted">
            Конечное время расчета
          </small>
        </div>
      );

      inputNu = (
        <div className="form-group">
          <label htmlFor="inputNu">nu</label>

          <div className="input-group input-group-lg">
            <Antd.Input
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

      inputFieldLength = (
        <div className="form-group">
          <label htmlFor="inputNu">fieldLength</label>

          <div className="input-group input-group-lg">
            <Antd.Input
              value={this.state.data.CavityFields[0].attr1.fieldLength.value[0]}
              onChange={this.handleChangeFieldLength}
              type="number"
              className="form-control"
              id="inputFieldLength"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              min={0}
            />
          </div>
          <small id="emailHelp" className="form-text text-muted">
            Длина
          </small>
        </div>
      );

      inputFieldHeight = (
        <div className="form-group">
          <label htmlFor="inputNu">fieldHeight</label>

          <div className="input-group input-group-lg">
            <Antd.Input
              value={0.1}
              type="number"
              className="form-control"
              id="inputFieldLength"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              min={0}
            />
          </div>
          <small id="emailHelp" className="form-text text-muted">
            Высота
          </small>
        </div>
      );

      inputFieldWidth = (
        <div className="form-group">
          <label htmlFor="inputNu">fieldWidth</label>

          <div className="input-group input-group-lg">
            <Antd.Input
              value={6}
              type="number"
              className="form-control"
              id="inputFieldLength"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              min={0}
            />
          </div>
          <small id="emailHelp" className="form-text text-muted">
            Ширина
          </small>
        </div>
      );

      leftY1 = (
        <div className="form-group">
          <label htmlFor="inputNu">leftY1</label>

          <div className="input-group input-group-lg">
            <Antd.Input
              value={1}
              type="number"
              className="form-control"
              id="inputFieldLength"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              min={0}
            />
          </div>
          <small id="emailHelp" className="form-text text-muted">
            left Y1
          </small>
        </div>
      );

      leftY2 = (
        <div className="form-group">
          <label htmlFor="inputNu">leftY2</label>

          <div className="input-group input-group-lg">
            <Antd.Input
              value={2}
              type="number"
              className="form-control"
              id="inputFieldLength"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              min={0}
            />
          </div>
          <small id="emailHelp" className="form-text text-muted">
            left Y2
          </small>
        </div>
      );

      rightY1 = (
        <div className="form-group">
          <label htmlFor="inputNu">rightY1</label>

          <div className="input-group input-group-lg">
            <Antd.Input
              value={3}
              type="number"
              className="form-control"
              id="inputFieldLength"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              min={0}
            />
          </div>
          <small id="emailHelp" className="form-text text-muted">
            right Y1
          </small>
        </div>
      );

      rightY2 = (
        <div className="form-group">
          <label htmlFor="inputNu">rightY2</label>

          <div className="input-group input-group-lg">
            <Antd.Input
              value={4}
              type="number"
              className="form-control"
              id="inputFieldLength"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              min={0}
            />
          </div>
          <small id="emailHelp" className="form-text text-muted">
            right Y2
          </small>
        </div>
      );
    }

    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          className="container"
          style={{ marginTop: '12px', maxWidth: '700px', width: '100%' }}
        >
          <h3>Редактор сетки</h3>
          <Viz
            x={this.state.data.CavityFields[0].attr1.fieldLength.value[0]}
            y={6}
            z={0.1}
          />
          <br />
          <Antd.Row justify="center" align="top">
            <Antd.Col span={4}>{inputFieldLength}</Antd.Col>
            <Antd.Col span={4}>{inputFieldHeight}</Antd.Col>
            <Antd.Col span={4}>{inputFieldWidth}</Antd.Col>
            {/* <Antd.Col span={2}></Antd.Col> */}

            <Antd.Col span={4}>{leftY1}</Antd.Col>
            <Antd.Col span={4}>{leftY2}</Antd.Col>
          </Antd.Row>

          <Antd.Row justify="center" align="top">
            <Antd.Col span={4}>{rightY1}</Antd.Col>
            <Antd.Col span={4}>{rightY2}</Antd.Col>
          </Antd.Row>

          <br />
          <h3>Настройка времени</h3>
          {inputDeltaT}
          {inputEndTime}

          <br />
          <h3>Другие параметры</h3>
          {inputNu}
          <br />

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
            key={this.simputKey}
            simputType="openfoam_helmholtz"
            inputFileKeys={[{ key: 'sh', name: 'run.sh', parse: false }]}
            initialDataModel={{
              data: {},
              type: 'openfoam_helmholtz',
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
  client: PropTypes.object,
  SimputReact: PropTypes.func,
};
/* eslint-enable */

InputComponent.defaultProps = {
  SimputReact: undefined,
  client: undefined,
  saveSimulation: undefined,
  project: undefined,
  simulation: undefined,
  step: undefined,
};

export default InputComponent;

const style = {
  height: 500, // we can control scene size by setting container dimensions
};

class Viz extends Component {
  constructor(props) {
    super(props);
    this.state = { boxSizeX: props.x, boxSizeY: props.y, boxSizeZ: props.z };

    this.scene = new THREE.Scene();
  }

  handleInputChange(e) {
    const target = e.target;
    console.log('target', target);

    const value = target.value;
    const name = target.name;
    const self = this;
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.syncSceneData();
      }
    );
  }

  syncSceneData() {
    const { boxSizeX, boxSizeY, boxSizeZ } = this.state;

    this.setSizeToMesh(this.scene.children[0], boxSizeX, boxSizeY, boxSizeZ);
  }

  syncSceneDataFromProps(x, y, z) {
    this.setSizeToMesh(this.scene.children[0], x, y, z);
  }

  setSizeToMesh(myMesh, xSize, ySize, zSize) {
    const scaleFactorX = xSize / myMesh.geometry.parameters.width;
    const scaleFactorY = ySize / myMesh.geometry.parameters.height;
    const scaleFactorZ = zSize / myMesh.geometry.parameters.depth;
    myMesh.scale.set(scaleFactorX, scaleFactorY, scaleFactorZ);
  }

  componentDidMount() {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;

    const scene = this.scene;
    const camera = new THREE.PerspectiveCamera(
      80, // fov = field of view
      width / height, // aspect ratio
      0.1, // near plane
      1000 // far plane
    );

    window.addEventListener('resize', this.handleWindowResize);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);

    const { boxSizeX, boxSizeY, boxSizeZ } = this.state;

    const geometry = new THREE.BoxGeometry(boxSizeX, boxSizeY, boxSizeZ);
    const material = new THREE.MeshPhongMaterial({
      color: 0x156289,
      emissive: 0x072534,
      side: THREE.DoubleSide,
      flatShading: true,
    });

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const lights = [];
    lights[0] = new THREE.PointLight(0xffffff, 1, 0);
    lights[1] = new THREE.PointLight(0xffffff, 1, 0);
    lights[2] = new THREE.PointLight(0xffffff, 1, 0);

    lights[0].position.set(0, 200, 0);
    lights[1].position.set(100, 200, 100);
    lights[2].position.set(-100, -200, -100);

    scene.add(lights[0]);
    scene.add(lights[1]);
    scene.add(lights[2]);

    camera.position.z = 10;

    // Управление камерой
    // this.controls = new OrbitControls(camera, this.mount);

    this.mount.appendChild(renderer.domElement);

    const animate = function () {
      requestAnimationFrame(animate);

      cube.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();
  }
  // componentWillUnmount() {
  //   window.removeEventListener('resize', this.handleWindowResize);
  //   this.controls.dispose();
  // }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps);
    this.syncSceneDataFromProps(nextProps.x, nextProps.y, nextProps.z);
  }

  render() {
    return (
      <div style={{ position: 'relative' }}>
        <div style={style} ref={(ref) => (this.mount = ref)} />
      </div>
    );
  }
}
