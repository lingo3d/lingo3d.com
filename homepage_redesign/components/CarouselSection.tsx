import { useEffect, useRef } from "react"
import CarouselCard from "./CarouselCard"

const CarouselSection = () => {
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
        <section className="carousel-section relative z-50 w-full">
            <div className="w-full flex justify-center items-center absolute top-[-320px] md:top-[-200px] lg:top-[-140px]">
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
    )
}

export default CarouselSection
