import helper from "./helper";

export default function Experience() {
  /* Hooks */

  /* Helpers */

  /* Render */

  const renderSphere = () => {
    const meshParams = helper.getMeshParams([-2, 0, 0], null, 2);
    const geoParams = helper.getGeometryArgs(0.5);
    const materialArgs = helper.getMaterialArgs("pink");

    return (
      <mesh {...helper.generateMeshProps({ ...meshParams })}>
        <sphereGeometry {...helper.generateGeoProps({ ...geoParams })} />
        <meshBasicMaterial
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
      <mesh {...helper.generateMeshProps({ ...meshParams })}>
        <boxGeometry {...geoProps} />
        <meshBasicMaterial
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
        <meshBasicMaterial
          {...helper.generateMaterialProps({ ...materialArgs })}
        />
      </mesh>
    );
  };

  return (
    <>
      {renderSphere()}
      {renderBox()}
      {renderPlane()}
    </>
  );
}
