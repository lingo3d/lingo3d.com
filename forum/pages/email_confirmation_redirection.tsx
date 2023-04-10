import React from "react"
import { Dialog, Button, Box } from "@mui/material"
import Image from "next/image"
import success from "../public/success_2.png"

const EmailConfirmationRedirection: React.FC<{}> = () => {
    const handleCloseClick = () => {
        window.location.assign("/")
    }

    return (
        <Box className="w-screen h-full absolute top-0 left-0 flex justify-center items-center">
            <Box className="flex flex-col justify-center items-center p-6 gap-y-4 bg-[#081f4b]">
                <Image src={success} width={72} height={72} alt="success" />
                <div className="text-[#f4f4f9]  text-[22px]">
                    Email Confirmed
                </div>
                <div className="mt-[22px]">
                    <div className="text-[#f4f4f9] text-center">
                        Please login in into the website.
                    </div>
                    {/* <div className="text-[#f4f4f9] text-center">
                        to edit your password
                    </div> */}
                </div>
                <Button
                    variant="contained"
                    fullWidth
                    sx={{
                        paddingY: "10px !important",
                        background: "#86a1d8 !important",
                        color: "#f4f4f9"
                    }}
                    onClick={() => handleCloseClick()}
                >
                    OK
                </Button>
            </Box>
        </Box>
    )
}

export default EmailConfirmationRedirection
