import { AppProps } from "next/app"
import Head from "next/head"
import React from "react"
import "tailwindcss/tailwind.css"

const app = ({ Component, pageProps }: AppProps) => {
    return (
        <div>
            <Head>
                <title>Drown The Sun</title>
                <meta name="description" content="German metal band Drown The Sun"></meta>
                <link href="https://fonts.googleapis.com/css?family=Inter:200,300,400,500,600,700" rel="stylesheet" />
            </Head>
            <Component {...pageProps} />
        </div>
    )
}
export default app
