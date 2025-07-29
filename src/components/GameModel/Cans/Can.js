import { useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useCylinder } from "@react-three/cannon";
import { useAppStore } from "../../../store/appStore";
import { useShallow } from "zustand/react/shallow";

export function Can({ id, canposition, unique }) {
  const { nodes, materials } = useGLTF(`/uploads/models_3d/coke_can.glb`);
  const [visibility, setVisibility] = useState(true);
  const { incrementKnockedCount, canMovement } = useAppStore(
    useShallow((state) => ({
      incrementKnockedCount: state.incrementKnockedCount,
      canMovement: state.canMovement,
    }))
  );

  var [canReference, canApi] = useCylinder(() => ({
    mass: 1,
    args: [0.1, 0.1, 0.32],
    allowSleep: true,
    position: canposition,
    rotation: [0, -Math.PI / 2, 0],
    type: "Dynamic",
    collisionFilterGroup: 3,
    collisionFilterMask: 3,
    sleepSpeedLimit: 0.5,
    onCollide: (e) => {
      if (e.body.name === "ball") {
        setVisibility(false);
        canApi.collisionFilterGroup.set(0);
        canApi.collisionFilterMask.set(0);
        incrementKnockedCount();
      }
    },
  }));

  useEffect(() => {
    const movePos = canposition.map((pos, index) => {
      return pos + canMovement[index];
    });
    canApi.position.set(...movePos);
  }, [canMovement]);

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
