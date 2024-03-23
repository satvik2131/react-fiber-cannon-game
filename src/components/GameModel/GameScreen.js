import { Canvas, useFrame } from "@react-three/fiber";
import { Physics, Debug } from "@react-three/cannon";
import { Suspense } from "react";
import { useLocation } from "react-router-dom";
import { Lvl2 } from "../Levels/Lvl2";
import { BaseLevel } from "../Levels/BaseLevel";
import { OrbitControls, Html } from "@react-three/drei";
import { useState } from "react";
import { CardHolder } from "../WinCards/CardHolder";
import {
  EffectComposer,
  Pixelation,
  DepthOfField,
} from "@react-three/postprocessing";
import { Stage } from "@react-three/drei";

export function GameScreen() {
  //Selected Level
  const location = useLocation();
  const { lvl } = location.state;
  var [canKnockedCount, setCanKnockedCount] = useState(0);
  //Default --> Hide (false)
  const [cardStatus, setCardStatus] = useState(false);

  const setKnockedCount = () => {
    setCanKnockedCount(canKnockedCount++);
  };

  useFrame(() => {
    if (canKnockedCount === 9) {
      console.log(canKnockedCount);
      //Show info card
      setCardStatus(true);
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

  return (
    <>
      <Physics gravity={[0, -9.81, 0]} allowSleep={true}>
        <Debug>
          <Suspense fallback={null}>
            <pointLight />
            <ambientLight />
            {cardStatus ? (
              <EffectComposer>
                <DepthOfField bokehScale={10} focalLength={0} />
              </EffectComposer>
            ) : null}
            {/* Levels (level 1 is with no hurdles , if other than 1 is selected then the lvl will also render with base ) */}
            {lvl == 1 ? null : <SelectedLevel />}
            {/* ************* */}
            <BaseLevel setKnockCount={setKnockedCount} />
          </Suspense>
        </Debug>
      </Physics>
      <CardHolder lvl={lvl} cardstatus={cardStatus} />
    </>
  );
}
