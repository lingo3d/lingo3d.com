import React, { useState, useEffect, useRef } from "react"
import { showAuthModal } from "../../signals/showAuthModal"
import { useUser } from "../../context/user"
import { unsetToken as logout } from "../../pages/api/auth/js-cookie"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
import Link from "next/link"
import { useRouter } from "next/router"
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
    const [currentRoute, setCurrentRoute] = useState("")

    const router = useRouter()
    const isForumHome = router.asPath === "/forum"
    const targetUrl = isForumHome ? "" : `${process.env.NEXT_PUBLIC_BASE_URL}/`

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
        <div
            className="my-custom-app-bar css-5ltjrz-MuiPaper-root-MuiAppBar-root
        css-1hc7nu0-MuiPaper-root-MuiAppBar-root
        css-m9glnp-MuiPaper-root-MuiDialog-paper"
        >
            <AppBar component="nav" elevation={0}>
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >
                    <Link href={targetUrl}>
                        <Box
                            sx={{
                                width: "200px",
                                position: "relative",
                                cursor: "pointer"
                            }}
                        >
                            <img
                                ref={logo1Ref}
                                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/logo_full_name.png`}
                                alt="company background"
                                style={{
                                    width: "120px",
                                    height: "22.5px",
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    opacity: logo1Opacity,
                                    transition: "opacity 0.5s ease-in-out"
                                }}
                            />
                            <img
                                ref={logo2Ref}
                                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/logo_trademark.png`}
                                alt="company background"
                                style={{
                                    width: "30px",
                                    height: "30px",
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
                                    onClick={() => (showAuthModal.value = true)}
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
                                    sx={{
                                        cursor: "pointer",
                                        width: "30px",
                                        height: "30px",
                                        backgroundColor: "#86A1D8",
                                        display: "inline-flex",
                                        "@media (min-width: 640px)": {
                                            width: "35px",
                                            height: "35px"
                                        }
                                    }}
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
        </div>
    )
}
