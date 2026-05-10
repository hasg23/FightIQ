import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import type { Fighter } from "../types/Fighter";
import { useNavigate } from "react-router-dom";
interface FighterCardProps {
    fighter: Fighter
}
function FighterCard({ fighter }: FighterCardProps) {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/fighter/${fighter.id}`)
    }
    return (
        <div>
            <Card sx={{ maxWidth: 345, alignItems: "center", display: "flex", flexDirection: "column", justifyContent: "center" }} onClick={handleNavigate}>
                <CardContent>
                    <Typography variant="h5" component="div" sx={{ fontSize: 14, alignItems: "center", display: "flex", flexDirection: "column" }}>
                        {fighter.name}
                    </Typography>

                </CardContent>
                <CardMedia
                    component="img"
                    height="140"
                    width="140"
                    image={fighter.photo}
                    onError={(e) => e.currentTarget.src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}
                    alt={fighter.name}
                    sx={{ borderRadius: 4, width: 140 }}
                />
                <Typography variant="h2" component="div" sx={{ fontSize: 14, alignItems: "center", display: "flex", flexDirection: "column" }}>
                    {fighter.nickname ?? "No nickname"}
                </Typography>
            </Card>

        </div>
    )

}
export default FighterCard