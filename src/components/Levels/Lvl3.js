import { useFrame } from "@react-three/fiber";
import { useAppStore } from "../../store/appStore";
import { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";

export function Lvl3(props) {
  const { tableHandler, setCanMovement, canMovement } = useAppStore(
    useShallow((state) => ({
      tableHandler: state.tableHandler,
      canMovement: state.canMovement,
      setCanMovement: state.setCanMovement,
    }))
  );

  useEffect(() => {
    console.log("canMovement", canMovement);
  }, [canMovement]);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    // Oscillate x between -2 and +2 using sine for back-and-forth motion
    const x = 2 * Math.sin(elapsed * 2); // Adjust speed and range as needed
    setCanMovement([x, 0, -0.4]);
    tableHandler.position.set(x, 0.57, 0);
  });

  return null;
}
