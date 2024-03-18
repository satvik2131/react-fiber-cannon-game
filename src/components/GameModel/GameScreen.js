import { Canvas, useFrame } from "@react-three/fiber";
import { Physics, Debug } from "@react-three/cannon";
import { Suspense } from "react";
import { useLocation } from "react-router-dom";
import { Lvl2 } from "../Levels/Lvl2";
import { BaseLevel } from "../Levels/BaseLevel";
import { OrbitControls, Html } from "@react-three/drei";
import { useState } from "react";

export function GameScreen() {
  //Selected Level
  const location = useLocation();
  const { lvl } = location.state;
  var [canKnockedCount, setCanKnockedCount] = useState(0);
  const [winCardStatus, setWinCardStatus] = useState(false);

  const setKnockedCount = () => {
    setCanKnockedCount(canKnockedCount++);
  };

  useFrame(() => {
    if (canKnockedCount === 9) {
      console.log(canKnockedCount);
      //Show info card
      setWinCardStatus(true);
    }
  });

  //Different levels
  let SelectedLevel;
  switch (lvl) {
    //null means Level 0
    case 2:
      SelectedLevel = Lvl2;
      break;
  }

  const WinCard = () => {
    return (
      <Html position={[0, 2, 0]}>
        <div
          style={{ display: winCardStatus ? "block" : "none" }}
          className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden"
        >
          <div className="py-4 px-8">
            <h2 className="text-3xl font-bold text-gray-800">You won</h2>
          </div>
        </div>
      </Html>
    );
  };

  return (
    <Physics gravity={[0, -9.81, 0]} allowSleep={true}>
      <Debug>
        <Suspense fallback={null}>
          <pointLight />
          <ambientLight />
          {/* Levels (base level is common rest are hurdles created over it) */}
          {lvl == 1 ? null : <SelectedLevel />}
          {/* ************* */}
          <BaseLevel setKnockCount={setKnockedCount} />
          <WinCard />
        </Suspense>
      </Debug>
    </Physics>
  );
}
