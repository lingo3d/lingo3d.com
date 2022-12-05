import React from "react"
import { useState } from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import GoogleIcon from "@mui/icons-material/Google"
import { signIn as googleSignIn } from "next-auth/react"
import { setToken } from "../../pages/api/auth/js-cookie"

const Login: React.FC<{ setDisplayRegister: (display: boolean) => void }> = ({
    setDisplayRegister
}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)
    const [serverError, setServerError] = useState("")

    async function loginUser() {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local`,
            {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({
                    password: password,
                    identifier: username
                })
            }
        )
        const data = await res.json()

        if (data.error) {
            setShow(true)
            setServerError(data.error.message)
            return
        }

        setToken(data)
    }

    return (
        <>
            <div className="text-[22px]">Welcome</div>
            <div>Log in so you can participate in the forum</div>
            <TextField
                fullWidth
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                label="Username"
            />
            <TextField
                fullWidth
                required
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {show ? (
                <span className="w-full text-center text-red-900 border-[1px] border-red-900 rounded py-2">
                    {serverError}
                </span>
            ) : null}
            <div className="w-full text-[#293ab9] cursor-pointer">
                Forgot password?
            </div>

            <Button
                fullWidth
                onClick={() => loginUser()}
                sx={{
                    background: "#293ab9",
                    color: "#F4F4F9",
                    paddingLeft: "16px",
                    paddingRight: "16px"
                }}
            >
                LOG IN
            </Button>
            <div className="w-full">
                Don't have an account?{" "}
                <span
                    onClick={() => setDisplayRegister(true)}
                    className="pointer-cursor text-[#293ab9] font-bold cursor-pointer"
                >
                    Sign up
                </span>
            </div>
            {/* <div className="w-full flex items-center">
                <div className="flex-1 bg-gray-300 h-0.5"></div>
                <div className="text-center mx-5 ">OR</div>
                <div className="flex-1 bg-gray-300 h-0.5"></div>
            </div>
            <Box
                onClick={() => googleSignIn()}
                className="w-full flex border-[rgba(0,0,0,0.60)] border-solid border-[0.5px] py-1 px-2 rounded cursor-pointer"
            >
                <GoogleIcon />
                <div className="flex-1 text-center">Continue with Google</div>
            </Box> */}
        </>
    )
}

export default Login
