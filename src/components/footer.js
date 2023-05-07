import React from 'react';
import { Layout } from './layout';
import Link from 'next/link';
import en from "../components/translations/en.json";
import es from "../components/translations/es.json";
import { useRouter } from "next/router";
import LangSelector from './langSelector';

const Footer = () => {
  const {asPath, locale, locales} = useRouter()
  const t = locale === "es" ? es : en;

  return (
    <footer className='w-full font-medium  sm:text-base'>
        <Layout className='py-6 flex items-center justify-between lg:flex-col lg:py-6'>
            <span className='text-xs dark:text-light '>{new Date().getFullYear()} &copy; {t.footer.rights} </span>
            <div className='lg:py-2 flex items-center text-lg bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent'>
            {t.footer.madeBy} <span className=' text-2xl px-1  '>&#9825; </span> {t.footer.madeByCont} &nbsp;<Link href="https://www.linkedin.com/in/luciabelen" target="_blank"> Lucía Belén </Link>
            </div>
            <LangSelector/>

        
        </Layout>
        </footer>
  )
}

export default Footer