import helper from './helper'

export default function Experience() {


  /* Hooks */


  /* Helpers */

  const getMeshParams = (position, rotation, scale, ...restParams) => ({ position, rotation, scale, ...restParams })

  const getGeometryArgs = (radius, width, height) => ({ args: [radius, width, height] })

  const getMaterialArgs = (color, wireframe) => ({ args: [{color, wireframe: wireframe || false}] })

  
  /* Render */

  const renderSphere = () => {
    const meshParams = getMeshParams([-1.5, -0.5, 0], null, 2) 
    const geoParams = getGeometryArgs(0.5, 20, 20)
    const materialArgs = getMaterialArgs('pink', true)

    return (
      <mesh {...helper.generateMeshProps({...meshParams})} >
        <sphereGeometry {...helper.generateGeoProps({...geoParams})} />
        <meshBasicMaterial {...helper.generateMaterialProps({...materialArgs})}  />
      </mesh>
    )
  }

  const renderBox = () => {
    const meshParams = getMeshParams([2, -1, 0], [2, 0, 2])
    const materialArgs = getMaterialArgs('mediumpurple', true)
    
    return (
      <mesh {...helper.generateMeshProps({...meshParams})} >
        <boxGeometry {...helper.generateGeoProps()} />
        <meshBasicMaterial {...helper.generateMaterialProps({...materialArgs})}  />
      </mesh>
    )
  }

  const renderPlane = () => {
    const meshParams = getMeshParams([0, -2, 0], [-1.8, 0, 0], 4)
    const materialArgs = getMaterialArgs('green')

    return (
      <mesh {...helper.generateMeshProps({...meshParams})} >
        <planeGeometry {...helper.generateGeoProps()} />
        <meshBasicMaterial {...helper.generateMaterialProps({...materialArgs})} />
      </mesh>
    )
  }

  return (
    <>
      {renderSphere()}
      {renderBox()}
      {renderPlane()}
    </>
  )

}