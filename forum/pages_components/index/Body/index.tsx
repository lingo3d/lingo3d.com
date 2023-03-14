import React from "react"
import Box from "@mui/material/Box"
import { Response } from "../../../types"
import Latest from "./Latest/index"
import Categories from "./Categories/index"
import { useWidth } from "../../../hooks/useWindowWidth"

const Body: React.FC<{ latestPosts: Response }> = ({ latestPosts }) => {
    const windowWidth = useWidth()

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
