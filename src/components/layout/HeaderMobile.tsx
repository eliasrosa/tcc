'use client'
import { List } from '@phosphor-icons/react'
import { Logo } from '../common/Logo'
import { Button } from '@tremor/react'

export function HeaderMobile() {
  return (
    <div className="bg-blue-500 lg:hidden">
      <Button variant="light" className="m-2">
        <List className="text-lg text-white" />
      </Button>
      <Logo />
    </div>
  )
}
