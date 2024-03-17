import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useCylinder } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import { useEffect } from "react";

export function Can(canposition, unique) {
  const { nodes, materials } = useGLTF(
    `${process.env.REACT_APP_MEDIA_DIR}/models_3d/coke_can.glb`
  );

  const [visibility, setVisibility] = useState(true);

  var [canReference, canApi] = useCylinder(() => ({
    mass: 1,
    args: [0.1, 0.1, 0.3],
    allowSleep: true,
    position: canposition.position,
    rotation: [0, -Math.PI / 2, 0],
    type: "Dynamic",
    sleepSpeedLimit: 1,
    onCollide: (e) => {
      if (e.body.name === "ball") {
        setVisibility(false);
      }
    },
  }));

  if (visibility) {
    return (
      <group key={unique} dispose={null} visible={visibility}>
        <group ref={canReference}>
          <mesh
            scale={0.1}
            castShadow
            receiveShadow
            geometry={nodes.Object_2.geometry}
            material={materials.None}
            rotation={[-Math.PI / 2, 0, 0]}
            key={unique}
          />
        </group>
      </group>
    );
  } else {
    return <></>;
  }
}

useGLTF.preload(`${process.env.REACT_APP_MEDIA_DIR}/models_3d/coke_can.glb`);
