import { Response } from "../types"

export const getCategory = (data: Response, category: string) =>
    data.data.filter((f) => f.attributes.category === category)
