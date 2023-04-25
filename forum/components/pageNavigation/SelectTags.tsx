import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"

const SelectTags: React.FC<{ windowWidth: number | null }> = ({
    windowWidth
}) => {
    const [tag, setTag] = useState("All tags")
    const router = useRouter()

    useEffect(() => {
        const tagQuery = router.query.tag as string
        if (tagQuery) {
            setTag(tagQuery.charAt(0).toUpperCase() + tagQuery.slice(1))
            const activeElement = document.activeElement as HTMLElement
            activeElement.blur()
        }
    }, [])

    const handleChange = (tag: string) => {
        const currentPathname =
            process.env.NODE_ENV === "production"
                ? "/forum" + router.pathname
                : router.pathname

        const targetPathname = new URL(
            `${process.env.NEXT_PUBLIC_BASE_URL}/tags/${tag}`
        ).pathname

        if (currentPathname !== targetPathname) {
            router.push(targetPathname)
        }
    }

    return (
        <FormControl
            variant={windowWidth! > 639 ? "outlined" : "standard"}
            sx={{
                width: 120,
                backgroundColor: windowWidth! > 639 ? "#86A1D8" : "transparent",
                margin: 0,
                borderBottom:
                    windowWidth! > 639
                        ? "transparent"
                        : "0.5px solid #F4F4F9!important",
                ".css-hfutr2-MuiSvgIcon-root-MuiSelect-icon": {
                    color: "#F4F4F9"
                }
            }}
            className="sm:rounded-md"
            size="small"
        >
            <InputLabel
                id="demo-select-small"
                sx={{ color: "#F4F4F9", fontSize: "14px" }}
            >
                {tag}
            </InputLabel>
            <Select
                value=""
                onChange={(e) => handleChange(e.target.value)}
                sx={{
                    "& .MuiSvgIcon-root": {
                        color: "#F4F4F9"
                    }
                }}
            >
                <MenuItem value="math">Math</MenuItem>
                <MenuItem value="webxr">Webxr</MenuItem>
                <MenuItem value="buffergeometry">Buffergeometry</MenuItem>
                <MenuItem value="shadow">Shadow</MenuItem>
                <MenuItem value="getting-started">Getting started</MenuItem>
                <MenuItem value="lights">Lights</MenuItem>
                <MenuItem value="editor">Editor</MenuItem>
                <MenuItem value="instanced-mesh">Instanced mesh</MenuItem>
                <MenuItem value="camera-controls">Camera controls</MenuItem>
                <MenuItem value="modules">Modules</MenuItem>
                <MenuItem value="mesh">Mesh</MenuItem>
            </Select>
        </FormControl>
    )
}

export default SelectTags
