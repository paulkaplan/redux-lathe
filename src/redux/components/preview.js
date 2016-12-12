import React, { Component } from 'react';
import * as THREE from 'three';

class Preview extends Component {
  componentDidMount = () => {
    var scene = new THREE.Scene();
    this.scene = scene;
    var width = this.props.width;
    var height = this.props.height;
    var webGLRenderer = new THREE.WebGLRenderer({antialias: true});
    webGLRenderer.setClearColor( 0xffffff, 1 );
    webGLRenderer.setSize(width, height);
    webGLRenderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById("WebGL-output").appendChild(webGLRenderer.domElement);

    var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.x = 22;
    camera.position.y = 40;
    camera.position.z = 50;
    camera.lookAt(new THREE.Vector3(10, 0, 0));

    this.addMesh(this.props.profile);

    let renderScene = () => {
      if (this.latheMesh) { this.latheMesh.rotation.y += 0.01; }
      requestAnimationFrame(renderScene);
      webGLRenderer.render(scene, camera);
    }

    renderScene();
  }

  componentWillReceiveProps(newProps) {
    this.addMesh(newProps.profile)
  }

  addMesh = (profile) => {
    var points = profile.map((t, i) => {
      return {
        x: 5 + t * 5,
        y: 20 * i / profile.length
      }
    })
    var latheGeometry = new THREE.LatheGeometry(points, 20);
    if (this.latheMesh) {
      this.latheMesh.geometry = latheGeometry;
      this.latheMesh.geometry.verticesNeedUpdate = true;
    } else {
      this.latheMesh = new THREE.Mesh(latheGeometry, new THREE.MeshNormalMaterial({side: THREE.DoubleSide, shading: THREE.FlatShading}));
      this.latheMesh.position.x += 20;
      this.scene.add(this.latheMesh);
    }
  }

  render() {
    return (
      <div id="WebGL-output"></div>
    );
  }
}

export default Preview;
