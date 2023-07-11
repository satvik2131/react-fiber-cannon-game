import { useSphere } from "@react-three/cannon";
import { useDrag, useGesture } from "@use-gesture/react";
import { useFrame, useThree } from "@react-three/fiber";
import { Html, useGLTF } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

export function Ball({ position }) {
  const [moveBall, setMoveBall] = useState(false);
  const { viewport } = useThree();
  // //Ball reference
  const [sphereRef, sphereApi] = useSphere(() => ({
    mass: 1,
    type: "Dynamic",
    position: position,
    args: [0.18, 0.18, 0.18],
    // sleepSpeedLimit: 1,
  }));

  useFrame(({}) => {});

  const bind = useDrag(({ offset: [xAxis, yAxis], down }) => {
    if (down) {
      // const x = xAxis - 2;
      const x = ((xAxis / 100) * viewport.width) / 2;

      const z = -(-yAxis + 6);
      // console.log(x, yAxis);
    } else {
      sphereApi.velocity.set(0, 0, 0);
      sphereApi.angularVelocity.set(0, 0, 0);
    }
  });

  // const bindGestures = useGesture(
  //   {
  //     onDragStart: () => {
  //       console.log("Hold Starts");
  //       setMoveBall(true);
  //     },

  //     onDrag: ({ offset: [xAxis, yAxis], down }) => {
  //       const x = ((xAxis / 100) * viewport.width) / 2;
  //       const y = (-(yAxis / 100) * viewport.height) / 2;

  //       console.log(x, y);

  //       sphereApi.applyImpulse([x, y, y - 6], [0, 0, 0]);
  //     },

  //     onDragEnd: () => {
  //       // Handle hold end here
  //       console.log("Hold End");
  //       setMoveBall(false);
  //     },
  //   },
  //   {
  //     drag: {
  //       delay: 500, // Adjust the hold delay as needed
  //       filterTaps: true, // Prevent swipe trigger on taps
  //     },
  //   }
  // );

  const { nodes, materials } = useGLTF("/models_3d/ball.glb");
  return (
    <>
      <Html>
        <ReactScrollWheelHandler upHandler={(e) => console.log("scroll up")} />
      </Html>
      <mesh ref={sphereRef} {...bind()}>
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
    </>
  );

  useGLTF.preload("/models_3d/scene-transformed.glb");
}
