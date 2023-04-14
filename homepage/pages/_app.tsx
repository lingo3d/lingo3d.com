import "@/styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"
import PassChanged from "../components/PassChanged"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Lingo3D</title>
            </Head>
            <PassChanged />
            <Component {...pageProps} />
        </>
    )
}
