'use client'

import { ReactNode } from 'react'
import { useModal } from '@/hooks/useModal'
import { Question } from '@phosphor-icons/react'

type Props = {
  title: string
  children: ReactNode
}

export function TooltipHelper({ title, children }: Props) {
  const { openModal } = useModal()

  return (
    <div>
      <button onClick={() => openModal({ title, content: children })}>
        <Question className="text-blue-500" size={20} />
      </button>
    </div>
  )
}
