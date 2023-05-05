import { useState, useEffect, useLayoutEffect } from "react"
import { useWindowWidth } from "@react-hook/window-size"

export const useWidth = () => {
    const width = useWindowWidth()
    const [windowWidth, setWindowWidth] = useState<number | null>(null)

    useEffect(() => {
        setWindowWidth(width)
    }, [])

    return windowWidth
}

// Warning: useLayoutEffect does nothing on the server, because its effect cannot be encoded
// into the server renderer's output format. This will lead to a mismatch between the initial,
// non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in
// components that render exclusively on the client.
