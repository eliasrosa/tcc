'use client'

import { ReactNode } from 'react'
import { useModal } from '@/hooks/useModal'
import { QuestionMarkCircleIcon } from '@heroicons/react/solid'

type HelperTitleProps = {
  title: string
}

function HelperTitle({ title }: HelperTitleProps) {
  return (
    <div className="flex justify-between">
      {title}
      <QuestionMarkCircleIcon className="text-blue-500 h-8" />
    </div>
  )
}

type TooltipHelperProps = {
  title: string
  content: ReactNode
}

export function TooltipHelper({ title, content }: TooltipHelperProps) {
  const { openModal } = useModal()

  return (
    <div>
      <button
        data-testid="tooltip-button"
        onClick={() => openModal({ content, title: HelperTitle({ title }) })}
      >
        <QuestionMarkCircleIcon className="text-blue-500 w-5" />
      </button>
    </div>
  )
}
