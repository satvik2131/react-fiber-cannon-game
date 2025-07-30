import { useRef, useEffect } from "react";
import * as THREE from "three";
import { CanV2 } from "./Can_v2";

export function CansV2({ count = 10, temp = new THREE.Object3D() }) {
  const instancedMeshRef = useRef();
  useEffect(() => {
    // Set positions
    for (let i = 0; i < count; i++) {
      temp.position.set(Math.random(), Math.random(), Math.random());
      temp.updateMatrix();
      instancedMeshRef.current.setMatrixAt(i, temp.matrix);
    }
    // Update the instance
    instancedMeshRef.current.instanceMatrix.needsUpdate = true;
  }, []);
  return (
    <instancedMesh ref={instancedMeshRef} args={[null, null, count]}>
      <boxGeometry />
      <meshPhongMaterial />
    </instancedMesh>
  );
}
