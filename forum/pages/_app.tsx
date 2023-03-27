import { useState } from "react"
import { AppProps } from "next/app"
import { Provider } from "../context/user"
import Router from "next/router"
import Head from "next/head"
import Loader from "../components/Loader"
import ErrorBoundary from "../components/errors/ErrorBoundary"
import "../styles/globals.css"
import AuthModal from "../components/authModal"
import ResetPassword from "../components/ResetPassword"
import Navigation from "../components/navigation/index"

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
            <Head>
                <title>Lingo3D forum</title>
            </Head>
            <Provider>
                <ResetPassword />
                <Navigation />
                <AuthModal />
                {loading && <Loader />}
                <ErrorBoundary>
                    <div className="px-[35px] md:px-[70px] lg:px-[220px] 2xl:px-[80px] mt-[94px] max-w-[1550px] mx-auto min-h-screen">
                        <Component className="px-[35px]" {...pageProps} />
                    </div>
                </ErrorBoundary>
            </Provider>
        </>
    )
}

export default MyApp
