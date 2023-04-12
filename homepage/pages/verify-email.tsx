import React, { useState, useEffect } from "react"
import { Button, Box } from "@mui/material"
import Image from "next/image"
import verify from "../public/padlock_2.png"
import Cookies from "js-cookie"
import { useWindowWidth } from "@react-hook/window-size"
import Link from "next/link"

const VerifyEmail: React.FC<{}> = () => {
    const [email, setEmail] = useState<string | undefined>("")
    const width = useWindowWidth()
    const [windowWidth, setWindowWidth] = useState<number | null>(null)

    useEffect(() => {
        setWindowWidth(width)
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
            {windowWidth! > 629 ? (
                <Link href="/">
                    <Image
                        src="/logo_full_name.png"
                        alt="company background"
                        width={120}
                        height={50}
                        style={{
                            position: "absolute",
                            top: "5%",
                            left: "5%"
                        }}
                    />
                </Link>
            ) : (
                <Link href="/">
                    <Image
                        src="/logo_trademark.png"
                        alt="company background"
                        width={60}
                        height={60}
                        style={{
                            position: "absolute",
                            top: "3%",
                            left: "5%"
                        }}
                    />
                </Link>
            )}

            <Box className="flex flex-col justify-center items-center p-6 m-6 gap-y-4 bg-[#081f4b]">
                <Image src={verify} width={100} height={100} alt="verify" />
                <div className="text-[#f4f4f9] text-[30px] sm:text-[35px] font-semibold text-center tracking-wider">
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
