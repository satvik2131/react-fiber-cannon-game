import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";

export function Lvl2(props) {
  const { nodes, materials } = useGLTF(
    `${process.env.REACT_APP_MEDIA_DIR}/models_3d/levels/lvl2/giraffe.glb`
  );
  const position = useRef([0, 0, 0]);
  const [giraffeRef, giraffeApi] = useBox(() => ({
    mass: 1,
    position: [0, 1, 1.8],
    args: [1, 1, 1],
  }));

  const jump = (direction) => {
    const jumpForce = 1;
    const dir = direction == 1 ? [0.2, 0.2, 0] : [-0.2, 0.2, 0];

    giraffeApi.applyImpulse(
      [dir[0] * jumpForce, dir[1] * jumpForce, dir[2] * jumpForce],
      [0, 0, 0]
    );
  };

  useEffect((pos) => {
    giraffeApi.position.subscribe((pos) => {
      position.current = pos;
    });
  }, []);

  //Updating Positions directly
  //making the giraffe jump left and right
  useFrame(() => {
    var x = position.current.at(0);
    var y = position.current.at(1);
    if (x <= 0 && y < 1) {
      //Jump right
      jump(1);
    }

    if (x > 0 && y < 1) {
      //jump left
      jump(0);
    }
  });

  return (
    <group {...props} dispose={null} scale={0.002} ref={giraffeRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.giraffe_cube001_0.geometry}
        material={materials.cube001}
      />
    </group>
  );
}

useGLTF.preload(
  `${process.env.REACT_APP_MEDIA_DIR}/models_3d/levels/lvl2/giraffe.glb`
);
