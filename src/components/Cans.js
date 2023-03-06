import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useCylinder } from '@react-three/cannon';


export function Can() {
    //the can model
    const { nodes, materials } = useLoader(GLTFLoader, './simple_cola_can/scene.gltf')

    //Cans reference
    const [canReference, canApi] = useCylinder(() => ({
        mass: 2,
    }));

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
    const horizontal_difference = 0.2;
    //height of the first can
    var start_height = 0.67;
    //vertical height (how up a can should be from the first line) of a can
    const height_difference = 0.32;

    const rotation = [Math.PI / 2, 0, 0];

    var vertical_cans = [];

    //cans length of the bottom line
    var count = 5;
    var uniqueId = 0;


    for (let i = count; i > 0; i--) {
        var moving_point = start_point;
        var horizontal_cans = [];

        for (let j = 0; j < i; j++) {
            horizontal_cans.push(
                <mesh geometry={nodes.Object_2.geometry}
                    material={materials.None}
                    position={[moving_point, start_height, 0]}
                    rotation={rotation}
                    scale={0.1}
                    key={uniqueId++}
                    update={canApi}
                />
            )
            moving_point += horizontal_difference;
        }

        vertical_cans.push(horizontal_cans);
        start_height += height_difference;
        //for placing the next row of cans (which will be less number than the first row) in between of 4 cans we have to place in 3.
        start_point = (start_point + (start_point + horizontal_difference)) / 2
    }

    return (
        <mesh>
            {vertical_cans}
        </mesh>
    );
}