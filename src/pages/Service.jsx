import React, { useState } from "react";
import dmImage from "../assets/images/ktdc.webp";
import brandingImage from "../assets/images/famplastic.webp";
import appImage from "../assets/images/appdevelopment.jpeg";
import ServiceCard from "../components/serviceCard";
import Modal from "../components/modal";
import ContactForm from "../components/contactForm";

const serviceList = [
  {
    title: "Digital Marketing",
    content:
      "Get ROI through digital marketing services, drive successful online marketing campaigns with our digital marketing services.",
    image: dmImage,
  },
  {
    title: "Branding",
    content:
      "Whether you are looking for website design services or the management of digital advertising campaigns, we are here to help.",
    image: brandingImage,
  },
  {
    title: "Web/App Development",
    content:
      "Get Customized Website Design specific to your business. We design cross-browser compatibility websites with the latest features.",
    image: appImage,
  },
];

const Service = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  };

  return (
    <div id="services" className="our-services section">
      <Modal
        showFooter={false}
        show={show}
        onClose={() => setShow(false)}
        title="Enquiry Form"
      >
        <ContactForm />
      </Modal>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 offset-lg-3">
            <div
              className="section-heading wow bounceIn"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <h1>Our Services</h1>
              <h6>
                Discover What We Do &amp; <span>Offer</span> To Our{" "}
                <em>Clients</em>
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          {serviceList.map((item, index) => (
            <ServiceCard
              key={index}
              title={item.title}
              content={item.content}
              image={item.image}
              onClick={handleClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
