import React, { useState } from "react"
import Box from "@mui/material/Box"
import Dialog from "@mui/material/Dialog"
import Image from "next/image"
import logoSignup from "../../public/logo_blue2_signup.png"
import Login from "./Login"
import Register from "./Register"
import { showAuthModal } from "../../signals/showAuthModal"

const AuthModal = () => {
    const [displayRegister, setDisplayRegister] = useState<boolean>(false)

    const handleCloseClick = (e: any) => {
        e.preventDefault()
        showAuthModal.value = false
        setDisplayRegister(false)
    }

    return showAuthModal.value ? (
        <Dialog
            onClose={handleCloseClick}
            open={showAuthModal.value}
            className="w-screen h-full absolute top-0 left-0 flex justify-center items-center"
        >
            <Box className="flex flex-col justify-center items-center p-6 gap-y-4 bg-[#081f4b]">
                <img
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/logo_blue2_signup.png`}
                    style={{ width: "120px", height: "22px" }}
                    alt="logo"
                />

                {displayRegister ? (
                    <Register />
                ) : (
                    <Login setDisplayRegister={setDisplayRegister} />
                )}
            </Box>
        </Dialog>
    ) : null
}

export default AuthModal
