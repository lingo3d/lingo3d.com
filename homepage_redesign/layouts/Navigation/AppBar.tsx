import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
import Image from "next/image"

const navItems = ["Home", "About", "Contact"]

export default function Nav() {
    return (
        <Box sx={{ display: "flex" }}>
            <AppBar
                component="nav"
                elevation={0}
                sx={{
                    background: "transparent",
                    paddingX: "45px",
                    paddingTop: "40px"
                }}
            >
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >
                    <Image
                        src="/logo_colored_white.png"
                        alt="company background"
                        width={160}
                        height={90}
                    />
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        {navItems.map((item) => (
                            <Button
                                key={item}
                                sx={{
                                    color: "#fff",
                                    // fontFamily: "graphie",
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
