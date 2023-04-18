import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Covered_By_Your_Grace } from "next/font/google";
import AnimatedText from "@/components/animatedText";
import Head from "next/head";
import TransitionEffect from "@/components/transitionEffect";


const Contact = () => {

  const [state, handleSubmit] = useForm("xqkogwbo");

  if (state.succeeded) {
    return ( <section className="bg-light dark:bg-dark xl:py-20 xs:py-6 lg:py-16 md:py-10 overflow-hidden relative z-10">
    <div className="container">
      <div className="flex flex-wrap  ">
        <div className="w-full xs:px-2 sm:px-3 lg:px-4 xl:px-4   ">
          <div className="w-full mb-12 lg:mb-0">
            <AnimatedText text="  &lt;Contáctame /&gt;" className="text-center xs:mb-3"/>
          </div>
        </div>
        <div className="w-full px-4 ">
          <div className="bg-light  dark:bg-dark relative rounded-3xl   p-8 sm:p-12 shadow-lg w-1/2 mx-auto sm:w-full sm:max-w-md border-solid border border-dark dark:border-light">
            <div className="md:-right-2 md:w-[101%] xs:h-[101%] xs:rounded-[1.5rem] absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2.5rem] bg-gradient-to-r from-orange-400 to-purple-600 border border-solid border-dark rounded-br-3xl dark:border-light" />

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
              <p className="text-center dark:text-light">Gracias por escribirme! Responderé a la brevedad.</p>;
                <input
                  type="text"
                  id="Nombre"
                  name="name"
                  placeholder="Nombre"
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
                />
              </div>
              <div className="mb-6">
                <input
                  name="email"
                  type="email"
                  placeholder="Correo Electrónico"
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
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="mb-6">
                <input
                  name="phone"
                  type="text"
                  placeholder="Teléfono"
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
                />
              </div>
              <div class="mb-6">
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Te leo..."
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
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
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
                       disabled={state.submitting}>
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>)
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
      <TransitionEffect/>
      <div className="container">
        <div className="flex flex-wrap  ">
          <div className="w-full  px-4">
            <div className="w-full mb-12 md:mb-8 lg:mb-0">
              <AnimatedText text="  &lt;Contáctame /&gt;" className=" xs:mb-5 md:mb-5 lg:mb-5 text-center"/>
            </div>
          </div>
          <div className="w-full px-4 ">
            <div className="bg-light  dark:bg-dark relative rounded-3xl xs:p-4  p-8 sm:p-12 shadow-lg w-1/2 mx-auto sm:w-full sm:max-w-md border-solid border border-dark dark:border-light">
              <div className="md:-right-2 md:w-[101%] xs:h-[101%] xs:rounded-[1.5rem] absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-[2.5rem] bg-gradient-to-r from-orange-400 to-purple-600 border border-solid border-dark rounded-br-3xl dark:border-light" />

              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <input
                    type="text"
                    id="Nombre"
                    name="name"
                    placeholder="Nombre"
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
                  />
                </div>
                <div className="mb-6">
                  <input
                    name="email"
                    type="email"
                    placeholder="Correo Electrónico"
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
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div className="mb-6">
                  <input
                    name="phone"
                    type="text"
                    placeholder="Teléfono"
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
                  />
                </div>
                <div class="mb-6">
                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Te leo..."
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
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
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
                         disabled={state.submitting}>
                    Enviar Mensaje
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
