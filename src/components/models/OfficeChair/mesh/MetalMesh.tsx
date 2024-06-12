import { useTexture } from '@react-three/drei'

import { useCustomization } from '../../../../hooks/useCustomization'
import { propagateTexture } from '../../../../utils/propagateTexture'

export default function OfficeChairMetalMesh({ geometry }: { geometry: any }) {
  const { metalColor } = useCustomization()

  const blackTextureProps = useTexture({
    map: `./textures/metal/black/Metal_006_basecolor.jpg`,
    normalMap: `./textures/metal/black/Metal_006_normal.jpg`,
    roughnessMap: `./textures/metal/black/Metal_006_roughness.jpg`,
    aoMap: `./textures/metal/black/Metal_006_ambientOcclusion.jpg`,
  })

  const goldTextureProps = useTexture({
    map: `./textures/metal/gold/Metal_Gold_001_basecolor.jpg`,
    normalMap: `./textures/metal/gold/Metal_Gold_001_normal.jpg`,
    roughnessMap: `./textures/metal/gold/Metal_Gold_001_roughness.jpg`,
    aoMap: `./textures/metal/gold/Metal_Gold_001_ambientOcclusion.jpg`,
    metalnessMap: './textures/metal/gold/Metal_Gold_001_metallic.jpg',
  })

  propagateTexture({ texture: blackTextureProps, multiplier: 8 })
  propagateTexture({ texture: goldTextureProps, multiplier: 32 })

  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial
        {...(metalColor === 'gold'
          ? {
              ...goldTextureProps,
              roughness: 0,
            }
          : {
              ...blackTextureProps,
            })}
      />
    </mesh>
  )
}
