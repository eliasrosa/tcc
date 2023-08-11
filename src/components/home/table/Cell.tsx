import { TableCell } from '@tremor/react'

type Props = {
  children: React.ReactNode,
  isHidden?: boolean,
}

export function Cell({ children, isHidden = false }: Props) {
  const className = 'text-center ' + (isHidden ? 'text-gray-300 line-through;' : '')

  return (
    <>
      <TableCell className={className}>{children}</TableCell>
    </>
  )
}
