import { useFrame } from "@react-three/fiber";
import { useAppStore } from "../../store/appStore";
import { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";
import { useTableMoving } from "../../hooks/useTableMoving";

export function Lvl3(props) {
  useTableMoving();
  return null;
}
