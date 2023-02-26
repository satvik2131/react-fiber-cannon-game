import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import * as THREE from 'three';
import "./styles.css";
import { OrbitControls } from '@react-three/drei';
import { Physics } from '@react-three/cannon';

import { Can } from './components/Cans';
import { Table } from './components/Table';
// import { Ball } from './components/Ball';
import { BallCanInteraction } from './components/BallCanInteraction';


//Dark Background
const BlackBackground = () => {
  const { scene, camera, size } = useThree()
  useFrame(() => {
    const color = 0x270722;
    scene.background = new THREE.Color(color);

    scene.fog = new THREE.Fog(color, 0, camera.far);
  });

  return null
}

function App() {




  return (
    <div className="App">
      <Canvas>
        <BlackBackground />
        <Physics>
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
