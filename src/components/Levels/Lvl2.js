import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";
import { useSpring, animated } from "@react-spring/three";
import { useFrame } from "@react-three/fiber";

export function Lvl2() {
  const { nodes, materials } = useGLTF(
    `${process.env.REACT_APP_MEDIA_DIR}/models_3d/levels/lvl2/giraffe.glb`
  );
  const initialPosition = [0, 1, 1.8];
  const [currentPos, setCurrentPos] = useState();

  const [giraffeRef, giraffeApi] = useBox(() => ({
    mass: 1,
    position: initialPosition,
    args: [1, 1, 1],
    type: "Static",
  }));

  const [springProps, set] = useSpring(() => ({
    from: { position: initialPosition },
    to: { position: [1, 1, 1.8] },

    onChange: (j) => {
      setCurrentPos(j.value.position);
    },
  }));

  useEffect(() => {
    giraffeApi.position.subscribe(() => {
      giraffeApi.position.set(currentPos);
    });
  });

  return (
    <animated.mesh
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
