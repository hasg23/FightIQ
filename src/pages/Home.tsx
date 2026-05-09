import { useState } from "react"
import type { Fighter } from "../types/Fighter"
import { searchFighters } from "../services/fighterService"
import { Box, CircularProgress } from "@mui/material"


function Home() {
    const [fighter, setFighter] = useState<Fighter[]>([])
    const [search, setSearch] = useState("")
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    const handleSearch = async () => {
        //validar que search tenga al menos 3 caracteres
        if (search.length < 3) {
            setError("Search must be at least 3 characters")
            return
        }
        try {
            setLoading(true)
            const data = await searchFighters(search)
            setError(null)
            setFighter(data)


            console.log("data", data)
        } catch (error) {
            console.log(error)
            //mostrar toast error
            setError("Error al buscar luchadores")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <h1>Home</h1>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}>

            </input>
            <button onClick={handleSearch}>
                Search
            </button>
            {
                loading ? <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}><CircularProgress /></Box> :
                    error ? <p>{error}</p> :
                        fighter.map((f) => (
                            <div key={f.id}>
                                <p>{f.name}</p>
                                <p>{f.nickname}</p>
                                <img src={f.photo} alt={f.name} />
                                <p>{f.height}</p>
                                <p>{f.weight}</p>
                                <p>{f.reach}</p>
                                <p>{f.stance}</p>
                                <p>{f.category}</p>
                            </div>
                        ))
            }
        </div>
    )
}
export default Home