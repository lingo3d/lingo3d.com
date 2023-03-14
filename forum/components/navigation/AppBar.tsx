import React, { useState, useEffect, useRef } from "react"
import { showLogin } from "../../signals/showLogin"
import { useUser } from "../../context/user"
import { unsetToken as logout } from "../../pages/api/auth/js-cookie"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
import Image from "next/image"
import Link from "next/link"
import { User } from "../../types"
import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"

// const navItems = ["Home", "Forum", "Contact"]

export default function Nav() {
    const user: User | undefined = useUser()
    const [scrollY, setScrollY] = useState(0)
    const fadeStart = 100
    const logo1Ref = useRef<HTMLImageElement | null>(null)
    const logo2Ref = useRef<HTMLImageElement | null>(null)
    const [logo1Opacity, setLogo1Opacity] = useState<number>(1)
    const [logo2Opacity, setLogo2Opacity] = useState<number>(0)

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

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

    const handleClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <Box>
            <AppBar component="nav" elevation={0}>
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >
                    <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/`}>
                        <Box
                            sx={{
                                width: "200px",
                                height: "200px",
                                position: "relative",
                                cursor: "pointer"
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
                                width={50}
                                height={50}
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
                    </Link>

                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        <Button
                            key="Waitlist"
                            sx={{
                                color: "#fff",
                                paddingRight: "30px",
                                fontSize: "14px"
                            }}
                        >
                            Waitlist
                        </Button>
                        <Button
                            key="Documentation"
                            sx={{
                                color: "#fff",
                                paddingRight: "30px",
                                fontSize: "14px"
                            }}
                        >
                            Documentation
                        </Button>
                        {!user && (
                            <>
                                <Button
                                    key="Login"
                                    onClick={() => (showLogin.value = true)}
                                    sx={{
                                        color: "#fff",
                                        paddingRight: "30px",
                                        fontSize: "14px"
                                    }}
                                >
                                    Login
                                </Button>
                            </>
                        )}
                        {user && (
                            <>
                                <Avatar
                                    onClick={(e) => handleClick(e)}
                                    className="cursor-pointer w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] bg-[#86A1D8] inline-flex"
                                />

                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        "aria-labelledby": "basic-button"
                                    }}
                                >
                                    <MenuItem
                                        sx={{
                                            paddingTop: "0",
                                            paddingBottom: "0"
                                        }}
                                        onClick={() => logout()}
                                    >
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
