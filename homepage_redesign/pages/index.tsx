import { useState } from "react"
import MotionAnimation from "@/components/MotionAnimation"
import Navigation from "@/layouts/navigation/index"
import HeroVideo from "@/components/HeroVideo"
import HeroTitle from "@/components/HeroTitle"
import CarouselSection from "@/components/CarouselSection"
import Parallax from "@/components/Parallax"
import Partners from "@/components/Partners"
import Icp from "@/components/Icp"
import { useParallax } from "@/hooks/useParallax"

export default function Home() {
    const [footer, setFooter] = useState<HTMLElement | null>(null)

    const {
        el,
        status,
        displayText,
        activateText,
        opacityLevel,
        dispayOverlay,
        scrollNormalized,
        elVideo
    } = useParallax(footer)

    return (
        <main className="relative">
            <HeroVideo />
            <MotionAnimation>
                <Navigation />
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
            <footer ref={setFooter} className="z-[999] w-full bg-gray-500">
                <Partners />
                <Icp />
            </footer>
        </main>
    )
}
