import React from "react";
import Marquee from "react-fast-marquee";
import urlFor from "../../lib/urlFor";
import Image from "next/image";
const LogoMarquee = ({ brandsData }) => {
  return (
    <div
      className="logo-section mb-110 wow animate fadeInUp"
      data-wow-delay="200ms"
      data-wow-duration="1500ms"
    >
      <div className="container-fluid">
        <div className="logo-wrap">
          <div className="logo-title">
            <h6>We Worked With Global Largest Brand</h6>
          </div>
          <div className="logo-area">
            <div className="marquee_text2">
              <Marquee>
                {brandsData.map((item, index) => {
                  return (
                    <Image
                      key={index}
                      src={urlFor(item?.images[0])?.url()}
                      alt=""
                      width={200}
                      height={100}
                      style={{ maxHeight: 200 }}
                    />
                  );
                })}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;
