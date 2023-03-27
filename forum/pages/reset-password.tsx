import { useState, useRef } from "react"
import { NextPage, GetStaticProps } from "next"
import Image from "next/image"
import { useRouter } from "next/router"
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { Box, TextField, Button } from "@mui/material"
import logoSignup from "../public/logo_blue2_signup.png"

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
        console.log(data)
        console.log(router.query.code)
        // try {
        //     const submitData = await fetch(
        //         `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local/register`,
        //         {
        //             headers: {
        //                 "Content-Type": "application/json"
        //             },
        //             method: "POST",
        //             body: JSON.stringify({
        //                 password: data.password,
        //             })
        //         }
        //     )

        //     const res = await submitData.json()

        //     if (res.error) {
        //         setShow(true)
        //         setServerError(res.error.message)
        //         return
        //     }

        //     setToken(res)
        // } catch (error) {
        //     console.log(error)
        //     alert(
        //         "There was an error connecting to the server. Please try again later."
        //     )
        // }
    }

    return (
        <Box className="h-screen flex flex-col justify-start items-center">
            <Box className="w-full max-w-[650px] flex flex-col justify-center items-center bg-[#081f4b] p-6 mt-[25px] gap-y-2">
                <Image src={logoSignup} width={120} height={22} alt="logo" />
                <div className="text-[22px] text-[#f4f4f9] mt-[15px]">
                    Reset your password
                </div>
                <div className="text-[#f4f4f9] w-full text-start mt-[15px]">
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
                    <span>Minimum password length is 6 charachters</span>
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
                    <p>{errors.passwordConfirm.message}</p>
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
