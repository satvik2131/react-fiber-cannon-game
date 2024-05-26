import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";
import { useSpring, animated } from "@react-spring/three";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Lvl2() {
  const { nodes, materials } = useGLTF(
    `${process.env.REACT_APP_MEDIA_DIR}/models_3d/levels/lvl2/skull.glb`
  );

  const testRef = useRef();
  const [currentPos, setCurrentPos] = useState([0, 1, 1.8]);
  const [giraffeRef, giraffeApi] = useBox(() => ({
    mass: 1,
    position: currentPos,
    args: [0.4, 0.6, 0.6],
    // type: "Static",
  }));
  const renderer = new THREE.WebGLRenderer();
  useFrame(() => {
    // if (currentPos[1] < 5) {
    //   setCurrentPos([currentPos[0], currentPos[1] + 0.01, currentPos[2]]);
    //   console.log(currentPos);
    //   giraffeApi.position.set(
    //     currentPos[0],
    //     currentPos[1] + 0.01,
    //     currentPos[2]
    //   );
    // }
    console.log(renderer.info.render.calls); // Number of draw calls
  });

  // useEffect(() => {
  //   const temp = new THREE.Object3D();
  //   for (let i = 0; i < 4; i++) {
  //     temp.position.set(1 + i, 1, 1.8);
  //     temp.updateMatrix();
  //     console.log("matrix--", temp.matrix);

  //     // giraffeApi.at(i).position.set(x + i, 1, 1.8);
  //     // giraffeRef.current.updateMatrix();
  //     // testRef.current.setMatrixAt(i, temp.matrix);
  //   }
  // }, []);

  return (
    <group scale={0.3} ref={giraffeRef} dispose={null}>
      <instancedMesh
        args={[null, null, 4]}
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.defaultMat}
        rotation={[-Math.PI / 2, 0, 0]}
      ></instancedMesh>
    </group>
  );
}
