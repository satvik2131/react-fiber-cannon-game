import { useSphere } from '@react-three/cannon';
import { useLoader, useThree, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import React from 'react';


export function Ball() {
    const { viewport } = useThree();

    //Ball reference
    const [sphereRef, sphereApi] = useSphere(() => ({
        mass: 1,
        type: "Dynamic",
        position: [0, 0, 3],
        args: [0.1, 0.1, 0.1]
    }));


    //For rotating and moving the ball along with cursor
    useFrame(({ mouse }) => {
        ////Ball moving
        // Moves the ball with cursor
        const x = (mouse.x * viewport.width) / 2;
        const y = (mouse.y * viewport.height) / 2;

        //setting to the api
        sphereApi.position.set(0, 0, x);
        sphereApi.rotation.set(-y, x, 0)


        //setting to the ref
        sphereRef.current.position.set(0, 0, x);
        sphereRef.current.rotation.set(-y, x, 0);

    });

    const gltf = useLoader(GLTFLoader, './tennis_ball/scene.gltf');

    return (
        <mesh ref={sphereRef} >
            <primitive object={gltf.scene} scale={3.0} />
        </mesh>
    );
}