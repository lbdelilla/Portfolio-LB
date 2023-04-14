import React from 'react'
import AnimatedText from './animatedText';
import {motion} from "framer-motion"

const Skill = ({title, x, y}) => {
    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold cursor-pointer bg-gradient-to-r from-orange-400 to-purple-600
        text-light py-3 px-6 shadow-dark absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent 
        '
        whileHover={{scale:1.05}}
        initial={{x:0, y:0}}
        whileInView={{x:x, y:y, transition:{duration: 1.5}}}
        viewport={{once: true}}
        >
            {title}
        </motion.div>
    )
}



const Skills = () => {
  return (
    <>
        <AnimatedText text="&lt;Tecnologías /&gt;" className="mt-32 w-full text-center"/>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full mt-4 bg-circularLight dark:bg-circularDark 
        lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
        lg:bg-circularLightLg lg:dark:bg-circularDarkLg
        md:bg-circularLightMd md:dark:bg-circularDarkMd
        sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>
        <motion.div className='flex items-center justify-center rounded-full font-semibold cursor-pointer bg-purple-600 text-light p-8 shadow-dark
        lg:p-6 md:p-4 xs:text-xs xs:p-2'
        whileHover={{scale:1.05}}
        >
            Web
        </motion.div>
        <Skill title="HTML" x="-15vw" y="-2vw"/>
        <Skill title="CSS" x="-10vw" y="-10vw"/>
        <Skill title="Javascript" x="20vw" y="6vw"/>
        <Skill title="ReactJS" x="5vw" y="14vw"/>
        <Skill title="Python" x="-20vw" y="-15vw"/>
        <Skill title="Flask" x="17vw" y="-6vw"/>
        <Skill title="SqlAlchemy" x="32vw" y="-5vw"/>
        <Skill title="Typescript" x="0vw" y="-20vw"/>
        <Skill title="NextJS" x="-30vw" y="2vw"/>
        <Skill title="Bootstrap" x="18vw" y="18vw"/>
        <Skill title="Tailwind Css" x="-5vw" y="10vw"/>
        <Skill title="Figma" x="10vw" y="-15vw"/>
        <Skill title="Photoshop" x="-25vw" y="10vw"/>
        <Skill title="PostgreSQL" x="-13vw" y="17vw"/>
        
        </div>
    </>
  )
}

export default Skills