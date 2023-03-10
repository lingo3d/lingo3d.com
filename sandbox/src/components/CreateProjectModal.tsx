import { Box, Dialog, Button } from "@mui/material"
import { showCreateProject } from "../../signals/showCreateProject"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"

// export default function CheckboxLabels() {
//   return (
//     <FormGroup>
//       <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
//       <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
//     </FormGroup>
//   );
// }

const CreateProjectModal = () => {
    return (
        <Dialog
            open={showCreateProject.value}
            onClose={() => (showCreateProject.value = false)}
            className="w-screen h-full absolute top-0 left-0 flex flex-col justify-center items-center"
        >
            <Box className="flex flex-col justify-center items-center p-6 gap-y-4 bg-[#292B32] textColor min-w-[280px]">
                <Box className="text-[22px]">Create Your Project</Box>

                <input
                    placeholder="Title"
                    className="w-full bg-transparent rounded border border-1 border-[rgb(193, 193, 193)] py-3 px-2 focus:outline-none select-none"
                />
                <Box className="w-full">
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Public" labelPlacement="start" sx={{ margin: 0 }} />
                </Box>
                <Button variant="contained" color="primary" size="small" sx={{ paddingY: "12px", fontSize: "14px" }} fullWidth>
                    Create
                </Button>
            </Box>
        </Dialog>
    )
}

export default CreateProjectModal
