import Navigation from "@/layouts/Navigation/index"
import VideoSection from "@/components/VideoSection"
import CarouselSection from "@/components/CarouselSection"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

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

    console.log(scrollNormalized)

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
                <div
                    className="bg-slate-700 mt-[500px] md:mt-[800px] lg:mt-[900px] h-[700px]"
                    ref={setEl}
                >
                    <div
                        className="w-full h-full bg-yellow-600"
                        style={{ transform: `scale(${scrollNormalized})` }}
                    ></div>
                </div>
            </section>
        </main>
    )
}
