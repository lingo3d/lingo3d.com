import React, { useMemo, useRef, useState } from "react"
import dynamic from "next/dynamic"
import "react-quill/dist/quill.snow.css"
import hljs from "highlight.js"
import "highlight.js/styles/night-owl.css"
import Loader from "./Loader"
import Snackbar from "./Snackbar"

type RichTextEditorProps = {
    handleChange: (output: string) => void
    value: string
}

const ReactQuill = dynamic(
    async () => {
        const { default: RQ } = await import("react-quill")

        return ({ forwardedRef, ...props }) => (
            <RQ ref={forwardedRef} {...props} />
        )
    },
    {
        ssr: false
    }
)

hljs.configure({
    languages: ["javascript", "ruby", "python", "rust", "typescript"]
})

const RichTextEditor: React.FC<RichTextEditorProps> = ({
    handleChange,
    value
}) => {
    const quillRef = useRef()
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)
    const [errMsg, setErrMsg] = useState("")

    const handleClose = () => {
        setOpen(false)
    }

    const imageHandler = (a) => {
        if (quillRef.current) {
            const editor = quillRef.current.getEditor()
            const range = quillRef.current.getEditor().getSelection(true)
            const input = document.createElement("input")
            input.setAttribute("type", "file")
            input.setAttribute("accept", "image/*")
            input.click()

            input.onchange = async () => {
                setLoading(true)

                const file = input.files[0]

                // file type is only image.
                if (/^image\//.test(file.type)) {
                    var formData = new FormData()
                    formData.append("file", file)
                    formData.append("upload_preset", "post_images")

                    try {
                        const res = await fetch("/forum/api/image_upload", {
                            method: "POST",
                            body: formData
                        })
                        const data = await res.json()
                        const url = data.response.secure_url
                        editor.insertEmbed(editor.getSelection(), "image", url)
                        editor.setSelection(range.index + 3)
                        setLoading(false)
                    } catch (error) {
                        setLoading(false)
                        setErrMsg("Problem uploading the image")
                        setOpen(true)
                    }
                } else {
                    setErrMsg("You could only upload images.")
                    setOpen(true)
                }
            }
        }
    }

    const modules = useMemo(
        () => ({
            syntax: {
                highlight: (text) => hljs.highlightAuto(text).value
            },
            toolbar: {
                handlers: { image: imageHandler },
                container: [
                    [{ header: [1, 2, false] }],
                    ["bold", "italic", "underline", "strike", "blockquote"],
                    [
                        { list: "ordered" },
                        { list: "bullet" },
                        // { list: "numbered" },
                        { indent: "-1" },
                        { indent: "+1" }
                    ],
                    ["link", "image"],
                    ["code-block"]
                    // ["clean"]
                ]
            },
            clipboard: {
                matchVisual: false
            }
        }),
        []
    )

    const formats = [
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "ordered",
        "bullet",
        "indent",
        "link",
        "image",
        "video",
        "code-block"
        // "clean"
    ]

    return (
        <>
            {loading && <Loader />}
            <Snackbar open={open} handleClose={handleClose} errMsg={errMsg} />
            <ReactQuill
                theme="snow"
                modules={modules}
                onChange={handleChange}
                forwardedRef={quillRef}
                value={value}
                formats={formats}
                placeholder={"Enter thread text..."}
                className=" bg-white w-full mt-[20px] rounded-sm text-black"
            />
        </>
    )
}

export default RichTextEditor
