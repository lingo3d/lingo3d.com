import Cookies from "js-cookie"
import { User } from "../../../types"

type Data = {
    jwt: string
    user: User
}

export const setToken = (data: Data) => {
    if (typeof window === "undefined") return

    Cookies.set("jwt", data.jwt)
    Cookies.set("username", data.user.username)
    Cookies.set("id", data.user.id.toString())

    if (Cookies.get("username")) {
        window.location.reload()
    }
}

export const unsetToken = () => {
    Cookies.remove("id")
    Cookies.remove("username")
    Cookies.remove("jwt")
    //@ts-ignore
    window.location = "/"
}

export const getTokenFromLocalCookie = () => {
    return Cookies.get("jwt")
}
