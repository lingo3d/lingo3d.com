import CarouselCard from "@/components/CarouselCard"

export default function Home() {
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
                    <div className="w-[90%] py-10 overflow-x-hidden flex justify-center items-center">
                        <div className="w-full flex gap-x-3 ">
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
                </div>
            </section>
        </main>
    )
}
