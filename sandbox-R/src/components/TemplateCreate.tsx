import CardMedia from "@mui/material/CardMedia"
import Box from "@mui/material/Box"
import AddIcon from "@mui/icons-material/Add"

const TemplateCreated: React.FC<{ framework: string; img: string }> = ({ framework, img }) => {
    return (
        <Box className="bg-[#1f1e24] w-full cursor-pointer flex justify-between items-center px-2 py-3">
            <Box className="flex justify-start items-center gap-x-3">
                <div className="w-8 h-8 bg-[#2b3245] rounded-md">
                    <CardMedia component="img" image={img} alt="react icon" className="w-full h-full" />
                </div>
                <h1 className="text-[18px] font-[500] ">New {framework} Project</h1>
            </Box>

            <div className="w-8 h-8 bg-[#2b3245] rounded-md flex justify-center items-center">
                <AddIcon className="w-full h-full" />
            </div>
        </Box>
    )
}

export default TemplateCreated
