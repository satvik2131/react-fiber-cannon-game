import { usePlane } from "@react-three/cannon";
import { OrbitControls, useTexture } from "@react-three/drei";
import { Cans } from "../GameModel/Cans/Cans";
import { BallTable } from "../GameModel/Balls/BallTable";
import { Balls } from "../GameModel/Balls/Balls";
import { Wall } from "../GameModel/Wall";
import { Table } from "../GameModel/Table";
import { Html } from "@react-three/drei";
import { useState } from "react";

export function BaseLevel() {
  //this will rerender the balls
  const [ballsRerender, setBallsReRender] = useState(true);
  const rerender = () => setBallsReRender((b) => !b);

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

  const ResetBallsButton = () => {
    return (
      <Html position={[4, 2.5, 0]}>
        <div onClick={rerender}>
          <svg
            width="120px"
            height="120px"
            viewBox="0 0 76 76"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            baseProfile="full"
            enable-background="new 0 0 76.00 76.00"
            style={{
              backgroundColor: "black",
              borderRadius: "20px",
              boxShadow: "2px 1px #ffff",
            }}
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fill="#ffffff"
                fill-opacity="1"
                stroke-width="0.2"
                stroke-linejoin="round"
                d="M 19,45.9167L 25.6082,45.9167C 28.6524,49.3179 33.0762,51.4583 38,51.4583C 42.9238,51.4583 47.3476,49.3179 50.3918,45.9167L 58.5833,45.9167L 58.5833,57L 19,57L 19,45.9167 Z M 56.2083,48.2917L 53.4374,48.2917L 53.4374,53.0417L 56.2083,53.0417L 56.2083,48.2917 Z M 39.5833,33.25L 30.0833,23.75L 39.5833,14.25L 39.5833,20.6703C 46.7082,21.4579 52.25,27.4985 52.25,34.8333C 52.25,42.7034 45.8701,49.0833 38,49.0833C 30.1299,49.0833 23.75,42.7034 23.75,34.8333C 23.75,32.0174 24.5668,29.3923 25.9763,27.1819L 30.6522,30.1575C 29.7908,31.5083 29.2917,33.1125 29.2917,34.8333C 29.2917,39.6428 33.1905,43.5417 38,43.5417C 42.8095,43.5417 46.7083,39.6428 46.7083,34.8333C 46.7083,30.5646 43.6368,27.0132 39.5833,26.2686L 39.5833,33.25 Z "
              />{" "}
            </g>
          </svg>
        </div>
      </Html>
    );
  };

  return (
    <>
      <ambientLight intensity={1.5} />
      <Wall position={[0, 5, -4]} rotation={[0, 0, 0]} />
      <Wall position={[5, 5, 0]} rotation={[0, -Math.PI / 2, 0]} />
      <Wall position={[-5, 5, 0]} rotation={[0, Math.PI / 2, 0]} />

      <ResetBallsButton />
      <Cans />
      <Table />
      <BallTable />
      <Ground />
      <Balls count={4} val={ballsRerender} />
    </>
  );
}
