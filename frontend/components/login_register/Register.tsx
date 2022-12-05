import { useState } from "react"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { setToken } from "../../pages/api/auth/js-cookie"

export default function SignUp() {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")

    const [passwordConfirmError, setPasswordConfirmError] = useState(false)
    const [show, setShow] = useState(false)
    const [serverError, setServerError] = useState("")

    async function registerUser() {
        if (password !== passwordConfirm) setPasswordConfirmError(true)

        const res = await fetch(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local/register`,
            {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({
                    password: password,
                    email: email,
                    username: username
                })
            }
        ).catch((err) => console.log(err))

        //@ts-ignore
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
            <div className="text-[22px]">Create your account</div>
            <div>Enter your desired username and password</div>
            <TextField
                fullWidth
                required
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                fullWidth
                required
                label="Username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
                fullWidth
                required
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
                fullWidth
                required
                label="Confirm password"
                type="password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                error={passwordConfirmError}
                helperText={passwordConfirmError && `Password does not match`}
            />
            {show ? (
                <span className="w-full text-center text-red-900 border-[1px] border-red-900 rounded py-2">
                    {serverError}
                </span>
            ) : null}
            <Button
                onClick={() => registerUser()}
                fullWidth
                sx={{
                    background: "#293ab9",
                    color: "#F4F4F9",
                    paddingLeft: "16px",
                    paddingRight: "16px"
                }}
            >
                SIGN UP
            </Button>
        </>
    )
}
