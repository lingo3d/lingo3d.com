import TemplateFeatured from "./TemplateFeatured"
import { Box } from "@mui/material"
import Button from "@material-ui/core/Button"
import AddIcon from "@mui/icons-material/Add"

const Home = () => {
    return (
        <Box className="flex flex-col gap-y-6 md:gap-y-8">
            <Box>
                <h2 className="text-[24px] font-[500] mb-2">Featured</h2>
                <TemplateFeatured />
            </Box>
            <Box>
                <h2 className="text-[24px] font-[500] mb-2">Create</h2>
                <Box className="flex flex-col md:flex-row gap-y-3 gap-x-3">
                    <Button variant="contained" color="primary" size="small" className="md:min-w-[105px]" startIcon={<AddIcon />}>
                        Create New
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Home
