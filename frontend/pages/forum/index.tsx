import { NextPage, GetStaticProps } from "next"
import { Response } from "../../types"
import NavSection from "../../components/navSection"
import Tags from "../../pages_components/index/Tags"
import Body from "../../pages_components/index/Body"

const Home: NextPage<{ latestPosts: Response }> = ({ latestPosts }) => {
    return (
        <>
            <NavSection />
            <Tags />
            <Body latestPosts={latestPosts} />
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    let backendData = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/threads?sort=updatedAt%3Adesc&pagination[limit]=-1`)
    let latestPosts = await backendData.json()

    return {
        props: {
            latestPosts
        },
        revalidate: 30
    }
}

export default Home
