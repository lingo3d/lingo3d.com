import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"

const SelectCategory: React.FC<{ windowWidth: number | null }> = ({ windowWidth }) => {
    const [category, setCategory] = useState<string>("Categories")
    const router = useRouter()

    useEffect(() => {
        const currentCategory = router.query.category
        if (currentCategory) {
            //@ts-ignore
            setCategory(currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1))
            //@ts-ignore
            document.activeElement.blur()
        }
    }, [router.asPath])

    const handleChange = (category: string) => {
        router.push(`${process.env.NEXT_PUBLIC_BASE_URL}categories/${category}`)
    }

    return (
        <FormControl
            variant={windowWidth! > 639 ? "outlined" : "standard"}
            sx={{
                minWidth: 120,
                backgroundColor: windowWidth! > 639 ? "#86A1D8" : "transparent",
                padding: 0,
                borderBottom: windowWidth! > 639 ? "transparent" : "0.5px solid #F4F4F9!important",
                margin: 0,
                ".css-hfutr2-MuiSvgIcon-root-MuiSelect-icon": { color: "#F4F4F9" }
            }}
            className="sm:rounded-md"
            size="small"
        >
            <InputLabel id="demo-select-small" sx={{ color: "#F4F4F9", fontSize: "14px" }}>
                {category}
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
                <MenuItem value="announcements">Announcements</MenuItem>
                <MenuItem value="general discussion">General discussion</MenuItem>
                <MenuItem value="general coding">General coding</MenuItem>
                <MenuItem value="react api">React api</MenuItem>
                <MenuItem value="vue api">Vue api</MenuItem>
                <MenuItem value="animation">Animation</MenuItem>
                <MenuItem value="asset management">Asset management</MenuItem>
                <MenuItem value="material">Material</MenuItem>
                <MenuItem value="networking">Networking</MenuItem>
                <MenuItem value="physics">Physics</MenuItem>
            </Select>
        </FormControl>
    )
}

export default SelectCategory
