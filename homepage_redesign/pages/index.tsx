import { useEffect, useRef } from "react"
import CarouselCard from "@/components/CarouselCard"

export default function Home() {
    const sliderRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let slider = sliderRef.current
        if (slider) {
            let isDown = false
            let startX
            let scrollLeft

            slider.addEventListener("mousedown", (e) => {
                isDown = true
                slider?.classList.add("active")
                startX = e.pageX - slider?.offsetLeft
                scrollLeft = slider?.scrollLeft
            })

            slider.addEventListener("mouseleave", () => {
                isDown = false
                slider?.classList.remove("active")
            })
            slider.addEventListener("mouseup", () => {
                isDown = false
                slider?.classList.remove("active")
            })
            slider.addEventListener("mousemove", (e) => {
                if (!isDown) return
                e.preventDefault()
                const x = e.pageX - slider.offsetLeft
                const walk = (x - startX) * 3 //scroll-fast
                slider.scrollLeft = scrollLeft - walk
                console.log(walk)
            })
        }
    })

    return (
        <main className="relative h-[4000px] bg-black">
            <section className="relative h-screen z-10">
                <div
                    className="relative top-0 left-0 w-full h-screen"
                    id="video-container"
                >
                    <video
                        muted
                        playsInline
                        loop
                        autoPlay
                        className="h-full w-full object-cover"
                        src="tech.mp4"
                    />
                </div>
            </section>
            <section className="carousel-section relative z-50 w-full">
                <div className="w-full flex justify-center items-center absolute top-[-120px]">
                    <div
                        ref={sliderRef}
                        className="w-[90%] py-10 flex justify-start items-center gap-x-3 items bg-transparent"
                    >
                        <CarouselCard />
                        <CarouselCard />
                        <CarouselCard />
                        <CarouselCard />
                        <CarouselCard />
                        <CarouselCard />
                        <CarouselCard />
                        <CarouselCard />
                        <CarouselCard />
                        <CarouselCard />
                        <CarouselCard />
                        <CarouselCard />
                        <CarouselCard />
                        <CarouselCard />
                        <CarouselCard />
                    </div>
                </div>
            </section>
        </main>
    )
}
