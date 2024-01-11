import { useBox } from "@react-three/cannon";

export function BoundingWall({ position, rotation, args }) {
  const [sideStopperRef, sideStopperApi] = useBox(() => ({
    mass: 10,
    position: position,
    rotation: rotation,
    args: args,
    type: "Static",
  }));

  return <mesh ref={sideStopperRef}></mesh>;
}
