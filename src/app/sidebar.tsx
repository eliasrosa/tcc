import Link from 'next/link'

const classMenu = 'p-2 hover:text-white'

export default function Sidebar() {
  return (
    <div className="bg-gray-300 w-80 ">
      <ul className="flex-none">
        <li>
          <Link href="/">Análises</Link>
          <ul>
            <li className={classMenu}>
              <Link href="fiis/mxrf11">MXRF11</Link>
            </li>
            <li className={classMenu}>
              <Link href="fiis/xplg11">XPLG11</Link>
            </li>
            <li className={classMenu}>
              <Link href="fiis/xpht11">XPHT11</Link>
            </li>
          </ul>
        </li>
        <li className={classMenu}>
          <Link href="/calculadora">Calculadora</Link>
        </li>
        <li className={classMenu}>
          <Link href="/selic">Selic</Link>
        </li>
        <li className={classMenu}>
          <Link href="/inflacao">Inflação</Link>
        </li>
      </ul>
    </div>
  )
}
