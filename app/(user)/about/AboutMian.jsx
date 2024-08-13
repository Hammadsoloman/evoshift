"use client";
import React, { useMemo } from "react";
import Home4award from "../../../components/award/Home4award";
//import Home5Blog from "../../../components/blog/Home5Blog";
//import CountUp from "react-countup";
import MainLayout from "../../../components/layout/MainLayout";
//import Home5Team from "../../../components/team/Home5Team";
import Home1About from "../../../components/about/Home1About";
import Home5whyChoose from "../../../components/why-choose/Home5whyChoose";
//import { InlineSvgPreviewComponent } from "../../../lib/InlineSvgPreviewComponent";
import urlFor from "../../../lib/urlFor";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Link from "next/link";
import useWow from "../../../hooks/useWow";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const AboutpageMain = ({ aboutOneData, steps, partners, awards, discover }) => {
  console.log(">>>>>>>>>>", partners);
  useWow();
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 30,
      grabCursor: true,
      navigation: {
        nextEl: ".home2-process-next",
        prevEl: ".home2-process-prev",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1400: {
          slidesPerView: 4,
        },
      },
    };
  }, []);
  return (
    <MainLayout>
      <Home1About data={aboutOneData} />

      <div className="home2-process-section two mb-120">
        <div className="container">
          <div
            className="section-title5 text-center mb-70 wow animate fadeInDown"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <span className="sub-title5 two">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                viewBox="0 0 14 14"
              >
                <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z" />
              </svg>
              Working Process
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                viewBox="0 0 14 14"
              >
                <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z" />
              </svg>
            </span>
            <h2>
              Bringing the best IT <span> Vendors To You.</span>
            </h2>
          </div>
        </div>
        <div className="container-fluid p-0">
          <div className="process-slider-area">
            <div className="row">
              <div className="col-lg-12">
                <Swiper {...settings} className="swiper home2-process-slider">
                  {steps?.map((step, index) => {
                    return (
                      <div key={index} className="swiper-wrapper">
                        <SwiperSlide
                          className="swiper-slide wow animate fadeInDown"
                          data-wow-delay="200ms"
                          data-wow-duration="1500ms"
                        >
                          <div className="single-process">
                            <div className="step">
                              <div className="number">
                                <h6>Step</h6>
                                <span>{index + 1}</span>
                              </div>
                            </div>
                            <div className="content">
                              <h4>{step?.heading}</h4>
                              <p>{step?.desc}</p>
                            </div>
                          </div>
                        </SwiperSlide>
                      </div>
                    );
                  })}
                </Swiper>
                <div className="slider-btn-area">
                  <div className="slider-btn home2-process-prev">
                    <i className="bi bi-arrow-left" />
                  </div>
                  <div className="content">
                    <p>Why choose Evoshift</p>
                  </div>
                  <div className="slider-btn home2-process-next">
                    <i className="bi bi-arrow-right" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div div className="container">
        <div className="mx-auto">
          <ul className="mb-40" style={{ listStyleType: "circle" }}>
            <li>
              We have an extensive experience in designing and developing
              websites and web applications.
            </li>
            <li>
              We have a professional team with extensive experience of talented
              designers and developers.
            </li>
            <li>
              We are committed to providing high-quality websites that meet your
              needs.
            </li>
            <li>
              We provide exceptional customer service to ensure customer
              satisfaction wherever they are.
            </li>
            <li>
              We provide high quality services at competitive prices to suit all
              budgets.
            </li>
          </ul>
        </div>
      </div>
      <Home5whyChoose data={discover} />

      <div className="partnership-area mb-120">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12 mb-70 d-flex flex-wrap gap-3 align-items-end justify-content-between wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="section-title5">
                <h2>What we offer to our clients</h2>
              </div>
              <div className="total-partner">
                {/* <a href="about.html">
                  Almost 20+ Partner we have
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={10}
                    height={10}
                    viewBox="0 0 10 10"
                  >
                    <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                  </svg>
                </a>*/}
              </div>
            </div>
          </div>
          <div className="row g-4">
            <p>
              We take pride in providing professional website development
              services that meet our clients' diverse needs. Our talented team
              of designers and developers have extensive experience in creating
              attractive and effective websites that are suitable for all
              devices.
            </p>
            <p>
              We strive to fully understand our clients' needs and goals, and
              work closely with them to create a website that meets their
              expectations. We offer a wide range of services, including:
            </p>
            {partners?.map((partner, index) => {
              return (
                <div
                  key={index}
                  className="col-lg-4 col-sm-6 wow animate fadeInDown"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <Link href={`/service/${partner?.slug?.current}`}>
                    <div className="single-pertner">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={88}
                        height={105}
                        viewBox="0 0 88 105"
                        fill="none"
                      >
                        <path d="M66.8167 -17.6053C69.7962 -13.2647 76.2037 -13.2647 79.1833 -17.6053L87.7974 -30.154C91.4643 -35.4958 99.8342 -32.7711 99.6538 -26.2944L99.2297 -11.068C99.083 -5.80053 104.271 -2.02811 109.237 -3.79168L123.597 -8.89173C129.707 -11.0618 134.88 -3.92864 130.918 1.20465L121.659 13.2019C118.436 17.3786 120.418 23.4895 125.479 24.979L140.041 29.2644C146.261 31.0949 146.261 39.9051 140.041 41.7356L125.479 46.021C120.418 47.5105 118.436 53.6215 121.659 57.7981L130.918 69.7954C134.88 74.9286 129.707 82.0618 123.597 79.8917L109.237 74.7917C104.271 73.0281 99.083 76.8005 99.2297 82.068L99.6538 97.2944C99.8342 103.771 91.4643 106.496 87.7974 101.154L79.1833 88.6053C76.2038 84.2647 69.7963 84.2647 66.8167 88.6053L58.2026 101.154C54.5357 106.496 46.1658 103.771 46.3462 97.2944L46.7701 82.0734C46.9169 76.8043 41.7258 73.0317 36.7595 74.7983L22.4433 79.8907C16.3362 82.063 11.1603 74.9374 15.1145 69.8013L24.3582 57.7948C27.5743 53.6174 25.5904 47.513 20.5328 46.0246L5.95906 41.7356C-0.260798 39.9051 -0.260805 31.0949 5.95905 29.2644L20.5328 24.9754C25.5904 23.487 27.5743 17.3826 24.3582 13.2052L15.1145 1.19866C11.1603 -3.93743 16.3362 -11.063 22.4433 -8.89069L36.7595 -3.79829C41.7258 -2.03175 46.9169 -5.80433 46.7701 -11.0734L46.3462 -26.2944C46.1658 -32.7711 54.5357 -35.4958 58.2026 -30.154L66.8167 -17.6053Z" />
                      </svg>
                      <span>{partner?.heading}</span>
                      <div className="partner-logos">
                        {partner?.mainImage && (
                          <img src={urlFor(partner.mainImage)?.url()} alt="" />
                        )}
                      </div>
                      <p className="clamping-5">{partner?.desc}</p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Home4award data={awards} />

      {/* <Home5Team />

      <Home5Blog /> */}

      <div className="contact-section">
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-5">
              <div className="contact-content">
                <div
                  className="section-title white wow animate fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="500ms"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                    >
                      <g>
                        <path d="M6.6304 0.338424C6.67018 -0.112811 7.32982 -0.112807 7.3696 0.338428L7.72654 4.38625C7.75291 4.68505 8.10454 4.83069 8.33443 4.63804L11.4491 2.02821C11.7963 1.73728 12.2627 2.20368 11.9718 2.55089L9.36197 5.66556C9.1693 5.89546 9.31496 6.24709 9.61374 6.27346L13.6615 6.6304C14.1128 6.67018 14.1128 7.32982 13.6615 7.3696L9.61374 7.72654C9.31496 7.75291 9.1693 8.10454 9.36197 8.33443L11.9718 11.4491C12.2627 11.7963 11.7963 12.2627 11.4491 11.9718L8.33443 9.36197C8.10454 9.1693 7.75291 9.31496 7.72654 9.61374L7.3696 13.6615C7.32982 14.1128 6.67018 14.1128 6.6304 13.6615L6.27346 9.61374C6.24709 9.31496 5.89546 9.1693 5.66556 9.36197L2.55089 11.9718C2.20368 12.2627 1.73729 11.7963 2.02822 11.4491L4.63804 8.33443C4.83069 8.10454 4.68504 7.75291 4.38625 7.72654L0.338424 7.3696C-0.112811 7.32982 -0.112807 6.67018 0.338428 6.6304L4.38625 6.27346C4.68505 6.24709 4.83069 5.89546 4.63804 5.66556L2.02821 2.55089C1.73728 2.20368 2.20368 1.73729 2.55089 2.02822L5.66556 4.63804C5.89546 4.83069 6.24709 4.68504 6.27346 4.38625L6.6304 0.338424Z" />
                      </g>
                    </svg>
                    Drop Us a Line
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                    >
                      <g>
                        <path d="M6.6304 0.338424C6.67018 -0.112811 7.32982 -0.112807 7.3696 0.338428L7.72654 4.38625C7.75291 4.68505 8.10454 4.83069 8.33443 4.63804L11.4491 2.02821C11.7963 1.73728 12.2627 2.20368 11.9718 2.55089L9.36197 5.66556C9.1693 5.89546 9.31496 6.24709 9.61374 6.27346L13.6615 6.6304C14.1128 6.67018 14.1128 7.32982 13.6615 7.3696L9.61374 7.72654C9.31496 7.75291 9.1693 8.10454 9.36197 8.33443L11.9718 11.4491C12.2627 11.7963 11.7963 12.2627 11.4491 11.9718L8.33443 9.36197C8.10454 9.1693 7.75291 9.31496 7.72654 9.61374L7.3696 13.6615C7.32982 14.1128 6.67018 14.1128 6.6304 13.6615L6.27346 9.61374C6.24709 9.31496 5.89546 9.1693 5.66556 9.36197L2.55089 11.9718C2.20368 12.2627 1.73729 11.7963 2.02822 11.4491L4.63804 8.33443C4.83069 8.10454 4.68504 7.75291 4.38625 7.72654L0.338424 7.3696C-0.112811 7.32982 -0.112807 6.67018 0.338428 6.6304L4.38625 6.27346C4.68505 6.24709 4.83069 5.89546 4.63804 5.66556L2.02821 2.55089C1.73728 2.20368 2.20368 1.73729 2.55089 2.02822L5.66556 4.63804C5.89546 4.83069 6.24709 4.68504 6.27346 4.38625L6.6304 0.338424Z" />
                      </g>
                    </svg>
                  </span>
                  <h2>Connect with EvoShift</h2>
                  <p>
                    Ready to take the first step towards unlocking
                    opportunities, realizing goals, and embracing innovation?
                    We're here and eager to connect.
                  </p>
                </div>
                <div
                  className="contact-area wow animate fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="1000ms"
                >
                  <div className="hotline-area mb-40">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={28}
                        height={28}
                        viewBox="0 0 28 28"
                      >
                        <path d="M27.2653 21.5995L21.598 17.8201C20.8788 17.3443 19.9147 17.5009 19.383 18.1798L17.7322 20.3024C17.6296 20.4377 17.4816 20.5314 17.3154 20.5664C17.1492 20.6014 16.9759 20.5752 16.8275 20.4928L16.5134 20.3196C15.4725 19.7522 14.1772 19.0458 11.5675 16.4352C8.95784 13.8246 8.25001 12.5284 7.6826 11.4893L7.51042 11.1753C7.42683 11.0269 7.39968 10.8532 7.43398 10.6864C7.46827 10.5195 7.56169 10.3707 7.69704 10.2673L9.81816 8.61693C10.4968 8.08517 10.6536 7.1214 10.1784 6.40198L6.39895 0.734676C5.91192 0.00208106 4.9348 -0.21784 4.18082 0.235398L1.81096 1.65898C1.06634 2.09672 0.520053 2.80571 0.286612 3.63733C-0.56677 6.74673 0.0752209 12.1131 7.98033 20.0191C14.2687 26.307 18.9501 27.9979 22.1677 27.9979C22.9083 28.0011 23.6459 27.9048 24.3608 27.7115C25.1925 27.4783 25.9016 26.932 26.3391 26.1871L27.7641 23.8187C28.218 23.0645 27.9982 22.0868 27.2653 21.5995ZM26.9601 23.3399L25.5384 25.7098C25.2242 26.2474 24.7142 26.6427 24.1152 26.8128C21.2447 27.6009 16.2298 26.9482 8.64053 19.3589C1.0513 11.7697 0.398595 6.75515 1.18669 3.88421C1.35709 3.28446 1.75283 2.77385 2.2911 2.45921L4.66096 1.03749C4.98811 0.840645 5.41221 0.93606 5.62354 1.25397L7.67659 4.3363L9.39976 6.92078C9.60612 7.23283 9.53831 7.65108 9.24392 7.88199L7.1223 9.53232C6.47665 10.026 6.29227 10.9193 6.68979 11.6283L6.85826 11.9344C7.45459 13.0281 8.19599 14.3887 10.9027 17.095C13.6095 19.8012 14.9696 20.5427 16.0628 21.139L16.3694 21.3079C17.0783 21.7053 17.9716 21.521 18.4653 20.8753L20.1157 18.7537C20.3466 18.4595 20.7647 18.3918 21.0769 18.5979L26.7437 22.3773C27.0618 22.5885 27.1572 23.0128 26.9601 23.3399ZM15.8658 4.66809C20.2446 4.67296 23.7931 8.22149 23.798 12.6003C23.798 12.858 24.0069 13.0669 24.2646 13.0669C24.5223 13.0669 24.7312 12.858 24.7312 12.6003C24.7257 7.7063 20.7598 3.74029 15.8658 3.73494C15.6081 3.73494 15.3992 3.94381 15.3992 4.20151C15.3992 4.45922 15.6081 4.66809 15.8658 4.66809Z" />
                        <path d="M15.8658 7.46734C18.699 7.47067 20.995 9.76666 20.9983 12.5999C20.9983 12.7237 21.0475 12.8424 21.135 12.9299C21.2225 13.0174 21.3412 13.0665 21.4649 13.0665C21.5887 13.0665 21.7073 13.0174 21.7948 12.9299C21.8823 12.8424 21.9315 12.7237 21.9315 12.5999C21.9276 9.25147 19.2142 6.53801 15.8658 6.53418C15.608 6.53418 15.3992 6.74306 15.3992 7.00076C15.3992 7.25846 15.608 7.46734 15.8658 7.46734Z" />
                        <path d="M15.8658 10.2671C17.1536 10.2687 18.1972 11.3123 18.1988 12.6001C18.1988 12.7239 18.2479 12.8426 18.3354 12.9301C18.4229 13.0176 18.5416 13.0667 18.6653 13.0667C18.7891 13.0667 18.9078 13.0176 18.9953 12.9301C19.0828 12.8426 19.1319 12.7239 19.1319 12.6001C19.1298 10.7972 17.6687 9.33601 15.8658 9.33398C15.608 9.33398 15.3992 9.54286 15.3992 9.80056C15.3992 10.0583 15.608 10.2671 15.8658 10.2671Z" />
                      </svg>
                    </div>
                    <div className="content">
                      <span>To More Inquiry</span>
                      <h6>
                        <a href="tel:+990737621432">+990-737 621 432</a>
                      </h6>
                    </div>
                  </div>
                  <div className="hotline-area">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={26}
                        height={26}
                        viewBox="0 0 26 26"
                      >
                        <path d="M13.5367 14.7299C12.5654 14.7253 11.6005 14.573 10.675 14.2784C9.94863 14.0353 9.29972 13.6039 8.79454 13.0282C8.28935 12.4524 7.94598 11.7529 7.79946 11.0011C7.47317 9.42986 8.06813 7.76849 9.43051 6.44251C9.57687 6.30005 9.72894 6.16358 9.88637 6.03345C10.5736 5.45807 11.3905 5.05858 12.2666 4.86946C13.1428 4.68035 14.0517 4.70729 14.9151 4.94797C15.7431 5.21236 16.469 5.72653 16.9932 6.4199C17.5174 7.11328 17.8141 7.95188 17.8427 8.82061C17.9062 9.84533 17.5722 10.8551 16.9102 11.6398C16.6597 11.9553 16.3272 12.1956 15.9491 12.3344C15.571 12.4732 15.162 12.5052 14.7669 12.4267C14.6039 12.3929 14.4494 12.3265 14.3126 12.2316C14.1758 12.1367 14.0596 12.0151 13.9709 11.8743C13.8913 11.7374 13.8401 11.5859 13.8205 11.4288C13.8008 11.2717 13.8131 11.1122 13.8565 10.9599C14.2357 9.52736 14.6209 7.35033 14.6248 7.32866C14.6347 7.27261 14.6555 7.21906 14.6861 7.17106C14.7167 7.12307 14.7565 7.08157 14.8031 7.04894C14.8498 7.0163 14.9024 6.99317 14.9579 6.98087C15.0135 6.96857 15.071 6.96733 15.127 6.97724C15.1831 6.98714 15.2366 7.00798 15.2846 7.03858C15.3326 7.06918 15.3741 7.10893 15.4067 7.15557C15.4394 7.2022 15.4625 7.25481 15.4748 7.31038C15.4871 7.36596 15.4883 7.42341 15.4784 7.47946C15.4624 7.57003 15.0828 9.71413 14.6946 11.1814C14.6809 11.2216 14.6756 11.2643 14.6789 11.3067C14.6823 11.3491 14.6942 11.3903 14.7141 11.4279C14.774 11.5108 14.8644 11.5664 14.9654 11.5826C15.2073 11.623 15.4557 11.5965 15.6836 11.506C15.9116 11.4155 16.1105 11.2645 16.2589 11.0691C16.773 10.4541 17.0306 9.66472 16.9782 8.86481C16.9575 8.17325 16.7233 7.50504 16.3078 6.95187C15.8923 6.3987 15.3157 5.98767 14.6573 5.77519C13.9319 5.57566 13.1689 5.55562 12.434 5.7168C11.6992 5.87798 11.0146 6.21553 10.4393 6.70034C10.3002 6.81604 10.1646 6.93694 10.0346 7.06347C9.36117 7.71866 8.28522 9.07844 8.64792 10.8247C8.76766 11.4243 9.04196 11.9821 9.44365 12.443C9.84535 12.9039 10.3605 13.2519 10.938 13.4524C12.9703 14.1007 15.891 14.1791 17.4293 12.266C17.5022 12.1793 17.6061 12.1246 17.7188 12.1136C17.8315 12.1025 17.944 12.1361 18.0323 12.207C18.1206 12.2779 18.1776 12.3805 18.1912 12.493C18.2047 12.6054 18.1737 12.7186 18.1048 12.8085C16.9669 14.2238 15.2353 14.7299 13.5367 14.7299Z" />
                        <path d="M12.0531 12.4837C11.595 12.4917 11.1481 12.3416 10.7878 12.0586C9.9562 11.393 9.93324 10.2365 10.1664 9.44911C10.2452 9.18694 10.3505 8.93345 10.4814 8.69295C10.8065 8.03693 11.3264 7.49738 11.9699 7.14814C12.3602 6.94569 12.8052 6.87413 13.2393 6.94404C13.6734 7.01396 14.0735 7.22164 14.3805 7.5364C14.6932 7.87907 14.9287 8.28484 15.0712 8.72632C15.107 8.83391 15.0992 8.95127 15.0495 9.05319C14.9998 9.15511 14.9121 9.23348 14.8052 9.27148C14.6984 9.30948 14.5809 9.30408 14.478 9.25643C14.3751 9.20879 14.295 9.1227 14.2548 9.01665C14.1521 8.69059 13.9813 8.39004 13.7539 8.13483C13.5751 7.95191 13.3414 7.83246 13.0884 7.79468C12.8354 7.7569 12.577 7.80284 12.3525 7.92553C11.8699 8.1977 11.4821 8.61094 11.241 9.10981C11.1398 9.2968 11.058 9.4937 10.9971 9.6974C10.8285 10.2668 10.8658 11.0104 11.3303 11.3822C11.8381 11.7904 12.6953 11.6179 13.1776 11.2019C13.5368 10.8783 13.8454 10.5026 14.0932 10.0874C14.1232 10.039 14.1624 9.99704 14.2087 9.96384C14.2549 9.93064 14.3073 9.90687 14.3627 9.8939C14.4181 9.88092 14.4756 9.87899 14.5317 9.88821C14.5879 9.89743 14.6417 9.91763 14.6901 9.94765C14.7384 9.97766 14.7804 10.0169 14.8136 10.0632C14.8468 10.1094 14.8706 10.1617 14.8836 10.2172C14.8966 10.2726 14.8985 10.33 14.8893 10.3862C14.88 10.4424 14.8598 10.4962 14.8298 10.5446C14.5361 11.0337 14.1705 11.4759 13.7452 11.8562C13.2714 12.256 12.673 12.4779 12.0531 12.4837Z" />
                        <path d="M24.6996 26.0015H1.29998C0.955309 26.0011 0.624854 25.864 0.381135 25.6203C0.137416 25.3766 0.000344239 25.0462 8.47364e-08 24.7015V8.66841C-5.14206e-05 8.58603 0.023378 8.50535 0.0675423 8.43581C0.111707 8.36628 0.174776 8.31077 0.249359 8.2758C0.323942 8.24083 0.406948 8.22784 0.488649 8.23836C0.57035 8.24887 0.647361 8.28246 0.710655 8.33518L11.3428 17.1716C11.8091 17.5569 12.3952 17.7677 13.0002 17.7677C13.6052 17.7677 14.1913 17.5569 14.6577 17.1716L25.2889 8.33474C25.3523 8.282 25.4293 8.24841 25.511 8.23791C25.5928 8.22741 25.6758 8.24043 25.7504 8.27546C25.825 8.31048 25.8881 8.36605 25.9322 8.43565C25.9763 8.50525 25.9997 8.58599 25.9996 8.66841V24.7015C25.9992 25.0462 25.8622 25.3766 25.6184 25.6203C25.3747 25.864 25.0443 26.0011 24.6996 26.0015ZM0.866653 9.59183V24.7015C0.866653 24.9407 1.06078 25.1348 1.29998 25.1348H24.6996C24.8145 25.1348 24.9247 25.0892 25.006 25.0079C25.0873 24.9266 25.1329 24.8164 25.1329 24.7015V9.59183L15.2106 17.838C14.5887 18.352 13.807 18.6333 13.0002 18.6335C12.1933 18.6336 11.4116 18.3527 10.7894 17.8389L0.866653 9.59183Z" />
                        <path d="M0.434172 9.10179C0.342147 9.10197 0.252454 9.07285 0.178087 9.01865C0.103719 8.96444 0.0485401 8.88797 0.020542 8.8003C-0.00745601 8.71264 -0.00681877 8.61834 0.0223615 8.53106C0.0515417 8.44379 0.10775 8.36807 0.182842 8.31487L4.08278 5.55025C4.17656 5.48377 4.29291 5.45726 4.40623 5.47656C4.51955 5.49586 4.62057 5.55939 4.68705 5.65316C4.75354 5.74694 4.78005 5.86329 4.76075 5.97662C4.74145 6.08994 4.67792 6.19095 4.58414 6.25744L0.684201 9.02206C0.611181 9.074 0.52378 9.10187 0.434172 9.10179ZM25.5662 9.10179C25.4766 9.10187 25.3892 9.074 25.3162 9.02206L21.4163 6.25744C21.3235 6.19062 21.2609 6.08984 21.242 5.97706C21.2232 5.86427 21.2498 5.74862 21.3159 5.65531C21.382 5.56201 21.4823 5.4986 21.5949 5.47892C21.7075 5.45924 21.8234 5.48488 21.9172 5.55025L25.8171 8.31487C25.8922 8.36802 25.9483 8.44367 25.9775 8.53086C26.0067 8.61805 26.0075 8.71227 25.9796 8.79989C25.9517 8.88751 25.8966 8.96399 25.8224 9.01826C25.7482 9.07253 25.6582 9.10179 25.5662 9.10179ZM17.0041 3.03522C16.9144 3.0353 16.8269 3.00744 16.7537 2.95549L14.6824 1.48651C14.2165 1.09272 13.6271 0.874976 13.0171 0.871254C12.4071 0.867532 11.8151 1.07807 11.3445 1.46615L9.24716 2.95549C9.15339 3.02198 9.03704 3.04848 8.92371 3.02918C8.81039 3.00988 8.70937 2.94635 8.64289 2.85258C8.57641 2.7588 8.5499 2.64245 8.5692 2.52912C8.5885 2.4158 8.65203 2.31479 8.7458 2.2483L10.8171 0.779325C11.4376 0.271931 12.2154 -0.00360176 13.017 3.55561e-05C13.8186 0.00367287 14.5938 0.286253 15.2097 0.799258L17.255 2.2483C17.3301 2.3015 17.3863 2.37722 17.4155 2.46449C17.4447 2.55177 17.4453 2.64607 17.4173 2.73373C17.3893 2.8214 17.3342 2.89787 17.2598 2.95208C17.1854 3.00628 17.0957 3.0354 17.0037 3.03522H17.0041ZM0.715401 25.7675C0.626173 25.7677 0.539066 25.7403 0.465979 25.6891C0.392892 25.638 0.337387 25.5655 0.307046 25.4815C0.276706 25.3976 0.273008 25.3064 0.296459 25.2203C0.31991 25.1342 0.369366 25.0575 0.438072 25.0005L10.3266 16.7847C10.3704 16.7483 10.4209 16.7209 10.4753 16.7041C10.5296 16.6873 10.5868 16.6813 10.6435 16.6865C10.7001 16.6918 10.7552 16.7082 10.8056 16.7347C10.8559 16.7612 10.9006 16.7974 10.9369 16.8412C10.9733 16.885 11.0007 16.9355 11.0175 16.9899C11.0343 17.0443 11.0403 17.1014 11.0351 17.1581C11.0298 17.2148 11.0134 17.2699 10.9869 17.3202C10.9604 17.3706 10.9242 17.4152 10.8804 17.4516L0.991863 25.6674C0.914246 25.7321 0.816424 25.7675 0.715401 25.7675ZM25.2846 25.7675C25.1835 25.7676 25.0857 25.7322 25.0081 25.6674L15.1196 17.4516C15.0747 17.4156 15.0374 17.371 15.0099 17.3204C14.9824 17.2699 14.9652 17.2143 14.9594 17.1571C14.9536 17.0998 14.9593 17.042 14.9761 16.9869C14.9929 16.9319 15.0205 16.8807 15.0573 16.8365C15.0941 16.7922 15.1393 16.7557 15.1903 16.7291C15.2414 16.7025 15.2972 16.6863 15.3546 16.6816C15.4119 16.6768 15.4697 16.6835 15.5244 16.7013C15.5791 16.719 15.6298 16.7475 15.6734 16.7851L25.5619 25.001C25.6306 25.0579 25.6801 25.1347 25.7035 25.2207C25.727 25.3068 25.7233 25.3981 25.6929 25.482C25.6626 25.5659 25.6071 25.6384 25.534 25.6896C25.4609 25.7408 25.3738 25.7677 25.2846 25.7675Z" />
                        <path d="M21.6668 12.3427C21.5518 12.3427 21.4416 12.2971 21.3604 12.2158C21.2791 12.1346 21.2334 12.0243 21.2334 11.9094V3.03836C21.2321 3.04703 21.2148 3.03489 21.1858 3.03489H4.81471C4.80523 3.03432 4.79574 3.03568 4.7868 3.03888C4.77786 3.04208 4.76967 3.04707 4.76271 3.05353L4.76704 11.9094C4.76704 12.0243 4.72139 12.1346 4.64013 12.2158C4.55886 12.2971 4.44864 12.3427 4.33372 12.3427C4.21879 12.3427 4.10857 12.2971 4.02731 12.2158C3.94604 12.1346 3.90039 12.0243 3.90039 11.9094V3.03489C3.9072 2.79889 4.00723 2.57519 4.17859 2.41276C4.34994 2.25033 4.57867 2.16241 4.81471 2.16824H21.1858C21.4218 2.16241 21.6505 2.25033 21.8219 2.41276C21.9933 2.57519 22.0933 2.79889 22.1001 3.03489V11.9094C22.1001 12.0243 22.0544 12.1346 21.9732 12.2158C21.8919 12.2971 21.7817 12.3427 21.6668 12.3427Z" />
                      </svg>
                    </div>
                    <div className="content">
                      <span>To Send Mail</span>
                      <h6>
                        <a href="mailto:info@example.com">info@gmail.com</a>
                      </h6>
                    </div>
                  </div>
                </div>
                <div
                  className="social-area wow animate fadeInUp"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  <h6>Social Just You Connected Us!</h6>
                  <ul className="social-list">
                    <li>
                      <a href="https://www.linkedin.com/">
                        <i className="bi bi-linkedin" />
                        <span>LinkedIn</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bi bi-facebook" />
                        <span>Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          fill="currentColor"
                          className="bi bi-twitter-x"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                        </svg>
                        <span>Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="bi bi-instagram" />
                        <span>Instagram</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-lg-7 wow animate fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="contact-form-wrap">
                <div className="contact-form-area">
                  <h3>Your Success Starts Here!</h3>
                  <form>
                    <div className="row">
                      <div className="col-lg-6 mb-20">
                        <div className="form-inner">
                          <label>Full Name</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-6 mb-20">
                        <div className="form-inner">
                          <label>Company / Organization *</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-6 mb-20">
                        <div className="form-inner">
                          <label>Phone *</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-6 mb-20">
                        <div className="form-inner">
                          <label>Company email *</label>
                          <input type="email" />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label>Your Subject *</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-30">
                        <div className="form-inner">
                          <label>Message *</label>
                          <textarea defaultValue={""} />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-inner">
                          <button
                            className="primary-btn2"
                            type="submit"
                            data-text="Submit Now"
                          >
                            <span>Submit Now</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <footer className="footer-section">
        <div className="container">
          <div className="footer-top">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="footer-widget">
                  <div className="widget-title">
                    <h4>Our Solutions</h4>
                  </div>
                  <div className="menu-container">
                    <ul className="widget-list">
                      <li>
                        <Link href="/service/service-details">
                          Managed Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/service/service-details">
                          IT Consulting &amp; Advisory
                        </Link>
                      </li>
                      <li>
                        <Link href="/service/service-details">
                          Cyber Security
                        </Link>
                      </li>
                      <li>
                        <Link href="/service/service-details">
                          Web Development
                        </Link>
                      </li>
                      <li>
                        <Link href="/service/service-details">
                          Mobile Development
                        </Link>
                      </li>
                    </ul>
                    <ul className="widget-list">
                      <li>
                        <Link href="/service/service-details">
                          Cloud Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/service/service-details">
                          Network Connectivity
                        </Link>
                      </li>
                      <li>
                        <Link href="/service/service-details">
                          ERP Solutions
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex justify-content-lg-center justify-content-md-end justify-content-sm-start">
                <div className="footer-logo-area">
                  <div className="logo-bg">
                    <img
                      src="assets/img/home1/footer-logo-bg.png"
                      alt=""
                      className="light"
                    />
                    <img
                      src="assets/img/home1/footer-logo-bg-dark.png"
                      alt=""
                      className="dark"
                    />
                  </div>
                  <div className="logo">
                    <img
                      src="assets/img/footer-logo.svg"
                      alt=""
                      className="light"
                    />
                    <img
                      src="assets/img/footer-logo-dark.svg"
                      alt=""
                      className="dark"
                    />
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-8
               d-flex justify-content-lg-end justify-content-sm-end"
              >
                <div className="footer-widget">
                  <div className="widget-title two">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                      >
                        <g>
                          <path d="M6.6304 0.338424C6.67018 -0.112811 7.32982 -0.112807 7.3696 0.338428L7.72654 4.38625C7.75291 4.68505 8.10454 4.83069 8.33443 4.63804L11.4491 2.02821C11.7963 1.73728 12.2627 2.20368 11.9718 2.55089L9.36197 5.66556C9.1693 5.89546 9.31496 6.24709 9.61374 6.27346L13.6615 6.6304C14.1128 6.67018 14.1128 7.32982 13.6615 7.3696L9.61374 7.72654C9.31496 7.75291 9.1693 8.10454 9.36197 8.33443L11.9718 11.4491C12.2627 11.7963 11.7963 12.2627 11.4491 11.9718L8.33443 9.36197C8.10454 9.1693 7.75291 9.31496 7.72654 9.61374L7.3696 13.6615C7.32982 14.1128 6.67018 14.1128 6.6304 13.6615L6.27346 9.61374C6.24709 9.31496 5.89546 9.1693 5.66556 9.36197L2.55089 11.9718C2.20368 12.2627 1.73729 11.7963 2.02822 11.4491L4.63804 8.33443C4.83069 8.10454 4.68504 7.75291 4.38625 7.72654L0.338424 7.3696C-0.112811 7.32982 -0.112807 6.67018 0.338428 6.6304L4.38625 6.27346C4.68505 6.24709 4.83069 5.89546 4.63804 5.66556L2.02821 2.55089C1.73728 2.20368 2.20368 1.73729 2.55089 2.02822L5.66556 4.63804C5.89546 4.83069 6.24709 4.68504 6.27346 4.38625L6.6304 0.338424Z" />
                        </g>
                      </svg>
                      They told about
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                      >
                        <g>
                          <path d="M6.6304 0.338424C6.67018 -0.112811 7.32982 -0.112807 7.3696 0.338428L7.72654 4.38625C7.75291 4.68505 8.10454 4.83069 8.33443 4.63804L11.4491 2.02821C11.7963 1.73728 12.2627 2.20368 11.9718 2.55089L9.36197 5.66556C9.1693 5.89546 9.31496 6.24709 9.61374 6.27346L13.6615 6.6304C14.1128 6.67018 14.1128 7.32982 13.6615 7.3696L9.61374 7.72654C9.31496 7.75291 9.1693 8.10454 9.36197 8.33443L11.9718 11.4491C12.2627 11.7963 11.7963 12.2627 11.4491 11.9718L8.33443 9.36197C8.10454 9.1693 7.75291 9.31496 7.72654 9.61374L7.3696 13.6615C7.32982 14.1128 6.67018 14.1128 6.6304 13.6615L6.27346 9.61374C6.24709 9.31496 5.89546 9.1693 5.66556 9.36197L2.55089 11.9718C2.20368 12.2627 1.73729 11.7963 2.02822 11.4491L4.63804 8.33443C4.83069 8.10454 4.68504 7.75291 4.38625 7.72654L0.338424 7.3696C-0.112811 7.32982 -0.112807 6.67018 0.338428 6.6304L4.38625 6.27346C4.68505 6.24709 4.83069 5.89546 4.63804 5.66556L2.02821 2.55089C1.73728 2.20368 2.20368 1.73729 2.55089 2.02822L5.66556 4.63804C5.89546 4.83069 6.24709 4.68504 6.27346 4.38625L6.6304 0.338424Z" />
                        </g>
                      </svg>
                    </span>
                    <h3>What Sets Us Apart?</h3>
                  </div>
                  <div className="content">
                    <p>
                      Welcome to EvoShift, where innovation meets our passion in a
                      journey that started with a simple idea and a shared
                      dream.
                    </p>
                  </div>
                  <ul className="rating-area">
                    <li>
                      <a href="https://clutch.co/" className="single-rating">
                        <div className="review">
                          <span>Review On</span>
                          <img
                            src="assets/img/home1/icon/clutch-logo.svg"
                            alt=""
                            className="logo-dark"
                          />
                          <img
                            src="assets/img/home1/icon/clutch-logo-white.svg"
                            alt=""
                            className="logo-light"
                          />
                        </div>
                        <div className="rating">
                          <ul className="star">
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-half" />
                            </li>
                          </ul>
                          <span>(50 reviews)</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.google.com/"
                        className="single-rating google"
                      >
                        <div className="review">
                          <span>Review On</span>
                          <img
                            src="assets/img/home1/icon/google-logo.svg"
                            alt=""
                          />
                        </div>
                        <div className="rating">
                          <ul className="star">
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-half" />
                            </li>
                          </ul>
                          <span>(50 reviews)</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-area">
            <div className="hotline-area">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={33}
                  height={33}
                  viewBox="0 0 33 33"
                >
                  <g>
                    <path d="M26.0803 20.4417C25.4047 19.7383 24.5898 19.3622 23.7262 19.3622C22.8695 19.3622 22.0477 19.7313 21.3442 20.4348L19.1433 22.6287C18.9622 22.5312 18.7811 22.4407 18.607 22.3501C18.3563 22.2248 18.1195 22.1063 17.9175 21.981C15.8559 20.6716 13.9823 18.9652 12.1854 16.7573C11.3148 15.6569 10.7297 14.7305 10.3049 13.7903C10.876 13.2679 11.4053 12.7247 11.9207 12.2023C12.1157 12.0073 12.3108 11.8053 12.5058 11.6103C13.9684 10.1477 13.9684 8.25321 12.5058 6.79058L10.6044 4.88917C10.3885 4.67326 10.1656 4.45038 9.95664 4.22751C9.53874 3.79569 9.09996 3.34993 8.64724 2.93204C7.97165 2.26341 7.16372 1.9082 6.31401 1.9082C5.46429 1.9082 4.64244 2.26341 3.94595 2.93204C3.93899 2.939 3.93899 2.939 3.93202 2.94597L1.56396 5.33492C0.672459 6.22643 0.164023 7.31295 0.0525852 8.57359C-0.114572 10.6073 0.484407 12.5018 0.944089 13.7415C2.0724 16.7852 3.7579 19.606 6.27222 22.6287C9.32283 26.2713 12.9933 29.1478 17.1862 31.1746C18.7881 31.9338 20.9263 32.8323 23.3153 32.9855C23.4615 32.9924 23.6148 32.9994 23.7541 32.9994C25.3629 32.9994 26.7141 32.4213 27.7728 31.2721C27.7798 31.2582 27.7937 31.2512 27.8006 31.2373C28.1628 30.7985 28.5807 30.4015 29.0195 29.9767C29.319 29.6911 29.6254 29.3916 29.9249 29.0782C30.6145 28.3608 30.9766 27.525 30.9766 26.6683C30.9766 25.8047 30.6075 24.9759 29.904 24.2794L26.0803 20.4417ZM28.5737 27.7758C28.5668 27.7758 28.5668 27.7827 28.5737 27.7758C28.3021 28.0683 28.0235 28.3329 27.724 28.6255C27.2713 29.0573 26.8116 29.51 26.3798 30.0184C25.6764 30.7707 24.8475 31.1259 23.761 31.1259C23.6565 31.1259 23.5451 31.1259 23.4406 31.1189C21.3721 30.9866 19.4498 30.1786 18.008 29.4891C14.0659 27.5807 10.6044 24.8714 7.72788 21.4377C5.35286 18.5752 3.76486 15.9285 2.71317 13.0868C2.06543 11.3526 1.82863 10.0014 1.9331 8.72682C2.00275 7.91193 2.31617 7.23633 2.89425 6.65825L5.26928 4.28323C5.61056 3.96284 5.97273 3.78872 6.32794 3.78872C6.76673 3.78872 7.12193 4.05339 7.34481 4.27626C7.35177 4.28323 7.35874 4.29019 7.3657 4.29716C7.79056 4.69415 8.19452 5.10508 8.61938 5.54387C8.83529 5.76675 9.05817 5.98962 9.28104 6.21946L11.1825 8.12087C11.9207 8.85915 11.9207 9.54171 11.1825 10.28C10.9805 10.482 10.7855 10.6839 10.5835 10.879C9.99843 11.4779 9.44124 12.0351 8.83529 12.5784C8.82136 12.5923 8.80743 12.5993 8.80047 12.6132C8.20149 13.2122 8.31293 13.7972 8.43829 14.1942C8.44526 14.2151 8.45222 14.236 8.45919 14.2569C8.9537 15.4549 9.65018 16.5832 10.7088 17.9274L10.7158 17.9344C12.6381 20.3024 14.6649 22.1481 16.9006 23.562C17.1862 23.7431 17.4787 23.8894 17.7573 24.0287C18.008 24.154 18.2448 24.2724 18.4468 24.3978C18.4747 24.4117 18.5025 24.4326 18.5304 24.4465C18.7672 24.5649 18.9901 24.6207 19.2199 24.6207C19.798 24.6207 20.1602 24.2585 20.2786 24.1401L22.6606 21.7581C22.8974 21.5213 23.2735 21.2357 23.7123 21.2357C24.1441 21.2357 24.4993 21.5074 24.7152 21.7442C24.7222 21.7511 24.7222 21.7511 24.7291 21.7581L28.5668 25.5958C29.2842 26.3062 29.2842 27.0375 28.5737 27.7758Z" />
                    <path d="M17.834 7.8506C19.6588 8.15705 21.3164 9.0207 22.6398 10.344C23.9631 11.6673 24.8198 13.325 25.1332 15.1498C25.2098 15.6095 25.6068 15.9299 26.0595 15.9299C26.1152 15.9299 26.164 15.9229 26.2197 15.9159C26.7351 15.8323 27.0764 15.3448 26.9928 14.8294C26.6167 12.6215 25.572 10.6087 23.977 9.01373C22.3821 7.41877 20.3692 6.37404 18.1614 5.99794C17.646 5.91436 17.1654 6.25564 17.0748 6.76408C16.9843 7.27251 17.3186 7.76702 17.834 7.8506Z" />
                    <path d="M32.9617 14.557C32.3418 10.9213 30.6285 7.61301 27.9957 4.98029C25.363 2.34757 22.0547 0.634209 18.419 0.0143347C17.9106 -0.0762086 17.43 0.272035 17.3395 0.780471C17.2559 1.29587 17.5972 1.77645 18.1126 1.86699C21.3582 2.41722 24.3183 3.95645 26.6724 6.30362C29.0265 8.65774 30.5588 11.6178 31.109 14.8634C31.1857 15.3231 31.5827 15.6435 32.0354 15.6435C32.0911 15.6435 32.1398 15.6365 32.1956 15.6296C32.704 15.553 33.0522 15.0654 32.9617 14.557Z" />
                  </g>
                </svg>
              </div>
              <div className="content">
                <span>Call Any Time</span>
                <h6>
                  <a href="tel:2-965-871-8617">2-965-871-8617</a>
                </h6>
              </div>
            </div>
            <div className="hotline-area">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={33}
                  height={33}
                  viewBox="0 0 33 33"
                >
                  <g>
                    <path d="M16.4999 0C9.77802 0 4.30957 5.46845 4.30957 12.1904C4.30957 14.4033 5.30201 16.7832 5.3436 16.8836C5.66413 17.6445 6.2966 18.8262 6.75266 19.5189L15.1109 32.1832C15.453 32.7024 15.9592 33 16.4999 33C17.0406 33 17.5469 32.7024 17.8889 32.184L26.2479 19.5189C26.7047 18.8262 27.3364 17.6445 27.657 16.8836C27.6986 16.784 28.6903 14.404 28.6903 12.1904C28.6903 5.46845 23.2218 0 16.4999 0ZM26.3347 16.3272C26.0486 17.0091 25.4598 18.1084 25.0504 18.7294L16.6914 31.3945C16.5265 31.6447 16.4741 31.6447 16.3092 31.3945L7.95018 18.7294C7.54073 18.1084 6.95201 17.0084 6.66589 16.3265C6.6537 16.2971 5.74373 14.1064 5.74373 12.1904C5.74373 6.25939 10.569 1.43416 16.4999 1.43416C22.4309 1.43416 27.2561 6.25939 27.2561 12.1904C27.2561 14.1093 26.344 16.3057 26.3347 16.3272Z" />
                    <path d="M16.5001 5.7373C12.9412 5.7373 10.0464 8.63287 10.0464 12.191C10.0464 15.7492 12.9412 18.6447 16.5001 18.6447C20.059 18.6447 22.9538 15.7492 22.9538 12.191C22.9538 8.63287 20.059 5.7373 16.5001 5.7373ZM16.5001 17.2106C13.7329 17.2106 11.4805 14.9589 11.4805 12.191C11.4805 9.42309 13.7329 7.17146 16.5001 7.17146C19.2673 7.17146 21.5197 9.42309 21.5197 12.191C21.5197 14.9589 19.2673 17.2106 16.5001 17.2106Z" />
                  </g>
                </svg>
              </div>
              <div className="content">
                <span>Address</span>
                <h6>
                  <a href="https://www.google.com/maps/place/Egens+Lab/@23.8340712,90.3631117,17z/data=!3m1!4b1!4m6!3m5!1s0x3755c14c8682a473:0xa6c74743d52adb88!8m2!3d23.8340663!4d90.3656866!16s%2Fg%2F11rs9vlwsk?entry=ttu">
                    Dhaka, Bangladesh
                  </a>
                </h6>
              </div>
            </div>
            <div className="hotline-area">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={33}
                  height={33}
                  viewBox="0 0 33 33"
                >
                  <g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M32.9891 1.18398C33.0171 0.995671 32.9925 0.803292 32.918 0.628097C32.8435 0.452902 32.722 0.301711 32.567 0.191227C32.4121 0.0808885 32.2296 0.0155543 32.0399 0.00245033C31.8501 -0.0106536 31.6604 0.0289832 31.4918 0.116977L0.554265 16.2732C0.376261 16.3673 0.229594 16.5113 0.132265 16.6876C0.0349358 16.8638 -0.00882138 17.0646 0.00636356 17.2654C0.0215485 17.4662 0.0950149 17.6581 0.217747 17.8177C0.340478 17.9773 0.507135 18.0976 0.697265 18.1639L9.29789 21.1036L27.6143 5.44235L13.4408 22.5185L27.8549 27.4451C27.9979 27.4932 28.1497 27.5094 28.2997 27.4926C28.4496 27.4758 28.5941 27.4265 28.723 27.348C28.8519 27.2696 28.962 27.1639 29.0458 27.0384C29.1296 26.9129 29.1849 26.7706 29.2079 26.6215L32.9891 1.18398ZM28.2196 26.469C28.2195 26.4693 28.2196 26.4688 28.2196 26.469L32 1.03696C32.0009 1.03102 32.0001 1.02494 31.9978 1.0194M28.2196 26.469C28.2187 26.4738 28.2167 26.4792 28.214 26.4833C28.2112 26.4876 28.2074 26.4912 28.203 26.4939C28.1986 26.4965 28.1937 26.4982 28.1885 26.4988C28.1837 26.4993 28.1788 26.4989 28.1741 26.4974C28.1739 26.4973 28.1744 26.4975 28.1741 26.4974L15.1365 22.0413L28.3837 6.08103L26.9644 4.68231L9.08156 19.9729L1.02623 17.2195C1.02595 17.2194 1.02651 17.2196 1.02623 17.2195C1.02033 17.2173 1.01432 17.2131 1.01047 17.2081C1.00643 17.2029 1.00401 17.1966 1.00352 17.19C1.00302 17.1834 1.00445 17.1768 1.00766 17.171C1.01073 17.1654 1.01531 17.1608 1.02086 17.1577C1.02064 17.1578 1.02109 17.1576 1.02086 17.1577L31.9544 1.00355C31.9543 1.00357 31.9544 1.00352 31.9544 1.00355C31.9594 1.00093 31.9653 0.999681 31.971 1.00007M13.0314 30.5897C13.0316 30.5963 13.0337 30.6027 13.0376 30.6081C13.0417 30.6136 13.0473 30.6177 13.0538 30.6199C13.0603 30.622 13.0674 30.622 13.0739 30.6199C13.0802 30.6179 13.0857 30.6141 13.0898 30.6089C13.0896 30.6091 13.0899 30.6087 13.0898 30.6089L16.011 26.6335L13.0314 25.6152V30.5897ZM12.0314 24.2166V30.5939C12.0324 30.8106 12.1017 31.0215 12.2292 31.1967C12.3568 31.3719 12.5363 31.5025 12.7422 31.5701C12.9482 31.6376 13.1702 31.6386 13.3767 31.573C13.5833 31.5073 13.764 31.3784 13.8931 31.2044L17.6235 26.1279L12.0314 24.2166Z"
                    />
                  </g>
                </svg>
              </div>
              <div className="content">
                <span>Say Hello</span>
                <h6>
                  <a href="mailto:info@example.com">info@example.com</a>
                </h6>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="copyright-area">
              <p>
                Copyright 2024 <a href="#">EvoShift</a> | Design By{" "}
                <a href="https://www.egenslab.com/">Egens Lab</a>
              </p>
            </div>
            <div className="footer-bottom-right">
              <ul>
                <li>
                  <a href="#">Support Policy</a>
                </li>
                <li>
                  <a href="#">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer> */}
      <style jsx global>{`
        .clamping-5 {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 5; /* number of lines to show */
          -webkit-box-orient: vertical;
        }
      `}</style>
    </MainLayout>
  );
};

export default AboutpageMain;
