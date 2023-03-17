import React from "react"
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { useState } from "react"
import TextField from "@mui/material/TextField"
import { setToken } from "../../api/auth/js-cookie"
import { Button } from "@mui/material"

type Inputs = {
    username: string
    password: string
}

const Login: React.FC<{ setDisplayRegister: (display: boolean) => void }> = ({
    setDisplayRegister
}) => {
    const [show, setShow] = useState(false)
    const [serverError, setServerError] = useState("")

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            username: "",
            password: ""
        }
    })

    const loginUser: SubmitHandler<Inputs> = async (data: Inputs) => {
        try {
            const submitData = await fetch(
                `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local`,
                {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify({
                        password: data.password,
                        identifier: data.username
                    })
                }
            )

            const res = await submitData.json()
            if (res.error) {
                setShow(true)
                setServerError(res.error.message)
                return
            }
            setToken(res)
        } catch (error) {
            alert(
                "There was an error connecting to the server. Please try again later."
            )
            console.log(error)
        }
    }

    return (
        <>
            <div className="text-[22px] text-[#c1c1c1]">Welcome</div>
            <div className="text-[#c1c1c1]">
                Log in so you can participate in the forum
            </div>
            <Controller
                control={control}
                name="username"
                rules={{ required: true }}
                render={({ field: { onChange, value, ref } }) => (
                    <TextField
                        fullWidth
                        inputRef={ref}
                        value={value}
                        onChange={onChange}
                        label="Username"
                        error={!!errors.username}
                        variant="standard"
                        sx={{
                            "& .MuiInput-underline:before": {
                                borderBottomColor: "#c1c1c1 !important"
                            },
                            "&:hover .MuiInput-underline:before": {
                                borderBottomColor: "#c1c1c1 !important"
                            },
                            "&.Mui-focused .MuiInput-underline:before": {
                                borderBottomColor: "#c1c1c1 !important"
                            },
                            "& .MuiInputBase-input": {
                                paddingBottom: "8px !important"
                            }
                        }}
                        InputLabelProps={{
                            sx: {
                                color: "#c1c1c1"
                            }
                        }}
                        InputProps={{
                            sx: {
                                color: "#c1c1c1"
                            }
                        }}
                        // sx={{
                        //     background: "#343740",
                        //     border: "none",
                        //     borderRadius: "4px",
                        //     "&:hover": {
                        //         borderColor: "#c1c1c1 !important"
                        //     },
                        //     "&:hover .MuiOutlinedInput-notchedOutline": {
                        //         borderColor: "#c1c1c1 !important",
                        //         borderWidth: "1px !important",
                        //         borderStyle: "solid !important"
                        //     }
                        // }}
                        // InputLabelProps={{
                        //     sx: {
                        //         color: "#c1c1c1"
                        //     }
                        // }}
                        // InputProps={{
                        //     sx: {
                        //         color: "#c1c1c1"
                        //     }
                        // }}
                    />
                )}
            />
            {errors.username && <span>{errors.username.message}</span>}
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
                                borderBottomColor: "#c1c1c1 !important"
                            },
                            "&:hover .MuiInput-underline:before": {
                                borderBottomColor: "#c1c1c1 !important"
                            },
                            "&.Mui-focused .MuiInput-underline:before": {
                                borderBottomColor: "#c1c1c1 !important"
                            },
                            "& .MuiInputBase-input": {
                                paddingBottom: "8px !important"
                            }
                        }}
                        InputLabelProps={{
                            sx: {
                                color: "#c1c1c1"
                            }
                        }}
                        InputProps={{
                            sx: {
                                color: "#c1c1c1"
                            }
                        }}
                        // sx={{
                        //     background: "#343740",
                        //     border: "none",
                        //     borderRadius: "4px",
                        //     "&:hover": {
                        //         borderColor: "#c1c1c1 !important"
                        //     },
                        //     "&:hover .MuiOutlinedInput-notchedOutline": {
                        //         borderColor: "#c1c1c1 !important",
                        //         borderWidth: "1px !important",
                        //         borderStyle: "solid !important"
                        //     }
                        // }}
                        // InputLabelProps={{
                        //     sx: {
                        //         color: "#c1c1c1"
                        //     }
                        // }}
                        // InputProps={{
                        //     sx: {
                        //         color: "#c1c1c1"
                        //     }
                        // }}
                    />
                )}
            />
            {errors.password && errors.password.type === "minLength" && (
                <span>Minimum password length is 6 charachters</span>
            )}
            {show ? (
                <span className="w-full text-center text-red-900 border-[1px] border-red-900 rounded py-2">
                    {serverError}
                </span>
            ) : null}
            <div className="w-full text-[#1876d1] cursor-pointer">
                Forgot password?
            </div>

            <Button
                variant="contained"
                className="w-full"
                sx={{ paddingY: "10px !important" }}
                onClick={handleSubmit(loginUser)}
            >
                Log in
            </Button>
            <div className="w-full">
                <span className="text-[#c1c1c1]">
                    Don't have an account? &nbsp;
                </span>

                <span
                    onClick={() => setDisplayRegister(true)}
                    className="pointer-cursor text-[#1876d1] underline cursor-pointer"
                >
                    Sign up
                </span>
            </div>
        </>
    )
}

export default Login
