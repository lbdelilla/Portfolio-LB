import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import AnimatedText from "@/components/animatedText";
import Head from "next/head";
import TransitionEffect from "@/components/transitionEffect";
import en from "../components/translations/en.json";
import es from "../components/translations/es.json";
import { useRouter } from "next/router";

const Contact = () => {
  const {asPath, locale, locales} = useRouter()
  const t = locale === "es" ? es : en;

  let [isSubmitted, setIsSubmitted] = useState(false);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [message, setMessage] = useState("");

  const FORM_ID = "xqkogwbo";
  const [formState, handleSubmit] = useForm(FORM_ID);

  const resetInputs = () =>{
    setName("");
    setEmail("");
    setPhone("");
    setMessage("")
  }

  return (
    <>
      <Head>
        <title>Lucía Belén | Contacto </title>
        <meta
          name="Portfolio de Lucía Belén"
          content="Portfolio profesional de Lucía Belén, Desarrolladora de Software"
        />
      </Head>
      <section className="bg-light dark:bg-dark py-20 xs:py-10 lg:py-15 overflow-hidden relative z-10">
        <TransitionEffect />
        <div className="container">
          <div className="flex flex-wrap  ">
            <div className="w-full  px-4">
              <div className="w-full mb-12 md:mb-8 lg:mb-0">
                <AnimatedText
                  text={t.pageTitles.contact}
                  className=" xs:mb-5 md:mb-5 lg:mb-5 text-center"
                />
              </div>
            </div>
            <div className="w-full px-4 ">
              <div className="bg-light  dark:bg-dark relative rounded-3xl xs:p-4  p-8 sm:p-12 shadow-lg w-1/2 mx-auto sm:w-full sm:max-w-md border-solid border border-dark dark:border-light">
                <div className="md:-right-2 md:w-[101%] xs:h-[101%] xs:rounded-[1.5rem] absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2.5rem] bg-gradient-to-r from-orange-400 to-purple-600 border border-solid border-dark rounded-br-3xl dark:border-light" />

                <form
                  onSubmit={(event) => {
                    handleSubmit(event);
                    setIsSubmitted(true);
                    resetInputs(event)
                  }}
                >
                  {isSubmitted && (
                    <p className="text-center dark:text-light mb-5">
                     <strong> {t.contactMe.formMessage} </strong>
                    </p>
                  )}
                  <fieldset className="mb-6">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 dark:text-light font-medium mb-2"
                    >
                      {t.contactMe.labels.name}
                    </label>
                    <input
                      type="text"
                      id="Nombre"
                      name="name"
                      placeholder={t.contactMe.placeholder.name}
                      value={name}
                      className="
                         w-full
                         rounded
                         py-3
                         px-[14px]
                         text-body-color text-base
                         border border-[f0f0f0]
                         outline-none
                         focus-visible:shadow-none
                         focus:border-primary
                         "
                         onChange={(e)=>{setName(e.target.value)}}
                    />
                  </fieldset>
                  <fieldset className="mb-6">
                    <label
                      htmlFor="email"
                      className="block text-gray-700 dark:text-light font-medium mb-2"
                    >
                      {t.contactMe.labels.email}
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={email}
                      placeholder={t.contactMe.placeholder.email}
                      className="
                         w-full
                         rounded
                         py-3
                         px-[14px]
                         text-body-color text-base
                         border border-[f0f0f0]
                         outline-none
                         focus-visible:shadow-none
                         focus:border-primary
                         "
                         onChange={(e)=>{setEmail(e.target.value)}}
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={formState.errors}
                    />
                  </fieldset>
                  <fieldset className="mb-6">
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 dark:text-light font-medium mb-2"
                    >
                      {t.contactMe.labels.phone}
                    </label>
                    <input
                      name="phone"
                      type="text"
                      placeholder={t.contactMe.placeholder.phone}
                      value={phone}
                      className="
                         w-full
                         rounded
                         py-3
                         px-[14px]
                         text-body-color text-base
                         border border-[f0f0f0]
                         outline-none
                         focus-visible:shadow-none
                         focus:border-primary
                         "
                         onChange={(e)=>{setPhone(e.target.value)}}
                    />
                  </fieldset>
                  <fieldset class="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-gray-700 dark:text-light font-medium mb-2"
                    >
                      {t.contactMe.labels.message}
                    </label>
                    <textarea
                      name="message"
                      rows="6"
                      placeholder={t.contactMe.placeholder.message}
                      value={message}
                      class="
                         w-full
                         rounded
                         py-3
                         px-[14px]
                         text-body-color text-base
                         border border-[f0f0f0]
                         resize-none
                         outline-none
                         focus-visible:shadow-none
                         focus:border-primary
                         "
                         onChange={(e)=>{setMessage(e.target.value)}}
                    ></textarea>
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={formState.errors}
                    />
                  </fieldset>
                  <div>
                    <button
                      type="submit"
                      class="
                         w-full
                         text-white
                         bg-gradient-to-r from-orange-400 to-purple-600
                         rounded-lg
                         p-3
                         font-semibold 
                         hover:scale-105
                         "
                      disabled={formState.submitting}
                    >
                     {t.contactMe.formBtn}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
