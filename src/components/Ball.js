import { useSphere } from '@react-three/cannon';
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
        position: [0, 0, 5],
        args: [0.2, 0.2, 0.2],
        sleepSpeedLimit: 1,
    }));


    const bind = useDrag(({ offset: [x, y], down }) => {

        if (down) {
            sphereApi.applyForce([x, -y, -(-y + 8)], [0, 0, 0]);
        } else {
            sphereApi.velocity.set(0, 0, 0);
        }
    });

    const gltf = useLoader(GLTFLoader, './models_3d/tennis_ball/scene.gltf');

    return (
        <>
            <mesh ref={sphereRef}
                {...bind()}
            >
                <primitive object={gltf.scene} scale={3.0} />
            </mesh >
        </>

    );
}