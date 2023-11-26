'use client'

import { cn } from '@/helpers/cn'
import { TitleProps, Title as TitleTremor } from '@tremor/react'

export function Title({ children, ...props }: TitleProps) {
  return (
    <TitleTremor
      className={cn(
        'border-b text-gray-600 border-b-gray-400 flex flex-col',
        'sm:flex-row sm:justify-between',
        props.className,
      )}
    >
      {children}
    </TitleTremor>
  )
}
