import Box from "@mui/material/Box"
import Dialog from "@mui/material/Dialog"
import Image from "next/image"
import logo from "../../public/logo_colored_thick.png"
import Login from "./Login"
import Register from "./Register"

type ToogleFormProps = {
    show: boolean
    handleClose: (e: any) => void
    displayRegister: boolean
    setDisplayRegister: (display: boolean) => void
}

const Form = ({ show, handleClose, displayRegister, setDisplayRegister }: ToogleFormProps) => {
    return show ? (
        <Dialog
            onClose={handleClose}
            open={show}
            className='className="w-screen h-screen absolute top-0 left-0 flex justify-center items-center"'
        >
            <Box className="flex flex-col justify-center items-center p-6 gap-y-4">
                <Image src={logo} width="120px" height="22px" />

                {displayRegister ? <Register /> : <Login setDisplayRegister={setDisplayRegister} />}
            </Box>
        </Dialog>
    ) : null
}

export default Form
