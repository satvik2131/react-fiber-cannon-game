import { usePlane } from "@react-three/cannon";
import { useTexture } from "@react-three/drei";

export function Wall({ position, rotation }) {
  const wallTextures = useTexture({
    map: `/uploads/textures/walls/Sci_fi_Metal_Panel_002_basecolor.jpg`,
    aoMap: `/uploads/textures/walls/Sci_fi_Metal_Panel_002_ambientOcclusion.jpg`,
    roughnessMap: `/uploads/textures/walls/Sci_fi_Metal_Panel_002_roughness.jpg`,
    metalnessMap: `/uploads/textures/walls/Sci_fi_Metal_Panel_002_metallic.jpg`,
    normalMap: `/uploads/textures/walls/Sci_fi_Metal_Panel_002_normal.jpg`,
    alphaMap: `/uploads/textures/walls/Sci_fi_Metal_Panel_002_opacity.jpg`,
    displacement: `/uploads/textures/walls/Sci_fi_Metal_Panel_002_height.png`,
  });

  const [bgRef, bgApi] = usePlane(() => ({
    position: position,
    rotation: rotation,
  }));

  return (
    <mesh ref={bgRef}>
      <planeGeometry args={[10, 10, 10]} />
      <meshStandardMaterial {...wallTextures} />
    </mesh>
  );
}
