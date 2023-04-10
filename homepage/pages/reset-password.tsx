import { useState, useRef } from "react"
import { NextPage } from "next"
import Image from "next/image"
import { useRouter } from "next/router"
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { Box, TextField, Button } from "@mui/material"
import logoSignup from "../public/logo_blue2_signup.png"
import { showPassChangedModal } from "../signals/showPassChangedModal"

type Inputs = {
    password: string
    passwordConfirm: string
}

const NewPassword: NextPage<{}> = () => {
    const [show, setShow] = useState(false)
    const [serverError, setServerError] = useState("")

    const router = useRouter()

    const {
        control,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm({
        defaultValues: {
            password: "",
            passwordConfirm: ""
        }
    })

    const password = useRef({})
    password.current = watch("password", "")

    const changePassword: SubmitHandler<Inputs> = async (data: Inputs) => {
        try {
            const submitData = await fetch(
                `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/reset-password`,
                {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify({
                        code: router.query.code,
                        password: data.password,
                        passwordConfirmation: data.passwordConfirm
                    })
                }
            )

            const res = await submitData.json()
            if (res.error) {
                setShow(true)
                setServerError(res.error.message)
                return
            }

            showPassChangedModal.value = true
            return
        } catch (error) {
            console.log(error)
            alert(
                "There was an error connecting to the server. Please try again later."
            )
        }
    }

    return (
        <Box className="w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center">
            <Box className="max-w-[600px] max-h-[355px] flex flex-col justify-center items-center bg-[#081f4b] p-[25px] mt-[25px]">
                <Image src={logoSignup} width={120} height={22} alt="logo" />
                <div className="text-[22px] text-[#f4f4f9] mt-[15px]">
                    Reset your password
                </div>
                <div className="text-[#f4f4f9] text-[16px] w-full text-start mt-[15px]">
                    Enter your desired username and password
                </div>
                <Controller
                    control={control}
                    name="password"
                    rules={{ required: true, minLength: 6 }}
                    render={({ field: { onChange, value, ref } }) => (
                        <TextField
                            fullWidth
                            inputRef={ref}
                            label="Password"
                            type="password"
                            value={value}
                            onChange={onChange}
                            error={!!errors.password}
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
                {errors.password && errors.password.type === "minLength" && (
                    <span className="text-[#d32f2f]">
                        Minimum password length is 6 charachters
                    </span>
                )}
                <Controller
                    control={control}
                    name="passwordConfirm"
                    rules={{
                        required: true,
                        minLength: 6,
                        validate: (val: string) => {
                            if (watch("password") != val) {
                                return (
                                    val === password.current ||
                                    "Passwords do not match"
                                )
                            }
                        }
                    }}
                    render={({ field: { onChange, value, ref } }) => (
                        <TextField
                            fullWidth
                            inputRef={ref}
                            label="Confirm password"
                            type="password"
                            value={value}
                            onChange={onChange}
                            error={!!errors.passwordConfirm}
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
                {errors.passwordConfirm && (
                    <p className="text-[#d32f2f]">
                        {errors.passwordConfirm.message}
                    </p>
                )}

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
                        marginTop: "10px",
                        background: "#86a1d8 !important",
                        color: "#f4f4f9"
                    }}
                    onClick={handleSubmit(changePassword)}
                >
                    Reset Password
                </Button>
            </Box>
        </Box>
    )
}

export default NewPassword
