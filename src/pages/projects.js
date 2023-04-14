import AnimatedText from "@/components/animatedText";
import { GithubIcon } from "@/components/icons";
import { Layout } from "@/components/layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Commeet from "../../public/images/logoColor.png";
import Portfolio from "../../public/images/Portfolio/Home-Light.png"
import Disney from "../../public/images/disney.png";
import { motion } from "framer-motion"
import TransitionEffect from "@/components/transitionEffect";



const Project = ({ type, title, summary1, summary2, img, link, github }) => {

  return (
    <article className="xs:p-4 w-full flex flex-col items-center justify-center rounded-3xl border border-solid border-dark bg-light p-6 relative rounded-br-2xl dark:bg-dark dark:text-light dark:border-light ">
      <div className="md:-right-2 md:w-[101%] xs:h-[101%] xs:rounded-[1.5rem] absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2.5rem] bg-gradient-to-r from-orange-400 to-purple-600 border border-solid border-dark rounded-br-3xl dark:border-light" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg "
      >
        <Image src={img} alt={title} className="w-full h-auto rounded "  priority={true}
                sizes="(max-width: 768px) 100vh,
                       (max-width: 1200px) 50vh,
                       50vh" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xs mb-2 dark:text-primaryDark lg:text-lg md:text-base ">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-xl font-bold ">{title}</h2>
        </Link>
        <p className="my-2 font-small text-sm text-dark text-justify dark:text-light sm:text-sm">{summary1}</p>
        <p className="my-2 font-small text-sm text-dark text-justify dark:text-light sm:text-sm">{summary2}</p>

        <div className="mt-2 flex items-center">
        <motion.a
           href={github}
            target={"_blank"}
            className="w-8 md:w-6"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.2 }}
          >
            <GithubIcon fill="#C35F98" />
          </motion.a>
          <Link
            href={link}
            target="_blank"
            className="md:text-base ml-4 rounded-lg bg-dark text-light p-1 px-4 text-sm font-semibold hover:text-primary dark:bg-light dark:text-dark dark:hover:text-primary"
          >
            Visitar{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

const FeatureProject = ({
  type,
  title,
  summary1,
  summary2,
  img,
  link,
  github,
}) => {
  return (
    <article className="p-10 w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl 
    relative rounded-br-2xl  dark:bg-dark dark:text-light dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-2xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-gradient-to-r from-orange-400 to-purple-600 dark:border-light
      border border-solid border-dark rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem] "
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image src={img} alt={title} className="w-full h-auto"  priority={true}
                sizes="(max-width: 768px) 100vh,
                       (max-width: 1200px) 50vh,
                       50vh"/>
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg-pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xs mt-2 dark:text-primaryDark xs:text-base">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-2xl font-bold sm:text-sm">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark text-justify dark:text-light sm:font-small ">{summary1}</p>
        <p className="my-2 font-medium text-dark text-justify dark:text-light sm:font-small">{summary2}</p>

        <div className="mt-2 flex items-center">
          <motion.a
           href={github}
            target={"_blank"}
            className="w-10"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.2 }}
          >
            <GithubIcon fill="#C35F98" />
          </motion.a>
          <Link
            href={link}
            target="_blank"
            className="sm-px-4 sm:text-base ml-4 rounded-lg bg-dark text-light p-1 px-6 text-lg font-semibold hover:text-primary dark:bg-light dark:text-dark dark:hover:text-primary"
          >
            Visitar{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Lucía Belén | Mis Proyectos </title>
        <meta
          name="Portfolio de Lucía Belén"
          content="Portfolio profesional de Lucía Belén, Desarrolladora de Software"
        />
      </Head>
      <TransitionEffect/>
      <main className="w-full mb-16 flex flex-col items-center justify center">
        <Layout className="pt-16">
          <AnimatedText
            text="&lt;Mis Proyectos /&gt;"
            className="mb-10 text-center"
          />

          <div className="grid grid-col-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 ">
            <div className="col-span-12">
              <FeatureProject
                title="ComMeet - Planificador de Eventos"
                summary1="¿Te estresas cada vez que tienes que planear un evento y te encuentras con la necesidad de crear grupos de WhatsApp para mantener a todos actualizados? ¡Tenemos la solución perfecta para ti! Con ComMeet puedes gestionar tus contactos, enviar invitaciones y obtener confirmaciones de asistencia (RSVP)."
                summary2="Además, puedes conversar directamente con tus invitados en la plataforma, evitando la necesidad de crear múltiples grupos de chat. ¡Deja que nuestro planificador de eventos te ayude a organizar tus eventos de manera fácil y sin estrés!"
                img={Commeet}
                link="https://sample-service-name-r5bf.onrender.com/"
                github="https://github.com/lbdelilla/Commeet-EventPlanner"
                type="HTML5 | CSS3 | Bootstrap | Javascript | Python | Flask | SqlAlchemy | PostgreSQL"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Disney - Fun & Games"
                summary1="¡Bienvenidos al mundo mágico de Disney! En esta página podrás conocer a tus personajes favoritos de Disney y ver su información detallada. Además, podrás divertirte con los juegos de Disney y almacenar tus personajes favoritos en una lista personalizada. Como si esto fuera poco, también podrás ver videos exclusivos y celebrar con nosotros los 100 años de magia de Disney. ¡Sumérgete en el universo de Disney y diviértete al máximo!"
                img={Disney}
                link="https://disney-blog-react-flask.vercel.app/"
                github="https://github.com/lbdelilla/Disney-Blog-React-Flask"
                type="HTML5 | CSS3 | Bootstrap | Javascript | Python | Flask | SqlAlchemy | PostgreSQL"
              />
            </div>
            <div className="col-span-6  sm:col-span-12">
              <Project
                title="Portfolio"
                summary1="Mi portafolio profesional es una plataforma en línea que muestra mi experiencia laboral, proyectos y habilidades relevantes en mi campo.Este portafolio proporciona información detallada sobre mis habilidades técnicas, habilidades blandas y logros en mi carrera."
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
  );
};

export default Projects;
