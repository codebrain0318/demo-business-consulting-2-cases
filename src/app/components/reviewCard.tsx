import React from 'react';

interface ReviewData {
  name: string;
  desc: string;
  managerName: string;
  position: string;
}

interface ReviewCardProps {
  data: ReviewData;
  i: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ data, i }) => {
  return (
    <div key={i} className="col-lg-6 position-relative">
      <div className="custom-testimonial-container bg-color-light mb-5">
        <div className="testimonial custom-testimonial testimonial-style-2 mb-0">
          <div className="d-none d-sm-flex align-items-center justify-content-center custom-testimonial-right bg-color-light p-absolute z-index-1">
            <img
              src="img/demos/business-consulting-2/logos/case-logo-1.png"
              alt="Bullseye"
            />
            <a
              href="demo-business-consulting-2-cases-detail.html"
              className="d-block btn btn-primary custom-button-testimonial-right text-center text-uppercase text-decoration-none border-0 p-0 font-weight-semibold p-absolute"
            >
              read more
            </a>
          </div>
          <blockquote className="px-0 pb-5">
            <h4 className="text-color-secondary font-weight-bold text-start" style={{ fontFamily: "__Inter_e66fe9, __Inter_Fallback_e66fe9" }}>
              {data.name}
            </h4>
            <p className="mb-0 text-start text-3" style={{ fontFamily: "__Inter_e66fe9, __Inter_Fallback_e66fe9" }}>
              {data.desc}
              <a
                href="demo-business-consulting-2-cases-detail.html"
                className="font-weight-bold text-uppercase text-decoration-none d-block d-sm-none mt-3"
              >
                read more +
              </a>
            </p>
          </blockquote>
          <div className="testimonial-arrow-down" />
          <div className="testimonial-author d-flex flex-row justify-content-start align-items-center">
            <img
              src="img/avatars/avatar-3.jpg"
              className="img-fluid rounded-circle m-0 me-3"
              alt=""
            />
            <p>
              <strong className="font-weight-extra-bold text-start text-color-secondary mb-1">
                {data.managerName}
              </strong>
              <span className="text-uppercase text-start">{data.position}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
