import { useFrame } from "@react-three/fiber";
import { useAppStore } from "../../store/appStore";
import { useRef, useState } from "react";

export function Lvl3(props) {
  const tableHandler = useAppStore((state) => state.tableHandler);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    // Oscillate x between -2 and +2 using sine for back-and-forth motion
    const x = 2 * Math.sin(elapsed * 2); // Adjust speed and range as needed
    tableHandler.position.set(x, 0.57, 0);
  });

  return null;
}
