import React, { useState, useRef } from "react"
import { NextPage, GetServerSideProps } from "next"
import { useRouter } from "next/router"
import { flushSync } from "react-dom"
import { useUser } from "../../context/user"
import { ThreadAnswer, SingleThread } from "../../types"
import TopPost from "../../pages_components/thread/TopPost"
import Title from "../../pages_components/thread/Title"
import Metadata from "../../pages_components/thread/Metadata"
import AddComment from "../../pages_components/thread/AddComment"
import Answers from "../../pages_components/thread/Answers"
import Box from "@mui/material/Box"
import CloseIcon from "@mui/icons-material/Close"

export type ActivateReply = (description: string, username: string) => void

const viewThread: NextPage<{
    data: SingleThread
    formerArray: ThreadAnswer[] | []
}> = ({ data, formerArray }) => {
    const router = useRouter()
    const [answer, setAnswer] = useState<undefined | string>()
    const [replyArea, setReplyArea] = useState<boolean>(false)
    const [userToReply, setUserToReply] = useState<string | null>(null)
    const [textToReply, setTextToReply] = useState<string | null>(null)
    const replyareaRef = useRef<null | HTMLDivElement>(null)
    const user: any = useUser()

    const submitAnswer = () => {
        if (!answer) return alert("empty")
        fetch(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/threads/${data.data.id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    data: {
                        answers: [
                            ...formerArray,
                            {
                                answer,
                                username: user.username,
                                replied: replyArea,
                                userToReply,
                                textToReply
                            }
                        ]
                    }
                })
            }
        )
            .then((res) => res.json())
            .then(() => {
                setAnswer("")
                setReplyArea(false)
                setTextToReply(null)
                setUserToReply(null)
                router.push({ pathname: router.asPath }, undefined, {
                    scroll: false
                })
            })
            .catch((err) => console.log(err))
    }

    const activateReply = (text: string, user: string) => {
        flushSync(() => {
            setReplyArea(true)
            setTextToReply(text)
            setUserToReply(user)
        })
        const replyarea = replyareaRef.current
        if (!replyarea) return
        replyarea.scrollIntoView({
            block: "start",
            inline: "nearest",
            behavior: "smooth"
        })
    }

    const cancelReply = () => {
        setReplyArea(false)
        setTextToReply(null)
        setUserToReply(null)
    }

    return (
        <>
            {/* <Box sx={{ marginTop: "25px" }}>
                <Breadcrumbs />
            </Box> */}
            <Box sx={{ marginTop: "25px" }}>
                <Title title={data.data.attributes.title} />
                <Metadata
                    username={data.data.attributes.username}
                    createdAt={data.data.attributes.createdAt.split("T")[0]}
                    tags={data.data.attributes.tags}
                />
            </Box>
            <TopPost data={data} user={user} activateReply={activateReply} />
            {/* <Box sx={{ marginTop: "25px" }}>
                <Pagination count={5} color="secondary" />
            </Box> */}
            {data.data.attributes.answers &&
                data.data.attributes.answers.map((m, i) => (
                    <Box key={i}>
                        <Answers
                            answer={m}
                            index={i}
                            data={data}
                            user={user}
                            activateReply={activateReply}
                        />
                    </Box>
                ))}
            {replyArea && (
                <div
                    ref={replyareaRef}
                    className="border-[1px] border-[#F4F4F9] rounded textColor2 mt-[25px] p-2 text-[13px] relative"
                >
                    <div>
                        Reply to: <span className="italic">{userToReply}</span>
                    </div>
                    <div>
                        Text:{" "}
                        <span className="italic whitespace-pre-line">
                            {textToReply}
                        </span>{" "}
                    </div>
                    <CloseIcon
                        className="absolute right-2 top-2 cursor-pointer"
                        onClick={() => cancelReply()}
                    />
                </div>
            )}
            {user && (
                <AddComment
                    setAnswer={setAnswer}
                    submitAnswer={submitAnswer}
                    answer={answer}
                />
            )}

            {/* <Box sx={{ marginTop: "25px" }}>
                <RichTextEditor />
            </Box> */}
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({
    params
}: any) => {
    const id = params.id[0]
    let response = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/threads/${id}`
    )
    let data = await response.json()
    let formerArray = data.data.attributes.answers || []

    return {
        props: { data, formerArray }
    }
}

export default viewThread
