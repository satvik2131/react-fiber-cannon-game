import { useBox } from "@react-three/cannon";
import * as THREE from 'three';

export function BallTable() {
    const [tableRef, tableApi] = useBox(() => ({
        mass: 10,
        position: [0, 0.6, 3],
        args: [3, 0.5, 1],
        type: "Dynamic"
    }));


    return (
        <>
            <mesh ref={tableRef} >
                <boxGeometry args={[3, 0.5, 1]} />
                <meshStandardMaterial color="green" />
            </mesh>
        </>
    );
}