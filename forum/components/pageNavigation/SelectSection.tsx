import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import InputLabel from "@mui/material/InputLabel"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"

const SelectSection: React.FC = () => {
    const [section, setSection] = useState<string>("Categories")
    const router = useRouter()

    useEffect(() => {
        if (router.pathname.startsWith("/top")) setSection("Top")
        if (router.pathname.startsWith("/latest")) setSection("Latest")
        if (router.pathname.startsWith("/categories")) setSection("Categories")
        if (router.pathname.startsWith("/tags")) setSection("Tags")
    }, [router.asPath])

    const handleChange = (section: string) => {
        const currentPathname =
            process.env.NODE_ENV === "production"
                ? "/forum" + router.pathname
                : router.pathname

        const targetPathname = new URL(
            `${process.env.NEXT_PUBLIC_BASE_URL}/${section}`
        ).pathname

        if (currentPathname !== targetPathname) {
            router.push(targetPathname)
        }
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
                <InputLabel
                    id="demo-select-small"
                    sx={{ color: "#F4F4F9", fontSize: "14px" }}
                >
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
