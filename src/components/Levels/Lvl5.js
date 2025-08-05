import { BirdFlying } from "./BirdFlying";
import { useTableMoving } from "../../hooks/useTableMoving";

export function Lvl5() {
  useTableMoving();
  return <BirdFlying />;
}
