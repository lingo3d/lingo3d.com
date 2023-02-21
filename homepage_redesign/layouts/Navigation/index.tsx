import { useState, useEffect } from "react"
import { useWindowWidth } from "@react-hook/window-size"
import AppBar from "@/layouts/navigation/AppBar"
import Dialog from "@/layouts/navigation/Dialog"

type NavProps = {
    scroll: number
}

const Navigation = ({ scroll }: NavProps) => {
    const [windowWidth, setWindowWidth] = useState<number | null>(null)
    const width = useWindowWidth()

    useEffect(() => {
        setWindowWidth(width)
    }, [width])

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
