import React from "react"

const PostReply: React.FC<{ user: string | null; text: string | null }> = ({
    user,
    text
}) => {
    return (
        <div className="mt-[10px] textColor2 borderBottom border rounded p-2 mb-4 ">
            <div className="text-[#fecc00] mb-2">{user} said</div>
            <div
                className="textColor1 border rounded p-2"
                dangerouslySetInnerHTML={{
                    __html: text
                }}
            />
        </div>
    )
}

export default PostReply
