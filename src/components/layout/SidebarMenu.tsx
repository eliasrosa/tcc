import { Icon } from '@phosphor-icons/react'

interface MenuItemProps {
  icon: Icon
  label: string
  href: string
}

export function SidebarMenuItem({ label, icon: Icon }: MenuItemProps) {
  return (
    <li className="my-px">
      <a
        href="#"
        className="group flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-blue-600"
      >
        <Icon className="text-lg text-white" />
        <span className="ml-3 text-white">{label}</span>
      </a>
    </li>
  )
}
