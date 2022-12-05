import React from "react"
import { ThreadOptions } from "../../types"
import Link from "next/link"
import CommentIcon from "@mui/icons-material/Comment"
import Box from "@mui/material/Box"

const CategoriesBoxMob: React.FC<{ data: ThreadOptions[] | [] }> = ({ data }) => {
    const top3 = data.slice(0, 3)

    if (data.length === 0) return <></>
    else
        return (
            <Box className="mb-[25px] borderTop">
                <Link href={`categories/${data[0]?.attributes.category}`}>
                    <div className="flex justify-between items-center py-2">
                        <div className="textColor2 text-[22px]">
                            {data[0]?.attributes.category.charAt(0).toUpperCase() +
                                data[0]?.attributes.category.slice(1)}
                        </div>
                        <CommentIcon className="textColor2" />
                    </div>
                </Link>

                {top3.map((m, i) => (
                    <Link
                        key={m.id}
                        href={`thread/${m.id}/${m.attributes.title}`}
                        as={`thread/${m.id}/${m.attributes.title.replace(/ /g, "-")}`}
                    >
                        <div key={m.id} className="borderTop flex justify-between items-stretch py-2">
                            <div className="text-[16px] textColor1 flex flex-1 pr-2">
                                <div>
                                    {m.attributes.title}
                                    {/* <span className="text-[#0800ff] inline-block text-3lg ml-2">
                                    {m.attributes.updatedAt.split("T")[0]}
                                </span> */}
                                </div>
                            </div>
                            <div className="w-[30px] borderLeft textColor2 flex justify-center items-center">
                                {m.attributes.answers ? m.attributes.answers.length : 0}
                            </div>
                        </div>
                    </Link>
                ))}
                <div className="borderTop borderBottom flex justify-between items-stretch py-2">
                    <div className="text-[16px] textColor1 ">
                        <span className="font-bold">{data.length}</span> total
                    </div>
                </div>
            </Box>
        )
}

export default CategoriesBoxMob
