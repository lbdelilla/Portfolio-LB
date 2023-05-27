import AnimatedText from "@/components/animatedText";
import { Layout } from "@/components/layout";
import Head from "next/head";
import React from "react";
import Commeet from "../../../public/images/logoCOLOR.png";
import Portfolio from "../../../public/images/Portfolio/Home-Light.png";
import Disney from "../../../public/images/disney.png";
import Adriana from "../../../public/images/adriana.png";
import TransitionEffect from "@/components/transitionEffect";
import en from "../../components/translations/en.json";
import es from "../../components/translations/es.json";
import { useRouter } from "next/router";
import { FeatureProject } from "./components/featureProject";
import { Project } from "./components/project";





const Projects = () => {
  const { locale } = useRouter();
  const t = locale === "es" ? es : en;

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
                type="HTML5 | CSS3 | Bootstrap | Javascript | Python | Flask | SqlAlchemy | PostgreSQL"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={t.projects.project2.title}
                summary1={t.projects.project2.info}
                img={Disney}
                link="https://disney-blog-react-flask.vercel.app/"
                github="https://github.com/lbdelilla/Disney-Blog-React-Flask"
                type="HTML5 | CSS3 | Bootstrap | Javascript | Python | Flask | SqlAlchemy | PostgreSQL"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={t.projects.project4.title}
                summary1={t.projects.project4.info}
                img={Adriana}
                link="https://www.adrianadelilla.es/"
                github="https://github.com/lbdelilla/adriana_de_lilla"
                type="HTML5 | CSS3 | Bootstrap | Javascript"
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
  );
};

export default Projects;
