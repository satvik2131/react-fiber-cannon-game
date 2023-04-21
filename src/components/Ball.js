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

    const bind = useDrag(({ offset: [x, y], down }) => {

        console.log(x, y, down);
        if (down) {
            sphereApi.applyForce([x, -y, -(-y + 8)], [0, 0, 0]);
        } else {
            sphereApi.velocity.set(0, 0, 0);
        }
    });

    // const bind = useDrag((event) => {
    //     console.log(event);
    //     // const prevPosition = sphereRef.current.position;
    //     // // console.log(prevPosition.x, offset, velocity);
    //     // var newX = prevPosition.x + offset.at(0) * velocity;
    //     // var newY = prevPosition.y + offset.at(1) * velocity;
    //     // var newZ = prevPosition.z + offset.at(1) * velocity;
    //     // console.log(newX);

    //     // sphereApi.position.set(newX, newY, newZ);


    //     // console.log(state);
    //     // const x = state.xy[0];
    //     // const y = state.xy[1];
    //     // sphereApi.applyImpulse([x / 1000, y / 1000, 0], [0, 0, 0]);
    // })

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