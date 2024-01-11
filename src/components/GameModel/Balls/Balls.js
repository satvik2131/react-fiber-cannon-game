import { Ball } from "./Ball";
import * as THREE from "three";
import { useRef } from "react";
import { useThree } from "@react-three/fiber";

export function Balls({ count }) {
  const groupRef = useRef();
  const objects = [];
  var horizontalDistance = 0 - (count - 3.5);
  const zAxisDistance = 3;

  for (let i = 0; i < count; i++) {
    objects.push(
      <Ball
        key={i}
        position={[horizontalDistance, i + 2, zAxisDistance]}
      ></Ball>
    );
    horizontalDistance = horizontalDistance + 0.5;
  }

  return <group>{objects}</group>;
}
