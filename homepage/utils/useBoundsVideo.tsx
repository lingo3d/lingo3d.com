import { useState, useEffect, useRef } from "react"

const useBoundsVideo = () => {
    const elVideo = useRef<HTMLVideoElement | null>(null)
    const [boundsVideo, setBoundsVideo] = useState<DOMRect>()

    useEffect(() => {
        if (!elVideo) return
        setBoundsVideo(elVideo?.current!.getBoundingClientRect())
    }, [elVideo])

    return [elVideo, boundsVideo] as const
}

export default useBoundsVideo
