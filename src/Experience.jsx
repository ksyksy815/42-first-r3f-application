import helper from './helper'

export default function Experience() {


  /* Hooks */


  /* Helpers */

  
  /* Render */

  const renderSphere = () => {
    const meshParams = {
      position: [-1.5, -0.5, 0],
      scale: 2
    }

    const geoParams = {
      args: [0.5, 20, 20]
    }

    const materialArgs = {
      args: [{
        color: "pink",
        wireframe: true,
      }]
    } 

    return (
      <mesh {...helper.generateMeshProps({...meshParams})} >
        <sphereGeometry {...helper.generateGeoProps({...geoParams})} />
        <meshBasicMaterial {...helper.generateMaterialProps({...materialArgs})}  />
      </mesh>
    )
  }

  const renderBox = () => {
    const meshParams = {
      position: [2, -1, 0],
      rotation: [2, 0, 2],
    }

    const materialArgs = {
      args: [{
        color: "mediumpurple",
        wireframe: true,
      }]
    } 
    
    return (
      <mesh {...helper.generateMeshProps({...meshParams})} >
        <boxGeometry {...helper.generateGeoProps()} />
        <meshBasicMaterial {...helper.generateMaterialProps({...materialArgs})}  />
      </mesh>
    )
  }

  const renderPlane = () => {
    const meshParams = {
      position: [0, -2, 0],
      rotation: [-1.8, 0, 0],
      scale: 4,
    }

    const materialArgs = {
      args: [{
        color: "green",
        wireframe: true,
      }]
    } 

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