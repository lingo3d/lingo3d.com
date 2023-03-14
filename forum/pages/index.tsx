import { NextPage, GetStaticProps } from "next"
import { Response } from "../types"
import NavSection from "../components/navSection"
import Tags from "../pages_components/index/Tags"
import Body from "../pages_components/index/Body"
import { useWidth } from "../hooks/useWindowWidth"

const Home: NextPage<{ latestPosts: Response }> = ({ latestPosts }) => {
    const windowWidth = useWidth()

    return (
        <>
            <NavSection />
            {windowWidth! > 639 && <Tags />}
            <Body latestPosts={latestPosts} />
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    let backendData = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/threads?sort=updatedAt%3Adesc&pagination[limit]=-1`
    )
    let latestPosts = await backendData.json()

    return {
        props: {
            latestPosts
        },
        revalidate: 30
    }
}

export default Home
