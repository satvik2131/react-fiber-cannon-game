import { GameScreen } from "./GameScreen";
import { Canvas } from "@react-three/fiber";
import { Html, Loader } from "@react-three/drei";
import { useState } from "react";
import { CardHolder } from "../WinCards/CardHolder";

export const Screen = () => {
  return (
    <group>
      <Canvas camera={{ position: [0, 1, 4] }}>
        <GameScreen />
      </Canvas>
      <Loader />
    </group>
  );
};
