import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { setupGoogleAnalytics } from "../utils/google-analytics"; 

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
       <Script async src="https://www.googletagmanager.com/gtag/js?id=G-T9MS8F7Y5G"/>
        <script dangerouslySetInnerHTML={{ __html: `(${setupGoogleAnalytics.toString()})()` }} />
      </Head>
      <body>
        <Script
          id="theme-switcher"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (
                localStorage.theme === 'dark' ||
                (!('theme' in localStorage) &&
                  window.matchMedia('(prefers-color-scheme: dark)').matches)
              ) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            `,
          }}
        />
        <Script
          src="https://kit.fontawesome.com/beecaece23.js"
          crossOrigin="anonymous"
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}