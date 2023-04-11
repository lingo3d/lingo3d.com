import Cookies from "js-cookie"

export const setToken = (data: any) => {
    if (typeof window === "undefined") return

    if (data.user.confirmed === false) {
        Cookies.set("email", data.user.email)
        return window.location.assign("http://localhost:3500/verify-email")
    }

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
    window.location.assign("/")
}

export const getTokenFromLocalCookie = () => {
    return Cookies.get("jwt")
}
