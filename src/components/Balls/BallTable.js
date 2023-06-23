import { useBox, usePlane } from "@react-three/cannon";
import * as THREE from "three";
import { BoundingWall } from "./BoundingWall";

export function BallTable() {
  const [tableRef, tableApi] = useBox(() => ({
    mass: 10,
    position: [0, 0.6, 3],
    args: [3, 0.5, 1],
    type: "Dynamic",
  }));

  return (
    <>
      <mesh ref={tableRef}>
        <boxGeometry args={[3, 0.5, 1]} />
        <meshStandardMaterial color="green" />
      </mesh>
      <BoundingWall
        position={[-1.7, 0.5, 3]}
        rotation={[0, 0, 0]}
        args={[0.5, 1, 1]}
      />
      <BoundingWall
        position={[2, 0.5, 3]}
        rotation={[0, 0, 0]}
        args={[0.5, 1, 1]}
      />
      <BoundingWall
        position={[0, 0.5, 4.2]}
        rotation={[0, 0, 0]}
        args={[3, 1, 1]}
      />
    </>
  );
}
