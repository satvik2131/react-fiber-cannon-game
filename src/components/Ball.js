import { useSphere } from '@react-three/cannon';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useSpring, animated, config } from '@react-spring/three';
import React, { useRef, useState } from 'react';


export function Ball() {
    const ballStatus = useRef(false);

    //Ball reference
    const [sphereRef, sphereApi] = useSphere(() => ({
        mass: 1,
        type: "Dynamic",
        position: [0, 0, 4],
        args: [0.2, 0.2, 0.2],
    }));


    const { position } = useSpring({
        from: { position: [0, 0, 0] },
        to: { position: [0, 2, 0] },
        config: config.wobbly,
    });



    useFrame(() => {
    });

    const gltf = useLoader(GLTFLoader, './tennis_ball/scene.gltf');

    return (
        <animated.mesh ref={sphereRef} position={position} >
            <primitive object={gltf.scene} scale={3.0} />
        </animated.mesh>
    );
}