import { useFrame } from '@react-three/fiber';

import { Can } from './Cans';
import { Ball } from './Ball';

export function BallCanInteraction() {
    const ballRef = Ball().ref;
    const canReference = Can().props[0];
    const canApi = Can().props[1];

    useFrame(({ mouse }) => {
        //For detecting the distance between the ball and can for interaction
        var distanceToCan = canReference.current.position.distanceTo(ballRef.current.position);
        if (distanceToCan < 1) {
            console.log("intersect");
        }
    })


    return (
        <>
            <Ball />
            <Can />
        </>
    );
}