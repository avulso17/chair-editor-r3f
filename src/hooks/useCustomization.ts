import { useContext } from 'react'
import { CustomizationContext } from '../providers/Customization'

export const useCustomization = () => {
  const context = useContext(CustomizationContext)
  if (context === undefined) {
    throw new Error('useRent must be used within a RentProvider')
  }
  return context
}
