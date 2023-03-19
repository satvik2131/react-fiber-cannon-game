// import { useLoader } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { useCylinder } from '@react-three/cannon';
// import { Suspense } from 'react';
// import { Clone } from '@react-three/drei';
import { Can } from './Can';


// export function Can({ canPosition, unique }) {
//     //the can model
//     // const { nodes, materials } = useLoader(GLTFLoader, './simple_cola_can/scene.gltf');
//     const canModel = useLoader(GLTFLoader, './simple_cola_can/scene.gltf');
//     //Cans reference
//     const [canReference, canApi] = useCylinder(() => ({
//         mass: 10,
//     }));

//     return (
//         <mesh
//             ref={canReference}
//             key={unique}
//             update={canApi}
//         >
//             <Suspense>
//                 <Clone object={canModel.scene} position={canPosition} scale={0.1} />
//             </Suspense>
//         </mesh>
//     );
// }


export function Cans() {

    /*  Can Design
            *                           }
           **                           }                
          ****                          } --> vertical_cans
         ******                         }
        ******** } -> horizontal_cans   }
    */

    //For creating the Cans tower
    //point where the first can is places
    var start_point = -0.4;
    //horizontal horizontal_difference 
    const horizontal_difference = 0.27;
    //height of the first can
    var start_height = 0.15;
    //vertical height (how up a can should be from the first line) of a can
    const height_difference = 0.32;

    var canProperties = [];

    //cans length of the bottom line
    var count = 2;
    var uniqueKey = 0;

    for (let i = count; i > 0; i--) {
        var moving_point = start_point;

        for (let j = 0; j < i; j++) {
            const newCan = { position: [moving_point, start_height, 0] }
            canProperties.push(newCan);
            // horizontal_cans.push(
            //     <Can position={ } unique={uniqueKey++} />
            // )
            moving_point += horizontal_difference;
        }

        // vertical_cans.push(horizontal_cans);
        start_height += height_difference;
        //for placing the next row of cans (which will be less number than the first row) in between of 4 cans we have to place in 3.
        start_point = (start_point + (start_point + horizontal_difference)) / 2
    }

    return (
        <>
            {canProperties.map((node, index) => {
                return <Can position={node.position} unique={index} key={index} />
            })
            }
        </>
    );
}