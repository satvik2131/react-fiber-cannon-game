import { useSphere, useCylinder, useRaycastAny } from '@react-three/cannon';
import { useFrame, useThree } from '@react-three/fiber';
import { useState, useRef } from 'react';

import { Can } from './Cans';
import { Ball } from './Ball';


export function BallCanInteraction() {
    const testRef = useRef();
    const { camera, raycaster } = useThree();

    // Define a callback function to be executed when the raycasting intersects with an object
    const onIntersect = (intersects) => {
        console.log(`Intersects: ${intersects.length} objects`)
    }

    //Ball reference
    const [sphereRef, api] = useSphere(() => ({
        mass: 1,
        position: [0, 0, 4],
        type: "Static",
    }));

    //Cans reference
    const [canReference, canApi] = useCylinder(() => ({
        position: [0.1, 0.67, 0],
        mass: 1,
    }));


    useFrame(({ pointer, mouse }) => {
        pointer.x = (mouse.x / window.innerWidth) * 2 - 1;
        pointer.y = - (mouse.y / window.innerHeight) * 2 + 1;

        // var x = sphereRef.current.position.x;
        // var y = sphereRef.current.position.y
        // raycaster.setFromCamera({ x: x, y: y }, camera)
        // raycaster.ray.direction.normalize();

        // // Perform raycasting and call the onIntersect callback with the intersected objects
        const intersects = raycaster.intersectObjects(testRef)
        // console.log(intersects.length);

    })


    return (
        <>
            <Ball reference={sphereRef} api={api} name="ball" />
            <Can reference={canReference} name="can" />
            <mesh ref={testRef} position={[3, 1, 0]}>
                <sphereBufferGeometry />
            </mesh>
        </>
    );
}