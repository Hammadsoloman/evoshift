import MainLayout from "../../../components/layout/MainLayout";
import React from "react";

const FaqPageMain = ({ data, contact }) => {
  return (
    <MainLayout contact={contact}>
      <div className="faq-section scroll-margin pt-120 mb-120" id="faq-section">
        <div className="container">
          <div className="content">
            <p>
            Do you have any question? We have some answers! Bellow you will find some of our frequently asked questions. If you still can’t find the answer to your question feel free to contact us! We would love to help. 
            </p>
          </div>
          <div className="row g-4 mb-120">
            <div className="col-lg-4 d-flex justify-content-lg-center align-items-lg-center">
              <div className="verticle-text">
                <h2>{data?.heading}</h2>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="faq-content style-2">
                <div className="accordion" id="accordionExample">
                  {data?.list?.map((e, i) => (
                    <div
                      className="accordion-item my-3 border-0 rounded-4"
                      key={i}
                    >
                      <h2 className="accordion-header" id={"heading" + i}>
                        <button
                          className="accordion-button fw-bold"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={"#collapse" + i}
                          aria-expanded="false"
                          aria-controls={"collapse" + i}
                        >
                          {e.question}
                        </button>
                      </h2>
                      <div
                        id={"collapse" + i}
                        className="accordion-collapse collapse "
                        aria-labelledby={"heading" + i}
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <div className="row my-4 align-items-center">
                            <div className="col-md-9">{e.answer}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default FaqPageMain;
