import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import ToogleForm from "./ToogleForm"

const Modal = () => {
    const [isBrowser, setIsBrowser] = useState(false)

    useEffect(() => {
        setIsBrowser(true)
    }, [])

    if (isBrowser) {
        return ReactDOM.createPortal(
            <ToogleForm />,
            //@ts-ignore
            document.getElementById("modal-root")
        )
    } else {
        return null
    }
}

export default Modal
