import Drawer from "@mui/material/Drawer"

import { showDrawer } from "../../../signals/showDrawer"
import Content from "./Content"

export default function LeftDrawer() {
    return (
        <div className="flex">
            <Drawer
                open={showDrawer.value}
                className="w-64"
                onClose={() => (showDrawer.value = false)}
                sx={{
                    "& .MuiDrawer-paper": {
                        top: "70px",
                        height: "calc(100% - 70px)"
                    }
                }}
                classes={{
                    paper: "w-64"
                }}
                PaperProps={{
                    sx: {
                        backgroundColor: "#121316",
                        color: "#c1c1c1"
                    }
                }}
            >
                <Content />
            </Drawer>
        </div>
    )
}
