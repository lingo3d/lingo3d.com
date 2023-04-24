import React from "react"
import { useRouter } from "next/router"
import { cloneElement } from "react"

interface CustomLinkProps extends React.PropsWithChildren<{}> {
    href: string
}

const CustomLink: React.FC<CustomLinkProps> = ({
    href,
    children,
    ...props
}) => {
    const router = useRouter()
    console.log(router.pathname, "router.pathname")
    const handleClick = (event: React.MouseEvent) => {
        event.preventDefault()

        if (typeof window !== "undefined") {
            // Extract pathname from the absolute URL
            const targetPathname = new URL(href, window.location.origin)
                .pathname
            console.log(window.location.origin, "i am window.location.origin")
            console.log(href, "i am href")
            console.log(targetPathname, "i am targetPathname")
            // Navigate only if the target pathname is different
            if (router.pathname !== targetPathname) {
                router.push(href)
            }
        }
    }

    if (!React.isValidElement(children)) {
        return null
    }

    const modifiedChildren = cloneElement(children, {
        //@ts-ignore
        onClick: handleClick,
        href: href
    })

    return <>{modifiedChildren}</>
}

export default CustomLink
