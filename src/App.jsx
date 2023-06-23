import React, { useEffect, useState } from "react";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Gallery } from "./pages/Gallery";
import JsonData from "./data/data.json";
import { Navigation } from "./components/navigation";
import About from "./pages/About";
import Footer from "./components/footer";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import ContactPage from "./pages/Contact";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route
          path="/gallery"
          element={<Gallery data={landingPageData.Gallery} />}
        />
        <Route
          path="/contact-us"
          element={<ContactPage data={landingPageData.Contact} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
