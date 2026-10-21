import { th } from "@faker-js/faker";
import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
// const geometry = new THREE.BoxGeometry(1, 1, 1); // x - width, y - height, y - depth
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// const mesh = new THREE.Mesh(geometry, material);

// Group
const group = new THREE.Group();

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 }),
);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x800080 }),
);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x008000 }),
);

cube2.position.x = -2;
cube3.position.x = 2;

group.add(cube1, cube2, cube3);

// move all the group at the same time with 3 cubes
// group.position.y = -1;

//Position
// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 1;
// mesh.position.set(0.7, -0.6, 1);

//Scale
// scales the geometry (BoxGeometry) 1*2, 1*0.5, 1*0.5
// mesh.scale.x = 2;
// mesh.scale.y = 0.5;
// mesh.scale.z = 0.5;
// mesh.scale.set(2, 0.5, 0.5);

//Rotation
//Math.PI === 3.141592653589793 (180° -> Half rotation)
//Math.PI * 2 (360° -> Full rotation)
//Math.PI / 2 (90° -> Quarter rotation)
// 0 -> no rotation
// mesh.rotation.x = 4;
// mesh.rotation.y = Math.PI;
//Rotation depends on the order and can act strangle if not clarity how to manage
//to specifically order the order of rotation, use reorder
// mesh.rotation.reorder("YXZ");
// mesh.rotation.y = Math.PI * 0.25;
// mesh.rotation.x = Math.PI * 0.25;

scene.add(group);

// Axes Helper
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;

//Look at -> tells the camera to look at specific object without doing complex calculations
// camera.lookAt(mesh.position);
scene.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
