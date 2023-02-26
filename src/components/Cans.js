import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useCylinder } from '@react-three/cannon';


export function Can({ reference, position }) {
    const { nodes, materials } = useLoader(GLTFLoader, './simple_cola_can/scene.gltf')

    //For creating the Cans tower
    var start_point = -0.5;
    const difference = 0.2;
    var start_height = 0.67;

    var horizontal_cans = [];
    var vertical_cans = [];

    var count = 5;

    for (let i = count; i > 0; i--) {
        var moving_point = start_point;
        for (let j = 0; j < i; j++) {
            horizontal_cans.push(
                <mesh ref={reference} geometry={nodes.Object_2.geometry}
                    material={materials.None} position={[moving_point, start_height, 0]}
                    rotation={[4.7, 0, 0]} scale={0.1}
                />
            )
            moving_point += difference;
        }

        vertical_cans.push(horizontal_cans);
        start_height += 0.32;
        start_point = (start_point + (start_point + difference)) / 2
    }

    return vertical_cans;
}