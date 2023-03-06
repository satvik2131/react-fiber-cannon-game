import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import * as THREE from 'three';
import "./styles.css";
import { OrbitControls } from '@react-three/drei';
import { Physics, usePlane } from '@react-three/cannon';
import { Table } from './components/Table';
import { BallCanInteraction } from './components/BallCanInteraction';


//Dark Background
const Background = () => {
  const { scene, camera } = useThree()

  useFrame(() => {
    const color = 0x270722;
    scene.background = new THREE.Color(color);
    scene.fog = new THREE.Fog(color, 0, camera.far);
  });

  return null
}

// const Plane = () => {
//   usePlane(() => ({
//     mass: 10,
//     position: [0, 0, 0],
//     rotation: [-Math.PI / 2, 0, 0],
//     type: "Static"
//   }));
// }

function App() {

  return (
    <div className="App">
      <Canvas>
        <Background />
        <Physics gravity={[0, -9.81, 0]}>
          <Suspense fallback={null}>
            <BallCanInteraction />
            <Table />
          </Suspense>
        </Physics>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
