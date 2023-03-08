import React, { useEffect, useState } from "react"
import ToogleForm from "./ToogleForm"

const Modal = () => {
    const [isBrowser, setIsBrowser] = useState(false)

    useEffect(() => {
        setIsBrowser(true)
    }, [])

    if (isBrowser) {
        return <ToogleForm />
    } else {
        return null
    }
}

export default Modal
