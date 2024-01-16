import { Canvas } from "@react-three/fiber";
import { Physics, Debug } from "@react-three/cannon";
import { Suspense } from "react";
import { useLocation } from "react-router-dom";
import { Lvl2 } from "../Levels/Lvl2";
import { BaseLevel } from "../Levels/BaseLevel";

export function GameScreen() {
  //Selected Level
  const location = useLocation();
  const { lvl } = location.state;

  //Different levels 
  let SelectedLevel;
  switch (lvl) {
    //null means Level 0 
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
            {/* Levels (base level is common rest are hurdles created over it) */}
            {lvl == 1 ? null : <SelectedLevel />}
            {/* ************* */}
            <BaseLevel />
          </Suspense>
        </Debug>
      </Physics>
    </Canvas>
  );
}
