import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


export const Project = ({ type, title, summary1, summary2, img, link, github, button }) => {

  
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
            srcSet={`${img}?w=300 300w, ${img}?w=600 600w, ${img}?w=900 900w`}
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
              {button}
            </Link>
          </div>
        </div>
      </article>
    );
  };

  export default Project;