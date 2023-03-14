import { Snackbar, Alert } from "@mui/material"

type MuiSnackbarProps = {
    open: boolean
    handleClose: () => void
    errMsg: string
}

export const MuiSnackbar = ({
    open,
    handleClose,
    errMsg
}: MuiSnackbarProps) => {
    return (
        <>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="error"
                    sx={{
                        width: "100%",
                        background: "#d33030",
                        color: "#F4F4F9"
                    }}
                >
                    {errMsg}
                </Alert>
            </Snackbar>
        </>
    )
}

export default MuiSnackbar
