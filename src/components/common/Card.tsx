import { ReactElement, ReactNode } from 'react'
import { Card as CardTremor } from '@tremor/react'
import { Title } from '@/components/common/Title'

interface Props {
  children: ReactNode
  subtitle?: string | ReactElement
  title: string
}

export function Card({ title, subtitle, children, ...props }: Props) {
  return (
    <CardTremor {...props}>
      <Title className="justify-between mb-2">
        <span data-testid="title">{title}</span>
        <span data-testid="subtitle" className="text-gray-500 text-sm">
          {subtitle}
        </span>
      </Title>
      {children}
    </CardTremor>
  )
}
