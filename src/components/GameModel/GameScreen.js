import { Scene } from "./Scene";
import { Canvas } from "@react-three/fiber";
import { Physics, Debug } from "@react-three/cannon";
import { Suspense } from "react";
import { useLocation } from "react-router-dom";
import { Lvl2 } from "../Levels/Lvl2";

export function GameScreen() {
  //Contains the level
  const location = useLocation();
  const { lvl } = location.state;

  //Rendering according to different levels
  let SelectedLevel;
  switch (lvl) {
    //null means Level 0 means no complexity
    case 2:
      SelectedLevel = Lvl2;
      break;
  }

  return (
    <Canvas camera={{ position: [0, 1, 4] }}>
      <Physics gravity={[0, -9.81, 0]} allowSleep={true}>
        <Debug>
          <Suspense fallback={null}>
            <pointLight />
            <ambientLight />
            {/* Levels */}
            {lvl == 1 ? null : <SelectedLevel />}
            {/* ************* */}
            <Scene />
          </Suspense>
        </Debug>
      </Physics>
    </Canvas>
  );
}
