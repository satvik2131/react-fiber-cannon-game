import { GameScreen } from "./GameScreen";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { Physics } from "@react-three/cannon";

export const Screen = () => {
  return (
    <group>
      <Canvas camera={{ position: [0, 1, 4] }} shadows>
        <ambientLight intensity={0.08} />
        <Physics gravity={[0, -9.81, 0]} allowSleep={true}>
          <GameScreen />
        </Physics>
      </Canvas>
      <Loader />
    </group>
  );
};
