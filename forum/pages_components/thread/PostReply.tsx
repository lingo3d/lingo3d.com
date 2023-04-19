import React from "react"

const PostReply: React.FC<{ user: string | null; text: string | null }> = ({
    user,
    text
}) => {
    return (
        <div className="mt-[10px] textColor2 borderBottom border rounded p-2 mb-4 ">
            <div className="text-[#fecc00] mb-2">{user} said</div>
            <div
                className="text-[#AFC7ED] border rounded p-2 bg-[#1C365A]"
                dangerouslySetInnerHTML={{
                    __html: text!
                }}
            />
        </div>
    )
}

export default PostReply
