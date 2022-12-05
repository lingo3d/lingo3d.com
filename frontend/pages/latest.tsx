import { useState, useEffect } from "react"
import { NextPage, GetStaticProps } from "next"
import { Response } from "../types"
import ThreadOverview from "../components/ThreadOverview"
import NavSection from "../components/navSection"
import { Box } from "@mui/material"
import Pagination from "@mui/material/Pagination"

const Latest: NextPage<{ data: Response }> = ({ data }) => {
    const [latestData, setLatestData] = useState<Response>()
    const [pageIndex, setPageIndex] = useState(1)

    useEffect(() => {
        setLatestData(data)
        return () => {
            setPageIndex(1)
        }
    }, [])

    const handlePaginationChange = async (_: any, page: number) => {
        let fetchPaginationPage = await fetch(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/threads?pagination[page]=${page}&sort=updatedAt%3Adesc`
        )
        const response = await fetchPaginationPage.json()
        setPageIndex(page)
        setLatestData(response)
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
                <div className="textColor2 text-[18px]  mb-[5px]">Latest</div>
                {latestData?.data.map((m) => (
                    <ThreadOverview key={m.id} data={m} />
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

export const getStaticProps: GetStaticProps = async (context) => {
    let response = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/threads?pagination[page]=1&sort=updatedAt%3Adesc`
    )
    let data = await response.json()

    return {
        props: {
            data
        },
        revalidate: 30
    }
}

export default Latest
