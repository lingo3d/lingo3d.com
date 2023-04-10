import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Box } from "@mui/material"
import Home from "./components/Home"
import Navbar from "./layouts/navbar/index"
import SideNav from "./layouts/sidebar/index"
import AuthModal from "./components/authModal/index"
import ForgotPassModal from "./components/ForgotPassModal"
import PassChangeSent from "./components/PassSent"
import { Provider } from "../context/user"

const theme = createTheme({
    typography: {
        body1: {
            fontSize: "14px"
        }
    }
})

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Provider>
                <Box className="w-full h-full flex">
                    <AuthModal />
                    <ForgotPassModal />
                    <PassChangeSent />
                    <SideNav />
                    <main className="flex-1 flex flex-col h-screen max-w-[1080px] 2xl:max-w-[70%] mx-auto">
                        <Navbar />
                        <div className="flex-1 bg-[#121316] px-8 py-8 scroll-box">
                            <Home />
                        </div>
                    </main>
                </Box>
            </Provider>
        </ThemeProvider>
    )
}

export default App
