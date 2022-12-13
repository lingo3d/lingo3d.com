import React, { useEffect, useState } from "react"
import Box from "@mui/material/Box"
import Link from "next/link"
import { useWindowWidth } from "@react-hook/window-size"
import { Response } from "../../../../types"
import CategoriesSectionDesktop from "./CategoriesSectionDesktop"
import CategoriesSectionMobile from "./CategoriesSectionMobile"

const Categories: React.FC<{ latestPosts: Response }> = ({ latestPosts }) => {
    const [windowWidth, setWindowWidth] = useState<number | undefined>()
    const width = useWindowWidth()

    useEffect(() => {
        setWindowWidth(width)
    }, [])
    return (
        <Box className="flex flex-col items-start flex-1">
            <Box className="flex justify-between w-full">
                <div className="text-[18px] textColor2 mt-[25px] mb-[10px]">Categories</div>
                {windowWidth! > 639 && <div className="text-[18px] textColor2 mt-[25px] mb-[10px]">Topics</div>}
            </Box>

            <Box className="w-full">
                {windowWidth! < 639 ? (
                    <CategoriesSectionMobile latestPosts={latestPosts} />
                ) : (
                    <CategoriesSectionDesktop latestPosts={latestPosts} />
                )}
            </Box>
        </Box>
    )
}

export default Categories
