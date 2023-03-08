import { useState, useEffect } from "react"
import { showDrawer } from "../../../signals/showDrawer"
import MenuOpenIcon from "@mui/icons-material/MenuOpen"
import Avatar from "@mui/material/Avatar"
import SearchBar from "material-ui-search-bar"
import { useWindowWidth } from "@react-hook/window-size"

const Nav = () => {
    const [windowWidth, setWindowWidth] = useState<number | undefined>()
    const width = useWindowWidth()

    useEffect(() => {
        setWindowWidth(width)
    }, [width])

    return (
        <nav className="h-[70px] bg-[#121316] flex justify-between items-center px-4">
            {windowWidth! < 639 && (
                <div className="w-[28px] h-[28px]">
                    <MenuOpenIcon
                        sx={{ width: "100%", height: "100%" }}
                        onClick={() => {
                            showDrawer.value = true
                        }}
                    />
                </div>
            )}
            <div className="flex-1 px-4">
                <SearchBar placeholder="Find your project" />
            </div>
            <div className="w-[28px] h-[28px]">
                <Avatar sx={{ width: "100%", height: "100%" }} />
            </div>
        </nav>
    )
}

export default Nav
