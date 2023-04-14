import Head from "next/head";
import React from "react";
import Image from "next/image";
import Logos from "../../public/images/profile/about.png";
import { Layout } from "@/components/layout";
import Skills from "@/components/skills";
import AnimatedText from "@/components/animatedText";
import TransitionEffect from "@/components/transitionEffect";



const About = () => {
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
          <AnimatedText text="&lt;Sobre Mi /&gt;"/>
          <p className="pt-5 text-l text-gray-600 text-justify align-middle dark:text-light md:text-sm sm:text-xs">
            {" "}
            Soy Uruguaya y resido actualmente en España. Licenciada en
            Comunicación Social con énfasis en Publicidad de la Universidad
            Católica del Uruguay y Fullstack Software Developer de 4Geeks
            Academy. Tengo más de 5 años de experiencia marketing y comunicación
            pero a comienzos del 2022 decidí reorientarme e ingresar a un campo
            que me interesaba mucho hacia un tiempo, la programación. </p>
            <p className="pt-5 text-l text-gray-600 text-justify align-middle dark:text-light md:text-sm sm:text-xs">
            No me arrepiento, estoy enamorada de este mundo y todo lo que trae,
            dolores de cabeza incluidos jaja. Siempre fui muy autodidacta y
            altamente comprometida con mi desarrollo profesional entregando el
            100% a cada proyecto en el que me embarco. Desde pequeña me encanta
            crear cosas, así que encontré una nueva manera de hacerlo.
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
