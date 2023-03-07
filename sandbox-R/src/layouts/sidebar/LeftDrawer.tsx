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
                classes={{
                    paper: "w-64"
                }}
            >
                <Content />
            </Drawer>
        </div>
    )
}
