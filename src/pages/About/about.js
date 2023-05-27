import Head from "next/head";
import React from "react";
import Image from "next/image";
import Logos from "../../public/images/profile/about.png";
import { Layout } from "@/components/layout";
import Skills from "@/pages/About/components/skills";
import AnimatedText from "@/components/animatedText";
import TransitionEffect from "@/components/transitionEffect";
import en from "../components/translations/en.json";
import es from "../components/translations/es.json";
import { useRouter } from "next/router";

const About = () => {
  const {asPath, locale, locales} = useRouter()
  const t = locale === "es" ? es : en;

  return (
    <>
      <Head>
        <title>Lucía Belén | Sobre Mi </title>
        <meta
          name="Portfolio de Lucía Belén"
          content="Portfolio profesional de Lucía Belén, Desarrolladora de Software"
        />
      </Head>
      <TransitionEffect/>
      <main className="flex w-full flex-col  justify-start mt-7 py-8 px-32 pb-28 md:px-16 sm:px-12">
        <div className="flex w-full">
          <div className="w-1/2 md:hidden sm:hidden xs:hidden lg:hidden">
            <Image src={Logos} alt="Logo de la Universidad y 4geeks" className="w-2/3 "  priority={true}
                sizes="(max-width: 768px) 100vh,
                       (max-width: 1200px) 50vh,
                       50vh"></Image>
          </div>
          <div className="w-1/2 lg:w-full">
          <AnimatedText text={t.pageTitles.about}/>
          <p className="pt-5 text-l text-gray-600 text-justify align-middle dark:text-light md:text-sm sm:text-xs">
            {t.about.aboutText}
            </p>
            <p className="pt-5 text-l text-gray-600 text-justify align-middle dark:text-light md:text-sm sm:text-xs">
            {t.about.aboutTextCont}
          </p>
          </div>
        </div>
        <Skills/>
        <Layout/>
      </main>
    </>
  );
};

export default About;
