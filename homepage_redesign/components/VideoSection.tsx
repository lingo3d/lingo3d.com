const VideoSection = () => {
    return (
        <section className="relative h-screen z-10">
            <h1 className="absolute text-white z-30 top-1/4 md:top-1/3 lg:top-2/5 px-4 lg:pl-10 lg:w-[63%] text-[40px] md:text-[90px] font-[200] leading-[42px] md:leading-[105px]">
                We help ambitious companies scale up at every stage of growth
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
    )
}

export default VideoSection
