import { Box, CircularProgress } from "@mui/material";

function Loading() {

    return (
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}><CircularProgress /></Box>
    )
}
export default Loading