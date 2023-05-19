import { useBox } from "@react-three/cannon";
import * as THREE from 'three';

export function BallTable() {
    const [tableRef, tableApi] = useBox(() => ({
        mass: 10,
        position: [0, 0.6, 3],
        args: [5, 1, 1],
        type: "Dynamic"
    }));

    const material = new THREE.MeshLambertMaterial({ color: "red" });
    const boxesGeometry = new THREE.BoxBufferGeometry(0.5, 0.5, 0.5);

    return (
        <>
            <mesh ref={tableRef} >
                <boxGeometry args={[5, 1, 1]} />
                <meshStandardMaterial color="green" />
            </mesh>

            {/* <instancedMesh position={[0, 0, 2]} args={[boxesGeometry, material, 2]} /> */}
        </>
    );
}