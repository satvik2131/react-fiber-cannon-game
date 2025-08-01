import { Suspense, useEffect, useState } from "react";
import { BaseLevel, Lvl2, Lvl3 } from "../Levels";
import { CardHolder } from "../WinCards/utils/CardHolder";
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";
import { useParams } from "wouter";
import { useAppLocation } from "../../hooks/useAppLocation";
import { useAppStore } from "../../store/appStore";
import { useShallow } from "zustand/react/shallow";

export function GameScreen() {
  const params = useParams();
  const lvl = parseInt(params.lvl);
  const [location, setAppLocation] = useAppLocation();
  const { knockedCount, setWinStatus, winStatus } = useAppStore(
    useShallow((state) => ({
      knockedCount: state.knockedCount,
      setWinStatus: state.setWin,
      winStatus: state.winStatus,
    }))
  );

  useEffect(() => {
    const handlePopState = () => setAppLocation("/lvlSelector");
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [lvl, setAppLocation]);

  useEffect(() => {
    if (knockedCount > 9) {
      setWinStatus(true);
    }
  }, [knockedCount]);

  let SelectedLevel = null;
  switch (lvl) {
    case 2:
      SelectedLevel = Lvl2;
      break;
    case 3:
      SelectedLevel = Lvl3;
      break;
    default:
      SelectedLevel = null;
  }

  return (
    <>
      <Suspense fallback={null}>
        <pointLight />
        <ambientLight />
        {winStatus && (
          <EffectComposer>
            <DepthOfField bokehScale={10} focalLength={0} />
          </EffectComposer>
        )}

        {lvl !== 1 && SelectedLevel && <SelectedLevel />}
        <BaseLevel />
      </Suspense>
      <CardHolder lvl={lvl} winStatus={winStatus} />
    </>
  );
}
