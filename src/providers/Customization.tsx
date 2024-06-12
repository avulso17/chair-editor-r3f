import { createContext, useState } from 'react'

type CustomizationContextProps = {
  material: 'fabric' | 'leather'
  setMaterial: React.Dispatch<React.SetStateAction<'fabric' | 'leather'>>
  activeColor: string
  setActiveColor: React.Dispatch<string>
  plasticColor: string
  setPlasticColor: React.Dispatch<string>
  metalColor: string
  setMetalColor: React.Dispatch<string>
}

export const CustomizationContext = createContext<CustomizationContextProps>({
  material: 'leather',
  setMaterial: () => {
    console.log('init')
  },
  activeColor: 'orange',
  setActiveColor: () => {
    console.log('init')
  },
  plasticColor: 'black',
  setPlasticColor: () => {
    console.log('init')
  },
  metalColor: 'black',
  setMetalColor: () => {
    console.log('init')
  },
})

type CustomizationProviderProps = {
  children: React.ReactNode
}

export default function CustomizationProvider({
  children,
}: CustomizationProviderProps) {
  const [material, setMaterial] = useState<'fabric' | 'leather'>('fabric')
  const [activeColor, setActiveColor] = useState<string>('orange')
  const [plasticColor, setPlasticColor] = useState<string>('black')
  const [metalColor, setMetalColor] = useState<string>('black')

  return (
    <CustomizationContext.Provider
      value={{
        material,
        setMaterial,
        activeColor,
        setActiveColor,
        plasticColor,
        setPlasticColor,
        metalColor,
        setMetalColor,
      }}
    >
      {children}
    </CustomizationContext.Provider>
  )
}
