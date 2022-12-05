import React, { useState } from "react"
import { useUser } from "../context/user"
import { unsetToken as logout } from "../pages/api/auth/js-cookie"
import Image from "next/image"
import logo from "../public/logo.png"
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

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ background: "black" }}>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    <>
                        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>
                        <Image src={logo} width="100px" height="20px" />
                        {!user && (
                            <>
                                <Button
                                    onClick={() => setShowModal(true)}
                                    sx={{
                                        background: "#293ab9 !important",
                                        color: "#F4F4F9",
                                        padding: "8px 16px 8px 16px"
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
                                    sx={{ bgcolor: "deepOrange[500]" }}
                                    variant="rounded"
                                    className="cursor-pointer"
                                >
                                    OP
                                </Avatar>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        "aria-labelledby": "basic-button"
                                    }}
                                >
                                    <MenuItem onClick={() => logout()}>Logout</MenuItem>
                                </Menu>
                            </>
                        )}
                    </>
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
