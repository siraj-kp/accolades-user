import React, { useEffect, useState } from "react";
import { Header } from "../components/header";
import { Preface } from "../components/preface";
import { Services } from "../components/services";
import { Testimonials } from "../components/testimonials";
import { Contact } from "../components/contact";
import JsonData from "../data/data.json";

const Home = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>
      <Header data={landingPageData.Header} />
      {/* <Features data={landingPageData.Features} /> */}
      <Preface data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      {/* <Gallery data={landingPageData.Gallery} /> */}
      <Testimonials data={landingPageData.Testimonials} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default Home;
