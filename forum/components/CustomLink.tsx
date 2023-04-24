import { useRouter } from "next/router"
import { cloneElement } from "react"

const CustomLink = ({ href, children, ...props }) => {
    const router = useRouter()
    console.log(router.pathname, "router.pathname")
    const handleClick = (event) => {
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

    // Clone children and add the handleClick function to the onClick property
    const modifiedChildren = cloneElement(children, {
        onClick: handleClick,
        href: href
    })

    return <>{modifiedChildren}</>
}

export default CustomLink
