import Button from "@mui/material/Button"

type AddCommentProps = {
    setAnswer: (value: string) => void
    submitAnswer: () => void
    answer: string | undefined
}

const AddComment = ({ setAnswer, submitAnswer, answer }: AddCommentProps) => {
    return (
        <>
            <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="w-full p-1 border-2 mt-[20px]"
                placeholder="Enter your answer"
                rows={8}
            />
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

export default AddComment
