import { useState, useEffect } from "react"

export function Pokemones() {
  const [pokemones, setPokemones] = useState([])

  useEffect(() => {
    const response = fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    console.log(response)
  }, [])

  return <div>Pokemones</div>
}
