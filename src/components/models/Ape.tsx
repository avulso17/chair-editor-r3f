import { useLayoutEffect } from 'react'

import * as THREE from 'three'

import { useGLTF } from '@react-three/drei'
import { PrimitiveProps } from '@react-three/fiber'
import { FlakesTexture } from 'three-stdlib'

export default function ApeModel({ ...props }: PrimitiveProps) {
  const { scene, materials } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/suzanne-high-poly/model.gltf'
  )

  useLayoutEffect(() => {
    scene.traverse(
      (obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    )
    materials.default.color.set('white')
    materials.default.roughness = 0
    materials.default.normalMap = new THREE.CanvasTexture(
      new FlakesTexture(),
      THREE.UVMapping,
      THREE.RepeatWrapping,
      THREE.RepeatWrapping
    )
    materials.default.normalMap.repeat.set(40, 40)
    materials.default.normalScale.set(0.1, 0.1)
  })

  return <primitive {...props} object={scene} />
}
