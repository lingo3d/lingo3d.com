import { useState, useEffect } from "react"
import { useUser } from "../../context/user"
import { showLogin } from "../../signals/showLogin"
import { showCreateProject } from "../../signals/showCreateProject"
import TemplateFeatured from "./TemplateFeatured"
import CreateProjectModal from "./CreateProjectModal"
import { Box } from "@mui/material"
import { Button } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import Sandbox from "./Sandbox"

const Home = () => {
    const user = useUser()
    const [sandboxes, setSandboxes] = useState([])
    const [cardsUpdated, setCardsUpdated] = useState(0)

    function handleCardUpdate() {
        setCardsUpdated(cardsUpdated + 1)
    }

    useEffect(() => {
        async function fetchSandboxes() {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/sandboxes`
            )
            const data = await response.json()
            setSandboxes(data.data)
        }

        fetchSandboxes()
    }, [cardsUpdated])

    return (
        <Box className="flex flex-col gap-y-6 md:gap-y-8">
            <CreateProjectModal onCardUpdate={handleCardUpdate} />
            <Box>
                <h2 className="text-[24px] font-[500] mb-2">Featured</h2>
                <TemplateFeatured />
            </Box>
            <Box>
                <Box>
                    <h2 className="text-[24px] font-[500] mb-2">Create</h2>
                    <Box className="flex flex-col md:flex-row gap-y-3 gap-x-3">
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            className="md:min-w-[105px]"
                            startIcon={<AddIcon />}
                            onClick={
                                user
                                    ? () => (showCreateProject.value = true)
                                    : () => (showLogin.value = true)
                            }
                        >
                            Create
                        </Button>
                    </Box>
                </Box>
                <Box>
                    <h2 className="text-[24px] font-[500] mb-2 mt-8">
                        Sandboxes
                    </h2>
                    <div className="flex flex-wrap justify-start">
                        {sandboxes.map((sandbox: any) => {
                            return (
                                <Sandbox
                                    key={sandbox.id}
                                    title={sandbox.attributes.title}
                                    description={sandbox.attributes.description}
                                />
                            )
                        })}
                    </div>
                </Box>
            </Box>
        </Box>
    )
}

export default Home
