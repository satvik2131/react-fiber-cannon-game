import { Ball } from "./Ball";
import { useRef } from "react";

export function Balls({ count, val }) {
  const objects = [];
  var horizontalDistance = 0 - (count - 3.5);
  const zAxisDistance = 3;

  for (let i = 0; i < count; i++) {
    objects.push(
      <Ball
        val={val}
        key={i}
        position={[horizontalDistance, i + 2, zAxisDistance]}
      ></Ball>
    );
    horizontalDistance = horizontalDistance + 0.5;
  }

  return <group key={val}>{objects}</group>;
}
