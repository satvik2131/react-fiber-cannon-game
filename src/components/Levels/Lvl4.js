import { useFrame } from "@react-three/fiber";
import { useAppStore } from "../../store/appStore";
import { useShallow } from "zustand/react/shallow";
import { useEffect } from "react";

export function Lvl4() {
  const { windEffect, setWindEffect } = useAppStore(
    useShallow((state) => ({
      windEffect: state.windEffect,
      setWindEffect: state.setWindEffect,
    }))
  );
  useEffect(() => {
    setWindEffect(true); // Enable wind effect for this level
    return () => {
      setWindEffect(false); // Disable wind effect when leaving the level
    };
  }, []);

  return null;
}
