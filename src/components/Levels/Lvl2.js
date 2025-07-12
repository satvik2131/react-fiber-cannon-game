import { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useBox } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";

export function Lvl2(props) {
  // Kinematic so we can move it manually
  const [ref, api] = useBox(() => ({
    mass: 1,
    type: "Kinematic", // <-- Kinematic for manual movement
    position: [0, 1.5, 1.5],
    args: [0.5, 0.5, 0.5],
  }));

  const { nodes, materials, animations } = useGLTF(
    `/uploads/models_3d/bird.glb`
  );
  const { actions } = useAnimations(animations, ref);

  // Ref for the group to control rotation
  const groupRef = useRef();
  // Ref to store previous x position
  const prevX = useRef(0);
  // State for current y rotation
  const [yRot, setYRot] = useState(0);

  useEffect(() => {
    actions["Take 001"]?.reset().play();
    return () => {
      actions["Take 001"]?.fadeOut(0.5);
    };
  }, [actions]);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    // Oscillate x between -5 and +5 using sine for back-and-forth motion
    const x = 2 * Math.sin(elapsed * 0.8); // Adjust speed and range as needed
    api.position.set(x, 1.5, 1.5);

    // Determine direction and set rotation
    if (x > prevX.current) {
      setYRot(0); // Facing right
    } else if (x < prevX.current) {
      setYRot(Math.PI); // Facing left (flipped)
    }
    prevX.current = x;

    // Apply rotation to the group
    if (groupRef.current) {
      groupRef.current.rotation.y = yRot;
    }
  });

  return (
    <group scale={[0.1, 0.1, 0.1]} ref={ref} {...props} dispose={null}>
      <group ref={groupRef}>
        <group name="Sketchfab_Scene">
          <group
            name="Sketchfab_model"
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          >
            <group
              name="48a629d8f15541558d2298aec3d77cfdfbx"
              rotation={[Math.PI / 2, 0, 0]}
            >
              <group name="Object_2">
                <group name="RootNode">
                  <group name="Object_4">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_7"
                      geometry={nodes.Object_7.geometry}
                      material={materials.blinn2}
                      skeleton={nodes.Object_7.skeleton}
                    />
                    <group name="Object_6" />
                    <group name="BirdRetoppolySurface1" />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/bird.glb");
