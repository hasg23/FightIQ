import { Box, Typography } from "@mui/material"

interface StatCardProps {
    value: string
    label: string
}
function StatCard({ value, label }: StatCardProps) {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="h3" sx={{ fontWeight: 700 }}>
                {value}
            </Typography>
            <Box sx={{ height: "3px", backgroundColor: "red", width: "40px" }} />
            <Typography variant="body1" sx={{ color: "gray", textTransform: "capitalize" }}>
                {label}
            </Typography>

        </Box>
    )
}
export default StatCard