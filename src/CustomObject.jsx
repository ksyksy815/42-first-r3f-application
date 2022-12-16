import { useMemo, useRef, useEffect } from "react";
import * as THREE from "three";

export default function CustomObject() {
  /* Hooks */

  const geometryRef = useRef();

  useEffect(() => {
    geometryRef.current.computeVertexNormals();
  }, []);

  const verticesCount = 10 * 3;

  const vertexPositionList = useMemo(() => {
    return new Float32Array(verticesCount * 3).map(
      () => (Math.random() - 0.5) * 3
    );
  }, []);

  /* Helpers */

  /* Render */

  return (
    <mesh>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute
          attach="attributes-position"
          count={verticesCount}
          itemSize={3} // x, y, z
          array={vertexPositionList}
        />
      </bufferGeometry>
      <meshStandardMaterial color="skyblue" side={THREE.DoubleSide} />
    </mesh>
  );
}
