import Button from "@mui/material/Button"
import RichTextEditor from "../../components/RichTextEditor"

type AddReplyProps = {
    handleChange: (value: string) => void
    value: string
    submitAnswer: () => void
}

const AddReply = ({ handleChange, value, submitAnswer }: AddReplyProps) => {
    return (
        <>
            <RichTextEditor handleChange={handleChange} value={value} />
            <Button
                onClick={() => {
                    submitAnswer()
                }}
                variant="contained"
                sx={{
                    padding: "10px",
                    marginTop: "20px",
                    textTransform: "none",
                    fontSize: "16px",
                    color: "#F4F4F9",
                    "&.MuiButton-contained": {
                        backgroundColor: "#86A1D8",
                        width: "100%"
                    }
                }}
            >
                Post reply
            </Button>
        </>
    )
}

export default AddReply
