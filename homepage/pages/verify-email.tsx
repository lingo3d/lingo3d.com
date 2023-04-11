import React, { useState, useEffect } from "react"
import { Button, Box } from "@mui/material"
import Image from "next/image"
import verify from "../public/verify.png"
import Cookies from "js-cookie"

const VerifyEmail: React.FC<{}> = () => {
    const [email, setEmail] = useState<string | undefined>("")

    useEffect(() => {
        console.log(Cookies.get("email"))
        setEmail(Cookies.get("email"))
    }, [])

    const resendVerificationEmail = async () => {
        try {
            const resendVerification = await fetch(
                `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/send-email-confirmation`,
                {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify({
                        email
                    })
                }
            )
            const res = await resendVerification.json()
            console.log(res)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Box className="w-screen h-full absolute top-0 left-0 flex justify-center items-center">
            <Box className="flex flex-col justify-center items-center p-6 gap-y-4 bg-[#081f4b]">
                <Image src={verify} width={100} height={100} alt="verify" />
                <div className="text-[#f4f4f9] text-[35px] font-semibold tracking-wider">
                    Verify your email address
                </div>
                <div className="mt-[22px]">
                    <p className="text-[#f4f4f9] text-center">
                        We have sent a verification email to&nbsp;
                        <span className="underline">{email}</span>.
                        <br />
                        <br />
                        Please check your inbox now.
                    </p>
                </div>
                <Button
                    variant="contained"
                    onClick={() => resendVerificationEmail()}
                    fullWidth
                    sx={{
                        paddingY: "10px !important",
                        background: "#86a1d8 !important",
                        color: "#f4f4f9",
                        marginTop: "16px"
                    }}
                >
                    Resend verification email
                </Button>
            </Box>
        </Box>
    )
}

export default VerifyEmail
