import { useState, useEffect, useLayoutEffect } from "react"
import { useWindowWidth } from "@react-hook/window-size"

export const useWidth = () => {
    const width = useWindowWidth()
    const [windowWidth, setWindowWidth] = useState<number | null>(null)

    useLayoutEffect(() => {
        setWindowWidth(width)
    }, [])

    return windowWidth
}
