import { useState, useEffect } from "react"
import { useWindowWidth } from "@react-hook/window-size"

export const useWidth = () => {
    const width = useWindowWidth()
    const [windowWidth, setWindowWidth] = useState<number | null>(null)

    useEffect(() => {
        setWindowWidth(width)
    }, [])

    return windowWidth
}
