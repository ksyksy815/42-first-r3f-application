import * as THREE from "three";

export default function CustomObject() {
  /* Hooks */

  const verticesCount = 10 * 3;
  const vertexPositionList = new Float32Array(verticesCount * 3).map(
    () => (Math.random() - 0.5) * 3
  );

  /* Helpers */

  /* Render */

  return (
    <mesh>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={verticesCount}
          itemSize={3} // x, y, z
          array={vertexPositionList}
        />
      </bufferGeometry>
      <meshBasicMaterial color="skyblue" side={THREE.DoubleSide} />
    </mesh>
  );
}
