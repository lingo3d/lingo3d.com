import { useState, useEffect } from "react"
import { showDrawer } from "../../../signals/showDrawer"
import Menu from "@mui/icons-material/Menu"
import Avatar from "@mui/material/Avatar"
import SearchBar from "material-ui-search-bar"
import { useWindowWidth } from "@react-hook/window-size"
import AddIcon from "@mui/icons-material/Add"

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
                    <Menu
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
            {/* <div className="w-[28px] h-[28px]">
                <AddIcon sx={{ width: "100%", height: "100%" }} />
            </div> */}
        </nav>
    )
}

export default Nav
