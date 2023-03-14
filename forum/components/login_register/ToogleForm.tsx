import React, { useState } from "react"
import Box from "@mui/material/Box"
import Dialog from "@mui/material/Dialog"
import Image from "next/image"
import logoSignup from "../../public/logo_blue_signup.png"
import Login from "./Login"
import Register from "./Register"
import { showLogin } from "../../signals/showLogin"

const Form = () => {
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
            className="w-screen h-full absolute top-0 left-0 flex justify-center items-center"
        >
            <Box className="flex flex-col justify-center items-center p-6 gap-y-4">
                <Image src={logoSignup} width={120} height={22} alt="logo" />

                {displayRegister ? (
                    <Register />
                ) : (
                    <Login setDisplayRegister={setDisplayRegister} />
                )}
            </Box>
        </Dialog>
    ) : null
}

export default Form
