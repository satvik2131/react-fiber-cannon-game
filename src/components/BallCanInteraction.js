import { useFrame, useThree } from '@react-three/fiber';
import { Can } from './Cans';
import { Ball } from './Ball';
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


    return (
        <>
            <Ball />
            <Can />
        </>
    );
}