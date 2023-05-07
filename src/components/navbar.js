import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { coveredByYourGrace } from "./fonts.js";
import { SunIcon, MoonIcon } from "./icons";
import useThemeSwitcher from "./Hooks/useThemeSwitcher";
import { CustomLink, CustomMobileLink } from "./customLinks";


const MotionLink = motion(Link);

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-16 py-8 font-medium flex items-center justify-between dark:text-light relative">
      <MotionLink
        href="/"
        className={`${coveredByYourGrace.variable} w-full font-cover `}
        whileHover={{
          scale: [1, 1.1, 1],
          transition: {
            duration: 1,
            times: [0, 0.5, 1],
          },
        }}
      >
        <span
          className=" text-2xl font-bold
           bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent"
        >
          {" "}
          &lt;Lucía Belén /&gt;{" "}
        </span>
      </MotionLink>

      <button
        className="flex-col justify-center items-center hidden lg:flex xl:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          } `}
        >
          {" "}
        </span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          } `}
        >
          {" "}
        </span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        >
          {" "}
        </span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden xl:hidden">
        <nav>
          <CustomLink href="/" title="Inicio" className="mr-4 " />
          <CustomLink href="/about" title="Sobre Mi" className="mx-4 " />
          <CustomLink href="/projects" title="Proyectos" className="mx-4 " />
          <CustomLink href="/contact" title="Contáctame" className="ml-4 " />
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://www.github.com/lbdelilla"
            target={"_blank"}
            rel="noopener noreferrer"
            className="mx-2"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.2 }}
          >
            <i class="fa-brands fa-github text-2xl dark:bg-light dark:rounded-full dark:w-7 dark:pl-1 dark:text-xl text-orange-400"></i>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/luciabelen/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.2 }}
          >
            <i class="fa-brands fa-linkedin text-2xl dark:bg-light dark:rounded-full dark:w-7 dark:text-xl text-fuchsia-700 " style={{ padding: '0px 2px 0px 5px', '@media (prefers-color-scheme: dark)': { padding: '1px 3px' } }}></i>
          </motion.a>
          <motion.a
            href="mailto:lbdelilla@gmail.com"
            target={"_blank"}
            rel="noopener noreferrer"
            className="mx-2"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.2 }}
          >
            <i class="fa-solid fa-envelope text-2xl dark:bg-light dark:rounded-full dark:w-7 dark:pl-1 dark:text-xl text-purple-600"></i>
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-4 flex items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            {mode === "dark" ? (
              <i class="fa-solid fa-sun text-dark text-lg" style={{ padding: '1px 6px 1px 6px' }}></i>
            ) : (
              <i class="fa-solid fa-moon text-light text-lg" style={{ padding: '1px 7px 1px 7px' }}></i>
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] z-30 flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 
      "
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title="Inicio"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="Sobre Mi"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Proyectos"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/contact"
              title="Contáctame"
              className=""
              toggle={handleClick}
            />
          </nav>
          <nav className="flex items-center justify-center flex-wrap mt-2 ">
            <motion.a
              href="https://www.github.com/lbdelilla"
              target={"_blank"}
              rel="noopener noreferrer"
              className="mx-3 bg-light rounded-full  w-6 pl-1 sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.2 }}
            >
              <i class="fa-brands fa-github text-orange-400 "></i>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/lbdelilla"
              target={"_blank"}
              rel="noopener noreferrer"
              className="mx-2 bg-light rounded-full  w-6 sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.2 }}
            >
              <i class="fa-brands fa-linkedin text-fuchsia-700 " style={{ padding: '1px 5px 1px 5px' }}></i>
            </motion.a>
            <motion.a
              href="mailto:lbdelilla@gmail.com"
              target={"_blank"}
              rel="noopener noreferrer"
              className="mx-4 bg-light rounded-full w-6 pl-1 sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.2 }}
            >
              <i class="fa-solid fa-envelope text-purple-600 "></i>
            </motion.a>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-1 flex items-center justify-center rounded-full  ${
                mode === "light" ? "bg-light text-light" : "bg-light text-dark"
              }`}
            >
              {mode === "dark" ? (
                <i class="fa-solid fa-sun text-dark text-base" style={{ padding: '1px 4px 1px 4px' }}></i>
              ) : (
                <i class="fa-solid fa-moon text-dark text-base" style={{ padding: '1px 6px 1px 6px' }}></i>
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}
    </header>
  );
};

export default NavBar;
