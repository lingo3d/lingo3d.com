type ParallaxBlackOverlayProps = {
    opacityLevel: number
    zIndexOverlay: string | number
    displayOverlay: string
}

export const ParallaxBlackOverlay = ({
    opacityLevel,
    zIndexOverlay,
    displayOverlay
}: ParallaxBlackOverlayProps) => {
    return (
        <div
            style={{
                position: "fixed",
                display: displayOverlay,
                top: 0,
                left: 0,
                width: "100%",
                height: "100vh",
                backgroundColor: "black",
                opacity: opacityLevel,
                transition: "opacity 0.5s ease-in-out",
                zIndex: zIndexOverlay
            }}
        />
    )
}

export default ParallaxBlackOverlay
