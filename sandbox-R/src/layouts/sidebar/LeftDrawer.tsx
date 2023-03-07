import React from "react"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import InboxIcon from "@mui/icons-material/Inbox"
import MailIcon from "@mui/icons-material/Mail"
import { showDrawer } from "../../../signals/showDrawer"

// const drawerWidth = 240

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
                <List>
                    {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    )
}
