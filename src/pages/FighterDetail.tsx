import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import type { Fighter } from "../types/Fighter"
import { getFighterById, getFighterRecord } from "../services/fighterService"
import Loading from "../components/Loading"
import { Box, CardMedia, Grid, Typography } from "@mui/material"
import type { FightRecord } from "../types/FightRecord"
import StatCard from "../components/StatCard"

function FighterDetail() {
    const { id } = useParams()
    const [fighter, setFighter] = useState<Fighter>()
    const [record, setRecord] = useState<FightRecord>()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function fetchFighter() {
            try {
                setLoading(true)
                const data = await getFighterById(id)
                setFighter(data)
                setError(null)
            } catch (error) {
                setError("Error al obtener el luchador")
            } finally {
                setLoading(false)
            }

        }
        async function fetchRecord() {
            try {
                const data = await getFighterRecord(id)
                console.log("data", data)
                setRecord(data)

            } catch (e) {

            } finally {

            }
        }
        fetchFighter()
        fetchRecord()

    }, [id])
    return (
        loading ? <Loading /> : error ? <p>{error}</p> :
            <Grid container spacing={2}>

                <Grid size={6}>
                    <Typography variant="h2" component="div" sx={{ fontWeight: "700" }}>
                        {fighter?.name}
                    </Typography>
                    <Typography variant="h5" component="div" sx={{ color: "gray", fontStyle: "italic" }} >
                        {fighter?.nickname}
                    </Typography>
                    <Typography variant="h6" component="div">
                        {fighter?.height}
                    </Typography>
                    <Typography variant="h6" component="div">
                        {fighter?.weight}
                    </Typography>
                    <Typography variant="h6" component="div">
                        {fighter?.reach}
                    </Typography>
                    <Typography variant="h6" component="div">
                        {fighter?.stance}
                    </Typography>
                    <Typography variant="h6" component="div">
                        {fighter?.category}
                    </Typography>

                    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", gap: 2 }}>
                        <StatCard value={record?.ko.win?.toString() ?? "0"} label="KO WINS" />
                        <StatCard value={record?.ko.loss?.toString() ?? "0"} label="KO LOSS" />
                        <StatCard value={record?.sub.win?.toString() ?? "0"} label="SUB WINS" />
                        <StatCard value={record?.sub.loss?.toString() ?? "0"} label="SUB LOSS" />
                        <StatCard value={record?.total.win?.toString() ?? "0"} label="TOTAL WINS" />
                        <StatCard value={record?.total.loss?.toString() ?? "0"} label="TOTAL LOSS" />
                    </Box>
                </Grid>
                <Grid size={6}>
                    <Box sx={{ width: "100%", alignItems: "center", display: "flex", flexDirection: "column" }}>

                        <Box sx={{ width: '100%', height: '100%' }}>
                            <CardMedia
                                component="img"
                                image={fighter?.photo}
                                onError={(e) => e.currentTarget.src = '...'}
                                alt={fighter?.name}
                                sx={{ width: '100%', objectFit: 'cover' }}
                            />
                        </Box>



                    </Box>
                </Grid>
            </Grid>







    )
}
export default FighterDetail