import { useRef } from 'react'

import { Color, MeshProps } from '@react-three/fiber'
import { Mesh } from 'three'

export type CubeModelProps = MeshProps & {
  color?: Color
  size?: any
}

export default function CubeModel({
  color = 'white',
  size,
  ...props
}: CubeModelProps) {
  const meshRef = useRef<Mesh>(null!)

  return (
    <mesh ref={meshRef} {...props}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}
