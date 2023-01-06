import { NextPage } from "next"
import { useState } from "react"
import { useUser } from "../context/user"
import Cookies from "js-cookie"
import Link from "next/link"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import CloseIcon from "@mui/icons-material/Close"
import Input from "@mui/material/Input"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import RichTextEditor from "../components/RichTextEditor"

const UploadThread: NextPage = () => {
    const [title, setTitle] = useState("")
    const [richTextValue, setRichTextValue] = useState("")
    const [category, setCategory] = useState("")
    const [tags, setTags] = useState<Array<string>>([])
    const user = useUser()

    const addTags = (e: any) => {
        if (e.target.value === "Choose tags") return
        if (tags.includes(e.target.value)) return
        setTags([...tags, (tags[tags.length] = e.target.value)])
    }

    const removeTags = (index: number) => {
        const newTags = tags.filter((_, i) => i !== index)
        setTags(newTags)
    }

    const handleChange = (output: string) => {
        setRichTextValue(output)
    }

    async function postThread(e: any) {
        e.preventDefault()

        const token = Cookies.get("jwt")

        const postQuestion = await fetch(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/threads`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    data: {
                        title,
                        category,
                        description: richTextValue,
                        //@ts-ignore
                        username: user.username,
                        tags: tags.length === 0 ? null : tags
                    }
                })
            }
        )

        const data = await postQuestion.json()

        if (data.error) {
            alert(data.error.message)
        } else {
            //@ts-ignore
            window.location = `${process.env.NEXT_PUBLIC_BASE_URL}/thread/${data.data.id}/${data.data.attributes.title}`
        }
    }

    return (
        <>
            <Box className="flex flex-col justify-center items-center mt-[30px] bg-[#F4F4F9] p-4 rounded">
                <input
                    value={title}
                    type="text"
                    onChange={(e) =>
                        setTitle(
                            e.target.value.replace("\\", "").replace("//", "")
                        )
                    }
                    placeholder="Thread title"
                    maxLength={74}
                    className="w-full p-1 rounded-sm"
                />

                <RichTextEditor
                    handleChange={handleChange}
                    value={richTextValue}
                />
                <Box className="w-full flex justify-start gap-x-4">
                    <select
                        onChange={(e) => setCategory(e.target.value)}
                        className="mt-[20px] w-[50%] p-2 rounded-sm"
                    >
                        <option>Choose category</option>
                        <option value="announcements">Announcements</option>
                        <option value="general discussion">
                            General discussion
                        </option>
                        <option value="general coding">General coding</option>
                        <option value="react api">React api</option>
                        <option value="vue api">Vue api</option>
                        <option value="animation">Animation</option>
                        <option value="material">Material</option>
                        <option value="networking">Networking</option>
                        <option value="physics">Physics</option>
                    </select>
                    <select
                        onChange={(e) => addTags(e)}
                        className="mt-[20px] w-[50%] p-2 rounded-sm"
                    >
                        <option>Choose tags</option>
                        <option value="math">math</option>
                        <option value="buffergeometry">buffergeometry</option>
                        <option value="shadow">shadow</option>
                        <option value="getting-started">getting-started</option>
                        <option value="lights">lights</option>
                        <option value="editor">editor</option>
                        <option value="instanced-mesh">instanced-mesh</option>
                        <option value="camera-controls">camera-controls</option>
                        <option value="modules">modules</option>
                        <option value="mesh">mesh</option>
                    </select>
                </Box>
                <Box className="w-full bg-white mt-[25px] p-2 flex rounded-sm">
                    <div className="mr-[5px]">Tags Chosen:</div>
                    <ul className="flex flex-wrap gap-x-2">
                        {tags.map((m, i) => (
                            <li
                                key={i}
                                className="bg-[#E9E9E9] text-[#646464] flex justify-between items-center rounded"
                            >
                                <div className="px-2">{m}</div>
                                <CloseIcon
                                    onClick={() => removeTags(i)}
                                    fontSize="small"
                                    className="cursor-pointer"
                                />
                            </li>
                        ))}
                    </ul>
                </Box>
                <Button
                    onClick={(e) => postThread(e)}
                    disabled={title && category && richTextValue ? false : true}
                    variant="contained"
                    sx={{
                        padding: "10px",
                        marginTop: "20px",
                        textTransform: "none",
                        fontSize: "16px",
                        color: "#F4F4F9",
                        "&.MuiButton-contained": {
                            backgroundColor: "#86A1D8",
                            width: "100%"
                        }
                    }}
                >
                    Submit Question
                </Button>
            </Box>
        </>
    )
}

export default UploadThread
