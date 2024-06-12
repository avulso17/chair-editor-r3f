/* eslint-disable prettier/prettier */
import { type Texture, RepeatWrapping } from 'three'

type PropagateTextureProps = {
  texture: {
    map?: Texture
    normalMap?: Texture
    roughnessMap?: Texture
    aoMap?: Texture
  }
  multiplier: number
}

export function propagateTexture({ texture, multiplier }: PropagateTextureProps) {
  if (texture.map) {
    texture.map.repeat.set(multiplier, multiplier)

    texture.map.wrapS = RepeatWrapping;
    texture.map.wrapT = RepeatWrapping;
  }

  if (texture.normalMap) {
    texture.normalMap.repeat.set(multiplier, multiplier)

    texture.normalMap.wrapS = RepeatWrapping;
    texture.normalMap.wrapT = RepeatWrapping;
  }

  if (texture.roughnessMap) {
    texture.roughnessMap.repeat.set(multiplier, multiplier)

    texture.roughnessMap.wrapS = RepeatWrapping;
    texture.roughnessMap.wrapT = RepeatWrapping;
  }

  if (texture.aoMap) {
    texture.aoMap.repeat.set(multiplier, multiplier)

    texture.aoMap.wrapS = RepeatWrapping;
    texture.aoMap.wrapT = RepeatWrapping;
  }

}
