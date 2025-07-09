import { useFrame } from "@react-three/fiber";
import { Physics, Debug } from "@react-three/cannon";
import { Suspense } from "react";
import { Lvl2 } from "../Levels/Lvl2";
import { BaseLevel } from "../Levels/BaseLevel";
import { useState, useEffect } from "react";
import { CardHolder } from "../WinCards/utils/CardHolder";
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";
import { useParams, useLocation } from "wouter";

export function GameScreen() {
  //Selected Level
  const params = useParams();
  const lvl = parseInt(params.lvl);
  let [canKnockedCount, setCanKnockedCount] = useState(0);

  //Default --> Hide (false)
  const [cardStatus, setCardStatus] = useState(false);
  const [location, setLocation] = useLocation();

  const setKnockedCount = () => {
    setCanKnockedCount(canKnockedCount++);
  };

  useEffect(() => {
    //redirects to LvlSelector Page in every level
    const handlePopState = () => {
      setLocation("/lvlselector");
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useFrame(() => {
    if (canKnockedCount === 9) {
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

      <CardHolder lvl={lvl} cardstatus={cardStatus} />
    </>
  );
}
