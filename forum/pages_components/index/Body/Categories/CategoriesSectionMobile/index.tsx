import React from "react"
import CategoriesBoxMob from "./CategoriesBoxMob"
import { getCategory } from "../../../../../lib/getCategory"
import { Response } from "../../../../../types"

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
            <CategoriesBoxMob data={announcementsCategory} />
            <CategoriesBoxMob data={codingCategory} />
            <CategoriesBoxMob data={discussionCategory} />
            <CategoriesBoxMob data={physicsCategory} />
            <CategoriesBoxMob data={reactAPICategory} />
            <CategoriesBoxMob data={vueAPICategory} />
            <CategoriesBoxMob data={assetManagementCategory} />
            <CategoriesBoxMob data={materialCategory} />
            <CategoriesBoxMob data={animationCategory} />
            <CategoriesBoxMob data={networkingCategory} />
        </>
    )
}

export default CategoriesSectionMobile
