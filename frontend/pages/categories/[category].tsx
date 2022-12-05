import { useState, useEffect } from "react"
import { NextPage, GetServerSideProps } from "next"
import { Response } from "../../types"
import NavSection from "../../components/navSection"
import ThreadOverview from "../../components/ThreadOverview"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import Pagination from "@mui/material/Pagination"
import Box from "@mui/material/Box"
import { useRouter } from "next/router"
// import { Breadcrumbs } from "@mui/material"

const Home: NextPage<{ data: Response; category: string }> = ({
    data,
    category
}) => {
    const [threadsData, setThreadsData] = useState<Response>()
    const [pageIndex, setPageIndex] = useState(1)
    const router = useRouter()

    useEffect(() => {
        setThreadsData(data)
        return () => {
            setPageIndex(1)
        }
    }, [router.asPath])

    const handlePaginationChange = async (_: any, page: number) => {
        let fetchPaginationPage = await fetch(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/threads?filters[category][$eq]=${category}&pagination[page]=${page}`
        )
        const response = await fetchPaginationPage.json()
        setPageIndex(page)
        setThreadsData(response)
    }
    return (
        <>
            {/* <Box sx={{ marginTop: "25px" }}>
                <Breadcrumbs />
            </Box> */}
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
                    {data.data.length > 0
                        ? data.data[0]?.attributes.category
                              .charAt(0)
                              .toUpperCase() +
                          data.data[0]?.attributes.category.slice(1)
                        : "Category empty"}
                </div>
                <div className="borderTop borderBottom ">
                    {/* <div className="flex justify-end items-center  py-2">
                        <div className="textColor2">filter</div>
                        <ArrowDropDownIcon sx={{ color: "#F4F4F9" }} />
                    </div> */}
                    {threadsData?.data.map((m) => (
                        <ThreadOverview key={m.id} data={m} />
                    ))}
                </div>
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

export async function getStaticPaths() {
    // let response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/threads`)
    // let data = await response.json()
    // let uniquePaths = [...new Set(data.data.map((m: any) => m.attributes.category))]

    // const paths = uniquePaths.map((m) => {
    //     return {
    //         params: { category: m }
    //     }
    // })

    const paths = [
        { params: { category: "announcements" } },
        { params: { category: "general discussion" } },
        { params: { category: "general coding" } },
        { params: { category: "react api" } },
        { params: { category: "vue api" } },
        { params: { category: "animation" } },
        { params: { category: "asset management" } },
        { params: { category: "material" } },
        { params: { category: "networking" } },
        { params: { category: "physics" } }
    ]

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context: any) {
    const category = context.params.category
    let response = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/threads?filters[category][$eq]=${category}`
    )
    let data = await response.json()

    return {
        props: { data, category },
        revalidate: 30
    }
}

export default Home
