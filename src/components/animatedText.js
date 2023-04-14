import React from 'react';
import { Covered_By_Your_Grace } from "next/font/google";



const coveredByYourGrace = Covered_By_Your_Grace({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-cover",
  });


const AnimatedText = ({text, className=""}) => {
  return (
    <div  className={`${coveredByYourGrace.variable} font-cover`}>
        <h1 className={`text-4xl font-extrabold bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent ${className} xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl `}>
        {text}
        </h1>
    </div>
  )
}

export default AnimatedText