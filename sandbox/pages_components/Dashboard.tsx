import {
    Button,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    TextField
} from "@mui/material"
import React from "react"
// import CreatNew from "../container/CreatNew"
// import ProjectSelect from "../container/ProjectSelect"
// import Recent from "../container/Recent"
import ArchiveIcon from "../icons/ArchiveIcon"
import ClockIcon from "../icons/ClockIcon"
import EarthIcon from "../icons/EarthIcon"
import EllipsisIcon from "../icons/EllipsisIcon"
import FolderIcon from "../icons/FoldreIcon"
import LikeIcon from "../icons/LikeIcon"
import NoticeIcon from "../icons/NoticeIcon"
import PageIcon from "../icons/PageIcon"
import ShareIcon from "../icons/ShareIcon"

const Dashboard = () => {
    return (
        <div className="flex w-full h-full flex-col">
            <div className="flex flex-row items-center w-full">
                <div className="m-2">
                    <img src="logo/lingo3d.png" className="w-20" />
                </div>
                <div className="flex-grow" />
                <div className="right-0 flex items-center">
                    <Button className="bg-[#EAFF96] text-black w-5 h-6 text-xs mx-1">
                        Create
                    </Button>
                    <Button className="hover:bg-white/20">
                        <NoticeIcon />
                    </Button>
                    <Button className="hover:bg-white/20">
                        <EllipsisIcon />
                    </Button>
                </div>
            </div>
            <div className="h-full flex-row flex">
                <div className="w-2/6 flex flex-col opacity-75">
                    <List>
                        <div className="my-5 left-4">Name</div>
                        <ListItemButton className="hover:bg-white/20">
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
                </div>
                <div className="w-full">
                    {/* <CreatNew/> */}
                    {/* <Recent/> */}
                </div>
            </div>
        </div>
    )
}

export default Dashboard
