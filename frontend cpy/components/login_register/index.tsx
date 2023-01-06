import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import ToogleForm from "./ToogleForm"

type ModalProps = {
    show: boolean
    onClose: () => void
    displayRegister: boolean
    setDisplayRegister: (display: boolean) => void
}

const Modal = ({ show, onClose, displayRegister, setDisplayRegister }: ModalProps) => {
    const [isBrowser, setIsBrowser] = useState(false)

    useEffect(() => {
        setIsBrowser(true)
    }, [])

    const handleCloseClick = (e: any) => {
        e.preventDefault()
        onClose()
    }

    if (isBrowser) {
        return ReactDOM.createPortal(
            <ToogleForm
                show={show}
                handleClose={handleCloseClick}
                displayRegister={displayRegister}
                setDisplayRegister={setDisplayRegister}
            />,
            //@ts-ignore
            document.getElementById("modal-root")
        )
    } else {
        return null
    }
}

export default Modal
