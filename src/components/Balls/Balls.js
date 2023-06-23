import { Ball } from "./Ball";
import * as THREE from "three";
import { useRef } from "react";
import { useThree } from "@react-three/fiber";

export function Balls({ count }) {
  const groupRef = useRef();
  const objects = [];
  var horizontalMovement = 0 - (count - 3.5);

  for (let i = 0; i < count; i++) {
    objects.push(
      <Ball key={i} position={[horizontalMovement, i + 2, 3]}></Ball>
    );
    horizontalMovement = horizontalMovement + 0.5;
  }

  return <group>{objects}</group>;
}
