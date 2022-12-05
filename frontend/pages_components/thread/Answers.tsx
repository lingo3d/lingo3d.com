import { useEffect, useState, useRef } from "react"
import { flushSync } from "react-dom"
import { useRouter } from "next/router"
import Image from "next/image"
import { ThreadOptions, ThreadAnswer, User } from "../../types"
import profilePic from "../../public/avatar2.png"
import PostReply from "./PostReply"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import ThumbUpIcon from "@mui/icons-material/ThumbUp"
import ShareIcon from "@mui/icons-material/Share"
import BookmarkIcon from "@mui/icons-material/Bookmark"
import ReplyIcon from "@mui/icons-material/Reply"
import Box from "@mui/material/Box"
import EditIcon from "@mui/icons-material/Edit"
import SaveIcon from "@mui/icons-material/Save"
import ClearIcon from "@mui/icons-material/Clear"
import { ActivateReply } from "../../pages/thread/[...id]"

type Data = {
    data: ThreadOptions
    meta: {}
}

type AnswerProps = {
    answer: ThreadAnswer
    index: number
    data: Data
    user: User | undefined
    activateReply: ActivateReply
}

const Answer = ({ answer, index, data, user, activateReply }: AnswerProps) => {
    const [editMode, setEditMode] = useState(false)
    const [initialAnswer, setInitialAnswer] = useState("")
    const [editAnswer, setEditAnswer] = useState("")
    const textareaRef = useRef<HTMLTextAreaElement | null>(null)
    const router = useRouter()

    useEffect(() => {
        setInitialAnswer(answer.answer)
        setEditAnswer(answer.answer)
    }, [editMode])

    const handleEditClick = () => {
        flushSync(() => {
            setEditMode(true)
        })
        const textArea = textareaRef.current
        if (!textArea) return
        textArea.style.height = "auto"
        textArea.style.height = textArea.scrollHeight + "px"
        textArea.setSelectionRange(textArea.value.length, textArea.value.length)
        //correct bottom line
        // textArea.scrollTop = textArea.scrollHeight
    }

    const saveEdit = (e: any) => {
        e.stopPropagation()

        if (!data.data.attributes.answers) return

        const allAnswers = data.data.attributes.answers

        const editedAnswer = {
            answer: editAnswer,
            //@ts-ignore
            username: user.username,
            userToReply: allAnswers[index].userToReply,
            textToReply: allAnswers[index].textToReply,
            replied: allAnswers[index].replied
        }
        allAnswers.splice(index, 1, editedAnswer)

        fetch(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/threads/${data.data.id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    data: {
                        answers: allAnswers
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
        setEditAnswer(initialAnswer)
        setEditMode(false)
    }

    return (
        <Box
            sx={{ marginTop: "25px" }}
            className="mt-[25px] textColor2 borderBottom pb-4"
        >
            <div className="flex justify-between items-center textColor1 bg-[#081F4B] p-2">
                <div>cnone</div>
                <div className="flex">
                    <div>#{index + 2}</div>
                    {/* <MoreVertIcon /> */}
                </div>
            </div>
            <div className="flex justify-start items-center">
                <div className="w-[58px] h-[58px]">
                    <Image
                        src={profilePic}
                        width="100%"
                        height="100%"
                        className="rounded"
                    />
                </div>
                <div className="flex flex-col mx-[8px]">
                    <div className="font-bold text-[15px] my-1">
                        {answer.username}
                    </div>
                    {/* <div className="text-[12px]">Supreme member</div> */}
                </div>
                {/* <div className="flex flex-col flex-1 items-end">
                    <div className="text-[12px] my-1">Messages: 112</div>
                    <div className="text-[12px]">Reaction score: 913</div>
                </div> */}
            </div>
            {answer.replied && (
                <PostReply
                    user={answer.userToReply}
                    text={answer.textToReply}
                />
            )}
            {editMode ? (
                <textarea
                    value={editAnswer}
                    onChange={(e) => setEditAnswer(e.target.value)}
                    ref={textareaRef}
                    autoFocus
                    className="w-full bg-transparent mt-[5px] border-[1px] border-[#F4F4F9]"
                />
            ) : (
                <div className="mt-[10px] whitespace-pre-wrap">
                    {answer.answer}
                </div>
            )}

            <div className="flex justify-end items-center mt-[20px]">
                {user?.username === answer.username && (
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
                            </div>
                        )}
                    </div>
                )}

                {/* <ShareIcon className="mx-[5px]" />
                <ThumbUpIcon className="mx-[5px]" />
                <BookmarkIcon className="mx-[5px]" /> */}
                <ReplyIcon
                    className="mx-[5px] cursor-pointer"
                    onClick={() =>
                        activateReply(answer.answer, answer.username)
                    }
                />
            </div>
            {/* <div className="flex mt-[20px]">
                <ThumbUpIcon className="w-[16px] h-[16px] mr-[5px]" />
                <div className="text-[11px]">You, Knan4, Rukoxk3v2 and 12 others like this</div>
            </div> */}
        </Box>
    )
}

export default Answer
