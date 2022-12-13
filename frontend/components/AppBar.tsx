import React, { useState, useEffect } from "react"
import { useUser } from "../context/user"
import { unsetToken as logout } from "../pages/api/auth/js-cookie"
import Image from "next/image"
import Link from "next/link"
import { useWindowWidth } from "@react-hook/window-size"
import logo from "../public/logo.png"
import logo_short from "../public/logo_short.png"
import AppBar from "@mui/material/AppBar"
import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Modal from "./login_register/index"

const ButtonAppBar: React.FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [displayRegister, setDisplayRegister] = useState<boolean>(false)
    const user = useUser()
    const [windowWidth, setWindowWidth] = useState<number | undefined>()
    const width = useWindowWidth()

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    useEffect(() => {
        setWindowWidth(width)
    }, [])

    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{ background: "rgba(0, 0, 0, 0.5)", backdropFilter: "blur(24px)" }}>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between", width: "100%", maxWidth: "1088px", margin: "auto" }}>
                    <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/forum`}>
                        <Box sx={{ display: "flex", flexDirection: "row" }}>
                            {windowWidth! > 600 ? (
                                <Image src={logo} width={127} height={24} alt="logo" />
                            ) : (
                                <Image src={logo} width={90} height={16} alt="logo" />
                            )}

                            <div className="bg-[#293ab9] px-2 rounded flex justify-center items-center ml-2">
                                <span className="text-xs font-medium">FORUM</span>
                            </div>
                        </Box>
                    </Link>

                    <Box>
                        {!user && (
                            <>
                                <Button
                                    onClick={() => setShowModal(true)}
                                    sx={{
                                        background: "rgb(42, 58, 185) !important",
                                        color: "#F4F4F9",
                                        padding: "4px 16px",
                                        outline: "transparent",
                                        borderRadius: "2px",
                                        border: "1px solid rgb(138, 136, 134)"
                                    }}
                                >
                                    Login
                                </Button>
                            </>
                        )}
                        {user && (
                            <Box className="flex justify-center items-center gap-x-2">
                                {/* <IconButton edge="start" color="inherit" aria-label="menu">
                                    <MenuIcon className="cursor-pointer w-[35px] h-[35px] sm:w-[40px] sm:h-[40px]" />
                                </IconButton> */}
                                <Avatar
                                    onClick={(e) => handleClick(e)}
                                    className="cursor-pointer w-[30px] h-[30px] sm:w-[35px] sm:h-[35px]"
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
                                    <MenuItem sx={{ paddingTop: "0", paddingBottom: "0" }} onClick={() => logout()}>
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </Box>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
            <Modal
                onClose={() => {
                    setShowModal(false), setDisplayRegister(false)
                }}
                show={showModal}
                displayRegister={displayRegister}
                setDisplayRegister={setDisplayRegister}
            />
        </Box>
    )
}

export default ButtonAppBar
