import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import type { Fighter } from "../types/Fighter"
import { getFighterById, getFighterRecord } from "../services/fighterService"
import Loading from "../components/Loading"
import { Box, Card, CardMedia, Typography } from "@mui/material"
import type { FightRecord } from "../types/FightRecord"

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
            <Box sx={{ alignItems: "center", display: "flex", justifyContent: "center", marginTop: "20px" }}>
                <Card sx={{ width: 140, alignItems: "center", display: "flex", flexDirection: "column" }}>
                    <Typography variant="h6" component="div">
                        {fighter?.name}
                    </Typography>
                    <CardMedia
                        component="img"
                        height="140"
                        width="140"
                        image={fighter?.photo}
                        onError={(e) => e.currentTarget.src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}
                        alt={fighter?.name}
                        sx={{ borderRadius: 4, width: 140, alignItems: "center", display: "flex", justifyContent: "center" }}
                    />
                    <Typography variant="h6" component="div">
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
                    <Typography variant="h6" component="div" >
                        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <Typography variant="h6" component="div">
                                KO WINS {record?.ko.win}
                            </Typography>
                            <Typography variant="h6" component="div">
                                KO LOSS {record?.ko.loss}
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <Typography variant="h6" component="div">
                                SUB LOSS {record?.sub.loss}
                            </Typography>
                            <Typography variant="h6" component="div">
                                SUB WIN {record?.sub.win}
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <Typography variant="h6" component="div">
                                TOTAL LOSS {record?.total.loss}
                            </Typography>
                            <Typography variant="h6" component="div">
                                TOTAL WIN {record?.total.win}
                            </Typography>
                        </Box>
                    </Typography>
                </Card>
            </Box>






    )
}
export default FighterDetail