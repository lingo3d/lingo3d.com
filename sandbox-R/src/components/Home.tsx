import TemplateFeatured from "./TemplateFeatured"
import TemplateCreate from "./TemplateCreate"
import { Box } from "@mui/material"
import react from "/react.png"
import vue from "/vue.png"

const Home = () => {
    return (
        <Box className="flex flex-col gap-y-6 md:gap-y-8">
            <Box>
                <h2 className="text-[24px] font-[500] mb-2">Featured</h2>
                <TemplateFeatured />
            </Box>
            <Box>
                <h2 className="text-[24px] font-[500] mb-2">Create</h2>
                <Box className="flex flex-col gap-y-3">
                    <TemplateCreate framework="React" img={react} />
                    <TemplateCreate framework="Vue" img={vue} />
                </Box>
            </Box>
        </Box>
    )
}

export default Home
