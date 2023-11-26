import { TooltipHelper } from '@/components/common/TooltipHelper'
import { TableHeaderCell } from '@tremor/react'
import { ReactNode } from 'react'

type Props = {
  title: string
  helper?: ReactNode
}

export function HeaderCell({ title, helper }: Props) {
  return (
    <TableHeaderCell>
      <div className="text-center flex flex-row justify-center gap-1">
        {title}
        {helper && <TooltipHelper title={title} content={helper} />}
      </div>
    </TableHeaderCell>
  )
}
