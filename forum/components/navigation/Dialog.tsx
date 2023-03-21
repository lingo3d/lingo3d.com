import * as React from "react"
import Dialog from "@mui/material/Dialog"
import ListItemText from "@mui/material/ListItemText"
import ListItem from "@mui/material/ListItem"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import ExploreIcon from "@mui/icons-material/Explore"
import ExploreOffIcon from "@mui/icons-material/ExploreOff"
import Slide from "@mui/material/Slide"
import Box from "@mui/material/Box"
import { TransitionProps } from "@mui/material/transitions"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@mui/material"
import { showLogin } from "../../signals/showLogin"
import { useUser } from "../../context/user"
import { User } from "../../types"
import Avatar from "@mui/material/Avatar"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { unsetToken as logout } from "../../pages/api/auth/js-cookie"

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />
})

export default function FullScreenDialog() {
    // const [open, setOpen] = React.useState(false)
    const user: User | undefined = useUser()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    // const handleClickOpen = () => {
    //     setOpen(true)
    // }

    // const handleClose = () => {
    //     setOpen(false)
    // }

    const handleClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <div className="fixed w-full z-[999] top-0">
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingX: 4,
                    paddingY: 3,
                    background: "transparent"
                    // marginTop: "50px"
                }}
            >
                <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/`}>
                    <Image
                        src="/logo_trademark.png"
                        width={30}
                        height={30}
                        alt="logo"
                    />
                </Link>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Button
                        key="waitlist"
                        sx={{
                            color: "#fff",
                            // paddingRight: "20px",
                            fontSize: "14px"
                        }}
                    >
                        Waitlist
                    </Button>
                    <Button
                        key="docs"
                        sx={{
                            color: "#fff",
                            // paddingRight: "20px",
                            fontSize: "14px"
                        }}
                    >
                        Docs
                    </Button>
                    {!user && (
                        <>
                            <Button
                                key="Login"
                                onClick={() => (showLogin.value = true)}
                                sx={{
                                    color: "#fff",
                                    // paddingRight: "30px",
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
                    {/* <IconButton
                        sx={{
                            color: "white",
                            width: "40px",
                            height: "40px",
                            padding: "0px !important"
                        }}
                        aria-label="open menu"
                        component="label"
                        onClick={handleClickOpen}
                    >
                        <ExploreIcon sx={{ height: "100%", width: "100%" }} />
                    </IconButton> */}
                </Box>
            </Box>
            {/* <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
                sx={{ backgroundColor: "purple" }}
            >
                <AppBar sx={{ position: "relative" }} elevation={0}>
                    <Toolbar
                        sx={{
                            display: "flex",
                            justifyContent: "end",
                            alignItems: "end",
                            backgroundColor: "transparent",
                            paddingY: 2,
                            paddingX: 3
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                            sx={{
                                color: "white",
                                width: "40px",
                                height: "40px",
                                padding: "0px !important"
                            }}
                        >
                            <ExploreOffIcon
                                sx={{ height: "100%", width: "100%" }}
                            />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <List
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "start",
                        alignItems: "center",
                        // backgroundColor: "#1E1E1E",
                        height: "100vh",
                        color: "white",
                        paddingTop: "20px"
                    }}
                >
                    <ListItem
                        button
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            fontWeight: "100",
                            height: "93px"
                        }}
                    >
                        <Image
                            src="/logo_full_name.png"
                            width={180}
                            height={45}
                            alt="logo"
                        />
                    </ListItem>

                    <Divider
                        sx={{
                            color: "white",
                            background: "white",
                            height: "1px",
                            width: 202,
                            marginY: 5
                        }}
                    />
                    <ListItem
                        button
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            fontWeight: "100"
                        }}
                    >
                        <ListItemText
                            disableTypography
                            primary="DOCUMENTATION"
                            sx={{ fontWeight: "lighter", fontSize: 24 }}
                        />
                    </ListItem>
                    <Divider />
                    <ListItem
                        button
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <ListItemText
                            disableTypography
                            primary="WAITLIST"
                            sx={{ fontWeight: "lighter", fontSize: 24 }}
                        />
                    </ListItem>
                    <Divider />
                    <ListItem
                        button
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <ListItemText
                            disableTypography
                            primary="DEMO"
                            sx={{ fontWeight: "lighter", fontSize: 24 }}
                        />
                    </ListItem>
                </List>
            </Dialog> */}
        </div>
    )
}
