import AnimatedText from '@/components/animatedText'
import { Layout } from '@/components/layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Commeet from '../../public/images/logoCOLOR.png'
import Portfolio from '../../public/images/Portfolio/Home-Light.png'
import Disney from '../../public/images/disney.png'
import Adriana from '../../public/images/adriana.png'
import AATW from '../../public/images/aatw.png'
import StarWars from '../../public/images/starwars.png'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/transitionEffect'
import en from '../components/translations/en.json'
import es from '../components/translations/es.json'
import { useRouter } from 'next/router'

const Project = ({ type, title, summary1, summary2, img, link, github }) => {
  const { asPath, locale, locales } = useRouter()
  const t = locale === 'es' ? es : en

  return (
    <article className="xs:p-4 w-full flex flex-col items-center justify-center rounded-3xl border border-solid border-dark bg-light p-6 relative rounded-br-2xl dark:bg-dark dark:text-light dark:border-light ">
      <div className="md:-right-2 md:w-[101%] xs:h-[101%] xs:rounded-[1.5rem] absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2.5rem] bg-gradient-to-r from-orange-400 to-purple-600 border border-solid border-dark rounded-br-3xl dark:border-light" />
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full cursor-pointer overflow-hidden rounded-lg "
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto rounded "
          priority={true}
          sizes="(max-width: 768px) 100vh,
                       (max-width: 1200px) 50vh,
                       50vh"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xs mb-2 dark:text-primaryDark lg:text-lg md:text-base ">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-xl font-bold ">{title}</h2>
        </Link>
        <p className="my-2 font-small text-sm text-dark text-justify dark:text-light sm:text-sm">
          {summary1}
        </p>
        <p className="my-2 font-small text-sm text-dark text-justify dark:text-light sm:text-sm">
          {summary2}
        </p>

        <div className="mt-2 flex items-center">
          <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className=" dark:bg-light dark:rounded-full dark:px-1"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.2 }}
          >
            <i class="fa-brands fa-github text-3xl text-orange-500"></i>
          </motion.a>
          <Link
            href={link}
            target="_blank"
            className="md:text-base ml-4 rounded-lg bg-dark text-light p-1 px-4 text-sm font-semibold hover:text-primary dark:bg-light dark:text-dark dark:hover:text-primary"
          >
            {t.projects.projectBtn}
          </Link>
        </div>
      </div>
    </article>
  )
}

const FeatureProject = ({
  type,
  title,
  summary1,
  summary2,
  img,
  link,
  github,
}) => {
  const { asPath, locale, locales } = useRouter()
  const t = locale === 'es' ? es : en

  return (
    <article
      className="p-10 w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl 
    relative rounded-br-2xl  dark:bg-dark dark:text-light dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-2xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-gradient-to-r from-orange-400 to-purple-600 dark:border-light
      border border-solid border-dark rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem] "
      />
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority={true}
          sizes="(max-width: 768px) 100vh,
                       (max-width: 1200px) 50vh,
                       50vh"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg-pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xs mt-2 dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-2xl font-bold sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark text-justify dark:text-light sm:font-small ">
          {summary1}
        </p>
        <p className="my-2 font-medium text-dark text-justify dark:text-light sm:font-small">
          {summary2}
        </p>

        <div className="mt-2 flex items-center">
          <motion.a
            href={github}
            target={'_blank'}
            rel="noopener noreferrer"
            className=" dark:bg-light dark:rounded-full dark:px-0.5"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.2 }}
          >
            <i class="fa-brands fa-github text-4xl text-orange-500"></i>
          </motion.a>
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="sm-px-4 sm:text-base ml-4 rounded-lg bg-dark text-light p-1 px-6 text-lg font-semibold hover:text-primary dark:bg-light dark:text-dark dark:hover:text-primary"
          >
            {t.projects.projectBtn}
          </Link>
        </div>
      </div>
    </article>
  )
}

const Projects = () => {
  const { asPath, locale, locales } = useRouter()
  const t = locale === 'es' ? es : en

  return (
    <>
      <Head>
        <title>Lucía Belén | Mis Proyectos </title>
        <meta
          name="Portfolio de Lucía Belén"
          content="Portfolio profesional de Lucía Belén, Desarrolladora de Software"
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify center">
        <Layout className="pt-16">
          <AnimatedText
            text={t.pageTitles.projects}
            className="mb-10 text-center"
          />

          <div className="grid grid-col-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 ">
            <div className="col-span-12">
              <FeatureProject
                title={t.projects.project1.title}
                summary1={t.projects.project1.info}
                summary2={t.projects.project1.infoCont}
                img={Commeet}
                link="https://sample-service-name-r5bf.onrender.com/"
                github="https://github.com/lbdelilla/Commeet-EventPlanner"
                type="HTML5 | CSS3 | Bootstrap | Javascript |  React Js  | Python | Flask | SqlAlchemy | PostgreSQL"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={t.projects.project6.title}
                summary1={t.projects.project6.info}
                img={StarWars}
                link="https://star-wars-blog-sandy.vercel.app/"
                github="https://github.com/lbdelilla/StarWars-Blog"
                type="HTML5 | CSS3 | TailwindCSS | Javascript  | React Js | Python | Flask | SqlAlchemy | PostgreSQL"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={t.projects.project5.title}
                summary1={t.projects.project5.info}
                img={AATW}
                link="https://www.aatwagency.com"
                github="https://github.com/lbdelilla/AATW-Web"
                type="HTML5 | CSS3 | TailwindCSS | Javascript  | React Js "
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={t.projects.project4.title}
                summary1={t.projects.project4.info}
                img={Adriana}
                link="https://www.adrianadelilla.es/"
                github="https://github.com/lbdelilla/adriana_de_lilla"
                type="HTML5 | CSS3 | Bootstrap | Javascript |  React Js"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={t.projects.project2.title}
                summary1={t.projects.project2.info}
                img={Disney}
                link="https://disney-blog-react-flask.vercel.app/"
                github="https://github.com/lbdelilla/Disney-Blog-React-Flask"
                type="HTML5 | CSS3 | Bootstrap | Javascript |  React Js  | Python | Flask | SqlAlchemy | PostgreSQL"
              />
            </div>
            <div className="col-span-6  sm:col-span-12">
              <Project
                title={t.projects.project3.title}
                summary1={t.projects.project3.info}
                img={Portfolio}
                link="/"
                github="https://github.com/lbdelilla/"
                type="HTML5 | Tailwind CSS | Javascript | Next JS | Framer Motion "
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default Projects
