import React from "react"
import CategoriesBox from "./CategoriesBox"
import { getCategory } from "../../../../../lib/getCategory"
import { Response } from "../../../../../types"
import { randomText } from "../../../../../lib/categoryDescription"

const CategoriesSectionMobile: React.FC<{ latestPosts: Response }> = ({ latestPosts }) => {
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

    return (
        <>
            <CategoriesBox data={announcementsCategory} desc={randomText} />
            <CategoriesBox data={codingCategory} desc={randomText} />
            <CategoriesBox data={discussionCategory} desc={randomText} />
            <CategoriesBox data={physicsCategory} desc={randomText} />
            <CategoriesBox data={reactAPICategory} desc={randomText} />
            <CategoriesBox data={vueAPICategory} desc={randomText} />
            <CategoriesBox data={assetManagementCategory} desc={randomText} />
            <CategoriesBox data={materialCategory} desc={randomText} />
            <CategoriesBox data={animationCategory} desc={randomText} />
            <CategoriesBox data={networkingCategory} desc={randomText} />
        </>
    )
}

export default CategoriesSectionMobile
