import { Environment } from '@react-three/drei'

export type SceneProps = {
  children: React.ReactNode
  environment?: boolean
}

export default function Scene({ children, environment }: SceneProps) {
  // const directionalLightRef = useRef(null!)

  // useHelper(directionalLightRef, DirectionalLightHelper)

  return (
    <>
      {children}

      {/* <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2} /> */}
      {environment ? <Environment preset='city' /> : null}

      {/* <AccumulativeShadows
        temporal
        frames={100}
        color='#000'
        colorBlend={2}
        toneMapped={true}
        alphaTest={0.75}
        opacity={2}
        scale={12}
      >
        <RandomizedLight
          intensity={Math.PI}
          amount={8}
          radius={4}
          ambient={0.5}
          position={[4, 5, -8]}
          bias={0.001}
        />
      </AccumulativeShadows> */}
    </>
  )
}
