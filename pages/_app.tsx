import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <main>
            <Head>
                <title>f0lg0</title>
            </Head>
            <Component {...pageProps} />
        </main>
    );
}
export default MyApp;
