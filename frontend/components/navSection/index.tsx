import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import SelectCategory from "./SelectCategory"
import SelectTags from "./SelectTags"
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
        if (router.pathname.startsWith("/top")) setActive("top")
        if (router.pathname.startsWith("/latest")) setActive("latest")
        if (router.pathname.startsWith("/categories")) setActive("categories")
        if (router.pathname === "/") setActive("categories")
    }, [router.asPath])

    return (
        <>
            <Box className="flex flex-wrap justify-between items-center">
                <Box
                    sx={{ marginTop: "25px" }}
                    className="flex flex-wrap w-full justify-between sm:justify-start items-center sm:gap-x-8 lg:gap-x-12 gap-y-6 "
                >
                    <SelectCategory windowWidth={windowWidth} />
                    <SelectTags windowWidth={windowWidth} />
                    {windowWidth! > 639 && (
                        <>
                            <Divider className="w-[1px] h-[40px] text-[white] bg-white" />
                            <Link href="/">
                                <div
                                    className={`${
                                        active === "categories" ? "textColor2" : "textColor1"
                                    } cursor-pointer`}
                                >
                                    Categories
                                </div>
                            </Link>
                            <Link href="/latest">
                                <div className={`${active === "latest" ? "textColor2" : "textColor1"} cursor-pointer`}>
                                    Latest
                                </div>
                            </Link>
                            <Link href="/top">
                                <div className={`${active === "top" ? "textColor2" : "textColor1"} cursor-pointer`}>
                                    Top
                                </div>
                            </Link>
                        </>
                    )}
                </Box>
                <Box className="flex justify-end w-full mt-[20px]">
                    <Link href="/post-question">
                        <Button
                            variant="contained"
                            endIcon={<AddIcon />}
                            disabled={user ? false : true}
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
                {windowWidth! < 639 && (
                    <>
                        <Box className="flex justify-end w-full mt-[15px] gap-x-4">
                            <Link href="/">
                                <div
                                    className={`${
                                        active === "categories" ? "textColor2" : "textColor1"
                                    } cursor-pointer`}
                                >
                                    Categories
                                </div>
                            </Link>
                            <Link href="/latest">
                                <div className={`${active === "latest" ? "textColor2" : "textColor1"} cursor-pointer`}>
                                    Latest
                                </div>
                            </Link>
                            <Link href="/top">
                                <div className={`${active === "top" ? "textColor2" : "textColor1"} cursor-pointer`}>
                                    Top
                                </div>
                            </Link>
                        </Box>
                    </>
                )}
            </Box>
        </>
    )
}
