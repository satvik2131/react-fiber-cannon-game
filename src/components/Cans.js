import { Can } from './Can';


export function Cans() {

    /*  Can Design
            *                           }
           **                           }                
          ****                          } --> vertical_cans
         ******                         }
        ******** } -> horizontal_cans   }
    */

    //For creating the Cans tower
    //first can starting point
    var start_point = -0.4;
    //horizontal horizontal_difference 
    const horizontal_difference = 2;
    //height of the first can
    var start_height = 0.1;
    //vertical height (how up a can should be from the first line) of a can
    const height_difference = 4;

    var canpositions = [];

    //cans length of the bottom line
    var count = 5;
    var uniqueKey = 0;

    for (let i = count; i > 0; i--) {
        var moving_point = start_point;

        for (let j = 0; j < i; j++) {
            // const newCan = { position: [moving_point, start_height, 0] }
            var position = [moving_point, start_height, 0];
            canpositions.push(<Can position={position} unique={uniqueKey++} key={uniqueKey++} />);
            moving_point += horizontal_difference;
        }

        start_height += height_difference;
        //updating the horizontal start point for the next line creation upward
        start_point = (start_point + (start_point + horizontal_difference)) / 2
    }

    return canpositions;
}