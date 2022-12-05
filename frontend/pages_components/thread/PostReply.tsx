import React from "react"

const PostReply: React.FC<{ user: string | null; text: string | null }> = ({ user, text }) => {
    return (
        <div className="mt-[10px] textColor2 borderBottom border rounded p-2">
            <div className="textColor1">{user} said</div>
            <div className="bg-[#647BA7] textColor2 p-2 pl-3 whitespace-pre-line">{text}</div>
        </div>
    )
}

export default PostReply
