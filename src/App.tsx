import './App.css'

import { Suspense } from 'react'

import { Canvas } from '@react-three/fiber'

import {
  Center,
  MeshReflectorMaterial,
  PresentationControls,
  Stage,
  useTexture,
} from '@react-three/drei'
import OfficeChairModel from './components/models/OfficeChair/OfficeChair'

import Configurator from './components/Configurator'
import { propagateTexture } from './utils/propagateTexture'

function ReflectiveFloor() {
  const floorTextureProps = useTexture({
    map: `./textures/wood/floor/Wood_Floor_012_basecolor.jpg`,
    normalMap: `./textures/wood/floor/Wood_Floor_012_normal.jpg`,
    roughnessMap: `./textures/wood/floor/Wood_Floor_012_roughness.jpg`,
    aoMap: `./textures/wood/floor/Wood_Floor_012_ambientOcclusion.jpg`,
  })

  propagateTexture({ texture: floorTextureProps, multiplier: 32 })

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[170, 170]} />
      <MeshReflectorMaterial
        blur={[300, 300]}
        mirror={0}
        resolution={512}
        mixBlur={1}
        mixStrength={1}
        roughness={1.5}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        // color='#101010'
        // metalness={0.5}
        {...floorTextureProps}
      />
    </mesh>
  )
}

export default function App() {
  return (
    <>
      <Canvas shadows camera={{ fov: 35 }}>
        <color attach='background' args={['#101010']} />
        <fog attach='fog' args={['#101010', 10, 20]} />

        <Suspense fallback={null}>
          <PresentationControls
            speed={1.5}
            global
            zoom={0.7}
            polar={[-0.1, Math.PI / 4]}
          >
            <group position={[0, -1.2, 0]}>
              <Center top>
                <Stage
                  environment='city'
                  intensity={0.5}
                  adjustCamera
                  shadows={'contact'}
                >
                  <OfficeChairModel scale={0.024} castShadow />
                </Stage>
              </Center>

              <Center>
                <ReflectiveFloor />
              </Center>
            </group>
          </PresentationControls>
        </Suspense>
      </Canvas>

      <Configurator />
    </>
  )
}
