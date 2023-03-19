import { useBox, usePlane } from '@react-three/cannon';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


export function Table() {
    const [ref, tableApi] = useBox(() => ({
        mass: 10,
        position: [0, 0, 0],
        // rotation: [-Math.PI / 2, -Math.PI / 2, -Math.PI / 2],
        type: "Static"
    }));

    const gltf = useLoader(GLTFLoader, './wooden_table/scene.gltf')
    return (
        <mesh ref={ref} update={tableApi} >
            <primitive object={gltf.scene} />
            <ambientLight intensity={0.5} />
            <directionalLight color="green" />
        </mesh>
    )
}