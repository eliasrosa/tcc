'use client'

import { ReactNode, createContext, useState } from 'react'
import { ModalContextType } from '@/@types/ContextTypes'

export const ModalContext = createContext<ModalContextType>(
  {} as ModalContextType,
)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [showModal, setShowModal] = useState(false)
  const [title, setTitle] = useState(null)
  const [content, setContent] = useState(null)

  const closeModal: ModalContextType['closeModal'] = () => {
    setTitle(null)
    setContent(null)
    setShowModal(false)
  }

  const openModal: ModalContextType['openModal'] = ({ title, content }) => {
    setTitle(title)
    setContent(content)
    setShowModal(true)
  }

  return (
    <ModalContext.Provider
      value={{ title, content, showModal, closeModal, openModal }}
    >
      {children}
    </ModalContext.Provider>
  )
}
