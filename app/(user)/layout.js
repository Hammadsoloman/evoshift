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
        <title>EvoShift - Software Development &amp; Digital Marketing Agency</title>
      </head>
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
        <style jsx global>{`
        .flip-card {
          background-color: transparent;
          width: 300px;
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
        }
      `}</style>
      </body>
    </html>
  );
}
