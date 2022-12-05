import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useWindowWidth } from "@react-hook/window-size"
import { ThreadOptions } from "../types"
import profilePic from "../public/avatar2.png"
import LocalOfferIcon from "@mui/icons-material/LocalOffer"
import ThumbUpIcon from "@mui/icons-material/ThumbUp"
import CommentIcon from "@mui/icons-material/Comment"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import VisibilityIcon from "@mui/icons-material/Visibility"
import Box from "@mui/material/Box"

type ThreadOverviewProps = {
    data: ThreadOptions
    query?: string
}

const ThreadOverview = ({ data, query }: ThreadOverviewProps) => {
    const width = useWindowWidth()
    const [windowWidth, setWindowWidth] = useState<number | null>(null)

    useEffect(() => {
        setWindowWidth(width)
    }, [])

    return (
        <Box className="flex justify-between items-stretch borderTop py-2 textColor2">
            <Box className="flex justify-center items-center">
                <div className="w-[40px] h-[40px]">
                    <Image src={profilePic} width="100%" height="100%" className="rounded" />
                </div>
            </Box>
            <Box className="flex flex-col flex-1 px-2">
                <Link
                    key={data.id}
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}thread/${data.id}/${data.attributes.title}`}
                    replace
                    as={`${process.env.NEXT_PUBLIC_BASE_URL}thread/${data.id}/${data.attributes.title.replace(
                        / /g,
                        "-"
                    )}`}
                >
                    <div className="textColor2 text-[18px] cursor-pointer">{data?.attributes.title}</div>
                </Link>

                <div className="flex justify-start items-center gap-x-2 text-[13px] textColor1">
                    <div>{data.attributes.username}</div>
                    {windowWidth! > 639 && (
                        <Box className="flex flex-wrap items-center gap-x-1">
                            {data.attributes.tags && (
                                <LocalOfferIcon fontSize="small" sx={{ width: "10px", height: "10px" }} />
                            )}
                            {data.attributes.tags &&
                                data.attributes.tags.map((m, i) => (
                                    <Link key={m} href={`${process.env.NEXT_PUBLIC_BASE_URL}tags/${m}`}>
                                        <div className={query === m ? "italic font-bold" : "non-italic cursor-pointer"}>
                                            {m}
                                        </div>
                                    </Link>
                                ))}
                        </Box>
                    )}
                </div>
            </Box>
            <Box className="w-[45px] sm:w-auto borderLeft sm:border-0 textColor2 flex flex-col sm:flex-row sm:gap-x-2 lg:gap-x-8 justify-center items-center text-[13px] pl-2">
                {/* <div className="flex justify-center items-center">
                    <ThumbUpIcon className="text-[13px] sm:text-[16px] lg:text-[18px]" />
                    <div className="px-1">3</div>
                </div> */}
                <div className="flex justify-center items-center">
                    <CommentIcon className="text-[13px] sm:text-[16px] lg:text-[18px]" />
                    <div className="px-1">{data.attributes.answers ? data.attributes.answers.length : 0}</div>
                </div>
                {windowWidth! > 639 && (
                    <div className="flex justify-center items-center">
                        <AccessTimeIcon className="text-[13px] sm:text-[16px] lg:text-[18px]" />
                        <div className="px-1">{data?.attributes.updatedAt.split("T")[0]}</div>
                    </div>
                )}
                {/* {windowWidth > 639 && (
                    <div className="flex justify-center items-center">
                        <VisibilityIcon className="text-[13px] sm:text-[16px] lg:text-[18px]" />
                        <div className="px-1">312</div>
                    </div>
                )} */}
            </Box>
        </Box>
    )
}

export default ThreadOverview
