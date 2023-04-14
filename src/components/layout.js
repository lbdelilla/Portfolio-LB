import React from "react";


export const Layout = ({children, className=""}) => {
    return (
        <div className={` w-fulll h-full inline-block- z-0 dark:bg-dark bg-light p-32 xl:pd-24 lg:p-16 md:p-12 sm:p-8 ${className} `}>
            {children} 
        </div>
    )
}