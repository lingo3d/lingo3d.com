import React from "react"
import CategoriesBox from "./CategoriesBox"
import { getCategory } from "../../../../../lib/getCategory"
import { Response } from "../../../../../types"
import { announcementsDesc } from "../../../../../lib/categoryDescription"
import { generalCodingDesc } from "../../../../../lib/categoryDescription"
import { generalDiscussionDesc } from "../../../../../lib/categoryDescription"
import { physicsDesc } from "../../../../../lib/categoryDescription"
import { reactApiDesc } from "../../../../../lib/categoryDescription"
import { vueApiDesc } from "../../../../../lib/categoryDescription"
import { assetManagementDesc } from "../../../../../lib/categoryDescription"
import { materialDesc } from "../../../../../lib/categoryDescription"
import { animationDesc } from "../../../../../lib/categoryDescription"
import { networkingDesc } from "../../../../../lib/categoryDescription"

const CategoriesSectionMobile: React.FC<{ latestPosts: Response }> = ({
    latestPosts
}) => {
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
            <CategoriesBox
                data={announcementsCategory}
                desc={announcementsDesc}
            />
            <CategoriesBox data={codingCategory} desc={generalCodingDesc} />
            <CategoriesBox
                data={discussionCategory}
                desc={generalDiscussionDesc}
            />
            <CategoriesBox data={physicsCategory} desc={physicsDesc} />
            <CategoriesBox data={reactAPICategory} desc={reactApiDesc} />
            <CategoriesBox data={vueAPICategory} desc={vueApiDesc} />
            <CategoriesBox
                data={assetManagementCategory}
                desc={assetManagementDesc}
            />
            <CategoriesBox data={materialCategory} desc={materialDesc} />
            <CategoriesBox data={animationCategory} desc={animationDesc} />
            <CategoriesBox data={networkingCategory} desc={networkingDesc} />
        </>
    )
}

export default CategoriesSectionMobile
