import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useCylinder } from '@react-three/cannon';


export function Can() {
    const { nodes, materials } = useLoader(GLTFLoader, './simple_cola_can/scene.gltf')

    //Cans reference
    const [canReference, canApi] = useCylinder(() => ({
        mass: 1,
        type: "Static",

    }));

    useFrame(() => {


    })

    /*  Can Design
    
            *                           }
           **                           }                
          ****                          } --> vertical_cans
         ******                         }
        ******** } -> horizontal_cans   }
    */

    //For creating the Cans tower
    //point where the first can is places
    var start_point = -0.5;
    //horizontal difference 
    const difference = 0.2;
    //height of the first can
    var start_height = 0.67;
    //vertical height (how up a can should be from the first line) of a can
    const height_difference = 0.32;

    var horizontal_cans = [];
    var vertical_cans = [];

    //cans length of the bottom line
    var count = 5;
    var uniqueId = 0;

    for (let i = count; i > 0; i--) {
        var moving_point = start_point;
        for (let j = 0; j < i; j++) {
            horizontal_cans.push(
                <mesh ref={canReference} geometry={nodes.Object_2.geometry}
                    material={materials.None} position={[moving_point, start_height, 0]}
                    rotation={[4.7, 0, 0]} scale={0.1}
                    key={uniqueId++}
                />
            )
            moving_point += difference;
        }

        vertical_cans.push(horizontal_cans);
        start_height += height_difference;
        start_point = (start_point + (start_point + difference)) / 2
    }

    return (
        <mesh >
            {vertical_cans}
        </mesh>
    );
}