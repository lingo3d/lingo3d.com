import React from "react"
import { useState } from "react"
import dynamic from "next/dynamic"
// import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false })

const modules = {
    toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["code-block", "blockquote"],
        [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" }
        ],
        [{ script: "sub" }, { script: "super" }],
        ["link", "image"]
    ]
}

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
    "bullet",
    "indent",
    "link",
    "image",
    "video"
]

type RichTextEditorProps = {
    handleChange: (output: string) => void
    value: string
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({
    handleChange,
    value
}) => {
    return (
        <ReactQuill
            theme="snow"
            modules={modules}
            onChange={handleChange}
            value={value}
            formats={formats}
            placeholder={"Enter thread text..."}
            className=" bg-white w-full mt-[20px] rounded-sm text-black"
        />
    )
}

export default RichTextEditor
