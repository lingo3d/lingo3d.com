import Navigation from "@/layouts/Navigation/index"
import VideoSection from "@/components/VideoSection"
import CarouselSection from "@/components/CarouselSection"
import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"

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

    useEffect(() => {
        window.addEventListener("scroll", () => {
            console.log(scrollY)
            console.log(window.scrollY)

            const videoElTop = boundsVideo?.top
            if (videoElTop <= window.scrollY) {
                setParallaxStartY(window.scrollY - 100)
                setStatus("started")
            }
            if (window.scrollY <= parallaxStartY) {
                setStatus("before")
            }

            if (window.scrollY > 2000 && window.scrollY < 3000) {
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
                <div className="h-[6000px] relative">
                    <div
                        className="bg-slate-700 mt-[500px] md:mt-[800px] lg:mt-[900px] h-[700px] pt-[50px] w-full "
                        ref={setEl}
                    >
                        <div
                            className="transition-all duration-1000 w-[90%]"
                            style={{
                                opacity: displayText === "on" ? 1 : 0,
                                position: "fixed",
                                top: "200px",
                                left: "100px",
                                zIndex: 898
                            }}
                        >
                            <div
                                className="text-4xl lg:text-6xl font-bold text-yellow-300"
                                style={{ fontFamily: "graphie" }}
                            >
                                MindMap
                            </div>
                            <div
                                className="text-white"
                                style={{ fontFamily: "graphie" }}
                            >
                                Don&apos;t know how to code? No problem! Lingo3d
                                empowers your imagination through MindMap: a
                                drag-and-drop tool that lets you build advanced
                                programs with simple logic trees.
                            </div>
                        </div>
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
                                    status === "started" ? "fixed" : "static",
                                top: status === "started" ? 0 : undefined,
                                left: status === "started" ? 0 : undefined,
                                zIndex: status === "started" ? 800 : 799,
                                transition:
                                    status === "started"
                                        ? "all 0.3s ease-in-out"
                                        : undefined
                            }}
                            src="city.mp4"
                            ref={setElVideo}
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}
