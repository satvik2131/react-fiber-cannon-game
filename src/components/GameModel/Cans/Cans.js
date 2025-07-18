import { Can } from "./Can";

export function Cans({ setKnockCount }) {
  /*  Can Design
   *                           }
   **                           }
   ****                          } --> vertical_cans
   ******                         }
   ******** } -> horizontal_cans   }
   */

  //For creating the Cans tower
  //first can starting point
  var start_point = -0.4; //x-axis
  //horizontal horizontal_difference
  const horizontal_difference = 0.25;
  //height of the first can
  var start_height = 1.2;
  //vertical height (how up a can should be from the first line) of a can
  const height_difference = 0.3;
  //Cans distance in zaxis
  const zAxisDistance = 0.5;

  var canpositions = [];

  //cans length of the bottom line
  var count = 4;
  var uniqueKey = 0;

  //Creating star shaped cans tower
  for (let i = count; i > 0; i--) {
    var moving_point = start_point;

    for (let j = 0; j < i; j++) {
      var position = [moving_point, start_height, zAxisDistance];
      canpositions.push(
        <Can
          id={j + "CC" + i}
          canposition={position}
          unique={uniqueKey++}
          key={uniqueKey++}
        />
      );
      moving_point += horizontal_difference;
    }

    start_height += height_difference;
    //updating the horizontal start point for the next line creation upward
    start_point = (start_point + (start_point + horizontal_difference)) / 2;
  }

  return canpositions;
}
