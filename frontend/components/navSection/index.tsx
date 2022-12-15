import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import SelectCategory from "./SelectCategory"
import SelectTags from "./SelectTags"
import SelectSection from "./SelectSection"
import Button from "@mui/material/Button"
import AddIcon from "@mui/icons-material/Add"
import Box from "@mui/material/Box"
import { useWindowWidth } from "@react-hook/window-size"
import Divider from "@mui/material/Divider"
import { useUser } from "../../context/user"

export default function NavSection() {
    const [windowWidth, setWindowWidth] = useState<number | null>(null)
    const [active, setActive] = useState("")
    const width = useWindowWidth()
    const user = useUser()
    const router = useRouter()

    useEffect(() => {
        setWindowWidth(width)
        if (router.pathname.startsWith("/forum/top")) setActive("top")
        if (router.pathname.startsWith("/forum/latest")) setActive("latest")
        if (router.pathname.startsWith("/forum/categories")) setActive("categories")
        if (router.pathname === "/forum") setActive("categories")
    }, [router.asPath])

    return (
        <>
            {windowWidth! > 629 && (
                <Box className="flex flex-wrap justify-between items-center">
                    <Box
                        sx={{ marginTop: "25px" }}
                        className="flex flex-wrap w-full justify-between sm:justify-start items-center sm:gap-x-8 lg:gap-x-12 gap-y-6 "
                    >
                        <SelectCategory windowWidth={windowWidth} />
                        <SelectTags windowWidth={windowWidth} />

                        <>
                            <Divider className="w-[1px] h-[40px] text-[white] bg-white" />
                            <Link href="/forum">
                                <div className={`${active === "categories" ? "textColor2" : "textColor1"} cursor-pointer`}>Categories</div>
                            </Link>
                            <Link href="/forum/latest">
                                <div className={`${active === "latest" ? "textColor2" : "textColor1"} cursor-pointer`}>Latest</div>
                            </Link>
                            <Link href="/forum/top">
                                <div className={`${active === "top" ? "textColor2" : "textColor1"} cursor-pointer`}>Top</div>
                            </Link>
                        </>
                    </Box>
                    <Box className="flex justify-end w-full mt-[20px]">
                        <Link href="/forum/post-question" className={user ? "" : "pointer-events-none"}>
                            <Button
                                variant="contained"
                                disabled={user ? false : true}
                                endIcon={<AddIcon />}
                                sx={{
                                    margin: 0,
                                    textTransform: "none",
                                    fontSize: "16px",
                                    cursor: "pointer",
                                    padding: windowWidth! < 640 ? "2px 12px" : "5px 20px",
                                    color: "#F4F4F9",
                                    "&.MuiButton-contained": {
                                        backgroundColor: "#86A1D8"
                                    }
                                }}
                            >
                                New
                            </Button>
                        </Link>
                    </Box>
                </Box>
            )}
            {windowWidth! < 630 && (
                <Box className="flex flex-wrap justify-between items-center">
                    <SelectSection />
                </Box>
            )}
        </>
    )
}
