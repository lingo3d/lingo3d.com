import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import InputLabel from "@mui/material/InputLabel"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import SelectCategory from "./SelectCategory"
import SelectTags from "./SelectTags"
import { useWindowWidth } from "@react-hook/window-size"

const SelectSection: React.FC = () => {
    const [section, setSection] = useState<string>("Categories")

    const router = useRouter()
    const [windowWidth, setWindowWidth] = useState<number | null>(null)
    const width = useWindowWidth()

    useEffect(() => {
        setWindowWidth(width)
        if (router.pathname.startsWith("/forum/top")) setSection("Top")
        if (router.pathname.startsWith("/forum/latest")) setSection("Latest")
        if (router.pathname.startsWith("/forum/categories")) setSection("Categories")
        if (router.pathname.startsWith("/forum/tags")) setSection("Tags")
    }, [router.asPath])

    const handleChange = (section: string) => {
        router.push(`${process.env.NEXT_PUBLIC_BASE_URL}/forum/${section}`)
    }

    return (
        <>
            <FormControl
                variant="outlined"
                sx={{
                    minWidth: 120,
                    backgroundColor: "#86A1D8",
                    padding: 0,
                    borderBottom: "transparent",
                    margin: 0,
                    ".css-hfutr2-MuiSvgIcon-root-MuiSelect-icon": {
                        color: "#F4F4F9"
                    }
                }}
                className="rounded-md"
                size="small"
            >
                <InputLabel id="demo-select-small" sx={{ color: "#F4F4F9", fontSize: "14px" }}>
                    {section}
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
                    <MenuItem value="categories">Categories</MenuItem>
                    <MenuItem value="latest">Latest</MenuItem>
                    <MenuItem value="top">Top</MenuItem>
                </Select>
            </FormControl>
        </>
    )
}

export default SelectSection
