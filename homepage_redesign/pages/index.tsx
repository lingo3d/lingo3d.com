import Navigation from "@/layouts/Navigation/index"
import VideoSection from "@/components/VideoSection"
import CarouselSection from "@/components/CarouselSection"

export default function Home() {
    return (
        <main className="relative h-[4000px] bg-black">
            <Navigation />
            <VideoSection />
            <CarouselSection />
        </main>
    )
}
