import React from "react"
import Box from "@mui/material/Box"
import Link from "next/link"
import ThreadLatest from "./ThreadLatest"
import { Response } from "../../../../types"
import Button from "@mui/material/Button"
import CustomLink from "../../../../components/CustomLink"

const Latest: React.FC<{ latestPosts: Response }> = ({ latestPosts }) => {
    return (
        <Box className="flex flex-col items-start flex-1">
            <CustomLink href={`${process.env.NEXT_PUBLIC_BASE_URL}/latest`}>
                <div className="text-[18px] textColor2 mt-[25px] mb-[10px] cursor-pointer">
                    Latest
                </div>
            </CustomLink>
            <Box className="w-full ">
                {latestPosts.data.slice(0, 15).map((m) => (
                    <ThreadLatest key={m.id} data={m} />
                ))}
            </Box>
            <CustomLink
                href={`${process.env.NEXT_PUBLIC_BASE_URL}/latest`}
                className="self-end mt-[20px]"
            >
                <Button
                    variant="contained"
                    sx={{
                        margin: 0,
                        textTransform: "none",
                        fontSize: "16px",
                        cursor: "pointer",
                        padding: "2px 16px",
                        color: "#F4F4F9",
                        "&.MuiButton-contained": {
                            backgroundColor: "#86A1D8"
                        }
                    }}
                >
                    More
                </Button>
            </CustomLink>
        </Box>
    )
}

export default Latest
