import CardMedia from "@mui/material/CardMedia"
import Box from "@mui/material/Box"
import img from "/react.png"

const TemplateCreated = () => {
    return (
        <Box className="bg-[#1f1e24] w-full cursor-pointer p-2 h-[210pm] md:h-[256px]" sx={{ boxShadow: 3, borderRadius: 2 }}>
            <div className="flex flex-row justify-between items-center mb-3">
                <h1 className="text-white text-5xl font-bold my-2">Smth</h1>
                <div className="w-auto h-auto bg-[#2b3245] rounded-md">
                    <CardMedia component="img" image={img} alt="react icon" className="w-20 h-20" />
                </div>
            </div>

            <p className="text-primary-p-color text-lg font-semibold my-2">
                React is a free and open-source front-end JavaScript library for building user interfaces
            </p>
        </Box>
    )
}

export default TemplateCreated
