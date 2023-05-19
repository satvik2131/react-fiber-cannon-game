import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { Suspense } from 'react';
import * as THREE from 'three';
import "./styles.css";
import { OrbitControls } from '@react-three/drei';
import { Physics, Debug } from '@react-three/cannon';
import { Scene } from './components/Scene';


function App() {

  return (
    <div className="App">
      <Canvas
        camera={{ position: [0, 1, 4], }}
      >
        {/* <Background /> */}
        <Physics gravity={[0, -9.81, 0]} allowSleep={true}>
          <Debug>
            <Suspense fallback={null}>
              <Scene />
            </Suspense>
          </Debug>
        </Physics>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
