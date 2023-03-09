import { createContext, useState, useEffect, useContext } from "react"
import Cookies from "js-cookie"
import { getTokenFromLocalCookie, unsetToken } from "../src/api/auth/js-cookie"

const Context = createContext(undefined)

export function Provider({ children }: any) {
    const [userData, setUserData] = useState()

    useEffect(() => {
        const getUserData = async () => {
            const user = !!getTokenFromLocalCookie()
            if (user) {
                const token = getTokenFromLocalCookie()

                try {
                    const res = await fetch(`http://localhost:1337/api/users/me/`, {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`
                        }
                    })
                    const data = await res.json()
                    setUserData(data)
                } catch (error) {
                    // unsetToken()
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
