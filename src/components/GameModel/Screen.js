import { GameScreen } from "./GameScreen";
import { Canvas } from "@react-three/fiber";
import { Loader, OrbitControls } from "@react-three/drei";

export const Screen = () => {
  return (
    <group>
      <Canvas camera={{ position: [0, 1, 4] }}>
        <OrbitControls />
        <GameScreen />
      </Canvas>
      <Loader />
    </group>
  );
};
