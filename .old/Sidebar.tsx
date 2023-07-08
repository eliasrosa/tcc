import SidebarMenu from './SidebarMenu'

export default function Sidebar() {
  return (
    <div className="bg-gray-300 w-80 ">
      <ul className="flex-none">
        <SidebarMenu href="/" title="Comparador de FIIs" />
        <SidebarMenu href="/simulador" title="Simulador de Rendimentos" />
      </ul>
    </div>
  )
}
