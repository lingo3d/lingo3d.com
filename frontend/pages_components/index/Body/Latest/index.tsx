import React from "react"
import Box from "@mui/material/Box"
import Link from "next/link"
import ThreadLatest from "./ThreadLatest"
import { Response } from "../../../../types"

const Latest: React.FC<{ latestPosts: Response }> = ({ latestPosts }) => {
    return (
        <Box className="flex flex-col items-start flex-1">
            <Link href="/forum/latest">
                <div className="text-[18px] textColor2 mt-[25px] mb-[10px] cursor-pointer">Latest</div>
            </Link>
            <Box className="w-full ">
                {latestPosts.data.map((m) => (
                    <ThreadLatest key={m.id} data={m} />
                ))}
            </Box>
        </Box>
    )
}

export default Latest
