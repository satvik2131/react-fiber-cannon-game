import { useSphere } from "@react-three/cannon";
import { useGesture } from "@use-gesture/react";
import { useGLTF } from "@react-three/drei";

export function Ball({ position }) {
  //Ball reference
  const [sphereRef, sphereApi] = useSphere(() => ({
    mass: 1,
    type: "Dynamic",
    position: position,
    args: [0.18, 0.18, 0.18],
  }));

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

    //Ball Throw
    onDragEnd: ({ offset: [x, y], active }) => {
      if (!active) {
        sphereApi.applyForce([x, -y, y - 300], [0, 0, 0]);
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
    `${process.env.REACT_APP_MEDIA_DIR}/models_3d/tennis_ball.glb`
  );
  return (
    <>
      <group
        name="ball"
        scale={0.16}
        ref={sphereRef}
        {...bindGestures()}
        dispose={null}
      >
        <group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube1_Paint_Matte_Yellow_0.geometry}
            material={materials.Paint_Matte_Yellow}
            material-metalness={0.1}
            material-roughness={0.8}
            material-color={0xe6e600}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube1_Paint_Matte_White_0.geometry}
            material={materials.Paint_Matte_White}
            material-metalness={0.1}
            material-roughness={0.8}
            material-color={0xfafafa}
          />
        </group>
      </group>
    </>
  );
}

useGLTF.preload(`${process.env.REACT_APP_MEDIA_DIR}/models_3d/tennis_ball.glb`);
