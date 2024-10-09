"use client";
import React from "react";
import urlFor from "../../../../lib/urlFor";
import MainLayout from "../../../../components/layout/MainLayout";
import Home5Workprocess from "../../../../components/workProcess/Home5Workprocess";
import { PortableText } from "@portabletext/react";

import { RichTextComponents } from "../../../../components/RichTextComponents";
import Link from "next/link";

export default function mainService({ data, contact, services }) {
  console.log(data);
  return (
    <MainLayout contact={contact} pageTitle={data?.heading}>
      <div className="case-study-details-page pt-120 mb-120">
        <div className="container ">
          <div className="row g-lg-4 gy-5 mb-80 ">
            {/* //sidebaark */}
            <div className="col-lg-4">
              <div
                className="case-sidebar"
                style={{ textOverflow: "ellipsis", overflow: "hidden" }}
              >
                <div className="case-info-wrap mb-40">
                  <h4>All Services</h4>
                  <ul className="case-info">
                    {services.map((service, idx) => (
                      <li key={idx}>
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={34}
                            height={23}
                            viewBox="0 0 34 23"
                            fill="none"
                          >
                            <path
                              d="M-4.5897e-07 11.5L33 11.5M33 11.5C28.6786 10.8824 20.1536 7.91765 20.625 1M33 11.5C28.4821 12.7353 19.6821 16.5647 20.625 22"
                              strokeWidth={2}
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className="content">
                          <Link href={`/service/${service?.slug?.current}`}>
                            <h5>{service?.heading}</h5>
                          </Link>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="case-thumb">
                <img src={urlFor(data.mainImage)?.url()} alt="" />
              </div>
              <div className="case-details-content">
                <h3>{data?.title}</h3>

                <div className=" mt-24 mx-12">
                  <PortableText
                    value={data?.body}
                    components={RichTextComponents}
                  />
                </div>
              </div>

              <div className="row gap-5 gap-lg-0" >
                {data?.cards.map((card, idx) => (
                  <div key={idx} className="flip-card col-lg-4 ">
                    <div className="flip-card-inner">
                      <div
                        className="flip-card-front"
                        style={{
                          backgroundImage: `url(${urlFor(data.mainImage)?.url()})`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center center",
                          backgroundSize: "cover",
                        }}
                      >
                        {/* <img
                        src={urlFor(data.mainImage)?.url()}
                        alt=""
                        style={{ width: 300, height: 300 }}
                    />*/}
                      </div>
                      <div className="flip-card-back">
                        <h3 style={{ color: "white" }}>{card?.title}</h3>
                        <p>{card?.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
