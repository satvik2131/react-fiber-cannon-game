import { useFrame, useThree } from '@react-three/fiber';
import { Cans } from './Cans';
import { usePlane, useBox, useCylinder, useSphere } from '@react-three/cannon';
import { Ball } from './Ball';
import { Table } from './Table';
import * as THREE from 'three';

export function Scene() {
    const ballRef = Ball().ref;
    const { raycaster, scene } = useThree();


    function Plane() {
        const [ref] = usePlane(() => ({
            mass: 0,
            rotation: [-Math.PI / 2, 0, 0],
            type: "Static",
        }))
        return (
            <mesh ref={ref} >
                <meshStandardMaterial attach="material" color="violet" />
                <planeGeometry args={[10, 10]} />
            </mesh>
        )
    }


    return (
        <>
            <pointLight />
            <ambientLight />
            <Cans />
            <Table />
            <Plane />
            <Ball />
        </>
    );
}