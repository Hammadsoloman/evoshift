"use client";
import { useEffect } from "react";
// import { Inter, Roboto_Mono, Hanken_Grotesk } from "next/font/google";
import "../../public/assets/css/bootstrap-icons.css";
import "../../public/assets/css/boxicons.min.css";
import "../../public/assets/css/swiper-bundle.min.css";
import "react-modal-video/css/modal-video.css";
import "../../public/assets/css/slick-theme.css";
import "../../public/assets/css/animate.min.css";
import "../../public/assets/css/slick.css";
import "../../public/assets/css/bootstrap-datetimepicker.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "../../public/assets/css/bootstrap.min.css";
import "yet-another-react-lightbox/styles.css";
import "../../public/assets/css/style.css";
import ScrollProgress from "../../components/common/ScrollProgress";
import ThemeSwitch from "../../components/common/Theme";
import useWow from "../../hooks/useWow";
//import LiveChat from "../../components/chat/LiveChat";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";

export default function RootLayout({ children }) {
  useWow();

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <html
      lang="en"
      // className={`${inter.variable} ${hankenGrotesk.variable}`}
    >
      <head>
        <link
          rel="icon"
          href="/public/assets/img/sm-logo.svg"
          type="image/x-icon"
          sizes="16x16"
        />
        <title>
          EvoShift - Software Development &amp; Digital Marketing Agency
        </title>
      </head>
      <GoogleTagManager gtmId="GTM-TD3GBJM2" />
      <body>
        <ScrollProgress />
        <ThemeSwitch />
        {children}
        {/*<LiveChat/>*/}
        <Script
          strategy="lazyOnload"
          src="https://embed.tawk.to/66ef21c5e5982d6c7bb27f53/1i8b1nqm3"
        />
        <script src="/evoshift.min.js" async defer />
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1047790780361125');
          fbq('track', 'PageView');
        `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={
              "https://www.facebook.com/tr?id=1047790780361125&ev=PageView&noscript=1"
            }
          />
        </noscript>
        <style jsx global>{`
          .flip-card {
            background-color: transparent;
            // width: 100%;
            height: 300px;
            perspective: 1000px;
          }

          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 0.6s;
            transform-style: preserve-3d;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          }

          .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg);
          }

          .flip-card-front,
          .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
          }

          .flip-card-front {
            background-color: #bbb;
            color: black;
          }

          .flip-card-back {
            background-color: #2980b9;
            color: white;
            transform: rotateY(180deg);
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 5px;
            padding-right: 5px;
          }
        `}</style>
      </body>
    </html>
  );
}
