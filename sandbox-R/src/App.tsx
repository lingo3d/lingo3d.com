import { Box } from "@mui/material"
import Home from "./components/Home"
import Navbar from "./layouts/navbar/index"
import SideNav from "./layouts/sidebar/index"
import NavSection from "./components/login_register/index"
import { Provider } from "../context/user"

function App() {
    return (
        <Provider>
            <Box className="w-full h-full flex pt-4">
                <NavSection />
                <SideNav />
                <main className="flex-1 flex flex-col h-screen max-w-[1080px] mx-auto">
                    <Navbar />
                    <div className="flex-1 bg-[#121316] px-8 py-8 overflow-y-scroll">
                        <Home />
                    </div>
                </main>
            </Box>
        </Provider>
    )
}

export default App
