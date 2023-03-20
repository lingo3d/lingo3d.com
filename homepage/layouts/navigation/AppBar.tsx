import { useState, useEffect, useRef } from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

// const navItems = ["Home", "Forum", "Contact"]

export default function Nav() {
    const router = useRouter()
    const [scrollY, setScrollY] = useState(0)
    const fadeStart = 100
    const logo1Ref = useRef<HTMLImageElement | null>(null)
    const logo2Ref = useRef<HTMLImageElement | null>(null)
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
            setLogo1Opacity(0)
            setLogo2Opacity(1)
        } else {
            setLogo1Opacity(1)
            setLogo2Opacity(0)
        }
    }, [scrollY])

    const handleRouterChange = () => {
        router.push(
            "http://ec2-43-192-125-79.cn-northwest-1.compute.amazonaws.com.cn:3000"
        )
    }

    return (
        <AppBar
            component="nav"
            elevation={0}
            sx={{
                background: "transparent"
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
                        src="/logo_full_name.png"
                        alt="company background"
                        width={120}
                        height={50}
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            opacity: logo1Opacity,
                            transition: "opacity 0.5s ease-in-out"
                        }}
                    />
                    <Image
                        ref={logo2Ref}
                        src="/logo_trademark.png"
                        alt="company background"
                        width={60}
                        height={60}
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            opacity: logo2Opacity,
                            transition: "opacity 0.5s ease-in-out"
                        }}
                    />
                </Box>
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                    <Button
                        key="home"
                        sx={{
                            color: "#fff",
                            paddingRight: "30px",
                            fontSize: "14px"
                        }}
                    >
                        Home
                    </Button>
                    <Button
                        key="forum"
                        onClick={() => handleRouterChange()}
                        sx={{
                            color: "#fff",
                            paddingRight: "30px",
                            fontSize: "14px"
                        }}
                    >
                        Forum
                    </Button>
                    <Button
                        key="contact"
                        sx={{
                            color: "#fff",
                            paddingRight: "30px",
                            fontSize: "14px"
                        }}
                    >
                        Contact
                    </Button>
                </Box>
                {/* <Box sx={{ display: { xs: "none", sm: "block" } }}>
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
                    </Box> */}
            </Toolbar>
        </AppBar>
    )
}
