import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
    return (
        <Html>
            <Head />
            <body className="bg-[#1E1E1E]">
                <Main />
                <NextScript />
                <div id="modal-root" />
            </body>
        </Html>
    )
}
