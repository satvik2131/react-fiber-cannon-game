import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";

export function Lvl2(props) {
  const { nodes, materials } = useGLTF("/models_3d/levels/lvl2/giraffe.glb");
  const direction = useRef([0, 0, 0]);
  const [isGiraffeDown, setIsGiraffeDown] = useState(false);
  const [giraffeRef, girraffeApi] = useBox(() => ({
    mass: 1,
    position: [0, 1, 1.8],
    args: [1, 1, 1],
    allowSleep: false,
  }));

  //takes update when the giraffe is moving
  useEffect(() => {
    const subscribe = girraffeApi.position.subscribe((pos) => {
      // girraffeApi.position.set(pos[0], pos[1], pos[2]);
      giraffeRef.current.position.set(pos[0], pos[1], pos[2]);
    });
    return subscribe;
  }, []);

  //Force apply method
  // useFrame(() => {
  //   var x = direction.current[0];
  //   var y = direction.current[1];
  //   console.log(x);

  //   if (x >= 1 && y <= 2) {
  //     girraffeApi.applyImpulse([-0.15, 0.2, 0], [0, 0, 0]);
  //   } else if (x <= 1 && y <= 1) {
  //     girraffeApi.applyImpulse([0.15, 0.2, 0], [0, 0, 0]);
  //   }
  // });

  //Updating Positions directly
  //making the giraffe jump left and right
  useFrame(() => {
    var x = giraffeRef.current.position.x;
    var y = giraffeRef.current.position.y;
    var z = giraffeRef.current.position.z;
    const yLive = direction.current[1];

    console.log(x);
    console.log(y);

    //Left <---- Right(Jump)

    // if (isGiraffeDown && y <= 4) {
    //   var moveLeftX = x - 0.1;
    //   var moveLeftY = y + 0.1;
    //   girraffeApi.position.set(moveLeftX, moveLeftY, z);
    //   giraffeRef.current.position.set(moveLeftX, moveLeftY, z);
    // }
    // if (x >= 2 && y === 0) {
    //   var moveLeftX = x - 0.1;
    //   var moveLeftY = y + 0.1;
    //   girraffeApi.position.set(moveLeftX, moveLeftY, z);
    //   giraffeRef.current.position.set(moveLeftX, moveLeftY, z);
    // }

    //Left --> Right(Jump)
    if (x >= 0 && x < 2) {
      var moveRightX = x + 0.1;
      var moveRightY = y + 0.1;
      girraffeApi.position.set(moveRightX, moveRightY, z);
      giraffeRef.current.position.set(moveRightX, moveRightY, z);
    }

    // if (x >= 2 && yLive >= 0 && yLive < 1) {
    //   // girraffeApi.position.set(x, yLive, z);
    //   setIsGiraffeDown(true);
    // }
  });

  return (
    <group {...props} dispose={null} scale={0.002} ref={giraffeRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.giraffe_cube001_0.geometry}
        material={materials.cube001}
      />
    </group>
  );
}

useGLTF.preload("/giraffe.glb");
