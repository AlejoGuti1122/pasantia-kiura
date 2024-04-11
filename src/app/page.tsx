import { Navbar } from "@/components/Navbar"
import { Pokemones } from "@/components/Pokemones"
import Image from "next/image"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Pokemones />
    </main>
  )
}
