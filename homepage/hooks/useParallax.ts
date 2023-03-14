import { useState, useEffect } from "react"
import mapRange from "@/utils/mapRange"
import useScroll from "@/utils/useScroll"
import useBounds from "@/utils/useBounds"
import useBoundsVideo from "@/utils/useBoundsVideo"

export const useParallax = (footer: HTMLElement | null) => {
    const scrollY = useScroll()
    const [bounds, el] = useBounds()
    const [elVideo, boundsVideo] = useBoundsVideo()

    const [parallaxStartY, setParallaxStartY] = useState<number | undefined>(
        undefined
    )
    const [status, setStatus] = useState<"before" | "started" | "after">(
        "before"
    )
    const [displayText, setDisplayText] = useState<"off" | "on">("off")
    const [activateText, setActivateText] = useState<"off" | "on">("off")
    const [zIndexOverlay, setZIndexOverlay] = useState<string | number>("auto")
    const [opacityLevel, setOpacityLevel] = useState<number>(0)
    const [displayOverlay, setDisplayOverlay] = useState<string>("none")

    useEffect(() => {
        if (!footer) return

        const handleScroll = () => {
            const windowHeight = window.innerHeight
            const footerTop =
                footer.getBoundingClientRect().top + window.scrollY
            const transitionStart = footerTop - windowHeight
            const videoElTop: number | undefined = boundsVideo?.top

            if (videoElTop! <= window.scrollY) {
                setParallaxStartY(window.scrollY - 100)
                setStatus("started")
            }

            if (window.scrollY <= parallaxStartY!) {
                setStatus("before")
            }

            if (window.scrollY >= transitionStart) {
                setStatus("after")
            }

            if (window.scrollY > 1500 && window.scrollY < 4500) {
                setActivateText("on")
            } else {
                setActivateText("off")
            }

            if (window.scrollY > 2000 && window.scrollY < 3000) {
                setDisplayText("on")
            } else {
                setDisplayText("off")
            }

            if (window.scrollY >= 0 && window.scrollY <= 1450) {
                setDisplayOverlay("none")
            } else {
                setDisplayOverlay("block")
            }

            if (window.scrollY >= 1650 && window.scrollY <= 2000) {
                setOpacityLevel(((window.scrollY - 1650) / 600) * 0.8)
                setZIndexOverlay(890)
            } else if (window.scrollY >= 4000 && window.scrollY <= 4500) {
                setOpacityLevel(((4500 - window.scrollY) / 600) * 0.8)
            }

            if (window.scrollY > 2300 && window.scrollY < 3700) {
                setDisplayText("on")
            } else {
                setDisplayText("off")
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [footer, boundsVideo, parallaxStartY])

    return {
        el,
        status,
        displayText,
        activateText,
        opacityLevel,
        zIndexOverlay,
        displayOverlay,
        scrollNormalized: mapRange(
            scrollY + 80,
            bounds?.top ?? 0,
            bounds?.bottom ?? 1,
            0.75,
            1,
            true
        ),
        elVideo
    }
}
