import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useCylinder } from "@react-three/cannon";
import { useEffect } from "react";
import { useFrame } from "@react-three/fiber";

export function Can(canposition, unique) {
    const { nodes, materials } = useGLTF("/simple_cola_can.glb");
    const canState = useRef(false);

    const [canReference, canApi] = useCylinder(() => ({
        mass: 1,
        args: [0.1, 0.1, 0.3],
        allowSleep: true,
        position: canposition.position,
        rotation: [0, -Math.PI / 2, 0],
        type: "Dynamic",
        sleepSpeedLimit: 1
    }));

    useFrame(() => {
        // if (!canState.current) {
        //     canApi.sleep();
        // } else {
        // }
    })



    return (
        <group key={unique} dispose={null}>
            <group
                ref={canReference}
                onClick={() => {
                    canState.current = true
                    canApi.position.set(0, 0, -1);
                    // canReference.current.position.set(2, 1, 0);
                    canApi.wakeUp();
                }}

                api={canApi}
                canstate={canState}

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

useGLTF.preload("/simple_cola_can.glb");