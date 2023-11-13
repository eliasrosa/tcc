'use client'

import { ReactNode, createContext, useState } from 'react'
import { ModalContextType } from '@/@types/ContextTypes'

export const ModalContext = createContext<ModalContextType>(
  {} as ModalContextType,
)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [showModal, setShowModal] = useState(false)
  const [title, setTitle] = useState<ReactNode>()
  const [content, setContent] = useState<ReactNode>()
  const [closeBtnTitle, setCloseBtnTitle] = useState<string>()

  const closeModal: ModalContextType['closeModal'] = () => {
    document.body.classList.remove('overflow-hidden')

    setCloseBtnTitle(undefined)
    setTitle(undefined)
    setContent(undefined)

    setShowModal(false)
  }

  const openModal: ModalContextType['openModal'] = ({
    title,
    content,
    closeBtnTitle,
  }) => {
    document.body.classList.add('overflow-hidden')

    setCloseBtnTitle(closeBtnTitle || 'Fechar')
    setTitle(title)
    setContent(content)
    setShowModal(true)
  }

  return (
    <ModalContext.Provider
      value={{
        title,
        content,
        showModal,
        closeBtnTitle,
        closeModal,
        openModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
