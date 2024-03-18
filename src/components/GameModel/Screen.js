import { GameScreen } from "./GameScreen";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";

export const Screen = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 1, 4] }}>
        <GameScreen />
      </Canvas>
      <Loader />
    </>
  );
};
