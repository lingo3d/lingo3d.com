import { Html, Head, Main, NextScript } from "next/document"
import React from "react"

export default function Document() {
    const fontWeights = [100, 500]

    return (
        <Html lang="en">
            <Head>
                {fontWeights.map((weight) => (
                    <React.Fragment key={weight}>
                        <link
                            key={`font-woff2-${weight}`}
                            rel="preload"
                            href={`/fonts/${weight}-graphie.woff2`}
                            as="font"
                            type="font/woff2"
                            crossOrigin="anonymous"
                        />
                    </React.Fragment>
                ))}
                {fontWeights.map((weight) => (
                    <React.Fragment key={weight}>
                        <link
                            key={`font-woff2-${weight}`}
                            rel="preload"
                            href={`/fonts/${weight}-graphie.woff`}
                            as="font"
                            type="font/woff2,font/woff"
                            crossOrigin="anonymous"
                        />
                    </React.Fragment>
                ))}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
