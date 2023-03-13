import { Box, Dialog, Button, TextField } from "@mui/material"
import { showCreateProject } from "../../signals/showCreateProject"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"

const CreateProjectModal = () => {
    return (
        <Dialog
            open={showCreateProject.value}
            onClose={() => (showCreateProject.value = false)}
            className="w-screen h-full absolute top-0 left-0 flex flex-col justify-center items-center"
        >
            <Box className="flex flex-col justify-center items-center p-6 gap-y-4 bg-[#292B32] textColor min-w-[280px]">
                <Box className="text-[22px]">Create Your Project</Box>
                <TextField
                    fullWidth
                    label="Title"
                    type="text"
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
                                defaultChecked
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
                <Button
                    variant="contained"
                    className="w-full"
                    sx={{ paddingY: "10px !important" }}
                >
                    Create
                </Button>
            </Box>
        </Dialog>
    )
}

export default CreateProjectModal
