import { useSphere } from '@react-three/cannon';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


export function Ball() {

    // //Ball reference
    const [sphereRef, sphereApi] = useSphere(() => ({
        mass: 1,
        allowSleep: true,
        type: "Dynamic",
        position: [0, 0, 4],
        args: [0.2, 0.2, 0.2],
        sleepSpeedLimit: 1,
    }));

    const CurvedLine = () => {
        const points = [
            [-2, 0, 0],
            [-1, 1, 0],
            [1, -1, 0],
            [2, 0, 0],
        ];



        return (
            <mesh position={[0, 0, 2]} rotation={[0, Math.PI / 2, 0]}>
                <tubeGeometry />
                <lineBasicMaterial color={0xff0000} />
            </mesh>
        );
    };


    const gltf = useLoader(GLTFLoader, './tennis_ball/scene.gltf');

    return (
        <>
            <CurvedLine />
            <mesh ref={sphereRef}>
                <primitive object={gltf.scene} scale={3.0} />
            </mesh >
        </>

    );
}