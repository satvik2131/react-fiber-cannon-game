import { useSphere } from "@react-three/cannon";
import { useState } from "react";
import { useDrag, useGesture } from "@use-gesture/react";
import { useGLTF } from "@react-three/drei";

export function Ball({ position }) {
  const [holdStatus, setHoldStatus] = useState(true);

  // //Ball reference
  const [sphereRef, sphereApi] = useSphere(() => ({
    mass: 1,
    type: "Dynamic",
    position: position,
    args: [0.18, 0.18, 0.18],
    sleepSpeedLimit: 1,
  }));

  // const bind = useDrag(({ offset: [x, y], down }) => {
  //   if (down) {
  //     console.log(x, y);
  //     const z = -(-y + 6);
  //     sphereApi.applyForce([x - 2, -y, z], [0, 0, 0]);
  //   } else {
  //     sphereApi.velocity.set(0, 0, 0);
  //   }
  // });

  const bindGestures = useGesture(
    {
      onDragStart: () => {
        console.log("Hold Starts");
        setHoldStatus(false);
        console.log("1");
      },

      onDrag: ({ movement: [x, y], dragging, down }) => {
        if (holdStatus === true && dragging === true) {
          console.log(x, y);
          console.log("2");
        }
      },

      onDragEnd: () => {
        // Handle hold end here
        console.log("Hold End");
        console.log("3");
        setHoldStatus(true);
      },
    },
    {
      drag: {
        delay: 500, // Adjust the hold delay as needed
        filterTaps: true, // Prevent swipe trigger on taps
      },
    }
  );

  const { nodes, materials } = useGLTF("/models_3d/ball.glb");
  return (
    <mesh ref={sphereRef} {...bindGestures()}>
      <group dispose={null} scale={3.0}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={0.07}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.defaultMaterial.geometry}
              material={materials.lambert3}
            />
            <mesh
              geometry={nodes.defaultMaterial_1.geometry}
              material={materials.lambert1}
            />
          </group>
        </group>
      </group>
    </mesh>
  );

  useGLTF.preload("/models_3d/scene-transformed.glb");
}
