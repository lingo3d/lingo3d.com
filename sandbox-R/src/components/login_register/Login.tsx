import React from "react"
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { useState } from "react"
import TextField from "@mui/material/TextField"
import { setToken } from "../../api/auth/js-cookie"

type Inputs = {
    username: string
    password: string
}

const Login: React.FC<{ setDisplayRegister: (display: boolean) => void }> = ({ setDisplayRegister }) => {
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
            const submitData = await fetch(`http://localhost:1337/api/auth/local`, {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({
                    password: data.password,
                    identifier: data.username
                })
            })

            const res = await submitData.json()
            if (res.error) {
                setShow(true)
                setServerError(res.error.message)
                return
            }
            setToken(res)
        } catch (error) {
            alert("There was an error connecting to the server. Please try again later.")
            console.log(error)
        }
    }

    return (
        <>
            <div className="text-[22px]">Welcome</div>
            <div>Log in so you can participate in the forum</div>
            <Controller
                control={control}
                name="username"
                rules={{ required: true }}
                render={({ field: { onChange, value, ref } }) => (
                    <TextField fullWidth inputRef={ref} value={value} onChange={onChange} label="Username" error={!!errors.username} />
                )}
            />
            {errors.username && <span>{errors.username.message}</span>}
            <Controller
                control={control}
                name="password"
                rules={{ required: true, minLength: 6 }}
                render={({ field: { onChange, value, ref } }) => (
                    <TextField fullWidth inputRef={ref} label="Password" type="password" value={value} onChange={onChange} error={!!errors.password} />
                )}
            />
            {errors.password && errors.password.type === "minLength" && <span>Minimum password length is 6 charachters</span>}
            {show ? <span className="w-full text-center text-red-900 border-[1px] border-red-900 rounded py-2">{serverError}</span> : null}
            <div className="w-full text-[#293ab9] cursor-pointer">Forgot password?</div>

            <button className="bg-[#293ab9] text-[#F4F4F9] px-4 py-3 w-full rounded" onClick={handleSubmit(loginUser)}>
                LOG IN
            </button>
            <div className="w-full">
                Don't have an account?{" "}
                <span onClick={() => setDisplayRegister(true)} className="pointer-cursor text-[#293ab9] font-semibold underline cursor-pointer">
                    Sign up
                </span>
            </div>
        </>
    )
}

export default Login
