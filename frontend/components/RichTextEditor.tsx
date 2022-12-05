import React from "react"
import { useState } from "react"
import dynamic from "next/dynamic"
import "react-quill/dist/quill.snow.css"
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false })

const RichTextEditor: React.FC = () => {
    const [value, setValue] = useState("")

    return <ReactQuill theme="snow" value={value} onChange={setValue} />
}

export default RichTextEditor
