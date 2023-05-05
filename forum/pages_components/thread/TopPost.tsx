import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Cookies from "js-cookie"
import { User, SingleThread } from "../../types"
import ThumbUpIcon from "@mui/icons-material/ThumbUp"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import ShareIcon from "@mui/icons-material/Share"
import BookmarkIcon from "@mui/icons-material/Bookmark"
import ReplyIcon from "@mui/icons-material/Reply"
import Box from "@mui/material/Box"
import EditIcon from "@mui/icons-material/Edit"
import SaveIcon from "@mui/icons-material/Save"
import ClearIcon from "@mui/icons-material/Clear"
import RichTextEditor from "../../components/RichTextEditor"
import { ActivateReply } from "../../pages/thread/[...id]"

type TopPostProps = {
    data: SingleThread
    user: undefined | User
    activateReply: ActivateReply
}

const TopPost: React.FC<TopPostProps> = ({ data, user, activateReply }) => {
    const [editMode, setEditMode] = useState(false)
    const [initialDescription, setInitialDescription] = useState("")
    const [editDescription, setEditDescription] = useState("")
    const router = useRouter()

    useEffect(() => {
        setInitialDescription(data.data.attributes.description)
        setEditDescription(data.data.attributes.description)
    }, [editMode])

    const handleChange = (output: string) => {
        setEditDescription(output)
    }

    const handleEditClick = () => {
        setEditMode(true)
    }

    const saveEdit = (e: any) => {
        e.stopPropagation()

        const token = Cookies.get("jwt")

        fetch(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/threads/${data.data.id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    data: {
                        description: editDescription
                    }
                })
            }
        )
            .then((res) => res.json())
            .then(() => {
                setEditMode(false)
                router.push({ pathname: router.asPath }, undefined, {
                    scroll: false
                })
            })
            .catch((err) => console.log(err))
    }

    const cancelEdit = (e: any) => {
        e.stopPropagation()
        setEditDescription(initialDescription)
        setEditMode(false)
    }

    return (
        <Box
            sx={{ marginTop: "25px" }}
            className="mt-[25px] textColor2 borderBottom pb-4"
        >
            <div className="flex justify-between items-center textColor1 bg-[#081F4B] p-2">
                <div>{data.data.attributes.createdAt.split("T")[0]}</div>
                <div className="flex">
                    <div>#1</div>
                    {/* <MoreVertIcon /> */}
                </div>
            </div>
            <div className="flex justify-start items-center my-2">
                <div className="w-[58px] h-[58px]">
                    <img
                        src="/avatar2.png"
                        className="rounded"
                        alt="profile image"
                    />
                </div>
                <div className="flex flex-col mx-[8px]">
                    <div className="font-bold text-[15px] my-1">
                        {data.data.attributes.username}
                    </div>
                    {/* <div className="text-[12px]">Supreme member</div> */}
                </div>
                {/* <div className="flex flex-col flex-1 items-end">
                    <div className="text-[12px] my-1">Messages: 112</div>
                    <div className="text-[12px]">Reaction score: 913</div>
                </div> */}
            </div>
            {/* <PostReply /> */}
            {editMode ? (
                <RichTextEditor
                    value={editDescription}
                    handleChange={handleChange}
                />
            ) : (
                <div
                    dangerouslySetInnerHTML={{
                        __html: data.data.attributes.description
                    }}
                />
            )}
            <div className="flex justify-end items-center mt-[20px]">
                {user?.username === data.data.attributes.username && (
                    <div
                        onClick={() => handleEditClick()}
                        className="flex justify-center items-center"
                    >
                        {editMode ? (
                            <div className="flex gap-x-2">
                                <div
                                    className="flex cursor-pointer"
                                    onClick={(e) => saveEdit(e)}
                                >
                                    <SaveIcon className="mx-[5px]" />
                                    <div>Save</div>
                                </div>
                                <div
                                    className="flex cursor-pointer"
                                    onClick={(e) => cancelEdit(e)}
                                >
                                    <ClearIcon />
                                    <div>Cancel</div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex cursor-pointer">
                                <EditIcon className="mx-[5px]" />
                                {/* <div>Edit</div> */}
                            </div>
                        )}
                    </div>
                )}
                {/* <ShareIcon className="mx-[5px]"  /> 
                <ThumbUpIcon className="mx-[5px]" />
                <BookmarkIcon className="mx-[5px]" /> */}
                {!editMode && user && (
                    <ReplyIcon
                        className="mx-[5px] cursor-pointer"
                        onClick={() =>
                            activateReply(
                                data.data.attributes.description,
                                data.data.attributes.username
                            )
                        }
                    />
                )}
            </div>
            {/* <div className="flex mt-[20px]">
                <ThumbUpIcon className="w-[16px] h-[16px] mr-[5px]" />
                <div className="text-[11px]">You, Knan4, Rukoxk3v2 and 12 others like this</div>
            </div> */}
        </Box>
    )
}

export default TopPost
