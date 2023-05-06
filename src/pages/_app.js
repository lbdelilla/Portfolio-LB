import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { montserrat } from "../components/fonts.js";
import Head from "next/head";
import { useRouter } from "next/router";



export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${montserrat.variable} font-mont dark:bg-dark bg-light w-full min-h-screen`}>
        <NavBar/>
        <AnimatePresence mode="wait">
        <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer/>
      </main>
    </>
  );
}
