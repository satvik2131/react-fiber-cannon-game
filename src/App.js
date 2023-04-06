import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { Suspense } from 'react';
import * as THREE from 'three';
import "./styles.css";
import { OrbitControls } from '@react-three/drei';
import { Physics, Debug } from '@react-three/cannon';
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


function App() {

  return (
    <div className="App">
      <Canvas
      //  camera={{ position: [3, 10, 30], rotation: [-Math.PI / 2, 0, 0] }}
      >
        <Background />
        <Physics gravity={[0, -9.81, 0]} allowSleep={true}>
          <Debug>
            <Suspense fallback={null}>
              <BallCanInteraction />
            </Suspense>
          </Debug>
        </Physics>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
