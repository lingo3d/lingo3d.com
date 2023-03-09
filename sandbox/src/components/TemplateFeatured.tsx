import CardMedia from "@mui/material/CardMedia"
import Box from "@mui/material/Box"
import featured from "/featured.webp"

const TemplateFeatured = () => {
    return (
        <Box className="bg-[#1f1e24] w-full cursor-pointer h-[210px] lg:h-[256px] rounded">
            <CardMedia component="img" image={featured} alt="react icon" className="w-full h-full rounded" />
        </Box>
    )
}

export default TemplateFeatured
