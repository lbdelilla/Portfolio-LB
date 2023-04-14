import React from 'react'
import { Layout } from './layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full font-medium  sm:text-base'>
        <Layout className='py-6 flex items-center justify-between lg:flex-col lg:py-6'>
            <span className='text-xs dark:text-light '>{new Date().getFullYear()} &copy; Derechos Reservados. </span>
            <div className='lg:py-2 flex items-center text-lg bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent'>
            Creado con <span className=' text-2xl px-1  '>&#9825; </span> por&nbsp;<Link href="https://www.linkedin.com/in/luciabelen" target="_blank"> Lucía Belén </Link>
            </div>
            <Link href="/" className='dark:text-light'> Say Hello </Link>
        
        </Layout>
        </footer>
  )
}

export default Footer