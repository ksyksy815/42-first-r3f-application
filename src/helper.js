class Helper {
  getMeshParams = (position, rotation, scale, ...restParams) => {
    return {
      position,
      rotation,
      scale,
      ...restParams[0],
    };
  };

  getGeometryArgs = (radius, width, height, ...restParams) => ({
    args: [radius, width, height],
    ...restParams,
  });

  getMaterialArgs = (color, wireframe) => ({
    args: [{ color, wireframe: wireframe || false }],
  });

  generateMeshProps = (meshParams, ...restProps) => {
    const defaultValues = {
      position: [0, 0, 0],
      scale: 1,
      rotation: [0, 0, 0],
    };

    const additionalProps = restProps && restProps[0];

    return {
      position: meshParams?.position || defaultValues.position,
      scale: meshParams?.scale || defaultValues.scale,
      rotation: meshParams?.rotation || defaultValues.rotation,
      ...additionalProps,
    };
  };

  generateGeoProps = (geoProps, ...restProps) => {
    const defaultValues = {
      args: [1, 1, 1],
    };

    const additionalProps = restProps && restProps[0];

    return {
      args: geoProps?.args || defaultValues.args,
      ...additionalProps,
    };
  };

  generateMaterialProps = (materialProps, ...restProps) => {
    const defaultValues = {
      args: [
        {
          color: "yellow",
        },
      ],
    };

    const additionalProps = restProps && restProps[0];

    const argsValue = materialProps?.args || [...defaultValues.args];

    return {
      args: argsValue,
      ...additionalProps,
    };
  };
}

const helper = new Helper();

export default helper;
