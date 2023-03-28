import React from "react"
import { Dialog, Button, Box } from "@mui/material"
import Image from "next/image"
import success from "../public/success_2.png"
import { showPassSentModal } from "../signals/showPassSentModal"

const PassChangeSent: React.FC<{}> = () => {
    const handleCloseClick = () => {
        showPassSentModal.value = false
    }

    return (
        <Dialog
            onClose={handleCloseClick}
            open={showPassSentModal.value}
            className="w-screen h-full absolute top-0 left-0 flex justify-center items-center"
        >
            <Box className="flex flex-col justify-center items-center p-6 gap-y-4 bg-[#081f4b]">
                <Image src={success} width={72} height={72} alt="success" />
                <div className="mt-[22px]">
                    <div className="text-[#f4f4f9] text-center">
                        We've sent you an email to edit your password. Please
                        check your inbox.
                    </div>
                </div>
                <Button
                    variant="contained"
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
        </Dialog>
    )
}

export default PassChangeSent
