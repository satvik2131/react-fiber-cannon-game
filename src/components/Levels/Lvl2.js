import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";
import { useSpring, animated } from "@react-spring/three";
import { useFrame } from "@react-three/fiber";

export function Lvl2() {
  const { nodes, materials } = useGLTF(
    `${process.env.REACT_APP_MEDIA_DIR}/models_3d/levels/lvl2/skull.glb`
  );

  const [currentPos, setCurrentPos] = useState([0, 1, 1.8]);

  const [giraffeRef, giraffeApi] = useBox(() => ({
    mass: 1,
    position: currentPos,
    args: [1, 1, 1],
    type: "Static",
  }));

  useFrame(() => {
    if (currentPos[1] < 5) {
      setCurrentPos([currentPos[0], currentPos[1] + 0.01, currentPos[2]]);
      console.log(currentPos);
      giraffeApi.position.set(
        currentPos[0],
        currentPos[1] + 0.01,
        currentPos[2]
      );
    }
  });

  return (
    <mesh
      dispose={null}
      scale={0.002}
      ref={giraffeRef}
      castShadow
      receiveShadow
      geometry={nodes.giraffe_cube001_0.geometry}
      material={materials.cube001}
    />
  );
}

useGLTF.preload(
  `${process.env.REACT_APP_MEDIA_DIR}/models_3d/levels/lvl2/giraffe.glb`
);
