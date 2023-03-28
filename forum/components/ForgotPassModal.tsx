import React from "react"
import { Dialog, Button, TextField, Box } from "@mui/material"
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { useState } from "react"
import { showForgotPassModal } from "../signals/showForgotPassModal"
import Image from "next/image"
import padlock from "../public/padlock_2.png"

type Inputs = {
    email: string
}

const ForgotPassModal: React.FC<{}> = () => {
    const [show, setShow] = useState(false)
    const [serverError, setServerError] = useState("")

    const handleCloseClick = (e: any) => {
        e.preventDefault()
        showForgotPassModal.value = false
    }

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            email: ""
        }
    })

    const resetPassword: SubmitHandler<Inputs> = async (data: Inputs) => {
        try {
            const submitData = await fetch(
                `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/forgot-password`,
                {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify({
                        email: data.email
                    })
                }
            )
            const res = await submitData.json()
            console.log(
                JSON.stringify({
                    email: data.email
                })
            )
            console.log(res)

            if (res.error) {
                setShow(true)
                setServerError(res.error.message)
                return
            }
        } catch (error) {
            alert(
                "There was an error connecting to the server. Please try again later."
            )
            console.log(error)
        }
    }

    return (
        <Dialog
            onClose={handleCloseClick}
            open={showForgotPassModal.value}
            className="w-screen h-full absolute top-0 left-0 flex justify-center items-center"
        >
            <Box className="flex flex-col justify-center items-center p-6 gap-y-4 bg-[#081f4b]">
                <Image src={padlock} width={72} height={72} alt="padlock" />
                <div className="text-[#f4f4f9] font-semibold">
                    Trouble logging in?
                </div>
                <div>
                    <div className="text-[#f4f4f9] text-center">
                        Enter your email and we'll send
                    </div>
                    <div className="text-[#f4f4f9] text-center">
                        you a link to get back into your account
                    </div>
                </div>

                <Controller
                    control={control}
                    name="email"
                    rules={{ required: true }}
                    render={({ field: { onChange, value, ref } }) => (
                        <TextField
                            fullWidth
                            inputRef={ref}
                            value={value}
                            onChange={onChange}
                            label="email"
                            error={!!errors.email}
                            variant="standard"
                            sx={{
                                "& .MuiInput-underline:before": {
                                    borderBottomColor: "#f4f4f9 !important"
                                },
                                "&:hover .MuiInput-underline:before": {
                                    borderBottomColor: "#f4f4f9 !important"
                                },
                                "&.Mui-focused .MuiInput-underline:before": {
                                    borderBottomColor: "#f4f4f9 !important"
                                },
                                "& .MuiInputBase-input": {
                                    paddingBottom: "8px !important"
                                }
                            }}
                            InputLabelProps={{
                                sx: {
                                    color: "#86a1d8"
                                }
                            }}
                            InputProps={{
                                sx: {
                                    color: "#86a1d8"
                                }
                            }}
                        />
                    )}
                />
                {errors.email && <span>{errors.email.message}</span>}

                {show ? (
                    <span className="w-full text-center text-red-900 border-[1px] border-red-900 rounded py-2">
                        {serverError}
                    </span>
                ) : null}

                <Button
                    variant="contained"
                    fullWidth
                    sx={{
                        paddingY: "10px !important",
                        background: "#86a1d8 !important",
                        color: "#f4f4f9"
                    }}
                    onClick={handleSubmit(resetPassword)}
                >
                    Sent
                </Button>
            </Box>
        </Dialog>
    )
}

export default ForgotPassModal
