import {
  MeshReflectorMaterial,
  PresentationControls,
  Stage,
} from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { Suspense } from 'react'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'

export default function Experience() {
  const gltf = useLoader(GLTFLoader, './office_chair.glb')

  return (
    <PresentationControls
      speed={1.5}
      global
      zoom={0.7}
      polar={[0, Math.PI / 4]}
    >
      <Stage environment='city' intensity={0.6} shadows={false}>
        <Suspense fallback={null}>
          <mesh position={[0, 30, 0]}>
            <primitive object={gltf.scene} scale={0.2} />
          </mesh>
        </Suspense>
      </Stage>

      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[170, 170]} />
        <MeshReflectorMaterial
          blur={[300, 300]}
          mirror={0}
          resolution={2048}
          mixBlur={1}
          mixStrength={40}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color='#101010'
          metalness={0.5}
        />
      </mesh>
    </PresentationControls>
  )
}
