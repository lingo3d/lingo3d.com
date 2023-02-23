import { useEffect, useState, useRef } from "react"
import MotionAnimation from "@/components/MotionAnimation"
import Navigation from "@/layouts/navigation/index"
import HeroVideo from "@/components/HeroVideo"
import HeroTitle from "@/components/HeroTitle"
import CarouselSection from "@/components/CarouselSection"
import Parallax from "@/components/Parallax"
import mapRange from "@/utils/mapRange"
import useScroll from "@/utils/useScroll"
import useBounds from "@/utils/useBounds"
import useBoundsVideo from "@/utils/useBoundsVideo"
import Partners from "@/layouts/footer/Partners"
import Icp from "@/layouts/footer/Icp"

export default function Home() {
    const scrollY = useScroll()
    const [bounds, el] = useBounds()
    const footerRef = useRef<HTMLElement | null>(null)

    const top = bounds?.top ?? 0
    const bottom = bounds?.bottom ?? 1
    const scrollNormalized = mapRange(scrollY + 80, top, bottom, 0.75, 1, true)

    const [elVideo, boundsVideo] = useBoundsVideo()

    const [parallaxStartY, setParallaxStartY] = useState<number | undefined>(
        undefined
    )
    const [status, setStatus] = useState<"before" | "started" | "after">(
        "before"
    )
    const [displayText, setDisplayText] = useState<"off" | "on">("off")
    const [activateText, setActivateText] = useState<"off" | "on">("off")
    const [dispayOverlay, setDisplayOverlay] = useState<string | number>("auto")
    const [opacityLevel, setOpacityLevel] = useState<number>(0)
    const [scroll, setScroll] = useState(0)

    useEffect(() => {
        if (!footerRef.current) return

        window.addEventListener("scroll", () => {
            setScroll(window.scrollY)

            const windowHeight = window.innerHeight
            const footerTop =
                footerRef?.current!.getBoundingClientRect().top + window.scrollY
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

            if (window.scrollY >= 1650 && window.scrollY <= 2000) {
                setOpacityLevel(((window.scrollY - 1650) / 600) * 0.8)
                setDisplayOverlay(890)
            } else if (window.scrollY >= 4000 && window.scrollY <= 4500) {
                setOpacityLevel(((4500 - window.scrollY) / 600) * 0.8)
            }

            if (window.scrollY > 2300 && window.scrollY < 3700) {
                setDisplayText("on")
            } else {
                setDisplayText("off")
            }
        })
    })

    return (
        <main className="relative">
            <HeroVideo />
            <MotionAnimation>
                <Navigation scroll={scroll} />
                <HeroTitle />
                <CarouselSection />
            </MotionAnimation>
            <Parallax
                el={el}
                status={status}
                displayText={displayText}
                activateText={activateText}
                opacityLevel={opacityLevel}
                dispayOverlay={dispayOverlay}
                scrollNormalized={scrollNormalized}
                elVideo={elVideo}
            />
            <footer ref={footerRef} className="z-[999] w-full bg-gray-500">
                <Partners />
                <Icp />
            </footer>
        </main>
    )
}
