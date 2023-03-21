import { useEffect, useRef } from "react"

export const HeroVideo = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null)

    useEffect(() => {
        const options = {
            threshold: 0.1
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    videoRef?.current?.play()
                } else {
                    videoRef?.current?.pause()
                }
            })
        }, options)

        let currentVideo = videoRef?.current
        if (currentVideo) {
            observer.observe(currentVideo)
        }

        return () => {
            if (currentVideo) {
                observer.unobserve(currentVideo)
            }
        }
    })

    return (
        <video
            muted
            playsInline
            loop
            autoPlay
            disablePictureInPicture
            className="h-screen w-full object-cover opacity-50 top-0 left-0 absolute"
            src="software.mp4"
            ref={videoRef}
        />
    )
}

export default HeroVideo
