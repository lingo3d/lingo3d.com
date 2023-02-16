import { useEffect, useRef } from "react"
import CarouselCard from "@/components/CarouselCard"

export default function Home() {
    const sliderRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let slider = sliderRef.current
        if (!slider) return

        let isDown = false
        let startX
        let scrollLeft

        const handleMouseDown = (e) => {
            isDown = true
            slider?.classList.add("active")
            startX = e.pageX - slider?.offsetLeft
            scrollLeft = slider?.scrollLeft
        }

        const handleMouseMove = (e) => {
            if (!isDown) return
            e.preventDefault()
            const x = e.pageX - slider.offsetLeft
            const walk = x - startX
            slider.scrollLeft = scrollLeft - walk
        }

        const handleMouseLeave = () => {
            isDown = false
            slider?.classList.remove("active")
        }

        const handleMouseUp = () => {
            isDown = false
            slider?.classList.remove("active")
        }

        slider.addEventListener("mousedown", handleMouseDown)
        slider.addEventListener("mousemove", handleMouseMove)
        slider.addEventListener("mouseleave", handleMouseLeave)
        slider.addEventListener("mouseup", handleMouseUp)

        return () => {
            slider.removeEventListener("mousedown", handleMouseDown)
            slider.removeEventListener("mousedown", handleMouseMove)
            slider.removeEventListener("mouseleave", handleMouseLeave)
            slider.removeEventListener("mouseup", handleMouseUp)
        }
    })

    return (
        <main className="relative h-[4000px] bg-black">
            <section className="relative h-screen z-10">
                <h1 className="absolute text-white z-30 top-1/4 md:top-1/3 px-4 lg:pl-10 lg:w-[63%] text-[40px] md:text-[90px] font-[100] leading-[42px] md:leading-[105px]">
                    We help ambitious companies scale up at every stage of
                    growth
                </h1>
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
