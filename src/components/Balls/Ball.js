import { useSphere } from '@react-three/cannon';
import { useState } from 'react';
import { useDrag } from '@use-gesture/react';
import { Instance, useGLTF, Instances, Merged } from '@react-three/drei';

export function Ball() {
    const [pointerEndPoint, setPointerEP] = useState([0, 2, 0]);

    // //Ball reference
    const [sphereRef, sphereApi] = useSphere(() => ({
        mass: 1,
        type: "Dynamic",
        position: [0, 4, 3],
        args: [0.18, 0.18, 0.18],
        sleepSpeedLimit: 1,
    }));

    const bind = useDrag(({ offset: [x, y], down }) => {
        if (down) {
            sphereApi.applyForce([x, -y, -(-y + 8)], [0, 0, 0]);
        } else {
            sphereApi.velocity.set(0, 0, 0);
        }
    });

    const { nodes, materials } = useGLTF('/models_3d/ball.glb');

    return (
        // <instancedMesh id={count++} ref={sphereRef} args={[null, null, 100]}>

        // </instancedMesh>

        <mesh ref={sphereRef} {...bind()}>
            <group dispose={null} scale={3.0}  >
                <group rotation={[-Math.PI / 2, 0, 0]} scale={0.07}>
                    <group rotation={[Math.PI / 2, 0, 0]} >
                        <mesh geometry={nodes.defaultMaterial.geometry} material={materials.lambert3} />
                        <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.lambert1} />
                    </group>
                </group>
            </group>
        </mesh>

    );

    useGLTF.preload('/models_3d/scene-transformed.glb')

}