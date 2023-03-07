import { useState, useEffect } from "react"
import { useWindowWidth } from "@react-hook/window-size"
import LeftDrawer from "./LeftDrawer"
import Sidebar from "./Sidebar"

const SideNav = () => {
    const [windowWidth, setWindowWidth] = useState<number | null>(null)
    const width = useWindowWidth()

    useEffect(() => {
        setWindowWidth(width)
    }, [width])

    return <>{windowWidth! > 629 ? <Sidebar /> : <LeftDrawer />}</>
}

export default SideNav
