import React, { useEffect, useState } from "react"
import { useWindowWidth } from "@react-hook/window-size"
import Box from "@mui/material/Box"
import { Response } from "../../../types"
import Latest from "./Latest/index"
import Categories from "./Categories/index"

const Body: React.FC<{ latestPosts: Response }> = ({ latestPosts }) => {
    const [windowWidth, setWindowWidth] = useState<number | undefined>()
    const width = useWindowWidth()

    useEffect(() => {
        setWindowWidth(width)
    }, [])

    return (
        <Box className="flex gap-x-8">
            {/* CATEGORIES SECTION FORUM INDEX PAGE */}
            <Categories latestPosts={latestPosts} />
            {/* LATEST SECTION FORUM INDEX PAGE */}
            {windowWidth! > 639 && <Latest latestPosts={latestPosts} />}
        </Box>
    )
}

export default Body
