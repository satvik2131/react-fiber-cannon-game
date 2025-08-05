import { useEffect } from "react";
import { useAppStore } from "../../store/appStore";
import { useShallow } from "zustand/react/shallow";
import { useTableMoving } from "../../hooks/useTableMoving";

export function Lvl6() {
  const { setWindEffect } = useAppStore(
    useShallow((state) => ({
      setWindEffect: state.setWindEffect,
    }))
  );

  useTableMoving();

  useEffect(() => {
    setWindEffect(true); // Enable wind effect for this level
    return () => {
      setWindEffect(false); // Disable wind effect when leaving the level
    };
  }, []);

  return null;
}
