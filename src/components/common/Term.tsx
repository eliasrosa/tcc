'use client'

import { useModal } from '@/hooks/useModal'
import { useEffect } from 'react'
import Cookies from 'js-cookie'

const TermContent = () => {
  return (
    <>
      <p className="mb-4">Prezado usuário,</p>

      <p className="mb-4">
        gostaríamos de informar que nosso site utiliza cookies e tecnologias
        semelhantes do seu navegador para aprimorar sua experiência de navegação
        e fornecer funcionalidades personalizadas.
      </p>

      <p className="mb-4">
        Os dados armazenados não contém informações pessoais sensíveis, como
        nome, endereço ou alguma outra informação de indentificação. Nosso
        compromisso com a privacidade é reforçado pela conformidade com a Lei
        Geral de Proteção de Dados (LGPD), que garanta a proteção de suas
        informações pessoais.
      </p>

      <p className="mb-4">
        Ao continuar navegando em nosso site, você está concordando com o uso
        destas tecnologias.
      </p>
    </>
  )
}

export function Term() {
  const { openModal } = useModal()
  const cookieName = 'TermsOfUseAccepted'

  useEffect(() => {
    if (Cookies.get(cookieName)) {
      return
    }

    openModal({
      content: <TermContent />,
      title: 'Termos de uso',
      closeBtnTitle: 'Aceito e continuar navegando',
      closeModal: () => {
        Cookies.set(cookieName, 'true')
      },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <></>
}
