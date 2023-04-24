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
        const currentPathname =
            process.env.NODE_ENV === "production"
                ? "/forum" + router.pathname
                : router.pathname

        let param = tag.substring(1).toLocaleLowerCase().replaceAll(" ", "-")

        const targetPathname = `${process.env.NEXT_PUBLIC_BASE_URL}/tags/${param}`

        if (currentPathname !== targetPathname) {
            router.push(targetPathname)
        }
    }

    return (
        <Box className="flex flex-wrap gap-x-4 sm:gap-y-2 lg:gap-y-4 my-[25px] text-2xl">
            {tags.map((m) => (
                <span
                    key={m}
                    className="cursor-pointer text-[#86A1D8] hover:text-[#F4F4F9]"
                    onClick={(e) => handleChangeRoute(m)}
                >
                    {m}
                </span>
            ))}
        </Box>
    )
}

export default Tags
