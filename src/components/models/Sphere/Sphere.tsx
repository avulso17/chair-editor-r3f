import { useRef, useState } from 'react'

import { Color, MeshProps, useFrame } from '@react-three/fiber'
import { Mesh } from 'three'
import { MeshWobbleMaterial } from '@react-three/drei'

export type SphereModelProps = MeshProps & {
  color?: Color
  size?: any
}

export default function SphereModel({
  color = 'orange',
  size,
  ...props
}: SphereModelProps) {
  const ref = useRef<Mesh>(null!)

  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  useFrame((state, delta) => {
    const speed = isHovered ? 1 : 0.2
    ref.current.rotation.y += delta * speed
  })

  return (
    <mesh
      ref={ref}
      onPointerEnter={(e) => (e?.stopPropagation(), setIsHovered(true))}
      onPointerLeave={() => setIsHovered(false)}
      onClick={() => setIsClicked((prev) => !prev)}
      scale={isClicked ? 1.5 : 1}
      {...props}
    >
      <sphereGeometry args={size} />
      <MeshWobbleMaterial color={color} />
    </mesh>
  )
}
