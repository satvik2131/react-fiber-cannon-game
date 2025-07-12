import { useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { Lvl2 } from "../Levels/Lvl2";
import { BaseLevel } from "../Levels/BaseLevel";
import { CardHolder } from "../WinCards/utils/CardHolder";
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";
import { useParams, useLocation } from "wouter";

export function GameScreen() {
  const params = useParams();
  const lvl = parseInt(params.lvl);
  const [location, setLocation] = useLocation();
  const [cardStatus, setCardStatus] = useState(false);
  const [canKnockedCount, setCanKnockedCount] = useState(0);

  // redirect for WIP levels, but after hooks
  useEffect(() => {
    if ([3, 4, 5, 6].includes(lvl)) {
      setLocation("/wip", { replace: true });
    }
  }, [lvl, setLocation]);

  const setKnockedCount = () => {
    setCanKnockedCount((prev) => prev + 1);
  };

  useEffect(() => {
    const handlePopState = () => setLocation("/lvlSelector");
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [setLocation]);

  useEffect(() => {
    if (canKnockedCount === 9) {
      setCardStatus(true);
    }
  }, [canKnockedCount]);

  let SelectedLevel = null;
  switch (lvl) {
    case 2:
      SelectedLevel = Lvl2;
      break;
    default:
      SelectedLevel = null;
  }

  return (
    <>
      <Suspense fallback={null}>
        <pointLight />
        <ambientLight />
        {cardStatus && (
          <EffectComposer>
            <DepthOfField bokehScale={10} focalLength={0} />
          </EffectComposer>
        )}

        {lvl !== 1 && SelectedLevel && <SelectedLevel />}
        <BaseLevel setKnockCount={setKnockedCount} />
      </Suspense>
      <CardHolder lvl={lvl} cardstatus={cardStatus} />
    </>
  );
}
