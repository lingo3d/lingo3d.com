import {
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Box,
    Typography,
    Button
} from "@mui/material"
import ClockIcon from "../../icons/ClockIcon"
import EarthIcon from "../../icons/EarthIcon"
import LikeIcon from "../../icons/LikeIcon"
import FolderIcon from "../../icons/FolderIcon"
import ArchiveIcon from "../../icons/ArchiveIcon"
import NoticeIcon from "../../icons/NoticeIcon"
import Avatar from "@mui/material/Avatar"
import { showLogin } from "../../../signals/showLogin"
import { showCreateProject } from "../../../signals/showCreateProject"
import { useUser } from "../../../context/user"
import { unsetToken as logout } from "../../api/auth/js-cookie"

type User = {
    username: string
}

const Content = () => {
    //@ts-ignore
    const user: User = useUser()

    return (
        <Box className="flex flex-col justify-between items-center h-full w-full">
            <List className="flex flex-col gap-y-4 pt-8 w-full">
                {user ? (
                    <Box className="w-full flex justify-start items-center gap-x-2 px-3">
                        <Avatar
                            sx={{
                                width: "24px",
                                height: "24px",
                                cursor: "pointer"
                            }}
                        />
                        <Typography className="!text-[18px]">
                            @{user.username}
                        </Typography>
                    </Box>
                ) : (
                    <Box className="w-full px-2">
                        <Button
                            variant="contained"
                            size="small"
                            className="w-full"
                            onClick={() => (showLogin.value = true)}
                        >
                            Log in
                        </Button>
                    </Box>
                )}

                {user ? (
                    <Box className="px-2">
                        <Button
                            variant="contained"
                            size="small"
                            className="w-full"
                            onClick={() => (showCreateProject.value = true)}
                        >
                            Create New
                        </Button>
                    </Box>
                ) : (
                    <Box className="px-2">
                        <Button
                            variant="outlined"
                            sx={{ background: "transparent", color: "white" }}
                            size="small"
                            className="w-full"
                            onClick={() => (showLogin.value = true)}
                        >
                            Create New
                        </Button>
                    </Box>
                )}

                <Box className="w-full">
                    <ListItemButton className="hover:bg-slate-300">
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
                        {!user ? (
                            <ListItemText primary="Log In" />
                        ) : (
                            <ListItemText
                                primary="Log Out"
                                onClick={() => logout()}
                            />
                        )}
                    </ListItemButton>
                </Box>
            </List>
            <Box className="w-full p-2 py-4 flex flex-col justify-center items-center gap-y-4">
                <Button
                    variant="outlined"
                    sx={{ background: "transparent", color: "white" }}
                    size="small"
                    className="w-full"
                >
                    Documentation
                </Button>
                <Button
                    variant="outlined"
                    sx={{ background: "transparent", color: "white" }}
                    size="small"
                    className="w-full"
                >
                    Help
                </Button>
            </Box>
        </Box>
    )
}

export default Content
