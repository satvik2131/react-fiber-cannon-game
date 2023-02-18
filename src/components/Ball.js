import { useSphere } from '@react-three/cannon';
import { useLoader, useThree, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


export function Ball() {
    const { viewport } = useThree();

    const [ref, api] = useSphere(() => ({
        mass: 1,
        position: [0, 0, 4],
        type: "Static"
    }));

    useFrame(({ mouse }) => {

        // Moves the ball with cursor
        const x = (mouse.x * viewport.width) / 2;
        const y = (mouse.y * viewport.height) / 2;


        // api.position.set(x, y, 0);
        // api.rotation.set(-y, x, 0);

    });

    const gltf = useLoader(GLTFLoader, './tennis_ball/scene.gltf');
    return (
        <mesh ref={ref} >
            <primitive object={gltf.scene} scale={3.0} />
        </mesh>
    );
}