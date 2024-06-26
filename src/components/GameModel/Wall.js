import { usePlane } from "@react-three/cannon";
import { useTexture } from "@react-three/drei";

export function Wall({ position, rotation }) {
  const wallTextures = useTexture({
    map: `${process.env.REACT_APP_MEDIA_DIR}/textures/walls/Sci_fi_Metal_Panel_002_basecolor.jpg`,
    aoMap: `${process.env.REACT_APP_MEDIA_DIR}/textures/walls/Sci_fi_Metal_Panel_002_ambientOcclusion.jpg`,
    roughnessMap: `${process.env.REACT_APP_MEDIA_DIR}/textures/walls/Sci_fi_Metal_Panel_002_roughness.jpg`,
    metalnessMap: `${process.env.REACT_APP_MEDIA_DIR}/textures/walls/Sci_fi_Metal_Panel_002_metallic.jpg`,
    normalMap: `${process.env.REACT_APP_MEDIA_DIR}/textures/walls/Sci_fi_Metal_Panel_002_normal.jpg`,
    alphaMap: `${process.env.REACT_APP_MEDIA_DIR}/textures/walls/Sci_fi_Metal_Panel_002_opacity.jpg`,
    displacement: `${process.env.REACT_APP_MEDIA_DIR}/textures/walls/Sci_fi_Metal_Panel_002_height.png`,
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
