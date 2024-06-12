import { useTexture } from '@react-three/drei'

import { useCustomization } from '../../../../hooks/useCustomization'
import { propagateTexture } from '../../../../utils/propagateTexture'

export default function OfficeChairClothMesh({ geometry }: { geometry: any }) {
  const { material, activeColor } = useCustomization()

  const leatherTextureProps = useTexture({
    normalMap: `./textures/leather/10/Leather_010_normal.jpg`,
    roughnessMap: `./textures/leather/10/Leather_010_roughness.jpg`,
    aoMap: `./textures/leather/10/Leather_010_ambientOcclusion.jpg`,
  })

  const fabricTextureProps = useTexture({
    normalMap: `./textures/fabric/10/Fabric_Knitted_010_normal.jpg`,
    roughnessMap: `./textures/fabric/10/Fabric_Knitted_010_roughness.jpg`,
    aoMap: `./textures/fabric/10/Fabric_Knitted_010_ambientOcclusion.jpg`,
  })

  propagateTexture({ texture: leatherTextureProps, multiplier: 6 })
  propagateTexture({ texture: fabricTextureProps, multiplier: 4 })

  function handleTexture() {
    switch (material) {
      case 'leather':
        return leatherTextureProps
      case 'fabric':
        return fabricTextureProps

      default:
        return leatherTextureProps
    }
  }

  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial {...handleTexture()} color={activeColor} />
    </mesh>
  )
}
