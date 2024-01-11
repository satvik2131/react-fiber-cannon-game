import { useBox } from '@react-three/cannon';

import React from 'react'
import { useGLTF } from '@react-three/drei'


export function Table() {
    const [ref, tableApi] = useBox(() => ({
        mass: 10,
        args: [1.5, 1.1, 2],
        position: [0, 0.49, 0],
        rotation: [-Math.PI / 2, -Math.PI / 2, -Math.PI / 2],
        type: "Dynamic"
    }));

    const { nodes, materials } = useGLTF('/models_3d/table.glb');
    return (
        <mesh ref={ref} update={tableApi}>
            <group dispose={null}>
                <group rotation={[-Math.PI / 2, 0, 0]} scale={0.04}>
                    <mesh geometry={nodes.defaultMaterial.geometry} material={materials.Default} rotation={[Math.PI / 2, 0, 0]} />
                </group>
            </group>
        </mesh>
    )
}