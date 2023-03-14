import React from "react"

const Title: React.FC<{ title: string }> = ({ title }) => {
    return <div className="text-[26px] textColor2">{title}</div>
}

export default Title
