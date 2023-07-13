import { useSphere } from "@react-three/cannon";
import { useDrag, useGesture } from "@use-gesture/react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useRef, useState } from "react";

export function Ball({ position }) {
  const clickCount = useRef(0);
  const { viewport } = useThree();
  // //Ball reference
  const [sphereRef, sphereApi] = useSphere(() => ({
    mass: 1,
    type: "Dynamic",
    position: position,
    args: [0.18, 0.18, 0.18],
    // sleepSpeedLimit: 1,
  }));

  useFrame(() => {});

  const bindGestures = useGesture({
    onDrag: ({ offset: [x, y], down }) => {
      if (down) {
        sphereApi.applyForce([x, -y, -(-y + 10)], [0, 0, 0]);
      } else {
        sphereApi.velocity.set(0, 0, 0);
      }
    },

    onWheel: ({ movement }) => {
      const x = movement[1];
      console.log(x);
      if (x < 0) {
        sphereApi.applyForce([-0.5, 0, 0], []);
      } else {
        sphereApi.applyForce([0.5, 0, 0], []);
      }
    },
  });

  const { nodes, materials } = useGLTF("/models_3d/ball.glb");
  return (
    <>
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
    </>
  );

  useGLTF.preload("/models_3d/scene-transformed.glb");
}
