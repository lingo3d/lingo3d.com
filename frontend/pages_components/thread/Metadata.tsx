import React from "react"
import Link from "next/link"
import PersonIcon from "@mui/icons-material/Person"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import LocalOfferIcon from "@mui/icons-material/LocalOffer"
import Box from "@mui/material/Box"

const Metadata: React.FC<{ username: string; createdAt: string; tags: string[] | null }> = ({
    username,
    createdAt,
    tags
}) => {
    return (
        <div className="flex flex-col textColor1 mt-[5px]">
            <Box className="flex  textColor1 ">
                <div className="flex justify-start items-end">
                    <PersonIcon />
                    <div className="text-[13px] ml-[4px]">{username}</div>
                </div>
                <div className="flex justify-center items-center mx-[6px]">.</div>
                <div className="flex justify-start items-end">
                    <AccessTimeIcon sx={{ width: "20px", height: "20px" }} />
                    <div className="text-[13px] ml-[4px]">{createdAt}</div>
                </div>
            </Box>
            {tags && (
                <div className="flex flex-wrap justify-start items-end mt-[10px]">
                    <LocalOfferIcon sx={{ width: "20px", height: "20px" }} />
                    {tags?.map((m, i) => (
                        <Link key={m} href={`${process.env.NEXT_PUBLIC_BASE_URL}tags/${m}`}>
                            <div key={i} className="text-[13px] ml-[4px] cursor-pointer">
                                {m}
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Metadata
