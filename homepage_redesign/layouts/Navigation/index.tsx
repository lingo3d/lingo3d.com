import { useState, useEffect } from "react"
import { useWindowWidth } from "@react-hook/window-size"
import AppBar from "@/layouts/Navigation/AppBar"
import Dialog from "@/layouts/Navigation/Dialog"

const Navigation = () => {
    const [windowWidth, setWindowWidth] = useState<number | null>(null)
    const width = useWindowWidth()

    useEffect(() => {
        setWindowWidth(width)
    }, [width])

    return <>{windowWidth! > 629 ? <AppBar /> : <Dialog />}</>
}

export default Navigation
