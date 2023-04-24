import React, { ReactElement } from "react"
import { useRouter } from "next/router"
import { cloneElement } from "react"

interface CustomLinkProps extends React.PropsWithChildren<{}> {
    href: string
    [x: string]: any
}

const CustomLink: React.FC<CustomLinkProps> = ({
    href,
    children,
    ...props
}) => {
    const router = useRouter()

    const handleClick = (event: React.MouseEvent) => {
        event.preventDefault()

        if (typeof window !== "undefined") {
            const targetUrl = new URL(href)
            const targetPathname = targetUrl.pathname

            const currentPathname =
                process.env.NODE_ENV === "production"
                    ? "/forum" + router.pathname
                    : router.pathname

            if (currentPathname !== targetPathname) {
                router.push(targetPathname)
            }
        }
    }

    if (!React.isValidElement(children)) {
        return null
    }

    const WrapperComponent: React.FC = (wrapperProps) => (
        <div onClick={handleClick} {...wrapperProps}>
            {children}
        </div>
    )

    return <WrapperComponent {...props} />
}

export default CustomLink
