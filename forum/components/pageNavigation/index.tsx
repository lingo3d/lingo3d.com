import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import SelectCategory from "./SelectCategory"
import SelectTags from "./SelectTags"
import SelectSection from "./SelectSection"
import Button from "@mui/material/Button"
import AddIcon from "@mui/icons-material/Add"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import { useUser } from "../../context/user"
import { User } from "../../types"
import { useWidth } from "../../hooks/useWindowWidth"
import CustomLink from "../CustomLink"

export default function NavSection() {
    const windowWidth = useWidth()
    const [displayExtraMenus, setDisplayExtraMenus] = useState(false)
    const [active, setActive] = useState("")
    const user: User | undefined = useUser()
    const router = useRouter()

    useEffect(() => {
        if (router.pathname.startsWith("/top")) setActive("top")
        if (router.pathname.startsWith("/latest")) setActive("latest")
        if (router.pathname.startsWith("/categories")) setActive("categories")
        if (router.pathname === "/") setActive("categories")

        if (
            router.pathname.startsWith("/tags") ||
            router.pathname.startsWith("/categories")
        )
            setDisplayExtraMenus(true)
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
                            <CustomLink
                                href={`${process.env.NEXT_PUBLIC_BASE_PATH}/`}
                            >
                                <div
                                    className={`${
                                        active === "categories"
                                            ? "textColor2"
                                            : "textColor1"
                                    } cursor-pointer`}
                                >
                                    Categories
                                </div>
                            </CustomLink>
                            <CustomLink
                                href={`${process.env.NEXT_PUBLIC_BASE_PATH}/latest`}
                            >
                                <div
                                    className={`${
                                        active === "latest"
                                            ? "textColor2"
                                            : "textColor1"
                                    } cursor-pointer`}
                                >
                                    Latest
                                </div>
                            </CustomLink>

                            <CustomLink
                                href={`${process.env.NEXT_PUBLIC_BASE_URL}/top`}
                            >
                                <div
                                    className={`${
                                        active === "top"
                                            ? "textColor2"
                                            : "textColor1"
                                    } cursor-pointer`}
                                >
                                    Top
                                </div>
                            </CustomLink>
                        </>
                    </Box>
                    <Box className="flex justify-end w-full mt-[20px]">
                        <CustomLink
                            href={`${process.env.NEXT_PUBLIC_BASE_URL}/post-question`}
                            className={user ? "" : "pointer-events-none"}
                        >
                            <Button
                                variant="contained"
                                disabled={user ? false : true}
                                endIcon={<AddIcon />}
                                sx={{
                                    margin: 0,
                                    textTransform: "none",
                                    fontSize: "16px",
                                    cursor: "pointer",
                                    padding:
                                        windowWidth! < 640
                                            ? "2px 12px"
                                            : "5px 20px",
                                    color: "#F4F4F9",
                                    "&.MuiButton-contained": {
                                        backgroundColor: "#86A1D8"
                                    }
                                }}
                            >
                                New
                            </Button>
                        </CustomLink>
                    </Box>
                </Box>
            )}
            {windowWidth! < 630 && (
                <Box>
                    <Box className="w-full flex flex-col justify-between items-center">
                        {displayExtraMenus && (
                            <Box className="w-full flex justify-between mb-[20px]">
                                <SelectCategory windowWidth={windowWidth} />
                                <SelectTags windowWidth={windowWidth} />
                            </Box>
                        )}
                        <Box className="w-full flex justify-between items-center">
                            <SelectSection />
                            {user && (
                                <CustomLink
                                    href={`${process.env.NEXT_PUBLIC_BASE_PATH}/post-question`}
                                >
                                    <AddIcon
                                        sx={{
                                            color: "#F4F4F9",
                                            background: "#86A1D8",
                                            width: "30px",
                                            height: "30px",
                                            borderRadius: "4px"
                                        }}
                                    />
                                </CustomLink>
                            )}
                        </Box>
                    </Box>
                </Box>
            )}
        </>
    )
}
