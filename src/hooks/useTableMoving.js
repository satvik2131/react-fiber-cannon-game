import { useFrame } from "@react-three/fiber";
import { useAppStore } from "../store/appStore";
import { useShallow } from "zustand/react/shallow";
import { useEffect } from "react";

export function useTableMoving() {
  const { tableHandler, setCanMovement, canMovement } = useAppStore(
    useShallow((state) => ({
      tableHandler: state.tableHandler,
      canMovement: state.canMovement,
      setCanMovement: state.setCanMovement,
    }))
  );

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    const x = 2 * Math.sin(elapsed * 2);
    setCanMovement([x, 0, -0.4]);
    if (tableHandler) {
      tableHandler.position.set(x, 0.49, 0.5);
    }
  });

  useEffect(() => {
    return () => {
      setCanMovement([0, 0, 0]);
    };
  }, []);
}
