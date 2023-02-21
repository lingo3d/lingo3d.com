import { useState, useEffect, useRef } from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
import Image from "next/image"

const navItems = ["Home", "About", "Contact"]

export default function Nav() {
    const [scrollY, setScrollY] = useState(0)
    const fadeStart = 100
    const logo1Ref = useRef<HTMLElement | undefined>(undefined)
    const logo2Ref = useRef<HTMLElement | undefined>(undefined)

    const [logo1Opacity, setLogo1Opacity] = useState<number>(1)
    const [logo2Opacity, setLogo2Opacity] = useState<number>(0)

    useEffect(() => {
        const cb = () => {
            setScrollY(window.scrollY)
        }
        document.addEventListener("scroll", cb)

        return () => {
            document.removeEventListener("scroll", cb)
        }
    }, [])

    useEffect(() => {
        if (!logo1Ref.current) return
        if (!logo2Ref.current) return

        if (scrollY > fadeStart) {
            const opacity = (scrollY - fadeStart) / 100
            setLogo1Opacity(1 - opacity)
            setLogo2Opacity(opacity)
        } else {
            setLogo1Opacity(1)
            setLogo2Opacity(0)
        }
    }, [scrollY])

    return (
        <Box sx={{ display: "flex" }}>
            <AppBar
                component="nav"
                elevation={0}
                sx={{
                    background: "transparent",
                    paddingX: "45px"
                    // paddingTop: "40px"
                }}
            >
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >
                    <Box
                        sx={{
                            width: "200px",
                            height: "200px",
                            position: "relative"
                        }}
                    >
                        <Image
                            ref={logo1Ref}
                            src="/logo_colored_white.png"
                            alt="company background"
                            width={120}
                            height={50}
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                opacity: logo1Opacity
                            }}
                        />
                        <Image
                            ref={logo2Ref}
                            src="/logo-rounded.png"
                            alt="company background"
                            width={60}
                            height={60}
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                opacity: logo2Opacity
                            }}
                        />
                    </Box>

                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        {navItems.map((item) => (
                            <Button
                                key={item}
                                sx={{
                                    color: "#fff",
                                    paddingRight: "30px",
                                    fontSize: "14px"
                                }}
                            >
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
