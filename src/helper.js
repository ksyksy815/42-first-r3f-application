class Helper {
  getMeshParams = (position, rotation, scale, ...restParams) => ({
    position,
    rotation,
    scale,
    ...restParams,
  });

  getGeometryArgs = (radius, width, height) => ({
    args: [radius, width, height],
  });

  getMaterialArgs = (color, wireframe) => ({
    args: [{ color, wireframe: wireframe || false }],
  });

  generateMeshProps = (meshParams) => {
    const defaultValues = {
      position: [0, 0, 0],
      scale: 1,
      rotation: [0, 0, 0],
    };

    return {
      position: meshParams?.position || defaultValues.position,
      scale: meshParams?.scale || defaultValues.scale,
      rotation: meshParams?.rotation || defaultValues.rotation,
    };
  };

  generateGeoProps = (geoProps) => {
    const defaultValues = {
      args: [1, 1, 1],
    };

    return {
      args: geoProps?.args || defaultValues.args,
    };
  };

  generateMaterialProps = (materialProps) => {
    const defaultValues = {
      args: [
        {
          color: "yellow",
        },
      ],
    };

    const argsValue = materialProps?.args || [...defaultValues.args];

    return {
      args: argsValue,
    };
  };
}

const helper = new Helper();

export default helper;
