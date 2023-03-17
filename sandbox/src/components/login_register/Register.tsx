import { useState, useRef } from "react"
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import TextField from "@mui/material/TextField"
import { setToken } from "../../api/auth/js-cookie"
import { Button } from "@mui/material"

type Inputs = {
    email: string
    username: string
    password: string
    passwordConfirm: string
}

export default function SignUp() {
    const [show, setShow] = useState(false)
    const [serverError, setServerError] = useState("")

    const {
        control,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm({
        defaultValues: {
            email: "",
            username: "",
            password: "",
            passwordConfirm: ""
        }
    })

    const password = useRef({})
    password.current = watch("password", "")

    const registerUser: SubmitHandler<Inputs> = async (data: Inputs) => {
        try {
            const submitData = await fetch(
                `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local/register`,
                {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify({
                        password: data.password,
                        email: data.email,
                        username: data.username
                    })
                }
            )
            const res = await (submitData as Response).json()

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
            <div className="text-[22px] text-[#c1c1c1]">
                Create your account
            </div>
            <div className="text-[#c1c1c1]">
                Enter your desired username and password
            </div>
            <Controller
                control={control}
                name="email"
                rules={{ required: true }}
                render={({ field: { onChange, value, ref } }) => (
                    <TextField
                        fullWidth
                        inputRef={ref}
                        label="Email"
                        type="email"
                        value={value}
                        onChange={onChange}
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
                    />
                )}
            />
            <Controller
                control={control}
                name="username"
                rules={{ required: true }}
                render={({ field: { onChange, value, ref } }) => (
                    <TextField
                        fullWidth
                        inputRef={ref}
                        label="Username"
                        type="text"
                        value={value}
                        onChange={onChange}
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
                    />
                )}
            />
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
                    />
                )}
            />
            {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}

            {show ? (
                <span className="w-full text-center text-red-900 border-[1px] border-red-900 rounded py-2">
                    {serverError}
                </span>
            ) : null}
            <Button
                variant="contained"
                className="w-full"
                sx={{ paddingY: "10px !important" }}
                onClick={handleSubmit(registerUser)}
            >
                Sign in
            </Button>
        </>
    )
}
