import { useSphere, useTrimesh } from "@react-three/cannon";
import { useDrag, useGesture } from "@use-gesture/react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Line } from "@react-three/drei";
import { useState } from "react";

export function Ball({ position }) {
  //Ball reference
  const [sphereRef, sphereApi] = useSphere(() => ({
    mass: 1,
    type: "Dynamic",
    position: position,
    args: [0.18, 0.18, 0.18],
  }));

  const points = useState([0, 1, 0]);

  const bindGestures = useGesture({
    //Swiping towards the cans
    // onDrag: ({ offset: [x, y], active }) => {
    //   if (!active) {
    //     const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    //     const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    //     console.log("kkk--", mouseX, mouseY);
    //     // sphereApi.applyForce([x, -y, y - 100], [0, 0, 0]);
    //   } else {
    //     sphereApi.velocity.set(0, 0, 0);
    //   }
    // },
    onDrag: ({ offset: [x, y] }) => {
      points.push([x, -y, -y]);
      console.log(x, y);
    },

    onDragEnd: ({ offset: [x, y], active }) => {
      if (!active) {
        // sphereApi.applyForce([x, -y, y - 300], [0, 0, 0]);
      } else {
        sphereApi.velocity.set(0, 0, 0);
      }
    },

    //Moving right and left
    onWheel: ({ movement }) => {
      const x = movement[1];
      if (x < 0) {
        sphereApi.applyForce([-0.5, 0, 0], []);
      } else {
        sphereApi.applyForce([0.5, 0, 0], []);
      }
    },
  });

  const { nodes, materials } = useGLTF(
    `${process.env.REACT_APP_MEDIA_DIR}/models_3d/golf_ball.glb`
  );
  return (
    <>
      <Line points={points} />
      <group dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials["02___Default"]}
          rotation={[-Math.PI / 2, 0, 0]}
          ref={sphereRef}
        />
      </group>
    </>
  );
}
