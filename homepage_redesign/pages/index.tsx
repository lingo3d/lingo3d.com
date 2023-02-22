import Navigation from "@/layouts/navigation/index"
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
    const [activateText, setActivateText] = useState<"off" | "on">("off")

    const [dispayOverlay, setDisplayOverlay] = useState<string | number>("auto")
    const [opacityLevel, setOpacityLevel] = useState<number>(0)

    const [offsetTop, setOffsetTop] = useState<string | null>(null)

    const footerRef = useRef<HTMLElement | null>(null)

    const [scroll, setScroll] = useState(0)

    useEffect(() => {
        if (!footerRef.current) return

        window.addEventListener("scroll", () => {
            setScroll(window.scrollY)

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
            <motion.div
                initial={{ y: 40 }}
                animate={{ y: 0 }}
                transition={{
                    duration: 0.8,
                    delay: 0.2
                }}
            >
                <Navigation scroll={scroll} />
            </motion.div>
            {/* <VideoSection /> */}
            <section className="relative h-screen z-10">
                <motion.div
                    initial={{ y: 40 }}
                    animate={{ y: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2
                    }}
                >
                    <h1
                        className="absolute text-white z-30 top-1/4 font-[100] px-4 leading-[42px] text-[40px]
                        md:top-[205px] md:px-10 md:text-[90px] md:leading-[105px]
                        lg:top-[250px] lg:pl-10 lg:px-16 lg:ml-4 
                        2xl:top-[40%] 
                        xl:top-[150px] xl:ml-20 xl:w-[80%]"
                    >
                        We help ambitious companies scale up at every stage of
                        growth
                    </h1>
                </motion.div>

                <div
                    className="relative top-0 left-0 w-full h-screen"
                    id="video-container"
                >
                    <video
                        muted
                        playsInline
                        loop
                        autoPlay
                        className="h-full w-full object-cover opacity-50"
                        src="software.mp4"
                    />
                </div>
            </section>
            <motion.div
                initial={{ y: 40 }}
                animate={{ y: 0 }}
                transition={{
                    duration: 0.8,
                    delay: 0.2
                }}
            >
                <CarouselSection />
            </motion.div>

            <section>
                <div className="h-[4700px] relative">
                    <div
                        className="bg-slate-700 mt-[500px] md:mt-[800px] lg:mt-[900px]  pt-[50px] w-full "
                        ref={setEl}
                    >
                        <TextOverlay
                            displayText={displayText}
                            activateText={activateText}
                        />
                        <ParallaxBlackOverlay
                            opacityLevel={opacityLevel}
                            dispayOverlay={dispayOverlay}
                        />
                        <video
                            muted
                            playsInline
                            loop
                            autoPlay
                            style={{
                                objectFit: "cover",
                                transform: `scale(${scrollNormalized})`,
                                width: "100%",
                                height: status === "after" ? "100%" : "100vh",
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

            <footer ref={footerRef} className="z-[999] w-full bg-gray-500">
                <section className="w-full h-full flex justify-center items-center relative">
                    <div className="upperColor absolute top-0 w-full h-[50%] bg-[#e5e5e5]" />
                    <div className="bottomColor absolute bottom-0 w-full h-[50%] bg-[#434343]" />
                    <div className="image-container w-full h-[470px] md:h-[387px] lg:h-[591px] mx-[35px] lg:mx-[90px] 2xl:mx-[225px]  my-[115px] bg-[#969696] z-[100]">
                        <picture className="w-full h-full">
                            <source
                                media="(min-width: 768px)"
                                srcSet="/brands_horizontal.png"
                                className="w-full h-full"
                            />
                            <img
                                src="/brands_vertical.png"
                                alt="Logo"
                                className="w-full h-full"
                            />
                        </picture>
                    </div>
                </section>
                <section className="icp-section h-[50px] bg-[#434343] px-2 md:px-4 lg:px-6">
                    <div className="h-full flex justify-between items-center text-white text-sm borderTop font-[500]">
                        <div className="text-[12px]">
                            上海薛来网络科技有限公司
                        </div>

                        <div>
                            <a
                                href="https://beian.miit.gov.cn/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-[12px]"
                            >
                                沪ICP备19039915号-1
                            </a>
                        </div>
                    </div>
                </section>
            </footer>
        </main>
    )
}
