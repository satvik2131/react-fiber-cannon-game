import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import * as THREE from 'three';
import "./styles.css";
import { OrbitControls } from '@react-three/drei';
import { Physics } from '@react-three/cannon';

import { Can } from './components/Cans';
import { Table } from './components/Table';
import { Ball } from './components/Ball';


//Dark Background
const BlackBackground = () => {
  const { scene, camera, size } = useThree()
  useFrame(() => {
    const color = 0x000000;
    scene.background = new THREE.Color("black");
    scene.fog = new THREE.Fog(color, 0, camera.far);
  });

  return null
}

function App() {
  const [cans, setCans] = useState([
    { position: [0.1, 0.67, 0], rotation: [0, 0, 0] },
    { position: [0.2, 0.67, 0], rotation: [0, 0, 0] }
  ]);


  return (
    <div className="App">
      <Canvas>
        <BlackBackground />
        <Physics>
          <Suspense fallback={null}>
            <>
              {cans.map((box, index) => (
                <Can position={box.position} />
              ))}
            </>
            <Table />
            <Ball />
          </Suspense>
        </Physics>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
