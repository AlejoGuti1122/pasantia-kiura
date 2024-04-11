import { useState, useEffect } from "react"

export function Pokemones() {
  const [pokemones, setPokemones] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        const data = await response.json()
        console.log(data) // Aquí puedes ver los datos recibidos en la consola
      } catch (error) {
        console.error("Error fetching pokemones:", error)
      }
    }

    fetchData()
  }, [])

  return <div>Pokemones</div>
}
