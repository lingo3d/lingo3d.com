type User = {
    blocked: boolean
    confirmed: boolean
    createdAt: string
    email: string
    id: number
    provider: string
    updatedAt: string
    username: string
}

export type Response = {
    data: ThreadOptions[]
    meta: Pagination
}

type Pagination = {
    pagination: {
        page: number
        pageCount: number
        pageSize: number
        total: number
    }
}

export type SingleThread = {
    data: ThreadOptions
    meta: {}
}

export type ThreadOptions = {
    attributes: ThreadAttributes
    id: number
}

export type ThreadAttributes = {
    answers: ThreadAnswer[] | null
    category: CategoryNames
    tags: string[] | null
    createdAt: string
    description: string
    publishedAt: string
    title: string
    updatedAt: string
    username: string
}

export type ThreadAnswer = {
    answer: string
    username: string
    replied: boolean
    userToReply: string | null
    textToReply: string | null
}

type CategoryNames =
    | "announcements"
    | "general discussion"
    | "general coding"
    | "react api"
    | "vue api"
    | "animation"
    | "asset management"
    | "material"
    | "networking"
    | "physics"
