import { List, ListItemButton, ListItemIcon, ListItemText, Box, Typography, Button } from "@mui/material"
import ClockIcon from "../../icons/ClockIcon"
import EarthIcon from "../../icons/EarthIcon"
import LikeIcon from "../../icons/LikeIcon"
import FolderIcon from "../../icons/FolderIcon"
import ArchiveIcon from "../../icons/ArchiveIcon"
import Avatar from "@mui/material/Avatar"
import { showLogin } from "../../../signals/showLogin"
import { useUser } from "../../../context/user"
import { unsetToken as logout } from "../../api/auth/js-cookie"

const Content = () => {
    const user = useUser()

    return (
        <List className="flex flex-col gap-y-4 pt-8">
            <Box>
                <Box className="ml-4 mb-4 flex gap-x-2">
                    {user ? (
                        <>
                            <Avatar sx={{ width: "22px", height: "22px" }} />
                            <Typography className="ml-2">@Husky931</Typography>
                        </>
                    ) : (
                        <Button variant="contained" color="primary" size="small" className="w-[115px]" onClick={() => (showLogin.value = true)}>
                            Log in
                        </Button>
                    )}
                </Box>
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
            <Box>
                <Box className="ml-4">Account</Box>
                <ListItemButton className="hover:bg-white/20">
                    <ListItemIcon>
                        <FolderIcon />
                    </ListItemIcon>
                    {!user ? <ListItemText primary="Log In" /> : <ListItemText primary="Log Out" onClick={() => logout()} />}
                </ListItemButton>
            </Box>
        </List>
    )
}

export default Content
