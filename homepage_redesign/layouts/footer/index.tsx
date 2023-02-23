import React, { forwardRef } from "react"
import Icp from "@/layouts/footer/Icp"
import Partners from "@/layouts/footer/Partners"

const ChildComponent = forwardRef(
    (props, ref: React.ForwardedRef<HTMLElement>) => {
        return (
            <footer ref={ref} className="z-[999] w-full bg-gray-500">
                <Partners />
                <Icp />
            </footer>
        )
    }
)

ChildComponent.displayName = "Footer"

export default ChildComponent
