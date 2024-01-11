import { usePlane } from "@react-three/cannon";
import { OrbitControls, useTexture } from "@react-three/drei";
import { Cans } from "../GameModel/Cans/Cans";
import { BallTable } from "../GameModel/Balls/BallTable";
import { Balls } from "../GameModel/Balls/Balls";
import { Wall } from "../GameModel/Wall";
import { Table } from "../GameModel/Table";

export function BaseLevel() {
  //Texture for the ground
  const textures = useTexture({
    map: "./textures/ground2/rock_tile_floor_diff_1k.jpg",
    aoMap: "./textures/ground2/rock_tile_floor_ao_1k.jpg",
    roughnessMap: "./textures/ground2/rock_tile_floor_arm_1k.jpg",
    metalnessMap: "./textures/ground2/rock_tile_floor_arm_1k.jpg",
    normalMap: "./textures/ground2/rock_tile_floor_nor_gl_1k.jpg",
  });

  function Ground() {
    const [ref] = usePlane(() => ({
      mass: 0,
      rotation: [-Math.PI / 2, 0, 0],
      type: "Dynamic",
    }));

    return (
      <mesh ref={ref}>
        <meshStandardMaterial attach="material" {...textures} />
        <planeGeometry args={[10, 10, 10]} />
      </mesh>
    );
  }

  return (
    <>
      <ambientLight intensity={1.5} />
      <Wall position={[0, 5, -4]} rotation={[0, 0, 0]} />
      <Wall position={[5, 5, 0]} rotation={[0, -Math.PI / 2, 0]} />
      <Wall position={[-5, 5, 0]} rotation={[0, Math.PI / 2, 0]} />
      <Cans />
      <Table />
      <BallTable />
      <Ground />
      <Balls count={4} />
    </>
  );
}
