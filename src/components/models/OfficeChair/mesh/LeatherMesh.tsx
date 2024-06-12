import { useTexture } from '@react-three/drei'

import { useCustomization } from '../../../../hooks/useCustomization'
import { propagateTexture } from '../../../../utils/propagateTexture'

export default function OfficeChairLeatherMesh({
  geometry,
}: {
  geometry: any
}) {
  const { plasticColor } = useCustomization()

  const whiteTextureProps = useTexture({
    map: `./textures/plastic/white/Plastic_002_basecolor.jpg`,
    normalMap: `./textures/plastic/white/Plastic_002_normal.jpg`,
    roughnessMap: `./textures/plastic/white/Plastic_002_roughness.jpg`,
    aoMap: `./textures/plastic/white/Plastic_002_ambientOcclusion.jpg`,
  })

  const blackTextureProps = useTexture({
    map: `./textures/plastic/black/Plastic_003_basecolor.jpg`,
    normalMap: `./textures/plastic/black/Plastic_003_normal.jpg`,
    roughnessMap: `./textures/plastic/black/Plastic_003_roughness.jpg`,
    aoMap: `./textures/plastic/black/Plastic_003_ambientOcclusion.jpg`,
  })

  propagateTexture({ texture: whiteTextureProps, multiplier: 4 })
  propagateTexture({ texture: blackTextureProps, multiplier: 4 })

  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial
        {...(plasticColor === 'white'
          ? {
              ...whiteTextureProps,
            }
          : {
              ...blackTextureProps,
            })}
      />
    </mesh>
  )
}
