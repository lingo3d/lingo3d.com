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
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false
    }
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

const RichTextEditor: React.FC = () => {
    const [value, setValue] = useState("")

    return (
        <div className="absolute bottom-0 left-0 right-0 h-screen w-screen">
            <div>
                <ReactQuill
                    theme="snow"
                    modules={modules}
                    formats={formats}
                    value={value}
                    onChange={setValue}
                    placeholder={"Write something awesome..."}
                    className=" bg-white h-[80%] w-[50%] absolute bottom-0 "
                />
            </div>
        </div>
    )
}

export default RichTextEditor
