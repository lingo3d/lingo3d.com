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

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />
})

export default function FullScreenDialog() {
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div className="fixed w-full z-[999] top-0">
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingX: 4,
                    paddingY: 3,
                    background: "transparent"
                    // marginTop: "50px"
                }}
            >
                <Image
                    src="/logo_trademark.png"
                    width={44}
                    height={44}
                    alt="logo"
                />
                <IconButton
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
                </IconButton>
            </Box>
            <Dialog
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
            </Dialog>
        </div>
    )
}
