import React, { forwardRef } from "react"
import ICP from "./ICP"
import Partners from "./Partners"

const ChildComponent = forwardRef(
    (props, ref: React.ForwardedRef<HTMLElement>) => {
        return (
            <footer ref={ref} className="z-[999] w-full bg-gray-500">
                <Partners />
                <ICP />
            </footer>
        )
    }
)

ChildComponent.displayName = "ChildComponent"

export default ChildComponent
