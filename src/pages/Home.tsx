import { useState } from "react"
import type { Fighter } from "../types/Fighter"
import { searchFighters } from "../services/fighterService"
import { Grid } from "@mui/material"
import FighterCard from "../components/FighterCard"
import Loading from "../components/Loading"


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
                loading ? <Loading /> :
                    error ? <p>{error}</p> :
                        <Grid container spacing={2}>
                            {fighter.map((f) => (
                                <Grid sx={{ xs: 12, sm: 6, md: 3 }} key={f.id}>
                                    <FighterCard fighter={f} />
                                </Grid>
                            ))}
                        </Grid>
            }
        </div>
    )
}
export default Home