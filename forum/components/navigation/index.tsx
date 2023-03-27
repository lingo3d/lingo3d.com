import { useState, useEffect } from "react"
import AppBar from "./AppBar"
import Dialog from "./Dialog"
import { useWidth } from "../../hooks/useWindowWidth"
import { useRouter } from "next/router"

type NavProps = {
    scroll: number
}

const Navigation = () => {
    const windowWidth = useWidth()
    const [scroll, setScroll] = useState(0)

    const router = useRouter()
    const isResetPasswordPage = router.pathname === "/reset-password"

    useEffect(() => {
        const cb = () => {
            setScroll(window.scrollY)
        }
        window.addEventListener("scroll", cb)
        return () => {
            window.removeEventListener("scroll", cb)
        }
    }, [])

    return (
        <>
            {isResetPasswordPage ? null : (
                <div
                    style={{
                        height: "0px",
                        opacity: scroll >= 2000 && scroll <= 4500 ? 0 : 1,
                        transition: "opacity 0.2s ease-in-out",
                        zIndex: 1000
                    }}
                >
                    {windowWidth! > 629 ? <AppBar /> : <Dialog />}
                </div>
            )}
        </>
    )
}

export default Navigation
