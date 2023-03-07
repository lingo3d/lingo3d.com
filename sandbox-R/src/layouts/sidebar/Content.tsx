import { List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"
import ClockIcon from "../../icons/ClockIcon"
import EarthIcon from "../../icons/EarthIcon"
import LikeIcon from "../../icons/LikeIcon"
import FolderIcon from "../../icons/FolderIcon"
import ArchiveIcon from "../../icons/ArchiveIcon"

const Content = () => {
    return (
        <List>
            <div className="my-5 left-4">Name</div>
            <ListItemButton className="hover:bg-white/20">
                <ListItemIcon>
                    <ClockIcon />
                </ListItemIcon>
                <ListItemText disableTypography primary={<Typography>Recent</Typography>} />
            </ListItemButton>

            <ListItemButton className="hover:bg-white/20">
                <ListItemIcon>
                    <EarthIcon />
                </ListItemIcon>
                <ListItemText primary="Discover" />
            </ListItemButton>

            <ListItemButton className="hover:bg-white/20">
                <ListItemIcon>
                    <LikeIcon />
                </ListItemIcon>
                <ListItemText primary="Like" />
            </ListItemButton>

            <div className="my-5 left-4">Sandboxes</div>

            <ListItemButton className="hover:bg-white/20">
                <ListItemIcon>
                    <FolderIcon />
                </ListItemIcon>
                <ListItemText primary="Sandboxes" />
            </ListItemButton>

            <ListItemButton className="hover:bg-white/20">
                <ListItemIcon>
                    <ArchiveIcon />
                </ListItemIcon>
                <ListItemText primary="Deleted" />
            </ListItemButton>
        </List>
    )
}

export default Content
