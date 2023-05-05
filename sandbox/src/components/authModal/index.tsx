import { useState } from "react"
import Box from "@mui/material/Box"
import Dialog from "@mui/material/Dialog"
import logoSignup from "/logo_blue_signup.png"
import Login from "./Login"
import Register from "./Register"
import { showLogin } from "../../../signals/showLogin"

const AuthModal = () => {
    const [displayRegister, setDisplayRegister] = useState<boolean>(false)

    const handleCloseClick = (e: any) => {
        e.preventDefault()
        showLogin.value = false
        setDisplayRegister(false)
    }

    return showLogin.value ? (
        <Dialog
            onClose={handleCloseClick}
            open={showLogin.value}
            className="w-screen h-full absolute top-0 left-0 flex flex-col justify-center items-center rounded-lg"
            sx={{
                "& .MuiDialog-paper": {
                    height: "auto !important"
                }
            }}
        >
            <Box className="flex flex-col justify-center items-center p-8 gap-y-4 bg-[#292B32] rounded-lg">
                <img src={logoSignup} width={120} height={22} alt="logo" />

                {displayRegister ? (
                    <Register setDisplayRegister={setDisplayRegister} />
                ) : (
                    <Login setDisplayRegister={setDisplayRegister} />
                )}
            </Box>
        </Dialog>
    ) : null
}

export default AuthModal
