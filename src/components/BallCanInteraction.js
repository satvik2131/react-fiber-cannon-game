import { useFrame, useThree } from '@react-three/fiber';
import { Cans } from './Cans';
import { usePlane } from '@react-three/cannon';
import { Ball } from './Ball';
import { Table } from './Table';
import * as THREE from 'three';

export function BallCanInteraction() {
    const ballRef = Ball().ref;
    const { raycaster, scene } = useThree();

    //Intersecting ball with can
    useFrame(() => {
        //Raycasting approach
        var ballPosition = ballRef.current.position;
        var ballDirection = new THREE.Vector3(0, 0, 1);
        raycaster.set(ballPosition, ballDirection);

        //Detects intersection between can and ball
        const intersects = raycaster.intersectObjects(scene.children);
        if (intersects.length > 0) {
            var instersectingObj = intersects[0];
            var distance = instersectingObj.distance;

            if (distance < 1) {
                var api = instersectingObj.object.update;
                if (api) {
                    // console.log(api);
                    // const force = [0, 0, -100]
                    // api.position.set(2, 1, 1);
                }
                //ray got deviated (intersection point)
                // instersectingObj.object.position.y += 1
            }
        }
    })

    function Plane() {
        const [ref] = usePlane(() => ({
            position: [0, 0, 0],
            rotation: [-Math.PI / 2, 0, 0],
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
            {/* <Table /> */}
            <Plane />
            <Cans />
            {/* <Ball /> */}
        </>
    );
}