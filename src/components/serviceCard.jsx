import React from "react";

const ServiceCard = ({ title, content, image, onClick }) => {
  return (
    <div onClick={onClick} className="col-lg-4">
      <div
        className="service-item wow bounceInUp"
        data-wow-duration="1s"
        data-wow-delay="0.3s"
      >
        <div className="row">
          <div className="col-lg-4">
            <div className="icon">
              <img src={image} alt={title} />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="right-content">
              <h4>{title}</h4>
              <p className="mb-0">{content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
