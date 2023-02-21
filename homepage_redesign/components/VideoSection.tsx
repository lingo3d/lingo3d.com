const VideoSection = () => {
    return (
        <section className="relative h-screen z-10">
            <h1
                className="absolute text-white z-30 top-1/4 font-[100] px-4 leading-[42px] text-[40px]
                md:top-[205px] md:px-10 md:text-[90px] md:leading-[105px]
                lg:top-[250px] lg:pl-10 lg:px-16 lg:ml-4 
                2xl:top-[40%] 
                xl:top-[150px] xl:ml-20 xl:w-[80%]"
            >
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
                    className="h-full w-full object-cover opacity-50"
                    src="software.mp4"
                />
            </div>
        </section>
    )
}

export default VideoSection
