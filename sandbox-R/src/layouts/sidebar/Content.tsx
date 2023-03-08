import { List, ListItemButton, ListItemIcon, ListItemText, Typography, Box } from "@mui/material"
import ClockIcon from "../../icons/ClockIcon"
import EarthIcon from "../../icons/EarthIcon"
import LikeIcon from "../../icons/LikeIcon"
import FolderIcon from "../../icons/FolderIcon"
import ArchiveIcon from "../../icons/ArchiveIcon"

const Content = () => {
    return (
        <List className="flex flex-col gap-y-4">
            <Box>
                <Box className="ml-4">Name</Box>
                <ListItemButton className="hover:bg-white">
                    <ListItemIcon>
                        <ClockIcon />
                    </ListItemIcon>
                    <ListItemText primary="Recent" />
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
            </Box>

            <Box>
                <Box className="ml-4">Sandboxes</Box>
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
            </Box>
        </List>
    )
}

export default Content
