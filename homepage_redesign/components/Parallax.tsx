import ParallaxBlackOverlay from "./ParallaxBlackOverlay"
import TextOverlay from "./TextOverlay"

const Parallax = ({
    setEl,
    status,
    displayText,
    activateText,
    opacityLevel,
    dispayOverlay,
    scrollNormalized,
    setElVideo
}) => {
    return (
        <section>
            <div className="h-[4400px] relative">
                <div
                    className="bg-slate-700 mt-[500px] md:mt-[800px] lg:mt-[900px]  pt-[50px] w-full "
                    ref={setEl}
                >
                    <TextOverlay
                        displayText={displayText}
                        activateText={activateText}
                    />
                    <ParallaxBlackOverlay
                        opacityLevel={opacityLevel}
                        dispayOverlay={dispayOverlay}
                    />
                    <video
                        muted
                        playsInline
                        loop
                        autoPlay
                        style={{
                            objectFit: "cover",
                            transform: `scale(${scrollNormalized})`,
                            width: "100%",
                            height: "100vh",
                            position:
                                status === "started"
                                    ? "fixed"
                                    : status === "after"
                                    ? "absolute"
                                    : undefined,
                            top: status === "started" ? 0 : undefined,
                            bottom: status === "after" ? 0 : undefined,
                            left: status === "started" ? 0 : undefined,
                            zIndex: status === "started" ? 800 : 799,
                            transition:
                                status === "started"
                                    ? "all 0.3s ease-in-out"
                                    : status === "after"
                                    ? "top 0.5s ease-out"
                                    : undefined
                        }}
                        src="city.mp4"
                        ref={setElVideo}
                    />
                </div>
            </div>
        </section>
    )
}

export default Parallax
