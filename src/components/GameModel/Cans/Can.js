import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useCylinder } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import { useEffect } from "react";

export function Can({ id, canposition, unique, setKnockCount }) {
  const { nodes, materials } = useGLTF(`/uploads/models_3d/coke_can.glb`);
  const [visibility, setVisibility] = useState(true);
  const [canType, setCanType] = useState("Dynamic");

  var [canReference, canApi] = useCylinder(() => ({
    mass: 1,
    args: [0.1, 0.1, 0.3],
    allowSleep: true,
    position: canposition,
    rotation: [0, -Math.PI / 2, 0],
    type: canType,
    collisionFilterGroup: 3,
    collisionFilterMask: 3,
    sleepSpeedLimit: 1,
    onCollide: (e) => {
      if (e.body.name === "ball") {
        setVisibility(false);
        canApi.collisionFilterGroup.set(0);
        canApi.collisionFilterMask.set(0);
        setCanType("Static");
        setKnockCount();
      }
    },
  }));

  return (
    <group
      name="can"
      canid={id}
      key={unique}
      dispose={null}
      visible={visibility}
    >
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
}

useGLTF.preload(`/uploads/models_3d/coke_can.glb`);
