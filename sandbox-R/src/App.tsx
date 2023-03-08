import { Box } from "@mui/material"
import Home from "./components/Home"
import Navbar from "./layouts/navbar/index"
import SideNav from "./layouts/sidebar/index"

function App() {
    return (
        <Box className="w-full h-full flex">
            <SideNav />
            <main className="flex-1 flex flex-col h-screen max-w-[1080px] mx-auto">
                <Navbar />
                <div className="flex-1 bg-[#121316] px-8 py-8">
                    <Home />
                </div>
            </main>
        </Box>
    )
}

export default App
