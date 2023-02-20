import Navigation from "@/layouts/Navigation/index"
import VideoSection from "@/components/VideoSection"
import CarouselSection from "@/components/CarouselSection"
import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { TextOverlay } from "@/components/TextOverlay"
import ParallaxBlackOverlay from "@/components/ParallaxBlackOverlay"

const useScroll = () => {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const cb = () => {
            setScrollY(window.scrollY + window.innerHeight)
        }
        document.addEventListener("scroll", cb)

        return () => {
            document.removeEventListener("scroll", cb)
        }
    }, [])

    return scrollY
}

const useBounds = () => {
    const [el, setEl] = useState<HTMLDivElement | null>(null)
    const [bounds, setBounds] = useState<DOMRect>()

    useEffect(() => {
        setBounds(el?.getBoundingClientRect())

        const cb = () => {
            setBounds(el?.getBoundingClientRect())
        }
        window.addEventListener("resize", cb)
        return () => {
            window.removeEventListener("resize", cb)
        }
    }, [el])

    return [bounds, setEl] as const
}

const useBoundsVideo = () => {
    const [elVideo, setElVideo] = useState<HTMLVideoElement | null>(null)
    const [boundsVideo, setBoundsVideo] = useState<DOMRect>()

    useEffect(() => {
        setBoundsVideo(elVideo?.getBoundingClientRect())
    }, [elVideo])

    return [setElVideo, boundsVideo, elVideo] as const
}

const mapRange = (
    value: number,
    minFrom: number,
    maxFrom: number,
    minTo: number,
    maxTo: number,
    constrain?: boolean
) => {
    const rangeFrom = maxFrom - minFrom
    const rangeTo = maxTo - minTo
    const result = minTo + ((value - minFrom) / rangeFrom) * rangeTo

    if (!constrain) return result

    let minVal: number
    let maxVal: number
    if (minTo < maxTo) {
        minVal = minTo
        maxVal = maxTo
    } else {
        minVal = maxTo
        maxVal = minTo
    }
    if (result < minVal) return minVal
    if (result > maxVal) return maxVal

    return result
}

export default function Home() {
    const scrollY = useScroll()
    const [bounds, setEl] = useBounds()

    const top = bounds?.top ?? 0
    const bottom = bounds?.bottom ?? 1
    const scrollNormalized = mapRange(scrollY + 80, top, bottom, 0.75, 1, true)

    const [setElVideo, boundsVideo, elVideo] = useBoundsVideo()

    const [parallaxStartY, setParallaxStartY] = useState<number | undefined>(
        undefined
    )
    const [status, setStatus] = useState<"before" | "started" | "after">(
        "before"
    )

    const [displayText, setDisplayText] = useState<"off" | "on">("off")

    const [dispayOverlay, setDisplayOverlay] = useState<string | number>("auto")
    const [opacityLevel, setOpacityLevel] = useState<number>(0)

    const [offsetTop, setOffsetTop] = useState<string | null>(null)

    const footerRef = useRef<HTMLElement | null>(null)

    useEffect(() => {
        if (!footerRef.current) return

        window.addEventListener("scroll", () => {
            const footerOffsetHeight = footerRef?.current.offsetHeight
            const windowHeight = window.innerHeight
            const footerTop =
                footerRef?.current.getBoundingClientRect().top + window.scrollY
            const transitionStart = footerTop - windowHeight

            const videoElTop = boundsVideo?.top
            if (videoElTop <= window.scrollY) {
                setParallaxStartY(window.scrollY - 100)
                setStatus("started")
            }
            if (window.scrollY <= parallaxStartY) {
                setStatus("before")
            }

            if (window.scrollY >= transitionStart) {
                setStatus("after")
                setOffsetTop(`${footerTop} - ${footerOffsetHeight}px`)
            }

            // if (window.scrollY >= 4700) {
            //     setStatus("after")
            // }

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
            <motion.div
                initial={{ y: 80 }}
                animate={{ y: 0 }}
                transition={{
                    duration: 1.3,
                    delay: 0.2
                }}
            >
                <Navigation />
                <VideoSection />
                <CarouselSection />
            </motion.div>

            <section>
                <div className="h-[4700px] relative">
                    <div
                        className="bg-slate-700 mt-[500px] md:mt-[800px] lg:mt-[900px]  pt-[50px] w-full "
                        ref={setEl}
                    >
                        <TextOverlay displayText={displayText} />
                        <ParallaxBlackOverlay
                            opacityLevel={opacityLevel}
                            dispayOverlay={dispayOverlay}
                        />
                        <video
                            muted
                            playsInline
                            loop
                            autoPlay
                            className="h-full w-full object-cover"
                            style={{
                                transform: `scale(${scrollNormalized})`,
                                width:
                                    status === "started" ? "100%" : undefined,
                                height:
                                    status === "started" ? "100vh" : undefined,
                                position:
                                    status === "started"
                                        ? "fixed"
                                        : status === "after"
                                        ? "absolute"
                                        : undefined,
                                top:
                                    status === "started"
                                        ? 0
                                        : status === "after"
                                        ? offsetTop
                                        : undefined,
                                left: status === "started" ? 0 : undefined,
                                zIndex: status === "started" ? 800 : 799,
                                transition:
                                    status === "started"
                                        ? "all 0.3s ease-in-out"
                                        : status === "after"
                                        ? "top 0.5s ease-out"
                                        : undefined
                            }}
                            src="city.mp4"
                            ref={setElVideo}
                        />
                    </div>
                </div>
            </section>
            <footer ref={footerRef} className="z-[999]">
                <section className="bg-red-800">
                    <h1>
                        Hello i am some very long text. Hello i am some very
                        long text. Hello i am some very long text. Hello i am
                        some very long text.
                    </h1>
                    <div className="h-[200px] bg-sky-500" />
                    <h1>
                        Hello i am some very long text. Hello i am some very
                        long text. Hello i am some very long text. Hello i am
                        some very long text.
                    </h1>
                </section>
            </footer>
        </main>
    )
}
