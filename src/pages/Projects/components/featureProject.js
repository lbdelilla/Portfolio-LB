import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const FeatureProject = ({
    type,
    title,
    summary1,
    summary2,
    img,
    link,
    github,
  }) => {
    const { locale } = useRouter();
    const t = locale === "es" ? es : en;
  
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
              target={"_blank"}
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
    );
  };

export default FeatureProject