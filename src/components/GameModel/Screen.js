import { GameScreen } from "./GameScreen";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { Physics } from "@react-three/cannon";

export const Screen = () => {
  return (
    <group>
      <Canvas camera={{ position: [0, 1, 4] }} shadows>
        {/* Lighting setup for realistic, non-bright balls */}
        <ambientLight intensity={0.08} />
        <directionalLight
          position={[0, 10, 0]} // Top-down lighting
          intensity={0.35}
          color={0xf0f0f0}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-bias={-0.0005}
        />
        <hemisphereLight
          skyColor={0xffffff}
          groundColor={0x888888}
          intensity={0.12}
          position={[0, 20, 0]}
        />
        <Physics gravity={[0, -9.81, 0]} allowSleep={true}>
          <GameScreen />
        </Physics>
      </Canvas>
      <Loader />
    </group>
  );
};
