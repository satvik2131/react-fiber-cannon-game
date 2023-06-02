import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useCylinder } from "@react-three/cannon";


export function Can(canposition, unique) {
    const { nodes, materials } = useGLTF("/models_3d/simple_cola_can.glb");

    const [canReference, canApi] = useCylinder(() => ({
        mass: 1,
        args: [0.1, 0.1, 0.3],
        allowSleep: true,
        position: canposition.position,
        rotation: [0, -Math.PI / 2, 0],
        type: "Dynamic",
        sleepSpeedLimit: 1
    }));


    return (
        <group key={unique} dispose={null}>
            <group
                ref={canReference}
            >
                <mesh
                    scale={0.1}
                    ref={canReference}
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

useGLTF.preload("/models_3d/simple_cola_can.glb");