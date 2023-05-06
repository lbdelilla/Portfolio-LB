
import { useRouter } from "next/router";
import Link from "next/link";

export const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();

    return (
      <Link href={href} className={`${className} relative group`}>
        {title}

        <span className={`h-[1px] inline-block bg-gradient-to-r from-orange-400 to-purple-600 absolute left-0 -bottom-0.5 group-hover:w-full transition-[width]
         ease duration-300 transform translate-y-1
         ${router.asPath === href ? 'w-full' : 'w-0'} `}
         ></span>
      </Link>
    );
  };

export const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter();

    const handleClick = () => {
      toggle();
      router.push(href)
    }

    return (
      <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
        {title}

        <span className={`h-[1px] inline-block bg-gradient-to-r from-orange-400 to-purple-600 absolute left-0 -bottom-0.5 group-hover:w-full transition-[width]
         ease duration-300 transform translate-y-1
         ${router.asPath === href ? 'w-full' : 'w-0'} `}
         ></span>
      </button>
    );
  } 