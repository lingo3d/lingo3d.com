import { useEffect, useState } from "react"
import ShiftingText from "../components/ShiftingText"

const App = () => {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        fetch("bg.jpg").then(() => {
            setTimeout(() => {
                setLoaded(true)
            }, 1000)
        })
    }, [])

    return (
        <div
            className="w-screen h-screen absolute bg-black bg-cover bg-center"
            style={{ backgroundImage: "url(bg.jpg)" }}
        >
            <div
                className="w-full h-full flex flex-col justify-center items-center p-10"
                style={{ background: "rgba(10, 0, 10, 0.75)" }}
            >
                {loaded && (
                    <>
                        <ShiftingText
                            time={40}
                            className="text-4xl font-bold font-mono glow"
                            text="OFFICIAL RELEASE COMING SOON"
                        />
                        <ShiftingText
                            time={50}
                            className="text-base font-mono glow"
                            text="GET READY FOR THE NEXT GENERATION OF 3D EXPERIENCES ON THE WEB"
                        />
                    </>
                )}
            </div>
            <div
                className="w-full h-full absolute left-0 top-0 bg-black transition-opacity duration-1000"
                style={{ opacity: loaded ? 0 : 1 }}
            ></div>
        </div>
    )
}

export default App

// import { useState } from "react"
// import MotionAnimation from "@/components/MotionAnimation"
// import Navigation from "@/layouts/navigation/index"
// import HeroVideo from "@/components/HeroVideo"
// import HeroTitle from "@/components/HeroTitle"
// import CarouselSection from "@/components/CarouselSection"
// import Parallax from "@/components/Parallax"
// import Partners from "@/components/Partners"
// import Icp from "@/components/Icp"
// import { useParallax } from "@/hooks/useParallax"

// export default function Home() {
//     const [footer, setFooter] = useState<HTMLElement | null>(null)
//     const {
//         el,
//         status,
//         displayText,
//         activateText,
//         opacityLevel,
//         zIndexOverlay,
//         displayOverlay,
//         scrollNormalized,
//         elVideo
//     } = useParallax(footer)

//     return (
//         <main className="relative">
//             <HeroVideo />
//             <MotionAnimation>
//                 <Navigation />
//                 <HeroTitle />
//                 <CarouselSection />
//             </MotionAnimation>
//             <Parallax
//                 el={el}
//                 status={status}
//                 displayText={displayText}
//                 activateText={activateText}
//                 opacityLevel={opacityLevel}
//                 zIndexOverlay={zIndexOverlay}
//                 displayOverlay={displayOverlay}
//                 scrollNormalized={scrollNormalized}
//                 elVideo={elVideo}
//             />
//             <footer ref={setFooter} className="z-[999] w-full bg-gray-500">
//                 <Partners />
//                 <Icp />
//             </footer>
//         </main>
//     )
// }
