import { Layout } from "@/components/layout";
import Head from "next/head";
import Image from "next/image";
import Lucia from "../../public/images/profile/lb-profile.png";
import AnimatedText from "@/components/animatedText";
import { motion } from "framer-motion";
import Link from "next/link";
import { LinkArrow } from "@/components/icons";
import TransitionEffect from "@/components/transitionEffect";
import textContent from "../components/textContent.json";

const title = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.2,
    },
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Lucia Belen | Portfolio </title>
        <meta name="description" content="Creado Por Lucía Belén" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full items-center text-dark xs:pt-0 sm:pt-0 lg:mb-10 xl:pt-16">
        <Layout className="pt-0 sm:pt-0 sm:px-6 ">
          <div className="flex items-center justify-between w-full lg:flex-col lg:pt-0 lg:mt-0 2xl:pt-16">
            <div className="w-1/2 mt-10 px-10 lg:w-full">
              <AnimatedText text="&lt;Quién soy /&gt;" />
              <p className="mt-7 text-l text-gray-600 text-justify align-middle dark:text-light md:text-sm sm:text-xs">
                {textContent.introText}
              </p>
              <p className="mt-5 text-l text-gray-600 text-justify align-middle dark:text-light md:text-sm sm:text-xs">
                {textContent.contactText}
              </p>
              <div className="flex items-center self-start mt-5">
                <Link
                  href="/Lucía_Belén_Resume_04.pdf"
                  target="_blank"
                  className="flex items-center bg-gradient-to-r from-orange-400
             to-purple-600 text-light p-2 px-5 rounded-lg xl:text-lg lg:text-lg md:text-md sm:text-sm xs:text-xs font-semibold hover:scale-105 md:p-2 md:px-4 md:text-base sm:p-1 sm:px-3 sm:hover-none"
                  download={true}
                >
                  Currículum <LinkArrow className={"w-6 ml-1"} />
                </Link>
              </div>
            </div>
            <div className="w-1/2 flex flex-col m-0 xl:mx-4 md:w-full md:hidden lg:hidden sm:hidden xs:hidden">
              <motion.div variants={title} initial="initial" animate="animate">
                <Image
                  src={Lucia}
                  alt="Lucía Belén"
                  width={600}
                  height={800}
                  className="w-3/4 m-auto md:hidden lg:hidden sm:hidden xs:hidden"
                  priority={true}
                  sizes="(max-width: 479px) 100vh
         (max-width: 638px) 100vh
         (max-width: 768px) 100vh,
         (max-width: 1200px) 50vh,
         50vh"
                />
              </motion.div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
