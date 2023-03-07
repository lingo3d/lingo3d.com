import { Box } from "@mui/material"
import Navbar from "./layouts/navbar/index"
import SideNav from "./layouts/sidebar/index"

function App() {
    return (
        <Box className="w-full h-full flex">
            <SideNav />
            <main className="flex-1 flex flex-col h-screen">
                <Navbar />
                <div className="flex-1 bg-[#121316]">I am the rest of the content</div>
            </main>
        </Box>
    )
}

export default App
