import { createContext, useState, useEffect, useContext } from "react"
import Cookies from "js-cookie"
import { getTokenFromLocalCookie } from "../pages/api/auth/js-cookie"

const Context = createContext(undefined)

export function Provider({ children }: any) {
    const [userData, setUserData] = useState()

    useEffect(() => {
        const getUserData = async () => {
            const user = !!getTokenFromLocalCookie()
            if (user) {
                const token = getTokenFromLocalCookie()

                try {
                    const res = await fetch(
                        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/users/me/`,
                        {
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${token}`
                            }
                        }
                    )
                    const data = await res.json()
                    setUserData(data)
                } catch (error) {
                    // unsetToken() without the page refresh if server is down and cookies are still set
                    Cookies.remove("id")
                    Cookies.remove("username")
                    Cookies.remove("jwt")
                    return
                }
            }
        }
        getUserData()
    }, [])

    return <Context.Provider value={userData}>{children}</Context.Provider>
}

export const useUser = () => useContext(Context)
