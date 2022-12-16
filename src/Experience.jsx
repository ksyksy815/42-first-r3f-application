import { useRef } from "react";
import { useThree, useFrame, extend } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import CustomObject from "./CustomObject";
import helper from "./helper";

extend({ OrbitControls });

export default function Experience() {
  /* Hooks */

  const { camera, gl: renderer } = useThree();

  const groupRef = useRef();
  const cubeRef = useRef();

  useFrame((state, delta) => {
    // groupRef.current.rotation.y += delta;
    cubeRef.current.rotation.y += delta;
  });

  /* Helpers */

  /* Render */

  const renderApparatus = () => {
    return <orbitControls args={[camera, renderer.domElement]} />;
  };

  const renderEnvironment = () => {
    return (
      <>
        <directionalLight position={[1, 2, 3]} intensity={0.8} />
        <ambientLight intensity={0.3} />
      </>
    );
  };

  const renderSphere = () => {
    const meshParams = helper.getMeshParams([-2, 0, 0], null, 2);
    const geoParams = helper.getGeometryArgs(0.5);
    const materialArgs = helper.getMaterialArgs("pink");

    return (
      <mesh {...helper.generateMeshProps({ ...meshParams })}>
        <sphereGeometry {...helper.generateGeoProps({ ...geoParams })} />
        <meshStandardMaterial
          {...helper.generateMaterialProps({ ...materialArgs })}
        />
      </mesh>
    );
  };

  const renderBox = () => {
    const meshParams = helper.getMeshParams(
      [2, 0, 0],
      [0, Math.PI * 0.25, 0],
      1.5
    );

    const geoProps = helper.generateGeoProps(null, { scale: 3.5 });

    const materialArgs = helper.getMaterialArgs("mediumpurple");

    return (
      <mesh {...helper.generateMeshProps({ ...meshParams }, { ref: cubeRef })}>
        <boxGeometry {...geoProps} />
        <meshStandardMaterial
          {...helper.generateMaterialProps({ ...materialArgs })}
        />
      </mesh>
    );
  };

  const renderPlane = () => {
    const meshParams = helper.getMeshParams(
      [0, -1, 0],
      [-Math.PI * 0.5, 0, 0],
      10
    );
    const materialArgs = helper.getMaterialArgs("greenyellow");

    return (
      <mesh {...helper.generateMeshProps({ ...meshParams })}>
        <planeGeometry {...helper.generateGeoProps()} />
        <meshStandardMaterial
          {...helper.generateMaterialProps({ ...materialArgs })}
        />
      </mesh>
    );
  };

  const renderScene = () => {
    return (
      <>
        <group ref={groupRef}>
          {renderSphere()}
          {renderBox()}
        </group>
        <CustomObject />
        {renderPlane()}
      </>
    );
  };

  return (
    <>
      {renderApparatus()}
      {renderEnvironment()}
      {renderScene()}
    </>
  );
}
