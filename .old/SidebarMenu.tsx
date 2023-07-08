import Link from 'next/link'

type Props = {
  href: string
  title: string
}

export default function SidebarMenu({ href, title }: Props) {
  return (
    <li className="">
      <Link href={href}>{title}</Link>
    </li>
  )
}
