import React from "react";
import bannerImage from "../assets/images/banner-img-02.svg";
import Tick from "../assets/images/tick.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartPie,
  faDesktop,
  faPenFancy,
  faRankingStar,
  faSlidersH,
} from "@fortawesome/free-solid-svg-icons";

const aboutList = [
  { description: "Innovative websites, exceptional user experiences." },
  { description: "Provide smart and flexible digital services" },
  { description: "Creative Designs" },
];

const About = () => {
  return (
    <div id="about" className="text-center">
      <div className="container">
        <div class="row d-flex align-items-center justify-content-center py-5">
          <div class="col-lg-6 text-start">
            <h1 class="h2 py-5 text-primary typo-space-line">About Us</h1>
            <p class="light-300">
              Accolades, the best digital marketing agency in Kerala that
              properly takes care of too many of internet marketing solutions
              for your premium brand. Be it the innovative designs, content,
              Google Ads, SEO Service, Social Media Marketing or other Web
              services, everything is available under one roof . This effective
              tactic allows us to scale our diplomatic services to develop a
              strategy for your brand that is refined over a course of time so
              that it benefits your business perfectly. We strictly believe in
              maximizing your sales, captivate appropriate traffic to your
              official website, and turn visitors into your potential customers.
              Regardless of the business’s size, Internet marketing gives access
              to the mass market at result-oriented pricing, and it inculcates a
              personal style of successful marketing.
            </p>
          </div>
          <div class="col-lg-6">
            <img src={bannerImage} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div class="py-5">
              <h1 class="h2 text-left py-5 text-primary typo-space-line">
                The ideal platform for all your Queries
              </h1>
              <div class="creative-content row py-3">
                <p class="text-muted light-300">
                  The ultimatum of our successful company is to adequately
                  provide our prospective clients with the required service that
                  they promptly demand from us. To procure the desired result we
                  earnestly strive with all our collaborative effort. It’s our
                  genuine commitment and ultimate responsibility to amend the
                  success rate for all our specific clients.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="carrot-wrapper">
              {aboutList.map((item, index) => (
                <div key={index} className="carrot">
                  <img
                    style={{ width: "30px", marginRight: "10px" }}
                    src={Tick}
                    alt="Tick"
                  />
                  <p className="carrot-text">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          <h1 class="h2 innovative-header text-primary typo-space-line text-center">
            Innovative Inventions with Quality
          </h1>
          <div class="row text-center">
            <div class="col-md-3 mb-3">
              <div class="card partner-wap py-5">
                <a href="#">
                  <FontAwesomeIcon color="white" icon={faChartPie} size="5x" />
                  <p className="text-white">PERFORMANCE MARKETING</p>
                </a>
              </div>
            </div>
            <div class="col-md-3 mb-3">
              <div class="card partner-wap py-5">
                <a href="#">
                  <FontAwesomeIcon color="white" icon={faPenFancy} size="5x" />
                  <p className="text-white">CONTENT MARKETING</p>
                </a>
              </div>
            </div>
            <div class="col-md-3 mb-3">
              <div class="card partner-wap py-5">
                <a href="#">
                  <FontAwesomeIcon color="white" icon={faDesktop} size="5x" />
                  <p className="text-white">CONCEPTUALIZATION</p>
                </a>
              </div>
            </div>
            <div class="col-md-3 mb-3">
              <div class="card partner-wap py-5">
                <a href="#">
                  <FontAwesomeIcon
                    color="white"
                    icon={faRankingStar}
                    size="5x"
                  />
                  <p className="text-white">BRANDING</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
