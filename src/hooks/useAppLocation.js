import { useLocation } from "wouter";
import { useEffect } from "react";
import { useAppStore } from "../store/appStore";
import { useShallow } from "zustand/react/shallow";

//create a wrapper for useLocation to set the location
export function useAppLocation() {
  const [location, setLocation] = useLocation();
  const wipLevels = ["4", "5", "6"];
  const { setWin, setInitialKnockCount, setCanMovement } = useAppStore(
    useShallow((state) => ({
      setWin: state.setWin,
      setInitialKnockCount: state.setInitialKnockCount,
      setCanMovement: state.setCanMovement,
    }))
  );

  useEffect(() => {
    const handlePopState = () => {
      setWin(false); // resets win status
      setInitialKnockCount(); // resets knock count
      setLocation("/lvlSelector");
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [setLocation]);

  const setAppLocation = (newLocation, options) => {
    const currentLvl = parseInt(newLocation.split("/")[2]);
    if (wipLevels.includes(currentLvl)) {
      setLocation("/wip");
      return;
    }
    if (currentLvl !== 3) {
      setCanMovement([0, 0, 0]);
    }
    setLocation(newLocation, options);
  };
  return [location, setAppLocation];
}
