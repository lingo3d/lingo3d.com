import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ThreadOptions } from "../../types"
import profilePic from "../../public/avatar2.png"
import Box from "@mui/material/Box"
import LocalOfferIcon from "@mui/icons-material/LocalOffer"

const ThreadLatest: React.FC<{ data: ThreadOptions }> = ({ data }) => {
    return (
        <Box className="borderTop py-2">
            <Box className="flex justify-start items-center mb-[5px]">
                <div className="w-[40px] h-[40px]">
                    <Image src={profilePic} width="100%" height="100%" className="rounded" />
                </div>
                <div className="flex-1 px-2 textColor1">
                    <Link
                        key={data.id}
                        href={`thread/${data.id}/${data.attributes.title}`}
                        as={`thread/${data.id}/${data.attributes.title.replace(/ /g, "-")}`}
                    >
                        <div className="text-[16px] cursor-pointer">{data?.attributes.title}</div>
                    </Link>
                </div>
            </Box>
            <Box className="flex justify-between items-center textColor1 text-[13px] mt-[15px] gap-x-4">
                <div className="tags flex flex-wrap gap-x-2">
                    {data.attributes.tags && (
                        <LocalOfferIcon sx={{ width: "14px", height: "14px", margin: "auto auto" }} />
                    )}
                    {data.attributes.tags &&
                        data.attributes.tags.map((m, i) => (
                            <Link key={m} href={`${process.env.NEXT_PUBLIC_BASE_URL}tags/${m}`}>
                                <span key={i} className="cursor-pointer">
                                    {m}
                                </span>
                            </Link>
                        ))}
                </div>
                <div>{data?.attributes.updatedAt.split("T")[0]}</div>
            </Box>
        </Box>
    )
}

export default ThreadLatest
