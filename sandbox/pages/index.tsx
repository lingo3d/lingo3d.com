import Dashboard from "@/pages_components/Dashboard"
import { NextPage, GetStaticProps } from "next"

const Home: NextPage<{}> = () => {
    return (
        <div className="lingo3d-ui lingo3d-bg absfull overflow-scroll">
            <Dashboard />
            {/* <ProjectSelect/> */}
        </div>
    )
}

export default Home
