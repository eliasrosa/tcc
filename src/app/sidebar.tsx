import Link from 'next/link'

export default function Sidebar() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/calculadora">Calculadora</Link>
      </li>
      <li>
        <Link href="/selic">Selic</Link>
      </li>
      <li>
        <Link href="/teste">teste</Link>
      </li>
      <li>
        <Link href="/inflacao">Inflação</Link>
      </li>
    </ul>
  )
}
