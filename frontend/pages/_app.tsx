import { useState } from "react"
import { AppProps } from "next/app"
import { Provider } from "../context/user"
import Router from "next/router"
import Head from "next/head"
import Loader from "../components/Loader"
import AppBar from "../components/AppBar"
import ErrorBoundary from "../components/errors/ErrorBoundary"
import "../styles/globals.css"
import Modal from "../components/login_register"
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
                <Navigation />
                {/* <AppBar /> */}
                <Modal />
                {loading && <Loader />}
                <ErrorBoundary>
                    <div className="px-[35px] md:px-[70px] lg:px-[220px] mt-[94px]">
                        <Component className="px-[35px]" {...pageProps} />
                    </div>
                </ErrorBoundary>
            </Provider>
        </>
    )
}

export default MyApp
