import helper from "./helper";

export default function Experience() {
  /* Hooks */

  /* Helpers */

  /* Render */

  const renderSphere = () => {
    const meshParams = helper.getMeshParams([-1.5, -0.5, 0], null, 2);
    const geoParams = helper.getGeometryArgs(0.5, 20, 20);
    const materialArgs = helper.getMaterialArgs("pink", true);

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
    const meshParams = helper.getMeshParams([2, -1, 0], [2, 0, 2]);
    const materialArgs = helper.getMaterialArgs("mediumpurple", true);

    return (
      <mesh {...helper.generateMeshProps({ ...meshParams })}>
        <boxGeometry {...helper.generateGeoProps()} />
        <meshBasicMaterial
          {...helper.generateMaterialProps({ ...materialArgs })}
        />
      </mesh>
    );
  };

  const renderPlane = () => {
    const meshParams = helper.getMeshParams([0, -2, 0], [-1.8, 0, 0], 4);
    const materialArgs = helper.getMaterialArgs("green");

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
