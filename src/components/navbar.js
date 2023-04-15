import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion"
import { Covered_By_Your_Grace } from "next/font/google";
import { useRouter } from "next/router";
import { Email, GithubIcon, LinkedInIcon, SunIcon, MoonIcon } from "./icons";
import useThemeSwitcher from "./Hooks/useThemeSwitcher";

const coveredByYourGrace = Covered_By_Your_Grace({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cover",
});

const MotionLink = motion(Link);

const NavBar = () => {

    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
      setIsOpen(!isOpen)
    }

    const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();

    return (
      <Link href={href} className={`${className} relative group`}>
        {title}

        <span className={`h-[1px] inline-block bg-gradient-to-r from-orange-400 to-purple-600 absolute left-0 -bottom-0.5 group-hover:w-full transition-[width]
         ease duration-300 transform translate-y-1
         ${router.asPath === href ? 'w-full' : 'w-0'} `}
         ></span>
      </Link>
    );
  };

  const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter();

    const handleClick = () => {
      toggle();
      router.push(href)
    }

    return (
      <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
        {title}

        <span className={`h-[1px] inline-block bg-gradient-to-r from-orange-400 to-purple-600 absolute left-0 -bottom-0.5 group-hover:w-full transition-[width]
         ease duration-300 transform translate-y-1
         ${router.asPath === href ? 'w-full' : 'w-0'} `}
         ></span>
      </button>
    );
  } 
  
  
  return (
    <header className="w-full px-16 py-8 font-medium flex items-center justify-between dark:text-light relative">
      <MotionLink
        href="/"
        className={`${coveredByYourGrace.variable} w-full font-cover text-2xl font-bold
           bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent`}
           whileHover={{
            scale: [1, 1.1, 1],
            transition: {
              duration: 1,
              times: [0, 0.5, 1],
            },
          }}
      >
        &lt;Lucía Belén /&gt;

      </MotionLink>
      
      <button className="flex-col justify-center items-center hidden lg:flex xl:flex" onClick={handleClick}>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'} `}>    </span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'} `}>    </span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}>    </span>

      </button>


      <div className="w-full flex justify-between items-center lg:hidden xl:hidden">
        <nav>
          <CustomLink href="/" title="Inicio" className="mr-4 " />
          <CustomLink href="/about" title="Sobre Mi" className="mx-4 " />
          <CustomLink href="/projects" title="Proyectos" className="mx-4 " />
          <CustomLink href="/contact" title="Contáctame" className="ml-4 " />
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a href="https://www.github.com/lbdelilla" target={"_blank"} className="mx-2 rounded-full dark:bg-light "
          whileHover={{y: -2}}
          whileTap={{scale:0.2}}
          >
            <GithubIcon fill="#F0884E" />
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/luciabelen/" target={"_blank"} className="mx-2 dark:border-solid dark:rounded-lg  dark:border-light dark:border-2 "
          whileHover={{y: -2}}
          whileTap={{scale:0.2}}
          >
            <LinkedInIcon/>
          </motion.a>
          <motion.a href="mailto:lbdelilla@gmail.com" target={"_blank"} className="mx-2 bg-light dark:rounded-full dark:border-solid dark:border-light dark:border-2 "
          whileHover={{y: -2}}
          whileTap={{scale:0.2}}
          > 
            <Email/>
          </motion.a>

            <button onClick={()=>setMode(mode === "light" ? "dark" : "light")}
            className={`ml-4 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}>
            {
              mode === "dark" ? 
              <SunIcon className={"fill-dark"} />
              : <MoonIcon className={"fill-light"} />
            }
            </button>

        </nav>
      </div>

      {
        isOpen ? 
    <motion.div 
    initial={{scale:0, opacity:0, x: "-50%", y:"-50%" }}
    animate={{scale:1, opacity:1}}
    className="min-w-[70vw] z-30 flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 
      ">
        <nav className="flex items-center flex-col justify-center">
          <CustomMobileLink href="/" title="Inicio" className="" toggle={handleClick} />
          <CustomMobileLink href="/about" title="Sobre Mi" className="" toggle={handleClick} />
          <CustomMobileLink href="/projects" title="Proyectos" className="" toggle={handleClick} />
          <CustomMobileLink href="/contact" title="Contáctame" className="" toggle={handleClick} />
        </nav>
        <nav className="flex items-center justify-center flex-wrap mt-2 ">
          <motion.a href="https://www.github.com/lbdelilla" target={"_blank"} 
          className="mx-3 bg-light rounded-full border-solid border-light border dark:border-none sm:mx-1"
          whileHover={{y: -2}}
          whileTap={{scale:0.2}}
          >
            <GithubIcon fill="#da5d18" />
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/lbdelilla" target={"_blank"} 
          className="mx-4 bg-light rounded-md border-solid border-light border-2  dark:border-none  sm:mx-1"
          whileHover={{y: -2}}
          whileTap={{scale:0.2}}
          >
            <LinkedInIcon/>
          </motion.a>
          <motion.a href="mailto:lbdelilla@gmail.com" target={"_blank"} 
          className="mx-4 bg-light rounded-full border-solid border-light border-2  dark:border-none  sm:mx-1"
          whileHover={{y: -2}}
          whileTap={{scale:0.2}}
          > 
            <Email/>
          </motion.a>

            <button onClick={()=>setMode(mode === "light" ? "dark" : "light")}
            className={`ml-4 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}>
            {
              mode === "dark" ? 
              <SunIcon className={"fill-dark"} />
              : <MoonIcon className={"fill-light"} />
            }
            </button>

        </nav>
      </motion.div>
        : null 
      }


    </header>
  );
};

export default NavBar;
