import { useState } from "react"
import {
    Box,
    Dialog,
    Button,
    TextField,
    Checkbox,
    FormControlLabel
} from "@mui/material"
import { showCreateProject } from "../../signals/showCreateProject"
import { useUser } from "../../context/user"
import { nanoid } from "nanoid"
import { getTokenFromLocalCookie } from "../api/auth/js-cookie"

type CreateProjectModalType = {
    onCardUpdate: () => void
}

const CreateProjectModal = ({ onCardUpdate }: CreateProjectModalType) => {
    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [isPublic, setIsPublic] = useState<boolean>(true)
    const [error, setError] = useState("")
    const user = useUser()

    const createSandbox = async () => {
        try {
            const post = await fetch(
                `${import.meta.env.VITE_PUBLIC_STRAPI_URL}/api/sandboxes`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${getTokenFromLocalCookie()}`
                    },
                    method: "POST",
                    body: JSON.stringify({
                        data: {
                            title,
                            isPublic,
                            uuid: nanoid(),
                            //@ts-ignore
                            owners: user?.username,
                            type: "Lingo3D",
                            description: description
                        }
                    })
                }
            )
            const res = await post.json()
            if (res.error) {
                setError(res.error.message)
                return
            }
            setTitle("")
            setDescription("")
            setIsPublic(true)
            showCreateProject.value = false
            onCardUpdate()
        } catch (error) {
            alert(error)
            console.log(error)
        }
    }

    return (
        <Dialog
            open={showCreateProject.value}
            onClose={() => (setError(""), (showCreateProject.value = false))}
            className="w-screen h-full absolute top-0 left-0 flex flex-col justify-center items-center"
        >
            <Box className="flex flex-col justify-center items-center p-6 gap-y-4 bg-[#292B32] textColor min-w-[280px]">
                <Box className="text-[22px] py-2">Create Your Project</Box>
                <TextField
                    fullWidth
                    label="Title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    inputProps={{ maxLength: 40 }}
                    sx={{
                        background: "#343740",
                        border: "none",
                        borderRadius: "4px",
                        "&:hover": {
                            borderColor: "#c1c1c1 !important"
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#c1c1c1 !important",
                            borderWidth: "1px !important",
                            borderStyle: "solid !important"
                        }
                    }}
                    InputLabelProps={{
                        sx: {
                            color: "#c1c1c1"
                        }
                    }}
                    InputProps={{
                        sx: {
                            color: "#c1c1c1"
                        }
                    }}
                />
                <TextField
                    label="What is this project about?"
                    multiline
                    fullWidth
                    rows={3}
                    maxRows={4}
                    inputProps={{ maxLength: 100 }}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    sx={{
                        background: "#343740",
                        border: "none",
                        borderRadius: "4px",
                        "&:hover": {
                            borderColor: "#c1c1c1 !important"
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#c1c1c1 !important",
                            borderWidth: "1px !important",
                            borderStyle: "solid !important"
                        }
                    }}
                    InputLabelProps={{
                        sx: {
                            color: "#c1c1c1"
                        }
                    }}
                    InputProps={{
                        sx: {
                            color: "#c1c1c1"
                        }
                    }}
                />
                <Box className="w-full">
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={isPublic}
                                onChange={() => setIsPublic(!isPublic)}
                                sx={{
                                    borderColor: "#c1c1c1 !important",
                                    color: "#c1c1c1 !important",
                                    "&:hover": {
                                        backgroundColor: "transparent"
                                    },
                                    "&.Mui-disabled": {
                                        borderColor: "rgba(0, 0, 0, 0.26)"
                                    }
                                }}
                            />
                        }
                        label="Public"
                        labelPlacement="start"
                        sx={{ margin: 0 }}
                    />
                </Box>

                {error && <Box className="text-red-500">{error}</Box>}
                <Button
                    disabled={title ? false : true}
                    variant="contained"
                    className="w-full"
                    sx={{ paddingY: "10px !important" }}
                    onClick={() => createSandbox()}
                >
                    Create
                </Button>
            </Box>
        </Dialog>
    )
}

export default CreateProjectModal
