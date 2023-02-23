import { useEffect, useRef, useState } from "react"

const useBounds = () => {
    const el = useRef<HTMLDivElement | null>(null)
    const [bounds, setBounds] = useState<DOMRect>()

    useEffect(() => {
        if (!el.current) return
        setBounds(el?.current.getBoundingClientRect())

        const cb = () => {
            setBounds(el?.current!.getBoundingClientRect())
        }
        window.addEventListener("resize", cb)
        return () => {
            window.removeEventListener("resize", cb)
        }
    }, [el])

    return [bounds, el] as const
}

export default useBounds
