import React from "react"
import { ThreadOptions } from "../../types"
import Link from "next/link"
import CommentIcon from "@mui/icons-material/Comment"
import Box from "@mui/material/Box"

const CategoriesBox: React.FC<{ data: ThreadOptions[] | []; desc: string }> = ({ data, desc }) => {
    if (data.length === 0) return <></>
    else
        return (
            <Box className="mb-[25px] borderTop">
                <Link href={`categories/${data[0]?.attributes.category}`}>
                    <Box className="flex justify-between items-center py-2">
                        <div className="textColor2 text-[22px] cursor-pointer">
                            {data[0]?.attributes.category.charAt(0).toUpperCase() +
                                data[0]?.attributes.category.slice(1)}
                        </div>
                        <div className="textColor1">
                            <span className="font-bold">{data.length}</span> / total
                        </div>
                    </Box>
                </Link>

                <Box className="py-2 textColor1 w-[90%] text-[16px]">
                    <div>{desc}</div>
                </Box>
            </Box>
        )
}

export default CategoriesBox
