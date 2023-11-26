import { useContext } from 'react'

import { ModalContextType } from '@/@types/ContextTypes'
import { ModalContext } from '@/providers/ModalProvider'

export const useModal = () => {
  const context = useContext(ModalContext) as ModalContextType

  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }

  return context
}
