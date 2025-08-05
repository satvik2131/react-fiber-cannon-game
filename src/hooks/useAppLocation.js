import { useLocation } from "wouter";
import { useEffect } from "react";
import { useAppStore } from "../store/appStore";
import { useShallow } from "zustand/react/shallow";

//create a wrapper for useLocation to set the location
export function useAppLocation() {
  const [location, setLocation] = useLocation();
  const { setWin, setInitialKnockCount, setCanMovement, setWindEffect } =
    useAppStore(
      useShallow((state) => ({
        setWin: state.setWin,
        setInitialKnockCount: state.setInitialKnockCount,
        setCanMovement: state.setCanMovement,
        setWindEffect: state.setWindEffect, // Assuming you have this in your store
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
    setLocation(newLocation, options);
  };
  return [location, setAppLocation];
}
