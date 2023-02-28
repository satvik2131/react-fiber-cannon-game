import { useFrame, useThree } from '@react-three/fiber';

import { Can } from './Cans';
import { Ball } from './Ball';


export function BallCanInteraction() {
    const ballRef = Ball().ref;

    const { raycaster, scene } = useThree();


    useFrame(({ mouse }) => {
        //For detecting the distance between the ball and can for interaction
        //detecting it with checking the current position
        // var distanceToCan = canReference.current.position.distanceTo(ballRef.current.position);
        // if (distanceToCan < 1) {
        //     console.log("intersect");
        // }

        //Raycasting approach
        const intersects = raycaster.intersectObjects(scene.children);
        if (intersects.length > 0) {
            const firstIntersection = intersects[0];
            console.log(firstIntersection);

        }


    })


    return (
        <>
            <Ball />
            <Can />
        </>
    );
}