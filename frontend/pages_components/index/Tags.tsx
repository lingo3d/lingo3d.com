import React from "react"
import { useRouter } from "next/router"
import { Box } from "@mui/material"

const Tags = () => {
    const router = useRouter()
    const tags = [
        "#Math",
        "#WebXR",
        "#Buffergeometry",
        "#Shadow",
        "#Getting Started",
        "#Lights",
        "#Editor",
        "#Instanced Mesh",
        "#Camera Controls",
        "#Modules",
        "#Mesh"
    ]

    const handleChangeRoute = (tag: string) => {
        let param = tag.substring(1).toLocaleLowerCase().replaceAll(" ", "-")
        router.push(`${process.env.NEXT_PUBLIC_BASE_URL}tags/${param}`)
    }

    return (
        <Box className="flex flex-wrap gap-x-4 sm:gap-y-2 lg:gap-y-4 textColor1 my-[25px] text-2xl">
            {tags.map((m) => (
                <span key={m} className="cursor-pointer" onClick={(e) => handleChangeRoute(m)}>
                    {m}
                </span>
            ))}
        </Box>
    )
}

export default Tags
