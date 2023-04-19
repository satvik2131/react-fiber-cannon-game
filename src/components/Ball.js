import { useSphere } from '@react-three/cannon';
import { Line } from '@react-three/drei';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useRef, useState } from 'react';
import { useDrag } from '@use-gesture/react';



export function Ball() {
    const [pointerEndPoint, setPointerEP] = useState([0, 2, 0]);

    // //Ball reference
    const [sphereRef, sphereApi] = useSphere(() => ({
        mass: 1,
        type: "Dynamic",
        position: [0, 0, 4],
        args: [0.2, 0.2, 0.2],
        sleepSpeedLimit: 1,
    }));


    const CurvedLine = () => {
        const points = [
            [0, 0, 4],
            pointerEndPoint
        ];

        const lineRef = useRef();
        return (
            <Line ref={lineRef} points={points} color='red'></Line>
        );
    };

    const bind = useDrag(({ up, movement: [mx, my] }) => {
        console.log(mx, my);
        // sphereApi.applyImpulse([mx / 5, my / 10, mz / 10], [0, 0, 0])
    })

    const gltf = useLoader(GLTFLoader, './tennis_ball/scene.gltf');

    return (
        <>
            <CurvedLine />
            <mesh ref={sphereRef}
                {...bind()}
            >
                <primitive object={gltf.scene} scale={3.0} />
            </mesh >
        </>

    );
}