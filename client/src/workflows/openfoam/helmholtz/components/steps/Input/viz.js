import React, { Component } from 'react';

import * as THREE from 'three';

// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import OrbitControls from './OrbitControls';

const style = {
  height: 500, // we can control scene size by setting container dimensions
};

export default class Viz extends Component {
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
