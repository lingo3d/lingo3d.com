type ParallaxBlackOverlayProps = {
    opacityLevel: number
    dispayOverlay: string | number
}

export const ParallaxBlackOverlay = ({
    opacityLevel,
    dispayOverlay
}: ParallaxBlackOverlayProps) => {
    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100vh",
                backgroundColor: "black",
                opacity: opacityLevel,
                transition: "opacity 0.5s ease-in-out",
                zIndex: dispayOverlay
            }}
        />
    )
}

export default ParallaxBlackOverlay
