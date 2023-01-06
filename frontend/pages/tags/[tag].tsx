import { NextPage, GetServerSideProps } from "next"
import { useState, useEffect } from "react"
import { Response } from "../../types"
import ThreadOverview from "../../components/ThreadOverview"
import NavSection from "../../components/navSection"
import Pagination from "@mui/material/Pagination"
import { Box } from "@mui/material"
import { useRouter } from "next/router"

const Tag: NextPage<{ data: Response; tag: string }> = ({ data, tag }) => {
    const [tagsData, setTagsData] = useState<Response>()
    const [pageIndex, setPageIndex] = useState(1)
    const router = useRouter()

    useEffect(() => {
        setTagsData(data)
        return () => {
            setPageIndex(1)
        }
    }, [router.asPath])

    const handlePaginationChange = async (_: any, page: number) => {
        let fetchPaginationPage = await fetch(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/threads?filters[tags][$contains]=${tag}&pagination[page]=${page}`
        )
        const response = await fetchPaginationPage.json()
        setPageIndex(page)
        setTagsData(response)
    }

    return (
        <>
            <NavSection />
            {data.meta?.pagination.pageCount > 1 && (
                <Pagination
                    count={data.meta?.pagination.pageCount}
                    onChange={handlePaginationChange}
                    color="secondary"
                    sx={{
                        maxWidth: "max-content",
                        marginTop: "25px",
                        "&.MuiPaginationItem-textSecondary, .MuiPaginationItem-textSecondary":
                            {
                                color: "#F4F4F9"
                            }
                    }}
                    page={pageIndex}
                />
            )}
            <Box className="mt-[25px]">
                <div className="textColor2 text-[18px]  mb-[5px]">
                    Tag: {tag}{" "}
                </div>
                {tagsData?.data.map((m) => (
                    <ThreadOverview key={m.id} data={m} query={tag} />
                ))}
            </Box>
            {data.meta?.pagination.pageCount > 1 && (
                <Pagination
                    count={data.meta?.pagination.pageCount}
                    onChange={handlePaginationChange}
                    color="secondary"
                    sx={{
                        maxWidth: "max-content",
                        marginTop: "25px",
                        "&.MuiPaginationItem-textSecondary, .MuiPaginationItem-textSecondary":
                            {
                                color: "#F4F4F9"
                            }
                    }}
                    page={pageIndex}
                />
            )}
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    //@ts-ignore
    const tag = params.tag
    let response = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/threads?filters[tags][$containsi]=${tag}`
    )
    let data = await response.json()

    return {
        props: {
            data,
            tag
        }
    }
}

export default Tag
