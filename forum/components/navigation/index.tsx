import { useState, useEffect } from "react"
import AppBar from "./AppBar"
import Dialog from "./Dialog"
import { useWidth } from "../../hooks/useWindowWidth"

type NavProps = {
    scroll: number
}

const Navigation = () => {
    const windowWidth = useWidth()
    const [scroll, setScroll] = useState(0)

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
    )
}

export default Navigation
