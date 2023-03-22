import React from "react";
import { useGLTF } from "@react-three/drei";
import { useCylinder } from "@react-three/cannon";


export function Can(canposition, unique) {
    // const { nodes, materials } = useGLTF("/simple_cola_can.glb");

    const [canReference, canApi] = useCylinder(() => ({
        mass: 1,
        args: [1, 1, 2],
        position: [0, 2, 0],
        // rotation: [0, -Math.PI / 2, 0]
    }));


    return (
        <group key={unique} dispose={null}>
            <group
                ref={canReference}
            >
                <mesh
                    castShadow
                    receiveShadow
                // geometry={nodes.Object_2.geometry}
                // material={materials.None}
                // rotation={[Math.PI / 2, 0, 0]}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/simple_cola_can.glb");