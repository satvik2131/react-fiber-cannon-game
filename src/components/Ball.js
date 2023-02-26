import { useSphere } from '@react-three/cannon';
import { useLoader, useThree, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import React from 'react';


export function Ball({ reference, api }) {
    const { viewport } = useThree();


    //For rotating and moving the ball along with cursor
    useFrame(({ mouse }) => {

        // Moves the ball with cursor
        const x = (mouse.x * viewport.width) / 2;
        const y = (mouse.y * viewport.height) / 2;

        // api.position.set(x, y, 0);
        // api.rotation.set(-y, x, 0);

    });

    const gltf = useLoader(GLTFLoader, './tennis_ball/scene.gltf');
    return (
        <mesh ref={reference} >
            <primitive object={gltf.scene} scale={3.0} />
        </mesh>
    );
}