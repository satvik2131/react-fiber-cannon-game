import { usePlane } from '@react-three/cannon';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


export function Table() {
    const [ref] = usePlane(() => ({
        mass: 1,
        position: [0, 0, 0],
        rotation: [0, 4.78, 0],
        type: "Static"
    }));



    const gltf = useLoader(GLTFLoader, './wooden_table/scene.gltf')
    return (
        <mesh >
            <primitive ref={ref} object={gltf.scene} scale={1.0} />
            <ambientLight intensity={0.5} />
            <directionalLight color="green" />
        </mesh>
    )
}