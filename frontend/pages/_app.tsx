import { useState } from "react"
import { AppProps } from "next/app"
import { Provider } from "../context/user"
import Router from "next/router"
import Loader from "../components/Loader"
import NavBar from "../components/AppBar"
import ErrorBoundary from "../components/errors/ErrorBoundary"
import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
    const [loading, setLoading] = useState(false)
    Router.events.on("routeChangeStart", (url) => {
        setLoading(true)
    })
    Router.events.on("routeChangeComplete", (url) => {
        setLoading(false)
    })

    return (
        <>
            <Provider>
                <NavBar />
                {loading && <Loader />}
                <ErrorBoundary>
                    <div className="px-[35px] md:px-[70px] lg:px-[220px]">
                        <Component className="px-[35px]" {...pageProps} />
                    </div>
                </ErrorBoundary>
            </Provider>
        </>
    )
}

export default MyApp
