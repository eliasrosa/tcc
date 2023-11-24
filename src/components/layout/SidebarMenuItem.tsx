import { Icon } from '@phosphor-icons/react'
import Link from 'next/link'

interface MenuItemProps {
  icon: Icon
  label: string
  href: string
}

export function SidebarMenuItem({ label, icon: Icon, href }: MenuItemProps) {
  return (
    <li className="my-px">
      <Link
        href={href}
        data-testid="sidebar-menu-item"
        className="group flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-blue-600"
      >
        <Icon className="text-lg text-white" />
        <span className="ml-3 text-white">{label}</span>
      </Link>
    </li>
  )
}
