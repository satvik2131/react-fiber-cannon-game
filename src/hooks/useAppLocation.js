import { useLocation } from "wouter";
import { useEffect } from "react";

//create a wrapper for useLocation to set the location
export function useAppLocation() {
  const [location, setLocation] = useLocation();
  const wipLevels = ["4", "5", "6"];

  useEffect(() => {
    const handlePopState = () => setLocation("/lvlSelector");
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [setLocation]);

  const setAppLocation = (newLocation, options) => {
    const currentPath = newLocation.split("/")[2];
    if (wipLevels.includes(currentPath)) {
      setLocation("/wip");
      return;
    }
    setLocation(newLocation, options);
  };
  return [location, setAppLocation];
}
