import Image from "next/image"
import Link from "next/link"

export function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-gray-800 text-white p-4">
      <Link href="/">
        <div className="text-lg font-bold">Inicio</div>
      </Link>
      <Link href="/search">
        <div className="mr-4">Buscar Profesionales</div>
      </Link>
      <Link href="/user-profile">
        <div>Mi Perfil</div>
      </Link>
    </nav>
  )
}
