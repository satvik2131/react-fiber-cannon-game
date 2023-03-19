import React from "react";
import { useGLTF } from "@react-three/drei";
import { useCylinder } from "@react-three/cannon";
import { useAnimations } from "@react-three/drei";


export function Can(canposition, unique) {
    const { nodes, materials, animations } = useGLTF("/simple_cola_can.glb");
    const { actions } = useAnimations(animations);

    console.log(canposition);

    const [canReference, canApi] = useCylinder(() => ({
        mass: 1,
        position: canposition.position,
        args: [0.1, 0.1, 0.3]
    }));

    return (
        <group key={unique} dispose={null}>
            <group scale={0.1}
                // position={canposition.position}
                ref={canReference}

            >
                <mesh
                    castShadow
                    receiveShadow
                    // geometry={nodes.Object_2.geometry}
                    // material={materials.None}
                    onClick={(e) => { }}
                    position={canposition.position}
                    rotation={[Math.PI / 2, 0, 0]}

                />
            </group>
        </group>
    );
}

useGLTF.preload("/simple_cola_can.glb");