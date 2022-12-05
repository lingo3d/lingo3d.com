import { NextPage, GetStaticProps } from "next"
import { Response, ThreadOptions } from "../types"
import { useEffect, useState } from "react"
import { useWindowWidth } from "@react-hook/window-size"
import Link from "next/link"
import { getCategory } from "../lib/getCategory"
import { randomText } from "../lib/categoryDescription"
import ThreadLatest from "../pages_components/index/ThreadLatest"
import NavSection from "../components/navSection"
import CategoriesBoxMob from "../pages_components/index/CategoriesBoxMob"
import CategoriesBox from "../pages_components/index/CategoriesBox"
import Tags from "../pages_components/index/Tags"
import Box from "@mui/material/Box"

const Home: NextPage<{ latestPosts: Response }> = ({ latestPosts }) => {
    const [windowWidth, setWindowWidth] = useState<number | undefined>()
    const width = useWindowWidth()

    const announcementsCategory = getCategory(latestPosts, "announcements")
    const codingCategory = getCategory(latestPosts, "general coding")
    const discussionCategory = getCategory(latestPosts, "general discussion")
    const physicsCategory = getCategory(latestPosts, "physics")
    const reactAPICategory = getCategory(latestPosts, "react api")
    const vueAPICategory = getCategory(latestPosts, "vue api")
    const animationCategory = getCategory(latestPosts, "animation")
    const assetManagementCategory = getCategory(latestPosts, "asset management")
    const materialCategory = getCategory(latestPosts, "material")
    const networkingCategory = getCategory(latestPosts, "networking")

    useEffect(() => {
        setWindowWidth(width)
    }, [])

    return (
        <>
            <NavSection />
            <Tags />
            <Box className="flex  gap-x-8">
                <Box className="flex flex-col items-start flex-1">
                    <Box className="flex justify-between w-full">
                        <div className="text-[18px] textColor2 mt-[25px] mb-[10px]">
                            Categories
                        </div>
                        {windowWidth! > 639 && (
                            <div className="text-[18px] textColor2 mt-[25px] mb-[10px]">
                                Topics
                            </div>
                        )}
                    </Box>

                    <Box className="w-full">
                        {windowWidth! < 639 ? (
                            <>
                                <CategoriesBoxMob
                                    data={announcementsCategory}
                                />
                                <CategoriesBoxMob data={codingCategory} />
                                <CategoriesBoxMob data={discussionCategory} />
                                <CategoriesBoxMob data={physicsCategory} />
                                <CategoriesBoxMob data={reactAPICategory} />
                                <CategoriesBoxMob data={vueAPICategory} />
                                <CategoriesBoxMob
                                    data={assetManagementCategory}
                                />
                                <CategoriesBoxMob data={materialCategory} />
                                <CategoriesBoxMob data={animationCategory} />
                                <CategoriesBoxMob data={networkingCategory} />
                            </>
                        ) : (
                            <>
                                <CategoriesBox
                                    data={announcementsCategory}
                                    desc={randomText}
                                />
                                <CategoriesBox
                                    data={codingCategory}
                                    desc={randomText}
                                />
                                <CategoriesBox
                                    data={discussionCategory}
                                    desc={randomText}
                                />
                                <CategoriesBox
                                    data={physicsCategory}
                                    desc={randomText}
                                />
                                <CategoriesBox
                                    data={reactAPICategory}
                                    desc={randomText}
                                />
                                <CategoriesBox
                                    data={vueAPICategory}
                                    desc={randomText}
                                />
                                <CategoriesBox
                                    data={assetManagementCategory}
                                    desc={randomText}
                                />
                                <CategoriesBox
                                    data={materialCategory}
                                    desc={randomText}
                                />
                                <CategoriesBox
                                    data={animationCategory}
                                    desc={randomText}
                                />
                                <CategoriesBox
                                    data={networkingCategory}
                                    desc={randomText}
                                />
                            </>
                        )}
                    </Box>
                </Box>

                {windowWidth! > 639 && (
                    <Box className="flex flex-col items-start flex-1">
                        <Link href="/latest">
                            <div className="text-[18px] textColor2 mt-[25px] mb-[10px] cursor-pointer">
                                Latest
                            </div>
                        </Link>
                        <Box className="w-full">
                            {latestPosts.data.map((m) => (
                                <ThreadLatest key={m.id} data={m} />
                            ))}
                        </Box>
                    </Box>
                )}
            </Box>
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
