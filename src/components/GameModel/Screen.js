import { GameScreen } from "./GameScreen";
import { Canvas } from "@react-three/fiber";
import { Loader, OrbitControls } from "@react-three/drei";
import { Physics, Debug } from "@react-three/cannon";

export const Screen = () => {
  return (
    <group>
      <Canvas camera={{ position: [0, 1, 4] }} shadows>
        <ambientLight intensity={0.08} />
        {/* <OrbitControls /> */}
        <Physics gravity={[0, -9.81, 0]} allowSleep={true}>
          {/* <Debug> */}
          <GameScreen />
          {/* </Debug> */}
        </Physics>
      </Canvas>
      <Loader />
    </group>
  );
};
